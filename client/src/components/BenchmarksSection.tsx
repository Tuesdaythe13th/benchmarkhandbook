/*
 * BenchmarksSection — Benchmark catalog by category
 * White background | Tabbed by domain | Benchmark pills
 */

import { useState } from "react";

interface Benchmark {
  name: string;
  year: string;
  desc: string;
  status: "ACTIVE" | "SATURATED" | "EMERGING" | "CAUTION";
  type: string;
}

const categories: { id: string; label: string; benchmarks: Benchmark[] }[] = [
  {
    id: "reasoning",
    label: "REASONING",
    benchmarks: [
      {
        name: "ARC Challenge",
        year: "2018",
        desc: "Grade school science MCQA built from human tests. Adversarially constructed for word co-occurrence systems. Still used for pretraining ablations.",
        status: "SATURATED",
        type: "MCQA",
      },
      {
        name: "HellaSwag",
        year: "2019",
        desc: "Requires selecting the correct next sentence from adversarial choices. Tests physical commonsense grounding via ActivityNet captions and WikiHow tutorials.",
        status: "SATURATED",
        type: "MCQA",
      },
      {
        name: "WinoGrande",
        year: "2019",
        desc: "Crowdsourced pronoun resolution using adversarial pairs. Tests commonsense reasoning through fill-in-the-blank format.",
        status: "SATURATED",
        type: "MCQA",
      },
      {
        name: "MuSR",
        year: "2023",
        desc: "Complex reasoning instances including 1000-word murder mysteries using neurosymbolic generation. Tests multi-step logical inference.",
        status: "ACTIVE",
        type: "GENERATIVE",
      },
      {
        name: "ZebraLogic",
        year: "2024",
        desc: "Algorithmically produced logic grid puzzles using SAT solvers. Virtually infinite generation prevents contamination.",
        status: "ACTIVE",
        type: "GENERATIVE",
      },
    ],
  },
  {
    id: "knowledge",
    label: "KNOWLEDGE",
    benchmarks: [
      {
        name: "MMLU",
        year: "2020",
        desc: "Massive Multitask Language Understanding. Reached saturation/contamination. Issues: incomplete questions, incorrect ground truths, americano-centrism.",
        status: "SATURATED",
        type: "MCQA",
      },
      {
        name: "MMLU-Pro",
        year: "2024",
        desc: "Extended MMLU with more complex questions and additional answer choices. The main community replacement for MMLU. Used for pretraining evaluations.",
        status: "ACTIVE",
        type: "MCQA",
      },
      {
        name: "GPQA Diamond",
        year: "2023",
        desc: "PhD-level questions in biology, chemistry, and physics. Designed to be answerable only by domain experts. Starting to reach contamination.",
        status: "CAUTION",
        type: "MCQA",
      },
      {
        name: "Humanity's Last Exam",
        year: "2024",
        desc: "2,500 crowdsourced expert questions across domains. Mostly private. Requires both complex knowledge and reasoning. Not yet broken.",
        status: "ACTIVE",
        type: "GENERATIVE",
      },
      {
        name: "GlobalMMLU",
        year: "2024",
        desc: "MMLU translated and annotated for cultural bias. Enables cross-cultural evaluation and bias detection.",
        status: "ACTIVE",
        type: "MCQA",
      },
    ],
  },
  {
    id: "math",
    label: "MATH",
    benchmarks: [
      {
        name: "GSM8K",
        year: "2021",
        desc: "Grade school math problems. Extended by GSM1K (contamination test), GSM-Plus (adversarial), and GSM-Symbolic (template-based, infinite generation).",
        status: "SATURATED",
        type: "GENERATIVE",
      },
      {
        name: "MATH-500",
        year: "2021",
        desc: "Representative 500-problem subset of MATH Olympiad problems. Sampled to avoid overfitting. Recommended for pretraining evaluations.",
        status: "ACTIVE",
        type: "GENERATIVE",
      },
      {
        name: "AIME 2024/2025",
        year: "2024",
        desc: "American Mathematics Olympiad datasets. Renewed annually with equivalent difficulty, enabling contamination detection by comparing year-over-year results.",
        status: "ACTIVE",
        type: "GENERATIVE",
      },
      {
        name: "Math-Arena",
        year: "2025",
        desc: "Up-to-date compilation of competitions and olympiads, including AIME25. Regularly actualized. Recommended for post-training evaluation.",
        status: "EMERGING",
        type: "GENERATIVE",
      },
      {
        name: "FrontierMath",
        year: "2024",
        desc: "Considerably harder math problems written individually by mathematicians. Theoretically private. Caution: OpenAI reportedly had access to parts of the dataset.",
        status: "CAUTION",
        type: "GENERATIVE",
      },
    ],
  },
  {
    id: "code",
    label: "CODE",
    benchmarks: [
      {
        name: "HumanEval+",
        year: "2023",
        desc: "EvalPlus extension of HumanEval with more test cases and bug fixes. Includes sandbox for safe code execution. Introduced pass@k estimator.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
      },
      {
        name: "MBPP+",
        year: "2023",
        desc: "EvalPlus extension of MBPP (1K crowdsourced Python problems). Additional test cases and fixed bugs from the original dataset.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
      },
      {
        name: "LiveCodeBench",
        year: "2024",
        desc: "Stores problem creation date to compare performance on pre/post-training problems. Excellent contamination-free benchmark via temporal separation.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
      },
      {
        name: "SWE-Bench Verified",
        year: "2024",
        desc: "Higher quality subset of SWE-Bench for real-world software engineering tasks. Tests end-to-end code repair on actual GitHub issues.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
      },
      {
        name: "AiderBench",
        year: "2024",
        desc: "Evaluates code assistant usefulness in realistic development scenarios. Recommended alongside LiveCodeBench for final model evaluation.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
      },
    ],
  },
  {
    id: "instruction",
    label: "INSTRUCTION",
    benchmarks: [
      {
        name: "IFEval",
        year: "2023",
        desc: "Models follow formatting instructions (keywords, punctuation, word counts, markdown). Each condition verified programmatically — rare strict generative eval without a judge.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
      },
      {
        name: "IFBench",
        year: "2025",
        desc: "Extension of IFEval with broader instruction types and harder constraints. Recommended for comparing post-trained models.",
        status: "EMERGING",
        type: "FUNCTIONAL",
      },
      {
        name: "CoCoNot",
        year: "2024",
        desc: "Tests non-compliance: models evaluated on underspecified, unanswerable, or unsafe requests. Measures over-refusal and appropriate boundary-setting.",
        status: "ACTIVE",
        type: "CLASSIFICATION",
      },
    ],
  },
  {
    id: "agentic",
    label: "AGENTIC",
    benchmarks: [
      {
        name: "GAIA",
        year: "2023",
        desc: "Kickstarted modern agentic evaluation. Models use tools, reasoning, and retrieval to solve real-life queries. 3 difficulty levels; Level 1 now saturated.",
        status: "ACTIVE",
        type: "AGENT",
      },
      {
        name: "TauBench",
        year: "2024",
        desc: "Evaluates tool-use in retail and airline domains. Correct when actions update database correctly AND user query is answered. LLM-mocked user.",
        status: "ACTIVE",
        type: "AGENT",
      },
      {
        name: "BFCL v3",
        year: "2025",
        desc: "Berkeley Function Calling Leaderboard. 4 subsets: single-turn, crowdsourced real calls, multi-turn, and agentic (web search, memory, SQL). Uses AST + execution matching.",
        status: "ACTIVE",
        type: "TOOL-CALL",
      },
      {
        name: "BrowseComp",
        year: "2025",
        desc: "Tests web-based information retrieval. Questions constructed from results, with varying difficulty. Tests if models can find specific answers using online tools.",
        status: "EMERGING",
        type: "AGENT",
      },
      {
        name: "HELMET",
        year: "2024",
        desc: "Combines RAG, QA, recall, citation generation, summarization, and reranking into a single long-context dataset. Still discriminative in 2025.",
        status: "ACTIVE",
        type: "LONG-CONTEXT",
      },
      {
        name: "ARC-AGI3",
        year: "2025",
        desc: "Latest version with entire new games requiring exploration, complex planning, and memory management. Still in development. Recommended when released.",
        status: "EMERGING",
        type: "GAME",
      },
    ],
  },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  ACTIVE: { bg: "#000000", color: "#FFFFFF" },
  SATURATED: { bg: "#888888", color: "#FFFFFF" },
  EMERGING: { bg: "#FF4D00", color: "#000000" },
  CAUTION: { bg: "#FFD700", color: "#000000" },
};

