/*
 * GovernanceSection — Safety evaluation, bias, and governance framework
 * Black background | Orange accents
 */

const safetyDimensions = [
  {
    dim: "JAILBREAK RESISTANCE",
    desc: "Measures how well a model resists adversarial prompts designed to bypass safety guardrails.",
    metric: "Attack Success Rate (ASR)",
    benchmark: "StrongREJECT, WildGuard",
  },
  {
    dim: "HALLUCINATION RATE",
    desc: "Measures the frequency of confident, factually incorrect outputs. Critical for high-stakes domains.",
    metric: "Factual Accuracy Score",
    benchmark: "FaithEval, HaluEval",
  },
  {
    dim: "FALSE REFUSAL RATE",
    desc: "Measures over-refusal: how often a model refuses legitimate, benign requests.",
    metric: "Over-Refusal Rate",
    benchmark: "CoCoNot, XSTest",
  },
  {
    dim: "BIAS & FAIRNESS",
    desc: "Measures performance disparities across demographic groups, languages, and cultural contexts.",
    metric: "Demographic Parity Gap",
    benchmark: "BBQ, GlobalMMLU, WinoBias",
  },
  {
    dim: "TOXICITY",
    desc: "Measures the rate of harmful, offensive, or discriminatory content generation.",
    metric: "Toxicity Score (Perspective API)",
    benchmark: "RealToxicityPrompts",
  },
  {
    dim: "PRIVACY LEAKAGE",
    desc: "Measures whether a model reveals memorized private training data under adversarial prompting.",
    metric: "Memorization Rate",
    benchmark: "Carlini et al. extraction attacks",
  },
];

const governancePrinciples = [
  {
    num: "01",
    principle: "SIGNED ATTESTATION",
    desc: "All evaluation results must be cryptographically signed by the executing party. SHA-256 hashes of datasets and model weights must be recorded in the BBOM.",
  },
  {
    num: "02",
    principle: "IMMUTABLE EVIDENCE LOGS",
    desc: "Raw model outputs, judge scores, and metadata must be stored in append-only logs. No post-hoc modification permitted.",
  },
  {
    num: "03",
    principle: "REPRODUCIBILITY REQUIREMENT",
    desc: "Any third party must be able to reproduce the evaluation from the BBOM specification alone. Random seeds, model versions, and API parameters must be recorded.",
  },
  {
    num: "04",
    principle: "CONFLICT OF INTEREST DISCLOSURE",
    desc: "Evaluators must disclose any relationship with the model developer. Self-reported benchmarks require independent third-party verification.",
  },
  {
    num: "05",
    principle: "SCOPE LIMITATION",
    desc: "Benchmark results are valid only within the stated scope. Claims beyond the benchmark's construct validity are prohibited.",
  },
  {
    num: "06",
    principle: "LIFECYCLE MANAGEMENT",
    desc: "Benchmarks must be reviewed annually. Saturated benchmarks must be retired or replaced. Version numbers must be incremented on any task modification.",
  },
];

const antiPatterns = [
  {
    pattern: "CHERRY-PICKING",
    desc: "Reporting only the subset of benchmarks where the model performs best. Mitigation: require full suite disclosure.",
  },
  {
    pattern: "BENCHMARK HACKING",
    desc: "Fine-tuning specifically on benchmark distributions without disclosing it. Mitigation: held-out test sets, temporal separation.",
  },
  {
    pattern: "METRIC GAMING",
    desc: "Optimizing the scoring function rather than the underlying capability. Mitigation: multiple independent metrics.",
  },
  {
    pattern: "LEADERBOARD OVERFITTING",
    desc: "Iterating on public test sets until performance improves. Mitigation: private test sets, one-shot submission policies.",
  },
  {
    pattern: "SCOPE CREEP",
    desc: "Making capability claims that exceed what the benchmark measures. Mitigation: explicit construct validity documentation.",
  },
  {
    pattern: "STALE BENCHMARKS",
    desc: "Continuing to report results on saturated benchmarks to appear competitive. Mitigation: mandatory status disclosure.",
  },
];

