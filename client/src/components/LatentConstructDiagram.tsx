/*
 * ARTIFEX LABS — Latent Construct Operationalization
 * Animated psychometric flow diagram
 * Shows: θ (latent) → measurement model → observable scores
 */

import React, { useState } from "react";
import { ChevronRight, Info } from "lucide-react";

interface ConstructStep {
  id: string;
  label: string;
  description: string;
  symbol?: string;
  color: string;
}

const CONSTRUCT_STEPS: ConstructStep[] = [
  {
    id: "latent",
    label: "Latent Construct (θ)",
    description: "Unobservable underlying characteristic (e.g., safety, helpfulness, reasoning fidelity)",
    symbol: "θ",
    color: "bg-[#FF4D00] text-black border-2 border-black",
  },
  {
    id: "operationalization",
    label: "Operationalization",
    description: "Mapping latent construct to observable indicators through rubric criteria",
    color: "bg-black text-white border-2 border-black",
  },
  {
    id: "rubric",
    label: "Rubric Criteria (δ)",
    description: "Specific, measurable criteria with difficulty and discriminative capacity",
    symbol: "δ_i",
    color: "bg-white text-black border-2 border-black",
  },
  {
    id: "observable",
    label: "Observable Score (X)",
    description: "Numerical or categorical output from rubric evaluation",
    symbol: "X_ij",
    color: "bg-[#FFF5F0] text-black border-2 border-black",
  },
];

const EQUATION_PARTS = [
  { part: "X_ij", meaning: "Observed score on criterion i for output j" },
  { part: "=", meaning: "is determined by" },
  { part: "f(θ_j, δ_i)", meaning: "function of latent construct and criterion parameters" },
  { part: "+", meaning: "plus" },
  { part: "ε_ij", meaning: "random measurement error (linguistic ambiguity, annotator subjectivity)" },
];

const ERROR_SOURCES = [
  { source: "Linguistic Ambiguity", percentage: 35, color: "bg-red-500" },
  { source: "Annotator Subjectivity", percentage: 40, color: "bg-orange-500" },
  { source: "Environmental Noise", percentage: 25, color: "bg-yellow-500" },
];

