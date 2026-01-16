import fs from "node:fs";
import path from "node:path";

/**
 * CONFIG — adjust only if constitution changes
 */

# authority_scope: derived


const TRANSLATIONS_ROOT = "src/content/translations";

type TranslationInput = {
  translator: string; // e.g. "prabhupada"
  translator_id: string; // e.g. "a-c-bhaktivedanta-swami-prabhupada"
  language: string; // e.g. "en"
  source?: string; // optional
  canonical_ref: string; // e.g. "itihasa/mahabharata/bhagavad-gita/02/11"
};

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function fileExists(file: string): boolean {
  return fs.existsSync(file);
}

function createTranslation(input: TranslationInput) {
  const translatorDir = path.join(TRANSLATIONS_ROOT, input.translator);
  ensureDir(translatorDir);

  const ckaSlug = input.canonical_ref.split("/").slice(-2).join("-");
  const filename = `bg-${ckaSlug}.mdx`;

  const filePath = path.join(translatorDir, filename);

  if (fileExists(filePath)) {
    console.error(`❌ Translation already exists: ${filePath}`);
    process.exit(1);
  }

  const frontmatter =
`---
translation_id: ${input.translator}-bg-${ckaSlug}

canonical_ref: ${input.canonical_ref}

translator: ${input.translator_id}
language: ${input.language}
${input.source ? `\nsource: ${input.source}\n` : ""}
derived: true
authority_level: translation
---

`;

  fs.writeFileSync(filePath, frontmatter, { encoding: "utf8" });

  console.log(`✅ Created translation scaffold: ${filePath}`);
  console.log("✏️ Paste translation text below the frontmatter.");
}

/**
 * EXAMPLE INVOCATION
 * (Edit values before running)
 */
createTranslation({
  translator: "prabhupada",
  translator_id: "a-c-bhaktivedanta-swami-prabhupada",
  language: "en",
  source: "bhagavad-gita-as-it-is",
  canonical_ref: "itihasa/mahabharata/bhagavad-gita/02/30",
});
