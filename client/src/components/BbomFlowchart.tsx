import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface BbomLayer {
  id: number;
  name: string;
  description: string;
  category: 'input' | 'processing' | 'output' | 'governance';
  details: string[];
}

const BBOM_LAYERS: BbomLayer[] = [
  {
    id: 1,
    name: 'Task Definition & Specification',
    description: 'Clearly define the capability being evaluated, including scope, constraints, and success criteria.',
    category: 'input',
    details: ['Capability scope', 'Performance targets', 'Constraint specification', 'Success metrics']
  },
  {
    id: 2,
    name: 'Data Collection & Curation',
    description: 'Gather representative data that reflects real-world usage patterns and edge cases.',
    category: 'input',
    details: ['Data sourcing', 'Representativeness analysis', 'Edge case identification', 'Data versioning']
  },
  {
    id: 3,
    name: 'Benchmark Construction',
    description: 'Build the benchmark dataset with proper train/test splits and stratification.',
    category: 'processing',
    details: ['Dataset assembly', 'Split strategy', 'Stratification', 'Contamination checks']
  },
  {
    id: 4,
    name: 'Evaluation Rubric Design',
    description: 'Design valid, reliable rubrics for scoring model outputs.',
    category: 'processing',
    details: ['Rubric development', 'Criterion specification', 'Anchor examples', 'Validity testing']
  },
  {
    id: 5,
    name: 'Model Execution & Inference',
    description: 'Run models under controlled conditions with consistent hyperparameters.',
    category: 'processing',
    details: ['Hyperparameter setting', 'Inference pipeline', 'Output capture', 'Error handling']
  },
  {
    id: 6,
    name: 'Human Annotation & Scoring',
    description: 'Obtain human judgments using trained annotators with quality assurance.',
    category: 'processing',
    details: ['Annotator training', 'Blind evaluation', 'IAA measurement', 'Conflict resolution']
  },
  {
    id: 7,
    name: 'Automated Scoring & LLM-as-Judge',
    description: 'Apply automated scoring methods including LLM-based evaluation with bias detection.',
    category: 'processing',
    details: ['Metric computation', 'LLM scoring setup', 'Bias analysis', 'Calibration']
  },
  {
    id: 8,
    name: 'Statistical Analysis & Significance Testing',
    description: 'Compute statistics, confidence intervals, and test for statistical significance.',
    category: 'output',
    details: ['Descriptive statistics', 'Confidence intervals', 'Significance tests', 'Effect sizes']
  },
  {
    id: 9,
    name: 'Results Aggregation & Reporting',
    description: 'Aggregate results across models, datasets, and evaluation methods.',
    category: 'output',
    details: ['Result aggregation', 'Leaderboard generation', 'Report compilation', 'Visualization']
  },
  {
    id: 10,
    name: 'Benchmark Validation & Decay Analysis',
    description: 'Validate benchmark quality and monitor for saturation and decay over time.',
    category: 'output',
    details: ['Validity assessment', 'Saturation monitoring', 'Decay tracking', 'Refresh planning']
  },
  {
    id: 11,
    name: 'Governance, Audit & Continuous Assurance',
    description: 'Establish governance procedures, audit trails, and continuous monitoring.',
    category: 'governance',
    details: ['Audit procedures', 'Access controls', 'Change tracking', 'Compliance verification']
  }
];

const CATEGORY_COLORS = {
  input: { bg: '#E8F4F8', border: '#0891B2', label: 'INPUT' },
  processing: { bg: '#FEF3C7', border: '#F59E0B', label: 'PROCESSING' },
  output: { bg: '#DCFCE7', border: '#22C55E', label: 'OUTPUT' },
  governance: { bg: '#FCE7F3', border: '#EC4899', label: 'GOVERNANCE' }
};

export const BbomFlowchart: React.FC = () => {
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);
  const [visibleLayers, setVisibleLayers] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Stagger animation on mount
    const timer = setInterval(() => {
      setVisibleLayers(prev => {
        if (prev.size < BBOM_LAYERS.length) {
          const newSet = new Set(prev);
          newSet.add(prev.size + 1);
          return newSet;
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="border-2 border-black bg-white p-6">
        <h3 className="font-archivo-black text-2xl uppercase text-black mb-2">
          11-Layer Bill of Materials (BBOM)
        </h3>
        <p className="font-space-mono text-sm text-gray-700">
          Complete specification of what must exist for a valid benchmark. Hover over each layer for details.
        </p>
      </div>

      {/* Flowchart */}
      <div className="border-2 border-black bg-white p-8">
        <div className="space-y-4">
          {BBOM_LAYERS.map((layer, index) => {
            const isVisible = visibleLayers.has(layer.id);
            const colors = CATEGORY_COLORS[layer.category];
            const isExpanded = expandedLayer === layer.id;

            return (
              <div
                key={layer.id}
                className={`transform transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {/* Connection Line */}
                {index < BBOM_LAYERS.length - 1 && isVisible && (
                  <div className="flex justify-center mb-2">
                    <div className="w-0.5 h-4 bg-black animate-pulse" />
                  </div>
                )}

                {/* Layer Box */}
                <button
                  onClick={() => setExpandedLayer(isExpanded ? null : layer.id)}
                  className={`w-full text-left border-2 border-black p-4 transition-all duration-300 hover:shadow-lg ${
                    isExpanded ? 'ring-2 ring-orange-500' : ''
                  }`}
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.border
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Layer Number and Category */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-space-mono text-xs font-bold text-black bg-white px-2 py-1 border border-black">
                          LAYER {layer.id}
                        </span>
                        <span
                          className="font-space-mono text-xs font-bold px-2 py-1 text-white"
                          style={{ backgroundColor: colors.border }}
                        >
                          {colors.label}
                        </span>
                      </div>

                      {/* Layer Title */}
                      <h4 className="font-archivo-black text-lg text-black mb-1">
                        {layer.name}
                      </h4>

                      {/* Layer Description */}
                      <p className="font-space-mono text-sm text-gray-700">
                        {layer.description}
                      </p>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                      size={20}
                      className={`text-black flex-shrink-0 ml-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t-2 border-black animate-in fade-in slide-in-from-top-2 duration-300">
                      <h5 className="font-space-mono text-xs font-bold text-black uppercase mb-3">
                        Key Components:
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {layer.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-orange-600 font-bold mt-0.5">▸</span>
                            <span className="font-inter text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t-2 border-black">
          <h4 className="font-space-mono text-xs font-bold text-black uppercase mb-3">
            Layer Categories:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(CATEGORY_COLORS).map(([key, colors]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 border-2"
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.border
                  }}
                />
                <span className="font-space-mono text-xs text-gray-700">
                  {colors.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="border-2 border-black bg-gray-50 p-4">
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="font-archivo-black text-2xl text-black">11</div>
            <div className="font-space-mono text-xs text-gray-600 uppercase">Layers</div>
          </div>
          <div className="text-center">
            <div className="font-archivo-black text-2xl text-blue-600">3</div>
            <div className="font-space-mono text-xs text-gray-600 uppercase">Input</div>
          </div>
          <div className="text-center">
            <div className="font-archivo-black text-2xl text-amber-600">5</div>
            <div className="font-space-mono text-xs text-gray-600 uppercase">Processing</div>
          </div>
          <div className="text-center">
            <div className="font-archivo-black text-2xl text-emerald-600">3</div>
            <div className="font-space-mono text-xs text-gray-600 uppercase">Output/Gov</div>
          </div>
        </div>
      </div>
    </div>
  );
};
