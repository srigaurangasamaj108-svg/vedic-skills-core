CURRENT_STATE_BLUEPRINT.md
Project: Vedic SkillsVersion: 2.0Status: Authoritative Snapshot (Post–Phase 12B)Last Updated: Today

0. Purpose of This Document
This document records the exact, operational state of the Vedic Skills platform as it exists today.
It serves to:
	•	Preserve continuity across chats, contributors, and refactors
	•	Prevent architectural or doctrinal regression
	•	Clearly separate what is frozen, what exists, and what is planned
	•	Act as the single “where are we now?” reference
If there is any conflict between:
	•	memory
	•	chat history
	•	assumptions
	•	or future plans
👉 This document prevails for current state.

1. Constitutional Status (LOCKED)
1.1 Constitution
The Project Constitution is final, binding, and enforced.
Key constitutional achievements now implemented:
	•	Canon immutability
	•	Explicit authority stack (Levels 0–9)
	•	Lexical law (Gloss vs Synonym)
	•	Commentary split (source vs translation)
	•	Guidance safety constraints
	•	Sampradāya as interpretive layer (not canon)
	•	Automation as gatekeeper, not author
	•	authority_scope law added and enforced
No further constitutional changes are pending.

2. Authority Stack — Fully Implemented
The platform now enforces the complete authority ladder:
Level
Layer
Status
0
Canon (Scripture)
✅ Implemented
1
Gloss / Concepts
✅ Implemented
2
Entities
✅ Implemented (empty by design)
3A
Synonyms
✅ Implemented
3B
Translations / Commentary
✅ Implemented
4
Principles
✅ Implemented
5
Skills
✅ Implemented
6
Guidance
✅ Implemented
7
Compilations
✅ Scaffolded
8
Courses
✅ Scaffolded
9
Community
✅ Scaffolded
—
Sampradāya
✅ Implemented (parallel, interpretive)
Downward-only authority is mechanically enforced.

3. Canonical Corpus (LEVEL 0) — Expanded & Stable
3.1 Canon Structure (Now Complete)
The scriptural canon is fully structured, with empty folders created safely and tracked in Git.
Implemented canonical categories:
	•	Śruti
	•	Smṛti
	•	Itihāsa
	◦	Mahābhārata (Bhīṣma-parva → Bhagavad-gītā correctly placed)
	◦	Rāmāyaṇa
	•	Purāṇa
	◦	Mahāpurāṇa
	▪	Śrīmad Bhāgavatam (Skandha 1–12, canonical segmentation)
	•	Āgama
	•	Vedāṅga
	•	Upaveda
	•	Ṣaḍ-darśana
Canonical hierarchy is now graph-based, not rank-based.
3.2 Canon Schema
	•	Uses flexible locator[] segments (no hardcoded tradition rules)
	•	Canon MDX files require:
	◦	authority_scope: canon
	◦	canonical: true
	◦	immutable: true
	•	Bhagavad-gītā Chapter 2 fully migrated and corrected

4. Derived Content Layers (LEVELS 1–6)
All derived layers are:
	•	schema-validated
	•	authority-scoped
	•	dependency-checked
Implemented Content (Verified)
	•	Gloss: ātmā, deha
	•	Concepts: body–self distinction
	•	Synonyms: verse-level padārtha atoms
	•	Translations: Prabhupāda (BG 2.11–2.30)
	•	Commentary: Śaṅkara (source + translation)
	•	Principles:
	◦	self-is-imperishable
	◦	death-pertains-to-body-not-self
	•	Skills:
	◦	capacity-to-distinguish-self-from-body
	•	Guidance:
	◦	facing-loss-with-body-self-distinction
All carry correct authority_scope.

5. Sampradāya Layer — Implemented & Safe
5.1 Sampradāya Is Not Canon
Sampradāya is now a formal interpretive layer, stored at:
src/content/sampradaya/
└── gaudiya/
It includes:
	•	Foundational authorities
	•	Six Gosvāmīs (text-wise)
	•	Later ācāryas
	•	Siddhānta categories
	•	Bhajana & sādhana
	•	Branches & apasampradāyas
5.2 Authority Safety
	•	authority_scope: sampradaya
	•	Cannot override canon
	•	Sampradāya-to-sampradāya references are warned
	•	Canon references are allowed but disclosed
This resolves the Bhakti-rasāmṛta-sindhu / Hari-bhakti-vilāsa ambiguity safely.

6. Content Enforcement & Validation (STRONG)
6.1 Schemas
Every content layer has:
	•	A dedicated Zod schema
	•	Required authority_scope
	•	Explicit reference fields
6.2 Dependency Graph Validator
npm run validate:graph now enforces:
	•	Downward-only authority
	•	Cross-layer misuse detection
	•	Community → Canon prohibition
	•	Sampradāya disclosure warnings
	•	Missing authority_scope warnings
Validator currently passes without errors.

7. Lib Layer (Read-Only Infrastructure) — Stubbed
The following files exist and are frozen as read-only contracts:
src/lib/
├── graph.ts
├── search.ts
├── taxonomy.ts
├── features.ts
└── safety.ts
They:
	•	read content only
	•	enforce boundaries
	•	never mutate doctrine
	•	will be extended later without breaking content

8. Pages & Reader UI (Phase 10 Complete)
Implemented
	•	Universal Reader (/library/[...slug])
	•	Canon → Synonym → Translation → Commentary rendering
	•	Progressive disclosure (toggle-based)
	•	ReadingLayout abstraction
UI reads content, never infers authority.

9. Automation Scripts (Stable)
Scripts now exist for:
	•	Canon scaffolding
	•	Gloss, Concept, Synonym
	•	Translation
	•	Commentary (source + translation)
	•	Principle, Skill, Guidance
	•	Graph validation
Automation scaffolds only — it does not author meaning.

10. Git & Repo State
	•	Canonical trees committed
	•	Empty folders tracked via .gitkeep / README
	•	Phase tags created
	•	Repo clean; build passes

11. What Is Frozen
❄️ Frozen & Non-Negotiable
	•	Constitution
	•	Authority stack
	•	Canon schema
	•	Hierarchy graph
	•	authority_scope law
	•	Validators
	•	Existing content atoms

12. What Is Open (Next Lawful Work)
🟢 Planned but Not Yet Implemented
	•	Content expansion (new verses, texts)
	•	Courses (LEVEL 8)
	•	Community mechanics (LEVEL 9)
	•	Search & discovery UX
	•	Sampradāya-aware reader views
	•	Advanced disclosure UI
No architectural changes are required to proceed.

13. How to Resume in a New Chat
Paste this exactly:
“Vedic Skills has completed Phases 10–12B.Canonical corpus (Śruti → Darśana), derived layers, sampradāya formalization, authority_scope enforcement, validators, and reader UI are complete.Please proceed from CURRENT_STATE_BLUEPRINT.md without re-deriving doctrine.”

Closing Statement
This system is now:
	•	structurally incapable of lying
	•	resistant to authority drift
	•	expandable without collapse
	•	safe for multiple traditions
	•	ready for content growth
This blueprint marks the true present state.

End of CURRENT_STATE_BLUEPRINT.md
