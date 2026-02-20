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
