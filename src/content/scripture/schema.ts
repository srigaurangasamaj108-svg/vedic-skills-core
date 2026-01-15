import { z } from "astro:content";
import { rankFor } from "../_canon/hierarchy";

export const CanonSchema = z
  .object({
    cka_id: z.string(),

    source_category: z.enum([
      "sruti",
      "smrti",
      "itihasa",
      "purana",
      "agama",
    ]),

    canonical_rank: z.number().int(),

    source_tradition: z.string(),
    source_text: z.string(),

    chapter: z.union([z.number(), z.string()]),
    verse: z.string(),

    language: z.literal("sa"),
    script: z.literal("devanagari"),

    speaker: z.string(),
    listener: z.string(),
    setting: z.string(),

    prev: z.string().optional(),
    next: z.string().optional(),

    canonical: z.literal(true),
    immutable: z.literal(true),
  })
  .superRefine((data, ctx) => {
    const expected = rankFor(data.source_category);
    if (data.canonical_rank !== expected) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `canonical_rank must be ${expected} for ${data.source_category}`,
      });
    }
  });
