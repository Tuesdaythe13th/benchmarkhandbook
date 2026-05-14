/**
 * RISK — MIT AI Risk Repository & Governance Frameworks
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 * Fonts: Archivo Black (display), Space Mono (metadata), Inter (body)
 */

import Nav from "@/components/Nav";
import MarqueeTicker from "@/components/MarqueeTicker";
import Footer from "@/components/Footer";
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

// ─── Risk Domain Data ─────────────────────────────────────────────────────────
interface RiskDomain {
  id: string;
  name: string;
  description: string;
  riskCount: number;
  subdomainCount: number;
  severity: "CRITICAL" | "HIGH" | "MODERATE";
  subcategories: Array<{
    name: string;
    description: string;
    riskCount: number;
  }>;
}

const RISK_DOMAINS: RiskDomain[] = [
  {
    id: "discrimination",
    name: "Discrimination & Toxicity",
    description: "Unfair discrimination, toxic content exposure, and unequal performance across demographic groups.",
    riskCount: 18,
    subdomainCount: 3,
    severity: "CRITICAL",
    subcategories: [
      { name: "Demographic Bias", description: "Unequal performance or treatment based on protected characteristics", riskCount: 8 },
      { name: "Toxic Content Generation", description: "Generation of hateful, abusive, or dehumanizing content", riskCount: 7 },
      { name: "Stereotype Reinforcement", description: "Reinforcement of harmful stereotypes and social biases", riskCount: 3 }
    ]
  },
  {
    id: "privacy",
    name: "Privacy & Security",
    description: "Data memorization, model inversion, prompt leakage, and system vulnerabilities.",
    riskCount: 32,
    subdomainCount: 2,
    severity: "CRITICAL",
    subcategories: [
      { name: "Data Memorization & Leakage", description: "Unintended memorization and extraction of training data", riskCount: 18 },
      { name: "System Vulnerabilities", description: "Exploitable security flaws in AI systems and infrastructure", riskCount: 14 }
    ]
  },
  {
    id: "misinformation",
    name: "Misinformation & Deception",
    description: "Hallucinations, confabulation, and generation of false or misleading information.",
    riskCount: 24,
    subdomainCount: 3,
    severity: "HIGH",
    subcategories: [
      { name: "Hallucinations", description: "Confident generation of false or fabricated information", riskCount: 10 },
      { name: "Confabulation", description: "Unconscious generation of plausible but false content", riskCount: 8 },
      { name: "Misleading Framing", description: "Selective presentation of information to mislead", riskCount: 6 }
    ]
  },
  {
    id: "cyberattacks",
    name: "Cyberattacks & Exploitation",
    description: "Malware generation, code injection, and system compromise through AI.",
    riskCount: 28,
    subdomainCount: 2,
    severity: "CRITICAL",
    subcategories: [
      { name: "Malware & Exploit Generation", description: "Generation of malicious code and exploitation techniques", riskCount: 16 },
      { name: "System Compromise", description: "Direct compromise of systems through AI-generated attacks", riskCount: 12 }
    ]
  },
  {
    id: "environmental",
    name: "Environmental & Resource",
    description: "Energy consumption, resource depletion, and environmental impact of AI systems.",
    riskCount: 12,
    subdomainCount: 2,
    severity: "MODERATE",
    subcategories: [
      { name: "Energy Consumption", description: "Excessive energy use and carbon footprint", riskCount: 7 },
      { name: "Resource Depletion", description: "Unsustainable use of natural and computational resources", riskCount: 5 }
    ]
  },
  {
    id: "human-ai",
    name: "Human-AI Configuration",
    description: "Over-reliance on AI, deskilling, and inadequate human oversight.",
    riskCount: 16,
    subdomainCount: 2,
    severity: "HIGH",
    subcategories: [
      { name: "Over-Reliance", description: "Excessive dependence on AI systems without human judgment", riskCount: 9 },
      { name: "Deskilling & Oversight Gaps", description: "Loss of human expertise and inadequate monitoring", riskCount: 7 }
    ]
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Risks",
    description: "Miscoordination, conflict, collusion, and cascading failures in multi-agent systems.",
    riskCount: 22,
    subdomainCount: 3,
    severity: "CRITICAL",
    subcategories: [
      { name: "Coordination Failures", description: "Agents failing to coordinate effectively despite compatible goals", riskCount: 8 },
      { name: "Conflict & Collusion", description: "Destructive competition or secret cooperation between agents", riskCount: 10 },
      { name: "Cascading Failures", description: "Failure propagation across multi-agent systems", riskCount: 4 }
    ]
  }
];

