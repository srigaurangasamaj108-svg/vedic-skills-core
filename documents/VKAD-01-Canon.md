# VKAD-01: CANON, SCRIPTURE & ATOMIC AUTHORITY  
_Vedic Knowledge Architecture Doctrine_

---

## 0. PURPOSE OF THIS DOCUMENT

This document defines the **supreme, non-negotiable rules** governing:

• What constitutes scripture in the Vedic Skills ecosystem  
• How scripture is structured, stored, referenced, and preserved  
• What is immutable vs editorial vs contextual  
• How large-scale expansion may occur **without distortion or dilution**

If **any design decision, feature, UI element, database choice, or content practice**
conflicts with this document, **that implementation must be removed**.

> **Śāstra is primary.  
Technology is subordinate.  
Convenience is irrelevant.**

---

## 1. FUNDAMENTAL AXIOM (UNBREAKABLE)

**One verse (śloka / mantra / sūtra) is the smallest indivisible canonical unit.**

There is:

• no scripture without verses  
• no theme without verses  
• no guidance without verses  
• no course without verses  
• no community path without verses  

All higher constructs are **views, paths, or reflections** — never sources.

---

## 2. CANONICAL AUTHORITY HIERARCHY  
_(Structural, not thematic)_

The platform recognizes the traditional hierarchy of Vedic literature.
This hierarchy governs **storage, traversal, and authority** — not popularity.

### 2.1 Primary Canonical Classes

These are **structural categories**, never themes:

1. Śruti  
2. Smṛti  
3. Itihāsa  
4. Purāṇa  
5. Āgama & Tantra  
6. Vedāṅga  
7. Upaveda  

These classes **must never be mixed at the data-storage level**.

---

### 2.2 Text-Level Canon (Bounded Works)

Each scripture is treated as a **complete, closed, bounded work**.

Examples:

• Bhagavad-gītā  
• Śrīmad Bhāgavatam  
• Manu-smṛti  
• Upaniṣads (each individually bounded)

Each text:

• has its own identity  
• has its own internal structure (chapter, canto, parva, kāṇḍa, etc.)  
• is never merged with another text for convenience  

---

## 3. STORAGE DOCTRINE — ATOMIC & NORMALIZED

### 3.1 File System as Canon

Canonical scripture is stored as **plain text MD / MDX files**.

This guarantees:

• longevity  
• portability  
• software independence  
• resistance to platform collapse  
• compatibility with future systems

Canonical scripture **must never** be stored in databases.

---

### 3.2 Atomic Folder Structure (Mandatory)

Canonical verses are stored atomically:

src/content/verses/└── /└── /└── .mdx
Examples:

verses/bhagavad-gita/02/47.mdxverses/ramayana/bala-kanda/01/15.mdxverses/mahabharata/bhishma-parva/25/12.mdx
Structural units vary **by text tradition** (chapter, canto, parva, kāṇḍa).  
The **verse remains the atom**.

---

### 3.3 One Verse = One File (Absolute Rule)

Each verse file contains:

• exactly one canonical verse  
• no partial verses  
• no combined verses  
• no summaries  
• no paraphrases  

This preserves:

• citation integrity  
• scholarly trust  
• graph precision  
• long-term scalability  

---

## 4. CANONICAL METADATA (IDENTITY ONLY)

Each verse file **must** contain metadata that defines identity — not interpretation.

### 4.1 Required Fields

```yaml
text: bhagavad-gita
structure_unit: chapter
structure_index: 2
verse: 47
speaker: krishna
These fields:
• identify the verse• anchor it in tradition• never express meaning

4.2 Optional Editorial Overlays (Non-Canonical)
The following may exist but are explicitly non-canonical:
themes: [duty, detachment]
life_contexts: [householder]
They:
• assist navigation• may evolve• must never override canon

4.3 What Must NEVER Appear in Metadata
❌ Interpretive conclusions❌ Psychological framing❌ Modern analogies❌ UI instructions❌ Emotional or motivational language
Metadata defines identity, not meaning.

5. INTERNAL CONTENT SEPARATION (STRICT)
Each verse file may contain only canonical layers.
Recognized Sections
	1	Sanskrit (primary)
	2	Transliteration (IAST)
	3	Word meanings (optional)
	4	Translation (editorial, humble)

Forbidden Inside Verse Files
❌ Commentary❌ Application❌ Guidance❌ Moral exhortation❌ Life advice
All interpretation lives outside the verse atom.

6. IMMUTABILITY RULES
6.1 Immutable Forever
Once published, the following must never change:
• Sanskrit text• Verse numbering• Structural placement• Canonical attribution
Corrections may occur only for transcription errors and must be logged.

6.2 Mutable (Subordinate Layers)
The following may evolve carefully:
• Translation wording• Theme assignment• Life-context tagging• Cross-references
These remain forever subordinate to Sanskrit.

7. CANON VS VIEW (CRITICAL DISTINCTION)
Canon
• Exists independently of UI• Lives in src/content/• Is permanent and stable
Views
• Library pages• Study paths• Guidance overlays• Community programs
Views assemble canon.Views never modify canon.

8. EXPANSION RULES (FUTURE-PROOF)
When adding new texts:
	1	Verify canonical legitimacy
	2	Create a new bounded text namespace
	3	Preserve traditional structure
	4	Follow atomic verse rule
	5	Never shortcut structure for speed
Expansion must favor clarity over quantity.

9. FAILURE MODES THIS DOCTRINE PREVENTS
This doctrine explicitly prevents:
• Blog-style scripture• Feed-based consumption• Popularity ranking• Opinion masquerading as śāstra• UI-driven distortion• Algorithmic re-ordering of canon
If such features appear, VKAD-01 has been violated.

10. CLOSING PRINCIPLE
This platform is not a website.It is a custodial system for sacred knowledge.
Every future decision must ask:
“Does this preserve the dignity, authority, and silence of the canon?”
If the answer is not an unqualified yes, the decision is rejected.

End of VKAD-01 — Canon, Scripture & Atomic Authority
