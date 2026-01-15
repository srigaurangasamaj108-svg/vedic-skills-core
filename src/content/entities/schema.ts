import { z } from "astro:content";

export const EntitySchema = z.object({
  entity_id: z.string(),

  entity_type: z.enum([
    "person",
    "place",
    "event",
    "circumstance",
  ]),

  cka_ids: z.array(z.string()).min(1),

  derived: z.literal(true),
  authority_level: z.literal("entity"),
});
