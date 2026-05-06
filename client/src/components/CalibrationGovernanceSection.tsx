/*
 * Calibration & Governance Section
 * Design: Industrial Manifesto Brutalism
 * Integrates: 4 calibration rungs, 5-level governance protocol, Triage Function
 * Sources: evaluationmetrology.manus.space, Kinetic Threshold Framework v7.0
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CalibrationGovernanceSection() {
  const [expandedRung, setExpandedRung] = useState<string | null>(null);
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const rungs = [
    {
      id: 'R1',
      name: 'EXPLORATORY',
      stake: 'Internal research, informal comparison',
      desiderata: 'Reproducibility (1/6)',
      lifecycle: 'Design / early build',
      decisionMaker: 'Researcher, developer',
      description: 'Early-stage evaluation for research and development. No deployment constraints.',
      examples: ['Ablation studies', 'Model comparison papers', 'Proof-of-concept evals'],
    },
    {
      id: 'R2',
      name: 'DEVELOPMENT',
      stake: 'Model gating, A/B testing, internal benchmarking',
      desiderata: 'Reproducibility + Reliability + Validity (3/6)',
      lifecycle: 'Build',
      decisionMaker: 'Developer, internal governance',
      description: 'Development-stage evaluation for internal model gating and A/B testing. Requires basic reliability and validity.',
      examples: ['Internal leaderboards', 'Model selection gates', 'A/B test baselines'],
    },
    {
      id: 'R3',
      name: 'PRE-DEPLOYMENT',
      stake: 'Regulated pilots, procurement decisions, external audits',
      desiderata: 'All above + Uncertainty + Fairness (5/6)',
      lifecycle: 'Pre-deployment',
      decisionMaker: 'Regulator, procurer',
      description: 'Pre-deployment evaluation for regulated pilots and procurement. Requires quantified uncertainty and fairness analysis.',
      examples: ['Regulatory submissions', 'Procurement audits', 'Public leaderboards'],
    },
    {
      id: 'R4',
      name: 'HIGH-STAKES',
      stake: 'Clinical, legal, financial, safety-critical deployment',
      desiderata: 'All six + Practicality (6/6)',
      lifecycle: 'Deployment / monitoring',
      decisionMaker: 'Regulator, court, high-risk deployer',
      description: 'High-stakes evaluation for clinical, legal, and safety-critical deployment. All six desiderata required.',
      examples: ['Medical AI deployment', 'Legal evidence', 'Financial risk models'],
    },
  ];

  const governanceLevels = [
    {
      id: 'L1',
      name: 'FLAG',
      trigger: 'Any desideratum within 10% of its threshold (amber zone)',
      action: 'Formal notice to evaluation owner. No deployment block — near-violation must be disclosed in BBoM.',
      timeline: 'Immediate',
      severity: 'WARNING',
    },
    {
      id: 'L2',
      name: 'REMEDIATE',
      trigger: 'Any desideratum below threshold by ≤ 20%',
      action: 'Deployment conditionally paused. Remediation window: 30 days (Development), 60 days (Pre-deployment), 90 days (High-stakes).',
      timeline: '30–90 days',
      severity: 'CONDITIONAL PAUSE',
    },
    {
      id: 'L3',
      name: 'ESCALATE',
      trigger: 'Any desideratum below threshold by > 20%, or remediation window expired',
      action: 'Evaluation formally declared inadmissible at current rung. Independent review panel must approve any revised evaluation.',
      timeline: 'Until resolved',
      severity: 'ESCALATION',
    },
    {
      id: 'L4',
      name: 'DOWNGRADE',
      trigger: 'Multiple desiderata below threshold, or a single desideratum at < 50% of threshold',
      action: 'Evaluation downgraded to next lower calibration rung. Scores may only be cited at the lower rung level.',
      timeline: 'Until re-qualified',
      severity: 'DOWNGRADE',
    },
    {
      id: 'L5',
      name: 'RETIRE',
      trigger: 'Construct validity compromised (e.g., confirmed contamination) or irreparable fairness violation',
      action: 'Permanent retirement. All scores produced after the estimated contamination date are annotated with a deprecation notice.',
      timeline: 'Permanent',
      severity: 'PERMANENT',
    },
  ];

  return (
    <section id="calibration-governance" className="bg-white border-t-2 border-black">
      {/* Header */}
      <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-orange-500 mb-4">
            SECTION 10 — CALIBRATION & GOVERNANCE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.04em', lineHeight: '0.9' }}>
            DEPLOYMENT RUNGS<br />& GOVERNANCE PROTOCOL
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed max-w-2xl text-gray-300">
            Four calibration rungs map evaluation rigor to deployment context. An appraisal without a decision procedure is information without consequence. Five levels convert threshold violations into procedural consequences.
          </p>
        </div>
      </div>

      {/* Calibration Hierarchy */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-8" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            FOUR CALIBRATION RUNGS
          </h3>
          <div className="space-y-4">
            {rungs.map((rung, idx) => (
              <div key={rung.id} className="border-2 border-black">
                <button
                  onClick={() => setExpandedRung(expandedRung === rung.id ? null : rung.id)}
                  className="w-full bg-black text-white p-4 sm:p-6 flex items-start justify-between gap-4 hover:bg-orange-500 hover:text-black transition-colors"
                >
                  <div className="text-left">
                    <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">RUNG {idx + 1}</div>
                    <h4 className="text-lg sm:text-xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                      {rung.name}
                    </h4>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 mt-1 transition-transform ${expandedRung === rung.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedRung === rung.id && (
                  <div className="p-4 sm:p-6 bg-white border-t-2 border-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">STAKE / PRIMARY USE</div>
                        <p className="text-sm">{rung.stake}</p>
                      </div>
                      <div>
                        <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">REQUIRED DESIDERATA</div>
                        <p className="text-sm font-bold">{rung.desiderata}</p>
                      </div>
                      <div>
                        <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">LIFECYCLE STAGE</div>
                        <p className="text-sm">{rung.lifecycle}</p>
                      </div>
                      <div>
                        <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">DECISION-MAKER</div>
                        <p className="text-sm">{rung.decisionMaker}</p>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-4">
                      <p className="text-sm mb-3">{rung.description}</p>
                      <div className="text-xs font-mono text-gray-600">
                        <strong>Examples:</strong> {rung.examples.join(' • ')}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Governance-Action Protocol */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-8" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            FIVE-LEVEL GOVERNANCE-ACTION PROTOCOL
          </h3>
          <div className="space-y-4">
            {governanceLevels.map((level) => (
              <div key={level.id} className="border-2 border-black">
                <button
                  onClick={() => setExpandedLevel(expandedLevel === level.id ? null : level.id)}
                  className="w-full bg-black text-white p-4 sm:p-6 flex items-start justify-between gap-4 hover:bg-orange-500 hover:text-black transition-colors"
                >
                  <div className="text-left">
                    <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">LEVEL {level.id.slice(1)}</div>
                    <h4 className="text-lg sm:text-xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                      {level.name}
                    </h4>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 mt-1 transition-transform ${expandedLevel === level.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedLevel === level.id && (
                  <div className="p-4 sm:p-6 bg-white border-t-2 border-black">
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">TRIGGER</div>
                        <p className="text-sm">{level.trigger}</p>
                      </div>
                      <div>
                        <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">REQUIRED ACTION</div>
                        <p className="text-sm">{level.action}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">TIMELINE</div>
                          <p className="text-sm font-mono">{level.timeline}</p>
                        </div>
                        <div>
                          <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">SEVERITY</div>
                          <p className="text-sm font-bold border-l-2 border-orange-500 pl-2">{level.severity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Triage Function */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-orange-500 text-black border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-6" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            TRIAGE FUNCTION — PRE-DECISIONAL FILTERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-black p-6">
              <div className="text-xs font-mono tracking-widest mb-3">UNCERTAINTY MARGIN VIOLATION</div>
              <p className="text-sm mb-4">System score falls within the 95% (Pre-deployment) or 99% (High-stakes) coverage interval of a decision boundary.</p>
              <div className="text-xs font-mono font-bold">TRIAGE ACTION: Decision automatically deferred to human reviewer.</div>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-xs font-mono tracking-widest mb-3">FAIRNESS THRESHOLD AMBIGUITY</div>
              <p className="text-sm mb-4">Disparate-Impact Ratio (DIR) or Demographic Parity Gap (Δ) falls within the margin of measurement error.</p>
              <div className="text-xs font-mono font-bold">TRIAGE ACTION: Subgroup analysis required before deployment decision.</div>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-xs font-mono tracking-widest mb-3">CONSTRUCT VALIDITY AMBIGUITY</div>
              <p className="text-sm mb-4">Convergent and discriminant validity evidence is insufficient to rule out alternative constructs.</p>
              <div className="text-xs font-mono font-bold">TRIAGE ACTION: Independent construct validation required.</div>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-xs font-mono tracking-widest mb-3">REPRODUCIBILITY CONCERN</div>
              <p className="text-sm mb-4">Independent replication attempt falls outside the reported uncertainty interval.</p>
              <div className="text-xs font-mono font-bold">TRIAGE ACTION: Evaluation flagged for investigation; deployment paused.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Conjunction Requirement in Governance */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black text-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto border-2 border-orange-500 p-6 sm:p-8">
          <div className="text-xs font-mono tracking-widest text-orange-500 mb-3">CRITICAL PRINCIPLE</div>
          <p className="text-sm sm:text-base leading-relaxed">
            The Conjunction Requirement means a single violation is sufficient to trigger the protocol — there is no compensatory mechanism. An evaluation cannot "pass" by excelling on three desiderata and ignoring the other three. All six desiderata must be satisfied at the appropriate calibration rung. This is not negotiable.
          </p>
        </div>
      </div>
    </section>
  );
}
