# ARCHITECTURE.md  
*Derived Technical Architecture of the Vedic Skills Platform*

---

## 0. Status & Authority

**Document Type:** Derived (Non-Constitutional)  
**Subordinate To:** VKAD-01 → VKAD-14  
**Purpose:** Translate doctrine into implementable engineering structure

This document may evolve with technology.  
VKAD doctrines do not.

If a conflict arises:
→ **Doctrine overrides architecture**.

---

## 1. Architectural Philosophy

The Vedic Skills platform is **not a website**.  
It is a **Knowledge Graph Platform rendered as static-first pages with interactive islands**.

Core principles:
- Canon is immutable
- Meaning is layered
- Interaction is restrained
- Community is contained
- Safety overrides convenience

These principles are enforced structurally, not by convention.

---

## 2. High-Level System Layers

┌──────────────────────────────┐│ Presentation Layer (Pages) │ ← Astro routes, layouts├──────────────────────────────┤│ UI System (Components) │ ← Atomic Design├──────────────────────────────┤│ Logic Layer (Lib & Scripts) │ ← Graph, search, flags├──────────────────────────────┤│ Data Layer (Content) │ ← Normalized atoms├──────────────────────────────┤│ Static Assets (Public) │ ← PDFs, fonts└──────────────────────────────┘
---

## 3. Data Layer — `src/content/`  
*(VKAD-01, VKAD-02, VKAD-05, Secret #1)*

### 3.1 Purpose
- Store **truth**, not presentation
- Enforce **atomic normalization**
- Enable **graph relationships**

### 3.2 Core Collections

src/content/├── verses/ # Immutable canonical anchors├── commentaries/ # Acarya-specific interpretations├── purports/ # Modern explanatory layers├── translations/ # Language-specific renderings├── entities/ # Knowledge graph objects│ ├── persons/│ ├── concepts/│ ├── places/│ └── events/├── compilations/ # Thematic syntheses (non-canonical)├── courses/ # Study layer content├── guidance/ # Life-stage reflective material└── community/ # Metadata for events & chapters
### 3.3 Key Rules
- No collection mirrors a URL
- No file contains multiple knowledge roles
- All relationships use references, not duplication

---

## 4. Logic Layer — `src/lib/` & `src/scripts/`  
*(Secret #2, #5)*

### 4.1 Runtime Logic (`src/lib/`)

src/lib/├── graph.ts # Builds relationship indexes├── search.ts # Readiness-aware search├── taxonomy.ts # Canonical vocabularies├── features.ts # Feature flags└── roles.ts # Readiness & role resolution
Responsibilities:
- Build reverse lookups (verse → courses → guidance)
- Enforce disclosure rules programmatically
- Keep UI components dumb

---

### 4.2 Build-Time Scripts (`src/scripts/`)

src/scripts/├── atomizer.ts # Split raw texts into atoms├── validate-doctrine.ts # Enforce VKAD rules├── build-graph.ts # Precompute graph indexes└── generate-index.ts # Search index generation
Build fails if:
- prescriptive language is detected
- forbidden UI markers appear
- canonical structure is violated

---

## 5. UI System — `src/components/`  
*(VKAD-03, VKAD-10, Secret #3)*

### 5.1 Atomic Design Hierarchy

components/├── atoms/ # Typography, buttons, icons├── molecules/ # VerseCard, AuthorBadge├── organisms/ # CommentarySection, Search└── templates/ # ReadingLayout, GuidanceLayout
### 5.2 Rules
- Atoms know nothing about data
- Organisms may fetch via props only
- Templates enforce VKAD layout laws
- No component bypasses disclosure logic

---

## 6. Routing Layer — `src/pages/`  
*(Secret #4)*

Pages **assemble**, never contain knowledge.

pages/├── index.astro├── library/│ └── [...slug].astro # Universal Reader├── study/│ ├── index.astro│ └── courses/[slug].astro├── guidance/│ └── [lifeStage]/index.astro└── community/└── index.astro
### Universal Reader Flow:
1. Parse URL
2. Fetch verse atom
3. Fetch related commentaries
4. Resolve entities
5. Render via `ReadingLayout`

---

## 7. Hybrid Rendering Model  
*(Secret #4)*

| Layer | Rendering |
|---|---|
| Scripture | Static HTML |
| Commentary Toggle | Astro island |
| Search | Client-side island |
| Community Feed | Live data (future) |

Files store **truth**.  
Databases store **activity** only.

---

## 8. Static Assets — `public/`  
*(VKAD-04)*

public/├── pdfs/│ ├── canonical/ # Immutable sources│ └── thematic/ # Research & compilations├── fonts/ # Self-hosted typography└── icons/
PDFs are **referenced**, never parsed.

---

## 9. Enforcement & Governance Hooks

Architecture supports:
- Feature flag shutdowns
- Doctrine validation at build
- Safe rollback
- Incremental rollout

Nothing ships without:
- passing doctrine validation
- checklist review

---

## 10. Non-Goals (Explicit)

The architecture does **not** attempt to:
- optimize engagement
- personalize doctrine
- infer readiness
- automate authority
- replace human judgment

---

## 11. Summary Flow

Author writes atom →Doctrine validates →Graph indexes →Page assembles →Component renders →User reads quietly
If any step adds noise,  
the architecture has failed.

---

## 12. Closing Statement

> **Architecture must disappear behind meaning.**

When users notice the system,  
it has already spoken too loudly.

---

*End of Architecture.md*
