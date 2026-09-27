import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import {
  journeyChapters,
  entriesByChapter,
} from "@/content/journey";
import { getEvents } from "@/content/history";
import { articles } from "@/content/writing";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "From a home computer and a mailed Linux CD to cloud product management, in five chapters — with dates. The path that the product decisions sit on.",
  alternates: {
    canonical: "/journey"
  },
};

const ladder = [
  {
    rung: "Physical",
    question: "Bare metal. You touch what breaks.",
    example: "Racks, cables, PBX cabinets",
  },
  {
    rung: "Virtualization",
    question: "One host, many machines.",
    example: "Hypervisors, VMs, snapshots",
  },
  {
    rung: "Cloud",
    question: "Location stops mattering.",
    example: "Regions, IaaS, elastic scale",
  },
  {
    rung: "Cloud native",
    question: "Servers stop mattering.",
    example: "Containers, orchestration, services",
  },
  {
    rung: "Intelligent infrastructure",
    question: "Configuration starts writing itself.",
    example: "Automation, AI-assisted operations",
  },
];

export default function JourneyPage() {
  const byChapter = entriesByChapter();

  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">A career in five chapters</p>
          <h1 className="page-title">Journey</h1>
          <p className="page-lede">
            The path ran from analog systems up through networking and the
            datacenter, one rung at a time, and reached product in 2022.
            Told chronologically, with the history that rhymes. Only dated
            facts carry dates; the early years are deliberately untimed.
          </p>
        </header>

        {/* chapter index */}
        <nav aria-label="Chapters" className="chapter-index">
          <ol className="chapter-index-list">
            {journeyChapters.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`}>
                  <span className="mono-meta">{chapter.index}</span>
                  <span>{chapter.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* chapters */}
        {journeyChapters.map((chapter) => {
          const entries = byChapter.get(chapter.id) ?? [];
          return (
            <section
              key={chapter.id}
              id={chapter.id}
              className="journey-chapter"
              aria-labelledby={`${chapter.id}-h`}
            >
              <header className="journey-chapter-header">
                <p className="journey-chapter-index mono-meta">{chapter.index}</p>
                <h2 id={`${chapter.id}-h`} className="journey-chapter-title">
                  {chapter.title}
                </h2>
                <p className="journey-chapter-era mono-meta">{chapter.era}</p>
                <p className="journey-chapter-desc">{chapter.description}</p>
              </header>

              <ol className="journey-entries">
                {entries.map((entry) => {
                  const relatedHistory = getEvents(entry.relatedHistory ?? []);
                  const relatedArticles = (entry.relatedArticles ?? [])
                    .map((slug) => articles.find((a) => a.slug === slug))
                    .filter((a): a is NonNullable<typeof a> => Boolean(a));
                  return (
                    <li key={entry.id} id={entry.id} className="journey-entry">
                      <article
                        className={`journey-entry-card${entry.artifact ? " journey-entry-artifact" : ""}`}
                      >
                        {entry.artifact && (
                          <p className="journey-artifact-badge mono-meta">
                            Artifact
                          </p>
                        )}
                        <p className="journey-entry-period mono-meta">
                          {entry.period}
                        </p>
                        <h3 className="journey-entry-title">
                          {entry.role ? `${entry.role}` : entry.title}
                          {entry.role && entry.title !== entry.role && (
                            <span className="journey-entry-subtitle">
                              {" "}
                              — {entry.title}
                            </span>
                          )}
                        </h3>
                        {entry.organization && (
                          <p className="journey-entry-org">{entry.organization}</p>
                        )}
                        <p className="journey-entry-story">{entry.story}</p>
                        {entry.reflection && (
                          <p className="journey-entry-reflection">
                            {entry.reflection}
                          </p>
                        )}
                        <ul className="journey-entry-tech" aria-label="Technologies">
                          {entry.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                        {(relatedHistory.length > 0 ||
                          relatedArticles.length > 0) && (
                          <div className="journey-entry-links">
                            {relatedHistory.length > 0 && (
                              <p className="journey-links-row">
                                <span className="mono-meta">History&nbsp;· </span>
                                {relatedHistory.map((event, i) => (
                                  <span key={event.id}>
                                    {i > 0 && ", "}
                                    <Link href={`/humanity/${event.id}`}>
                                      {event.title}
                                    </Link>
                                  </span>
                                ))}
                              </p>
                            )}
                            {relatedArticles.length > 0 && (
                              <p className="journey-links-row">
                                <span className="mono-meta">Writing&nbsp;· </span>
                                {relatedArticles.map((article, i) => (
                                  <span key={article.slug}>
                                    {i > 0 && ", "}
                                    <Link href={`/writing/${article.slug}`}>
                                      {article.title}
                                    </Link>
                                  </span>
                                ))}
                              </p>
                            )}
                          </div>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}

        {/* Ubuntu artifact THEN/NOW */}
        <section className="artifact-then-now" aria-labelledby="then-now-h">
          <h2 id="then-now-h" className="page-title-sm">
            The Ubuntu CD, then and now
          </h2>
          <div className="then-now-grid">
            <div className="then-now-cell">
              <p className="mono-meta then-now-label">Then</p>
              <p className="then-now-body">
                A pressed CD in an envelope from the Netherlands, weeks of
                waiting, an install that had to work the first time — because
                reinstalling meant another postal round trip.
              </p>
            </div>
            <div className="then-now-cell">
              <p className="mono-meta then-now-label">Now</p>
              <p className="then-now-body">
                <code>terraform apply</code>. Whole environments described in
                code, provisioned in minutes, torn down and rebuilt without
                fear. The operating system is the smallest part.
              </p>
            </div>
          </div>
          <p className="then-now-coda">
            Same curiosity, different ladder. That span — from a postal CD to
            infrastructure-as-code — is the whole Journey in one artifact.
          </p>
        </section>

        {/* abstraction ladder */}
        <section className="ladder" aria-labelledby="ladder-h" id="abstraction-ladder">
          <h2 id="ladder-h" className="page-title-sm">
            The abstraction ladder
          </h2>
          <p className="ladder-lede">
            The datacenter era is easiest to explain as a ladder. Each rung
            hides the one below it — and changes who can fix what.
          </p>
          <ol className="ladder-list">
            {ladder.map((step, index) => (
              <li key={step.rung} className="ladder-rung" style={{ "--rung": index } as React.CSSProperties}>
                <p className="ladder-rung-name">{step.rung}</p>
                <p className="ladder-rung-question">{step.question}</p>
                <p className="ladder-rung-example mono-meta">{step.example}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
