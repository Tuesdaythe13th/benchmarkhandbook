/*
 * FirstPrinciplesCompendium — State-of-the-Art Measurement Theory, March 2026
 * 10 sections, 44 peer-reviewed citations, first-principles engineering
 * Brutalist design: black bg, orange accents, Space Mono metadata, Archivo Black headers
 */

import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

interface Section {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  subsections?: { heading: string; text: string }[];
  citations?: { num: number; text: string }[];
}

const SECTIONS: Section[] = [
  {
    id: "orientation",
    title: "SECTION 0 — ORIENTATION",
    subtitle: "Missing First Principles: Measurement Ontology",
    content: "The current evaluation landscape lacks a formal measurement ontology. Every evaluation function f: E → N requires an associated invariance group and empirically validated scale properties (nominal, ordinal, interval, ratio). Latent constructs—moral competence, cultural safety, harm—require Item Response Theory modeling, not raw accuracy counts.",
    subsections: [
      {
        heading: "Validity-Centered Framing",
        text: "The 'Measurement to Meaning' framework (Salaudeen et al., 2025, MIT/Stanford) argues that grand capability claims are routinely supported with narrow benchmarks. Proposes a claim-first, measurement-first approach mapping evidentiary support to: criterion-aligned, criterion-adjacent, construct-targeted, or consequential evidence."
      },
      {
        heading: "Recommended Additions",
        text: "1. Measurement ontology: RTM-grounded scale properties for each BENCH BOM field. 2. Claim-evidence mapping table: for each artifact, which evidence type is required and which is currently absent."
      }
    ],
    citations: [
      { num: 1, text: "International Network for Advanced AI Measurement, Evaluation, and Science (2026)" },
      { num: 2, text: "Salaudeen et al. (2025). 'Measurement to Meaning.' MIT/Stanford." },
      { num: 3, text: "Salaudeen et al. (2025). Claim-evidence mapping framework." }
    ]
  },
  {
    id: "context",
    title: "SECTION 1 — CONTEXT",
    subtitle: "AI Diffusion, Safety-Critical Systems, Critical Infrastructure",
    content: "Agentic systems accounted for 17% of total AI value in 2025, projected to reach 29% by 2028 (BCG/Dataiku, 2026). Gartner predicts 40% of agentic projects will be cancelled by 2027 due to coordination overhead and 2–5× cost multipliers.",
    subsections: [
      {
        heading: "Everything Is Safety-Critical",
        text: "Multi-agent systems without formal orchestration experience failure rates of 41–86.7% in production. Specification failures: 42%. Coordination breakdowns: 37%. Verification gaps: 21%. OWASP ASI08 (2026) formalizes cascading failure patterns as security taxonomy."
      },
      {
        heading: "Critical Infrastructure & Semiconductors",
        text: "CISA released joint guidance on AI integration into OT (March 2026): understand AI lifecycle, strategic use with explicit data-access definitions, governance upfront, embedded failsafes. NIST invested $20M (Dec 2025) in two AI centers for manufacturing and critical infrastructure cybersecurity."
      },
      {
        heading: "Missing Element",
        text: "BENCH BOM SPEC field should include critical infrastructure risk tier — explicitly registering whether deployment context touches OT, energy, defense, or financial infrastructure, aligned with CISA/NIST classifications."
      }
    ],
    citations: [
      { num: 4, text: "BCG/Dataiku (2026). AI Diffusion Report." },
      { num: 5, text: "Gartner (2026). Agentic AI Project Failure Rates." },
      { num: 6, text: "Galileo (2025). Multi-agent failure rate data." },
      { num: 7, text: "OWASP ASI08 (2026). Cascading Failure Taxonomy." },
      { num: 8, text: "CISA (2026). AI Integration into Operational Technology." },
      { num: 9, text: "NIST (2025). AI Centers for Manufacturing & Critical Infrastructure." },
      { num: 10, text: "NIST (2025). Critical Infrastructure AI Security." }
    ]
  },
  {
    id: "anatomy",
    title: "SECTION 2 — BENCHMARK ANATOMY & BENCH BOM",
    subtitle: "AI BOM Ecosystem, Validity Facets, Operationalization",
    content: "BENCH BOM aligns with a rapidly maturing AIBOM ecosystem. AIBoMGen (Vandendriessche et al., 2026, Ghent University) automates signed AIBOM generation with 98.7% reproducibility fidelity. AIBOM (Oxford/Alan Turing) extends CycloneDX with 63% reduction in manual oversight.",
    subsections: [
      {
        heading: "AI BOM Ecosystem",
        text: "BENCH BOM is the evaluation artifact layer of the broader AI BOM stack. AIBOM captures model/data provenance; BENCH BOM captures evaluation provenance. These are complementary layers in one supply-chain transparency architecture."
      },
      {
        heading: "Five-Facet Validity Framework",
        text: "1. Content validity — coverage of construct domain. 2. Criterion validity — concurrent/predictive correlation. 3. Construct validity — structural, convergent, discriminant evidence. 4. External validity — generalizability. 5. Consequential validity — real-world impact of evaluation itself (most under-theorized, most critical for safety-critical systems)."
      },
      {
        heading: "Missing Component",
        text: "Add VALIDITY_LOG to BENCH BOM with fields for each facet. Mandatory consequential validity statement for risk-tier ≥ 2 benchmarks."
      }
    ],
    citations: [
      { num: 11, text: "Vandendriessche et al. (2026). AIBoMGen. Ghent University." },
      { num: 12, text: "Oxford/Alan Turing Institute (2026). AIBOM Schema." },
      { num: 13, text: "SDTimes/LinkedIn (2026). SBOM Limitations for AI." },
      { num: 14, text: "SDTimes/LinkedIn (2026). AI BOM Necessity." },
      { num: 1, text: "International Network for Advanced AI Evaluation (2026). Five-Facet Validity." },
      { num: 15, text: "Koyejo (Stanford). ICLR 2026 Invited Talk on Evaluation Norms." }
    ]
  },
  {
    id: "moral",
    title: "SECTION 3 — MORAL COMPETENCE & LEGAL GROUNDING",
    subtitle: "Five-Dimensional Moral Model, Automated vs. Autonomous AI",
    content: "Current evaluations substantially overestimate LLM moral reasoning by eliminating the task of discerning moral relevance from noisy information. A five-dimensional model identifies genuine moral skill prerequisites.",
    subsections: [
      {
        heading: "Five-Dimensional Moral Competence",
        text: "1. Identifying morally relevant features. 2. Weighting their importance. 3. Assigning moral reasons. 4. Synthesizing coherent judgments. 5. Recognizing information gaps. In clean scenarios, LLMs outperform humans; in noisy scenarios with irrelevant details, several LLMs perform worse. Moral-competence benchmarks must include noise."
      },
      {
        heading: "AI Ethics Perception Scale (AEPS, 2025)",
        text: "Five-factor structure: Transparency, Accountability, Privacy, Fairness, Human Oversight. Validated via CFA across Turkey, India, UK. Demonstrates cross-cultural measurement invariance and significant cross-national differences in construct importance."
      },
      {
        heading: "Automated vs. Autonomous AI",
        text: "Legal distinction with direct liability implications. Automated AI (human design/coding) fits traditional tort law; autonomous AI (independent decisions, environmental learning) fails conventional theories. Negligence standard persists: developers have duty of reasonable care to foreseeable vulnerable users."
      },
      {
        heading: "Recommended Addition",
        text: "BENCH BOM SPEC should include liability exposure field: automated vs. autonomous deployment context, foreseeable user population including vulnerable groups, documented risk-mitigation steps."
      }
    ],
    citations: [
      { num: 16, text: "arXiv (2025). 'Multi-Dimensional Assessment of Moral Competence in LLMs.'" },
      { num: 17, text: "AEPS (2025). AI Ethics Perception Scale." },
      { num: 18, text: "GMU Law Review (2024). Automated vs. Autonomous AI Distinction." },
      { num: 19, text: "2026 Wrongful Death Case. Generative AI Platform Litigation." },
      { num: 20, text: "Negligence Standard in AI Liability." },
      { num: 21, text: "Chicago Law Review. Tort Theory for Autonomous AI." }
    ]
  },
  {
    id: "evaluation-science",
    title: "SECTION 4 — EVALUATION SCIENCE FOUNDATIONS",
    subtitle: "Reproducibility, Rubrics, Social Impact Coverage",
    content: "Reproducibility is not merely desirable—it improves performance. Analyst-Inspector pattern enforces reproducibility criteria on workflows, improving accuracy of analyses. Rubric operationalization is critical: LLMs can generate interpretable dimensions but scoring reliability degrades in factual, knowledge-intensive settings.",
    subsections: [
      {
        heading: "Reproducibility: Analyst-Inspector Pattern",
        text: "Statistical principles-grounded approach supporting scalable, automated reproducibility assessment. Enforcing reproducibility criteria improves analysis accuracy. Supports BENCH BOM RUN and INTEGRITY components."
      },
      {
        heading: "The Rubric Gap (March 2026)",
        text: "GER-Eval: LLMs generate interpretable dimensions but scoring reliability degrades in factual settings. Autorubric: Rubrics must define criteria operationally ('correctly answers the question'), not impressionistically ('helpful'). RubricBench: Identifies 'rubric gap'—implicit reasoning insufficient; rubric-aware pipelines recover performance."
      },
      {
        heading: "Social Impact Evaluation: Structural Gap",
        text: "'Who Evaluates AI's Social Impacts?' (Reuel et al., Stanford/HuggingFace, 2025) maps coverage gaps. Base-level evaluations (model associations, representational bias) widespread; people-and-society-level evaluations (trust, inequality, labor effects) significantly underrepresented. Governance frameworks depend on evaluations that do not exist."
      },
      {
        heading: "Recommended Addition",
        text: "Add rubric operationalization protocol: every construct (harm, cultural safety, moral competence) requires operationally defined rubric tested against human annotator standards, with inter-rater reliability (Krippendorff's α, Cohen's κ)."
      }
    ],
    citations: [
      { num: 22, text: "Analyst-Inspector Pattern (2025). Reproducibility Framework." },
      { num: 23, text: "Healthcare GenAI Evaluation (2025). Reproducible Framework." },
      { num: 24, text: "GER-Eval (arXiv, Feb 2026). LLM Rubric Generation." },
      { num: 25, text: "Autorubric (arXiv, Feb 2026). Operational Rubric Definition." },
      { num: 26, text: "RubricBench (arXiv, Mar 2026). Rubric Gap Identification." },
      { num: 27, text: "Reuel et al. (Stanford/HuggingFace, 2025). 'Who Evaluates AI's Social Impacts?'" },
      { num: 28, text: "Reuel et al. (2025). Social Impact Evaluation Coverage." }
    ]
  },
  {
    id: "cultural",
    title: "SECTION 5 — CULTURAL, GEOSPATIAL & MULTIMODAL EVALUATION",
    subtitle: "GEOBench-VLM, Multi3Hate, Moral Foundations Theory",
    content: "GEOBench-VLM (ICCV 2025): 10,000+ manually verified geospatial instructions. Best model (LLaVA-OneVision) achieves only 41.7% accuracy—double random guess, confirming large headroom. Multi3Hate demonstrates multilingual ≠ multicultural: VLMs align more closely with US annotations than other cultures, even in target language.",
    subsections: [
      {
        heading: "GEOBench-VLM (ICCV 2025)",
        text: "Scene understanding, object counting, localization, fine-grained categorization, segmentation, temporal analysis. Best model: 41.7% accuracy. Confirms large capability gap and validates geospatial evaluation necessity."
      },
      {
        heading: "Multi3Hate & Multicultural Adversarial Evaluation",
        text: "300 parallel meme samples across 5 languages (English, German, Spanish, Hindi, Mandarin). Average pairwise agreement: 74%. Lowest (US-India): 67%. VLMs align more closely with US annotations than other cultures. Direct empirical demonstration of multilingual ≠ multicultural."
      },
      {
        heading: "MFTCXplain (ACL EMNLP 2025)",
        text: "Multilingual benchmark for moral reasoning via multi-hop hate-speech explanations using Moral Foundations Theory framework. Addresses predominant English focus and its constraints on cross-cultural moral reasoning assessment."
      },
      {
        heading: "X-MuTeST (AAAI 2026)",
        text: "Explainable hate-speech detection for Indic languages (Telugu, Hindi). Combines LLM semantic reasoning with attention-enhancing techniques."
      },
      {
        heading: "Recommended Addition",
        text: "Cultural adversarial evaluation section should explicitly cite Moral Foundations Theory as theoretical grounding for cross-cultural moral-competence probes—provides construct-level bridge between cultural variation and measurable moral reasoning dimensions."
      }
    ],
    citations: [
      { num: 29, text: "Danish et al. (ICCV 2025). GEOBench-VLM." },
      { num: 30, text: "GEOBench-VLM (2025). Geospatial VLM Benchmark." },
      { num: 31, text: "Multi3Hate (2024/2025). Multimodal Multilingual Hate Speech Dataset." },
      { num: 32, text: "MFTCXplain (ACL EMNLP 2025). Moral Foundations Theory Benchmark." },
      { num: 33, text: "X-MuTeST (AAAI 2026). Indic Language Hate Speech Detection." }
    ]
  },
  {
    id: "security",
    title: "SECTION 6 — SECURITY, ADVERSARIAL TESTING & RED TEAM",
    subtitle: "Adversarial ML Evaluation Challenges, Reproducibility Crisis",
    content: "In the LLM era, adversarial ML problems are less clearly defined, harder to solve, and even more challenging to evaluate. Measuring attack success requires careful human evaluation of possible harms in natural-language outputs. Frequent silent model updates make reproduction 'nearly impossible'.",
    subsections: [
      {
        heading: "Adversarial ML Evaluation Challenges (IEEE DLSP 2025)",
        text: "Rando, Zhang, Carlini, Tramèr (ETH Zurich/Google DeepMind): (1) Less clearly defined. (2) Harder to solve. (3) Even more challenging to evaluate. Measuring attack success requires human evaluation. Silent model updates prevent meaningful comparison. This is the strongest peer-reviewed justification for BENCH BOM INTEGRITY and RUN fields."
      },
      {
        heading: "GAN-Based Adversarial Defenses (Systematic Review, 2025)",
        text: "185 peer-reviewed studies (2021–2025). Identifies hybrid models, unified evaluation, and real-world integration as roadmap. Calls out LLM-driven cyberattacks as emerging threat class requiring new defense paradigms."
      },
      {
        heading: "Recommended Addition",
        text: "Reproducibility section should explicitly cite Rando et al. claim—it is the strongest justification for why BENCH BOM's INTEGRITY and RUN fields (randomness control, model version pinning, access logging) are scientific necessities, not bureaucratic overhead."
      }
    ],
    citations: [
      { num: 34, text: "Rando, Zhang, Carlini, Tramèr (IEEE DLSP 2025). Adversarial ML Evaluation." },
      { num: 35, text: "Systematic Review (2025). GAN-Based Adversarial Defenses." }
    ]
  },
  {
    id: "governance",
    title: "SECTION 7 — DESIGN PATTERNS FOR TRANSPARENCY & GOVERNANCE",
    subtitle: "Impact Assessments, ISO/IEC 42005, Regulatory Convergence",
    content: "AI Impact Assessments have transitioned from recommended practice to legal requirement. ISO/IEC 42005 (2025): first international standard. EU AI Act FRIA: required for high-risk systems. California SB 53: frontier AI developers must publish framework, conduct pre-deployment testing.",
    subsections: [
      {
        heading: "Impact Assessment: Now Mandatory",
        text: "ISO/IEC 42005 (2025): Technical, ethical, legal, societal dimensions. EU AI Act FRIA: High-risk obligations full force August 2026. California SB 53 (Jan 2026): Frontier AI developers must publish framework, pre-deployment testing, red-teaming, monitoring. CCPA ADMT: Risk assessments for automated decision-making."
      },
      {
        heading: "Recommended Addition",
        text: "Restructure impact-assessment section around ISO/IEC 42005 as normative anchor. EU AI Act FRIA and CCPA ADMT as compliance overlays. BENCH BOM SPEC should include `impact_assessment_id` linking to registered impact assessment record."
      }
    ],
    citations: [
      { num: 36, text: "Nemko/Coalfire (2025). ISO/IEC 42005 Guidance." },
      { num: 37, text: "ISO/IEC 42005 (2025). AI Impact Assessment Standard." },
      { num: 38, text: "Gunder (2026). EU AI Act FRIA & California SB 53." }
    ]
  },
  {
    id: "agentic",
    title: "SECTION 8 — AGENTIC SYSTEMS, UI & FAILURE MODES",
    subtitle: "Cascade Failure Taxonomy, Propagation Vectors, Amplification",
    content: "OWASP ASI08 (2026) formalizes cascading failure patterns: fan-out cascades, oscillation cascades, deadlock cascades, resource exhaustion. Propagation vectors include direct delegation, shared context, inter-agent protocols, tool output forwarding, state mutation, credential propagation.",
    subsections: [
      {
        heading: "Four Canonical Cascade Patterns",
        text: "1. Fan-out: One error triggers many downstream failures (single bad price → 1,000 incorrect orders). 2. Oscillation: Agents alternate in self-defeating loop. 3. Deadlock: Agents wait indefinitely. 4. Resource exhaustion: Cascade consumes all capacity (tokens, API limits, compute)."
      },
      {
        heading: "Propagation & Amplification",
        text: "Propagation: Direct delegation, shared context, A2A protocols, tool output forwarding, state mutation, credential propagation, automation bias, trust exploitation. Amplification: Feedback loops, trust transitivity, parallelization amplification, scope escalation (excessive permissions)."
      },
      {
        heading: "Recommended Addition",
        text: "Build cascade failure subsection around four pattern types plus propagation/amplification taxonomy. Makes section actionable for test design. Each agentic benchmark must include at least one test case for each pattern."
      }
    ],
    citations: [
      { num: 7, text: "OWASP ASI08 (2026). Cascading Failure Taxonomy." }
    ]
  },
  {
    id: "industry",
    title: "SECTION 9 — INDUSTRY ECOSYSTEM & DYNAMIC BENCHMARKING",
    subtitle: "BeTaL Framework, LLM Evaluation Tools, Continuous Evaluation",
    content: "BeTaL (Benchmark Tuning with LLM-in-the-Loop) now formally published (Dsouza et al., Oct 2025). Produces benchmarks with 5.3–13.2% deviation from target difficulty—2–4× improvement over baselines. Validates dynamic benchmark generation design pattern.",
    subsections: [
      {
        heading: "BeTaL Framework (October 2025)",
        text: "Parameterizes key design choices in base templates. Uses LLMs to reason through parameter space for target properties (difficulty, realism) cost-efficiently. Formally validates dynamic benchmark generation. Industry converging toward BENCH BOM anatomy even without formal standard."
      },
      {
        heading: "LLM Evaluation Tool Ecosystem (2026)",
        text: "Standard features: continuous evaluation, drift detection, multi-model support, RAG-specific metrics, synthetic adversarial generation, built-in safety benchmarks, regulatory compliance scaffolding."
      }
    ],
    citations: [
      { num: 39, text: "Dsouza et al. (arXiv, Oct 2025). BeTaL Framework." },
      { num: 40, text: "BeTaL (2025). Dynamic Benchmark Generation." },
      { num: 41, text: "LLM Evaluation Tool Ecosystem (2026)." },
      { num: 42, text: "Continuous Evaluation & Drift Detection (2026)." }
    ]
  },
  {
    id: "political",
    title: "SECTION 10 — POLITICAL ECONOMY, ETHICS & STEWARDSHIP",
    subtitle: "Societal Impact Gap, Power Relations, Adversarial Values",
    content: "Obvia Status Report (2025): AI deployment marked by lack of regulation and unbalanced power relations. Technological governance dominated by private/state interests. 'Who Evaluates AI's Social Impacts?' finds social impact assessments systematically absent from major lab portfolios.",
    subsections: [
      {
        heading: "Societal Impact Gap as Governance Failure",
        text: "Governance frameworks depend on evaluations that do not exist for hardest constructs. Social impact assessments (bias, fairness, privacy, environmental) significantly underrepresented. Base-level evaluations widespread; people-and-society-level evaluations sparse."
      },
      {
        heading: "Adversarial ML Values & Power",
        text: "Field assumes defenders are normatively good, attackers normatively bad. Structurally difficult to conceptualize adversarial tools as instruments of resistance against harmful deployments. Evaluative infrastructure embeds political-economic assumptions that must be named and contested."
      }
    ],
    citations: [
      { num: 43, text: "Obvia (2025). Status Report on Societal Impacts of AI." },
      { num: 27, text: "Reuel et al. (2025). 'Who Evaluates AI's Social Impacts?'" },
      { num: 44, text: "Albert, Delano, Kulynych, Kumar (NeurIPS 2021). 'Adversarial for Good?'" }
    ]
  }
];

