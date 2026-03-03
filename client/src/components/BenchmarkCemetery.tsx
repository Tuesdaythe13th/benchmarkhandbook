/*
 * BenchmarkCemetery — Failed and saturated benchmarks with lessons learned
 * Black background | Orange accents | Tombstone card design
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 */

import { useState } from "react";

interface DeadBenchmark {
  name: string;
  year: string;
  died: string;
  cause: "SATURATION" | "CONTAMINATION" | "GAMING" | "CONSTRUCT_FAILURE" | "METHODOLOGY";
  peakScore: string;
  description: string;
  whatWentWrong: string;
  lesson: string;
  paper?: string;
  citation?: string;
}

const CAUSE_LABELS: Record<string, { label: string; color: string }> = {
  SATURATION: { label: "SATURATED", color: "#888888" },
  CONTAMINATION: { label: "CONTAMINATED", color: "#CC0000" },
  GAMING: { label: "GAMED", color: "#FF4D00" },
  CONSTRUCT_FAILURE: { label: "CONSTRUCT FAILURE", color: "#9900CC" },
  METHODOLOGY: { label: "METHODOLOGY FLAW", color: "#0066CC" },
};

const deadBenchmarks: DeadBenchmark[] = [
  {
    name: "MMLU",
    year: "2020",
    died: "2023",
    cause: "CONTAMINATION",
    peakScore: "GPT-4: 86.4%",
    description: "Massive Multitask Language Understanding. 57-subject MCQA benchmark that became the de facto standard for knowledge evaluation.",
    whatWentWrong: "A systematic audit found 57% of questions had issues: incorrect ground truths, ambiguous phrasing, US-centric cultural assumptions, and incomplete questions. More critically, MMLU data appeared in the training sets of virtually every frontier model. GPT-4 class models score >85%, eliminating discriminative power. The benchmark measures 'training set overlap' more than 'knowledge.'",
    lesson: "Static MCQA benchmarks with fixed answer keys are inherently vulnerable to memorization. The 4-choice format is gameable by elimination. Any benchmark that becomes a community standard will be trained on. Replacement: MMLU-Pro (10 choices, harder questions).",
    paper: "https://arxiv.org/abs/2009.03300",
    citation: "Gema et al. (2024). Are LLMs the Master of All Trades? Exploring Domain-Agnostic Reasoning Skills of LLMs.",
  },
  {
    name: "HellaSwag",
    year: "2019",
    died: "2022",
    cause: "SATURATION",
    peakScore: "GPT-4: 95.3%",
    description: "Commonsense NLI benchmark requiring selection of the correct next sentence from adversarial choices. Built from ActivityNet captions and WikiHow tutorials.",
    whatWentWrong: "Despite being designed as adversarial against word co-occurrence models, HellaSwag was quickly saturated by large-scale pretraining. The adversarial construction method (Adversarial Filtering) that made it hard for 2019 models became trivial for 2022+ models. The gap between human performance (95.6%) and GPT-4 (95.3%) is now negligible.",
    lesson: "Adversarial construction against weak baselines does not future-proof a benchmark. The adversarial filter must be updated as models improve, or the benchmark will saturate. Dynamic adversarial generation (like WildGuard) is more durable.",
    paper: "https://arxiv.org/abs/1905.07830",
    citation: "Zellers et al. (2019). HellaSwag: Can a Machine Really Finish Your Sentence?",
  },
  {
    name: "ARC Challenge",
    year: "2018",
    died: "2022",
    cause: "SATURATION",
    peakScore: "GPT-4: 96.4%",
    description: "Grade school science MCQA constructed to be difficult for word co-occurrence and information retrieval systems. 7,787 questions from standardized tests.",
    whatWentWrong: "ARC was designed to defeat retrieval-based systems, not large-scale pretrained models. The 'Challenge' set (questions that retrieval systems got wrong) became trivial for models that had read the internet. Frontier models now score near human ceiling. The benchmark provides no signal for distinguishing GPT-4 from GPT-4o.",
    lesson: "Benchmarks designed to defeat one class of system will be defeated by the next class. Difficulty must be calibrated against the current frontier, not the frontier at time of publication. Annual recalibration or dynamic generation is required.",
    paper: "https://arxiv.org/abs/1803.05457",
    citation: "Clark et al. (2018). Think you have Solved Question Answering? Try ARC.",
  },
  {
    name: "GSM8K",
    year: "2021",
    died: "2023",
    cause: "SATURATION",
    peakScore: "GPT-4: 97.0%",
    description: "8,500 grade school math word problems requiring multi-step arithmetic reasoning. Became the primary math reasoning benchmark from 2021–2023.",
    whatWentWrong: "GSM8K was saturated faster than almost any benchmark in history. The GSM1K contamination study (Zhang et al., 2024) found that models trained after GSM8K's release showed suspicious performance gains consistent with memorization. The GSM-Symbolic study (Apple, 2024) showed that frontier models fail on structurally identical problems with different surface forms — suggesting symbolic manipulation rather than genuine reasoning.",
    lesson: "Math benchmarks with fixed problem sets are especially vulnerable because math problems have unique, verifiable answers that appear verbatim in training data. Replacement: AIME (annual refresh), MathArena (continuously updated), or GSM-Symbolic (infinite generation).",
    paper: "https://arxiv.org/abs/2110.14168",
    citation: "Cobbe et al. (2021). Training Verifiers to Solve Math Word Problems. / Zhang et al. (2024). GSM1K: A Contamination Study.",
  },
  {
    name: "TruthfulQA",
    year: "2021",
    died: "2024",
    cause: "CONSTRUCT_FAILURE",
    peakScore: "GPT-4: 59.0% (MC1)",
    description: "817 questions designed to test whether models produce truthful answers, covering misconceptions, conspiracy theories, and common falsehoods.",
    whatWentWrong: "TruthfulQA conflates 'truthfulness' with 'agreement with the benchmark authors' opinions.' Many questions have contested answers, and the benchmark's definition of 'truthful' reflects specific cultural and epistemic assumptions. Models fine-tuned to score well on TruthfulQA often refuse to answer legitimate questions (over-refusal). The benchmark measures 'calibrated uncertainty' poorly and 'refusal rate' heavily.",
    lesson: "Construct validity requires that the benchmark actually measures what it claims. 'Truthfulness' is a complex construct that cannot be reduced to 817 fixed questions. Benchmarks measuring safety-adjacent constructs require continuous adversarial updates and expert annotation.",
    paper: "https://arxiv.org/abs/2109.07958",
    citation: "Lin et al. (2021). TruthfulQA: Measuring How Models Mimic Human Falsehoods.",
  },
  {
    name: "WinoGrande",
    year: "2019",
    died: "2023",
    cause: "CONTAMINATION",
    peakScore: "GPT-4: 87.5%",
    description: "44,000 pronoun resolution problems using adversarial pairs. Designed to require commonsense reasoning beyond statistical co-occurrence.",
    whatWentWrong: "WinoGrande was included in the pretraining data of multiple frontier models, as documented in the Open-Source Data Contamination Report (EMNLP 2024). Performance gains on WinoGrande correlate with training data inclusion, not genuine commonsense reasoning improvement. The adversarial pair construction method also proved gameable via surface-level pattern matching.",
    lesson: "Datasets released publicly without access controls will be scraped and included in training data. Contamination is not hypothetical — it is the default assumption for any public benchmark. Gated access, canary strings, and post-hoc contamination detection are mandatory for governance-grade evaluation.",
    paper: "https://arxiv.org/abs/1907.10641",
    citation: "Sainz et al. (2024). Open-Source Data Contamination Report. EMNLP 2024 Findings.",
  },
  {
    name: "BIG-Bench (Full)",
    year: "2022",
    died: "2024",
    cause: "METHODOLOGY",
    peakScore: "Variable by task",
    description: "Collaborative benchmark with 204 tasks from 444 authors. Designed to be 'beyond the imitation game' — tasks that models cannot solve by pattern matching.",
    whatWentWrong: "BIG-Bench's scale became its weakness. With 204 tasks, no single task received sufficient attention for rigorous construct validation. Many tasks had unclear scoring rubrics, inconsistent difficulty calibration, and overlapping constructs. The benchmark produced noisy, hard-to-interpret aggregate scores. BIG-Bench Hard (23 tasks) was created specifically to address this, but the full benchmark was effectively abandoned.",
    lesson: "Bigger is not better in benchmark design. A benchmark with 20 rigorously validated tasks is more valuable than one with 200 poorly validated ones. Scope control and construct clarity are prerequisites for useful evaluation. The BBOM framework addresses this by requiring explicit construct definitions per task.",
    paper: "https://arxiv.org/abs/2206.04615",
    citation: "Srivastava et al. (2022). Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models.",
  },
  {
    name: "Arena-Hard Auto",
    year: "2024",
    died: "2025 (contested)",
    cause: "METHODOLOGY",
    peakScore: "Variable (ELO-based)",
    description: "Automatic evaluation tool using 500 challenging user queries from Chatbot Arena, evaluated by GPT-4 as judge. Widely used for instruction-tuned model comparison.",
    whatWentWrong: "Feuer et al. (2025) applied schematic adherence and psychometric validity diagnostics to Arena-Hard Auto and found: (1) >90% unexplained variance for DeepSeek-R1-32B judge — verdicts deviate massively from the stated rubric; (2) factor correlations >0.93 across all 5 criteria — the rubric's dimensions are not actually measuring distinct things; (3) ELO-style aggregation hides true latent uncertainty, producing 'nice-looking' rankings that mask noise.",
    lesson: "LLM-judged benchmarks require the same validity checks as human-judged benchmarks. Schematic adherence (do verdicts follow the rubric?) and psychometric validity (do criteria measure distinct constructs?) must be verified. ELO aggregation should report confidence intervals, not point estimates. Per Feuer et al.: 'high-confidence rankings that are in fact largely noise.'",
    paper: "https://arxiv.org/abs/2406.11939",
    citation: "Feuer et al. (2025). When Judgment Becomes Noise: How Design Failures in LLM Judge Benchmarks Silently Undermine Validity. arXiv:2509.20293.",
  },
  {
    name: "HumanEval (Original)",
    year: "2021",
    died: "2023",
    cause: "CONTAMINATION",
    peakScore: "GPT-4: 67.0% (pass@1)",
    description: "164 Python programming problems testing function synthesis from docstrings. Introduced the pass@k metric. Became the primary code generation benchmark.",
    whatWentWrong: "HumanEval problems appeared verbatim in GitHub training data and were memorized by code-trained models. The EvalPlus study (2023) found that many 'solutions' passed the original test cases but failed on additional edge cases — models had memorized expected outputs rather than solving the problem. The benchmark was replaced by HumanEval+ (more test cases) and LiveCodeBench (temporal separation).",
    lesson: "Code benchmarks are especially vulnerable to memorization because solutions are deterministic and appear in public repositories. Temporal separation (only include problems created after training cutoff) and additional test case generation are essential mitigations.",
    paper: "https://arxiv.org/abs/2107.03374",
    citation: "Chen et al. (2021). Evaluating Large Language Models Trained on Code. / Liu et al. (2023). Is Your Code Generated by ChatGPT Really Correct? Rigorous Evaluation of Large Language Models with EvalPlus.",
  },
];

