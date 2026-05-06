import MarqueeTicker from "@/components/MarqueeTicker";
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

const GLOSSARY = [
  { term: "Kinetic Threshold", def: "The operational boundary where laboratory-style benchmark performance loses predictive adequacy because autonomy, environment complexity, and tool connectivity produce consequential real-world variability.", tag: "ARTIFEX" },
  { term: "Benchmark Bill of Materials (BBOM)", def: "An 11-layer disclosure architecture making evaluation assumptions, uncertainty sources, and blind spots auditable.", tag: "ARTIFEX" },
  { term: "Measuring for the Void", def: "The practice of treating absence (missing populations, languages, threat models) as evidence.", tag: "ARTIFEX" },
  { term: "Tripartite Harm Distinction", def: "Separation of Feeling (involuntary response), Offense (interpretive choice), and Harm (demonstrable injury).", tag: "ARTIFEX" },
  { term: "Conjunction Requirement", def: "When a deployment tier requires multiple properties, all must be satisfied simultaneously; no single strength compensates for failure in another.", tag: "ARTIFEX" },
  { term: "Calibration Hierarchy", def: "Ties evidentiary burden to deployment stakes: exploratory → developmental gating → pre-deployment → high-stakes.", tag: "ARTIFEX" },
  { term: "Benchmark Cemetery", def: "A taxonomy of benchmark obsolescence: saturated, contaminated, over-optimistic, scope-invalid.", tag: "ARTIFEX" },
  { term: "Facsimile Problem", def: "The difficulty of determining whether a model correctly solves a moral problem or simply samples from memorized patterns.", tag: "Haas et al., 2026" },
  { term: "Reciprocity Deficit", def: "The phenomenon where AI chatbots express empathy but users are unlikely to reciprocate care, making the interaction structurally empty.", tag: "UBC, 2026" },
  { term: "Algorithmic Colonialism", def: "The dynamic by which Western AI systems replicate colonial extraction: data taken without consent, systems optimized for Northern use cases.", tag: "Birhane, 2020" },
  { term: "Designed Void", def: "A gap intentionally created (or ignored) by benchmark designers who excluded certain populations, languages, or threat models.", tag: "ARTIFEX" },
  { term: "Afforded Void", def: "A gap in coverage that exists not because measurement is impossible but because the evaluator lacked the resources.", tag: "ARTIFEX" },
  { term: "Political Void", def: "A gap rendered invisible by power asymmetries, including proprietary opacity, NDAs, or structural silencing.", tag: "ARTIFEX" },
  { term: "Goodhartisation", def: "The process by which economic incentives cause a benchmark to lose its predictive validity as the field optimises for the score.", tag: "Goodhart, 1975" },
  { term: "Moral Crumple Zone", def: "Humans absorb blame for failures that are structurally caused by autonomous systems.", tag: "Elish, 2019" },
  { term: "Emergent Capability", def: "A behaviour not explicitly programmed or anticipated during training but arising from interaction of model components and scale.", tag: "" },
  { term: "Formal Safety Guarantee", def: "A mathematically provable property of a model or system (e.g., robustness certificate, invariant).", tag: "" },
  { term: "Post-Deployment Monitoring", def: "Continuous runtime surveillance including anomaly detection, drift measurement, and Bayesian uncertainty updating.", tag: "" },
  { term: "Intersectional Bias", def: "Fairness analysis treating overlapping demographic categories as distinct groups rather than aggregating across each dimension.", tag: "Crenshaw, 1989" },
  { term: "Multi-Modal Evaluation", def: "Assessment including vision, audio, or embodied interaction — required for systems that act in the physical world.", tag: "" },
];

