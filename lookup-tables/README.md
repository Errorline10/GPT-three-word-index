# Lookup tables

This is the single lookup-table directory for the Three Word Index repository.

## Current asset

- `english-dictionary.txt` — the retained legacy English word list, one entry per line.

The list originated from the `dwyl/english-words` dataset referenced by the legacy project. Before production use, the project still needs explicit decisions for source licensing, accepted vocabulary, normalization, casing, punctuation, reserved words, offensive terms, multilingual support, chunking, and browser delivery.

Do not create additional dictionary copies elsewhere in the repository. Derived or optimized forms should be generated from this canonical asset by a documented build process.
