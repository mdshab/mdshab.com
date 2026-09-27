import type { MetadataRoute } from "next";

import {
  historyEvents,
  philosophicalQuestions as questions,
  thinkers,
} from "@/content";
import { caseStudies } from "@/content/work";
import { getPublishedArticles } from "@/content/writing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdshab.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/work`, priority: 0.9 },
    { url: `${base}/thinking`, priority: 0.8 },
    { url: `${base}/journey`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/humanity`, priority: 0.5 },
    { url: `${base}/ideas`, priority: 0.5 },
    { url: `${base}/mind`, priority: 0.5 },
    { url: `${base}/writing`, priority: 0.5 },
    { url: `${base}/now`, priority: 0.4 },
  ].map((entry) => ({ ...entry, lastModified: now }));

  const caseRoutes = caseStudies.map((study) => ({
    url: `${base}/work/${study.id}`,
    lastModified: now,
  }));

  const eventRoutes = historyEvents.map((event) => ({
    url: `${base}/humanity/${event.id}`,
    lastModified: now,
  }));

  const thinkerRoutes = thinkers.map((thinker) => ({
    url: `${base}/ideas/${thinker.id}`,
    lastModified: now,
  }));

  const questionRoutes = questions.map((question) => ({
    url: `${base}/ideas/questions/${question.id}`,
    lastModified: now,
  }));

  const articleRoutes = getPublishedArticles().map((article) => ({
    url: `${base}/writing/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [
    ...staticRoutes,
    ...caseRoutes,
    ...eventRoutes,
    ...thinkerRoutes,
    ...questionRoutes,
    ...articleRoutes,
  ];
}
