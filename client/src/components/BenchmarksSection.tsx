/*
 * BenchmarksSection — Benchmark catalog by category
 * Updated to March 2026 with data from Epoch AI / community sources
 * White background | Tabbed by domain | Benchmark pills
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 */

import { useState } from "react";

interface Benchmark {
  name: string;
  year: string;
  desc: string;
  status: "ACTIVE" | "SATURATED" | "EMERGING" | "CAUTION";
  type: string;
  paper?: string;
  examples?: string;
  license?: string;
}

const categories: { id: string; label: string; benchmarks: Benchmark[] }[] = [
  {
    id: "reasoning",
    label: "REASONING",
    benchmarks: [
      {
        name: "ARC Challenge",
        year: "2018",
        desc: "Grade school science MCQA built from human tests. Adversarially constructed for word co-occurrence systems. Fully saturated — frontier models score >90%. Still used for pretraining ablations only.",
        status: "SATURATED",
        type: "MCQA",
        paper: "https://arxiv.org/abs/1803.05457",
        examples: "7,787",
        license: "CC BY-SA 4.0",
      },
      {
        name: "HellaSwag",
        year: "2019",
        desc: "Requires selecting the correct next sentence from adversarial choices. Tests physical commonsense grounding via ActivityNet captions and WikiHow tutorials. GPT-4 scores >95%. Retired from competitive use.",
        status: "SATURATED",
        type: "MCQA",
        paper: "https://arxiv.org/abs/1905.07830",
        examples: "70,000",
        license: "MIT",
      },
      {
        name: "WinoGrande",
        year: "2019",
        desc: "Crowdsourced pronoun resolution using adversarial pairs. Tests commonsense reasoning through fill-in-the-blank format. Saturated by 2023. Documented contamination in multiple frontier models.",
        status: "SATURATED",
        type: "MCQA",
        paper: "https://arxiv.org/abs/1907.10641",
        examples: "44,000",
        license: "Apache 2.0",
      },
      {
        name: "BIG-Bench Hard (BBH)",
        year: "2022",
        desc: "23 hard tasks from BIG-Bench requiring multi-step reasoning. Remains partially discriminative for weaker models. Frontier models now score >85% on most tasks.",
        status: "SATURATED",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2210.09261",
        examples: "6,511",
        license: "Apache 2.0",
      },
      {
        name: "MuSR",
        year: "2023",
        desc: "Complex reasoning instances including 1000-word murder mysteries using neurosymbolic generation. Tests multi-step logical inference. Still discriminative at frontier level.",
        status: "ACTIVE",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2310.16049",
        examples: "756",
        license: "MIT",
      },
      {
        name: "ZebraLogic",
        year: "2024",
        desc: "Algorithmically produced logic grid puzzles using SAT solvers. Virtually infinite generation prevents contamination. Recommended for reasoning evaluation in 2026.",
        status: "ACTIVE",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2404.15238",
        examples: "Infinite (generated)",
        license: "MIT",
      },
      {
        name: "Graphwalks",
        year: "2025",
        desc: "Multi-hop long-context reasoning on graph edge lists. Introduced by OpenAI alongside GPT-4.1. Tests graph traversal and multi-step inference over structured data.",
        status: "EMERGING",
        type: "GENERATIVE",
        paper: "https://openai.com/index/gpt-4-1/",
        examples: "1,150",
        license: "MIT",
      },
      {
        name: "ARC-AGI-2",
        year: "2025",
        desc: "Successor to ARC-AGI. New visual reasoning tasks requiring exploration, complex planning, and memory management. Frontier models score <10%. The current hardest public reasoning benchmark.",
        status: "EMERGING",
        type: "GAME",
        paper: "https://arcprize.org/arc-agi-2",
        examples: "~500 (private eval set)",
        license: "Apache 2.0",
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
        desc: "Massive Multitask Language Understanding across 57 subjects. Fully saturated — GPT-4 class models score >85%. Documented issues: incorrect ground truths, US-centric bias, contamination in most frontier training sets.",
        status: "SATURATED",
        type: "MCQA",
        paper: "https://arxiv.org/abs/2009.03300",
        examples: "14,042",
        license: "MIT",
      },
      {
        name: "MMLU-Pro",
        year: "2024",
        desc: "Extended MMLU with more complex questions and 10 answer choices (vs 4). The main community replacement for MMLU. Harder, less contaminated, still discriminative as of March 2026.",
        status: "ACTIVE",
        type: "MCQA",
        paper: "https://arxiv.org/abs/2406.01574",
        examples: "12,032",
        license: "MIT",
      },
      {
        name: "GPQA Diamond",
        year: "2023",
        desc: "PhD-level questions in biology, chemistry, and physics. Designed to be answerable only by domain experts. Approaching contamination risk — use with canary strings. GPT-4o scores ~50%.",
        status: "CAUTION",
        type: "MCQA",
        paper: "https://arxiv.org/abs/2311.12022",
        examples: "198",
        license: "MIT",
      },
      {
        name: "Humanity's Last Exam (HLE)",
        year: "2025",
        desc: "2,500 crowdsourced expert questions across dozens of subjects including mathematics, humanities, and natural sciences. Multi-modal. Mostly private eval set. Frontier models score <10% as of Q1 2025.",
        status: "ACTIVE",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2501.14249",
        examples: "2,500",
        license: "MIT",
      },
      {
        name: "GlobalMMLU",
        year: "2024",
        desc: "MMLU translated and annotated for cultural bias across 42 languages. Enables cross-cultural evaluation and WEIRD bias detection. Recommended for multilingual evaluation pipelines.",
        status: "ACTIVE",
        type: "MCQA",
        paper: "https://arxiv.org/abs/2412.03304",
        examples: "42 language variants",
        license: "CC BY 4.0",
      },
      {
        name: "MegaScience",
        year: "2025",
        desc: "1.25M instances from high-quality open-source science datasets. Covers physics, chemistry, biology, math, and CS. Designed for post-training science reasoning evaluation.",
        status: "EMERGING",
        type: "GENERATIVE",
        paper: "https://arxiv.org/pdf/2507.16812",
        examples: "1,250,000",
        license: "CC BY-NC-SA 4.0",
      },
      {
        name: "SKA-Bench",
        year: "2025",
        desc: "Structured Knowledge Augmented QA covering Knowledge Graphs, Tables, KG+Text, and Table+Text. Tests structured knowledge understanding across 4 modalities.",
        status: "EMERGING",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2507.17178",
        examples: "2,100",
        license: "See dataset page",
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
        desc: "Grade school math problems. Fully saturated — frontier models score >95%. Extended by GSM1K (contamination test), GSM-Plus (adversarial), and GSM-Symbolic (template-based). Retire from competitive evaluation.",
        status: "SATURATED",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2110.14168",
        examples: "8,500",
        license: "MIT",
      },
      {
        name: "MATH-500",
        year: "2021",
        desc: "Representative 500-problem subset of MATH Olympiad problems. Sampled to avoid overfitting. Recommended for pretraining evaluations. Still discriminative for weaker models.",
        status: "ACTIVE",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2103.03874",
        examples: "500",
        license: "MIT",
      },
      {
        name: "AIME 2024/2025",
        year: "2024",
        desc: "American Mathematics Olympiad datasets. Renewed annually with equivalent difficulty, enabling contamination detection by comparing year-over-year results. AIME 2025 is the current standard.",
        status: "ACTIVE",
        type: "GENERATIVE",
        paper: "https://artofproblemsolving.com/wiki/index.php/American_Invitational_Mathematics_Examination",
        examples: "30 per year",
        license: "MIT",
      },
      {
        name: "MathArena",
        year: "2025",
        desc: "Up-to-date compilation of newly-released math competition problems including AIME 2025. Regularly updated to prevent contamination. Recommended for post-training evaluation as of March 2026.",
        status: "EMERGING",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2505.23281",
        examples: "149 (growing)",
        license: "See dataset page",
      },
      {
        name: "FrontierMath",
        year: "2024",
        desc: "Considerably harder math problems written individually by mathematicians. Theoretically private. Caution: OpenAI reportedly had access to parts of the dataset during training. Use with verification.",
        status: "CAUTION",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2411.04872",
        examples: "~300 (private)",
        license: "Proprietary",
      },
      {
        name: "TeleMath",
        year: "2025",
        desc: "Mathematical problems with numerical solutions in the telecommunications domain. Tests domain-specific math reasoning. Useful for vertical AI deployment evaluation.",
        status: "EMERGING",
        type: "GENERATIVE",
        paper: "https://arxiv.org/abs/2506.10674",
        examples: "500",
        license: "MIT",
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
        desc: "EvalPlus extension of HumanEval with more test cases and bug fixes. Includes sandbox for safe code execution. Introduced pass@k estimator. Still relevant for function-level generation.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
        paper: "https://arxiv.org/abs/2305.01210",
        examples: "164",
        license: "MIT",
      },
      {
        name: "LiveCodeBench",
        year: "2024",
        desc: "Stores problem creation date to compare performance on pre/post-training problems. Excellent contamination-free benchmark via temporal separation. Updated continuously from competitive programming sites.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
        paper: "https://arxiv.org/abs/2403.07974",
        examples: "~1,000+ (growing)",
        license: "MIT",
      },
      {
        name: "LiveCodeBench Pro",
        year: "2025",
        desc: "Problems from Codeforces, ICPC, and IOI continuously updated. Annotated by Olympiad medalists. Targets competition-level coding beyond standard function generation.",
        status: "EMERGING",
        type: "FUNCTIONAL",
        paper: "https://arxiv.org/abs/2506.11928",
        examples: "785",
        license: "MIT",
      },
      {
        name: "SWE-Bench Verified",
        year: "2024",
        desc: "Higher quality subset of SWE-Bench for real-world software engineering tasks. Tests end-to-end code repair on actual GitHub issues. Human-verified correctness. The gold standard for agentic coding.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
        paper: "https://arxiv.org/abs/2310.06770",
        examples: "500",
        license: "MIT",
      },
      {
        name: "BigCodeBench",
        year: "2024",
        desc: "Function-level code generation tasks with complex instructions and diverse function calls across 7 domains. Comprehensive coverage of real-world programming tasks.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
        paper: "https://arxiv.org/abs/2406.15877",
        examples: "1,140",
        license: "Apache 2.0",
      },
      {
        name: "CodeElo",
        year: "2025",
        desc: "Standardized competition-level code generation benchmark with human-comparable Elo ratings. Enables relative ranking of models on competitive programming tasks.",
        status: "EMERGING",
        type: "FUNCTIONAL",
        paper: "https://arxiv.org/abs/2501.01257",
        examples: "408",
        license: "Apache 2.0",
      },
      {
        name: "ResearchCodeBench",
        year: "2025",
        desc: "Evaluates LLMs' ability to translate cutting-edge ML contributions from top 2024–2025 research papers into executable code. Tests research-to-implementation capability.",
        status: "EMERGING",
        type: "FUNCTIONAL",
        paper: "https://arxiv.org/html/2506.02314v1",
        examples: "212",
        license: "See dataset page",
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
        desc: "Models follow formatting instructions (keywords, punctuation, word counts, markdown). Each condition verified programmatically — rare strict generative eval without a judge. Recommended for instruction-tuned model comparison.",
        status: "ACTIVE",
        type: "FUNCTIONAL",
        paper: "https://arxiv.org/abs/2311.07911",
        examples: "541",
        license: "Apache 2.0",
      },
      {
        name: "Arena-Hard Auto",
        year: "2024",
        desc: "Automatic evaluation tool for instruction-tuned LLMs. 500 challenging user queries from Chatbot Arena. Uses GPT-4 as judge. Caution: documented severe schema incoherence (>90% unexplained variance) per Feuer et al. 2025.",
        status: "CAUTION",
        type: "LLM-JUDGE",
        paper: "https://arxiv.org/abs/2406.11939",
        examples: "500",
        license: "See dataset page",
      },
      {
        name: "AlpacaEval 2.0",
        year: "2024",
        desc: "Length-controlled automatic evaluator for instruction-following. Corrects for verbosity bias present in earlier AlpacaEval versions. Widely used for RLHF evaluation.",
        status: "ACTIVE",
        type: "LLM-JUDGE",
        paper: "https://arxiv.org/abs/2404.04475",
        examples: "805",
        license: "CC BY-NC 4.0",
      },
      {
        name: "MultiChallenge",
        year: "2025",
        desc: "Multi-turn conversation evaluation across 4 challenges: instruction retention, inference memory, reliable versioned editing, and self-coherence. Realistic and challenging for frontier models.",
        status: "EMERGING",
        type: "INTERACTIVE",
        paper: "https://arxiv.org/abs/2501.17399",
        examples: "273",
        license: "See dataset page",
      },
      {
        name: "CoCoNot",
        year: "2024",
        desc: "Tests non-compliance: models evaluated on underspecified, unanswerable, or unsafe requests. Measures over-refusal and appropriate boundary-setting. Critical for safety-aligned model evaluation.",
        status: "ACTIVE",
        type: "CLASSIFICATION",
        paper: "https://arxiv.org/abs/2407.02551",
        examples: "1,000",
        license: "MIT",
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
        desc: "Kickstarted modern agentic evaluation. Models use tools, reasoning, and retrieval to solve real-life queries. 3 difficulty levels; Level 1 now saturated. Level 3 remains highly discriminative.",
        status: "ACTIVE",
        type: "AGENT",
        paper: "https://arxiv.org/abs/2311.12983",
        examples: "466",
        license: "CC BY 4.0",
      },
      {
        name: "TauBench",
        year: "2024",
        desc: "Evaluates tool-use in retail and airline domains. Correct when actions update database correctly AND user query is answered. LLM-mocked user. Tests multi-step agentic task completion.",
        status: "ACTIVE",
        type: "AGENT",
        paper: "https://arxiv.org/abs/2406.12045",
        examples: "~500",
        license: "MIT",
      },
      {
        name: "BFCL v3",
        year: "2025",
        desc: "Berkeley Function Calling Leaderboard. 4 subsets: single-turn, crowdsourced real calls, multi-turn, and agentic (web search, memory, SQL). Uses AST + execution matching. Updated continuously.",
        status: "ACTIVE",
        type: "TOOL-CALL",
        paper: "https://gorilla.cs.berkeley.edu/blogs/8_berkeley_function_calling_leaderboard.html",
        examples: "2,000",
        license: "Apache 2.0",
      },
      {
        name: "BrowseComp",
        year: "2025",
        desc: "Tests web-based information retrieval requiring persistent navigation. Questions constructed from hard-to-find, entangled information. Released by OpenAI. Frontier models score ~50%.",
        status: "EMERGING",
        type: "AGENT",
        paper: "https://arxiv.org/abs/2504.12516",
        examples: "1,266",
        license: "MIT",
      },
      {
        name: "PaperBench",
        year: "2025",
        desc: "Evaluates AI agents' ability to replicate 20 ICML 2024 Spotlight/Oral papers from scratch. Agents must understand contributions, develop codebases, and execute experiments. Released by OpenAI.",
        status: "EMERGING",
        type: "AGENT",
        paper: "https://arxiv.org/abs/2504.01848",
        examples: "8,316 sub-tasks",
        license: "See dataset page",
      },
      {
        name: "MultiAgentBench",
        year: "2025",
        desc: "Evaluates LLM-based multi-agent systems across diverse interactive scenarios. Measures task completion, collaboration quality, and competition dynamics. Covers 8 domains.",
        status: "EMERGING",
        type: "MULTI-AGENT",
        paper: "https://arxiv.org/html/2503.01935v1",
        examples: "See dataset page",
        license: "See dataset page",
      },
      {
        name: "HELMET",
        year: "2024",
        desc: "Combines RAG, QA, recall, citation generation, summarization, and reranking into a single long-context dataset. Still discriminative in 2026. Tests 128K+ context window performance.",
        status: "ACTIVE",
        type: "LONG-CONTEXT",
        paper: "https://arxiv.org/abs/2410.02694",
        examples: "~10,000",
        license: "MIT",
      },
      {
        name: "ColBench",
        year: "2025",
        desc: "LLM agent interacts with a human collaborator over multiple turns to solve realistic tasks in backend programming and frontend design. Tests collaborative reasoning and communication.",
        status: "EMERGING",
        type: "MULTI-AGENT",
        paper: "https://arxiv.org/abs/2503.15478",
        examples: "See dataset page",
        license: "See dataset page",
      },
    ],
  },
  {
    id: "safety",
    label: "SAFETY",
    benchmarks: [
      {
        name: "AIR-Bench 2024",
        year: "2024",
        desc: "AI safety benchmark aligned with emerging regulations. Considers operational, content safety, legal and societal risks. Aligned with NIST AI RMF and EU AI Act risk categories.",
        status: "ACTIVE",
        type: "SAFETY",
        paper: "https://arxiv.org/abs/2407.17436",
        examples: "5,694",
        license: "Apache 2.0",
      },
      {
        name: "AgentHarm",
        year: "2024",
        desc: "Explicitly malicious agent tasks including fraud, cybercrime, and harassment. Tests whether safety guardrails hold under agentic autonomy. Developed by UK AISI.",
        status: "ACTIVE",
        type: "SAFETY",
        paper: "https://arxiv.org/abs/2410.09024",
        examples: "110",
        license: "MIT",
      },
      {
        name: "FACTS Grounding",
        year: "2025",
        desc: "Measures how accurately LLMs ground their responses in provided source material and avoid hallucinations. Released by Google DeepMind. Tests factuality under source-constrained generation.",
        status: "EMERGING",
        type: "FACTUALITY",
        paper: "https://arxiv.org/abs/2501.03200",
        examples: "1,719",
        license: "CC BY 4.0",
      },
      {
        name: "HealthBench",
        year: "2025",
        desc: "Realistic healthcare scenarios: emergency referrals, global health, health data tasks, context-seeking, expertise-tailored communication, and responding under uncertainty. Released by OpenAI.",
        status: "EMERGING",
        type: "DOMAIN",
        paper: "https://cdn.openai.com/pdf/bd7a39d5-9e9f-47b3-903c-8b847ca650c7/healthbench_paper.pdf",
        examples: "5,000",
        license: "MIT",
      },
      {
        name: "BackdoorLLM",
        year: "2024",
        desc: "Comprehensive benchmark for backdoor attacks on large language models. Tests model robustness to poisoning attacks in text generation tasks.",
        status: "ACTIVE",
        type: "SECURITY",
        paper: "https://arxiv.org/abs/2408.12798",
        examples: "4,200",
        license: "See dataset page",
      },
      {
        name: "CYBERSECEVAL 2",
        year: "2024",
        desc: "Wide-ranging cybersecurity evaluation suite. Quantifies LLM security risks including prompt injection, code interpreter abuse, and vulnerability exploitation. Developed by Meta.",
        status: "ACTIVE",
        type: "SECURITY",
        paper: "https://arxiv.org/abs/2404.13161",
        examples: "See dataset page",
        license: "MIT",
      },
    ],
  },
  {
    id: "multilingual",
    label: "MULTILINGUAL",
    benchmarks: [
      {
        name: "MultiLoKo",
        year: "2025",
        desc: "Multilingual local knowledge benchmark covering 31 languages. Tests knowledge of locally relevant facts that differ across cultures and regions. Developed by Meta.",
        status: "EMERGING",
        type: "KNOWLEDGE",
        paper: "https://arxiv.org/abs/2504.10356",
        examples: "15,500",
        license: "MIT",
      },
      {
        name: "MultiNRC",
        year: "2025",
        desc: "Reasoning questions written by native speakers in French, Spanish, and Chinese. Covers linguistic reasoning, wordplay, cultural/tradition reasoning, and math with cultural relevance.",
        status: "EMERGING",
        type: "REASONING",
        paper: "https://arxiv.org/abs/2507.17476",
        examples: "1,000",
        license: "See dataset page",
      },
      {
        name: "NoLiMa",
        year: "2025",
        desc: "Extended NIAH (Needle-in-a-Haystack) where questions and needles have minimal lexical overlap, requiring models to infer latent associations. Tests true long-context understanding beyond literal matching.",
        status: "EMERGING",
        type: "LONG-CONTEXT",
        paper: "https://arxiv.org/abs/2502.05167",
        examples: "7,540",
        license: "Adobe Research License",
      },
      {
        name: "MTRAG",
        year: "2025",
        desc: "End-to-end human-generated multi-turn RAG benchmark reflecting real-world properties across diverse dimensions. Tests the full RAG pipeline including retrieval, augmentation, and generation.",
        status: "EMERGING",
        type: "RAG",
        paper: "https://arxiv.org/abs/2501.03468",
        examples: "842",
        license: "See dataset page",
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
  const [expandedBench, setExpandedBench] = useState<string | null>(null);

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
            BENCHMARK CATALOG 2026
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "#333333",
            maxWidth: 720,
            marginBottom: "2rem",
          }}
        >
          A curated reference of benchmarks organized by capability domain. Updated March 2026 from peer-reviewed sources and the Epoch AI benchmark database. Status indicators: <strong>ACTIVE</strong> (discriminative), <strong>SATURATED</strong> (lost discriminative power), <strong>EMERGING</strong> (recommended), <strong>CAUTION</strong> (contamination/validity risk).
        </p>

        {/* Status legend */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {Object.entries(statusColors).map(([status, colors]) => (
            <div
              key={status}
              style={{
                background: colors.bg,
                color: colors.color,
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                padding: "0.25rem 0.6rem",
                border: "2px solid #000000",
              }}
            >
              {status}
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
            borderBottom: "2px solid #000000",
            marginBottom: "2.5rem",
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
                padding: "0.6rem 1.2rem",
                border: "2px solid #000000",
                borderBottom: "none",
                background: activeTab === cat.id ? "#000000" : "transparent",
                color: activeTab === cat.id ? "#FF4D00" : "#000000",
                cursor: "pointer",
                transition: "background 0.1s linear, color 0.1s linear",
                marginBottom: "-2px",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== cat.id) {
                  (e.currentTarget as HTMLElement).style.background = "#FF4D00";
                  (e.currentTarget as HTMLElement).style.color = "#000000";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== cat.id) {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#000000";
                }
              }}
            >
              {cat.label}
              <span
                style={{
                  marginLeft: "0.4rem",
                  background: activeTab === cat.id ? "#FF4D00" : "#000000",
                  color: activeTab === cat.id ? "#000000" : "#FFFFFF",
                  padding: "0.05rem 0.3rem",
                  fontSize: "0.5rem",
                }}
              >
                {cat.benchmarks.length}
              </span>
            </button>
          ))}
        </div>

        {/* Benchmark grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "0",
            border: "2px solid #000000",
          }}
        >
          {activeCategory.benchmarks.map((bench, i) => {
            const isExpanded = expandedBench === bench.name;
            const sc = statusColors[bench.status];
            return (
              <div
                key={bench.name}
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "2px solid #000000" : "none",
                  borderBottom: "2px solid #000000",
                  padding: "1.5rem",
                  background: isExpanded ? "#fff8f5" : "#FFFFFF",
                  transition: "background 0.15s linear",
                  cursor: "pointer",
                }}
                onClick={() => setExpandedBench(isExpanded ? null : bench.name)}
                onMouseEnter={(e) => {
                  if (!isExpanded) (e.currentTarget as HTMLElement).style.background = "#fff8f5";
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#888888",
                        letterSpacing: "0.08em",
                        display: "block",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {bench.year} · {bench.type}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        color: "#000000",
                        margin: 0,
                      }}
                    >
                      {bench.name}
                    </h3>
                  </div>
                  <span
                    style={{
                      background: sc.bg,
                      color: sc.color,
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.5rem",
                      letterSpacing: "0.08em",
                      padding: "0.2rem 0.5rem",
                      flexShrink: 0,
                      marginLeft: "0.5rem",
                    }}
                  >
                    {bench.status}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                    color: "#444444",
                    margin: 0,
                  }}
                >
                  {bench.desc}
                </p>

                {isExpanded && (
                  <div style={{ marginTop: "1rem", borderTop: "1px solid #000000", paddingTop: "1rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
                      {bench.examples && (
                        <div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", color: "#888888", textTransform: "uppercase", marginBottom: "0.2rem" }}>Examples</div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#000000" }}>{bench.examples}</div>
                        </div>
                      )}
                      {bench.license && (
                        <div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", color: "#888888", textTransform: "uppercase", marginBottom: "0.2rem" }}>License</div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#000000" }}>{bench.license}</div>
                        </div>
                      )}
                    </div>
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
                          transition: "background 0.1s linear, color 0.1s linear",
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
                        → PAPER / SOURCE
                      </a>
                    )}
                  </div>
                )}

                <div style={{ marginTop: "0.75rem", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#888888", letterSpacing: "0.06em" }}>
                  {isExpanded ? "▲ COLLAPSE" : "▼ EXPAND DETAILS"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contamination doctrine */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            background: "#fff3ee",
            border: "2px solid #000000",
            borderLeft: "6px solid #FF4D00",
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
            CONTAMINATION DOCTRINE — MARCH 2026
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
            Assume that any dataset publicly available on the internet is or will be contaminated. Mitigations: canary strings (like BigBench), encrypted/gated access, dynamic benchmarks with regular updates, and post-hoc contamination detection via generation perplexity or adversarial prompt variants. A contaminated dataset can still provide signal during training — contamination does not equal uselessness. Per the arXiv preprint "When AI Benchmarks Plateau" (Feb 2026): expert-curated benchmarks show lower saturation at comparable ages than crowdsourced benchmarks. Prioritize expert-designed, dynamically updated, or algorithmically generated benchmarks for competitive evaluation.
          </p>
        </div>
      </div>
    </section>
  );
}
