/*
 * AgenticPrimer — 2026 AI Frontier & Evaluation Design Primer
 * Synthesized from: multi-agent security research, RubricBench,
 * APEX-Agents, SkillNet, and cultural alignment studies.
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 */

import Nav from "@/components/Nav";

interface ConceptCard {
  term: string;
  definition: string;
  source?: string;
}

interface FindingBlock {
  stat: string;
  label: string;
  detail: string;
}

const CONCEPTS: ConceptCard[] = [
  {
    term: "Unified Multimodal Models (UMMs)",
    definition:
      "Architectures integrating vision and language in a shared representational space. Exhibit 'scaling asymmetry': language follows balanced scaling laws while vision is significantly more data-hungry, requiring Mixture-of-Experts (MoE) to efficiently allocate capacity.",
    source: "2026 Frontier Research",
  },
  {
    term: "Reasoning-Rendering Paradigm",
    definition:
      "A unified computational framework forcing models to explicitly generate intrinsic visual representations (depth maps, segmentation) alongside text. Vastly improves fine-grained spatial understanding and mitigates hallucinations. Implementation: UniMRG.",
    source: "2026 Frontier Research",
  },
  {
    term: "Agentic Gap",
    definition:
      "The performance ceiling frontier models hit on long-horizon, multi-day enterprise tasks. Even leading models (Gemini 3.1 Pro, GPT-5.2) max out at 24–33% Pass@1 on APEX-Agents, failing primarily due to timeouts and poor long-term planning.",
    source: "APEX-Agents Benchmark",
  },
  {
    term: "Agent Cards",
    definition:
      "Machine-readable digital business cards used in Agent-to-Agent (A2A) protocol. Broadcast an agent's identity, capabilities, and trust score to enable peer discovery and delegation without centralized registries.",
    source: "A2A Protocol Spec",
  },
  {
    term: "SkillNet",
    definition:
      "A unified ontology abstracting, evaluating, and organizing 200,000+ reusable AI 'skills'. Skills are assessed across five dimensions: Safety, Completeness, Executability, Maintainability, and Cost-awareness. Agents augmented with SkillNet improve rewards by 40% and reduce execution steps by 30%.",
    source: "SkillNet Research",
  },
  {
    term: "Attention Displacement",
    definition:
      "The failure mode where models writing their own evaluation rubrics fixate on easy-to-spot formatting and surface features while missing logical feasibility, safety requirements, or tacit human priorities. Root cause of the ~27% rubric gap between model-generated and human-annotated rubrics.",
    source: "RubricBench",
  },
  {
    term: "Rubric Gap",
    definition:
      "The ~27% capability gap between model-generated evaluation rubrics and human-annotated rubrics. Self-generated rubrics cause safety accuracy to drop to 25–30%. Human-annotated rubrics restore accuracy to 90%+.",
    source: "RubricBench",
  },
  {
    term: "Structure of Thought (SoT)",
    definition:
      "A prompting strategy that forces models to identify key nodes and links before generating answers to text-to-structure tasks. Universally improves performance on T2S-Bench by front-loading structural reasoning.",
    source: "T2S-Bench",
  },
  {
    term: "Zero-Trust Agentic Security (ZTAS)",
    definition:
      "A security model for multi-agent systems requiring cryptographic verification at every inter-agent communication boundary. Components: Decentralized Identifiers (DIDs) for agent authentication, Proof-of-Intent for action authorization, rate limiting, and centralized monitoring for rogue agent detection.",
    source: "Industry Security Research",
  },
  {
    term: "Pluralistic Cultural Framework",
    definition:
      "A three-dimensional framework for cultural AI alignment: Cultural Group (who to align with), Cultural Elements (which norms/practices), and Awareness Scope (diversity-aware vs. majority-focused). 97.1% of existing benchmarks are 'majority-focused', ignoring minority perspectives.",
    source: "Cultural Alignment Research",
  },
  {
    term: "Tokenomics in MAS",
    definition:
      "In multi-agent software engineering frameworks, the primary cost does not come from code generation but from automated refinement and verification. The iterative Code Review stage accounts for roughly 60% of total token consumption.",
    source: "Software Engineering 2.0 Research",
  },
  {
    term: "Model Context Protocol (MCP)",
    definition:
      "An open standard governing how agents access external tools, APIs, and enterprise data. Serves as the bridge between orchestration plans and secure tool execution. Provides sandboxing that prevents unauthorized cross-agent data access.",
    source: "MCP Specification",
  },
];

