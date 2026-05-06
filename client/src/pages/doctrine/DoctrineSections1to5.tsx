import MarqueeTicker from "@/components/MarqueeTicker";
import { BENCHMARK_LANDSCAPE, SIX_DESIDERATA, CALIBRATION_HIERARCHY, BBOM_LAYERS, BBOM_THESES, ERROR_BUDGET_SOURCES, ADVERSARIAL_CLAIMS } from "@/data/doctrineData";

const S = { mono: "'Space Mono', monospace" as const, head: "'Archivo Black', sans-serif" as const, body: "'Inter', sans-serif" as const, orange: "#FF4D00" };

function Hdr({ n, title, sub, dark }: { n: string; title: string; sub?: string; dark?: boolean }) {
  return (
    <div style={{ borderBottom: `2px solid ${dark ? S.orange : "#000"}`, paddingBottom: "1.5rem", marginBottom: "2.5rem" }}>
      <div style={{ fontFamily: S.mono, fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: "0.5rem" }}>SECTION {n}</div>
      <h2 style={{ fontFamily: S.head, fontSize: "clamp(1.8rem, 3.5vw, 3rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, color: dark ? "#FFF" : "#000", margin: "0 0 0.75rem" }}>{title}</h2>
      {sub && <p style={{ fontFamily: S.body, fontSize: "0.85rem", color: dark ? "#888" : "#444", lineHeight: 1.6, margin: 0, maxWidth: 720 }}>{sub}</p>}
    </div>
  );
}

export default function DoctrineSections1to5() {
  return (
    <>
      {/* §1 — Evidentiary Mismatch */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="01" title="The Evidentiary Mismatch" sub="Traditional benchmarks are increasingly used to authorize the deployment of systems whose operational complexities they are structurally unable to capture." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 0, border: "2px solid #000" }}>
            {[
              { ref: "JCGM 100:2008", body: "A measurement result is not considered complete unless it includes a quantitative statement of its quality so that users can assess its reliability. AI evaluation routinely circulates scores without any such characterization.", url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf" },
              { ref: "Daubert v. Merrell Dow (1993)", body: "The U.S. Supreme Court held that judges must ensure scientific testimony is both reliable and relevant, identifying testability, peer review, known error rate, and existence of standards. 'Scientific validity for one purpose is not necessarily scientific validity for other, unrelated purposes.'", url: "https://supreme.justia.com/cases/federal/us/509/579/" },
              { ref: "CORE THESIS", body: "This paper reframes AI evaluation as an evidentiary practice — distinguishing outputs that merely report from those that can plausibly function as evidence for high-stakes decisions.", url: "" },
              { ref: "EPISTEMOLOGICAL CLAIM", body: "A benchmark output is admissible as deployment-grade evidence only to the extent that its construct validity, uncertainty characterization, scope limitations, and governance documentation are made explicit and contestable.", url: "" },
            ].map((c, i) => (
              <div key={i} style={{ padding: "1.5rem", borderRight: (i + 1) % 2 !== 0 ? "2px solid #000" : "none", borderBottom: "2px solid #000" }}>
                <div style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: S.orange, marginBottom: "0.4rem" }}>{c.ref}</div>
                <p style={{ fontFamily: S.body, fontSize: "0.78rem", lineHeight: 1.6, color: "#444", margin: 0 }}>{c.body}</p>
                {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: S.mono, fontSize: "0.5rem", color: S.orange, textDecoration: "none", marginTop: "0.5rem", display: "inline-block" }}>SOURCE →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §2 — State of AI Evaluation */}
      <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="02" title="The State of AI Evaluation" sub="Goodhart's Law in real time: when a measure becomes a target, it ceases to be a good measure (Goodhart, 1975; Strathern, 1997)." dark />
          <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: `2px solid ${S.orange}`, fontFamily: S.body, fontSize: "0.78rem" }}>
              <thead><tr style={{ background: "#111" }}>
                {["BENCHMARK", "DOMAIN", "2025–2026 STANDING", "SIGNAL"].map(h => (
                  <th key={h} style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: S.orange, padding: "0.6rem 0.8rem", textAlign: "left", borderRight: "1px solid #333" }}>{h}</th>
                ))}
              </tr></thead>
              <tbody>{BENCHMARK_LANDSCAPE.map((b, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #222" }}>
                  <td style={{ padding: "0.6rem 0.8rem", borderRight: "1px solid #222" }}>
                    <a href={b.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: "#FFF", textDecoration: "none" }}>{b.name}</a>
                  </td>
                  <td style={{ padding: "0.6rem 0.8rem", color: "#AAA", borderRight: "1px solid #222" }}>{b.domain}</td>
                  <td style={{ padding: "0.6rem 0.8rem", color: "#888", borderRight: "1px solid #222", fontSize: "0.72rem" }}>{b.standing}</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>
                    <span style={{ fontFamily: S.mono, fontSize: "0.5rem", color: b.signal === "Very High" ? S.orange : "#FFF", letterSpacing: "0.06em", textTransform: "uppercase" }}>{b.signal}</span>
                  </td>
                </tr>
              ))}</tbody>
            </table>
          </div>
          <p style={{ fontFamily: S.body, fontSize: "0.8rem", color: "#888", lineHeight: 1.6, maxWidth: 720 }}>
            In May 2026, <a href="https://mlcommons.org" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>MLCommons</a> released <strong style={{ color: "#FFF" }}>AILuminate v1.0</strong>, the first comprehensive industry-standard benchmark for AI-product risk, evaluating systems across 12 hazard categories using 24,000+ prompt datasets with entropy-based uncertainty quantification.
          </p>
        </div>
      </section>

      {/* §3 — Kinetic Threshold */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="03" title="The Kinetic Threshold" sub="ARTIFEX Original — The operational boundary at which laboratory-style benchmark performance begins to lose predictive adequacy." />
          <div style={{ background: "#000", border: "2px solid #000", padding: "2.5rem", textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", color: S.orange, marginBottom: "1rem" }}>ARTIFEX-ORIGINAL FORMULATION</div>
            <div style={{ fontFamily: S.head, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#FFF", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              KT = <span style={{ color: S.orange }}>f</span>(H, C, T)
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
              {[["H", "Autonomy Horizon", "Length and self-directedness of task chain"], ["C", "Environment Complexity", "Open-ended interaction spaces"], ["T", "Tool Connectivity", "Access to APIs, code execution, actuators"]].map(([v, l, d]) => (
                <div key={v} style={{ textAlign: "center", maxWidth: 200 }}>
                  <div style={{ fontFamily: S.head, fontSize: "1.5rem", color: S.orange }}>{v}</div>
                  <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#AAA", marginBottom: "0.25rem" }}>{l}</div>
                  <div style={{ fontFamily: S.body, fontSize: "0.7rem", color: "#666" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Adversarial Claims */}
          <div style={{ border: "2px solid #000" }}>
            <div style={{ background: "#000", padding: "0.6rem 1rem", fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange }}>ADVERSARIAL CORROBORATION — STRUCTURAL CLAIMS</div>
            {ADVERSARIAL_CLAIMS.map((c, i) => (
              <div key={i} style={{ padding: "0.8rem 1rem", borderBottom: i < ADVERSARIAL_CLAIMS.length - 1 ? "1px solid #E0E0E0" : "none", display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                <span style={{ fontFamily: S.head, fontSize: "1.2rem", color: S.orange, flexShrink: 0 }}>0{i + 1}</span>
                <p style={{ fontFamily: S.body, fontSize: "0.78rem", color: "#444", lineHeight: 1.5, margin: 0 }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeTicker items={["RELIABILITY", "VALIDITY", "UNCERTAINTY", "FAIRNESS", "REPRODUCIBILITY", "PRACTICALITY", "CONJUNCTION REQUIREMENT"]} speed={25} bg="#000" color={S.orange} />

      {/* §4 — Metrological Foundations */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="04" title="Metrological & Evidentiary Foundations" sub="Six desiderata that any governance-grade evaluation must satisfy, operating under a strict Conjunction Requirement." />
          {/* Six Desiderata */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 0, border: "2px solid #000", marginBottom: "2.5rem" }}>
            {SIX_DESIDERATA.map((d, i) => (
              <div key={d.id} style={{ padding: "1.5rem", borderRight: (i + 1) % 2 !== 0 ? "2px solid #000" : "none", borderBottom: "2px solid #000", background: "#FFF" }}>
                <div style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.1em", color: S.orange, textTransform: "uppercase", marginBottom: "0.25rem" }}>{d.id}</div>
                <h3 style={{ fontFamily: S.head, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000", margin: "0 0 0.5rem" }}>{d.label}</h3>
                <p style={{ fontFamily: S.body, fontSize: "0.76rem", lineHeight: 1.6, color: "#444", margin: 0 }}>{d.question}</p>
              </div>
            ))}
          </div>
          {/* Calibration Hierarchy */}
          <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>CALIBRATION HIERARCHY — EVIDENTIARY BURDEN TIED TO DEPLOYMENT STAKES</div>
          <div style={{ border: "2px solid #000" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", background: "#000" }}>
              {["TIER", "CONTEXT", "EVIDENTIARY STANDARD"].map(h => (
                <div key={h} style={{ padding: "0.6rem 1rem", fontFamily: S.mono, fontSize: "0.48rem", letterSpacing: "0.08em", textTransform: "uppercase", color: S.orange, borderRight: "1px solid #333" }}>{h}</div>
              ))}
            </div>
            {CALIBRATION_HIERARCHY.map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", borderBottom: i < CALIBRATION_HIERARCHY.length - 1 ? "1px solid #E0E0E0" : "none" }}>
                <div style={{ padding: "0.7rem 1rem", fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: "#000", borderRight: "1px solid #E0E0E0" }}>{r.tier}</div>
                <div style={{ padding: "0.7rem 1rem", fontFamily: S.body, fontSize: "0.75rem", color: "#444", borderRight: "1px solid #E0E0E0" }}>{r.context}</div>
                <div style={{ padding: "0.7rem 1rem", fontFamily: S.body, fontSize: "0.75rem", color: "#444" }}>{r.standard}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 — BBOM */}
      <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="05" title="Benchmark Bill of Materials" sub="ARTIFEX Original — The central governance instrument. A benchmark result without a complete BBOM is not governance-grade." dark />
          {/* 11 Layers */}
          <div style={{ border: `2px solid ${S.orange}`, marginBottom: "2rem" }}>
            {BBOM_LAYERS.map((l, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 120px 1fr", borderBottom: i < BBOM_LAYERS.length - 1 ? "1px solid #222" : "none" }}>
                <div style={{ padding: "0.7rem", fontFamily: S.head, fontSize: "1.1rem", color: S.orange, textAlign: "center", borderRight: "1px solid #222" }}>{String(l.n).padStart(2, "0")}</div>
                <div style={{ padding: "0.7rem 0.8rem", fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: "#FFF", borderRight: "1px solid #222" }}>{l.component}</div>
                <div style={{ padding: "0.7rem 0.8rem", fontFamily: S.body, fontSize: "0.75rem", color: "#AAA", lineHeight: 1.5 }}>{l.description}</div>
              </div>
            ))}
          </div>
          {/* Three Theses */}
          {BBOM_THESES.map((t, i) => (
            <div key={i} style={{ borderLeft: `3px solid ${S.orange}`, padding: "0.75rem 1.25rem", marginBottom: "1rem" }}>
              <p style={{ fontFamily: S.body, fontSize: "0.82rem", color: "#CCC", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{t}</p>
            </div>
          ))}
          {/* Error Budget */}
          <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginTop: "2rem", marginBottom: "0.5rem" }}>MEASUREMENT ERROR BUDGET — 5 PRIMARY SOURCES</div>
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap", border: `1px solid ${S.orange}` }}>
            {ERROR_BUDGET_SOURCES.map((s, i) => (
              <div key={i} style={{ padding: "0.5rem 0.8rem", borderRight: `1px solid ${S.orange}`, fontFamily: S.mono, fontSize: "0.6rem", color: "#AAA", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeTicker items={["MEASURING FOR THE VOID", "DESIGNED VOID", "AFFORDED VOID", "POLITICAL VOID", "FEELING ≠ OFFENSE ≠ HARM", "LEXICAL INSTABILITY"]} speed={22} bg={S.orange} color="#000" />
    </>
  );
}
