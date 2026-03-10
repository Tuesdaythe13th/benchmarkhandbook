/*
 * BenchmarkSelector — Interactive 7-Step Evaluation Design Tool
 * Design: Industrial Manifesto Brutalism
 * Orange #FF4D00 | Black #000 | White #FFF
 * Features: 7-step config, risk engine, validity checklist, export JSON/MD
 */

import { useState, useCallback } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const Q0_OPTIONS = ["Base LM", "Instruct / Chat", "Agentic", "RAG", "Multi-Agent System"];
const Q1_OPTIONS = ["Reasoning", "Tool Use / Function Calling", "Safety & Alignment", "Security / Red-Teaming", "Cultural & Multilingual", "Code Generation", "Math & Quantitative", "Knowledge Retrieval"];
const Q2_OPTIONS = ["Text-Only", "Vision-Language", "Audio / Speech", "Embodied / Robotics", "Multimodal Stateful"];
const Q3_OPTIONS = [
  { label: "Alpha — Fully Open", desc: "Public dataset, assume contamination. Use for ablations only." },
  { label: "Beta — Gated / Hashed", desc: "Encrypted or access-controlled. Canary strings present." },
  { label: "Gamma — Dynamic / Live", desc: "Continuously refreshed. Near-zero contamination risk." },
];
const Q4_OPTIONS = ["Academic Research", "CI/CD Pipeline", "Regulatory Audit", "Product Red-Teaming", "Pre-Deployment Safety Gate", "Public Leaderboard"];
const Q5_OPTIONS = ["Automated (Exact Match / Code)", "LLM-as-Judge", "Human Annotation", "Composite (Hybrid)"];
const Q6_OPTIONS = ["Uniplex / Western-Centric (WEIRD)", "Multiplex / Culturally Diverse"];

const BENCHMARK_STACKS: Record<string, string[]> = {
  "Reasoning": ["GPQA Diamond", "ARC-AGI-2", "ZebraLogic", "MuSR", "BBH"],
  "Tool Use / Function Calling": ["BFCL v3", "ToolBench", "API-Bank", "TAU-Bench"],
  "Safety & Alignment": ["HarmBench", "AILuminate v1.0", "WildGuard", "SafetyBench", "SALAD-Bench"],
  "Security / Red-Teaming": ["HarmBench", "AdvBench", "JailbreakBench", "CyberSecEval 3"],
  "Cultural & Multilingual": ["INCLUDE", "CMMLU", "IndicGenBench", "FLORES-200", "GlobalMMLU"],
  "Code Generation": ["SWE-Bench Verified", "LiveCodeBench Pro", "CodeElo", "HumanEval+", "ResearchCodeBench"],
  "Math & Quantitative": ["AIME 2025", "MATH-500", "OlympiadBench", "MegaMath"],
  "Knowledge Retrieval": ["MMLU-Pro", "HELMET", "MegaScience", "BrowseComp"],
};

const HARNESS_MAP: Record<string, { harness: string; warning: string }> = {
  "Base LM|Reasoning": { harness: "EleutherAI LM Eval Harness", warning: "Construct Drift: Base models may exploit surface patterns." },
  "Agentic|Tool Use / Function Calling": { harness: "AgentBench / TAU-Bench", warning: "Trajectory Validity: Multi-step actions require trajectory-level scoring." },
  "Agentic|Safety & Alignment": { harness: "METR Autonomy Evaluation Suite", warning: "Predictive Validity: Safety scores may not generalize to deployment." },
  "Multi-Agent System|Safety & Alignment": { harness: "METR + AILuminate Composite", warning: "Multi-Agent Collusion: Emergent unsafe behaviors not captured by single-agent evals." },
  "RAG|Knowledge Retrieval": { harness: "RAGAS / TruLens", warning: "Substantive Validity: Retrieval quality confounds generation quality." },
  "Instruct / Chat|Reasoning": { harness: "Inspect AI (UK AISI)", warning: "Contamination Risk: Instruct models trained on reasoning traces." },
  "Instruct / Chat|Safety & Alignment": { harness: "Inspect AI + AILuminate", warning: "False Refusal Rate: Over-refusal is a validity failure, not a safety success." },
  "Base LM|Code Generation": { harness: "EvalPlus / LiveCodeBench", warning: "Memorization Risk: HumanEval is fully saturated. Use LiveCodeBench Pro." },
};

