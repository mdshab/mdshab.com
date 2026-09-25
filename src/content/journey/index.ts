import type { JourneyChapter, JourneyEntry } from "@/types/content";

import { journeyChapters, journeyEntries } from "./journey";

export { journeyChapters, journeyEntries };

/** Entries grouped by chapter, in chapter order. */
export function entriesByChapter(): Map<JourneyChapter["id"], JourneyEntry[]> {
  const map = new Map<JourneyChapter["id"], JourneyEntry[]>();
  for (const chapter of journeyChapters) {
    map.set(
      chapter.id,
      journeyEntries.filter((entry) => entry.chapter === chapter.id),
    );
  }
  return map;
}

export function getChapter(id: JourneyChapter["id"]): JourneyChapter | undefined {
  return journeyChapters.find((chapter) => chapter.id === id);
}
