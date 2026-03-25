/*
 * MetricsGlossary — Evaluation Metrics Reference
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 */

import { useState, useMemo } from "react";
import Nav from "@/components/Nav";
import { METRICS, UNIQUE_CATEGORIES, type Metric } from "@/data/metrics";

const TREND_COLORS: Record<string, string> = {
  higher: "#00A86B",
  lower: "#FF4D00",
  neutral: "#888888",
};

const TREND_LABELS: Record<string, string> = {
  higher: "↑ HIGHER",
  lower: "↓ LOWER",
  neutral: "≈ VARIES",
};

function TrendBadge({ dir, label }: { dir: string; label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.15rem 0.45rem",
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.42rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#FFFFFF",
        background: TREND_COLORS[dir] ?? "#888888",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      {TREND_LABELS[dir]} · {label}
    </span>
  );
}

function MetricRow({ metric, idx }: { metric: Metric; idx: number }) {
  const [open, setOpen] = useState(false);
  const isEven = idx % 2 === 0;

  return (
    <div
      style={{
        borderBottom: "1px solid #E0E0E0",
        background: open ? "#FFF5F0" : isEven ? "#FFFFFF" : "#FAFAFA",
        transition: "background 0.1s linear",
      }}
    >
      {/* Collapsed row */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "2fr 1.4fr 0.9fr 28px",
          alignItems: "center",
          gap: "0",
          padding: "0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Name */}
        <div
          style={{
            padding: "0.85rem 1.25rem",
            borderRight: "1px solid #E0E0E0",
          }}
        >
          <div
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "0.82rem",
              letterSpacing: "-0.01em",
              color: "#000000",
              marginBottom: "0.2rem",
            }}
          >
            {metric.name}
          </div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.42rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#888888",
            }}
          >
            {metric.category}
          </div>
        </div>

        {/* Task */}
        <div
          style={{
            padding: "0.85rem 1.25rem",
            borderRight: "1px solid #E0E0E0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.68rem",
            color: "#555555",
            lineHeight: 1.4,
          }}
        >
          {metric.task}
        </div>

        {/* Trend badge */}
        <div
          style={{
            padding: "0.85rem 1.25rem",
            borderRight: "1px solid #E0E0E0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TrendBadge dir={metric.trendDir} label={metric.trend} />
        </div>

        {/* Chevron */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FF4D00",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            transition: "transform 0.15s linear",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          ›
        </div>
      </button>

      {/* Expanded detail */}
      {open && (
        <div
          style={{
            padding: "0 1.25rem 1.25rem 1.25rem",
            borderTop: "1px solid #FFD5C0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.42rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "0.4rem",
                paddingTop: "0.85rem",
              }}
            >
              Description
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.76rem",
                lineHeight: 1.65,
                color: "#333333",
                margin: 0,
              }}
            >
              {metric.description}
            </p>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.42rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "0.4rem",
                paddingTop: "0.85rem",
              }}
            >
              Target Audience
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.76rem",
                lineHeight: 1.65,
                color: "#333333",
                margin: "0 0 0.75rem",
              }}
            >
              {metric.audience}
            </p>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.42rem",
                letterSpacing: "0.08em",
                color: "#AAAAAA",
              }}
            >
              Sources: {metric.sources}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const CATEGORY_GROUPS = [
  { key: "all", label: "All Metrics" },
  { key: "accuracy", label: "Accuracy" },
  { key: "safety", label: "Safety" },
  { key: "fairness", label: "Fairness" },
  { key: "performance", label: "Performance" },
  { key: "similarity", label: "Similarity" },
  { key: "quality", label: "Quality" },
  { key: "agreement", label: "Agreement" },
  { key: "efficiency", label: "Efficiency" },
];

function matchesGroup(category: string, key: string): boolean {
  if (key === "all") return true;
  const c = category.toLowerCase();
  const map: Record<string, string[]> = {
    accuracy: ["accuracy", "lexical", "alignment", "truthfulness", "soft label", "logical reasoning", "semantic accuracy", "coding", "math", "knowledge", "rag quality", "multilingual", "agentic"],
    safety: ["safety", "robustness", "responsibility", "privacy", "utility"],
    fairness: ["fairness", "bias", "cultural", "counterfactual", "stereotyp", "disparate"],
    performance: ["performance", "ranking", "effectiveness", "graph", "perception", "trustworthiness", "explainability", "model quality", "best practice", "key capabilities", "reasoning"],
    similarity: ["similarity", "semantic similarity", "text similarity"],
    quality: ["quality", "content quality", "creative", "engagement", "integrity", "relevance", "objective criteria", "dialogue"],
    agreement: ["agreement", "reliability", "inter-annotator", "disagreement", "consistency"],
    efficiency: ["efficiency", "efficiency metrics", "latency", "uncertainty", "calibration", "rationality", "behavioral"],
  };
  return (map[key] ?? []).some((kw) => c.includes(kw));
}

