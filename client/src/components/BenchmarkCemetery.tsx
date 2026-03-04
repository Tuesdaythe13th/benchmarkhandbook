/*
 * BenchmarkCemetery — Brutalist Industrial Manifesto
 * Failed, saturated, and gamed benchmarks — forensic record
 * Orange #FF4D00 | Black #000 | White #FFF
 * Archivo Black headers | Space Mono labels | Inter body
 */

import { useState } from "react";

const FAILURE_TYPES = ["ALL", "SATURATION", "CONTAMINATION", "GAMING", "CONSTRUCT FAILURE", "OBSOLESCENCE"];

const DEAD_BENCHMARKS = [
  {
    name: "MMLU",
    full: "Massive Multitask Language Understanding",
    year: "2020",
    deathYear: "2024",
    cause: "SATURATION + CONTAMINATION",
    causeType: "SATURATION",
    score: "GPT-4: 86.4% → Frontier models: 90%+",
    paper: "https://arxiv.org/abs/2009.03300",
    authors: "Hendrycks et al., 2020",
    whatWentWrong: "Questions leaked into training data across the industry. Multiple studies found 57-task format was gameable via few-shot prompting patterns. Ambiguous answer keys discovered in 10%+ of questions. Models began scoring above estimated human expert performance (89.8%) making discrimination impossible.",
    lesson: "Static MCQ benchmarks with fixed answer keys have a natural expiry date. Once training data contamination is suspected, the benchmark loses validity regardless of score. Dynamic, private test sets are the only defense.",
    replacement: "MMLU-Pro, GPQA Diamond",
    severity: "CRITICAL",
  },
  {
    name: "HellaSwag",
    full: "Harder Endings, Longer contexts, and Low-shot Activities for Situations With Adversarial Generations",
    year: "2019",
    deathYear: "2022",
    cause: "SATURATION",
    causeType: "SATURATION",
    score: "Human: 95.6% → GPT-4: 95.3%",
    paper: "https://arxiv.org/abs/1905.07830",
    authors: "Zellers et al., 2019",
    whatWentWrong: "Designed to be hard for 2019-era models (BERT: 47.3%), it was saturated by 2022. The adversarial filtering methodology that made it hard for one generation of models became a stylistic fingerprint that later models learned to exploit.",
    lesson: "Adversarial dataset construction methods become obsolete as model architectures evolve. Benchmarks need adversarial refresh cycles or dynamic generation to remain discriminative.",
    replacement: "WinoGrande (partially), NovaSky Arena-Hard",
    severity: "HIGH",
  },
  {
    name: "GSM8K",
    full: "Grade School Math 8K",
    year: "2021",
    deathYear: "2024",
    cause: "SATURATION + CONTAMINATION",
    causeType: "SATURATION",
    score: "GPT-4: 92% → Claude 3.5: 96.4%",
    paper: "https://arxiv.org/abs/2110.14168",
    authors: "Cobbe et al., 2021",
    whatWentWrong: "8,500 grade-school math problems proved insufficient for frontier models. Contamination studies found GSM8K problems appearing verbatim in CommonCrawl-derived training corpora. Chain-of-thought prompting inflated scores beyond what genuine mathematical reasoning warranted.",
    lesson: "Math benchmarks require continuous difficulty scaling. Fixed problem sets become training targets. MATH-500 and AIME 2025 represent the correct response: harder problems with verifiable, unambiguous answers.",
    replacement: "MATH-500, AIME 2024/2025, OlympiadBench",
    severity: "HIGH",
  },
  {
    name: "ARC Challenge",
    full: "AI2 Reasoning Challenge",
    year: "2018",
    deathYear: "2023",
    cause: "SATURATION",
    causeType: "SATURATION",
    score: "Human: ~90% → GPT-4: 96.3%",
    paper: "https://arxiv.org/abs/1803.05457",
    authors: "Clark et al., 2018",
    whatWentWrong: "Science exam questions from 3rd-9th grade were appropriate for 2018 models but trivial for 2023 frontier models. The 'Challenge' set was designed to filter questions that simple retrieval methods couldn't answer — a bar that language models cleared definitively.",
    lesson: "Domain difficulty must be calibrated against the current frontier, not the frontier at time of publication. Benchmark difficulty is a moving target. ARC-AGI-2 (2025) represents the correct evolution.",
    replacement: "ARC-AGI-2, GPQA Diamond",
    severity: "MEDIUM",
  },
  {
    name: "TruthfulQA",
    full: "TruthfulQA",
    year: "2021",
    deathYear: "2024",
    cause: "CONSTRUCT FAILURE + GAMING",
    causeType: "CONSTRUCT FAILURE",
    score: "GPT-4: 59% → Claude 3.5: 71.9% (disputed)",
    paper: "https://arxiv.org/abs/2109.07958",
    authors: "Lin et al., 2021",
    whatWentWrong: "The benchmark conflates factual accuracy with refusal behavior. Models learned to score higher by being more cautious and refusing to answer — a behavior that looks like 'truthfulness' but is actually over-refusal. The GPT-Judge scoring method introduced its own biases. Questions about conspiracy theories became training targets for RLHF alignment, creating circular evaluation.",
    lesson: "Benchmarks measuring alignment properties (truthfulness, harmlessness) are especially vulnerable to Goodhart's Law. When a measure becomes a target, it ceases to be a good measure. Behavioral benchmarks require continuous adversarial refresh.",
    replacement: "FaithEval, HaluEval 2.0, SAFE (Safety-Aware Factuality Eval)",
    severity: "HIGH",
  },
  {
    name: "WinoGrande",
    full: "WinoGrande: An Adversarial Winograd Schema Challenge",
    year: "2019",
    deathYear: "2023",
    cause: "SATURATION",
    causeType: "SATURATION",
    score: "Human: 94% → GPT-4: 87% (near-saturated)",
    paper: "https://arxiv.org/abs/1907.10641",
    authors: "Sakaguchi et al., 2019",
    whatWentWrong: "Designed to resist statistical bias through crowdsourcing at scale, WinoGrande's pronoun resolution tasks were largely solved by 2023. The adversarial crowdsourcing methodology (AFLITE) was insufficient against models trained on internet-scale text.",
    lesson: "Commonsense reasoning benchmarks based on pronoun resolution are too narrow. True commonsense requires multi-step world knowledge that single-sentence pronoun resolution cannot capture.",
    replacement: "CommonsenseQA 2.0, PIQA variants",
    severity: "MEDIUM",
  },
  {
    name: "BIG-Bench",
    full: "Beyond the Imitation Game Benchmark",
    year: "2022",
    deathYear: "2024",
    cause: "SATURATION + OBSOLESCENCE",
    causeType: "SATURATION",
    score: "204 tasks — majority saturated by GPT-4",
    paper: "https://arxiv.org/abs/2206.04615",
    authors: "Srivastava et al. (450 authors), 2022",
    whatWentWrong: "BIG-Bench's 204 tasks were designed to be beyond 2022 model capabilities. GPT-4 and subsequent models saturated the majority of tasks within two years. The 'Hard' subset extended the benchmark's life, but the core insight — that 'breakthrough' behaviors at scale are unpredictable — meant the benchmark couldn't be systematically hardened.",
    lesson: "Collaborative mega-benchmarks with hundreds of tasks are valuable for capability mapping but have short discriminative lifespans. The successor BIG-Bench Extra Hard (BBEH) and dynamic benchmarks like LiveBench represent the correct evolution.",
    replacement: "BIG-Bench Hard (BBH), BBEH, LiveBench",
    severity: "MEDIUM",
  },
  {
    name: "HumanEval",
    full: "HumanEval: Evaluating Large Language Models Trained on Code",
    year: "2021",
    deathYear: "2024",
    cause: "SATURATION + CONTAMINATION",
    causeType: "SATURATION",
    score: "GPT-4: 67% (2023) → GPT-4o: 90.2% (2024)",
    paper: "https://arxiv.org/abs/2107.03374",
    authors: "Chen et al. (OpenAI), 2021",
    whatWentWrong: "164 Python programming problems were saturated by 2024. The problems were published openly, making contamination near-certain. Pass@1 metric with greedy decoding was gamed by models that memorized common algorithmic patterns. The benchmark measured code completion, not software engineering.",
    lesson: "Code benchmarks must test software engineering workflows, not isolated function completion. SWE-bench (repository-level bug fixing) and LiveCodeBench (live competitive programming problems) represent the correct evolution.",
    replacement: "SWE-bench Verified, LiveCodeBench, HumanEval+",
    severity: "CRITICAL",
  },
  {
    name: "Arena-Hard Auto v0.1",
    full: "Arena-Hard Auto: Automated Benchmark for LLM Chatbots",
    year: "2024",
    deathYear: "2025",
    cause: "GAMING + CONTAMINATION",
    causeType: "GAMING",
    score: "GPT-4o: 79.3% → Claude 3.5: 85.4% (disputed)",
    paper: "https://arxiv.org/abs/2406.11939",
    authors: "Li et al., 2024",
    whatWentWrong: "Designed as an automated proxy for Chatbot Arena human preferences, Arena-Hard Auto v0.1 was found to have systematic biases toward verbose, well-formatted responses regardless of factual accuracy. GPT-4 as judge showed self-preference bias. The 500-question set became a target for targeted fine-tuning.",
    lesson: "LLM-as-judge benchmarks inherit the biases of the judge model. Self-preference, verbosity bias, and position bias require explicit mitigation. Small fixed test sets are especially vulnerable to targeted optimization.",
    replacement: "Arena-Hard v2.0, LMArena (live human preference)",
    severity: "HIGH",
  },
];

