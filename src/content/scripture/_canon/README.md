# _canon — Canonical Infrastructure (LEVEL 0)

This directory contains **mechanical infrastructure files**
that apply **exclusively to LEVEL 0 Scripture (Canon)**.

It is **not content**.
It is **not doctrine**.
It is **not interpretation**.

---

## What lives here

- `hierarchy.ts`
  - Declares canonical śāstra categories
  - Encodes authority, derivation, and support relationships
  - Applies ONLY to verbatim scripture

These files exist to **protect canon integrity by structure**.

---

## What must NOT live here

- Translations
- Synonyms
- Glosses
- Concepts
- Commentary
- Principles
- Skills
- Guidance
- Sampradāya material
- UI logic
- Search logic

If a file here is imported outside `scripture/`,
the authority boundary is violated.

---

## Why this folder exists

Canonical hierarchy applies **only to Scripture**.

Placing `_canon` inside `scripture/` ensures that:
- Canon rules cannot leak upward
- Derived layers cannot acquire authority
- Śāstra is preserved, not reinterpreted

This is an architectural safeguard, not an organizational preference.

---

## Constitutional note

Any change to files in this directory requires
explicit constitutional review.

Silence ≠ consent.
