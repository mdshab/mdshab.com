import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { labProjects, getProject } from "@/content/lab";
import { getEvents } from "@/content/history";
import { articles } from "@/content/writing";

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

export function generateStaticParams() {
  return labProjects.map((project) => ({ project: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project: id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

const sectionTitles: Record<string, string> = {
  context: "Context",
  problem: "The problem",
  "why-it-mattered": "Why it mattered",
  constraints: "Constraints",
  options: "Options considered",
  decision: "The decision",
  architecture: "Architecture",
  "product-reasoning": "Product reasoning",
  "trade-offs": "Trade-offs",
  outcome: "Outcome",
  "what-i-learned": "What I learned",
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project: id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const relatedHistory = getEvents(project.relatedHistory ?? []);
  const relatedArticles = (project.relatedArticles ?? [])
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <article className="project-page">
          <nav aria-label="Breadcrumb" className="breadcrumb mono-meta">
            <Link href="/lab">Lab</Link>
            <span aria-hidden="true"> / </span>
            <span>{project.title}</span>
          </nav>

          <header className="project-header">
            <p className="project-status mono-meta">
              {project.status} · {project.kind} · {project.period}
            </p>
            <h1 className="page-title">{project.title}</h1>
            <p className="page-lede">{project.summary}</p>
          </header>

          <div className="project-toc" aria-label="Case study outline">
            <p className="mono-meta project-toc-label">Outline</p>
            <ol className="project-toc-list">
              {project.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${section.heading}`}>{sectionTitles[section.heading]}</a>
                </li>
              ))}
            </ol>
          </div>

          <div className="prose-editorial project-body">
            {project.sections.map((section) => (
              <section key={section.heading} id={section.heading}>
                <h2>{sectionTitles[section.heading]}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <aside className="project-meta">
            <p className="mono-meta project-toc-label">Technologies</p>
            <ul className="journey-entry-tech">
              {project.technologies.map((tech) => (
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
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
