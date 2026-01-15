# VKAD-04: PDF, REFERENCE MATERIAL & EXTERNAL SOURCE DOCTRINE  
_Vedic Knowledge Architecture Doctrine_

---

## 0. PURPOSE OF THIS DOCUMENT

This doctrine defines **how non-MDX, non-atomic materials** (PDFs, scans, booklets, research papers, slide decks, and external files) may exist within the Vedic Skills ecosystem.

It ensures that:

• Canon remains primary  
• Reference remains subordinate  
• Convenience never replaces integrity  
• Large volumes of material do not corrupt structure  
• Storage scale does not distort authority  

This document exists because **PDFs are powerful—and dangerous** if left undisciplined.

---

## 1. CORE PRINCIPLE (UNBREAKABLE)

> **PDFs are witnesses, not teachers.  
They support truth; they do not define it.**

No PDF, regardless of its prestige, age, or popularity, may ever function as:

❌ Canon  
❌ Commentary authority  
❌ Primary reading interface  

---

## 2. CLASSIFICATION OF PDF MATERIAL

All PDFs must belong to **exactly one class**.

No PDF may straddle categories.

---

### 2.1 Canonical Witnesses (Immutable)

**Definition**  
Scanned or facsimile reproductions of authoritative texts.

Examples:
• Original manuscripts  
• Printed Sanskrit editions  
• Archival scans  

**Characteristics**
• Immutable  
• Never edited  
• Never excerpted  
• Never paraphrased  

**Role**
• Evidence  
• Verification  
• Scholarly reference  

---

### 2.2 Thematic / Research Material (Mutable)

**Definition**  
Human-authored analytical or educational documents derived from śāstra.

Examples:
• Research papers  
• Institutional booklets  
• Course handouts  
• Lecture notes  

These documents:
• are editorial  
• are time-bound  
• may be revised or retired  

---

### 2.3 Pedagogical Supplements

**Definition**  
Learning aids intended to assist structured study.

Examples:
• Course PDFs  
• Summaries  
• Workbooks  

These are **never authoritative** and must be clearly marked as such.

---

## 3. STORAGE DOCTRINE — THE VAULT

### 3.1 Public Asset Storage (Mandatory)

All PDFs must live **outside** `src/content/`.

They are not atoms.

Correct location:

public/pdfs/
This ensures:
• no schema pollution  
• no accidental canon confusion  
• clean build performance  

---

### 3.2 Mandatory Folder Structure

public/pdfs/├── canonical/│ ├── bhagavad-gita/│ │ ├── gita-critical-edition.pdf│ │ └── gita-gita-press.pdf│├── research/│ ├── dharma-householder-sharma.pdf│ └── vedanta-overview-iyer.pdf│├── courses/│ ├── gita-foundations-handbook.pdf│ └── youth-transition-guide.pdf│└── community/├── seva-training-manual.pdf└── facilitator-ethics.pdf
---

## 4. PDF METADATA & REGISTRATION

### 4.1 PDFs Must Be Registered

Every PDF must have a **metadata registration file** inside `src/content/pdfs/`.

Example:

src/content/pdfs/gita-critical-edition.mdx
This MDX file contains:
• title  
• classification  
• author / publisher  
• year  
• scope  
• related verses / concepts  

The **PDF itself remains passive**.

---

### 4.2 PDFs Are Never Parsed

The system:
❌ does not parse PDF text  
❌ does not index internal PDF structure  
❌ does not infer meaning from PDFs  

All intelligence lives in MDX metadata.

---

## 5. LINKING RULES (CRITICAL)

### 5.1 Canon → PDF (Allowed)

A verse page may link to:
• canonical scans  
• scholarly editions  

This link must be:
• optional  
• clearly labeled (“Reference Scan”)  
• visually subordinate  

---

### 5.2 PDF → Canon (Forbidden)

A PDF must **never be the only path** to scripture.

If scripture is only accessible via PDF, **the system is broken**.

---

### 5.3 Guidance & Courses → PDF (Careful Use)

Guidance and courses may link PDFs as:
• supplementary reading  
• optional deep dives  

They must:
• never require PDFs to proceed  
• never imply authority  

---

## 6. SEARCH & DISCOVERY RULES

PDFs:
• may appear in filtered search  
• must be clearly labeled as “Reference”  

PDFs must NEVER:
❌ rank above verses  
❌ appear as primary results  
❌ replace structured content  

---

## 7. ACCESS CONTROL

PDFs may have access levels:
• public  
• registered  
• restricted  

Access level is controlled by:
• metadata registration  
• server configuration  

The PDF file itself remains unchanged.

---

## 8. SCALE & STORAGE SAFETY

### 8.1 Large Volume Acceptance

The architecture **explicitly supports**:
• hundreds of thousands of PDFs  
• terabytes of storage  
• gradual archival growth  

Because:
• PDFs are static  
• never reprocessed  
• never version-diffed  

---

### 8.2 PDFs vs Filesystem Limits

PDFs:
• do not affect Astro build time  
• do not create routes  
• do not generate pages  

They are inert assets.

---

## 9. FAILURE MODES THIS DOCTRINE PREVENTS

This doctrine explicitly prevents:

• PDF-only scripture  
• Course content replacing canon  
• “Download to understand” barriers  
• Scholar privilege capture  
• Storage cost explosions  
• Content-UI confusion  

---

## 10. CLOSING PRINCIPLE

> **Scripture is read.  
Commentary is reflected upon.  
PDFs are consulted.**

When PDFs become primary,  
the system has forgotten its purpose.

---

_End of VKAD-04 — PDF, Reference Material & External Source Doctrine_
