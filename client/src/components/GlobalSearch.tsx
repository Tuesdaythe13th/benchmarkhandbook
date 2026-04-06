/*
 * GlobalSearch — Site-wide command palette search
 * Triggered by Cmd+K / Ctrl+K or the search button in Nav
 * Covers: Pages, Sections, Benchmarks, Papers, Glossary, Metrics
 * Design: Industrial Manifesto Brutalism — #FF4D00 / #000 / #FFF
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import { categories } from "@/data/benchmarks";

type ResultType = "page" | "section" | "benchmark" | "paper" | "glossary" | "metric";

interface SearchResult {
  id: string;
  type: ResultType;
  title: string;
  subtitle: string;
  navigate: string;   // route path
  anchor?: string;    // #section-id to scroll to
  filterKey?: string; // term to pre-fill in section search
}

// ── Static indexes ──────────────────────────────────────────────

const PAGE_RESULTS: SearchResult[] = [
  { id: "page-home",         type: "page", title: "Eval Guide",          subtitle: "Main evaluation reference — all 13 sections", navigate: "/" },
  { id: "page-safety",       type: "page", title: "Safety & Harm Taxonomy", subtitle: "MLCommons AILuminate v1.0 — 12 hazard categories", navigate: "/safety" },
  { id: "page-multicultural",type: "page", title: "Multicultural Evaluation", subtitle: "WEIRD bias, multilingual failure modes, cultural coverage", navigate: "/multicultural" },
  { id: "page-rubric",       type: "page", title: "Rubric Design",        subtitle: "7 anti-patterns, 10-step QA checklist, rubric frameworks", navigate: "/rubric-design" },
  { id: "page-metrics",      type: "page", title: "Metrics Glossary",     subtitle: "100+ evaluation metrics with categories and citations", navigate: "/metrics" },
];

const SECTION_RESULTS: SearchResult[] = [
  { id: "sec-foundations",  type: "section", title: "Foundations", subtitle: "The Big Three: Benchmark, Evaluation, Evidence", navigate: "/", anchor: "#foundations" },
  { id: "sec-bbom",         type: "section", title: "BBOM",         subtitle: "Benchmark Bill of Materials — 11-layer validity framework", navigate: "/", anchor: "#bbom" },
  { id: "sec-benchmarks",   type: "section", title: "Benchmark Catalog", subtitle: "50+ benchmarks across 8 capability domains", navigate: "/", anchor: "#benchmarks" },
  { id: "sec-selector",     type: "section", title: "Benchmark Selector", subtitle: "7-step guided evaluation design wizard", navigate: "/", anchor: "#selector" },
  { id: "sec-agentic",      type: "section", title: "Agentic Evaluation", subtitle: "System 1/2 framework, HITL workflow, trajectory scoring", navigate: "/", anchor: "#agentic" },
  { id: "sec-scoring",      type: "section", title: "Scoring & Rubrics", subtitle: "LLM-as-Judge methodology, rubric design, bias mitigation", navigate: "/", anchor: "#scoring" },
  { id: "sec-governance",   type: "section", title: "Governance", subtitle: "EU AI Act, NIST AI RMF, EO 14110, audit requirements", navigate: "/", anchor: "#governance" },
  { id: "sec-glossary",     type: "section", title: "Glossary",     subtitle: "100+ searchable evaluation terms and definitions", navigate: "/", anchor: "#glossary" },
  { id: "sec-cemetery",     type: "section", title: "Benchmark Cemetery", subtitle: "9 forensic case files of retired/failed benchmarks", navigate: "/", anchor: "#cemetery" },
  { id: "sec-resources",    type: "section", title: "Resources",    subtitle: "12 key research organizations and curated links", navigate: "/", anchor: "#resources" },
  { id: "sec-research",     type: "section", title: "Research Library", subtitle: "40+ peer-reviewed papers (2023–2026) with APA citations", navigate: "/", anchor: "#research" },
  { id: "sec-compendium",   type: "section", title: "First Principles Compendium", subtitle: "10 foundational doctrines of evaluation science", navigate: "/", anchor: "#compendium" },
  { id: "sec-survey",       type: "section", title: "Self-Assessment", subtitle: "Structured evaluation readiness survey", navigate: "/", anchor: "#survey" },
];

// Inline paper index for search (subset of fields from ResearchPapersSection)
const PAPER_RESULTS: SearchResult[] = [
  { id: "p01", type: "paper", title: "A Safe Harbor for AI Evaluation and Red Teaming", subtitle: "Longpre et al. — arXiv 2024 — Safety & Governance", navigate: "/", anchor: "#research" },
  { id: "p02", type: "paper", title: "AgentBench: Evaluating LLMs as Agents", subtitle: "Liu et al. — ICLR 2024 — Agentic Evaluation", navigate: "/", anchor: "#research" },
  { id: "p03", type: "paper", title: "What Makes a Good AI Benchmark?", subtitle: "Stanford HAI — Policy Brief 2024 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p04", type: "paper", title: "Beyond the Imitation Game (BIG-Bench)", subtitle: "Srivastava et al. — TMLR 2023 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p05", type: "paper", title: "Measuring What Matters: Evaluation Frameworks", subtitle: "Kapoor et al. — arXiv 2025 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p06", type: "paper", title: "Sociotechnical Safety Evaluation of Generative AI", subtitle: "Weidinger et al. — Google DeepMind 2025 — Safety", navigate: "/", anchor: "#research" },
  { id: "p07", type: "paper", title: "The AI Evaluation Crisis", subtitle: "Raji et al. — arXiv 2025 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p08", type: "paper", title: "Judging the Judges: Position Bias in LLM-as-Judge", subtitle: "Ko & Lu — arXiv 2024 — LLM-as-Judge", navigate: "/", anchor: "#research" },
  { id: "p17", type: "paper", title: "TrustLLM: Trustworthiness in Large Language Models", subtitle: "Sun et al. — ICML 2024 — Safety & Governance", navigate: "/", anchor: "#research" },
  { id: "p19", type: "paper", title: "DecodingTrust: GPT Trustworthiness Assessment", subtitle: "Wang et al. — NeurIPS 2023 Outstanding — Safety", navigate: "/", anchor: "#research" },
  { id: "p20", type: "paper", title: "FrontierMath: Advanced Mathematical Reasoning", subtitle: "Glazer et al. — Epoch AI 2024 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p21", type: "paper", title: "AlpacaEval: Automatic Evaluator for Instruction-Following", subtitle: "Li et al. — Stanford 2023 — LLM-as-Judge", navigate: "/", anchor: "#research" },
  { id: "p23", type: "paper", title: "NIST AI 800-3: Expanding AI Evaluation Toolbox", subtitle: "NIST CAISI 2026 — AI Metrology", navigate: "/", anchor: "#research" },
  { id: "p24", type: "paper", title: "STAR: Strategy-Targeted Automated Red-Teaming", subtitle: "Zhang et al. — ICLR 2026 — Safety & Governance", navigate: "/", anchor: "#research" },
  { id: "p25", type: "paper", title: "Anthropic–OpenAI Alignment Evaluation Exercise", subtitle: "Anthropic & OpenAI — 2026 — Safety & Governance", navigate: "/", anchor: "#research" },
  { id: "p26", type: "paper", title: "Rubrics-as-Rewards (RaR) Framework", subtitle: "GoDaddy AI Research — 2025 — LLM-as-Judge", navigate: "/", anchor: "#research" },
  { id: "p27", type: "paper", title: "AILuminate Scorecard of AI Evaluation Quality", subtitle: "AI Standards Lab — 2026 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p28", type: "paper", title: "MedAgentGym: Biomedical Agent Evaluation", subtitle: "MedAgentGym Team — ICLR 2026 — Agentic Evaluation", navigate: "/", anchor: "#research" },
  { id: "p33", type: "paper", title: "LiveBench: Contamination-Free LLM Benchmark", subtitle: "White et al. — arXiv 2024 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p34", type: "paper", title: "HELMET: Evaluating Long-Context Language Models", subtitle: "Yen et al. — ICLR 2025 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p35", type: "paper", title: "OSWorld: Multimodal Agents in Real Computer Environments", subtitle: "Xie et al. — NeurIPS 2024 — Agentic Evaluation", navigate: "/", anchor: "#research" },
  { id: "p36", type: "paper", title: "τ-bench: Tool-Agent-User Interaction Benchmark", subtitle: "Yao et al. — arXiv 2024 — Agentic Evaluation", navigate: "/", anchor: "#research" },
  { id: "p37", type: "paper", title: "BrowseComp: Benchmark for Browsing Agents", subtitle: "Wei et al. — OpenAI 2025 — Agentic Evaluation", navigate: "/", anchor: "#research" },
  { id: "p38", type: "paper", title: "Scaling LLM Test-Time Compute Optimally", subtitle: "Snell et al. — NeurIPS 2024 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p39", type: "paper", title: "MMMU-Pro: Robust Multimodal Understanding Benchmark", subtitle: "Yue et al. — ICLR 2025 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p40", type: "paper", title: "FRAMES: Factuality, Retrieval & Reasoning Evaluation", subtitle: "Krishna et al. — Google 2024 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p41", type: "paper", title: "Establishing Best Practices for Rigorous Agentic Benchmarks (ABC)", subtitle: "Zhu et al. — arXiv 2025 — Agentic Evaluation", navigate: "/", anchor: "#research" },
  { id: "p42", type: "paper", title: "Safety by Measurement: Systematic Review of AI Safety Evaluation", subtitle: "Grey & Segerie — arXiv 2025 — Safety & Governance", navigate: "/", anchor: "#research" },
  { id: "p43", type: "paper", title: "How Should AI Safety Benchmarks Benchmark Safety?", subtitle: "Yu et al. — arXiv 2026 — Safety & Governance", navigate: "/", anchor: "#research" },
  { id: "p44", type: "paper", title: "Berkeley Function Calling Leaderboard (BFCL) V4", subtitle: "Patil et al. — ICML 2025 — Agentic Evaluation", navigate: "/", anchor: "#research" },
  { id: "p45", type: "paper", title: "MultiAgentBench: Collaboration and Competition of LLM Agents", subtitle: "Du et al. — ACL 2025 — Agentic Evaluation", navigate: "/", anchor: "#research" },
  { id: "p46", type: "paper", title: "Video-MME: Comprehensive Video Evaluation for Multi-Modal LLMs", subtitle: "Fu, Dai et al. — CVPR 2025 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p47", type: "paper", title: "Benchmarking LLMs Under Data Contamination: Static to Dynamic", subtitle: "Chen et al. — EMNLP 2025 — Benchmark Design", navigate: "/", anchor: "#research" },
  { id: "p48", type: "paper", title: "Red Teaming LLMs as Socio-Technical Practice", subtitle: "Garcia et al. — CHI 2026 — Safety & Governance", navigate: "/", anchor: "#research" },
];

// Glossary terms index for search
const GLOSSARY_RESULTS: SearchResult[] = [
  { id: "g-benchmark",      type: "glossary", title: "Benchmark",               subtitle: "Fixed, reusable testing instrument with tasks, scoring rules, and BBOM", navigate: "/", anchor: "#glossary" },
  { id: "g-bbom",           type: "glossary", title: "BBOM",                    subtitle: "Benchmark Bill of Materials — 10-layer structured validity manifest", navigate: "/", anchor: "#glossary" },
  { id: "g-construct",      type: "glossary", title: "Construct Validity",       subtitle: "Degree to which a benchmark measures what it claims to measure", navigate: "/", anchor: "#glossary" },
  { id: "g-contamination",  type: "glossary", title: "Contamination",            subtitle: "When benchmark tasks appear in training data, inflating scores", navigate: "/", anchor: "#glossary" },
  { id: "g-saturation",     type: "glossary", title: "Saturation",               subtitle: "When a benchmark loses discriminative power — most models near ceiling", navigate: "/", anchor: "#glossary" },
  { id: "g-irr",            type: "glossary", title: "Inter-Rater Reliability",  subtitle: "Statistical measure of agreement between human annotators (IRR)", navigate: "/", anchor: "#glossary" },
  { id: "g-jailbreak",      type: "glossary", title: "Jailbreak",                subtitle: "Adversarial prompt designed to bypass safety guardrails", navigate: "/", anchor: "#glossary" },
  { id: "g-llmjudge",       type: "glossary", title: "LLM-as-Judge",             subtitle: "Using a language model to evaluate another model's outputs", navigate: "/", anchor: "#glossary" },
  { id: "g-trajectory",     type: "glossary", title: "Trajectory",               subtitle: "Sequence of actions an agent takes to complete a task", navigate: "/", anchor: "#glossary" },
  { id: "g-passatk",        type: "glossary", title: "Pass@k",                   subtitle: "Probability at least one of k code samples passes all unit tests", navigate: "/", anchor: "#glossary" },
  { id: "g-hallu",          type: "glossary", title: "Hallucination",            subtitle: "Confident, factually incorrect model output", navigate: "/", anchor: "#glossary" },
  { id: "g-gaming",         type: "glossary", title: "Metric Gaming",            subtitle: "Optimizing the scoring function rather than the underlying capability", navigate: "/", anchor: "#glossary" },
  { id: "g-canary",         type: "glossary", title: "Canary String",            subtitle: "Hidden string in benchmark data — if model generates it, contamination confirmed", navigate: "/", anchor: "#glossary" },
  { id: "g-judgdrift",      type: "glossary", title: "Judge Drift",              subtitle: "Changes in LLM-as-Judge behavior across model versions", navigate: "/", anchor: "#glossary" },
  { id: "g-pertvar",        type: "glossary", title: "Perturbation Variance",    subtitle: "Change in model performance when inputs are slightly modified", navigate: "/", anchor: "#glossary" },
];

// Build benchmark results from the data file
const BENCHMARK_RESULTS: SearchResult[] = categories.flatMap((cat) =>
  cat.benchmarks.map((b) => ({
    id: `bench-${b.name.toLowerCase().replace(/\s+/g, "-")}`,
    type: "benchmark" as ResultType,
    title: b.name,
    subtitle: `${cat.label} — ${b.year} — ${b.status}`,
    navigate: "/",
    anchor: "#benchmarks",
  }))
);

const ALL_RESULTS: SearchResult[] = [
  ...PAGE_RESULTS,
  ...SECTION_RESULTS,
  ...BENCHMARK_RESULTS,
  ...PAPER_RESULTS,
  ...GLOSSARY_RESULTS,
];

// ── Label & color per type ──────────────────────────────────────

const TYPE_META: Record<ResultType, { label: string; bg: string; fg: string }> = {
  page:      { label: "PAGE",      bg: "#FF4D00", fg: "#000000" },
  section:   { label: "SECTION",   bg: "#000000", fg: "#FFFFFF" },
  benchmark: { label: "BENCHMARK", bg: "#222222", fg: "#FF4D00" },
  paper:     { label: "PAPER",     bg: "#333333", fg: "#FFFFFF" },
  glossary:  { label: "GLOSSARY",  bg: "#FFFFFF", fg: "#000000" },
  metric:    { label: "METRIC",    bg: "#444444", fg: "#CCCCCC" },
};

// ── Helpers ─────────────────────────────────────────────────────

function score(result: SearchResult, q: string): number {
  const ql = q.toLowerCase();
  const tl = result.title.toLowerCase();
  const sl = result.subtitle.toLowerCase();
  if (tl === ql) return 100;
  if (tl.startsWith(ql)) return 80;
  if (tl.includes(ql)) return 60;
  if (sl.includes(ql)) return 30;
  return 0;
}

function search(q: string): SearchResult[] {
  if (!q.trim()) return [...PAGE_RESULTS, ...SECTION_RESULTS].slice(0, 12);
  return ALL_RESULTS
    .map((r) => ({ r, s: score(r, q) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 18)
    .map(({ r }) => r);
}

// ── Component ───────────────────────────────────────────────────

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = search(query);

  // Reset on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Keep active item in view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activeIdx}"]`) as HTMLElement | null;
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  const handleSelect = useCallback((result: SearchResult) => {
    onClose();
    if (result.navigate === "/" && result.anchor) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(result.anchor!);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      navigate(result.navigate);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [navigate, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[activeIdx]) handleSelect(results[activeIdx]);
    } else if (e.key === "Escape") {
      onClose();
    }
  }, [results, activeIdx, handleSelect, onClose]);

  if (!open) return null;

  return (
    // Overlay
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.72)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "10vh",
        backdropFilter: "blur(2px)",
      }}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 680,
          margin: "0 1rem",
          background: "#FFFFFF",
          border: "2px solid #000000",
          boxShadow: "8px 8px 0 #FF4D00",
          display: "flex",
          flexDirection: "column",
          maxHeight: "75vh",
          overflow: "hidden",
        }}
      >
        {/* Search input row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "2px solid #000000",
            padding: "0 1rem",
            gap: "0.75rem",
            flexShrink: 0,
          }}
        >
          {/* Search icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5" stroke="#000" strokeWidth="2"/>
            <path d="M11 11L14 14" stroke="#000" strokeWidth="2" strokeLinecap="square"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="SEARCH BENCHMARKS, PAPERS, GLOSSARY..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIdx(0); }}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              border: "none",
              outline: "none",
              padding: "1rem 0",
              background: "transparent",
              color: "#000000",
            }}
          />
          {/* ESC hint */}
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.48rem",
              letterSpacing: "0.06em",
              color: "#888888",
              border: "1px solid #CCCCCC",
              padding: "0.15rem 0.4rem",
              flexShrink: 0,
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            ESC
          </span>
        </div>

        {/* Results list */}
        <div
          ref={listRef}
          style={{
            overflowY: "auto",
            flex: 1,
            scrollbarWidth: "thin",
            scrollbarColor: "#FF4D00 #EEEEEE",
          }}
        >
          {results.length === 0 && (
            <div
              style={{
                padding: "3rem",
                textAlign: "center",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#888888",
              }}
            >
              NO RESULTS FOR "{query.toUpperCase()}"
            </div>
          )}

          {/* Group header when empty query */}
          {!query.trim() && (
            <div
              style={{
                padding: "0.5rem 1rem 0.25rem",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.48rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#AAAAAA",
                borderBottom: "1px solid #F0F0F0",
              }}
            >
              QUICK NAVIGATION
            </div>
          )}

          {results.map((result, idx) => {
            const meta = TYPE_META[result.type];
            const isActive = idx === activeIdx;
            return (
              <div
                key={result.id}
                data-idx={idx}
                onClick={() => handleSelect(result)}
                onMouseEnter={() => setActiveIdx(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.7rem 1rem",
                  cursor: "pointer",
                  background: isActive ? "#FFF5F0" : "#FFFFFF",
                  borderBottom: "1px solid #F5F5F5",
                  borderLeft: isActive ? "3px solid #FF4D00" : "3px solid transparent",
                  transition: "background 0.08s linear, border-color 0.08s linear",
                }}
              >
                {/* Type badge */}
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.42rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: meta.bg,
                    color: meta.fg,
                    padding: "0.15rem 0.4rem",
                    flexShrink: 0,
                    minWidth: 68,
                    textAlign: "center",
                    border: meta.bg === "#FFFFFF" ? "1px solid #000" : "none",
                  }}
                >
                  {meta.label}
                </span>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      color: "#000000",
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {result.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.5rem",
                      letterSpacing: "0.03em",
                      color: "#888888",
                      lineHeight: 1.4,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {result.subtitle}
                  </div>
                </div>

                {/* Arrow */}
                {isActive && (
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#FF4D00",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer hint bar */}
        <div
          style={{
            borderTop: "1px solid #E5E5E5",
            padding: "0.5rem 1rem",
            display: "flex",
            gap: "1.25rem",
            flexShrink: 0,
            background: "#FAFAFA",
          }}
        >
          {[
            ["↑↓", "navigate"],
            ["↵", "select"],
            ["ESC", "close"],
            ["⌘K", "toggle"],
          ].map(([key, label]) => (
            <span key={key} style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.48rem",
                  letterSpacing: "0.04em",
                  border: "1px solid #CCCCCC",
                  padding: "0.1rem 0.35rem",
                  color: "#444444",
                }}
              >
                {key}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.44rem",
                  letterSpacing: "0.06em",
                  color: "#AAAAAA",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </span>
            </span>
          ))}
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.44rem",
              letterSpacing: "0.06em",
              color: "#CCCCCC",
              textTransform: "uppercase",
            }}
          >
            {ALL_RESULTS.length} INDEXED ITEMS
          </span>
        </div>
      </div>
    </div>
  );
}
