import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import {
  SpatialTimeline,
  TimelineList,
} from "@/components/humanity/timeline";
import {
  historyEvents,
  threads,
  categoryMeta,
  regionMeta,
} from "@/content/history";
import { formatEventRange } from "@/lib/format";

export const metadata: Metadata = {
  title: "Humanity",
  description:
    "A hundred-plus events across three thousand years — multi-regional, threaded, and honest about uncertainty.",
};

interface HumanityPageProps {
  searchParams: Promise<{ thread?: string; region?: string; category?: string }>;
}

export default async function HumanityPage({
  searchParams,
}: HumanityPageProps) {
  const { thread: threadParam, region: regionParam, category: categoryParam } =
    await searchParams;

  let events = historyEvents;
  if (threadParam) {
    const thread = threads.find((t) => t.id === threadParam);
    if (thread) {
      const ids = new Set(thread.eventIds);
      events = events.filter((event) => ids.has(event.id));
    }
  }
  if (regionParam && regionParam in regionMeta) {
    events = events.filter((event) => event.region === regionParam);
  }
  if (categoryParam && categoryParam in categoryMeta) {
    events = events.filter((event) => event.category === categoryParam);
  }

  const activeThread = threads.find((t) => t.id === threadParam);
  const filtersActive = Boolean(threadParam || regionParam || categoryParam);

  /** Build a query string, dropping empty params. */
  const hrefWith = (params: Record<string, string | undefined>) => {
    const search = new URLSearchParams();
    const merged = { thread: threadParam, region: regionParam, category: categoryParam, ...params };
    for (const [key, value] of Object.entries(merged)) {
      if (value) search.set(key, value);
    }
    const qs = search.toString();
    return qs ? `/humanity?${qs}` : "/humanity";
  };

  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">
            History · {formatEventRange({ ...historyEvents[0], approximate: true })} →
            today
          </p>
          <h1 className="page-title">Humanity</h1>
          <p className="page-lede">
            {historyEvents.length} events across three thousand years — chosen
            to be multi-regional and honest about uncertainty. Follow a{" "}
            <strong>thread</strong> to trace one capability through time, or
            filter by region and kind.
          </p>
        </header>

        {/* ---------------------------- threads ---------------------------- */}
        <nav className="filter-row" aria-label="Threads">
          <p className="filter-row-label mono-meta">Threads</p>
          <ul className="filter-chips">
            <li>
              <Link
                href={hrefWith({ thread: undefined })}
                className={`chip${!threadParam ? " chip-active" : ""}`}
                aria-current={!threadParam ? "true" : undefined}
              >
                All events
              </Link>
            </li>
            {threads.map((t) => (
              <li key={t.id}>
                <Link
                  href={hrefWith({ thread: t.id })}
                  className={`chip${threadParam === t.id ? " chip-active" : ""}`}
                  aria-current={threadParam === t.id ? "true" : undefined}
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
          {activeThread && (
            <p className="thread-description">{activeThread.description}</p>
          )}
        </nav>

        {/* -------------------------- region filter ------------------------ */}
        <nav className="filter-row" aria-label="Regions">
          <p className="filter-row-label mono-meta">Regions</p>
          <ul className="filter-chips">
            <li>
              <Link
                href={hrefWith({ region: undefined })}
                className={`chip${!regionParam ? " chip-active" : ""}`}
              >
                All
              </Link>
            </li>
            {(Object.keys(regionMeta) as Array<keyof typeof regionMeta>)
              .filter((r) => r !== "world")
              .map((r) => (
                <li key={r}>
                  <Link
                    href={hrefWith({ region: r })}
                    className={`chip${regionParam === r ? " chip-active" : ""}`}
                  >
                    {regionMeta[r].label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        {/* ------------------------- category filter ----------------------- */}
        <nav className="filter-row" aria-label="Categories">
          <p className="filter-row-label mono-meta">Kinds</p>
          <ul className="filter-chips">
            <li>
              <Link
                href={hrefWith({ category: undefined })}
                className={`chip${!categoryParam ? " chip-active" : ""}`}
              >
                All
              </Link>
            </li>
            {(Object.keys(categoryMeta) as Array<keyof typeof categoryMeta>).map(
              (c) => (
                <li key={c}>
                  <Link
                    href={hrefWith({ category: c })}
                    className={`chip${categoryParam === c ? " chip-active" : ""}`}
                  >
                    {categoryMeta[c].label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {filtersActive && (
          <p className="filters-status" role="status">
            Showing {events.length} of {historyEvents.length} events.{" "}
            <Link href="/humanity">Clear filters</Link>
          </p>
        )}

        {/* --------------------------- the views --------------------------- */}
        {events.length === 0 ? (
          <p className="timeline-empty">
            No events match this combination — try clearing a filter.
          </p>
        ) : (
          <>
            {/* Desktop: spatial band. Mobile & assistive tech: the list. */}
            <div className="timeline-spatial-only">
              <SpatialTimeline events={events} />
            </div>
            <div className="timeline-list-only">
              <h2 className="mono-meta timeline-list-label">
                Chronology
              </h2>
              <TimelineList events={events} />
            </div>
          </>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
