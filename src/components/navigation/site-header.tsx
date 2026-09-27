import Link from "next/link";

import { primaryNav } from "@/content/site";

/**
 * Global navigation. Professional routes first; the personal library
 * lives in the footer.
 */
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-mark" aria-label="mdshab.com home">
          <span className="site-mark-glyph" aria-hidden="true">
            ▚
          </span>
          <span className="site-mark-text">
            mdshab<span className="site-mark-dot">.com</span>
          </span>
        </Link>

        <div className="site-header-actions">
          <Link href="/contact" className="header-cta">
            Let&apos;s talk
          </Link>
        </div>

        <nav aria-label="Primary">
          <ul className="site-nav">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="site-nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
