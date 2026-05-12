/*
 * ARTIFEX LABS — Inter-Annotator Agreement (IAA) Metrics
 * Comprehensive comparison table with animated confidence intervals
 * Design: Data-forward, scannable, with visual confidence bands
 */

import React, { useState, useEffect } from "react";
import { ChevronDown, AlertCircle, CheckCircle2 } from "lucide-react";

interface IAAMetric {
  id: string;
  name: string;
  symbol: string;
  useCase: string;
  dataType: string;
  pointEstimate: number;
  ciLower: number;
  ciUpper: number;
  interpretation: string;
  formula: string;
  advantages: string[];
  disadvantages: string[];
  prevalenceAdjusted: boolean;
}

const IAA_METRICS: IAAMetric[] = [
  {
    id: "cohens-kappa",
    name: "Cohen's Kappa (κ)",
    symbol: "κ",
    useCase: "Binary or categorical agreement between two raters",
    dataType: "Categorical (binary or multiclass)",
    pointEstimate: 0.82,
    ciLower: 0.78,
    ciUpper: 0.86,
    interpretation: "Substantial agreement (0.61-0.80 is substantial, 0.81+ is almost perfect)",
    formula: "κ = (P_o - P_e) / (1 - P_e)",
    advantages: [
      "Accounts for chance agreement",
      "Widely recognized and cited",
      "Works with multiple raters (extended version)",
      "Intuitive interpretation scale",
    ],
    disadvantages: [
      "Assumes fixed marginals",
      "Sensitive to prevalence skew",
      "Not recommended for highly imbalanced data",
      "Requires categorical data",
    ],
    prevalenceAdjusted: false,
  },
  {
    id: "krippendorff-alpha",
    name: "Krippendorff's Alpha (α)",
    symbol: "α",
    useCase: "Flexible metric for any number of raters and data types",
    dataType: "Nominal, ordinal, interval, ratio",
    pointEstimate: 0.79,
    ciLower: 0.74,
    ciUpper: 0.84,
    interpretation: "Acceptable agreement (0.67-0.80 is acceptable, 0.81+ is good)",
    formula: "α = 1 - (D_o / D_e)",
    advantages: [
      "Handles any number of raters",
      "Works with missing data",
      "Supports multiple distance metrics",
      "More robust to prevalence skew than Cohen's κ",
      "Recommended for ordinal scales",
    ],
    disadvantages: [
      "Computationally intensive",
      "Less familiar to practitioners",
      "Requires careful distance metric selection",
    ],
    prevalenceAdjusted: true,
  },
  {
    id: "gwet-ac2",
    name: "Gwet's AC2",
    symbol: "AC2",
    useCase: "Highly imbalanced data or extreme prevalence skew",
    dataType: "Categorical (nominal or ordinal)",
    pointEstimate: 0.81,
    ciLower: 0.77,
    ciUpper: 0.85,
    interpretation: "Strong agreement (0.61-0.80 is strong, 0.81+ is excellent)",
    formula: "AC2 = (P_o - P_e*) / (1 - P_e*)",
    advantages: [
      "Robust to prevalence skew",
      "Better for imbalanced datasets",
      "Recommended by modern practitioners",
      "Comparable to Cohen's κ on balanced data",
    ],
    disadvantages: [
      "Less widely known",
      "Requires specific software implementation",
      "Limited ordinal support",
    ],
    prevalenceAdjusted: true,
  },
  {
    id: "icc-2-1",
    name: "ICC(2,1) — Two-Way Mixed",
    symbol: "ICC",
    useCase: "Continuous or Likert-scale data with fixed set of raters",
    dataType: "Continuous or ordinal (Likert scales)",
    pointEstimate: 0.85,
    ciLower: 0.81,
    ciUpper: 0.89,
    interpretation: "Excellent agreement (0.75-0.90 is excellent, 0.90+ is outstanding)",
    formula: "ICC(2,1) = (BMS - EMS) / (BMS + (k-1)EMS + k(JMS-EMS)/n)",
    advantages: [
      "Standard for continuous data",
      "Accounts for rater effects",
      "Provides confidence intervals",
      "Works well with Likert scales",
    ],
    disadvantages: [
      "Assumes raters are representative sample",
      "Sensitive to outliers",
      "Requires balanced designs",
    ],
    prevalenceAdjusted: false,
  },
  {
    id: "fleiss-kappa",
    name: "Fleiss' Kappa (κ_F)",
    symbol: "κ_F",
    useCase: "Multiple raters (3+) evaluating same items",
    dataType: "Categorical (nominal or ordinal)",
    pointEstimate: 0.76,
    ciLower: 0.71,
    ciUpper: 0.81,
    interpretation: "Substantial agreement (0.61-0.80 is substantial)",
    formula: "κ_F = (P̄ - P_e) / (1 - P_e)",
    advantages: [
      "Handles variable number of raters per item",
      "Accounts for chance agreement",
      "Widely used in multi-rater studies",
    ],
    disadvantages: [
      "Assumes raters are interchangeable",
      "Sensitive to prevalence skew",
      "Not ideal for highly imbalanced data",
    ],
    prevalenceAdjusted: false,
  },
  {
    id: "percent-agreement",
    name: "Percent Agreement (P_o)",
    symbol: "P_o",
    useCase: "Simple baseline metric (not recommended as sole metric)",
    dataType: "Any categorical data",
    pointEstimate: 0.88,
    ciLower: 0.84,
    ciUpper: 0.92,
    interpretation: "88% of ratings agreed (does NOT account for chance)",
    formula: "P_o = (# agreements) / (# total ratings)",
    advantages: [
      "Simple to calculate",
      "Intuitive interpretation",
      "Good baseline for comparison",
    ],
    disadvantages: [
      "Does NOT account for chance agreement",
      "Inflated by random agreement",
      "Should never be used as sole metric",
      "Misleading on imbalanced data",
    ],
    prevalenceAdjusted: false,
  },
  {
    id: "mcdonald-omega",
    name: "McDonald's Omega (ω)",
    symbol: "ω",
    useCase: "Internal consistency of composite scales (multiple items)",
    dataType: "Continuous or ordinal (Likert scales)",
    pointEstimate: 0.87,
    ciLower: 0.83,
    ciUpper: 0.91,
    interpretation: "Excellent internal consistency (0.70-0.80 is good, 0.80+ is excellent)",
    formula: "ω = (Σλ_i)² / [(Σλ_i)² + Σθ_i]",
    advantages: [
      "More accurate than Cronbach's Alpha",
      "Does not assume tau-equivalence",
      "Based on CFA factor loadings",
      "Recommended for modern applications",
    ],
    disadvantages: [
      "Requires CFA model specification",
      "More computationally complex",
      "Less familiar to practitioners",
    ],
    prevalenceAdjusted: false,
  },
  {
    id: "scotts-pi",
    name: "Scott's Pi (π)",
    symbol: "π",
    useCase: "Two raters with categorical data (similar to Cohen's κ)",
    dataType: "Categorical (nominal)",
    pointEstimate: 0.80,
    ciLower: 0.76,
    ciUpper: 0.84,
    interpretation: "Substantial agreement (0.61-0.80 is substantial)",
    formula: "π = (P_o - P_e) / (1 - P_e)",
    advantages: [
      "Similar to Cohen's κ but assumes equal marginals",
      "Simpler calculation",
      "Good for symmetric designs",
    ],
    disadvantages: [
      "Assumes marginal distributions are equal",
      "Less flexible than Cohen's κ",
      "Limited to two raters",
    ],
    prevalenceAdjusted: false,
  },
];

