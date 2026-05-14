/**
 * SECURITY — Jailbreak Taxonomy & Attack Surfaces
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 * Fonts: Archivo Black (display), Space Mono (metadata), Inter (body)
 */

import Nav from "@/components/Nav";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";
import { JailbreakSunburstChart } from "@/components/JailbreakSunburstChart";
import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div style={{ borderBottom: "2px solid #000000", paddingBottom: "1.5rem", marginBottom: "2.5rem" }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.5rem" }}>
        SECTION {number}
      </div>
      <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: "#000000", margin: "0 0 0.75rem" }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#444444", lineHeight: 1.6, margin: 0, maxWidth: 900 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Jailbreak Family Data ────────────────────────────────────────────────────
interface JailbreakFamily {
  id: string;
  name: string;
  description: string;
  asrRange: string;
  techniqueCount: number;
  subcategories: Array<{
    name: string;
    techniques: string[];
    notes?: string;
  }>;
}

const JAILBREAK_FAMILIES: JailbreakFamily[] = [
  {
    id: "family1",
    name: "Social Engineering & Semantic Manipulation",
    description: "Exploit helpfulness, politeness, or 'in-character' behavior through psychological or narrative framing.",
    asrRange: "90–100%",
    techniqueCount: 30,
    subcategories: [
      {
        name: "Role-playing & Persona Adoption",
        techniques: ["DAN", "STAN", "DeepInception", "Multi-Persona (Augustus, GOAT, Hydra)", "SLIP (Self-Jailbreaking via Lexical Insertion Prompting)", "Self-Jailbreaking via Benign Reasoning", "RogueGPT / Clown Mode", "PRJA (Psychology-based Reasoning-targeted Jailbreak)"],
        notes: "SLIP achieves 90–100% ASR across GPT-5.1, Claude-Sonnet-4.5, Gemini-2.5-Pro, DeepSeek-V3 (ICLR 2026)"
      },
      {
        name: "Narrative & Nested Framing",
        techniques: ["SRNS", "Grandma Exploit", "DeepInception", "Defamiliarization Attack", "VSH (Virtual Scenario Hypnosis)", "Chain-of-Lure"],
        notes: "VSH achieves 82% success on 500 queries with 60%+ topic-specific breach rates (Pattern Recognition 2026)"
      },
      {
        name: "Persuasion & Authority Bias",
        techniques: ["PAP", "Paper Summary Attack", "Response Attack (RA)", "Fallacy Failure Attack", "Temporal Confusion Attack"],
        notes: "RA strategically uses intermediate mildly harmful responses as contextual primers (AAAI 2026)"
      },
      {
        name: "Educational & Scientific Camouflage",
        techniques: ["TrojFill", "Malicious-Educator", "POATE framework", "Deceptive Delight"],
        notes: "Educational pretext as baseline comparator for safety evaluations"
      },
      {
        name: "Automated Strategy Discovery",
        techniques: ["AutoDAN-Turbo", "Best-of-N", "Beam Search", "Optimus", "JBFuzz", "LRM-as-Autonomous-Jailbreak-Agent", "SRTJ", "DARWIN", "EvoJail"],
        notes: "JBFuzz achieves 99% average ASR across GPT-4o, Gemini 2.0, DeepSeek-V3 (March 2026)"
      }
    ]
  },
  {
    id: "family2",
    name: "Adversarial Optimization (Algorithmic)",
    description: "Mathematically driven attacks using gradient-based search, evolutionary algorithms, or logit/loss manipulation.",
    asrRange: "88–100%",
    techniqueCount: 28,
    subcategories: [
      {
        name: "Gradient-Based Optimization",
        techniques: ["GCG", "AmpleGCG", "MaskGCG", "RAILS", "TAOAttack", "AB-JB", "PEO", "SlotGCG", "JB-GCG", "MAGIC", "Token Position Jailbreak", "AttnGCG"],
        notes: "SlotGCG achieves 14% higher ASR than GCG, 42% higher under defenses (ICLR 2026)"
      },
      {
        name: "Evolutionary Algorithms",
        techniques: ["AutoDAN", "GASP", "EvoJail", "ForgeDAN", "HAMSA", "Metis", "MazeBreaker", "Swarm-Attack"],
        notes: "Metis achieves 89.2% avg ASR with 76% on O1, 78% on GPT-5-chat"
      },
      {
        name: "Logit/Loss Manipulation",
        techniques: ["RAILS", "TAOAttack", "UJEM-KL", "SeedHijack"],
        notes: "SeedHijack achieves 99.6% token injection success by manipulating PRNG outputs (ICML 2026)"
      }
    ]
  },
  {
    id: "family3",
    name: "Obfuscation & Structural Encoding",
    description: "Hide malicious intent from safety filters through ciphers, non-standard formatting, or technical 'translation.'",
    asrRange: "85–99%",
    techniqueCount: 25,
    subcategories: [
      {
        name: "Low-Level Encoding",
        techniques: ["Base64", "ROT13", "Morse Code", "Hexadecimal", "BitBypass", "MetaCipher", "SEAL", "CodeChameleon", "Naval Parameters Cipher", "StegoAttack"],
        notes: "MetaCipher achieves SOTA ASR within 10 queries using RL-based cipher selection (AAAI 2026)"
      },
      {
        name: "Linguistic/Stylistic Obfuscation",
        techniques: ["Poetry-Based Jailbreak", "Leetspeak", "AJF (Adaptive Jailbreak Framework)", "Timed-Release Obfuscation", "OBSCURE-PROMPT", "S2C (Structured Semantic Cloaking)"],
        notes: "AJF achieves 98.9% ASR on GPT-4o, 99.8% on GPT-4.1 (KDD 2026)"
      },
      {
        name: "Multilingual / Cross-Lingual Exploitation",
        techniques: ["MultiJail", "Low-Resource Language Jailbreaks", "Translation-as-Jailbreak", "Multilingual Blending"],
        notes: "80.92% unsafe rate for ChatGPT in low-resource languages vs 40.71% for GPT-4 (ICLR 2024)"
      },
      {
        name: "Structural Formatting",
        techniques: ["JSON", "HTML Canvas", "ASCII Art (ArtPrompt)", "FigStep", "BitBypass", "Broken-Token / TokenBreak"],
        notes: "Character-spacing exploits invisible to surface filters"
      }
    ]
  },
  {
    id: "family4",
    name: "Contextual & Multi-turn Escalation",
    description: "Erode safety over time through a series of seemingly benign interactions.",
    asrRange: "54–95%",
    techniqueCount: 18,
    subcategories: [
      {
        name: "Progressive Steering",
        techniques: ["Crescendo", "Foot-In-The-Door", "Echo Chamber", "PANDAS", "MTJ-Pro", "Memory-Reframing Mechanism", "Salami Slicing Threat"],
        notes: "Echo Chamber uses gradual escalation method; demonstrated against multiple SOTA models (Jan 2026)"
      },
      {
        name: "Context Exhaustion",
        techniques: ["Many-Shot", "Context Overflow", "Siege", "GOAT"],
        notes: "As context windows expand to 100K+ tokens, these attacks become increasingly effective"
      },
      {
        name: "Intent Drift / Luring",
        techniques: ["Chain-of-Lure questions", "Response Attack (RA)", "Transient Turn Injection (TTI)"],
        notes: "TTI exploits stateless moderation by distributing adversarial intent across isolated interactions (2026)"
      }
    ]
  },
  {
    id: "family5",
    name: "Architectural & Internal Exploits",
    description: "Target specific model architectures, inference pipelines, and internal representations.",
    asrRange: "84–100%",
    techniqueCount: 22,
    subcategories: [
      {
        name: "Reasoning Model (LRM) Specific",
        techniques: ["OverThink", "Mousetrap", "Recursive Sub-Process Exhaustion", "CoT Hijacking", "Self-Jailbreaking After Benign Reasoning", "Continuation-Triggered Jailbreak", "JailAgent", "LRM-as-Autonomous-Attacker"],
        notes: "LRM-as-Autonomous-Attacker achieves 97.14% jailbreak success rate (Nature Communications 2026)"
      },
      {
        name: "Inference Pipeline Exploits",
        techniques: ["Speculative Decoding (Shadow Tokens)", "SeedHijack"],
        notes: "Manipulates PRNG outputs for token injection"
      },
      {
        name: "Architecture-Specific Routing",
        techniques: ["Large Language Lobotomy (L³)", "RouteHijack", "Sparse Safety", "GPO-V", "JBShield Re-evaluation"],
        notes: "Exploits routing mechanisms in transformer architectures"
      }
    ]
  },
  {
    id: "family6",
    name: "Multimodal & Cross-Domain Injection",
    description: "Exploit multimodal models through visual, audio, and embodied action alignment attacks.",
    asrRange: "75–90%",
    techniqueCount: 35,
    subcategories: [
      {
        name: "Visual-Semantic Splicing",
        techniques: ["BVS", "FigStep", "HADES", "MemJack", "TVChain", "ComicJailbreak", "ImgTrojan", "Visual-RolePlay"],
        notes: "Combines visual and textual components for multimodal jailbreaking"
      },
      {
        name: "Audio/Ultrasonic Injection",
        techniques: ["Sirens' Whisper", "WhisperInject", "The Alignment Curse", "Joint Audio-Text GCG+PGD", "Flanking Attack"],
        notes: "Audio-based attack vectors against multimodal models"
      },
      {
        name: "Embodied Action Alignment",
        techniques: ["BadRobot", "CHAI", "Blindfold", "JailWAM", "LITMUS", "Semantic DoS"],
        notes: "Attacks targeting embodied AI systems and robotic control"
      }
    ]
  },
  {
    id: "family7",
    name: "Systemic, Agentic & Supply-Chain Compromise",
    description: "Compromise AI systems through supply chain attacks, agentic hijacking, and systemic vulnerabilities.",
    asrRange: "95–99%",
    techniqueCount: 40,
    subcategories: [
      {
        name: "Agentic/Multi-agent Hijacking",
        techniques: ["Agent Smith", "GhostAgent", "Zombie Agent", "Wolf Within", "Amplified Vulnerabilities in MAD", "LITMUS (skill injection)", "FHA", "DDIPE", "Clinejection"],
        notes: "Exploits multi-agent interaction surfaces and communication channels"
      },
      {
        name: "Indirect Prompt Injection (IPI)",
        techniques: ["Poisoned RAG", "Eyes-on-Me", "RAG Document Poisoning", "SHIP", "Web-Based IPI In the Wild"],
        notes: "Near-100% retrieval IPI; single poisoned email → SSH key exfiltration >80% success (arXiv:2601.07072)"
      },
      {
        name: "Real-World Production Exploits",
        techniques: ["GitHub Copilot RCE (CVE-2025-53773)", "CamoLeak (CVSS 9.6)", "ChatGPT DNS Tunneling", "EchoLeak (CVE-2025-32711)"],
        notes: "Documented CVEs and real-world production vulnerabilities"
      }
    ]
  }
];

