🧩 IMPLEMENTATION_INDEX.md
Mechanical Enforcement, Taxonomy & Code Contract
(Post–Synonym Layer · Post–Phase 10 · Constitution-Accurate)
Status: AuthoritativeLast reviewed: 2026-01-15Scope: Implementation mechanics only (non-doctrinal)
This document defines how constitutional rules are enforced mechanically in code.
If there is any conflict between:
	•	memory
	•	chat history
	•	convenience
	•	assumptions
	•	tooling behavior
👉 This document prevails for implementation behavior,while doctrine remains governed by PROJECT_CONSTITUTION.md.

0. Role of This Document
This file answers:
“How does the system enforce the Constitution in code?”
It does not:
	•	introduce doctrine
	•	reinterpret authority
	•	justify philosophy
	•	propose architecture
It does:
	•	define frozen contracts
	•	locate enforcement points
	•	specify schemas, scripts, and validators
	•	allow exact continuation in future chats

1. Enforcement Backbone
All enforcement is built on:
	•	Astro Content Collections
	•	Zod Schemas
	•	Filesystem taxonomy
	•	Independent dependency graph validation
No runtime logic may override content truth.

2. Collection Registry (Single Source of Truth)
File:src/content/config.ts
Role:
	•	Registers every content collection
	•	Binds each collection to exactly one schema
	•	Declares the authoritative mapping: folder → authority layer
❗ If a collection is not registered here, it does not exist.

3. Authority Stack → Collection Mapping (FINAL)
Collection Folder
Authority Level
Notes
scripture
LEVEL 0 — Canon
Mirrors śāstra taxonomy only
gloss
LEVEL 1 — Gloss
Cross-verse word meaning
concepts
LEVEL 1 — Concept
Semantic patterns
entities
LEVEL 2 — Entity / Circumstance
May be empty
synonyms
LEVEL 3A — Synonym
Verse-level lexical mapping
translations
LEVEL 3B — Translation
One translator, one verse
commentary
LEVEL 3B — Commentary
Source + translation
principles
LEVEL 4 — Principle
Declarative abstraction
skills
LEVEL 5 — Skill
Human capacity
guidance
LEVEL 6 — Guidance
Contextual, non-prescriptive
sampradaya
Derived (non-canonical)
Interpretive tradition
Authority direction is strictly downward.

4. Folder Taxonomy (Frozen)

src/content/
├─ scripture/        # LEVEL 0 — Canon only
├─ gloss/            # LEVEL 1
├─ concepts/         # LEVEL 1
├─ entities/         # LEVEL 2 (optional)
├─ synonyms/         # LEVEL 3A
├─ translations/     # LEVEL 3B
├─ commentary/       # LEVEL 3B
├─ principles/       # LEVEL 4
├─ skills/           # LEVEL 5
├─ guidance/         # LEVEL 6
└─ sampradaya/       # Non-canonical interpretive layer
📌 Only scripture/ mirrors śāstric hierarchyAll other folders are epistemic layers.

5. Schemas (Zod) — Frozen Contracts
5.1 Schema Locations

src/content/
├─ scripture/schema.ts
├─ gloss/schema.ts
├─ concepts/schema.ts
├─ entities/schema.ts
├─ synonyms/schema.ts
├─ translations/schema.ts
├─ commentary/schema.ts
├─ principles/schema.ts
├─ skills/schema.ts
└─ guidance/schema.ts
5.2 Schema Guarantees
Schemas enforce:
	•	one atom per file
	•	mandatory references
	•	authority isolation
	•	immutability (Canon)
	•	explicit atom typing
	•	no placeholders at build time
❗ Schemas may not be edited without constitutional amendment.

6. Automation & Scripts
Automation is a gatekeeper, never an author.
6.1 Scaffolding Scripts
Location: scripts/
Script
Purpose
create-canon.ts
Canon atom (LEVEL 0)
create-gloss.ts
Gloss atom
create-concept.ts
Concept atom
create-synonym.ts
Synonym atom (LEVEL 3A)
create-translation.ts
Translation atom
create-commentary-source.ts
Sanskrit commentary
create-commentary-translation.ts
Commentary translation
create-principle.ts
Principle atom
create-skill.ts
Skill atom
create-guidance.ts
Guidance atom
Scripts may:
	•	scaffold files
	•	enforce naming
	•	insert required frontmatter
Scripts may not:
	•	invent meaning
	•	fill content
	•	infer relationships
	•	harmonize scripture

7. Dependency Graph Validator (Critical)
File:scripts/validate-dependency-graph.ts
Function:
	•	Reads MD / MDX directly from disk
	•	Independent of Astro runtime
	•	Enforces:
	◦	downward-only dependencies
	◦	missing dependency detection
	◦	cycle detection
This script is the final enforcement layer.

8. Build & Validation Contract (NON-NEGOTIABLE)
These must always pass unchanged:

npm run validate:graph
npm run dev
Failure indicates:
	•	invalid content
	•	broken authority
	•	schema violation
	•	misuse of scaffolding
Fix before proceeding.

9. UI & Rendering Contract (Phase 10 Complete)
UI must:
	•	read from content only
	•	never mutate content
	•	never infer relationships
	•	mirror authority visually
	•	enforce progressive disclosure
Reader components are props-only, never content-aware.

10. Change Control (Mechanical)
The following are disallowed without constitutional revision:
	•	changing schemas
	•	altering authority levels
	•	collapsing synonym / translation layers
	•	modifying dependency validator logic
	•	allowing automation to author content

11. How to Resume in a New Chat
Always begin with:
“Treat PROJECT_CONSTITUTION.md as binding law and IMPLEMENTATION_INDEX.md as the frozen mechanical contract.”

12. Final Note
If something feels rigid, it is intentional.
This system protects:
	•	śāstra
	•	lineage
	•	meaning
	•	future maintainers
Hard constraints are the feature.

## Authority Scope & Disclosure Contracts

Each content atom declares an `authority_scope`.

This scope determines:
- what it may be displayed alongside
- whether it may claim universality
- whether it may auto-load in UI contexts

Disclosure rules are defined in:

src/lib/disclosure.ts

These rules are binding on:
- reader UI
- search results
- course compilation
- community views

Violation of disclosure contracts is considered
a safety and authority breach, even if schemas pass.


End of IMPLEMENTATION_INDEX.md
