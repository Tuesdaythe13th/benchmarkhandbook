import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { CitationHover } from "@/components/CitationHover";
import { ArtifexBadge } from "@/components/ArtifexBadge";
import { DefinitionTooltip } from "@/components/DefinitionTooltip";
import { CheckCircle2, Clock, Users, Zap } from "lucide-react";

interface MethodologyComparison {
  aspect: string;
  likert: string;
  apbr: string;
  improvement: string;
}

const comparisonData: MethodologyComparison[] = [
  {
    aspect: "Evaluation Time",
    likert: "Full rubric per response",
    apbr: "Adaptive filtering to relevant items only",
    improvement: "~50% faster",
  },
  {
    aspect: "Inter-rater Reliability",
    likert: "Scale-point ambiguity (1-5 subjective)",
    apbr: "Binary Yes/No criteria (objective)",
    improvement: "Substantially higher",
  },
  {
    aspect: "Annotation Burden",
    likert: "High cognitive load across scales",
    apbr: "Reduced burden through filtering",
    improvement: "~50% reduction",
  },
  {
    aspect: "Expert Evaluation",
    likert: "Moderate agreement",
    apbr: "Higher agreement on binary criteria",
    improvement: "+15-25% agreement",
  },
  {
    aspect: "Non-expert Evaluation",
    likert: "Lower reliability",
    apbr: "Comparable to expert performance",
    improvement: "Expert-level accuracy",
  },
  {
    aspect: "Automated Assessment",
    likert: "Difficult to implement",
    apbr: "Natural fit for LLM judges",
    improvement: "Fully automatable",
  },
];

const apbrBenefits = [
  {
    icon: CheckCircle2,
    title: "Granular Binary Criteria",
    description:
      "Converts complex multi-faceted questions into precise Yes/No criteria, eliminating scale-point ambiguity",
  },
  {
    icon: Zap,
    title: "Adaptive Filtering",
    description:
      "Only evaluates criteria relevant to the specific query-response pair, dramatically reducing annotation burden",
  },
  {
    icon: Users,
    title: "Improved Reliability",
    description:
      "Higher inter-rater agreement among both expert and non-expert evaluators compared to Likert scales",
  },
  {
    icon: Clock,
    title: "50% Faster Evaluation",
    description:
      "Approximately half the evaluation time of traditional Likert-based methods while maintaining quality",
  },
];

