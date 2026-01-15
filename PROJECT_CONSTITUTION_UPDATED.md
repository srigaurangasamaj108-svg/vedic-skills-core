# Vedic Skills — Project Constitution
*(Final, Revised, Canon-Locked)*

This document defines the **non-negotiable constitutional laws**
governing the Vedic Skills platform.

All architecture, content, automation, UI, governance, and future expansion
**must comply** with this constitution.

No convenience, popularity, or tooling limitation overrides these laws.

---

## 1. Core Purpose

Vedic Skills is a **doctrine-preserving knowledge system** designed to:

• Preserve śāstra verbatim  
• Encode scriptural hierarchy explicitly  
• Separate meaning, interpretation, and application  
• Enable study, skill, and guidance **without distortion**  
• Prevent authority leakage across layers  
• Scale safely through automation  

The system must be **structurally incapable of lying**.

---

## 2. Authority Stack (LOCKED)

The platform operates on a **7-level authority stack**.

This stack is **epistemic**, not UI-based.

LEVEL 0 — Canon (CKA)LEVEL 1 — Gloss / ConceptLEVEL 2 — Entity / CircumstanceLEVEL 3A — Synonym (Verse-level lexical)LEVEL 3B — Translation & CommentaryLEVEL 4 — PrincipleLEVEL 5 — SkillLEVEL 6 — Guidance
### Authority Rules

• Each level depends **only downward**  
• No level may override or rewrite a lower level  
• Higher levels are removable without collapsing lower levels  
• Canon is immutable and singular  

---

## 3. Canon Doctrine (VKAD-01)

### 3.1 Canon Definition

A **Canonical Knowledge Atom (CKA)** is:

• One verse or smallest canonical unit  
• Stored verbatim in the original language  
• Immutable  
• Sequential  
• Context-descriptive only (speaker, listener, setting)  

### 3.2 Canon Prohibitions

Canon **must not contain**:

• Translations  
• Synonyms  
• Word meanings  
• Commentary  
• Interpretation  
• UI hints  
• JSX or imports  

Canon is **preserved**, not authored.

---

## 4. Scriptural Hierarchy (Orthogonal Axis)

Canonical sources follow this hierarchy:

śruti → rank 1smṛti → rank 2itihāsa → rank 3purāṇa → rank 4āgama → rank 5
### Hierarchy Rules

• Hierarchy applies **only to LEVEL 0 (Canon)**  
• Hierarchy is **declared**, never inferred  
• Derived layers may **read** hierarchy via CKA references  
• Derived layers may **never assert or override** hierarchy  

Hierarchy exists for **precedence & disclosure**, not polemics.

---

## 5. Lexical Meaning Law (NEW, EXPLICIT)

### 5.1 Gloss (LEVEL 1)

Gloss atoms define **word-level semantic range** across occurrences.

They answer:
> “What does this term mean across śāstric usage?”

Glosses are:
• Word-centric  
• Cross-verse  
• Non-interpretive  

---

### 5.2 Synonym Atoms (LEVEL 3A — REQUIRED)

**Verse-level synonyms are mandatory first-class atoms.**

They answer:
> “How is this specific verse lexically unpacked?”

Synonyms are:
• Verse-specific  
• Lexical, not explanatory  
• Derived directly from the CKA  
• Display-optional, but structurally mandatory  

Synonyms are **not glosses** and **not translations**.

They exist to preserve the **traditional pāṭha → padārtha → anvaya flow**.

---

## 6. Interpretation Law (Expanded & Clarified)

### 6.1 Translation (LEVEL 3B-T)

A **Translation Atom** is:

• One translation  
• Of one verse  
• By one translator  
• In one language  

Translations:
• Never modify canon  
• Never replace Sanskrit  
• Never include commentary  

Translations are **assistive renderings**, not authority.

---

### 6.2 Commentary — Source Text (LEVEL 3B-C-S)

A **Commentary Source Atom** is:

• Original commentary text  
• In the commentator’s language (often Sanskrit)  
• Verse-anchored  
• Tradition-identified  

This preserves **ācārya vākyas** as texts, not interpretations.

---

### 6.3 Commentary — Translation (LEVEL 3B-C-T)

A **Commentary Translation Atom** is:

• A translation of a commentary source  
• Explicitly subordinate to that source  
• Explicitly subordinate to canon  

This prevents:
• Commentary collapsing into canon  
• Translator voice becoming doctrinal  

---

## 7. Abstraction Law

### 7.1 Principle (LEVEL 4)

Principles are **bounded abstractions**.

They answer:
> “What rule or truth is established by these verses?”

Principles:
• Must cite CKAs  
• Must remain non-prescriptive  
• Must avoid techniques or advice  

---

### 7.2 Skill (LEVEL 5)

Skills are **cultivable capacities**.

They answer:
> “What ability does this understanding enable?”

Skills:
• Depend on principles  
• Are descriptive, not instructional  
• Never override śāstra  

---

## 8. Guidance Safety Law (LEVEL 6)

Guidance is **contextual application scaffolding**.

Guidance must be:
• Situational  
• Non-prescriptive  
• Non-diagnostic  
• Reversible  
• Explicitly bounded  

Guidance must NEVER:
• Replace discernment  
• Replace mentorship  
• Replace therapy  
• Claim universality  

Guidance is **supportive context**, not leadership.

---

## 9. Atomization Law

Everything is an **Atom**.

• One file = one atomic unit  
• No file mixes authority layers  
• Relationships are explicit and referential  
• Duplication is forbidden  
• Canon exists in exactly one place  

---

## 10. Automation Doctrine

Automation is a **gatekeeper**, not an author.

Automation MAY:
• scaffold files  
• validate schemas  
• enforce hierarchy  
• detect violations  

Automation MAY NOT:
• invent doctrine  
• harmonize scripture  
• generate guidance  
• personalize advice  
• act as guru  

AI is a **scribe**, never a teacher.

---

## 11. Governance, Stewardship & Succession

Future maintainers are **custodians**, not interpreters.

Governance must be:
• Mechanical  
• Traceable  
• Reversible  
• Constitution-aligned  

No individual, committee, or AI may acquire doctrinal authority.

---

## 12. Change Protocol

Any change affecting:
• Canon  
• Authority boundaries  
• Hierarchy  
• Lexical layers (synonyms / gloss)  
• Automation permissions  

Requires:
• Explicit declaration  
• Documented rationale  
• Versioned approval  

Silence ≠ consent.

---

## 13. Constitutional Priority

If any implementation, UI, schema, or practice conflicts with this document:

👉 **This document prevails.**

---

_End of Constitution_