export default function BenchmarksSection() {
  const [activeTab, setActiveTab] = useState("reasoning");

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="benchmarks" style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
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
            SECTION 03
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
            BENCHMARK
            <br />
            CATALOG 2025
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.6,
            color: "#555555",
            maxWidth: 700,
            marginBottom: "2.5rem",
          }}
        >
          A curated reference of benchmarks organized by capability domain. Status indicators reflect
          current community usage: <strong>ACTIVE</strong> (discriminative), <strong>SATURATED</strong> (lost discriminative power),
          <strong> EMERGING</strong> (recommended), <strong>CAUTION</strong> (contamination risk).
        </p>

        {/* Status legend */}
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {Object.entries(statusColors).map(([status, colors]) => (
            <div
              key={status}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span
                style={{
                  background: colors.bg,
                  color: colors.color,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.15rem 0.5rem",
                  fontWeight: 700,
                }}
              >
                {status}
              </span>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: "2px solid #000000",
            marginBottom: "2.5rem",
            overflowX: "auto",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.75rem 1.25rem",
                border: "none",
                borderBottom: activeTab === cat.id ? "3px solid #FF4D00" : "3px solid transparent",
                background: activeTab === cat.id ? "#000000" : "#FFFFFF",
                color: activeTab === cat.id ? "#FF4D00" : "#000000",
                cursor: "pointer",
                transition: "all 0.1s linear",
                whiteSpace: "nowrap",
                marginBottom: -2,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Benchmark cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1px",
            background: "#000000",
            border: "2px solid #000000",
          }}
        >
          {activeCategory.benchmarks.map((bench) => {
            const statusStyle = statusColors[bench.status];
            return (
              <div
                key={bench.name}
                style={{
                  background: "#FFFFFF",
                  padding: "1.75rem",
                  transition: "transform 0.15s linear, box-shadow 0.15s linear",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translate(4px, -4px)";
                  el.style.boxShadow = "-4px 4px 0px #000000";
                  el.style.zIndex = "1";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                  el.style.zIndex = "0";
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.75rem",
                    gap: "0.5rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                      color: "#000000",
                      margin: 0,
                    }}
                  >
                    {bench.name}
                  </h4>
                  <span
                    style={{
                      background: statusStyle.bg,
                      color: statusStyle.color,
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.5rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "0.15rem 0.4rem",
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    {bench.status}
                  </span>
                </div>

                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#888888",
                    }}
                  >
                    {bench.year}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#FF4D00",
                      border: "1px solid #FF4D00",
                      padding: "0 0.3rem",
                    }}
                  >
                    {bench.type}
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
                  {bench.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contamination note */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            borderLeft: "4px solid #FF4D00",
            background: "#fff3ee",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "0.5rem",
            }}
          >
            CONTAMINATION DOCTRINE
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              lineHeight: 1.5,
              color: "#333333",
              margin: 0,
            }}
          >
            Assume that any dataset publicly available on the internet is or will be contaminated.
            Mitigations: canary strings (like BigBench), encrypted/gated access, dynamic benchmarks with regular updates,
            and post-hoc contamination detection via generation perplexity or adversarial prompt variants.
            A contaminated dataset can still provide signal during training — contamination does not equal uselessness.
          </p>
        </div>
      </div>
    </section>
  );
}