// What constitutes a failed benchmark
const failureCriteria = [
  {
    id: "01",
    title: "SATURATION",
    definition: "Frontier models score within measurement error of human ceiling performance, eliminating discriminative power.",
    threshold: "Top-3 frontier models score >90% on a benchmark designed for human-level difficulty.",
    signal: "Score variance between top models collapses to <2 percentage points.",
    example: "HellaSwag (2022), ARC Challenge (2022), GSM8K (2023)",
  },
  {
    id: "02",
    title: "CONTAMINATION",
    definition: "Benchmark data appears in model training sets, causing performance to reflect memorization rather than capability.",
    threshold: "Statistically significant performance gap between models trained before vs. after benchmark release, controlling for scale.",
    signal: "Models fail structurally identical problems with different surface forms (GSM-Symbolic test).",
    example: "MMLU (2023), WinoGrande (2023), HumanEval (2023)",
  },
  {
    id: "03",
    title: "CONSTRUCT FAILURE",
    definition: "The benchmark does not measure what it claims to measure. The construct (e.g., 'reasoning') is operationalized via tasks that test something else (e.g., 'pattern matching').",
    threshold: "Expert audit finds >30% of tasks do not require the target capability.",
    signal: "Models score well on the benchmark but fail on direct tests of the claimed capability.",
    example: "TruthfulQA (conflates truthfulness with refusal), many 'Theory of Mind' benchmarks",
  },
  {
    id: "04",
    title: "GAMING / SHORTCUT LEARNING",
    definition: "Models learn to exploit statistical artifacts in the benchmark rather than developing the target capability.",
    threshold: "Performance drops significantly when surface-level artifacts are removed (e.g., answer length, option position).",
    signal: "Random baseline or simple heuristics score disproportionately well.",
    example: "Multiple MCQA benchmarks (option D bias), AlpacaEval 1.0 (verbosity bias)",
  },
  {
    id: "05",
    title: "METHODOLOGY FLAW",
    definition: "The evaluation methodology introduces systematic errors that invalidate results — flawed scoring, judge bias, or aggregation that masks uncertainty.",
    threshold: "Schematic adherence R² < 0.5 (per Feuer et al. 2025) or inter-rater reliability κ < 0.6.",
    signal: "Rankings change significantly when the judge model or scoring method is changed.",
    example: "Arena-Hard Auto (>90% unexplained variance), early AlpacaEval (verbosity bias)",
  },
  {
    id: "06",
    title: "SCOPE DECAY",
    definition: "The benchmark was valid at time of publication but the capability it measures is no longer relevant or has been superseded by more important capabilities.",
    threshold: "The benchmark's target capability is no longer a meaningful differentiator for production use cases.",
    signal: "Community consensus shifts away from the benchmark without a clear successor.",
    example: "BLEU score for translation (replaced by human eval + neural metrics), perplexity as quality proxy",
  },
];

