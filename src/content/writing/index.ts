import type { ArticleMeta } from "@/types/content";

import { articles } from "./articles";

export { articles };

export function getArticleMeta(slug: string): ArticleMeta | undefined {
  return articles.find((article) => article.slug === slug);
}

/** Articles sorted newest first, drafts excluded unless asked. */
export function getPublishedArticles(): ArticleMeta[] {
  return articles
    .filter((article) => !article.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getRelatedArticles(article: ArticleMeta): ArticleMeta[] {
  return articles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      let score = 0;
      if (candidate.category === article.category) score += 2;
      score += candidate.tags.filter((tag) => article.tags.includes(tag)).length;
      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ candidate }) => candidate);
}
