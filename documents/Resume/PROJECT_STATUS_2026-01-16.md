📘 PROJECT_STATUS.md
Vedic Skills — Authoritative Project State & Continuation Guide
Last updated: 2026-01-16Status: Phase 12B Complete · Canon, Authority & Disclosure Frozen
This document records the current ground truth of the Vedic Skills project.
If there is any ambiguity between:
	•	chat history
	•	memory
	•	tooling behavior
	•	local assumptions
👉 This document prevails, together with:
	•	PROJECT_CONSTITUTION.md — constitutional law
	•	IMPLEMENTATION_INDEX.md — mechanical enforcement contract

1. Constitutional Status
The Project Constitution is final and binding.
Key locked outcomes:
	•	Explicit multi-layer authority stack (LEVEL 0–9)
	•	Canon immutability
	•	Orthogonal scriptural hierarchy (not linear ranking)
	•	Mandatory Synonym layer (LEVEL 3A)
	•	Commentary split (Source vs Translation)
	•	Sampradāya formalized as interpretive, not canonical
	•	authority_scope introduced as a cross-layer safety valve
	•	Disclosure rules enforced mechanically
No further doctrinal or schema changes are permitted without an explicit constitutional amendment.

2. Authority Stack (FINAL)
The platform operates on a strict epistemic stack:
LEVEL 0  — Canon (CKA)
LEVEL 1  — Gloss / Concept
LEVEL 2  — Entity / Circumstance
LEVEL 3A — Synonym (verse-level lexical)
LEVEL 3B — Translation & Commentary
LEVEL 4  — Principle
LEVEL 5  — Skill
LEVEL 6  — Guidance
LEVEL 7  — Compilation
LEVEL 8  — Course
LEVEL 9  — Community
Authority Rules
	•	Dependencies are downward only
	•	No level may rewrite or override a lower level
	•	Higher levels are removable without collapsing lower levels
	•	Canon is immutable and singular
	•	Disclosure must respect authority_scope

3. Canon (LEVEL 0) — Expanded & Frozen
3.1 Canon Definition
A Canonical Knowledge Atom (CKA) is:
	•	One verse / sūtra / mantra / śloka (smallest unit)
	•	Stored verbatim
	•	Original language only
	•	Immutable
	•	Context-descriptive only (speaker, listener, setting)
	•	Tagged with authority_scope: "canon"

3.2 Scriptural Taxonomy (LEVEL 0 ONLY)
The canonical corpus now formally includes:
śruti
→ smṛti
→ itihāsa
→ purāṇa
→ āgama
→ vedāṅga
→ upaveda
→ darśana
These are categories, not a ladder of worth.
Hierarchy is:
	•	declarative
	•	machine-readable
	•	non-polemical
	•	not inferential

3.3 Implemented Canon Trees
✅ Itihāsa
	•	Mahābhārata → Bhīṣma-parva → Bhagavad-Gītā
	•	BG Chapter 2 fully ingested (2.1–2.31)
	•	Migrated to correct parva location
	•	Locator-based navigation enforced
✅ Purāṇa
	•	Śrīmad Bhāgavatam
	•	Skandha-wise canonical tree (1–12)
	•	Structure frozen (content pending)
✅ Āgama
	•	Vaiṣṇava (Pāñcarātra, Vaikhānasa)
	•	Śaiva
	•	Śākta
	•	Canonical trees created
✅ Vedāṅga
	•	Śikṣā, Vyākaraṇa, Chandas, Nirukta, Kalpa, Jyotiṣa
	•	Root sūtra texts only
	•	No commentaries
✅ Upaveda
	•	Āyurveda
	•	Dhanurveda
	•	Gāndharvaveda
	•	Sthāpatyaveda
	•	Canonical śāstra texts only
✅ Ṣaḍ-Darśana
	•	Nyāya
	•	Vaiśeṣika
	•	Sāṅkhya
	•	Yoga
	•	Pūrva-Mīmāṁsā
	•	Vedānta (Brahma-sūtra)
	•	Root sūtras only

