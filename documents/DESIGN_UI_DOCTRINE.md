# DESIGN_UI_DOCTRINE.md  
*Visual & Interaction Law for the Vedic Skills Platform*

---

## 0. Status & Authority

**Document Type:** Derived Doctrine (UI Law)  
**Subordinate To:** VKAD-01 → VKAD-14  
**Depends On:** Architecture.md  
**Audience:** Designers, frontend developers, reviewers

If a UI decision conflicts with:
- VKAD doctrines → VKAD wins
- Architecture.md → Doctrine wins
- Aesthetic preference → Doctrine wins

---

## 1. Core UI Principle

> **The interface must disappear in the presence of meaning.**

The UI exists to:
• reduce friction  
• protect attention  
• prevent misinterpretation  

The UI does **not** exist to:
❌ impress  
❌ engage  
❌ entertain  
❌ guide behavior  

---

## 2. Visual Silence Doctrine (Non-Negotiable)

The platform follows **Visual Silence**.

### 2.1 Allowed Visual Signals
- hierarchy through spacing
- emphasis through weight
- clarity through alignment
- restraint through repetition

### 2.2 Forbidden Visual Signals
❌ bright colors  
❌ gradients for emphasis  
❌ shadows for importance  
❌ animations for attention  
❌ decorative imagery near scripture  

If a design “feels modern,” it is suspect.

---

## 3. Typography Doctrine

Typography is the **primary interface**.

### 3.1 Typeface Roles

| Role | Typeface | Purpose |
|---|---|---|
| Canonical Sanskrit | Serif (e.g., Gentium) | Gravity, continuity |
| Translation | Serif (same family) | Semantic proximity |
| Commentary | Neutral Serif | Interpretive layer |
| UI Controls | Sans-serif (e.g., Inter) | Functional clarity |

Rules:
- No mixing families within a block
- No decorative fonts anywhere
- Line length always favors reading over density

---

### 3.2 Typographic Hierarchy (Strict)

Verse Text (primary)↓Translation↓Commentary (collapsed)↓Metadata (hidden by default)
Typography must encode this hierarchy without icons or labels.

---

## 4. Color Doctrine

Color is **structural**, not expressive.

### 4.1 Palette Rules
- Monochrome base
- One muted accent only
- Accent never used on scripture text
- Error states are textual, not red

Color must never signal:
❌ urgency  
❌ reward  
❌ hierarchy  

---

## 5. Layout Doctrine

### 5.1 Reading Layout (VKAD-03)

Rules:
- Single-column text
- No sidebar in reading mode
- Maximum width constrained
- Generous vertical rhythm

Scripture pages must feel **still**.

---

### 5.2 Guidance Layout (VKAD-13)

Rules:
- Softer contrast
- Slower rhythm
- Clear disclaimers
- No authoritative styling

Guidance must feel **supportive, not instructional**.

---

### 5.3 Community Layout (VKAD-14)

Rules:
- Neutral tone
- No prominence for speakers
- No visual hierarchy among participants
- Time-based ordering only

Community must feel **modest and contained**.

---

## 6. Interaction Doctrine

### 6.1 Interaction Must Be Intentional

Allowed:
- click to reveal
- click to collapse
- explicit toggles

Forbidden:
❌ hover-revealed meaning  
❌ auto-expansion  
❌ gesture-based shortcuts  
❌ scroll-triggered UI  

The system never surprises the user.

---

### 6.2 Reversibility Rule

Every interaction must be:
- undoable
- collapsible
- dismissible

No UI state is permanent.

---

## 7. Progressive Disclosure Enforcement (VKAD-12)

UI must enforce readiness states:

| State | UI Behavior |
|---|---|
| Encounter | Minimal, text-first |
| Study | Controlled expansion |
| Reflection | Reduced choice |
| Scholarship | Explicit opt-in |

UI must never infer readiness.

---

## 8. Component Responsibility Boundaries

Components must obey these laws:

- Atoms → visual only
- Molecules → structure only
- Organisms → logic only
- Templates → doctrine enforcement

No component may:
❌ fetch doctrine  
❌ bypass disclosure  
❌ alter meaning  

---

## 9. Iconography Doctrine

Icons are **secondary language**.

Rules:
- Icons never replace text
- Icons never appear near scripture
- Icons only for navigation or controls

If text suffices, icons are removed.

---

## 10. Motion Doctrine

Motion is **discouraged by default**.

Allowed:
- state transition fade (subtle)
- expand/collapse easing (slow)

Forbidden:
❌ bounce  
❌ parallax  
❌ attention loops  
❌ celebratory motion  

Stillness is preferred.

---

## 11. Accessibility & Respect

Accessibility is not optional.

Rules:
- high contrast for text
- readable at low brightness
- no reliance on color alone
- keyboard navigable

Respect includes:
- no dark patterns
- no urgency cues
- no emotional manipulation

---

## 12. Review Checklist (UI-Specific)

Before shipping UI changes:
- ⬜ Does this reduce attention cost?
- ⬜ Does this respect disclosure order?
- ⬜ Does this remove temptation to skim?
- ⬜ Would this still work without color?

If unsure → simplify.

---

## 13. Closing Statement

> **The best UI is one the reader forgets.**

If the interface competes with the text,  
it has already failed.

---

*End of DESIGN_UI_DOCTRINE.md*