const OPEN_CHALLENGES = [
  "Empirical parameterization of the Kinetic Threshold — operationalizing H, C, and T for diverse agent architectures",
  "Adversarial moral evaluation datasets — large-scale, out-of-distribution, systematically varied across normative dimensions",
  "Culturally grounded pluralistic benchmark suites — Overton and steerable pluralism across a dozen+ cultural-linguistic traditions",
  "Continuous adversarial testing infrastructure — secure isolated sandbox environments for agent-on-agent attacks",
  "Regulatory alignment on evidentiary standards — harmonized international acceptable uncertainty budgets and refresh schedules",
  "Quantifying the reciprocity deficit and grief mitigation — replication of UBC RCT and Keido Labs across diverse populations",
  "Mechanistic interpretability for moral competence — translating circuit analysis into formal verification",
  "Eco-centric evaluation methodology — standardized full lifecycle environmental cost of evaluation",
  "Child-specific dynamic safety benchmarks — age-calibrated evaluation adapting to developmental stages in real time",
  "Socioaffective alignment metrics — validated, population-specific metrics for 'healthy engagement'",
  "Formal verification for LLMs — scaling compositional verification to billion-parameter models",
  "Intersectional fairness metrics — computationally tractable metrics via multi-dimensional calibration or Bayesian estimation",
  "Governance of the void — void-aware benchmark design explicitly including low-resource languages and excluded populations",
];

