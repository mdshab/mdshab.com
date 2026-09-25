import Link from "next/link";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Journey" },
  { href: "/humanity", label: "Humanity" },
  { href: "/ideas", label: "Ideas" },
  { href: "/mind", label: "Mind" },
  { href: "/lab", label: "Lab" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

/**
 * Global navigation. Desktop shows the full list; mobile collapses to a
 * disclosure panel. "Now" lives in the footer, as a quiet afterthought —
 * where it belongs.
 */
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-mark" aria-label="mdshab.com home">
          <span className="site-mark-glyph" aria-hidden="true">
            ⌘
          </span>
          <span className="site-mark-text">
            mdshab<span className="site-mark-dot">.com</span>
          </span>
        </Link>

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
