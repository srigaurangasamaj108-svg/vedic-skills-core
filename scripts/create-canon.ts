import fs from "fs";
import path from "path";

type CanonInput = {
  chapter: number;
  verse: number;
  speaker: string;
  listener: string;
};

const BASE =
  "src/content/scripture/itihasa/mahabharata/bhagavad-gita";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function createCanonVerse(input: CanonInput) {
  const chapterDir = path.join(BASE, pad(input.chapter));
  fs.mkdirSync(chapterDir, { recursive: true });

  const file = path.join(chapterDir, `${pad(input.verse)}.mdx`);

  if (fs.existsSync(file)) {
    console.error(`❌ File exists: ${file}`);
    return;
  }

  const frontmatter =
`---
cka_id: bg-${pad(input.chapter)}-${pad(input.verse)}

source_category: itihasa
canonical_rank: 3

source_tradition: mahabharata
source_text: bhagavad-gita

chapter: ${input.chapter}
verse: "${input.verse}"

language: sa
script: devanagari

speaker: ${input.speaker}
listener: ${input.listener}
setting: battlefield-of-kurukshetra

canonical: true
immutable: true
---

`;

  fs.writeFileSync(file, frontmatter, { encoding: "utf8" });
  console.log(`✅ Created ${file}`);
}

/* EXAMPLE */
createCanonVerse({
  chapter: 2,
  verse: 31,
  speaker: "sri-krishna",
  listener: "arjuna",
});