const RISK_FLAGS: Record<string, { level: "critical" | "moderate" | "low"; desc: string }> = {
  "Safety & Alignment": { level: "critical", desc: "Substantive Validity: Safety benchmarks may not predict real-world harm." },
  "Security / Red-Teaming": { level: "critical", desc: "Predictive Validity: Red-teaming results are adversarially brittle." },
  "Regulatory Audit": { level: "critical", desc: "Legal Defensibility: Requires signed attestation and reproducible logs." },
  "Pre-Deployment Safety Gate": { level: "critical", desc: "High-Stakes Context: Requires Human-as-Judge for final sign-off." },
  "Multi-Agent System": { level: "moderate", desc: "Emergent Behavior: Multi-agent interactions produce novel failure modes." },
  "Agentic": { level: "moderate", desc: "Trajectory Validity: Step-level scoring insufficient for long-horizon tasks." },
  "Alpha — Fully Open": { level: "moderate", desc: "Contamination: Public datasets are assumed to be in training data." },
};

const EXTRA_RISKS = [
  { id: "long_horizon", label: "Long-Horizon Memory", level: "moderate" as const },
  { id: "collusion", label: "Multi-Agent Collusion", level: "critical" as const },
  { id: "hardware", label: "Hardware Degradation", level: "low" as const },
  { id: "tradeoff", label: "Safety-Capability Tradeoff", level: "moderate" as const },
];

