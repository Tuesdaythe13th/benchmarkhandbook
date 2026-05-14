# Artifex Labs Site Review & Data Visualization Plan
**Date:** May 14, 2026 | **Status:** Comprehensive Review Phase

---

## Site Structure Overview

### Main Navigation Pages (9 total)
1. **EVAL GUIDE** (Home) — Landing page with 16 section anchors
2. **SAFETY** — Harm taxonomy and safety evaluation frameworks
3. **SECURITY** — Jailbreak taxonomy with 7 families, 150+ techniques (HAS: Sunburst chart)
4. **RISK** — MIT AI Risk Repository with 7 domains, governance frameworks
5. **MULTICULTURAL** — Multilingual safety and cultural representation
6. **RUBRIC DESIGN** — 24 Core Steps, latent construct diagram, IAA metrics (HAS: 3 animated components)
7. **METRICS** — 157 evaluation metrics with filtering and search
8. **DOCTRINE** — Master governance framework
9. **GLOSSARY** — Core concepts with definitions

### Secondary Navigation (16 section anchors on Home)
- Foundations
- BBOM (11-Layer Bill of Materials)
- Benchmarks & Discovery
- Agentic Evaluation
- Scoring & Evaluation
- Governance
- Safety & Jailbreak
- Rubric Design
- Glossary
- Resources
- Research
- Compendium
- Assessment
- Kinetic Threshold
- Calibration & Governance
- Legal Admissibility

---

## Current Data Visualizations

### Existing (Working Well)
✅ **Security Page**: Jailbreak Sunburst Chart (7 families, 144+ techniques, ASR metrics)
✅ **Rubric Design Page**: 
   - CoreStepsChecklist (24 steps with progress tracking)
   - LatentConstructDiagram (4-step psychometric flow)
   - IAAMetricsTable (8 metrics with confidence intervals)
✅ **Home Page**: AdvancedBenchmarkSearch (50+ benchmarks with filtering)
✅ **Metrics Page**: 157 metrics with category filtering

---

## Data Visualization Opportunities (Priority Order)

### HIGH PRIORITY (Core Framework Understanding)

#### 1. **BBOM 11-Layer Flowchart** (Home → BBOM Section)
**Current State:** Text-based list of 11 layers with descriptions
**Opportunity:** Vertical flowchart showing:
- Layer 1 (Task Definition) → Layer 2 (Data Collection) → ... → Layer 11 (Governance & Audit)
- Color-coded by category (Input, Processing, Output, Governance)
- Hover tooltips with detailed descriptions
- Animated flow showing dependencies between layers
**Visualization Type:** Vertical flowchart with Recharts or custom SVG
**Color Scheme:** Black borders, orange accents, white background (brutalist)
**Preserve:** All existing text descriptions

#### 2. **Benchmark Evolution Sankey Diagram** (Home → Benchmarks Section)
**Current State:** AdvancedBenchmarkSearch with 50+ benchmarks
**Opportunity:** Sankey diagram showing:
- Source: 7 benchmark categories (NLP, Vision, Reasoning, Safety, Multimodal, Agentic, Governance)
- Flow: 50+ individual benchmarks
- Destination: 4 maturity stages (Emerging, Active, Saturated, Legacy)
- Width = number of benchmarks, Color = category
- Hover shows benchmark names and metadata
**Visualization Type:** Sankey diagram (custom or Recharts)
**Color Scheme:** Different colors per category, black borders
**Preserve:** All benchmark data and search functionality

#### 3. **Measurement Theory Flow Diagram** (Rubric Design Page)
**Current State:** LatentConstructDiagram (4-step flow)
**Opportunity:** Expand to show:
- Latent Construct (θ) → Operationalization → Rubric Criteria (δ) → Observable Score (X)
- Add error sources branching from each step
- Add mitigation strategies as parallel flows
- Animated reveal on scroll
**Visualization Type:** Animated flowchart with branching paths
**Color Scheme:** Color-coded by step (purple, blue, orange, green)
**Preserve:** All existing psychometric equation and error decomposition content

#### 4. **Governance Framework Hierarchy** (Risk Page or Doctrine Page)
**Current State:** Text list of 6 frameworks (EU AI Act, NIST, ISO/IEC, OWASP, MITRE ATLAS)
**Opportunity:** Hierarchical tree showing:
- Root: "AI Governance Frameworks (2024-2026)"
- Branches: 6 frameworks with key principles
- Sub-branches: 24+ specific requirements/controls
- Hover tooltips with framework descriptions and links
- Color-coded by framework
**Visualization Type:** Hierarchical tree diagram or sunburst
**Color Scheme:** Different color per framework
**Preserve:** All framework descriptions and citations

