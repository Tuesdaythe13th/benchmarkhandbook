/*
 * BenchmarksSection — Benchmark catalog by category
 * White background | Tabbed by domain | Benchmark pills with paper links
 * 2026 edition — uses shared benchmarks.ts data
 */

import { useState } from "react";
import { categories, statusColors } from "../data/benchmarks";

const STATUS_TOOLTIPS: Record<string, string> = {
  ACTIVE: "Discriminative — still separates strong from weak models. Recommended for current evaluations.",
  SATURATED: "Lost discriminative power — most frontier models score near ceiling. Use only for pretraining ablations.",
  EMERGING: "Newly released and recommended — not yet widely adopted but addresses gaps in the current suite.",
  CAUTION: "Use with caution — known contamination risk, construct validity concerns, or documented gaming.",
};

export default function BenchmarksSection() {
  const [activeTab, setActiveTab] = useState("reasoning");
  const [hoveredStatus, setHoveredStatus] = useState<string | null>(null);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="benchmarks" style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
            }}
          >
            SECTION 03
          </span>
          <h2
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#000000",
              margin: 0,
            }}
          >
            BENCHMARK
            <br />
            CATALOG 2026
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.6,
            color: "#555555",
            maxWidth: 700,
            marginBottom: "2.5rem",
          }}
        >
          A curated reference of benchmarks organized by capability domain. Status indicators reflect
          current community usage — hover any badge for its definition. <strong>ACTIVE</strong> (discriminative),{" "}
          <strong>SATURATED</strong> (lost discriminative power),{" "}
          <strong>EMERGING</strong> (recommended, newly released),{" "}
          <strong>CAUTION</strong> (contamination or validity risk).
        </p>

        {/* Status legend with hover tooltips */}
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap", alignItems: "flex-start" }}>
          {Object.entries(statusColors).map(([status, colors]) => (
            <div
              key={status}
              style={{ position: "relative" }}
              onMouseEnter={() => setHoveredStatus(status)}
              onMouseLeave={() => setHoveredStatus(null)}
            >
              <span
                style={{
                  background: colors.bg,
                  color: colors.color,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.25rem 0.6rem",
                  fontWeight: 700,
                  cursor: "help",
                  display: "inline-block",
                  border: status === "SATURATED" ? "1px solid #cccccc" : "none",
                }}
              >
                {status}
              </span>
              {hoveredStatus === status && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 8px)",
                    left: 0,
                    zIndex: 100,
                    background: "#000000",
                    color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    lineHeight: 1.4,
                    padding: "0.6rem 0.9rem",
                    width: 220,
                    border: "1px solid #FF4D00",
                    pointerEvents: "none",
                  }}
                >
                  {STATUS_TOOLTIPS[status]}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: "2px solid #000000",
            marginBottom: "2.5rem",
            overflowX: "auto",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.75rem 1.25rem",
                border: "none",
                borderBottom: activeTab === cat.id ? "3px solid #FF4D00" : "3px solid transparent",
                background: activeTab === cat.id ? "#000000" : "#FFFFFF",
                color: activeTab === cat.id ? "#FF4D00" : "#000000",
                cursor: "pointer",
                transition: "all 0.1s linear",
                whiteSpace: "nowrap",
                marginBottom: -2,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Benchmark cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1px",
            background: "#000000",
            border: "2px solid #000000",
          }}
        >
          {activeCategory.benchmarks.map((bench) => {
            const statusStyle = statusColors[bench.status];
            return (
              <div
                key={bench.name}
                style={{
                  background: "#FFFFFF",
                  padding: "1.75rem",
                  transition: "transform 0.15s linear, box-shadow 0.15s linear",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translate(4px, -4px)";
                  el.style.boxShadow = "-4px 4px 0px #000000";
                  el.style.zIndex = "1";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                  el.style.zIndex = "0";
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                      color: "#000000",
                      margin: 0,
                    }}
                  >
                    {bench.name}
                  </h4>
                  <span
                    style={{
                      background: statusStyle.bg,
                      color: statusStyle.color,
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.5rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "0.15rem 0.4rem",
                      flexShrink: 0,
                      fontWeight: 700,
                      border: bench.status === "SATURATED" ? "1px solid #cccccc" : "none",
                    }}
                  >
                    {bench.status}
                  </span>
                </div>

                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#888888",
                    }}
                  >
                    {bench.year}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#FF4D00",
                      border: "1px solid #FF4D00",
                      padding: "0 0.3rem",
                    }}
                  >
                    {bench.type}
                  </span>
                  {bench.examples && (
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.5rem",
                        letterSpacing: "0.04em",
                        color: "#AAAAAA",
                      }}
                    >
                      {bench.examples} examples
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                    color: "#444444",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {bench.desc}
                </p>

                {/* Footer row: license + paper link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    marginTop: "0.25rem",
                    paddingTop: "0.6rem",
                    borderTop: "1px solid #EEEEEE",
                  }}
                >
                  {bench.license && (
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.48rem",
                        letterSpacing: "0.04em",
                        color: "#BBBBBB",
                        textTransform: "uppercase",
                      }}
                    >
                      {bench.license}
                    </span>
                  )}
                  {bench.paper && (
                    <a
                      href={bench.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.5rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#FF4D00",
                        textDecoration: "none",
                        border: "1px solid #FF4D00",
                        padding: "0.2rem 0.5rem",
                        transition: "background 0.1s linear, color 0.1s linear",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.background = "#FF4D00";
                        el.style.color = "#000000";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.background = "transparent";
                        el.style.color = "#FF4D00";
                      }}
                    >
                      PAPER ↗
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contamination note */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            borderLeft: "4px solid #FF4D00",
            background: "#fff3ee",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "0.5rem",
            }}
          >
            CONTAMINATION DOCTRINE
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              lineHeight: 1.5,
              color: "#333333",
              margin: 0,
            }}
          >
            Assume that any dataset publicly available on the internet is or will be contaminated.
            Mitigations: canary strings (like BigBench), encrypted/gated access, dynamic benchmarks with regular updates,
            and post-hoc contamination detection via generation perplexity or adversarial prompt variants.
            A contaminated dataset can still provide signal during training — contamination does not equal uselessness.
            See Chen et al. EMNLP 2025 for the definitive taxonomy of contamination types.
          </p>
        </div>
      </div>
    </section>
  );
}
