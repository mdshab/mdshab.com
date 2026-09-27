import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { faWorkPage, faWorkCases } from "@/content/i18n/fa";

export const metadata: Metadata = {
  title: "کارها — مطالعات موردی",
  description:
    "مطالعات موردی از بیست سال کار زیرساخت و محصول: سرویس‌های ابری در مقیاس، عملیات شبکه، پلتفرم‌های تلفنی، و همین سایت — با قضاوت، محدودیت‌ها و ترید‌آف‌ها، صادقانه توصیف‌شده.",
  alternates: {
    canonical: "/fa/work",
    languages: { en: "/work", fa: "/fa/work" },
  },
};

export default function FaWorkPage() {
  const practice = faWorkCases.filter((c) => c.track === "practice");
  const builds = faWorkCases.filter((c) => c.track === "build");

  return (
    <>
      <SiteHeader locale="fa" />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">{faWorkPage.kicker}</p>
          <h1 className="page-title">{faWorkPage.title}</h1>
          <p className="page-lede">{faWorkPage.lede}</p>
        </header>

        <p className="work-note">{faWorkPage.note}</p>

        <section aria-labelledby="fa-practice-h">
          <h2 id="fa-practice-h" className="section-title">
            {faWorkPage.sections.practice}
          </h2>
          <ul className="work-page-grid">
            {practice.map((study) => (
              <li key={study.id}>
                <Link href={`/fa/work/${study.id}`} className="lab-card">
                  <p className="lab-card-status mono-meta">
                    <span style={{ color: "var(--accent)" }}>
                      {faWorkPage.trackLabels.practice}
                    </span>{" "}
                    · {study.period}
                  </p>
                  <h3 className="lab-card-title">{study.title}</h3>
                  <p className="lab-card-summary">{study.summary}</p>
                  <p className="lab-card-period mono-meta">
                    {study.role} — {study.organization}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="fa-builds-h" style={{ marginTop: "2.5rem" }}>
          <h2 id="fa-builds-h" className="section-title">
            {faWorkPage.sections.builds}
          </h2>
          <ul className="work-page-grid">
            {builds.map((study) => (
              <li key={study.id}>
                <Link href={`/fa/work/${study.id}`} className="lab-card">
                  <p className="lab-card-status mono-meta">
                    <span style={{ color: "var(--accent)" }}>
                      {faWorkPage.trackLabels.build}
                    </span>{" "}
                    · {study.period}
                  </p>
                  <h3 className="lab-card-title">{study.title}</h3>
                  <p className="lab-card-summary">{study.summary}</p>
                  <p className="lab-card-period mono-meta">
                    {study.role} — {study.organization}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter locale="fa" />
    </>
  );
}
