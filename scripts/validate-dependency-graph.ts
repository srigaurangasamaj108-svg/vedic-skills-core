import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Authority order (lower index = stronger authority)
 */
const AUTHORITY_ORDER = [
  "canon",        // 0
  "gloss",        // 1
  "concept",      // 1
  "entity",       // 2
  "synonym",      // 3A
  "translation",  // 3B
  "commentary",   // 3B
  "principle",    // 4
  "skill",        // 5
  "guidance",     // 6
  "compilation",  // 7
  "course",       // 8
  "community",    // 9
] as const;

type Authority = typeof AUTHORITY_ORDER[number];

function authorityIndex(level: Authority): number {
  return AUTHORITY_ORDER.indexOf(level);
}

function scan(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return scan(full);
      if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) return [full];
      return [];
    });
}

const ROOT = path.join(process.cwd(), "src/content");

const LAYER_MAP: Record<string, Authority> = {
  scripture: "canon",
  gloss: "gloss",
  concepts: "concept",
  entities: "entity",
  synonyms: "synonym",
  translations: "translation",
  commentary: "commentary",
  principles: "principle",
  skills: "skill",
  guidance: "guidance",
  compilations: "compilation",
  courses: "course",
  community: "community",
};

let hasError = false;

for (const [folder, authority] of Object.entries(LAYER_MAP)) {
  const files = scan(path.join(ROOT, folder));

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const { data } = matter(raw);

    const refs: string[] =
      data.references ||
      data.syllabus ||
      [];

    for (const ref of refs) {
      const refLevel = ref.split(":")[0] as Authority;

      if (!AUTHORITY_ORDER.includes(refLevel)) continue;

      if (authorityIndex(refLevel) < authorityIndex(authority)) {
        console.error(
          `❌ Authority violation:\n` +
          `File: ${file}\n` +
          `Layer "${authority}" references higher authority "${refLevel}"`
        );
        hasError = true;
      }

      // Extra safety: community restrictions
      if (authority === "community" && refLevel === "canon") {
        console.error(
          `❌ Community layer may not reference Canon directly:\n${file}`
        );
        hasError = true;
      }
    }
  }
}

if (hasError) {
  process.exit(1);
}

console.log("✅ Dependency graph validation passed.");
