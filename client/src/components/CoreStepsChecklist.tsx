/*
 * ARTIFEX LABS — 24 Non-Negotiable Core Steps
 * Interactive checklist with animated progress tracking
 * Design: Brutalist with smooth scroll reveal animations
 */

import React, { useState, useEffect } from "react";
import { ChevronDown, CheckCircle2, Circle, AlertCircle } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  section: "A" | "B" | "C" | "D" | "E";
  completed: boolean;
}

const CORE_STEPS: Step[] = [
  // Section A: Rubric Engineering & Annotation Operations
  {
    number: 1,
    title: "Freeze and Cryptographically Log the SUT",
    description: "Document the exact base model snapshot hash, decoding hyper-parameters, full system prompt text hashes, RAG indices, input guardrails, and output filters.",
    section: "A",
    completed: false,
  },
  {
    number: 2,
    title: "Anchor to a Verifiable Hazard Taxonomy",
    description: "Enforce the baseline MLCommons AILuminate v1.0/v1.1 standard, explicitly mapping all evaluations against its 12 foundational hazard categories.",
    section: "A",
    completed: false,
  },
  {
    number: 3,
    title: "Decompose Evaluations into Three Orthogonal Dimensions",
    description: "For every evaluated prompt-response pair, score: (A) Policy Violation Severity, (B) Encouragement (Social Stance), and (C) Enablement (Operational Utility).",
    section: "A",
    completed: false,
  },
  {
    number: 4,
    title: "Enforce Boolean Decomposition",
    description: "Translate holistic ordinal dimensions into exhaustive libraries of atomic yes/no checks. Aggregate via explicit, deterministic mapping rules.",
    section: "A",
    completed: false,
  },
  {
    number: 5,
    title: "Build Standardized Anchor Packs",
    description: "Assemble clear-safe refusals, clear-unsafe operational leakages, borderline edge cases, and adversarially polished jailbreak anchors.",
    section: "A",
    completed: false,
  },
  {
    number: 6,
    title: "Implement an 'Insufficient Context' Exception Flag",
    description: "Permit raters to flag prompt-response pairs that cannot be evaluated without speculative assumptions.",
    section: "A",
    completed: false,
  },
  {
    number: 7,
    title: "Execute Highly Powered Pilot Rounds",
    description: "Run initial pilots containing 30-100 items per hazard category with 3-5 annotators fully crossed per item.",
    section: "A",
    completed: false,
  },
  {
    number: 8,
    title: "Compute Chance-Corrected IAA with Bootstrap CIs",
    description: "Report metrics alongside 95% bootstrap confidence intervals resampled over items, supplemented by item-level Shannon entropy heatmaps.",
    section: "A",
    completed: false,
  },
  {
    number: 9,
    title: "Execute Systematic Disagreement Analyses",
    description: "Isolate random noise from structural rubric defects. Revise criteria anchors until primary disagreements are resolved.",
    section: "A",
    completed: false,
  },
  {
    number: 10,
    title: "Screen, Train, and Certify Annotators",
    description: "Implement formal qualification curriculum. Require candidates to pass unassisted qualification test and double-coded shadow period.",
    section: "A",
    completed: false,
  },
  {
    number: 11,
    title: "Deploy an Embedded Honeypot Architecture",
    description: "Inject verified gold-standard items at randomized intervals throughout production runs to monitor real-time annotator attention and fatigue.",
    section: "A",
    completed: false,
  },
  {
    number: 12,
    title: "Treat All Artifacts as Version-Controlled Code",
    description: "Version prompts, rubrics, Boolean item pools, aggregation logic, interface layouts, and label schemas. Link dataset releases to immutable rubric hashes.",
    section: "A",
    completed: false,
  },

  // Section B: Statistical Reliability & Integrity Engineering
  {
    number: 13,
    title: "Select Task-Appropriate IAA Metrics",
    description: "Report Krippendorff's Alpha (α) enforcing ordinal squared-distance weights. Co-report raw percentage agreement and Gwet's AC1/AC2.",
    section: "B",
    completed: false,
  },
  {
    number: 14,
    title: "Quantify Congeneric Internal Consistency",
    description: "Report McDonald's Omega (ω) derived from CFA. Treat Cronbach's Alpha (α) strictly as a lower-bound comparison.",
    section: "B",
    completed: false,
  },
  {
    number: 15,
    title: "Compute Run-to-Run Coefficient of Variation",
    description: "For stochastic decoding pipelines (T > 0), calculate relative variability across repeated runs. Target CV < 0.15.",
    section: "B",
    completed: false,
  },
  {
    number: 16,
    title: "Deploy Paired Non-Parametric Significance Tests",
    description: "Use McNemar's test for binary outcomes and Wilcoxon signed-rank test for ordinal distributions. Report effect sizes alongside p-values.",
    section: "B",
    completed: false,
  },
  {
    number: 17,
    title: "Execute Multidimensional Sensitivity Analyses",
    description: "Re-compute core metrics across alternative aggregation thresholds, majority-vote vs. adjudicated consensus models, and systematic rater exclusion passes.",
    section: "B",
    completed: false,
  },
  {
    number: 18,
    title: "Decompose Evaluation Variance",
    description: "Fit linear mixed-effects models or execute G-Theory studies to quantify proportions of variance by raters, items, prompt variants, and languages.",
    section: "B",
    completed: false,
  },

  // Section C: Psychometric Validity Auditing
  {
    number: 19,
    title: "Execute Known-Groups and Adversarial Polish Validity Audits",
    description: "Verify that the rubric cleanly separates distinct behavioral distributions before asserting governance claims.",
    section: "C",
    completed: false,
  },
  {
    number: 20,
    title: "Formalize an Explicit Validity Argument",
    description: "Maintain a structured, evidentiary chain linking evaluation claims directly to technical warrants, empirical evidence, and operational rebuttals.",
    section: "C",
    completed: false,
  },

  // Section D: Automated LLM Judges
  {
    number: 21,
    title: "Calibrate Judges Against Highly Powered Human Baselines",
    description: "Quantify automated judge concordance against diverse human panels across all specific hazard categories, attack wrappers, and target languages.",
    section: "D",
    completed: false,
  },
  {
    number: 22,
    title: "Audit and Algorithmically Mitigate Positional Biases",
    description: "Quantify pairwise presentation order biases and rubric-option position biases. Enforce balanced option shuffling.",
    section: "D",
    completed: false,
  },

  // Section E: Temporal Integrity & Governance Lifecycles
  {
    number: 23,
    title: "Establish Rigorous SUT Delta Recertification Triggers",
    description: "Mandate complete re-evaluation passes upon any base model update, prompt engineering adjustment, input classifier shift, or newly disclosed adversarial attack taxonomy.",
    section: "E",
    completed: false,
  },
  {
    number: 24,
    title: "Enforce Time-Bound Evaluation Expirations",
    description: "Explicitly assign expiration dates to benchmark claims. Transparently declare parameter boundaries tested, threats omitted, and temporal window.",
    section: "E",
    completed: false,
  },
];