const INTERPRETATION_SCALE = [
  { range: "0.81 - 1.00", label: "Almost Perfect / Excellent", color: "bg-green-500" },
  { range: "0.61 - 0.80", label: "Substantial / Strong", color: "bg-blue-500" },
  { range: "0.41 - 0.60", label: "Moderate", color: "bg-yellow-500" },
  { range: "0.21 - 0.40", label: "Fair", color: "bg-orange-500" },
  { range: "< 0.20", label: "Slight / Poor", color: "bg-red-500" },
];

const MetricRow: React.FC<{ metric: IAAMetric; isExpanded: boolean; onToggle: () => void }> = ({
  metric,
  isExpanded,
  onToggle,
}) => {
  const range = metric.ciUpper - metric.ciLower;
  const leftPercent = (metric.ciLower / 1.0) * 100;
  const widthPercent = (range / 1.0) * 100;

  return (
    <div className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors"
      >
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gray-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />

        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-900">{metric.name}</div>
          <p className="text-sm text-gray-600 truncate">{metric.useCase}</p>
        </div>

        {/* Confidence Interval Visualization */}
        <div className="flex-shrink-0 w-48">
          <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
            {/* CI Band */}
            <div
              className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-70"
              style={{
                left: `${leftPercent}%`,
                width: `${widthPercent}%`,
              }}
            />
            {/* Point Estimate */}
            <div
              className="absolute top-1/2 w-2 h-2 bg-blue-900 rounded-full transform -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${(metric.pointEstimate / 1.0) * 100}%` }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-1 text-center">
            {metric.pointEstimate.toFixed(2)} [{metric.ciLower.toFixed(2)}, {metric.ciUpper.toFixed(2)}]
          </div>
        </div>

        <div className="flex-shrink-0 text-right">
          <div className="font-bold text-lg text-gray-900">{metric.pointEstimate.toFixed(2)}</div>
          <div className="text-xs text-gray-500">{metric.dataType}</div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 bg-gray-50 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Formula */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Formula</h4>
              <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm text-gray-700">
                {metric.formula}
              </div>
            </div>

            {/* Interpretation */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Interpretation</h4>
              <p className="text-sm text-gray-700">{metric.interpretation}</p>
            </div>

            {/* Advantages */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" />
                Advantages
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {metric.advantages.map((adv, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disadvantages */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle size={16} className="text-red-600" />
                Disadvantages
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {metric.disadvantages.map((dis, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-600">✗</span>
                    <span>{dis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prevalence Note */}
          {metric.prevalenceAdjusted && (
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 rounded text-sm text-blue-800">
              <strong>Prevalence-Adjusted:</strong> This metric is robust to prevalence skew and recommended for imbalanced datasets.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function IAAMetricsTable() {
  const [expandedMetrics, setExpandedMetrics] = useState<Set<string>>(new Set());

  const toggleMetric = (id: string) => {
    const newExpanded = new Set(expandedMetrics);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedMetrics(newExpanded);
  };

  return (
    <div className="w-full py-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              STATISTICAL METHODS
            </span>
          </div>

          <h2 className="text-4xl font-bold text-black mb-3">
            Inter-Annotator Agreement (IAA) Metrics
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Comprehensive guide to selecting, interpreting, and applying chance-corrected agreement metrics for evaluating annotation reliability and rubric quality.
          </p>

          {/* Interpretation Scale */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Interpretation Scale (Landis & Koch, 1977)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {INTERPRETATION_SCALE.map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`${item.color} h-12 rounded-lg mb-2 flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{item.range}</span>
                  </div>
                  <p className="text-xs text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-900 text-white p-4 grid grid-cols-12 gap-4 font-semibold text-sm">
            <div className="col-span-4">Metric & Use Case</div>
            <div className="col-span-3">Confidence Interval (95%)</div>
            <div className="col-span-2">Point Est.</div>
            <div className="col-span-3">Data Type</div>
          </div>

          <div>
            {IAA_METRICS.map((metric) => (
              <MetricRow
                key={metric.id}
                metric={metric}
                isExpanded={expandedMetrics.has(metric.id)}
                onToggle={() => toggleMetric(metric.id)}
              />
            ))}
          </div>
        </div>

        {/* Decision Guide */}
        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-indigo-900 mb-6">IAA Metric Selection Decision Tree</h3>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
              <p className="font-semibold text-gray-900 mb-2">1. How many raters?</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• <strong>2 raters:</strong> Cohen's κ or Scott's π</li>
                <li>• <strong>3+ raters:</strong> Fleiss' κ, Krippendorff's α, or ICC</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-semibold text-gray-900 mb-2">2. What data type?</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• <strong>Categorical:</strong> Cohen's κ, Fleiss' κ, Gwet's AC2</li>
                <li>• <strong>Ordinal (Likert):</strong> Krippendorff's α (with ordinal distance)</li>
                <li>• <strong>Continuous:</strong> ICC(2,1) or ICC(3,1)</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
              <p className="font-semibold text-gray-900 mb-2">3. Is data imbalanced?</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• <strong>Yes (prevalence skew):</strong> Use Gwet's AC2 or Krippendorff's α</li>
                <li>• <strong>No (balanced):</strong> Cohen's κ is acceptable</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-gray-900 mb-2">4. Always report:</p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Point estimate + 95% bootstrap confidence interval</li>
                <li>• Raw percent agreement (as baseline)</li>
                <li>• Item-level entropy heatmap</li>
                <li>• Pairwise confusion matrices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h4 className="font-semibold text-yellow-900 mb-3">Best Practices for Reporting IAA</h4>
          <ul className="text-sm text-yellow-800 space-y-2">
            <li>✓ Report multiple metrics to triangulate reliability</li>
            <li>✓ Always include 95% confidence intervals (never point estimates alone)</li>
            <li>✓ Disaggregate by hazard category, language, and annotator pair</li>
            <li>✓ Document the exact aggregation rule (majority vote vs. consensus vs. adjudicated)</li>
            <li>✓ For safety evaluations, target IAA ≥ 0.75 (substantial agreement)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
