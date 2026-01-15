// src/content/concepts/schema.ts
import { z } from "astro:content";

export const ConceptSchema = z.object({
  concept_id: z.string(),        // stable, ASCII, semantic id
  label: z.string(),             // human-readable name

  canonical_refs: z.array(z.string()),
  gloss_refs: z.array(z.string()).optional(),

  derived: z.literal(true),
  authority_level: z.literal("concept"),
});
