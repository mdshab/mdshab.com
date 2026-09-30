import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { HomeMain, type HomeContent } from "@/components/home/home-sections";
import { getPublishedArticles } from "@/content/writing";
import { caseStudies, featuredCaseStudyIds } from "@/content/work";
import {
  hero,
  helpWith,
  homeThinking,
  journeyTeaser,
  selectedWriting,
  beyondWork,
  finalCta,
} from "@/content/home";
import { siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    title: siteMeta.ogTitle,
    description: siteMeta.ogDescription,
    url: "/",
  },
};

const trackLabels: Record<string, string> = {
  practice: "Practice",
  build: "Build",
};

export default function HomePage() {
  const featured = featuredCaseStudyIds
    .map((id) => caseStudies.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const writing = getPublishedArticles()
    .filter((a) =>
      [
        "why-infrastructure-products-are-different",
        "what-infrastructure-taught-me",
        "from-pbx-to-cloud-communications",
      ].includes(a.slug),
    )
    .map((a) => ({ href: `/writing/${a.slug}`, title: a.title, desc: a.description }));

  const content: HomeContent = {
    hero,
    featuredWork: {
      title: "Selected work",
      lede: "Cloud product management, customer excellence and the telecom background behind both. Scope, responsibilities and recurring decisions.",
      cta: { href: "/work", label: "All case studies" },
      cards: featured.map((c) => ({
        href: `/work/${c.id}`,
        kind: trackLabels[c.track],
        period: c.period,
        title: c.title,
        summary: c.summary,
        role: c.role,
      })),
    },
    helpWith,
    homeThinking,
    journeyTeaser,
    selectedWriting: { ...selectedWriting, articles: writing },
    beyondWork,
    finalCta,
  };

  return (
    <>
      <SiteHeader />
      <HomeMain content={content} />
      <SiteFooter />
    </>
  );
}
