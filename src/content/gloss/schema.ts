import { z } from "astro:content";

export const GlossSchema = z.object({
  gloss_id: z.string(),
  term: z.string(),
  cka_id: z.string(),

  derived: z.literal(true),
  authority_level: z.literal("gloss"),
});
