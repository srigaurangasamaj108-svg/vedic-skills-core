/**
 * Canonical corpus graph
 * LEVEL 0 only — scripture classification
 * Non-linear, relationship-based (not ranked)
 */

/**
 * CANONICAL HIERARCHY REGISTRY — LEVEL 0 ONLY
 * ------------------------------------------
 *
 * This file defines the authoritative classification and relationships
 * of ŚĀSTRA at LEVEL 0 (Scripture).
 *
 * WHY THIS FILE LIVES HERE:
 * -------------------------
 * - Canonical hierarchy applies ONLY to verbatim śāstra (Śruti, Smṛti, Itihāsa,
 *   Purāṇa, Āgama, Vedāṅga, Upaveda, Darśana).
 * - Derived layers (translations, glosses, concepts, commentary, principles,
 *   skills, guidance, sampradāya) MUST NOT import or depend on canonical hierarchy.
 * - Placing this file under `scripture/_canon/` enforces authority isolation
 *   by structure, not convention.
 *
 * WHAT THIS FILE IS:
 * ------------------
 * - A dependency graph of canonical corpora
 * - A declaration of authority, derivation, and support relationships
 * - A machine-readable safeguard against false linear ranking
 *
 * WHAT THIS FILE IS NOT:
 * ----------------------
 * - A ranking of spiritual superiority
 * - A philosophical interpretation
 * - A sampradāya preference model
 * - A UI taxonomy
 *
 * CONSTITUTIONAL GUARANTEE:
 * ------------------------
 * Any content outside `src/content/scripture/` is, by definition,
 * NON-CANONICAL and MUST NOT reference this hierarchy directly.
 *
 * If this rule is violated, the system’s authority boundary is broken.
 */


/**
 * Canonical Corpus Graph (LEVEL 0)
 *
 * This file defines the authoritative classification of
 * Vedic canonical corpora ONLY.
 *
 * It lives under `scripture/_canon/` intentionally:
 * - Canon (LEVEL 0) must not depend on derived layers
 * - Derived layers may reference Canon, never vice versa
 * - Physical location enforces authority boundaries
 *
 * This is a dependency graph, NOT a ranking.
 */

export type CanonicalAuthority =
  | "primary"
  | "derived"
  | "auxiliary"
  | "practical"
  | "philosophical"
  | "sampradaya";

export interface CanonicalNode {
  authority: CanonicalAuthority;
  description: string;
  relationships?: {
    derivesFrom?: readonly string[];
    subsetOf?: readonly string[];
    supports?: readonly string[];
    interprets?: readonly string[];
    alignsWith?: readonly string[];
    groundedIn?: readonly string[];
  };
}

export const CANONICAL_GRAPH = {
  sruti: {
    authority: "primary",
    description: "Apauruṣeya revelation; ultimate pramāṇa",
  },

  smrti: {
    authority: "derived",
    description: "Remembrance literature applying Śruti",
    relationships: { derivesFrom: ["sruti"] },
  },

  itihasa: {
    authority: "derived",
    description: "Historical narrative within Smṛti",
    relationships: { subsetOf: ["smrti"] },
  },

  purana: {
    authority: "derived",
    description: "Theological exposition within Smṛti",
    relationships: { subsetOf: ["smrti"] },
  },

  agama: {
    authority: "practical",
    description: "Ritual and worship systems",
    relationships: { alignsWith: ["sruti", "smrti"] },
  },

  vedanga: {
    authority: "auxiliary",
    description: "Auxiliary limbs preserving Śruti",
    relationships: { supports: ["sruti"] },
  },

  upaveda: {
    authority: "auxiliary",
    description: "Applied disciplines derived from Veda",
    relationships: { supports: ["sruti"] },
  },

  darsana: {
    authority: "philosophical",
    description: "Sūtra-based interpretive systems",
    relationships: { interprets: ["sruti"] },
  },

  sampradaya: {
    authority: "sampradaya",
    description: "Living interpretive devotional traditions",
    relationships: {
      groundedIn: ["sruti", "smrti", "purana", "agama", "darsana"],
    },
  },
} as const;

export type CanonicalSourceCategory = keyof typeof CANONICAL_GRAPH;
