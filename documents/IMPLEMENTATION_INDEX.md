# 🧩 IMPLEMENTATION_INDEX.md  
## Mechanical Enforcement, Taxonomy & Code Contract

**Status:** Authoritative  
**Last reviewed:** 2026-01-15  
**Scope:** Implementation mechanics only (non-doctrinal)

This document defines **how constitutional rules are enforced mechanically in code**.
It exists to allow continuity across time, chats, tools, and contributors **without re-deriving architecture or doctrine**.

If there is a conflict between:
- memory,
- chat history,
- convenience,
- or implementation assumptions,

👉 **This document prevails for code-level interpretation**,  
while doctrine remains governed by `PROJECT_CONSTITUTION.md` and VKAD documents.

---

## 0. Role of This Document

This file answers the question:

> **“How does the system actually enforce what the Constitution and VKADs require?”**

It does **not**:
- introduce doctrine
- reinterpret authority
- justify decisions
- propose changes

It **does**:
- locate enforcement points
- describe contracts
- declare what is frozen
- define what future work may assume as correct

---

## 1. Content Collections & Enforcement Backbone

All content enforcement is handled via **Astro Content Collections + Zod schemas**.

### 1.1 Collection Registry (Single Source)

**File**
src/content/config.ts
**Role**
- Registers all content collections
- Binds each collection to its schema
- Defines the authoritative mapping between folder → authority layer

No collection exists unless it is registered here.

---

### 1.2 Collection → Authority Mapping

| Collection Folder | Authority Level |
|------------------|-----------------|
| `scripture` | LEVEL 0 — Canon |
| `gloss` | LEVEL 1 — Gloss |
| `concepts` | LEVEL 1 — Concept |
| `entities` | LEVEL 2 — Entity / Circumstance |
| `translations` | LEVEL 3 — Translation |
| `commentary` | LEVEL 3 — Commentary |
| `principles` | LEVEL 4 — Principle |
| `skills` | LEVEL 5 — Skill |
| `guidance` | LEVEL 6 — Guidance |

Authority direction is **downward only**.

---

## 2. Schemas (Zod) — Frozen Contracts

Each authority layer has a **dedicated schema**.
Schemas are the *primary enforcement mechanism*.

### 2.1 Schema Locations

src/content/├─ scripture/schema.ts├─ gloss/schema.ts├─ concepts/schema.ts├─ entities/schema.ts├─ translations/schema.ts├─ commentary/schema.ts├─ principles/schema.ts├─ skills/schema.ts└─ guidance/schema.ts
### 2.2 Schema Guarantees

Schemas enforce:
- one atom per file
- required references
- authority isolation
- immutability where applicable
- prohibition of empty placeholders at build time

❗ **Schemas are frozen** unless constitutional doctrine changes.

---

## 3. Folder Taxonomy (Authoritative & Non-Negotiable)

src/content/├─ scripture/ # LEVEL 0 — Canon (mirrors śāstra taxonomy only)├─ gloss/ # LEVEL 1 — Lexical meaning├─ concepts/ # LEVEL 1 — Semantic patterns├─ entities/ # LEVEL 2 — Persons / Places / Events (may be empty)├─ translations/ # LEVEL 3 — One translation per verse├─ commentary/ # LEVEL 3 — Interpretive layers (optional)├─ principles/ # LEVEL 4 — Declarative truths├─ skills/ # LEVEL 5 — Human capacities└─ guidance/ # LEVEL 6 — Contextual, non-prescriptive guidance
### 3.1 Canon-Specific Rule

Only `scripture/` mirrors:
- śruti
- smṛti
- itihāsa
- purāṇa
- āgama

All other layers are **epistemic**, not textual.

---

## 4. Frontmatter & Atom Rules

### 4.1 Atomization Law (Mechanical)

- One file = one atom
- No mixing of authority layers
- No implicit relationships
- All relationships must be explicit references

### 4.2 Canon-Specific Constraints

Canon files:
- contain no JSX
- import nothing
- include no interpretation
- are immutable once committed

### 4.3 Derived Layer Constraints

Derived atoms must:
- reference lower layers explicitly
- never reference higher layers
- never embed guidance inside skill or principle
- never leave placeholders at build time

---

## 5. Automation & Scripts

Automation acts as a **gatekeeper**, never an author.

### 5.1 Scaffolding Scripts

Located in:
scripts/
Current scaffolds include:
- `create-translation.ts`
- `create-gloss.ts`
- `create-concept.ts`
- `create-principle.ts`
- `create-skill.ts`
- `create-guidance.ts`

**Scaffolds may:**
- create files
- insert required fields
- enforce naming conventions

**Scaffolds may not:**
- invent doctrine
- generate meaning
- fill references automatically

---

### 5.2 Dependency Graph Validator

**File**
scripts/validate-dependency-graph.ts
**Function**
- Reads MD / MDX directly from disk
- Independent of Astro runtime
- Enforces:

  - downward-only authority
  - no missing dependencies
  - no cycles

This validator is the **last line of defense** against silent drift.

---

## 6. Build & Validation Contract

The following commands must **always** pass unchanged:

```bash
npm run validate:graph
npm run dev
If either fails:
	•	content is invalid
	•	authority boundaries are broken
	•	or scaffolding was misused
Fix the violation before proceeding.

7. Change Control Rules
The following actions are disallowed without explicit constitutional amendment:
	•	modifying schemas
	•	changing authority levels
	•	altering dependency rules
	•	introducing implicit relationships
	•	allowing automation to author content
UI, navigation, and rendering work must:
	•	read from content only
	•	never mutate content
	•	never infer meaning

8. Intended Use in New Chats
In a new chat, this document should be invoked as:
“IMPLEMENTATION_INDEX.md defines the mechanical enforcement and code contracts.Treat all listed schemas, scripts, and mappings as correct and frozen.”
This prevents:
	•	redesign of working systems
	•	re-litigation of solved problems
	•	accidental overreach by AI or contributors

9. Final Note to Future Maintainers
This system is designed so that:
	•	doctrine is preserved by structure
	•	meaning cannot drift silently
	•	expansion is safe but constrained
	•	authority remains traceable
If something feels hard to change, that is intentional.

End of IMPLEMENTATION_INDEX.md
---

