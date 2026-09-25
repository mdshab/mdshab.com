import Link from "next/link";
import { scaleLinear } from "d3-scale";

import type { HistoryEvent } from "@/types/content";
import { formatEventRange, formatYear } from "@/lib/format";
import { categoryMeta } from "@/content/history";

/**
 * Event card — used by every Humanity view. Semantic <article>, the
 * range and category are text (never color-only), and the whole card
 * is one link.
 */
export function EventCard({
  event,
  accent,
}: {
  event: HistoryEvent;
  accent?: string;
}) {
  return (
    <article className={`event-card${accent ? ` event-card-${accent}` : ""}`}>
      <Link href={`/humanity/${event.id}`} className="event-card-link">
        <p className="event-card-range mono-meta">{formatEventRange(event)}</p>
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-summary">{event.summary}</p>
        <p className="event-card-category mono-meta">
          {categoryMeta[event.category].label}
          {event.region !== "world" && ` · ${event.region.replace(/-/g, " ")}`}
        </p>
      </Link>
    </article>
  );
}

/** Accessible textual alternative shared by both timeline views. */
export function TimelineList({ events }: { events: HistoryEvent[] }) {
  return (
    <ol className="timeline-list" aria-label="Chronological list of events">
      {events.map((event) => (
        <li key={event.id} className="timeline-list-item">
          <article>
            <p className="timeline-list-year mono-meta">
              {formatYear(event.startYear, { ce: true })}
              {event.endYear !== undefined &&
                ` – ${formatYear(event.endYear, { ce: true })}`}
              {event.approximate && " (c.)"}
            </p>
            <h3 className="timeline-list-title">
              <Link href={`/humanity/${event.id}`}>{event.title}</Link>
            </h3>
            <p className="timeline-list-summary">{event.summary}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}

/**
 * Desktop spatial timeline: events positioned by year on a horizontal
 * band using d3-scale. Era rails and century ticks give orientation;
 * a screen-reader heading + the TimelineList (visually hidden on
 * desktop, primary on mobile) provide the textual alternative.
 */
export function SpatialTimeline({ events }: { events: HistoryEvent[] }) {
  const MIN_YEAR = -1200;
  const MAX_YEAR = 2030;

  const scale = scaleLinear()
    .domain([MIN_YEAR, MAX_YEAR])
    .range([0, 100]);

  const centuries: Array<{ year: number; label: string }> = [];
  for (let y = -1000; y <= 2000; y += 500) {
    centuries.push({ year: y, label: formatYear(y, { ce: true }) });
  }

  return (
    <section aria-labelledby="spatial-timeline-h" className="spatial-timeline">
      <h2 id="spatial-timeline-h" className="mono-meta spatial-timeline-label">
        Spatial timeline — scroll horizontally
      </h2>

      <div
        className="spatial-timeline-scroll"
        role="group"
        aria-label="Horizontal timeline. The same events follow below as a chronological list."
        tabIndex={0}
      >
        <div
          className="spatial-timeline-band"
          style={{ width: `${Math.max(events.length * 2.2, 160)}rem` }}
        >
          {/* era rails */}
          <div className="spatial-timeline-axis" aria-hidden="true">
            {centuries.map(({ year, label }) => (
              <div
                key={year}
                className="spatial-timeline-tick"
                style={{ left: `${scale(year)}%` }}
              >
                <span className="spatial-timeline-tick-label">{label}</span>
              </div>
            ))}
            <div className="spatial-timeline-rail" />
          </div>

          {/* events */}
          <ul className="spatial-timeline-events" aria-label="Events on the timeline">
            {events.map((event, index) => {
              const x = scale(event.startYear);
              const above = index % 2 === 0;
              return (
                <li
                  key={event.id}
                  className={`spatial-event spatial-event-${above ? "above" : "below"}`}
                  style={
                    {
                      left: `${x}%`,
                      "--stagger": `${(index % 3) * 3.4}rem`,
                    } as React.CSSProperties
                  }
                >
                  <EventCard event={event} accent={event.category} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
