import MarqueeTicker from "@/components/MarqueeTicker";
import { ACCESS_STACK, TRIPARTITE_HARM, OPERATIONAL_METHODS, AUTOMOTIVE_TAXONOMY } from "@/data/doctrineData";

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

export default function DoctrineSections6to10() {
  return (
    <>
      {/* §6 — Measuring for the Void */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="06" title="Measuring for the Void & the Access Stack" sub="ARTIFEX Original — Treating absence as evidence rather than blank space. Missing populations, languages, and documentation are not neutral — they change the meaning of the benchmark result." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
            <div>
              <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>EIGHT-LAYER ACCESS STACK</div>
              <div style={{ border: "2px solid #000" }}>
                {ACCESS_STACK.map((a, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr", borderBottom: i < ACCESS_STACK.length - 1 ? "1px solid #E0E0E0" : "none" }}>
                    <div style={{ padding: "0.6rem", fontFamily: S.head, fontSize: "0.9rem", color: S.orange, textAlign: "center", borderRight: "2px solid #000" }}>{a.n}</div>
                    <div style={{ padding: "0.6rem 0.8rem" }}>
                      <div style={{ fontFamily: S.head, fontSize: "0.7rem", textTransform: "uppercase", color: "#000", marginBottom: "0.2rem" }}>{a.layer}</div>
                      <div style={{ fontFamily: S.body, fontSize: "0.72rem", color: "#666", lineHeight: 1.4 }}>{a.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>THREE DISTINCT VOIDS</div>
              {[
                { name: "Designed Void", desc: "Populations never in scope of the benchmark design." },
                { name: "Afforded Void", desc: "What could be measured but cannot be afforded — economic exclusion from measurement." },
                { name: "Political Void", desc: "What is rendered invisible by power — the cultural production of ignorance (Proctor & Schiebinger, 2008)." },
              ].map((v, i) => (
                <div key={i} style={{ background: "#000", padding: "1.25rem", marginBottom: i < 2 ? "0.75rem" : 0 }}>
                  <div style={{ fontFamily: S.head, fontSize: "0.8rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.3rem" }}>{v.name}</div>
                  <p style={{ fontFamily: S.body, fontSize: "0.78rem", color: "#AAA", lineHeight: 1.5, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* §7 — Tripartite Harm Distinction */}
      <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="07" title="The Tripartite Harm Distinction" sub="ARTIFEX Original — A defensible AI evaluation doctrine must formally separate three distinct ontological states. Grounded in Mill's Harm Principle (1859)." dark />
          <div style={{ border: `2px solid ${S.orange}`, marginBottom: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr 1fr", background: "#111" }}>
              {["STATE", "DEFINITION", "MEASURABILITY", "GOVERNANCE"].map(h => (
                <div key={h} style={{ padding: "0.6rem 0.8rem", fontFamily: S.mono, fontSize: "0.48rem", letterSpacing: "0.08em", textTransform: "uppercase", color: S.orange, borderRight: "1px solid #333" }}>{h}</div>
              ))}
            </div>
            {TRIPARTITE_HARM.map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr 1fr", borderBottom: i < TRIPARTITE_HARM.length - 1 ? "1px solid #222" : "none" }}>
                <div style={{ padding: "0.8rem", fontFamily: S.head, fontSize: "0.8rem", textTransform: "uppercase", color: i === 2 ? S.orange : "#FFF", borderRight: "1px solid #222" }}>{r.state}</div>
                <div style={{ padding: "0.8rem", fontFamily: S.body, fontSize: "0.75rem", color: "#AAA", borderRight: "1px solid #222" }}>{r.definition}</div>
                <div style={{ padding: "0.8rem", fontFamily: S.body, fontSize: "0.75rem", color: "#888", borderRight: "1px solid #222" }}>{r.measurability}</div>
                <div style={{ padding: "0.8rem", fontFamily: S.body, fontSize: "0.75rem", color: "#AAA" }}>{r.governance}</div>
              </div>
            ))}
          </div>
          <div style={{ borderLeft: `3px solid ${S.orange}`, padding: "0.75rem 1.25rem" }}>
            <p style={{ fontFamily: S.body, fontSize: "0.82rem", color: "#CCC", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
              Pain is decoupled from harm: pain is an epistemic signal, not the condition itself. The most dangerous state is often "painless harm" — slow cumulative algorithmic bias that produces no instantaneous affective complaint.
            </p>
          </div>
        </div>
      </section>

      {/* §8 — Cross-Cultural */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="08" title="Cross-Cultural & Multilingual Governance" sub="A benchmark designed around English safety semantics is structurally blind to safety constructs operative in other linguistic communities." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 0, border: "2px solid #000", marginBottom: "2rem" }}>
            {[
              { lang: "English", term: "Safety / Security", note: "Unique split between internal wholeness and external defense — a cultural anomaly." },
              { lang: "Mandarin (安全)", term: "ān quán", note: "Unifies safety and security into an integral state of wholeness." },
              { lang: "Russian (безопасность)", term: "bezopasnost", note: "Negative construal: 'without danger' — focuses on boundary between threats." },
              { lang: "Hebrew (בטח)", term: "betach", note: "Implies a covenant of trust and refuge, invoking relational faithfulness." },
            ].map((l, i) => (
              <div key={i} style={{ padding: "1.25rem", borderRight: "2px solid #000", borderBottom: "2px solid #000" }}>
                <div style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: S.orange, marginBottom: "0.3rem" }}>{l.lang}</div>
                <div style={{ fontFamily: S.head, fontSize: "0.85rem", color: "#000", marginBottom: "0.4rem" }}>{l.term}</div>
                <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#555", lineHeight: 1.5, margin: 0 }}>{l.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: S.body, fontSize: "0.82rem", color: "#444", lineHeight: 1.6, maxWidth: 720 }}>
            <a href="https://arxiv.org/abs/2505.24119" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>Yong et al. (2025)</a> find a "significant and growing language gap in LLM safety research." <a href="" style={{ color: S.orange, textDecoration: "none" }}>Banerjee et al. (2025)</a> proved that culturally aligned preference datasets reduced harmful output from 71.96% to 3.07%.
          </p>
        </div>
      </section>

      {/* §9 — Operational Methods */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="09" title="Operational Methods: APBR, BeTaL, RLTHF" sub="Three evaluation methodologies integrated into the ARTIFEX evidentiary shell." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 0, border: "2px solid #000" }}>
            {OPERATIONAL_METHODS.map((m, i) => (
              <div key={i} style={{ padding: "1.5rem", borderRight: "2px solid #000", borderBottom: "2px solid #000", background: "#FFF" }}>
                <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <h3 style={{ fontFamily: S.head, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000", margin: "0 0 0.3rem" }}>{m.name}</h3>
                </a>
                <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.04em", color: "#888", marginBottom: "0.6rem" }}>{m.attribution}</div>
                <p style={{ fontFamily: S.body, fontSize: "0.76rem", lineHeight: 1.6, color: "#444", margin: 0 }}>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeTicker items={["STAMP", "SYSTEM-THEORETIC PROCESS ANALYSIS", "DEMON CAT", "REPRESENTATION GAP", "MORAL LUCK", "OUTCOME BIAS"]} speed={24} bg="#000" color="#FFF" />

      {/* §10 — Systems Thinking */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="10" title="Systems Thinking: STAMP & Automotive Taxonomy" sub="Safety is an emergent system property, not a component property (Leveson, 2004, 2011). The Automotive Assurance Taxonomy surfaces orthogonal harms outside the explicit threat model." />
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "2px solid #000", fontFamily: S.body, fontSize: "0.78rem" }}>
              <thead><tr style={{ background: "#000" }}>
                {["SCENARIO", "GAP TYPE", "REAL-WORLD IMPLICATION"].map(h => (
                  <th key={h} style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: S.orange, padding: "0.6rem 0.8rem", textAlign: "left", borderRight: "1px solid #333" }}>{h}</th>
                ))}
              </tr></thead>
              <tbody>{AUTOMOTIVE_TAXONOMY.map((a, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #E0E0E0", background: i % 2 === 0 ? "#FFF" : "#F8F8F8" }}>
                  <td style={{ padding: "0.7rem 0.8rem", fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: "#000", borderRight: "1px solid #E0E0E0" }}>{a.scenario}</td>
                  <td style={{ padding: "0.7rem 0.8rem", color: S.orange, fontFamily: S.mono, fontSize: "0.65rem", borderRight: "1px solid #E0E0E0", textTransform: "uppercase" }}>{a.gap}</td>
                  <td style={{ padding: "0.7rem 0.8rem", color: "#444" }}>{a.reality}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
