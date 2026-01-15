# VKAD-03 — Reading Experience & UI Doctrine
*(Revised · Constitution-Locked)*

This doctrine governs **how śāstra is presented to the reader**.

It exists to ensure that:
• Canon is encountered **before explanation**
• Meaning unfolds **without coercion**
• UI never becomes an interpreter
• Cognitive load is minimized
• Reverence is preserved even in modern interfaces

The UI must **serve śāstra**, never mediate it.

---

## 1. Foundational Principle

The Reading Experience must respect this invariant:

> **The reader must always be able to encounter Canon
> directly, silently, and without interference.**

All UI decisions flow from this.

---

## 2. Authority-Aligned Reading Stack (UI View)

The UI must reflect the authority stack **visually and behaviorally**:

LEVEL 0 — Canon (CKA)LEVEL 1 — Gloss / ConceptLEVEL 2 — Entity / CircumstanceLEVEL 3A — Synonym (Padārtha)LEVEL 3B — TranslationLEVEL 3C — CommentaryLEVEL 4 — PrincipleLEVEL 5 — SkillLEVEL 6 — Guidance
### UI Rule

Higher levels:

• are optional  
• are collapsible  
• are never auto-expanded  
• must never replace lower levels  

---

## 3. Canon Presentation (LEVEL 0)

### 3.1 Canon Is Primary

Canonical verse presentation must be:

• visually dominant  
• uninterrupted  
• free of UI controls within the verse block  

### Prohibitions

❌ No inline tooltips  
❌ No highlights  
❌ No popovers  
❌ No translations embedded in the verse  

The verse must appear as **text, not content**.

---

### 3.2 Canon Modes

The UI may allow:

• Devanāgarī only  
• Transliteration toggle (optional, non-default)  

But **never** translation-only mode.

---

## 4. Lexical Assistance (LEVELS 1 & 3A)

### 4.1 Gloss (LEVEL 1)

Gloss is:

• conceptual  
• cross-verse  
• non-intrusive  

### UI Behavior

• Appears as **optional side panel**  
• Never inline  
• Never auto-shown  

Gloss answers:

> “What does this word generally mean in śāstra?”

---

### 4.2 Synonyms / Padārtha (LEVEL 3A)

Synonyms are **verse-specific**.

### UI Behavior

• Collapsible section below Canon  
• Clearly labeled “Word-by-Word Meaning”  
• Shown only on user intent  

### Prohibitions

❌ No philosophical explanation  
❌ No generalization  
❌ No automatic expansion  

Synonyms answer:

> “How are the words of *this verse* traditionally mapped?”

---

## 5. Interpretation Layers (LEVEL 3B & 3C)

### 5.1 Translation (LEVEL 3B)

Translation is **assistive**, not primary.

### UI Rules

• Appears below Synonyms  
• One translator visible at a time  
• Translator identity always visible  
• Never replaces Canon  

Translation answers:

> “How has this verse been rendered linguistically?”

---

### 5.2 Commentary (LEVEL 3C)

Commentary is **explicit interpretation**.

### UI Rules

• Collapsible by default  
• Grouped by commentator  
• Never auto-expanded  
• Clearly attributed  

### Additional Constraint

If commentary exists in:

• Sanskrit  
• Translation  

They must be **separate toggles**.

The UI must never imply that commentary == canon.

---

## 6. Abstraction & Application (LEVELS 4–6)

### 6.1 Principles (LEVEL 4)

Principles are **abstract truths**, not advice.

### UI Rules

• Appear after interpretation layers  
• Presented as short declarative statements  
• No instructional language  

---

### 6.2 Skills (LEVEL 5)

Skills represent **capacity**, not instruction.

### UI Rules

• Shown only if user opts into “Applied View”  
• Presented as descriptive capability  
• No steps, no exercises  

---

### 6.3 Guidance (LEVEL 6)

Guidance is the **most sensitive layer**.

### UI Rules

• Hidden by default  
• Explicitly labeled “Contextual Reflection”  
• Display guardrails prominently  
• Must include non-prescriptive disclaimer  

Guidance must never appear:

• before Canon  
• before Interpretation  
• without user intent  

---

## 7. Progressive Disclosure (Non-Negotiable)

The UI must enforce **progressive disclosure**:

1. Canon appears first  
2. Lexical help on request  
3. Interpretation on request  
4. Abstraction after comprehension  
5. Guidance only when explicitly sought  

This protects both:

• reader autonomy  
• doctrinal integrity  

---

## 8. Visual Doctrine (Summary)

### Visual Hierarchy

• Canon — calm, spacious, centered  
• Assistance — smaller, secondary  
• Interpretation — clearly marked  
• Guidance — subdued, careful  

### Forbidden Visual Patterns

❌ “Card stacks” that equalize authority  
❌ Highlighting commentary over verse  
❌ Color-coding implying superiority  

---

## 9. UI Is Not a Teacher

The UI must never:

❌ suggest conclusions  
❌ rank interpretations  
❌ nudge moral action  
❌ act as conscience  

The UI is a **window**, not a voice.

---

## 10. Constitutional Priority

If any UI feature conflicts with this doctrine:

👉 **This doctrine prevails over UX trends, frameworks, or metrics.**

---

_End of VKAD-03_
