import React, { useState, useEffect } from 'react';
import { Sankey, Tooltip, ResponsiveContainer } from 'recharts';

interface SankeyData {
  nodes: Array<{ name: string }>;
  links: Array<{ source: number; target: number; value: number; category?: string }>;
}

const BENCHMARK_SANKEY_DATA: SankeyData = {
  nodes: [
    // Source: Categories
    { name: 'NLP Benchmarks' },
    { name: 'Vision Benchmarks' },
    { name: 'Reasoning Benchmarks' },
    { name: 'Safety Benchmarks' },
    { name: 'Multimodal Benchmarks' },
    { name: 'Agentic Benchmarks' },
    { name: 'Governance Benchmarks' },
    
    // Middle: Individual Benchmarks (14 shown, representing 50+)
    { name: 'MMLU' },
    { name: 'HellaSwag' },
    { name: 'ARC' },
    { name: 'ImageNet' },
    { name: 'COCO' },
    { name: 'GSM8K' },
    { name: 'MATH' },
    { name: 'HarmBench' },
    { name: 'JailBreak DB' },
    { name: 'ToolBench' },
    { name: 'AgentBench' },
    { name: 'WebArena' },
    { name: 'AI2 Governance' },
    { name: '+36 more' },
    
    // Destination: Maturity Stages
    { name: 'Emerging' },
    { name: 'Active' },
    { name: 'Saturated' },
    { name: 'Legacy' }
  ],
  links: [
    // NLP → Benchmarks
    { source: 0, target: 7, value: 8 },
    { source: 0, target: 8, value: 6 },
    { source: 0, target: 9, value: 5 },
    
    // Vision → Benchmarks
    { source: 1, target: 10, value: 7 },
    { source: 1, target: 11, value: 6 },
    
    // Reasoning → Benchmarks
    { source: 2, target: 12, value: 8 },
    { source: 2, target: 13, value: 7 },
    
    // Safety → Benchmarks
    { source: 3, target: 14, value: 6 },
    { source: 3, target: 15, value: 5 },
    
    // Multimodal → Benchmarks
    { source: 4, target: 16, value: 4 },
    { source: 4, target: 17, value: 3 },
    
    // Agentic → Benchmarks
    { source: 5, target: 18, value: 5 },
    { source: 5, target: 19, value: 4 },
    
    // Governance → Benchmarks
    { source: 6, target: 20, value: 3 },
    
    // All categories → More benchmarks
    { source: 0, target: 21, value: 12 },
    { source: 1, target: 21, value: 8 },
    { source: 2, target: 21, value: 10 },
    { source: 3, target: 21, value: 8 },
    { source: 4, target: 21, value: 6 },
    { source: 5, target: 21, value: 7 },
    { source: 6, target: 21, value: 5 },
    
    // Benchmarks → Maturity Stages
    { source: 7, target: 23, value: 8 },
    { source: 8, target: 23, value: 6 },
    { source: 9, target: 24, value: 5 },
    { source: 10, target: 23, value: 7 },
    { source: 11, target: 24, value: 6 },
    { source: 12, target: 23, value: 8 },
    { source: 13, target: 23, value: 7 },
    { source: 14, target: 22, value: 6 },
    { source: 15, target: 22, value: 5 },
    { source: 16, target: 22, value: 4 },
    { source: 17, target: 23, value: 3 },
    { source: 18, target: 22, value: 5 },
    { source: 19, target: 22, value: 4 },
    { source: 20, target: 22, value: 3 },
    { source: 21, target: 23, value: 20 },
    { source: 21, target: 24, value: 16 }
  ]
};

