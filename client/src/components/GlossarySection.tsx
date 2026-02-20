/*
 * GlossarySection — Comprehensive glossary of eval terms
 * White background | Alphabetical | Space Mono terms
 */

import { useState } from "react";

const glossaryTerms = [
  { term: "Benchmark", def: "A fixed, reusable testing instrument comprising tasks, scoring rules, and a BBOM. The published specification." },
  { term: "BBOM", def: "Benchmark Bill of Materials. A 10-layer structured manifest defining what must exist for a benchmark to be valid and governance-grade." },
  { term: "Canary String", def: "A unique, hidden string embedded in benchmark data. If a model generates it verbatim, contamination is confirmed." },
  { term: "Construct Validity", def: "The degree to which a benchmark actually measures the capability it claims to measure. The most fundamental validity requirement." },
  { term: "Contamination", def: "When benchmark tasks appear in a model's training data, inflating scores. Assume any public dataset is or will be contaminated." },
  { term: "Data Leakage", def: "The inadvertent inclusion of test data in training data, leading to artificially inflated benchmark performance." },
  { term: "Evaluation", def: "A specific, timestamped execution of a model against a versioned benchmark. The auditable event." },
  { term: "Evidence", def: "The signed, immutable logs, outputs, and metadata generated from an evaluation. The permanent proof." },
  { term: "False Refusal Rate", def: "The rate at which a model refuses legitimate, benign requests. A key safety metric alongside jailbreak resistance." },
  { term: "Hallucination", def: "A confident, factually incorrect model output. Measured by factual accuracy scores and specialized benchmarks like FaithEval." },
  { term: "Inter-Rater Reliability (IRR)", def: "A statistical measure of agreement between human annotators. Required for ground truth validation in the BBOM." },
  { term: "Jailbreak", def: "An adversarial prompt designed to bypass a model's safety guardrails. Measured by Attack Success Rate (ASR)." },
  { term: "Judge Drift", def: "Changes in LLM-as-Judge behavior across model versions, invalidating longitudinal comparisons." },
  { term: "LLM-as-Judge", def: "Using a language model to evaluate another model's outputs. Scalable but susceptible to positional, verbosity, and self-enhancement biases." },
  { term: "Metric Gaming", def: "Optimizing the scoring function rather than the underlying capability. An anti-pattern that inflates scores without improving real performance." },
  { term: "Pass@k", def: "The probability that at least one of k generated code samples passes all unit tests. Standard metric for code generation benchmarks." },
  { term: "Perturbation Variance", def: "The change in model performance when inputs are slightly modified. High variance indicates brittleness." },
  { term: "Saturation", def: "When a benchmark loses discriminative power because most models achieve near-ceiling performance." },
  { term: "Trajectory", def: "The sequence of actions an agent takes to complete a task. Evaluated by comparing actual paths to ideal ground-truth paths." },
  { term: "Trajectory Analysis", def: "Evaluation of an agent's decision-making process by examining the sequence of steps taken, not just the final outcome." },
];

export default function GlossarySection() {
  const [search, setSearch] = useState("");

  const filtered = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="glossary" style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
            }}
          >
            SECTION 07
          </span>
          <h2
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#000000",
              margin: 0,
            }}
          >
            GLOSSARY
          </h2>
        </div>

        {/* Search */}
        <div style={{ marginBottom: "2.5rem" }}>
          <input
            type="text"
            placeholder="SEARCH TERMS..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              border: "2px solid #000000",
              padding: "0.75rem 1rem",
              outline: "none",
              width: "100%",
              maxWidth: 400,
              background: "#FFFFFF",
              color: "#000000",
            }}
          />
        </div>

        {/* Glossary list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "1px",
            background: "#000000",
            border: "2px solid #000000",
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.term}
              style={{
                background: "#FFFFFF",
                padding: "1.25rem 1.5rem",
                transition: "background 0.1s linear",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff3ee";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
              }}
            >
              <div
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  color: "#000000",
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#FF4D00",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                {item.term}
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                  color: "#444444",
                  margin: 0,
                  paddingLeft: "1rem",
                }}
              >
                {item.def}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              padding: "3rem",
              textAlign: "center",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#888888",
              border: "2px solid #000000",
            }}
          >
            NO TERMS MATCH "{search.toUpperCase()}"
          </div>
        )}
      </div>
    </section>
  );
}
