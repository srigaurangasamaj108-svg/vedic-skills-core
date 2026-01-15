🧩 UPDATED IMPLEMENTATION_INDEX.md
Mechanical Enforcement, Taxonomy & Code Contract
(Post–Synonym Layer · Post–Phase 10 · Constitution-Accurate)
Status: AuthoritativeLast reviewed: 2026-01-15Scope: Implementation mechanics only (non-doctrinal)
This document defines how constitutional rules are enforced mechanically in code.
If there is any conflict between:
	•	memory
	•	chat history
	•	convenience
	•	assumptions
	•	or tooling behavior
👉 This document prevails for implementation behavior,while doctrine remains governed by PROJECT_CONSTITUTION.md and VKAD documents.

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

1. Content Collections & Enforcement Backbone
All enforcement is built on:
	•	Astro Content Collections
	•	Zod Schemas
	•	Filesystem taxonomy
	•	Independent dependency graph validation

2. Collection Registry (Single Source of Truth)
File
src/content/config.ts
Role
	•	Registers every content collection
	•	Binds each collection to exactly one schema
	•	Declares the authoritative mapping:folder → authority level
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
Source + Translation
principles
LEVEL 4 — Principle
Declarative abstraction
skills
LEVEL 5 — Skill
Human capacity
guidance
LEVEL 6 — Guidance
Contextual, non-prescriptive
Authority direction is strictly downward.

4. Folder Taxonomy (Frozen)
src/content/
├─ scripture/
│  └─ itihasa/mahabharata/bhagavad-gita/02/11.mdx
├─ gloss/
│  └─ atman.mdx
├─ concepts/
│  └─ body-self-distinction.mdx
├─ entities/                # intentionally empty
├─ synonyms/
│  └─ bhagavad-gita/02/11/prabhupada.mdx
├─ translations/
│  └─ bhagavad-gita/02/11/prabhupada.mdx
├─ commentary/
│  └─ bhagavad-gita/02/11/
│     ├─ sankara.source.mdx
│     └─ sankara.en.mdx
├─ principles/
│  └─ self-is-imperishable.mdx
├─ skills/
│  └─ capacity-to-distinguish-self-from-body.mdx
└─ guidance/
   └─ facing-loss-with-body-self-distinction.mdx
📌 Only scripture/ mirrors śāstric hierarchy.All other folders are epistemic.

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
	•	no placeholders at build time
	•	explicit atom typing (e.g. verse-synonym)
❗ Schemas may not be edited without constitutional amendment.

6. Automation & Scripts
Automation is a gatekeeper, not an author.
6.1 Scaffolding Scripts (Authoring Assistance)
Location
scripts/
Authoritative scripts
Script
Purpose
create-translation.ts
Translation atom
create-gloss.ts
Gloss atom
create-concept.ts
Concept atom
create-synonym.ts
Synonym atom (LEVEL 3A)
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
File
scripts/validate-dependency-graph.ts
Function
	•	Reads MD / MDX directly from disk
	•	Independent of Astro runtime
	•	Enforces:
	◦	downward-only dependencies
	◦	missing dependency detection
	◦	cycle detection
This script is the final enforcement layer.

8. Build & Validation Contract (NON-NEGOTIABLE)
These must always pass:
npm run validate:graph
npm run dev
Failure indicates:
	•	invalid content
	•	broken authority
	•	schema violation
	•	misuse of scaffolding
Fix before proceeding.

9. UI & Rendering Contract (Phase 10 Complete)
UI:
	•	reads from content only
	•	never mutates content
	•	never infers relationships
	•	mirrors authority visually
	•	enforces progressive disclosure
Reader components are props-only, not content-aware.

10. Change Control (Mechanical)
The following are disallowed without explicit constitutional revision:
	•	changing schemas
	•	altering authority levels
	•	collapsing synonym/translation layers
	•	modifying dependency validator logic
	•	allowing automation to author content

11. How to Use This in a New Chat
Always begin with:
“Treat PROJECT_CONSTITUTION.md as binding law andIMPLEMENTATION_INDEX.md as the frozen mechanical contract.”
This prevents:
	•	redesign
	•	re-litigation
	•	accidental authority leakage

12. Final Note
If something feels rigid, it is intentional.
This system protects:
	•	śāstra
	•	lineage
	•	meaning
	•	future maintainers
Hard constraints are the feature.

End of IMPLEMENTATION_INDEX.md

