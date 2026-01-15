import fs from "node:fs";
import path from "node:path";

/**
 * CONFIG — locked by constitution
 */
const GLOSS_ROOT = "src/content/gloss";

type GlossInput = {
  slug: string;               // e.g. "atman"
  term: string;               // e.g. "आत्मन्"
  transliteration: string;    // e.g. "ātman"
  language: "sa";
};

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function createGloss(input: GlossInput) {
  ensureDir(GLOSS_ROOT);

  const filePath = path.join(GLOSS_ROOT, `${input.slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.error(`❌ Gloss already exists: ${filePath}`);
    process.exit(1);
  }

  const frontmatter =
`---
term: ${input.term}
transliteration: ${input.transliteration}
language: ${input.language}

meaning_range:
  - 

canonical_refs:
  - 

derived: true
authority_level: gloss
---

`;

  fs.writeFileSync(filePath, frontmatter, { encoding: "utf8" });

  console.log(`✅ Created gloss scaffold: ${filePath}`);
  console.log("✏️ Fill in meaning_range and canonical_refs manually.");
}

/**
 * EXAMPLE INVOCATION
 * (Edit values before running)
 */
createGloss({
  slug: "deha",
  term: "देह",
  transliteration: "deha",
  language: "sa",
});