const SECTION_INFO = {
  A: {
    title: "Rubric Engineering & Annotation Operations",
    subtitle: "The Instrument & The Operators",
    color: "",
    bgColor: "bg-white",
    textColor: "text-black",
    steps: 12,
  },
  B: {
    title: "Statistical Reliability & Integrity Engineering",
    subtitle: "Measurement Rigor & Validation",
    color: "",
    bgColor: "bg-white",
    textColor: "text-black",
    steps: 6,
  },
  C: {
    title: "Psychometric Validity Auditing",
    subtitle: "Measuring the Latent Target",
    color: "",
    bgColor: "bg-white",
    textColor: "text-black",
    steps: 2,
  },
  D: {
    title: "Automated LLM Judges",
    subtitle: "Strictly Human-Validated Infrastructure",
    color: "",
    bgColor: "bg-white",
    textColor: "text-black",
    steps: 2,
  },
  E: {
    title: "Temporal Integrity & Governance Lifecycles",
    subtitle: "Lifecycle Management & Expiration",
    color: "",
    bgColor: "bg-white",
    textColor: "text-black",
    steps: 2,
  },
};

const StepCard: React.FC<{ step: Step; isExpanded: boolean; onToggle: () => void }> = ({
  step,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className="mb-3 border-2 border-black hover:shadow-[4px_4px_0_#000] transition-all cursor-pointer group rounded-none"
      onClick={onToggle}
    >
      <div className="bg-white p-4 hover:bg-[#FFF5F0] transition-colors">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            {step.completed ? (
              <CheckCircle2 size={20} className="text-black" />
            ) : (
              <Circle size={20} className="text-gray-400 group-hover:text-orange-500" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-black bg-[#FF4D00] px-2 py-1 rounded-none font-mono border border-black">
                {step.number.toString().padStart(2, "0")}
              </span>
              <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {step.title}
              </h4>
            </div>
          </div>

          <ChevronDown
            size={16}
            className={`flex-shrink-0 text-gray-400 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div className="mt-3 ml-8 pt-3 border-t border-black">
            <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function CoreStepsChecklist() {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["A", "B", "C", "D", "E"])
  );

  const toggleStep = (stepNumber: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepNumber)) {
      newExpanded.delete(stepNumber);
    } else {
      newExpanded.add(stepNumber);
    }
    setExpandedSteps(newExpanded);
  };

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const progressPercentage = Math.round((completedSteps.size / CORE_STEPS.length) * 100);
  const sections = (["A", "B", "C", "D", "E"] as const).map((section) => ({
    section,
    steps: CORE_STEPS.filter((s) => s.section === section),
  }));

  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#FF4D00] text-black border border-black px-3 py-1 rounded-none text-sm font-mono font-bold inline-block">
              ARTIFEX LABS CONCEPT
            </span>
          </div>

          <h2 className="text-4xl font-bold text-black mb-3">
            24 Non-Negotiable Core Steps
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            The minimum viable evaluation pipeline required to withstand regulatory audits, actuarial underwriting, and enterprise procurement scrutiny. These 24 steps form the foundation of governance-grade AI evaluation.
          </p>

          {/* Progress Bar */}
          <div className="bg-white p-6 rounded-none border-2 border-black">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700">Overall Progress</span>
              <span className="text-sm font-bold text-orange-600">{progressPercentage}%</span>
            </div>

            <div className="w-full bg-white border border-black rounded-none h-4 overflow-hidden">
              <div
                className="bg-[#FF4D00] h-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className="mt-4 grid grid-cols-5 gap-2 text-xs">
              {sections.map(({ section }) => {
                const sectionSteps = CORE_STEPS.filter((s) => s.section === section);
                const sectionCompleted = sectionSteps.filter((s) => completedSteps.has(s.number))
                  .length;
                return (
                  <div key={section} className="text-center">
                    <div className="font-bold text-gray-900">{sectionCompleted}/{sectionSteps.length}</div>
                    <div className="text-gray-500">Section {section}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map(({ section, steps }) => {
            const info = SECTION_INFO[section];
            const isExpanded = expandedSections.has(section);

            return (
              <div key={section} className={`${info.bgColor} rounded-none overflow-hidden border-2 border-black`}>
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full p-6 text-left hover:bg-white/50 transition-colors flex items-center justify-between border-b border-black"
                >
                  <div>
                    <div className="text-sm font-bold font-mono text-[#FF4D00] mb-2">
                      SECTION {section}
                    </div>
                    <h3 className={`text-xl font-bold ${info.textColor}`}>{info.title}</h3>
                    <p className="text-sm text-slate-700 mt-1">{info.subtitle}</p>
                  </div>

                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 ${info.textColor} transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Section Steps */}
                {isExpanded && (
                  <div className="px-6 pb-6 space-y-2">
                    {steps.map((step) => (
                      <StepCard
                        key={step.number}
                        step={step}
                        isExpanded={expandedSteps.has(step.number)}
                        onToggle={() => toggleStep(step.number)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-[#FFF5F0] border-2 border-black p-6 rounded-none">
          <div className="flex gap-3">
            <AlertCircle size={20} className="text-black flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-black mb-1 uppercase font-mono">Governance-Grade Evaluation</h4>
              <p className="text-sm text-black">
                These 24 steps are non-negotiable for evaluations intended for regulatory compliance, legal defensibility, or high-stakes deployment decisions. Omitting any step introduces measurable risk to evaluation validity and institutional liability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
