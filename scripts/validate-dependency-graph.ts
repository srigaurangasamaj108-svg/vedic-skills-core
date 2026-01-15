import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Constitutional authority levels
 */
const LEVELS: Record<string, number> = {
  scripture: 0,
  gloss: 1,
  concepts: 1,
  entities: 2,
  translations: 3,
  commentary: 3,
  principles: 4,
  skills: 5,
  guidance: 6,
};

type Node = {
  id: string;
  level: number;
  deps: string[];
};

/**
 * Recursively collect .md / .mdx files
 */
function collectFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return collectFiles(full);
    if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) return [full];
    return [];
  });
}

/**
 * Load all atoms directly from disk
 */
function loadNodes(): Map<string, Node> {
  const nodes = new Map<string, Node>();

  for (const [collection, level] of Object.entries(LEVELS)) {
    const root = path.join("src/content", collection);
    const files = collectFiles(root);

    for (const file of files) {
      const raw = fs.readFileSync(file, "utf8");
      const { data } = matter(raw);

      const slug = path
        .relative(root, file)
        .replace(/\.(md|mdx)$/, "");

      const id = `${collection}:${slug}`;
      const deps: string[] = [];

    if (collection !== "scripture") {
  if (data.canonical_ref) {
    deps.push(`scripture:${data.canonical_ref}`);
  }

  if (Array.isArray(data.canonical_refs)) {
    for (const ref of data.canonical_refs) {
      deps.push(`scripture:${ref}`);
    }
  }
}


      nodes.set(id, { id, level, deps });
    }
  }

  return nodes;
}

/**
 * Enforce downward-only authority
 */
function enforceDirection(nodes: Map<string, Node>) {
  for (const node of nodes.values()) {
    for (const depId of node.deps) {
      const dep = nodes.get(depId);
      if (!dep) {
        throw new Error(`Missing dependency: ${node.id} → ${depId}`);
      }
      if (dep.level >= node.level) {
        throw new Error(
          `Illegal dependency: ${node.id} (L${node.level}) → ${dep.id} (L${dep.level})`
        );
      }
    }
  }
}

/**
 * Detect cycles
 */
function detectCycles(nodes: Map<string, Node>) {
  const visited = new Set<string>();
  const stack = new Set<string>();

  function visit(id: string) {
    if (stack.has(id)) throw new Error(`Cycle detected at ${id}`);
    if (visited.has(id)) return;

    visited.add(id);
    stack.add(id);

    const node = nodes.get(id);
    if (node) for (const dep of node.deps) visit(dep);

    stack.delete(id);
  }

  for (const id of nodes.keys()) visit(id);
}

/**
 * Run validator
 */
try {
  const nodes = loadNodes();
  enforceDirection(nodes);
  detectCycles(nodes);
  console.log("✅ Dependency graph validation passed.");
} catch (err) {
  console.error("❌ Dependency graph validation failed.");
  console.error(err);
  process.exit(1);
}
