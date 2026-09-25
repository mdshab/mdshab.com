import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { EventCard } from "@/components/humanity/timeline";
import {
  getEvent,
  getRelatedEvents,
  historyEvents,
  threads,
  categoryMeta,
  regionMeta,
} from "@/content/history";
import { formatEventRange } from "@/lib/format";
import { journeyEntries } from "@/content/journey";
import { articles } from "@/content/writing";

interface EventPageProps {
  params: Promise<{ event: string }>;
}

export function generateStaticParams() {
  return historyEvents.map((event) => ({ event: event.id }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { event: id } = await params;
  const event = getEvent(id);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { event: id } = await params;
  const event = getEvent(id);
  if (!event) notFound();

  const related = getRelatedEvents(event);
  const participatingThreads = threads.filter((thread) =>
    thread.eventIds.includes(event.id),
  );
  const journeyLinks = journeyEntries.filter((entry) =>
    entry.relatedHistory?.includes(event.id),
  );
  const articleLinks = articles.filter((article) =>
    article.relatedEvents?.includes(event.id),
  );

  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <article className="event-page">
          <nav aria-label="Breadcrumb" className="breadcrumb mono-meta">
            <Link href="/humanity">Humanity</Link>
            <span aria-hidden="true"> / </span>
            <span>{event.title}</span>
          </nav>

          <header className="event-page-header">
            <p className="event-page-range mono-meta">
              {formatEventRange(event)}
            </p>
            <h1 className="event-page-title">{event.title}</h1>
            <p className="event-page-meta">
              {categoryMeta[event.category].label}
              {" · "}
              {regionMeta[event.region].label}
              {event.modernCountry ? ` · ${event.modernCountry}` : ""}
              {event.approximate && " · approximate dating"}
            </p>
          </header>

          <div className="event-page-body prose-editorial">
            <p className="event-page-summary">{event.summary}</p>
            <h2>Why it matters</h2>
            <p>{event.significance}</p>

            {event.people && event.people.length > 0 && (
              <>
                <h2>People</h2>
                <p>{event.people.join(" · ")}</p>
              </>
            )}

            {participatingThreads.length > 0 && (
              <>
                <h2>Threads</h2>
                <p>
                  This event sits on{" "}
                  {participatingThreads.map((thread, index) => (
                    <span key={thread.id}>
                      {index > 0 && (index === participatingThreads.length - 1 ? " and " : ", ")}
                      <Link href={`/humanity?thread=${thread.id}`}>
                        {thread.title}
                      </Link>
                    </span>
                  ))}
                  .
                </p>
              </>
            )}

            {related.length > 0 && (
              <>
                <h2>Related events</h2>
                <ul className="related-grid" aria-label="Related events">
                  {related.map((rel) => (
                    <li key={rel.id}>
                      <EventCard event={rel} />
                    </li>
                  ))}
                </ul>
              </>
            )}

            {(journeyLinks.length > 0 || articleLinks.length > 0) && (
              <>
                <h2>From this site</h2>
                <ul className="cross-links">
                  {journeyLinks.map((entry) => (
                    <li key={entry.id}>
                      <Link href={`/journey#${entry.id}`}>
                        Journey · {entry.title}
                      </Link>
                      <span className="cross-links-note">
                        {entry.period}
                        {entry.role ? ` · ${entry.role}` : ""}
                      </span>
                    </li>
                  ))}
                  {articleLinks.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/writing/${article.slug}`}>
                        Writing · {article.title}
                      </Link>
                      <span className="cross-links-note">
                        {article.readingTime} min read
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2>Sources</h2>
            <ul className="event-sources">
              {event.sources.map((source) => (
                <li key={source.title}>
                  {source.url ? (
                    <a
                      href={source.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {source.title}
                    </a>
                  ) : (
                    source.title
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* prev/next chronologically */}
          <nav className="event-pager" aria-label="Chronological navigation">
            {(() => {
              const index = historyEvents.findIndex((e) => e.id === event.id);
              const prev = historyEvents[index - 1];
              const next = historyEvents[index + 1];
              return (
                <>
                  <div>
                    {prev && (
                      <Link href={`/humanity/${prev.id}`} className="event-pager-link">
                        <span className="mono-meta">← Earlier</span>
                        <span>{prev.title}</span>
                      </Link>
                    )}
                  </div>
                  <div className="event-pager-next">
                    {next && (
                      <Link href={`/humanity/${next.id}`} className="event-pager-link">
                        <span className="mono-meta">Later →</span>
                        <span>{next.title}</span>
                      </Link>
                    )}
                  </div>
                </>
              );
            })()}
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
