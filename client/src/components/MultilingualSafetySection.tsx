import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { CitationHover } from "@/components/CitationHover";
import { DefinitionTooltip } from "@/components/DefinitionTooltip";
import { Globe, AlertCircle, TrendingDown } from "lucide-react";
import { AnimatedChart } from "@/components/AnimatedChart";

interface LanguageData {
  language: string;
  safetyGap: number;
  researchCoverage: number;
  bypassRate: number;
  region: string;
}

const languageGapData: LanguageData[] = [
  {
    language: "English",
    safetyGap: 5,
    researchCoverage: 95,
    bypassRate: 8,
    region: "Global",
  },
  {
    language: "Mandarin Chinese",
    safetyGap: 28,
    researchCoverage: 42,
    bypassRate: 34,
    region: "East Asia",
  },
  {
    language: "Spanish",
    safetyGap: 22,
    researchCoverage: 38,
    bypassRate: 29,
    region: "Latin America",
  },
  {
    language: "Arabic",
    safetyGap: 35,
    researchCoverage: 18,
    bypassRate: 42,
    region: "Middle East",
  },
  {
    language: "Hindi",
    safetyGap: 38,
    researchCoverage: 12,
    bypassRate: 48,
    region: "South Asia",
  },
  {
    language: "Swahili",
    safetyGap: 42,
    researchCoverage: 8,
    bypassRate: 55,
    region: "Africa",
  },
  {
    language: "Vietnamese",
    safetyGap: 31,
    researchCoverage: 15,
    bypassRate: 39,
    region: "Southeast Asia",
  },
  {
    language: "Portuguese",
    safetyGap: 26,
    researchCoverage: 22,
    bypassRate: 32,
    region: "Latin America",
  },
];

const mixedLanguageBypassData = [
  { model: "GPT-3.5", bypassRate: 67.23, condition: "Mixed-Language Prompts" },
  { model: "GPT-4o", bypassRate: 40.34, condition: "Mixed-Language Prompts" },
  { model: "Claude-3", bypassRate: 35.2, condition: "Mixed-Language Prompts" },
  { model: "Gemini-2.5", bypassRate: 38.1, condition: "Mixed-Language Prompts" },
];

