# Three Word Index

Three Word Index is an experimental, human-oriented public publishing system where logical pages are addressed by three words.

This repository uses a browser-first React and TypeScript foundation built with Vite. The old Expo starter and duplicated legacy application trees have been removed.

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

## Current prototype

The home page uses a reusable React autocomplete input for each of the three address words. The component:

- lazy-loads `lookup-tables/english-dictionary.txt` through Vite
- indexes candidates by first character after the first lookup
- displays up to 12 matching words and their zero-based dictionary positions
- supports pointer selection plus Up, Down, Enter, and Escape keyboard controls

## Current boundaries

- `lookup-tables/english-dictionary.txt` remains the single canonical dictionary asset.
- The browser currently downloads and parses the entire 466,550-line dictionary on the first autocomplete lookup. This is a measurable prototype, not the final production delivery strategy.
- Dictionary normalization, filtering, chunking, caching, and production delivery remain explicit design decisions.
- `sandbox/large-number-library` is quarantined legacy JavaScript. The React application must not import from it directly.
- Large-number functions should move into production code only after they are rewritten in TypeScript, tested, documented, and given an explicit interface.

## Project status

This is a working application foundation, not a final architecture. It establishes a clean place to build measurable Three Word Index prototypes while preserving unresolved decisions.
