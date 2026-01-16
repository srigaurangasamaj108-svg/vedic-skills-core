🧩 IMPLEMENTATION_INDEX.md
Mechanical Enforcement, Taxonomy & Code Contract
(Post–Phase 12 · Authority-Aware · Constitution-Aligned)
Status: AuthoritativeLast reviewed: 2026-01-16Scope: Implementation mechanics only (non-doctrinal)
If there is a conflict between:
	•	memory
	•	chat history
	•	convenience
	•	assumptions
	•	tooling behavior
👉 This document prevails for code-level behavior,while doctrine remains governed by PROJECT_CONSTITUTION.md.

0. Role of This Document
This file answers one question only:
How is constitutional doctrine enforced mechanically in code?
It does not:
	•	introduce doctrine
	•	reinterpret śāstra
	•	justify philosophy
	•	redesign architecture
It does:
	•	define frozen contracts
	•	locate enforcement points
	•	specify schemas, scripts, and validators
	•	allow exact continuation across chats, machines, and contributors

1. Enforcement Backbone (Final)
All enforcement is achieved through static guarantees, never runtime inference:
	•	Astro Content Collections
	•	Zod schemas
	•	Filesystem taxonomy
	•	Independent Node-level validators
No UI, library, or runtime code may override content truth.

2. Collection Registry (Single Source of Truth)
File:src/content/config.ts
Role:
	•	Registers every content collection
	•	Binds each folder to exactly one schema
	•	Declares the authoritative mapping: folder → authority layer
❗ If a folder is not registered here, it does not exist.

3. Authority Stack → Collection Mapping (FINAL)
Folder
Authority Level
Notes
scripture
LEVEL 0 — Canon
Hierarchy-encoded śāstra only
gloss
LEVEL 1
Cross-verse word meaning
concepts
LEVEL 1
Semantic patterns
entities
LEVEL 2
Person / place / event
synonyms
LEVEL 3A
Verse-level lexical atoms
translations
LEVEL 3B
One translator, one verse
commentary
LEVEL 3B
Source + translation
principles
LEVEL 4
Declarative abstractions
skills
LEVEL 5
Cultivable capacities
guidance
LEVEL 6
Contextual, non-prescriptive
compilations
LEVEL 7
Non-canonical synthesis
courses
LEVEL 8
Pedagogical sequencing
community
LEVEL 9
Participatory structures
sampradaya
Derived
Interpretive tradition
Authority direction is strictly downward.

4. Canonical Corpus Coverage (LEVEL 0)
The canonical layer (scripture/) now explicitly supports:
śruti
→ smṛti
  → itihāsa
  → purāṇa
→ āgama
→ vedāṅga
→ upaveda
→ darśana
Each is:
	•	folder-encoded
	•	hierarchy-declared
	•	validated via _canon/hierarchy.ts
	•	schema-checked via scripture/schema.ts
Only LEVEL-0 content may reference canonical hierarchy.

5. Folder Taxonomy (Frozen)
src/content/
├─ scripture/        # LEVEL 0 — Canon only
├─ gloss/            # LEVEL 1
├─ concepts/         # LEVEL 1
├─ entities/         # LEVEL 2
├─ synonyms/         # LEVEL 3A
├─ translations/     # LEVEL 3B
├─ commentary/       # LEVEL 3B
├─ principles/       # LEVEL 4
├─ skills/           # LEVEL 5
├─ guidance/         # LEVEL 6
├─ compilations/     # LEVEL 7
├─ courses/          # LEVEL 8
├─ community/        # LEVEL 9
└─ sampradaya/       # Derived, interpretive
📌 Only scripture/ mirrors śāstric taxonomy.All others are epistemic layers.

6. Schemas (Zod) — Frozen Contracts
6.1 Schema Locations
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
├─ guidance/schema.ts
├─ compilations/schema.ts
├─ courses/schema.ts
├─ community/schema.ts
└─ sampradaya/schema.ts
6.2 Schema Guarantees
Schemas enforce:
	•	one atom per file
	•	explicit references only
	•	authority isolation
	•	immutability (Canon)
	•	required authority_scope
	•	no placeholders at build time
❗ Schema edits require constitutional amendment.

7. Authority Scope & Disclosure (NEW, FROZEN)
Every content atom declares:
authority_scope:
  canon | derived | contextual | sampradaya
This scope governs:
	•	disclosure order
	•	UI co-display rules
	•	search eligibility
	•	course compilation safety
	•	community participation limits
Disclosure rules live in:
src/lib/disclosure.ts
Violation of disclosure rules is an authority breach,even if schemas pass.

8. Automation & Scripts (Gatekeepers Only)
Location: scripts/
Script
Purpose
create-canon.ts
LEVEL-0 atom
create-gloss.ts
Gloss atom
create-concept.ts
Concept atom
create-synonym.ts
Synonym atom
create-translation.ts
Translation
create-commentary-source.ts
Ācārya text
create-commentary-translation.ts
Commentary translation
create-principle.ts
Principle
create-skill.ts
Skill
create-guidance.ts
Guidance
migrate-content.ts
Controlled moves
Scripts may scaffold structure only.They may never author meaning.

9. Dependency Graph Validator (CRITICAL)
File:scripts/validate-dependency-graph.ts
Enforces:
	•	downward-only authority
	•	cross-layer restrictions
	•	community isolation
	•	authority_scope presence
	•	sampradāya cross-reference warnings
Runs independently of Astro.

10. Build & Validation Contract (NON-NEGOTIABLE)
These must always pass:
npm run validate:graph
npm run dev
Failure indicates:
	•	authority violation
	•	schema breach
	•	disclosure error
	•	invalid content
Fix before proceeding.

11. UI & Reader Contract (Phase 10 Locked)
UI must:
	•	read content only
	•	never mutate doctrine
	•	never infer relationships
	•	reflect authority visually
	•	obey disclosure contracts
Reader components are props-only.

12. Change Control (Mechanical)
Disallowed without constitutional revision:
	•	changing authority levels
	•	collapsing synonym layers
	•	bypassing authority_scope
	•	altering validators
	•	allowing automation to generate meaning
Rigidity is intentional.

13. What Is Implemented vs Deferred
Implemented
	•	Canon hierarchy (expanded)
	•	All schemas
	•	Authority scopes
	•	Disclosure contracts
	•	Validators
	•	Sampradāya formalization
Deferred (Allowed)
	•	UI polish
	•	Search weighting
	•	Course authoring
	•	Community workflows

14. How to Resume in a New Chat
Begin with:
“Treat PROJECT_CONSTITUTION.md as binding law and IMPLEMENTATION_INDEX.md as the frozen mechanical contract. Authority scopes, disclosure rules, and validators are active. Proceed with the next phase.”

15. Final Note
This system is intentionally hard to bend.
It protects:
	•	śāstra
	•	lineage
	•	meaning
	•	future maintainers
If something feels constrained, it is working.

End of IMPLEMENTATION_INDEX.md