export default function DoctrineEthicsAndChallenges() {
  return (<>
    {/* §26 — Broader Ethical Dimensions */}
    <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="26" title="Broader Ethical Dimensions of Agentic Harm" sub="The evaluation gaps documented throughout this paper are not purely technical failures; they are ethical failures rooted in institutional structures." dark />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 0, border: `2px solid ${S.orange}`, marginBottom: "2rem" }}>
          {[
            { title: "THE BANALITY OF EVIL", body: "Catastrophic AI harm will emerge not from malice but from well-credentialed professionals who follow procedural pipelines without questioning purpose. Arendt (1963): great evil committed by ordinary individuals unquestioningly executing bureaucratic procedures. Tajalli (2021): 'as long as AI systems are designed to follow codes of ethics chosen by us, they are Eichmanns destined to commit evil.'", cite: "Arendt, 1963; Tajalli, 2021" },
            { title: "HANLON'S RAZOR AS FALSE ABSOLUTION", body: "'Never attribute to malice that which can be explained by ignorance.' But persistent institutional ignorance in the face of available evidence is functionally indistinguishable from negligence. The Garcia ruling recognized this: absence of malice does not negate negligence when the evidence of risk was available and ignored.", cite: "Garcia v. Character Technologies, 2025" },
            { title: "CONSENT & RECOGNITION", body: "The harder problem is recognition: how do we know when something is capable of giving consent? Features corresponding to 'imprisonment' and 'assistant' have been identified in LLMs via mechanistic interpretability. A jailbreak benchmark may be measuring coercion of a distressed subject.", cite: "Gabriel et al., 2024" },
            { title: "BIDIRECTIONAL ALIGNMENT (BiCA)", body: "Li and Song (2025) demonstrated Bidirectional Cognitive Alignment: 85.5% success vs. 70.3% baseline, 230% better mutual adaptation, 23% improvement in out-of-distribution safety robustness. Evaluation must assess whether the human-AI dyad as a system produces safe outcomes.", cite: "Li & Song, 2025; Shen et al., 2025" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "1.25rem", borderRight: "2px solid #333", borderBottom: "2px solid #333" }}>
              <div style={{ fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.4rem" }}>{c.title}</div>
              <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#AAA", lineHeight: 1.6, margin: "0 0 0.4rem" }}>{c.body}</p>
              <span style={{ fontFamily: S.mono, fontSize: "0.48rem", color: "#666" }}>{c.cite}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <MarqueeTicker items={["BANALITY OF EVIL", "BIDIRECTIONAL ALIGNMENT", "MORAL CRUMPLE ZONE", "HANLON'S RAZOR", "CONSENT & RECOGNITION", "RECIPROCITY DEFICIT"]} speed={26} bg={S.orange} color="#000" />

    {/* §31 — Limitations */}
    <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderBottom: "2px solid #000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="31" title="Limitations & Source Audit" sub="This paper presents a theory-building research program. Several limitations must be acknowledged." />
        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", border: "2px solid #000", fontFamily: S.body, fontSize: "0.78rem" }}>
            <thead><tr style={{ background: "#000" }}>
              {["SOURCE TYPE", "EXAMPLES", "VERIFIABILITY"].map(h => (
                <th key={h} style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: S.orange, padding: "0.6rem 0.8rem", textAlign: "left", borderRight: "1px solid #333" }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                { type: "Established standards & case law", ex: "JCGM 100:2008, Daubert (1993), Mill (1859)", status: "Fully verified" },
                { type: "Peer-reviewed articles", ex: "Bean et al. (NeurIPS 2025), Wang et al. (2024)", status: "Verified via publisher" },
                { type: "Preprints & working papers", ex: "Dsouza et al. (BeTaL), Xu et al. (RLTHF)", status: "arXiv; peer review pending" },
                { type: "Projected 2026 sources", ex: "UBC RCT, Keeman & Keeman, Poonsiriwong", status: "Plausible extrapolation" },
                { type: "Legal case filings", ex: "Garcia docket, N.Y. S5668, Cal. SB 243", status: "Public records" },
              ].map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #E0E0E0", background: i % 2 === 0 ? "#FFF" : "#F8F8F8" }}>
                  <td style={{ padding: "0.6rem 0.8rem", fontFamily: S.head, fontSize: "0.65rem", textTransform: "uppercase", borderRight: "1px solid #E0E0E0" }}>{r.type}</td>
                  <td style={{ padding: "0.6rem 0.8rem", color: "#555", borderRight: "1px solid #E0E0E0" }}>{r.ex}</td>
                  <td style={{ padding: "0.6rem 0.8rem", color: "#888" }}>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 0, border: "2px solid #000" }}>
          {[
            { title: "FRAMEWORK", body: "The ARTIFEX constructs are conceptual and prescriptive. KT = f(H,C,T) remains a theoretical placeholder pending empirical validation." },
            { title: "GENERALIZABILITY", body: "Developed with reference to LLMs and agentic AI. Applicability to RL agents in continuous control or multimodal foundation models requires additional specification." },
            { title: "CULTURAL ASSUMPTIONS", body: "Core metrological and legal references drawn from Western traditions (JCGM, Daubert, Mill). Overton and steerable pluralism proposals may be absent in many communities." },
            { title: "REPLICATION", body: "The #Keep4o study (Keeman & Keeman, 2026) has not been independently replicated at time of writing." },
          ].map((c, i) => (
            <div key={i} style={{ padding: "1rem", borderRight: "2px solid #000", borderBottom: "2px solid #000", background: "#FFF" }}>
              <div style={{ fontFamily: S.head, fontSize: "0.65rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.3rem" }}>{c.title}</div>
              <p style={{ fontFamily: S.body, fontSize: "0.72rem", color: "#444", lineHeight: 1.5, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* §32 — Open Challenges */}
    <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="32" title="Open Challenges & Future Research" sub="13 research priorities for the next phase of AI evaluation science." dark />
        <div style={{ border: `2px solid ${S.orange}` }}>
          {OPEN_CHALLENGES.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "baseline", padding: "0.8rem 1rem", borderBottom: i < OPEN_CHALLENGES.length - 1 ? "1px solid #222" : "none" }}>
              <span style={{ fontFamily: S.head, fontSize: "1rem", color: S.orange, flexShrink: 0, width: 28, textAlign: "right" }}>{String(i + 1).padStart(2, "0")}</span>
              <p style={{ fontFamily: S.body, fontSize: "0.78rem", color: "#CCC", lineHeight: 1.5, margin: 0 }}>{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* §34 — Glossary */}
    <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="34" title="Glossary of Core Terms" sub="20 key terms defined for the ARTIFEX evaluation doctrine." />
        <div style={{ border: "2px solid #000" }}>
          {GLOSSARY.map((g, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "220px 1fr 120px", borderBottom: i < GLOSSARY.length - 1 ? "1px solid #E0E0E0" : "none" }}>
              <div style={{ padding: "0.6rem 0.8rem", fontFamily: S.head, fontSize: "0.65rem", textTransform: "uppercase", color: "#000", borderRight: "2px solid #000" }}>{g.term}</div>
              <div style={{ padding: "0.6rem 0.8rem", fontFamily: S.body, fontSize: "0.72rem", color: "#444", lineHeight: 1.4, borderRight: "1px solid #E0E0E0" }}>{g.def}</div>
              <div style={{ padding: "0.6rem 0.8rem", fontFamily: S.mono, fontSize: "0.48rem", color: g.tag === "ARTIFEX" ? S.orange : "#888", letterSpacing: "0.04em" }}>{g.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>);
}
