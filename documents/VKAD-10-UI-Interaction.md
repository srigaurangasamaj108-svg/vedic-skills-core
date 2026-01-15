# VKAD-10 — UI Interaction Doctrine  
*“Interaction must serve understanding, never excitement.”*

---

## 0. Status & Scope

**Doctrine Level:** Constitutional  
**Applies To:** Entire Vedic Skills ecosystem  
**Audience:** Architects, UI engineers, reviewers, future contributors  
**Overrides:** Any framework default that contradicts this doctrine

VKAD-10 governs **how and when a user may interact** with the system.

It exists to prevent:
- sensory overload
- gamification drift
- modern UX contamination
- performative spirituality

---

## 1. Core Principle

> **The interface must remain quieter than the content.**

The user does not “use” Vedic Skills.  
The user **approaches** it.

Therefore:
- interaction is **permissioned**
- animation is **restrained**
- feedback is **informational, not emotional**

---

## 2. Interaction Categories (Only These Are Allowed)

All UI interactions must fall into **exactly one** of the following categories.

### 2.1 Essential Interactions (Always Allowed)

Purpose: enable *access*, not engagement.

Examples:
- Navigation (Next verse / Previous verse)
- Language toggle (Sanskrit / Translation)
- Commentary visibility toggle
- Search input
- Accessibility controls (font size, contrast)

Rules:
- No animation beyond 150ms
- No sound
- No color change except neutral contrast
- No celebratory feedback

---

### 2.2 Contextual Interactions (Conditionally Allowed)

Purpose: reveal **additional meaning**, not action.

Examples:
- Concept tooltips (e.g., *dharma*)
- Cross-references (related verses, texts)
- Commentary accordion expand/collapse
- Footnote reveal

Rules:
- Must be user-initiated
- Must not auto-open
- Must not obscure the main text
- Must close easily and predictably

---

### 2.3 Deferred Interactions (Feature-Flagged)

Purpose: community or progress features that are **non-canonical**.

Examples:
- Bookmarks
- Reading history
- Notes
- Community discussions
- Course enrollment

Rules:
- Must be OFF by default
- Must be gated by `features.json`
- Must never appear in Library reading mode
- Must never interrupt scripture flow

---

### 2.4 Forbidden Interactions (Never Allowed)

These are **explicitly banned**, regardless of trend or framework support.

❌ Likes, reactions, emojis  
❌ Infinite scroll in Library  
❌ Auto-play audio  
❌ Popups while reading scripture  
❌ Achievement badges, streaks, progress meters  
❌ “Recommended for you” in Library  
❌ Dark patterns (nudges, urgency, FOMO)

Violation = architectural failure.

---

## 3. Reading Mode Doctrine (Non-Negotiable)

When a user is inside **Library → Reading**, the system enters:

> **Silence Mode**

### 3.1 Silence Mode Rules

- No sidebars
- No banners
- No notifications
- No calls to action
- No community affordances
- No course upsells

Only the following may exist:
- Text
- Commentary toggles
- Navigation arrows
- Appearance controls

This is enforced by `ReadingLayout.astro`.

---

## 4. Animation & Motion Law

Animation exists **only to clarify state change**.

### 4.1 Allowed Motion
- Accordion expand/collapse
- Focus transitions
- Menu open/close

### 4.2 Forbidden Motion
- Bounce
- Parallax
- Continuous motion
- Decorative transitions
- Attention-seeking easing

**Default easing:** `ease-out`  
**Max duration:** 150–200ms  
**Preferred:** none

---

## 5. Visual Hierarchy of Attention

The UI must obey this **fixed priority order**:

1. Scripture text
2. Translation
3. Commentary
4. Cross-references
5. Navigation
6. System controls

UI elements **must not compete** with scripture typography in:
- weight
- contrast
- color
- spacing

If an element visually competes, it is wrong.

---

## 6. Component Responsibility Rule

Components must be **pure**.

- Components do not decide *when* to appear  
- Components do not fetch unrelated data  
- Components do not enforce business logic  

Those belong to:
- `layouts/` (structure)
- `lib/` (logic)
- `features.ts` (availability)

Violation example:
> A VerseBlock deciding to show a community link

---

## 7. Progressive Disclosure Law

Nothing advanced is shown unless explicitly requested.

Examples:
- Commentary collapsed by default
- Advanced taxonomy hidden
- Scholarly metadata behind toggle
- Community links invisible in Library

Beginner view is the default.  
Scholar view is opt-in.

---

## 8. Accessibility Is Not Optional

Accessibility is **part of silence**, not a feature.

Mandatory:
- Keyboard navigation
- Focus states
- High-contrast support
- Screen-reader friendly markup
- No information conveyed by color alone

---

## 9. Enforcement Mechanisms

This doctrine is enforced through:

- Layout separation (`ReadingLayout`, `AppliedLayout`)
- Component audits
- Feature flags
- Build-time validation (future: `validate-ui-doctrine.js`)
- Code review authority

If UI violates VKAD-10, it must be removed or rewritten.

---

## 10. Closing Statement

> **Vedic Skills is not an app.  
> It is not a feed.  
> It is not a platform for engagement.**

It is a **place of encounter**.

UI exists only to **get out of the way**.

---

*End of VKAD-10*