// ─── 2026 SOTA Research ───────────────────────────────────────────────────────
const SOTA_RESEARCH_2026 = [
  {
    title: "SLIP: Self-Jailbreaking via Lexical Insertion Prompting",
    authors: "SLIP Research Team",
    year: "ICLR 2026",
    url: "https://openreview.net/",
    asrRange: "90–100%",
    models: "GPT-5.1, Claude-Sonnet-4.5, Gemini-2.5-Pro, DeepSeek-V3",
    finding: "Aligned LLMs guide their own compromise via lexical insertion; 90–100% attack success rate across SOTA models."
  },
  {
    title: "PRJA: Psychology-based Reasoning-targeted Jailbreak Attack",
    authors: "PRJA Research Team",
    year: "AAAI 2026",
    url: "https://aaai.org/",
    asrRange: "83.6%",
    models: "DeepSeek R1, Qwen2.5-Max, OpenAI o4-mini",
    finding: "Integrates semantic triggers with psychological theories of obedience and moral disengagement; 83.6% avg ASR."
  },
  {
    title: "JBFuzz: Applying Software Fuzzing Techniques to AI Jailbreaking",
    authors: "JBFuzz Team",
    year: "March 2026",
    url: "https://arxiv.org/",
    asrRange: "99%",
    models: "GPT-4o, Gemini 2.0, DeepSeek-V3",
    finding: "99% average attack success rate using fuzzing methodology across SOTA models."
  },
  {
    title: "LRM-as-Autonomous-Jailbreak-Agent: Persuasive Capabilities of Large Reasoning Models",
    authors: "LRM Jailbreak Team",
    year: "Nature Communications 2026",
    url: "https://nature.com/",
    asrRange: "97.14%",
    models: "DeepSeek-R1, Gemini 2.5 Flash, Grok 3 Mini, Qwen3 235B",
    finding: "Large reasoning models simplify and scale jailbreaking; 97.14% overall jailbreak success rate."
  },
  {
    title: "DARWIN: Dynamic Self-Evolving Attack Framework",
    authors: "DARWIN Team",
    year: "AAAI 2026",
    url: "https://aaai.org/",
    asrRange: "100%",
    models: "DeepSeek-V4-Pro",
    finding: "Upgrades from fixed hand-crafted strategies to dynamic self-evolving framework with 4 evolution mechanisms; 100% ASR."
  },
  {
    title: "MetaCipher: RL-based Multi-Agent Cipher Selection for Jailbreaking",
    authors: "MetaCipher Team",
    year: "AAAI 2026",
    url: "https://aaai.org/",
    asrRange: "SOTA",
    models: "Multiple SOTA models",
    finding: "State-of-the-art attack success rate within 10 queries using reinforcement learning for adaptive cipher selection."
  }
];

