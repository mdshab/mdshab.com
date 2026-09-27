import Link from "next/link";

import { primaryNav } from "@/content/site";

/**
 * Global navigation. Professional routes first; the personal library
 * lives in the footer. Bilingual: `locale="fa"` renders the Persian
 * labels and switches the language toggle direction.
 */
export function SiteHeader({
  locale = "en",
}: {
  locale?: "en" | "fa";
}) {
  const fa = locale === "fa";
  const switchHref = fa ? "/" : "/fa";
  const ariaLabel = fa ? "بخش‌های اصلی" : "Primary";

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href={fa ? "/fa" : "/"} className="site-mark" aria-label="mdshab.com home">
          <span className="site-mark-glyph" aria-hidden="true">
            ▚
          </span>
          <span className="site-mark-text">
            mdshab<span className="site-mark-dot">.com</span>
          </span>
        </Link>

        <div className="site-header-actions">
          <Link
            href={switchHref}
            hrefLang={fa ? "en" : "fa"}
            className="lang-switch"
            aria-label={fa ? "Switch to English" : "تغییر به فارسی"}
          >
            {fa ? (
              <>
                <span lang="en">EN</span>
                <span aria-hidden="true">·</span>
                <span className="lang-active">فارسی</span>
              </>
            ) : (
              <>
                <span className="lang-active">EN</span>
                <span aria-hidden="true">·</span>
                <span lang="fa">فارسی</span>
              </>
            )}
          </Link>
          <Link href={fa ? "/fa/contact" : "/contact"} className="header-cta">
            {fa ? "گفت‌وگو" : "Let's talk"}
          </Link>
        </div>

        <nav aria-label={ariaLabel}>
          <ul className="site-nav">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={fa ? `/fa${item.href}` : item.href}
                  className="site-nav-link"
                >
                  {fa ? faNavLabels[item.label] : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const faNavLabels: Record<string, string> = {
  Work: "کارها",
  Thinking: "تفکر",
  Journey: "مسیر",
  Writing: "نوشته‌ها",
  About: "درباره",
};