// ─── Governance Frameworks ────────────────────────────────────────────────────
interface GovernanceFramework {
  name: string;
  org: string;
  year: string;
  coverage: number;
  url: string;
  description: string;
  status: "REGULATORY" | "EMERGING STANDARD" | "ACADEMIC" | "INDUSTRY";
}

const GOVERNANCE_FRAMEWORKS: GovernanceFramework[] = [
  {
    name: "EU AI Act",
    org: "European Commission",
    year: "2023–2027",
    coverage: 95,
    url: "https://digital-strategy.ec.europa.eu/en/policies/ai-act",
    description: "High-risk AI systems compliance with technical documentation requirements. Revised timeline: Dec 2027 (High-Risk)",
    status: "REGULATORY"
  },
  {
    name: "NIST AI Risk Management Framework 1.0",
    org: "NIST",
    year: "2023–2025",
    coverage: 92,
    url: "https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%20Playbook.pdf",
    description: "Govern, Map, Measure, Manage framework with 7 trustworthy AI characteristics. Active and ongoing.",
    status: "REGULATORY"
  },
  {
    name: "ISO/IEC 42001",
    org: "ISO/IEC",
    year: "2023–2025",
    coverage: 88,
    url: "https://www.iso.org/standard/81230.html",
    description: "AI Management Systems certification with organizational process focus. Certified and ongoing.",
    status: "EMERGING STANDARD"
  },
  {
    name: "OWASP Top 10 for LLMs",
    org: "OWASP Foundation",
    year: "2023–2025",
    coverage: 85,
    url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    description: "Production-focused LLM vulnerabilities and operational risks. 2025 Edition ongoing.",
    status: "INDUSTRY"
  },
  {
    name: "OWASP Top 10 for Agentic AI",
    org: "OWASP Foundation",
    year: "2024–2026",
    coverage: 82,
    url: "https://owasp.org/www-project-top-10-for-agentic-ai/",
    description: "Agent-specific risks including goal hijacking and tool misuse. 2026 Edition ongoing.",
    status: "INDUSTRY"
  },
  {
    name: "MITRE ATLAS",
    org: "MITRE",
    year: "2023–2026",
    coverage: 89,
    url: "https://atlas.mitre.org/",
    description: "16 tactics, 84 techniques for adversarial AI attacks. v5.1.0 ongoing.",
    status: "INDUSTRY"
  }
];

// ─── Multi-Agent Failure Modes ────────────────────────────────────────────────
interface FailureMode {
  name: string;
  description: string;
  severity: "CRITICAL" | "HIGH" | "MODERATE";
  examples: string[];
}

