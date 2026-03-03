/*
 * ResourcesSection — Key research organizations and platforms
 * White background | Resource cards with links
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 */

interface Resource {
  id: string;
  name: string;
  tagline: string;
  url: string;
  type: string;
  description: string;
  keyTools: { name: string; url: string; desc: string }[];
  whyItMatters: string;
  founded: string;
  affiliation: string;
}

const resources: Resource[] = [
  {
    id: "01",
    name: "EPOCH AI",
    tagline: "Data on the Trajectory of AI",
    url: "https://epoch.ai/",
    type: "RESEARCH INSTITUTE",
    founded: "2021",
    affiliation: "Independent nonprofit",
    description: "Epoch AI is an independent research institute investigating key trends and questions that will shape the trajectory and governance of artificial intelligence. Their work focuses on empirical measurement of AI progress — compute, data, algorithmic efficiency, and capabilities — rather than building AI systems. As of January 2026, Epoch AI has published over 100 research outputs, doubled its reach, and raised over $10M in funding.",
    keyTools: [
      {
        name: "AI Benchmarking Database",
        url: "https://epoch.ai/benchmarks",
        desc: "Performance of leading AI models on challenging benchmarks, with insights into compute and accessibility. Updated March 2, 2026.",
      },
      {
        name: "AI Models Dataset",
        url: "https://epoch.ai/data/ai-models-documentation",
        desc: "Collection of ML models useful for research about trends in the history and future of AI. Tracks training compute, parameters, and performance.",
      },
      {
        name: "AI Trends Dashboard",
        url: "https://epoch.ai/trends",
        desc: "Dashboard tracking capabilities, compute, algorithmic progress, costs, and hardware trends shaping the future of AI.",
      },
      {
        name: "ML Hardware Database",
        url: "https://epoch.ai/data/machine-learning-hardware",
        desc: "Key data on 170+ AI accelerators (GPUs, TPUs) used to develop and deploy machine learning models.",
      },
      {
        name: "Data Insights",
        url: "https://epoch.ai/data-insights",
        desc: "Focused snapshots on training compute, hardware advancements, and AI economics. Digestible summaries of complex trends.",
      },
      {
        name: "Gradient Updates Newsletter",
        url: "https://epochai.substack.com/",
        desc: "The Epoch Brief and Gradient Updates newsletters covering AI progress forecasting, hyperscaler capex, and model capability trends.",
      },
    ],
    whyItMatters: "Epoch AI provides the empirical infrastructure that makes benchmark interpretation possible. Their compute tracking data shows that hyperscaler capex has quadrupled since GPT-4's release, nearing half a trillion dollars in 2025. Their benchmarking database is the most comprehensive public record of model performance across time, enabling researchers to track saturation, detect contamination patterns, and understand capability trajectories. For anyone building evaluation pipelines, Epoch AI's datasets are the ground truth for 'where are models now and where are they going.'",
  },
  {
    id: "02",
    name: "LMSYS / LMARENA",
    tagline: "An Open Platform for Evaluating LLMs by Human Preference",
    url: "https://lmarena.ai/",
    type: "EVALUATION PLATFORM",
    founded: "2023",
    affiliation: "UC Berkeley LMSYS Org",
    description: "LMSYS (Large Model Systems Organization) is a UC Berkeley research group that built Chatbot Arena — an open platform for evaluating LLMs through crowdsourced human preference. Users interact with two anonymous models simultaneously and vote for the better response. Over 1 million human votes have been collected. The platform has rebranded to LMArena (lmarena.ai) as of 2025 while maintaining the LMSYS.org research presence.",
    keyTools: [
      {
        name: "Chatbot Arena / LMArena Leaderboard",
        url: "https://lmarena.ai/",
        desc: "Live ELO-based leaderboard of 100+ models ranked by human preference. Updated continuously. The most widely cited human preference benchmark.",
      },
      {
        name: "MT-Bench",
        url: "https://lmsys.org/blog/2023-06-22-leaderboard/",
        desc: "Set of challenging multi-turn, open-ended questions for evaluating chat assistants. Uses GPT-4 as judge. 80 questions across 8 categories.",
      },
      {
        name: "Arena-Hard Auto",
        url: "https://github.com/lm-sys/arena-hard-auto",
        desc: "Automatic evaluation tool using 500 challenging user queries from Chatbot Arena. Note: Feuer et al. (2025) documented significant methodology concerns — use with caution.",
      },
      {
        name: "FastChat",
        url: "https://github.com/lm-sys/FastChat",
        desc: "Open platform for training, serving, and evaluating LLM-based chatbots. Powers the Chatbot Arena backend.",
      },
      {
        name: "Chatbot Arena Paper (ICML 2024)",
        url: "https://arxiv.org/abs/2403.04132",
        desc: "Peer-reviewed methodology paper: 'Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference.' Published at ICML 2024.",
      },
      {
        name: "Style Control Analysis",
        url: "https://lmsys.org/blog/2024-08-28-style-control/",
        desc: "Research on how response style (length, formatting) affects Arena rankings. Important for interpreting ELO scores — style has a strong effect independent of substance.",
      },
    ],
    whyItMatters: "Chatbot Arena solves a fundamental problem in LLM evaluation: how do you measure what humans actually prefer, at scale, without relying on fixed test sets that can be gamed? The pairwise comparison methodology, combined with ELO rating aggregation, produces rankings that correlate strongly with real-world deployment quality. The February 2026 Text Arena leaderboard shows the top three open labs separated by just 3 ELO points — a level of granularity impossible with static benchmarks. Critical caveat: Arena rankings reflect human preference, not capability. Verbose, well-formatted responses outperform concise correct ones. Use alongside capability benchmarks, not as a replacement.",
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Section header */}
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
            SECTION 03C
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
            KEY RESEARCH ORGS
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "#333333",
            maxWidth: 720,
            marginBottom: "3rem",
          }}
        >
          Organizations and platforms that provide the infrastructure, data, and methodology for AI evaluation. These are the primary reference points for researchers building evaluation pipelines.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {resources.map((resource, idx) => (
            <div
              key={resource.id}
              style={{
                border: "2px solid #000000",
                borderBottom: idx < resources.length - 1 ? "none" : "2px solid #000000",
              }}
            >
              {/* Resource header */}
              <div
                style={{
                  background: "#000000",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.25rem" }}>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#FF4D00",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {resource.id}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#666666",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {resource.type}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        color: "#666666",
                        letterSpacing: "0.08em",
                      }}
                    >
                      EST. {resource.founded}
                    </span>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        textTransform: "uppercase",
                        letterSpacing: "-0.04em",
                        lineHeight: 0.9,
                        color: "#FF4D00",
                        margin: "0 0 0.25rem 0",
                        transition: "color 0.1s linear",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#FF4D00";
                      }}
                    >
                      {resource.name} ↗
                    </h3>
                  </a>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#888888",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {resource.tagline}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    color: "#555555",
                    letterSpacing: "0.06em",
                    textAlign: "right",
                  }}
                >
                  {resource.affiliation}
                </div>
              </div>

              {/* Resource body */}
              <div style={{ padding: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                {/* Left: description + why it matters */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.65,
                      color: "#333333",
                      margin: "0 0 1.5rem 0",
                    }}
                  >
                    {resource.description}
                  </p>

                  <div
                    style={{
                      background: "#fff3ee",
                      border: "2px solid #000000",
                      borderLeft: "6px solid #FF4D00",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#FF4D00",
                        marginBottom: "0.5rem",
                      }}
                    >
                      WHY IT MATTERS FOR EVALUATORS
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.78rem",
                        lineHeight: 1.6,
                        color: "#333333",
                        margin: 0,
                      }}
                    >
                      {resource.whyItMatters}
                    </p>
                  </div>
                </div>

                {/* Right: key tools */}
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#000000",
                      marginBottom: "1rem",
                      borderBottom: "2px solid #000000",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    KEY TOOLS & RESOURCES
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {resource.keyTools.map((tool, i) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          textDecoration: "none",
                          padding: "0.85rem 0",
                          borderBottom: i < resource.keyTools.length - 1 ? "1px solid #E0E0E0" : "none",
                          transition: "padding-left 0.1s linear",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem";
                          (e.currentTarget as HTMLElement).style.borderLeft = "3px solid #FF4D00";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                          (e.currentTarget as HTMLElement).style.borderLeft = "none";
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.62rem",
                            letterSpacing: "0.04em",
                            color: "#000000",
                            marginBottom: "0.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          {tool.name} ↗
                        </div>
                        <div
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.72rem",
                            lineHeight: 1.45,
                            color: "#666666",
                          }}
                        >
                          {tool.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
