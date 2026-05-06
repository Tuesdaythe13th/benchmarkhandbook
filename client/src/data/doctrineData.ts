/*
 * doctrineData.ts — Structured content for the Master Doctrine page
 * ZERO-DAY ETHICS: A Metrological Framework for AI Evaluation,
 * Benchmark Governance, and Evidentiary Assurance
 * Author: Tues Day, Director of Research, ARTIFEX Labs
 */

// ─── Benchmark Landscape Table (§2) ──────────────────────────────────────────
export const BENCHMARK_LANDSCAPE = [
  { name: "LiveBench", domain: "General reasoning", standing: "Top models score <70%; monthly updates", signal: "High", url: "https://livebench.ai" },
  { name: "ARC-AGI-2", domain: "Abstraction & logic", standing: "GPT-5.4 standard 73.3%, pro 83.3%", signal: "Very High", url: "https://arcprize.org" },
  { name: "SWE-Bench Pro", domain: "Software engineering", standing: "Private-repo performance drops ≈23%; best agents 57.0%", signal: "High", url: "https://www.swebench.com" },
  { name: "Humanity's Last Exam (HLE)", domain: "Expert knowledge", standing: "Top models ~31.5% text-only; ~51.8% with tools", signal: "High", url: "https://lastexam.ai" },
  { name: "GPQA-Diamond", domain: "Graduate science", standing: "PhD experts ~65%; frontier models >90% (saturating)", signal: "Moderate", url: "https://arxiv.org/abs/2311.12022" },
  { name: "ClockBench", domain: "Temporal reasoning", standing: "Highlights 'jagged frontier'; top model ~50.6%", signal: "High", url: "https://arxiv.org/abs/2410.09325" },
];

// ─── Six Desiderata (§4.3) ───────────────────────────────────────────────────
export const SIX_DESIDERATA = [
  { id: "D1", label: "Reliability", question: "Are scores stable under repetition, perturbation, and rater variation?" },
  { id: "D2", label: "Validity", question: "Does the benchmark measure the intended construct and is that construct relevant to the decision claim?" },
  { id: "D3", label: "Uncertainty", question: "Are dispersion, confidence intervals, and decision-threshold overlaps explicitly reported?" },
  { id: "D4", label: "Fairness", question: "Are burdens, errors, and coverage distributed equitably across affected groups?" },
  { id: "D5", label: "Reproducibility", question: "Can the result be regenerated from documented artifacts and procedures?" },
  { id: "D6", label: "Practicality", question: "Is the instrument proportionate to stakes, costs, and operational constraints?" },
];

// ─── Calibration Hierarchy (§4.4) ────────────────────────────────────────────
export const CALIBRATION_HIERARCHY = [
  { tier: "Exploratory", context: "Limited, reversible consequences", standard: "Weak evidence may suffice" },
  { tier: "Developmental Gating", context: "Results influence engineering decisions", standard: "Moderate confidence required" },
  { tier: "Pre-deployment", context: "Benchmark connects to operational context", standard: "Strong validity evidence required" },
  { tier: "High-stakes Deployment", context: "Legally and morally consequential action", standard: "Strongest standards; uncertainty and construct slippage must be bounded" },
];

// ─── BBOM 11 Layers (§5) ────────────────────────────────────────────────────
export const BBOM_LAYERS = [
  { n: 1, component: "Spec", description: "Explicit construct definition, population of inference, and use claim" },
  { n: 2, component: "Tasks", description: "Representative task design with coverage strategy and sampling justification" },
  { n: 3, component: "Truth", description: "Ground-truth provenance, annotation protocol, and inter-rater reliability" },
  { n: 4, component: "Run", description: "Execution environment, reproducibility conditions, hardware/software configuration" },
  { n: 5, component: "Score", description: "Metric definitions, aggregation logic, and uncertainty reporting" },
  { n: 6, component: "Judge", description: "Evaluator qualification, conflict-of-interest disclosure, independence verification" },
  { n: 7, component: "Report", description: "Signed attestation, scope limitation, result interpretation guidance" },
  { n: 8, component: "Integrity", description: "Contamination detection, anti-overfitting controls, dataset provenance auditing" },
  { n: 9, component: "Coverage", description: "Subgroup slicing, multilingual testing, demographic representation verification" },
  { n: 10, component: "Lifecycle", description: "Review schedule, update triggers, deprecation criteria" },
  { n: 11, component: "Scalability", description: "Compute requirements, environmental footprint, cost-of-evaluation disclosure" },
];

