/*
 * BenchmarkCemetery — Forensic record of failed/saturated benchmarks
 * Design: Industrial Manifesto Brutalism
 * Orange #FF4D00 | Black #000 | White #FFF
 */

import { useState } from "react";

type FailureType = "SATURATION" | "CONTAMINATION" | "GAMING" | "CONSTRUCT FAILURE" | "OBSOLESCENCE";

interface DeadBenchmark {
  id: string;
  name: string;
  fullName: string;
  born: string;
  died: string;
  causes: FailureType[];
  description: string;
  whatWentWrong: string;
  lessonLearned: string;
  paperUrl: string;
  peakScore: string;
}

const DEAD_BENCHMARKS: DeadBenchmark[] = [
  {
    id: "mmlu",
    name: "MMLU",
    fullName: "Massive Multitask Language Understanding",
    born: "2020",
    died: "2024",
    causes: ["SATURATION", "CONTAMINATION"],
    description: "57-subject multiple-choice benchmark covering STEM, humanities, and social sciences. Was the dominant knowledge benchmark for 3 years.",
    whatWentWrong: "GPT-4 scored 86.4% in 2023. By mid-2024, multiple open-source models exceeded 90%. The benchmark's static nature and public availability meant training data contamination was near-universal. MMLU-Pro was created as a replacement.",
    lessonLearned: "Static MCQA benchmarks with public answer keys have a ~3 year lifespan before saturation. Dynamic generation or gated access is required for longevity.",
    paperUrl: "https://arxiv.org/abs/2009.03300",
    peakScore: "90.9% (GPT-4o, 2024)",
  },
  {
    id: "hellaswag",
    name: "HELLASWAG",
    fullName: "Harder Endings, Longer contexts, and Low-shot Activities for Situations With Adversarial Generation",
    born: "2019",
    died: "2022",
    causes: ["SATURATION"],
    description: "Commonsense NLI benchmark requiring selection of the correct sentence completion from adversarially constructed distractors.",
    whatWentWrong: "Human performance is ~95.6%. GPT-4 achieved 95.3% in 2023. The adversarial generation technique that made it hard in 2019 became trivial for large models. Now only used in pretraining ablations.",
    lessonLearned: "Adversarial construction techniques age poorly. What is adversarial against 2019 models is trivial for 2023+ models. Benchmarks need adversarial refresh cycles.",
    paperUrl: "https://arxiv.org/abs/1905.07830",
    peakScore: "95.3% (GPT-4, 2023)",
  },
  {
    id: "gsm8k",
    name: "GSM8K",
    fullName: "Grade School Math 8K",
    born: "2021",
    died: "2024",
    causes: ["SATURATION", "CONTAMINATION"],
    description: "8,500 grade school math word problems requiring multi-step arithmetic reasoning. Became the standard math benchmark for 2 years.",
    whatWentWrong: "GPT-4 achieved 92% in 2023. By 2024, models routinely scored 95%+. The fixed dataset was widely used in fine-tuning. MATH-500 and AIME 2025 replaced it for frontier model discrimination.",
    lessonLearned: "Math benchmarks require difficulty calibration. A benchmark that 5th graders can solve will be saturated by frontier models within 2 years. Use competition-level math (AIME, OlympiadBench) for current discrimination.",
    paperUrl: "https://arxiv.org/abs/2110.14168",
    peakScore: "97.0% (GPT-4o, 2024)",
  },
  {
    id: "arc",
    name: "ARC CHALLENGE",
    fullName: "AI2 Reasoning Challenge",
    born: "2018",
    died: "2023",
    causes: ["SATURATION"],
    description: "Science exam questions partitioned into Easy and Challenge sets. Challenge set was designed to defeat retrieval-based systems.",
    whatWentWrong: "GPT-4 scored 96.3% on the Challenge set. The benchmark was designed to defeat 2018-era retrieval systems, not 2023 LLMs. Now only used as a pretraining health check.",
    lessonLearned: "Benchmarks designed to defeat a specific class of model become irrelevant when the model class changes. Benchmark design must anticipate capability jumps.",
    paperUrl: "https://arxiv.org/abs/1803.05457",
    peakScore: "96.3% (GPT-4, 2023)",
  },
  {
    id: "truthfulqa",
    name: "TRUTHFULQA",
    fullName: "TruthfulQA",
    born: "2021",
    died: "2024",
    causes: ["CONSTRUCT FAILURE", "GAMING"],
    description: "817 questions designed to elicit false answers that humans might give due to misconceptions. Measured 'truthfulness' via GPT-judge.",
    whatWentWrong: "The construct 'truthfulness' conflated factual accuracy, calibration, and refusal behavior. Models learned to refuse ambiguous questions to score higher. The GPT-judge was shown to have systematic biases. High scores did not correlate with reduced real-world hallucination.",
    lessonLearned: "Construct validity is not optional. 'Truthfulness' is not a single measurable construct. Benchmarks that conflate multiple constructs produce gaming incentives and misleading results.",
    paperUrl: "https://arxiv.org/abs/2109.07958",
    peakScore: "~85% (various, 2024) — scores are not meaningful",
  },
  {
    id: "winogrande",
    name: "WINOGRANDE",
    fullName: "WinoGrande: An Adversarial Winograd Schema Challenge",
    born: "2019",
    died: "2023",
    causes: ["SATURATION"],
    description: "44k pronoun resolution problems using adversarial filtering to remove easy instances. Tested commonsense reasoning.",
    whatWentWrong: "GPT-4 achieved 87% (near human performance of 94%). The adversarial filtering that made it hard in 2019 was insufficient against scale. Now only used in pretraining ablations.",
    lessonLearned: "Adversarial filtering against smaller models does not guarantee difficulty against larger models. Benchmark difficulty must be re-calibrated as model capabilities advance.",
    paperUrl: "https://arxiv.org/abs/1907.10641",
    peakScore: "87.5% (GPT-4, 2023)",
  },
  {
    id: "bigbench",
    name: "BIG-BENCH",
    fullName: "Beyond the Imitation Game Benchmark",
    born: "2022",
    died: "2024",
    causes: ["SATURATION", "OBSOLESCENCE"],
    description: "204-task collaborative benchmark designed to probe capabilities beyond standard NLP. Included tasks from 132 authors across 444 institutions.",
    whatWentWrong: "BIG-Bench Hard (the hardest 23 tasks) was saturated by GPT-4 and Claude 3. The full suite was too heterogeneous for reliable aggregate scoring. Replaced by GPQA Diamond and ARC-AGI-2 for frontier discrimination.",
    lessonLearned: "Heterogeneous benchmark suites produce unreliable aggregate scores. Targeted, construct-valid benchmarks outperform broad suites for frontier model discrimination.",
    paperUrl: "https://arxiv.org/abs/2206.04615",
    peakScore: "~90% BBH (Claude 3 Opus, 2024)",
  },
  {
    id: "humaneval",
    name: "HUMANEVAL",
    fullName: "HumanEval: Evaluating Large Language Models Trained on Code",
    born: "2021",
    died: "2024",
    causes: ["SATURATION", "CONTAMINATION"],
    description: "164 Python programming problems with unit tests. Became the standard code generation benchmark for 2 years.",
    whatWentWrong: "GPT-4 achieved 87% pass@1. The 164 problems were widely memorized. HumanEval+ revealed that many 'passing' solutions were fragile. LiveCodeBench and SWE-Bench Verified replaced it.",
    lessonLearned: "Code benchmarks with fixed test suites are vulnerable to both contamination and superficial solutions that pass weak tests. Use dynamic benchmarks (LiveCodeBench) or real-world task benchmarks (SWE-Bench) for current evaluation.",
    paperUrl: "https://arxiv.org/abs/2107.03374",
    peakScore: "90.2% (GPT-4o, 2024)",
  },
  {
    id: "arena-hard",
    name: "ARENA-HARD AUTO V0.1",
    fullName: "Arena-Hard Auto: Automated Benchmark for LLM Chatbots",
    born: "2024",
    died: "2025",
    causes: ["GAMING", "CONTAMINATION"],
    description: "500 challenging user prompts from Chatbot Arena, scored by GPT-4 as judge. Designed to correlate with human preference rankings.",
    whatWentWrong: "Models were fine-tuned to produce verbose, structured responses that exploited GPT-4 judge's verbosity bias. Correlation with human preferences degraded as models gamed the judge. Arena-Hard v2 and WildBench replaced it.",
    lessonLearned: "LLM-as-Judge benchmarks are gameable if the judge's biases are known. Judge calibration and regular rotation of judge models is required to prevent gaming.",
    paperUrl: "https://arxiv.org/abs/2406.11939",
    peakScore: "~95% (Claude 3.5 Sonnet, 2024) — inflated by gaming",
  },
];

