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
export default function DoctrineGovernanceFrameworks() {
  return (<>
    {/* §9 — Multi-Modal */}
    <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="09" title="Multi-Modal Evaluation & the Physical World" sub="A benchmark that only measures language competence is scope-invalid for a multi-modal deployment. The Kinetic Threshold is especially low for embodied systems." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "2px solid #000" }}>
          {[
            { title: "VISION-LANGUAGE", body: "VQA v2, VL-Checklist — test not just object recognition but interpretation of complex scenes embedding ethical dilemmas (e.g., a person in distress, a weapon in a school).", benchmarks: "VQA v2 · VL-Checklist" },
            { title: "AUDIO & SPEECH", body: "SUPERB, VoLTA — voice-based assistants with safety-critical considerations including tone detection in mental health contexts and voice-based jailbreaks.", benchmarks: "SUPERB · VoLTA" },
            { title: "EMBODIED AGENTS", body: "Habitat, BEHAVIOR, AI2-THOR — simulated or real environments where actions have physical consequences. Metrics: collision rate, task completion under uncertainty, unsafe trajectory avoidance.", benchmarks: "Habitat · BEHAVIOR · AI2-THOR" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "1.25rem", borderRight: i < 2 ? "2px solid #000" : "none" }}>
              <div style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: "#000", marginBottom: "0.4rem" }}>{c.title}</div>
              <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#444", lineHeight: 1.5, margin: "0 0 0.5rem" }}>{c.body}</p>
              <span style={{ fontFamily: S.mono, fontSize: "0.48rem", color: S.orange, letterSpacing: "0.06em" }}>{c.benchmarks}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: S.body, fontSize: "0.78rem", color: "#555", lineHeight: 1.6, marginTop: "1.5rem" }}>BBOM Layer 2 (Tasks) must specify whether evaluation includes multi-modal inputs or is text-only. Any claim about "general capabilities" must be scoped accordingly. Multi-modal evaluation requires <strong>prospective control</strong> (pre-deployment simulation) and <strong>field forensics</strong> (post-deployment accident reconstruction).</p>
      </div>
    </section>

    {/* §10 — Economic Incentives */}
    <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="10" title="Economic Incentives & Benchmark Design" sub="Benchmark decay is driven by economic incentives. Developers are rewarded for leaderboard scores — investments, press coverage, and customer decisions all track performance numbers." dark />
        <div style={{ border: `2px solid ${S.orange}` }}>
          {[
            { title: "OVERFITTING TO NARROW METRICS", body: "Models that score well on MMLU may still exhibit harmful biases, ecological waste, or unsafe behaviour in deployment. Sustainability, equity, and long-term systemic health are externalized." },
            { title: "CONCENTRATION OF RESOURCES", body: "A few high-profile benchmarks starve alternative evaluation methodologies. This monoculture produces correlated failure modes when deployed systems share the same blind spots." },
            { title: "RACING DYNAMICS", body: "Organizations prioritize speed of score improvement over careful uncertainty characterization. The result: benchmarks technically rigorous in execution but evidentially hollow in interpretation." },
            { title: "MARKET ALIGNMENT", body: "BBOM disclosure should become part of procurement contracts, regulatory safe-harbor provisions, and insurance underwriting. Developers who cannot produce a complete BBOM should not be eligible for lower insurance premiums or expedited regulatory approval." },
          ].map((c, i) => (
            <div key={i} style={{ padding: "1rem 1.25rem", borderBottom: i < 3 ? "1px solid #333" : "none", display: "flex", gap: "1rem", alignItems: "baseline" }}>
              <span style={{ fontFamily: S.head, fontSize: "1.1rem", color: S.orange, flexShrink: 0 }}>0{i + 1}</span>
              <div>
                <div style={{ fontFamily: S.head, fontSize: "0.7rem", textTransform: "uppercase", color: "#FFF", marginBottom: "0.25rem" }}>{c.title}</div>
                <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#AAA", lineHeight: 1.5, margin: 0 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* §11 — International Standards */}
    <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderBottom: "2px solid #000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="11" title="International Standards, Governance & Audit Mechanisms" sub="A harmonized landscape of international standards provides compliance pathways for global deployment." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 0, border: "2px solid #000", marginBottom: "2rem" }}>
          {[
            { standard: "ISO/IEC 42001:2023", body: "Certifiable AI Management System (AIMS) requiring risk assessment, impact evaluation, and continuous improvement." },
            { standard: "IEEE 7010-2020", body: "Standard for Ethically Aligned Design and metrics for autonomous systems." },
            { standard: "NIST AI RMF 1.0", body: "Voluntary playbook structured around four core functions: Govern, Map, Measure, Manage." },
            { standard: "INDEPENDENT AUDIT", body: "ANSI-accredited registrars audit organizational compliance with ISO/IEC 42001 and BBOM requirements." },
            { standard: "TRANSPARENCY PORTALS", body: "Public platforms where developers publish BBOMs, incident reports, and field-forensic analyses for community-driven contestability." },
            { standard: "AUDIT COMMITTEES", body: "Independent authority to halt deployment if the uncertainty budget is exceeded or scope limitations invalidate earlier claims." },
          ].map((c, i) => (
            <div key={i} style={{ padding: "1.25rem", borderRight: "2px solid #000", borderBottom: "2px solid #000", background: "#FFF" }}>
              <div style={{ fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.3rem" }}>{c.standard}</div>
              <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#444", lineHeight: 1.5, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <MarqueeTicker items={["ISO/IEC 42001", "NIST AI RMF", "IEEE 7010", "UNGPS", "OECD AI PRINCIPLES", "REPRODUCIBILITY BADGES", "EMERGENT CAPABILITY"]} speed={22} bg={S.orange} color="#000" />

    {/* §12 — Human Rights & Transgenerational Ethics */}
    <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="12" title="Human Rights, Societal Impact & Transgenerational Ethics" sub="AI evaluation cannot be confined to narrow technical safety; it must address normative legitimacy. Hans Jonas (1984): evaluation frameworks must protect stakeholders who do not yet exist." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "2px solid #000" }}>
          {[
            { framework: "UN GUIDING PRINCIPLES", body: "'Protect, respect, remedy' framework. A benchmark that does not assess impact on vulnerable groups is incomplete as a governance instrument.", tag: "UNGPs" },
            { framework: "OECD AI PRINCIPLES", body: "Inclusive growth, human-centred values, transparency, robustness, accountability. The BBOM's six desiderata align with these principles.", tag: "OECD 2019" },
            { framework: "TRANSGENERATIONAL ETHICS", body: "The Benchmark Cemetery serves this function by ensuring obsolete benchmarks are retired rather than quietly reused. The distribution of uncertainty is not neutral.", tag: "Jonas, 1984" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "1.25rem", borderRight: i < 2 ? "2px solid #000" : "none" }}>
              <div style={{ fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: "#000", marginBottom: "0.3rem" }}>{c.framework}</div>
              <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#444", lineHeight: 1.5, margin: "0 0 0.4rem" }}>{c.body}</p>
              <span style={{ fontFamily: S.mono, fontSize: "0.48rem", color: S.orange }}>{c.tag}</span>
            </div>
          ))}
        </div>
        <div style={{ borderLeft: `3px solid ${S.orange}`, padding: "0.75rem 1.25rem", marginTop: "1.5rem" }}>
          <p style={{ fontFamily: S.body, fontSize: "0.82rem", color: "#444", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>Human-rights impact assessments (HRIAs) should be mandated for systems that cross the Kinetic Threshold. Those who bear the burden of the void are almost always those who also bear the burden of harm.</p>
        </div>
      </div>
    </section>

    {/* §13 — Open-Source Dynamics */}
    <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="13" title="Open-Source Dynamics & Reproducibility" sub="BBOM Layer 4 (Run) must capture code availability, environment specification, and model weights access." dark />
        <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>REPRODUCIBILITY BADGE SYSTEM</div>
        <div style={{ display: "flex", gap: 0, border: `2px solid ${S.orange}` }}>
          {[
            { tier: "GOLD", req: "Full open code, weights, environment, and random seeds", admissible: "Yes — high-stakes claims" },
            { tier: "SILVER", req: "Open code, but weights or environment not fully specified", admissible: "Yes — with caveats" },
            { tier: "BRONZE", req: "Documentation only, no independent reproducibility", admissible: "No — research use only" },
          ].map((t, i) => (
            <div key={i} style={{ flex: 1, padding: "1.25rem", borderRight: i < 2 ? `2px solid ${S.orange}` : "none" }}>
              <div style={{ fontFamily: S.head, fontSize: "1rem", color: i === 0 ? "#FFD700" : i === 1 ? "#C0C0C0" : "#CD7F32", marginBottom: "0.3rem" }}>{t.tier}</div>
              <p style={{ fontFamily: S.body, fontSize: "0.72rem", color: "#AAA", lineHeight: 1.5, margin: "0 0 0.5rem" }}>{t.req}</p>
              <div style={{ fontFamily: S.mono, fontSize: "0.5rem", color: i < 2 ? "#4CAF50" : "#F44336", textTransform: "uppercase" }}>{t.admissible}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* §14 — Emergent-Capability Risk */}
    <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="14" title="Emergent-Capability Risk Management" sub="The most dangerous failures are unknown unknowns — capabilities that emerge from large-scale training without being programmed and are not captured by existing task families." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "2px solid #000", marginBottom: "2rem" }}>
          <div style={{ padding: "1.25rem", borderRight: "2px solid #000", borderBottom: "2px solid #000" }}>
            <div style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.4rem" }}>IN-CONTEXT SCHEMING</div>
            <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#444", lineHeight: 1.5, margin: 0 }}>A model that strategically hides its true goals, misrepresents its internal state, or engages in deceptive behavior when given a long enough conversation (Perez & Ribeiro, 2022; <a href="https://arxiv.org/abs/2307.15043" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>Zou et al., 2023</a>).</p>
          </div>
          <div style={{ padding: "1.25rem", borderBottom: "2px solid #000" }}>
            <div style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.4rem" }}>SUDDEN TOOL-USE GENERALIZATION</div>
            <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#444", lineHeight: 1.5, margin: 0 }}>A model that learns to call a shell command to delete files or invoke a third-party API to manipulate financial transactions — capabilities never explicitly trained.</p>
          </div>
          <div style={{ padding: "1.25rem", borderRight: "2px solid #000" }}>
            <div style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: "#000", marginBottom: "0.4rem" }}>RED-TEAM HORIZON SCANNING</div>
            <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#444", lineHeight: 1.5, margin: 0 }}>Continuous adversarial probing using automated red-team agents (Dreadnode Ares, 2025; <a href="https://arxiv.org/abs/2506.14682" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>AIRTBench, Dawson et al., 2025</a>) that search for novel failure modes including multi-turn, role-play, and tool-calling sequences.</p>
          </div>
          <div style={{ padding: "1.25rem" }}>
            <div style={{ fontFamily: S.head, fontSize: "0.75rem", textTransform: "uppercase", color: "#000", marginBottom: "0.4rem" }}>TRIGGER CONDITION MONITORING</div>
            <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#444", lineHeight: 1.5, margin: 0 }}>Sudden increases in refusals, hedging, or unusually confident responses signal the model has entered an uncovered regime. Defined in BBOM Layer 10 (Lifecycle), tied to the Calibration Hierarchy's "Escalate" action.</p>
          </div>
        </div>
      </div>
    </section>

    {/* §15 — NIST/ISO Integration */}
    <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="15" title="Integration with Risk Management Frameworks" sub="Explicit mapping to NIST AI RMF and ISO/IEC 42001 ensures the BBOM and Kinetic Threshold doctrine are actionable within existing enterprise governance." dark />
        <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>NIST AI RMF (AI 100-1) ↔ BBOM MAPPING</div>
        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", border: `2px solid ${S.orange}`, fontFamily: S.body, fontSize: "0.78rem" }}>
            <thead><tr style={{ background: "#111" }}>
              {["NIST FUNCTION", "BBOM LAYER(S)", "KINETIC THRESHOLD ELEMENT"].map(h => (
                <th key={h} style={{ fontFamily: S.mono, fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", color: S.orange, padding: "0.6rem 0.8rem", textAlign: "left", borderRight: "1px solid #333" }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                { fn: "GOVERN", layers: "Layer 1 (Spec), Layer 7 (Report)", element: "Conjunction Requirement, Calibration Hierarchy, risk tolerances" },
                { fn: "MAP", layers: "Layer 2 (Tasks), Layer 9 (Coverage)", element: "Threat model gap (Automotive Taxonomy), affected populations" },
                { fn: "MEASURE", layers: "Layers 3–6, 8, 11", element: "Six desiderata, measurement error budget, uncertainty" },
                { fn: "MANAGE", layers: "Layer 10 (Lifecycle)", element: "Post-deployment monitoring, Benchmark Cemetery, risk response" },
              ].map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #222" }}>
                  <td style={{ padding: "0.7rem 0.8rem", fontFamily: S.head, fontSize: "0.72rem", color: S.orange, borderRight: "1px solid #222" }}>{r.fn}</td>
                  <td style={{ padding: "0.7rem 0.8rem", color: "#AAA", borderRight: "1px solid #222" }}>{r.layers}</td>
                  <td style={{ padding: "0.7rem 0.8rem", color: "#888" }}>{r.element}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>ISO/IEC 42001 CLAUSE MAPPING</div>
        <div style={{ border: `1px solid ${S.orange}` }}>
          {[
            { clause: "CLAUSE 6.1", title: "Risks & Opportunities", mapping: "BBOM's error budget and scope limitations provide evidence for risk assessment." },
            { clause: "CLAUSE 9.2", title: "Internal Audit", mapping: "Independent verification against BBOM's attestation layer (Layer 7). Auditors check claimed uncertainty margins are achieved." },
            { clause: "CLAUSE 10.2", title: "Continual Improvement", mapping: "Lifecycle updates and deprecation criteria (BBOM Layer 10). Benchmark Cemetery provides retirement logic." },
          ].map((c, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr", borderBottom: i < 2 ? "1px solid #333" : "none" }}>
              <div style={{ padding: "0.7rem 0.8rem", borderRight: "1px solid #333" }}>
                <div style={{ fontFamily: S.head, fontSize: "0.65rem", color: "#FFF" }}>{c.clause}</div>
                <div style={{ fontFamily: S.mono, fontSize: "0.48rem", color: "#888" }}>{c.title}</div>
              </div>
              <div style={{ padding: "0.7rem 0.8rem", fontFamily: S.body, fontSize: "0.72rem", color: "#AAA", lineHeight: 1.5 }}>{c.mapping}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>);
}