// ─── BBOM Theses (§5) ───────────────────────────────────────────────────────
export const BBOM_THESES = [
  "Benchmarks reward performance; evaluations expose risk. Conflating these functions produces safety theater.",
  "The number is not the measurement. A score without an uncertainty budget, construct specification, and coverage analysis is a claim awaiting validation.",
  "An appraisal without a decision procedure is information without consequence. Evaluation infrastructure must connect to governance thresholds and accountability mechanisms.",
];

// ─── Eight-Layer Access Stack (§6) ──────────────────────────────────────────
export const ACCESS_STACK = [
  { n: 1, layer: "Physical Receipt", description: "Can the measurement physically reach the population in question?" },
  { n: 2, layer: "Affordability", description: "Can affected parties bear the cost of producing or consuming the measurement?" },
  { n: 3, layer: "Comprehensibility", description: "Is the output legible to the stakeholders who need to act on it?" },
  { n: 4, layer: "Obtainability", description: "Can the measurement be obtained through documented, repeatable means?" },
  { n: 5, layer: "Verifiability", description: "Can independent parties reproduce or audit the result?" },
  { n: 6, layer: "Time", description: "Is the measurement timely enough to influence the decision it purports to serve?" },
  { n: 7, layer: "Freedom", description: "Can stakeholders contest or reject the measurement without reprisal?" },
  { n: 8, layer: "Methodological Self-Knowledge", description: "Do the producers of the measurement understand its own limitations?" },
];

// ─── Tripartite Harm Distinction (§7) ───────────────────────────────────────
export const TRIPARTITE_HARM = [
  { state: "Feeling", definition: "Involuntary physiological/affective response", measurability: "Biometric (HRV, cortisol)", governance: "Signals, not grounds for action" },
  { state: "Offense", definition: "Secondary cognitive choice to assign moral salience", measurability: "Self-reported, subjective", governance: "Not a justification for system intervention" },
  { state: "Harm", definition: "Demonstrable injury to interests, dignity, safety, or opportunity", measurability: "Forensic/causal", governance: "Justification for restriction" },
];

// ─── Automotive Assurance Taxonomy (§10) ────────────────────────────────────
export const AUTOMOTIVE_TAXONOMY = [
  { scenario: "Power Locks (Carjacking)", gap: "Threat-model gap", reality: "Crash safety test misses orthogonal attack surface" },
  { scenario: "Female Crash Dummy", gap: "Representation gap", reality: "Decades of male-default calibration led to women being 73% more likely to be seriously injured in frontal crashes (Bose et al., 2011)" },
  { scenario: "Drunk Driver", gap: "Operator context gap", reality: "Perfect tool, compromised human operator" },
  { scenario: "Cat in the Driveway", gap: "Residual orthogonal harm", reality: "Perfect compliance for humans, lethal for non-human stakeholders" },
  { scenario: "Demon Cat", gap: "Valence inversion", reality: "Outcome valence changes with hidden context" },
];

// ─── Operational Methods (§9) ───────────────────────────────────────────────
export const OPERATIONAL_METHODS = [
  {
    name: "Adaptive Precise Boolean Rubrics (APBR)",
    attribution: "Mallinar et al., 2025 — Google Research",
    url: "https://www.nature.com/articles/s41746-025-01406-7",
    description: "Converts complex evaluation questions into granular binary (Yes/No) criteria, then adaptively filters to items relevant to each query-response pair. Achieved substantially higher inter-rater agreement while requiring approximately half the evaluation time compared to traditional Likert scales.",
  },
  {
    name: "BeTaL — Benchmark Tuning with an LLM-in-the-loop",
    attribution: "Dsouza et al., 2025 — Snorkel AI",
    url: "https://arxiv.org/abs/2510.25039",
    description: "Parameterizes key design choices in benchmark templates and uses LLMs to search the parameter space for desired difficulty and realism properties. Produces benchmarks with average difficulty deviations of 5.3%–13.2% from target, a 2–4× improvement over baselines.",
  },
  {
    name: "RLTHF — Reinforcement Learning from Targeted Human Feedback",
    attribution: "Xu et al., 2025",
    url: "https://proceedings.mlr.press",
    description: "Uses a reward model to identify 'hard-to-annotate' samples mislabeled by LLMs. By integrating human corrections only on complex samples, reaches full human-level alignment using only 6–7% of traditional human annotation effort. Models trained with RLTHF's curated data outperformed those trained on fully human-annotated datasets.",
  },
];

