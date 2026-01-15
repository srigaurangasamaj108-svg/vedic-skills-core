import fs from "node:fs";
import path from "node:path";

const GUIDANCE_ROOT = "src/content/guidance";

type GuidanceInput = {
  slug: string;
  title: string;
};

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function createGuidance(input: GuidanceInput) {
  ensureDir(GUIDANCE_ROOT);

  const filePath = path.join(GUIDANCE_ROOT, `${input.slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.error(`❌ Guidance already exists: ${filePath}`);
    process.exit(1);
  }

  const frontmatter =
`---
guidance_id: ${input.slug}
title: ${input.title}

context: ""

guidance: ""

disclaimer: "This guidance is contextual and optional, and is not a prescription, diagnosis, or replacement for personal discernment or qualified support."

skill_refs:
  - 

principle_refs:
  - 

concept_refs:
  - 

derived: true
authority_level: guidance
---

`;

  fs.writeFileSync(filePath, frontmatter, { encoding: "utf8" });

  console.log(`✅ Created guidance scaffold: ${filePath}`);
  console.log("✏️ Fill in context, guidance text, and references carefully.");
}

/**
 * EXAMPLE INVOCATION
 */
createGuidance({
  slug: "facing-loss-with-body-self-distinction",
  title: "Facing loss with the distinction between body and self",
});
