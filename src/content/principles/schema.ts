// src/content/principles/schema.ts
import { z } from "astro:content";

export const PrincipleSchema = z.object({
  principle_id: z.string(),   // stable ASCII id
  statement: z.string(),      // single declarative sentence

  canonical_refs: z.array(z.string()),
  concept_refs: z.array(z.string()).optional(),
  gloss_refs: z.array(z.string()).optional(),
  authority_scope: z.literal("derived"),

  derived: z.literal(true),
  authority_level: z.literal("principle"),
});
