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
  lede: "This career went bottom to top. When I make product decisions, I know what each layer does when it fails, because I've debugged most of them myself.",
  layers: [
    { name: "Product", note: "Direction, promises, defaults — since 2022" },
    { name: "Cloud & platform", note: "Hosts, virtualization, automation — 2019" },
    { name: "Networking", note: "Routing, switching, the paths packets take — 2012" },
    { name: "Telecom", note: "Voice, signaling, lines — 2007" },
    { name: "Systems", note: "The physical layer that answers eventually" },
  ],
  coda: "Most product managers learn these layers from slides. I learned them from the pager.",
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
      title: "Case studies",
      lede: "Each in a fixed format: what it was, the problem, my role, the decisions, the constraints, the outcome.",
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
