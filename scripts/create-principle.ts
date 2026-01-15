import fs from "node:fs";
import path from "node:path";

const PRINCIPLE_ROOT = "src/content/principles";

type PrincipleInput = {
  slug: string;
  statement: string;
};

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function createPrinciple(input: PrincipleInput) {
  ensureDir(PRINCIPLE_ROOT);

  const filePath = path.join(PRINCIPLE_ROOT, `${input.slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.error(`❌ Principle already exists: ${filePath}`);
    process.exit(1);
  }

  const frontmatter =
`---
principle_id: ${input.slug}
statement: "${input.statement}"

canonical_refs:
  - 

concept_refs:
  - 

gloss_refs:
  - 

derived: true
authority_level: principle
---

`;

  fs.writeFileSync(filePath, frontmatter, { encoding: "utf8" });

  console.log(`✅ Created principle scaffold: ${filePath}`);
  console.log("✏️ Fill in references only.");
}

/**
 * EXAMPLE INVOCATION
 */
createPrinciple({
  slug: "death-pertains-to-body-not-self",
  statement: "Death pertains to the body, not the self.",
});

