# Content Integration Map — May 6, 2026

## Document Analysis Summary

Three comprehensive research documents received:
- **pasted_content_20.txt** — AI Evaluation, Reliability & Accountability (Artifex × MLCommons, 2026)
- **pasted_content_21.txt** — Rubric Design & Inter-Annotator Reliability (Unified Field Manual, 2026)
- **pasted_content_22.txt** — Rubric Design & Inter-Annotator Reliability (Unified Field Manual, 2026)

All three documents are variations/drafts of the same comprehensive field manual on rubric design, measurement theory, and inter-annotator agreement (IAA).

---

## Key Content Sections to Integrate

### 1. **Quickstart: 24 Core Steps** (from pasted_content_20.txt)
- **Location:** Rubric Design section (new subsection)
- **Format:** Interactive checklist with animated checkboxes
- **Sections A-E:** Rubric Engineering, Statistical Reliability, Validity Auditing, LLM Judges, Temporal Integrity
- **Visualization:** Animated timeline showing the 24 steps with dependencies

### 2. **Latent Constructs & Operationalization** (Part One)
- **Location:** Foundations section (enhance existing content)
- **Format:** Animated diagram showing latent construct → operationalization → rubric
- **Math:** Include the psychometric equation with interactive explanation
- **Citation:** Formal measurement theory references

### 3. **Rubric Design Foundations** (Part Two)
- **Location:** Rubric Design section (core content)
- **Content:** 
  - What a rubric is and its multiple roles
  - Core design principles
  - Scale design (Likert, Boolean, Ordinal, Composite)
  - Iterative development loop
  - RIFT auditing framework
  - Anti-patterns reference
- **Visualization:** Interactive rubric design decision tree

### 4. **Measurement Theory & Reliability** (Part Three)
- **Location:** Scoring section (enhance with theory)
- **Content:**
  - Classical Test Theory (CTT)
  - Item Response Theory (IRT)
  - Reliability engineering
  - Nunnally's thresholds
- **Visualization:** Animated charts showing error decomposition, IRT information curves

