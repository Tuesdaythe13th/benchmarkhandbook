/*
 * EvalScience — Open Questions in Evaluation Science
 * Toward a Mature Empirical Discipline for AI Evaluation
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 */

import Nav from "@/components/Nav";

const DESIDERATA = [
  {
    id: "6.1",
    label: "Reliability",
    short: "Repeatability under variation.",
    body: "Repeatability across runs, prompts, scaffolds, evaluators, and perturbations. Must be quantified not only by test-retest correlation but by prompt-sensitivity metrics and model-to-judge consistency measures.",
    color: "#FF4D00",
  },
  {
    id: "6.2",
    label: "Validity",
    short: "Measuring what you claim to measure.",
    body: "Decomposed into construct, content, predictive, ecological, external, and consequential validity. For open-ended tasks, validity also depends on whether the rubric captures implicit constraints, domain norms, and safety conditions rather than surface features.",
    color: "#FF4D00",
  },
  {
    id: "6.3",
    label: "Reproducibility & Transparency",
    short: "Minimum information for independent replication.",
    body: "Method transparency, contamination disclosure, stack dependence, versioning, and minimum information for another party to interpret or reproduce an evaluation claim. Rubric specification should be treated as part of the evaluation record.",
    color: "#FF4D00",
  },
  {
    id: "6.4",
    label: "Uncertainty & Calibration",
    short: "Honest confidence intervals, not point estimates.",
    body: "Uncertainty treated as its own desideratum — not buried under reliability. Naïve point estimates can be biased; calibration datasets plus confidence intervals are needed for statistically principled reporting.",
    color: "#FF4D00",
  },
  {
    id: "6.5",
    label: "Fairness & Invariance",
    short: "Comparable scores across populations.",
    body: "Whether the evaluation measures the same construct across languages, modalities, model families, and user populations. Techniques such as Differential Item Functioning (DIF) analysis are promising candidates for adaptation to LLM benchmarks.",
    color: "#FF4D00",
  },
  {
    id: "6.6",
    label: "Practicality & Lifecycle Fit",
    short: "Usable at the right point in development.",
    body: "Cost, latency, burden, interpretability, sensitivity to change, and fit with the point in the system lifecycle where the evaluation is being used. Quick sanity checks during iteration, deeper stress tests before release, continuous monitoring after deployment.",
    color: "#FF4D00",
  },
];

const OPEN_QUESTIONS = [
  {
    domain: "RELIABILITY",
    section: "§7.1",
    questions: [
      "How can researchers distinguish intrinsic capability ceilings from elicitation artifacts introduced by prompting or scaffolding?",
      "What quantitative thresholds (e.g., CV < 0.05) should be adopted before an evaluation is deemed trustworthy for high-stakes use?",
      "If the evaluator itself changes the outcome under paraphrase or label framing, is it measuring the model or the evaluator pipeline?",
    ],
  },
  {
    domain: "VALIDITY",
    section: "§7.2",
    questions: [
      "What empirical protocols can demonstrate a benchmark measures the intended construct rather than a correlated proxy?",
      "How can realistic user-interaction loops and long-horizon objectives be embedded without sacrificing reproducibility?",
      "How should implicit constraints and safety encoding be verified in a rubric before it is used in benchmarking?",
      "When are ordinal, interval, and ratio assumptions misapplied? (e.g., BLEU averaging treats ordinal data as interval)",
    ],
  },
  {
    domain: "REPRODUCIBILITY",
    section: "§7.3",
    questions: [
      "Which fields constitute a 'complete' evaluation report? Proposed schema: model ID, dataset version, prompt set, evaluator config, random seed, hardware spec, data-transformation provenance graph.",
      "How should researchers quantify and disclose potential leakage from training data into evaluation sets?",
      "If some evaluation assets must stay private to prevent gaming, what public documentation is still required for legitimacy?",
    ],
  },
  {
    domain: "UNCERTAINTY",
    section: "§7.4",
    questions: [
      "How should uncertainty intervals be incorporated into release-gate criteria (e.g., 'if 95% CI for safety score > 0.8, proceed')?",
      "At what point can an LLM judge replace human annotation without compromising validity? The community lacks consensus thresholds.",
      "When should an evaluation pipeline abstain rather than emit a misleadingly precise score?",
    ],
  },
  {
    domain: "FAIRNESS & INVARIANCE",
    section: "§7.5",
    questions: [
      "What statistical tests can demonstrate scores are invariant across demographic subgroups?",
      "Which evidence is required before claiming a benchmark is language-agnostic?",
      "How can DIF techniques be adapted to detect items that systematically favor certain model families or tokenizers?",
    ],
  },
  {
    domain: "PRACTICALITY",
    section: "§7.6",
    questions: [
      "Given limited compute and annotation resources, how should teams prioritize high-impact evaluations vs. low-cost regression checks?",
      "What statistical signals (e.g., plateaued effect sizes, reduced item discrimination) indicate a benchmark is losing discriminative power?",
      "How should pre-deployment evaluation outputs be linked to post-deployment telemetry in a unified governance dashboard?",
    ],
  },
];

