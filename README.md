README.md (Starter / Repository Root)
# Vedic Skills

**Vedic Skills** is a doctrine-preserving, scripture-grounded learning platform
designed to transform śāstra into understanding and lived capability
*without distorting authority*.

This repository implements a **law-first architecture**
where meaning cannot drift unnoticed.

---

## 1. What This Project Is

• A **knowledge graph**, not just a website  
• A **scripture-first system**, not a content platform  
• A **skill-enabling framework**, not instruction delivery  
• A **safety-aware design**, not a guru substitute  

---

## 2. Authority Model (Read This First)

All content follows a **strict authority hierarchy**:

0 — Canon (immutable scripture)1 — Gloss / Concept2 — Entity / Circumstance3 — Translation / Commentary4 — Principle5 — Skill6 — Guidance
Each layer:
• depends downward
• never overrides upward
• can be removed independently

---

## 3. Canonical Hierarchy

Canonical sources follow this precedence:

śruti > smṛti > itihāsa > purāṇa > āgama
Hierarchy is:
• machine-readable
• non-polemical
• descriptive, not interpretive

---

## 4. Technology Stack

• Astro (content collections + islands)
• MD / MDX for all atoms
• Zod for schema enforcement
• Node.js scripts for validation
• Git + CI for immutability enforcement

No external CMS.
No runtime doctrine generation.

---

## 5. Folder Overview

src/content/├─ scripture/ # Canon (LEVEL 0)├─ gloss/ # Terms (LEVEL 1)├─ concepts/ # Ideas (LEVEL 1)├─ entities/ # Persons / Places / Events (LEVEL 2)├─ translations/ # Verse translations (LEVEL 3)├─ commentary/ # Interpretations (LEVEL 3)├─ principles/ # Abstract rules (LEVEL 4)├─ skills/ # Trainable capacities (LEVEL 5)└─ guidance/ # Contextual application (LEVEL 6)
Only **Canon** mirrors scriptural taxonomy.
All other layers are epistemic, not textual.

---

## 6. Content Rules (Strict)

• One atom per file  
• No authority mixing  
• All derived content must reference Canon  
• Canon is immutable  
• Guidance is non-prescriptive  

Violations fail the build.

---

## 7. Automation Policy

Automation:
• enforces rules
• scaffolds safely
• validates dependencies

Automation does **not**:
• teach
• guide
• interpret
• advise

AI is a **scribe**, not a guru.

---

## 8. Status

This project is under **active constitutional development**.

Content migration begins only after:
• schemas are locked
• validation is enforced
• authority wiring is complete

---

## 9. How to Work With This Repo

Before adding content:
1. Read `PROJECT_CONSTITUTION.md`
2. Identify the correct authority layer
3. Use the correct atom schema
4. Let validation guide you

If unsure, **stop** and clarify.

---

## 10. Final Note

This system is designed so that:

> Even with good intentions, it cannot accidentally mislead.

That is the standard.

---

_Hare Kṛṣṇa_

