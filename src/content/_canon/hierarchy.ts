export const CANONICAL_HIERARCHY = {
  sruti: { rank: 1 },
  smrti: { rank: 2 },
  itihasa: { rank: 3 },
  purana: { rank: 4 },
  agama: { rank: 5 },
} as const;

export type CanonicalCategory = keyof typeof CANONICAL_HIERARCHY;

export function rankFor(category: CanonicalCategory): number {
  return CANONICAL_HIERARCHY[category].rank;
}