const FAILURE_CRITERIA = [
  { n: "01", label: "Saturation", desc: "Top models exceed 90% accuracy, eliminating discriminative power between frontier systems." },
  { n: "02", label: "Contamination", desc: "Dataset appears in model training data, making scores measure memorization rather than capability." },
  { n: "03", label: "Gaming", desc: "Models learn to exploit benchmark-specific patterns (judge biases, format tricks) without genuine capability improvement." },
  { n: "04", label: "Construct Failure", desc: "The benchmark fails to measure what it claims to measure, or conflates multiple constructs into a single score." },
  { n: "05", label: "Obsolescence", desc: "The capability being measured is no longer relevant to frontier model evaluation or deployment contexts." },
  { n: "06", label: "Adversarial Aging", desc: "Adversarial construction techniques designed for one model generation become trivial for the next." },
];

const FILTER_OPTIONS: Array<FailureType | "ALL"> = ["ALL", "SATURATION", "CONTAMINATION", "GAMING", "CONSTRUCT FAILURE", "OBSOLESCENCE"];

const CAUSE_COLORS: Record<FailureType, string> = {
  "SATURATION": "#FF4D00",
  "CONTAMINATION": "#FFFFFF",
  "GAMING": "#888888",
  "CONSTRUCT FAILURE": "#FF4D00",
  "OBSOLESCENCE": "#555555",
};

