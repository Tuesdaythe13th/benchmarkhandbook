import React, { useState, useMemo } from "react";
import { Search, X, Filter, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface SearchResult {
  id: string;
  title: string;
  section: string;
  category: string;
  excerpt: string;
  url: string;
  relevance: number;
}

interface GlossaryTerm {
  term: string;
  definition: string;
  section: string;
  isArtifexConcept: boolean;
}

const searchableContent: SearchResult[] = [
  {
    id: "bbom-01",
    title: "Benchmark Bill of Materials (BBOM)",
    section: "BBOM",
    category: "Framework",
    excerpt:
      "The 11-layer framework defining what must exist for a benchmark to be valid. Each layer is a system requirement with verification method and failure mode.",
    url: "#bbom",
    relevance: 100,
  },
  {
    id: "kinetic-threshold",
    title: "Kinetic Threshold",
    section: "Kinetic Threshold",
    category: "Metrological Concept",
    excerpt:
      "The point at which a benchmark transitions from high-signal to low-signal state, driven by saturation, contamination, or gaming.",
    url: "#kinetic",
    relevance: 95,
  },
  {
    id: "construct-validity",
    title: "Construct Validity Checklist",
    section: "Foundations",
    category: "Methodology",
    excerpt:
      "Eight-step process for ensuring a benchmark measures what it claims to measure, from phenomenon definition to error analysis.",
    url: "#foundations",
    relevance: 90,
  },
  {
    id: "llm-judge-bias",
    title: "LLM-as-Judge Vulnerabilities",
    section: "Scoring",
    category: "Safety",
    excerpt:
      "Seven documented bias categories in LLM judges: position bias, verbosity bias, self-enhancement, authority bias, distraction bias, chain-of-thought bias, and refined-version cues.",
    url: "#scoring",
    relevance: 88,
  },
  {
    id: "multilingual-safety",
    title: "Multilingual Safety & Language Gap",
    section: "Safety",
    category: "Multilingual",
    excerpt:
      "Critical research gap showing English safety mechanisms do not transfer to other languages. Mixed-language prompting achieves 67.23% bypass rates on GPT-3.5.",
    url: "#safety",
    relevance: 85,
  },
  {
    id: "benchmark-decay",
    title: "Benchmark Decay & Saturation",
    section: "Benchmarks",
    category: "Analysis",
    excerpt:
      "Benchmarks saturate within 3-5 years. MMLU signal dropped from 92% to 12% (2020-2024). Only private, continuously refreshed instruments maintain signal.",
    url: "#benchmarks",
    relevance: 82,
  },
  {
    id: "apbr",
    title: "Adaptive Precise Boolean Rubrics (APBR)",
    section: "Rubric Design",
    category: "Methodology",
    excerpt:
      "Binary rubric methodology that converts complex evaluation questions into granular Yes/No criteria, achieving 50% faster evaluation with higher reliability.",
    url: "#rubric-design",
    relevance: 80,
  },
  {
    id: "execution-gap",
    title: "Execution Gap",
    section: "Foundations",
    category: "Gap Analysis",
    excerpt:
      "Distance between benchmark performance (short, well-defined tasks) and real-world task completion (long-horizon, open-ended, noisy, interactive).",
    url: "#foundations",
    relevance: 75,
  },
  {
    id: "validity-gap",
    title: "Validity Gap",
    section: "Foundations",
    category: "Gap Analysis",
    excerpt:
      "Distance between what an evaluation claims to measure and what it actually measures. Arises from construct-irrelevant variance and benchmark misuse.",
    url: "#foundations",
    relevance: 75,
  },
  {
    id: "representation-gap",
    title: "Representation Gap",
    section: "Foundations",
    category: "Gap Analysis",
    excerpt:
      "Distance between who is represented in evaluation design and who is affected by deployment. A validity concern, not merely a fairness concern.",
    url: "#foundations",
    relevance: 75,
  },
];

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Benchmark",
    definition:
      "A fixed, reusable testing instrument including tasks, scoring rules, and a manifest (BBOM). Rewards performance, ranks models, produces comparable scores.",
    section: "Foundations",
    isArtifexConcept: false,
  },
  {
    term: "Evaluation",
    definition:
      "A specific, timestamped execution of a model against a versioned benchmark. Exposes risk, surfaces failure modes, produces insights.",
    section: "Foundations",
    isArtifexConcept: false,
  },
  {
    term: "Evidence",
    definition:
      "Signed, immutable logs, outputs, and metadata generated from an evaluation. Permanent record for audit and legal defensibility.",
    section: "Foundations",
    isArtifexConcept: false,
  },
  {
    term: "BBOM",
    definition:
      "Benchmark Bill of Materials. 11-layer framework defining system requirements, verification methods, and failure modes for governance-grade benchmarks.",
    section: "BBOM",
    isArtifexConcept: true,
  },
  {
    term: "Kinetic Threshold",
    definition:
      "Point where benchmark transitions from high-signal to low-signal state. Driven by saturation, contamination, or gaming. Core metrological concept.",
    section: "Kinetic Threshold",
    isArtifexConcept: true,
  },
  {
    term: "Construct Validity",
    definition:
      "Degree to which an instrument measures what it claims to measure. Requires defining phenomenon, isolating construct, representative dataset, and error analysis.",
    section: "Foundations",
    isArtifexConcept: false,
  },
  {
    term: "LLM-as-Judge",
    definition:
      "Using frontier language models to evaluate outputs of other models. Introduces systematic vulnerabilities including position bias, verbosity bias, and self-enhancement.",
    section: "Scoring",
    isArtifexConcept: false,
  },
  {
    term: "APBR",
    definition:
      "Adaptive Precise Boolean Rubrics. Binary rubric methodology converting complex evaluation questions into granular Yes/No criteria with adaptive filtering.",
    section: "Rubric Design",
    isArtifexConcept: true,
  },
  {
    term: "Goodhart's Law",
    definition:
      "When a measure becomes a target, it ceases to be a good measure. Explains benchmark saturation and gaming behavior.",
    section: "Benchmarks",
    isArtifexConcept: false,
  },
];

