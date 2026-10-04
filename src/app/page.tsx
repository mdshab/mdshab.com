import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { HomeMain, type HomeContent } from "@/components/home/home-sections";
import { hero, featuredDecision, homeThinking, personalThread, finalCta } from "@/content/home";
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

export default function HomePage() {
  const content: HomeContent = {
    hero,
    featuredDecision,
    homeThinking,
    personalThread,
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