export default function MetricsGlossary() {
  const [activeGroup, setActiveGroup] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return METRICS.filter((m) => {
      const matchGroup = matchesGroup(m.category, activeGroup);
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.task.toLowerCase().includes(q);
      return matchGroup && matchSearch;
    });
  }, [activeGroup, search]);

  const stats = useMemo(() => {
    const higher = METRICS.filter((m) => m.trendDir === "higher").length;
    const lower = METRICS.filter((m) => m.trendDir === "lower").length;
    const neutral = METRICS.filter((m) => m.trendDir === "neutral").length;
    return { total: METRICS.length, higher, lower, neutral };
  }, []);

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background: "#000000",
          padding: "6rem 2rem 4rem",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1rem",
            }}
          >
            ARTIFEX LABS · EVALUATION METRICS REFERENCE · MARCH 2026
          </div>
          <h1
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#FFFFFF",
              margin: "0 0 2rem",
            }}
          >
            METRICS
            <br />
            <span style={{ color: "#FF4D00" }}>GLOSSARY</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#AAAAAA",
              maxWidth: 720,
              marginBottom: "2.5rem",
            }}
          >
            A comprehensive reference for evaluation metrics used across LLM benchmarking, safety, fairness, 
            alignment, and agentic task assessment. Covers lexical, semantic, statistical, and 
            model-based measurement approaches drawn from {stats.total} metrics across current NLP and AI research.
          </p>

          {/* Stat strip */}
          <div style={{ display: "flex", gap: "0", border: "2px solid #333333" }}>
            {[
              { label: "Total Metrics", value: stats.total, color: "#FFFFFF" },
              { label: "Higher is Better", value: stats.higher, color: "#00A86B" },
              { label: "Lower is Better", value: stats.lower, color: "#FF4D00" },
              { label: "Context-Dependent", value: stats.neutral, color: "#888888" },
              { label: "Categories", value: UNIQUE_CATEGORIES.length, color: "#FFAA00" },
            ].map((s, i, arr) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  padding: "1rem 1.25rem",
                  borderRight: i < arr.length - 1 ? "2px solid #333333" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "2rem",
                    color: s.color,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.42rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#666666",
                    marginTop: "0.25rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Search bar */}
      <section
        style={{
          position: "sticky",
          top: 98,
          zIndex: 50,
          background: "#FFFFFF",
          borderBottom: "2px solid #000000",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 0,
            justifyContent: "space-between",
          }}
        >
          {/* Category pills */}
          <div style={{ display: "flex", gap: 0, overflowX: "auto", scrollbarWidth: "none" }}>
            {CATEGORY_GROUPS.map((g) => {
              const active = activeGroup === g.key;
              return (
                <button
                  key={g.key}
                  onClick={() => setActiveGroup(g.key)}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.5rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "0.7rem 0.9rem",
                    border: "none",
                    borderBottom: active ? "2px solid #FF4D00" : "2px solid transparent",
                    borderRight: "1px solid #E0E0E0",
                    background: active ? "#FFF5F0" : "transparent",
                    color: active ? "#FF4D00" : "#555555",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.1s linear",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.background = "#F5F5F5";
                      (e.currentTarget as HTMLElement).style.color = "#000000";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#555555";
                    }
                  }}
                >
                  {g.label}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.45rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#AAAAAA",
                padding: "0 0.75rem",
                borderLeft: "2px solid #000000",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              SEARCH
            </span>
            <input
              type="text"
              placeholder="metric name, category, task..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                border: "none",
                borderLeft: "1px solid #E0E0E0",
                padding: "0.7rem 1rem",
                outline: "none",
                width: 240,
                background: "transparent",
                color: "#000000",
              }}
            />
          </div>
        </div>
      </section>

      {/* Table */}
      <section style={{ padding: "2rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>

          {/* Result count */}
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.52rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "1rem",
            }}
          >
            Showing {filtered.length} of {stats.total} metrics
            {search && ` · query: "${search}"`}
          </div>

          {/* Table */}
          <div style={{ border: "2px solid #000000" }}>
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.4fr 0.9fr 28px",
                background: "#000000",
                borderBottom: "2px solid #000000",
              }}
            >
              {["Metric / Category", "Application Task", "Ideal Score Trend", ""].map((h, i) => (
                <div
                  key={h || i}
                  style={{
                    padding: "0.6rem 1.25rem",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.45rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#FF4D00",
                    borderRight: i < 3 ? "1px solid #333333" : "none",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div
                style={{
                  padding: "3rem",
                  textAlign: "center",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#AAAAAA",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                No metrics match — try adjusting your filters.
              </div>
            ) : (
              filtered.map((m, i) => <MetricRow key={m.name} metric={m} idx={i} />)
            )}
          </div>
        </div>
      </section>

      {/* Category breakdown */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#000000",
          borderTop: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
              }}
            >
              TAXONOMY
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              METRICS BY EVALUATION CATEGORY
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 0,
              border: "2px solid #333333",
            }}
          >
            {UNIQUE_CATEGORIES.map((cat, i) => {
              const count = METRICS.filter((m) => m.category === cat).length;
              return (
                <div
                  key={cat}
                  style={{
                    padding: "1rem 1.25rem",
                    borderRight: (i + 1) % 3 !== 0 ? "1px solid #333333" : "none",
                    borderBottom: "1px solid #333333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setActiveGroup("all");
                    setSearch(cat.split(" /")[0].toLowerCase());
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#111111";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      color: "#CCCCCC",
                      lineHeight: 1.3,
                    }}
                  >
                    {cat}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "1.2rem",
                      color: "#FF4D00",
                      flexShrink: 0,
                    }}
                  >
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footnote */}
      <section style={{ padding: "2rem", background: "#FAFAFA", borderTop: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.48rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#AAAAAA",
              marginBottom: "0.75rem",
            }}
          >
            SOURCES — 61 REFERENCES
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              color: "#888888",
              lineHeight: 1.6,
              maxWidth: 900,
              margin: 0,
            }}
          >
            References [1–61] span: ACL Anthology (EMNLP 2025, CoMeDi), NeurIPS Datasets &amp; Benchmarks 2024, arXiv preprints, 
            MIT Press Computational Linguistics, NIST AI 800-3, DataCamp, DagsHub, Hugging Face datasets, Evidently AI, 
            Microsoft Learn, Codecademy, WMT 2025, and domain-specific venues covering safety, medical NLP, cultural AI, 
            and multimodal evaluation. Source numbers in brackets correspond to the original research papers cited in the 
            Artifex Labs Benchmark Handbook.
          </p>
        </div>
      </section>
    </div>
  );
}
