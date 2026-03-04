/*
 * ARTIFEX LABS — Benchmarking & Evaluation Reference Guide
 * Design: Industrial Manifesto Brutalism
 * Primary: #FF4D00 | Black #000000 | White #FFFFFF
 * Fonts: Archivo Black (display), Space Mono (metadata), Inter (body)
 * Last updated: March 4, 2026
 */

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import FoundationsSection from "@/components/FoundationsSection";
import BbomSection from "@/components/BbomSection";
import BenchmarksSection from "@/components/BenchmarksSection";
import AgenticSection from "@/components/AgenticSection";
import ScoringSection from "@/components/ScoringSection";
import GovernanceSection from "@/components/GovernanceSection";
import GlossarySection from "@/components/GlossarySection";
import BenchmarkCemetery from "@/components/BenchmarkCemetery";
import ResourcesSection from "@/components/ResourcesSection";
import ResearchPapersSection from "@/components/ResearchPapersSection";
import SurveySection from "@/components/SurveySection";
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
          "HEALTHBENCH",
          "MULTIAGENTBENCH",
          "COLBENCH",
          "MEGASCIENCE",
        ]}
        speed={20}
        bg="#FF4D00"
        color="black"
      />
      <BenchmarksSection />
      <AgenticSection />
      <ScoringSection />
      <GovernanceSection />
      <MarqueeTicker
        items={[
          "CONSTRUCT VALIDITY",
          "DATA LEAKAGE",
          "BENCHMARK SATURATION",
          "CONTAMINATION DETECTION",
          "JUDGE DRIFT",
          "HALLUCINATION RATE",
          "JAILBREAK RESISTANCE",
          "PERTURBATION VARIANCE",
          "LOGIC COLLAPSE RATE",
          "FALSE REFUSAL RATE",
          "CANARY STRINGS",
          "IRR CHECKS",
          "SHA-256 INTEGRITY",
          "SIGNED ATTESTATION",
        ]}
        speed={25}
        bg="black"
        color="white"
      />
      <GlossarySection />
      <MarqueeTicker
        items={[
          "R.I.P. MMLU",
          "R.I.P. HELLASWAG",
          "R.I.P. GSM8K",
          "R.I.P. ARC CHALLENGE",
          "R.I.P. TRUTHFULQA",
          "R.I.P. WINOGRANDE",
          "R.I.P. BIG-BENCH",
          "R.I.P. HUMANEVAL",
          "R.I.P. ARENA-HARD AUTO v0.1",
          "EVERY SATURATED BENCHMARK IS A CONFIRMED HYPOTHESIS",
          "MOVE ON",
        ]}
        speed={22}
        bg="#FF4D00"
        color="black"
      />
      <BenchmarkCemetery />
      <ResourcesSection />
      <ResearchPapersSection />
      <SurveySection />
      <Footer />
    </div>
  );
}
