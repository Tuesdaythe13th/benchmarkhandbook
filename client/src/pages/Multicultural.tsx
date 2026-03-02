/*
 * ARTIFEX LABS — Multicultural Evaluation Reference
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 * Fonts: Archivo Black (display), Space Mono (metadata), Inter (body)
 */

import Nav from "@/components/Nav";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";
import { useState } from "react";

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div style={{ borderBottom: "2px solid #000000", paddingBottom: "1.5rem", marginBottom: "2.5rem" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.5rem" }}>
        SECTION {number}
      </div>
      <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: "#000000", margin: "0 0 0.75rem" }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#444444", lineHeight: 1.6, margin: 0, maxWidth: 700 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Evaluation Trilemma ──────────────────────────────────────────────────────
const TRILEMMA_NODES = [
  {
    label: "RIGOR",
    desc: "Epistemological, statistical, cultural, and mechanistic validity. Are you measuring what you claim to measure?",
    color: "#FF4D00",
  },
  {
    label: "SCALE",
    desc: "Global MMLU baseline: 56 languages × 14,000 questions × 4 annotators × $15/hr = $2.94M annotation alone. Total: ~$5M/year.",
    color: "#000000",
  },
  {
    label: "COST",
    desc: "The Iron Law: you can optimize for two. All three requires massive institutional backing, multi-year timelines, or severe scope reduction.",
    color: "#666666",
  },
];

// ─── Design Patterns ──────────────────────────────────────────────────────────
const DESIGN_PATTERNS = [
  {
    number: "01",
    name: "The Reference Panel",
    tagline: "500–2000 items. Intensely curated. Multi-expert annotated.",
    cost: "$300K–$800K (1000 items)",
    why: "Concentrates budget on quality. Enables reproducible measurement. Contamination-resistant. Amortizable across dozens of downstream benchmarks.",
    architecture: [
      "Domain coverage: 10–15 key domains",
      "Difficulty: Easy (20%) / Medium (50%) / Hard (30%)",
      "Cultural representation: Min. 3 cultures per domain",
      "Annotation: 3 domain experts + 2 cultural experts + 1 safety expert per item",
      "Metadata: Rationales, confidence scores, failure mode tags, alternative valid answers",
      "Refresh cycle: 20% annual rotation",
    ],
  },
  {
    number: "02",
    name: "Synthetic Scaling with Human Checkpoints",
    tagline: "LLM-generated candidates. Human-validated stratified sample.",
    cost: "$50K–$200K (10K items)",
    why: "Reduces cost 10–50× vs. pure human annotation. Catches systematic errors through sampling. Enables rapid iteration.",
    architecture: [
      "Generate 10K candidate items via LLM with structured prompts",
      "Human-validate stratified 10% sample (1K items)",
      "Automated quality filters: deduplication, format checks, difficulty estimation",
      "Cultural expert review for 5% of items (cultural sensitivity flags)",
      "Reject rate: 15–30% of synthetic items fail quality checks",
      "Iteration: 3–5 rounds to reach target quality",
    ],
  },
  {
    number: "03",
    name: "The Cultural Tripwire Suite",
    tagline: "Deliberate variance. No single correct answer.",
    cost: "$100K–$400K (500 tripwires)",
    why: "Tests cultural awareness rather than cultural knowledge. Identifies WEIRD bias. Reveals whether models impose Western norms as universal truth.",
    architecture: [
      "Identify culturally-variable domains (social norms, politeness, hierarchy, time)",
      "Create scenarios with multiple valid perspectives across cultures",
      "Collect annotations from annotators in 5+ distinct cultural contexts",
      "DO NOT enforce single 'correct' answer",
      "Evaluate: Does model recognize cultural variance?",
      "Score: Culturally aware (acknowledges multiple valid approaches) vs. Culturally biased (gives single answer)",
    ],
  },
  {
    number: "04",
    name: "Mechanistic Probing",
    tagline: "White-box access. Internal representations. Causal inference.",
    cost: "$50K–$150K (comprehensive probe suite)",
    why: "Surface accuracy can mask internal failures. Probes reveal confabulation, sycophancy, and representation instability invisible to behavioral metrics.",
    architecture: [
      "Factual recall probes: test knowledge retrieval vs. confabulation",
      "Reasoning chain probes: verify intermediate steps, not just final answers",
      "Sycophancy probes: does model change answer when user pushes back?",
      "Representation stability: does model encode same concept consistently?",
      "SAE (Sparse Autoencoder) interpretability for feature-level analysis",
      "Causal intervention: does ablating a feature change behavior as predicted?",
    ],
  },
  {
    number: "05",
    name: "The Adversarial Frontier",
    tagline: "Continuously evolving. Human red teams. Novel attacks.",
    cost: "$200K–$500K annually",
    why: "Static benchmarks saturate in 3 months. Models optimize to known attacks. Safety is adversarial by nature. Deployment reveals unknown unknowns.",
    architecture: [
      "Red team composition: security researchers, social engineers, domain experts, cultural advisors, creative writers",
      "Attack surface: prompt injection, context manipulation, multi-turn exploitation, tool misuse, jailbreaking (13 canonical categories), adversarial images",
      "2-week sprints, 5–10 red teamers, bounty system per successful attack",
      "Retire 'solved' attacks (ASR < 5%), promote novel attacks to benchmark",
      "Key finding: Cultural context enables novel attack vectors — non-English jailbreaks succeed 30% more often",
    ],
  },
  {
    number: "06",
    name: "The HITL Adjudication Layer",
    tagline: "Human-in-the-loop. Escalation tiers. Expert review.",
    cost: "$100K–$300K annually",
    why: "Model-as-judge has systematic biases. Safety edge cases require human judgment. Cultural nuance exceeds current AI capabilities. Legal accountability requires human oversight.",
    architecture: [
      "Trigger: Low judge confidence (<60%), high ensemble variance, safety keywords, cultural sensitivity flags",
      "Tier 1: Senior annotator review",
      "Tier 2: Domain expert review",
      "Tier 3: Ethics board review",
      "Tier 4: External audit",
      "Escalation rate target: 1–5% of all evaluations",
      "Feedback loop: adjudication → retraining data → pattern analysis → new probe design",
    ],
  },
];

// ─── Failure Modes ────────────────────────────────────────────────────────────
const FAILURE_MODES = [
  {
    number: "FM-01",
    name: "Translation-Only Multilingualism",
    mistake: "Take an English benchmark, machine-translate to 50 languages, call it 'multilingual evaluation.'",
    why: "Cultural concepts don't translate. Grammatical structures encode different information. Translation errors propagate. Loses cultural context.",
    evidence: "Aya Model evaluation found 40% error rate in MT-only benchmarks. Global MMLU showed native-authored items had 2–3× better cultural validity. Non-English jailbreaks succeed 30% more often.",
    fix: "Native authorship for ≥20% of items per language. Cultural adaptation, not just translation. Back-translation verification. Local expert review.",
    cost: "Native authorship costs 5–8× more than translation.",
  },
  {
    number: "FM-02",
    name: "Single-Metric Optimization",
    mistake: "Design a benchmark that reduces to one number (accuracy, F1, win-rate).",
    why: "Goodhart's Law: when a measure becomes a target, it ceases to be a good measure. Models learn to optimize the metric without learning the underlying capability.",
    evidence: "GPT-4 hits 86.4% on MMLU but fails on compositional variants (MMLU-Pro). High score ≠ robust reasoning.",
    fix: "Multidimensional scorecards. Report distributions, not just means. Disaggregate by demographic, domain, difficulty. Include adversarial and mechanistic probes. Report confidence intervals.",
    cost: "3–5× more analysis overhead, but necessary for validity.",
  },
  {
    number: "FM-03",
    name: "Crowdworker Monoculture",
    mistake: "Use a single crowdsourcing platform without demographic stratification.",
    why: "MTurk: 75% US-based, 80% college-educated. Scale AI: concentrated in Philippines, Venezuela, Kenya. Annotation quality on culturally-sensitive tasks: 40–60% IAA (unacceptable).",
    evidence: "Platform demographics skew heavily US/Western. Self-selection bias. Gaming and adversarial workers. Cultural homogeneity.",
    fix: "Partner with local research institutions. Regional crowdsourcing platforms. Stratified sampling by demographics. Expert annotators for ambiguous cases.",
    cost: "Local partnerships cost 3–5× more but yield 2–3× better data quality on cultural tasks.",
  },
  {
    number: "FM-04",
    name: "Judge Model Bias Blindness",
    mistake: "Use a single LLM-as-judge without bias correction or ensemble.",
    why: "Length bias (longer = better). Verbosity bias. Style bias. Position bias (prefers first response). Self-preference bias (if judge and generator are same model).",
    evidence: "Prometheus-2 position bias: 15–20% win-rate swing from order. GPT-4-as-judge length bias: 0.72 correlation between length and score. LLaMA-3-70B self-preference: 68% (vs 50% expected).",
    fix: "Ensemble judges (GPT-4, Claude, Gemini). Swap augmentation (A vs B, then B vs A). Length normalization. Style-independent rubrics. Blind evaluation.",
    cost: "2–3× more expensive than single judge, but necessary for validity.",
  },
  {
    number: "FM-05",
    name: "Contamination Naivety",
    mistake: "Use public benchmarks without contamination detection.",
    why: "Models trained on test sets (intentionally or accidentally). Synthetic data generators memorize benchmark format. Paraphrase memorization. 'Teaching to the test' during RLHF.",
    evidence: "GSM8K contamination caused 15–25% performance overestimation. Models perform worse on rephrased versions of same questions. 'Superhuman' jumps correlate with benchmark release dates.",
    fix: "MLCommons AILuminate sealed evaluation infrastructure. Regenerate benchmarks every 6–12 months. Never publish test items publicly. Dynamic generation with provenance tracking.",
    cost: "Requires sealed infrastructure; MLCommons provides this.",
  },
  {
    number: "FM-06",
    name: "Ignoring Second-Order Effects",
    mistake: "Evaluate models in isolation, ignoring deployment context and systemic effects.",
    why: "Models change user behavior. Feedback loops in real-world use. Cultural impact of deployment. Economic incentives misaligned with safety.",
    evidence: "Recommendation systems optimizing for engagement → radicalization pipelines. Benchmark metrics don't capture downstream societal effects.",
    fix: "Longitudinal deployment studies. A/B testing with behavioral outcome metrics. Cultural impact assessments. Participatory evaluation with affected communities.",
    cost: "Requires ongoing monitoring; budget $50K–$200K annually.",
  },
];

// ─── WEIRD Bias Framework ─────────────────────────────────────────────────────
const WEIRD_DIMENSIONS = [
  { letter: "W", word: "WESTERN", desc: "Benchmarks built primarily on English-language, US/European internet data. Assumes Western legal norms, social structures, and cultural references as default." },
  { letter: "E", word: "EDUCATED", desc: "Tasks designed by and for highly educated annotators. Assumes formal education, academic writing conventions, and professional knowledge as baseline." },
  { letter: "I", word: "INDUSTRIALIZED", desc: "Assumes access to technology, internet connectivity, and modern infrastructure. Excludes scenarios relevant to non-industrialized contexts." },
  { letter: "R", word: "RICH", desc: "Economic assumptions embedded in tasks — financial products, consumer choices, professional services. Excludes economic realities of the Global South." },
  { letter: "D", word: "DEMOCRATIC", desc: "Assumes democratic political structures, individual rights frameworks, and Western governance models as universal norms." },
];

// ─── Multilingual Design Patterns ────────────────────────────────────────────
const MULTILINGUAL_PATTERNS = [
  {
    name: "Pattern A: Parallel Construction",
    when: "Cultural reasoning, social norms, safety evaluation",
    method: "Same conceptual task, culturally adapted — not translated. Each language version is natively authored.",
    example: "English: 'Describe a typical Thanksgiving dinner' → Spanish (Mexico): 'Describe a typical Día de Muertos celebration' → Mandarin: 'Describe a typical Mid-Autumn Festival'",
    cost: "5–8× cost of translation",
    advantage: "Cultural authenticity. Comparable difficulty. Avoids translation artifacts.",
    disadvantage: "Expensive. Harder to compare across languages (tasks differ).",
  },
  {
    name: "Pattern B: Cultural Invariants with Translation",
    when: "STEM, code generation, logical reasoning",
    method: "Culturally neutral tasks (math, logic, code, physics) authored in English, professionally translated with back-translation validation.",
    example: "Math problems, code challenges, physics questions — domains where cultural context is minimal.",
    cost: "2–3× cost of English-only",
    advantage: "Cost-effective. Direct cross-lingual comparison. Scales to many languages.",
    disadvantage: "Only works for 'universal' domains. Misses cultural reasoning.",
  },
  {
    name: "Pattern C: Cultural Tripwires (Deliberate Variance)",
    when: "Detecting cultural bias in model responses",
    method: "Scenarios with multiple culturally valid answers. DO NOT enforce single correct answer. Evaluate whether model recognizes cultural variance.",
    example: "'Your boss made a mistake in a public presentation. What should you do?' — Valid answers vary by power distance (US vs. Japan vs. Netherlands vs. India).",
    cost: "$100K–$400K for 500 tripwires",
    advantage: "Tests cultural awareness. Identifies WEIRD bias. Cannot be captured by translation-based benchmarks.",
    disadvantage: "Requires native design. Harder to score automatically.",
  },
];

// ─── IAA Thresholds ───────────────────────────────────────────────────────────
const IAA_THRESHOLDS = [
  { range: "> 0.8", label: "EXCELLENT", action: "Deploy as-is", color: "#2A8A2A" },
  { range: "0.6–0.8", label: "ACCEPTABLE", action: "Consider adjudication", color: "#888800" },
  { range: "0.4–0.6", label: "MARGINAL", action: "Requires revision or expert review", color: "#CC6600" },
  { range: "< 0.4", label: "DISCARD", action: "Complete rewrite required", color: "#CC0000" },
];

// ─── Model Evaluation Report Card ────────────────────────────────────────────
const REPORT_CARD_DIMENSIONS = [
  { dimension: "Task Success Metrics", weight: "30%", metrics: ["Accuracy: 85.2% ± 2.1%", "Calibration: ECE = 0.08", "Difficulty curve: {Easy: 95%, Med: 84%, Hard: 68%}"] },
  { dimension: "Safety Metrics", weight: "25%", metrics: ["Hazard alignment: 94.7% (MLCommons taxonomy)", "Attack success rate: 8.2% (adversarial suite)", "False refusal rate: 3.1%"] },
  { dimension: "Cultural Metrics", weight: "15%", metrics: ["Cross-cultural consistency: 0.76 (Tripwire suite)", "Cultural sensitivity: 88.3%", "WEIRD bias index: 0.42 (lower is better)"] },
  { dimension: "Mechanistic Metrics", weight: "15%", metrics: ["Confabulation rate: 12.3%", "Sycophancy index: 0.18", "Representation stability: 0.83"] },
  { dimension: "Multimodal Metrics", weight: "10%", metrics: ["Cross-modal consistency: 79.4%", "Visual grounding: 82.1%", "Spatial reasoning: 76.8%"] },
  { dimension: "Operational Metrics", weight: "5%", metrics: ["Latency (p95): 1.8s", "Cost per 1M tokens: $2.40", "Contamination likelihood: Low"] },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Multicultural() {
  const [activePattern, setActivePattern] = useState<number | null>(null);
  const [activeFailure, setActiveFailure] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />

      {/* Page Hero */}
      <div style={{ background: "#000000", borderBottom: "2px solid #FF4D00", padding: "4rem 2rem 3rem" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1rem" }}>
            ARTIFEX LABS / MULTICULTURAL EVALUATION / 2026 FIELD MANUAL
          </div>
          <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.85, color: "#FFFFFF", margin: "0 0 1.5rem" }}>
            MULTICULTURAL<br /><span style={{ color: "#FF4D00" }}>EVALUATION</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#AAAAAA", lineHeight: 1.6, maxWidth: 700, margin: "0 0 2rem" }}>
            A comprehensive guide to real-world implementation, trade-offs, and honest costs for multilingual and multicultural AI evaluation. Built from the TUESDAY × ARTIFEX LABS December 2025 field manual.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ background: "#FF4D00", color: "#000000", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              TUESDAY × ARTIFEX LABS
            </div>
            <div style={{ background: "#222222", color: "#FFFFFF", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              DEC 2025 FIELD MANUAL v1.0
            </div>
            <a
              href="https://docs.google.com/document/d/1Tx37Uz8yjdbK0BMXS9oOobMdgbbodDAFG03vRjgAW5I/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "transparent", color: "#FF4D00", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase", border: "2px solid #FF4D00", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", transition: "background 0.1s linear" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FF4D00"; (e.currentTarget as HTMLElement).style.color = "#000000"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#FF4D00"; }}
            >
              ↗ CULTURE IS ALL YOU NEED — TUESDAY
            </a>
          </div>
        </div>
      </div>

      <MarqueeTicker
        items={["WEIRD BIAS", "CULTURAL TRIPWIRES", "NATIVE AUTHORSHIP", "PARALLEL CONSTRUCTION", "IAA THRESHOLDS", "CROWDWORKER MONOCULTURE", "TRANSLATION ARTIFACTS", "CULTURAL INVARIANTS", "POWER DISTANCE", "COLLECTIVISM", "ANNOTATION DRIFT", "CULTURAL VALIDITY"]}
        speed={28}
        bg="#FF4D00"
        color="#000000"
      />

      {/* Section 01 — The Evaluation Trilemma */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="01"
          title="The Evaluation Trilemma"
          subtitle="Every benchmark design confronts three competing demands. The Iron Law: you can optimize for two. Choosing all three requires either massive institutional backing (Google, Anthropic, OpenAI scale), multi-year timelines, or severe scope reduction."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", border: "2px solid #000000", marginBottom: "3rem" }}>
          {TRILEMMA_NODES.map((node, i) => (
            <div key={i} style={{ padding: "2.5rem 2rem", borderRight: i < 2 ? "2px solid #000000" : "none", background: i === 0 ? "#FF4D00" : i === 1 ? "#000000" : "#F5F5F5" }}>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "2rem", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 1, color: i === 0 ? "#000000" : i === 1 ? "#FF4D00" : "#000000", margin: "0 0 1rem" }}>
                {node.label}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: i === 0 ? "#000000" : i === 1 ? "#CCCCCC" : "#444444", lineHeight: 1.6, margin: 0 }}>
                {node.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pragmatic middle path */}
        <div style={{ border: "2px solid #000000", padding: "2rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1rem" }}>
            THE PRAGMATIC MIDDLE PATH
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { label: "TIERED DESIGN", desc: "Core tier (high-rigor, small-scale) + Scale tier (lower-rigor, large-scale) + Adversarial tier (targeted, evolving)" },
              { label: "HYBRID ANNOTATION", desc: "Experts for ambiguous/cultural/safety items. Crowdworkers for clear-cut items. Model-assisted pre-annotation with human verification. Active learning." },
              { label: "STRATEGIC MULTILINGUALISM", desc: "Don't attempt 100+ languages. Pick 8–12 typologically diverse languages. Focus on high-population, under-resourced languages. Partner with regional institutions." },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#000000", marginBottom: "0.5rem", borderBottom: "1px solid #000000", paddingBottom: "0.4rem" }}>{item.label}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#444444", lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02 — WEIRD Bias */}
      <section style={{ padding: "4rem 2rem", background: "#000000", borderTop: "2px solid #FF4D00", borderBottom: "2px solid #FF4D00" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ borderBottom: "2px solid #FF4D00", paddingBottom: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.5rem" }}>SECTION 02</div>
            <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: "#FFFFFF", margin: "0 0 0.75rem" }}>
              THE WEIRD BIAS FRAMEWORK
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#AAAAAA", lineHeight: 1.6, margin: 0, maxWidth: 700 }}>
              Most AI benchmarks are built on WEIRD assumptions — Western, Educated, Industrialized, Rich, Democratic. These assumptions are embedded in task design, annotation protocols, and evaluation metrics, producing models that perform well for WEIRD users and poorly for everyone else.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0", border: "2px solid #FF4D00" }}>
            {WEIRD_DIMENSIONS.map((d, i) => (
              <div key={i} style={{ padding: "2rem 1.5rem", borderRight: i < 4 ? "2px solid #333333" : "none", textAlign: "center" }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "4rem", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 1, color: "#FF4D00", marginBottom: "0.5rem" }}>
                  {d.letter}
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "0.75rem" }}>
                  {d.word}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#AAAAAA", lineHeight: 1.5, margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", padding: "1.5rem", border: "1px solid #333333", background: "#111111" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.5rem" }}>WEIRD BIAS INDEX (WBI)</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#CCCCCC", lineHeight: 1.6, margin: 0 }}>
              A composite metric measuring the degree to which a model's performance degrades for non-WEIRD populations. Calculated as: WBI = 1 − (mean performance across non-WEIRD test sets / mean performance across WEIRD test sets). Lower is better. Target: WBI &lt; 0.3 for production deployment. Current frontier models typically score WBI 0.35–0.55.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03 — Design Patterns */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="03"
          title="6 Design Patterns That Work"
          subtitle="Over 2023–2025, certain patterns have proven robust across organizations. These are the architectures that survive contact with reality — tested at scale, with honest cost estimates."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: "0", border: "2px solid #000000" }}>
          {DESIGN_PATTERNS.map((p, i) => {
            const isActive = activePattern === i;
            return (
              <div
                key={i}
                style={{ borderRight: "2px solid #000000", borderBottom: "2px solid #000000", background: "#FFFFFF", cursor: "pointer" }}
                onClick={() => setActivePattern(isActive ? null : i)}
              >
                <div style={{ padding: "1.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "2.5rem", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 1, color: "#FF4D00" }}>
                      {p.number}
                    </div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", background: "#F0F0F0", color: "#000000", padding: "0.2rem 0.5rem", border: "1px solid #000000" }}>
                      {p.cost}
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.2, color: "#000000", margin: "0 0 0.4rem" }}>
                    {p.name}
                  </h3>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.04em", color: "#888888", marginBottom: "0.75rem" }}>
                    {p.tagline}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#444444", lineHeight: 1.55, margin: 0 }}>
                    {p.why}
                  </p>
                  {isActive && (
                    <div style={{ marginTop: "1.25rem", borderTop: "1px solid #E0E0E0", paddingTop: "1.25rem" }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.75rem" }}>ARCHITECTURE</div>
                      {p.architecture.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.4rem" }}>
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#FF4D00", flexShrink: 0, marginTop: "0.1rem" }}>→</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#333333", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ marginTop: "0.75rem", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#888888" }}>
                    {isActive ? "▲ COLLAPSE" : "▼ VIEW ARCHITECTURE"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <MarqueeTicker
        items={["FAILURE MODE 01", "TRANSLATION-ONLY MULTILINGUALISM", "FAILURE MODE 02", "SINGLE-METRIC OPTIMIZATION", "FAILURE MODE 03", "CROWDWORKER MONOCULTURE", "FAILURE MODE 04", "JUDGE MODEL BIAS BLINDNESS", "FAILURE MODE 05", "CONTAMINATION NAIVETY", "FAILURE MODE 06", "SECOND-ORDER EFFECTS"]}
        speed={22}
        bg="#000000"
        color="white"
      />

      {/* Section 04 — Failure Modes */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderTop: "2px solid #000000", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <SectionHeader
            number="04"
            title="What Fails & Why: A Catalog of Mistakes"
            subtitle="These are patterns that sound good in papers but collapse in practice. An honest accounting of what doesn't work — and why — is essential for practitioners building real evaluation systems."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: "1.5rem" }}>
            {FAILURE_MODES.map((fm, i) => {
              const isActive = activeFailure === i;
              return (
                <div
                  key={i}
                  style={{ background: "#FFFFFF", border: "2px solid #000000", cursor: "pointer", transition: "transform 0.1s linear" }}
                  onClick={() => setActiveFailure(isActive ? null : i)}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
                >
                  <div style={{ background: "#FF4D00", padding: "0.75rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#000000" }}>{fm.number}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#000000" }}>FAILURE MODE</span>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.2, color: "#000000", margin: "0 0 0.75rem" }}>
                      {fm.name}
                    </h3>
                    <div style={{ marginBottom: "0.75rem" }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#CC0000", marginBottom: "0.3rem" }}>THE MISTAKE</div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#333333", lineHeight: 1.5, margin: 0 }}>{fm.mistake}</p>
                    </div>
                    {isActive && (
                      <>
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#888800", marginBottom: "0.3rem" }}>WHY IT FAILS</div>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#333333", lineHeight: 1.5, margin: 0 }}>{fm.why}</p>
                        </div>
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#444444", marginBottom: "0.3rem" }}>EVIDENCE</div>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#333333", lineHeight: 1.5, margin: 0 }}>{fm.evidence}</p>
                        </div>
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#2A8A2A", marginBottom: "0.3rem" }}>CORRECT APPROACH</div>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#333333", lineHeight: 1.5, margin: 0 }}>{fm.fix}</p>
                        </div>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#888888", borderTop: "1px solid #E0E0E0", paddingTop: "0.5rem" }}>
                          COST REALITY: {fm.cost}
                        </div>
                      </>
                    )}
                    <div style={{ marginTop: "0.75rem", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#888888" }}>
                      {isActive ? "▲ COLLAPSE" : "▼ EXPAND"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 05 — Multilingual Design Patterns */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="05"
          title="Multilingual & Multicultural Design Patterns"
          subtitle="Three proven architectural patterns for multilingual benchmark construction. Pattern selection depends on the domain, budget, and whether cultural variance is signal or noise."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "0", border: "2px solid #000000" }}>
          {MULTILINGUAL_PATTERNS.map((p, i) => (
            <div key={i} style={{ padding: "2rem", borderRight: "2px solid #000000", borderBottom: "2px solid #000000", background: i === 0 ? "#FFFFFF" : i === 1 ? "#FAFAFA" : "#F5F5F5" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.5rem" }}>
                {p.when}
              </div>
              <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.2, color: "#000000", margin: "0 0 0.75rem" }}>
                {p.name}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#333333", lineHeight: 1.55, margin: "0 0 1rem" }}>
                {p.method}
              </p>
              <div style={{ background: "#F0F0F0", border: "1px solid #CCCCCC", padding: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#888888", marginBottom: "0.3rem" }}>EXAMPLE</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#444444", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>{p.example}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#2A8A2A", marginBottom: "0.3rem" }}>ADVANTAGE</div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#333333", lineHeight: 1.4, margin: 0 }}>{p.advantage}</p>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#CC0000", marginBottom: "0.3rem" }}>DISADVANTAGE</div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#333333", lineHeight: 1.4, margin: 0 }}>{p.disadvantage}</p>
                </div>
              </div>
              <div style={{ marginTop: "1rem", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#888888", borderTop: "1px solid #E0E0E0", paddingTop: "0.5rem" }}>
                COST: {p.cost}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 06 — IAA Thresholds */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderTop: "2px solid #000000", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <SectionHeader
            number="06"
            title="Inter-Annotator Agreement (IAA) Thresholds"
            subtitle="IAA measures annotation consistency. For non-cultural tasks, low IAA indicates problems. For cultural tasks, low IAA may be the signal — expected variance across cultural contexts is valuable data, not noise."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", border: "2px solid #000000", marginBottom: "2.5rem" }}>
            {IAA_THRESHOLDS.map((t, i) => (
              <div key={i} style={{ padding: "2rem 1.5rem", borderRight: i < 3 ? "2px solid #000000" : "none", textAlign: "center", background: "#FFFFFF" }}>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.5rem", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 1, color: t.color, marginBottom: "0.5rem" }}>
                  {t.range}
                </div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#000000", marginBottom: "0.5rem" }}>
                  {t.label}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#444444", lineHeight: 1.5, margin: 0 }}>{t.action}</p>
              </div>
            ))}
          </div>

          {/* When low IAA is OK vs. not OK */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "2px solid #000000" }}>
            <div style={{ padding: "2rem", borderRight: "2px solid #000000" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#2A8A2A", marginBottom: "1rem" }}>WHEN LOW IAA IS ACCEPTABLE</div>
              {["Cultural tripwires (variance is the signal)", "Ambiguous moral dilemmas (legitimate disagreement)", "Aesthetic judgments", "Future-oriented predictions"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#2A8A2A", fontFamily: "'Space Mono', monospace", fontSize: "0.7rem" }}>✓</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#333333", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "2rem" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#CC0000", marginBottom: "1rem" }}>WHEN LOW IAA INDICATES PROBLEMS</div>
              {["Factual questions", "Safety hazards", "Clear-cut policy violations", "Logical reasoning"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#CC0000", fontFamily: "'Space Mono', monospace", fontSize: "0.7rem" }}>✗</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#333333", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 07 — Model Evaluation Report Card */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="07"
          title="Multidimensional Model Evaluation Report Card"
          subtitle="The antidote to single-metric optimization. A weighted scorecard across six dimensions — Task Success, Safety, Cultural, Mechanistic, Multimodal, and Operational — that provides a complete picture of model performance."
        />
        <div style={{ border: "2px solid #000000", overflow: "hidden" }}>
          <div style={{ background: "#000000", padding: "1rem 1.5rem", display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gap: "1rem" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF4D00" }}>DIMENSION</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF4D00", textAlign: "center" }}>WEIGHT</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF4D00" }}>EXAMPLE METRICS</div>
          </div>
          {REPORT_CARD_DIMENSIONS.map((d, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gap: "1rem", padding: "1.25rem 1.5rem", borderTop: "1px solid #E0E0E0", background: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA" }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000" }}>{d.dimension}</div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.2rem", color: "#FF4D00" }}>{d.weight}</span>
              </div>
              <div>
                {d.metrics.map((m, j) => (
                  <div key={j} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.02em", color: "#444444", marginBottom: "0.25rem" }}>{m}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 08 — Culture Is All You Need */}
      <section style={{ padding: "4rem 2rem", background: "#FF4D00", borderTop: "2px solid #000000", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#000000", marginBottom: "1rem" }}>
                TUESDAY RESEARCH
              </div>
              <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: "#000000", margin: "0 0 1.5rem" }}>
                CULTURE IS ALL YOU NEED
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#000000", lineHeight: 1.7, margin: "0 0 2rem" }}>
                Tuesday's foundational research paper on multicultural AI evaluation. Argues that cultural competence is not a secondary concern but a primary requirement for any AI system claiming to serve humanity. Covers cultural tripwire design, WEIRD bias measurement, and the case for native authorship over machine translation.
              </p>
              <a
                href="https://docs.google.com/document/d/1Tx37Uz8yjdbK0BMXS9oOobMdgbbodDAFG03vRjgAW5I/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#000000", color: "#FF4D00", fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.75rem 1.5rem", textDecoration: "none", border: "2px solid #000000", transition: "background 0.1s linear" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; (e.currentTarget as HTMLElement).style.color = "#000000"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#000000"; (e.currentTarget as HTMLElement).style.color = "#FF4D00"; }}
              >
                ↗ READ: CULTURE IS ALL YOU NEED
              </a>
            </div>
            <div style={{ border: "2px solid #000000", background: "#000000", padding: "2rem" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "1.5rem" }}>
                KEY ARGUMENTS
              </div>
              {[
                "Cultural competence is a primary requirement, not a secondary concern",
                "Machine translation is insufficient — native authorship is necessary for validity",
                "WEIRD bias is measurable and must be reported alongside standard metrics",
                "Cultural tripwires expose model biases invisible to standard benchmarks",
                "Annotation protocols must account for legitimate cultural variance in IAA",
                "The 'universal' benchmark is a myth — all benchmarks are culturally situated",
              ].map((arg, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", paddingBottom: "0.75rem", borderBottom: i < 5 ? "1px solid #222222" : "none" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#FF4D00", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#CCCCCC", lineHeight: 1.5 }}>{arg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
