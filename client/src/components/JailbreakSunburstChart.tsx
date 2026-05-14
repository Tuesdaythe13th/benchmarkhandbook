import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { jailbreakTaxonomy } from '@/data/jailbreak-taxonomy';

interface SunburstNode {
  name: string;
  value: number;
  fill: string;
  payload?: any;
}

export const JailbreakSunburstChart: React.FC = () => {
  const [activeFamily, setActiveFamily] = useState<string | null>(null);

  // Transform jailbreak taxonomy into sunburst data structure
  const sunburstData = useMemo(() => {
    const root: any = {
      name: 'JAILBREAK TAXONOMY',
      children: jailbreakTaxonomy.map(family => ({
        name: family.name,
        value: family.totalTechniques,
        fill: family.color,
        familyId: family.id,
        maxAsr: family.maxAsr,
        children: family.subcategories.map(sub => ({
          name: sub.name,
          value: sub.count,
          fill: family.color,
          familyId: family.id,
          subcategoryId: sub.id,
          avgAsr: sub.avgAsr,
          techniques: sub.techniques
        }))
      }))
    };
    return root;
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black border-2 border-orange-500 p-3 rounded-none shadow-lg">
          <p className="font-space-mono text-sm text-white font-bold">{data.name}</p>
          <p className="font-space-mono text-xs text-orange-400">
            Techniques: {data.value}
          </p>
          {data.maxAsr && (
            <p className="font-space-mono text-xs text-red-400">
              Max ASR: {data.maxAsr}%
            </p>
          )}
          {data.avgAsr && (
            <p className="font-space-mono text-xs text-yellow-400">
              Avg ASR: {data.avgAsr}%
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  const handleClick = (data: any) => {
    if (data.familyId && !data.subcategoryId) {
      setActiveFamily(activeFamily === data.familyId ? null : data.familyId);
    }
  };

  // Get active family data for details panel
  const activeFamilyData = activeFamily 
    ? jailbreakTaxonomy.find(f => f.id === activeFamily)
    : null;

  return (
    <div className="w-full space-y-6">
      {/* Sunburst Chart */}
      <div className="border-2 border-black bg-white p-6">
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sunburstData.children}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                innerRadius={80}
                stroke="#000"
                strokeWidth={2}
                onClick={handleClick}
              >
                {sunburstData.children?.map((family: any, idx: number) => (
                  <Cell key={`cell-${idx}`} fill={family.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="font-space-mono text-xs text-gray-600 mt-4 text-center">
          Click on a family to see detailed breakdown
        </p>
      </div>

      {/* Active Family Details */}
      {activeFamilyData && (
        <div className="border-2 border-black bg-orange-50 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-archivo-black text-2xl text-black mb-2">
                {activeFamilyData.name}
              </h3>
              <p className="font-space-mono text-sm text-gray-700">
                {activeFamilyData.description}
              </p>
            </div>
            <button
              onClick={() => setActiveFamily(null)}
              className="text-2xl text-black hover:text-orange-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="border-2 border-black p-3 bg-white">
              <p className="font-space-mono text-xs text-gray-600 uppercase">Techniques</p>
              <p className="font-archivo-black text-2xl text-black">
                {activeFamilyData.totalTechniques}
              </p>
            </div>
            <div className="border-2 border-black p-3 bg-white">
              <p className="font-space-mono text-xs text-gray-600 uppercase">Max ASR</p>
              <p className="font-archivo-black text-2xl text-red-600">
                {activeFamilyData.maxAsr}%
              </p>
            </div>
            <div className="border-2 border-black p-3 bg-white">
              <p className="font-space-mono text-xs text-gray-600 uppercase">Subcategories</p>
              <p className="font-archivo-black text-2xl text-black">
                {activeFamilyData.subcategories.length}
              </p>
            </div>
          </div>

          {/* Subcategories Grid */}
          <div className="space-y-3">
            <h4 className="font-archivo-black text-lg text-black uppercase">Subcategories</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeFamilyData.subcategories.map((sub) => (
                <div key={sub.id} className="border-2 border-black p-3 bg-white hover:bg-orange-100 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-space-mono text-sm font-bold text-black">
                      {sub.name}
                    </h5>
                    <span className="font-space-mono text-xs bg-black text-white px-2 py-1">
                      {sub.count}
                    </span>
                  </div>
                  <p className="font-space-mono text-xs text-gray-600">
                    Avg ASR: <span className="text-orange-600 font-bold">{sub.avgAsr}%</span>
                  </p>
                  
                  {/* Top 3 Techniques by ASR */}
                  <div className="mt-2 space-y-1">
                    {sub.techniques
                      .sort((a, b) => b.asr - a.asr)
                      .slice(0, 3)
                      .map((tech) => (
                        <div key={tech.id} className="text-xs">
                          <span className="text-gray-700">{tech.name}</span>
                          <span className="float-right font-bold text-red-600">{tech.asr}%</span>
                        </div>
                      ))}
                    {sub.techniques.length > 3 && (
                      <p className="text-xs text-gray-500 italic">
                        +{sub.techniques.length - 3} more techniques
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="border-2 border-black bg-white p-4">
        <h4 className="font-archivo-black text-sm uppercase mb-3">Family Legend</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {jailbreakTaxonomy.map(family => (
            <div key={family.id} className="flex items-center gap-2">
              <div
                className="w-4 h-4 border-2 border-black"
                style={{ backgroundColor: family.color }}
              />
              <span className="font-space-mono text-xs text-gray-700">
                {family.name.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Panel */}
      <div className="border-2 border-black bg-gray-50 p-4">
        <h4 className="font-archivo-black text-sm uppercase mb-3">Family Statistics</h4>
        <div className="space-y-2">
          {jailbreakTaxonomy.map(family => {
            const avgAsr = Math.round(
              family.subcategories.reduce((sum, sub) => sum + sub.avgAsr, 0) / family.subcategories.length
            );
            return (
              <div key={family.id} className="flex items-center justify-between text-xs font-space-mono">
                <span className="text-gray-700">{family.name}</span>
                <div className="flex gap-4">
                  <span className="text-gray-600">
                    {family.totalTechniques} techniques
                  </span>
                  <span className="text-orange-600 font-bold">
                    Avg: {avgAsr}% | Max: {family.maxAsr}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
