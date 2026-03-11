/*
 * BenchmarksSection — Benchmark catalog by category
 * Updated to March 2026 with data from Epoch AI / community sources
 * White background | Tabbed by domain | Benchmark pills
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 */

import { useState } from "react";
import { categories, statusColors } from "@/data/benchmarks";

export default function BenchmarksSection() {
  const [activeTab, setActiveTab] = useState("reasoning");
  const [expandedBench, setExpandedBench] = useState<string | null>(null);

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
            BENCHMARK CATALOG 2026
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "#333333",
            maxWidth: 720,
            marginBottom: "2rem",
          }}
        >
          A curated reference of benchmarks organized by capability domain. Updated March 2026 from peer-reviewed sources and the Epoch AI benchmark database. Status indicators: <strong>ACTIVE</strong> (discriminative), <strong>SATURATED</strong> (lost discriminative power), <strong>EMERGING</strong> (recommended), <strong>CAUTION</strong> (contamination/validity risk).
        </p>

        {/* Status legend */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {Object.entries(statusColors).map(([status, colors]) => (
            <div
              key={status}
              style={{
                background: colors.bg,
                color: colors.color,
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                padding: "0.25rem 0.6rem",
                border: "2px solid #000000",
              }}
            >
              {status}
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
            borderBottom: "2px solid #000000",
            marginBottom: "2.5rem",
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
                padding: "0.6rem 1.2rem",
                border: "2px solid #000000",
                borderBottom: "none",
                background: activeTab === cat.id ? "#000000" : "transparent",
                color: activeTab === cat.id ? "#FF4D00" : "#000000",
                cursor: "pointer",
                transition: "background 0.1s linear, color 0.1s linear",
                marginBottom: "-2px",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== cat.id) {
                  (e.currentTarget as HTMLElement).style.background = "#FF4D00";
                  (e.currentTarget as HTMLElement).style.color = "#000000";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== cat.id) {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#000000";
                }
              }}
            >
              {cat.label}
              <span
                style={{
                  marginLeft: "0.4rem",
                  background: activeTab === cat.id ? "#FF4D00" : "#000000",
                  color: activeTab === cat.id ? "#000000" : "#FFFFFF",
                  padding: "0.05rem 0.3rem",
                  fontSize: "0.5rem",
                }}
              >
                {cat.benchmarks.length}
              </span>
            </button>
          ))}
        </div>

        {/* Benchmark grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "0",
            border: "2px solid #000000",
          }}
        >
          {activeCategory.benchmarks.map((bench, i) => {
            const isExpanded = expandedBench === bench.name;
            const sc = statusColors[bench.status];
            return (
              <div
                key={bench.name}
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "2px solid #000000" : "none",
                  borderBottom: "2px solid #000000",
                  padding: "1.5rem",
                  background: isExpanded ? "#fff8f5" : "#FFFFFF",
                  transition: "background 0.15s linear",
                  cursor: "pointer",
                }}
                onClick={() => setExpandedBench(isExpanded ? null : bench.name)}
                onMouseEnter={(e) => {
                  if (!isExpanded) (e.currentTarget as HTMLElement).style.background = "#fff8f5";
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#888888",
                        letterSpacing: "0.08em",
                        display: "block",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {bench.year} · {bench.type}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        color: "#000000",
                        margin: 0,
                      }}
                    >
                      {bench.name}
                    </h3>
                  </div>
                  <span
                    style={{
                      background: sc.bg,
                      color: sc.color,
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.5rem",
                      letterSpacing: "0.08em",
                      padding: "0.2rem 0.5rem",
                      flexShrink: 0,
                      marginLeft: "0.5rem",
                    }}
                  >
                    {bench.status}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                    color: "#444444",
                    margin: 0,
                  }}
                >
                  {bench.desc}
                </p>

                {isExpanded && (
                  <div style={{ marginTop: "1rem", borderTop: "1px solid #000000", paddingTop: "1rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
                      {bench.examples && (
                        <div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", color: "#888888", textTransform: "uppercase", marginBottom: "0.2rem" }}>Examples</div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#000000" }}>{bench.examples}</div>
                        </div>
                      )}
                      {bench.license && (
                        <div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", color: "#888888", textTransform: "uppercase", marginBottom: "0.2rem" }}>License</div>
                          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#000000" }}>{bench.license}</div>
                        </div>
                      )}
                    </div>
                    {bench.paper && (
                      <a
                        href={bench.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: "inline-block",
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.55rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#FF4D00",
                          textDecoration: "none",
                          border: "2px solid #FF4D00",
                          padding: "0.3rem 0.7rem",
                          transition: "background 0.1s linear, color 0.1s linear",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#FF4D00";
                          (e.currentTarget as HTMLElement).style.color = "#000000";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "#FF4D00";
                        }}
                      >
                        → PAPER / SOURCE
                      </a>
                    )}
                  </div>
                )}

                <div style={{ marginTop: "0.75rem", fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#888888", letterSpacing: "0.06em" }}>
                  {isExpanded ? "▲ COLLAPSE" : "▼ EXPAND DETAILS"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contamination doctrine */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.25rem 1.5rem",
            background: "#fff3ee",
            border: "2px solid #000000",
            borderLeft: "6px solid #FF4D00",
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
            CONTAMINATION DOCTRINE — MARCH 2026
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
            Assume that any dataset publicly available on the internet is or will be contaminated. Mitigations: canary strings (like BigBench), encrypted/gated access, dynamic benchmarks with regular updates, and post-hoc contamination detection via generation perplexity or adversarial prompt variants. A contaminated dataset can still provide signal during training — contamination does not equal uselessness. Per the arXiv preprint "When AI Benchmarks Plateau" (Feb 2026): expert-curated benchmarks show lower saturation at comparable ages than crowdsourced benchmarks. Prioritize expert-designed, dynamically updated, or algorithmically generated benchmarks for competitive evaluation.
          </p>
        </div>
      </div>
    </section>
  );
}
