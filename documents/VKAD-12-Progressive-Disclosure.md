# VKAD-12 — Progressive Disclosure Doctrine  
*“Meaning is revealed by readiness, not by availability.”*

---

## 0. Status & Scope

**Doctrine Level:** Constitutional  
**Applies To:** Content visibility, metadata exposure, UI complexity, feature access  
**Overrides:** “Power-user first” design, maximalist interfaces, academic default bias

VKAD-12 governs **when and how complexity is revealed** to the user.

It exists to protect:
• beginners from overwhelm  
• scripture from abstraction-first reading  
• scholars from oversimplification  
• the system from premature misuse  

---

## 1. Core Principle

> **Nothing advanced is shown before it is needed.  
Nothing essential is ever hidden.**

Availability ≠ visibility.  
Depth ≠ accessibility.

---

## 2. The Four Readiness States (Mandatory Model)

Every user experience must assume **one of four readiness states**.
The system must *never* assume a higher state by default.

---

### 2.1 State I — Encounter (Default)

**User condition:**  
• first-time reader  
• seeker  
• general visitor  

**System obligation:**  
• protect attention  
• reduce choice  
• emphasize canon  

**Visible:**
- Verse text
- Translation
- Linear navigation
- Minimal orientation

**Hidden:**
❌ commentary by default  
❌ themes  
❌ taxonomy  
❌ life-stage overlays  
❌ community features  

This state enforces **scripture-first humility**.

---

### 2.2 State II — Study (Intentional)

**User condition:**  
• opted into learning  
• enrolled in a course  
• explicitly expanded content  

**System obligation:**  
• reveal structure  
• support understanding  
• maintain discipline  

**Visible:**
- Commentary (collapsed by default)
- Concept tooltips
- Study paths
- Controlled cross-links

**Hidden:**
❌ community interaction  
❌ personal overlays  
❌ recommendation engines  

Study is **structured depth**, not exploration.

---

### 2.3 State III — Reflection (Contextual)

**User condition:**  
• life-stage selection  
• guidance context  
• emotional or ethical inquiry  

**System obligation:**  
• slow the user  
• constrain claims  
• add safety  

**Visible:**
- Guidance modules
- Life-stage overlays
- Disclaimers
- Reflective prompts

**Hidden:**
❌ canonical reclassification  
❌ authority claims  
❌ universal prescriptions  

Reflection must never masquerade as doctrine.

---

### 2.4 State IV — Scholarship (Explicit)

**User condition:**  
• opted-in advanced view  
• editor / scholar role  
• comparative study  

**System obligation:**  
• expose structure  
• show lineage  
• preserve traceability  

**Visible:**
- Full taxonomy
- Theme inheritance
- Cross-text analysis
- Editorial metadata

This state is **never default** and **never automatic**.

---

## 3. Disclosure Triggers (Explicit Only)

Progression between states occurs **only by explicit user action**.

Allowed triggers:
• clicking “Show commentary”  
• enrolling in a course  
• selecting a life-stage  
• enabling “Scholar view”  

Forbidden triggers:
❌ scrolling depth  
❌ time-on-page  
❌ reading completion  
❌ popularity  
❌ algorithmic inference  

The system never “decides readiness.”

---

## 4. Component-Level Disclosure Rules

Each UI component must declare:
• its minimum readiness state  
• its maximum exposure  

Examples:

- `VerseBlock` → State I  
- `CommentarySection` → State II  
- `GuidancePanel` → State III  
- `TaxonomyExplorer` → State IV  

A component must **fail closed** (remain hidden) if readiness is ambiguous.

---

## 5. Metadata & Taxonomy Visibility

Metadata obeys strict disclosure order:

1. Structural metadata (chapter, verse) — always visible  
2. Translation metadata — visible  
3. Commentary attribution — on expand  
4. Themes / taxonomy — advanced only  
5. Editorial notes — scholar only  

Metadata must never precede text.

---

## 6. Search & Discovery Disclosure

Search results must adapt to readiness:

- State I: verses only  
- State II: verses + commentary  
- State III: guidance surfaced  
- State IV: full graph  

No search view may mix states.

---

## 7. Progressive Disclosure Is Reversible

Users must always be able to:
• collapse content  
• hide overlays  
• return to canon-only view  

No disclosure is permanent.

---

## 8. Feature Flag Alignment

All advanced disclosure features must be:
• feature-flagged  
• role-aware  
• reversible  

No irreversible UX upgrades.

---

## 9. Failure Modes This Doctrine Prevents

This doctrine explicitly prevents:

• beginner overwhelm  
• theme-first reading  
• premature abstraction  
• authority confusion  
• “spiritual Wikipedia syndrome”  
• guidance misapplication  

---

## 10. Enforcement Mechanisms

VKAD-12 is enforced through:

• layout segregation  
• component readiness contracts  
• feature flags  
• code review doctrine checks  
• editorial audits  

Violation requires **simplification**, not explanation.

---

## 11. Closing Statement

> **Wisdom is not hidden.  
It is revealed at the right moment.**

A system that reveals everything at once
reveals nothing at all.

---

*End of VKAD-12*
