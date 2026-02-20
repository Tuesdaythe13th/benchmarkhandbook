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
      </div>
    </section>
  );
}
