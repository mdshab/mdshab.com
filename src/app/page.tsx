import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { HomeMain, type HomeContent } from "@/components/home/home-sections";
import { getPublishedArticles } from "@/content/writing";
import { caseStudies, featuredCaseStudyIds } from "@/content/work";
import {
  hero,
  selectedImpact,
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
    canonical: "/",
    languages: { en: "/", fa: "/fa" },
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

const depth = {
  title: "The stack under the product",
  lede: "One career, climbed bottom to top. Product decisions made here are grounded in what each layer actually does when it fails — because I have been the person it failed on.",
  layers: [
    { name: "Product", note: "Direction, promises, defaults — since 2022" },
    { name: "Cloud & platform", note: "Fleets, control planes, abstractions — 2019" },
    { name: "Networking", note: "Routing, switching, the paths packets take — 2012" },
    { name: "Telecom", note: "Voice, signaling, the century of copper — 2007" },
    { name: "Systems", note: "The physical layer that answers eventually" },
  ],
  coda: "Most product managers learn this stack from slide decks. I learned it from pager alerts — which is why my roadmaps tend to remember the on-call rotation.",
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
    selectedImpact,
    helpWith,
    featuredWork: {
      title: "Featured work",
      lede: "Three case studies from the practice — judgment, constraints, trade-offs — plus the site you're reading, documented like it matters.",
      cta: { href: "/work", label: "All case studies" },
      cards: featured.map((c) => ({
        href: `/work/${c.id}`,
        kind: trackLabels[c.track],
        period: c.period,
        title: c.title,
        summary: c.summary,
      })),
    },
    homeThinking,
    depth,
    journeyTeaser,
    selectedWriting: { ...selectedWriting, english: true, articles: writing },
    beyondWork,
    finalCta,
  };

  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <HomeMain content={content} />
      <SiteFooter />
    </>
  );
}