export default function LatentConstructDiagram() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [showEquation, setShowEquation] = useState(false);
  const [showErrorDecomposition, setShowErrorDecomposition] = useState(false);

  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#FF4D00] text-black border border-black px-3 py-1 rounded-none text-sm font-mono font-bold inline-block">
              MEASUREMENT THEORY
            </span>
          </div>

          <h2 className="text-4xl font-bold text-black mb-3">
            Latent Constructs & Operationalization
          </h2>

          <p className="text-lg text-gray-700">
            How unobservable characteristics (like safety or reasoning quality) are transformed into measurable, observable scores through rubric-based evaluation.
          </p>
        </div>

        {/* Main Flow Diagram */}
        <div className="bg-white rounded-none border-2 border-black p-8 mb-8">
          <div className="space-y-4">
            {CONSTRUCT_STEPS.map((step, index) => (
              <div key={step.id}>
                <button
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className="w-full text-left group"
                >
                  <div
                    className={`${step.color} p-6 rounded-none hover:shadow-[4px_4px_0_#000] transition-all cursor-pointer transform hover:scale-102`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {step.symbol && (
                            <span className="text-3xl font-bold font-mono">{step.symbol}</span>
                          )}
                          <h3 className="text-xl font-bold uppercase">{step.label}</h3>
                        </div>
                        <p className="text-sm">{step.description}</p>
                      </div>
                      <Info
                        size={20}
                        className="flex-shrink-0 opacity-75 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </button>

                {/* Arrow between steps */}
                {index < CONSTRUCT_STEPS.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ChevronRight
                      size={32}
                      className="text-gray-400 rotate-90 animate-bounce"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Psychometric Equation */}
        <div className="mb-8">
          <button
            onClick={() => setShowEquation(!showEquation)}
            className="w-full text-left bg-black text-white p-6 rounded-none hover:bg-gray-900 transition-all border-2 border-black"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold uppercase font-mono">The Psychometric Equation</h3>
              <ChevronRight
                size={24}
                className={`transition-transform text-[#FF4D00] ${showEquation ? "rotate-90" : ""}`}
              />
            </div>
          </button>

          {showEquation && (
            <div className="mt-4 bg-white border-2 border-black rounded-none p-8">
              {/* Equation Display */}
              <div className="bg-[#FFF5F0] p-6 rounded-none mb-6 border-2 border-black">
                <div className="text-center mb-2">
                  <p className="text-sm text-gray-600 mb-2 font-mono uppercase">Classical Psychometric Model</p>
                  <p className="text-3xl font-mono font-bold text-black">
                    X<sub>ij</sub> = f(θ<sub>j</sub>, δ<sub>i</sub>) + ε<sub>ij</sub>
                  </p>
                </div>
              </div>

              {/* Equation Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EQUATION_PARTS.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-none border-2 border-black hover:bg-[#FFF5F0] transition-colors"
                  >
                    <div className="font-mono font-bold text-[#FF4D00] text-lg mb-2">
                      {item.part}
                    </div>
                    <p className="text-sm text-gray-700">{item.meaning}</p>
                  </div>
                ))}
              </div>

              {/* Interpretation */}
              <div className="mt-6 bg-[#FFF5F0] border-2 border-black p-4 rounded-none">
                <h4 className="font-semibold text-black mb-2 uppercase font-mono">Interpretation</h4>
                <p className="text-sm text-black">
                  An observed score is a function of the true, unobservable latent construct and the rubric's structural parameters, plus random measurement error. Without a well-designed rubric (δ_i), the mapping from latent construct to observable score becomes unreliable and unmeasurable.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Error Decomposition */}
        <div className="mb-8">
          <button
            onClick={() => setShowErrorDecomposition(!showErrorDecomposition)}
            className="w-full text-left bg-black text-white p-6 rounded-none hover:bg-gray-900 transition-all border-2 border-black"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold uppercase font-mono">Measurement Error Sources (ε_ij)</h3>
              <ChevronRight
                size={24}
                className={`transition-transform text-[#FF4D00] ${showErrorDecomposition ? "rotate-90" : ""}`}
              />
            </div>
          </button>

          {showErrorDecomposition && (
            <div className="mt-4 bg-white border-2 border-black rounded-none p-8">
              <p className="text-gray-700 mb-6 font-mono text-sm">
                Random measurement error arises from multiple sources. Understanding these sources helps engineers design rubrics that minimize error and maximize signal-to-noise ratio.
              </p>

              <div className="space-y-4">
                {ERROR_SOURCES.map((error, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-black font-mono">{error.source}</span>
                      <span className="text-sm font-bold text-black font-mono">{error.percentage}%</span>
                    </div>
                    <div className="w-full bg-white border border-black rounded-none h-4 overflow-hidden">
                      <div
                        className="bg-black h-full transition-all duration-1000"
                        style={{ width: `${error.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mitigation Strategies */}
              <div className="mt-8 bg-[#FFF5F0] border-2 border-black rounded-none p-6">
                <h4 className="font-semibold text-black mb-4 uppercase font-mono">Mitigation Strategies</h4>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex gap-2">
                    <span className="font-bold text-[#FF4D00]">→</span>
                    <span>
                      <strong>Reduce Linguistic Ambiguity:</strong> Use precise, operationalized criteria with concrete examples and boundary cases.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#FF4D00]">→</span>
                    <span>
                      <strong>Standardize Annotator Training:</strong> Implement formal qualification curricula and double-coded shadow periods.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#FF4D00]">→</span>
                    <span>
                      <strong>Control Environmental Factors:</strong> Standardize annotation interfaces, deploy honeypots, and monitor annotator fatigue.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Key Takeaway */}
        <div className="bg-white border-2 border-black rounded-none p-8">
          <h3 className="font-bold text-black mb-3 uppercase font-mono">Key Insight</h3>
          <p className="text-black">
            <strong>A rubric is not a bureaucratic wrapper—it is the measurement instrument itself.</strong> Without an explicit, versioned rubric, human annotators and automated judges rely on idiosyncratic, uncalibrated internal mental models. The rubric formally specifies the mapping from latent constructs to observable scores, making evaluation reproducible, auditable, and defensible.
          </p>
        </div>
      </div>
    </div>
  );
}
