import { z } from "astro:content";

/**
 * LEVEL 3A — Synonym Atom
 * Verse-level lexical mapping (padārtha)
 */
export const SynonymSchema = z.object({
  synonym_id: z.string(),

  // Canon anchor (REQUIRED)
  cka_id: z.string(),

  // Verse identity (descriptive, not authoritative)
  source_text: z.string(), // e.g. "bhagavad-gita"
  chapter: z.number(),
  verse: z.string(),

  // Source-dependent lexical tradition
  source: z.string(), // e.g. "prabhupada", "sankara"
  language: z.string(), // usually "en"

  // Authority markers
  derived: z.literal(true),
  authority_level: z.literal("synonym"),

  // Guardrails
  atom_type: z.literal("verse-synonym"),
});
