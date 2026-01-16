// src/content/guidance/schema.ts
import { z } from "astro:content";

export const GuidanceSchema = z.object({
  guidance_id: z.string(),       // stable ASCII id
  title: z.string(),             // short, neutral title
  context: z.string(),           // when / for whom this may apply
  guidance: z.string(),          // ONE short paragraph only
  disclaimer: z.string(),        // explicit non-authority disclaimer

  skill_refs: z.array(z.string()),
  principle_refs: z.array(z.string()).optional(),
  concept_refs: z.array(z.string()).optional(),
  authority_scope: z.literal("contextual"),
  derived: z.literal(true),
  authority_level: z.literal("guidance"),
});