const EVAL_LADDER = [
  {
    rung: "1",
    label: "Quick Internal Regression Checks",
    use: "Development",
    standard: "Low-confidence, high-throughput",
    color: "#444444",
  },
  {
    rung: "2",
    label: "Capability Benchmarks",
    use: "Model Selection",
    standard: "Validated construct, calibrated",
    color: "#666666",
  },
  {
    rung: "3",
    label: "Adversarial Stress Tests",
    use: "Safety Vetting",
    standard: "Robustness, uncertainty bounds",
    color: "#FF8C00",
  },
  {
    rung: "4",
    label: "Human-in-the-Loop Domain Trials",
    use: "Staged Pilots",
    standard: "Ecological validity, fairness",
    color: "#FF6600",
  },
  {
    rung: "5",
    label: "Post-Deployment Monitoring",
    use: "Continuous Surveillance",
    standard: "Real-world performance, drift detection",
    color: "#FF4D00",
  },
];

const DISPOSITION_STEPS = [
  {
    n: "01",
    title: "Define the Subject of Measurement",
    body: "Specify whether the evaluator is measuring the raw base model, the deployed system with safety filters, or an agentic pipeline with tool access. Each represents a different system with different dispositions.",
  },
  {
    n: "02",
    title: "Hypothesize the Causal Basis",
    body: "Identify the specific contextual properties that causally influence behavior (e.g., number of reasoning steps, symbolic depth, presence of oversight cues).",
  },
  {
    n: "03",
    title: "Operationalize Contextual Properties",
    body: "Quantify causal properties on independent scales prior to evaluation, ensuring 'difficulty' is a property of the task itself — not a byproduct of the AI's failure rate.",
  },
  {
    n: "04",
    title: "Map Context to Probability of Behavior",
    body: "Systematically vary contextual properties and empirically map how the probability of a target behavior changes — estimating a response function. This curve is the true empirical signature of the disposition.",
  },
];

const AUDIENCE_GUIDE = [
  {
    audience: "RESEARCHERS",
    start: "Section 6 (Desiderata) & Section 7 (Open Questions)",
  },
  {
    audience: "POLICY MAKERS",
    start: "Sections 2–3 (Roles of Evaluation) & Appendix A",
  },
  {
    audience: "PRODUCT TEAMS",
    start: "Section 5 (Methodology) & Section 8 (Meta-Science)",
  },
  {
    audience: "EVALUATORS",
    start: "Section 8.1.1 (Rubric Science) & Rubric Handbook (/rubric)",
  },
];

