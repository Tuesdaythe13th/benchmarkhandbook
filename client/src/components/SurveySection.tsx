/*
 * SurveySection — Brutalist Industrial Manifesto
 * Knowledge Assessment embedded via Formaly iframe
 * Orange #FF4D00 | Black #000 | White #FFF
 */

export default function SurveySection() {
  return (
    <section id="survey" style={{ background: "#FF4D00", padding: "5rem 0", borderTop: "2px solid #000000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ borderBottom: "2px solid #000000", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#000000", marginBottom: "0.75rem" }}>
            SECTION 11 — KNOWLEDGE ASSESSMENT
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.85, color: "#000000", margin: 0 }}>
              TEST YOUR<br />KNOWLEDGE
            </h2>
            <div style={{ maxWidth: 420 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#000000", lineHeight: 1.7, margin: "0 0 1rem 0" }}>
                How well do you understand modern AI evaluation? This assessment covers benchmark selection, evaluation design, LLM-as-judge methodology, agentic evaluation, and safety frameworks.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {["BENCHMARKS", "AGENTIC EVAL", "SAFETY", "LLM-AS-JUDGE", "DESIGN PATTERNS"].map((tag) => (
                  <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", padding: "0.25rem 0.6rem", border: "1px solid #000000", color: "#000000" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ border: "2px solid #000000", background: "#FFFFFF", overflow: "hidden" }}>
          <div style={{ background: "#000000", padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#FF4D00", letterSpacing: "0.1em" }}>
              ARTIFEX LABS — EVAL KNOWLEDGE CHECK
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF4D00" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#666666" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#666666" }} />
            </div>
          </div>
          <iframe
            src="https://www.formaly.io/embed/f88bcfe8-081d-47ec-8a87-92519dca7c7b?mode=chat&theme=light"
            width="100%"
            height="600"
            frameBorder={0}
            allow="clipboard-write"
            style={{ border: "none", display: "block" }}
            title="Artifex Labs Eval Knowledge Assessment"
          />
        </div>

        <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#000000", letterSpacing: "0.06em" }}>
            POWERED BY FORMALY.IO
          </div>
          <div style={{ flex: 1, height: "1px", background: "#000000", minWidth: 40 }} />
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#000000", letterSpacing: "0.06em" }}>
            COVERS ALL SECTIONS OF THIS GUIDE
          </div>
        </div>
      </div>
    </section>
  );
}