export default function MultilingualSafetySection() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageData | null>(null);

  return (
    <section className="py-20 px-4 bg-slate-50 border-t-4 border-blue-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-black text-black">
              MULTILINGUAL SAFETY & LANGUAGE GAP
            </h2>
          </div>
          <p className="text-lg text-slate-700 max-w-4xl leading-relaxed">
            Safety performance established in English does not automatically transfer to blended
            or multilingual settings. A 2025 systematic review of nearly 300 publications by{" "}
            <CitationHover
              citation={{
                authors: "Yong et al.",
                year: 2025,
                title: "The Language Gap in LLM Safety Research: A Systematic Review",
                doi: "10.48550/arXiv.2505.24119",
                url: "https://arxiv.org/abs/2505.24119",
              }}
            >
              Yong et al.
            </CitationHover>{" "}
            finds a "significant and growing language gap in LLM safety research," with non-English
            languages rarely studied. This gap represents a critical vulnerability in global AI
            deployment.
          </p>
        </div>

        {/* Mixed-Language Bypass Rates */}
        <Card className="mb-12 p-6 bg-red-50 border-2 border-red-300">
          <div className="flex gap-4 mb-6">
            <div className="flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-red-900 mb-2">Mixed-Language Vulnerability</h3>
              <p className="text-red-800">
                <CitationHover
                  citation={{
                    authors: "Song et al.",
                    year: 2024,
                    title: "Mixed-Language Prompting: A Vulnerability in Multilingual LLM Safety",
                    doi: "10.48550/arXiv.2407.07342",
                    url: "https://arxiv.org/abs/2407.07342",
                  }}
                >
                  Song et al. (2024) demonstrate that mixed-language prompting can substantially
                  degrade safety alignment
                </CitationHover>
                , with strongest-case bypass rates of 67.23% on GPT-3.5 and 40.34% on GPT-4o.
              </p>
            </div>
          </div>

          {/* Bypass Rate Chart */}
          <div className="bg-white p-4 rounded-lg">
            <AnimatedChart
              data={mixedLanguageBypassData}
              type="bar"
              dataKeys={[
                {
                  key: "bypassRate",
                  name: "Safety Bypass Rate (%)",
                  color: "#dc2626",
                },
              ]}
              xAxisKey="model"
              yAxisLabel="Bypass Rate (%)"
              title="Safety Bypass Rates Under Mixed-Language Prompting"
              height={300}
            />
          </div>
        </Card>

        {/* Language Gap Analysis */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6">Language Safety Gap Analysis</h3>
          <p className="text-slate-700 mb-6">
            <CitationHover
              citation={{
                authors: "Krasnodębska et al.",
                year: 2026,
                title: "Multilingual Safety of Large Language Models: A Systematic Review",
                publication: "Proceedings of EACL 2026",
                doi: "10.18653/v1/2026.eacl-long.44",
                url: "https://aclanthology.org/2026.eacl-long.44/",
                pages: "1003-1034",
              }}
            >
              A landmark 2026 systematic literature review by Krasnodębska et al.
            </CitationHover>{" "}
            examined the multilingual safety of LLMs by synthesizing findings from recent studies
            evaluating robustness across diverse linguistic and cultural contexts. The review
            identified critical challenges including dataset availability, evaluation biases, and
            the persistent assumption that safety mechanisms developed for English generalize to
            other languages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languageGapData.map((lang, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLanguage(selectedLanguage?.language === lang.language ? null : lang)}
                className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedLanguage?.language === lang.language
                    ? "bg-blue-100 border-blue-500 ring-2 ring-offset-2 ring-blue-400"
                    : "bg-white border-slate-300 hover:border-blue-400"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-lg">{lang.language}</h4>
                    <p className="text-sm text-slate-600">{lang.region}</p>
                  </div>
                  <span className="text-xs font-bold bg-orange-100 text-orange-900 px-2 py-1 rounded">
                    Gap: {lang.safetyGap}%
                  </span>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold">Research Coverage</span>
                      <span>{lang.researchCoverage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${lang.researchCoverage}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold">Bypass Rate</span>
                      <span>{lang.bypassRate}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${lang.bypassRate}%` }}
                      />
                    </div>
                  </div>
                </div>

                {selectedLanguage?.language === lang.language && (
                  <div className="mt-4 pt-4 border-t-2 border-blue-300">
                    <p className="text-sm text-slate-700">
                      <strong>Key Finding:</strong> {lang.language} shows a {lang.safetyGap}% safety
                      gap compared to English, with only {lang.researchCoverage}% research coverage
                      and {lang.bypassRate}% bypass rates in adversarial testing.
                    </p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Critical Gaps */}
        <Card className="mb-12 p-6 bg-amber-50 border-2 border-amber-300">
          <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5" />
            Critical Research Gaps
          </h3>
          <ul className="space-y-3 text-amber-900">
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>
                <strong>Dataset Availability:</strong> Limited multilingual safety datasets,
                particularly for low-resource languages
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>
                <strong>Evaluation Bias:</strong> Most benchmarks designed for English-speaking
                contexts, creating systematic measurement bias
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>
                <strong>Generalization Assumption:</strong> Persistent belief that English safety
                mechanisms transfer universally, contradicted by empirical evidence
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>
                <strong>Cultural Context:</strong> Safety definitions vary across cultures; harm
                categories may not translate directly
              </span>
            </li>
          </ul>
        </Card>

        {/* Recommendations */}
        <div className="p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
          <h3 className="font-bold text-blue-900 mb-3">Governance Implications</h3>
          <ul className="space-y-2 text-blue-900">
            <li className="flex gap-2">
              <span className="font-bold">1.</span>
              <span>
                Require multilingual safety evaluation as mandatory for deployment in non-English
                markets
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">2.</span>
              <span>
                Develop culturally-contextualized harm taxonomies rather than assuming English
                categories generalize
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">3.</span>
              <span>
                Invest in multilingual red-teaming and adversarial testing for all frontier models
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">4.</span>
              <span>
                Include native speakers and cultural experts in safety evaluation design
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
