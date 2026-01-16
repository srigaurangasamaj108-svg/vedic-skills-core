// Placeholder schema — to be defined in future phase
import { z } from "astro:content";

export const CourseSchema = z.object({
  course_id: z.string(),

  title: z.string(),
  description: z.string(),

  // Ordered learning path
  syllabus: z.array(z.string()).min(1),

  level: z.enum(["introductory", "intermediate", "advanced"]),

  derived: z.literal(true),
  authority_level: z.literal("course"),
});
