/**
 * CONTENT COLLECTION REGISTRY
 * ---------------------------
 *
 * This file is the SINGLE SOURCE OF TRUTH
 * for mapping content folders to authority layers.
 *
 * ROLE OF THIS FILE:
 * ------------------
 * - Registers all Astro content collections
 * - Binds each collection to its schema
 * - Enforces separation of authority by construction
 *
 * CRITICAL GUARANTEE:
 * -------------------
 * - `scripture` is the ONLY LEVEL 0 canonical collection.
 * - All other collections are DERIVED or INTERPRETIVE.
 * - No collection may silently gain canonical status.
 *
 * ARCHITECTURAL INTENT:
 * ---------------------
 * Authority is enforced structurally, not by developer discipline.
 * If a folder is not registered here, it does not exist to the system.
 *
 * CHANGE WARNING:
 * ---------------
 * Adding, removing, or reclassifying collections
 * requires explicit constitutional review.
 *
 * Convenience is not a valid reason.
 */


import { defineCollection } from "astro:content";

import { CanonSchema } from "./scripture/schema";
import { GlossSchema } from "./gloss/schema";
import { ConceptSchema } from "./concepts/schema";
import { EntitySchema } from "./entities/schema";
import { SynonymSchema } from "./synonyms/schema";
import { TranslationSchema } from "./translations/schema";
import { CommentarySchema } from "./commentary/schema";
import { PrincipleSchema } from "./principles/schema";
import { SkillSchema } from "./skills/schema";
import { GuidanceSchema } from "./guidance/schema";
import { SampradayaSchema } from "./sampradaya/schema";
import { CompilationSchema } from "./compilations/schema";
import { CourseSchema } from "./courses/schema";
import { CommunitySchema } from "./community/schema";




/**
 * Content Collections
 * Authority strictly enforced by schemas + dependency validator
 */
export const collections = {
  // LEVEL 0 — Canon
  scripture: defineCollection({
    type: "content",
    schema: CanonSchema,
  }),

  // LEVEL 1 — Lexical / Conceptual
  gloss: defineCollection({
    type: "content",
    schema: GlossSchema,
  }),

  concepts: defineCollection({
    type: "content",
    schema: ConceptSchema,
  }),

  // LEVEL 2 — Contextual
  entities: defineCollection({
    type: "content",
    schema: EntitySchema,
  }),

  // LEVEL 3A — Lexical Verse Mapping
  synonyms: defineCollection({
    type: "content",
    schema: SynonymSchema,
  }),

  // LEVEL 3B — Interpretive
  translations: defineCollection({
    type: "content",
    schema: TranslationSchema,
  }),

  commentary: defineCollection({
    type: "content",
    schema: CommentarySchema,
  }),

  // LEVEL 4 — Abstraction
  principles: defineCollection({
    type: "content",
    schema: PrincipleSchema,
  }),

  // LEVEL 5 — Capacity
  skills: defineCollection({
    type: "content",
    schema: SkillSchema,
  }),

  // LEVEL 6 — Contextual Guidance
  guidance: defineCollection({
    type: "content",
    schema: GuidanceSchema,

      }),

      sampradaya: defineCollection({
    type: "content",
    schema: SampradayaSchema,
  }),
  // Phase 11B additions
  compilations: defineCollection({ type: "content", schema: CompilationSchema }),
  courses: defineCollection({ type: "content", schema: CourseSchema }),
  community: defineCollection({ type: "content", schema: CommunitySchema }),
};
