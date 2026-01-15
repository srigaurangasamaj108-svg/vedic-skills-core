# CURRENT_STATE_BLUEPRINT.md
Version: 1.0  
Status: Authoritative Snapshot (Pre-Refactor)  
Project: Vedic Skills Knowledge Platform

---

## 0. Purpose of This Document

This document records the **actual, operational state** of the Vedic Skills platform
at the moment immediately **after constitutional doctrine completion (VKAD-01 → VKAD-17)**  
and **before doctrine-aligned content refactor and automation**.

Its purpose is to:
- Preserve orientation across development phases and chats
- Prevent loss of prior work
- Clearly distinguish *legacy*, *transitional*, and *stable* structures
- Enable safe refactoring without philosophical regression

This is **not** a future plan, ideal architecture, or doctrine.
It is a **truthful snapshot**.

---

## 1. Constitutional Status (Stable)

### 1.1 Doctrine
The following doctrines are **complete, binding, and not provisional**:

- VKAD-01 → VKAD-09 (Canon, Content, Search, Departments)
- VKAD-10 (UI Interaction Doctrine)
- VKAD-11 (Navigation & Cognitive Load)
- VKAD-12 (Progressive Disclosure)
- VKAD-13 (Mentoring, Guidance & Safety UX)
- VKAD-14 (Community Interaction & Boundary)
- Phase II doctrines (Governance, Stewardship, Succession)

These documents together form the **constitutional law** of the system.

No refactor, feature, or schema may violate them.

---

## 2. Architectural Derivatives (Stable)

The following documents correctly translate doctrine into structure and intent:

- Architecture.md
- DESIGN_UI_DOCTRINE.md
- DESIGN_UI_BLUEPRINT.md
- Constitution Index
- Violation Checklist

These documents are **authoritative interpretations**, not drafts.

---

## 3. Technical Stack (Operational)

- Framework: Astro
- Language: TypeScript + MDX
- Rendering model: Static-first with island hydration
- Styling: CSS / utility-driven (Visual Silence compliant)
- Repo: Single working repository (no reset planned)

Builds are successful.
Local development is stable.

---

## 4. Pages Layer (`src/pages/`) — Mostly Stable

### Implemented:
- `/` (landing / welcome)
- `/library/[...slug].astro` (universal reader concept)
- `/study/`
- `/guidance/`
- `/community/`

### Status:
- Routing works
- Page intent aligns with doctrine
- Some boundaries (study vs guidance vs library) are **conceptually correct but not yet strictly enforced**

This layer **does not require rewrite**, only tightening after data refactor.

---

## 5. Components Layer (`src/components/`) — Strong Foundation

### Implemented:
- Atoms (typography, buttons, controls)
- Molecules (VerseBlock, AuthorBadge, navigation units)
- Organisms (CommentarySection, GlobalSearch, MegaMenu)
- Templates (ReadingLayout, AppliedLayout, GuidanceLayout)

### Status:
- Component responsibilities are mostly correct
- Visual Silence doctrine is respected
- Some organisms may render *too much by default* (pre-VKAD-12 ceilings)

This layer is **structurally sound** and should be *refined*, not replaced.

---

## 6. Content Layer (`src/content/`) — Transitional / Legacy

### Current Reality:
- Content folder structure reflects **earlier conceptual experiments**
- Paths such as:
  - `src/content/itihasa/...`
  - `src/content/bhagavad-gita/...`
- Verses, translations, and commentaries may coexist in single MDX files
- No strict atomic separation yet

### Content Volume:
- Only a few test verses (Bhagavad-gītā, Chapter 2)
- One or more commentaries rendering correctly
- Frontmatter written manually

### Status:
🔴 This layer is **intentionally incomplete**  
🔴 This is the **primary refactor target**

No bulk scripture ingestion has occurred yet — by design.

---

## 7. Canonical Authority Model (Clarified)

- The highest authority unit is a **Canonical Knowledge Atom (CKA)**
- CKAs are:
  - immutable
  - verbatim
  - referenceable
  - sequence-aware
- Verses (or smallest canonical passages) will become CKAs
- Everything else (translations, commentaries, courses, guidance, UI) is **derived**

This principle is constitutionally grounded in VKAD-01.

---

## 8. Automation & Scripts (Not Yet Implemented)

### Not present yet:
- MDX generation scripts
- Zod-backed authoring helpers
- Canon graph builders
- Validation pipelines

### Reason:
These must be designed **after** CKA schema is formalized,
not before.

This absence is **correct** and **intentional**.

---

## 9. Navigation & MegaMenu (Provisional)

- MegaMenu exists and functions
- Reflects Library / Study / Guidance / Community
- Built before VKAD-11 and VKAD-12 finalization

Status:
🟡 Conceptually correct  
🟡 Structurally provisional  
🟢 To be refined after content atomization

---

## 10. What Is Considered Stable vs Mutable

### Stable (Do Not Rewrite)
- VKAD doctrines
- Architectural & UI doctrine files
- Core layouts
- Core components
- Universal reader concept

### Mutable (Planned Refactor)
- `src/content/` structure
- Content schemas
- Authoring workflow
- Canon graph logic
- Navigation disclosure rules

---

## 11. Immediate Next Phase (Intended)

The next lawful phase is:

**Doctrine-Aligned Content Refactor**, consisting of:

1. Formal CKA schema definition
2. Atomic content collections (verses, translations, commentaries, etc.)
3. Reference-based graph relationships
4. Authoring automation scripts
5. Migration of existing test MDX
6. Only then: controlled content expansion

---

## 12. How to Use This Document

This file should be:
- Supplied at the start of any new chat
- Treated as the single source of truth for “where we are”
- Used to prevent re-litigation of past decisions

Suggested intro line in new chats:

> “This is my CURRENT_STATE_BLUEPRINT.md.  
> The VKAD constitution is complete and binding.  
> I want to proceed with doctrine-aligned refactor.”

---

## Closing Statement

This system is **not unfinished**.
It is **properly paused at the right architectural moment**.

Nothing valuable will be lost.
Everything important is already protected.

---

End of CURRENT_STATE_BLUEPRINT.md
