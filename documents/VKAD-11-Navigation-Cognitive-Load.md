# VKAD-11 — Navigation & Cognitive Load Doctrine  
*“The path must be felt, not figured out.”*

---

## 0. Status & Scope

**Doctrine Level:** Constitutional  
**Applies To:** All navigation, menus, routing, and structural UI  
**Overrides:** Framework defaults, marketing UX, “discoverability hacks”

VKAD-11 governs:
- how users move
- how many choices they see
- how orientation is preserved
- how confusion is prevented

---

## 1. Core Principle

> **Navigation must reduce thinking, not invite exploration.**

Vedic Skills is not a maze.  
It is not a catalog.  
It is not a feed.

Navigation exists to:
- orient
- reassure
- gently advance

Never to impress.

---

## 2. The Three-Layer Navigation Model (Mandatory)

All navigation must belong to **one and only one** layer.

### 2.1 Layer One — Global Orientation

Purpose: “Where am I, overall?”

Examples:
- Library
- Study
- Guidance
- Community
- About

Rules:
- Appears once, consistently
- Never changes per page
- No nesting beyond one level
- No icons without text

This layer answers *identity*, not action.

---

### 2.2 Layer Two — Contextual Path

Purpose: “Where am I within this domain?”

Examples:
- Bhagavad-gītā → Chapter 2 → Verse 47
- Study → Courses → Foundations
- Guidance → Householder → Responsibilities

Rules:
- Always visible
- Always textual
- Always hierarchical
- Must read like a sentence, not a menu

Breadcrumbs belong **only** here.

---

### 2.3 Layer Three — Local Movement

Purpose: “What is the next natural step?”

Examples:
- Previous / Next verse
- Expand commentary
- View related concept

Rules:
- Minimal
- Directional
- Never branching
- Never overwhelming

This layer must never present more than **two primary choices**.

---

## 3. Cognitive Load Limits (Hard Limits)

These limits are **absolute**, not guidelines.

### 3.1 Choice Limits

- Global menu items: max **7**
- Sidebar items: max **5**
- Inline actions: max **2**
- Simultaneous visible menus: **1**

If more are needed, the structure is wrong.

---

### 3.2 Depth Limits

- Navigation depth: max **4 levels**
- Submenu nesting: max **1**
- Cross-domain jumps: discouraged, must be explicit

If deeper structure exists, it must be:
- implicit
- progressive
- system-driven

---

## 4. The “No Orphan Page” Rule

Every page must answer these three questions **without searching**:

1. Where am I?
2. How did I get here?
3. Where can I go next?

If any page fails this, it violates VKAD-11.

---

## 5. Navigation Silence in Reading Mode

When in **Library → Reading**:

- Global navigation collapses
- Mega menus are disabled
- Only orientation breadcrumbs remain
- Only next / previous movement is allowed

Reading is a **linear act**.

Exploration belongs elsewhere.

---

## 6. Mega Menu Doctrine (If Used)

Mega menus are **dangerous** and must obey strict rules.

Allowed only for:
- Canonical structure (e.g., Scriptures → Smṛti → Gītā)
- Departmental overviews (Vibhāgas)

Rules:
- Must be textual
- Must follow canonical order
- Must not exceed screen height
- Must close on navigation

If a mega menu becomes exploratory, it must be removed.

---

## 7. Search Is Not Navigation

Search is **escape**, not movement.

Rules:
- Search does not replace structure
- Search results must show context (path)
- Search must never be the primary way to move

If users rely on search to orient, navigation has failed.

---

## 8. Backward Safety Rule

Users must always be able to:
- go back
- retrace steps
- return to known ground

Therefore:
- No modal-only navigation
- No dead ends
- No forced flows

Freedom is preserved by **reversibility**.

---

## 9. Mobile Navigation Doctrine

Mobile does not simplify rules — it **intensifies them**.

Rules:
- No hamburger menus with more than 5 items
- No hidden deep navigation
- No gesture-only paths
- Text labels always visible

Mobile is not “lite desktop.”  
It is **focused desktop**.

---

## 10. Enforcement Mechanisms

VKAD-11 is enforced by:

- Layout ownership (`Layout.astro`, `ReadingLayout.astro`)
- Menu audits
- Breadcrumb validation
- Navigation tests (future)
- Architectural review authority

Any navigation violating these rules must be simplified, not patched.

---

## 11. Closing Statement

> **A good path feels obvious in retrospect.  
> A bad path demands explanation.**

If a user needs instruction to navigate, the system has failed.

Navigation must feel:
- calm
- inevitable
- humane

---

*End of VKAD-11*
