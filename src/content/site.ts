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
    "I spent years keeping infrastructure running. Now I help decide what gets built.",
  supportLine:
    "Technical product manager for a cloud product used by 200,000 people, with a background in support, networks, systems and operations.",
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
    "Mehdi Shabestari works on cloud products used by 200,000 people. Years in support, networks, systems and operations inform how he approaches product decisions.",
  ogTitle: "Mehdi Shabestari — Technical Product Manager",
  ogDescription:
    "Years keeping infrastructure running inform how I approach cloud product decisions — especially what happens after launch.",
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
