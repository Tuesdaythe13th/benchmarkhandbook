/*
 * BbomSection — 10-Layer Bill of Materials (BBOM)
 * Black background section | Orange headers | White text
 * Skewed divider entry
 */

const bbomLayers = [
  {
    layer: "01",
    name: "SPEC",
    def: "The written definition of what is measured and why.",
    verify: "Peer Review",
    failure: "Construct Drift",
  },
  {
    layer: "02",
    name: "TASKS",
    def: "The raw input stimuli (prompts, images, etc.) given to the model.",
    verify: "Diversity Audit",
    failure: "Data Leakage / Memorization",
  },
  {
    layer: "03",
    name: "TRUTH",
    def: "The reference targets or verifiers used to judge correctness.",
    verify: "Expert Consensus (IRR)",
    failure: "Weak Ground Truth",
  },
  {
    layer: "04",
    name: "RUN",
    def: "The exact runtime configuration and parameters for the evaluation.",
    verify: "Log Hashing",
    failure: "Non-Determinism",
  },
  {
    layer: "05",
    name: "SCORE",
    def: "The mathematical logic and code that grades the model's output.",
    verify: "Unit Tests",
    failure: "Metric Gaming",
  },
  {
    layer: "06",
    name: "JUDGE",
    def: "The automated arbiter (e.g., code, simulator, or LLM) that resolves ambiguity.",
    verify: "Calibration / IRR Checks",
    failure: "Judge Drift and Bias",
  },
  {
    layer: "07",
    name: "REPORT",
    def: "The aggregated results and slice-based diagnostic visualizations.",
    verify: "Slice Checks / Bias Heatmaps",
    failure: "Missing Tails / Hiding Failures",
  },
  {
    layer: "08",
    name: "INTEGRITY",
    def: "The anti-cheating controls (e.g., canaries, hashes).",
    verify: "Contamination Scan",
    failure: "Benchmark Memorization",
  },
  {
    layer: "09",
    name: "COVERAGE",
    def: "The measure of how representative the benchmark is across locales and modalities.",
    verify: "Gap Analysis",
    failure: "Performance Blindspots",
  },
  {
    layer: "10",
    name: "LIFECYCLE",
    def: "The policy for refreshing and retiring benchmark components over time.",
    verify: "Change Control",
    failure: "Benchmark Staleness",
  },
];

const modalities = [
  {
    mod: "TEXT",
    focus: "Reasoning chains and subtext",
    req: "Logic verification steps within the Judge",
    failure: "Confident Hallucinations",
  },
  {
    mod: "IMAGE",
    focus: "Spatial reasoning and OCR",
    req: "Object-relation grounding and bounding box checks",
    failure: "Object Hallucination",
  },
  {
    mod: "AUDIO",
    focus: "Dialect and sentiment cues",
    req: "Robustness testing against acoustic noise; transcript alignment",
    failure: "Mishearing / Accent Bias",
  },
  {
    mod: "VIDEO",
    focus: "Causal structure and continuity",
    req: "Temporal event boundary checks with timecode evidence",
    failure: "Temporal Confusion",
  },
  {
    mod: "GENOMICS",
    focus: "Pattern sensitivity and statistical validity",
    req: "Statistical overreach limits and false discovery rate controls",
    failure: "False Biological Claims",
  },
  {
    mod: "SENSOR",
    focus: "Physics constraints and real-time response",
    req: "Hard bounds checking and latency measurement",
    failure: "Unsafe Action Suggestions",
  },
];

export default function BbomSection() {
  return (
    <section
      id="bbom"
      style={{
        background: "#000000",
        color: "#FFFFFF",
        padding: "5rem 2rem",
        borderTop: "2px solid #FF4D00",
        borderBottom: "2px solid #FF4D00",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "3rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
            }}
          >
            SECTION 02
          </span>
          <h2
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            THE 10-LAYER
            <br />
            <span style={{ color: "#FF4D00" }}>BILL OF MATERIALS</span>
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "#AAAAAA",
            maxWidth: 700,
            marginBottom: "3rem",
          }}
        >
          The Benchmark Bill of Materials (BBOM) defines what must exist for a benchmark to be valid.
          Each layer is a system requirement with a verification method and a known failure mode.
          A benchmark without a complete BBOM is not governance-grade.
        </p>

        {/* BBOM table */}
        <div style={{ overflowX: "auto", marginBottom: "4rem" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "-0.01em",
            }}
          >
            <thead>
              <tr>
                {["LAYER", "NAME", "FIRST-PRINCIPLES DEFINITION", "VERIFICATION METHOD", "FAILURE MODE"].map((h) => (
                  <th
                    key={h}
                    style={{
                      background: "#FF4D00",
                      color: "#000000",
                      fontFamily: "'Archivo Black', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      padding: "0.75rem 1rem",
                      textAlign: "left",
                      border: "1px solid #FF4D00",
                      fontSize: "0.65rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bbomLayers.map((row, i) => (
                <tr
                  key={row.layer}
                  style={{
                    background: i % 2 === 0 ? "#111111" : "#1a1a1a",
                    transition: "background 0.1s linear",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#2a1a0a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "#111111" : "#1a1a1a";
                  }}
                >
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #333333",
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "1.1rem",
                      color: "#FF4D00",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {row.layer}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #333333",
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      color: "#FFFFFF",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.name}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #333333",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "#CCCCCC",
                      lineHeight: 1.4,
                    }}
                  >
                    {row.def}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #333333",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#AAAAAA",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.verify}
                  </td>
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #333333",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#FF4D00",
                    }}
                  >
                    {row.failure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modalities section */}
        <div>
          <h3
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1.5rem",
            }}
          >
            TABLE IV.1 — MODALITY LOCALIZATION REQUIREMENTS (2026)
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1px",
              background: "#333333",
              border: "1px solid #333333",
            }}
          >
            {modalities.map((m) => (
              <div
                key={m.mod}
                style={{
                  background: "#111111",
                  padding: "1.5rem",
                  borderLeft: "3px solid #FF4D00",
                  transition: "background 0.15s linear",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1a0a00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#111111";
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "1.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.04em",
                    color: "#FF4D00",
                    marginBottom: "0.75rem",
                  }}
                >
                  {m.mod}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#888888",
                    marginBottom: "0.25rem",
                  }}
                >
                  2026 FOCUS
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "#CCCCCC",
                    margin: "0 0 0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {m.focus}
                </p>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#888888",
                    marginBottom: "0.25rem",
                  }}
                >
                  FAILURE MODE
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#FF4D00",
                  }}
                >
                  {m.failure}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
