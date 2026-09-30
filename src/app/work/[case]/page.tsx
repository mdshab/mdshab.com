import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { caseStudies, getCaseStudy } from "@/content/work";
import { getEvents } from "@/content/history";
import { articles } from "@/content/writing";

interface CasePageProps {
  params: Promise<{ case: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ case: study.id }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { case: id } = await params;
  const study = getCaseStudy(id);
  if (!study) return { title: "Case study not found" };
  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/work/${study.id}`,
    },
    openGraph: {
      type: "article",
      title: study.title,
      description: study.summary,
      url: `/work/${study.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.summary,
    },
  };
}

const sectionTitles: Record<string, string> = {
  context: "Context",
  problem: "The problem",
  "why-it-mattered": "Why it mattered",
  "my-role": "My role",
  constraints: "Constraints",
  discovery: "Discovery",
  options: "Options considered",
  decision: "The decision",
  architecture: "Architecture",
  "product-reasoning": "Product reasoning",
  "trade-offs": "Trade-offs",
  execution: "Execution",
  outcome: "Outcome",
  "what-i-learned": "What I learned",
};

const trackLabels = { practice: "Practice", build: "Build" } as const;

export default async function CasePage({ params }: CasePageProps) {
  const { case: id } = await params;
  const study = getCaseStudy(id);
  if (!study) notFound();

  const relatedHistory = getEvents(study.relatedHistory ?? []);
  const relatedArticles = (study.relatedArticles ?? [])
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <article className="project-page">
          <nav aria-label="Breadcrumb" className="breadcrumb mono-meta">
            <Link href="/work">Work</Link>
            <span aria-hidden="true"> / </span>
            <span>{study.title}</span>
          </nav>

          <header className="case-header">
            <p className="case-meta mono-meta">
              <span>{trackLabels[study.track]}</span>
              <span>{study.period}</span>
            </p>
            <h1 className="case-title">{study.title}</h1>
            <p className="case-lede">{study.lede}</p>
            <p className="case-role-line mono-meta">
              {study.role} — {study.organization}
            </p>
          </header>

          <nav className="project-toc" aria-label="Case study outline">
            <p className="mono-meta project-toc-label">Outline</p>
            <ol className="project-toc-list">
              {study.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${section.heading}`}>
                    {sectionTitles[section.heading]}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose-editorial project-body">
            {study.sections.map((section) => (
              <section key={section.heading} id={section.heading}>
                <h2>{sectionTitles[section.heading]}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <aside className="project-meta">
            <p className="mono-meta project-toc-label">Scope and tools</p>
            <ul className="journey-entry-tech">
              {study.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            {(relatedHistory.length > 0 || relatedArticles.length > 0) && (
              <div className="journey-entry-links">
                {relatedHistory.length > 0 && (
                  <p className="journey-links-row">
                    <span className="mono-meta">History · </span>
                    {relatedHistory.map((event, i) => (
                      <span key={event.id}>
                        {i > 0 && ", "}
                        <Link href={`/humanity/${event.id}`}>{event.title}</Link>
                      </span>
                    ))}
                  </p>
                )}
                {relatedArticles.length > 0 && (
                  <p className="journey-links-row">
                    <span className="mono-meta">Writing · </span>
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
          </aside>
          <p className="home-section-cta">
            <Link href="/contact" className="text-cta">Discuss a role or product problem →</Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
