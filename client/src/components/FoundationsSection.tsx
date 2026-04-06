/*
 * FoundationsSection — The "Big Three" definitions + Benchmarks vs Evals
 * White background | Black borders | Orange accents
 */

const bigThree = [
  {
    term: "BENCHMARK",
    def: "A fixed, reusable testing instrument, including tasks, scoring rules, and a manifest (the BBOM).",
    role: "The Published Specification.",
    persistence: "Long-term (Static)",
    color: "#FF4D00",
  },
  {
    term: "EVALUATION",
    def: "A specific, timestamped execution of a model against a versioned benchmark.",
    role: "The Auditable Event.",
    persistence: "Ephemeral (Timestamped)",
    color: "#000000",
  },
  {
    term: "EVIDENCE",
    def: "The signed, immutable logs, outputs, and metadata generated from an evaluation.",
    role: "The Immutable Proof.",
    persistence: "Permanent (for Audit/Legal)",
    color: "#555555",
  },
];

const constructChecklist = [
  { num: "01", label: "DEFINE THE PHENOMENON", desc: "Precisely specify what capability or behavior is being measured." },
  { num: "02", label: "MEASURE ONLY THE PHENOMENON", desc: "Ensure tasks isolate the target construct without confounding variables." },
  { num: "03", label: "CONSTRUCT A REPRESENTATIVE DATASET", desc: "Sample tasks that reflect the full distribution of real-world inputs." },
  { num: "04", label: "ACKNOWLEDGE LIMITATIONS OF REUSE", desc: "Document scope constraints when repurposing existing datasets." },
  { num: "05", label: "PREPARE FOR CONTAMINATION", desc: "Implement canary strings and gated access to prevent training data leakage." },
  { num: "06", label: "USE STATISTICAL METHODS", desc: "Apply significance testing, inter-rater reliability, and signal-to-noise analysis." },
  { num: "07", label: "CONDUCT AN ERROR ANALYSIS", desc: "Systematically categorize failure modes across slices and modalities." },
  { num: "08", label: "JUSTIFY CONSTRUCT VALIDITY", desc: "Provide documented rationale for why the benchmark measures what it claims." },
];

