# DESIGN_UI_BLUEPRINT.md  
*Component, Layout & Page Blueprint for the Vedic Skills Platform*

---

## 0. Status & Authority

**Document Type:** Operational Blueprint  
**Subordinate To:**  
- VKAD-01 → VKAD-14  
- Architecture.md  
- DESIGN_UI_DOCTRINE.md  

This document may evolve.  
Doctrines do not.

If a component violates doctrine → the component is removed or redesigned.

---

## 1. Blueprint Philosophy

> **Blueprint defines form, not meaning.**

Meaning lives in:
• scripture  
• doctrine  
• guidance boundaries  

Blueprint exists to:
• standardize UI components  
• prevent duplication  
• enforce restraint  
• support scale  

---

## 2. Atomic Design System (Mandatory)

All UI components must belong to **exactly one layer**.

Atoms → Molecules → Organisms → Templates → Pages
No cross-layer shortcuts allowed.

---

## 3. ATOMS — `src/components/atoms/`

### Purpose
- Smallest indivisible visual units
- No logic
- No data fetching
- No doctrine awareness

### Required Atoms

| Component | Responsibility |
|---|---|
| `Text.astro` | Typography enforcement |
| `SanskritText.astro` | Canonical verse styling |
| `Button.astro` | Neutral, low-emphasis controls |
| `Divider.astro` | Section separation |
| `Icon.astro` | Minimal navigation icons |
| `Tag.astro` | Non-interactive labels |
| `DisclosureToggle.astro` | Explicit expand/collapse control |

**Forbidden in Atoms:**
❌ state  
❌ fetch  
❌ interpretation  

---

## 4. MOLECULES — `src/components/molecules/`

### Purpose
- Combine atoms into meaningful UI blocks
- Still presentation-only
- Accept data via props

### Required Molecules

| Component | Composition |
|---|---|
| `VerseBlock.astro` | SanskritText + Translation Text |
| `AuthorBadge.astro` | Text + optional lineage |
| `MetaLine.astro` | muted metadata display |
| `LanguageToggle.astro` | DisclosureToggle + labels |
| `ReferenceLink.astro` | Inline verse/concept link |

**Rules:**
- Molecules never decide *what* to show
- They only render *what is passed*

---

## 5. ORGANISMS — `src/components/organisms/`

### Purpose
- Complex UI sections
- May contain logic
- May manage disclosure state
- Still **content-agnostic**

### Required Organisms

| Component | Responsibility |
|---|---|
| `CommentarySection.astro` | Collapsible acarya commentaries |
| `GlobalSearch.astro` | Readiness-aware search |
| `VerseNavigation.astro` | Sequential verse navigation |
| `ViewControls.astro` | Toggle translation/commentary |
| `AudioPlayer.astro` | Optional verse recitation |
| `MegaMenu.astro` | Cascading navigation (VKAD-11) |

**Rules:**
- Organisms obey VKAD-12 strictly
- No auto-expansion
- No popularity logic

---

## 6. TEMPLATES — `src/components/templates/`

### Purpose
- Enforce doctrinal layout rules
- Decide **what sections are allowed**
- No business logic

### Mandatory Templates

| Template | Governs |
|---|---|
| `ReadingLayout.astro` | Scripture reading (VKAD-03) |
| `StudyLayout.astro` | Course-based study |
| `GuidanceLayout.astro` | Life-stage reflection (VKAD-13) |
| `CommunityLayout.astro` | Chapter & seva spaces (VKAD-14) |
| `AppliedLayout.astro` | Home & overview pages |

Templates decide:
- what is allowed on the page
- what is excluded
- disclosure ceilings

---

## 7. PAGES — `src/pages/`

### Purpose
- URL mapping only
- Assemble data + template + components
- No knowledge creation

### Core Page Archetypes

pages/├── index.astro # Welcome / Orientation├── library/[...slug].astro # Universal Reader├── study/index.astro # Study hub├── study/courses/[slug].astro # Course detail├── guidance/[lifeStage]/index.astro├── community/index.astro└── community/[chapter]/index.astro
**Rules:**
- Pages never embed doctrine
- Pages never fetch external truth
- Pages assemble only

---

## 8. Typography Blueprint (Enforced)

### Text Roles

| Role | Component |
|---|---|
| Verse | `SanskritText` |
| Translation | `Text` (serif) |
| Commentary | `Text` (muted) |
| Guidance | `Text` (soft contrast) |
| UI | `Text` (sans-serif) |

No custom styles allowed at page level.

---

## 9. Interaction Blueprint

Allowed interactions:
- toggle
- expand/collapse
- navigate
- search

Forbidden:
❌ infinite scroll  
❌ gestures  
❌ reactions  
❌ animations for delight  

---

## 10. Disclosure Blueprint (VKAD-12)

| Layer | Default State |
|---|---|
| Verse | visible |
| Translation | visible |
| Commentary | collapsed |
| Metadata | hidden |
| Themes | hidden |
| Guidance | separate route |
| Community | separate route |

No page may override this.

---

## 11. Error & Empty States

Error states must:
- be calm
- be textual
- avoid blame
- suggest exit or simplification

No dramatic language.

---

## 12. What This Blueprint Explicitly Avoids

- Page-specific components
- Feature-driven UI
- Engagement optimization
- Personalization engines
- Gamification

These are **architectural smells**.

---

## 13. How to Extend the UI Safely

To add a new feature:
1. Identify governing VKAD
2. Decide readiness state
3. Choose component layer
4. Add feature flag
5. Update violation checklist

If unsure → do not add.

---

## 14. Closing Statement

> **Blueprint gives shape to restraint.**

When the system feels calm,
the blueprint has succeeded.

---

*End of DESIGN_UI_BLUEPRINT.md*