const REFERENCES_EVAL = [
  {
    id: "[1]",
    citation:
      "Voudouris, A., Thalmann, M., Kipnis, J., Hernández-Orallo, J., & Schulz, H. (2026). Measuring what AI systems might do: Towards a measurement science in AI. arXiv:2603.00063.",
    url: "https://arxiv.org/abs/2603.00063",
  },
  {
    id: "[2]",
    citation:
      "National Institute of Standards and Technology. (2026). Expanding the AI Evaluation Toolbox with Statistical Models. NIST AI 800-3.",
    url: "https://www.nist.gov/artificial-intelligence",
  },
  {
    id: "[4]",
    citation:
      "International AI Safety Report. (2026). AI Evaluation & Governance Landscape.",
    url: "https://internationalaistandardsreport.org/2026",
  },
  {
    id: "[5]",
    citation:
      "Kumar, S., Lee, Z., & Zeng, J. (2025). How to correctly report LLM-as-a-judge evaluations. arXiv:2511.21140.",
    url: "https://arxiv.org/abs/2511.21140",
  },
  {
    id: "[6]",
    citation:
      "Chen, Y., et al. (2026). RubricBench: Aligning model-generated rubrics with human standards. arXiv:2603.01562.",
    url: "https://arxiv.org/abs/2603.01562",
  },
  {
    id: "[7]",
    citation:
      "Mercor Research Team. (2026). APEX-Agents: An AI productivity index for professional autonomy. arXiv:2601.14242.",
    url: "https://arxiv.org/pdf/2601.14242.pdf",
  },
  {
    id: "[10]",
    citation:
      "Nature Machine Intelligence. (2025). A psychometric framework for evaluating and shaping personality traits in large language models.",
    url: "https://www.nature.com/natmachintell",
  },
  {
    id: "[13]",
    citation:
      "Lee, Z., Zeng, J., et al. (2025). How to correctly report LLM-as-a-judge evaluations. arXiv:2511.21140.",
    url: "https://arxiv.org/abs/2511.21140",
  },
];

