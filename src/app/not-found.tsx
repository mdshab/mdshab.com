import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">404</p>
          <h1 className="page-title">This page isn&apos;t on the map</h1>
          <p className="page-lede">
            Three thousand years of history, and this URL isn&apos;t in any of
            them. It may have been renamed, or it may never have existed —
            even the archive has edges.
          </p>
        </header>
        <div className="not-found-actions">
          <Link className="btn btn-primary" href="/">
            Back to the beginning
          </Link>
          <Link className="btn" href="/humanity">
            Browse the timeline
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
