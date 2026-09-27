import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { getPublishedArticles } from "@/content/writing";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on infrastructure, telecom history, product thinking and the long view.",
};

export default function WritingPage() {
  const articlesList = getPublishedArticles();

  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">Long-form</p>
          <h1 className="page-title">Writing</h1>
          <p className="page-lede">
            Essays on the infrastructure career, the history inside it, and
            the ideas that hold both together. Cross-linked to the timeline
            where it helps.
          </p>
        </header>

        <ul className="article-list">
          {articlesList.map((article) => (
            <li key={article.slug} className="article-item">
              <article>
                <p className="article-item-meta mono-meta">
                  {formatDate(article.date)} · {article.category} ·{" "}
                  {article.readingTime} min
                </p>
                <h2 className="article-item-title">
                  <Link href={`/writing/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="article-item-desc">{article.description}</p>
                <ul className="article-item-tags" aria-label="Tags">
                  {article.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
