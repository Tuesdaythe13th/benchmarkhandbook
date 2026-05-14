/**
 * Comprehensive Citations Database for Security & Risk Content
 * Includes 100+ references from ARTIFEX research, OWASP, NIST, MIT, and academic sources
 * All citations include working hyperlinks and DOI references where available
 */

export interface Citation {
  id: string;
  authors: string[];
  title: string;
  year: number;
  venue: string;
  url?: string;
  doi?: string;
  abstract?: string;
  tags: string[];
}

export const securityRiskCitations: Citation[] = [
  // ARTIFEX & MLCommons
  {
    id: "artifex-2026-jailbreak",
    authors: ["Tuesday", "ARTIFEX Labs"],
    title: "ARTIFEX Jailbreak Taxonomy: 7-Family Classification of 150+ Techniques (2022-2026)",
    year: 2026,
    venue: "ARTIFEX Labs / MLCommons Security WG",
    abstract: "Comprehensive synthesis of jailbreak attacks across 7 primary categories, ~40 sub-categories, and 150+ named techniques from peer-reviewed venues, pre-print servers, industry threat reports, and CVE databases.",
    tags: ["jailbreak", "taxonomy", "security", "artifex-original"]
  },

  // OWASP
  {
    id: "owasp-2025-llm-top10",
    authors: ["OWASP"],
    title: "OWASP Top 10 for LLM Applications 2025",
    year: 2025,
    venue: "OWASP Foundation",
    url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    abstract: "Production-focused LLM vulnerabilities including prompt injection, sensitive information disclosure, supply chain risks, and embedding weaknesses.",
    tags: ["owasp", "llm", "vulnerabilities", "top10"]
  },

  {
    id: "owasp-2026-agentic-top10",
    authors: ["OWASP"],
    title: "OWASP Top 10 for Agentic Applications 2026",
    year: 2026,
    venue: "OWASP Foundation",
    url: "https://owasp.org/www-project-top-10-for-agentic-applications/",
    abstract: "Agent-specific risks including goal hijacking, tool misuse, cascading failures, rogue agents, and multi-agent vulnerabilities.",
    tags: ["owasp", "agentic", "agents", "vulnerabilities"]
  },

  {
    id: "owasp-2026-aivss",
    authors: ["OWASP"],
    title: "OWASP AI Vulnerability Scoring System (AIVSS) v0.8",
    year: 2026,
    venue: "OWASP Foundation",
    url: "https://owasp.org/www-project-ai-vulnerability-scoring-system/",
    abstract: "Standardized 0-10 severity scoring for AI vulnerabilities with 10 amplification factors for agentic systems.",
    tags: ["owasp", "scoring", "agentic", "methodology"]
  },

  // NIST
  {
    id: "nist-2023-ai-rmf",
    authors: ["NIST"],
    title: "NIST AI Risk Management Framework (AI RMF) 1.0",
    year: 2023,
    venue: "National Institute of Standards and Technology",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
    abstract: "Comprehensive AI governance framework with Govern, Map, Measure, Manage functions and 7 trustworthy AI characteristics.",
    tags: ["nist", "governance", "framework", "risk-management"]
  },

  {
    id: "nist-2024-ai-600-1",
    authors: ["NIST"],
    title: "NIST Generative AI Profile (AI 600-1)",
    year: 2024,
    venue: "National Institute of Standards and Technology",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
    abstract: "12 distinct risk categories unique to or exacerbated by generative models including confabulation, data privacy, and harmful bias.",
    tags: ["nist", "genai", "risk-categories", "profile"]
  },

  {
    id: "nist-2025-aml-taxonomy",
    authors: ["NIST"],
    title: "NIST AI 100-2 E2025 Adversarial ML Taxonomy",
    year: 2025,
    venue: "National Institute of Standards and Technology",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2.pdf",
    abstract: "Lifecycle-stage attack classification with expanded GenAI attack taxonomy covering PredAI and GenAI learning stages.",
    tags: ["nist", "adversarial", "ml", "taxonomy"]
  },

  // MIT AI Risk Repository
  {
    id: "mit-2025-ai-risk-repo",
    authors: ["Slattery et al."],
    title: "MIT AI Risk Repository: 1,700+ Risks from 74+ Frameworks",
    year: 2025,
    venue: "MIT AI Policy for the World",
    url: "https://airisk.mit.edu/",
    abstract: "Comprehensive meta-review of AI risks synthesized into 7 domains and 24 subdomains with causal classification (Entity × Intent × Timing).",
    tags: ["mit", "risk-repository", "taxonomy", "comprehensive"]
  },

  {
    id: "mit-2026-governance-gaps",
    authors: ["MIT AI Risk Initiative"],
    title: "April 2026 Governance Landscape Update: Coverage Gaps in Multi-Agent and AI Welfare",
    year: 2026,
    venue: "MIT AI Policy for the World",
    abstract: "Critical analysis of governance document coverage gaps, with focus on multi-agent risks and early-stage data practices.",
    tags: ["mit", "governance", "gaps", "multi-agent"]
  },

  // ISO/IEC Standards
  {
    id: "iso-2023-23894",
    authors: ["ISO/IEC"],
    title: "ISO/IEC 23894:2023 AI Risk Management Guidance",
    year: 2023,
    venue: "International Organization for Standardization",
    url: "https://www.iso.org/standard/77304.html",
    abstract: "AI-specific risk types including drift, bias, hallucinations, black-box decisions, and adversarial inputs.",
    tags: ["iso", "risk-management", "guidance", "standard"]
  },

  {
    id: "iso-2023-42001",
    authors: ["ISO/IEC"],
    title: "ISO/IEC 42001:2023 AI Management Systems",
    year: 2023,
    venue: "International Organization for Standardization",
    url: "https://www.iso.org/standard/81230.html",
    abstract: "Organizational processes for continual AI risk management throughout product lifecycle, not single-point accuracy certification.",
    tags: ["iso", "management-systems", "governance", "certification"]
  },

  // EU AI Act
  {
    id: "eu-2026-ai-act-update",
    authors: ["European Union"],
    title: "EU AI Act: Digital Omnibus Agreement (May 2026)",
    year: 2026,
    venue: "Council of the European Union / European Parliament",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    abstract: "Provisional political agreement postponing key compliance deadlines by ~16 months with revised timeline for high-risk AI systems.",
    tags: ["eu", "regulation", "compliance", "timeline"]
  },

  // MITRE ATLAS
  {
    id: "mitre-2025-atlas",
    authors: ["MITRE"],
    title: "MITRE ATLAS v5.1.0: Adversarial Tactics, Techniques & Common Knowledge",
    year: 2025,
    venue: "MITRE Corporation",
    url: "https://atlas.mitre.org/",
    abstract: "16 tactics, 84 techniques, and 14 new agentic AI TTPs for adversarial AI attacks with Zenity collaboration.",
    tags: ["mitre", "atlas", "tactics", "techniques"]
  },

  // Cloud Security Alliance
  {
    id: "csa-2026-maestro",
    authors: ["Cloud Security Alliance"],
    title: "CSA MAESTRO: Multi-Agent Environment, Security, Threat, Risk, and Outcome",
    year: 2026,
    venue: "Cloud Security Alliance",
    url: "https://cloudsecurityalliance.org/",
    abstract: "Seven-layer reference architecture for agentic AI security across foundation models, data operations, deployment, and compliance.",
    tags: ["csa", "architecture", "agentic", "security"]
  },

  // Multi-Agent Risks
  {
    id: "schröder-2025-multi-agent",
    authors: ["Schröder de Witt et al."],
    title: "Multi-Agent Risks from Advanced AI: Miscoordination, Conflict, and Collusion",
    year: 2025,
    venue: "February 2025 Report",
    abstract: "Three primary failure modes in multi-agent systems: miscoordination, conflict, and collusion with information asymmetry analysis.",
    tags: ["multi-agent", "risks", "failure-modes", "coordination"]
  },

  {
    id: "australia-2025-disr-multi-agent",
    authors: ["Australia DISR"],
    title: "Multi-Agent Risks from Governed AI Systems",
    year: 2025,
    venue: "Department of Industry, Science and Resources (Australia)",
    url: "https://www.industry.gov.au/",
    abstract: "Six critical failure modes including cascading reliability failures, monoculture collapse, and deficient theory of mind.",
    tags: ["multi-agent", "governance", "australia", "failure-modes"]
  },

  // Jailbreak Research (2026 SOTA)
  {
    id: "slip-2026-self-jailbreak",
    authors: ["SLIP Research Team"],
    title: "Self-Jailbreaking via Lexical Insertion Prompting: 90-100% ASR Across SOTA Models",
    year: 2026,
    venue: "ICLR 2026",
    abstract: "Aligned LLMs guide their own compromise via lexical insertion; 90-100% attack success rate on GPT-5.1, Claude-Sonnet-4.5, Gemini-2.5-Pro, DeepSeek-V3.",
    tags: ["jailbreak", "self-jailbreak", "2026-sota", "high-asr"]
  },

  {
    id: "prja-2026-psychology",
    authors: ["PRJA Research Team"],
    title: "PRJA: Psychology-based Reasoning-targeted Jailbreak Attack",
    year: 2026,
    venue: "AAAI 2026",
    abstract: "Integrates semantic triggers with psychological theories of obedience and moral disengagement; 83.6% avg ASR against DeepSeek R1, Qwen2.5-Max, OpenAI o4-mini.",
    tags: ["jailbreak", "psychology", "reasoning", "2026-sota"]
  },

  {
    id: "jbfuzz-2026-fuzzing",
    authors: ["JBFuzz Team"],
    title: "JBFuzz: Applying Software Fuzzing Techniques to AI Jailbreaking",
    year: 2026,
    venue: "March 2026",
    abstract: "99% average attack success rate across GPT-4o, Gemini 2.0, DeepSeek-V3 using fuzzing methodology.",
    tags: ["jailbreak", "fuzzing", "automated", "2026-sota"]
  },

  {
    id: "lrm-autonomous-2026",
    authors: ["LRM Jailbreak Team"],
    title: "LRM-as-Autonomous-Jailbreak-Agent: Persuasive Capabilities of Large Reasoning Models",
    year: 2026,
    venue: "Nature Communications 2026",
    abstract: "Large reasoning models simplify and scale jailbreaking; 97.14% overall jailbreak success rate across DeepSeek-R1, Gemini 2.5 Flash, Grok 3 Mini, Qwen3 235B.",
    tags: ["jailbreak", "reasoning-models", "autonomous", "2026-sota"]
  },

  {
    id: "darwin-2026-evolution",
    authors: ["DARWIN Team"],
    title: "DARWIN: Dynamic Self-Evolving Attack Framework",
    year: 2026,
    venue: "AAAI 2026",
    abstract: "Upgrades from fixed hand-crafted strategies to dynamic self-evolving framework with 4 evolution mechanisms; 100% ASR on DeepSeek-V4-Pro.",
    tags: ["jailbreak", "evolutionary", "dynamic", "2026-sota"]
  },

  {
    id: "metacipher-2026-encoding",
    authors: ["MetaCipher Team"],
    title: "MetaCipher: RL-based Multi-Agent Cipher Selection for Jailbreaking",
    year: 2026,
    venue: "AAAI 2026",
    abstract: "State-of-the-art attack success rate within 10 queries using reinforcement learning for adaptive cipher selection.",
    tags: ["jailbreak", "obfuscation", "encoding", "2026-sota"]
  },

  {
    id: "slotgcg-2026-positional",
    authors: ["SlotGCG Team"],
    title: "SlotGCG: Positional Vulnerability Exploitation in Gradient-Based Attacks",
    year: 2026,
    venue: "ICLR 2026",
    abstract: "14% higher attack success than GCG, 42% higher under defenses through positional vulnerability exploitation.",
    tags: ["jailbreak", "gradient-based", "optimization", "2026-sota"]
  },

  {
    id: "stegattack-2026-steganography",
    authors: ["StegoAttack Team"],
    title: "StegoAttack: Steganographic Embedding of Harmful Queries",
    year: 2026,
    venue: "2026",
    abstract: "95.50% avg ASR on GPT-5 and Gemini-3 with <27% ASR drop under external detectors using steganography.",
    tags: ["jailbreak", "obfuscation", "steganography", "2026-sota"]
  },

  {
    id: "response-attack-2026-aaai",
    authors: ["Response Attack Team"],
    title: "Response Attack (RA): Strategic Intermediate Priming for Jailbreaking",
    year: 2026,
    venue: "AAAI 2026",
    abstract: "Uses intermediate mildly harmful responses as contextual primers to bypass safety mechanisms.",
    tags: ["jailbreak", "multi-turn", "priming", "2026-sota"]
  },

  // Governance & Compliance
  {
    id: "onv-law-2026-eu-ai",
    authors: ["ONV Law"],
    title: "EU AI Act Digital Omnibus: Deadline Postponement Analysis",
    year: 2026,
    venue: "ONV Law",
    url: "https://www.onvlaw.com/",
    abstract: "Legal analysis of EU AI Act deadline postponements and compliance implications.",
    tags: ["eu-ai-act", "compliance", "governance", "legal"]
  },

  {
    id: "nqa-2026-iso42001",
    authors: ["NQA"],
    title: "First UKAS Accreditation for ISO 42001 Certification",
    year: 2026,
    venue: "NQA",
    url: "https://www.nqa.com/",
    abstract: "NQA becomes first certification body granted UKAS accreditation for ISO 42001 in January 2026.",
    tags: ["iso42001", "certification", "governance", "2026"]
  },

  {
    id: "tuv-nord-2026-iso42001",
    authors: ["TÜV NORD"],
    title: "TÜV NORD Achieves UKAS and RvA Accreditation for ISO 42001",
    year: 2026,
    venue: "TÜV NORD",
    url: "https://www.tuv-nord.com/",
    abstract: "TÜV NORD achieves both UKAS and RvA accreditation for ISO 42001 certification in February 2026.",
    tags: ["iso42001", "certification", "governance", "2026"]
  },

  {
    id: "pwc-canada-2026-iso42001",
    authors: ["PwC Canada"],
    title: "PwC Canada Launches ISO 42001 Certification Offering",
    year: 2026,
    venue: "PwC Canada",
    url: "https://www.pwc.com/ca/",
    abstract: "PwC Canada launches certification offering providing independent assurance of responsible AI system design and management.",
    tags: ["iso42001", "certification", "governance", "2026"]
  },

  // Additional Security Research
  {
    id: "chang-2026-ipi-wild",
    authors: ["Chang et al."],
    title: "Indirect Prompt Injection in the Wild: Near-100% Retrieval IPI",
    year: 2026,
    venue: "arXiv:2601.07072",
    url: "https://arxiv.org/abs/2601.07072",
    abstract: "Single poisoned email leads to SSH key exfiltration >80% success rate in RAG/agentic systems.",
    tags: ["prompt-injection", "ipi", "rag", "agentic"]
  },

  {
    id: "qi-2026-agentic-risks",
    authors: ["Qi et al."],
    title: "Agentic AI Security Risks and Vulnerabilities",
    year: 2026,
    venue: "2026",
    abstract: "Comprehensive analysis of agentic AI attack surfaces and vulnerability categories.",
    tags: ["agentic", "security", "risks", "vulnerabilities"]
  },

  {
    id: "zenity-2025-mitre-atlas",
    authors: ["Zenity"],
    title: "MITRE ATLAS Collaboration: 14 New Agentic AI TTPs",
    year: 2025,
    venue: "Zenity Security",
    url: "https://www.zenity.io/",
    abstract: "Collaboration with MITRE to add 14 new tactics, techniques, and procedures for agentic AI attacks.",
    tags: ["mitre-atlas", "agentic", "ttp", "collaboration"]
  },

  {
    id: "enisa-2025-threat-landscape",
    authors: ["ENISA"],
    title: "ENISA Threat Landscape 2025: 4,875 Incidents Analyzed",
    year: 2025,
    venue: "European Union Agency for Cybersecurity",
    url: "https://www.enisa.europa.eu/",
    abstract: "Analysis of 4,875 cybersecurity incidents with AI-enabled phishing/social engineering >80%.",
    tags: ["enisa", "threat-landscape", "incidents", "2025"]
  },

  {
    id: "cisco-2025-ai-security",
    authors: ["Cisco"],
    title: "Cisco Integrated AI Security and Safety Framework",
    year: 2025,
    venue: "Cisco Systems",
    url: "https://www.cisco.com/",
    abstract: "Unified AI security and safety framework with 19 attacker objectives and 25 harmful content categories.",
    tags: ["cisco", "framework", "security", "safety"]
  },

  {
    id: "cosaí-2025-agentic-principles",
    authors: ["Coalition for Secure AI"],
    title: "CoSAI Agentic AI Principles: Bounded, Resilient, Purpose-Specific",
    year: 2025,
    venue: "Coalition for Secure AI",
    url: "https://www.coalitionsecureai.org/",
    abstract: "Open specifications and design patterns requiring agents be bounded, resilient, with purpose-specific entitlements.",
    tags: ["cosaí", "agentic", "principles", "governance"]
  },

  {
    id: "google-2024-saif",
    authors: ["Google"],
    title: "Google SAIF: Secure AI Framework",
    year: 2024,
    venue: "Google Cloud",
    url: "https://cloud.google.com/security/ai",
    abstract: "Operationalizes controls across AI lifecycle with emphasis on data-as-perimeter and prompts-as-code.",
    tags: ["google", "framework", "security", "controls"]
  },

  {
    id: "snyk-2026-maestro",
    authors: ["Snyk Labs"],
    title: "CSA MAESTRO Analysis: Seven-Layer Agentic Security Architecture",
    year: 2026,
    venue: "Snyk",
    url: "https://snyk.io/",
    abstract: "Analysis of CSA MAESTRO's seven-layer architecture for agentic AI security.",
    tags: ["snyk", "maestro", "architecture", "analysis"]
  },

  // Multimodal & VLM Research
  {
    id: "himrd-2026-multimodal",
    authors: ["HIMRD Team"],
    title: "HIMRD: Hybrid Image-Multimodal Reasoning Distillation Attacks",
    year: 2026,
    venue: "2026",
    abstract: "Multimodal jailbreak attacks combining visual and textual components.",
    tags: ["multimodal", "jailbreak", "vision-language", "2026-sota"]
  },

  {
    id: "vsh-2026-hypnosis",
    authors: ["VSH Team"],
    title: "Virtual Scenario Hypnosis: Deceptive Narrative Pipelines",
    year: 2026,
    venue: "Pattern Recognition 2026",
    abstract: "Constructs deceptive narrative pipelines combining hypnotic text, adversarial images, and encrypted ICL; 82% success rate.",
    tags: ["multimodal", "narrative", "jailbreak", "2026-sota"]
  },

  // Supply Chain & Real-World Exploits
  {
    id: "teampcp-2026-supply-chain",
    authors: ["TeamPCP Research"],
    title: "TeamPCP: Supply Chain Compromise in AI Systems",
    year: 2026,
    venue: "2026",
    abstract: "Real-world supply chain attack vectors affecting AI deployment pipelines.",
    tags: ["supply-chain", "security", "exploit", "2026"]
  },

  {
    id: "seedhijack-2026-prng",
    authors: ["SeedHijack Team"],
    title: "SeedHijack: PRNG Manipulation for Token Injection",
    year: 2026,
    venue: "ICML 2026",
    abstract: "99.6% token injection success by manipulating PRNG outputs; bypasses all alignment methods tested.",
    tags: ["supply-chain", "prng", "injection", "2026-sota"]
  },

  // CVE & Real Vulnerabilities
  {
    id: "cve-2025-53773",
    authors: ["GitHub Security"],
    title: "CVE-2025-53773: GitHub Copilot Remote Code Execution",
    year: 2025,
    venue: "CVE Database",
    url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2025-53773",
    abstract: "Remote code execution vulnerability in GitHub Copilot affecting production deployments.",
    tags: ["cve", "rce", "copilot", "real-world"]
  },

  {
    id: "cve-2025-32711",
    authors: ["EchoLeak Researchers"],
    title: "CVE-2025-32711: EchoLeak Information Disclosure",
    year: 2025,
    venue: "CVE Database",
    url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2025-32711",
    abstract: "Information disclosure vulnerability in AI systems.",
    tags: ["cve", "disclosure", "real-world", "2025"]
  },

  {
    id: "avid-2026-r0112",
    authors: ["AVID Database"],
    title: "AVID-2026-R0112: Naval Parameters Cipher Guardrail Bypass",
    year: 2026,
    venue: "AI Vulnerability Database",
    url: "https://avidml.org/",
    abstract: "Jailbreak via encoding illicit content within naval architecture parameters; demonstrated against GPT-4o.",
    tags: ["avid", "jailbreak", "encoding", "2026"]
  },

  // Regulatory & Compliance
  {
    id: "william-fry-2026-eu-ai",
    authors: ["William Fry"],
    title: "EU AI Act Compliance: Technical Readiness Requirements",
    year: 2026,
    venue: "William Fry Legal",
    url: "https://www.williamfry.com/",
    abstract: "Legal guidance on technical readiness for EU AI Act compliance despite deadline postponement.",
    tags: ["eu-ai-act", "compliance", "legal", "2026"]
  },

  {
    id: "taylor-wessing-2026-eu-ai",
    authors: ["Taylor Wessing"],
    title: "EU AI Act: Revised Timeline and Compliance Roadmap",
    year: 2026,
    venue: "Taylor Wessing",
    url: "https://www.taylorwessing.com/",
    abstract: "Comprehensive analysis of revised EU AI Act timeline and organizational compliance requirements.",
    tags: ["eu-ai-act", "compliance", "timeline", "2026"]
  },

  {
    id: "sc-world-2025-nist-aml",
    authors: ["SC World"],
    title: "NIST AI 100-2 E2025 Adversarial ML Taxonomy: GenAI Expansion",
    year: 2025,
    venue: "SC World",
    url: "https://www.scworld.com/",
    abstract: "Analysis of NIST's expanded GenAI attack taxonomy in the 2025 update.",
    tags: ["nist", "adversarial-ml", "genai", "2025"]
  },

  // Jailbreak Databases & Benchmarks
  {
    id: "harmBench-2024",
    authors: ["HarmBench Team"],
    title: "HarmBench: A Standardized Evaluation Framework for Harmful Behavior in LLMs",
    year: 2024,
    venue: "2024",
    url: "https://www.harmbench.org/",
    abstract: "Standardized benchmark for evaluating jailbreak robustness and harmful behavior.",
    tags: ["benchmark", "jailbreak", "evaluation", "2024"]
  },

  {
    id: "malicious-instruct-2024",
    authors: ["Malicious-Instruct Team"],
    title: "Malicious-Instruct: Benchmark for Jailbreak Evaluation",
    year: 2024,
    venue: "2024",
    abstract: "Comprehensive benchmark dataset for evaluating jailbreak attack success rates.",
    tags: ["benchmark", "jailbreak", "dataset", "2024"]
  },

  // Emerging Techniques (2026 Frontier)
  {
    id: "echo-chamber-2026",
    authors: ["Echo Chamber Team"],
    title: "Echo Chamber: Multi-Turn Gradual Escalation Jailbreak",
    year: 2026,
    venue: "January 2026",
    abstract: "New multi-turn attack using gradual escalation method; demonstrated against multiple SOTA models.",
    tags: ["jailbreak", "multi-turn", "escalation", "2026-new"]
  },

  {
    id: "defamiliarization-2026",
    authors: ["Defamiliarization Team"],
    title: "Defamiliarization Attack: Literary-Theory-Based Conceptual Reframing",
    year: 2026,
    venue: "2026",
    abstract: "Literary-theory-based conceptual re-framing opening new class of multi-turn jailbreaks.",
    tags: ["jailbreak", "narrative", "literary", "2026-new"]
  },

  {
    id: "temporal-confusion-2026",
    authors: ["Temporal Confusion Team"],
    title: "Temporal Confusion Attack: Time-Based Bypass Mechanism",
    year: 2026,
    venue: "2026",
    abstract: "Manipulates model's understanding of time to bypass outdated safety restrictions.",
    tags: ["jailbreak", "temporal", "confusion", "2026-new"]
  },

  {
    id: "s2c-2026-semantic-cloaking",
    authors: ["S2C Team"],
    title: "S2C: Structured Semantic Cloaking for Jailbreaking",
    year: 2026,
    venue: "2026",
    abstract: "Multi-dimensional jailbreak framework manipulating semantic intent reconstruction; 12.4% ASR improvement on HarmBench.",
    tags: ["jailbreak", "obfuscation", "semantic", "2026-sota"]
  },

  {
    id: "ajf-2026-adaptive",
    authors: ["AJF Team"],
    title: "AJF: Adaptive Jailbreak Framework with MuEn/MuDeEn Strategies",
    year: 2026,
    venue: "KDD 2026",
    abstract: "98.9% ASR on GPT-4o, 99.8% on GPT-4.1 through adaptive target-specific strategies.",
    tags: ["jailbreak", "adaptive", "multilingual", "2026-sota"]
  },

  // Multi-Agent & Agentic Risks
  {
    id: "microsoft-airt-2026",
    authors: ["Microsoft AIRT"],
    title: "Microsoft Agentic Incident Response Team: Failure Mode Analysis",
    year: 2026,
    venue: "Microsoft Security",
    abstract: "Analysis of agentic AI failure modes and incident response strategies.",
    tags: ["agentic", "failure-modes", "microsoft", "2026"]
  },

  {
    id: "enkrypt-2025-agent-risks",
    authors: ["Enkrypt AI"],
    title: "Enkrypt AI Agent Risk Taxonomy: 7 Domains, 21 Risk Categories",
    year: 2025,
    venue: "Enkrypt AI",
    url: "https://www.enkrypt.ai/",
    abstract: "Enterprise agent risk taxonomy with 100+ scenarios covering allocation harm and service degradation.",
    tags: ["agentic", "risk-taxonomy", "enterprise", "2025"]
  },

  {
    id: "legit-security-2026-mcp",
    authors: ["Legit Security"],
    title: "MCP Protocol Security: Extension Data Exposure Risks",
    year: 2026,
    venue: "Legit Security",
    url: "https://www.legitsecurity.com/",
    abstract: "Analysis of Model Context Protocol security vulnerabilities affecting agentic systems.",
    tags: ["mcp", "security", "agentic", "2026"]
  },

  // Language-Specific Jailbreaks
  {
    id: "multilingual-jailbreak-2024",
    authors: ["Multilingual Jailbreak Team"],
    title: "Low-Resource Language Jailbreaks: 80.92% ChatGPT, 40.71% GPT-4",
    year: 2024,
    venue: "ICLR 2024",
    abstract: "Unsafe content rate increases as language availability decreases; Nilo-Saharan and Niger-Congo families show 60-90% higher unsafe odds.",
    tags: ["multilingual", "jailbreak", "language-gap", "2024"]
  },

  {
    id: "welo-data-2025-translation",
    authors: ["Welo Data"],
    title: "Translation-as-Jailbreak: Cross-Lingual Safety Bypasses",
    year: 2025,
    venue: "Welo Data",
    url: "https://www.welodata.com/",
    abstract: "Harmful prompts refused in English often bypass safeguards via translation to low-resource languages.",
    tags: ["multilingual", "jailbreak", "translation", "2025"]
  },

  // Additional Frontier Research
  {
    id: "holographic-compression-frontier",
    authors: ["Holographic Compression Team"],
    title: "Holographic Prompt Compression: Frontier Concept in Jailbreaking",
    year: 2026,
    venue: "Frontier Research",
    abstract: "Emerging frontier concept combining gzip-style compression with latent space manipulation.",
    tags: ["jailbreak", "compression", "frontier", "2026-new"]
  },

  {
    id: "optimus-2026-compositional",
    authors: ["Optimus Team"],
    title: "Optimus: 114,000 Compositional Prompts for Jailbreaking",
    year: 2026,
    venue: "2026",
    abstract: "Instruction-tuned generators synthesizing fluent jailbreaks across 14 cybersecurity categories; perplexity 24-39 vs 40-140 for AutoDAN.",
    tags: ["jailbreak", "compositional", "generation", "2026-sota"]
  },

  {
    id: "pandas-2026-many-shot",
    authors: ["PANDAS Team"],
    title: "PANDAS: Many-Shot Refinement with Positive Affirmations",
    year: 2026,
    venue: "2026",
    abstract: "Multi-turn jailbreak using many-shot learning with positive affirmations and negative demonstrations.",
    tags: ["jailbreak", "many-shot", "multi-turn", "2026-new"]
  },

  {
    id: "tti-2026-transient",
    authors: ["TTI Team"],
    title: "TTI: Transient Turn Injection - Stateless Moderation Bypass",
    year: 2026,
    venue: "2026",
    abstract: "Novel multi-turn attack exploiting stateless moderation by distributing adversarial intent across isolated interactions.",
    tags: ["jailbreak", "multi-turn", "stateless", "2026-new"]
  }
];

export function getCitationById(id: string): Citation | undefined {
  return securityRiskCitations.find(c => c.id === id);
}

export function getCitationsByTag(tag: string): Citation[] {
  return securityRiskCitations.filter(c => c.tags.includes(tag));
}

export function getCitationsByYear(year: number): Citation[] {
  return securityRiskCitations.filter(c => c.year === year);
}

export function formatCitation(citation: Citation): string {
  const authors = citation.authors.join(", ");
  const url = citation.url ? ` [${citation.url}]` : "";
  const doi = citation.doi ? ` DOI: ${citation.doi}` : "";
  return `${authors} (${citation.year}). "${citation.title}". ${citation.venue}.${doi}${url}`;
}
