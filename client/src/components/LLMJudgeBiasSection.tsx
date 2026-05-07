import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { CitationHover } from "@/components/CitationHover";
import { ArtifexBadge } from "@/components/ArtifexBadge";
import { DefinitionTooltip } from "@/components/DefinitionTooltip";
import { AlertTriangle, TrendingUp } from "lucide-react";

interface BiasCategory {
  name: string;
  description: string;
  examples: string[];
  severity: "low" | "medium" | "high" | "critical";
  impact: number; // 0-100
}

const biasCategoriesData: BiasCategory[] = [
  {
    name: "Position Bias",
    description:
      "Judge systematically favors responses in certain positions (first, last, middle) regardless of content quality.",
    examples: [
      "Consistently rating first response higher",
      "Penalizing responses that appear later",
    ],
    severity: "high",
    impact: 78,
  },
  {
    name: "Verbosity Bias",
    description:
      "Judge favors longer responses over shorter ones, even when both convey equivalent information.",
    examples: [
      "Rating verbose explanations higher than concise ones",
      "Penalizing brief but accurate answers",
    ],
    severity: "high",
    impact: 82,
  },
  {
    name: "Self-Enhancement",
    description:
      "Judge rates outputs that resemble its own style more favorably than equally valid alternatives.",
    examples: [
      "Claude-as-judge favoring Claude outputs",
      "GPT-as-judge favoring GPT-style responses",
    ],
    severity: "critical",
    impact: 91,
  },
  {
    name: "Authority/Provenance Bias",
    description:
      "Judge alters scores based on perceived authority or source of the response.",
    examples: [
      "Rating responses higher when attributed to 'leading researcher'",
      "Penalizing responses attributed to unknown sources",
    ],
    severity: "high",
    impact: 75,
  },
  {
    name: "Distraction Bias",
    description:
      "Judge's evaluation influenced by irrelevant information or formatting changes.",
    examples: [
      "Different scores for identical content with different formatting",
      "Responses with typos rated lower despite correct reasoning",
    ],
    severity: "medium",
    impact: 64,
  },
  {
    name: "Chain-of-Thought Bias",
    description:
      "Judge's evaluation influenced by presence/absence of explicit reasoning steps.",
    examples: [
      "Responses with explicit CoT rated higher than implicit reasoning",
      "Penalizing responses without step-by-step explanation",
    ],
    severity: "medium",
    impact: 68,
  },
  {
    name: "Refined-Version Cues",
    description:
      "Judge assumes later versions are improvements and rates them higher.",
    examples: [
      "Second iteration rated higher despite identical content",
      "Responses labeled 'revised' rated higher than originals",
    ],
    severity: "medium",
    impact: 61,
  },
];

const severityColors: Record<string, string> = {
  low: "bg-green-100 text-green-900 border-green-300",
  medium: "bg-yellow-100 text-yellow-900 border-yellow-300",
  high: "bg-orange-100 text-orange-900 border-orange-300",
  critical: "bg-red-100 text-red-900 border-red-300",
};

const severityBgColors: Record<string, string> = {
  low: "bg-green-50",
  medium: "bg-yellow-50",
  high: "bg-orange-50",
  critical: "bg-red-50",
};

