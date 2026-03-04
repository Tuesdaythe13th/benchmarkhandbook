/*
 * ResearchPapersSection — Brutalist Industrial Manifesto
 * Curated research papers organized by category
 * Orange #FF4D00 | Black #000 | White #FFF
 */

import { useState } from "react";

const CATEGORIES = ["ALL", "BENCHMARK QUALITY", "AGENTIC EVAL", "SAFETY & RED TEAMING", "EVALUATION METHODS", "SURVEYS"];

const PAPERS = [
  {
    id: "p01",
    category: "BENCHMARK QUALITY",
    title: "Measuring what Matters: Construct Validity in Large Language Model Benchmarks",
    authors: "Bean, Kearns, Romanou et al.",
    venue: "NeurIPS 2025 — Datasets & Benchmarks Track",
    year: "2025",
    url: "https://arxiv.org/abs/2511.04703",
    abstract: "A systematic review of 445 LLM benchmarks by 29 expert reviewers. Identifies patterns in measured phenomena, tasks, and scoring metrics that undermine validity. Provides 8 key recommendations for benchmark designers.",
    keyFindings: [
      "445 benchmarks reviewed from leading NLP/ML conferences",
      "Most benchmarks are high quality at design stage but lowest quality at implementation",
      "8 actionable recommendations for construct validity in LLM benchmarks",
      "Patterns of validity failure are systematic and predictable",
    ],
    tags: ["construct validity", "benchmark design", "NeurIPS 2025"],
  },
  {
    id: "p02",
    category: "BENCHMARK QUALITY",
    title: "What Makes a Good AI Benchmark?",
    authors: "Reuel, Hardy, Smith, Lamparth, Hardy, Kochenderfer",
    venue: "Stanford HAI Policy Brief — December 2024",
    year: "2024",
    url: "https://hai.stanford.edu/assets/files/hai-policy-brief-what-makes-a-good-ai-benchmark.pdf",
    abstract: "Develops a novel assessment framework for evaluating AI benchmarks based on 46 criteria across 5 benchmark lifecycle phases. Evaluates 24 AI benchmarks (16 FM + 8 non-FM). Finds large quality differences between widely-used benchmarks — most are highest quality at design stage, lowest at implementation.",
    keyFindings: [
      "46-criteria framework across 5 lifecycle phases",
      "24 benchmarks evaluated — large quality differences found",
      "Most benchmarks highest quality at design, lowest at implementation",
      "Policymakers should require minimum quality standards for AI benchmark use",
    ],
    tags: ["benchmark quality", "policy", "Stanford HAI", "lifecycle"],
  },
  {
    id: "p03",
    category: "BENCHMARK QUALITY",
    title: "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models",
    authors: "Srivastava et al. (450 authors, 132 institutions)",
    venue: "Transactions on Machine Learning Research, 2022",
    year: "2022",
    url: "https://arxiv.org/abs/2206.04615",
    abstract: "Introduces BIG-bench: 204 tasks contributed by 450 authors across 132 institutions. Key finding: tasks that improve gradually involve knowledge/memorization; 'breakthrough' behaviors at critical scale involve multiple steps. Social bias increases with scale in ambiguous contexts.",
    keyFindings: [
      "204 tasks across linguistics, math, reasoning, social bias, software development",
      "Model performance and calibration both improve with scale but remain poor in absolute terms",
      "Breakthrough behaviors at scale are unpredictable — tasks with multiple steps show non-linear improvement",
      "Social bias typically increases with scale in ambiguous contexts",
    ],
    tags: ["BIG-bench", "scaling", "capabilities", "social bias"],
  },
  {
    id: "p04",
    category: "BENCHMARK QUALITY",
    title: "On Robustness and Reliability of Benchmark-Based Evaluation of LLMs",
    authors: "Lunardi, Della Mea, Mizzaro, Roitero",
    venue: "ECAI 2025",
    year: "2025",
    url: "https://arxiv.org/abs/2509.04013",
    abstract: "Systematically assesses robustness of LLMs to paraphrased benchmark questions across 6 benchmarks and 34 LLMs. Finds that while model rankings remain stable, absolute scores decline significantly under paraphrasing. High benchmark scores may not capture real-world robustness.",
    keyFindings: [
      "6 benchmarks tested with systematic paraphrasing across 34 LLMs",
      "Model rankings remain stable but absolute scores decline significantly",
      "LLMs struggle with linguistic variability — raises generalization concerns",
      "Calls for robustness-aware benchmarks that reflect practical deployment",
    ],
    tags: ["robustness", "paraphrasing", "reliability", "ECAI 2025"],
  },
  {
    id: "p05",
    category: "SURVEYS",
    title: "Toward Generalizable Evaluation in the LLM Era: A Survey Beyond Benchmarks",
    authors: "Cao, Hong, Li, Ying et al.",
    venue: "arXiv, April 2025",
    year: "2025",
    url: "https://arxiv.org/abs/2504.18838",
    abstract: "Surveys the core challenges that LLMs pose for evaluation. Identifies two pivotal transitions: (i) task-specific to capability-based evaluation; (ii) manual to automated evaluation. Identifies the evaluation generalization issue: bounded test sets cannot scale alongside models whose abilities grow without limit.",
    keyFindings: [
      "Two pivotal transitions: task-specific → capability-based; manual → automated",
      "Evaluation generalization issue: bounded test sets cannot scale with model capabilities",
      "LLM-as-a-judge scoring has systematic limitations that require mitigation",
      "Living GitHub repository maintained for community updates",
    ],
    tags: ["survey", "generalization", "LLM-as-judge", "capability-based"],
  },
  {
    id: "p06",
    category: "AGENTIC EVAL",
    title: "AgentBench: Evaluating LLMs as Agents",
    authors: "Liu, Yu, Zhang, Xu et al.",
    venue: "ICLR 2024",
    year: "2023",
    url: "https://arxiv.org/abs/2308.03688",
    abstract: "Presents AgentBench: a multi-dimensional benchmark with 8 distinct environments to assess LLM-as-Agent reasoning and decision-making. Finds significant performance disparity between top commercial LLMs and OSS models ≤70B. Identifies poor long-term reasoning, decision-making, and instruction following as main obstacles.",
    keyFindings: [
      "8 distinct environments: OS, DB, Knowledge Graph, Digital Card Game, Lateral Thinking, HouseHold, WebShopping, WebArena",
      "Significant disparity between commercial LLMs and OSS models ≤70B",
      "Poor long-term reasoning and instruction following are primary failure modes",
      "Training on code has ambivalent impacts on different agent tasks",
    ],
    tags: ["agentic", "ICLR 2024", "multi-environment", "decision-making"],
  },
  {
    id: "p07",
    category: "SAFETY & RED TEAMING",
    title: "A Safe Harbor for AI Evaluation and Red Teaming",
    authors: "Longpre, Kapoor, Klyman, Ramaswami, Bommasani et al.",
    venue: "arXiv, March 2024",
    year: "2024",
    url: "https://arxiv.org/abs/2403.04893",
    abstract: "Proposes that major AI developers commit to providing legal and technical safe harbor for independent safety research. Argues that ToS enforcement strategies disincentivize good-faith safety evaluations. Researcher access programs are inadequate substitutes for independent research access.",
    keyFindings: [
      "ToS enforcement creates chilling effects on legitimate safety research",
      "Researcher access programs lack community representation and independence",
      "Proposes legal and technical safe harbor framework for public interest research",
      "Signed by researchers from Stanford, Princeton, MIT, and 20+ institutions",
    ],
    tags: ["safe harbor", "red teaming", "policy", "legal"],
  },
  {
    id: "p08",
    category: "EVALUATION METHODS",
    title: "DOLCE: Differentiate Our Long Context Evaluation Tasks",
    authors: "Yang, Zi",
    venue: "arXiv, September 2024",
    year: "2024",
    url: "https://arxiv.org/abs/2409.06338",
    abstract: "Presents the DOLCE framework for categorizing long-context evaluation tasks into retrieval-focused vs. holistic understanding-focused problems. Parameterizes each problem by λ (complexity) and k (redundancy). Finds 0-67% of problems are retrieval-focused and 0-90% are holistic understanding-focused across 44 existing long-context tasks.",
    keyFindings: [
      "Two major distinct capabilities in long context: retrieval vs. holistic understanding",
      "DOLCE framework parameterizes problems by complexity (λ) and redundancy (k)",
      "0-67% retrieval-focused, 0-90% holistic understanding-focused across 44 tasks",
      "Enables targeted improvement of long-context capabilities",
    ],
    tags: ["long context", "retrieval", "holistic understanding", "DOLCE"],
  },
  {
    id: "p09",
    category: "SURVEYS",
    title: "Survey of Different Large Language Model Architectures: Trends, Benchmarks, and Challenges",
    authors: "IEEE Xplore",
    venue: "IEEE Xplore, 2024",
    year: "2024",
    url: "https://ieeexplore.ieee.org/abstract/document/10720163",
    abstract: "Comprehensive survey of LLM architectures, benchmarking practices, and open challenges. Covers transformer variants, mixture-of-experts, state space models, and their evaluation across standard benchmarks. Identifies key challenges in fair comparison across architectures.",
    keyFindings: [
      "Comprehensive coverage of transformer variants, MoE, and SSM architectures",
      "Analysis of benchmark suitability for different architecture types",
      "Identifies fair comparison challenges across heterogeneous architectures",
      "Trends in benchmark adoption and saturation across architecture generations",
    ],
    tags: ["survey", "architectures", "IEEE", "trends"],
  },
  {
    id: "p10",
    category: "EVALUATION METHODS",
    title: "Making Sense of AI Benchmarks",
    authors: "DataLab",
    venue: "blog-datalab.com, 2025",
    year: "2025",
    url: "https://blog-datalab.com/making-sense-of-ai-benchmarks/",
    abstract: "Practitioner-oriented guide to interpreting AI benchmark results. Covers common misinterpretations, the gap between benchmark performance and real-world utility, and best practices for benchmark selection in production contexts.",
    keyFindings: [
      "Benchmark scores are not directly comparable across evaluation setups",
      "Real-world utility gap: high benchmark scores don't guarantee deployment quality",
      "Best practices for benchmark selection in production contexts",
      "Common misinterpretations and how to avoid them",
    ],
    tags: ["practitioner", "interpretation", "production", "guide"],
  },
  {
    id: "p11",
    category: "SAFETY & RED TEAMING",
    title: "Microsoft AI Diffusion Report",
    authors: "Microsoft Research",
    venue: "Microsoft Research, October 2025",
    year: "2025",
    url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2025/10/Microsoft-AI-Diffusion-Report.pdf",
    abstract: "Analyzes the diffusion of AI capabilities across society, with particular focus on safety implications of widespread model access. Examines how evaluation frameworks must evolve as AI capabilities become more broadly accessible and integrated into critical systems.",
    keyFindings: [
      "AI capability diffusion creates new evaluation challenges at societal scale",
      "Safety evaluation must account for dual-use risks as capabilities diffuse",
      "Evaluation frameworks need to address emergent risks from capability combinations",
      "Recommendations for responsible diffusion monitoring and evaluation",
    ],
    tags: ["diffusion", "safety", "Microsoft", "societal impact"],
  },
  {
    id: "p12",
    category: "EVALUATION METHODS",
    title: "Artificial Analysis 2025 Year-End State of AI Highlights Report",
    authors: "Artificial Analysis Team",
    venue: "Artificial Analysis, December 2025",
    year: "2025",
    url: "https://artificialanalysis.ai/downloads/state-of-ai/2025/2025-Year-End-Artificial-Analysis-State-of-AI-Highlights-Report.pdf",
    abstract: "Comprehensive analysis of AI model performance across quality, speed, price, and context window dimensions for 2025. Documents dramatic capability improvements, cost reductions, and the emergence of reasoning models as a distinct category.",
    keyFindings: [
      "Dramatic capability improvements across all frontier models in 2025",
      "Cost per token reduced by 10-100x compared to 2023 baselines",
      "Reasoning models (o1, o3, R1) emerge as distinct evaluation category",
      "Multi-dimensional scoring: quality + speed + cost + context window",
    ],
    tags: ["2025", "state of AI", "multi-dimensional", "cost trends"],
  },
];

