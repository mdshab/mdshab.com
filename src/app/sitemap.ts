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

/** Routes that have a Persian edition at /fa/… */
const bilingual = new Set(["", "/work", "/thinking", "/journey", "/about", "/contact"]);

function entry(path: string, lastModified: Date, priority = 0.7) {
  const languages = bilingual.has(path)
    ? { en: path === "" ? "/" : path, fa: `/fa${path === "/" ? "" : path}` }
    : undefined;
  return {
    url: `${siteUrl.replace(/\/$/, "")}${path}`,
    lastModified,
    priority,
    alternates: languages ? { languages } : undefined,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const now = new Date();

  /* Professional core (bilingual) */
  const coreRoutes: MetadataRoute.Sitemap = [
    entry("", now, 1.0),
    entry("/work", now, 0.9),
    entry("/thinking", now, 0.8),
    entry("/journey", now, 0.8),
    entry("/about", now, 0.7),
    entry("/contact", now, 0.8),
  ];

  /* Persian edition roots */
  const faRoutes: MetadataRoute.Sitemap = [
    "/fa",
    "/fa/work",
    "/fa/thinking",
    "/fa/journey",
    "/fa/about",
    "/fa/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    priority: 0.6,
    alternates: { languages: { en: path === "/fa" ? "/" : path.replace("/fa", ""), fa: path } },
  }));

  const caseRoutes = caseStudies.map((study) => ({
    url: `${base}/work/${study.id}`,
    lastModified: now,
    alternates: {
      languages: { en: `/work/${study.id}`, fa: `/fa/work/${study.id}` },
    },
  }));

  const faCaseRoutes = caseStudies.map((study) => ({
    url: `${base}/fa/work/${study.id}`,
    lastModified: now,
    alternates: {
      languages: { en: `/work/${study.id}`, fa: `/fa/work/${study.id}` },
    },
  }));

  /* Personal library (English-only) */
  const libraryRoutes = [
    "/humanity",
    "/ideas",
    "/mind",
    "/writing",
    "/now",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    priority: 0.5,
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
    ...coreRoutes,
    ...faRoutes,
    ...caseRoutes,
    ...faCaseRoutes,
    ...libraryRoutes,
    ...eventRoutes,
    ...thinkerRoutes,
    ...questionRoutes,
    ...articleRoutes,
  ];
}