export default function FoundationsSection() {
  return (
    <section id="foundations" style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
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
            SECTION 01
          </span>
          <h2
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#000000",
              margin: 0,
            }}
          >
            FOUNDATIONS
          </h2>
        </div>

        {/* Benchmarks vs Evals — manifesto style */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            border: "2px solid #000000",
            marginBottom: "4rem",
          }}
        >
          {/* Left: Benchmarks */}
          <div style={{ padding: "2.5rem", borderRight: "2px solid #000000" }}>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "1rem",
              }}
            >
              INSTRUMENT TYPE A
            </div>
            <h3
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "2.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                color: "#000000",
                margin: "0 0 1.5rem",
              }}
            >
              BENCH
              <br />
              MARKS
            </h3>
            {[
              "Reward performance",
              "Are a tool",
              "Rank models",
              "Produce comparable scores",
              "Are static, reproducible snapshots",
              "You use benchmarks",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #EEEEEE",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#000000",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#FF4D00",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>

          {/* Right: Evaluations */}
          <div style={{ padding: "2.5rem", background: "#000000" }}>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "1rem",
              }}
            >
              INSTRUMENT TYPE B
            </div>
            <h3
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "2.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                color: "#FFFFFF",
                margin: "0 0 1.5rem",
              }}
            >
              EVALU
              <br />
              ATIONS
            </h3>
            {[
              "Expose risk",
              "Are a process",
              "Surface failure modes",
              "Produce insights",
              "Are dynamic, adaptive, and adversarial",
              "You run evaluations",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #333333",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#FFFFFF",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#FF4D00",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Key doctrine callout */}
        <div
          style={{
            background: "#FF4D00",
            padding: "1.5rem 2rem",
            marginBottom: "4rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#000000",
            }}
          >
            BENCHMARKS TELL YOU WHERE A MODEL STANDS.
            <br />
            EVALUATIONS CAN SHOW YOU WHERE IT BREAKS.
          </div>
        </div>

        {/* The Big Three definitions */}
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
            TABLE II.1 — THE "BIG THREE" DEFINITIONS
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table className="table-brutal">
              <thead>
                <tr>
                  <th>TERM</th>
                  <th>TECHNICAL DEFINITION</th>
                  <th>GOVERNANCE ROLE</th>
                  <th>PERSISTENCE</th>
                </tr>
              </thead>
              <tbody>
                {bigThree.map((row) => (
                  <tr key={row.term}>
                    <td>
                      <span
                        style={{
                          fontFamily: "'Archivo Black', sans-serif",
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "-0.02em",
                          color: row.color === "#FF4D00" ? "#FF4D00" : "#000000",
                        }}
                      >
                        {row.term}
                      </span>
                    </td>
                    <td style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>{row.def}</td>
                    <td>
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.7rem",
                          color: "#FF4D00",
                        }}
                      >
                        {row.role}
                      </span>
                    </td>
                    <td>
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.65rem",
                          color: "#555555",
                        }}
                      >
                        {row.persistence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Construct Validity Checklist */}
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
            CONSTRUCT VALIDITY CHECKLIST — MEASURING WHAT MATTERS
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1px",
              background: "#000000",
              border: "2px solid #000000",
            }}
          >
            {constructChecklist.map((item) => (
              <div
                key={item.num}
                style={{
                  background: "#FFFFFF",
                  padding: "1.5rem",
                  transition: "background 0.15s linear",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fff3ee";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "#FF4D00",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    color: "#000000",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                    color: "#555555",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Three Structural Gaps */}
        <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "2px solid #000000" }}>
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
            THREE STRUCTURAL GAPS IN CURRENT EVALUATION PRACTICE
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#555555", lineHeight: 1.55, maxWidth: 680, marginBottom: "2rem" }}>
            These gaps are not hypothetical — they are documented in the empirical literature. They interact and compound. Addressing one while ignoring the others produces evaluation that is rigorous in one dimension and misleading in others.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#000000", border: "2px solid #000000", marginBottom: "2.5rem" }}>
            {[
              {
                gap: "EXECUTION GAP",
                def: "Distance between benchmark performance and real-world task completion.",
                detail: "Benchmarks present short, well-defined tasks in controlled environments; deployment involves long-horizon, open-ended tasks in noisy, interactive settings. Especially severe for agentic settings requiring planning, error recovery, tool use, and dynamic interaction.",
                cite: "Liang et al. (2023) · Srivastava et al. (2023)",
              },
              {
                gap: "VALIDITY GAP",
                def: "Distance between what an evaluation claims to measure and what it actually measures.",
                detail: "Arises when the instrument captures construct-irrelevant variance — superficial features of the test format masquerading as signal. Compounded when benchmarks are used beyond their design scope (English benchmark cited as multilingual evidence; text benchmark applied to multimodal pipelines).",
                cite: "Zheng et al. (2024) — position bias, verbosity bias in LLM judges",
              },
              {
                gap: "REPRESENTATION GAP",
                def: "Distance between who is represented in evaluation design and who is affected by deployment.",
                detail: "Evaluation datasets, rubrics, annotators, and norms drawn from populations that may not reflect deployment diversity. Not merely a fairness concern — a validity concern. A score obtained on one population provides limited evidence about a different population.",
                cite: "Blodgett et al. (2020) · Joshi et al. (2020)",
              },
            ].map((g) => (
              <div key={g.gap} style={{ background: "#FFFFFF", padding: "1.75rem" }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FF4D00", marginBottom: "0.4rem" }}>{g.gap}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#000000", marginBottom: "0.75rem", letterSpacing: "0.02em" }}>{g.def}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", lineHeight: 1.55, color: "#444444", margin: "0 0 0.75rem" }}>{g.detail}</p>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", color: "#888888", letterSpacing: "0.04em" }}>→ {g.cite}</div>
              </div>
            ))}
          </div>

          {/* Why Measure / Why Not */}
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
            PROPORTIONALITY ASSESSMENT — WHY MEASURE? WHY NOT?
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#555555", lineHeight: 1.55, maxWidth: 680, marginBottom: "1.5rem" }}>
            Before any instrument is designed, there is a prior obligation: to ask whether the measurement should exist at all. Every metric selects a viewpoint, rewards certain behaviors, and creates incentives that shape the thing it claims to merely observe.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#000000", border: "2px solid #000000" }}>
            <div style={{ background: "#FFFFFF", padding: "1.75rem" }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", marginBottom: "1rem" }}>5 REASONS TO MEASURE</div>
              {[
                { n: "01", reason: "To support a decision that depends on the quality — procurement, deployment, regulatory approval." },
                { n: "02", reason: "To detect a failure mode that would otherwise remain hidden — brittleness, cultural bias, sycophancy." },
                { n: "03", reason: "To enable comparison across systems or over time — with a stable, shared instrument and narrow uncertainty intervals." },
                { n: "04", reason: "To make a value-laden trade-off explicit — forcing normative choices into the open for democratic deliberation." },
                { n: "05", reason: "To provide a basis for contestation and improvement — concrete evidence that can be challenged and refined." },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", minWidth: 20 }}>{item.n}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "#333333" }}>{item.reason}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#FFFFFF", padding: "1.75rem", borderLeft: "1px solid #000000" }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FF4D00", marginBottom: "1rem" }}>5 REASONS NOT TO MEASURE</div>
              {[
                { n: "01", reason: "The measurement would be misinterpreted as a verdict it cannot support — a narrow safety score read as a global safety guarantee." },
                { n: "02", reason: "The construct is too contested to be measured without silencing legitimate perspectives — entrenching one worldview." },
                { n: "03", reason: "The measurement would incentivize gaming rather than genuine improvement (Goodhart's Law)." },
                { n: "04", reason: "The cost of measurement exceeds the value of the decision it supports — for low-stakes decisions, elaborate audits are not justified." },
                { n: "05", reason: "The measurement would produce a false sense of precision for an inherently fuzzy, context-dependent quality." },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", minWidth: 20 }}>{item.n}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "#333333" }}>{item.reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