export default function ResearchPapersSection() {
  const [filter, setFilter] = useState("ALL");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "ALL" ? PAPERS : PAPERS.filter((p) => p.category === filter);

  return (
    <section id="research" style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "2px solid #000000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ borderBottom: "2px solid #000000", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#FF4D00", marginBottom: "0.75rem" }}>
            SECTION 10 — RESEARCH LIBRARY
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.85, color: "#000000", margin: 0 }}>
              RESEARCH<br /><span style={{ color: "#FF4D00" }}>LIBRARY</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#444444", maxWidth: 420, lineHeight: 1.7, margin: 0 }}>
              Peer-reviewed papers, policy briefs, and technical reports that define best practices in AI evaluation as of 2025–2026. All links verified.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0", border: "2px solid #000000", marginBottom: "2rem", flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.5rem 1rem", background: filter === cat ? "#000000" : "transparent", color: filter === cat ? "#FF4D00" : "#000000", border: "none", borderRight: "1px solid #000000", cursor: "pointer", transition: "background 0.1s linear" }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#000000" }}>
          {filtered.map((paper) => {
            const isOpen = expanded === paper.id;
            return (
              <div key={paper.id} style={{ background: "#FFFFFF" }}>
                <button onClick={() => setExpanded(isOpen ? null : paper.id)} style={{ width: "100%", background: "transparent", border: "none", cursor: "pointer", padding: "1.5rem 2rem", display: "flex", alignItems: "flex-start", gap: "1.5rem", textAlign: "left", borderLeft: "4px solid #FF4D00" }}>
                  <div style={{ flexShrink: 0, minWidth: 36 }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#FF4D00", fontWeight: 700 }}>{paper.id.toUpperCase()}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#999999" }}>{paper.year}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", lineHeight: 1.2, marginBottom: "0.25rem" }}>{paper.title}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#666666", marginBottom: "0.25rem" }}>{paper.authors}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#FF4D00" }}>{paper.venue}</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem", flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.45rem", letterSpacing: "0.08em", padding: "0.2rem 0.5rem", background: "#000000", color: "#FF4D00" }}>{paper.category}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: "#FF4D00" }}>{isOpen ? "−" : "+"}</span>
                  </div>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 2rem 2rem 5.5rem", borderLeft: "4px solid #EEEEEE" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#333333", lineHeight: 1.7, marginBottom: "1.5rem" }}>{paper.abstract}</p>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>KEY FINDINGS</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {paper.keyFindings.map((f, i) => (
                          <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#FF4D00", flexShrink: 0 }}>→</span>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#444444", lineHeight: 1.5 }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", background: "#000000", border: "2px solid #000000", padding: "0.4rem 0.8rem", textDecoration: "none" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FF4D00"; (e.currentTarget as HTMLElement).style.borderColor = "#FF4D00"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#000000"; (e.currentTarget as HTMLElement).style.borderColor = "#000000"; }}
                      >READ PAPER ↗</a>
                      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                        {paper.tags.map((tag) => (
                          <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.45rem", color: "#666666", border: "1px solid #CCCCCC", padding: "0.15rem 0.4rem", letterSpacing: "0.06em" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap", borderTop: "2px solid #000000", paddingTop: "1.5rem" }}>
          {[
            { label: "TOTAL PAPERS", value: PAPERS.length.toString() },
            { label: "PEER REVIEWED", value: PAPERS.filter(p => ["NeurIPS", "ICLR", "ECAI", "IEEE", "ACL", "EMNLP"].some(v => p.venue.includes(v))).length.toString() },
            { label: "2024–2026", value: PAPERS.filter(p => parseInt(p.year) >= 2024).length.toString() },
            { label: "POLICY BRIEFS", value: "2" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem", color: "#FF4D00", fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
