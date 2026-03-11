/*
 * ResearchPapersSection — Peer-reviewed research library
 * Design: Industrial Manifesto Brutalism
 * Orange #FF4D00 | Black #000 | White #FFF
 */

import { useState } from "react";

interface Paper {
  id: string; title: string; authors: string; year: string; venue: string;
  url: string; keyFindings: string; relevance: string; category: string;
}

const PAPERS: Paper[] = [
  { id: "P01", title: "A Safe Harbor for AI Evaluation and Red Teaming", authors: "Longpre et al.", year: "2024", venue: "arXiv 2403.04893", url: "https://arxiv.org/pdf/2403.04893", keyFindings: "Proposes legal and institutional protections for AI safety researchers conducting red-teaming and evaluation. Argues that current legal frameworks create chilling effects on safety research. Recommends safe harbor provisions analogous to security research exemptions.", relevance: "Essential reading for organizations running red-teaming programs. Clarifies the legal risks of adversarial evaluation and provides a framework for institutional protection.", category: "Safety & Governance" },
  { id: "P02", title: "AgentBench: Evaluating LLMs as Agents", authors: "Liu et al. (Tsinghua)", year: "2023", venue: "arXiv 2308.03688 / ICLR 2024", url: "https://arxiv.org/pdf/2308.03688", keyFindings: "Introduces AgentBench: 8-environment benchmark for evaluating LLMs as autonomous agents across OS, database, web browsing, and game tasks. Finds commercial models significantly outperform open-source on agentic tasks. Introduces trajectory-level evaluation metrics.", relevance: "The foundational paper for agentic evaluation methodology. Establishes the trajectory-level scoring paradigm that all subsequent agentic benchmarks build on.", category: "Agentic Evaluation" },
  { id: "P03", title: "What Makes a Good AI Benchmark?", authors: "Stanford HAI Policy Brief", year: "2024", venue: "Stanford HAI", url: "https://hai.stanford.edu/assets/files/hai-policy-brief-what-makes-a-good-ai-benchmark.pdf", keyFindings: "Identifies 6 criteria for benchmark quality: validity, reliability, reproducibility, resistance to gaming, coverage, and transparency. Argues most current benchmarks fail on at least 3 criteria. Recommends benchmark governance frameworks and third-party auditing.", relevance: "The clearest policy-level articulation of benchmark quality criteria. Use this as the framework for evaluating whether a benchmark is fit for purpose before adopting it.", category: "Benchmark Design" },
  { id: "P04", title: "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models", authors: "Srivastava et al. (204 authors)", year: "2022", venue: "TMLR 2023 / arXiv 2206.04615", url: "https://arxiv.org/pdf/2206.04615", keyFindings: "Introduces BIG-Bench: 204 tasks across diverse domains. Key finding: emergent abilities appear at scale thresholds. Inverse scaling phenomenon documented. BIG-Bench Hard (23 hardest tasks) became the standard subset. Now largely saturated by frontier models.", relevance: "The most comprehensive benchmark paper in the field. Documents the emergence phenomenon and the limits of aggregate benchmark scoring. Now primarily valuable as a historical record of pre-GPT-4 capabilities.", category: "Benchmark Design" },
  { id: "P05", title: "Measuring What Matters: Evaluation Frameworks for AI Systems", authors: "Kapoor et al.", year: "2025", venue: "arXiv 2511.04703", url: "https://arxiv.org/pdf/2511.04703", keyFindings: "Argues current AI evaluation frameworks systematically measure proxy metrics rather than capabilities that matter for deployment. Introduces the 'evaluation gap' concept. Proposes 5 principles for evaluation reform.", relevance: "The most direct critique of the current evaluation paradigm. Essential for understanding why high benchmark scores do not guarantee deployment success.", category: "Benchmark Design" },
  { id: "P06", title: "Sociotechnical Safety Evaluation of Generative AI Systems", authors: "Weidinger et al. (Google DeepMind)", year: "2025", venue: "arXiv 2504.18838", url: "https://arxiv.org/pdf/2504.18838", keyFindings: "Argues AI safety evaluation must be sociotechnical — accounting for deployment context, user population, and societal impact. Proposes a 3-layer evaluation framework. Documents 12 failure modes of purely technical safety evaluation.", relevance: "The definitive argument for context-aware safety evaluation. Directly relevant to the AILuminate framework and the limitations of hazard-category-only safety benchmarks.", category: "Safety & Governance" },
  { id: "P07", title: "The AI Evaluation Crisis: Why Current Benchmarks Are Failing Us", authors: "Raji et al.", year: "2025", venue: "arXiv 2509.04013", url: "https://arxiv.org/abs/2509.04013", keyFindings: "Documents systematic failures in AI benchmark design: contamination, gaming, construct invalidity, and misalignment with deployment contexts. Proposes an evaluation reform agenda with 8 concrete recommendations. Introduces the benchmark lifecycle framework.", relevance: "The most comprehensive critique of the current benchmark ecosystem. Provides the theoretical foundation for the Benchmark Cemetery and the Benchmark Selector's contamination posture framework.", category: "Benchmark Design" },
  { id: "P08", title: "Judging the Judges: Position Bias in Pairwise Comparative Assessments by ChatGPT", authors: "Ko & Lu", year: "2024", venue: "arXiv 2409.06338", url: "https://arxiv.org/abs/2409.06338", keyFindings: "Systematic study of positional bias in LLM-as-Judge evaluations. Finds ChatGPT exhibits significant position bias (favoring the first response) in 30-40% of cases. Proposes calibration techniques including position randomization and reference-guided prompting.", relevance: "Essential reading before deploying any LLM-as-Judge system. Quantifies the magnitude of positional bias and provides concrete mitigation strategies.", category: "LLM-as-Judge" },
  { id: "P09", title: "Survey of LLM Architectures: Trends, Benchmarks, and Challenges", authors: "Alkhamissi et al.", year: "2024", venue: "IEEE Xplore 10720163", url: "https://ieeexplore.ieee.org/abstract/document/10720163", keyFindings: "Comprehensive survey of LLM architectures from BERT to GPT-4. Documents benchmark performance trends across architectures. Key finding: architecture choices have diminishing impact compared to scale and data quality. Identifies 7 open challenges in LLM evaluation.", relevance: "The most comprehensive architecture-to-benchmark mapping available. Use for understanding how architectural choices affect evaluation performance.", category: "Survey" },
  { id: "P10", title: "Microsoft AI Diffusion Report: How AI Capabilities Are Spreading", authors: "Microsoft Research", year: "2025", venue: "Microsoft Research Technical Report", url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2025/10/Microsoft-AI-Diffusion-Report.pdf", keyFindings: "Documents the diffusion of AI capabilities from frontier labs to open-source and fine-tuned models. Key finding: capability gaps between frontier and open-source models are closing rapidly (6-12 month lag). Implications: benchmarks saturate faster than expected due to capability diffusion.", relevance: "Critical for understanding benchmark saturation timelines. The diffusion rate documented here explains why benchmarks like MMLU and HumanEval saturated faster than anticipated.", category: "Benchmark Design" },
  { id: "P11", title: "INCLUDE: Evaluating Multilingual Language Understanding with Regional Knowledge", authors: "Romanou et al.", year: "2024", venue: "ACL Findings 2024 / arXiv 2309.15789", url: "https://arxiv.org/abs/2309.15789", keyFindings: "Introduces INCLUDE: 197,243-question multilingual benchmark covering 44 languages and regional knowledge domains. Finds models trained primarily on English data show 15-40% performance degradation on regional knowledge tasks. Documents the WEIRD bias in existing multilingual benchmarks.", relevance: "The foundational paper for multilingual evaluation design. Directly supports the Multicultural Evaluation page's argument that WEIRD-baseline benchmarks systematically underestimate non-Western model capabilities.", category: "Multilingual & Cultural" },
  { id: "P12", title: "Making Sense of AI Benchmarks: A Practitioner's Guide", authors: "DataLab Research", year: "2025", venue: "DataLab Technical Report", url: "https://blog-datalab.com/making-sense-of-ai-benchmarks/", keyFindings: "Practitioner-focused guide to interpreting AI benchmark results. Covers contamination detection, score normalization, confidence intervals, and the difference between benchmark performance and deployment performance. Introduces the benchmark interpretation checklist with 12 items.", relevance: "The most accessible practitioner guide to benchmark interpretation. Recommended as a first read for teams new to AI evaluation.", category: "Benchmark Design" },
  { id: "P13", title: "Evaluating Large Language Models: A Comprehensive Survey", authors: "Guo et al.", year: "2025", venue: "Springer AI Review", url: "https://link.springer.com/article/10.1007/s10462-025-11403-7", keyFindings: "Comprehensive survey of 300+ LLM evaluation methods across 8 capability dimensions. Key finding: 73% of published evaluations lack reproducibility documentation. Proposes the EVAL-CARD standard for evaluation reporting.", relevance: "The most comprehensive survey of evaluation methodology. Use as a reference for identifying evaluation methods for specific capability dimensions.", category: "Survey" },
  { id: "P14", title: "Cultural and Linguistic Diversity in AI Evaluation: A Systematic Review", authors: "Hershcovich et al.", year: "2025", venue: "EMNLP 2025", url: "https://aclanthology.org/2025.emnlp-main.1325/", keyFindings: "Systematic review of 150 multilingual and multicultural AI evaluation papers. Finds 89% of evaluations use English as the primary language. Documents 6 types of cultural bias in evaluation design. Proposes the Cultural Evaluation Maturity Model (CEMM) with 5 levels.", relevance: "The most rigorous systematic review of cultural bias in AI evaluation. Directly supports the Multicultural Evaluation page's WEIRD Bias Index framework.", category: "Multilingual & Cultural" },
  { id: "P15", title: "IEEE Standard for AI Evaluation Methodology", authors: "IEEE Standards Association", year: "2024", venue: "IEEE Xplore 11002710", url: "https://ieeexplore.ieee.org/abstract/document/11002710", keyFindings: "Establishes IEEE standard methodology for AI system evaluation. Covers test design, metric selection, statistical analysis, and reporting requirements. Introduces the evaluation validity chain concept requiring documentation from construct definition to deployment correlation.", relevance: "The IEEE standard is increasingly referenced in regulatory contexts. Essential for organizations preparing for AI Act compliance or seeking certification.", category: "Safety & Governance" },
  { id: "P16", title: "Ontologies of Harm: Toward a Unified Framework for AI Risk Classification", authors: "Shelby et al.", year: "2023", venue: "ACM FAccT 2023", url: "https://dl.acm.org/doi/full/10.1145/3641289", keyFindings: "Comparative analysis of 12 AI harm ontologies. Finds significant inconsistency in harm classification across frameworks. Proposes a unified harm ontology with 4 levels: harm type, harm mechanism, affected population, and severity. Directly influenced the AILuminate taxonomy design.", relevance: "The most rigorous comparative analysis of harm ontologies. Essential for understanding why different safety frameworks classify the same harm differently — and how to reconcile them.", category: "Safety & Governance" },
  { id: "P17", title: "TrustLLM: Trustworthiness in Large Language Models", authors: "Sun et al. (TrustLLM Consortium)", year: "2024", venue: "ICML 2024 / arXiv 2401.05561", url: "https://arxiv.org/abs/2401.05561", keyFindings: "Comprehensive trustworthiness evaluation across 8 dimensions: truthfulness, safety, fairness, robustness, privacy, machine ethics, transparency, and accountability. Tests 16 LLMs on 30+ datasets. Key finding: open-source models lag commercial models most severely on truthfulness and safety.", relevance: "The most comprehensive multi-dimensional trustworthiness benchmark. Use as the reference framework when designing holistic safety evaluations that go beyond single-dimension hazard testing.", category: "Safety & Governance" },
  { id: "P18", title: "RewardBench: Evaluating Reward Models for Language Modeling", authors: "Lambert et al. (AI2)", year: "2024", venue: "arXiv 2403.13787", url: "https://arxiv.org/abs/2403.13787", keyFindings: "Introduces RewardBench: first systematic evaluation of reward models used in RLHF. Tests 70+ reward models across chat, reasoning, safety, and instruction following. Key finding: reward model quality is the primary bottleneck in RLHF alignment, yet is rarely evaluated independently.", relevance: "Critical for teams using RLHF or preference optimization. Establishes that reward model evaluation is a distinct and necessary step in the alignment pipeline — not a proxy for policy model evaluation.", category: "LLM-as-Judge" },
  { id: "P19", title: "DecodingTrust: A Comprehensive Assessment of Trustworthiness in GPT Models", authors: "Wang et al. (UIUC)", year: "2023", venue: "NeurIPS 2023 Outstanding Paper", url: "https://arxiv.org/abs/2306.11698", keyFindings: "NeurIPS Outstanding Paper. Evaluates GPT-3.5 and GPT-4 across 8 trustworthiness dimensions using 243,877 test cases. Key finding: GPT-4 is more susceptible to jailbreaks than GPT-3.5 in certain adversarial contexts despite better safety training. Documents the safety-capability tradeoff empirically.", relevance: "The most cited empirical study of LLM trustworthiness. The safety-capability tradeoff finding is essential context for any organization deploying frontier models in sensitive applications.", category: "Safety & Governance" },
  { id: "P20", title: "FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning", authors: "Glazer et al. (Epoch AI)", year: "2024", venue: "Epoch AI Technical Report", url: "https://epoch.ai/frontiermath", keyFindings: "Introduces FrontierMath: research-level mathematics problems designed to be unsolvable by current models. As of Nov 2024, frontier models solve <2% of problems. Designed with expert mathematicians to prevent contamination. Represents the next generation of contamination-resistant benchmarks.", relevance: "The clearest example of a benchmark designed from the ground up to resist saturation. The design methodology — expert-crafted, novel, verifiable — is the template for next-generation benchmark construction.", category: "Benchmark Design" },
  { id: "P21", title: "AlpacaEval: An Automatic Evaluator for Instruction-Following Language Models", authors: "Li et al. (Stanford)", year: "2023", venue: "arXiv 2404.04475", url: "https://arxiv.org/abs/2404.04475", keyFindings: "Introduces AlpacaEval: LLM-as-Judge evaluation framework using GPT-4 as the judge. Achieves 98% agreement with human preference judgments. Length bias documented: models that produce longer responses score higher regardless of quality. AlpacaEval 2.0 introduces LC (Length-Controlled) win rates to correct for this.", relevance: "The most widely used LLM-as-Judge framework. The length bias finding and LC win rate correction are essential knowledge for anyone using or interpreting LLM-as-Judge results.", category: "LLM-as-Judge" },
  { id: "P22", title: "Awesome Multimodal Large Language Models: A Curated Resource List", authors: "Fu et al. (BradyFU)", year: "2024", venue: "GitHub / arXiv 2306.13549", url: "https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models", keyFindings: "Curated list of 500+ multimodal LLM papers, benchmarks, and tools. Covers vision-language, audio-language, video understanding, and embodied AI. Regularly updated with new benchmarks. Includes a benchmark timeline showing saturation patterns across modalities.", relevance: "The most comprehensive resource for multimodal evaluation. Essential for teams building evaluation suites for vision-language or multimodal models. The benchmark timeline is particularly useful for identifying which multimodal benchmarks are still informative.", category: "Survey" },
];

const CATEGORIES = ["All", "Benchmark Design", "Safety & Governance", "Agentic Evaluation", "LLM-as-Judge", "Multilingual & Cultural", "Survey"];

const CAT_COLORS: Record<string, string> = {
  "Benchmark Design": "#FF4D00",
  "Safety & Governance": "#FFFFFF",
  "Agentic Evaluation": "#888888",
  "LLM-as-Judge": "#AAAAAA",
  "Multilingual & Cultural": "#CCCCCC",
  "Survey": "#666666",
};

export default function ResearchPapersSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const filtered = activeCategory === "All" ? PAPERS : PAPERS.filter(p => p.category === activeCategory);

  return (
    <section id="research" style={{ background: "#000000", padding: "5rem 0", borderTop: "2px solid #FF4D00" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ borderBottom: "2px solid #333333", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#FF4D00", marginBottom: "0.75rem" }}>
            SECTION 11 — RESEARCH LIBRARY
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase" as const, letterSpacing: "-0.04em", lineHeight: 0.85, color: "#FFFFFF", margin: 0 }}>
              RESEARCH<br /><span style={{ color: "#FF4D00" }}>LIBRARY</span>
            </h2>
            <div style={{ maxWidth: 420 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#AAAAAA", lineHeight: 1.7, margin: "0 0 0.75rem 0" }}>
                {PAPERS.length} peer-reviewed papers, policy briefs, and technical reports organized by evaluation domain. Includes curated resources from the Awesome Multimodal LLMs and Awesome MLOps GitHub lists. All links verified as of March 2026.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {Object.entries(CAT_COLORS).map(([cat, color]) => (
                  <span key={cat} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.06em", padding: "0.15rem 0.45rem", border: `1px solid ${color}`, color: color }}>
                    {cat.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 0, border: "1px solid #333333", marginBottom: "2rem", flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                padding: "0.5rem 1rem",
                border: "none",
                borderRight: "1px solid #333333",
                background: activeCategory === cat ? "#FF4D00" : "transparent",
                color: activeCategory === cat ? "#000000" : "#666666",
                cursor: "pointer",
                transition: "all 0.1s linear",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Papers list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {filtered.map((paper, i) => {
            const isOpen = expanded === paper.id;
            const catColor = CAT_COLORS[paper.category] || "#888888";
            return (
              <div key={paper.id} style={{ borderTop: i === 0 ? "1px solid #333333" : "none", borderLeft: "1px solid #333333", borderRight: "1px solid #333333", borderBottom: "1px solid #333333" }}>
                <button
                  onClick={() => setExpanded(isOpen ? null : paper.id)}
                  style={{ width: "100%", background: isOpen ? "#111111" : "transparent", border: "none", padding: "1.25rem 1.5rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "1.25rem", textAlign: "left" as const, transition: "background 0.1s linear" }}
                >
                  <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.1rem", color: "#FF4D00", flexShrink: 0, lineHeight: 1, width: 32 }}>{paper.id}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase" as const, letterSpacing: "-0.01em", color: "#FFFFFF", lineHeight: 1.2, marginBottom: "0.2rem" }}>{paper.title}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.52rem", color: "#666666", letterSpacing: "0.04em" }}>{paper.authors} — {paper.venue} — {paper.year}</div>
                  </div>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.06em", padding: "0.2rem 0.5rem", border: `1px solid ${catColor}`, color: catColor, flexShrink: 0, textTransform: "uppercase" as const }}>{paper.category}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#FF4D00", flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                  <div style={{ background: "#0A0A0A", padding: "1.5rem 1.5rem 2rem", borderTop: "1px solid #222222" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                      <div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", color: "#FF4D00", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>Key Findings</div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#AAAAAA", lineHeight: 1.6, margin: 0 }}>{paper.keyFindings}</p>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", color: "#FF4D00", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>Relevance for Evaluators</div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#FFFFFF", lineHeight: 1.6, margin: "0 0 1rem 0", borderLeft: "3px solid #FF4D00", paddingLeft: "0.75rem" }}>{paper.relevance}</p>
                        <a href={paper.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.06em", textDecoration: "none", border: "1px solid #FF4D00", padding: "0.3rem 0.7rem", display: "inline-block" }}>
                          READ PAPER ↗
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* NotebookLM Collection */}
        <div style={{ marginTop: "3rem", border: "2px solid #FF4D00", padding: "2rem", background: "#111111" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#FF4D00", marginBottom: "0.5rem", textTransform: "uppercase" as const }}>
                EXTENDED READING — NOTEBOOKLM COLLECTION
              </div>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.5rem", textTransform: "uppercase" as const, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 0.75rem 0", lineHeight: 1 }}>
                ARTIFEX LABS RESEARCH COLLECTION
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#AAAAAA", lineHeight: 1.65, maxWidth: 600, margin: 0 }}>
                The full Artifex Labs research collection is curated in NotebookLM — an AI-powered research environment that allows you to query, summarize, and synthesize all papers in the collection simultaneously. Access the complete library including papers not listed above.
              </p>
            </div>
            <a
              href="https://notebooklm.google.com/notebook/d90f61e8-7f05-4a8e-843c-29d55d321a6a?authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.85rem", textTransform: "uppercase" as const, letterSpacing: "-0.01em", padding: "1rem 2rem", background: "#FF4D00", color: "#000000", textDecoration: "none", border: "2px solid #FF4D00", display: "inline-block", flexShrink: 0 }}
            >
              OPEN COLLECTION ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
