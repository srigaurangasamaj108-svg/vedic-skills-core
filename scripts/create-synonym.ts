import fs from "node:fs";
import path from "node:path";

const SOURCE_TEXT = "bhagavad-gita";
const CHAPTER = 2;
const VERSE = 11;
const SOURCE = "prabhupada";

const dir = path.join(
  "src/content/synonyms",
  SOURCE_TEXT,
  String(CHAPTER).padStart(2, "0"),
  String(VERSE).padStart(2, "0")
);

fs.mkdirSync(dir, { recursive: true });

const filePath = path.join(dir, `${SOURCE}.mdx`);

if (fs.existsSync(filePath)) {
  console.error("❌ Synonym atom already exists:", filePath);
  process.exit(1);
}

const content = `---
synonym_id: ${SOURCE_TEXT}-${CHAPTER}-${VERSE}-${SOURCE}
cka_id: bg-${String(CHAPTER).padStart(2, "0")}-${String(VERSE).padStart(2, "0")}

source_text: ${SOURCE_TEXT}
chapter: ${CHAPTER}
verse: ${VERSE}

source: ${SOURCE}
language: en

atom_type: verse-synonym
derived: true
authority_level: synonym
---

`;


fs.writeFileSync(filePath, content);
console.log("✅ Created synonym scaffold:", filePath);
