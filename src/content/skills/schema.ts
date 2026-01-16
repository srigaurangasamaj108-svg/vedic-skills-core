// src/content/skills/schema.ts
import { z } from "astro:content";

export const SkillSchema = z.object({
  skill_id: z.string(),        // stable ASCII id
  label: z.string(),           // short human-readable name
  description: z.string(),     // ONE sentence only

  principle_refs: z.array(z.string()),
  concept_refs: z.array(z.string()).optional(),
  gloss_refs: z.array(z.string()).optional(),
  authority_scope: z.literal("derived"),
 
  derived: z.literal(true),
  authority_level: z.literal("skill"),
});
