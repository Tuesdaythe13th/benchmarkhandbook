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
export default function DoctrineTransparency() {
  return (<>
    {/* §5 — Model-Level Transparency */}
    <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="05" title="Model-Level Transparency & Mechanistic Interpretability" sub="A governance-grade evaluation cannot rely solely on behavioral outputs; it must interrogate the internal structure of the model." dark />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 0, border: `2px solid ${S.orange}`, marginBottom: "2rem" }}>
          {[
            { title: "CAUSAL TRACING", body: "Identify which internal components are causally responsible for a given output using activation patching (Vig et al., 2020; Geiger et al., 2021). Ask not just 'did the model refuse?' but 'what internal state produced the refusal?'", cite: "Vig et al., 2020" },
            { title: "MECHANISTIC FEATURE EXTRACTION", body: "Sparse autoencoders decompose model activations into interpretable features — units corresponding to concepts like 'self-harm ideation detection' or 'legal disclaimers' (Elhage et al., 2022; Anthropic, 2025).", cite: "Elhage et al., 2022" },
            { title: "ATTRIBUTION GRAPHS", body: "Map circuits of features implementing algorithmic reasoning steps, enabling sub-symbolic decision-path tracing (Lindsey et al., 2025).", cite: "Lindsey et al., 2025" },
            { title: "EXPLAINABILITY PROVENANCE", body: "Tools, versions, and annotators used for post-hoc explanations must be documented. Without provenance, an explanation may be 'plausible-sounding confabulation' (Haas et al., 2026).", cite: "Haas et al., 2026" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "1.25rem", borderRight: "2px solid #333", borderBottom: "2px solid #333" }}>
              <div style={{ fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.4rem" }}>{c.title}</div>
              <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#AAA", lineHeight: 1.6, margin: "0 0 0.4rem" }}>{c.body}</p>
              <span style={{ fontFamily: S.mono, fontSize: "0.48rem", color: "#666", letterSpacing: "0.06em" }}>{c.cite}</span>
            </div>
          ))}
        </div>
        <div style={{ borderLeft: `3px solid ${S.orange}`, padding: "0.75rem 1.25rem" }}>
          <p style={{ fontFamily: S.body, fontSize: "0.82rem", color: "#CCC", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
            Model cards (<a href="https://arxiv.org/abs/1810.03993" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>Mitchell et al., 2019</a>) and datasheets for datasets (<a href="https://arxiv.org/abs/1803.09010" target="_blank" rel="noopener noreferrer" style={{ color: S.orange, textDecoration: "none" }}>Gebru et al., 2021</a>) are necessary but insufficient — they address documentation, not the facsimile problem. BBOM Layers 4 (Run) and 6 (Judge) must include internal-state evidence.
          </p>
        </div>
      </div>
    </section>

    {/* §6 — Post-Deployment Monitoring */}
    <section style={{ padding: "4rem 2rem", background: "#FFF", borderBottom: "2px solid #000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="06" title="Post-Deployment Monitoring & Continuous Assurance" sub="The Kinetic Threshold is not a one-time crossing. Systems drift, environments change, and new failure modes emerge. A benchmark valid at deployment may become invalid within weeks." />
        <div style={{ border: "2px solid #000" }}>
          {[
            { title: "RUNTIME SAFETY MONITORING", body: "Real-time anomaly detection, toxicity classifiers, and behavioral drift detectors comparing current outputs to the evaluation baseline. Monitor for sudden changes in refusal rates, sentiment, or tool-calling patterns.", cite: "Weidinger et al., 2023" },
            { title: "CONTINUOUS UNCERTAINTY QUANTIFICATION", body: "Online Bayesian calibration updating confidence intervals as new data arrives. The uncertainty budget must report separate aleatoric and epistemic components. If the combined band overlaps the deployment threshold, the system must abstain or trigger human-in-the-loop escalation.", cite: "Kadavath et al., 2022; Lin et al., 2022" },
            { title: "AUTOMATED FEEDBACK LOOPS", body: "Triggers for re-evaluation, BBOM updates, or model rollback when monitoring signals exceed predefined risk tolerances. If observed harmful outputs double the BBOM's projected upper bound, the system automatically 'de-risks' by switching to a safer fallback.", cite: "Barrett et al., 2025" },
          ].map((c, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr", borderBottom: i < 2 ? "1px solid #E0E0E0" : "none" }}>
              <div style={{ padding: "1rem", fontFamily: S.head, fontSize: "0.7rem", textTransform: "uppercase", color: S.orange, borderRight: "2px solid #000" }}>{c.title}</div>
              <div style={{ padding: "1rem" }}>
                <p style={{ fontFamily: S.body, fontSize: "0.76rem", color: "#444", lineHeight: 1.6, margin: "0 0 0.3rem" }}>{c.body}</p>
                <span style={{ fontFamily: S.mono, fontSize: "0.48rem", color: "#888" }}>{c.cite}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: S.body, fontSize: "0.78rem", color: "#555", lineHeight: 1.6, marginTop: "1.5rem", maxWidth: 720 }}>
          Post-deployment monitoring directly informs BBOM Layer 10 (Lifecycle). A system that cannot produce a continuous audit trail of its own behaviour against the Kinetic Threshold cannot be considered governance-grade.
        </p>
      </div>
    </section>

    <MarqueeTicker items={["DATA PROVENANCE", "INTERSECTIONAL BIAS", "DESIGNED VOID", "AFFORDED VOID", "POLITICAL VOID", "LINEAGE TRACKING", "CHANGE-LOG GOVERNANCE"]} speed={24} bg="#000" color={S.orange} />

    {/* §7 — Data Provenance */}
    <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderBottom: "2px solid #000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="07" title="Data Provenance, Versioning & Intersectional Bias" sub="The ground truth underpinning any benchmark is only as trustworthy as its provenance. Datasheets for Datasets (Gebru et al., 2021) require documentation of creation motivation, composition, collection process, preprocessing, and intended uses." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 0, border: "2px solid #000", marginBottom: "2rem" }}>
          {[
            { title: "LINEAGE TRACKING", body: "Version control of all datasets, prompt templates, and rubrics. Immutable snapshots via cryptographic hashes and content-addressable storage enable reproducibility of BBOM Layer 3 (Truth)." },
            { title: "VOID DETECTION", body: "Explicit identification of populations, languages, and threat models never in scope (Designed Void) or excluded by resource constraints (Afforded Void). ARTIFEX-original construct." },
            { title: "CHANGE-LOG GOVERNANCE", body: "Every dataset update, fine-tuning run, and benchmark refresh recorded with timestamp, responsible party, and justification. Satisfies BBOM Layer 8 (Integrity) and Layer 10 (Lifecycle)." },
            { title: "INTERSECTIONAL BIAS", body: "Following Crenshaw (1989), fairness analysis must treat overlapping categories (race × gender × disability) as distinct groups. A benchmark may show parity on each axis and hide severe harms at intersections. BBOM Layer 9 (Coverage) requires slicing across all relevant intersectional groups." },
            { title: "EQUITY-WEIGHTED METRICS", body: "Errors on historically burdened groups are counted more heavily in the overall score, aligning with structural bias audits (Buolamwini & Gebru, 2018)." },
            { title: "POLITICAL VOID", body: "Proprietary data sources that cannot be audited. A benchmark relying on opaque sources must obtain verifiable access through a trusted third-party auditor or be marked provisional — not admissible for high-stakes deployment." },
          ].map((c, i) => (
            <div key={i} style={{ padding: "1.25rem", borderRight: "2px solid #000", borderBottom: "2px solid #000", background: "#FFF" }}>
              <div style={{ fontFamily: S.head, fontSize: "0.72rem", textTransform: "uppercase", color: "#000", marginBottom: "0.4rem" }}>{c.title}</div>
              <p style={{ fontFamily: S.body, fontSize: "0.75rem", color: "#555", lineHeight: 1.6, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* §8 — Privacy & Formal Safety */}
    <section style={{ padding: "4rem 2rem", background: "#000", borderBottom: `2px solid ${S.orange}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Hdr n="08" title="Privacy, Data Protection & Formal Safety Guarantees" sub="Evaluation pipelines consume and sometimes store sensitive data. Privacy and data-protection compliance is a legal prerequisite (GDPR, CCPA). BBOM Layer 3 (Truth) must document these protocols." dark />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <div>
            <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>COMPLIANCE REQUIREMENTS</div>
            <div style={{ border: `1px solid ${S.orange}` }}>
              {[
                { title: "DATA MINIMIZATION", body: "Only necessary data collected; retention policies enforced with automated deletion." },
                { title: "CONSENT MECHANISMS", body: "Explicit, granular, revocable consent for human-annotated data — especially from minors or vulnerable populations." },
                { title: "ANONYMIZATION", body: "Pseudonymization procedures for logs and evaluation traces, including differential privacy guarantees where appropriate." },
              ].map((c, i) => (
                <div key={i} style={{ padding: "0.8rem 1rem", borderBottom: i < 2 ? "1px solid #333" : "none" }}>
                  <div style={{ fontFamily: S.head, fontSize: "0.65rem", textTransform: "uppercase", color: "#FFF", marginBottom: "0.25rem" }}>{c.title}</div>
                  <p style={{ fontFamily: S.body, fontSize: "0.72rem", color: "#888", lineHeight: 1.5, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: S.mono, fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: S.orange, marginBottom: "0.75rem" }}>FORMAL SAFETY GUARANTEES</div>
            <div style={{ border: `1px solid ${S.orange}` }}>
              {[
                { title: "PROVABLE ROBUSTNESS", body: "Certified bounds on output change under input perturbation using SMT solvers or abstract interpretation (Katz et al., 2017)." },
                { title: "FORMAL VERIFICATION", body: "Model checking or SMT to prove certain harmful outputs cannot occur for any input in the operational domain (Dennis et al., 2016)." },
                { title: "MATHEMATICAL RISK BOUNDS", body: "Worst-case guarantees for high-stakes components such as control loops or tool-calling APIs, complementing the BBOM's empirical uncertainty." },
              ].map((c, i) => (
                <div key={i} style={{ padding: "0.8rem 1rem", borderBottom: i < 2 ? "1px solid #333" : "none" }}>
                  <div style={{ fontFamily: S.head, fontSize: "0.65rem", textTransform: "uppercase", color: S.orange, marginBottom: "0.25rem" }}>{c.title}</div>
                  <p style={{ fontFamily: S.body, fontSize: "0.72rem", color: "#888", lineHeight: 1.5, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p style={{ fontFamily: S.body, fontSize: "0.78rem", color: "#666", lineHeight: 1.6, marginTop: "1.5rem" }}>
          When a developer claims a formal safety guarantee, the method and its assumptions must be disclosed in Layer 8 (Integrity). For most real-world LLMs, full formal verification is currently intractable, but hybrid systems combining neural modules with symbolic safety envelopes offer a practical path.
        </p>
      </div>
    </section>
  </>);
}
