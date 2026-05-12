/*
 * ARTIFEX LABS — Site Map Navigator
 * Animated slide-down navigation showing all major sections
 * Design: Brutalist with animated transitions
 */

import React, { useState } from "react";
import { ChevronDown, BookOpen, AlertCircle, Clock } from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: string;
  status: "complete" | "in-progress" | "coming-soon";
  readTime: number;
  subsections?: Section[];
  description: string;
  color: string;
}

const SITE_SECTIONS: Section[] = [
  {
    id: "foundations",
    title: "Foundations",
    icon: "📐",
    status: "complete",
    readTime: 12,
    description: "Core concepts: benchmarks vs evaluations, construct validity, structural gaps",
    color: "#FF4D00",
    subsections: [
      { id: "bench-vs-eval", title: "Benchmarks vs Evaluations", icon: "⚖️", status: "complete", readTime: 5, description: "Key distinctions", color: "#FF4D00" },
      { id: "construct-validity", title: "Construct Validity Checklist", icon: "✓", status: "complete", readTime: 4, description: "8-step validation", color: "#FF4D00" },
      { id: "structural-gaps", title: "Three Structural Gaps", icon: "⚠️", status: "complete", readTime: 3, description: "Execution, Validity, Representation", color: "#FF4D00" },
    ],
  },
  {
    id: "bbom",
    title: "BBOM (11-Layer Bill of Materials)",
    icon: "🏗️",
    status: "complete",
    readTime: 15,
    description: "Complete specification of what must exist for a valid benchmark",
    color: "#FF4D00",
    subsections: [
      { id: "bbom-spec", title: "SPEC Layer", icon: "📝", status: "complete", readTime: 2, description: "Written definition", color: "#FF4D00" },
      { id: "bbom-tasks", title: "TASKS Layer", icon: "📋", status: "complete", readTime: 2, description: "Raw input stimuli", color: "#FF4D00" },
      { id: "bbom-truth", title: "TRUTH Layer", icon: "✅", status: "complete", readTime: 2, description: "Reference targets", color: "#FF4D00" },
      { id: "bbom-modality", title: "Modality Localization", icon: "🌐", status: "complete", readTime: 2, description: "Text, Image, Audio, Video, Genomics, Sensor", color: "#FF4D00" },
    ],
  },
  {
    id: "benchmarks",
    title: "Benchmarks & Discovery",
    icon: "🎯",
    status: "complete",
    readTime: 20,
    description: "50+ 2024-2025 benchmarks with search, filtering, and comparison",
    color: "#FF4D00",
    subsections: [
      { id: "benchmark-catalog", title: "Benchmark Catalog 2026", icon: "📚", status: "complete", readTime: 10, description: "50+ searchable benchmarks", color: "#FF4D00" },
      { id: "benchmark-decay", title: "Benchmark Decay Analysis", icon: "📉", status: "complete", readTime: 5, description: "Saturation curves and signal strength", color: "#FF4D00" },
      { id: "benchmark-cemetery", title: "Benchmark Cemetery", icon: "⚰️", status: "complete", readTime: 5, description: "Saturated and retired benchmarks", color: "#FF4D00" },
    ],
  },
  {
    id: "agentic",
    title: "Agentic Systems",
    icon: "🤖",
    status: "complete",
    readTime: 10,
    description: "Evaluation frameworks for tool use, planning, and multi-step reasoning",
    color: "#FF4D00",
  },
  {
    id: "scoring",
    title: "Scoring & Evaluation",
    icon: "📊",
    status: "in-progress",
    readTime: 18,
    description: "LLM-as-judge vulnerabilities, bias analysis, and scoring methodologies",
    color: "#FF4D00",
    subsections: [
      { id: "llm-judge-bias", title: "LLM-as-Judge Vulnerabilities", icon: "⚠️", status: "complete", readTime: 6, description: "7 bias categories with impact matrix", color: "#FF4D00" },
      { id: "iaa-metrics", title: "Inter-Annotator Agreement (IAA)", icon: "📈", status: "in-progress", readTime: 8, description: "Cohen's κ, Krippendorff's α, ICC, Gwet's AC2", color: "#FF4D00" },
      { id: "apbr", title: "APBR Methodology", icon: "🎯", status: "complete", readTime: 4, description: "Adaptive Prompt-Based Rubric", color: "#FF4D00" },
    ],
  },
  {
    id: "governance",
    title: "Governance & Compliance",
    icon: "⚖️",
    status: "in-progress",
    readTime: 14,
    description: "Regulatory frameworks, audit procedures, and continuous assurance",
    color: "#FF4D00",
    subsections: [
      { id: "calibration", title: "Calibration & Governance Rungs", icon: "🪜", status: "complete", readTime: 5, description: "5-level governance hierarchy", color: "#FF4D00" },
      { id: "legal", title: "Legal Admissibility", icon: "⚖️", status: "complete", readTime: 5, description: "Daubert criteria and forensic defensibility", color: "#FF4D00" },
      { id: "kinetic", title: "Kinetic Threshold", icon: "⚡", status: "complete", readTime: 4, description: "Six desiderata for valid evaluation", color: "#FF4D00" },
    ],
  },
  {
    id: "safety",
    title: "Safety & Jailbreak Evaluation",
    icon: "🔒",
    status: "in-progress",
    readTime: 16,
    description: "Comprehensive safety rubrics, hazard taxonomies, and adversarial testing",
    color: "#FF4D00",
    subsections: [
      { id: "multilingual-safety", title: "Multilingual Safety", icon: "🌍", status: "complete", readTime: 6, description: "Language gap analysis and bypass rates", color: "#FF4D00" },
      { id: "hazard-taxonomy", title: "AILuminate Hazard Taxonomy", icon: "🎯", status: "in-progress", readTime: 5, description: "12 foundational hazard categories", color: "#FF4D00" },
      { id: "3d-rubric", title: "3D Rubric Framework", icon: "📦", status: "in-progress", readTime: 5, description: "Policy Violation × Encouragement × Enablement", color: "#FF4D00" },
    ],
  },
  {
    id: "rubric-design",
    title: "Rubric Design & Measurement Theory",
    icon: "📐",
    status: "in-progress",
    readTime: 22,
    description: "Complete field manual for designing valid, reliable evaluation rubrics",
    color: "#FF4D00",
    subsections: [
      { id: "latent-constructs", title: "Latent Constructs & Operationalization", icon: "🎯", status: "in-progress", readTime: 4, description: "Measurement theory foundations", color: "#FF4D00" },
      { id: "rubric-foundations", title: "Rubric Design Foundations", icon: "📝", status: "in-progress", readTime: 6, description: "Roles, principles, scale design", color: "#FF4D00" },
      { id: "24-steps", title: "24 Non-Negotiable Core Steps", icon: "✓", status: "in-progress", readTime: 5, description: "Minimum viable evaluation pipeline", color: "#FF4D00" },
      { id: "iaa-guide", title: "IAA Metric Selection Guide", icon: "📊", status: "in-progress", readTime: 4, description: "When to use each metric", color: "#FF4D00" },
      { id: "statistical-methods", title: "Statistical Analysis How-To", icon: "📈", status: "in-progress", readTime: 3, description: "Python/R code and workflows", color: "#FF4D00" },
    ],
  },
  {
    id: "glossary",
    title: "Glossary & Definitions",
    icon: "📖",
    status: "complete",
    readTime: 8,
    description: "Core concepts with hover definitions and cross-references",
    color: "#FF4D00",
  },
  {
    id: "resources",
    title: "Resources & References",
    icon: "📚",
    status: "complete",
    readTime: 10,
    description: "Research papers, code repositories, and external tools",
    color: "#FF4D00",
  },
  {
    id: "doctrine",
    title: "Master Doctrine",
    icon: "📜",
    status: "complete",
    readTime: 25,
    description: "Comprehensive governance framework and institutional verification",
    color: "#FF4D00",
  },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const styles = {
    complete: "bg-green-100 text-green-800 border-green-300",
    "in-progress": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "coming-soon": "bg-gray-100 text-gray-800 border-gray-300",
  };
  const labels = {
    complete: "Complete",
    "in-progress": "In Progress",
    "coming-soon": "Coming Soon",
  };
  return (
    <span className={`px-2 py-1 text-xs font-semibold border rounded ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
};

const SectionItem: React.FC<{ section: Section; level?: number }> = ({ section, level = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubsections = section.subsections && section.subsections.length > 0;

  return (
    <div className="mb-2">
      <div
        className={`flex items-center gap-3 p-3 rounded border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all ${
          level > 0 ? "ml-4 bg-gray-50" : "bg-white"
        }`}
        onClick={() => hasSubsections && setExpanded(!expanded)}
      >
        {hasSubsections && (
          <ChevronDown
            size={16}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        )}
        {!hasSubsections && <div className="w-4" />}

        <span className="text-lg">{section.icon}</span>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-black truncate">{section.title}</h4>
          <p className="text-xs text-gray-600 truncate">{section.description}</p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock size={12} />
            {section.readTime}m
          </div>
          <StatusBadge status={section.status} />
        </div>
      </div>

      {expanded && hasSubsections && (
        <div className="mt-2 space-y-1">
          {section.subsections && section.subsections.map((subsection) => (
            <SectionItem key={subsection.id} section={subsection} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function SiteMapNavigator() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = SITE_SECTIONS.filter((section) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      section.title.toLowerCase().includes(searchLower) ||
      section.description.toLowerCase().includes(searchLower) ||
      section.subsections?.some(
        (sub: Section) =>
          sub.title.toLowerCase().includes(searchLower) ||
          sub.description.toLowerCase().includes(searchLower)
      )
    );
  });

  const totalReadTime = SITE_SECTIONS.reduce((sum, section) => sum + section.readTime, 0);
  const completeCount = SITE_SECTIONS.filter((s) => s.status === "complete").length;

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
        title="Open Site Map"
      >
        <BookOpen size={20} />
      </button>

      {/* Animated Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-Down Panel */}
      <div
        className={`fixed top-0 right-0 w-full md:w-96 h-screen bg-white z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black text-white p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <BookOpen size={20} />
              Site Map
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 text-xs mb-4">
            <div className="bg-gray-800 p-2 rounded">
              <div className="font-semibold">{completeCount}</div>
              <div className="text-gray-400">Complete</div>
            </div>
            <div className="bg-gray-800 p-2 rounded">
              <div className="font-semibold">{totalReadTime}h</div>
              <div className="text-gray-400">Total Read</div>
            </div>
            <div className="bg-gray-800 p-2 rounded">
              <div className="font-semibold">{SITE_SECTIONS.length}</div>
              <div className="text-gray-400">Sections</div>
            </div>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search sections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <SectionItem key={section.id} section={section} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <AlertCircle size={24} className="mx-auto mb-2 opacity-50" />
              <p>No sections found</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 text-xs text-gray-600">
          <p>
            🟢 Complete | 🟡 In Progress | ⚪ Coming Soon
          </p>
          <p className="mt-2">
            Last updated: May 6, 2026
          </p>
        </div>
      </div>
    </>
  );
}
