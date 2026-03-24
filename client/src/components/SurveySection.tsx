/*
 * SurveySection — Knowledge Assessment
 * Design: Industrial Manifesto Brutalism
 */

export default function SurveySection() {
  return (
    <section id="survey" style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "2px solid #000000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ borderBottom: "2px solid #000000", paddingBottom: "2rem", marginBottom: "3rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#000000", marginBottom: "0.75rem" }}>
            SECTION 12 — KNOWLEDGE ASSESSMENT
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "1rem" }}>
            <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase" as const, letterSpacing: "-0.04em", lineHeight: 0.85, color: "#000000", margin: 0 }}>
              TEST<br />YOUR<br /><span style={{ color: "#FF4D00" }}>KNOWLEDGE</span>
            </h2>
            <div style={{ maxWidth: 420 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#333333", lineHeight: 1.7, margin: "0 0 1rem 0" }}>
                <strong>2026 Global Alignment: The Stakeholder Inquiry</strong><br /><br />
                This survey aims to understand your views on AI's impact across various dimensions. We'll adjust the tone and complexity of our questions based on your self-identification. Please feel free to share your honest thoughts. This assessment covers benchmark design, construct validity, LLM-as-Judge methodology, safety evaluation, agentic evaluation patterns, and stakeholder needs for modern AI evaluation frameworks.
              </p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" as const }}>
                {["BENCHMARK DESIGN", "SAFETY EVALS", "AGENTIC PATTERNS", "LLM-AS-JUDGE", "CONSTRUCT VALIDITY"].map(t => (
                  <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.06em", padding: "0.2rem 0.5rem", border: "1px solid #000000", color: "#000000" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ border: "2px solid #000000", background: "#000000" }}>
          <div style={{ background: "#000000", padding: "0.75rem 1.5rem", borderBottom: "2px solid #FF4D00", display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF4D00" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#333333" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#333333" }} />
            </div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.08em" }}>
              ARTIFEX LABS — 2026 STAKEHOLDER INQUIRY v1.0
            </span>
          </div>
          <div>
            <iframe
              src="https://www.formaly.io/embed/f88bcfe8-081d-47ec-8a87-92519dca7c7b?mode=chat&theme=light"
              width="100%"
              height={600}
              frameBorder={0}
              allow="clipboard-write"
              style={{ border: "none", display: "block" }}
              title="Artifex Labs Knowledge Assessment"
            />
          </div>
        </div>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {[
            { n: "01", label: "Benchmark Design", desc: "Construct validity, contamination, saturation" },
            { n: "02", label: "Safety Evaluation", desc: "AILuminate, harm taxonomy, red-teaming" },
            { n: "03", label: "Agentic Patterns", desc: "Trajectory metrics, multi-agent, HITL" },
            { n: "04", label: "LLM-as-Judge", desc: "Bias types, calibration, judge selection" },
            { n: "05", label: "Multicultural", desc: "WEIRD bias, WBI, cultural validity" },
          ].map(topic => (
            <div key={topic.n} style={{ border: "2px solid #000000", padding: "1rem" }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.25rem", color: "#FF4D00", lineHeight: 1, marginBottom: "0.3rem" }}>{topic.n}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", textTransform: "uppercase" as const, letterSpacing: "0.06em", color: "#000000", marginBottom: "0.3rem" }}>{topic.label}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#555555" }}>{topic.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
