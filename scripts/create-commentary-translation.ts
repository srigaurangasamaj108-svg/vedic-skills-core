import fs from "node:fs";
import path from "node:path";

const SOURCE_TEXT = "bhagavad-gita";
const CHAPTER = 2;
const VERSE = 11;
const COMMENTATOR = "sankara";
const LANGUAGE = "en";

const dir = path.join(
  "src/content/commentary",
  SOURCE_TEXT,
  String(CHAPTER).padStart(2, "0"),
  String(VERSE).padStart(2, "0")
);

fs.mkdirSync(dir, { recursive: true });

const filePath = path.join(dir, `${COMMENTATOR}.${LANGUAGE}.mdx`);

if (fs.existsSync(filePath)) {
  console.error("❌ Commentary translation already exists:", filePath);
  process.exit(1);
}

const content = `---
commentary_id: ${SOURCE_TEXT}-${CHAPTER}-${VERSE}-${COMMENTATOR}-${LANGUAGE}
cka_id: bg-${String(CHAPTER).padStart(2, "0")}-${String(VERSE).padStart(2, "0")}

commentator: ${COMMENTATOR}
source_text: ${SOURCE_TEXT}
chapter: ${CHAPTER}
verse: ${VERSE}

type: translation
language: ${LANGUAGE}

translates_commentary_id: ${SOURCE_TEXT}-${CHAPTER}-${VERSE}-${COMMENTATOR}-source

derived: true
authority_level: commentary
---

`;

fs.writeFileSync(filePath, content);
console.log("✅ Created commentary translation scaffold:", filePath);
