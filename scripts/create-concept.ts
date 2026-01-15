import fs from "node:fs";
import path from "node:path";

/**
 * CONFIG — locked by constitution
 */
const CONCEPT_ROOT = "src/content/concepts";

type ConceptInput = {
  slug: string;           // e.g. "body-self-distinction"
  label: string;          // human-readable label
};

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function createConcept(input: ConceptInput) {
  ensureDir(CONCEPT_ROOT);

  const filePath = path.join(CONCEPT_ROOT, `${input.slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.error(`❌ Concept already exists: ${filePath}`);
    process.exit(1);
  }

  const frontmatter =
`---
concept_id: ${input.slug}
label: ${input.label}

canonical_refs:
  - 

gloss_refs:
  - 

derived: true
authority_level: concept
---

`;

  fs.writeFileSync(filePath, frontmatter, { encoding: "utf8" });

  console.log(`✅ Created concept scaffold: ${filePath}`);
  console.log("✏️ Fill in canonical_refs (and gloss_refs if applicable).");
}

/**
 * EXAMPLE INVOCATION
 * (Edit values before running)
 */
/**
 * EXAMPLE INVOCATION
 * (Edit values before running)
 */
createConcept({
  slug: "body-self-distinction",
  label: "Distinction between body and self",
});

