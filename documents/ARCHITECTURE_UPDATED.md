# ARCHITECTURE.md
## Derived Technical Architecture of the Vedic Skills Platform

---

## 0. Status, Authority & Scope

**Document Type:** Derived (Non-Constitutional)  
**Subordinate To:**  
PROJECT_CONSTITUTION.md  
VKAD-01 → VKAD-17  

**Purpose:**  
Translate constitutional doctrine into an implementable, enforceable engineering structure.

If any conflict arises:
→ **Doctrine overrides Architecture**  
→ **Architecture may evolve; doctrine may not**

---

## 1. Architectural Philosophy

Vedic Skills is **not a website**.

It is a **Śāstra-preserving Knowledge System** that:

- treats scripture as immutable data
- layers meaning without collapsing authority
- separates understanding from application
- prevents automation from becoming instruction
- scales without diluting epistemic integrity

The architecture is designed so that **misuse is structurally difficult**, not merely discouraged.

---

## 2. Canonical Layer Model (Vertical Authority)

The system enforces a **strict vertical authority stack**:

LEVEL 0 — Canon (CKA)LEVEL 1 — Gloss / ConceptLEVEL 2 — Entity / CircumstanceLEVEL 3A — Synonym (Verse-level lexical)LEVEL 3B1— Commentary Source (Ācārya text)LEVEL 3B2— Commentary TranslationLEVEL 4 — PrincipleLEVEL 5 — SkillLEVEL 6 — GuidanceLEVEL 7 — CompilationLEVEL 8 — CourseLEVEL 9 — Community
Rules:

- Each level depends **only downward**
- No level may override a lower level
- Canon is immutable
- Application layers are optional and removable

---

## 3. Scriptural Hierarchy (Orthogonal Axis)

Applies **only to LEVEL 0 (Canon)**:

śruti > smṛti > itihāsa > purāṇa > āgama
Hierarchy is:

- declared, not inferred
- descriptive, not polemical
- used for disclosure, not censorship

---

## 4. High-Level System Layers (Horizontal)

┌──────────────────────────────┐│ Presentation Layer │ ← Astro pages & layouts├──────────────────────────────┤│ UI System │ ← Atomic components├──────────────────────────────┤│ Logic & Validation Layer │ ← Graph, rules, flags├──────────────────────────────┤│ Content Data Layer │ ← Normalized atoms├──────────────────────────────┤│ Static Asset Vault │ ← PDFs, fonts└──────────────────────────────┘
Each layer is **replaceable without doctrinal loss**.

---

## 5. Data Layer — `src/content/`

*(VKAD-01, VKAD-02, VKAD-05)*

### 5.1 Core Principle

The data layer stores **truth and meaning**, never presentation.

Everything is:

- atomic
- normalized
- referential
- auditable

---

### 5.2 Content Folder Map (Authoritative)

src/content/├── scripture/ # LEVEL 0 — Canon (hierarchy-encoded)├── gloss/ # LEVEL 1 — Word-level meaning├── concepts/ # LEVEL 1 — Semantic ideas├── entities/ # LEVEL 2 — Person / Place / Event / Circumstance├── synonyms/ # LEVEL 3A — Verse-level Sanskrit synonyms├── commentary/│ ├── source/ # LEVEL 3B1 — Original Ācārya text│ └── translation/ # LEVEL 3B2 — Translation of commentary├── principles/ # LEVEL 4 — Abstracted truths├── skills/ # LEVEL 5 — Trainable capacities├── guidance/ # LEVEL 6 — Contextual reflective aid├── compilations/ # LEVEL 7 — Non-canonical thematic synthesis├── courses/ # LEVEL 8 — Pedagogical sequences└── community/ # LEVEL 9 — Participatory structures
---

### 5.3 Canon (LEVEL 0)

src/content/scripture/├── sruti/├── smrti/├── itihasa/│ └── mahabharata/│ └── bhagavad-gita/│ └── 02/13.mdx├── purana/└── agama/
Rules:

