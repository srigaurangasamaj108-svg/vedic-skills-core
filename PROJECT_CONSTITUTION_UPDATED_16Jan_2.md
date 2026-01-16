Vedic Skills — Project Constitution
(Final, Canon-Locked, Implementation-Aligned)
This document defines the non-negotiable constitutional lawsgoverning the Vedic Skills platform.
All architecture, content, automation, schemas, UI, governance, and future expansionmust comply with this constitution.
No convenience, popularity, contributor preference, or tooling limitationoverrides these laws.

1. Core Purpose
Vedic Skills is a doctrine-preserving knowledge system designed to:
• Preserve śāstra verbatim• Encode canonical authority explicitly• Separate text, meaning, interpretation, abstraction, and application• Enable study, skill, and guidance without distortion• Prevent authority leakage across layers• Scale safely through mechanical enforcement
The system must be structurally incapable of lying.

2. Authority Stack (LOCKED)
The platform operates on a 7-level authority stack.
This stack is epistemic, not UI-based.
LEVEL 0 — Canon (CKA)LEVEL 1 — Gloss / ConceptLEVEL 2 — Entity / CircumstanceLEVEL 3A — Synonym (verse-level lexical)LEVEL 3B — Translation & CommentaryLEVEL 4 — PrincipleLEVEL 5 — SkillLEVEL 6 — Guidance
Authority Rules
• Authority flows strictly downward• No level may override, rewrite, or reinterpret a lower level• Higher levels are removable without collapsing lower levels• Canon is immutable, singular, and non-derivable

3. Canon Doctrine (VKAD-01)
3.1 Canon Definition
A Canonical Knowledge Atom (CKA) is:
• One verse, sūtra, mantra, or smallest canonical unit• Preserved verbatim in the original language• Immutable once committed• Sequential within its own textual tradition• Context-descriptive only (speaker, listener, setting)
Canon is preserved, never authored.

3.2 Canon Prohibitions
Canon must not contain:
• Translations• Synonyms• Word meanings• Commentary• Interpretation• UI hints• JSX, imports, or rendering logic
Canon is text, not explanation.

4. Canonical Corpus Model (ORTHOGONAL, LOCKED)
Canonical texts are classified by source category, not by linear rank.
The canonical corpus includes (non-exhaustive, but closed at LEVEL-0):
• Śruti• Smṛti• Itihāsa• Purāṇa• Āgama• Vedāṅga• Upaveda• Ṣaḍ-darśana
Corpus Rules
• These categories are orthogonal, not a ladder• Precedence is contextual and declarative, not temporal• Hierarchy exists for disclosure and traceability, not polemics• Only LEVEL-0 Canon participates in corpus classification
Derived layers may read canonical classification,but may never assert, alter, or override it.

5. Canonical Location Law (NEW, LOCKED)
Canonical position is expressed only through an ordered locator array.
A locator:
• Is ordered• Is tradition-aware• Is lossless• May vary in depth across śāstra
No canonical schema may hard-code:
• chapter• verse• skandha• pāda• sūtra• mantra
All such positioning is encoded exclusively via locator segments.
This guarantees universality across all śāstra types.

6. Lexical Meaning Law (EXPLICIT)
6.1 Gloss (LEVEL 1)
Gloss atoms define word-level semantic range across śāstric usage.
They answer:
“What does this term mean across canonical contexts?”
Glosses are:
• Word-centric• Cross-verse• Non-interpretive• Referential to Canon

6.2 Synonym Atoms (LEVEL 3A — MANDATORY)
Verse-level synonyms are first-class, mandatory atoms.
They answer:
“How is this specific verse lexically unpacked?”
Synonyms are:
• Verse-specific• Lexical, not explanatory• Directly derived from the CKA• Structurally mandatory (display-optional)
They preserve the traditional flow:
pāṭha → padārtha → anvaya

7. Interpretation Law
7.1 Translation (LEVEL 3B-T)
A Translation Atom is:
• One translation• Of one canonical atom• By one translator• In one target language
Translations:
• Never modify Canon• Never replace Sanskrit• Never embed commentary
They are assistive renderings, not authority.

7.2 Commentary — Source (LEVEL 3B-C-S)
A Commentary Source Atom is:
• Original commentary text• In the commentator’s language• Verse-anchored• Tradition-identified
This preserves ācārya vākyas as texts.

7.3 Commentary — Translation (LEVEL 3B-C-T)
A Commentary Translation Atom is:
• A translation of a commentary source• Explicitly subordinate to that source• Explicitly subordinate to Canon
This prevents doctrinal drift.

8. Abstraction Law
8.1 Principle (LEVEL 4)
Principles are bounded abstractions.
They answer:
“What truth is established by these verses?”
Principles:
• Must cite CKAs• Must remain non-prescriptive• Must avoid techniques or advice

8.2 Skill (LEVEL 5)
Skills are cultivable capacities.
They answer:
“What ability does this understanding enable?”
Skills:
• Depend on principles• Are descriptive, not instructional• Never override śāstra

9. Guidance Safety Law (LEVEL 6)
Guidance is contextual application scaffolding.
Guidance must be:
• Situational• Non-prescriptive• Non-diagnostic• Reversible• Explicitly bounded
Guidance must NEVER:
• Replace discernment• Replace mentorship• Replace therapy• Claim universality
Guidance supports — it does not lead.

10. Sampradāya Law (NEW, EXPLICIT)
Sampradāya layers represent living interpretive traditions.
They:
• Are grounded in Canon• Interpret, systematize, and practice śāstra• Never create new Canon• Never override darśana or śāstra
Sampradāyas are modes of interpretation, not sources of authority.

11. Atomization Law
Everything is an Atom.
• One file = one atomic unit• No file mixes authority layers• All relationships are explicit and referential• Duplication is forbidden• Canon exists in exactly one location

12. Automation Doctrine
Automation is a gatekeeper, not an author.
Automation MAY:
• Scaffold files• Enforce schemas• Validate dependency graphs• Detect authority violations
Automation MAY NOT:
• Invent doctrine• Harmonize scripture• Generate guidance• Personalize advice• Act as guru
AI is a scribe, never a teacher.

13. Governance, Stewardship & Succession
Future maintainers are custodians, not interpreters.
Governance must be:
• Mechanical• Traceable• Reversible• Constitution-aligned
No individual, committee, or AI may acquire doctrinal authority.

14. Change Protocol
Any change affecting:
• Canon• Authority boundaries• Corpus classification• Locator semantics• Lexical layers• Automation permissions
Requires:
• Explicit declaration• Documented rationale• Versioned approval
Silence ≠ consent.

15. Constitutional Priority
If any implementation, schema, UI, automation, or practice conflicts with this document:
👉 This document prevails.



Appendix 

Disclosure Law
Any content with authority_scope !== "canon" MUST be visually disclosed as such.
Sampradāya content MUST declare its lineage and dependent śāstra.
Derived and contextual layers MUST never present themselves as universal doctrine.

End of Constitution