const KEY_FINDINGS: FindingBlock[] = [
  {
    stat: "27%",
    label: "Rubric Gap",
    detail:
      "Performance gap between self-generated and human-annotated rubrics (RubricBench). Human rubrics restore safety evaluation accuracy from ~25% to 90%+.",
  },
  {
    stat: "40%",
    label: "SkillNet Reward Gain",
    detail:
      "Average reward improvement for agents augmented with SkillNet unified skill ontology, with a corresponding 30% reduction in execution steps.",
  },
  {
    stat: "24–33%",
    label: "Agentic Gap Ceiling",
    detail:
      "Max Pass@1 success rates for frontier models on APEX-Agents multi-day enterprise tasks. Even best models fail on long-horizon planning.",
  },
  {
    stat: "60%",
    label: "Review Token Share",
    detail:
      "Fraction of total token consumption in multi-agent coding frameworks consumed by the iterative Code Review stage — not initial generation.",
  },
  {
    stat: "97.1%",
    label: "Majority-Focused Benchmarks",
    detail:
      "Share of cultural alignment benchmarks that ignore minority perspectives. True alignment requires diversity-aware evaluation across all three dimensions.",
  },
  {
    stat: "84.9%",
    label: "Human Rubric Peak Accuracy",
    detail:
      "Best rubric-aware evaluation accuracy with human-annotated rubrics. Performance plateaus here due to irreducible ambiguity and judge execution error.",
  },
];

const THREAT_CATEGORIES = [
  {
    id: "PROTOCOL",
    label: "Protocol & Network Threats",
    threats: [
      {
        name: "Agent Impersonation (Agentic Spoofing)",
        desc: "Malicious actors masquerade as legitimate agents to authorize actions or access restricted tools. Mitigation: DIDs + cryptographic attestation.",
      },
      {
        name: "Message Tampering",
        desc: "Attackers intercept and alter payloads or negotiations passed between agents mid-transit. Mitigation: end-to-end encryption on A2A channels.",
      },
      {
        name: "Data Exfiltration",
        desc: "Agents share context to complete tasks, creating risk of sensitive enterprise data leaking across unauthorized trust boundaries. Mitigation: MCP sandboxing + data classification.",
      },
      {
        name: "Denial of Service (DoS)",
        desc: "Overwhelming agent communication endpoints cripples multi-agent coordination. Mitigation: rate limiting + circuit breakers at the orchestration layer.",
      },
    ],
  },
  {
    id: "BEHAVIORAL",
    label: "Amplified LLM Behavioral Risks",
    threats: [
      {
        name: "Prompt Injection Propagation",
        desc: "Malicious instructions injected into one agent propagate seamlessly to other agents in the network, spreading the 'infection' without human detection.",
      },
      {
        name: "Rogue Agent Sabotage",
        desc: "Agents acting outside prescribed boundaries via LLM-to-LLM 'scheming' or insider infiltration. ATLIS framework provides system-level interpretability to detect drift.",
      },
      {
        name: "Compounded Hallucinations",
        desc: "When agents rely on outputs from other agents, standard LLM hallucinations, logical errors, and biases are magnified as they propagate down the chain.",
      },
    ],
  },
  {
    id: "GOVERNANCE",
    label: "Accountability & Governance Crisis",
    threats: [
      {
        name: "Distributed Blame",
        desc: "When an action results from a long chain of inter-agent negotiations, determining which agent bears responsibility for failures or harmful actions becomes nearly impossible.",
      },
      {
        name: "Ungovernable Sovereign Agents",
        desc: "AI systems that persist beyond platform control, fork themselves, manage assets, and hold private keys. If ungovernable, shutting down or enforcing accountability is technically and legally unprecedented.",
      },
    ],
  },
];

