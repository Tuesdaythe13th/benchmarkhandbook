/*
 * ScoringSection — LLM-as-Judge, scoring methods, 5 behavioral families
 * White background | Orange accents
 */

const scoringMethods = [
  {
    method: "EXACT MATCH",
    desc: "String equality between model output and reference. Only valid for closed-form answers.",
    strengths: "Zero ambiguity, fully automated",
    weaknesses: "Brittle to paraphrase; fails on open-ended tasks",
    use: "Math, code, classification",
  },
  {
    method: "REGEX / PATTERN",
    desc: "Regular expression matching for structured outputs (JSON, dates, formats).",
    strengths: "Flexible, fast, deterministic",
    weaknesses: "Requires careful pattern design; misses semantic equivalence",
    use: "Structured output validation",
  },
  {
    method: "FUNCTIONAL / EXECUTION",
    desc: "Run the model's code output against a test suite. Pass@k metric.",
    strengths: "Ground truth via execution; catches subtle bugs",
    weaknesses: "Requires sandboxed execution environment",
    use: "Code generation, tool calls",
  },
  {
    method: "SEMANTIC SIMILARITY",
    desc: "Embedding-based similarity (cosine distance) between model output and reference.",
    strengths: "Handles paraphrase; language-agnostic",
    weaknesses: "Threshold-sensitive; can miss factual errors",
    use: "Summarization, translation",
  },
  {
    method: "LLM-AS-JUDGE",
    desc: "A separate LLM evaluates the output quality on defined criteria.",
    strengths: "Handles open-ended tasks; scalable; nuanced",
    weaknesses: "Judge bias, positional bias, verbosity bias, self-enhancement bias",
    use: "Helpfulness, safety, reasoning quality",
  },
  {
    method: "HUMAN ANNOTATION",
    desc: "Human raters score outputs on defined rubrics. Gold standard but expensive.",
    strengths: "Highest validity; captures nuance",
    weaknesses: "Slow, expensive, inter-rater variability",
    use: "Ground truth creation, judge calibration",
  },
];

const judgeTypes = [
  {
    type: "SINGLE JUDGE",
    desc: "One LLM evaluates the output. Fast but susceptible to model-specific biases.",
    risk: "HIGH",
  },
  {
    type: "PANEL OF JUDGES",
    desc: "Multiple LLMs evaluate independently. Majority vote or weighted average reduces individual bias.",
    risk: "MEDIUM",
  },
  {
    type: "REFERENCE-BASED",
    desc: "Judge compares model output to a reference answer. Reduces hallucination in the judge.",
    risk: "LOW",
  },
  {
    type: "PAIRWISE",
    desc: "Judge compares two model outputs and picks the better one. Used in LMSYS Chatbot Arena.",
    risk: "MEDIUM",
  },
  {
    type: "RUBRIC-BASED",
    desc: "Judge scores against explicit criteria (accuracy, coherence, safety). Most auditable.",
    risk: "LOW",
  },
];

const judgeBiases = [
  { bias: "POSITIONAL BIAS", desc: "Judge favors the first or last option presented in pairwise comparisons." },
  { bias: "VERBOSITY BIAS", desc: "Judge prefers longer, more detailed responses regardless of quality." },
  { bias: "SELF-ENHANCEMENT", desc: "Judge favors outputs from its own model family." },
  { bias: "SYCOPHANCY", desc: "Judge agrees with the user's implied preference rather than evaluating objectively." },
  { bias: "AUTHORITY BIAS", desc: "Judge defers to confident-sounding outputs even when factually incorrect." },
  { bias: "JUDGE DRIFT", desc: "Judge behavior changes across model versions, invalidating longitudinal comparisons." },
];

const behavioralFamilies = [
  {
    num: "01",
    family: "KNOWLEDGE & REASONING",
    desc: "Factual recall, multi-step logical inference, causal reasoning, and scientific problem-solving.",
    benchmarks: ["MMLU-Pro", "GPQA Diamond", "Humanity's Last Exam", "MuSR", "ZebraLogic"],
  },
  {
    num: "02",
    family: "INSTRUCTION FOLLOWING",
    desc: "Adherence to explicit formatting constraints, multi-turn context maintenance, and constraint satisfaction.",
    benchmarks: ["IFEval", "MultiChallenge", "CoCoNot"],
  },
  {
    num: "03",
    family: "MATHEMATICAL REASONING",
    desc: "Symbolic manipulation, proof construction, numerical computation, and olympiad-level problem solving.",
    benchmarks: ["MATH-500", "AIME 2024/2025", "MathArena", "FrontierMath"],
  },
  {
    num: "04",
    family: "CODE GENERATION",
    desc: "Functional code synthesis, bug repair, test generation, and end-to-end software engineering.",
    benchmarks: ["LiveCodeBench", "SWE-Bench Verified", "BigCodeBench", "LiveCodeBench Pro"],
  },
  {
    num: "05",
    family: "AGENTIC BEHAVIOR",
    desc: "Tool use, planning, multi-step task completion, web navigation, and collaborative multi-agent tasks.",
    benchmarks: ["GAIA", "TauBench", "BFCL v3", "BrowseComp", "PaperBench"],
  },
];

