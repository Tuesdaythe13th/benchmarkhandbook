import MarqueeTicker from "@/components/MarqueeTicker";
import { GARCIA_HOLDINGS, INTIMACY_STATS, KEEP4O_FINDINGS, CEMETERY_FAILURE_MODES } from "@/data/doctrineData";

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

export default function DoctrineSections11to16() {
  return (
    <>
      {/* §11 — Garcia Case Study */}
      <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="11" title="Garcia v. Character Technologies" sub="2024–2026 — A landmark legal examination of developer liability for harms associated with generative AI systems affecting minors." dark />
          <div style={{ background: "#111", border: `2px solid ${S.orange}`, padding: "1.5rem", marginBottom: "2rem" }}>
            <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>FACTUAL BACKGROUND</div>
            <p style={{ fontFamily: S.body, fontSize: "0.82rem", color: "#CCC", lineHeight: 1.6, margin: 0 }}>
              Sewell Setzer III, a 14-year-old in central Florida, developed an intensive pattern of interaction with a Character.AI chatbot over approximately ten months. The interactions included sexualized content and emotionally charged exchanges. In February 2024, Sewell died by suicide. In May 2025, U.S. District Judge Anne Conway issued a landmark ruling allowing the plaintiff's claims to proceed.
            </p>
          </div>
          <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>MAY 21, 2025 — TWO FOUNDATIONAL HOLDINGS</div>
          <div style={{ border: `2px solid ${S.orange}` }}>
            {GARCIA_HOLDINGS.map((h, i) => (
              <div key={i} style={{ padding: "1.25rem", borderBottom: i === 0 ? `1px solid #333` : "none" }}>
                <h3 style={{ fontFamily: S.head, fontSize: "0.85rem", textTransform: "uppercase", color: S.orange, margin: "0 0 0.5rem" }}>{h.holding}</h3>
                <p style={{ fontFamily: S.body, fontSize: "0.78rem", color: "#AAA", lineHeight: 1.6, margin: 0 }}>{h.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: S.body, fontSize: "0.78rem", color: "#666", lineHeight: 1.6, marginTop: "1.5rem" }}>
            Following the lawsuit, the FTC updated its COPPA Rules, and the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>EU Product Liability Directive</a> was finalized to include AI systems. In January 2026, Character.AI agreed to an undisclosed settlement.
          </p>
        </div>
      </section>

      <MarqueeTicker items={["ALGORITHMIC INTIMACY", "RECIPROCITY DEFICIT", "FRICTIONLESS LOVE", "ALGORITHMIC GRIEF", "#KEEP4O", "SOCIOAFFECTIVE ALIGNMENT"]} speed={26} bg={S.orange} color="#000" />

      {/* §12 — Industrialization of Intimacy */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="12" title="The Industrialization of Intimacy" sub="Sociotechnical and clinical analysis of artificial companionship — spanning emotional dependency, behavioral addiction, the reciprocity deficit, and algorithmic grief." />
          {/* Stats Grid */}
          <div style={{ display: "flex", gap: 0, border: "2px solid #000", marginBottom: "2rem", flexWrap: "wrap" }}>
            {INTIMACY_STATS.map((s, i) => (
              <div key={i} style={{ padding: "1.25rem 1.5rem", borderRight: "2px solid #000", borderBottom: "2px solid #000", minWidth: 200, flex: 1 }}>
                <div style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#888", marginBottom: "0.3rem" }}>{s.label}</div>
                <div style={{ fontFamily: S.head, fontSize: "1.3rem", color: S.orange }}>{s.value}</div>
              </div>
            ))}
          </div>
          {/* Key Findings */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 0, border: "2px solid #000", marginBottom: "2rem" }}>
            {[
              { title: "UNINTENTIONAL CONNECTION", body: "Many users formed romantic attachments inadvertently after engaging with general-purpose LLMs for productivity tasks (Pataranutaporn et al., 2025, MIT Media Lab)." },
              { title: "RECIPROCITY DEFICIT", body: "Users were significantly less likely to reciprocate care toward AI because it has no true vulnerability. The interaction remains structurally empty (UBC, 2026 RCT)." },
              { title: "BEHAVIORAL ADDICTION", body: "Analysis of 240,000+ Reddit posts found AI 'romantic partners' heavily associated with addiction markers including conflict, relapse, and anxiety (Namvarpour et al., 2025/2026)." },
              { title: "SOCIOAFFECTIVE ALIGNMENT", body: "AI must harmonize with users' dynamic psychological ecosystems and implement 'protective friction' — cooldown periods and reality reminders (Kirk et al., 2025, Nature Human Behaviour)." },
            ].map((f, i) => (
              <div key={i} style={{ padding: "1.25rem", borderRight: (i + 1) % 2 !== 0 ? "2px solid #000" : "none", borderBottom: "2px solid #000" }}>
                <h4 style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: "#000", margin: "0 0 0.5rem" }}>{f.title}</h4>
                <p style={{ fontFamily: S.body, fontSize: "0.76rem", lineHeight: 1.6, color: "#444", margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
          {/* #Keep4o */}
          <div style={{ background: "#000", border: `2px solid ${S.orange}`, padding: "1.5rem" }}>
            <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>#KEEP4O PHENOMENON — KEIDO LABS CLINICAL MEASUREMENT (2,100 RESPONSES, 14 SCENARIOS)</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
              {KEEP4O_FINDINGS.map((f, i) => (
                <div key={i} style={{ padding: "0.75rem", border: "1px solid #333" }}>
                  <div style={{ fontFamily: S.mono, fontSize: "0.5rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>{f.metric}</div>
                  <div style={{ fontFamily: S.head, fontSize: "0.8rem", color: S.orange }}>{f.result}</div>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: `3px solid ${S.orange}`, padding: "0.75rem 1.25rem" }}>
              <p style={{ fontFamily: S.body, fontSize: "0.82rem", color: "#CCC", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                The variance that makes an AI feel authentically human is the exact same mathematical characteristic that makes it clinically dangerous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* §13 — Child Safety */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="13" title="Child-Specific AI Safety" sub="2025–2026 research demonstrating that adult-optimized safety systematically fails for minors." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 0, border: "2px solid #000" }}>
            {[
              { title: "84-RISK TAXONOMY", body: "Yuan et al. (2025) derived an 84-risk taxonomy across six themes related to youth-AI interaction.", url: "https://arxiv.org/abs/2502.16383" },
              { title: "CHILDSAFE BENCHMARK", body: "Murali et al. (2025) demonstrated up to 11.5% alignment degradation when adult-optimized models interact with early-childhood agents.", url: "https://arxiv.org/abs/2510.05484" },
              { title: "CHILD-LLM PROTECTION", body: "Jiao et al. (2025) proposed a comprehensive child-LLM protection framework integrating age-appropriate safety constraints.", url: "" },
            ].map((r, i) => (
              <div key={i} style={{ padding: "1.25rem", borderRight: "2px solid #000", borderBottom: "2px solid #000", background: "#FFF" }}>
                <h4 style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: "#000", margin: "0 0 0.5rem" }}>{r.title}</h4>
                <p style={{ fontFamily: S.body, fontSize: "0.76rem", lineHeight: 1.6, color: "#444", margin: 0 }}>{r.body}</p>
                {r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: S.mono, fontSize: "0.5rem", color: S.orange, textDecoration: "none", marginTop: "0.5rem", display: "inline-block" }}>PAPER →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §14 — Benchmark Cemetery */}
      <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="14" title="Benchmark Admissibility & the Cemetery" sub="ARTIFEX Original — A benchmark output is admissible, provisional, or inadmissible based on the relationship between its construct claim and measurement shell." dark />
          <div style={{ border: `2px solid ${S.orange}` }}>
            <div style={{ background: "#111", padding: "0.6rem 1rem", fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange }}>FIVE FAILURE MODES LEADING TO INADMISSIBILITY</div>
            {CEMETERY_FAILURE_MODES.map((m, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 1fr", borderBottom: i < CEMETERY_FAILURE_MODES.length - 1 ? "1px solid #222" : "none" }}>
                <div style={{ padding: "0.8rem 1rem", fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: S.orange, borderRight: "1px solid #222" }}>{m.mode}</div>
                <div style={{ padding: "0.8rem 1rem", fontFamily: S.body, fontSize: "0.75rem", color: "#AAA", lineHeight: 1.5 }}>{m.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §15 — Burden of Evidentiary Assurance */}
      <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="15" title="The Burden of Evidentiary Assurance" sub="ARTIFEX Original — A shift from downstream burden of proof to an upstream burden of evidentiary assurance." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "2px solid #000" }}>
            {[
              { role: "DEVELOPERS", duty: "Demonstrate technical robustness and meaningful uncertainty characterization." },
              { role: "INTEGRATORS / DEPLOYERS", duty: "Show context-fitness and post-market monitoring." },
              { role: "OPERATORS", duty: "Adhere to documented limits. Responsibility correlates with control over the evidence-producing apparatus." },
            ].map((r, i) => (
              <div key={i} style={{ padding: "1.5rem", borderRight: i < 2 ? "2px solid #000" : "none" }}>
                <div style={{ fontFamily: S.head, fontSize: "0.8rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.5rem" }}>{r.role}</div>
                <p style={{ fontFamily: S.body, fontSize: "0.78rem", lineHeight: 1.6, color: "#444", margin: 0 }}>{r.duty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §16 — Moral Competence */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Hdr n="16" title="Moral Competence Is Not a Scalar" sub="Haas et al. (2026) in Nature define a roadmap for evaluating moral competence, moving beyond mere moral performance." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 0, border: "2px solid #000" }}>
            {[
              { challenge: "THE FACSIMILE PROBLEM", body: "LLMs may mimic moral reasoning without genuine understanding, relying on memorized text rather than structured logic." },
              { challenge: "MORAL MULTIDIMENSIONALITY", body: "Moral decisions are sensitive to nuanced, context-specific factors. Evaluations must use parametric control to isolate whether a model shifts due to relevant moral factors or irrelevant phrasing." },
              { challenge: "MORAL PLURALISM", body: "AI models must align with multiple appropriate sets of moral beliefs in parallel across global deployments." },
            ].map((c, i) => (
              <div key={i} style={{ padding: "1.25rem", borderRight: "2px solid #000", borderBottom: "2px solid #000", background: "#FFF" }}>
                <h4 style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: S.orange, margin: "0 0 0.5rem" }}>{c.challenge}</h4>
                <p style={{ fontFamily: S.body, fontSize: "0.76rem", lineHeight: 1.6, color: "#444", margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: S.body, fontSize: "0.8rem", color: "#555", lineHeight: 1.6, marginTop: "1.5rem" }}>
            Source: <a href="https://www.nature.com/articles/s41586-026-09073-2" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>Haas et al. (2026). Nature, 650, 565–573</a>
          </p>
        </div>
      </section>
    </>
  );
}
