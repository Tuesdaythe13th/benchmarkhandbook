/*
 * ResourcesSection — Brutalist Industrial Manifesto
 * Key research orgs, databases, and tools for AI evaluators
 * Orange #FF4D00 | Black #000 | White #FFF
 */

const ORGS = [
  {
    name: "EPOCH AI",
    tagline: "Tracking AI Progress at the Frontier",
    url: "https://epoch.ai/",
    description: "Epoch AI is an independent research organization that produces rigorous, data-driven analysis of AI development trends. Their work is essential for understanding compute scaling, training data growth, and the pace of capability advancement. For evaluators, Epoch's benchmark tracking and model performance databases provide authoritative historical context.",
    why: "Epoch's compute and capability trend data is the gold standard for contextualizing benchmark scores over time. Their analysis of training FLOP scaling laws directly informs how quickly any given benchmark will saturate.",
    links: [
      { label: "Epoch AI Homepage", href: "https://epoch.ai/" },
      { label: "AI Model Database", href: "https://epoch.ai/data/ai-models" },
      { label: "Benchmark Trends", href: "https://epoch.ai/trends" },
      { label: "Notable AI Models", href: "https://epoch.ai/data/notable-ai-models" },
      { label: "Research Papers", href: "https://epoch.ai/research" },
      { label: "Compute Tracker", href: "https://epoch.ai/data/compute-tracker" },
    ],
    color: "#FF4D00",
  },
  {
    name: "LMARENA / LMSYS",
    tagline: "Live Human Preference Evaluation at Scale",
    url: "https://lmarena.ai/",
    description: "LMArena (formerly Chatbot Arena by LMSYS) is the largest live human preference evaluation platform for LLMs. Users submit prompts and vote on anonymous model outputs in a blind A/B format. The resulting Elo-based leaderboard is the most widely cited measure of real-world user preference, with over 1 million human votes collected. For evaluators, it represents the gold standard for preference-based evaluation at scale.",
    why: "Human preference data from LMArena is the closest proxy to real-world deployment quality. The Elo leaderboard surfaces models that perform well on open-ended tasks that automated benchmarks systematically miss. The Bradley-Terry model used for ranking is methodologically sound and peer-reviewed.",
    links: [
      { label: "LMArena Leaderboard", href: "https://lmarena.ai/" },
      { label: "LMSYS Research", href: "https://lmsys.org/research/" },
      { label: "Chatbot Arena Paper", href: "https://arxiv.org/abs/2403.04132" },
      { label: "Arena-Hard Benchmark", href: "https://github.com/lm-sys/arena-hard-auto" },
      { label: "Vision Arena", href: "https://lmarena.ai/?vision" },
      { label: "LMSYS GitHub", href: "https://github.com/lm-sys" },
    ],
    color: "#000000",
  },
  {
    name: "MIT RISK REPOSITORY",
    tagline: "The Most Comprehensive AI Risk Database",
    url: "https://docs.google.com/spreadsheets/d/1rgyNAfT161yPxDxg_XtKLjh1Tnq8IPQlAEa42c88bxg/edit?usp=sharing",
    description: "The MIT AI Risk Repository is the most comprehensive structured database of AI risks, maintained by MIT FutureTech. It catalogs 777 unique AI risks across 23 risk categories, synthesized from 43 existing AI risk frameworks and taxonomies. The repository maps risks across two dimensions: causal factors (proximate vs. distal) and domain (technical, sociotechnical, governance). Essential for safety evaluators designing harm coverage assessments.",
    why: "The MIT Risk Repository provides the most systematic coverage of AI risk space available. For safety benchmark designers, it ensures that evaluation suites cover the full breadth of documented risk categories rather than the subset that appears in any single framework. The causal taxonomy helps distinguish between technical failures and sociotechnical failures — a critical distinction for evaluation design.",
    links: [
      { label: "MIT Risk Repository (Google Sheets)", href: "https://docs.google.com/spreadsheets/d/1rgyNAfT161yPxDxg_XtKLjh1Tnq8IPQlAEa42c88bxg/edit?usp=sharing" },
      { label: "MIT FutureTech", href: "https://futuretech.mit.edu/" },
      { label: "Repository Paper", href: "https://arxiv.org/abs/2408.12622" },
      { label: "Risk Taxonomy Overview", href: "https://airisk.mit.edu/" },
    ],
    color: "#FF4D00",
  },
  {
    name: "AI INCIDENT DATABASE",
    tagline: "Real-World AI Failure Documentation",
    url: "https://incidentdatabase.ai/",
    description: "The AI Incident Database (AIID) is an open repository of AI system failures and harms that have occurred in the real world. Maintained by the Responsible AI Collaborative, it catalogs over 700 incidents with structured metadata including harm type, affected parties, AI system involved, and severity. For evaluators, AIID provides ground truth on what kinds of AI failures actually occur in deployment — essential for ensuring that benchmark tasks reflect real-world risk distributions.",
    why: "Benchmark designers who don't consult real-world incident data risk building evaluations that miss the most common failure modes. AIID's incident taxonomy is empirically grounded in actual harms, not theoretical risk models. Cross-referencing your benchmark coverage against AIID incidents is a best practice for safety evaluation design.",
    links: [
      { label: "AI Incident Database", href: "https://incidentdatabase.ai/" },
      { label: "Browse Incidents", href: "https://incidentdatabase.ai/apps/incidents" },
      { label: "Taxonomies", href: "https://incidentdatabase.ai/taxonomies" },
      { label: "AIID Paper", href: "https://arxiv.org/abs/2011.08512" },
      { label: "Responsible AI Collaborative", href: "https://incidentdatabase.ai/about" },
    ],
    color: "#000000",
  },
  {
    name: "ARTIFICIAL ANALYSIS",
    tagline: "Independent AI Model Quality & Performance Intelligence",
    url: "https://artificialanalysis.ai/",
    description: "Artificial Analysis provides independent, rigorous benchmarking of AI models across quality, speed, price, and context window dimensions. Their 2025 Year-End State of AI Highlights Report documents the dramatic capability improvements across frontier models. For evaluators, their multi-dimensional scoring methodology — combining quality benchmarks with latency, throughput, and cost metrics — represents best practice for holistic model assessment.",
    why: "Artificial Analysis is one of the few organizations that systematically measures the quality-cost-speed tradeoff across models, which is essential for production deployment decisions. Their methodology of combining automated benchmarks with human preference data provides a more complete picture than either approach alone.",
    links: [
      { label: "Artificial Analysis Homepage", href: "https://artificialanalysis.ai/" },
      { label: "Model Leaderboard", href: "https://artificialanalysis.ai/models" },
      { label: "2025 State of AI Report", href: "https://artificialanalysis.ai/downloads/state-of-ai/2025/2025-Year-End-Artificial-Analysis-State-of-AI-Highlights-Report.pdf" },
      { label: "Text Models", href: "https://artificialanalysis.ai/models" },
      { label: "Image Generation", href: "https://artificialanalysis.ai/image-generation" },
      { label: "Embeddings", href: "https://artificialanalysis.ai/embeddings" },
    ],
    color: "#FF4D00",
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "2px solid #000000" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ borderBottom: "2px solid #000000", paddingBottom: "2rem", marginBottom: "3rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#FF4D00", marginBottom: "0.75rem" }}>
              SECTION 09 — KEY RESEARCH ORGANIZATIONS
            </div>
            <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.85, color: "#000000", margin: 0 }}>
              FIELD<br /><span style={{ color: "#FF4D00" }}>RESOURCES</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#444444", maxWidth: 420, lineHeight: 1.7, margin: 0 }}>
            The organizations, databases, and platforms that define the state of the art in AI evaluation. Essential reading for any serious evaluator.
          </p>
        </div>

        {/* Org cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", background: "#000000" }}>
          {ORGS.map((org, i) => (
            <div
              key={org.name}
              style={{
                background: i % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              {/* Left: name + links */}
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                  ORG {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "clamp(1.2rem, 3vw, 2rem)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.9, color: "#000000", margin: "0 0 0.5rem 0" }}>
                  {org.name}
                </h3>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#666666", marginBottom: "1.5rem", letterSpacing: "0.02em" }}>
                  {org.tagline}
                </div>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    background: "#000000",
                    border: "2px solid #000000",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                    marginBottom: "1.5rem",
                    transition: "background 0.1s linear, color 0.1s linear",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FF4D00";
                    (e.currentTarget as HTMLElement).style.borderColor = "#FF4D00";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#000000";
                    (e.currentTarget as HTMLElement).style.borderColor = "#000000";
                  }}
                >
                  VISIT ↗
                </a>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {org.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#FF4D00",
                        textDecoration: "none",
                        letterSpacing: "0.04em",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        transition: "color 0.1s linear",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#000000"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#FF4D00"; }}
                    >
                      <span style={{ color: "#000000" }}>→</span> {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: description + why it matters */}
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#333333", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {org.description}
                </p>
                <div style={{ borderLeft: "4px solid #FF4D00", paddingLeft: "1.25rem" }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#FF4D00", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                    WHY IT MATTERS FOR EVALUATORS
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#555555", margin: 0, lineHeight: 1.7 }}>
                    {org.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
