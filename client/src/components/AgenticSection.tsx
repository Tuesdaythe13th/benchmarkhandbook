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

        {/* System 2 + Production Stack */}
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
            THE SYSTEM 2 IMPERATIVE — 2025 RESEARCH SYNTHESIS
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
            <div style={{ border: "2px solid #333333", padding: "1.5rem" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.75rem" }}>SYSTEM 1 (TRADITIONAL LLM)</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.55, color: "#CCCCCC", margin: 0 }}>Optimizes for the most probable next token. Fast, instinctive responses. Evaluated with static benchmarks (MMLU, HellaSwag). Single-pass, no iteration.</p>
            </div>
            <div style={{ border: "2px solid #FF4D00", padding: "1.5rem" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.75rem" }}>SYSTEM 2 (AGENTIC LLM)</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.55, color: "#CCCCCC", margin: 0 }}>Answers: <em>"What sequence of actions maximizes goal success?"</em> Slow, deliberate reasoning. Requires multi-step planning, iterative refinement, tool use, and memory. Evaluation must assess trajectories, not just outputs.</p>
            </div>
          </div>
          <div style={{ background: "#111111", border: "2px solid #333333", borderLeft: "4px solid #FF4D00", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.5rem" }}>2025 GALILEO ACTION ADVANCEMENT METRIC</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.55, color: "#CCCCCC", margin: "0 0 0.5rem 0" }}>A formative, diagnostic metric that quantifies whether each intermediate step successfully contributes to the user-defined goal. Addresses the primary failure mode in agentic systems: <strong style={{ color: "#FF4D00" }}>upstream planning errors (55.8% of failures)</strong>, including requirement omission and misinterpretation. Provides step-level feedback rather than binary pass/fail outcomes.</p>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#666666", letterSpacing: "0.04em" }}>SOURCE: Galileo Agentic Evaluation Framework (2025) · By 2028, autonomous agents predicted in 33% of enterprise applications (Gartner)</div>
          </div>

          {/* 2025 Production Stack */}
          <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1.25rem", marginTop: "2.5rem" }}>2025 AGENT PRODUCTION STACK — MANDATORY CAPABILITIES</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "#333333", border: "1px solid #333333", marginBottom: "2.5rem" }}>
            {[
              { name: "TRACING & REPLAY", desc: "Replay agent tasks under new instructions to understand and improve paths. Essential for debugging multi-step failures.", critical: true },
              { name: "LLM FALLBACKS", desc: "Backup model calls when primary fails or generates unsuitable responses. Compensates for the probability decay in long-step sequences.", critical: true },
              { name: "HUMAN APPROVAL", desc: "Checkpoints that halt agent execution for human review before continuing. Required for moderation, compliance, and mission-critical workflows.", critical: true },
              { name: "TOOL LIBRARY", desc: "Managed pre-built tools with save/load capability. Arbitrary code execution at any stage for workflow customization.", critical: false },
              { name: "METRICS & EVAL", desc: "Built-in or custom metrics applied at scale. Real user input incorporated into evaluation datasets for training feedback loops.", critical: false },
              { name: "LONG-TERM MEMORY", desc: "External LTM systems enable short-context LLMs to match large-context models at fraction of cost. Decouples capability from context window size.", critical: false },
            ].map((item) => (
              <div key={item.name} style={{ background: "#111111", padding: "1.25rem", borderLeft: item.critical ? "3px solid #FF4D00" : "3px solid #444444" }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: item.critical ? "#FF4D00" : "#FFFFFF", marginBottom: "0.5rem" }}>{item.name}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", lineHeight: 1.45, color: "#AAAAAA", margin: 0 }}>{item.desc}</p>
                {item.critical && <span style={{ display: "inline-block", marginTop: "0.5rem", background: "#FF4D00", color: "#000000", fontFamily: "'Space Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.15rem 0.4rem" }}>CRITICAL</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Human Evaluation Workflow */}
        <div style={{ marginBottom: "4rem" }}>
          <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1.5rem" }}>HUMAN EVALUATION WORKFLOW — HYBRID HITL MODEL</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.6, color: "#CCCCCC", maxWidth: 860, marginBottom: "2rem" }}>Human evaluation remains the gold standard for subjective quality, safety, and ethical alignment. The modern best practice is the <strong style={{ color: "#FFFFFF" }}>Human-in-the-Loop (HITL) Collaborative Annotation model</strong> — LLM judges handle high-throughput pre-screening (reducing manual workload by ~80%), while human experts review edge cases, safety-critical outputs, and calibration samples.</p>
          <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem" }}>
              <thead>
                <tr>
                  {["STEP", "ACTIVITY", "WHO", "OUTPUT"].map((h) => (
                    <th key={h} style={{ background: "#FF4D00", color: "#000000", fontFamily: "'Archivo Black', sans-serif", textTransform: "uppercase", letterSpacing: "-0.02em", padding: "0.75rem 1rem", textAlign: "left", border: "1px solid #FF4D00", fontSize: "0.6rem" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { step: "01", activity: "Define Scope & Dataset (5 D's)", who: "Eval Lead + SMEs", output: "Defined scope, golden dataset, metrics" },
                  { step: "02", activity: "Automated Pre-Screening (LLaMJ)", who: "LLM Judge", output: "~80% workload reduction, high-recall labels" },
                  { step: "03", activity: "Targeted Human Review", who: "Domain Experts", output: "Corrected labels, preference data" },
                  { step: "04", activity: "Agentic Checkpoints (Production)", who: "Human Approvers", output: "Compliance-gated agent continuations" },
                  { step: "05", activity: "Feedback Integration (RLHF)", who: "ML Engineers", output: "Fine-tuned model, improved alignment" },
                  { step: "06", activity: "Calibration & IRR Checks", who: "Annotation QA", output: "Inter-annotator agreement scores" },
                ].map((row, i) => (
                  <tr key={row.step} style={{ background: i % 2 === 0 ? "#111111" : "#1a1a1a" }}>
                    <td style={{ padding: "0.65rem 1rem", border: "1px solid #333333", color: "#FF4D00", fontFamily: "'Archivo Black', sans-serif", fontSize: "0.7rem" }}>{row.step}</td>
                    <td style={{ padding: "0.65rem 1rem", border: "1px solid #333333", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>{row.activity}</td>
                    <td style={{ padding: "0.65rem 1rem", border: "1px solid #333333", color: "#AAAAAA", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem" }}>{row.who}</td>
                    <td style={{ padding: "0.65rem 1rem", border: "1px solid #333333", color: "#CCCCCC", fontFamily: "'Inter', sans-serif", fontSize: "0.72rem" }}>{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rubric design principles */}
          <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1.25rem" }}>RUBRIC DESIGN PRINCIPLES</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: "#333333", border: "1px solid #333333" }}>
            {[
              { title: "CLARITY & GRANULARITY", desc: "Define criteria precisely. Break complex criteria (e.g., 'helpfulness and conciseness') into multiple unambiguous questions. Avoid conflating different quality dimensions." },
              { title: "FAILURE-MODE FOCUS", desc: "Begin with failure analysis. Cluster error types (factual errors, inconsistency, verbosity). Create metrics targeting top failure clusters to ensure evaluation addresses measurable outcomes." },
              { title: "SINGLE DIMENSION", desc: "LLM judge prompts should evaluate one dimension at a time. Avoid overloaded instructions. Use structured JSON output to simplify parsing and ensure consistency." },
              { title: "REQUIRE JUSTIFICATION", desc: "Prompt LLM judges to provide textual reasoning (chain-of-thought) for each score. Significantly improves alignment with human judgment and provides an audit trail." },
              { title: "BINARY FIRST", desc: "Binary evaluations ('Yes/No', 'Polite/Impolite') or low-precision scales (1–3) often outperform high-precision scales (1–10) for consistency. Start simple, add granularity only when needed." },
              { title: "DATASET 5 D'S", desc: "Defined Scope · Demonstrative of Production Usage · Diverse (problem space variety) · Decontaminated (distinct from training data) · Dynamic (evolving with the system)." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#111111", padding: "1.25rem", transition: "background 0.15s linear" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1a0a00"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#111111"; }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FF4D00", marginBottom: "0.5rem" }}>{item.title}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", lineHeight: 1.45, color: "#AAAAAA", margin: 0 }}>{item.desc}</p>
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
