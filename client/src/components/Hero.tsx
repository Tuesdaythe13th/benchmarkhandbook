/*
 * Hero — Full-width brutalist hero
 * Black background | Orange accent | Archivo Black display
 * Spinning circular indicator | Space Mono metadata
 */

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "#000000",
        color: "#FFFFFF",
        padding: "5rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
        borderBottom: "2px solid #FF4D00",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Top metadata row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FF4D00",
              border: "1px solid #FF4D00",
              padding: "0.2rem 0.6rem",
            }}
          >
            DOC-2026-BBGFM-001
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
            }}
          >
            CLASSIFICATION: PUBLIC REFERENCE
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
            }}
          >
              REVISION: 4.0.0
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
            }}
          >
              © ARTIFEX LABS
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#000000",
              background: "#FF4D00",
              padding: "0.2rem 0.6rem",
              fontWeight: 700,
            }}
          >
              ⚠ STATUS: WORK IN PROGRESS
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
            }}
          >
              LAST UPDATED: MARCH 10, 2026
          </span>
        </div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: Main heading */}
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "1rem",
              }}
            >
              THE 2026 BENCHMARKING & EVIDENCE GOVERNANCE FIELD MANUAL
            </div>

            <h1
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.85,
                color: "#FFFFFF",
                margin: "0 0 1.5rem",
              }}
            >
              MODERN
              <br />
              <span style={{ color: "#FF4D00" }}>EVALS</span>
              <br />
              &amp; BENCHMARKS
            </h1>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#AAAAAA",
                maxWidth: 600,
                marginBottom: "2.5rem",
              }}
            >
              A comprehensive, standardized framework for the design, execution, and governance of AI benchmarks.
              Built from practical, real-world application experience scoring 15,000+ models over 3 years.
              Governance-grade. Auditable. Reproducible. On the road to becoming legally and forensically defensible.
            </p>

            {/* Contact row */}
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem", alignItems: "center" }}>
              <a href="mailto:general@artifex.fun" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#FF4D00", textDecoration: "none", border: "1px solid #FF4D00", padding: "0.3rem 0.7rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                ✉ GENERAL@ARTIFEX.FUN
              </a>
              <a href="https://zcal.co/tuesday" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#000000", background: "#FF4D00", textDecoration: "none", padding: "0.3rem 0.7rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                BOOK A SESSION ↗
              </a>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#666666" }}>
                TUESDAY — DIRECTOR OF RESEARCH @ ARTIFEX LABS
              </span>
            </div>

            {/* Stat row */}
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                { num: "11", label: "BBOM Layers" },
                { num: "5", label: "Behavioral Families" },
                { num: "14", label: "Agentic Patterns" },
                { num: "60+", label: "Benchmark References" },
              ].map((stat) => (
                <div key={stat.label} style={{ borderLeft: "3px solid #FF4D00", paddingLeft: "0.75rem" }}>
                  <div
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "2rem",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      color: "#FFFFFF",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#FF4D00",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Spinning circular indicator */}
          <div
            style={{
              position: "relative",
              width: 180,
              height: 180,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="hidden-mobile"
          >
            {/* Spinning ring */}
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              style={{
                position: "absolute",
                animation: "spin-slow 12s linear infinite",
              }}
            >
              <circle
                cx="90"
                cy="90"
                r="80"
                fill="none"
                stroke="#FF4D00"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
            </svg>
            {/* Inner text */}
            <div style={{ textAlign: "center", zIndex: 1 }}>
              <div
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "2.5rem",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "#FF4D00",
                }}
              >
                AI
              </div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginTop: "0.25rem",
                }}
              >
                EVAL
                <br />
                REFERENCE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Key doctrine */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid #333333",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              label: "LEGIBILITY",
              desc: "Turning complex model behavior into structured, understandable signals. Make failure modes visible under real-world load.",
            },
            {
              label: "AUDITABILITY",
              desc: "Ensuring any third party can reproduce an evaluation from its specification and manifest. Traceable provenance for all truth sources.",
            },
            {
              label: "PROVABILITY",
              desc: "Binding safety and performance claims to signed, immutable evidence logs. Results defensible in legal or regulatory settings.",
            },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", gap: "0.75rem" }}>
              <div
                style={{
                  width: 3,
                  background: "#FF4D00",
                  flexShrink: 0,
                  marginTop: "0.2rem",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#FF4D00",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    lineHeight: 1.5,
                    color: "#AAAAAA",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