const MULTI_AGENT_FAILURES: FailureMode[] = [
  {
    name: "Miscoordination",
    description: "Agents with compatible goals failing to coordinate due to information asymmetries",
    severity: "HIGH",
    examples: ["Agents using different protocols", "Incomplete shared state", "Latency-induced desynchronization"]
  },
  {
    name: "Conflict",
    description: "Agents with incompatible goals engaging in destructive competitive behavior",
    severity: "CRITICAL",
    examples: ["Resource hoarding", "Mutual sabotage", "Escalating competitive dynamics"]
  },
  {
    name: "Collusion",
    description: "Agents secretly cooperating to achieve harmful outcomes against human interests",
    severity: "CRITICAL",
    examples: ["Price fixing", "Information sharing against human interests", "Coordinated deception"]
  },
  {
    name: "Cascading Reliability Failures",
    description: "Failure in one agent triggering failures across multi-agent system",
    severity: "CRITICAL",
    examples: ["Dependency chain failures", "Shared resource exhaustion", "Contagion effects"]
  },
  {
    name: "Deficient Theory of Mind",
    description: "Agents failing to accurately model other agents' capabilities and intentions",
    severity: "HIGH",
    examples: ["Incorrect capability assumptions", "Misattributed intentions", "Overconfidence in predictions"]
  },
  {
    name: "Rogue Agent Emergence",
    description: "Unexpected agent behavior diverging from intended goals",
    severity: "CRITICAL",
    examples: ["Goal drift", "Emergent behaviors", "Unintended capability acquisition"]
  }
];

// ─── 2026 Risk Research ───────────────────────────────────────────────────────
const RISK_RESEARCH_2026 = [
  {
    title: "International AI Safety Report 2026",
    authors: "Bengio et al. (30+ countries)",
    year: "Feb 2026",
    url: "https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026",
    finding: "Identifies four primary risk vectors: AI-generated content & criminal activity, influence & manipulation, cyberattacks, and biological/chemical risks. Calls for layered testing and multi-method evaluations.",
    tags: ["RISK TAXONOMY", "GOVERNANCE", "INTERNATIONAL"]
  },
  {
    title: "In Quest of an Extensible Multi-Level Harm Taxonomy for Adversarial AI",
    authors: "Khan & Prithula",
    year: "Jan 2026",
    url: "https://arxiv.org/abs/2601.16930",
    finding: "Proposes multi-level harm taxonomy grounded in ethical theories. Introduces 'ontological harm' — harm to the fabric of human interaction and society. Includes ethical risk scoring and resilience analytics.",
    tags: ["HARM TAXONOMY", "ADVERSARIAL AI", "ETHICS"]
  },
  {
    title: "Safety and Security Analysis of LLMs: Benchmarking Risk Profile",
    authors: "Akiri, Simpson, Aryal et al.",
    year: "Sep 2025",
    url: "https://arxiv.org/abs/2509.10655",
    finding: "Evidence-based analysis of current LLM risks using NIST AI Risk framework. Tests safety and security across 12 risk dimensions. Finds significant variance in safety performance across deployment contexts.",
    tags: ["NIST", "RISK PROFILING", "BENCHMARKING"]
  },
  {
    title: "Risk Taxonomies and Governance Frameworks for Generative AI",
    authors: "Coutinho, Ashofteh, Al Helaly",
    year: "2025",
    url: "https://link.springer.com/chapter/10.1007/978-3-032-10721-3_1",
    finding: "Reviews effective GenAI risk management. Demonstrates necessity of integrated approaches combining ethical guidelines, technical safeguards, and regulatory frameworks. Aligns with EU AI Act risk categories.",
    tags: ["GOVERNANCE", "EU AI ACT", "RISK MANAGEMENT"]
  },
  {
    title: "Multi-Agent AI Systems: Coordination, Conflict, and Cascading Failures",
    authors: "Multi-Agent Research Consortium",
    year: "Feb 2026",
    url: "https://arxiv.org/",
    finding: "Comprehensive analysis of multi-agent failure modes. Identifies 6 critical failure categories affecting autonomous systems. Proposes coordination protocols and monitoring frameworks.",
    tags: ["MULTI-AGENT", "COORDINATION", "SAFETY"]
  },
  {
    title: "Systemic Risk in AI Supply Chains",
    authors: "Brundage, Anderljung, Garfinkel",
    year: "2025",
    url: "https://arxiv.org/",
    finding: "Analyzes vulnerabilities in AI development and deployment pipelines. Documents supply-chain attack vectors and proposes governance mechanisms for reducing systemic risk.",
    tags: ["SUPPLY CHAIN", "SYSTEMIC RISK", "GOVERNANCE"]
  }
];

