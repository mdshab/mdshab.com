import Link from "next/link";

import { contact, libraryNav, primaryNav, site } from "@/content/site";

/**
 * Site footer: positioning line, professional routes, the personal
 * library (kept one click deep), grounded contact links, and the
 * colophon. No trackers, no cookies, no analytics.
 */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-col">
          <p className="site-footer-title">{site.domain}</p>
          <p className="site-footer-line">
            Technical product manager for cloud infrastructure. A background
            in telecommunications, networks, systems, service development
            and customer excellence.
          </p>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">Sections</p>
          <ul className="site-footer-links">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">Personal library</p>
          <ul className="site-footer-links">
            {libraryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer-col">
          <p className="site-footer-title">Elsewhere</p>
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
            Colophon
          </p>
          <p className="site-footer-line">
            Next.js · self-hosted fonts · no trackers, no cookies, no
            analytics.
          </p>
        </div>
      </div>
      <p className="site-footer-fine">
        © {new Date().getFullYear()} {site.name} · Built with care and a
        terminal
      </p>
    </footer>
  );
}