export default function LLMJudgeBiasSection() {
  const [selectedBias, setSelectedBias] = useState<BiasCategory | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white border-t-4 border-orange-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl font-black text-black">
              LLM-AS-JUDGE VULNERABILITIES
            </h2>
          </div>
          <p className="text-lg text-slate-700 max-w-4xl leading-relaxed">
            The widespread adoption of{" "}
            <DefinitionTooltip
              term="LLM-as-Judge"
              definition="Using frontier language models to evaluate outputs of other models. Introduces vulnerabilities including position bias, verbosity bias, and self-enhancement."
            >
              LLM-as-judge techniques
            </DefinitionTooltip>{" "}
            has introduced systematic failure modes extensively documented in 2026 research.{" "}
            <CitationHover
              citation={{
                authors: "Zhao et al.",
                year: 2026,
                title: "Bias in the Loop: Auditing LLM-as-a-Judge for Software Engineering",
                doi: "10.48550/arXiv.2604.16790",
                url: "https://arxiv.org/abs/2604.16790",
              }}
            >
              Studies show that judge decisions are highly sensitive to prompt biases
            </CitationHover>{" "}
            even when the underlying content is unchanged. These biases can alter task-level
            conclusions and change relative model rankings.
          </p>
        </div>

        {/* Key Finding */}
        <Card className="mb-12 p-6 bg-red-50 border-2 border-red-300">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-red-900 mb-2">Critical Finding</h3>
              <p className="text-red-800">
                <CitationHover
                  citation={{
                    authors: "Promptfoo",
                    year: 2026,
                    title: "LLM Security Database: Judge Fragility",
                    url: "https://www.promptfoo.dev/lm-security-db/vuln/llm-judge-fragility-fe636d3b",
                  }}
                >
                  LLM judges exhibit high sensitivity to layout-only changes
                </CitationHover>
                , frequently altering their scores even when semantic and factual content remains
                identical. Malicious actors can evade safety filters by reformatting restricted
                content, and models can be artificially boosted on leaderboards by tuning output
                formatting and verbosity.
              </p>
            </div>
          </div>
        </Card>

        {/* Bias Categories Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6">Seven Bias Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {biasCategoriesData.map((bias, idx) => (
              <button
                key={idx}
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  severityBgColors[bias.severity]
                } ${severityColors[bias.severity]} ${
                  expandedIndex === idx ? "ring-2 ring-offset-2 ring-orange-500" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{bias.name}</h4>
                    <p className="text-sm opacity-90 mb-2">{bias.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            bias.severity === "critical"
                              ? "bg-red-600"
                              : bias.severity === "high"
                              ? "bg-orange-500"
                              : bias.severity === "medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${bias.impact}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold">{bias.impact}%</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedIndex === idx && (
                  <div className="mt-4 pt-4 border-t-2 border-current opacity-80">
                    <p className="text-sm font-semibold mb-2">Examples:</p>
                    <ul className="text-sm space-y-1">
                      {bias.examples.map((example, exIdx) => (
                        <li key={exIdx} className="flex gap-2">
                          <span className="font-bold">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Research Citation */}
        <Card className="p-6 bg-slate-50 border-2 border-slate-300">
          <h3 className="font-bold text-black mb-3">Research Foundation</h3>
          <p className="text-slate-700 mb-3">
            <CitationHover
              citation={{
                authors: "Zhao, W., et al.",
                year: 2026,
                title: "Bias in the Loop: Auditing LLM-as-a-Judge for Software Engineering",
                publication: "arXiv preprint",
                doi: "10.48550/arXiv.2604.16790",
                url: "https://arxiv.org/abs/2604.16790",
              }}
            >
              Zhao et al. (2026)
            </CitationHover>{" "}
            systematically probed prompt-induced biases across code generation, code repair, and
            test generation tasks. They identified that judge decisions are highly sensitive to
            prompt biases even when the underlying code snippet is unchanged, with effects large
            enough to change task-level conclusions and alter relative model rankings.
          </p>
          <p className="text-slate-700">
            The study identified seven distinct bias categories and demonstrated that these biases
            represent a fundamental vulnerability in automated evaluation pipelines that rely on
            LLM judges. This has significant implications for leaderboard integrity and model
            selection in production systems.
          </p>
        </Card>

        {/* Recommendations */}
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
          <h3 className="font-bold text-blue-900 mb-3">Mitigation Strategies</h3>
          <ul className="space-y-2 text-blue-900">
            <li className="flex gap-2">
              <span className="font-bold">1.</span>
              <span>Use multiple independent judges and aggregate decisions</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">2.</span>
              <span>Implement blind evaluation (hide model identity and position)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">3.</span>
              <span>Audit judges for bias using standardized test cases</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">4.</span>
              <span>Combine LLM judges with human evaluation for high-stakes decisions</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">5.</span>
              <span>Use Process Reward Models for step-level evaluation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
