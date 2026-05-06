/*
 * Footer — Brutalist footer
 * Black background | Orange accents | Space Mono metadata
 */

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000000",
        color: "#FFFFFF",
        borderTop: "2px solid #FF4D00",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "1.5rem",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            ARTIFEX
            <br />
            <span style={{ color: "#FF4D00" }}>LABS</span>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              lineHeight: 1.5,
              color: "#888888",
              margin: 0,
            }}
          >
            Benchmarking & Evaluation Reference Guide.
            The 2026 Field Manual for governance-grade AI evaluation.
          </p>
        </div>

        {/* Document info */}
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1rem",
            }}
          >
            DOCUMENT INFO
          </div>
          {[
            { label: "DOC ID", value: "BBGFM-2026-001" },
            { label: "VERSION", value: "2.0.0" },
            { label: "STATUS", value: "PUBLIC REFERENCE" },
            { label: "REVISED", value: "MAY 6, 2026" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.35rem 0",
                borderBottom: "1px solid #222222",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#666666",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.04em",
                  color: "#FFFFFF",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Sections */}
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1rem",
            }}
          >
            SECTIONS
          </div>
          {[
            { label: "01 — Foundations", href: "#foundations" },
            { label: "02 — BBOM", href: "#bbom" },
            { label: "03 — Benchmark Catalog", href: "#benchmarks" },
            { label: "04 — Agentic Evaluation", href: "#agentic" },
            { label: "05 — Scoring & Judgment", href: "#scoring" },
            { label: "06 — Safety & Governance", href: "#governance" },
            { label: "07 — Glossary", href: "#glossary" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector(item.href);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "block",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#888888",
                textDecoration: "none",
                padding: "0.3rem 0",
                transition: "color 0.1s linear",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#FF4D00";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#888888";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1440,
          margin: "2rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid #222222",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#555555",
          }}
        >
          © 2026 ARTIFEX LABS. ALL RIGHTS RESERVED.
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#555555",
          }}
        >
          BUILT FROM: LLM EVALUATION GUIDEBOOK · AGENTIC DESIGN PATTERNS
        </span>
      </div>
    </footer>
  );
}
