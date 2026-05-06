import Nav from "@/components/Nav";
import MarqueeTicker from "@/components/MarqueeTicker";
import { ARTIFEX_ORIGINALS } from "@/data/doctrineData";

const S = {
  mono: "'Space Mono', monospace" as const,
  head: "'Archivo Black', sans-serif" as const,
  body: "'Inter', sans-serif" as const,
  orange: "#FF4D00",
};

export default function DoctrineHero() {
  return (
    <>
      <Nav />
      {/* Hero */}
      <section style={{ background: "#000", padding: "6rem 2rem 4rem", borderBottom: `2px solid ${S.orange}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ fontFamily: S.mono, fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: "1rem" }}>
            ARTIFEX LABS · DEUS EX DOLORE · FINAL INTEGRATED SYNTHESIS
          </div>
          <h1 style={{ fontFamily: S.head, fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: "#FFF", margin: "0 0 1.5rem" }}>
            ZERO-DAY<br />
            <span style={{ color: S.orange }}>ETHICS</span>
          </h1>
          <p style={{ fontFamily: S.body, fontSize: "1.1rem", lineHeight: 1.5, color: "#AAA", maxWidth: 780, margin: "0 0 1.5rem" }}>
            A Metrological Framework for AI Evaluation, Benchmark Governance, and Evidentiary Assurance
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            {["TUES DAY — DIRECTOR OF RESEARCH", "ARTIFEX LABS", "MAY 2026"].map(t => (
              <span key={t} style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", background: "#111", color: "#888", padding: "0.3rem 0.7rem", border: "1px solid #333" }}>{t}</span>
            ))}
          </div>
          {/* Abstract */}
          <div style={{ borderLeft: `3px solid ${S.orange}`, paddingLeft: "1.5rem", maxWidth: 800 }}>
            <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.5rem" }}>ABSTRACT</div>
            <p style={{ fontFamily: S.body, fontSize: "0.82rem", lineHeight: 1.7, color: "#AAA", margin: "0 0 0.75rem" }}>
              AI evaluation operates under a profound evidentiary mismatch: benchmark scores are routinely used to justify deployment in safety-critical settings without the uncertainty characterization, construct-validity evidence, or governance documentation that mature measurement disciplines demand. This paper argues that AI evaluation must be reconceived as an <strong style={{ color: "#FFF" }}>evidentiary practice</strong>.
            </p>
            <p style={{ fontFamily: S.body, fontSize: "0.82rem", lineHeight: 1.7, color: "#AAA", margin: "0 0 0.75rem" }}>
              It introduces the <strong style={{ color: S.orange }}>Kinetic Threshold</strong> (ARTIFEX-original), the operational boundary where static benchmarks lose predictive adequacy. The framework is anchored in{" "}
              <a href="https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>JCGM 100:2008</a> and{" "}
              <a href="https://supreme.justia.com/cases/federal/us/509/579/" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>Daubert v. Merrell Dow (1993)</a>.
            </p>
            <p style={{ fontFamily: S.body, fontSize: "0.82rem", lineHeight: 1.7, color: "#AAA", margin: 0 }}>
              A benchmark output is admissible as deployment-grade evidence only to the extent that its construct validity, uncertainty characterization, scope limitations, and governance documentation are made explicit and contestable. <em>Passing a benchmark is not proof of safety — it is an invitation to further inquiry.</em>
            </p>
          </div>
        </div>
      </section>

      <MarqueeTicker
        items={["THE NUMBER IS NOT THE MEASUREMENT", "BENCHMARKS REWARD PERFORMANCE", "EVALUATIONS EXPOSE RISK", "KINETIC THRESHOLD", "EVIDENTIARY ASSURANCE", "CONSTRUCT VALIDITY", "BENCHMARK BILL OF MATERIALS"]}
        speed={28} bg={S.orange} color="#000"
      />

      {/* ARTIFEX-Original Constructs */}
      <section style={{ background: "#FFF", padding: "3rem 2rem", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>DOCUMENT ATTRIBUTION — ARTIFEX-ORIGINAL CONSTRUCTS</div>
          <div style={{ display: "flex", gap: "0", flexWrap: "wrap", border: "2px solid #000" }}>
            {ARTIFEX_ORIGINALS.map((item, i) => (
              <div key={i} style={{ padding: "0.6rem 1rem", borderRight: "2px solid #000", borderBottom: "2px solid #000", fontFamily: S.mono, fontSize: "0.6rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "#000", background: i % 2 === 0 ? "#FFF5F0" : "#FFF" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