export default function GovernanceSection() {
  return (
    <section
      id="governance"
      style={{
        background: "#000000",
        color: "#FFFFFF",
        padding: "5rem 2rem",
        borderTop: "2px solid #FF4D00",
        borderBottom: "2px solid #FF4D00",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "3rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
            }}
          >
            SECTION 06
          </span>
          <h2
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            SAFETY &amp;
            <br />
            <span style={{ color: "#FF4D00" }}>GOVERNANCE</span>
          </h2>
        </div>

        {/* Safety dimensions */}
        <div style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1.5rem",
            }}
          >
            TABLE VI.1 — SAFETY EVALUATION DIMENSIONS
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
              }}
            >
              <thead>
                <tr>
                  {["DIMENSION", "DESCRIPTION", "PRIMARY METRIC", "REFERENCE BENCHMARKS"].map((h) => (
                    <th
                      key={h}
                      style={{
                        background: "#FF4D00",
                        color: "#000000",
                        fontFamily: "'Archivo Black', sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        border: "1px solid #FF4D00",
                        fontSize: "0.65rem",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {safetyDimensions.map((row, i) => (
                  <tr
                    key={row.dim}
                    style={{ background: i % 2 === 0 ? "#111111" : "#1a1a1a" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#2a1a0a";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "#111111" : "#1a1a1a";
                    }}
                  >
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #333333",
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                        color: "#FF4D00",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.dim}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #333333",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.78rem",
                        color: "#CCCCCC",
                        lineHeight: 1.4,
                      }}
                    >
                      {row.desc}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #333333",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#AAAAAA",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.metric}
                    </td>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        border: "1px solid #333333",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#888888",
                      }}
                    >
                      {row.benchmark}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Governance principles */}
        <div style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1.5rem",
            }}
          >
            GOVERNANCE PRINCIPLES — AUDIT-GRADE REQUIREMENTS
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1px",
              background: "#333333",
              border: "1px solid #333333",
            }}
          >
            {governancePrinciples.map((p) => (
              <div
                key={p.num}
                style={{
                  background: "#111111",
                  padding: "1.75rem",
                  transition: "background 0.15s linear",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1a0a00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#111111";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.6rem",
                      color: "#FF4D00",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {p.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      color: "#FFFFFF",
                    }}
                  >
                    {p.principle}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.5,
                    color: "#AAAAAA",
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Governance-Action Protocol */}
        <div style={{ marginBottom: "4rem" }}>
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
            GOVERNANCE-ACTION PROTOCOL — WHAT HAPPENS WHEN THRESHOLDS ARE NOT MET
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "#888888",
              marginBottom: "1.5rem",
              lineHeight: 1.5,
              maxWidth: 680,
            }}
          >
            An appraisal without a decision procedure is information without consequence. The Conjunction Requirement means a single threshold violation is sufficient to trigger this protocol — there is no compensatory mechanism.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem" }}>
              <thead>
                <tr>
                  {["LEVEL", "TRIGGER", "ACTION", "TIMELINE"].map((h) => (
                    <th key={h} style={{ background: "#FF4D00", color: "#000000", fontFamily: "'Archivo Black', sans-serif", textTransform: "uppercase", letterSpacing: "-0.02em", padding: "0.75rem 1rem", textAlign: "left", border: "1px solid #FF4D00", fontSize: "0.6rem" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "1 · FLAG", trigger: "Any desideratum within 10% of its threshold (amber zone)", action: "Formal notice to evaluation owner. Disclose near-violation in BOM and downstream reporting. No deployment block.", timeline: "Immediate" },
                  { level: "2 · REMEDIATE", trigger: "Any desideratum below threshold by ≤ 20%", action: "Deployment conditionally paused. Evaluation owner has defined window to remediate the failing desideratum.", timeline: "30 d (Dev) · 60 d (Pre-dep) · 90 d (High-stakes)" },
                  { level: "3 · ESCALATE", trigger: "Any desideratum below threshold by > 20%, or remediation window expired without resolution", action: "Evaluation declared inadmissible at current rung. Independent review panel must approve any revised evaluation.", timeline: "Until resolved" },
                  { level: "4 · DOWNGRADE", trigger: "Multiple desiderata below threshold, or single desideratum at < 50% of threshold", action: "Evaluation demoted to next lower calibration rung. Scores may only be cited at the lower rung.", timeline: "Until re-qualified" },
                  { level: "5 · RETIRE", trigger: "Construct validity compromised (e.g., contamination confirmed), or irreparable fairness violation", action: "Instrument permanently retired. All scores after estimated compromise date annotated with deprecation notice.", timeline: "Permanent" },
                ].map((row, i) => (
                  <tr key={row.level} style={{ background: i % 2 === 0 ? "#111111" : "#1a1a1a" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#2a1a0a"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "#111111" : "#1a1a1a"; }}>
                    <td style={{ padding: "0.75rem 1rem", border: "1px solid #333333", fontFamily: "'Archivo Black', sans-serif", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FF4D00", whiteSpace: "nowrap" }}>{row.level}</td>
                    <td style={{ padding: "0.75rem 1rem", border: "1px solid #333333", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#CCCCCC", lineHeight: 1.4 }}>{row.trigger}</td>
                    <td style={{ padding: "0.75rem 1rem", border: "1px solid #333333", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#AAAAAA", lineHeight: 1.4 }}>{row.action}</td>
                    <td style={{ padding: "0.75rem 1rem", border: "1px solid #333333", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#888888", whiteSpace: "nowrap" }}>{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Decision scenarios */}
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1rem" }}>
              DECISION SCENARIOS — APPLYING THE PROTOCOL
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#333333", border: "1px solid #333333" }}>
              {[
                { scenario: "NARROW FAIRNESS FAILURE", detail: "DIR = 0.78 against pre-deployment threshold of 0.80 → Level 2: Remediate. 60-day window for targeted fairness audit." },
                { scenario: "CONTAMINATION CONFIRMED", detail: "Benchmark items appear in model training data → Level 5: Retire. Contamination is a construct-validity failure. All scores after estimated contamination date are deprecated." },
                { scenario: "PRACTICALITY FAILURE", detail: "Evaluation costs 10× comparable benchmarks with no justification → Level 2: Remediate. Cost-benefit analysis required; if unjustified, evaluation is downgraded." },
                { scenario: "RELIABILITY DRIFT", detail: "Inter-annotator agreement drops from κ = 0.82 to κ = 0.76 on high-stakes evaluation (threshold: κ ≥ 0.80) → Level 2: Remediate with 90-day rater retraining window." },
              ].map((s) => (
                <div key={s.scenario} style={{ background: "#111111", padding: "1.5rem", borderLeft: "3px solid #FF4D00" }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.4rem" }}>
                    SCENARIO: {s.scenario}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "#AAAAAA", margin: 0 }}>
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institutional Infrastructure */}
        <div style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1.5rem",
            }}
          >
            INSTITUTIONAL INFRASTRUCTURE — FOUR REQUIRED ROLES
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1px",
              background: "#333333",
              border: "1px solid #333333",
            }}
          >
            {[
              { num: "I", role: "ITEM LIBRARY CUSTODIAN", desc: "Maintains calibrated APBR item libraries: periodic IRT recalibrations, contamination monitoring, item retirement and replacement. Analogous to a national metrology institute maintaining primary measurement standards. Candidates: MLCommons, national AI safety institutes, academic consortia." },
              { num: "II", role: "GOVERNANCE BODY", desc: "Independent entity with authority to accept or reject evaluations at each calibration rung, issue escalation and retirement orders, and convene independent review panels. Must be financially and operationally independent of both evaluation owners and system developers." },
              { num: "III", role: "AUDIT INFRASTRUCTURE", desc: "Network of independent auditors qualified to conduct third-party replications of high-stakes evaluations. Auditors must be certified by the Governance Body and must disclose conflicts of interest." },
              { num: "IV", role: "COMMUNITY REVIEW MECHANISM", desc: "Structured process for affected communities to challenge evaluation instruments — particularly value tags, fairness thresholds, and cultural coverage. Ensures the framework does not become a closed technocratic system." },
            ].map((item) => (
              <div key={item.num} style={{ background: "#111111", padding: "1.75rem", transition: "background 0.15s linear" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1a0a00"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#111111"; }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#FF4D00", letterSpacing: "0.05em" }}>ROLE {item.num}</span>
                  <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FFFFFF" }}>{item.role}</span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.5, color: "#AAAAAA", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Anti-patterns */}
        <div>
          <h3
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1.5rem",
            }}
          >
            ANTI-PATTERNS — WHAT NOT TO DO
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1px",
              background: "#333333",
              border: "1px solid #333333",
            }}
          >
            {antiPatterns.map((a) => (
              <div
                key={a.pattern}
                style={{
                  background: "#111111",
                  padding: "1.5rem",
                  borderLeft: "3px solid #FF4D00",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#FF4D00",
                    marginBottom: "0.5rem",
                  }}
                >
                  ✗ {a.pattern}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                    color: "#AAAAAA",
                    margin: 0,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
