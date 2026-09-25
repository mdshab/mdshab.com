import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import {
  thinkers,
  getThinker,
  getRelatedThinkers,
  getThinkerQuestions,
  traditionLabels,
} from "@/content/ideas";
import { formatYear } from "@/lib/format";

interface ThinkerPageProps {
  params: Promise<{ thinker: string }>;
}

export function generateStaticParams() {
  return thinkers.map((thinker) => ({ thinker: thinker.id }));
}

export async function generateMetadata({
  params,
}: ThinkerPageProps): Promise<Metadata> {
  const { thinker: id } = await params;
  const thinker = getThinker(id);
  if (!thinker) return { title: "Thinker not found" };
  return { title: thinker.name, description: thinker.summary };
}

export default async function ThinkerPage({ params }: ThinkerPageProps) {
  const { thinker: id } = await params;
  const thinker = getThinker(id);
  if (!thinker) notFound();

  const related = getRelatedThinkers(thinker);
  const questions = getThinkerQuestions(thinker);

  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <article className="thinker-page">
          <nav aria-label="Breadcrumb" className="breadcrumb mono-meta">
            <Link href="/ideas">Ideas</Link>
            <span aria-hidden="true"> / </span>
            <span>{thinker.name}</span>
          </nav>

          <header className="thinker-header">
            <h1 className="page-title">{thinker.name}</h1>
            <p className="thinker-meta">
              {thinker.birth !== undefined && (
                <span className="mono-meta">
                  {thinker.approximate ? "c. " : ""}
                  {formatYear(thinker.birth)}
                  {thinker.death !== undefined &&
                    ` – ${formatYear(thinker.death)}`}
                </span>
              )}
              <span> · {thinker.placeLabel}</span>
              <span> · {traditionLabels[thinker.tradition]}</span>
            </p>
            <p className="thinker-summary">{thinker.summary}</p>
          </header>

          <div className="prose-editorial">
            {thinker.quote && (
              <blockquote>
                <p>“{thinker.quote.text}”</p>
                <p className="thinker-quote-source mono-meta">
                  {thinker.quote.source}
                </p>
              </blockquote>
            )}

            <h2>Core ideas</h2>
            <ul>
              {thinker.coreIdeas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>

            <h2>Historical context</h2>
            <p>{thinker.historicalContext}</p>

            {thinker.works && thinker.works.length > 0 && (
              <>
                <h2>Key works</h2>
                <p>{thinker.works.join(" · ")}</p>
              </>
            )}

            {questions.length > 0 && (
              <>
                <h2>Questions they speak to</h2>
                <ul className="cross-links">
                  {questions.map((question) => (
                    <li key={question.id}>
                      <Link href={`/ideas/questions/${question.id}`}>
                        {question.question}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {related.length > 0 && (
              <>
                <h2>Minds in conversation</h2>
                <ul className="cross-links">
                  {related.map((rel) => (
                    <li key={rel.id}>
                      <Link href={`/ideas/${rel.id}`}>
                        {rel.name}
                      </Link>
                      <span className="cross-links-note">{rel.placeLabel}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2>Sources</h2>
            <ul className="event-sources">
              {thinker.sources.map((source) => (
                <li key={source.title}>{source.title}</li>
              ))}
            </ul>
          </div>

          {/* neighbor navigation */}
          <nav className="event-pager" aria-label="More thinkers">
            <div>
              {(() => {
                const index = thinkers.findIndex((t) => t.id === thinker.id);
                const prev = thinkers[index - 1];
                return prev ? (
                  <Link href={`/ideas/${prev.id}`} className="event-pager-link">
                    <span className="mono-meta">← Previous</span>
                    <span>{prev.name}</span>
                  </Link>
                ) : null;
              })()}
            </div>
            <div className="event-pager-next">
              {(() => {
                const index = thinkers.findIndex((t) => t.id === thinker.id);
                const next = thinkers[index + 1];
                return next ? (
                  <Link href={`/ideas/${next.id}`} className="event-pager-link">
                    <span className="mono-meta">Next →</span>
                    <span>{next.name}</span>
                  </Link>
                ) : null;
              })()}
            </div>
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
