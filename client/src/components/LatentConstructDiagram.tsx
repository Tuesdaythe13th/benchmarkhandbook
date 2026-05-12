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
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "operationalization",
    label: "Operationalization",
    description: "Mapping latent construct to observable indicators through rubric criteria",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "rubric",
    label: "Rubric Criteria (δ)",
    description: "Specific, measurable criteria with difficulty and discriminative capacity",
    symbol: "δ_i",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "observable",
    label: "Observable Score (X)",
    description: "Numerical or categorical output from rubric evaluation",
    symbol: "X_ij",
    color: "from-green-500 to-emerald-500",
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
    <div className="w-full py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
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
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="space-y-4">
            {CONSTRUCT_STEPS.map((step, index) => (
              <div key={step.id}>
                <button
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className="w-full text-left group"
                >
                  <div
                    className={`bg-gradient-to-r ${step.color} p-6 rounded-lg text-white hover:shadow-lg transition-all cursor-pointer transform hover:scale-102`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {step.symbol && (
                            <span className="text-3xl font-bold opacity-75">{step.symbol}</span>
                          )}
                          <h3 className="text-xl font-bold">{step.label}</h3>
                        </div>
                        <p className="text-white/90 text-sm">{step.description}</p>
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
            className="w-full text-left bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-6 rounded-lg hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">The Psychometric Equation</h3>
              <ChevronRight
                size={24}
                className={`transition-transform ${showEquation ? "rotate-90" : ""}`}
              />
            </div>
          </button>

          {showEquation && (
            <div className="mt-4 bg-white border border-gray-200 rounded-lg p-8">
              {/* Equation Display */}
              <div className="bg-gradient-to-r from-indigo-50 to-violet-50 p-6 rounded-lg mb-6 border border-indigo-200">
                <div className="text-center mb-2">
                  <p className="text-sm text-gray-600 mb-2">Classical Psychometric Model</p>
                  <p className="text-3xl font-mono font-bold text-indigo-900">
                    X<sub>ij</sub> = f(θ<sub>j</sub>, δ<sub>i</sub>) + ε<sub>ij</sub>
                  </p>
                </div>
              </div>

              {/* Equation Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EQUATION_PARTS.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors"
                  >
                    <div className="font-mono font-bold text-indigo-600 text-lg mb-2">
                      {item.part}
                    </div>
                    <p className="text-sm text-gray-700">{item.meaning}</p>
                  </div>
                ))}
              </div>

              {/* Interpretation */}
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-900 mb-2">Interpretation</h4>
                <p className="text-sm text-blue-800">
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
            className="w-full text-left bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-lg hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Measurement Error Sources (ε_ij)</h3>
              <ChevronRight
                size={24}
                className={`transition-transform ${showErrorDecomposition ? "rotate-90" : ""}`}
              />
            </div>
          </button>

          {showErrorDecomposition && (
            <div className="mt-4 bg-white border border-gray-200 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                Random measurement error arises from multiple sources. Understanding these sources helps engineers design rubrics that minimize error and maximize signal-to-noise ratio.
              </p>

              <div className="space-y-4">
                {ERROR_SOURCES.map((error, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{error.source}</span>
                      <span className="text-sm font-bold text-gray-600">{error.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div
                        className={`${error.color} h-full transition-all duration-1000`}
                        style={{ width: `${error.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mitigation Strategies */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-4">Mitigation Strategies</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex gap-2">
                    <span className="font-bold">→</span>
                    <span>
                      <strong>Reduce Linguistic Ambiguity:</strong> Use precise, operationalized criteria with concrete examples and boundary cases.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">→</span>
                    <span>
                      <strong>Standardize Annotator Training:</strong> Implement formal qualification curricula and double-coded shadow periods.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">→</span>
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
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
          <h3 className="font-bold text-purple-900 mb-3">Key Insight</h3>
          <p className="text-purple-800">
            <strong>A rubric is not a bureaucratic wrapper—it is the measurement instrument itself.</strong> Without an explicit, versioned rubric, human annotators and automated judges rely on idiosyncratic, uncalibrated internal mental models. The rubric formally specifies the mapping from latent constructs to observable scores, making evaluation reproducible, auditable, and defensible.
          </p>
        </div>
      </div>
    </div>
  );
}
