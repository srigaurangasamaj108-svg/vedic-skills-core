Vedic Skills — Project Constitution
(Final, Current, Canon-Locked)
This document defines the non-negotiable constitutional laws governing the Vedic Skills platform.
All architecture, schemas, content, automation, UI, governance, and future expansion must comply with this constitution.
No convenience, popularity, tooling limitation, or personal interpretation overrides these laws.

1. Core Purpose
Vedic Skills is a doctrine-preserving knowledge system, designed to:
	•	Preserve śāstra verbatim
	•	Encode scriptural authority explicitly
	•	Separate revelation, meaning, interpretation, and application
	•	Enable study, skill, and guidance without distortion
	•	Prevent authority leakage across layers
	•	Scale safely through automation and validation
The system must be structurally incapable of lying.

2. Authority Stack (LOCKED)
The platform operates on a multi-level authority stack.This stack is epistemic, not UI-based.
Level
Name
Description
LEVEL 0
Canon
Immutable scripture (CKA)
LEVEL 1
Gloss / Concept
Lexical & semantic meaning
LEVEL 2
Entity
Person / Place / Event
LEVEL 3A
Synonym
Verse-level lexical unpacking
LEVEL 3B
Translation / Commentary
Assistive interpretation
LEVEL 4
Principle
Abstracted truth
LEVEL 5
Skill
Cultivable capacity
LEVEL 6
Guidance
Contextual reflective aid
LEVEL 7
Compilation
Thematic synthesis
LEVEL 8
Course
Pedagogical sequence
LEVEL 9
Community
Participatory layer
Authority Rules
	•	Authority flows only downward
	•	Higher levels may reference lower levels
	•	Lower levels may never be overridden
	•	Canon is singular, immutable, and non-negotiable
	•	Higher layers are removable without collapsing lower layers

3. Canon Doctrine (LEVEL 0)
3.1 Canon Definition
A Canonical Knowledge Atom (CKA) is:
	•	One verse or smallest canonical unit
	•	Stored verbatim in original language
	•	Immutable and sequential
	•	Context-descriptive only (speaker, listener, setting)
3.2 Canon Prohibitions
Canon must never contain:
	•	Translations
	•	Synonyms
	•	Glosses
	•	Commentary
	•	Interpretation
	•	UI hints
	•	JSX or imports
Canon is preserved, not authored.

4. Scriptural Corpus (Expanded & Frozen)
The canonical corpus of Vedic Skills is explicitly defined as:
Śruti
→ Smṛti
→ Itihāsa
→ Purāṇa
→ Āgama
→ Vedāṅga
→ Upaveda
→ Ṣaḍ-darśana
Rules
	•	This corpus applies only to LEVEL 0
	•	Corpus membership is declared, not inferred
	•	Derived layers may reference corpus
	•	Derived layers may never redefine corpus

5. Sampradāya Law (NEW, FORMALIZED)
5.1 Definition
A Sampradāya is a tradition-specific interpretive lineage, grounded in canon but not canon itself.
Sampradāya content lives in:
src/content/sampradaya/
5.2 Authority Scope
Sampradāya atoms must declare:
authority_scope: sampradaya
5.3 Constraints
Sampradāya content:
	•	May interpret canon
	•	May present doctrinal conclusions
	•	Must never present as universal
	•	Must always be UI-disclosed as perspective-bound

6. Authority Scope Law (Phase 12)
Every non-canonical atom must declare authority_scope.
Layer
authority_scope
Canon
(implicit)
Gloss / Concept / Entity
derived
Synonym
derived
Translation
derived
Commentary
derived
Principle
derived
Skill
derived
Guidance
contextual
Sampradāya
sampradaya
Compilation / Course / Community
contextual
Missing authority_scope produces warnings, not failures, for legacy content.

7. Lexical Meaning Law
7.1 Gloss (LEVEL 1)
Gloss atoms define word-level semantic range across śāstric usage.
They are:
	•	Non-interpretive
	•	Cross-verse
	•	Meaning-bounded

7.2 Synonyms (LEVEL 3A)
Synonyms are mandatory lexical atoms.
They:
	•	Are verse-specific
	•	Preserve pāṭha → padārtha → anvaya
	•	Are neither gloss nor translation

8. Interpretation Law
8.1 Translation (LEVEL 3B-T)
	•	One verse
	•	One translator
	•	One language
	•	Assistive only
8.2 Commentary Source (LEVEL 3B-C-S)
	•	Original ācārya text
	•	Verse-anchored
	•	Preserved verbatim
8.3 Commentary Translation (LEVEL 3B-C-T)
	•	Translation of commentary source
	•	Explicitly subordinate
	•	Never doctrinally authoritative

9. Abstraction Law
9.1 Principle (LEVEL 4)
Principles:
	•	Cite CKAs
	•	Are non-prescriptive
	•	Establish truths, not advice
9.2 Skill (LEVEL 5)
Skills:
	•	Describe capacities
	•	Never instruct
	•	Never override śāstra

10. Guidance Safety Law (LEVEL 6)
Guidance must be:
	•	Contextual
	•	Reversible
	•	Non-diagnostic
	•	Non-prescriptive
Guidance must never:
	•	Replace discernment
	•	Replace mentorship
	•	Replace therapy
	•	Claim universality

11. Atomization Law
	•	One file = one atom
	•	No mixed authority layers
	•	Explicit references only
	•	Canon exists in exactly one place

12. Automation Doctrine
Automation may:
	•	Scaffold atoms
	•	Validate schemas
	•	Enforce authority
	•	Detect violations
Automation may never:
	•	Invent doctrine
	•	Harmonize scripture
	•	Generate guidance
	•	Act as guru
AI is a scribe, never a teacher.

13. Infrastructure Law
	•	src/lib/ is read-only
	•	Infrastructure reads, validates, discloses
	•	Infrastructure never mutates doctrine

14. Change Protocol
Changes affecting:
	•	Canon
	•	Authority boundaries
	•	Sampradāya rules
	•	Disclosure laws
Require:
	•	Explicit declaration
	•	Documented rationale
	•	Versioned approval
Silence ≠ consent.

15. Constitutional Priority
If any schema, script, UI, automation, or practice conflicts with this document:
👉 This document prevails.

End of Constitution