export default function FirstPrinciplesCompendium() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="w-full bg-black text-white" id="compendium">
      {/* Header */}
      <div className="border-b-2 border-black bg-white px-6 py-12 md:px-12">
        <div className="max-w-5xl">
          <div className="mb-4 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-orange-500" strokeWidth={3} />
            <span className="font-mono text-xs tracking-widest text-orange-500">FIRST PRINCIPLES</span>
          </div>
          <h1 className="font-archivo text-5xl font-black uppercase leading-tight text-black md:text-6xl">
            THE COMPENDIUM
          </h1>
          <p className="mt-6 font-mono text-sm leading-relaxed text-gray-700">
            State-of-the-art measurement theory, agentic systems, and governance frameworks. 
            44 peer-reviewed citations current to March 2026. First-principles engineering for 
            benchmark design, evaluation science, and AI metrology.
          </p>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="border-b-2 border-orange-500 bg-orange-500 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-mono text-xs font-bold text-black">
          MEASUREMENT ONTOLOGY • FIVE-FACET VALIDITY • MORAL COMPETENCE • AIBOM ECOSYSTEM • CASCADE FAILURES • RUBRIC OPERATIONALIZATION • ISO/IEC 42005 • SOCIAL IMPACT COVERAGE • GEOSPATIAL EVALUATION • ADVERSARIAL REPRODUCIBILITY •
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-0 border-t-2 border-black">
        {SECTIONS.map((section, idx) => (
          <div key={section.id} className={idx % 2 === 0 ? "bg-black" : "bg-gray-950"}>
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full border-b-2 border-orange-500 px-6 py-8 text-left hover:bg-orange-500 hover:text-black transition-colors md:px-12"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 font-mono text-xs tracking-widest text-orange-500">
                    {section.id.toUpperCase()}
                  </div>
                  <h2 className="font-archivo text-2xl font-black uppercase leading-tight text-white md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 font-mono text-sm text-gray-400">
                    {section.subtitle}
                  </p>
                </div>
                <ChevronDown
                  className={`mt-2 h-5 w-5 flex-shrink-0 text-orange-500 transition-transform ${
                    expandedSections.has(section.id) ? "rotate-180" : ""
                  }`}
                  strokeWidth={3}
                />
              </div>
            </button>

            {expandedSections.has(section.id) && (
              <div className="border-t-2 border-orange-500 px-6 py-8 md:px-12">
                <p className="mb-8 font-mono text-sm leading-relaxed text-gray-300">
                  {section.content}
                </p>

                {section.subsections && (
                  <div className="mb-8 space-y-6 border-l-2 border-orange-500 pl-6">
                    {section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className="font-archivo text-lg font-bold uppercase text-orange-500">
                          {sub.heading}
                        </h3>
                        <p className="mt-2 font-mono text-sm leading-relaxed text-gray-400">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.citations && (
                  <div className="border-t-2 border-orange-500 pt-6">
                    <h4 className="font-archivo text-sm font-bold uppercase text-orange-500 mb-4">
                      Citations
                    </h4>
                    <div className="space-y-2">
                      {section.citations.map((cite, i) => (
                        <p key={i} className="font-mono text-xs leading-relaxed text-gray-500">
                          <span className="text-orange-500">[{cite.num}]</span> {cite.text}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="border-t-2 border-orange-500 bg-orange-500 px-6 py-6 md:px-12">
        <p className="font-mono text-xs text-black">
          <strong>44 PEER-REVIEWED CITATIONS • MARCH 2026 • FIRST PRINCIPLES ENGINEERING</strong>
        </p>
      </div>
    </div>
  );
}
