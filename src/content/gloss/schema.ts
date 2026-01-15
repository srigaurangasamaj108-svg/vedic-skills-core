// src/content/gloss/schema.ts
import { z } from "astro:content";

export const GlossSchema = z.object({
  term: z.string(),              // devanagari or IAST
  transliteration: z.string(),   // required for search & UI
  language: z.literal("sa"),

  meaning_range: z.array(z.string()),

  canonical_refs: z.array(z.string()),

  derived: z.literal(true),
  authority_level: z.literal("gloss"),
});