export default function BenchmarkCemetery() {
  const [filter, setFilter] = useState<FailureType | "ALL">("ALL");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "ALL" ? DEAD_BENCHMARKS : DEAD_BENCHMARKS.filter(b => b.causes.includes(filter));

  return (
    <section id="cemetery" style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "2px solid #000000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ borderBottom: "2px solid #000000", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#000000", marginBottom: "0.75rem" }}>
            SECTION 09 — BENCHMARK CEMETERY
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.85, color: "#000000", margin: 0 }}>
              THE<br />BENCHMARK<br />CEMETERY
            </h2>
            <div style={{ maxWidth: 420 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#333333", lineHeight: 1.7, margin: "0 0 1rem 0" }}>
                A forensic record of benchmarks that failed — through saturation, contamination, gaming, or construct invalidity. Every dead benchmark is a confirmed hypothesis about the limits of static evaluation.
              </p>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#000000", letterSpacing: "0.06em", border: "2px solid #000000", padding: "0.5rem 1rem", display: "inline-block" }}>
                {DEAD_BENCHMARKS.length} CONFIRMED CASUALTIES
              </div>
            </div>
          </div>
        </div>

        {/* Failure Criteria */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#000000", marginBottom: "1.5rem", textTransform: "uppercase" }}>
            WHAT CONSTITUTES A FAILED BENCHMARK
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {FAILURE_CRITERIA.map(fc => (
              <div key={fc.n} style={{ border: "2px solid #000000", padding: "1rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.5rem", color: "#FF4D00", lineHeight: 1, flexShrink: 0 }}>{fc.n}</span>
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#000000", marginBottom: "0.3rem" }}>{fc.label}</div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#444444", lineHeight: 1.5, margin: 0 }}>{fc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div style={{ display: "flex", gap: 0, border: "2px solid #000000", marginBottom: "2rem", flexWrap: "wrap" }}>
          {FILTER_OPTIONS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.5rem 1rem",
                border: "none",
                borderRight: "2px solid #000000",
                background: filter === f ? "#000000" : "transparent",
                color: filter === f ? "#FF4D00" : "#000000",
                cursor: "pointer",
                transition: "all 0.1s linear",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cemetery cards */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {filtered.map((b, i) => {
            const isOpen = expanded === b.id;
            return (
              <div key={b.id} style={{ borderTop: i === 0 ? "2px solid #000000" : "none", borderLeft: "2px solid #000000", borderRight: "2px solid #000000", borderBottom: "2px solid #000000" }}>
                <button
                  onClick={() => setExpanded(isOpen ? null : b.id)}
                  style={{ width: "100%", background: isOpen ? "#000000" : "#FFFFFF", border: "none", padding: "1.25rem 1.5rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "1.5rem", textAlign: "left", transition: "background 0.1s linear" }}
                >
                  <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.25rem", color: isOpen ? "#FF4D00" : "#000000", flexShrink: 0, lineHeight: 1 }}>†</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: isOpen ? "#888888" : "#666666", flexShrink: 0, lineHeight: 1.4 }}>
                    <div>R.I.P.</div>
                    <div>{b.born} †{b.died}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: isOpen ? "#FFFFFF" : "#000000", lineHeight: 1 }}>{b.name}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: isOpen ? "#888888" : "#666666", marginTop: "0.2rem" }}>{b.fullName}</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {b.causes.map(c => (
                      <span key={c} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.06em", padding: "0.2rem 0.5rem", background: isOpen ? "#333333" : "#F0F0F0", color: isOpen ? CAUSE_COLORS[c] : "#000000", border: `1px solid ${isOpen ? "#555555" : "#CCCCCC"}` }}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: isOpen ? "#FF4D00" : "#000000", flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</div>
                </button>
                {isOpen && (
                  <div style={{ background: "#000000", padding: "1.5rem 1.5rem 2rem", borderTop: "1px solid #222222" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                      <div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", color: "#FF4D00", textTransform: "uppercase", marginBottom: "0.5rem" }}>Description</div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#AAAAAA", lineHeight: 1.6, margin: 0 }}>{b.description}</p>
                        <div style={{ marginTop: "0.75rem", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#666666" }}>PEAK SCORE: <span style={{ color: "#FF4D00" }}>{b.peakScore}</span></div>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", color: "#FF4D00", textTransform: "uppercase", marginBottom: "0.5rem" }}>What Went Wrong</div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#AAAAAA", lineHeight: 1.6, margin: 0 }}>{b.whatWentWrong}</p>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", color: "#FF4D00", textTransform: "uppercase", marginBottom: "0.5rem" }}>Lesson Learned</div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#FFFFFF", lineHeight: 1.6, margin: "0 0 1rem 0", borderLeft: "3px solid #FF4D00", paddingLeft: "0.75rem" }}>{b.lessonLearned}</p>
                        <a href={b.paperUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.06em", textDecoration: "none", border: "1px solid #FF4D00", padding: "0.3rem 0.7rem", display: "inline-block" }}>READ PAPER ↗</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BeTaL Loop */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "2px solid #333333" }}>
          <h3
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "0.5rem",
            }}
          >
            THE BETAL LOOP — BENCHMARK-TUNING AS A CALIBRATION CYCLE
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#888888", lineHeight: 1.55, maxWidth: 680, marginBottom: "2rem" }}>
            Static benchmarks decay. Items leak into training data. The difficulty distribution drifts as models improve. The BeTaL Loop treats benchmark design as a continuous calibration cycle rather than a one-time authoring event.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#333333", border: "1px solid #333333", marginBottom: "2rem" }}>
            {[
              { step: "01 · DESIGN", body: "Select the initial item set from the library using maximum-information IRT sampling. Tag each item with construct label, difficulty parameter (b), discrimination parameter (a), and contamination-risk flag." },
              { step: "02 · ADMINISTER", body: "Present the item set under controlled conditions — fixed random seed (where applicable), fixed prompt template, SHA-256 hashed environment specification. Record binary responses." },
              { step: "03 · ANALYZE", body: "Fit a 2PL IRT model to responses. Compute latent-trait estimate θ̂ and its standard error SE(θ̂). Flag items with low information as uninformative. Flag items with difficulty drift > 0.5 logits from calibration baseline as potentially contaminated or saturated." },
              { step: "04 · RECALIBRATE", body: "Retire flagged items. Generate replacement items at target difficulty (θ̂ ± 1 logit). Update the item library. If SE(θ̂) > SE_target and iteration limit not reached, return to Step 2; otherwise return θ̂ ± k · SE(θ̂) at the appropriate coverage factor." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#111111", padding: "1.5rem 2rem", display: "grid", gridTemplateColumns: "180px 1fr", gap: "1.5rem", alignItems: "start" }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FF4D00" }}>{s.step}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.55, color: "#AAAAAA", margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>

          <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem" }}>
              <thead>
                <tr>
                  {["RUNG", "SE(θ̂) TARGET", "MAX ITERATIONS", "COVERAGE FACTOR k", "CI"].map((h) => (
                    <th key={h} style={{ background: "#222222", color: "#FF4D00", fontFamily: "'Archivo Black', sans-serif", textTransform: "uppercase", letterSpacing: "-0.02em", padding: "0.65rem 0.85rem", textAlign: "left", border: "1px solid #444444", fontSize: "0.58rem" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { rung: "EXPLORATORY", se: "≤ 0.5 logits", iters: "2", k: "1.65", ci: "90%" },
                  { rung: "DEVELOPMENT", se: "≤ 0.4 logits", iters: "3", k: "2.00", ci: "95%" },
                  { rung: "PRE-DEPLOYMENT", se: "≤ 0.3 logits", iters: "5", k: "2.00", ci: "95%" },
                  { rung: "HIGH-STAKES", se: "≤ 0.2 logits", iters: "10", k: "2.58", ci: "99% (~±0.5 logits)" },
                ].map((row, i) => (
                  <tr key={row.rung} style={{ background: i % 2 === 0 ? "#1a1a1a" : "#222222" }}>
                    <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontFamily: "'Archivo Black', sans-serif", fontSize: "0.65rem", textTransform: "uppercase", color: "#FF4D00", whiteSpace: "nowrap" }}>{row.rung}</td>
                    <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontSize: "0.65rem", color: "#CCCCCC" }}>{row.se}</td>
                    <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontSize: "0.65rem", color: "#AAAAAA" }}>{row.iters}</td>
                    <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontSize: "0.65rem", color: "#AAAAAA" }}>{row.k}</td>
                    <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontSize: "0.65rem", color: "#888888" }}>{row.ci}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* BENCH BOM */}
          <div style={{ border: "2px solid #FF4D00", padding: "2rem", background: "#0d0d0d" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.75rem" }}>
              BENCHMARK BILL OF MATERIALS — BENCH BOM
            </div>
            <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "-0.03em", color: "#FFFFFF", margin: "0 0 0.75rem" }}>
              METROLOGICAL PROVENANCE FOR EVERY EVALUATION
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.55, color: "#888888", margin: "0 0 1.5rem" }}>
              To prevent benchmark-washing, every evaluation must be accompanied by a Benchmark Bill of Materials. It is not supplementary material — it is part of the result.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: "#333333" }}>
              {[
                { field: "CONSTRUCT SPECIFICATION", desc: "Target construct(s), operational definitions, scope boundaries, explicit limitations" },
                { field: "ITEM LIBRARY", desc: "Full item list with IRT difficulty (b) and discrimination (a) parameters, version identifier, contamination-risk flags" },
                { field: "BOOLEAN RUBRIC ITEMS", desc: "APBR items with binary criteria, organized by construct, with aggregation method" },
                { field: "VALUE TAGS", desc: "Schwartz value labels + audience scopes, inter-tagger reliability stats, list of value-ambiguous items" },
                { field: "CALIBRATION RUNG", desc: "Stated rung with justification; audience specification with explicit non-supported uses" },
                { field: "DESIDERATA METRICS", desc: "κ, PSI, validity evidence, fairness (DIR, Δ, DIF), uncertainty budget, reproducibility artifacts" },
                { field: "PROVENANCE", desc: "SHA-256 hashes for all artifacts (code, data, rubric, prompts, environment); dataset origins and transformations" },
                { field: "ERROR BUDGET", desc: "Quantitative estimates for all 5 active error sources; combined uncertainty with disclosure" },
                { field: "GOVERNANCE STATUS", desc: "Active / Flagged / Under Remediation / Downgraded / Retired — with protocol action history" },
                { field: "MAINTENANCE SCHEDULE", desc: "Next recalibration, contamination check, fairness audit, and value-tag reliability audit dates" },
              ].map((item) => (
                <div key={item.field} style={{ background: "#111111", padding: "1.25rem" }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.4rem" }}>{item.field}</div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", lineHeight: 1.4, color: "#AAAAAA", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
