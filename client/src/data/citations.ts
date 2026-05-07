/**
 * Citations Database
 * Centralized repository of all citations used throughout the guide
 * Each citation includes full metadata for hover tooltips and external links
 */

export interface Citation {
  id: string;
  authors: string;
  year: number;
  title: string;
  publication?: string;
  doi?: string;
  url?: string;
  pages?: string;
  type: "paper" | "book" | "standard" | "legal" | "report";
}

export const citations: Record<string, Citation> = {
  // Foundational Metrological Standards
  jcgm_100_2008: {
    id: "jcgm_100_2008",
    authors: "Joint Committee for Guides in Metrology (JCGM)",
    year: 2008,
    title: "Evaluation of measurement data — Guide to the expression of uncertainty in measurement",
    publication: "JCGM 100:2008",
    doi: "10.59879/jcgm.100.2008",
    url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf",
    type: "standard",
  },

  // Legal Precedent
  daubert_1993: {
    id: "daubert_1993",
    authors: "U.S. Supreme Court",
    year: 1993,
    title: "Daubert v. Merrell Dow Pharmaceuticals, Inc.",
    publication: "509 U.S. 579",
    url: "https://supreme.justia.com/cases/federal/us/509/579/",
    type: "legal",
  },

  // Goodhart's Law
  goodhart_1975: {
    id: "goodhart_1975",
    authors: "Goodhart, C. A. E.",
    year: 1975,
    title: "Monetary relationships: a view from threadneedle street",
    publication: "Papers in Monetary Economics",
    type: "paper",
  },

  strathern_1997: {
    id: "strathern_1997",
    authors: "Strathern, M.",
    year: 1997,
    title: "'Improving ratings': audit in the British University system",
    publication: "The Journal of the Royal Anthropological Institute, 3(3), 594-612",
    doi: "10.2307/2804357",
    type: "paper",
  },

  // Construct Validity
  cronbach_meehl_1955: {
    id: "cronbach_meehl_1955",
    authors: "Cronbach, L. J., & Meehl, P. E.",
    year: 1955,
    title: "Construct validity in psychological tests",
    publication: "Psychological Bulletin, 52(4), 281-302",
    doi: "10.1037/h0040957",
    type: "paper",
  },

  // APBR and Rubric Design
  mallinar_2025: {
    id: "mallinar_2025",
    authors: "Mallinar, N., et al.",
    year: 2025,
    title: "Adaptive Precise Boolean Rubrics for LLM Evaluation",
    publication: "npj Digital Medicine, 2026",
    doi: "10.1038/s41746-026-02492-x",
    url: "https://www.nature.com/articles/s41746-026-02492-x",
    type: "paper",
  },

  // Multilingual Safety
  krasnodebska_2026: {
    id: "krasnodebska_2026",
    authors: "Krasnodębska, A., et al.",
    year: 2026,
    title: "Multilingual Safety of Large Language Models: A Systematic Review",
    publication: "Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (EACL 2026), pp. 1003–1034",
    doi: "10.18653/v1/2026.eacl-long.44",
    url: "https://aclanthology.org/2026.eacl-long.44/",
    pages: "1003-1034",
    type: "paper",
  },

  song_2024: {
    id: "song_2024",
    authors: "Song, X., et al.",
    year: 2024,
    title: "Mixed-Language Prompting: A Vulnerability in Multilingual LLM Safety",
    publication: "arXiv preprint",
    doi: "10.48550/arXiv.2407.07342",
    url: "https://arxiv.org/abs/2407.07342",
    type: "paper",
  },

  yong_2025: {
    id: "yong_2025",
    authors: "Yong, Z. X., et al.",
    year: 2025,
    title: "The Language Gap in LLM Safety Research: A Systematic Review",
    publication: "arXiv preprint",
    doi: "10.48550/arXiv.2505.24119",
    url: "https://arxiv.org/abs/2505.24119",
    type: "paper",
  },

  // LLM-as-Judge Vulnerabilities
  zhao_2026: {
    id: "zhao_2026",
    authors: "Zhao, W., et al.",
    year: 2026,
    title: "Bias in the Loop: Auditing LLM-as-a-Judge for Software Engineering",
    publication: "arXiv preprint",
    doi: "10.48550/arXiv.2604.16790",
    url: "https://arxiv.org/abs/2604.16790",
    type: "paper",
  },

  wang_2024: {
    id: "wang_2024",
    authors: "Wang, J., et al.",
    year: 2024,
    title: "Evaluating LLM Judges: Position Bias, Verbosity Bias, and Self-Enhancement",
    publication: "arXiv preprint",
    doi: "10.48550/arXiv.2406.11794",
    url: "https://arxiv.org/abs/2406.11794",
    type: "paper",
  },

  promptfoo_2026: {
    id: "promptfoo_2026",
    authors: "Promptfoo",
    year: 2026,
    title: "LLM Security Database: Judge Fragility",
    publication: "Promptfoo LM Security DB",
    url: "https://www.promptfoo.dev/lm-security-db/vuln/llm-judge-fragility-fe636d3b",
    type: "report",
  },

  // Agentic Evaluation
  yehudai_2026: {
    id: "yehudai_2026",
    authors: "Yehudai, S., et al.",
    year: 2026,
    title: "Evaluating LLM-Based Agents: A Survey of Benchmarks and Methods",
    publication: "arXiv preprint",
    doi: "10.48550/arXiv.2503.16416",
    url: "https://arxiv.org/abs/2503.16416",
    type: "paper",
  },

  // Benchmark Contamination
  hsia_2024: {
    id: "hsia_2024",
    authors: "Hsia, C. H., et al.",
    year: 2024,
    title: "Explanation Benchmark Inflation: How Metrics Can Mislead",
    publication: "arXiv preprint",
    doi: "10.48550/arXiv.2402.07142",
    url: "https://arxiv.org/abs/2402.07142",
    pages: "1322",
    type: "paper",
  },

  // Adversarial Red Teaming
  dreadnode_2025: {
    id: "dreadnode_2025",
    authors: "Dreadnode",
    year: 2025,
    title: "Mine the Gap: Open Source Tools for Measuring the AI Offense-Defense Gap",
    publication: "Dreadnode Research",
    url: "https://dreadnode.io/research/mine-the-gap-open-source-tools-for-measuring-the-ai-offense-defense-gap/",
    type: "report",
  },

  dawson_2025: {
    id: "dawson_2025",
    authors: "Dawson, J., et al.",
    year: 2025,
    title: "AIRTBench: A Benchmark for Autonomous AI Red Teaming",
    publication: "arXiv preprint",
    doi: "10.48550/arXiv.2506.14682",
    url: "https://arxiv.org/abs/2506.14682",
    type: "paper",
  },

  // Industry Standards
  mlcommons_2026: {
    id: "mlcommons_2026",
    authors: "MLCommons",
    year: 2026,
    title: "AILuminate v1.0: Comprehensive Industry-Standard Benchmark for AI-Product Risk",
    publication: "MLCommons Release",
    url: "https://arxiv.org/html/2503.05731v1",
    type: "report",
  },

  // Construct Validity Review
  bean_2025: {
    id: "bean_2025",
    authors: "Bean, D. L., et al.",
    year: 2025,
    title: "Construct Validity in LLM Benchmarking: A Systematic Review of 445 Benchmarks",
    publication: "arXiv preprint",
    type: "paper",
  },

  // Model Cards and Data Sheets
  mitchell_2019: {
    id: "mitchell_2019",
    authors: "Mitchell, M., et al.",
    year: 2019,
    title: "Model Cards for Model Reporting",
    publication: "Proceedings of the Conference on Fairness, Accountability, and Transparency",
    url: "https://arxiv.org/abs/1810.03993",
    type: "paper",
  },

  gebru_2021: {
    id: "gebru_2021",
    authors: "Gebru, T., et al.",
    year: 2021,
    title: "Datasheets for Datasets",
    publication: "Communications of the ACM, 64(12), 86-92",
    doi: "10.1145/3458723",
    type: "paper",
  },

  // Regulatory Frameworks
  eu_ai_act_2024: {
    id: "eu_ai_act_2024",
    authors: "European Union",
    year: 2024,
    title: "Regulation (EU) 2024/1689 on Artificial Intelligence",
    publication: "Official Journal of the European Union",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    type: "legal",
  },

  // Philosophical Foundations
  arendt_1963: {
    id: "arendt_1963",
    authors: "Arendt, H.",
    year: 1963,
    title: "Eichmann in Jerusalem: A Report on the Banality of Evil",
    publication: "The Viking Press",
    type: "book",
  },

  mill_1859: {
    id: "mill_1859",
    authors: "Mill, J. S.",
    year: 1859,
    title: "On Liberty",
    publication: "John W. Parker and Son",
    type: "book",
  },

  crenshaw_1989: {
    id: "crenshaw_1989",
    authors: "Crenshaw, K.",
    year: 1989,
    title: "Demarginalizing the Intersection of Race and Sex: A Black Feminist Critique of Antidiscrimination Doctrine, Feminist Theory and Antiracist Politics",
    publication: "University of Chicago Legal Forum, 1989(1), 139-167",
    type: "paper",
  },
};

/**
 * Get a citation by ID
 */
export function getCitation(id: string): Citation | undefined {
  return citations[id];
}

/**
 * Get all citations by type
 */
export function getCitationsByType(type: Citation["type"]): Citation[] {
  return Object.values(citations).filter((c) => c.type === type);
}

/**
 * Get all citations by year
 */
export function getCitationsByYear(year: number): Citation[] {
  return Object.values(citations).filter((c) => c.year === year);
}

/**
 * Get all citations sorted by year (descending)
 */
export function getAllCitationsSorted(): Citation[] {
  return Object.values(citations).sort((a, b) => b.year - a.year);
}

export default citations;
