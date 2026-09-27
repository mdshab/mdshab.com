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
    "I do product management for cloud infrastructure. Before that, I ran it for fifteen years.",
  supportLine:
    "Technical product manager at a global-scale cloud provider, working on services like Cloud Server, VPC, Storage and Migration. Before product: VoIP administration, network engineering, cloud operations, NOC leadership.",
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
    "Technical product manager for cloud services like Cloud Server, VPC, Storage and Migration, used by hundreds of thousands of people. Fifteen years in VoIP, networking and datacenters before product, since 2022. Case studies, principles, contact.",
  ogTitle: "Mehdi Shabestari",
  ogDescription:
    "Technical product manager for cloud infrastructure — Cloud Server, VPC, Storage, Migration — with hundreds of thousands of users. Fifteen years running the same stack before moving to product.",
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