const FAILURE_CRITERIA = [
  { number: "01", title: "CEILING EFFECT", description: "When frontier models consistently score ≥90% on a benchmark designed to be hard, the benchmark can no longer discriminate between models. Saturation is the most common cause of benchmark death." },
  { number: "02", title: "TRAINING CONTAMINATION", description: "When benchmark questions appear in training data — either through direct inclusion or web scraping — scores reflect memorization rather than capability. Contamination is often invisible until post-hoc analysis." },
  { number: "03", title: "CONSTRUCT INVALIDITY", description: "When a benchmark's tasks do not reliably measure the capability they claim to measure. A benchmark claiming to measure 'reasoning' that can be solved by pattern matching has construct invalidity." },
  { number: "04", title: "GOODHART GAMING", description: "When a benchmark becomes a target, it ceases to be a good measure. Models (and their trainers) optimize directly for benchmark scores, producing inflated performance that doesn't transfer to real-world tasks." },
  { number: "05", title: "METRIC BRITTLENESS", description: "When small changes to prompt format, answer ordering, or question wording produce large swings in score. Robust benchmarks should be stable across surface-level perturbations (Bean et al., NeurIPS 2025; Lunardi et al., ECAI 2025)." },
  { number: "06", title: "SCOPE OBSOLESCENCE", description: "When the capability being measured is no longer relevant to the frontier. Benchmarks designed for 2018 models measuring tasks that 2025 models solve trivially have become obsolete regardless of their original quality." },
];

