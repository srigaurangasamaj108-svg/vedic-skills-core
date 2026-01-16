// Placeholder schema — to be defined in future phase
import { z } from "astro:content";

export const CompilationSchema = z.object({
  compilation_id: z.string(),

  title: z.string(),
  description: z.string(),

  // Explicit references only
  references: z.array(z.string()).min(1),

  scope: z.enum(["study", "theme", "overview"]),

  derived: z.literal(true),
  authority_level: z.literal("compilation"),
});
