import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { HomeMain } from "@/components/home/home-sections";
import { faHome, faMeta } from "@/content/i18n/fa";

export const metadata: Metadata = {
  title: faMeta.title,
  description: faMeta.description,
  alternates: {
    canonical: "/fa",
    languages: { en: "/", fa: "/fa" },
  },
  openGraph: {
    type: "website",
    title: "مهدی شبستری",
    description: faMeta.description,
    url: "/fa",
    locale: "fa_IR",
  },
};

export default function FaHomePage() {
  return (
    <>
      <SiteHeader locale="fa" />
      <HomeMain content={faHome} />
      <SiteFooter locale="fa" />
    </>
  );
}