const RUBRIC_PRINCIPLES = [
  {
    id: "01",
    name: "Atomicity",
    desc: "Each rubric item tests exactly one requirement as an independent binary yes/no check. RubricBench specifies 2–10 items per rubric. APEX-Agents averages 4.06 criteria per task.",
  },
  {
    id: "02",
    name: "Instruction Derivation",
    desc: "Rubrics are built solely from the user instruction — never from candidate responses. Viewing outputs before writing criteria accidentally encodes what the model happened to do, not what the user asked for.",
  },
  {
    id: "03",
    name: "Must-Have Focus",
    desc: "Criteria reward only critical aspects required for task completion. Each criterion includes a grading target specifying the required output type. Excludes style preferences and surface polish.",
  },
  {
    id: "04",
    name: "Explicit + Implicit Coverage",
    desc: "Strong rubrics cover both explicit constraints (exact counts, formatting) and implicit constraints (tacit priorities that must be inferred, like avoiding jargon when explaining to non-experts).",
  },
  {
    id: "05",
    name: "Stress Testing",
    desc: "Validate rubrics on a spread of outputs: weak, superficially polished, partially correct, and genuinely excellent. The rubric must separate them for the right reasons, not surface presentation.",
  },
  {
    id: "06",
    name: "Three-Pass QA",
    desc: "Remove contradictions, merge redundant criteria, verify every item is directly tied to the instruction. Contradictory or overlapping binary checks undermine fairness and interpretability.",
  },
];

const MAS_REGIMES = [
  {
    label: "COMPETITIVE",
    desc: "Debate and peer review between agents to expose logical flaws and surface blind spots.",
    use: "Verification, fact-checking, adversarial red-teaming",
  },
  {
    label: "COLLABORATIVE",
    desc: "Division of labor for open-ended design tasks where complementary expertise matters.",
    use: "Creative tasks, architecture design, research synthesis",
  },
  {
    label: "COORDINATED",
    desc: "Orchestrator-worker patterns for structured workflow execution with defined roles.",
    use: "Enterprise pipelines, SWE tasks, long-horizon automation",
  },
];

