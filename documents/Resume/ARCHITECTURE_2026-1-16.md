ARCHITECTURE.md
Derived Technical Architecture of the Vedic Skills Platform
(Authority-Aware, Canon-Preserving, Phase-12 Complete)

0. Status, Authority & Scope
Document Type: Architectural (Derived, Non-Constitutional)Subordinate To:
	•	PROJECT_CONSTITUTION.md (supreme law)
	•	IMPLEMENTATION_INDEX.md (mechanical enforcement)
Purpose:To translate constitutional doctrine into a maintainable, enforceable, evolvable technical system.
If any conflict arises:
Constitution prevails over ArchitectureArchitecture prevails over Implementation

1. Architectural Philosophy
Vedic Skills is not a website.
It is a śāstra-preserving knowledge system designed to:
	•	preserve canon verbatim
	•	encode authority structurally
	•	prevent interpretation from collapsing into doctrine
	•	enable study, synthesis, and application without authority leakage
	•	remain safe under automation, scale, and succession
The system is designed so that misuse is structurally difficult, not merely discouraged.

2. Vertical Authority Model (Primary Axis)
The platform enforces a strict, downward-only authority stack:
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
	•	Each level may depend only on lower levels
	•	No level may override or reinterpret a lower level
	•	Canon is immutable
	•	Higher levels are optional and removable
Authority is enforced via:
	•	schemas
	•	folder isolation
	•	dependency-graph validation
	•	authority_scope metadata

3. Canonical Corpus Axis (Orthogonal to Authority)
Applies only to LEVEL-0 (Canon).
Canonical sources are classified as:
śruti
→ smṛti
  → itihāsa
  → purāṇa
→ āgama
→ vedāṅga
→ upaveda
→ darśana
Properties
	•	Declarative, not inferential
	•	Descriptive, not polemical
	•	Used for precedence and disclosure, never censorship
	•	Encoded in hierarchy.ts, not UI logic

4. Sampradāya (Interpretive Axis)
Sampradāya is not part of the canonical corpus.
It is a tradition-specific interpretive and devotional layer, grounded in canon.
src/content/sampradaya/
└── gaudiya/
Sampradāya content:
	•	is authority-scoped as "sampradaya"
	•	must declare lineage
	•	must declare dependent śāstra
	•	may not present itself as universal doctrine
Sampradāya interprets canon — it does not generate it.

5. Data Layer — src/content/
The data layer stores truth and meaning, never presentation.
Everything here is:
	•	atomic
	•	normalized
	•	schema-validated
	•	reference-explicit
	•	auditable
5.1 Authoritative Content Map
src/content/
├── scripture/      # LEVEL 0 — Canon
├── gloss/          # LEVEL 1 — Lexical meaning
├── concepts/       # LEVEL 1 — Semantic abstractions
├── entities/       # LEVEL 2 — Persons / Places / Events
├── synonyms/       # LEVEL 3A — Verse-level Sanskrit analysis
├── translations/  # LEVEL 3B — Verse translations
├── commentary/
│   ├── source/     # LEVEL 3B — Original ācārya text
│   └── translation/# LEVEL 3B — Commentary translations
├── principles/     # LEVEL 4 — Declarative truths
├── skills/         # LEVEL 5 — Cultivable capacities
├── guidance/       # LEVEL 6 — Contextual reflection
├── compilations/   # LEVEL 7 — Non-canonical synthesis
├── courses/        # LEVEL 8 — Pedagogical sequencing
├── community/      # LEVEL 9 — Participatory structures
└── sampradaya/     # Interpretive tradition layer

6. Canon Layer — scripture/ (LEVEL 0)
Canonical data is:
	•	one verse (or smallest unit) per file
	•	verbatim original language
	•	immutable
	•	no JSX, no imports, no commentary
Example (Bhagavad-gītā):
scripture/
└── itihasa/
    └── mahabharata/
        └── bhisma-parva/
            └── bhagavad-gita/
                └── 02/
                    └── 11.mdx
Frontmatter includes:
	•	locator (lossless, tradition-aware)
	•	source_category
	•	source_tradition
	•	source_text
	•	authority_scope: "canon"

7. Interpretation & Abstraction Layers
Lexical (LEVEL 1–3A)
	•	Gloss → word-level semantic range
	•	Concept → cross-text semantic ideas
	•	Synonym → verse-specific padārtha
These layers enable study without interpretation.

Interpretive (LEVEL 3B)
Commentary is split intentionally:
	•	commentary/source/ — original ācārya text
	•	commentary/translation/ — translations of that text
This prevents:
	•	canon drift
	•	translator authority inflation
	•	lineage ambiguity

Abstraction (LEVEL 4–6)
	•	Principle → bounded truth
	•	Skill → cultivable capacity
	•	Guidance → situational reflection
Guidance is:
	•	non-prescriptive
	•	reversible
	•	explicitly bounded
	•	never diagnostic

8. Synthesis & Participation Layers (LEVEL 7–9)
Compilations
	•	thematic syntheses
	•	essays, mappings, dialogues
	•	explicitly non-canonical
Courses
	•	pedagogical sequences
	•	āśrama-aware
	•	reference atoms only
Community
	•	voluntary participation
	•	ethical boundaries enforced
	•	no doctrinal authority

9. Logic & Validation Layer — src/lib/ and src/scripts/
9.1 Runtime Logic (src/lib/)
Read-only infrastructure:
src/lib/
├── graph.ts     # Authority-aware traversal
├── disclosure.ts# Disclosure rules by authority_scope
├── taxonomy.ts  # Fixed vocabularies
├── features.ts  # Feature flags
└── safety.ts    # Boundary enforcement
These files read content, never mutate it.

9.2 Build-Time Enforcement (src/scripts/)
src/scripts/
├── validate-dependency-graph.ts
├── validate-hierarchy.ts
├── validate-doctrine.ts
├── scaffold-atom.ts
└── migrate-content.ts
Build fails if:
	•	authority order is violated
	•	canon is modified
	•	guidance leaks upward
	•	sampradāya claims universality

10. UI & Routing (Non-Authoritative)
UI renders, it never decides.
	•	components/ — atomic rendering
	•	pages/ — assembly only
	•	disclosure badges driven by authority_scope
No component infers truth.

11. Governance & Safety
Architecture enables:
	•	CI-enforced doctrine safety
	•	reversible change
	•	succession-safe stewardship
	•	explicit non-goals
The system cannot accidentally become a guru.

12. Explicit Non-Goals
The platform does not:
	•	personalize doctrine
	•	infer spiritual readiness
	•	replace teachers
	•	automate guidance
	•	optimize engagement over truth

13. Closing Principle
Architecture must disappear behind meaning.If the system feels authoritative, it has already failed.

Appendix — Disclosure Law
	•	Any content with authority_scope !== "canon" must be visually disclosed
	•	Sampradāya content must declare lineage and dependency
	•	Derived and contextual layers must never present as universal truth

End of ARCHITECTURE.md


