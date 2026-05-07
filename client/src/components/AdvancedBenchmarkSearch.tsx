import React, { useState, useMemo } from "react";
import { Search, X, Filter, ExternalLink, Github, Database } from "lucide-react";
import {
  benchmarkCatalog,
  taskAreaOptions,
  typeOptions,
  capabilityLevelOptions,
  yearOptions,
  type BenchmarkEntry,
} from "@/data/benchmark-catalog";

export default function AdvancedBenchmarkSearch() {
  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTaskAreas, setSelectedTaskAreas] = useState<string[]>([]);
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"year" | "relevance" | "name">("year");
  const [selectedBenchmarks, setSelectedBenchmarks] = useState<BenchmarkEntry[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const filteredBenchmarks = useMemo(() => {
    let results = benchmarkCatalog;

    // Text search
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (b) =>
          b.name.toLowerCase().includes(lowerQuery) ||
          b.description.toLowerCase().includes(lowerQuery) ||
          b.type.toLowerCase().includes(lowerQuery) ||
          b.taskAreas.some((t) => t.toLowerCase().includes(lowerQuery))
      );
    }

    // Year filter
    if (selectedYear) {
      results = results.filter((b) => b.year === selectedYear);
    }

    // Type filter
    if (selectedType) {
      results = results.filter((b) => b.type === selectedType);
    }

    // Task area filter
    if (selectedTaskAreas.length > 0) {
      results = results.filter((b) =>
        selectedTaskAreas.some((ta) => b.taskAreas.includes(ta))
      );
    }

    // Capability filter
    if (selectedCapability) {
      results = results.filter((b) => b.capabilityLevel === selectedCapability);
    }

    // Sort
    if (sortBy === "year") {
      results.sort((a, b) => b.year - a.year);
    } else if (sortBy === "name") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    }

    return results;
  }, [query, selectedYear, selectedType, selectedTaskAreas, selectedCapability, sortBy]);

  const toggleBenchmarkSelection = (benchmark: BenchmarkEntry) => {
    setSelectedBenchmarks((prev) => {
      const exists = prev.find((b) => b.id === benchmark.id);
      if (exists) {
        return prev.filter((b) => b.id !== benchmark.id);
      } else {
        return [...prev, benchmark];
      }
    });
  };

  return (
    <section id="benchmark-search" style={{ padding: "5rem 2rem", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#FF4D00",
              marginBottom: "1rem",
              display: "block",
            }}
          >
            BENCHMARK DISCOVERY
          </span>
          <h2
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#000000",
              margin: "0 0 1rem",
            }}
          >
            SEARCH 50+ BENCHMARKS
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#666666",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            Explore 2024-2025 benchmarks across reasoning, knowledge, code, safety, and agentic domains. Filter by capability level, task area, and publication year.
          </p>
        </div>

        {/* Search and Filters */}
        <div
          style={{
            background: "#F5F5F5",
            border: "2px solid #000000",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Search Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "#FFFFFF",
              border: "2px solid #000000",
              padding: "0.75rem 1rem",
              marginBottom: "1.5rem",
            }}
          >
            <Search style={{ width: 18, height: 18, color: "#666" }} />
            <input
              type="text"
              placeholder="Search benchmarks by name, type, or task area..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                flex: 1,
                outline: "none",
                border: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "#000",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#999",
                }}
              >
                <X style={{ width: 18, height: 18 }} />
              </button>
            )}
          </div>

          {/* Filter Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {/* Year Filter */}
            <div>
              <label
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#666",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                YEAR
              </label>
              <select
                value={selectedYear || ""}
                onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  padding: "0.5rem 0.75rem",
                  border: "2px solid #000",
                  background: "#FFF",
                  cursor: "pointer",
                }}
              >
                <option value="">All Years</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#666",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                TYPE
              </label>
              <select
                value={selectedType || ""}
                onChange={(e) => setSelectedType(e.target.value || null)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  padding: "0.5rem 0.75rem",
                  border: "2px solid #000",
                  background: "#FFF",
                  cursor: "pointer",
                }}
              >
                <option value="">All Types</option>
                {typeOptions.slice(0, 8).map((type) => (
                  <option key={type} value={type}>
                    {type.substring(0, 20)}...
                  </option>
                ))}
              </select>
            </div>

            {/* Capability Filter */}
            <div>
              <label
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#666",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                CAPABILITY
              </label>
              <select
                value={selectedCapability || ""}
                onChange={(e) => setSelectedCapability(e.target.value || null)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  padding: "0.5rem 0.75rem",
                  border: "2px solid #000",
                  background: "#FFF",
                  cursor: "pointer",
                }}
              >
                <option value="">All Levels</option>
                {capabilityLevelOptions.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#666",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                SORT
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "year" | "relevance" | "name")}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  padding: "0.5rem 0.75rem",
                  border: "2px solid #000",
                  background: "#FFF",
                  cursor: "pointer",
                }}
              >
                <option value="year">Newest First</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>

            {/* Clear Filters */}
            {(query || selectedYear || selectedType || selectedTaskAreas.length > 0 || selectedCapability) && (
              <button
                onClick={() => {
                  setQuery("");
                  setSelectedYear(null);
                  setSelectedType(null);
                  setSelectedTaskAreas([]);
                  setSelectedCapability(null);
                }}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#FF4D00",
                  background: "transparent",
                  border: "2px solid #FF4D00",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  marginTop: "1.5rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#FF4D00";
                  (e.currentTarget as HTMLElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#FF4D00";
                }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: "1.5rem",
          }}
        >
          {filteredBenchmarks.length} BENCHMARKS FOUND
          {selectedBenchmarks.length > 0 && ` • ${selectedBenchmarks.length} SELECTED`}
        </div>

        {/* Benchmark Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {filteredBenchmarks.map((benchmark) => {
            const isSelected = selectedBenchmarks.some((b) => b.id === benchmark.id);
            return (
              <div
                key={benchmark.id}
                onClick={() => toggleBenchmarkSelection(benchmark)}
                style={{
                  border: isSelected ? "3px solid #FF4D00" : "2px solid #000",
                  padding: "1.5rem",
                  background: isSelected ? "#FFF5F0" : "#FFFFFF",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => {}}
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    width: 20,
                    height: 20,
                    cursor: "pointer",
                  }}
                />

                {/* Year Badge */}
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#FF4D00",
                    marginBottom: "0.5rem",
                  }}
                >
                  {benchmark.year} • {benchmark.capabilityLevel.toUpperCase()}
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "1.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    color: "#000",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {benchmark.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.5,
                    margin: "0 0 1rem",
                    minHeight: "3rem",
                  }}
                >
                  {benchmark.description.substring(0, 120)}...
                </p>

                {/* Task Areas */}
                <div style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#999",
                      marginBottom: "0.5rem",
                    }}
                  >
                    TASK AREAS
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {benchmark.taskAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          background: "#F0F0F0",
                          border: "1px solid #DDD",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "2px",
                        }}
                      >
                        {area}
                      </span>
                    ))}
                    {benchmark.taskAreas.length > 3 && (
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: "#999",
                        }}
                      >
                        +{benchmark.taskAreas.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Examples */}
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#666",
                    marginBottom: "1rem",
                  }}
                >
                  {typeof benchmark.examples === "number"
                    ? `${benchmark.examples.toLocaleString()} EXAMPLES`
                    : `${benchmark.examples} EXAMPLES`}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {benchmark.paperUrl && (
                    <a
                      href={benchmark.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.7rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#000",
                        border: "1px solid #000",
                        padding: "0.4rem 0.6rem",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "#000";
                        (e.currentTarget as HTMLElement).style.color = "#FFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "#000";
                      }}
                    >
                      <ExternalLink style={{ width: 12, height: 12 }} />
                      PAPER
                    </a>
                  )}
                  {benchmark.codeUrl && (
                    <a
                      href={benchmark.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.7rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#000",
                        border: "1px solid #000",
                        padding: "0.4rem 0.6rem",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "#000";
                        (e.currentTarget as HTMLElement).style.color = "#FFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "#000";
                      }}
                    >
                      <Github style={{ width: 12, height: 12 }} />
                      CODE
                    </a>
                  )}
                  {benchmark.datasetUrl && (
                    <a
                      href={benchmark.datasetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.7rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#000",
                        border: "1px solid #000",
                        padding: "0.4rem 0.6rem",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "#000";
                        (e.currentTarget as HTMLElement).style.color = "#FFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "#000";
                      }}
                    >
                      <Database style={{ width: 12, height: 12 }} />
                      DATA
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison View */}
        {selectedBenchmarks.length > 0 && (
          <div
            style={{
              background: "#F5F5F5",
              border: "2px solid #FF4D00",
              padding: "2rem",
              marginTop: "3rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#000",
                margin: "0 0 1.5rem",
              }}
            >
              COMPARING {selectedBenchmarks.length} BENCHMARKS
            </h3>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "2px solid #000" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem",
                        fontWeight: 700,
                        background: "#FFFFFF",
                      }}
                    >
                      BENCHMARK
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem",
                        fontWeight: 700,
                        background: "#FFFFFF",
                      }}
                    >
                      YEAR
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem",
                        fontWeight: 700,
                        background: "#FFFFFF",
                      }}
                    >
                      CAPABILITY
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem",
                        fontWeight: 700,
                        background: "#FFFFFF",
                      }}
                    >
                      EXAMPLES
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "0.75rem",
                        fontWeight: 700,
                        background: "#FFFFFF",
                      }}
                    >
                      LICENSE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedBenchmarks.map((benchmark) => (
                    <tr key={benchmark.id} style={{ borderBottom: "1px solid #DDD" }}>
                      <td
                        style={{
                          padding: "0.75rem",
                          fontWeight: 600,
                          color: "#000",
                        }}
                      >
                        {benchmark.name}
                      </td>
                      <td
                        style={{
                          padding: "0.75rem",
                          color: "#666",
                        }}
                      >
                        {benchmark.year}
                      </td>
                      <td
                        style={{
                          padding: "0.75rem",
                          color: "#666",
                        }}
                      >
                        {benchmark.capabilityLevel}
                      </td>
                      <td
                        style={{
                          padding: "0.75rem",
                          color: "#666",
                        }}
                      >
                        {typeof benchmark.examples === "number"
                          ? benchmark.examples.toLocaleString()
                          : benchmark.examples}
                      </td>
                      <td
                        style={{
                          padding: "0.75rem",
                          color: "#666",
                          fontSize: "0.85rem",
                        }}
                      >
                        {benchmark.license}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
