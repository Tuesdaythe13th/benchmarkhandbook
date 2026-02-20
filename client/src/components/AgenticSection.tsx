/*
 * AgenticSection — Agentic Evaluation Patterns
 * Black background | Orange accents
 */

const trajectoryMetrics = [
  {
    metric: "EXACT MATCH",
    desc: "Compares the agent's action sequence step-by-step against an ideal path. Strict but brittle.",
    use: "Unit tests for deterministic tasks",
  },
  {
    metric: "IN-ORDER MATCH",
    desc: "Verifies that key milestones appear in the correct sequence, ignoring intermediate steps.",
    use: "Multi-step workflows with flexibility",
  },
  {
    metric: "ANY-ORDER MATCH",
    desc: "Checks that all required actions occurred regardless of sequence. Useful for parallel tasks.",
    use: "Parallel tool-calling agents",
  },
  {
    metric: "PRECISION / RECALL",
    desc: "Measures the fraction of predicted steps that are correct (precision) and the fraction of ground-truth steps that were taken (recall).",
    use: "Balanced coverage vs. efficiency",
  },
  {
    metric: "OUTCOME SCORE",
    desc: "Ignores the path entirely; evaluates only the final state of the world after the agent acts.",
    use: "High-autonomy agents where method is flexible",
  },
];

const agenticPatterns = [
  {
    num: "01",
    name: "REFLECTION",
    desc: "Agent reviews its own outputs and iterates. Eval: measure improvement rate across iterations.",
  },
  {
    num: "02",
    name: "TOOL USE",
    desc: "Agent calls external APIs, databases, or code. Eval: BFCL v3, TauBench. Measure AST match + execution correctness.",
  },
  {
    num: "03",
    name: "PLANNING",
    desc: "Agent decomposes goals into sub-tasks. Eval: trajectory analysis comparing planned vs. executed steps.",
  },
  {
    num: "04",
    name: "MULTI-AGENT",
    desc: "Multiple agents collaborate or compete. Eval: measure collaborative success, not individual performance.",
  },
  {
    num: "05",
    name: "RAG",
    desc: "Retrieval-augmented generation. Eval: HELMET, FRAMES. Measure citation accuracy and faithfulness.",
  },
  {
    num: "06",
    name: "CODE EXECUTION",
    desc: "Agent writes and runs code. Eval: LiveCodeBench, SWE-Bench Verified. Measure pass@k and real-world repair.",
  },
  {
    num: "07",
    name: "MEMORY",
    desc: "Agent maintains state across turns. Eval: MemGPT benchmarks. Measure retrieval accuracy and context coherence.",
  },
  {
    num: "08",
    name: "PRIORITIZATION",
    desc: "Agent ranks and sequences tasks. Eval: measure task completion rate under resource constraints.",
  },
];

const evalMethods = [
  {
    method: "WEB UI (adk web)",
    use: "Interactive session creation and dataset generation",
    ci: false,
  },
  {
    method: "PYTEST INTEGRATION",
    use: "AgentEvaluator.evaluate() in CI/CD pipelines",
    ci: true,
  },
  {
    method: "CLI (adk eval)",
    use: "Automated evaluation in build/release workflows",
    ci: true,
  },
];

export default function AgenticSection() {
  return (
    <section
      id="agentic"
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
            SECTION 04
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
            AGENTIC
            <br />
            <span style={{ color: "#FF4D00" }}>EVALUATION</span>
          </h2>
        </div>

        {/* Core challenge callout */}
        <div
          style={{
            border: "2px solid #FF4D00",
            padding: "1.5rem 2rem",
            marginBottom: "3.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
          }}
        >
          {[
            {
              label: "WHAT",
              text: "Agentic systems operate in complex, dynamic environments where performance can degrade over time. Their probabilistic nature makes traditional software testing insufficient.",
            },
            {
              label: "WHY",
              text: "A standardized evaluation framework provides systematic assessment of accuracy, latency, token usage, and trajectory analysis. Enables A/B testing and drift detection.",
            },
            {
              label: "WHEN",
              text: "Use when deploying agents in production, comparing model versions, operating in regulated domains, or when agent performance may degrade due to data or environment drift.",
            },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FF4D00",
                  marginBottom: "0.5rem",
                }}
              >
                {item.label}
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                  color: "#CCCCCC",
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Trajectory metrics */}
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
            TRAJECTORY EVALUATION METRICS
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
                  {["METRIC", "DESCRIPTION", "BEST USE CASE"].map((h) => (
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
                {trajectoryMetrics.map((row, i) => (
                  <tr
                    key={row.metric}
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
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                        color: "#FF4D00",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.metric}
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
                      }}
                    >
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Agentic design patterns */}
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
            AGENTIC DESIGN PATTERNS — EVAL MAPPING
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1px",
              background: "#333333",
              border: "1px solid #333333",
            }}
          >
            {agenticPatterns.map((p) => (
              <div
                key={p.num}
                style={{
                  background: "#111111",
                  padding: "1.5rem",
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
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      color: "#FFFFFF",
                    }}
                  >
                    {p.name}
                  </span>
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
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ADK evaluation methods */}
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
            GOOGLE ADK — EVALUATION EXECUTION METHODS
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#333333", border: "1px solid #333333" }}>
            {evalMethods.map((m) => (
              <div
                key={m.method}
                style={{
                  background: "#111111",
                  padding: "1.5rem",
                  borderLeft: m.ci ? "3px solid #FF4D00" : "3px solid #555555",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    marginBottom: "0.5rem",
                  }}
                >
                  {m.method}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                    color: "#AAAAAA",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {m.use}
                </p>
                {m.ci && (
                  <span
                    style={{
                      background: "#FF4D00",
                      color: "#000000",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.5rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "0.15rem 0.4rem",
                      fontWeight: 700,
                    }}
                  >
                    CI/CD COMPATIBLE
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
