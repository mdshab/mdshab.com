import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import {
  thinkers,
  philosophicalQuestions,
  traditionLabels,
  getQuestionThinkers,
} from "@/content/ideas";
import { formatYear } from "@/lib/format";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "Thinkers across traditions, and the questions they sharpened — from Athens to Nishapur to Kyoto.",
};

function thinkerLifetime(thinker: (typeof thinkers)[number]): string {
  if (thinker.birth === undefined) return "";
  const birth = formatYear(thinker.birth);
  const death = thinker.death !== undefined ? formatYear(thinker.death) : "";
  const prefix = thinker.approximate ? "c. " : "";
  return death ? `${prefix}${birth} – ${death}` : `${prefix}${birth}`;
}

export default function IdeasPage() {
  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">The history of ideas</p>
          <h1 className="page-title">Ideas</h1>
          <p className="page-lede">
            {thinkers.length} thinkers across traditions and {philosophicalQuestions.length}{" "}
            questions that never expire. Start from a person or from a
            question — every path connects to the history timeline.
          </p>
        </header>

        {/* --------------------------- questions --------------------------- */}
        <section aria-labelledby="questions-h" className="ideas-questions">
          <h2 id="questions-h" className="section-title">
            Start from a question
          </h2>
          <ul className="question-grid">
            {philosophicalQuestions.map((question) => {
              const voices = getQuestionThinkers(question);
              return (
                <li key={question.id}>
                  <Link
                    href={`/ideas/questions/${question.id}`}
                    className="question-card"
                  >
                    <p className="question-card-q">{question.question}</p>
                    <p className="question-card-framing">{question.framing}</p>
                    <p className="question-card-voices mono-meta">
                      {voices.length} perspective{voices.length === 1 ? "" : "s"}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ---------------------------- thinkers --------------------------- */}
        <section aria-labelledby="thinkers-h" className="ideas-thinkers">
          <h2 id="thinkers-h" className="section-title">
            The thinkers
          </h2>
          <ul className="thinker-grid">
            {thinkers.map((thinker) => (
              <li key={thinker.id}>
                <Link href={`/ideas/${thinker.id}`} className="thinker-card">
                  <p className="thinker-card-name">{thinker.name}</p>
                  <p className="thinker-card-life mono-meta">
                    {thinkerLifetime(thinker) || traditionLabels[thinker.tradition]}
                  </p>
                  <p className="thinker-card-place">{thinker.placeLabel}</p>
                  <p className="thinker-card-summary">{thinker.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
