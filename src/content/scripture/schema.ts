/**
 * SCRIPTURE SCHEMA — LEVEL 0 CANON
 * --------------------------------
 *
 * This schema defines the REQUIRED and OPTIONAL metadata
 * for all LEVEL 0 canonical scripture atoms.
 *
 * DESIGN PRINCIPLES:
 * ------------------
 * - This schema must accommodate ALL forms of śāstra:
 *   Śruti, Smṛti, Itihāsa, Purāṇa, Āgama, Vedāṅga, Upaveda, Darśana.
 * - Therefore, structural fields (chapter, verse, adhyāya, skandha, sūtra, etc.)
 *   are intentionally OPTIONAL and TEXTUAL.
 *
 * WHY OPTIONAL STRUCTURE FIELDS:
 * ------------------------------
 * - Different śāstras segment text differently.
 * - Forcing a single segmentation model would corrupt canon fidelity.
 * - Presence and interpretation of structure belongs to content,
 *   not to the schema.
 *
 * IMMUTABILITY RULE:
 * ------------------
 * - Canonical atoms are immutable once committed.
 * - No translation, synonym, gloss, or commentary may alter or embed canon.
 *
 * AUTHORITY BOUNDARY:
 * -------------------
 * This schema applies ONLY to LEVEL 0 Scripture.
 * Derived layers MUST define their own schemas and MUST NOT extend this one.
 *
 * Any violation here constitutes a constitutional breach.
 */


import { z } from "astro:content";
import { CANONICAL_GRAPH } from "./_canon/hierarchy";

/**
 * Valid canonical source categories (LEVEL 0 only)
 */
export const CanonicalSourceCategory = z.enum(
  Object.keys(CANONICAL_GRAPH) as [
    keyof typeof CANONICAL_GRAPH,
    ...string[]
  ]
);

/**
 * Canonical locator segment
 * One ordered step in a text's internal structure.
 * No assumptions about tradition are made.
 */
export const LocatorSegment = z.object({
  level: z.string(), // e.g. skandha, adhyaya, pada, sutra, mantra
  value: z.string(), // "01", "2.3", "III", etc.
});

/**
 * Canonical Knowledge Atom Schema (LEVEL 0)
 *
 * Canon is immutable, verbatim, and non-interpretive.
 */
export const CanonSchema = z.object({
  cka_id: z.string(),

  source_category: CanonicalSourceCategory,

  source_tradition: z.string(), // e.g. mahabharata, rig-veda
  source_text: z.string(),      // e.g. bhagavad-gita, astadhyayi

  /**
   * Ordered, lossless canonical position
   */
  locator: z.array(LocatorSegment).min(1),

  authority_scope: z.literal("canon"),

  language: z.string(),
  script: z.string(),

  speaker: z.string().optional(),
  listener: z.string().optional(),
  setting: z.string().optional(),

  canonical: z.literal(true),
  immutable: z.literal(true),
});
