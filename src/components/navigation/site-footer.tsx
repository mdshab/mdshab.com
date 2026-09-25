import Link from "next/link";

/**
 * Site footer: colophon + the quiet Now link. No trackers, no cookies,
 * no analytics — nothing leaves the visitor's browser.
 */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-col">
          <p className="site-footer-title">mdshab.com</p>
          <p className="site-footer-line">
            Three thousand years of history, the history of ideas, and one
            career in infrastructure — connected.
          </p>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">Sections</p>
          <ul className="site-footer-links">
            <li><Link href="/journey">Journey</Link></li>
            <li><Link href="/humanity">Humanity</Link></li>
            <li><Link href="/ideas">Ideas</Link></li>
            <li><Link href="/writing">Writing</Link></li>
          </ul>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">Elsewhere</p>
          <ul className="site-footer-links">
            <li><Link href="/now">Now</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/lab">Lab</Link></li>
            <li><Link href="/mind">Mind</Link></li>
          </ul>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">Colophon</p>
          <p className="site-footer-line">
            Next.js · Fluent UI v9 · self-hosted fonts · no trackers, no
            cookies, no analytics.
          </p>
        </div>
      </div>
      <p className="site-footer-fine">
        © {new Date().getFullYear()} mdshab · Built with care and a terminal
      </p>
    </footer>
  );
}
