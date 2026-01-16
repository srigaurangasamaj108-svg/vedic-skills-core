import { z } from "astro:content";

export const SampradayaSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),

  tradition: z.string(), // e.g. gaudiya
  grounded_in: z.array(z.string()),

  authority_level: z.literal("sampradaya"),
});