const categories = ["Framework", "Methodology", "Safety", "Multilingual", "Analysis", "Gap Analysis", "Metrological Concept"];

export default function EnhancedSearch() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showGlossary, setShowGlossary] = useState(false);

  const filteredResults = useMemo(() => {
    let results = searchableContent;

    // Filter by search query
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(lowerQuery) ||
          r.excerpt.toLowerCase().includes(lowerQuery) ||
          r.section.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      results = results.filter((r) => selectedCategories.includes(r.category));
    }

    // Sort by relevance
    return results.sort((a, b) => b.relevance - a.relevance);
  }, [query, selectedCategories]);

  const filteredGlossary = useMemo(() => {
    if (!query.trim()) return glossaryTerms;
    const lowerQuery = query.toLowerCase();
    return glossaryTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(lowerQuery) ||
        t.definition.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl border-2 border-orange-500">
        {/* Search Input */}
        <div className="p-6 bg-black border-b-2 border-orange-500">
          <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search concepts, sections, methodologies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 outline-none text-black bg-transparent"
              autoFocus
            />
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-slate-200 bg-slate-50">
          <button
            onClick={() => setShowGlossary(false)}
            className={`flex-1 px-4 py-3 font-bold text-sm transition-colors ${
              !showGlossary
                ? "bg-white text-black border-b-2 border-orange-500"
                : "text-slate-600 hover:text-black"
            }`}
          >
            <Search className="w-4 h-4 inline mr-2" />
            SEARCH RESULTS ({filteredResults.length})
          </button>
          <button
            onClick={() => setShowGlossary(true)}
            className={`flex-1 px-4 py-3 font-bold text-sm transition-colors ${
              showGlossary
                ? "bg-white text-black border-b-2 border-orange-500"
                : "text-slate-600 hover:text-black"
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            GLOSSARY ({filteredGlossary.length})
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(80vh-200px)]">
          {!showGlossary ? (
            <>
              {/* Category Filters */}
              {query.trim() && (
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Filter className="w-4 h-4 text-slate-600" />
                    <span className="text-xs font-bold text-slate-600">FILTER BY CATEGORY</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() =>
                          setSelectedCategories((prev) =>
                            prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
                          )
                        }
                        className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                          selectedCategories.includes(cat)
                            ? "bg-orange-500 text-white"
                            : "bg-white border border-slate-300 text-slate-700 hover:border-orange-500"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Results */}
              <div className="p-4 space-y-3">
                {filteredResults.length === 0 ? (
                  <div className="text-center py-8 text-slate-500">
                    <p className="font-semibold mb-2">No results found</p>
                    <p className="text-sm">Try different keywords or browse the glossary</p>
                  </div>
                ) : (
                  filteredResults.map((result) => (
                    <a
                      key={result.id}
                      href={result.url}
                      className="block p-4 bg-white border-2 border-slate-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-black group-hover:text-orange-600 transition-colors">
                            {result.title}
                          </h4>
                          <div className="flex gap-2 mt-1">
                            <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded">
                              {result.section}
                            </span>
                            <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded">
                              {result.category}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs font-bold text-slate-500">
                          {result.relevance}%
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 line-clamp-2">{result.excerpt}</p>
                    </a>
                  ))
                )}
              </div>
            </>
          ) : (
            /* Glossary */
            <div className="p-4 space-y-3">
              {filteredGlossary.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  <p className="font-semibold">No glossary entries found</p>
                </div>
              ) : (
                filteredGlossary.map((term, idx) => (
                  <div key={idx} className="p-4 bg-white border-2 border-slate-200 rounded-lg">
                    <div className="flex items-start gap-2 mb-2">
                      <h4 className="font-bold text-black flex-1">{term.term}</h4>
                      {term.isArtifexConcept && (
                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded whitespace-nowrap">
                          ARTIFEX LABS
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-700 mb-2">{term.definition}</p>
                    <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded inline-block">
                      {term.section}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
