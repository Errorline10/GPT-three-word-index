# Lookup tables

This is the single lookup-table directory for the Three Word Index repository.

## Current asset

- `english-dictionary/` - the original immutable English lookup table.
- `english-dictionary/1.js` - non-letter and numeric-leading entries.
- `english-dictionary/a.js` through `english-dictionary/z.js` - first-letter lookup chunks.
- `english-dictionary/words.txt` - the original total-order word list.

The word position is part of the Three Word Index address contract. Keep the original ordering stable: a word's lookup position is its zero-based index inside the first-letter chunk loaded by the original autocomplete implementation.

Do not create additional dictionary copies elsewhere in the repository. Any future optimized forms should be generated from this canonical lookup table by a documented build process.