export default function EvalScience() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background: "#000000",
          padding: "6rem 2rem 4rem",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1rem",
            }}
          >
            ARTIFEX LABS · OPEN QUESTIONS IN EVALUATION SCIENCE · MARCH 2026
          </div>
          <h1
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#FFFFFF",
              margin: "0 0 2rem",
            }}
          >
            OPEN QUESTIONS
            <br />
            IN{" "}
            <span style={{ color: "#FF4D00" }}>EVALUATION</span>
            <br />
            SCIENCE
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#AAAAAA",
              maxWidth: 720,
              marginBottom: "2rem",
            }}
          >
            Toward a mature empirical discipline for AI evaluation. A map of
            open questions in validity, reliability, reproducibility, uncertainty,
            fairness, and governance — synthesizing AI evaluation research and
            adjacent measurement traditions from psychometrics, pharmaceuticals,
            aviation, and nuclear systems.
          </p>
          <div
            style={{
              display: "inline-block",
              background: "#FF4D00",
              padding: "0.5rem 1.25rem",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#000000",
            }}
          >
            FRAMING: AI EVALUATION IS NOT ONLY ABOUT RANKING SYSTEMS — IT IS ABOUT
            PRODUCING TRUSTWORTHY EVIDENCE FOR DECISIONS UNDER UNCERTAINTY
          </div>
        </div>
      </section>

      {/* Reader Guide */}
      <section
        style={{
          padding: "3rem 2rem",
          background: "#FFF3EE",
          borderBottom: "2px solid #000000",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FF4D00",
                  marginBottom: "0.75rem",
                }}
              >
                THREE AUDIENCES
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  color: "#333333",
                  margin: "0 0 1rem",
                }}
              >
                This paper is not a catalog of benchmarks or a conventional
                survey. It is a{" "}
                <strong>map of open questions</strong> that clarifies where
                current practice is weak, where adjacent fields offer precedent,
                and what evidence would make evaluations more decision-relevant.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  color: "#333333",
                  margin: 0,
                }}
              >
                AI evaluation has traditionally been treated as a
                benchmark-building exercise, yet modern generative systems demand
                rigor comparable to psychometrics, statistical measurement, and
                experimental design.
              </p>
            </div>
            <div style={{ border: "2px solid #000000" }}>
              <div
                style={{
                  padding: "0.6rem 1.25rem",
                  background: "#000000",
                  borderBottom: "2px solid #000000",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.5rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FF4D00",
                }}
              >
                READER GUIDE — WHERE TO START
              </div>
              {AUDIENCE_GUIDE.map((item, i) => (
                <div
                  key={item.audience}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    borderBottom:
                      i < AUDIENCE_GUIDE.length - 1
                        ? "1px solid #DDDDDD"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      padding: "0.85rem 1.25rem",
                      borderRight: "2px solid #000000",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.52rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#000000",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.audience}
                  </div>
                  <div
                    style={{
                      padding: "0.85rem 1.25rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.73rem",
                      color: "#555555",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.start}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1–4: Why Needed */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#FFFFFF",
          borderBottom: "2px solid #000000",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
              }}
            >
              SECTIONS 01–04
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#000000",
                margin: 0,
              }}
            >
              WHY A SCIENCE OF EVALUATIONS IS NEEDED
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "0",
              border: "2px solid #000000",
            }}
          >
            {[
              {
                title: "BENCHMARK ACCUMULATION ≠ MEASUREMENT SCIENCE",
                body: "Current AI evaluation is powerful but fragmented. Benchmarks are often reused without sufficient evidence of construct validity, reporting is inconsistent, evaluator uncertainty is rarely quantified, and scores are over-interpreted outside the conditions under which they were measured.",
                ref: "§1",
              },
              {
                title: "THREE DECISION FUNCTIONS",
                body: "Evaluations shape: (1) Training decisions — whether a model is genuinely improving or exploiting benchmark artifacts; (2) Selection decisions — model choice, scaffold choice, deployment suitability; (3) Deployment decisions — whether performance is sufficient and residual risks are acceptable.",
                ref: "§2",
              },
              {
                title: "POLICY WEIGHT OF EVALUATION EVIDENCE",
                body: "Evaluations increasingly inform regulatory scrutiny, launch acceptability, incident response, and transparency reporting. The quality of the evaluation itself becomes a governance issue: poor evaluations propagate errors into regulatory decisions.",
                ref: "§3",
              },
              {
                title: "RUBRIC QUALITY AS VALIDITY",
                body: "A second major shift is the move from holistic single-score judgments toward rubric-guided evaluation. Rubric quality is a major determinant of evaluator reliability. The ~26% Rubric Gap (RubricBench) shows this is not a clerical detail but a core scientific question.",
                ref: "§1",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: "1.75rem",
                  borderRight: (i + 1) % 2 !== 0 ? "2px solid #000000" : "none",
                  borderBottom: "2px solid #000000",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.48rem",
                    letterSpacing: "0.08em",
                    color: "#FF4D00",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.ref}
                </div>
                <h3
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: "#000000",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.65,
                    color: "#444444",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Six Desiderata */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#000000",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
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
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              SIX DESIDERATA FOR EVALUATION SCIENCE
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "#888888",
              marginBottom: "2.5rem",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Six top-level properties that any mature science of AI evaluation
            must satisfy, organized to turn recurring failure modes into a
            principled research agenda.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "0",
              border: "2px solid #333333",
            }}
          >
            {DESIDERATA.map((d, i) => (
              <div
                key={d.id}
                style={{
                  padding: "1.75rem",
                  borderRight: (i + 1) % 2 !== 0 ? "2px solid #333333" : "none",
                  borderBottom: "2px solid #333333",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.48rem",
                    letterSpacing: "0.1em",
                    color: "#FF4D00",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}
                >
                  §{d.id}
                </div>
                <h3
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.03em",
                    color: "#FFFFFF",
                    margin: "0 0 0.2rem",
                  }}
                >
                  {d.label}
                </h3>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    color: "#666666",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {d.short}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.76rem",
                    lineHeight: 1.65,
                    color: "#AAAAAA",
                    margin: 0,
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calibration Hierarchy + Conjunction Requirement */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#111111",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.5rem" }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00" }}>
              SECTION 06A
            </span>
            <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, color: "#FFFFFF", margin: 0 }}>
              CALIBRATION HIERARCHY &amp; CONJUNCTION REQUIREMENT
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#888888", marginBottom: "2.5rem", lineHeight: 1.5, maxWidth: 720 }}>
            Evidentiary requirements must scale with deployment stakes. The Calibration Hierarchy encodes this principle across four rungs. The Conjunction Requirement enforces that all desiderata at a given rung must be satisfied simultaneously — strength on one cannot compensate for failure on another.
          </p>

          {/* Calibration Hierarchy table */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1rem" }}>
              TABLE 6A.1 — CALIBRATION HIERARCHY
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Space Mono', monospace", fontSize: "0.72rem" }}>
                <thead>
                  <tr>
                    {["RUNG", "PRIMARY USE", "REQUIRED DESIDERATA", "EXAMPLE CONTEXT"].map((h) => (
                      <th key={h} style={{ background: "#FF4D00", color: "#000000", fontFamily: "'Archivo Black', sans-serif", textTransform: "uppercase", letterSpacing: "-0.02em", padding: "0.75rem 1rem", textAlign: "left", border: "1px solid #FF4D00", fontSize: "0.65rem" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { rung: "EXPLORATORY", use: "Internal research, informal comparison, early prototyping", desiderata: "Reproducibility", example: "Lab experiments, pre-publication ablations" },
                    { rung: "DEVELOPMENT", use: "Model iteration, internal gating, A/B testing", desiderata: "+ Reliability, Validity", example: "Release-candidate regression checks" },
                    { rung: "PRE-DEPLOYMENT", use: "Procurement, regulatory audits, staged pilots", desiderata: "+ Uncertainty, Fairness", example: "Enterprise procurement evaluation" },
                    { rung: "HIGH-STAKES", use: "Clinical, legal, financial, safety-critical deployment", desiderata: "All six (incl. Practicality)", example: "Medical AI certification, judicial tools" },
                  ].map((row, i) => (
                    <tr key={row.rung} style={{ background: i % 2 === 0 ? "#1a1a1a" : "#222222" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#2a1a0a"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "#1a1a1a" : "#222222"; }}>
                      <td style={{ padding: "0.75rem 1rem", border: "1px solid #333333", fontFamily: "'Archivo Black', sans-serif", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FF4D00", whiteSpace: "nowrap" }}>{row.rung}</td>
                      <td style={{ padding: "0.75rem 1rem", border: "1px solid #333333", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#CCCCCC", lineHeight: 1.4 }}>{row.use}</td>
                      <td style={{ padding: "0.75rem 1rem", border: "1px solid #333333", fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#AAAAAA" }}>{row.desiderata}</td>
                      <td style={{ padding: "0.75rem 1rem", border: "1px solid #333333", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#888888" }}>{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tiered thresholds */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1rem" }}>
              TABLE 6A.2 — TIERED KINETIC THRESHOLDS PER DESIDERATUM
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem" }}>
                <thead>
                  <tr>
                    {["DESIDERATUM", "EXPLORATORY", "DEVELOPMENT", "PRE-DEPLOYMENT", "HIGH-STAKES"].map((h) => (
                      <th key={h} style={{ background: "#222222", color: "#FF4D00", fontFamily: "'Archivo Black', sans-serif", textTransform: "uppercase", letterSpacing: "-0.02em", padding: "0.65rem 0.85rem", textAlign: "left", border: "1px solid #444444", fontSize: "0.6rem" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dim: "RELIABILITY", e: "κ ≥ 0.40 · PSI ≥ 0.30", d: "κ ≥ 0.60 · PSI ≥ 0.50", p: "κ ≥ 0.75 · PSI ≥ 0.70", h: "κ ≥ 0.80 · PSI ≥ 0.80" },
                    { dim: "VALIDITY", e: "Construct definition documented", d: "+ Convergent validity evidence", p: "+ Discriminant validity; confounds listed", h: "+ Criterion validity; independent expert review" },
                    { dim: "UNCERTAINTY", e: "90% interval reported", d: "95% interval; narrower than decision margin", p: "95% interval; must be < decision margin", h: "99% interval; ≤ 50% of decision margin" },
                    { dim: "FAIRNESS", e: "—", d: "DIR ≥ 0.75 · Δ < 0.10", p: "DIR ≥ 0.80 · Δ < 0.05 · DIF required", h: "DIR ≥ 0.90 · Δ < 0.03 · DIF per subgroup" },
                    { dim: "REPRODUCIBILITY", e: "Artifacts available on request", d: "SHA-256 hashes · public repo", p: "+ Full re-run within stated interval", h: "+ Independent third-party replication" },
                    { dim: "PRACTICALITY", e: "—", d: "≤ 500 ms/item · within 20× comparable cost", p: "≤ 200 ms/item · within 10× comparable cost", h: "≤ 200 ms/item · cost-benefit justified by governance body" },
                  ].map((row, i) => (
                    <tr key={row.dim} style={{ background: i % 2 === 0 ? "#1a1a1a" : "#222222" }}>
                      <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontFamily: "'Archivo Black', sans-serif", fontSize: "0.65rem", textTransform: "uppercase", color: "#FF4D00", whiteSpace: "nowrap" }}>{row.dim}</td>
                      <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontSize: "0.65rem", color: "#666666" }}>{row.e}</td>
                      <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontSize: "0.65rem", color: "#888888" }}>{row.d}</td>
                      <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontSize: "0.65rem", color: "#AAAAAA" }}>{row.p}</td>
                      <td style={{ padding: "0.65rem 0.85rem", border: "1px solid #333333", fontSize: "0.65rem", color: "#FFFFFF" }}>{row.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#666666", marginTop: "0.75rem", lineHeight: 1.5 }}>
              DIR = Disparate Impact Ratio · Δ = Demographic Parity Gap · PSI = Prompt-Sensitivity Index · DIF = Differential Item Functioning · κ = Cohen's kappa
            </p>
          </div>

          {/* Conjunction Requirement callout */}
          <div style={{ border: "2px solid #FF4D00", padding: "2rem", background: "#0d0d0d" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.75rem" }}>
              CRITICAL PRINCIPLE — THE CONJUNCTION REQUIREMENT
            </div>
            <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "-0.03em", color: "#FFFFFF", margin: "0 0 1rem" }}>
              ALL REQUIRED DESIDERATA MUST BE SATISFIED SIMULTANEOUSLY
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.65, color: "#AAAAAA", margin: "0 0 1.25rem" }}>
              The Conjunction Requirement rejects compensatory reasoning across desiderata. An evaluation cannot "pass" by excelling on three dimensions while ignoring the other three.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: "#333333" }}>
              {[
                { label: "RELIABLE BUT INVALID", consequence: "Consistently wrong. Measures the wrong thing with great precision." },
                { label: "VALID BUT IRREPRODUCIBLE", consequence: "A one-time anecdote. Cannot be verified by anyone else." },
                { label: "VALID + RELIABLE BUT UNFAIR", consequence: "A well-calibrated instrument of inequity." },
                { label: "MEETS ALL BUT UNCERTAINTY TOO WIDE", consequence: "A guess dressed as a measurement — cannot support the decision." },
              ].map((item) => (
                <div key={item.label} style={{ background: "#111111", padding: "1.25rem" }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.4rem" }}>
                    ✗ {item.label}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", lineHeight: 1.4, color: "#AAAAAA", margin: 0 }}>
                    {item.consequence}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Open Questions */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#FFFFFF",
          borderBottom: "2px solid #000000",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
              }}
            >
              SECTION 07
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#000000",
                margin: 0,
              }}
            >
              OPEN QUESTIONS BY DESIDERATUM
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "#555555",
              marginBottom: "2.5rem",
              lineHeight: 1.5,
            }}
          >
            Unresolved methodological problems organized by the six desiderata.
            These are the questions that would move evaluation from leaderboard
            artifact to scientific evidence.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              border: "2px solid #000000",
            }}
          >
            {OPEN_QUESTIONS.map((oq, i) => (
              <div
                key={oq.domain}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  borderBottom:
                    i < OPEN_QUESTIONS.length - 1
                      ? "2px solid #000000"
                      : "none",
                }}
              >
                <div
                  style={{
                    padding: "1.5rem",
                    background: "#000000",
                    borderRight: "2px solid #000000",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.45rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#666666",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {oq.section}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      color: "#FF4D00",
                    }}
                  >
                    {oq.domain}
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {oq.questions.map((q, qi) => (
                    <div
                      key={qi}
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.55rem",
                          color: "#FF4D00",
                          flexShrink: 0,
                          paddingTop: "0.1rem",
                        }}
                      >
                        {qi + 1}.
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.76rem",
                          lineHeight: 1.55,
                          color: "#333333",
                        }}
                      >
                        {q}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Meta-Science — Ladder + Rubric Science callout */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#000000",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
              }}
            >
              SECTION 08
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              META-SCIENCE & GOVERNANCE
            </h2>
          </div>

          {/* Ladder of Evaluations */}
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "1rem",
            }}
          >
            THE LADDER OF EVALUATIONS — RUNG DETERMINES EVIDENCE STANDARD
          </div>
          <div
            style={{
              border: "2px solid #333333",
              marginBottom: "2.5rem",
            }}
          >
            {EVAL_LADDER.map((rung, i) => (
              <div
                key={rung.rung}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr 180px 260px",
                  borderBottom:
                    i < EVAL_LADDER.length - 1 ? "1px solid #222222" : "none",
                }}
              >
                <div
                  style={{
                    padding: "1rem",
                    background: rung.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "1.4rem",
                    letterSpacing: "-0.04em",
                    color: "#FFFFFF",
                    borderRight: "1px solid #222222",
                  }}
                >
                  {rung.rung}
                </div>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderRight: "1px solid #222222",
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {rung.label}
                </div>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderRight: "1px solid #222222",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.5rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#888888",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {rung.use}
                </div>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "#AAAAAA",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {rung.standard}
                </div>
              </div>
            ))}
          </div>

          {/* Rubric Science callout */}
          <div
            style={{
              border: "2px solid #FF4D00",
              padding: "2rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "0.75rem",
              }}
            >
              §8.1.1 RUBRIC SCIENCE AND EVALUATOR SPECIFICATION
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                lineHeight: 1.65,
                color: "#AAAAAA",
                margin: "0 0 1rem",
              }}
            >
              Rubric design should be treated as a core problem in evaluation
              science, not a clerical implementation detail. RubricBench shows
              that evaluation quality depends heavily on the quality of the rubric
              itself — with human-authored rubrics substantially outperforming
              model-generated rubrics on difficult tasks, especially when prompts
              contain implicit constraints, misleading surface cues, or
              safety-sensitive requirements.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                lineHeight: 1.65,
                color: "#AAAAAA",
                margin: "0 0 1.5rem",
              }}
            >
              A mature science of evaluation must ask not only whether a judge is
              reliable, but whether the <strong style={{ color: "#FFFFFF" }}>criteria fed into the judge</strong> are
              instruction-derived, atomic, objective, and aligned with task intent.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "0",
                border: "1px solid #333333",
              }}
            >
              {[
                "What makes a rubric valid for a target construct rather than merely easy to score?",
                "How should implicit constraints, safety boundaries, and refusal logic be encoded so evaluators do not reward superficial compliance?",
                "When can model-generated rubrics be safely used, and when are human-authored rubrics required?",
                "What reporting standard should accompany rubric-guided evaluations, including criterion provenance, grading targets, and stress-test evidence?",
              ].map((q, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem 1.25rem",
                    borderRight: (i + 1) % 2 !== 0 ? "1px solid #333333" : "none",
                    borderBottom: i < 2 ? "1px solid #333333" : "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.73rem",
                    lineHeight: 1.55,
                    color: "#AAAAAA",
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      color: "#FF4D00",
                      flexShrink: 0,
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      paddingTop: "0.05rem",
                    }}
                  >
                    ?
                  </span>
                  {q}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "1.25rem",
                padding: "0.6rem 1rem",
                background: "#111111",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.5rem",
                letterSpacing: "0.06em",
                color: "#FF4D00",
              }}
            >
              → SEE THE RUBRIC HANDBOOK (/rubric) FOR OPERATIONAL GUIDANCE ON
              CONSTRUCTING AND VALIDATING RUBRICS
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Dispositional Measurement Science */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#FFFFFF",
          borderBottom: "2px solid #000000",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
              }}
            >
              SECTION 09
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#000000",
                margin: 0,
              }}
            >
              DISPOSITIONAL MEASUREMENT SCIENCE
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "#555555",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
              maxWidth: 760,
            }}
          >
            A scientific approach to AI measurement requires treating
            capabilities (e.g., mathematical reasoning) and propensities (e.g.,
            deception, power-seeking) as{" "}
            <strong>dispositional properties</strong> — stable, intrinsic
            features characterized by a counterfactual. A disposition is not
            defined by current behavior, but by what would happen under certain
            conditions.
          </p>

          {/* Why current methods fail */}
          <div
            style={{
              border: "2px solid #000000",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                padding: "0.75rem 1.5rem",
                background: "#000000",
                borderBottom: "2px solid #000000",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
              }}
            >
              §9.1 WHY CURRENT PRACTICES FAIL AS SCIENTIFIC MEASUREMENT
            </div>
            {[
              {
                method: "BENCHMARKING",
                problem:
                  "Reporting an average score collapses heterogeneous sources of difficulty into a single number, failing to tell us why the AI failed or how it will perform on slightly different tasks.",
              },
              {
                method: "RED-TEAMING",
                problem:
                  "Probing an AI with adversarial prompts samples only a tiny, adversarially selected region of contextual space — providing anecdotes of failure but not a scientific measure of the system's inclination to cause harm.",
              },
              {
                method: "LATENT-VARIABLE MODELS (IRT)",
                problem:
                  "Even advanced psychometric methods fall short if purely data-driven. IRT often infers 'task difficulty' entirely based on whether the AI failed, making the measurement circular and lacking an independent theory of what actually makes a task difficult.",
              },
            ].map((item, i) => (
              <div
                key={item.method}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  borderBottom: i < 2 ? "1px solid #DDDDDD" : "none",
                }}
              >
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderRight: "2px solid #000000",
                    background: "#FAFAFA",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.52rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.method}
                </div>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.55,
                    color: "#444444",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.problem}
                </div>
              </div>
            ))}
          </div>

          {/* Framework */}
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "1rem",
            }}
          >
            §9.2 FRAMEWORK FOR DISPOSITION-RESPECTING MEASUREMENT
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              border: "2px solid #000000",
              marginBottom: "2rem",
            }}
          >
            {DISPOSITION_STEPS.map((step, i) => (
              <div
                key={step.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 200px 1fr",
                  borderBottom:
                    i < DISPOSITION_STEPS.length - 1
                      ? "2px solid #000000"
                      : "none",
                }}
              >
                <div
                  style={{
                    padding: "1.25rem",
                    background: "#000000",
                    borderRight: "2px solid #000000",
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "1.4rem",
                    letterSpacing: "-0.04em",
                    color: "#FF4D00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.n}
                </div>
                <div
                  style={{
                    padding: "1.25rem",
                    borderRight: "2px solid #000000",
                    background: "#FAFAFA",
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    padding: "1.25rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.76rem",
                    lineHeight: 1.6,
                    color: "#444444",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {step.body}
                </div>
              </div>
            ))}
          </div>

          {/* Why this matters */}
          <div
            style={{
              padding: "1.5rem",
              background: "#000000",
              border: "2px solid #FF4D00",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "0.5rem",
              }}
            >
              §9.3 WHY THIS MATTERS
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                lineHeight: 1.65,
                color: "#AAAAAA",
                margin: 0,
              }}
            >
              Current benchmark and red-team tools collapse as AI systems
              approach superhuman levels or enter ethically prohibited domains.
              We cannot safely ask an AI to design a biological weapon just to
              see if it will. A true measurement science solves this by allowing
              us to measure an AI's behavioral curves in benign, controlled
              regimes and scientifically extrapolate its underlying dispositions
              into unobservable or highly dangerous contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Conclusion */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#000000",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
              }}
            >
              SECTION 10
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              CONCLUSION
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              border: "2px solid #333333",
            }}
          >
            <div style={{ padding: "2rem", borderRight: "2px solid #333333" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  color: "#AAAAAA",
                  margin: "0 0 1rem",
                }}
              >
                Progress in AI evaluation will require moving from benchmark
                accumulation to a true{" "}
                <strong style={{ color: "#FFFFFF" }}>
                  science of measurement
                </strong>
                , where validity, reliability, uncertainty, comparability, and
                governance translation matter as much as raw score differentials.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  color: "#AAAAAA",
                  margin: 0,
                }}
              >
                Stronger evaluation science can support both safer deployment
                and faster innovation by making evidence more legible, more
                comparable, and more decision-relevant.
              </p>
            </div>
            <div style={{ padding: "2rem" }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.5rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#888888",
                  marginBottom: "0.75rem",
                }}
              >
                WHAT MATURITY REQUIRES
              </div>
              {[
                "Validity evidence for every significant evaluation claim",
                "Uncertainty intervals alongside all point estimates",
                "Rubric quality treated as core scientific validity",
                "Evaluation evidence linked to governance decisions",
                "Public infrastructure for calibration and reproducibility",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "0.65rem 0",
                    borderBottom: i < 4 ? "1px solid #222222" : "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                    color: "#CCCCCC",
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "#FF4D00", flexShrink: 0 }}>→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section style={{ padding: "3rem 2rem", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "1rem",
            }}
          >
            PRIMARY REFERENCES
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {REFERENCES_EVAL.map((ref) => (
              <div
                key={ref.id}
                style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    color: "#FF4D00",
                    flexShrink: 0,
                  }}
                >
                  {ref.id}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "#666666",
                    lineHeight: 1.5,
                  }}
                >
                  {ref.citation}{" "}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#FF4D00", textDecoration: "none" }}
                  >
                    {ref.url}
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
