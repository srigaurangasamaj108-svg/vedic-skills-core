import { z } from "astro:content";

export const TranslationSchema = z.object({
  translation_id: z.string(),

  // Structural, authoritative link to Canon
  canonical_ref: z.string(),

  // Optional semantic identifier (NOT used for graph resolution)
  cka_id: z.string().optional(),

  translator: z.string(),
  language: z.string(),

  source: z.string().optional(),

  derived: z.literal(true),
  authority_level: z.literal("translation"),
});