export default function APBRMethodology() {
  const [activeComparison, setActiveComparison] = useState<number>(0);

  return (
    <section className="py-20 px-4 bg-white border-t-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-4xl font-black text-black">
              ADAPTIVE PRECISE BOOLEAN RUBRICS (APBR)
            </h2>
          </div>
          <p className="text-lg text-slate-700 max-w-4xl leading-relaxed">
            <DefinitionTooltip
              term="APBR"
              definition="A rubric methodology that converts complex evaluation questions into granular binary (Yes/No) criteria, adaptively filtering to only items relevant to a specific query-response pair."
            >
              Developed by Mallinar et al. (2025)
            </DefinitionTooltip>{" "}
            and published in{" "}
            <CitationHover
              citation={{
                authors: "Mallinar, N., et al.",
                year: 2025,
                title: "Adaptive Precise Boolean Rubrics for LLM Evaluation",
                publication: "npj Digital Medicine, 2026",
                doi: "10.1038/s41746-026-02492-x",
                url: "https://www.nature.com/articles/s41746-026-02492-x",
              }}
            >
              npj Digital Medicine (2026)
            </CitationHover>
            , APBR represents a significant advancement in evaluation methodology. The approach
            converts complex, multi-faceted evaluation questions into granular binary (Yes/No)
            criteria, adaptively filtering the rubric to only items relevant to a specific
            query-response pair.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {apbrBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="p-6 bg-white border-2 border-black rounded-none hover:bg-[#FFF5F0] transition-all">
                <div className="flex gap-4">
                  <Icon className="w-8 h-8 text-[#FF4D00] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-2">{benefit.title}</h3>
                    <p className="text-slate-700 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* APBR vs Likert Comparison */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6 uppercase font-mono">APBR vs. Traditional Likert Scales</h3>
          <div className="bg-white rounded-none border-2 border-black overflow-hidden">
            <div className="grid grid-cols-3 gap-0 border-b-2 border-black bg-black text-white font-mono text-xs">
              <div className="p-4 font-bold">Aspect</div>
              <div className="p-4 font-bold">Likert Scale</div>
              <div className="p-4 font-bold text-[#FF4D00]">APBR</div>
            </div>
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 gap-0 border-b border-black ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <div className="p-4 font-semibold text-black border-r border-black">{row.aspect}</div>
                <div className="p-4 text-slate-700 border-r border-black">{row.likert}</div>
                <div className="p-4 bg-[#FFF5F0] text-black">
                  <div className="font-semibold mb-1">{row.apbr}</div>
                  <div className="text-xs text-black font-bold uppercase font-mono bg-[#FF4D00] inline-block px-1 border border-black">✓ {row.improvement}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Findings */}
        <div className="mb-12 p-6 bg-white border-2 border-black rounded-none">
          <h3 className="font-bold text-black mb-4 uppercase font-mono">Research Findings</h3>
          <p className="text-slate-800 mb-4">
            <CitationHover
              citation={{
                authors: "Mallinar, N., et al.",
                year: 2025,
                title: "Adaptive Precise Boolean Rubrics for LLM Evaluation",
                publication: "npj Digital Medicine, 2026",
                doi: "10.1038/s41746-026-02492-x",
              }}
            >
              Mallinar et al. (2025)
            </CitationHover>{" "}
            demonstrated that APBR yields:
          </p>
          <ul className="space-y-2 text-black">
            <li className="flex gap-3">
              <span className="font-bold text-[#FF4D00]">•</span>
              <span>
                <strong>Substantially higher inter-rater agreement</strong> among both expert and
                non-expert human evaluators
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#FF4D00]">•</span>
              <span>
                <strong>Improved automated assessments</strong> compared to traditional Likert
                scales
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#FF4D00]">•</span>
              <span>
                <strong>Approximately half the evaluation time</strong> of Likert-based methods
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#FF4D00]">•</span>
              <span>
                <strong>Reduced subjective scale-point ambiguity</strong> through binary criteria
              </span>
            </li>
          </ul>
        </div>

        {/* Implementation Example */}
        <div className="mb-12 p-6 bg-white border-2 border-black rounded-none">
          <h3 className="font-bold text-black mb-4 uppercase font-mono">Implementation Example</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-black mb-2">Traditional Likert Approach:</h4>
              <div className="bg-white p-4 rounded-none border-2 border-black text-slate-700">
                <p className="mb-2">Rate the response on a 1-5 scale for:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Accuracy (1=Very Inaccurate, 5=Very Accurate)</li>
                  <li>• Completeness (1=Very Incomplete, 5=Very Complete)</li>
                  <li>• Clarity (1=Very Unclear, 5=Very Clear)</li>
                  <li>• Relevance (1=Not Relevant, 5=Highly Relevant)</li>
                </ul>
              </div>
            </div>

            <div className="text-center text-black font-bold font-mono">↓ TRANSFORMED ↓</div>

            <div>
              <h4 className="font-semibold text-black mb-2">APBR Approach:</h4>
              <div className="bg-[#FFF5F0] p-4 rounded-none border-2 border-black text-slate-700">
                <p className="mb-2 font-semibold text-black font-mono">Adaptive evaluation for this query:</p>
                <ul className="space-y-1 text-sm">
                  <li>
                    <input type="checkbox" className="mr-2 accent-[#FF4D00]" defaultChecked /> Does the response
                    directly answer the question asked?
                  </li>
                  <li>
                    <input type="checkbox" className="mr-2 accent-[#FF4D00]" defaultChecked /> Are all factual
                    claims supported by evidence?
                  </li>
                  <li>
                    <input type="checkbox" className="mr-2 accent-[#FF4D00]" /> Does the response include
                    necessary caveats or limitations?
                  </li>
                  <li>
                    <input type="checkbox" className="mr-2 accent-[#FF4D00]" defaultChecked /> Is the language
                    clear and understandable?
                  </li>
                </ul>
                <p className="text-xs text-[#FF4D00] mt-3 italic font-mono">
                  Note: Only criteria relevant to this specific query are evaluated
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complementary Methodologies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white border-2 border-black rounded-none">
            <h4 className="font-bold text-black mb-2 font-mono text-sm">BeTaL</h4>
            <p className="text-sm text-slate-700">
              Benchmark Tuning with an LLM-in-the-loop (Dsouza et al., Snorkel AI, 2025)
            </p>
          </div>
          <div className="p-4 bg-white border-2 border-black rounded-none">
            <h4 className="font-bold text-black mb-2 font-mono text-sm">RLTHF</h4>
            <p className="text-sm text-slate-700">
              Reinforcement Learning from Targeted Human Feedback (Xu et al., 2025)
            </p>
          </div>
          <div className="p-4 bg-white border-2 border-black rounded-none">
            <h4 className="font-bold text-black mb-2 font-mono text-sm">Process Reward Models</h4>
            <p className="text-sm text-slate-700">
              Step-level evaluation for reasoning chains and trajectory-based assessment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
