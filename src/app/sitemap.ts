import type { MetadataRoute } from "next";

import {
  historyEvents,
  labProjects,
  philosophicalQuestions as questions,
  thinkers,
} from "@/content";
import { getPublishedArticles } from "@/content/writing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdshab.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/journey",
    "/humanity",
    "/humanity/royal-road",
    "/ideas",
    "/mind",
    "/lab",
    "/writing",
    "/about",
    "/now",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const eventRoutes = historyEvents.map((event) => ({
    url: `${base}/humanity/${event.id}`,
    lastModified: new Date(),
  }));

  const thinkerRoutes = thinkers.map((thinker) => ({
    url: `${base}/ideas/${thinker.id}`,
    lastModified: new Date(),
  }));

  const questionRoutes = questions.map((question) => ({
    url: `${base}/ideas/questions/${question.id}`,
    lastModified: new Date(),
  }));

  const projectRoutes = labProjects.map((project) => ({
    url: `${base}/lab/${project.id}`,
    lastModified: new Date(),
  }));

  const articleRoutes = getPublishedArticles().map((article) => ({
    url: `${base}/writing/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [
    ...staticRoutes,
    ...eventRoutes,
    ...thinkerRoutes,
    ...questionRoutes,
    ...projectRoutes,
    ...articleRoutes,
  ];
}
