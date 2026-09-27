import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { BreathingExercise } from "@/components/mind/breathing-exercise";
import { reflections } from "@/content/mind";

export const metadata: Metadata = {
  title: "Mind",
  description:
    "A quiet corner of the site: breathe, sit, read a short reflection. No streaks, no scores.",
};

export default function MindPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page mind-page">
        <header className="mind-header">
          <h1 className="mind-title">Be here.</h1>
          <p className="mind-sub">
            The rest of this site is about three thousand years of human
            attention. This page is about yours. Nothing is scored, nothing is
            tracked, nothing is streaked.
          </p>
        </header>

        <BreathingExercise />

        <section aria-labelledby="reflections-h" className="mind-reflections">
          <h2 id="reflections-h" className="section-title">
            Reflections
          </h2>
          <ul className="reflection-list">
            {reflections.map((reflection) => (
              <li key={reflection.id} className="reflection">
                <article>
                  <p className="reflection-category mono-meta">
                    {reflection.category}
                  </p>
                  <h3 className="reflection-title">{reflection.title}</h3>
                  <p className="reflection-body">{reflection.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
