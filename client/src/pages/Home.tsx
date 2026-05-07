/*
 * ARTIFEX LABS — Benchmarking & Evaluation Reference Guide
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 * Fonts: Archivo Black (display), Space Mono (metadata), Inter (body)
 */

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import FoundationsSection from "@/components/FoundationsSection";
import BbomSection from "@/components/BbomSection";
import BenchmarksSection from "@/components/BenchmarksSection";
import BenchmarkSelector from "@/components/BenchmarkSelector";
import BenchmarkCemetery from "@/components/BenchmarkCemetery";
import AgenticSection from "@/components/AgenticSection";
import ScoringSection from "@/components/ScoringSection";
import GovernanceSection from "@/components/GovernanceSection";
import GlossarySection from "@/components/GlossarySection";
import ResourcesSection from "@/components/ResourcesSection";
import ResearchPapersSection from "@/components/ResearchPapersSection";
import FirstPrinciplesCompendium from "@/components/FirstPrinciplesCompendium";
import SurveySection from "@/components/SurveySection";
import KineticThresholdSection from "@/components/KineticThresholdSection";
import CalibrationGovernanceSection from "@/components/CalibrationGovernanceSection";
import LegalAdmissibilitySection from "@/components/LegalAdmissibilitySection";
import LLMJudgeBiasSection from "@/components/LLMJudgeBiasSection";
import MultilingualSafetySection from "@/components/MultilingualSafetySection";
import BenchmarkDecayAnalysis from "@/components/BenchmarkDecayAnalysis";
import APBRMethodology from "@/components/APBRMethodology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav />
      <Hero />
      <MarqueeTicker
        items={[
          "BENCHMARKS REWARD PERFORMANCE",
          "EVALS EXPOSE RISK",
          "A BENCHMARK IS A TOOL",
          "AN EVALUATION IS A PROCESS",
          "BENCHMARKS RANK MODELS",
          "EVALUATIONS SURFACE FAILURE MODES",
          "BENCHMARKS PRODUCE COMPARABLE SCORES",
          "EVALUATIONS PRODUCE INSIGHTS",
        ]}
        speed={30}
        bg="black"
        color="#FF4D00"
      />
      <FoundationsSection />
      <BbomSection />
      <MarqueeTicker
        items={[
          "MMLU-PRO",
          "GPQA DIAMOND",
          "HUMANEVAL+",
          "LIVECODEBENCH",
          "AIME 2025",
          "MATH-500",
          "IFEVAL",
          "BFCL V3",
          "GAIA",
          "SWE-BENCH VERIFIED",
          "HELMET",
          "ARC-AGI-2",
          "HUMANITY'S LAST EXAM",
          "TAUBENCH",
          "BROWSECOMP",
          "PAPERBENCH",
          "MEDAGENTGYM",
          "FINGERTIP 20K",
          "SHADE-ARENA",
          "CYBENCH",
          "COUNSELBENCH",
          "MEDARABENCH",
          "NIST AI 800-3",
        ]}
        speed={20}
        bg="#FF4D00"
        color="black"
      />
      <BenchmarksSection />
      <BenchmarkSelector />
      <MarqueeTicker
        items={[
          "MMLU R.I.P. 2024",
          "HELLASWAG R.I.P. 2022",
          "GSM8K R.I.P. 2024",
          "ARC CHALLENGE R.I.P. 2023",
          "TRUTHFULQA R.I.P. 2024",
          "HUMANEVAL R.I.P. 2024",
          "BIG-BENCH R.I.P. 2024",
          "ARENA-HARD V0.1 R.I.P. 2025",
          "WINOGRANDE R.I.P. 2023",
          "SATURATION KILLS BENCHMARKS",
          "CONTAMINATION KILLS BENCHMARKS",
          "GAMING KILLS BENCHMARKS",
        ]}
        speed={18}
        bg="black"
        color="white"
      />
      <BenchmarkCemetery />
      <AgenticSection />
      <MarqueeTicker
        items={[
          "TRAJECTORY METRICS",
          "DESIGN PATTERNS",
          "GOOGLE ADK",
          "SYSTEM 2 REASONING",
          "HUMAN EVALUATION",
          "RUBRIC DESIGN",
          "GALILEO ACTION ADVANCEMENT",
          "PRODUCTION STACK",
        ]}
        speed={25}
        bg="#FF4D00"
        color="black"
      />
      <ScoringSection />
      <MarqueeTicker
        items={[
          "LLM-AS-JUDGE",
          "SCORING METHODS",
          "JUDGE BIASES",
          "BEHAVIORAL FAMILIES",
          "VALIDITY CHECKLIST",
          "CONSTRUCT ALIGNMENT",
        ]}
        speed={25}
        bg="black"
        color="white"
      />
      <LLMJudgeBiasSection />
      <MarqueeTicker
        items={[
          "POSITION BIAS",
          "VERBOSITY BIAS",
          "SELF-ENHANCEMENT",
          "AUTHORITY BIAS",
          "DISTRACTION BIAS",
          "CHAIN-OF-THOUGHT BIAS",
          "REFINED-VERSION CUES",
        ]}
        speed={25}
        bg="#FF4D00"
        color="black"
      />
      <MultilingualSafetySection />
      <MarqueeTicker
        items={[
          "ENGLISH SAFETY ≠ GLOBAL SAFETY",
          "LANGUAGE GAP EXPANDING",
          "MIXED-LANGUAGE BYPASS RATES",
          "CULTURAL CONTEXT MATTERS",
          "MULTILINGUAL RED-TEAMING REQUIRED",
          "DATASET AVAILABILITY CRITICAL",
        ]}
        speed={25}
        bg="black"
        color="white"
      />
      <BenchmarkDecayAnalysis />
      <MarqueeTicker
        items={[
          "MMLU R.I.P.",
          "HELLASWAG R.I.P.",
          "GSM8K R.I.P.",
          "BENCHMARK SATURATION",
          "GOODHART'S LAW IN ACTION",
          "PRIVATE BENCHMARKS ONLY",
          "CONTINUOUS REFRESH REQUIRED",
        ]}
        speed={25}
        bg="#FF4D00"
        color="black"
      />
      <APBRMethodology />
      <MarqueeTicker
        items={[
          "APBR",
          "BINARY CRITERIA",
          "ADAPTIVE FILTERING",
          "50% FASTER",
          "HIGHER RELIABILITY",
          "EXPERT-LEVEL ACCURACY",
        ]}
        speed={25}
        bg="black"
        color="white"
      />
      <GovernanceSection />
      <GlossarySection />
      <ResourcesSection />
      <ResearchPapersSection />
      <SurveySection />
      <FirstPrinciplesCompendium />
      <MarqueeTicker
        items={[
          "MEASUREMENT IS NEVER NEUTRAL",
          "EVERY CHOICE ENCODES VALUES",
          "FAIRNESS IS NOT A CHECKBOX",
          "JUSTICE IS INSTITUTIONAL CONCERN",
          "REPRESENTATION GAP RENDERS FAILURE INVISIBLE",
        ]}
        speed={30}
        bg="#FF4D00"
        color="black"
      />
      <KineticThresholdSection />
      <MarqueeTicker
        items={[
          "RELIABILITY",
          "VALIDITY",
          "UNCERTAINTY",
          "FAIRNESS",
          "REPRODUCIBILITY",
          "PRACTICALITY",
          "CONJUNCTION REQUIREMENT",
        ]}
        speed={30}
        bg="black"
        color="#FF4D00"
      />
      <CalibrationGovernanceSection />
      <MarqueeTicker
        items={[
          "EXPLORATORY",
          "DEVELOPMENT",
          "PRE-DEPLOYMENT",
          "HIGH-STAKES",
          "FLAG",
          "REMEDIATE",
          "ESCALATE",
          "DOWNGRADE",
          "RETIRE",
        ]}
        speed={30}
        bg="#FF4D00"
        color="black"
      />
      <LegalAdmissibilitySection />
      <Footer />
    </div>
  );
}