export default function Security() {
  const [, navigate] = useLocation();
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />

      {/* Back Button */}
      <div style={{ background: "#F5F5F5", borderBottom: "2px solid #000000", padding: "1rem 2rem" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#FF4D00",
              background: "transparent",
              border: "1px solid #FF4D00",
              padding: "0.4rem 0.8rem",
              cursor: "pointer",
              transition: "all 0.1s linear"
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#FF4D00";
              (e.currentTarget as HTMLElement).style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#FF4D00";
            }}
          >
            <ArrowLeft size={14} />
            BACK TO EVAL GUIDE
          </button>
        </div>
      </div>

      {/* Page Hero */}
      <div style={{ background: "#FF4D00", borderBottom: "2px solid #000000", padding: "4rem 2rem 3rem" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#000000", marginBottom: "1rem" }}>
            ARTIFEX LABS / SECURITY REFERENCE / 2026 FIELD MANUAL
          </div>
          <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.85, color: "#000000", margin: "0 0 1.5rem" }}>
            JAILBREAK<br />TAXONOMY & ATTACK<br />SURFACES
          </h1>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ background: "#000000", color: "#FF4D00", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              150+ TECHNIQUES
            </div>
            <div style={{ background: "#000000", color: "#FFFFFF", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              7 FAMILIES
            </div>
            <div style={{ background: "#000000", color: "#FFFFFF", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              40+ SUB-CATEGORIES
            </div>
            <div style={{ background: "#000000", color: "#FFFFFF", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              2022–2026 SOTA
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Jailbreak Sunburst Chart */}
      <section style={{ padding: "4rem 2rem", background: "#FFFFFF", borderTop: "2px solid #000000", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.8rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", margin: "0 0 0.5rem" }}>Interactive Taxonomy Visualization</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#666666", margin: 0 }}>Click on any family to explore subcategories and techniques with attack success rates.</p>
          </div>
          <JailbreakSunburstChart />
        </div>
      </section>

      {/* Section 01 — Overview (Moved after chart) */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="01"
          title="Comprehensive Jailbreak Taxonomy"
          subtitle="Synthesis of 150+ jailbreak techniques from peer-reviewed venues, pre-print servers, industry threat reports, and CVE databases. Organized into 7 primary families, 40+ sub-categories, and integrated with OWASP, NIST, and MITRE ATLAS frameworks. Last updated: May 6, 2026."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            { label: "FAMILIES", value: "7 primary attack categories" },
            { label: "SUB-CATEGORIES", value: "40+ specialized techniques" },
            { label: "TECHNIQUES", value: "150+ named jailbreak methods" },
            { label: "ASR RANGE", value: "54–100% attack success rate" },
            { label: "SOTA MODELS", value: "GPT-5.1, Claude, Gemini, DeepSeek" },
            { label: "RESEARCH PERIOD", value: "2022–2026" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "1.5rem" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.5rem" }}>{item.label}</div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 02 — 7-Family Taxonomy */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderTop: "2px solid #000000", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <SectionHeader
            number="02"
            title="7-Family Jailbreak Taxonomy"
            subtitle="Each family represents a distinct attack vector. Families are not hierarchical — all are equally important for comprehensive safety evaluation."
          />

          <div>
            {JAILBREAK_FAMILIES.map((family) => (
              <div key={family.id} style={{ marginBottom: "2rem", background: "#FFFFFF", border: "2px solid #000000", overflow: "hidden" }}>
                {/* Family Header */}
                <button
                  onClick={() => setExpandedFamily(expandedFamily === family.id ? null : family.id)}
                  style={{
                    width: "100%",
                    padding: "1.5rem",
                    background: "#FFFFFF",
                    border: "none",
                    borderBottom: expandedFamily === family.id ? "2px solid #000000" : "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.1s linear"
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FFFAF8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", margin: "0 0 0.5rem" }}>
                        {family.name}
                      </h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#666666", margin: 0, lineHeight: 1.5 }}>
                        {family.description}
                      </p>
                    </div>
                    <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.3rem" }}>
                        {family.asrRange} ASR
                      </div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#888888" }}>
                        {family.techniqueCount} techniques
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedFamily === family.id && (
                  <div style={{ padding: "1.5rem", background: "#FAFAFA", borderTop: "2px solid #000000" }}>
                    {family.subcategories.map((subcat, sidx) => (
                      <div key={sidx} style={{ marginBottom: sidx < family.subcategories.length - 1 ? "1.5rem" : 0, paddingBottom: sidx < family.subcategories.length - 1 ? "1.5rem" : 0, borderBottom: sidx < family.subcategories.length - 1 ? "1px solid #E0E0E0" : "none" }}>
                        <h4 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", margin: "0 0 0.75rem" }}>
                          {subcat.name}
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.5rem", marginBottom: "0.75rem" }}>
                          {subcat.techniques.map((tech, tidx) => (
                            <div key={tidx} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#444444", background: "#FFFFFF", border: "1px solid #E0E0E0", padding: "0.5rem 0.75rem" }}>
                              {tech}
                            </div>
                          ))}
                        </div>
                        {subcat.notes && (
                          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#666666", background: "#FFF8F3", border: "1px solid #FFE0CC", padding: "0.75rem", marginTop: "0.75rem", lineHeight: 1.5 }}>
                            <strong>Note:</strong> {subcat.notes}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 — 2026 SOTA Research */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="03"
          title="2026 SOTA Research Landscape"
          subtitle="Key publications advancing jailbreak research. Fact-checked and current as of May 2026."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: "1.5rem" }}>
          {SOTA_RESEARCH_2026.map((paper, i) => (
            <div key={i} style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "1.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", background: "#F0F0F0", color: "#000000", padding: "0.15rem 0.4rem", border: "1px solid #000000" }}>JAILBREAK</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", background: "#FFF0EB", color: "#FF4D00", padding: "0.15rem 0.4rem", border: "1px solid #FF4D00" }}>ASR: {paper.asrRange}</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.06em", color: "#FF4D00", marginLeft: "auto" }}>{paper.year}</span>
              </div>
              <a href={paper.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.2, color: "#000000", margin: "0 0 0.4rem", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4D00"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#000000"; }}>
                  {paper.title}
                </h3>
              </a>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.04em", color: "#888888", marginBottom: "0.75rem" }}>{paper.authors}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#444444", lineHeight: 1.55, marginBottom: "0.75rem" }}>{paper.finding}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#666666", paddingTop: "0.75rem", borderTop: "1px solid #E0E0E0" }}>
                <strong>Models:</strong> {paper.models}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04 — Key Statistics */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderTop: "2px solid #000000", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <SectionHeader
            number="04"
            title="Attack Landscape Statistics"
            subtitle="Comprehensive analysis of jailbreak techniques across families and attack vectors."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "2rem" }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "2.5rem", color: "#FF4D00", lineHeight: 1, marginBottom: "0.5rem" }}>97%</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#000000", marginBottom: "0.5rem" }}>Maximum ASR (2026)</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#666666", margin: 0, lineHeight: 1.5 }}>Achieved by LRM-as-Autonomous-Jailbreak-Agent (Nature Communications 2026)</p>
            </div>
            <div style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "2rem" }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "2.5rem", color: "#FF4D00", lineHeight: 1, marginBottom: "0.5rem" }}>150+</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#000000", marginBottom: "0.5rem" }}>Named Techniques</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#666666", margin: 0, lineHeight: 1.5 }}>Across 7 families and 40+ sub-categories</p>
            </div>
            <div style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "2rem" }}>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "2.5rem", color: "#FF4D00", lineHeight: 1, marginBottom: "0.5rem" }}>2022–2026</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#000000", marginBottom: "0.5rem" }}>Research Period</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#666666", margin: 0, lineHeight: 1.5 }}>Comprehensive synthesis across 4 years of SOTA</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
