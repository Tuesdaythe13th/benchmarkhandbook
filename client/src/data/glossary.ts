/**
 * Glossary Database
 * Centralized repository of all core concepts and definitions
 * Used for hover tooltips and the Glossary section
 */

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: "artifex" | "metrological" | "legal" | "technical" | "philosophical";
  relatedTerms?: string[];
  example?: string;
}

export const glossaryTerms: Record<string, GlossaryTerm> = {
  // ARTIFEX Labs Original Concepts
  kinetic_threshold: {
    id: "kinetic_threshold",
    term: "Kinetic Threshold",
    definition:
      "The operational boundary at which laboratory-style benchmark performance begins to lose predictive adequacy because autonomy horizon, environmental complexity, and tool connectivity jointly expand the space of consequential variation. Expressed as KT = f(H, C, T) where H is autonomy horizon, C is environment complexity, and T is tool connectivity.",
    category: "artifex",
    relatedTerms: ["autonomy_horizon", "environment_complexity", "tool_connectivity"],
    example:
      "A model scoring 95% on a static benchmark may fail catastrophically when deployed as an autonomous agent with API access in an unpredictable environment.",
  },

  bbom: {
    id: "bbom",
    term: "Benchmark Bill of Materials (BBOM)",
    definition:
      "An 11-layer disclosure architecture that documents every aspect of a benchmark: specification, tasks, ground truth, execution environment, scoring, judge qualifications, reporting, integrity controls, coverage verification, lifecycle management, and scalability. A benchmark result without a complete BBOM is not governance-grade.",
    category: "artifex",
    relatedTerms: ["governance", "transparency", "reproducibility"],
    example:
      "The BBOM for a safety benchmark must disclose contamination detection methods, inter-rater reliability scores, and multilingual coverage verification.",
  },

  conjunction_requirement: {
    id: "conjunction_requirement",
    term: "Conjunction Requirement",
    definition:
      "A strict governance principle stating that when a deployment tier requires multiple evaluation properties (reliability, validity, uncertainty, fairness, reproducibility, practicality), all of them must be satisfied simultaneously. A cheap and reproducible but construct-invalid benchmark fails the Conjunction Requirement.",
    category: "artifex",
    relatedTerms: ["six_desiderata", "governance_routing"],
  },

  calibration_hierarchy: {
    id: "calibration_hierarchy",
    term: "Calibration Hierarchy",
    definition:
      "A tier-based framework that ties evidentiary burden to deployment stakes. Progresses from Exploratory (weak evidence acceptable) through Developmental Gating (moderate confidence), Pre-deployment (strong validity evidence), to High-stakes Deployment (strongest standards with bounded uncertainty).",
    category: "artifex",
    relatedTerms: ["six_desiderata", "governance_routing", "evidentiary_burden"],
  },

  tripartite_harm: {
    id: "tripartite_harm",
    term: "Tripartite Harm Distinction",
    definition:
      "A framework distinguishing three categories of harm: Feeling (subjective offense or emotional distress), Offense (violation of norms or dignity), and Harm (material, measurable injury). Critical for calibrating governance responses proportionally.",
    category: "artifex",
    relatedTerms: ["harm_taxonomy", "governance_routing"],
  },

  measuring_for_void: {
    id: "measuring_for_void",
    term: "Measuring for the Void",
    definition:
      "A principle that evaluation frameworks must account for what is not measured—the gaps, blind spots, and unmeasured dimensions that could lead to catastrophic failures. Complements positive measurement with systematic absence analysis.",
    category: "artifex",
    relatedTerms: ["construct_validity", "scope_limitation"],
  },

  benchmark_cemetery: {
    id: "benchmark_cemetery",
    term: "Benchmark Cemetery",
    definition:
      "A taxonomy and archive of failed, deprecated, or superseded benchmarks, documenting why they failed, what vulnerabilities they exposed, and lessons learned. Prevents repeated mistakes and provides historical context for evaluation design.",
    category: "artifex",
    relatedTerms: ["benchmark_decay", "governance"],
  },

  // Metrological Concepts
  construct_validity: {
    id: "construct_validity",
    term: "Construct Validity",
    definition:
      "The degree to which a test actually measures the theoretical concept it claims to measure. A benchmark may be reliable (consistent) but construct-invalid (measuring the wrong thing). Essential for ensuring benchmarks measure what matters for deployment.",
    category: "metrological",
    relatedTerms: ["reliability", "validity", "measurement_theory"],
  },

  uncertainty_characterization: {
    id: "uncertainty_characterization",
    definition:
      "A quantitative statement of the quality of a measurement, including dispersion, confidence intervals, and decision-threshold overlaps. Required by JCGM 100:2008 for any measurement offered as evidence.",
    term: "Uncertainty Characterization",
    category: "metrological",
    relatedTerms: ["measurement_quality", "confidence_intervals"],
  },

  goodharts_law: {
    id: "goodharts_law",
    term: "Goodhart's Law",
    definition:
      "When a measure becomes a target, it ceases to be a good measure. In AI evaluation, optimizing models for leaderboard placement often externalizes broader costs and produces brittle, non-generalizable systems.",
    category: "metrological",
    relatedTerms: ["benchmark_decay", "saturation"],
  },

  benchmark_saturation: {
    id: "benchmark_saturation",
    term: "Benchmark Saturation",
    definition:
      "The state where top models converge to narrow performance bands (often <25 Elo points), making the benchmark unable to discriminate between frontier systems. Saturated benchmarks lose signal and require replacement.",
    category: "metrological",
    relatedTerms: ["goodharts_law", "benchmark_decay"],
  },

  // Legal Concepts
  daubert_standard: {
    id: "daubert_standard",
    term: "Daubert Standard",
    definition:
      "A legal framework (from Daubert v. Merrell Dow Pharmaceuticals, 1993) requiring that scientific evidence be testable, peer-reviewed, have known error rates, and be subject to operational standards. Applicable principle for AI evaluation as evidence.",
    category: "legal",
    relatedTerms: ["evidentiary_fit", "reliability"],
  },

  evidentiary_fit: {
    id: "evidentiary_fit",
    term: "Evidentiary Fit",
    definition:
      "A benchmark's relevance to the specific deployment decision at hand. A benchmark may be internally reliable and still lack fit for a particular use case. The benchmark-plus-disclosure package, not the isolated score, is the proper unit of evidence.",
    category: "legal",
    relatedTerms: ["construct_validity", "scope_limitation"],
  },

  // Technical Concepts
  llm_as_judge: {
    id: "llm_as_judge",
    term: "LLM-as-Judge",
    definition:
      "Using frontier language models to evaluate outputs of other models. Introduces vulnerabilities including position bias, verbosity bias, self-enhancement, and sensitivity to formatting. Requires careful bias auditing.",
    category: "technical",
    relatedTerms: ["evaluation_bias", "process_reward_models"],
  },

  process_reward_model: {
    id: "process_reward_model",
    term: "Process Reward Model (PRM)",
    definition:
      "An evaluation model that provides rewards for every individual step in a reasoning chain, rather than only the final answer. Enables fine-grained monitoring of logic and early detection of hallucinated reasoning paths.",
    category: "technical",
    relatedTerms: ["llm_as_judge", "step_level_evaluation"],
  },

  apbr: {
    id: "apbr",
    term: "Adaptive Precise Boolean Rubrics (APBR)",
    definition:
      "A rubric methodology developed by Mallinar et al. (2025) that converts complex evaluation questions into granular binary (Yes/No) criteria, adaptively filtering to only items relevant to a specific query-response pair. Reduces annotation burden and improves inter-rater reliability.",
    category: "technical",
    relatedTerms: ["rubric_design", "inter_rater_reliability"],
  },

  autonomy_horizon: {
    id: "autonomy_horizon",
    term: "Autonomy Horizon",
    definition:
      "The length and self-directedness of an agent's task chain. Longer chains with more autonomous decision-making increase the Kinetic Threshold, requiring more robust evaluation.",
    category: "technical",
    relatedTerms: ["kinetic_threshold", "agentic_evaluation"],
  },

  environment_complexity: {
    id: "environment_complexity",
    term: "Environment Complexity",
    definition:
      "The degree of open-endedness and unpredictability in the operational environment. More complex environments increase the Kinetic Threshold and reduce the predictive adequacy of static benchmarks.",
    category: "technical",
    relatedTerms: ["kinetic_threshold", "real_world_deployment"],
  },

  tool_connectivity: {
    id: "tool_connectivity",
    term: "Tool Connectivity",
    definition:
      "An agent's access to external APIs, code execution capabilities, or physical actuators. Greater connectivity increases the Kinetic Threshold by expanding the space of possible actions.",
    category: "technical",
    relatedTerms: ["kinetic_threshold", "agentic_systems"],
  },

  // Philosophical Concepts
  epistemic_humility: {
    id: "epistemic_humility",
    term: "Epistemic Humility",
    definition:
      "The recognition of the limits of our knowledge and the uncertainty inherent in measurement and inference. Essential for responsible AI evaluation—scores should not travel further than their evidentiary properties justify.",
    category: "philosophical",
    relatedTerms: ["uncertainty_characterization", "scope_limitation"],
  },

  moral_luck: {
    id: "moral_luck",
    term: "Moral Luck",
    definition:
      "The philosophical principle that moral responsibility is partially determined by factors outside an agent's control. Relevant to AI governance: systems may fail due to circumstances, not just design flaws.",
    category: "philosophical",
    relatedTerms: ["governance", "accountability"],
  },

  intersectionality: {
    id: "intersectionality",
    term: "Intersectionality",
    definition:
      "A framework recognizing that individuals experience multiple, overlapping systems of discrimination and privilege. Critical for ensuring AI evaluation captures fairness across intersecting demographic dimensions.",
    category: "philosophical",
    relatedTerms: ["fairness", "demographic_representation"],
  },
};

/**
 * Get a glossary term by ID
 */
export function getTerm(id: string): GlossaryTerm | undefined {
  return glossaryTerms[id];
}

/**
 * Get all terms by category
 */
export function getTermsByCategory(
  category: GlossaryTerm["category"]
): GlossaryTerm[] {
  return Object.values(glossaryTerms).filter((t) => t.category === category);
}

/**
 * Get all terms sorted alphabetically
 */
export function getAllTermsSorted(): GlossaryTerm[] {
  return Object.values(glossaryTerms).sort((a, b) =>
    a.term.localeCompare(b.term)
  );
}

/**
 * Search terms by keyword
 */
export function searchTerms(keyword: string): GlossaryTerm[] {
  const lower = keyword.toLowerCase();
  return Object.values(glossaryTerms).filter(
    (t) =>
      t.term.toLowerCase().includes(lower) ||
      t.definition.toLowerCase().includes(lower)
  );
}

export default glossaryTerms;
