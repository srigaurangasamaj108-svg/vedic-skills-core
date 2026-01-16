import { z } from "astro:content";

export const SampradayaSchema = z.object({
  /**
   * Sampradāya Knowledge Atom ID
   */
  ska_id: z.string(),

  /**
   * Lineage identifier (e.g. gaudiya, sri, madhva)
   */
  sampradaya: z.string(),

  /**
   * Author or acharya (e.g. rupa-gosvami)
   */
  author: z.string(),

  /**
   * Text or work name
   */
  work: z.string(),

  /**
   * Authority scope (LOCKED ENUM)
   */
  authority_scope: z.literal("sampradaya"),

  /**
   * Declared dependencies on śāstra canon
   * (never inferred)
   */
  depends_on: z.array(z.string()).min(1),

  /**
   * Language & script
   */
  language: z.string(),
  script: z.string(),

  /**
   * Sampradāya invariants
   */
  canonical: z.literal(false),
  immutable: z.literal(true),
});
