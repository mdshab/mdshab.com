import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { faAboutPage } from "@/content/i18n/fa";

export const metadata: Metadata = {
  title: "درباره",
  description:
    "مهدی شبستری — مدیر محصول فنی زیرساخت ابری. بیست سال از تلفن آنالوگ تا محصولات ابری، و عادتِ پرسیدن اینکه همهٔ این، سه هزار سال پیش چه شکلی بوده.",
  alternates: {
    canonical: "/fa/about",
    languages: { en: "/about", fa: "/fa/about" },
  },
};

export default function FaAboutPage() {
  const t = faAboutPage;
  return (
    <>
      <SiteHeader locale="fa" />
      <main id="main" className="page">
        <div className="about-page">
          <header className="page-header">
            <p className="page-kicker mono-meta">{t.kicker}</p>
            <h1 className="page-title">{t.title}</h1>
            <p className="page-lede">{t.lede}</p>
          </header>

          <dl className="about-facts">
            {t.facts.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <dt className="mono-meta">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="prose-editorial">
            <h2>{t.shortTitle}</h2>
            <p>{t.shortBody}</p>

            <h2>{t.whyTitle}</h2>
            <p>{t.whyBody}</p>

            <h2>{t.longTitle}</h2>
            <p>{t.longBody1}</p>
            <p>{t.longBody2}</p>

            <h2>{t.beyondTitle}</h2>
            <p>{t.beyondBody1}</p>

            <h2>{t.contactTitle}</h2>
            <p>
              {t.contactBody}{" "}
              <Link href="/fa/contact">صفحهٔ تماس</Link>.
            </p>

            <p>{t.privacyBody}</p>
          </div>
        </div>
      </main>
      <SiteFooter locale="fa" />
    </>
  );
}
