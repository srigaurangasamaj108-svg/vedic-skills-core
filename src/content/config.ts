import { defineCollection } from "astro:content";

import { CanonSchema } from "./scripture/schema";
import { GlossSchema } from "./gloss/schema";
import { ConceptSchema } from "./concepts/schema";
import { EntitySchema } from "./entities/schema";
import { TranslationSchema } from "./translations/schema";
import { CommentarySchema } from "./commentary/schema";
import { PrincipleSchema } from "./principles/schema";
import { SkillSchema } from "./skills/schema";
import { GuidanceSchema } from "./guidance/schema";

export const collections = {
  scripture: defineCollection({ type: "content", schema: CanonSchema }),
  gloss: defineCollection({ type: "content", schema: GlossSchema }),
  concepts: defineCollection({ type: "content", schema: ConceptSchema }),
  entities: defineCollection({ type: "content", schema: EntitySchema }),
  translations: defineCollection({ type: "content", schema: TranslationSchema }),
  commentary: defineCollection({ type: "content", schema: CommentarySchema }),
  principles: defineCollection({ type: "content", schema: PrincipleSchema }),
  skills: defineCollection({ type: "content", schema: SkillSchema }),
  guidance: defineCollection({ type: "content", schema: GuidanceSchema }),
};