- one verse per file
- verbatim Sanskrit only
- no JSX, no imports
- immutable by tooling and policy

---

### 5.4 Lexical & Semantic Layers (LEVEL 1–3A)

- **Gloss** → word meaning
- **Concept** → semantic abstraction
- **Synonym** → verse-level lexical breakdown (Śabda-artha)

These layers support **study without interpretation**.

---

### 5.5 Interpretation Layers (LEVEL 3B)

Commentary is **split intentionally**:

- `commentary/source/` → original Sanskrit (or source language)
- `commentary/translation/` → translations of commentary

This prevents:

- conflation of canon with commentary
- loss of lineage fidelity
- accidental authority elevation

---

### 5.6 Abstraction & Practice Layers (LEVEL 4–6)

- **Principles** abstract meaning
- **Skills** describe capacity
- **Guidance** supports contextual application

Guidance is:

- non-prescriptive
- reversible
- bounded by explicit guardrails

---

### 5.7 Synthesis & Participation Layers (LEVEL 7–9)

#### Compilations
- essays, thematic groupings, dialogues
- explicitly non-canonical
- used in library, study, guidance, community

#### Courses
- pedagogical sequences
- āśrama-aware
- reference atoms; never restate canon

#### Community
- voluntary participation structures
- inspired by śāstra, never authoritative
- strict ethical boundaries enforced

---

## 6. Logic & Validation Layer — `src/lib/` and `src/scripts/`

### 6.1 Runtime Logic (`src/lib/`)

src/lib/├── graph.ts # Authority-aware dependency graph├── search.ts # Disclosure-aware search├── taxonomy.ts # Fixed vocabularies├── features.ts # Feature flags└── safety.ts # Boundary enforcement
Responsibilities:

- resolve downward references
- enforce progressive disclosure
- keep UI components ignorant of doctrine

---

### 6.2 Build-Time Scripts (`src/scripts/`)

src/scripts/├── validate-doctrine.ts├── validate-graph.ts├── validate-hierarchy.ts├── scaffold-atom.ts└── migrate-content.ts
Build fails if:

- authority order is violated
- canon is modified
- guidance exceeds boundaries
- commentary leaks into canon

---

## 7. UI System — `src/components/`

*(VKAD-03, VKAD-10 to VKAD-14)*

### 7.1 Atomic Design Structure

components/├── atoms/ # Typography, buttons, icons├── molecules/ # VerseBlock, TermTooltip├── organisms/ # CommentarySection, SynonymPanel└── templates/ # ReadingLayout, StudyLayout
Rules:

- components render, never decide
- no component infers authority
- layouts enforce silence and restraint

---

## 8. Routing Layer — `src/pages/`

Pages **assemble data**; they never contain meaning.

pages/├── index.astro├── library/[...slug].astro├── study/│ └── courses/[slug].astro├── guidance/[context].astro└── community/index.astro
---

## 9. Static Asset Vault — `public/`

public/├── pdfs/│ ├── canonical/│ └── reference/├── fonts/└── icons/
PDFs are **referenced, never parsed**.

---

## 10. Governance & Safety Hooks

Architecture enables:

- doctrine-level CI enforcement
- canonical immutability locks
- reversible feature deployment
- succession-safe stewardship

---

## 11. Explicit Non-Goals

The system does **not**:

- personalize doctrine
- infer readiness
- replace teachers
- automate guidance
- optimize engagement metrics

---

## 12. Closing Principle

> Architecture must disappear behind meaning.  
> If the system is felt, it has spoken too loudly.

---

Appendix 

Disclosure Law
Any content with authority_scope !== "canon" MUST be visually disclosed as such.
Sampradāya content MUST declare its lineage and dependent śāstra.
Derived and contextual layers MUST never present themselves as universal doctrine.

**End of ARCHITECTURE.md**
