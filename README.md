# Artifex Labs — Benchmarking & Evaluation Reference Guide

**2026 Field Manual · Version 4.0.0**

A production-ready, interactive reference guide for AI evaluation practitioners — covering benchmark design, safety taxonomy, multicultural evaluation, rubric methodology, and governance frameworks with governance-grade rigor.

---

## Overview

This handbook consolidates the state-of-the-art in AI evaluation science into a single authoritative reference. It is designed for evaluation engineers, red teamers, policy analysts, and researchers who need precise, auditable, and reproducible evaluation infrastructure.

Three core doctrines underpin every section:

| Doctrine | Definition |
|---|---|
| **LEGIBILITY** | Turning complex model behavior into structured, understandable signals |
| **AUDITABILITY** | Ensuring third-party reproducibility with traceable provenance |
| **PROVABILITY** | Binding claims to signed, immutable evidence logs defensible in legal/regulatory settings |

---

## Pages

| Route | Content |
|---|---|
| `/` | Main evaluation guide — foundations, benchmark catalog, agentic evals, scoring, governance |
| `/safety` | MLCommons AILuminate v1.0 — 12 hazard categories, 8 annotation principles |
| `/multicultural` | WEIRD bias analysis, multilingual failure modes, inter-annotator thresholds |
| `/rubric-design` | 7 anti-patterns, 10-step QA checklist, 6 research frameworks, 17+ 2026 citations |

---

## Key Content

### Foundations
- The "Big Three": Benchmark, Evaluation, Evidence — defined with precision
- 8-point construct validity checklist
- BBOM (Benchmark Breakdown of Measures) — 11-layer framework for benchmark specification

### Benchmark Catalog
- 50+ active benchmarks across 8 categories (Reasoning, Language, Code, Math, Multimodal, Instruction Following, Instruction Completion, Behavioral)
- Status tracking: `ACTIVE` · `SATURATED` · `EMERGING` · `CAUTION`
- Full metadata: year, type, paper link, example count, license

### Benchmark Cemetery
- 9 forensic case files for retired/failed benchmarks
- 6 failure criteria: Saturation, Contamination, Gaming, Dataset Issues, Construct Drift, Gaming Incentives

### Agentic Evaluation
- System 1 vs System 2 framework
- Galileo Action Advancement Metric
- 6-step Human-in-the-Loop (HITL) workflow

### Safety Taxonomy
- Full MLCommons AILuminate v1.0 standard implementation
- 12 hazard categories (Physical, Non-Physical, Contextual) with acceptable/unacceptable examples
- Comparative analysis of 6 harm ontology frameworks (NIST, EU AI Act, CSET, Khan & Prithula, etc.)

### Rubric Design
- AutoRubric, Recursive Rubric Decompose-Filter, Metacognitive Enhanced Rubric Generation
- Open Rubric System, Rubric-ARM, Data-Driven Reasoning Rubrics
- Anti-pattern documentation: Checklist Bloat, Surface Obsession, Response-Shaped Rubrics, and 4 others

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19.2.1 + TypeScript 5.6.3 |
| Build | Vite 7.1.7 + esbuild 0.25.0 |
| Styling | TailwindCSS 4.1.14 |
| UI Primitives | Radix UI + shadcn/ui-style components |
| Router | Wouter 3.3.5 |
| Server | Express 4.21.2 (static file serving + SPA fallback) |
| Forms | React Hook Form 7.64.0 + Zod 4.1.12 |
| Testing | Vitest 2.1.4 + Testing Library |
| Package Manager | pnpm 10.4.1 |

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server (port 3000)
pnpm dev

# Type-check without emitting
pnpm check

# Format code
pnpm format
```

### Production Build

```bash
pnpm build    # Vite frontend + esbuild server bundle → /dist
pnpm start    # Express server on PORT (default 3000)
```

Build output:
- `/dist/public/` — Vite-compiled frontend assets
- `/dist/index.js` — compiled Express server

---

## Design System

**Movement:** Industrial Manifesto Brutalism (Approach B — see `ideas.md`)

| Element | Spec |
|---|---|
| Primary accent | `#FF4D00` (alarm/critical) |
| Structure | `#000000` black |
| Data clarity | `#FFFFFF` white |
| Display font | Archivo Black — uppercase, tracking `-0.04em`, line-height `0.85` |
| Metadata font | Space Mono — tracking `-0.02em`, uppercase |
| Body font | Inter — 1.6 line-height |
| Borders | 2px solid black (structural, no rounded corners) |
| Hover | `translate-x-4 scale-110` + orange — linear only |
| Animation | Marquee: 18–30s linear · Spin indicators: 12s |

---

## Project Structure

```
benchmarkhandbook/
├── client/
│   └── src/
│       ├── pages/          # Route-level page components
│       ├── components/     # Section + UI components (~12,800 LOC)
│       ├── data/
│       │   └── benchmarks.ts   # 50+ benchmark definitions (23k LOC)
│       ├── contexts/       # ThemeContext
│       └── hooks/          # useMobile, usePersistFn, useComposition
├── server/
│   └── index.ts            # Express static server
├── shared/
│   └── const.ts            # Shared constants (COOKIE_NAME, session timeout)
└── ideas.md                # Design exploration & rationale
```

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_OAUTH_PORTAL_URL` | OAuth portal endpoint |
| `VITE_APP_ID` | Application identifier |
| `PORT` | Server port (default: 3000) |

---

## License

MIT — see `package.json`

---

*Built by [Artifex Labs](mailto:general@artifex.fun) · Book a session: [zcal.co/tuesday](https://zcal.co/tuesday)*
