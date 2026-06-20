# Large Number Library sandbox

This directory preserves the useful arithmetic core of the legacy Large Number Library while keeping it outside the production React application.

## Rules

- Production code under `src/` must not import these files directly.
- The JavaScript is retained as migration reference, not approved application architecture.
- Move one operation at a time into a typed production module.
- Before migration, define the operation's contract, rewrite it in TypeScript, add deterministic tests, document edge cases, and compare behavior with the legacy implementation.
- Delete a sandbox implementation only after its replacement is accepted.

Old UI demos, Quill assets, autocomplete code, page samples, OTP experiments, package files, and duplicated dictionary data were intentionally not retained here.
