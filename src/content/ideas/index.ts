import type { PhilosophicalQuestion, Thinker } from "@/types/content";

import { thinkers } from "./thinkers";
import { philosophicalQuestions } from "./questions";

export { thinkers, philosophicalQuestions };

const thinkerIndex = new Map<string, Thinker>(
  thinkers.map((thinker) => [thinker.id, thinker]),
);

const questionIndex = new Map<string, PhilosophicalQuestion>(
  philosophicalQuestions.map((question) => [question.id, question]),
);

export function getThinker(id: string): Thinker | undefined {
  return thinkerIndex.get(id);
}

export function getQuestion(id: string): PhilosophicalQuestion | undefined {
  return questionIndex.get(id);
}

/** Resolve thinker ids, skipping dangling references. */
export function getThinkers(ids: readonly string[]): Thinker[] {
  return ids
    .map((id) => thinkerIndex.get(id))
    .filter((thinker): thinker is Thinker => Boolean(thinker));
}

export function getRelatedThinkers(thinker: Thinker): Thinker[] {
  return getThinkers(thinker.relatedThinkers);
}

/** Questions a thinker speaks to, resolved. */
export function getThinkerQuestions(thinker: Thinker): PhilosophicalQuestion[] {
  return thinker.questions
    .map((id) => questionIndex.get(id))
    .filter((question): question is PhilosophicalQuestion => Boolean(question));
}

/** Thinkers who offer a perspective on a question, resolved. */
export function getQuestionThinkers(question: PhilosophicalQuestion): Thinker[] {
  return getThinkers(question.thinkerIds);
}

export const traditionLabels: Record<Thinker["tradition"], string> = {
  greek: "Greek philosophy",
  stoic: "Stoicism",
  persian: "Persian tradition",
  islamic: "Islamic philosophy",
  sufi: "Sufism",
  buddhist: "Buddhism",
  confucian: "Confucianism",
  daoist: "Daoism",
  vedanta: "Vedanta",
  zen: "Zen",
  enlightenment: "Enlightenment",
  existentialist: "Existentialism",
  modern: "Modern philosophy",
};
