import fs from "node:fs";
import path from "node:path";

const SKILL_ROOT = "src/content/skills";

type SkillInput = {
  slug: string;
  label: string;
  description: string;
};

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function createSkill(input: SkillInput) {
  ensureDir(SKILL_ROOT);

  const filePath = path.join(SKILL_ROOT, `${input.slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.error(`❌ Skill already exists: ${filePath}`);
    process.exit(1);
  }

  const frontmatter =
`---
skill_id: ${input.slug}
label: ${input.label}
description: "${input.description}"

principle_refs:
  - 

concept_refs:
  - 

gloss_refs:
  - 

derived: true
authority_level: skill
---

`;

  fs.writeFileSync(filePath, frontmatter, { encoding: "utf8" });

  console.log(`✅ Created skill scaffold: ${filePath}`);
  console.log("✏️ Fill in references only.");
}

/**
 * EXAMPLE INVOCATION
 */
createSkill({
  slug: "capacity-to-distinguish-self-from-body",
  label: "Capacity to distinguish self from body",
  description: "The capacity to discern the self as distinct from the physical body.",
});