#### 5. **Risk Distribution Stacked Area Chart** (Risk Page)
**Current State:** Text descriptions of 7 risk domains
**Opportunity:** Animated stacked area chart showing:
- X-axis: Risk domains (7 total)
- Y-axis: Number of risks per domain
- Stacked by: Entity × Intent × Timing (3 dimensions)
- Animated on page load with smooth transitions
- Hover shows exact counts and percentages
**Visualization Type:** Stacked area chart (Recharts)
**Color Scheme:** Brutalist palette (black, white, orange accents)
**Preserve:** All risk domain descriptions

---

### MEDIUM PRIORITY (Enhanced Understanding)

#### 6. **Jailbreak Family ASR Timeline** (Security Page)
**Current State:** Text descriptions of 7 families with ASR ranges
**Opportunity:** Line chart showing:
- X-axis: Time (2022-2026)
- Y-axis: Attack Success Rate (%)
- 7 lines: One per family showing ASR evolution
- Animated on scroll
- Hover shows specific techniques and papers
**Visualization Type:** Multi-line chart (Recharts)
**Color Scheme:** Different color per family
**Preserve:** All family descriptions and research citations

#### 7. **Benchmark Decay Timeline** (Home → Benchmarks Section)
**Current State:** Text description of benchmark saturation
**Opportunity:** Animated timeline showing:
- Benchmark introduction date
- Time to saturation (decay curve)
- Current status (Active/Saturated/Emerging)
- Trend indicators
**Visualization Type:** Scatter plot with decay curves
**Color Scheme:** Green (Emerging), Orange (Active), Red (Saturated)
**Preserve:** All benchmark metadata

#### 8. **Safety Evaluation Rubric Matrix** (Safety Page)
**Current State:** Text descriptions of harm categories and rubrics
**Opportunity:** Interactive matrix showing:
- Rows: 5+ harm categories
- Columns: 4-5 evaluation dimensions (severity, likelihood, detectability, etc.)
- Cells: Color-coded severity levels
- Hover shows detailed rubric criteria
**Visualization Type:** Heatmap or grid
**Color Scheme:** Red (high severity) → Orange → Yellow → Green (low severity)
**Preserve:** All harm category descriptions

---

### LOWER PRIORITY (Nice-to-Have)

#### 9. **Multilingual Safety Gap Visualization** (Multicultural Page)
**Current State:** Text descriptions of language gaps
**Opportunity:** Bubble chart showing:
- X-axis: Language family
- Y-axis: Safety gap percentage
- Bubble size: Number of speakers
- Color: Region
**Visualization Type:** Bubble chart
**Color Scheme:** Brutalist with regional color coding
**Preserve:** All language and safety gap data

#### 10. **Model Capability Radar Chart** (Metrics Page)
**Current State:** 157 metrics organized by category
**Opportunity:** Radar chart comparing:
- 3-5 SOTA models (GPT-5.1, Claude, Gemini, DeepSeek, etc.)
- 6 capability dimensions (Accuracy, Safety, Fairness, Performance, Similarity, Quality)
- Interactive selection of models to compare
**Visualization Type:** Radar chart
**Color Scheme:** Different color per model
**Preserve:** All metric data

---

## Design Constraints (MUST FOLLOW)

✅ **Color Scheme:** Black (#000000), White (#FFFFFF), Orange (#FF4D00)
✅ **Typography:** Archivo Black (display), Space Mono (metadata), Inter (body)
✅ **Borders:** 2px solid black throughout
✅ **Style:** Industrial Manifesto Brutalism
✅ **Animations:** Smooth, not jarring; reveal on scroll where appropriate
✅ **Preserve:** ALL existing text, descriptions, citations, and data

---

## Implementation Strategy

### Phase 1: Create Reusable Components
- `BbomFlowchart.tsx` — Vertical flowchart component
- `BenchmarkSankey.tsx` — Sankey diagram for benchmark evolution
- `MeasurementTheoryFlow.tsx` — Enhanced flow diagram
- `GovernanceHierarchy.tsx` — Hierarchical tree component
- `RiskAreaChart.tsx` — Stacked area chart

### Phase 2: Integrate into Pages (No Content Removal)
- Add visualizations ABOVE or BELOW existing sections
- Keep all text, tables, and existing content intact
- Use section headers to introduce visualizations
- Add "Interactive Visualization" labels

### Phase 3: Test & Validate
- Verify all visualizations render correctly
- Test hover interactions and animations
- Ensure no existing content is affected
- Check responsive design on mobile

---

## Estimated Implementation Time
- Phase 1 (Components): 2-3 hours
- Phase 2 (Integration): 1-2 hours
- Phase 3 (Testing): 30 minutes
- **Total: 3.5-5.5 hours**

---

## Success Criteria
✅ All visualizations use brutalist design convention
✅ All animations are smooth and meaningful
✅ No existing text, data, or content is removed
✅ All visualizations enhance understanding without cluttering
✅ Hover tooltips provide additional context
✅ Mobile responsive design maintained
✅ Zero TypeScript errors
✅ Site remains fast and performant

