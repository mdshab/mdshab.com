import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { now } from "@/content/mind/mind";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Mehdi is building, working on, reading and thinking about right now.",
};

/** "2026-09" → "September 2026"; passes through anything already long-form. */
function formatUpdated(stamp: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(stamp);
  if (!match) return stamp;
  const [ , year, month ] = match;
  const monthName = new Date(Date.UTC(Number(year), Number(month) - 1, 1))
    .toLocaleString("en-US", { month: "long", timeZone: "UTC" });
  return `${monthName} ${year}`;
}

export default function NowPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">A living page</p>
          <h1 className="page-title">Now</h1>
          <p className="page-lede">
            What I&apos;m focused on at this particular moment — updated by
            hand, in the spirit of{" "}
            <a
              href="https://nownownow.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              the /now page movement
            </a>
            . Last updated {formatUpdated(now.updated)}.
          </p>
        </header>

        <dl className="now-list">
          {now.items.map((item) => (
            <div key={item.label} className="now-item">
              <dt className="now-item-label mono-meta">{item.label}</dt>
              <dd className="now-item-value">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="now-note">
          Written {formatUpdated(now.updated)} — the rest of this site is a
          record; this page is the present tense.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