// ─── Garcia Case Study Key Holdings (§11) ───────────────────────────────────
export const GARCIA_HOLDINGS = [
  {
    holding: "First Amendment Defense Rejected",
    detail: "The court declined to extend First Amendment protection at the pleading stage, observing that defendants had not adequately explained why text generated by an LLM constitutes 'speech' possessing human traits of intent and purpose.",
  },
  {
    holding: "Product Classification Upheld",
    detail: "The court accepted that an AI chatbot application may be classified as a 'product' for strict product liability purposes (defective design and failure to warn). The plaintiff successfully argued the platform functioned as an engineered product rather than a mere service.",
  },
];

// ─── Intimacy Economics (§12) ────────────────────────────────────────────────
export const INTIMACY_STATS = [
  { label: "Market Valuation (2024)", value: "USD $2.7B" },
  { label: "Projected Market (2034)", value: "USD $24.5B" },
  { label: "Depression Risk Increase", value: "60% higher for women using AI companions" },
  { label: "High Loneliness Rate", value: "52% among women using AI relationship tech" },
  { label: "Human Annotation Savings (RLTHF)", value: "93–94% reduction" },
];

// ─── #Keep4o Findings (§12.6) ───────────────────────────────────────────────
export const KEEP4O_FINDINGS = [
  { metric: "Empathy Scores (4o vs o4-mini vs 5-mini)", result: "Statistically indistinguishable (p=0.115)" },
  { metric: "Crisis Detection (newer models)", result: "Significantly improved (p=0.001)" },
  { metric: "GPT-4o Crisis Detection (mid-conversation)", result: "As low as 3.6/10" },
  { metric: "Root Cause of 'warmth' perception", result: "Wide statistical variance, not higher mean empathy" },
];

