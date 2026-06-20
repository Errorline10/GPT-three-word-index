# Three Word Index

Three Word Index is an experimental, human-oriented public publishing system where logical pages are addressed by three words.

This repository now uses a browser-first React and TypeScript foundation built with Vite. The old Expo starter and duplicated legacy application trees have been removed.

## Repository structure

```text
src/                              React application
lookup-tables/                    Canonical lookup-table assets
sandbox/large-number-library/     Isolated legacy arithmetic library
openSource-Dev-Promotion/         Independent static promotional site
```

The promotional site and its GitHub Pages workflow are intentionally separate from the React application. Do not couple its build or deployment to the Vite app without an explicit project decision.

## Development

Requirements:

- Node.js 22 or newer
- npm

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run build
npm run preview
```

## Current boundaries

- `lookup-tables/english-dictionary.txt` is the single canonical dictionary asset currently retained in the repository.
- The dictionary is not loaded into the browser yet. Lookup, normalization, chunking, and delivery rules remain design decisions.
- `sandbox/large-number-library` is quarantined legacy JavaScript. The React application must not import from it directly.
- Large-number functions should move into production code only after they are rewritten in TypeScript, tested, documented, and given an explicit interface.

## Project status

This is a foundation refactor, not a final application architecture. It establishes a clean place to build the first measurable Three Word Index prototype while preserving unresolved decisions.
