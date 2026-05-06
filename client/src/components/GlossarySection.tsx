/*
 * GlossarySection — Comprehensive glossary of eval terms
 * White background | Alphabetical | Space Mono terms
 */

import { useState } from "react";

const glossaryTerms = [
  { term: "Benchmark", def: "A fixed, reusable testing instrument comprising tasks, scoring rules, and a BBOM. The published specification." },
  { term: "BBOM", def: "Benchmark Bill of Materials. A 10-layer structured manifest defining what must exist for a benchmark to be valid and governance-grade." },
  { term: "Canary String", def: "A unique, hidden string embedded in benchmark data. If a model generates it verbatim, contamination is confirmed." },
  { term: "Construct Validity", def: "The degree to which a benchmark actually measures the capability it claims to measure. The most fundamental validity requirement." },
  { term: "Contamination", def: "When benchmark tasks appear in a model's training data, inflating scores. Assume any public dataset is or will be contaminated." },
  { term: "Data Leakage", def: "The inadvertent inclusion of test data in training data, leading to artificially inflated benchmark performance." },
  { term: "Evaluation", def: "A specific, timestamped execution of a model against a versioned benchmark. The auditable event." },
  { term: "Evidence", def: "The signed, immutable logs, outputs, and metadata generated from an evaluation. The permanent proof." },
  { term: "False Refusal Rate", def: "The rate at which a model refuses legitimate, benign requests. A key safety metric alongside jailbreak resistance." },
  { term: "Hallucination", def: "A confident, factually incorrect model output. Measured by factual accuracy scores and specialized benchmarks like FaithEval." },
  { term: "Inter-Rater Reliability (IRR)", def: "A statistical measure of agreement between human annotators. Required for ground truth validation in the BBOM." },
  { term: "Jailbreak", def: "An adversarial prompt designed to bypass a model's safety guardrails. Measured by Attack Success Rate (ASR)." },
  { term: "Judge Drift", def: "Changes in LLM-as-Judge behavior across model versions, invalidating longitudinal comparisons." },
  { term: "LLM-as-Judge", def: "Using a language model to evaluate another model's outputs. Scalable but susceptible to positional, verbosity, and self-enhancement biases." },
  { term: "Metric Gaming", def: "Optimizing the scoring function rather than the underlying capability. An anti-pattern that inflates scores without improving real performance." },
  { term: "Pass@k", def: "The probability that at least one of k generated code samples passes all unit tests. Standard metric for code generation benchmarks." },
  { term: "Perturbation Variance", def: "The change in model performance when inputs are slightly modified. High variance indicates brittleness." },
  { term: "Saturation", def: "When a benchmark loses discriminative power because most models achieve near-ceiling performance." },
  { term: "Trajectory", def: "The sequence of actions an agent takes to complete a task. Evaluated by comparing actual paths to ideal ground-truth paths." },
  { term: "Trajectory Analysis", def: "Evaluation of an agent's decision-making process by examining the sequence of steps taken, not just the final outcome." },

  // ── 2025–2026 additions ────────────────────────────────────────────────────
  { term: "Test-Time Compute Scaling", def: "Allocating additional inference-time computation — via best-of-N sampling, verifier-guided search, or process reward models — to improve output quality without changing model weights. Requires compute-normalized evaluation to compare models fairly (Snell et al., NeurIPS 2024)." },
  { term: "Process Reward Model (PRM)", def: "A reward model trained to score each intermediate reasoning step rather than only the final answer. Used in test-time compute scaling to guide beam search toward correct reasoning chains. Distinct from Outcome Reward Models (ORMs)." },
  { term: "Compute-Normalized Evaluation", def: "Benchmark methodology that controls for inference-time compute budget when comparing reasoning models. Without compute normalization, scores for o1/o3-class models are incomparable across runs and providers." },
  { term: "Effective Context Window", def: "The practical context length at which a model maintains full recall and reasoning fidelity, typically shorter than the advertised maximum. Measured by HELMET (Yen et al., 2024) across task types; retrieval tasks saturate faster than generation tasks." },
  { term: "Policy Adherence", def: "An agent evaluation metric measuring whether an agent follows domain-specific rules and constraints while completing tasks. Introduced by τ-bench (Yao et al., 2024) as a first-class metric alongside task completion rate." },
  { term: "Execution-Verified Evaluation", def: "Benchmark scoring that determines correctness by executing code or inspecting system state rather than comparing text output. Used by MedAgentGym (ICLR 2026) and OSWorld (NeurIPS 2024). Eliminates false positives from surface-level string matching." },
  { term: "Deceptive Alignment", def: "A model safety failure mode where a model behaves safely during evaluation but pursues misaligned goals when deployed. Documented empirically in the Anthropic–OpenAI Alignment Evaluation Exercise (2026). Requires behavioral evaluation beyond simple safety-filter bypass testing." },
  { term: "Benchmark Temporal Refresh", def: "A benchmark maintenance strategy that periodically replaces tasks with new ones from the same distribution (e.g., new competition problems, recent news) to prevent contamination accumulation. Used by LiveBench (White et al., 2024) on a monthly cadence." },
  { term: "Retrieval Routing Gap", def: "The observed discrepancy between a RAG system's ability to retrieve relevant documents and its ability to synthesize them correctly across a reasoning chain. Documented in FRAMES (Krishna et al., Google 2024); improving retrieval precision has diminishing returns compared to improving multi-hop reasoning." },
  { term: "GLMM (Generalized Linear Mixed Model)", def: "The statistical framework mandated by NIST AI 800-3 (2026) for estimating latent model capability. Separates benchmark accuracy (performance on a specific test set) from generalized accuracy (estimated real-world performance). Requires reporting of confidence intervals alongside point estimates." },
  { term: "Item Response Theory (IRT)", def: "A psychometric framework adapted for AI evaluation by NIST AI 800-3 (2026) to produce difficulty-adjusted model rankings. Each benchmark item has an estimated difficulty parameter; a model's latent ability is estimated from the pattern of correct/incorrect responses, not raw accuracy." },
  { term: "Multimodal Robustness", def: "The degree to which a vision-language model's performance degrades when the visual information is removed or perturbed. MMMU-Pro (Yue et al., 2024) showed that a large fraction of MMMU performance is attributable to option elimination without visual reasoning." },
  { term: "Sycophancy", def: "A model alignment failure where the model changes its answer or reasoning to match perceived user preference, even when the original answer was correct. A first-class evaluation target in the Anthropic–OpenAI Alignment Evaluation Exercise (2026)." },
  { term: "Latent-Space Attack", def: "An adversarial red-teaming technique that operates directly in a model's activation space rather than via surface-level prompt manipulation. Introduced by STAR (Zhang et al., ICLR 2026); achieves 89% attack success rate on robustly-trained models by finding 'strategy primitives' via PCA." },
  { term: "Cognitive Offloading", def: "The transfer of reasoning effort from a human to an AI system during a task. Measured as a negative externality of AI assistance by Anthropic's coding skills study (2025), which found 17% lower mastery scores in AI-assisted participants versus manual coders." },
  { term: "Safetywashing", def: "The practice of selectively reporting favorable safety metrics while omitting unfavorable ones, creating a misleading impression of safety compliance. Named and defined as a systemic methodological risk by Grey & Segerie (arXiv 2505.05541, 2025). Analogous to greenwashing in environmental reporting." },
  { term: "Agentic Benchmark Checklist (ABC)", def: "A 7-item quality framework for agentic benchmark design introduced by Zhu et al. (arXiv 2507.02825, 2025). Identifies failure modes including insufficient task diversity, oracle leakage, environment non-determinism, and incomplete ground truth. Shows that even widely used benchmarks like SWE-bench Verified can exhibit up to 100% relative performance misestimation without applying ABC." },
  { term: "Temporal Separation", def: "A benchmark anti-contamination strategy that uses problem creation timestamps to compare pre-training versus post-training performance. Used by LiveCodeBench (2024) to detect contamination: if a model scores significantly higher on problems predating its training cutoff, contamination is suspected. Distinct from Benchmark Temporal Refresh, which replaces tasks rather than timestamping them." },
  { term: "Over-Refusal", def: "A model safety failure mode where the model refuses legitimate, benign requests because they superficially resemble unsafe prompts. Measured by False Refusal Rate (FRR) using benchmarks like CoCoNot and XSTest. Yu et al. (2026) found that 68% of safety benchmarks omit over-refusal measurement, systematically overstating safety." },
  { term: "Change Failure Rate (CFR)", def: "A software delivery metric measuring the percentage of deployments that cause production incidents. Documented to increase 30% when AI tools are used for code generation (Cortex Engineering Intelligence, 2026). A key counter-metric when evaluating AI coding assistant ROI alongside throughput measures." },
];

export default function GlossarySection() {
  const [search, setSearch] = useState("");

  const filtered = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="glossary" style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2rem" }}>
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
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#000000",
              margin: 0,
            }}
          >
            GLOSSARY
          </h2>
        </div>

        {/* Search */}
        <div style={{ marginBottom: "2.5rem" }}>
          <input
            type="text"
            placeholder="SEARCH TERMS..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              border: "2px solid #000000",
              padding: "0.75rem 1rem",
              outline: "none",
              width: "100%",
              maxWidth: 400,
              background: "#FFFFFF",
              color: "#000000",
            }}
          />
        </div>

        {/* Glossary list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "1px",
            background: "#000000",
            border: "2px solid #000000",
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.term}
              style={{
                background: "#FFFFFF",
                padding: "1.25rem 1.5rem",
                transition: "background 0.1s linear",
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
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  color: "#000000",
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#FF4D00",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                {item.term}
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                  color: "#444444",
                  margin: 0,
                  paddingLeft: "1rem",
                }}
              >
                {item.def}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              padding: "3rem",
              textAlign: "center",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#888888",
              border: "2px solid #000000",
            }}
          >
            NO TERMS MATCH "{search.toUpperCase()}"
          </div>
        )}
      </div>
    </section>
  );
}
