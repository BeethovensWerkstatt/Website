# AGENTS.md

Purpose: baseline instructions for coding agents working in this repository.

## Scope And Priority

- This file defines default agent behavior for the whole repo.
- More specific AGENTS.md files in subdirectories override this file for files in their scope.
- Submodule policy files exist in:
  - vide-component-facsimile/AGENTS.md
  - vide-component-transcriptions/AGENTS.md

## Primary Quality Goals

- Keep changes standards-compliant and maintainable.
- Enforce StandardJS style for JavaScript where practical.
- Enforce linting and tests on every code change.
- Require tests for new features.
- Update existing tests whenever behavior changes.
- Keep code modular, readable, and documented.

## Active Priority Areas

Strict enforcement is required for these two submodules:
- vide-component-facsimile
- vide-component-transcriptions

Lower priority for new quality infrastructure:
- fluidDemo (planned removal)
- synopticDemo (planned removal)

Agents may touch low-priority areas when explicitly requested, but should not invest in new testing/linting infrastructure there unless asked.

## JavaScript Style And Linting

- StandardJS is the canonical JavaScript style target.
- Prefer ESLint with eslint-config-standard and related StandardJS plugins.
- New or edited JS in strict submodules must pass lint before completion.
- For JS outside strict submodules, enforce StandardJS only when it can be done without introducing disproportionate maintenance overhead.

## Local Asset Hosting Policy

- Prefer local hosting for all runtime assets.
- Do not introduce CDN dependencies for JavaScript libraries, CSS frameworks, fonts, icons, or other static assets.
- Install dependencies through package managers and bundle them into project assets, or vendor them into the repository when bundling is not available.
- If an external URL is temporarily unavoidable, require explicit user approval and document it as a temporary exception with a removal plan.

## Test Policy

Agents must run validation automatically, even without explicit user instruction.

Minimum workflow for code changes:
- Run lint in affected submodule(s).
- Run impacted tests first.
- Before finishing, run the full relevant test suite for the changed strict submodule(s).

Coverage policy for strict submodules:
- Target and gate at >= 80% for lines, functions, and branches.
- New features must include tests.
- Behavior changes must include test updates.

## CI Expectations

- CI should fail when required linting, tests, or coverage checks fail.
- Prefer per-submodule jobs if tooling differs.
- Do not mark checks optional unless user explicitly requests a temporary soft rollout.

## Documentation And Modularity

- Keep modules focused with clear responsibilities.
- Favor small, composable functions over large mixed-responsibility methods.
- Add JSDoc for public modules, classes, and exported functions.
- Add concise inline comments only for non-obvious logic.

## Pre-Completion Checklist For Agents

For any non-trivial code change in strict submodules, complete all items:
- Lint passes.
- Impacted tests pass.
- Full relevant suite passes.
- Coverage threshold is met (or explicitly discussed if currently impossible).
- New/changed behavior is covered by tests.
- Public API changes are documented in code comments/JSDoc.

These observations should be used as migration context, not as a reason to skip the required quality policy above.