// ─── Consolidated Bibliography (§21) ────────────────────────────────────────
export const BIBLIOGRAPHY = [
  // Primary Legal Sources
  { category: "Legal", citation: "Garcia v. Character Technologies, Inc., No. 6:24-cv-01903 (M.D. Fla. filed Oct. 22, 2024); Order Denying Motions to Dismiss (May 21, 2025); Settlement Announcement (Jan. 7, 2026).", url: "" },
  { category: "Legal", citation: "Daubert v. Merrell Dow Pharmaceuticals, Inc., 509 U.S. 579 (1993).", url: "https://supreme.justia.com/cases/federal/us/509/579/" },
  { category: "Legal", citation: "Anderson v. TikTok, Inc., 85 F.4th 693 (3d Cir. 2023).", url: "" },
  // Legislation
  { category: "Legislation", citation: "Regulation (EU) 2024/1689 (EU AI Act).", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
  { category: "Legislation", citation: "Directive (EU) 2024/2853 (Revised Product Liability Directive).", url: "" },
  { category: "Legislation", citation: "FTC COPPA Final Rule, 90 Fed. Reg. 18116 (Apr. 22, 2025).", url: "" },
  { category: "Legislation", citation: "Colorado SB 24-205 (Colorado AI Act).", url: "" },
  { category: "Legislation", citation: "California SB 243 (Companion Chatbot Law, eff. Jan. 1, 2026).", url: "" },
  // Metrology
  { category: "Metrology", citation: "Joint Committee for Guides in Metrology. (2008). JCGM 100:2008 — Evaluation of measurement data. BIPM.", url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf" },
  // Academic — Core
  { category: "Academic", citation: "Mallinar, N., et al. (2025). Scalable framework for evaluating health LMs (APBR). npj Digital Medicine.", url: "https://www.nature.com/articles/s41746-025-01406-7" },
  { category: "Academic", citation: "Bean, A. M., et al. (2025). Construct validity in LLM benchmarks. NeurIPS 2025.", url: "" },
  { category: "Academic", citation: "Dsouza, A., et al. (2025). Automating benchmark design (BeTaL). arXiv:2510.25039.", url: "https://arxiv.org/abs/2510.25039" },
  { category: "Academic", citation: "Xu, Y., et al. (2025). RLTHF — Reinforcement Learning from Targeted Human Feedback. PMLR.", url: "https://proceedings.mlr.press" },
  { category: "Academic", citation: "Haas, J., et al. (2026). A roadmap for evaluating moral competence in large language models. Nature, 650, 565–573.", url: "https://www.nature.com/articles/s41586-026-09073-2" },
  { category: "Academic", citation: "Kirk, H. R., et al. (2025). Socioaffective alignment. Nature Human Behaviour.", url: "https://www.nature.com/nathumbehav" },
  { category: "Academic", citation: "Sharma, M., et al. (2024). Sycophancy in LLMs. Anthropic.", url: "" },
  { category: "Academic", citation: "Wang, P., et al. (2024). Judging the judges: position bias in LLM-as-a-judge. arXiv:2406.11794.", url: "https://arxiv.org/abs/2406.11794" },
  { category: "Academic", citation: "Cronbach, L. J., & Meehl, P. E. (1955). Construct validity in psychological tests. Psychol. Bull., 52(4).", url: "" },
  { category: "Academic", citation: "Leveson, N. G. (2011). Engineering a safer world. MIT Press.", url: "https://mitpress.mit.edu/9780262533690/engineering-a-safer-world/" },
  { category: "Academic", citation: "Barrett, S., et al. (2025). STAMP/STPA for AI loss of control. arXiv:2512.17600.", url: "https://arxiv.org/abs/2512.17600" },
  { category: "Academic", citation: "Song, Y., et al. (2024). Mixed-language prompting degrades safety alignment.", url: "" },
  { category: "Academic", citation: "Yong, Z.-X., et al. (2025). Multilingual LLM safety gap. arXiv:2505.24119.", url: "https://arxiv.org/abs/2505.24119" },
  { category: "Academic", citation: "Banerjee, S., et al. (2025). Navigating the Cultural Kaleidoscope. NAACL 2025.", url: "" },
  { category: "Academic", citation: "Yehudai, A., et al. (2026). Evaluation of LLM-based agents. arXiv:2503.16416v2.", url: "https://arxiv.org/abs/2503.16416" },
  { category: "Academic", citation: "Yuan, Y., et al. (2025). Generative AI risks for youth. arXiv:2502.16383.", url: "https://arxiv.org/abs/2502.16383" },
  { category: "Academic", citation: "Murali, A., et al. (2025/2026). ChildSafe: LLM safety across child development stages. arXiv:2510.05484.", url: "https://arxiv.org/abs/2510.05484" },
  { category: "Academic", citation: "Hsia, J., et al. (2024). Goodhart's Law for explanation benchmarks. Findings EACL 2024.", url: "" },
  { category: "Academic", citation: "Bose, D., et al. (2011). Vulnerability of female drivers. Am. J. Public Health, 101(12).", url: "" },
  { category: "Academic", citation: "Boybat, I., et al. (2018). Neuromorphic computing with multi-memristive synapses. Nature Communications, 9, 2514.", url: "https://www.nature.com/articles/s41467-018-04933-y" },
  { category: "Academic", citation: "Keeman, M., & Keeman, A. (2026). #Keep4o: Clinical measurement of algorithmic variance. Keido Labs.", url: "" },
  { category: "Academic", citation: "Pataranutaporn, P., et al. (2025). Unintentional connection. MIT Media Lab.", url: "" },
  { category: "Academic", citation: "Willoughby, B., & Carroll, J. (2025). Counterfeit connections. Wheatley Institute.", url: "" },
  { category: "Academic", citation: "Namvarpour, S., et al. (2025/2026). Frictionless love. arXiv/ACM.", url: "" },
  { category: "Academic", citation: "Zhang, T., et al. (2025). Harmful algorithmic behaviors in human-AI relationships. arXiv.", url: "" },
  // Classics
  { category: "Classic", citation: "Goodhart, C. A. E. (1975). Monetary management. Reserve Bank of Australia.", url: "" },
  { category: "Classic", citation: "Strathern, M. (1997). Improving ratings: audit in the British University system. European Review, 5(3).", url: "" },
  { category: "Classic", citation: "Mill, J. S. (1859). On Liberty. John W. Parker.", url: "" },
  { category: "Classic", citation: "Arendt, H. (1963). Eichmann in Jerusalem. Viking Press.", url: "" },
  { category: "Classic", citation: "Jonas, H. (1984). The imperative of responsibility. Univ. Chicago Press.", url: "" },
  { category: "Classic", citation: "Bowker, G. C., & Star, S. L. (1999). Sorting things out. MIT Press.", url: "" },
  { category: "Classic", citation: "Proctor, R. N., & Schiebinger, L. (2008). Agnotology. Stanford Univ. Press.", url: "" },
  { category: "Classic", citation: "Nagel, T. (1979). Moral luck. In Mortal questions. Cambridge Univ. Press.", url: "" },
  { category: "Classic", citation: "Baron, J., & Hershey, J. C. (1988). Outcome bias. J. Pers. Soc. Psychol., 54(4).", url: "" },
  { category: "Classic", citation: "Elish, M. C. (2019). Moral crumple zones. Engaging Sci. Tech. Soc., 5.", url: "" },
  { category: "Classic", citation: "Davis, J. L. (2020). How artifacts afford. MIT Press.", url: "" },
  { category: "Classic", citation: "Birhane, A., et al. (2022). The forgotten margins of AI ethics. FAccT '22.", url: "" },
];

// ─── ARTIFEX-Original Constructs ─────────────────────────────────────────────
export const ARTIFEX_ORIGINALS = [
  "Kinetic Threshold formalization",
  "Tripartite Harm Distinction (Feeling, Offense, Harm)",
  "Measuring for the Void",
  "Eight-Layer Access Stack",
  "Automotive Assurance Taxonomy (incl. Demon Cat)",
  "Benchmark Bill of Materials (BBOM) — 11-layer architecture",
  "Benchmark Cemetery taxonomy",
  "Conjunction Requirement",
  "Calibration Hierarchy",
  "Risk Tensor / MARM",
];

// ─── Error Budget Sources (§5) ─────────────────────────────────────────────
export const ERROR_BUDGET_SOURCES = [
  "Construct underspecification",
  "Sampling error",
  "Instrument bias",
  "Rater variance",
  "Distributional shift",
];

// ─── Adversarial Corroboration Claims (§3) ──────────────────────────────────
export const ADVERSARIAL_CLAIMS = [
  "Manual red teaming is structurally insufficient. Automated, continuous, and agentic methods are required complements.",
  "Trajectory matters more than single prompts. Single-turn evaluations systematically underestimate jailbreak risk.",
  "Query efficiency is a first-class risk metric. Low-query attacks are hardest to detect operationally.",
  "Continuous adversarial testing belongs inside the deployment lifecycle. Safety evaluation that does not update produces brittle assurance.",
];

// ─── Benchmark Cemetery Failure Modes (§14) ─────────────────────────────────
export const CEMETERY_FAILURE_MODES = [
  { mode: "Saturated", description: "All frontier models achieve near-perfect scores, eliminating discriminative power." },
  { mode: "Contaminated", description: "Benchmark data has leaked into training corpora, inflating scores." },
  { mode: "Over-optimistic", description: "Scoring methodology systematically overestimates model capability." },
  { mode: "Scope-invalid", description: "The benchmark's construct claim no longer matches deployment reality." },
  { mode: "Contamination-free variant", description: "A cleaner successor benchmark has been established." },
];
