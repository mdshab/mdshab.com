/**
 * Site identity, contact channels and shared professional facts.
 *
 * FACTUAL INTEGRITY: every value here must be supported by the repository
 * or explicitly approved material. Contact channels that have not been
 * supplied are simply absent — the UI renders only what is defined.
 *
 * To add a channel, fill `linkedin` / `email` and it appears everywhere
 * (header CTA, contact page, final CTA, footer) on the next build.
 */

export const site = {
  name: "Mehdi Shabestari",
  shortName: "mdshab",
  domain: "mdshab.com",
  role: "Technical Product Manager — Cloud Infrastructure",
  positioning:
    "Technical product management for cloud infrastructure.",
  supportLine:
    "Technical product manager for a 200,000-user cloud product. Before product: telecom support and supervision, network and systems engineering, infrastructure service development, DevOps and customer excellence.",
  location: "Tehran, Iran · working internationally",
} as const;

/** Contact channels. Only grounded values are set. */
export const contact = {
  /** Verified: this repository lives at github.com/mdshab (remote origin). */
  github: "https://github.com/mdshab",
  /** Approved 2026-09: public profile, confirmed by the site owner. */
  linkedin: "https://www.linkedin.com/in/mdshab/",
  /** Add when approved, e.g. "hello@mdshab.com". */
  email: undefined as string | undefined,
} as const;

/** The one-line scope statement used by metadata and social sharing. */
export const siteMeta = {
  title: "Mehdi Shabestari — Technical Product Manager, Cloud Infrastructure",
  description:
    "Mehdi Shabestari, technical product manager for a 200,000-user cloud product. A career across telecom, networks, systems, infrastructure services, DevOps and customer excellence.",
  ogTitle: "Mehdi Shabestari — Technical Product Manager",
  ogDescription:
    "Technical product manager for cloud infrastructure, with a career across telecom, networks, systems, infrastructure services, DevOps and customer excellence.",
} as const;

/* ------------------------------------------------------------------ */
/* Primary navigation (professional-first)                             */
/* ------------------------------------------------------------------ */

export const primaryNav = [
  { href: "/work", label: "Work" },
  { href: "/thinking", label: "Thinking" },
  { href: "/journey", label: "Journey" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
] as const;

/** Deeper personal sections — discoverable, never dominant. */
export const libraryNav = [
  { href: "/humanity", label: "Humanity" },
  { href: "/ideas", label: "Ideas" },
  { href: "/mind", label: "Mind" },
  { href: "/now", label: "Now" },
] as const;