4. Lexical & Semantic Layers
4.1 Gloss Atoms (LEVEL 1)
Validated:
	•	ātman
	•	deha
Glosses:
	•	word-centric
	•	cross-verse
	•	non-interpretive
	•	authority_scope: "derived"

4.2 Concept Atoms (LEVEL 1)
Validated:
	•	body-self-distinction
Concepts encode semantic patterns only.

5. Synonym Layer (LEVEL 3A — REQUIRED)
Status: Implemented & enforced
	•	One synonym atom per verse per source
	•	Verse-specific lexical unpacking
	•	Distinct from gloss and translation
	•	Preserves traditional padārtha → anvaya flow

6. Interpretation Layers (LEVEL 3B)
6.1 Translation Atoms
	•	One verse
	•	One translator
	•	One language
	•	No commentary
	•	Subordinate to canon
	•	authority_scope: "derived"
6.2 Commentary Atoms
Split model (final):
	•	Commentary Source (original language)
	•	Commentary Translation (subordinate)
Schemas and scaffolds implemented.

7. Abstraction Layers
7.1 Principles (LEVEL 4)
Validated:
	•	self-is-imperishable
	•	death-pertains-to-body-not-self
Declarative, non-prescriptive.
7.2 Skills (LEVEL 5)
Validated:
	•	capacity-to-distinguish-self-from-body
Descriptive capacities only.

8. Guidance Layer (LEVEL 6)
Validated:
	•	facing-loss-with-body-self-distinction
Characteristics:
	•	contextual
	•	non-diagnostic
	•	reversible
	•	safety-bounded
	•	authority_scope: "contextual"

9. Sampradāya Layer (FORMALIZED)
Status: Phase 12A Complete
	•	src/content/sampradaya/gaudiya/
	•	Treated as interpretive tradition
	•	Not canonical
	•	Not scripture
	•	Authority explicitly scoped
Includes:
	•	Foundational hagiographies
	•	Six Gosvāmis
	•	Later ācāryas
	•	Siddhānta themes
	•	Bhajana & sādhana
	•	Apasampradāyas (isolated)

10. Higher Layers (7–9)
Implemented (Structure + Schemas)
	•	LEVEL 7 — Compilations
	•	LEVEL 8 — Courses
	•	LEVEL 9 — Community
Rules:
	•	Non-canonical
	•	No doctrinal authority
	•	Strict downward dependencies
	•	Community may not reference canon directly

11. Automation & Validation (FROZEN)
Schemas
	•	Zod schemas for all layers
	•	Registered in src/content/config.ts
	•	authority_scope enforced
Validators
	•	Dependency graph validator
	•	Authority-order enforcement
	•	Disclosure warnings
	•	Sampradāya cross-reference warnings
Commands that must always pass:
npm run validate:graph
npm run dev

12. Lib Layer (Read-Only Infrastructure)
Implemented as stubs (frozen):
	•	graph.ts
	•	taxonomy.ts
	•	disclosure.ts
	•	safety.ts
Lib layer:
	•	reads content
	•	enforces boundaries
	•	never mutates doctrine

13. What Is Frozen
	•	Authority stack
	•	Canon schema & content
	•	All atom schemas
	•	Hierarchy model
	•	authority_scope rules
	•	Validators
	•	Phase 12 disclosure contracts

14. What May Proceed Next
Allowed future work:
	1	Content expansion (new verses, texts)
	2	UI refinement (no inference)
	3	Search & navigation
	4	Governance hardening
	5	Documentation
No architectural re-derivation permitted.

15. How to Resume in a New Chat
Start with:
“Treat PROJECT_CONSTITUTION.md as binding law, IMPLEMENTATION_INDEX.md as frozen mechanical contract, and PROJECT_STATUS.md as authoritative state. Phase 12B is complete.”
Then state the next phase.

16. Closing Statement
The Vedic Skills platform is now:
	•	Constitutionally sealed
	•	Mechanically enforced
	•	Authority-aware
	•	Disclosure-safe
	•	Structurally incapable of lying
Expansion may continue without collapse.

End of PROJECT_STATUS.md