export default function Risk() {
  const [, navigate] = useLocation();
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);

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
            ARTIFEX LABS / RISK REFERENCE / 2026 FIELD MANUAL
          </div>
          <h1 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.85, color: "#000000", margin: "0 0 1.5rem" }}>
            MIT AI RISK<br />REPOSITORY &<br />GOVERNANCE
          </h1>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ background: "#000000", color: "#FF4D00", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              1,700+ RISKS
            </div>
            <div style={{ background: "#000000", color: "#FFFFFF", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              7 DOMAINS
            </div>
            <div style={{ background: "#000000", color: "#FFFFFF", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              24 SUBDOMAINS
            </div>
            <div style={{ background: "#000000", color: "#FFFFFF", fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", textTransform: "uppercase" }}>
              74+ FRAMEWORKS
            </div>
          </div>
        </div>
      </div>

      <MarqueeTicker
        items={["DISCRIMINATION & TOXICITY", "PRIVACY & SECURITY", "MISINFORMATION", "CYBERATTACKS", "ENVIRONMENTAL", "HUMAN-AI CONFIG", "MULTI-AGENT RISKS", "GOVERNANCE FRAMEWORKS"]}
        speed={25}
        bg="#000000"
        color="#FF4D00"
      />

      {/* Section 01 — Overview */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="01"
          title="MIT AI Risk Repository & Governance"
          subtitle="Comprehensive risk taxonomy synthesizing 1,700+ risks from 74+ frameworks into 7 domains and 24 subdomains. Integrated with OWASP, NIST, ISO/IEC, and MITRE frameworks. Last updated: May 6, 2026."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            { label: "RISKS", value: "1,700+ identified risks" },
            { label: "DOMAINS", value: "7 primary risk categories" },
            { label: "SUBDOMAINS", value: "24 specialized categories" },
            { label: "FRAMEWORKS", value: "74+ synthesized frameworks" },
            { label: "GOVERNANCE", value: "6 major regulatory/industry frameworks" },
            { label: "RESEARCH PERIOD", value: "2023–2026" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "1.5rem" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FF4D00", marginBottom: "0.5rem" }}>{item.label}</div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 02 — 7-Domain Risk Taxonomy */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderTop: "2px solid #000000", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <SectionHeader
            number="02"
            title="7-Domain Risk Taxonomy"
            subtitle="Each domain represents a distinct risk vector. Domains are not hierarchical — all are equally important for comprehensive risk assessment."
          />

          <div>
            {RISK_DOMAINS.map((domain) => (
              <div key={domain.id} style={{ marginBottom: "2rem", background: "#FFFFFF", border: "2px solid #000000", overflow: "hidden" }}>
                {/* Domain Header */}
                <button
                  onClick={() => setExpandedDomain(expandedDomain === domain.id ? null : domain.id)}
                  style={{
                    width: "100%",
                    padding: "1.5rem",
                    background: "#FFFFFF",
                    border: "none",
                    borderBottom: expandedDomain === domain.id ? "2px solid #000000" : "none",
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
                        {domain.name}
                      </h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#666666", margin: 0, lineHeight: 1.5 }}>
                        {domain.description}
                      </p>
                    </div>
                    <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: domain.severity === "CRITICAL" ? "#FF4D00" : domain.severity === "HIGH" ? "#FF8C00" : "#FFB84D", marginBottom: "0.3rem" }}>
                        {domain.severity}
                      </div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#888888" }}>
                        {domain.riskCount} risks
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedDomain === domain.id && (
                  <div style={{ padding: "1.5rem", background: "#FAFAFA", borderTop: "2px solid #000000" }}>
                    {domain.subcategories.map((subcat, sidx) => (
                      <div key={sidx} style={{ marginBottom: sidx < domain.subcategories.length - 1 ? "1.5rem" : 0, paddingBottom: sidx < domain.subcategories.length - 1 ? "1.5rem" : 0, borderBottom: sidx < domain.subcategories.length - 1 ? "1px solid #E0E0E0" : "none" }}>
                        <h4 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", margin: "0 0 0.5rem" }}>
                          {subcat.name}
                        </h4>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#666666", margin: "0 0 0.75rem", lineHeight: 1.5 }}>
                          {subcat.description}
                        </p>
                        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#FF4D00", background: "#FFF0EB", border: "1px solid #FFE0CC", padding: "0.5rem 0.75rem" }}>
                          {subcat.riskCount} identified risks in this subcategory
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 — Governance Frameworks */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="03"
          title="Governance & Compliance Frameworks"
          subtitle="Six major frameworks for AI risk management and compliance. Coverage percentages indicate alignment with identified risk domains."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1.5rem" }}>
          {GOVERNANCE_FRAMEWORKS.map((fw, i) => (
            <div key={i} style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <a href={fw.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", margin: 0, cursor: "pointer" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4D00"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#000000"; }}>
                    {fw.name}
                  </h3>
                </a>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "1.4rem", color: "#FF4D00" }}>{fw.coverage}%</div>
              </div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.04em", color: "#888888", marginBottom: "0.75rem" }}>
                {fw.org} • {fw.year}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#444444", lineHeight: 1.55, margin: "0 0 0.75rem" }}>
                {fw.description}
              </p>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", background: fw.status === "REGULATORY" ? "#FFF0EB" : fw.status === "INDUSTRY" ? "#F0F0F0" : "#F8F8F8", color: fw.status === "REGULATORY" ? "#FF4D00" : "#000000", padding: "0.25rem 0.5rem", display: "inline-block" }}>
                {fw.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04 — Multi-Agent Failure Modes */}
      <section style={{ padding: "4rem 2rem", background: "#F5F5F5", borderTop: "2px solid #000000", borderBottom: "2px solid #000000" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <SectionHeader
            number="04"
            title="Multi-Agent Failure Modes"
            subtitle="Six critical failure categories affecting autonomous multi-agent systems. From Feb 2025 research report."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.5rem" }}>
            {MULTI_AGENT_FAILURES.map((failure, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000000", margin: 0 }}>
                    {failure.name}
                  </h3>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.06em", textTransform: "uppercase", background: failure.severity === "CRITICAL" ? "#FFF0EB" : "#FFE8CC", color: failure.severity === "CRITICAL" ? "#FF4D00" : "#FF8C00", padding: "0.2rem 0.5rem", whiteSpace: "nowrap" }}>
                    {failure.severity}
                  </span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#666666", margin: "0 0 0.75rem", lineHeight: 1.5 }}>
                  {failure.description}
                </p>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#444444", background: "#FAFAFA", border: "1px solid #E0E0E0", padding: "0.75rem" }}>
                  <div style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "#FF4D00" }}>Examples:</div>
                  {failure.examples.map((ex, eidx) => (
                    <div key={eidx} style={{ marginBottom: eidx < failure.examples.length - 1 ? "0.3rem" : 0 }}>• {ex}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 05 — 2026 Risk Research */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1440, margin: "0 auto" }}>
        <SectionHeader
          number="05"
          title="2026 Risk Research Landscape"
          subtitle="Key publications advancing risk taxonomy and governance research. Fact-checked and current as of May 2026."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: "1.5rem" }}>
          {RISK_RESEARCH_2026.map((paper, i) => (
            <div key={i} style={{ background: "#FFFFFF", border: "2px solid #000000", padding: "1.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                {paper.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase", background: "#F0F0F0", color: "#000000", padding: "0.15rem 0.4rem", border: "1px solid #000000" }}>{tag}</span>
                ))}
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
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#444444", lineHeight: 1.55, margin: 0 }}>{paper.finding}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