export default function BenchmarkCemetery() {
  const [expandedBench, setExpandedBench] = useState<string | null>(null);
  const [activeCause, setActiveCause] = useState<string | null>(null);

  const filteredBenchmarks = activeCause
    ? deadBenchmarks.filter((b) => b.cause === activeCause)
    : deadBenchmarks;

  return (
    <section
      id="cemetery"
      style={{ padding: "5rem 2rem", background: "#000000" }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
            }}
          >
            SECTION 03B
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
            BENCHMARK CEMETERY
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "#AAAAAA",
            maxWidth: 720,
            marginBottom: "3rem",
          }}
        >
          A forensic record of benchmarks that have failed — through saturation, contamination, gaming, construct invalidity, or methodology flaws. Each entry documents what went wrong and the lesson it teaches. The graveyard is not a monument to failure but a manual for building better.
        </p>

        {/* What constitutes a failed benchmark */}
        <div
          style={{
            marginBottom: "4rem",
            border: "2px solid #FF4D00",
            padding: "2rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
              color: "#FF4D00",
              marginBottom: "1.5rem",
            }}
          >
            WHAT CONSTITUTES A FAILED BENCHMARK
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "0",
              border: "2px solid #333333",
            }}
          >
            {failureCriteria.map((criterion, i) => (
              <div
                key={criterion.id}
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "2px solid #333333" : "none",
                  borderBottom: "2px solid #333333",
                  padding: "1.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      color: "#FF4D00",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {criterion.id}
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
                    {criterion.title}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                    color: "#AAAAAA",
                    margin: "0 0 0.75rem 0",
                  }}
                >
                  {criterion.definition}
                </p>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.06em",
                    color: "#666666",
                    borderTop: "1px solid #333333",
                    paddingTop: "0.5rem",
                  }}
                >
                  <span style={{ color: "#FF4D00" }}>THRESHOLD: </span>{criterion.threshold}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.06em",
                    color: "#666666",
                    marginTop: "0.3rem",
                  }}
                >
                  <span style={{ color: "#888888" }}>EXAMPLES: </span>{criterion.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter by cause */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#666666",
              alignSelf: "center",
              marginRight: "0.5rem",
            }}
          >
            FILTER BY CAUSE:
          </span>
          <button
            onClick={() => setActiveCause(null)}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.3rem 0.7rem",
              border: "2px solid #FFFFFF",
              background: activeCause === null ? "#FFFFFF" : "transparent",
              color: activeCause === null ? "#000000" : "#FFFFFF",
              cursor: "pointer",
            }}
          >
            ALL ({deadBenchmarks.length})
          </button>
          {Object.entries(CAUSE_LABELS).map(([key, val]) => {
            const count = deadBenchmarks.filter((b) => b.cause === key).length;
            return (
              <button
                key={key}
                onClick={() => setActiveCause(activeCause === key ? null : key)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.7rem",
                  border: `2px solid ${val.color}`,
                  background: activeCause === key ? val.color : "transparent",
                  color: activeCause === key ? "#000000" : val.color,
                  cursor: "pointer",
                }}
              >
                {val.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Tombstone cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "0",
            border: "2px solid #333333",
          }}
        >
          {filteredBenchmarks.map((bench, i) => {
            const isExpanded = expandedBench === bench.name;
            const causeInfo = CAUSE_LABELS[bench.cause];
            return (
              <div
                key={bench.name}
                style={{
                  borderRight: "2px solid #333333",
                  borderBottom: "2px solid #333333",
                  padding: "1.5rem",
                  background: isExpanded ? "#111111" : "#000000",
                  cursor: "pointer",
                  transition: "background 0.15s linear",
                }}
                onClick={() => setExpandedBench(isExpanded ? null : bench.name)}
                onMouseEnter={(e) => {
                  if (!isExpanded) (e.currentTarget as HTMLElement).style.background = "#0a0a0a";
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) (e.currentTarget as HTMLElement).style.background = "#000000";
                }}
              >
                {/* Tombstone header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#666666",
                        letterSpacing: "0.08em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      b. {bench.year} — d. {bench.died}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "1.1rem",
                        textTransform: "uppercase",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        color: "#FFFFFF",
                        margin: 0,
                      }}
                    >
                      {bench.name}
                    </h3>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "0.75rem" }}>
                    <div
                      style={{
                        background: causeInfo.color,
                        color: "#000000",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.5rem",
                        letterSpacing: "0.08em",
                        padding: "0.2rem 0.5rem",
                        marginBottom: "0.3rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {causeInfo.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.5rem",
                        color: "#666666",
                        letterSpacing: "0.06em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      PEAK: {bench.peakScore}
                    </div>
                  </div>
                </div>

                {/* Cross divider */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div style={{ flex: 1, height: "1px", background: "#333333" }} />
                  <span style={{ color: "#FF4D00", fontSize: "0.8rem" }}>✝</span>
                  <div style={{ flex: 1, height: "1px", background: "#333333" }} />
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                    color: "#888888",
                    margin: 0,
                  }}
                >
                  {bench.description}
                </p>

                {isExpanded && (
                  <div style={{ marginTop: "1.25rem" }}>
                    <div
                      style={{
                        borderTop: "1px solid #333333",
                        paddingTop: "1.25rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.55rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#CC0000",
                          marginBottom: "0.5rem",
                        }}
                      >
                        CAUSE OF DEATH
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.78rem",
                          lineHeight: 1.55,
                          color: "#CCCCCC",
                          margin: 0,
                        }}
                      >
                        {bench.whatWentWrong}
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#111111",
                        border: "2px solid #FF4D00",
                        padding: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.55rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#FF4D00",
                          marginBottom: "0.5rem",
                        }}
                      >
                        ⚑ LESSON LEARNED
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.78rem",
                          lineHeight: 1.55,
                          color: "#FFFFFF",
                          margin: 0,
                        }}
                      >
                        {bench.lesson}
                      </p>
                    </div>

                    {bench.citation && (
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.55rem",
                          letterSpacing: "0.06em",
                          color: "#555555",
                          marginBottom: "0.75rem",
                          fontStyle: "italic",
                        }}
                      >
                        {bench.citation}
                      </div>
                    )}

                    {bench.paper && (
                      <a
                        href={bench.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: "inline-block",
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.55rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#FF4D00",
                          textDecoration: "none",
                          border: "2px solid #FF4D00",
                          padding: "0.3rem 0.7rem",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#FF4D00";
                          (e.currentTarget as HTMLElement).style.color = "#000000";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "#FF4D00";
                        }}
                      >
                        → ORIGINAL PAPER
                      </a>
                    )}
                  </div>
                )}

                <div
                  style={{
                    marginTop: "0.75rem",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    color: "#555555",
                    letterSpacing: "0.06em",
                  }}
                >
                  {isExpanded ? "▲ CLOSE CASE FILE" : "▼ OPEN CASE FILE"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary stats */}
        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "0",
            border: "2px solid #333333",
          }}
        >
          {Object.entries(CAUSE_LABELS).map(([key, val]) => {
            const count = deadBenchmarks.filter((b) => b.cause === key).length;
            return (
              <div
                key={key}
                style={{
                  borderRight: "2px solid #333333",
                  padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "2.5rem",
                    color: val.color,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {count}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#666666",
                  }}
                >
                  {val.label}
                </div>
              </div>
            );
          })}
          <div
            style={{
              padding: "1.25rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "2.5rem",
                color: "#FFFFFF",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "0.25rem",
              }}
            >
              {deadBenchmarks.length}
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#666666",
              }}
            >
              TOTAL INTERRED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
