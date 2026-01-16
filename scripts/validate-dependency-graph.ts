import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Authority levels in strict order.
 * Lower index = higher authority.
 */
const AUTHORITY_ORDER = [
  "scripture",    // LEVEL 0
  "gloss",        // LEVEL 1
  "concepts",     // LEVEL 1
  "entities",     // LEVEL 2
  "synonyms",     // LEVEL 3A
  "translations", // LEVEL 3B
  "commentary",   // LEVEL 3B
  "principles",   // LEVEL 4
  "skills",       // LEVEL 5
  "guidance",     // LEVEL 6
  "sampradaya",   // interpretive layer
] as const;

type Authority = typeof AUTHORITY_ORDER[number];

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

/**
 * Determine authority level from file path.
 */
function detectAuthority(filePath: string): Authority | null {
  const parts = filePath.split(path.sep);
  const idx = parts.indexOf("content");
  if (idx === -1) return null;
  const layer = parts[idx + 1] as Authority;
  return AUTHORITY_ORDER.includes(layer) ? layer : null;
}

/**
 * Load all MD/MDX files recursively.
 */
function getAllContentFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllContentFiles(full);
    if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) return [full];
    return [];
  });
}

/**
 * Extract explicit dependencies from frontmatter.
 */
function extractDependencies(data: any): string[] {
  return [
    ...(data.depends_on ?? []),
    ...(data.references ?? []),
    ...(data.cites ?? []),
  ];
}

/**
 * MAIN
 */
const files = getAllContentFiles(CONTENT_ROOT);

const errors: string[] = [];

for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  const { data } = matter(raw);

  const fromAuthority = detectAuthority(file);
  if (!fromAuthority) continue;

  const fromIndex = AUTHORITY_ORDER.indexOf(fromAuthority);
  const deps = extractDependencies(data);

  for (const dep of deps) {
    const target = files.find((f) => f.includes(dep));
    if (!target) {
      errors.push(`Missing dependency: ${dep} (referenced in ${file})`);
      continue;
    }

    const toAuthority = detectAuthority(target);
    if (!toAuthority) continue;

    const toIndex = AUTHORITY_ORDER.indexOf(toAuthority);

    if (toIndex < fromIndex) {
      // OK: downward dependency
      continue;
    }

    errors.push(
      `Authority violation:
${file} (${fromAuthority})
→ depends on ${target} (${toAuthority})`
    );
  }
}

if (errors.length) {
  console.error("❌ Dependency graph validation failed:\n");
  errors.forEach((e) => console.error(e));
  process.exit(1);
}

console.log("✅ Dependency graph validation passed.");
