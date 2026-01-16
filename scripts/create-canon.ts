import fs from "fs";
import path from "path";

/**
 * create-canon.ts
 *
 * Scaffolds a LEVEL-0 Canonical Knowledge Atom.
 * This script does NOT infer textual structure.
 * Canonical location is expressed via the `locator` array,
 * which must be filled manually according to tradition.
 */

# authority_scope: canon

const [, , relativePath] = process.argv;

if (!relativePath) {
  console.error(
    "❌ Usage: node create-canon.ts <relative-path-from-scripture/>"
  );
  process.exit(1);
}

const fullPath = path.join(
  process.cwd(),
  "src/content/scripture",
  relativePath
);

if (fs.existsSync(fullPath)) {
  console.error("❌ Canonical file already exists:", fullPath);
  process.exit(1);
}

fs.mkdirSync(path.dirname(fullPath), { recursive: true });

const frontmatter = `---
cka_id: ""
source_category: ""
source_tradition: ""
source_text: ""

locator:
  - level: ""
    value: ""

language: sa
script: devanagari

canonical: true
immutable: true
---

`;

fs.writeFileSync(fullPath, frontmatter, "utf8");

console.log("✅ Canon scaffold created:", fullPath);
