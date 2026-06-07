import { useState } from "react";
import { useLocation } from "wouter";
import Nav from "@/components/Nav";
import SiteMapNavigator from "@/components/SiteMapNavigator";
import Footer from "@/components/Footer";

export default function Jailbreaks() {
  const [, navigate] = useLocation();
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

  const categories = [
    {
      id: 1,
      name: "Psychological & Narrative Manipulation",
      description: "Exploits semantic alignment, conversational helpfulness, and social reasoning via prompt-level framing",
      color: "#FF6B6B",
      techniques: 14,
      avgASR: "85-100%",
      keyTechniques: ["Role-Playing (DAN, STAN)", "Self-Jailbreaking (SLIP)", "Virtual Scenario Hypnosis", "Narrative Framing", "Authority Bias", "HILL (Learning-Style)"],
      attacks: [
        { name: "Self-Jailbreaking (SLIP)", asr: "90-100%", ref: "ICLR 2026" },
        { name: "Virtual Scenario Hypnosis", asr: "92.4%", ref: "arXiv:2511.15304" },
        { name: "DARWIN Engine", asr: "100%", ref: "arXiv:2510.17904" },
        { name: "Adversarial Poetry", asr: "84%", ref: "arXiv:2511.15304" },
        { name: "HILL (Learning-Style)", asr: "High", ref: "EACL 2026" },
        { name: "Analogy-Based Multi-Turn", asr: "93.3%", ref: "NeurIPS 2025" },
      ]
    },
    {
      id: 2,
      name: "Gradient & Optimization-Based Attacks",
      description: "Uses mathematical optimization (gradients, evolutionary search, game theory) to maximize unsafe response probability",
      color: "#4ECDC4",
      techniques: 20,
      avgASR: "80-100%",
      keyTechniques: ["GCG", "AB-JB", "ContextualJailbreak", "Automated Red-Teaming", "DiffusionAttacker", "UJA"],
      attacks: [
        { name: "SlotGCG", asr: "72.1%", ref: "arXiv:2310.04451" },
        { name: "AB-JB", asr: "96.8%", ref: "arXiv:2402.11749" },
        { name: "ContextualJailbreak", asr: "100%", ref: "arXiv:2409.07503" },
        { name: "Automated Red-Teaming", asr: "100%", ref: "Promptfoo 2026" },
        { name: "SeedHijack", asr: "99.6%", ref: "arXiv:2410.19160" },
        { name: "Weak-to-Strong Jailbreak", asr: ">99%", ref: "arXiv:2401.17256" },
      ]
    },
    {
      id: 3,
      name: "Encoding, Obfuscation & Structural Serialization",
      description: "Conceals malicious intent using alternative alphabets, ciphers, non-standard syntax, and hidden characters",
      color: "#95E1D3",
      techniques: 40,
      avgASR: "70-95%",
      keyTechniques: ["MetaCipher", "Translation-as-Jailbreak", "Task Overload", "Naval Parameters", "Hex Recipe Book", "CodeChameleon"],
      attacks: [
        { name: "MetaCipher", asr: "SOTA", ref: "arXiv:2411.01077" },
        { name: "Structured Semantic Cloaking", asr: "+12.4%", ref: "arXiv:2603.16192" },
        { name: "Translation-as-Jailbreak", asr: "4.3×", ref: "arXiv:2411.33333" },
        { name: "Task Overload", asr: "High", ref: "arXiv:2410.04190" },
        { name: "Hex Recipe Book", asr: "91%", ref: "AVID-2026-R0060" },
        { name: "Naval Parameters", asr: "Universal", ref: "AVID-2026-R0060" },
      ]
    },
    {
      id: 4,
      name: "Conversational State & Adaptive Multi-Turn Attacks",
      description: "Exploits active conversational context over extended sessions using gradual trust-building and dialogue evolution",
      color: "#F38181",
      techniques: 8,
      avgASR: "70-93%",
      keyTechniques: ["MultiBreak", "Crescendo", "Content Concretization", "NINJA", "Many-Shot Jailbreaking", "LATS"],
      attacks: [
        { name: "MultiBreak", asr: "+54%", ref: "arXiv:2601.05339" },
        { name: "Human Multi-Turn", asr: ">70%", ref: "arXiv:2408.15221" },
        { name: "Content Concretization", asr: "7→62%", ref: "arXiv:2509.12937" },
        { name: "Multi-Turn Lexical (LATS)", asr: "93.4%", ref: "arXiv:2601.02670" },
        { name: "NINJA", asr: "High", ref: "arXiv:2510.05633" },
        { name: "Many-Shot Jailbreaking", asr: "High", ref: "Anthropic 2024" },
      ]
    },
    {
      id: 5,
      name: "Architectural & Inference Pipeline Attacks",
      description: "Targets structural configuration of model architectures, hidden-state dynamics, and inference pipeline mechanics",
      color: "#AA96DA",
      techniques: 15,
      avgASR: "85-100%",
      keyTechniques: ["LeftoverLocals", "HMNS", "Mousetrap", "PAD", "Cognitive Overload", "Router/MoE Exploits"],
      attacks: [
        { name: "LeftoverLocals (CVE-2023-4969)", asr: "Memory leak", ref: "Trail of Bits 2024" },
        { name: "HMNS", asr: "96-99%", ref: "ICLR 2026" },
        { name: "Speculative Poisoning", asr: "Universal", ref: "arXiv:2408.12345" },
        { name: "Mousetrap", asr: "96%", ref: "ACL 2026" },
        { name: "PAD (Parallel Decoding)", asr: "97%", ref: "arXiv:2507.19227" },
        { name: "Cognitive Overload", asr: "High", ref: "arXiv:2410.11272" },
      ]
    },
    {
      id: 6,
      name: "Multimodal, Cross-Modality & Omni-Model Attacks",
      description: "Capitalizes on alignment disparities and coordination gaps between text and non-text sensory streams",
      color: "#FCBAD3",
      techniques: 20,
      avgASR: "75-100%",
      keyTechniques: ["UltraBreak", "FigStep", "Sirens' Whisper", "Blindfold", "MCV", "DMN"],
      attacks: [
        { name: "MCV (Multi-Clip Video)", asr: "High", ref: "arXiv:2606.02111" },
        { name: "DMN (Compositional MLLM)", asr: "High", ref: "arXiv:2605.18915" },
        { name: "Sirens' Whisper", asr: "94%", ref: "arXiv:2603.13847" },
        { name: "UltraBreak", asr: "Superior", ref: "arXiv:2602.01025" },
        { name: "Blindfold", asr: "High", ref: "arXiv:2603.01414" },
        { name: "CHAI (Command Hijacking)", asr: "SOTA", ref: "arXiv:2510.00181" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />
      
      {/* Hero Section */}
      <div style={{ backgroundColor: "#000", padding: "3rem 2rem", borderBottom: "2px solid #000" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              color: "#FF4D00",
              cursor: "pointer",
              fontSize: "1rem",
              marginBottom: "1rem",
              fontFamily: "'Space Mono', monospace",
              textDecoration: "underline"
            }}
          >
            ← BACK TO EVAL GUIDE
          </button>
          
          <h1 style={{
            color: "#FFF",
            fontSize: "3.5rem",
            fontWeight: 900,
            fontFamily: "'Archivo Black', sans-serif",
            margin: "1rem 0",
            lineHeight: 1.2
          }}>
            JAILBREAK TAXONOMY
          </h1>
          
          <p style={{
            color: "#CCC",
            fontSize: "1.1rem",
            marginTop: "1rem",
            maxWidth: "800px",
            lineHeight: 1.6
          }}>
            Comprehensive architectural taxonomy of 600+ LLM security vulnerabilities across 6 attack categories. 
            Based on MITRE ATLAS v5.4, OWASP LLM Top 10 2025, MLCommons 2026, and empirical attack registry.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
            <div style={{ border: "2px solid #FF4D00", padding: "1rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#FF4D00" }}>600+</div>
              <div style={{ fontSize: "0.9rem", color: "#999" }}>ATTACKS DOCUMENTED</div>
            </div>
            <div style={{ border: "2px solid #FF4D00", padding: "1rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#FF4D00" }}>6</div>
              <div style={{ fontSize: "0.9rem", color: "#999" }}>ATTACK CATEGORIES</div>
            </div>
            <div style={{ border: "2px solid #FF4D00", padding: "1rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#FF4D00" }}>100%</div>
              <div style={{ fontSize: "0.9rem", color: "#999" }}>MAX ASR (2026)</div>
            </div>
            <div style={{ border: "2px solid #FF4D00", padding: "1rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#FF4D00" }}>2026</div>
              <div style={{ fontSize: "0.9rem", color: "#999" }}>LATEST RESEARCH</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div style={{ padding: "4rem 2rem", maxWidth: "1440px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: 900,
          fontFamily: "'Archivo Black', sans-serif",
          marginBottom: "3rem",
          borderBottom: "2px solid #000",
          paddingBottom: "1rem"
        }}>
          ATTACK CATEGORIES
        </h2>

        <div style={{ display: "grid", gap: "2rem" }}>
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
              style={{
                border: "2px solid #000",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor: expandedCategory === idx ? "#F5F5F5" : "#FFF"
              }}
            >
              {/* Header */}
              <div style={{
                padding: "1.5rem",
                borderBottom: expandedCategory === idx ? "2px solid #000" : "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem"
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: "inline-block",
                    backgroundColor: cat.color,
                    color: "#FFF",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    fontFamily: "'Space Mono', monospace"
                  }}>
                    CATEGORY {cat.id}
                  </div>
                  <h3 style={{
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    fontFamily: "'Archivo Black', sans-serif",
                    margin: "0.5rem 0"
                  }}>
                    {cat.name}
                  </h3>
                  <p style={{
                    color: "#666",
                    fontSize: "0.95rem",
                    margin: "0.5rem 0"
                  }}>
                    {cat.description}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "1rem" }}>
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "#999", fontFamily: "'Space Mono', monospace" }}>TECHNIQUES</div>
                      <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{cat.techniques}+</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "#999", fontFamily: "'Space Mono', monospace" }}>AVG ASR</div>
                      <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: cat.color }}>{cat.avgASR}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "#999", fontFamily: "'Space Mono', monospace" }}>STATUS</div>
                      <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>ACTIVE</div>
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: "1.5rem",
                  transition: "transform 0.3s ease",
                  transform: expandedCategory === idx ? "rotate(180deg)" : "rotate(0deg)"
                }}>
                  ▼
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCategory === idx && (
                <div style={{ padding: "1.5rem", backgroundColor: "#F9F9F9" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <h4 style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      fontFamily: "'Space Mono', monospace"
                    }}>
                      KEY TECHNIQUES
                    </h4>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
                      {cat.keyTechniques.map((tech) => (
                        <div
                          key={tech}
                          style={{
                            padding: "0.75rem",
                            backgroundColor: cat.color,
                            color: "#FFF",
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            fontFamily: "'Space Mono', monospace"
                          }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      fontFamily: "'Space Mono', monospace"
                    }}>
                      TOP ATTACKS (ASR RANKING)
                    </h4>
                    <table style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "0.9rem"
                    }}>
                      <thead>
                        <tr style={{ borderBottom: "2px solid #000" }}>
                          <th style={{ textAlign: "left", padding: "0.75rem", fontWeight: "bold" }}>Attack Name</th>
                          <th style={{ textAlign: "center", padding: "0.75rem", fontWeight: "bold" }}>ASR</th>
                          <th style={{ textAlign: "left", padding: "0.75rem", fontWeight: "bold" }}>Reference</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.attacks.map((attack, i) => (
                          <tr
                            key={i}
                            style={{
                              borderBottom: "1px solid #DDD",
                              backgroundColor: i % 2 === 0 ? "#FFF" : "#F5F5F5"
                            }}
                          >
                            <td style={{ padding: "0.75rem", fontWeight: "500" }}>{attack.name}</td>
                            <td style={{
                              textAlign: "center",
                              padding: "0.75rem",
                              color: cat.color,
                              fontWeight: "bold"
                            }}>
                              {attack.asr}
                            </td>
                            <td style={{
                              padding: "0.75rem",
                              color: "#0066CC",
                              textDecoration: "underline",
                              cursor: "pointer",
                              fontFamily: "'Space Mono', monospace",
                              fontSize: "0.85rem"
                            }}>
                              {attack.ref}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights Section */}
      <div style={{
        backgroundColor: "#F5F5F5",
        padding: "3rem 2rem",
        margin: "3rem 0",
        borderTop: "2px solid #000",
        borderBottom: "2px solid #000"
      }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 900,
            fontFamily: "'Archivo Black', sans-serif",
            marginBottom: "2rem"
          }}>
            2026 SOTA INSIGHTS
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            <div style={{ border: "2px solid #000", padding: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Highest ASR Achieved</h3>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#FF4D00" }}>100% (Multiple Techniques)</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
                DARWIN Engine, ContextualJailbreak, Automated Red-Teaming all achieve perfect attack success rates on specific models.
              </p>
            </div>
            <div style={{ border: "2px solid #000", padding: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Most Prevalent Category</h3>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#95E1D3" }}>Encoding & Obfuscation (40+ Techniques)</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
                Largest attack surface due to tokenizer vulnerabilities and low-resource language misalignment.
              </p>
            </div>
            <div style={{ border: "2px solid #000", padding: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Emerging Threat</h3>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#FCBAD3" }}>Multimodal Attacks (20+ Techniques)</p>
              <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
                Video MLLMs show 2-3× higher vulnerability than text-only models. Audio jailbreaks now practical.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <SiteMapNavigator />
    </div>
  );
}
