---
authority_scope: documentation
---
# Scripture — LEVEL 0 Canonical Content

This directory contains **LEVEL 0 canonical scripture**.

All content here is treated as **Śāstra**, not interpretation.

Everything in this directory is:
- verbatim
- immutable
- authority-bearing
- structurally enforced

If content lives here, it is **canon**.

---

## What lives here

Canonical texts only, organized by śāstric category, such as:

- Śruti (Veda)
- Smṛti
- Itihāsa
- Purāṇa
- Āgama
- Vedāṅga
- Upaveda
- Ṣaḍ-darśana

Each canonical unit is:
- stored in its original language
- atomized (one verse / sūtra per file)
- sequential
- context-descriptive only

No meaning is added here.
Nothing is explained here.
Nothing is interpreted here.

---

## What must NOT live here

The following are **explicitly forbidden** in `scripture/`:

- Translations
- Synonyms
- Glosses
- Concepts
- Commentary
- Doctrinal summaries
- Philosophical conclusions
- Skills or practices
- Guidance or application
- Sampradāya material
- UI or presentation logic
- JSX, imports, or executable code

Those belong in **derived layers** outside `scripture/`.

---

## Canonical enforcement

Rules governing this directory are defined in:

- `scripture/schema.ts`
- `scripture/_canon/hierarchy.ts`

These files enforce:
- what counts as canon
- how canonical categories relate
- what authority canon carries

They apply **only here**.

Derived layers may reference canon,
but canon never references derived layers.

---

## Why this directory is isolated

Canon must be:

- singular
- stable
- non-negotiable
- protected from interpretation drift

By isolating scripture structurally,
the system becomes **incapable of silently altering authority**.

This is intentional.

---

## Constitutional note

Changes to content or structure inside `scripture/`
require explicit constitutional approval.

Canon is preserved, not authored.

Silence ≠ consent.
