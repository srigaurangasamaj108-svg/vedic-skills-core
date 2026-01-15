import { z } from "astro:content";

/**
 * Commentary Atoms (LEVEL 3B)
 * Covers both:
 * - Source text (original Sanskrit / original language)
 * - Translation of that commentary
 */
export const CommentarySchema = z.object({
  commentary_id: z.string(),

  // Canon anchor (mandatory)
  cka_id: z.string(),

  // Identity
  commentator: z.string(), // sankara, ramanuja, madhva, prabhupada, etc.
  source_text: z.string(), // bhagavad-gita
  chapter: z.number(),
  verse: z.number(),

  /**
   * Commentary subtype
   * source = original commentary text
   * translation = translation of a source commentary
   */
  type: z.enum(["source", "translation"]),

  // Language of this atom's body
  language: z.string(),

  /**
   * Required ONLY if type === "translation"
   * Must point to the commentary_id of the source atom
   */
  translates_commentary_id: z.string().optional(),

  // Constitutional markers
  derived: z.literal(true),
  authority_level: z.literal("commentary"),
});
