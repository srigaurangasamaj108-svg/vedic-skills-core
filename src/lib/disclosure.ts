/**
 * Authority-Aware Disclosure Contracts
 *
 * This file defines which authority_scopes may be displayed together
 * and under what constraints.
 *
 * This is NOT UI code.
 * This is NOT doctrine.
 * This is a mechanical policy layer that UI and search must obey.
 */

export type AuthorityScope =
  | "canon"
  | "lexical"
  | "derived"
  | "sampradaya"
  | "contextual";

export const DISCLOSURE_RULES = {
  canon: {
    mayDisplayWith: ["lexical", "derived"],
    mustRemainPrimary: true,
    mustNeverBeHidden: true,
  },

  lexical: {
    mayDisplayWith: ["canon"],
    mustNeverOverride: ["canon"],
    optional: true,
  },

  derived: {
    mayDisplayWith: ["canon", "lexical"],
    mustNeverOverride: ["canon"],
    optional: true,
  },

  sampradaya: {
    mayDisplayWith: ["canon", "derived"],
    mustDeclarePerspective: true,
    mustNeverClaimUniversality: true,
    optional: true,
  },

  contextual: {
    mayDisplayWith: ["canon"],
    mustBeExplicitlyOptional: true,
    mustNeverAutoLoad: true,
    mustNeverBePrescriptive: true,
  },
} as const;
