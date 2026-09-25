import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import {
  getArticleMeta,
  getPublishedArticles,
  getRelatedArticles,
} from "@/content/writing";
import { getEvents } from "@/content/history";
import { formatDate } from "@/lib/format";

/* MDX articles live in src/content/writing/mdx/<slug>.mdx and are mapped
 * statically so Next can code-split them. */
import fromPbx from "@/content/writing/mdx/from-pbx-to-cloud-communications.mdx";
import whatInfra from "@/content/writing/mdx/what-infrastructure-taught-me.mdx";
import physicalServers from "@/content/writing/mdx/physical-servers-vms-containers.mdx";
import cdInMail from "@/content/writing/mdx/the-cd-in-the-mail.mdx";
import whyInfraProducts from "@/content/writing/mdx/why-infrastructure-products-are-different.mdx";
import threeThousandYears from "@/content/writing/mdx/3000-years-of-communication-technology.mdx";

const bodies: Record<string, React.ComponentType> = {
  "from-pbx-to-cloud-communications": fromPbx,
  "what-infrastructure-taught-me": whatInfra,
  "physical-servers-vms-containers": physicalServers,
  "the-cd-in-the-mail": cdInMail,
  "why-infrastructure-products-are-different": whyInfraProducts,
  "3000-years-of-communication-technology": threeThousandYears,
};

interface ArticlePageProps {
  params: Promise<{ article: string }>;
}

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ article: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article: slug } = await params;
  const article = getArticleMeta(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "article",
      publishedTime: article.date,
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article: slug } = await params;
  const article = getArticleMeta(slug);
  const Body = bodies[slug];
  if (!article || !Body) notFound();

  const relatedHistory = getEvents(article.relatedEvents ?? []);
  const related = getRelatedArticles(article);

  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <article className="article-page">
          <nav aria-label="Breadcrumb" className="breadcrumb mono-meta">
            <Link href="/writing">Writing</Link>
            <span aria-hidden="true"> / </span>
            <span>{article.title}</span>
          </nav>

          <header className="article-header">
            <p className="article-item-meta mono-meta">
              {formatDate(article.date)} · {article.category} ·{" "}
              {article.readingTime} min read
            </p>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-desc">{article.description}</p>
          </header>

          <div className="prose-editorial article-body">
            <Body />
          </div>

          {relatedHistory.length > 0 && (
            <aside className="article-related" aria-labelledby="rel-events-h">
              <h2 id="rel-events-h" className="section-title">
                Timeline connections
              </h2>
              <ul className="cross-links">
                {relatedHistory.map((event) => (
                  <li key={event.id}>
                    <Link href={`/humanity/${event.id}`}>
                      {event.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {related.length > 0 && (
            <aside className="article-related" aria-labelledby="rel-articles-h">
              <h2 id="rel-articles-h" className="section-title">
                Read next
              </h2>
              <ul className="cross-links">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link href={`/writing/${rel.slug}`}>{rel.title}</Link>
                    <span className="cross-links-note">
                      {rel.readingTime} min read
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