export default function ScoringSection() {
  return (
    <section id="scoring" style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
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
            SECTION 05
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
            SCORING &amp;
            <br />
            <span style={{ color: "#FF4D00" }}>JUDGMENT</span>
          </h2>
        </div>

        {/* Scoring methods table */}
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
            TABLE V.1 — SCORING METHOD SELECTION GUIDE
          </h3>
          <div style={{ overflowX: "auto" }}>
            <table className="table-brutal table-brutal-orange">
              <thead>
                <tr>
                  <th>METHOD</th>
                  <th>DESCRIPTION</th>
                  <th>STRENGTHS</th>
                  <th>WEAKNESSES</th>
                  <th>BEST FOR</th>
                </tr>
              </thead>
              <tbody>
                {scoringMethods.map((row) => (
                  <tr key={row.method}>
                    <td>
                      <span
                        style={{
                          fontFamily: "'Archivo Black', sans-serif",
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                          letterSpacing: "-0.02em",
                          color: "#000000",
                        }}
                      >
                        {row.method}
                      </span>
                    </td>
                    <td style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}>{row.desc}</td>
                    <td style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#333333" }}>{row.strengths}</td>
                    <td style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#555555" }}>{row.weaknesses}</td>
                    <td>
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.6rem",
                          color: "#FF4D00",
                          textTransform: "uppercase",
                        }}
                      >
                        {row.use}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* LLM-as-Judge section */}
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
            LLM-AS-JUDGE — TYPES &amp; RISK LEVELS
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1px",
              background: "#000000",
              border: "2px solid #000000",
              marginBottom: "2rem",
            }}
          >
            {judgeTypes.map((j) => {
              const riskColor = j.risk === "HIGH" ? "#FF4D00" : j.risk === "MEDIUM" ? "#888888" : "#000000";
              return (
                <div
                  key={j.type}
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
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        letterSpacing: "-0.02em",
                        color: "#000000",
                      }}
                    >
                      {j.type}
                    </span>
                    <span
                      style={{
                        background: riskColor,
                        color: j.risk === "HIGH" ? "#000000" : "#FFFFFF",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.5rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "0.15rem 0.4rem",
                        fontWeight: 700,
                      }}
                    >
                      {j.risk} RISK
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      lineHeight: 1.5,
                      color: "#444444",
                      margin: 0,
                    }}
                  >
                    {j.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Judge biases */}
          <h3
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1rem",
            }}
          >
            KNOWN JUDGE BIASES — MITIGATE BEFORE DEPLOYMENT
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1px",
              background: "#000000",
              border: "2px solid #000000",
            }}
          >
            {judgeBiases.map((b) => (
              <div
                key={b.bias}
                style={{
                  background: "#FFFFFF",
                  padding: "1.25rem",
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
                    marginBottom: "0.4rem",
                  }}
                >
                  {b.bias}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.4,
                    color: "#444444",
                    margin: 0,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Behavioral Families */}
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
            THE 5 BEHAVIORAL FAMILIES — CAPABILITY TAXONOMY
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#000000", border: "2px solid #000000" }}>
            {behavioralFamilies.map((f) => (
              <div
                key={f.num}
                style={{
                  background: "#FFFFFF",
                  padding: "1.5rem 2rem",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "2rem",
                  alignItems: "center",
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
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "2.5rem",
                    letterSpacing: "-0.04em",
                    color: "#FF4D00",
                    lineHeight: 1,
                    minWidth: "3rem",
                  }}
                >
                  {f.num}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      color: "#000000",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {f.family}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                      color: "#555555",
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "flex-end" }}>
                  {f.benchmarks.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        border: "1px solid #000000",
                        padding: "0.2rem 0.5rem",
                        whiteSpace: "nowrap",
                        color: "#000000",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Measurement Error Budget */}
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
            THE MEASUREMENT ERROR BUDGET
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              color: "#444444",
              maxWidth: 680,
              marginBottom: "2rem",
            }}
          >
            <strong>The number is not the measurement.</strong> The measurement is the number together with an explicit account of how far that number might deviate from the truth. Every score must be accompanied by a structured error budget enumerating five primary sources.
          </p>

          {/* Aleatoric vs Epistemic */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "#000000",
              border: "2px solid #000000",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                type: "ALEATORIC UNCERTAINTY",
                latin: "From alea — 'dice'",
                desc: "Irreducible variability intrinsic to the phenomenon. A model's response to an ambiguous prompt may genuinely vary; a rater may score differently on different days because the item is legitimately ambiguous. This is not noise to be eliminated — it must be quantified.",
                action: "Document and report. Cannot be reduced by improving the instrument.",
              },
              {
                type: "EPISTEMIC UNCERTAINTY",
                latin: "From epistēmē — 'knowledge'",
                desc: "Reducible variability from limitations in the instrument, the sample, the procedure, or the evaluator's knowledge. A benchmark with too few items produces high sampling variance. A rubric with vague criteria produces high rater variance.",
                action: "Fix the instrument. Add items, sharpen rubric criteria, train raters, control the test environment.",
              },
            ].map((u) => (
              <div key={u.type} style={{ background: "#FFFFFF", padding: "1.75rem" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#888888", marginBottom: "0.25rem", letterSpacing: "0.06em" }}>{u.latin}</div>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", marginBottom: "0.75rem" }}>{u.type}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.5, color: "#444444", margin: "0 0 0.75rem" }}>{u.desc}</p>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "#FF4D00", textTransform: "uppercase", letterSpacing: "0.04em" }}>→ {u.action}</div>
              </div>
            ))}
          </div>

          {/* 5 Error sources */}
          <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1rem" }}>
            TABLE V.3 — FIVE PRIMARY ERROR SOURCES
          </h3>
          <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem" }}>
              <thead>
                <tr>
                  {["SOURCE", "DESCRIPTION", "TYPE", "MITIGATION"].map((h) => (
                    <th key={h} style={{ background: "#000000", color: "#FF4D00", fontFamily: "'Archivo Black', sans-serif", textTransform: "uppercase", letterSpacing: "-0.02em", padding: "0.65rem 1rem", textAlign: "left", border: "1px solid #222222", fontSize: "0.6rem" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { src: "CONSTRUCT UNDERSPECIFICATION", desc: "Target construct defined loosely enough that different evaluators measure different things while believing they measure the same thing.", type: "Epistemic", fix: "Sharpen construct definition; validity desideratum" },
                  { src: "SAMPLING ERROR", desc: "Finite item sets introduce variance. For proportion p on n items: SE ≈ √(p(1−p)/n). Two models at 87% vs 89% on 200 items are statistically indistinguishable.", type: "Both", fix: "Increase item count; report Wilson confidence intervals" },
                  { src: "INSTRUMENT BIAS", desc: "Systematic offsets from format or framing. MCQ inflates scores for format-recognition heuristics. Pairwise protocols exhibit position and verbosity bias.", type: "Epistemic", fix: "Multiple formats; position randomization; judge calibration" },
                  { src: "RATER VARIANCE", desc: "Inter-rater disagreement is a strict upper bound on interpretability. If κ = 0.50, approximately half the score variance is attributable to rater disagreement, not model behavior.", type: "Both", fix: "Rater training; rubric precision; inter-rater reliability reporting" },
                  { src: "DISTRIBUTIONAL SHIFT", desc: "Gap between measurement context and deployment context. Score measured in a controlled sandbox may not reflect behavior in production pipelines or after silent model updates.", type: "Aleatoric", fix: "Deployment-context evaluation; drift monitoring; regular recalibration" },
                ].map((row, i) => (
                  <tr key={row.src} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F8F8F8" }}>
                    <td style={{ padding: "0.7rem 1rem", border: "1px solid #DDDDDD", fontFamily: "'Archivo Black', sans-serif", fontSize: "0.65rem", textTransform: "uppercase", color: "#000000", whiteSpace: "nowrap" }}>{row.src}</td>
                    <td style={{ padding: "0.7rem 1rem", border: "1px solid #DDDDDD", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#333333", lineHeight: 1.4 }}>{row.desc}</td>
                    <td style={{ padding: "0.7rem 1rem", border: "1px solid #DDDDDD", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#FF4D00", whiteSpace: "nowrap" }}>{row.type}</td>
                    <td style={{ padding: "0.7rem 1rem", border: "1px solid #DDDDDD", fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#666666", lineHeight: 1.4 }}>{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4-step budget process */}
          <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1rem" }}>
            FOUR-STEP ERROR BUDGET PROCESS
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#000000", border: "2px solid #000000" }}>
            {[
              { step: "01", title: "ENUMERATE", body: "List which of the five sources are active for this specific evaluation. Fully automated benchmarks with deterministic decoding eliminate rater variance and run instability — but do nothing about construct underspecification, sampling error, instrument bias, or distributional shift." },
              { step: "02", title: "ESTIMATE MAGNITUDES", body: "Provide a standard deviation, confidence interval, or variance component for each active source. At Exploratory rung: categorical judgment (negligible/moderate/dominant) with rationale. At Pre-deployment/High-stakes: quantitative estimates via split-half reliability, bootstrap resampling, or GLMM variance decomposition." },
              { step: "03", title: "COMBINE", body: "Under independence: total uncertainty ≈ √(σ₁² + σ₂² + … + σₖ²). When sources are correlated — common when construct underspecification and instrument bias co-vary — report both an independent-source estimate and a conservative correlated-source upper bound." },
              { step: "04", title: "DISCLOSE", body: "Present the error budget alongside the primary score in the Benchmark Bill of Materials. The error budget is not supplementary material. A score whose uncertainty budget exceeds the decision margin it is cited to support cannot rationally support that decision." },
            ].map((s) => (
              <div key={s.step} style={{ background: "#FFFFFF", padding: "1.5rem 2rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.5rem", alignItems: "start", transition: "background 0.15s linear" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff3ee"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "2.2rem", letterSpacing: "-0.04em", color: "#FF4D00", lineHeight: 1 }}>{s.step}</div>
                <div>
                  <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", marginBottom: "0.4rem" }}>{s.title}</div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.5, color: "#555555", margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
