/*
 * Legal Admissibility Section
 * Design: Industrial Manifesto Brutalism
 * Integrates: Daubert Standard, FRE 707, Matter of Weber case law
 * Sources: evaluationmetrology.manus.space, Kinetic Threshold Part XV
 */

import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function LegalAdmissibilitySection() {
  const [expandedTab, setExpandedTab] = useState<string>('daubert');

  const daubertCriteria = [
    {
      criterion: 'Testability',
      kinetic: 'Validity',
      operationalization: 'Construct-aligned rubrics grounding scores in specified constructs',
      requirement: 'Rubric must explicitly state what construct is being measured and why',
    },
    {
      criterion: 'Peer Review',
      kinetic: 'Reproducibility',
      operationalization: 'Enabling independent replication and audits',
      requirement: 'Evaluation must be published or submitted to peer review before high-stakes use',
    },
    {
      criterion: 'Known Error Rate',
      kinetic: 'Uncertainty Quantification',
      operationalization: 'Error budget with coverage interval',
      requirement: 'All scores must include 95% or 99% confidence intervals depending on stakes',
    },
    {
      criterion: 'Standards & Controls',
      kinetic: 'Reliability + Fairness',
      operationalization: 'Stability across prompts and subgroups',
      requirement: 'Must demonstrate inter-rater agreement (κ ≥ 0.75) and fairness metrics (DIR ≥ 0.80)',
    },
    {
      criterion: 'General Acceptance',
      kinetic: 'Practicality',
      operationalization: 'Governance integration enabling routine use',
      requirement: 'Evaluation must be operationally feasible and documented in institutional standards',
    },
  ];

  const fre707Requirements = [
    {
      requirement: 'Testable Methodology',
      detail: 'The scoring algorithm or rubric must be falsifiable and independently verifiable.',
      kinetic: 'Construct validity with explicit ground truth',
    },
    {
      requirement: 'Known Error Rate',
      detail: 'Machine-generated evidence must include quantified uncertainty bounds.',
      kinetic: 'Uncertainty Quantification desideratum',
    },
    {
      requirement: 'Standards & Controls',
      detail: 'The system must be validated against known benchmarks and controls.',
      kinetic: 'Reliability + Fairness desiderata',
    },
    {
      requirement: 'General Acceptance',
      detail: 'The methodology must be accepted within the relevant scientific community.',
      kinetic: 'Practicality + Reproducibility desiderata',
    },
    {
      requirement: 'Peer Review',
      detail: 'The methodology should have undergone peer review or independent validation.',
      kinetic: 'Reproducibility desideratum',
    },
  ];

  const caseStudies = [
    {
      case: 'Matter of Weber',
      year: '2024',
      court: 'New York Surrogate Court',
      holding: 'Exclusion of Unvalidated AI Evidence',
      facts: 'Expert testimony relied on a proprietary AI tool whose scoring methodology could not be independently verified.',
      ruling: 'Court excluded the testimony, finding that the lack of transparency and validation violated Daubert standards.',
      implication: 'The Kinetic Threshold BBoM is designed to provide exactly the provenance and validation evidence that Matter of Weber found lacking.',
      bbomMapping: 'BBOM Layers 1–4 (Construct, Rubric, Annotation, Reproducibility)',
    },
    {
      case: 'Daubert v. Merrell Dow Pharmaceuticals',
      year: '1993',
      court: 'U.S. Supreme Court',
      holding: 'Gatekeeping Standard for Expert Evidence',
      facts: 'Plaintiff sought to introduce expert testimony on causation in a drug toxicity case.',
      ruling: 'Court established five criteria for admissibility: testability, peer review, error rate, standards, and general acceptance.',
      implication: 'The Kinetic Threshold framework directly operationalizes all five Daubert criteria.',
      bbomMapping: 'All six desiderata map to Daubert criteria',
    },
    {
      case: 'Federal Rule of Evidence 707',
      year: '2025',
      court: 'Judicial Conference Committee',
      holding: 'Machine-Generated Evidence Standard',
      facts: 'New rule subjects machine-generated evidence to the same Rule 702 admissibility standards as expert testimony.',
      ruling: 'AI evaluation scores used in legal proceedings must satisfy testability, peer review, known error rate, standards, and general acceptance.',
      implication: 'FRE 707 compliance requires all six Kinetic Threshold desiderata at High-stakes rung.',
      bbomMapping: 'Full BBOM + Governance Protocol required',
    },
  ];

  return (
    <section id="legal-admissibility" className="bg-white border-t-2 border-black">
      {/* Header */}
      <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-orange-500 mb-4">
            SECTION 11 — LEGAL ADMISSIBILITY
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.04em', lineHeight: '0.9' }}>
            DAUBERT, FRE 707,<br />& CASE LAW
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed max-w-2xl text-gray-300">
            AI evaluation scores used in high-stakes decisions must satisfy the same legal standards as expert testimony. The Kinetic Threshold framework is designed to operationalize these standards.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto flex gap-2 sm:gap-4 overflow-x-auto">
          {[
            { id: 'daubert', label: 'DAUBERT STANDARD' },
            { id: 'fre707', label: 'FRE 707' },
            { id: 'cases', label: 'CASE LAW' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setExpandedTab(tab.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 border-2 font-mono text-xs sm:text-sm tracking-widest whitespace-nowrap transition-colors ${
                expandedTab === tab.id
                  ? 'bg-black text-orange-500 border-black'
                  : 'bg-white text-black border-black hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Daubert Tab */}
      {expandedTab === 'daubert' && (
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-8" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              DAUBERT STANDARD MAPPING
            </h3>
            <p className="text-sm sm:text-base mb-8 leading-relaxed">
              Daubert v. Merrell Dow Pharmaceuticals (509 U.S. 579, 1993) established five gatekeeping criteria for expert evidence. The Kinetic Threshold framework operationalizes all five.
            </p>
            <div className="space-y-4">
              {daubertCriteria.map((d, idx) => (
                <div key={idx} className="border-2 border-black p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">DAUBERT CRITERION</div>
                      <h4 className="text-lg font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                        {d.criterion}
                      </h4>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">KINETIC THRESHOLD DESIDERATUM</div>
                      <p className="text-base font-bold">{d.kinetic}</p>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-4">
                    <div className="mb-3">
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">OPERATIONALIZATION</div>
                      <p className="text-sm">{d.operationalization}</p>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">REQUIREMENT</div>
                      <p className="text-sm">{d.requirement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FRE 707 Tab */}
      {expandedTab === 'fre707' && (
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-8" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              FEDERAL RULE OF EVIDENCE 707 — MACHINE-GENERATED EVIDENCE
            </h3>
            <div className="bg-orange-500 text-black border-2 border-black p-6 sm:p-8 mb-8">
              <div className="text-xs font-mono tracking-widest mb-3">EFFECTIVE DATE</div>
              <p className="text-sm sm:text-base mb-4">
                Effective June 2025, FRE 707 subjects machine-generated evidence to the same Rule 702 admissibility standards as expert testimony when offered without a human expert.
              </p>
              <div className="text-xs font-mono tracking-widest mb-3">IMPLICATION</div>
              <p className="text-sm">
                AI evaluation scores used in legal proceedings must satisfy all five Daubert criteria. The Kinetic Threshold framework at High-stakes rung satisfies FRE 707 compliance.
              </p>
            </div>
            <div className="space-y-4">
              {fre707Requirements.map((r, idx) => (
                <div key={idx} className="border-2 border-black p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">FRE 707 REQUIREMENT</div>
                      <h4 className="text-lg font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                        {r.requirement}
                      </h4>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">KINETIC THRESHOLD MAPPING</div>
                      <p className="text-base font-bold">{r.kinetic}</p>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-4">
                    <p className="text-sm">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Case Law Tab */}
      {expandedTab === 'cases' && (
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-8" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              FOUNDATIONAL CASE LAW
            </h3>
            <div className="space-y-6">
              {caseStudies.map((c, idx) => (
                <div key={idx} className="border-2 border-black p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">CASE</div>
                      <h4 className="text-lg sm:text-xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                        {c.case}
                      </h4>
                      <p className="text-xs font-mono text-gray-600 mt-2">{c.year} · {c.court}</p>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">HOLDING</div>
                      <p className="text-base font-bold">{c.holding}</p>
                    </div>
                  </div>
                  <div className="space-y-4 border-t-2 border-gray-300 pt-6">
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">FACTS</div>
                      <p className="text-sm">{c.facts}</p>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">RULING</div>
                      <p className="text-sm">{c.ruling}</p>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">IMPLICATION FOR AI EVALUATION</div>
                      <p className="text-sm">{c.implication}</p>
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest text-orange-500 mb-2">BBOM MAPPING</div>
                      <p className="text-sm font-mono">{c.bbomMapping}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Compliance Checklist */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black text-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-orange-500" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
            HIGH-STAKES LEGAL ADMISSIBILITY CHECKLIST
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Construct validity explicitly stated and falsifiable',
              'Rubric published or peer-reviewed',
              'Uncertainty quantified (99% CI)',
              'Inter-rater agreement κ ≥ 0.80',
              'Fairness metrics: DIR ≥ 0.90, Δ < 0.03',
              'Independent replication completed',
              'Governance protocol documented',
              'BBoM layers 1–11 complete and auditable',
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-orange-500 p-4 flex items-start gap-3">
                <div className="text-orange-500 font-bold mt-0.5">✓</div>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
