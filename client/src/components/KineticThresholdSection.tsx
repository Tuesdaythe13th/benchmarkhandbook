/*
 * Kinetic Threshold Framework Section
 * Design: Industrial Manifesto Brutalism
 * Integrates: 6 operational desiderata, Conjunction Requirement, 3 structural gaps
 * Sources: evaluationmetrology.manus.space, Kinetic Threshold Framework v7.0
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function KineticThresholdSection() {
  const [expandedDesideratum, setExpandedDesideratum] = useState<string | null>(null);
  const [expandedGap, setExpandedGap] = useState<string | null>(null);

  const desiderata = [
    {
      id: 'D1',
      name: 'RELIABILITY',
      definition: 'Consistency of scores across raters, prompts, and administrations.',
      metric: 'Inter-annotator agreement κ and Prompt-Sensitivity Index (PSI)',
      thresholds: [
        { rung: 'Exploratory', value: 'κ ≥ 0.40' },
        { rung: 'Development', value: 'κ ≥ 0.60' },
        { rung: 'Pre-deployment', value: 'κ ≥ 0.75' },
        { rung: 'High-stakes', value: 'κ ≥ 0.80' },
      ],
      citation: 'Kinetic Threshold Part II · Measurement Science Foundations',
    },
    {
      id: 'D2',
      name: 'VALIDITY',
      definition: 'The degree to which scores support the inferences drawn from them.',
      metric: 'Construct validity must be present, explicit, and falsifiable',
      thresholds: [
        { rung: 'Exploratory', value: 'Construct definition' },
        { rung: 'Development', value: 'Convergent evidence' },
        { rung: 'Pre-deployment', value: 'Discriminant evidence' },
        { rung: 'High-stakes', value: 'Criterion validity' },
      ],
      citation: 'Kinetic Threshold Part IV · Validity Argument Framework',
    },
    {
      id: 'D3',
      name: 'UNCERTAINTY',
      definition: 'Quantified error bounds on all reported scores.',
      metric: 'Decision-margin constraint ties required precision to decision precision',
      thresholds: [
        { rung: 'Exploratory', value: '90% interval' },
        { rung: 'Development', value: '95% interval, k=2' },
        { rung: 'Pre-deployment', value: '95% interval, decision-margin' },
        { rung: 'High-stakes', value: '99% interval ≤50% margin' },
      ],
      citation: 'Kinetic Threshold Part VII · Measurement Error Budget',
    },
    {
      id: 'D4',
      name: 'FAIRNESS',
      definition: 'Evaluation must not systematically disadvantage populations.',
      metric: 'Disparate-Impact Ratio (DIR) and Demographic Parity Gap (Δ)',
      thresholds: [
        { rung: 'Exploratory', value: 'Documented limitations' },
        { rung: 'Development', value: 'DIR ≥ 0.75, Δ < 0.10' },
        { rung: 'Pre-deployment', value: 'DIR ≥ 0.80, Δ < 0.05' },
        { rung: 'High-stakes', value: 'DIR ≥ 0.90, Δ < 0.03' },
      ],
      citation: 'Kinetic Threshold Part XI · Values, Perspectivism & Justice',
    },
    {
      id: 'D5',
      name: 'REPRODUCIBILITY',
      definition: 'Results must be obtainable by independent parties.',
      metric: 'SHA-256 provenance hashes for all artefacts',
      thresholds: [
        { rung: 'Exploratory', value: 'Code available on request' },
        { rung: 'Development', value: 'SHA-256 hashes, public repo' },
        { rung: 'Pre-deployment', value: 'Full re-run within uncertainty interval' },
        { rung: 'High-stakes', value: 'Independent third-party replication' },
      ],
      citation: 'Kinetic Threshold Part XIII · Benchmark Bill of Materials',
    },
    {
      id: 'D6',
      name: 'PRACTICALITY',
      definition: 'Evaluation must be operationally feasible within deployment context.',
      metric: 'Cost-benefit analysis required at High-stakes rung',
      thresholds: [
        { rung: 'Exploratory', value: 'No constraint' },
        { rung: 'Development', value: '≤500ms, within 20× median cost' },
        { rung: 'Pre-deployment', value: '≤200ms, within 10× median cost' },
        { rung: 'High-stakes', value: 'Formal cost-benefit analysis' },
      ],
      citation: 'Kinetic Threshold Part IV · Practicality Desideratum',
    },
  ];

  const gaps = [
    {
      id: 'G1',
      name: 'EXECUTION GAP',
      layer: 'INFRASTRUCTURE LAYER',
      definition: 'The distance between what a system does on a benchmark and what it does in deployment.',
      details: 'Long-horizon tasks compound errors: a 10-step workflow at 90% per-step yields only ~35% end-to-end success. Error Recovery Rate (ERR) remains under-measured.',
      factors: [
        'Temporal compounding and stochastic decay',
        'Ecological validity / distributional mismatch',
        'Aggregate masking of failure boundaries',
        'Missing Error Recovery Rate (ERR) measurement',
      ],
      citation: 'Kinetic Threshold Part III · Three Structural Gaps',
    },
    {
      id: 'G2',
      name: 'VALIDITY GAP',
      layer: 'MODEL LAYER',
      definition: 'The distance between what an evaluation claims to measure and what it actually measures.',
      details: 'LLM judges often reward surface features — formatting, length, confident tone — rather than logical coherence or factual accuracy. High model-level agreement masks item-level instability.',
      factors: [
        'Rubric validity failure: surface-feature trap',
        'Construct-irrelevant variance in LLM judging',
        'Evaluation Illusion: aggregate agreement masks item noise',
        'Overclaiming: narrow benchmark as global safety score',
      ],
      citation: 'Kinetic Threshold Part III.2 · The Validity Gap',
    },
    {
      id: 'G3',
      name: 'REPRESENTATION GAP',
      layer: 'DATA LAYER',
      definition: 'The distance between populations represented in evaluation data and those affected by deployment.',
      details: 'Majority-culture normative monoculture defines what counts as helpful or safe. Annotator demographics systematically affect labels. Communities without evaluation infrastructure are structurally excluded.',
      factors: [
        'Normative monoculture in benchmark construction',
        'Annotator demographics shaping ground truth',
        'Resource inequality as evaluation inequality',
        'Minority contexts rendered invisible to improvement',
      ],
      citation: 'Kinetic Threshold Part III.3 · Representation Gap & Global South',
    },
  ];

  return (
    <section id="kinetic-threshold" className="bg-white border-t-2 border-black">
      {/* Header */}
      <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-orange-500 mb-4">
            SECTION 09 — KINETIC THRESHOLD
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.04em', lineHeight: '0.9' }}>
            THE METROLOGICAL<br />FRAMEWORK
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed max-w-2xl text-gray-300">
            Treating AI evaluation as measurement science. Six operational desiderata bound by a Conjunction Requirement that forbids trading strength on one for weakness on another. A leaderboard ranking produced by an instrument with unquantified uncertainty is not a ranking — it is a suggestion.
          </p>
        </div>
      </div>

      {/* Conjunction Requirement */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-orange-500 text-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="border-2 border-black p-6 sm:p-8">
            <div className="text-xs font-mono tracking-widest mb-3">CORE PRINCIPLE</div>
            <h3 className="text-2xl sm:text-3xl font-black mb-4" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              THE CONJUNCTION REQUIREMENT
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              An evaluation cannot "pass" the framework by excelling on three desiderata and ignoring the other three. All six desiderata must be satisfied at the appropriate calibration rung. Failures at one layer cannot be compensated by success at another.
            </p>
          </div>
        </div>
      </div>

      {/* Six Desiderata */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-8" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            SIX OPERATIONAL DESIDERATA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {desiderata.map((d) => (
              <div key={d.id} className="border-2 border-black">
                <button
                  onClick={() => setExpandedDesideratum(expandedDesideratum === d.id ? null : d.id)}
                  className="w-full bg-black text-white p-4 sm:p-6 flex items-start justify-between gap-4 hover:bg-orange-500 hover:text-black transition-colors"
                >
                  <div className="text-left">
                    <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">{d.id}</div>
                    <h4 className="text-lg sm:text-xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                      {d.name}
                    </h4>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 mt-1 transition-transform ${expandedDesideratum === d.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedDesideratum === d.id && (
                  <div className="p-4 sm:p-6 bg-white border-t-2 border-black">
                    <p className="text-sm sm:text-base mb-4 font-mono">{d.definition}</p>
                    <div className="mb-4">
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">MEASUREMENT</div>
                      <p className="text-sm">{d.metric}</p>
                    </div>
                    <div className="mb-4">
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">CALIBRATION THRESHOLDS</div>
                      <div className="space-y-2">
                        {d.thresholds.map((t, i) => (
                          <div key={i} className="flex justify-between text-sm border-l-2 border-orange-500 pl-3">
                            <span className="font-mono">{t.rung}</span>
                            <span className="font-bold">{t.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-gray-600 border-t-2 border-gray-300 pt-3 mt-3">
                      {d.citation}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Three Structural Gaps */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-8" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            THREE STRUCTURAL GAPS
          </h3>
          <div className="space-y-4">
            {gaps.map((g) => (
              <div key={g.id} className="border-2 border-black">
                <button
                  onClick={() => setExpandedGap(expandedGap === g.id ? null : g.id)}
                  className="w-full bg-black text-white p-4 sm:p-6 flex items-start justify-between gap-4 hover:bg-orange-500 hover:text-black transition-colors"
                >
                  <div className="text-left">
                    <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">{g.layer}</div>
                    <h4 className="text-lg sm:text-xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                      {g.name}
                    </h4>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 mt-1 transition-transform ${expandedGap === g.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedGap === g.id && (
                  <div className="p-4 sm:p-6 bg-white border-t-2 border-black">
                    <p className="text-sm sm:text-base mb-4 font-mono font-bold">{g.definition}</p>
                    <p className="text-sm mb-4">{g.details}</p>
                    <div className="mb-4">
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">FAILURE FACTORS</div>
                      <ul className="space-y-2">
                        {g.factors.map((f, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-orange-500 mt-1">▸</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-xs font-mono text-gray-600 border-t-2 border-gray-300 pt-3 mt-3">
                      {g.citation}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Failure Chain */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black text-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto border-2 border-orange-500 p-6 sm:p-8">
          <div className="text-xs font-mono tracking-widest text-orange-500 mb-3">FAILURE CHAIN</div>
          <p className="text-sm sm:text-base leading-relaxed">
            A rubric rewards surface confidence (Validity Gap) → calibrated on narrow majority annotators (Representation Gap) → deployed into a long-horizon agentic workflow (Execution Gap). Each gap compounds the others. The Conjunction Requirement interrupts this pattern: strong average performance cannot compensate for invalid constructs, unrepresented populations, or deployment-irrelevant testing conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