### 5. **Inter-Annotator Agreement (IAA)** (Part Four)
- **Location:** Scoring section (new subsection)
- **Content:**
  - IAA metric selection guide
  - Worked formulas (Cohen's κ, Krippendorff's α, ICC, Gwet's AC2)
  - Confidence intervals
  - Reference bands for interpretation
- **Visualization:** Interactive metric comparison table with animated confidence interval bands

### 6. **Statistical Analysis How-To** (Part Five)
- **Location:** Resources section (new subsection)
- **Content:**
  - Data preparation workflows
  - IAA computation (Python/R code snippets)
  - Item-level entropy and confusion matrices
  - Mixed-effects models
  - Equivalence testing (TOST)
  - Disagreement taxonomy
- **Visualization:** Animated heatmaps showing entropy and confusion matrices

### 7. **Advanced Modeling** (Part Six)
- **Location:** Resources section (advanced reference)
- **Content:**
  - Taxonomy of disagreement
  - Dawid-Skene, MACE, Bayesian aggregation
  - NUTMEG and perspectivist approaches
- **Visualization:** Flowchart showing when to use each method

### 8. **Construct Validity & Reproducibility** (Part Seven)
- **Location:** Governance section (enhance with validity framework)
- **Content:**
  - Multi-facet validity framework
  - Reproducibility and version control
  - Interpretability and explainability
  - Fairness across annotator populations
  - Transparency and audit trails
- **Visualization:** Validity argument chain diagram

### 9. **Jailbreak Safety Rubric (Worked Example)** (Part Eight)
- **Location:** Safety section (new subsection)
- **Content:**
  - AILuminate hazard taxonomy (12 categories)
  - System Under Test (SUT) specification
  - Three-dimensional rubric (Policy Violation, Encouragement, Enablement)
  - Diagnostic failure mode matrix
  - Boolean item decomposition
  - APBR (Adaptive Prompt-Based Rubric) methodology
  - Aggregation rules
  - Sanitized worked examples
- **Visualization:** Interactive 3D matrix showing policy violation × encouragement × enablement space

### 10. **Operational Systems** (Part Nine)
- **Location:** Governance section (new subsection)
- **Content:**
  - Annotator fatigue management
  - LLM judge validation and limits
  - Procurement and continuous assurance
- **Visualization:** Annotator fatigue timeline with mitigation strategies

### 11. **Decision Frameworks** (Part Ten)
- **Location:** Rubric Design section (new subsection)
- **Content:**
  - Rubric architecture decision tree
  - IAA metric selection decision tree
  - Pilot-scale-monitor loop
  - Rubric Card template
  - Publication-ready reporting checklist
- **Visualization:** Interactive decision trees with animated branching

---

## Animated Site Map Component

**New Component:** `SiteMapNavigator.tsx`

Features:
- Slide-down animated map showing all major sections
- Hierarchical structure with expandable subsections
- Animated buttons for each section
- Visual indicators for:
  - Content status (Complete, In Progress, Coming Soon)
  - Content type (Theory, Practice, Example, Reference)
  - Estimated read time
  - Related sections
- Search/filter functionality
- Keyboard navigation (arrow keys, Enter)

Sections to include:
1. Foundations
2. BBOM (11 layers)
3. Benchmarks (Catalog + Cemetery)
4. Agentic Systems
5. Scoring & Evaluation
6. Governance & Compliance
7. Glossary & Resources
8. Research Papers
9. Rubric Design (NEW EXPANDED)
10. Safety & Jailbreak Evaluation (NEW)
11. Measurement Theory (NEW)
12. Statistical Methods (NEW)
13. Master Doctrine

---

## Data Visualization Strategy

### 1. **Latent Construct Operationalization**
- Type: Animated flow diagram
- Shows: θ (latent) → measurement model → observable scores
- Interaction: Hover over each step for detailed explanation

### 2. **Rubric Design Decision Tree**
- Type: Interactive decision tree
- Shows: 5-7 key decision points
- Interaction: Click to expand, see recommendations

### 3. **IAA Metric Selection Matrix**
- Type: Animated comparison table
- Shows: 8+ metrics with characteristics
- Interaction: Filter by use case, see confidence intervals animate

### 4. **Error Decomposition (CTT)**
- Type: Stacked bar chart with animation
- Shows: Observed score = True score + Random error + Systematic error
- Interaction: Toggle between different scenarios

### 5. **IRT Information Curve**
- Type: Animated line chart
- Shows: Information function across ability range
- Interaction: Compare different item parameters

### 6. **Hazard Taxonomy Matrix (Safety)**
- Type: 3D interactive matrix
- Shows: Policy Violation × Encouragement × Enablement
- Interaction: Rotate, hover for examples

### 7. **Annotator Fatigue Timeline**
- Type: Animated timeline with intervention points
- Shows: Fatigue accumulation and mitigation strategies
- Interaction: Click to see specific interventions

### 8. **Benchmark Decay Timeline** (existing)
- Enhance with: Saturation curves, signal strength indicators

---

## Citation Integration Strategy

### 1. **Create Comprehensive Citations Database**
- File: `client/src/data/rubric-citations.ts`
- Include: All 100+ citations from the three documents
- Format: Author, Year, Title, DOI, arXiv link, URL
- Verified: Cross-check with 2026 publications

### 2. **Add Citation Hover Components**
- CitationHover component already exists
- Enhance with: Full citation preview, DOI link, arXiv link
- Add: "Cited in section X" breadcrumb

### 3. **Create Citation Map**
- Visual showing: Which sections cite which papers
- Interactive: Filter by author, year, topic

---

## Implementation Priority

**Phase 1 (Critical - Don't Break Site):**
1. Create animated SiteMapNavigator component
2. Add to Nav component as collapsible panel
3. Test navigation without modifying existing content

**Phase 2 (Integrate Content - Careful):**
1. Create new subsections in Rubric Design page
2. Add Quickstart checklist (interactive)
3. Enhance Scoring section with IAA metrics
4. Add Safety section with jailbreak rubric

**Phase 3 (Add Visualizations):**
1. Latent construct operationalization diagram
2. Rubric design decision tree
3. IAA metric comparison table
4. Error decomposition chart
5. IRT information curves
6. Hazard taxonomy 3D matrix

**Phase 4 (Citations & Polish):**
1. Add comprehensive citations database
2. Integrate CitationHover throughout
3. Create citation map
4. Final testing and checkpoint

---

## Safety Considerations

✅ **Preserve existing content** — Only add new sections, never modify existing
✅ **Test incrementally** — After each component, verify site still works
✅ **Avoid info overload** — Keep sections focused and scannable
✅ **Use animations wisely** — Beautiful but not distracting
✅ **Sanitize examples** — All safety examples describe classes, not operational details
✅ **Verify citations** — Cross-check all 100+ references before publishing

