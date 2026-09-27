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
  positioning: "I turn complex infrastructure into products people can use.",
  supportLine:
    "Technical product manager at a global-scale cloud provider. Twenty years up the stack — from analog telephony and enterprise networks to datacenters, cloud platforms, and now AI-era infrastructure — deciding what gets built, for whom, and why.",
  location: "Tehran, Iran · working internationally",
} as const;

/** Contact channels. Only grounded values are set. */
export const contact = {
  /** Verified: this repository lives at github.com/mdshab (remote origin). */
  github: "https://github.com/mdshab",
  /** Add the profile URL when it is approved for publication, e.g.
   *  "https://www.linkedin.com/in/…" — it then appears across the site. */
  linkedin: undefined as string | undefined,
  /** Add when approved, e.g. "hello@mdshab.com". */
  email: undefined as string | undefined,
} as const;

/** The one-line scope statement used by metadata and social sharing. */
export const siteMeta = {
  title: "Mehdi Shabestari — Technical Product Manager, Cloud Infrastructure",
  description:
    "Product-minded and technically deep: twenty years from analog telephony to cloud and AI infrastructure, now technical product management for cloud services used by hundreds of thousands of people. Case studies, thinking, and how to get in touch.",
  ogTitle: "Mehdi Shabestari",
  ogDescription:
    "Technical product management for cloud and AI infrastructure — product-minded, technically deep. Twenty years from analog telephony to products used by hundreds of thousands of people.",
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
