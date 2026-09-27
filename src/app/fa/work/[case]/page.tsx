import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { faWorkCases, faWorkPage } from "@/content/i18n/fa";

interface FaCasePageProps {
  params: Promise<{ case: string }>;
}

export function generateStaticParams() {
  return faWorkCases.map((study) => ({ case: study.id }));
}

export async function generateMetadata({
  params,
}: FaCasePageProps): Promise<Metadata> {
  const { case: id } = await params;
  const study = faWorkCases.find((s) => s.id === id);
  if (!study) return { title: "یافت نشد" };
  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/fa/work/${study.id}`,
      languages: { en: `/work/${study.id}`, fa: `/fa/work/${study.id}` },
    },
  };
}

export default async function FaCasePage({ params }: FaCasePageProps) {
  const { case: id } = await params;
  const study = faWorkCases.find((s) => s.id === id);
  if (!study) notFound();

  return (
    <>
      <SiteHeader locale="fa" />
      <main id="main" className="page">
        <article className="project-page">
          <nav aria-label="Breadcrumb" className="breadcrumb mono-meta">
            <Link href="/fa/work">{faWorkPage.breadcrumb}</Link>
            <span aria-hidden="true"> / </span>
            <span>{study.title}</span>
          </nav>

          <header className="case-header">
            <p className="case-meta mono-meta">
              <span>{study.track === "practice" ? faWorkPage.trackLabels.practice : faWorkPage.trackLabels.build}</span>
              <span>{study.period}</span>
            </p>
            <h1 className="case-title">{study.title}</h1>
            <p className="case-lede">{study.lede}</p>
            <p className="case-role-line mono-meta">
              {study.role} — {study.organization}
            </p>
          </header>

          <div className="project-toc" aria-label={faWorkPage.outlineLabel}>
            <p className="mono-meta project-toc-label">{faWorkPage.outlineLabel}</p>
            <ol className="project-toc-list">
              {study.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${section.heading}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </div>

          <div className="prose-editorial project-body">
            {study.sections.map((section) => (
              <section key={section.heading} id={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter locale="fa" />
    </>
  );
}
