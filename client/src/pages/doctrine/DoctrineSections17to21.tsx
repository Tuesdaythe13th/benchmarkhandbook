import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";
import { BIBLIOGRAPHY } from "@/data/doctrineData";

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

export default function DoctrineSections17to21() {
  return (
    <>
      {/* §17 — Governance & Liability */}
      <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="17" title="AI Governance, Liability & Legal Frameworks" sub="The regulatory landscape is rapidly reconfiguring developer accountability." dark />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 0, border: `2px solid ${S.orange}` }}>
            {[
              { title: "EU AI ACT", body: "August 2, 2026 enforcement for high-risk systems. Penalties up to €35M or 7% of global turnover.", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
              { title: "COLORADO AI ACT", body: "SB 24-205, effective June 30, 2026. Creates U.S. state-level algorithmic governance requirements.", url: "" },
              { title: "CALIFORNIA SB 243", body: "Companion Chatbot Law mandating break reminders and crisis intervention protocols for chatbots.", url: "" },
              { title: "PRODUCT LIABILITY", body: "Garcia and related Gemini wrongful death suits are establishing that AI chatbots may be classified as 'products' for strict liability.", url: "" },
              { title: "MORAL CRUMPLE ZONE", body: "Elish (2019): humans absorb blame for failures that are structurally caused by autonomous systems.", url: "" },
              { title: "ISO/IEC 42001", body: "Certifiable safe harbor for AI management systems, though a persistent 'proof gap' leaves many organizations vulnerable.", url: "" },
            ].map((r, i) => (
              <div key={i} style={{ padding: "1.25rem", borderRight: "2px solid #333", borderBottom: "2px solid #333" }}>
                <h4 style={{ fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: S.orange, margin: "0 0 0.4rem" }}>{r.title}</h4>
                <p style={{ fontFamily: S.body, fontSize: "0.75rem", lineHeight: 1.5, color: "#AAA", margin: 0 }}>{r.body}</p>
                {r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: S.mono, fontSize: "0.5rem", color: S.orange, textDecoration: "none", marginTop: "0.4rem", display: "inline-block" }}>SOURCE →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §18 — Ecological Footprint */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="18" title="Ecological & Economic Footprints" sub="BBOM Layer 11 mandates disclosure of full environmental and economic costs. A benchmark omitting the compute cost of its winning scores is subsidizing performance rather than measuring it." />
          <div style={{ display: "flex", gap: 0, border: "2px solid #000", flexWrap: "wrap" }}>
            {[
              { label: "AI CO₂ EMISSIONS", value: "Up to 79.7 Mt/year" },
              { label: "BLACKWELL THROUGHPUT", value: "65× increase over prior gen" },
              { label: "COST PER M TOKENS (BEFORE)", value: "$4.20" },
              { label: "COST PER M TOKENS (AFTER)", value: "$0.12" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.25rem 1.5rem", borderRight: "2px solid #000", flex: 1, minWidth: 180 }}>
                <div style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#888", marginBottom: "0.3rem" }}>{s.label}</div>
                <div style={{ fontFamily: S.head, fontSize: "1.3rem", color: S.orange }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §19 — Transgenerational Ethics */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="19" title="Transgenerational Ethics" sub="Hans Jonas's (1984) imperative of responsibility: evaluation frameworks must protect stakeholders who do not yet exist." />
          <div style={{ borderLeft: `3px solid ${S.orange}`, padding: "1rem 1.5rem" }}>
            <p style={{ fontFamily: S.body, fontSize: "0.85rem", color: "#444", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
              The assurance infrastructure built today determines the harm landscape for future communities. AI ethics must incorporate postcolonial ethics, indigenous knowledge systems, and transfeminist perspectives to counter cognitive imperialism and structural power imbalances (Birhane, Mhlambi, Attard-Frost, 2025/2026).
            </p>
            <p style={{ fontFamily: S.body, fontSize: "0.85rem", color: "#444", lineHeight: 1.7, margin: 0 }}>
              Without "onto-contextual consistency," AI deployments risk reproducing colonial power dynamics across generations.
            </p>
          </div>
        </div>
      </section>

      <MarqueeTicker items={["SCORES MAY NOT TRAVEL BEYOND WHAT THEIR PROPERTIES JUSTIFY", "PASSING A BENCHMARK IS NOT PROOF OF SAFETY", "IT IS AN INVITATION TO FURTHER INQUIRY"]} speed={30} bg="#000" color={S.orange} />

      {/* §20 — Conclusion */}
      <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="20" title="Conclusion" dark />
          <div style={{ maxWidth: 800 }}>
            {[
              "AI evaluation is evidence production. Benchmark scores used to justify consequential deployment must be judged by the adequacy of their evidentiary shell — uncertainty, construct fit, scope, and documentation.",
              "The BBOM makes evaluations legible; the Tripartite Harm Distinction prevents conflation of discomfort and injury; the Benchmark Cemetery demands retirement of measures that have lost probative force.",
              "The Garcia case and the clinical crisis of artificial intimacy demonstrate that benchmarks failing to capture emotional dependency, reciprocity deficits, or algorithmic grief are scope-invalid for high-stakes deployment.",
              "The emerging legal and regulatory landscape — from the EU AI Act to Colorado SB 24-205 and California SB 243 — confirms that auditable, contestable evaluation is no longer aspirational but mandatory.",
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: S.body, fontSize: "0.88rem", color: "#CCC", lineHeight: 1.7, margin: "0 0 1rem" }}>{p}</p>
            ))}
            <div style={{ background: S.orange, padding: "1.25rem 1.5rem", marginTop: "1.5rem" }}>
              <p style={{ fontFamily: S.head, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000", margin: 0, lineHeight: 1.3 }}>
                The winners in this landscape will not be those with the most GPUs, but those who can prove that their autonomous agents are safe, auditable, and grounded in the complex reality of human society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* §21 — Bibliography */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="21" title="Consolidated Bibliography" sub="All hyperlinks verified as of date of synthesis. DOIs or stable URLs provided wherever available." />
          {["Legal", "Legislation", "Metrology", "Academic", "Classic"].map(cat => {
            const items = BIBLIOGRAPHY.filter(b => b.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat} style={{ marginBottom: "2rem" }}>
                <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.5rem", paddingBottom: "0.3rem", borderBottom: "1px solid #E0E0E0" }}>{cat.toUpperCase()} SOURCES</div>
                {items.map((b, i) => (
                  <div key={i} style={{ padding: "0.4rem 0", borderBottom: "1px solid #F0F0F0", display: "flex", gap: "0.5rem", alignItems: "baseline" }}>
                    <span style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#444", lineHeight: 1.5 }}>{b.citation}</span>
                    {b.url && (
                      <a href={b.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: S.mono, fontSize: "0.48rem", color: S.orange, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>LINK →</a>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