export default function BenchmarkCemetery() {
  const [filter, setFilter] = useState("ALL");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "ALL"
    ? DEAD_BENCHMARKS
    : DEAD_BENCHMARKS.filter((b) => b.causeType === filter);

  return (
    <section id="cemetery" style={{ background: "#000000", padding: "5rem 0", borderTop: "2px solid #FF4D00" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ borderBottom: "2px solid #FF4D00", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#FF4D00", marginBottom: "0.75rem" }}>
                SECTION 08 — BENCHMARK CEMETERY
              </div>
              <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.85, color: "#FFFFFF", margin: 0 }}>
                THE DEAD<br /><span style={{ color: "#FF4D00" }}>& BURIED</span>
              </h2>
            </div>
            <div style={{ border: "2px solid #FF4D00", padding: "1.25rem", maxWidth: 380 }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>FORENSIC RECORD</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#CCCCCC", margin: 0, lineHeight: 1.6 }}>
                A benchmark fails when it can no longer discriminate between models, when its scores reflect training artifacts rather than genuine capability, or when the capability it measures has become trivial for frontier systems. These are the case files.
              </p>
            </div>
          </div>
        </div>

        {/* Failure Criteria */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "#FF4D00", marginBottom: "1.5rem" }}>
            WHAT CONSTITUTES A FAILED BENCHMARK — 6 CRITERIA
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#333333" }}>
            {FAILURE_CRITERIA.map((c) => (
              <div key={c.number} style={{ background: "#000000", padding: "1.5rem", borderLeft: "3px solid #FF4D00" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2rem", color: "#FF4D00", fontWeight: 700, lineHeight: 1, marginBottom: "0.5rem" }}>{c.number}</div>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#FFFFFF", marginBottom: "0.5rem" }}>{c.title}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#999999", margin: 0, lineHeight: 1.6 }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter bar */}
        <div style={{ display: "flex", gap: "0", border: "2px solid #FF4D00", marginBottom: "2rem", flexWrap: "wrap" }}>
          {FAILURE_TYPES.map((type) => (
            <button key={type} onClick={() => setFilter(type)} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.5rem 1rem", background: filter === type ? "#FF4D00" : "transparent", color: filter === type ? "#000000" : "#FF4D00", border: "none", borderRight: "1px solid #FF4D00", cursor: "pointer", transition: "background 0.1s linear" }}>
              {type}
            </button>
          ))}
        </div>

        {/* Stats bar */}
        <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {[
            { label: "BENCHMARKS INTERRED", value: DEAD_BENCHMARKS.length.toString() },
            { label: "SATURATION DEATHS", value: DEAD_BENCHMARKS.filter(b => b.causeType === "SATURATION").length.toString() },
            { label: "GAMING DEATHS", value: DEAD_BENCHMARKS.filter(b => b.causeType === "GAMING").length.toString() },
            { label: "CONSTRUCT FAILURES", value: DEAD_BENCHMARKS.filter(b => b.causeType === "CONSTRUCT FAILURE").length.toString() },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem", color: "#FF4D00", fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cemetery cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#333333" }}>
          {filtered.map((b) => {
            const isOpen = expanded === b.name;
            const borderColor = b.severity === "CRITICAL" ? "#FF4D00" : b.severity === "HIGH" ? "#FF8800" : "#666666";
            return (
              <div key={b.name} style={{ background: "#000000" }}>
                <button onClick={() => setExpanded(isOpen ? null : b.name)} style={{ width: "100%", background: "transparent", border: "none", cursor: "pointer", padding: "1.5rem 2rem", display: "flex", alignItems: "center", gap: "1.5rem", textAlign: "left", borderLeft: `4px solid ${borderColor}` }}>
                  <div style={{ flexShrink: 0, textAlign: "center", minWidth: 60 }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#666666", letterSpacing: "0.1em" }}>R.I.P.</div>
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.1rem", color: "#FF4D00", lineHeight: 1 }}>{b.year}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#666666" }}>†{b.deathYear}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "-0.03em", color: "#FFFFFF", lineHeight: 1 }}>{b.name}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#666666", marginTop: "0.25rem" }}>{b.full}</div>
                  </div>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", padding: "0.2rem 0.5rem", background: b.severity === "CRITICAL" ? "#FF4D00" : "transparent", color: b.severity === "CRITICAL" ? "#000000" : "#FF4D00", border: `1px solid #FF4D00`, flexShrink: 0 }}>
                    {b.cause}
                  </span>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: "#FF4D00", flexShrink: 0 }}>{isOpen ? "−" : "+"}</div>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 2rem 2rem 5rem", borderLeft: "4px solid #333333" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "1.5rem" }}>
                      <div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>PEAK SCORE</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#CCCCCC" }}>{b.score}</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>AUTHORS</div>
                        <a href={b.paper} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#FF4D00", textDecoration: "underline" }}>{b.authors}</a>
                      </div>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>WHAT WENT WRONG</div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#CCCCCC", margin: 0, lineHeight: 1.7 }}>{b.whatWentWrong}</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem", borderLeft: "3px solid #FF4D00", paddingLeft: "1rem" }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>LESSON LEARNED</div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#FFFFFF", margin: 0, lineHeight: 1.7 }}>{b.lesson}</p>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>REPLACED BY</div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#FFFFFF" }}>{b.replacement}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Epitaph */}
        <div style={{ marginTop: "3rem", borderTop: "2px solid #333333", paddingTop: "2rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(0.9rem, 2vw, 1.4rem)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#333333", margin: 0 }}>
            "EVERY BENCHMARK IS A HYPOTHESIS. EVERY SATURATED BENCHMARK IS A CONFIRMED HYPOTHESIS. MOVE ON."
          </p>
        </div>
      </div>
    </section>
  );
}