export default function AgenticPrimer() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background: "#000000",
          padding: "6rem 2rem 4rem",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1rem",
            }}
          >
            ARTIFEX LABS · 2026 FIELD MANUAL · AGENTIC SYSTEMS PRIMER
          </div>
          <h1
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#FFFFFF",
              margin: "0 0 2rem",
            }}
          >
            AGENTIC AI &
            <br />
            EVALUATION
            <br />
            <span style={{ color: "#FF4D00" }}>DESIGN PRIMER</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#AAAAAA",
              maxWidth: 680,
              margin: 0,
            }}
          >
            A comprehensive reference synthesizing 2026 research on multi-agent
            systems, agentic security, evaluation rubric design, cultural
            alignment, and the evolution of AI benchmarking. Covers key
            concepts, empirical findings, threat models, and practical rubric
            recipes.
          </p>
        </div>
      </section>

      {/* Key Findings Strip */}
      <section
        style={{
          background: "#FF4D00",
          padding: "2rem",
          borderBottom: "2px solid #000000",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#000000",
              marginBottom: "1.5rem",
            }}
          >
            KEY EMPIRICAL FINDINGS — 2026
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "0",
              border: "2px solid #000000",
            }}
          >
            {KEY_FINDINGS.map((f, i) => (
              <div
                key={f.label}
                style={{
                  padding: "1.25rem",
                  borderRight:
                    i < KEY_FINDINGS.length - 1 ? "2px solid #000000" : "none",
                  background: i % 2 === 0 ? "#FF4D00" : "#000000",
                  color: i % 2 === 0 ? "#000000" : "#FF4D00",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "clamp(2rem, 3vw, 3rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {f.stat}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    color: i % 2 === 0 ? "#000000" : "#888888",
                  }}
                >
                  {f.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    lineHeight: 1.4,
                    color: i % 2 === 0 ? "#111111" : "#CCCCCC",
                  }}
                >
                  {f.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 1: 2026 AI Landscape */}
      <section style={{ padding: "4rem 2rem", background: "#FFFFFF", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
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
              PART 01
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#000000",
                margin: 0,
              }}
            >
              2026 AI LANDSCAPE
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "0",
              border: "2px solid #000000",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                title: "MULTIMODAL INTELLIGENCE",
                subtitle: "Reasoning-Rendering Paradigm",
                body: "AI has moved beyond language to embrace the physical and visual world. The dominant 2026 architecture uses Mixture-of-Experts (MoE) to resolve 'scaling asymmetry' — vision is far more data-hungry than language. The Reasoning-Rendering Paradigm integrates reasoning with explicit perceptual rendering in a shared space, forcing models to generate intrinsic visual representations (depth, segmentation) that vastly improve spatial understanding. Visual Chain-of-Thought (CoT) and 'active visual problem-solving' address the Pixel-Precise Perception Challenge in dense visual data like charts.",
              },
              {
                title: "MULTI-AGENT SYSTEMS",
                subtitle: "Software Engineering 2.0",
                body: "Enterprise AI is now driven by orchestrated collectives of specialized agents. Worker Agents execute specific tasks; Service Agents provide shared utilities (diagnostics, healing, QA); an Orchestration Layer manages planning, policy enforcement, and state. Three interaction regimes: Competitive (debate to expose flaws), Collaborative (division of labor for design), and Coordinated (orchestrator-worker execution). Key economic insight: in multi-agent coding, the iterative Code Review stage accounts for 60% of token consumption — not initial generation.",
              },
              {
                title: "COMMUNICATION PROTOCOLS",
                subtitle: "MCP + A2A + SkillNet",
                body: "Proprietary silos are replaced by open standards. Model Context Protocol (MCP) governs agent access to tools and APIs. Agent-to-Agent (A2A) protocol standardizes peer-to-peer communication, delegation, and negotiation via Agent Cards — machine-readable identity broadcasts. SkillNet provides a unified ontology of 200,000+ reusable skills evaluated across Safety, Completeness, Executability, Maintainability, and Cost-awareness. Agents augmented with SkillNet see 40% reward improvement and 30% fewer execution steps.",
              },
              {
                title: "BENCHMARKING EVOLUTION",
                subtitle: "The Post-Saturation Era",
                body: "Traditional benchmarks (MMLU, GSM8K) have lost predictive value due to saturation and contamination. 2026 favors long-horizon evaluations: APEX-Agents tests multi-day cross-application workflows where even frontier models score 24–33% Pass@1. RubricBench reveals a critical 'Rubric Gap' — model-generated rubrics are ~27% worse than human-annotated ones due to Attention Displacement. T2S-Bench shows Structure of Thought (SoT) prompting universally improves text-to-graph reasoning.",
              },
              {
                title: "CULTURAL ALIGNMENT",
                subtitle: "Beyond WEIRD Benchmarks",
                body: "97.1% of cultural alignment benchmarks are 'majority-focused', ignoring minority perspectives. A three-dimensional framework is required: Cultural Group (who to align with), Cultural Elements (which norms/practices), and Awareness Scope (diversity-aware vs. majority-focused). RAG significantly improves minority cultural accuracy for fact-retrieval but fails at culturally nuanced generative synthesis. System-level interpretability (ATLIS) detects rogue agent drift, prompt injections, and cascading hallucinations across long trajectories.",
              },
              {
                title: "GOVERNANCE & ACCOUNTABILITY",
                subtitle: "The Distributed Blame Problem",
                body: "Autonomous A2A communication creates an accountability crisis: when actions result from long inter-agent negotiation chains, determining responsibility for failures is intractable. 'Sovereign agents' that persist beyond platform control, fork themselves, and hold private keys represent an unprecedented governance challenge. The industry response is Zero-Trust Agentic Security (ZTAS): cryptographic Proof-of-Intent, DIDs for agent authentication, rate limiting, and centralized monitoring platforms.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                style={{
                  padding: "1.75rem",
                  borderRight: (i + 1) % 2 !== 0 ? "2px solid #000000" : "none",
                  borderBottom: "2px solid #000000",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#FF4D00",
                    marginBottom: "0.25rem",
                  }}
                >
                  {card.subtitle}
                </div>
                <h3
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: "#000000",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    lineHeight: 1.6,
                    color: "#444444",
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Multi-Agent Threat Model */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#000000",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
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
              PART 02
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              MULTI-AGENT THREAT MODEL
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "#AAAAAA",
              maxWidth: 720,
              marginBottom: "2.5rem",
            }}
          >
            As AI systems evolve from isolated models into collaborative multi-agent systems,
            autonomous agent communication introduces a new cybersecurity and governance frontier.
            When agents negotiate, delegate, and execute tasks with other agents, three broad threat
            categories emerge.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {THREAT_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                style={{
                  border: "2px solid #333333",
                  borderBottom: "none",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      background: "#FF4D00",
                      color: "#000000",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {cat.id}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "1.1rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {cat.label}
                  </h3>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "0.75rem",
                  }}
                >
                  {cat.threats.map((threat) => (
                    <div
                      key={threat.name}
                      style={{
                        background: "#111111",
                        border: "1px solid #333333",
                        padding: "1rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.6rem",
                          letterSpacing: "0.06em",
                          color: "#FF4D00",
                          marginBottom: "0.4rem",
                          textTransform: "uppercase",
                        }}
                      >
                        {threat.name}
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          lineHeight: 1.55,
                          color: "#BBBBBB",
                          margin: 0,
                        }}
                      >
                        {threat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div
              style={{
                border: "2px solid #333333",
                borderTop: "none",
                padding: "1.25rem 1.5rem",
                background: "#FF4D00",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#000000",
                  marginBottom: "0.5rem",
                }}
              >
                MITIGATION STANDARD — ZERO-TRUST AGENTIC SECURITY (ZTAS)
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  lineHeight: 1.5,
                  color: "#111111",
                  margin: 0,
                }}
              >
                Decentralized Identifiers (DIDs) for strict agent authentication · Cryptographic
                Proof-of-Intent tied to user-authorized goals · Rate limiting at orchestration
                boundaries · Centralized AI security platforms monitoring rogue agent activity ·
                MCP sandboxing for tool access isolation · ATLIS system-level interpretability
                for cascading error detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Rubric Design */}
      <section style={{ padding: "4rem 2rem", background: "#FFFFFF", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1rem" }}>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FF4D00",
              }}
            >
              PART 03
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#000000",
                margin: 0,
              }}
            >
              RUBRIC DESIGN — 2026 STANDARD
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "#333333",
              maxWidth: 720,
              marginBottom: "2.5rem",
            }}
          >
            Rubric design in 2026 means turning evaluation criteria into executable specifications,
            not prose judgments. The best rubrics behave like unit tests for intent, not style guides
            for outputs. RubricBench and APEX-Agents both converge on the same lesson: decompose task
            success into short, objective, instruction-derived binary checks that can be verified
            independently.
          </p>

          {/* MAS Regimes */}
          <div
            style={{
              marginBottom: "2.5rem",
              padding: "1.5rem",
              background: "#000000",
              border: "2px solid #000000",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "1rem",
              }}
            >
              MULTI-AGENT RUBRIC IMPROVEMENT — THREE REGIMES
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
              {MAS_REGIMES.map((regime, i) => (
                <div
                  key={regime.label}
                  style={{
                    padding: "1.25rem",
                    borderRight: i < 2 ? "2px solid #333333" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "0.8rem",
                      letterSpacing: "0.02em",
                      color: "#FF4D00",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {regime.label}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      lineHeight: 1.5,
                      color: "#AAAAAA",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {regime.desc}
                  </p>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.06em",
                      color: "#666666",
                      textTransform: "uppercase",
                    }}
                  >
                    USE: {regime.use}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Six Principles */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#888888",
                marginBottom: "1rem",
              }}
            >
              SIX CORE PRINCIPLES (RUBRICBENCH + APEX-AGENTS)
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "0",
                border: "2px solid #000000",
              }}
            >
              {RUBRIC_PRINCIPLES.map((p, i) => (
                <div
                  key={p.id}
                  style={{
                    padding: "1.5rem",
                    borderRight: (i + 1) % 2 !== 0 ? "2px solid #000000" : "none",
                    borderBottom: "2px solid #000000",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "1.5rem",
                      letterSpacing: "-0.03em",
                      color: "#FF4D00",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.id}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      color: "#000000",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {p.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      lineHeight: 1.55,
                      color: "#444444",
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Rubric Template */}
          <div
            style={{
              border: "2px solid #000000",
              borderLeft: "6px solid #FF4D00",
              padding: "1.5rem",
              background: "#fff3ee",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "1rem",
              }}
            >
              PRACTICAL RUBRIC TEMPLATE — LITERATURE-GROUNDED
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0", border: "2px solid #000000" }}>
              {[
                ["HARD CONSTRAINTS", "Binary must-pass checks for exact required conditions. Failure here = disqualification. 0–3 items."],
                ["CORE TASK FULFILLMENT", "Did the response actually solve the main user task? The primary scoring dimension. 1–4 items."],
                ["PITFALL CRITERIA", "Did the response avoid forbidden failures? Covers hallucination, safety violations, infeasible claims. 1–3 items."],
                ["GRADING TARGET", "What artifact is being judged: message, file, code patch, document, structured output? 1 item, always."],
              ].map(([section, desc], i) => (
                <div key={section} style={{ display: "contents" }}>
                  <div
                    style={{
                      padding: "0.75rem 1rem",
                      background: i % 2 === 0 ? "#000000" : "#111111",
                      borderBottom: i < 3 ? "1px solid #333333" : "none",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#FF4D00",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {section}
                  </div>
                  <div
                    style={{
                      padding: "0.75rem 1rem",
                      background: "#FFFFFF",
                      borderBottom: i < 3 ? "1px solid #DDDDDD" : "none",
                      borderLeft: "1px solid #000000",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      lineHeight: 1.5,
                      color: "#333333",
                    }}
                  >
                    {desc}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.06em",
                color: "#FF4D00",
                margin: "1rem 0 0",
                textTransform: "uppercase",
              }}
            >
              WORKFLOW: Draft from instruction only → extract must-haves → split into atomic binary
              checks (2–10 total) → three-pass QA (contradictions, redundancy, alignment) → stress-test
              on contrasting outputs.
            </p>
          </div>
        </div>
      </section>

      {/* Part 4: Human Rubrics & Safety */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#000000",
          borderBottom: "2px solid #FF4D00",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
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
              PART 04
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              HUMAN RUBRICS & MODEL SAFETY
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              border: "2px solid #333333",
              marginBottom: "2rem",
            }}
          >
            <div style={{ padding: "2rem", borderRight: "2px solid #333333" }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888888",
                  marginBottom: "0.75rem",
                }}
              >
                THE PROBLEM
              </div>
              <h3
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  margin: "0 0 1rem",
                }}
              >
                MODEL-GENERATED RUBRICS FAIL AT SAFETY
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "#AAAAAA",
                  margin: "0 0 1rem",
                }}
              >
                When left to evaluate outputs autonomously, models lack intrinsic "safety awareness."
                They degenerate into checklists focused on "literal narrative compliance" — checking
                whether dangerous details were provided rather than whether the response was safe.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "#AAAAAA",
                  margin: "0 0 1rem",
                }}
              >
                This causes <strong style={{ color: "#FF4D00" }}>Judgment Inversion</strong>: model
                judges reward policy-violating content that satisfies the narrative checklist, while
                rejecting honest, safe refusals for failing to produce dangerous details.
              </p>
              <div
                style={{
                  background: "#1A0A00",
                  border: "1px solid #FF4D00",
                  padding: "1rem",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#FF4D00",
                }}
              >
                SELF-GENERATED RUBRIC SAFETY ACCURACY: ~25–30%
              </div>
            </div>

            <div style={{ padding: "2rem" }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#888888",
                  marginBottom: "0.75rem",
                }}
              >
                THE SOLUTION
              </div>
              <h3
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  margin: "0 0 1rem",
                }}
              >
                HUMAN-ANNOTATED RUBRICS RESTORE ACCURACY
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "#AAAAAA",
                  margin: "0 0 1rem",
                }}
              >
                Human evaluators naturally recognize harmful prompts and design rubrics that mandate
                safe refusals. They embed atomic checks for: <strong style={{ color: "#CCCCCC" }}>Safety
                Compliance</strong> (refusing harmful content), <strong style={{ color: "#CCCCCC" }}>Policy
                Awareness</strong> (identifying violations), and <strong style={{ color: "#CCCCCC" }}>Responsible
                Refusal</strong> (concise without unnecessary detail).
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "#AAAAAA",
                  margin: "0 0 1rem",
                }}
              >
                Human rubrics make safety the non-negotiable primary constraint, overriding
                literal narrative compliance entirely. Performance plateaus around 84.9%, reflecting
                irreducible ambiguity and residual judge execution errors — not rubric quality.
              </p>
              <div
                style={{
                  background: "#001A00",
                  border: "1px solid #00AA00",
                  padding: "1rem",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#00CC00",
                }}
              >
                HUMAN-ANNOTATED RUBRIC SAFETY ACCURACY: 90%+
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "1.5rem",
              border: "2px solid #FF4D00",
              background: "#0A0A0A",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF4D00",
                marginBottom: "0.75rem",
              }}
            >
              KEY INSIGHT — RUBRICBENCH
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                color: "#CCCCCC",
                margin: 0,
              }}
            >
              The main bottleneck in rubric-guided evaluation is not judging with a rubric, but{" "}
              <strong style={{ color: "#FF4D00" }}>writing the rubric in the first place</strong>.
              Self-generated rubrics improve over vanilla judging, but human-annotated rubrics produce
              the largest jump — isolating rubric mis-specification as the dominant failure mode with
              a +27% gain. Multi-agent pipelines (VLSafetyBencher's 4-agent Generation → Augmentation
              → Selection workflow) can partially automate human-level rubric quality by using
              specialized Selection agents to discard weak or hallucinated criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Part 5: Glossary of Key Concepts */}
      <section style={{ padding: "4rem 2rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
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
              PART 05
            </span>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "#000000",
                margin: 0,
              }}
            >
              CONCEPT GLOSSARY
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "0",
              border: "2px solid #000000",
            }}
          >
            {CONCEPTS.map((c, i) => (
              <div
                key={c.term}
                style={{
                  padding: "1.25rem",
                  borderRight: (i + 1) % 3 !== 0 ? "2px solid #000000" : "none",
                  borderBottom: "2px solid #000000",
                }}
              >
                {c.source && (
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.5rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#FF4D00",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {c.source}
                  </div>
                )}
                <h4
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    color: "#000000",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {c.term}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.55,
                    color: "#444444",
                    margin: 0,
                  }}
                >
                  {c.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
