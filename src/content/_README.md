# Content — Authority Layer Model

This directory contains **all content atoms** for the Vedic Skills platform.

Content here is **layered by authority**, not by convenience, topic, or tradition.
Each folder represents a **distinct epistemic layer** with strict rules.

Higher layers may depend on lower layers.
Lower layers must never depend on higher layers.

This structure is intentional and enforced.

---

## The Authority Layers

LEVEL 0 — scripture/ Canonical Śāstra (immutable)
LEVEL 1 — gloss/ Lexical meaning
LEVEL 1 — concepts/ Semantic patterns
LEVEL 2 — entities/ Persons, places, events, circumstances
LEVEL 3 — translations/ Human-language renderings
LEVEL 3 — commentary/ Interpretive explanation
LEVEL 4 — principles/ Declarative truths
LEVEL 5 — skills/ Human capacities
LEVEL 6 — guidance/ Contextual application
SAMPRADĀYA — sampradaya/ Tradition-specific interpretation

yaml
Copy code

Each level exists to **serve the level below it**, not replace it.

---

## scripture/ (LEVEL 0)

The root of all authority.

Contains:
- Śruti
- Smṛti
- Itihāsa
- Purāṇa
- Āgama
- Vedāṅga
- Upaveda
- Ṣaḍ-darśana

Rules:
- Verbatim text only
- One canonical unit per file
- No interpretation
- No JSX or imports
- Immutable once committed

Canon is preserved, not authored.

---

## Derived Layers (LEVEL 1–6)

All other folders contain **derived knowledge**.

They may:
- reference scripture
- interpret meaning
- abstract principles
- describe skills
- offer guidance

They may not:
- alter canon
- override lower authority
- silently introduce doctrine
- imply authority they do not have

Each atom must declare its dependencies explicitly.

---

## sampradaya/

Sampradāya content represents **living traditions of interpretation and practice**
(e.g. Gauḍīya Vaiṣṇavism).

Sampradāya:
- is not scripture
- does not add authority
- interprets existing authority
- must remain downstream of canon

It stands **on top of** scripture, not beside it.

---

## Enforcement

Authority boundaries are enforced by:
- Zod schemas
- Content collections
- Dependency graph validation
- Canon hierarchy definitions

If a change violates the layer model, it must be fixed —
not justified.

---

## Design principle

> Authority flows downward.
> Meaning is explicit.
> Drift is impossible.

This directory structure exists to ensure that
truth cannot be accidentally rewritten by structure.

Silence ≠ consent.