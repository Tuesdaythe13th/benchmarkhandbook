import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { CitationHover } from "@/components/CitationHover";
import { ArtifexBadge } from "@/components/ArtifexBadge";
import { DefinitionTooltip } from "@/components/DefinitionTooltip";
import { AnimatedChart } from "@/components/AnimatedChart";
import { TrendingDown, AlertTriangle } from "lucide-react";

interface BenchmarkDecayPoint {
  benchmark: string;
  releaseYear: number;
  saturationYear: number;
  yearsToSaturation: number;
  peakSignal: number;
  currentSignal: number;
  cause: string;
}

const benchmarkDecayData: BenchmarkDecayPoint[] = [
  {
    benchmark: "MMLU",
    releaseYear: 2020,
    saturationYear: 2024,
    yearsToSaturation: 4,
    peakSignal: 92,
    currentSignal: 12,
    cause: "Contamination + Memorization",
  },
  {
    benchmark: "HellaSwag",
    releaseYear: 2019,
    saturationYear: 2022,
    yearsToSaturation: 3,
    peakSignal: 88,
    currentSignal: 8,
    cause: "Benchmark Saturation",
  },
  {
    benchmark: "GSM8K",
    releaseYear: 2021,
    saturationYear: 2024,
    yearsToSaturation: 3,
    peakSignal: 85,
    currentSignal: 15,
    cause: "Training Data Contamination",
  },
  {
    benchmark: "ARC Challenge",
    releaseYear: 2018,
    saturationYear: 2023,
    yearsToSaturation: 5,
    peakSignal: 82,
    currentSignal: 10,
    cause: "Goodhart's Law",
  },
  {
    benchmark: "TruthfulQA",
    releaseYear: 2021,
    saturationYear: 2024,
    yearsToSaturation: 3,
    peakSignal: 79,
    currentSignal: 18,
    cause: "Memorization",
  },
  {
    benchmark: "HumanEval",
    releaseYear: 2021,
    saturationYear: 2024,
    yearsToSaturation: 3,
    peakSignal: 89,
    currentSignal: 14,
    cause: "Code Memorization",
  },
];

const signalDecayChartData = [
  { year: 2020, MMLU: 92, HellaSwag: 88, GSM8K: 0, ARC: 82, HumanEval: 0 },
  { year: 2021, MMLU: 88, HellaSwag: 72, GSM8K: 85, ARC: 78, HumanEval: 89 },
  { year: 2022, MMLU: 78, HellaSwag: 18, GSM8K: 72, ARC: 65, HumanEval: 81 },
  { year: 2023, MMLU: 45, HellaSwag: 12, GSM8K: 52, ARC: 22, HumanEval: 68 },
  { year: 2024, MMLU: 12, HellaSwag: 8, GSM8K: 15, ARC: 10, HumanEval: 14 },
];

