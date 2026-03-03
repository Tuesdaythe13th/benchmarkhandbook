/*
 * Footer — Brutalist footer with zcal.co/tuesday CTA
 * Black background | Orange accents | Space Mono metadata
 * Design: Industrial Manifesto Brutalism
 */

export default function Footer() {
  return (
    <footer style={{ background: "#000000", color: "#FFFFFF" }}>

      {/* ─── SPEAK TO TUESDAY CTA ─── */}
      <div
        style={{
          background: "#FF4D00",
          borderTop: "2px solid #000000",
          borderBottom: "2px solid #000000",
          padding: "4rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          {/* Left: copy */}
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#000000",
                marginBottom: "0.75rem",
                opacity: 0.7,
              }}
            >
              WORK WITH TUESDAY
            </div>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.88,
                color: "#000000",
                margin: "0 0 1rem 0",
              }}
            >
              SPEAK TO ME
              <br />
              DIRECTLY.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                color: "#000000",
                maxWidth: 560,
                margin: 0,
                opacity: 0.8,
              }}
            >
              Custom evaluation design, multicultural benchmark architecture, agentic system assessment, 
              human annotation workflows, safety red-teaming, and governance-grade AI evaluation strategy. 
              Book a direct session.
            </p>
          </div>

          {/* Right: CTA button */}
          <div style={{ flexShrink: 0 }}>
            <a
              href="https://zcal.co/tuesday"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#FF4D00",
                background: "#000000",
                border: "2px solid #000000",
                padding: "1.25rem 2.5rem",
                textDecoration: "none",
                transition: "background 0.1s linear, color 0.1s linear, transform 0.1s linear",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#FFFFFF";
                el.style.color = "#000000";
                el.style.transform = "translateX(4px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#000000";
                el.style.color = "#FF4D00";
                el.style.transform = "none";
              }}
            >
              BOOK A SESSION ↗
            </a>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#000000",
                marginTop: "0.75rem",
                opacity: 0.6,
                textAlign: "center",
              }}
            >
              zcal.co/tuesday
            </div>
          </div>
        </div>
      </div>

      {/* ─── STANDARD FOOTER ─── */}
      <div
        style={{
          borderTop: "2px solid #FF4D00",
          padding: "3rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "2.5rem",
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
                margin: "0 0 1rem 0",
              }}
            >
              Benchmarking & Evaluation Reference Guide.
              The 2026 Field Manual for governance-grade AI evaluation.
            </p>
            <a
              href="https://zcal.co/tuesday"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#FF4D00",
                textDecoration: "none",
                border: "1px solid #FF4D00",
                padding: "0.35rem 0.75rem",
                transition: "background 0.1s linear, color 0.1s linear",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#FF4D00";
                el.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "#FF4D00";
              }}
            >
              SPEAK TO TUESDAY ↗
            </a>
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
              { label: "VERSION", value: "1.1.0" },
              { label: "STATUS", value: "PUBLIC REFERENCE" },
              { label: "REVISED", value: "MAR 2026" },
              { label: "BENCHMARKS", value: "51 CATALOGUED" },
              { label: "CEMETERY", value: "9 ENTRIES" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.35rem 0",
                  borderBottom: "1px solid #222222",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
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
                    fontSize: "0.55rem",
                    letterSpacing: "0.04em",
                    color: "#FFFFFF",
                    textAlign: "right",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Eval Guide sections */}
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
              EVAL GUIDE
            </div>
            {[
              { label: "01 — Foundations", href: "#foundations" },
              { label: "02 — BBOM", href: "#bbom" },
              { label: "03 — Benchmark Catalog", href: "#benchmarks" },
              { label: "03B — Key Research Orgs", href: "#resources" },
              { label: "03C — Benchmark Cemetery", href: "#cemetery" },
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
                  fontSize: "0.55rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#888888",
                  textDecoration: "none",
                  padding: "0.28rem 0",
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

          {/* Other pages */}
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
              OTHER PAGES
            </div>
            {[
              { label: "Safety & Harm Taxonomy", href: "/safety" },
              { label: "Multicultural Evaluation", href: "/multicultural" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#888888",
                  textDecoration: "none",
                  padding: "0.28rem 0",
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

            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "1rem",
                marginTop: "1.5rem",
              }}
            >
              EXTERNAL RESOURCES
            </div>
            {[
              { label: "Epoch AI", href: "https://epoch.ai/" },
              { label: "LMArena / Chatbot Arena", href: "https://lmarena.ai/" },
              { label: "MLCommons AILuminate", href: "https://github.com/mlcommons/ailuminate" },
              { label: "Culture Is All You Need", href: "https://docs.google.com/document/d/1Tx37Uz8yjdbK0BMXS9oOobMdgbbodDAFG03vRjgAW5I/edit?tab=t.0" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#888888",
                  textDecoration: "none",
                  padding: "0.28rem 0",
                  transition: "color 0.1s linear",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#FF4D00";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#888888";
                }}
              >
                {item.label} ↗
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
          <a
            href="https://zcal.co/tuesday"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#FF4D00",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "#FF4D00";
            }}
          >
            SPEAK TO TUESDAY → ZCAL.CO/TUESDAY
          </a>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#555555",
            }}
          >
            BUILT FROM: LLM EVALUATION GUIDEBOOK · AGENTIC DESIGN PATTERNS · 2026 RESEARCH
          </span>
        </div>
      </div>
    </footer>
  );
}
