import Link from "next/link";

import { contact, libraryNav, primaryNav, site } from "@/content/site";

/**
 * Site footer: positioning line, professional routes, the personal
 * library (kept one click deep), grounded contact links, language, and
 * the colophon. No trackers, no cookies, no analytics.
 */
export function SiteFooter({
  locale = "en",
}: {
  locale?: "en" | "fa";
}) {
  const fa = locale === "fa";
  const prefix = fa ? "/fa" : "";

  const labels = fa
    ? {
        sections: "بخش‌ها",
        library: "کتابخانهٔ شخصی",
        elsewhere: "بیرون از سایت",
        colophon: "کولوفون",
        langNote: "نسخهٔ فارسی همین سایت در /fa است.",
        fine: `© ${new Date().getFullYear()} مهدی شبستری · ساخته‌شده با دقت و یک ترمینال`,
      }
    : {
        sections: "Sections",
        library: "Personal library",
        elsewhere: "Elsewhere",
        colophon: "Colophon",
        langNote: "The Persian edition of this site lives at /fa.",
        fine: `© ${new Date().getFullYear()} Mehdi Shabestari · Built with care and a terminal`,
      };

  const navLabels = fa
    ? {
        Work: "کارها",
        Thinking: "تفکر",
        Journey: "مسیر",
        Writing: "نوشته‌ها",
        About: "درباره",
        Contact: "تماس",
        Humanity: "تاریخ بشر",
        Ideas: "ایده‌ها",
        Mind: "ذهن",
        Now: "اکنون",
      }
    : {
        Work: "Work",
        Thinking: "Thinking",
        Journey: "Journey",
        Writing: "Writing",
        About: "About",
        Contact: "Contact",
        Humanity: "Humanity",
        Ideas: "Ideas",
        Mind: "Mind",
        Now: "Now",
      };

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-col">
          <p className="site-footer-title">{site.domain}</p>
          <p className="site-footer-line" lang={fa ? "fa" : undefined}>
            {fa
              ? "مدیر محصول فنی زیرساخت ابری — با بیست سال تجربه، از تلفن آنالوگ تا هوش مصنوعی."
              : "Technical product management for cloud and AI infrastructure — twenty years from analog telephony to products at scale."}
          </p>
          {!fa && (
            <p className="site-footer-line site-footer-lang">
              <Link href="/fa" hrefLang="fa" lang="fa">
                نسخهٔ فارسی · Persian edition →
              </Link>
            </p>
          )}
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">{labels.sections}</p>
          <ul className="site-footer-links">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={`${prefix}${item.href}`}>
                  {navLabels[item.label]}
                </Link>
              </li>
            ))}
            <li>
              <Link href={`${prefix}/contact`}>{navLabels.Contact}</Link>
            </li>
          </ul>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">{labels.library}</p>
          <ul className="site-footer-links">
            {libraryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{fa ? navLabels[item.label] : item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">{labels.elsewhere}</p>
          <ul className="site-footer-links">
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </li>
            {contact.linkedin && (
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </li>
            )}
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
          </ul>
          <p className="site-footer-title" style={{ marginTop: "1.4rem" }}>
            {labels.colophon}
          </p>
          <p className="site-footer-line">
            {fa
              ? "Next.js · فونت‌های میزبانی‌شده · بدون ردیاب، بدون کوکی."
              : "Next.js · self-hosted fonts · no trackers, no cookies, no analytics."}
          </p>
        </div>
      </div>
      <p className="site-footer-fine">{labels.fine}</p>
    </footer>
  );
}