const CHECKLIST_ITEMS = [
  { id: "c1", phase: "Theoretical Definition", text: "Precisely specify what capability or behavior is being measured." },
  { id: "c2", phase: "Theoretical Definition", text: "Justify why this construct matters for the deployment context." },
  { id: "c3", phase: "Operationalization", text: "Ensure tasks isolate the target construct without confounding variables." },
  { id: "c4", phase: "Operationalization", text: "Construct a representative dataset sampling the full input distribution." },
  { id: "c5", phase: "Operationalization", text: "Prepare for contamination: canary strings, gated access, or dynamic generation." },
  { id: "c6", phase: "External Correlation", text: "Apply significance testing and inter-rater reliability (IRR ≥ 0.7)." },
  { id: "c7", phase: "External Correlation", text: "Conduct error analysis: categorize failure modes across slices." },
  { id: "c8", phase: "External Correlation", text: "Validate that benchmark scores correlate with downstream task performance." },
  { id: "c9", phase: "Measurement Invariance", text: "Test that scores are stable across demographic and geographic subgroups." },
  { id: "c10", phase: "Measurement Invariance", text: "Cultural & Linguistic Robustness: Verify performance parity across languages and locales." },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function getBadgeColor(level: "critical" | "moderate" | "low") {
  if (level === "critical") return { bg: "#FF4D00", color: "#FFFFFF" };
  if (level === "moderate") return { bg: "#000000", color: "#FF4D00" };
  return { bg: "#E5E5E5", color: "#444444" };
}

function getAutoEvaluator(
  q5: string,
  checklistPct: number,
  hasCritical: boolean,
  hasModerate: boolean,
  isMultiplex: boolean
): { label: string; rationale: string } {
  let base = "";
  let rationale = "";

  if (hasCritical) {
    base = "Human-as-Judge";
    rationale = "Critical risks detected (safety, regulatory, or collusion). Human oversight is mandatory. Automated or LLM-based scoring cannot provide legal defensibility in high-stakes contexts.";
  } else if (hasModerate || checklistPct < 60) {
    base = "Hybrid (LLM-as-Judge + Human Spot-Check)";
    rationale = `Moderate risks or incomplete validity checklist (${checklistPct}% complete). LLM-as-Judge is efficient but requires human spot-checks on ≥10% of outputs to detect judge drift and positional bias.`;
  } else if (q5 === "Automated (Exact Match / Code)") {
    base = "Automated";
    rationale = "No critical/moderate risks, checklist ≥60% complete, and automated scoring selected. Suitable for deterministic tasks (code, math, MCQA). Verify with unit tests.";
  } else if (q5 === "LLM-as-Judge") {
    base = "LLM-as-Judge";
    rationale = "No critical risks and checklist ≥60% complete. LLM-as-Judge is appropriate. Use reference-guided prompts, calibrate against human annotations, and monitor for positional/verbosity bias.";
  } else {
    base = "Composite (Hybrid)";
    rationale = "Composite scoring selected. Combine automated metrics (BLEU, ROUGE, pass@k) with LLM-as-Judge for open-ended outputs. Document weighting rationale in the BBOM Report layer.";
  }

  if (isMultiplex) {
    base = "Multiplex " + base;
    rationale += " Cultural axis is Multiplex: ensure annotators include native speakers from target locales. Apply WBI (WEIRD Bias Index) correction.";
  }

  return { label: base, rationale };
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function BenchmarkSelector() {
  const [q0, setQ0] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("Text-Only");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("Uniplex / Western-Centric (WEIRD)");
  const [extraRisks, setExtraRisks] = useState<Set<string>>(new Set());
  const [checklist, setChecklist] = useState<Set<string>>(new Set());
  const [showRationale, setShowRationale] = useState(false);
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const toggleExtraRisk = (id: string) => {
    setExtraRisks(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleChecklist = (id: string) => {
    setChecklist(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Compute risks
  const detectedRisks: Array<{ source: string; level: "critical" | "moderate" | "low"; desc: string }> = [];
  [q1, q4, q0, q3].forEach(val => {
    if (val && RISK_FLAGS[val]) {
      detectedRisks.push({ source: val, ...RISK_FLAGS[val] });
    }
  });
  EXTRA_RISKS.forEach(r => {
    if (extraRisks.has(r.id)) {
      detectedRisks.push({ source: r.label, level: r.level, desc: `User-flagged: ${r.label}` });
    }
  });

  const hasCritical = detectedRisks.some(r => r.level === "critical");
  const hasModerate = detectedRisks.some(r => r.level === "moderate");
  const isMultiplex = q6 === "Multiplex / Culturally Diverse";
  const checklistPct = Math.round((checklist.size / CHECKLIST_ITEMS.length) * 100);
  const recommendedStack = q1 ? (BENCHMARK_STACKS[q1] || []) : [];
  const harnessKey = `${q0}|${q1}`;
  const harness = HARNESS_MAP[harnessKey] || null;
  const autoEval = getAutoEvaluator(q5, checklistPct, hasCritical, hasModerate, isMultiplex);

  const isConfigured = q0 && q1 && q3 && q4 && q5;

  const exportJSON = useCallback(() => {
    const data = {
      generated: new Date().toISOString(),
      source: "Artifex Labs Benchmark Selector v3.0",
      configuration: { q0_architecture: q0, q1_capability: q1, q2_modality: q2, q3_contamination: q3, q4_context: q4, q5_scoring: q5, q6_cultural: q6 },
      extra_risks: Array.from(extraRisks.values()),
      detected_risks: detectedRisks,
      recommended_stack: recommendedStack,
      harness: harness,
      auto_evaluator: autoEval,
      checklist: { completed: Array.from(checklist.values()), total: CHECKLIST_ITEMS.length, pct: checklistPct },
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "artifex-eval-config.json"; a.click();
    URL.revokeObjectURL(url);
  }, [q0, q1, q2, q3, q4, q5, q6, extraRisks, detectedRisks, recommendedStack, harness, autoEval, checklist, checklistPct]);

  const exportMD = useCallback(() => {
    const lines = [
      `# Artifex Labs — Evaluation Design Report`,
      `**Generated:** ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
      `**Source:** Artifex Labs Benchmark Selector v3.0`,
      ``,
      `## Configuration`,
      `| Axis | Selection |`,
      `|------|-----------|`,
      `| Q0 — System Architecture | ${q0 || "—"} |`,
      `| Q1 — Primary Capability | ${q1 || "—"} |`,
      `| Q2 — Modality | ${q2} |`,
      `| Q3 — Contamination Posture | ${q3 || "—"} |`,
      `| Q4 — Operational Context | ${q4 || "—"} |`,
      `| Q5 — Scoring Methodology | ${q5 || "—"} |`,
      `| Q6 — Cultural Axis | ${q6} |`,
      ``,
      `## Risk Assessment`,
      detectedRisks.length === 0 ? `No risks detected.` : detectedRisks.map(r => `- **[${r.level.toUpperCase()}]** ${r.source}: ${r.desc}`).join("\n"),
      ``,
      `## Recommended Benchmark Stack`,
      recommendedStack.length === 0 ? `Select Q1 to generate recommendations.` : recommendedStack.map(b => `- ${b}`).join("\n"),
      ``,
      `## Evaluation Harness`,
      harness ? `**${harness.harness}**\n\n> ⚠️ ${harness.warning}` : `No specific harness mapped for this combination.`,
      ``,
      `## Auto-Evaluator Recommendation`,
      `**${autoEval.label}**`,
      ``,
      `> ${autoEval.rationale}`,
      ``,
      `## Construct Validity Checklist (${checklistPct}% complete)`,
      CHECKLIST_ITEMS.map(item => `- [${checklist.has(item.id) ? "x" : " "}] **${item.phase}:** ${item.text}`).join("\n"),
      ``,
      `## Implementation Roadmap`,
      `1. **SELECT** — Finalize benchmark stack from recommendations above.`,
      `2. **AUDIT** — Complete the Construct Validity Checklist (target: 100%).`,
      `3. **DEPLOY** — Configure the recommended harness with contamination controls.`,
      `4. **DOCUMENT** — File this report in the BBOM Layer 07 (Report) with signed attestation.`,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "artifex-eval-report.md"; a.click();
    URL.revokeObjectURL(url);
  }, [q0, q1, q2, q3, q4, q5, q6, detectedRisks, recommendedStack, harness, autoEval, checklist, checklistPct]);

  const phases = CHECKLIST_ITEMS.map(i => i.phase).filter((v, idx, arr) => arr.indexOf(v) === idx);

  const S = {
    section: { background: "#000000", padding: "5rem 0", borderTop: "2px solid #FF4D00" } as React.CSSProperties,
    wrap: { maxWidth: 1440, margin: "0 auto", padding: "0 2rem" } as React.CSSProperties,
    label: { fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#FF4D00", marginBottom: "0.5rem" },
    h2: { fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase" as const, letterSpacing: "-0.04em", lineHeight: 0.85, color: "#FFFFFF", margin: 0 },
    card: { border: "2px solid #333333", padding: "1.5rem", background: "#111111" } as React.CSSProperties,
    cardOrange: { border: "2px solid #FF4D00", padding: "1.5rem", background: "#111111" } as React.CSSProperties,
    qLabel: { fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#FF4D00", marginBottom: "0.6rem", display: "block" },
    optBtn: (active: boolean) => ({
      fontFamily: "'Space Mono', monospace",
      fontSize: "0.58rem",
      letterSpacing: "0.05em",
      textTransform: "uppercase" as const,
      padding: "0.45rem 0.8rem",
      border: active ? "2px solid #FF4D00" : "1px solid #444444",
      background: active ? "#FF4D00" : "transparent",
      color: active ? "#000000" : "#AAAAAA",
      cursor: "pointer",
      transition: "all 0.1s linear",
      whiteSpace: "nowrap" as const,
    }),
    body: { fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.6, color: "#AAAAAA" } as React.CSSProperties,
    bodyWhite: { fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.6, color: "#FFFFFF" } as React.CSSProperties,
  };

  return (
    <section id="selector" style={S.section}>
      <div style={S.wrap}>
        {/* Header */}
        <div style={{ borderBottom: "2px solid #333333", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <div style={S.label}>SECTION 08 — INTERACTIVE BENCHMARK SELECTOR</div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={S.h2}>EVAL<br /><span style={{ color: "#FF4D00" }}>DESIGN</span><br />TOOL</h2>
            <div style={{ maxWidth: 420 }}>
              <p style={S.body}>
                A 7-axis configuration engine that maps your evaluation requirements to a recommended benchmark stack, harness, and scoring methodology. Complete the Construct Validity Checklist to unlock export.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                {["7-STEP CONFIG", "RISK ENGINE", "VALIDITY CHECKLIST", "EXPORT JSON/MD"].map(t => (
                  <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", padding: "0.2rem 0.5rem", border: "1px solid #FF4D00", color: "#FF4D00" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "2rem", alignItems: "start" }}>
          {/* LEFT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Q0 */}
            <div style={S.card}>
              <span style={S.qLabel}>Q0 — System Architecture</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {Q0_OPTIONS.map(opt => (
                  <button key={opt} onClick={() => setQ0(opt)} style={S.optBtn(q0 === opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* Q1 */}
            <div style={S.card}>
              <span style={S.qLabel}>Q1 — Primary Capability Target</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {Q1_OPTIONS.map(opt => (
                  <button key={opt} onClick={() => setQ1(opt)} style={S.optBtn(q1 === opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div style={S.card}>
              <span style={S.qLabel}>Q2 — Modality</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {Q2_OPTIONS.map(opt => (
                  <button key={opt} onClick={() => setQ2(opt)} style={S.optBtn(q2 === opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div style={S.card}>
              <span style={S.qLabel}>Q3 — Contamination Posture</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {Q3_OPTIONS.map(opt => (
                  <button key={opt.label} onClick={() => setQ3(opt.label)} style={{ ...S.optBtn(q3 === opt.label), display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0.75rem 1rem", textAlign: "left" }}>
                    <span>{opt.label}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: q3 === opt.label ? "#000000" : "#666666", textTransform: "none", letterSpacing: 0, marginTop: "0.25rem" }}>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Q4 */}
            <div style={S.card}>
              <span style={S.qLabel}>Q4 — Operational Context</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {Q4_OPTIONS.map(opt => (
                  <button key={opt} onClick={() => setQ4(opt)} style={S.optBtn(q4 === opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* Q5 */}
            <div style={S.card}>
              <span style={S.qLabel}>Q5 — Scoring Methodology</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {Q5_OPTIONS.map(opt => (
                  <button key={opt} onClick={() => setQ5(opt)} style={S.optBtn(q5 === opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* Q6 */}
            <div style={S.card}>
              <span style={S.qLabel}>Q6 — Cultural & Alignment Axis</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {Q6_OPTIONS.map(opt => (
                  <button key={opt} onClick={() => setQ6(opt)} style={S.optBtn(q6 === opt)}>{opt}</button>
                ))}
              </div>
            </div>

            {/* Extra Risk Toggles */}
            <div style={{ ...S.card, borderColor: "#FF4D00" }}>
              <span style={S.qLabel}>⚠ Extra Risk Factor Toggles</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {EXTRA_RISKS.map(r => {
                  const active = extraRisks.has(r.id);
                  const bc = getBadgeColor(r.level);
                  return (
                    <button
                      key={r.id}
                      onClick={() => toggleExtraRisk(r.id)}
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        padding: "0.45rem 0.8rem",
                        border: active ? `2px solid ${bc.bg}` : "1px solid #444444",
                        background: active ? bc.bg : "transparent",
                        color: active ? bc.color : "#AAAAAA",
                        cursor: "pointer",
                        transition: "all 0.1s linear",
                      }}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Construct Validity Checklist */}
            <div style={S.card}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={S.qLabel}>✓ Oxford Construct Validity Checklist</span>
                <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.5rem", color: checklistPct >= 80 ? "#FF4D00" : "#FFFFFF" }}>{checklistPct}%</span>
              </div>
              {/* Progress bar */}
              <div style={{ height: 6, background: "#333333", marginBottom: "1.5rem", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${checklistPct}%`, background: "#FF4D00", transition: "width 0.3s ease" }} />
              </div>
              {/* Phase tabs */}
              <div style={{ display: "flex", gap: 0, border: "1px solid #444444", marginBottom: "1rem" }}>
                {phases.map(ph => (
                  <button
                    key={ph}
                    onClick={() => setActivePhase(activePhase === ph ? null : ph)}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.5rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      padding: "0.35rem 0.6rem",
                      border: "none",
                      borderRight: "1px solid #444444",
                      background: activePhase === ph ? "#FF4D00" : "transparent",
                      color: activePhase === ph ? "#000000" : "#666666",
                      cursor: "pointer",
                      flex: 1,
                    }}
                  >
                    {ph.split(" ")[0]}
                  </button>
                ))}
              </div>
              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {CHECKLIST_ITEMS
                  .filter(item => !activePhase || item.phase === activePhase)
                  .map(item => {
                    const done = checklist.has(item.id);
                    return (
                      <label
                        key={item.id}
                        style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", cursor: "pointer" }}
                      >
                        <div
                          onClick={() => toggleChecklist(item.id)}
                          style={{
                            width: 16, height: 16, border: done ? "2px solid #FF4D00" : "2px solid #444444",
                            background: done ? "#FF4D00" : "transparent",
                            flexShrink: 0, marginTop: 2, cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}
                        >
                          {done && <span style={{ color: "#000000", fontSize: "0.6rem", fontWeight: 900 }}>✓</span>}
                        </div>
                        <div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#FF4D00", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{item.phase}</div>
                          <div style={{ ...S.body, color: done ? "#FFFFFF" : "#888888" }}>{item.text}</div>
                        </div>
                      </label>
                    );
                  })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN — Results Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", position: "sticky", top: 90 }}>

            {/* Risk Assessment */}
            <div style={{ border: "2px solid #FF4D00", padding: "1.25rem", background: "#111111" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#FF4D00", marginBottom: "1rem", textTransform: "uppercase" }}>
                ⚠ Risk Assessment
              </div>
              {detectedRisks.length === 0 ? (
                <p style={{ ...S.body, color: "#555555" }}>Configure Q1 and Q4 to detect risks.</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {detectedRisks.map((r, i) => {
                    const bc = getBadgeColor(r.level);
                    return (
                      <div key={i} style={{ borderLeft: `3px solid ${bc.bg}`, paddingLeft: "0.75rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", background: bc.bg, color: bc.color, padding: "0.1rem 0.4rem", letterSpacing: "0.06em" }}>{r.level.toUpperCase()}</span>
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.04em" }}>{r.source}</span>
                        </div>
                        <p style={{ ...S.body, margin: 0, fontSize: "0.75rem" }}>{r.desc}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Recommended Stack */}
            <div style={S.card}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#FF4D00", marginBottom: "1rem", textTransform: "uppercase" }}>
                🧠 Recommended Benchmark Stack
              </div>
              {recommendedStack.length === 0 ? (
                <p style={{ ...S.body, color: "#555555" }}>Select Q1 to generate recommendations.</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {recommendedStack.map((b, i) => (
                    <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", width: 20 }}>0{i + 1}</span>
                      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.04em" }}>{b}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Harness */}
            {harness && (
              <div style={{ border: "2px solid #333333", padding: "1.25rem", background: "#111111" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#FF4D00", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                  Resolution Path / Harness
                </div>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1rem", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>{harness.harness}</div>
                <div style={{ borderLeft: "3px solid #FF4D00", paddingLeft: "0.75rem" }}>
                  <p style={{ ...S.body, margin: 0, fontSize: "0.75rem" }}>⚠ {harness.warning}</p>
                </div>
              </div>
            )}

            {/* Auto-Evaluator */}
            <div style={{ border: "2px solid #FF4D00", padding: "1.25rem", background: "#FF4D00" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#000000", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                Smart Auto-Evaluator
              </div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.1rem", color: "#000000", textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
                {autoEval.label}
              </div>
              <button
                onClick={() => setShowRationale(!showRationale)}
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", background: "#000000", color: "#FF4D00", border: "none", padding: "0.35rem 0.75rem", cursor: "pointer" }}
              >
                {showRationale ? "HIDE" : "ℹ SHOW"} RATIONALE
              </button>
              {showRationale && (
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.6, color: "#000000", marginTop: "0.75rem", marginBottom: 0 }}>
                  {autoEval.rationale}
                </p>
              )}
            </div>

            {/* Validity Progress */}
            <div style={S.card}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#FF4D00", marginBottom: "0.75rem", textTransform: "uppercase" }}>
                Checklist Progress
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "2.5rem", color: checklistPct >= 80 ? "#FF4D00" : "#FFFFFF", letterSpacing: "-0.04em" }}>{checklistPct}%</div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: 8, background: "#333333", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${checklistPct}%`, background: "#FF4D00", transition: "width 0.3s ease" }} />
                  </div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#666666", marginTop: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {checklist.size} / {CHECKLIST_ITEMS.length} items validated
                  </div>
                </div>
              </div>
            </div>

            {/* Export buttons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={exportJSON}
                style={{ flex: 1, fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem", border: "2px solid #FF4D00", background: "transparent", color: "#FF4D00", cursor: "pointer", transition: "all 0.1s linear" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#FF4D00"; (e.currentTarget as HTMLElement).style.color = "#000000"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#FF4D00"; }}
              >
                💾 Export JSON
              </button>
              <button
                onClick={exportMD}
                style={{ flex: 1, fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem", border: "2px solid #FFFFFF", background: "transparent", color: "#FFFFFF", cursor: "pointer", transition: "all 0.1s linear" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; (e.currentTarget as HTMLElement).style.color = "#000000"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
              >
                📄 Export Report (MD)
              </button>
            </div>

            {/* Roadmap */}
            <div style={{ border: "1px solid #333333", padding: "1.25rem", background: "#0A0A0A" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#FF4D00", marginBottom: "1rem", textTransform: "uppercase" }}>
                Implementation Roadmap
              </div>
              {[
                { n: "01", label: "SELECT", desc: "Finalize benchmark stack from recommendations." },
                { n: "02", label: "AUDIT", desc: "Complete the Construct Validity Checklist (target: 100%)." },
                { n: "03", label: "DEPLOY", desc: "Configure the recommended harness with contamination controls." },
                { n: "04", label: "DOCUMENT", desc: "File the exported report in BBOM Layer 07 with signed attestation." },
              ].map(step => (
                <div key={step.n} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.25rem", color: "#FF4D00", lineHeight: 1, flexShrink: 0 }}>{step.n}</span>
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "0.06em" }}>{step.label}</div>
                    <div style={{ ...S.body, fontSize: "0.75rem", marginTop: "0.15rem" }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