export default function BenchmarkDecayAnalysis() {
  const [selectedBenchmark, setSelectedBenchmark] = useState<BenchmarkDecayPoint | null>(null);

  return (
    <section className="py-20 px-4 bg-white border-t-4 border-red-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="w-8 h-8 text-red-600" />
            <h2 className="text-4xl font-black text-black">
              BENCHMARK DECAY & SATURATION
            </h2>
          </div>
          <p className="text-lg text-slate-700 max-w-4xl leading-relaxed">
            <DefinitionTooltip
              term="Benchmark Saturation"
              definition="The state where top models converge to narrow performance bands, making the benchmark unable to discriminate between frontier systems."
            >
              Benchmark saturation
            </DefinitionTooltip>{" "}
            occurs when top models converge to narrow performance bands—often less than 25 Elo
            points—making the benchmark unable to discriminate between frontier systems.{" "}
            <CitationHover
              citation={{
                authors: "Goodhart, C. A. E.",
                year: 1975,
                title: "Monetary relationships: a view from threadneedle street",
                publication: "Papers in Monetary Economics",
              }}
            >
              Goodhart's Law
            </CitationHover>{" "}
            explains this phenomenon: when a measure becomes a target, it ceases to be a good
            measure. The field has consequently moved toward higher-signal instruments deliberately
            designed to resist memorization and remain private or continuously refreshed.
          </p>
        </div>

        {/* Signal Decay Chart */}
        <Card className="mb-12 p-6 bg-slate-50 border-2 border-slate-300">
          <AnimatedChart
            data={signalDecayChartData}
            type="line"
            dataKeys={[
              { key: "MMLU", name: "MMLU", color: "#dc2626", type: "monotone" },
              { key: "HellaSwag", name: "HellaSwag", color: "#ea580c", type: "monotone" },
              { key: "GSM8K", name: "GSM8K", color: "#f59e0b", type: "monotone" },
              { key: "ARC", name: "ARC Challenge", color: "#06b6d4", type: "monotone" },
              { key: "HumanEval", name: "HumanEval", color: "#8b5cf6", type: "monotone" },
            ]}
            xAxisKey="year"
            yAxisLabel="Signal Strength"
            title="Benchmark Signal Decay Over Time (2020-2024)"
            height={400}
          />
        </Card>

        {/* Benchmark Details */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6">Benchmark Lifecycle Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benchmarkDecayData.map((bench, idx) => (
              <button
                key={idx}
                onClick={() =>
                  setSelectedBenchmark(
                    selectedBenchmark?.benchmark === bench.benchmark ? null : bench
                  )
                }
                className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedBenchmark?.benchmark === bench.benchmark
                    ? "bg-red-100 border-red-500 ring-2 ring-offset-2 ring-red-400"
                    : "bg-white border-slate-300 hover:border-red-400"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-lg">{bench.benchmark}</h4>
                    <p className="text-sm text-slate-600">
                      Released {bench.releaseYear} • Saturated {bench.saturationYear}
                    </p>
                  </div>
                  <span className="text-xs font-bold bg-red-100 text-red-900 px-2 py-1 rounded">
                    {bench.yearsToSaturation}y
                  </span>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold">Peak Signal</span>
                      <span>{bench.peakSignal}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${bench.peakSignal}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold">Current Signal</span>
                      <span>{bench.currentSignal}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${bench.currentSignal}%` }}
                      />
                    </div>
                  </div>
                </div>

                {selectedBenchmark?.benchmark === bench.benchmark && (
                  <div className="mt-4 pt-4 border-t-2 border-red-300">
                    <p className="text-sm text-slate-700">
                      <strong>Decay Cause:</strong> {bench.cause}
                    </p>
                    <p className="text-xs text-slate-600 mt-2">
                      Signal loss: {bench.peakSignal - bench.currentSignal}% over{" "}
                      {new Date().getFullYear() - bench.releaseYear} years
                    </p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 2025-2026 Frontier Benchmarks */}
        <Card className="mb-12 p-6 bg-green-50 border-2 border-green-300">
          <h3 className="font-bold text-green-900 mb-4">
            High-Signal Benchmarks (2025-2026)
          </h3>
          <p className="text-green-800 mb-4">
            Only private, continuously refreshed instruments equipped with strong integrity
            controls can maintain evaluative relevance. The field has moved toward:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="font-bold text-green-900">LiveBench</span>
              <span className="text-green-800">
                General reasoning • Top models &lt;70% • Monthly updates • High signal
              </span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-900">ARC-AGI-2</span>
              <span className="text-green-800">
                Abstraction &amp; logic • GPT-5.4: 73.3% standard, 83.3% pro • Very high signal
              </span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-900">SWE-Bench Pro</span>
              <span className="text-green-800">
                Software engineering • Private-repo performance drops ≈23% • Best agents 57.0%
              </span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-green-900">Humanity's Last Exam (HLE)</span>
              <span className="text-green-800">
                Expert knowledge • Top models ~31.5% text-only, ~51.8% with tools
              </span>
            </div>
          </div>
        </Card>

        {/* Critical Insight */}
        <Card className="p-6 bg-orange-50 border-2 border-orange-300">
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-900 mb-2">The OSWorld Diagnostic</h3>
              <p className="text-orange-800">
                Moving from ~12% to ~66.3% within twelve months while still trailing a 72.36%
                human baseline demonstrates both rapid progress and the instability of treating
                single benchmark scores as durable evidence for deployment-grade competence. This
                pattern repeats across frontier benchmarks: rapid saturation, followed by
                deprecation and replacement.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
