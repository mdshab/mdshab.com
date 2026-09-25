import type { HistoryEvent, Thread } from "@/types/content";

import { ancientEvents } from "./ancient";
import { medievalEvents } from "./medieval";
import { modernEvents } from "./modern";
import { computingEvents } from "./computing";
import { threads } from "./threads";

/** All history events in chronological order (BCE negative → present). */
export const historyEvents: HistoryEvent[] = [
  ...ancientEvents,
  ...medievalEvents,
  ...modernEvents,
  ...computingEvents,
].sort((a, b) => a.startYear - b.startYear);

export { threads };

const eventIndex = new Map<string, HistoryEvent>(
  historyEvents.map((event) => [event.id, event]),
);

const threadIndex = new Map<string, Thread>(threads.map((t) => [t.id, t]));

export function getEvent(id: string): HistoryEvent | undefined {
  return eventIndex.get(id);
}

/** Resolve event ids to events, skipping any dangling references. */
export function getEvents(ids: readonly string[]): HistoryEvent[] {
  return ids
    .map((id) => eventIndex.get(id))
    .filter((event): event is HistoryEvent => Boolean(event));
}

export function getThread(id: string): Thread | undefined {
  return threadIndex.get(id);
}

/** Events that participate in a thread, in chronological order. */
export function getThreadEvents(threadId: string): HistoryEvent[] {
  const thread = threadIndex.get(threadId);
  if (!thread) return [];
  return getEvents(thread.eventIds);
}

/** Events related to the given event, resolved and ordered. */
export function getRelatedEvents(event: HistoryEvent): HistoryEvent[] {
  return getEvents(event.relatedEvents);
}

/** Category display metadata (labels + accent keys). */
export const categoryMeta: Record<
  HistoryEvent["category"],
  { label: string }
> = {
  civilizations: { label: "Civilizations" },
  empires: { label: "Empires" },
  science: { label: "Science" },
  technology: { label: "Technology" },
  philosophy: { label: "Philosophy" },
  religion: { label: "Religion" },
  art: { label: "Art" },
  economics: { label: "Economics" },
  medicine: { label: "Medicine" },
  communication: { label: "Communication" },
  computing: { label: "Computing" },
  knowledge: { label: "Knowledge" },
  wars: { label: "Wars & conflicts" },
  exploration: { label: "Exploration" },
};

export const regionMeta: Record<HistoryEvent["region"], { label: string }> = {
  world: { label: "World" },
  "middle-east": { label: "Middle East" },
  persia: { label: "Persia" },
  europe: { label: "Europe" },
  "east-asia": { label: "East Asia" },
  "south-asia": { label: "South Asia" },
  africa: { label: "Africa" },
  americas: { label: "Americas" },
  oceania: { label: "Oceania" },
};

/** Sorted unique category values, for building filters. */
export const historyCategories = Object.keys(categoryMeta) as Array<
  HistoryEvent["category"]
>;

export const historyRegions = Object.keys(regionMeta) as Array<
  HistoryEvent["region"]
>;