export const BenchmarkSankey: React.FC = () => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationProgress(prev => (prev < 1 ? prev + 0.05 : 1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const COLORS = {
    nlp: '#FF6B6B',
    vision: '#4ECDC4',
    reasoning: '#45B7D1',
    safety: '#FFA07A',
    multimodal: '#98D8C8',
    agentic: '#F7DC6F',
    governance: '#BB8FCE',
    emerging: '#90EE90',
    active: '#FFD700',
    saturated: '#FF6347',
    legacy: '#808080'
  };

  const getNodeColor = (name: string) => {
    if (name.includes('NLP')) return COLORS.nlp;
    if (name.includes('Vision')) return COLORS.vision;
    if (name.includes('Reasoning')) return COLORS.reasoning;
    if (name.includes('Safety')) return COLORS.safety;
    if (name.includes('Multimodal')) return COLORS.multimodal;
    if (name.includes('Agentic')) return COLORS.agentic;
    if (name.includes('Governance')) return COLORS.governance;
    if (name.includes('Emerging')) return COLORS.emerging;
    if (name.includes('Active')) return COLORS.active;
    if (name.includes('Saturated')) return COLORS.saturated;
    if (name.includes('Legacy')) return COLORS.legacy;
    return '#FF4D00';
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="border-2 border-black bg-white p-6">
        <h3 className="font-archivo-black text-2xl uppercase text-black mb-2">
          Benchmark Evolution Flow (2024-2026)
        </h3>
        <p className="font-space-mono text-sm text-gray-700">
          50+ benchmarks flowing from 7 categories through maturity stages. Wider flows = more benchmarks.
        </p>
      </div>

      {/* Sankey Chart - Flow Diagram */}
      <div className="border-2 border-black bg-white p-6">
        <div className="w-full" style={{ opacity: animationProgress }}>
          <ResponsiveContainer width="100%" height={500}>
            <Sankey
              data={BENCHMARK_SANKEY_DATA}
              node={{ fill: '#FF4D00', fillOpacity: 1 }}
              link={{ stroke: '#FF4D00', strokeOpacity: 0.3 }}
              nodePadding={150}
              margin={{ top: 20, right: 160, bottom: 20, left: 20 }}
            >
              <Tooltip />
            </Sankey>
          </ResponsiveContainer>
        </div>
        <p className="font-space-mono text-xs text-gray-600 mt-4 text-center">
          Benchmark categories flow to maturity stages. Width represents benchmark count. Hover for details.
        </p>
      </div>

      {/* Legend and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Categories Legend */}
        <div className="border-2 border-black bg-white p-4">
          <h4 className="font-space-mono text-xs font-bold text-black uppercase mb-3">
            Benchmark Categories:
          </h4>
          <div className="space-y-2">
            {[
              { label: 'NLP', color: COLORS.nlp, count: '19 benchmarks' },
              { label: 'Vision', color: COLORS.vision, count: '13 benchmarks' },
              { label: 'Reasoning', color: COLORS.reasoning, count: '15 benchmarks' },
              { label: 'Safety', color: COLORS.safety, count: '11 benchmarks' },
              { label: 'Multimodal', color: COLORS.multimodal, count: '7 benchmarks' },
              { label: 'Agentic', color: COLORS.agentic, count: '9 benchmarks' },
              { label: 'Governance', color: COLORS.governance, count: '3 benchmarks' }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 border border-black"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-space-mono text-xs text-gray-700">{item.label}</span>
                </div>
                <span className="font-space-mono text-xs text-gray-600">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Maturity Stages Legend */}
        <div className="border-2 border-black bg-white p-4">
          <h4 className="font-space-mono text-xs font-bold text-black uppercase mb-3">
            Maturity Stages:
          </h4>
          <div className="space-y-2">
            {[
              { label: 'Emerging', color: COLORS.emerging, desc: 'New benchmarks (< 1 year)' },
              { label: 'Active', color: COLORS.active, desc: 'Widely used (1-3 years)' },
              { label: 'Saturated', color: COLORS.saturated, desc: 'Plateau reached (3+ years)' },
              { label: 'Legacy', color: COLORS.legacy, desc: 'Superseded or deprecated' }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 border border-black"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-space-mono text-xs text-gray-700">{item.label}</span>
                </div>
                <span className="font-space-mono text-xs text-gray-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="border-2 border-black bg-gray-50 p-4">
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="font-archivo-black text-2xl text-black">50+</div>
            <div className="font-space-mono text-xs text-gray-600 uppercase">Benchmarks</div>
          </div>
          <div className="text-center">
            <div className="font-archivo-black text-2xl text-black">7</div>
            <div className="font-space-mono text-xs text-gray-600 uppercase">Categories</div>
          </div>
          <div className="text-center">
            <div className="font-archivo-black text-2xl text-black">4</div>
            <div className="font-space-mono text-xs text-gray-600 uppercase">Maturity Stages</div>
          </div>
          <div className="text-center">
            <div className="font-archivo-black text-2xl text-black">2024-26</div>
            <div className="font-space-mono text-xs text-gray-600 uppercase">Time Period</div>
          </div>
        </div>
      </div>
    </div>
  );
};
