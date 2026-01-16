// Placeholder schema — to be defined in future phase
import { z } from "astro:content";

export const CommunitySchema = z.object({
  post_id: z.string(),

  title: z.string(),
  body_type: z.enum(["reflection", "discussion", "experience"]),

  // No Canon allowed here
  references: z.array(z.string()).optional(),

  derived: z.literal(true),
  authority_level: z.literal("community"),
});
