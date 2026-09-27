# mdshab.com

**Mehdi Shabestari — technical product manager for cloud and AI
infrastructure.** A bilingual professional platform, a case-study
portfolio, and a personal knowledge graph — connected.

The site's one job: make the right visitor want to start a
conversation. Value and positioning in the first viewport, evidence and
judgment one scroll away, and the personal library (3,000 years of
history, the great questions, a quiet breathing space) one click deep.

## Sections

| Route | What it is |
| --- | --- |
| `/` | The front door: hero → selected impact → problems I solve → featured work → how I think → technical depth → journey → writing → beyond work → final CTA |
| `/work` | Case studies in a fixed format: context, problem, constraints, decision, trade-offs, outcome, learning — employers anonymized where promised, no invented numbers |
| `/work/[case]` | 4 studies: cloud services at scale · NOC leadership 2020 · voice→software 2007–2018 · this website |
| `/thinking` | Nine product principles with their origins, plus two working models: the abstraction ladder and the telecom→cloud evolution map |
| `/journey` | A career in five chapters, from a mailed Ubuntu CD to `terraform apply` |
| `/writing` | Long-form essays, cross-linked to timeline events |
| `/about`, `/contact` | Who is behind this, and how to start a conversation |
| `/fa/…` | همین سایت به فارسی — Persian edition of the professional core, native RTL with Vazirmatn |
| `/humanity` | 115 history events, 1000 BCE → present, filterable by thread, region and kind — desktop spatial timeline, mobile/AT vertical list |
| `/ideas` | 34 thinkers across Greek, Eastern, Persian/Islamic and modern traditions, plus 10 philosophical questions |
| `/mind` | "Be here." A breathing exercise and short reflections. No gamification, no claims. |
| `/now` | What is happening right now |

Old `/lab` URLs redirect permanently to `/work` and `/thinking`.

## Stack

- **Next.js 16** (App Router, static prerendering — ~196 pages, dynamic
  filtering only on `/humanity` search params)
- **TypeScript strict**, typed content models in `src/types/content.ts`
- **Fluent UI v9** (`@fluentui/react-components`) as the accessibility
  foundation under a custom light, warm-paper mdshab theme — it does not
  look like Microsoft 365
- **Tailwind 4** for utility layers; most styling is custom CSS in
  [src/app/globals.css](src/app/globals.css) using design tokens
- **motion/react** with `prefers-reduced-motion` support (breathing circle)
- **d3-scale** for timeline positioning
- **MDX** for essay bodies (`@next/mdx`, `providerImportSource: null` so
  articles render inside React Server Components)
- **next/og** build-time OG image (satori) from subset TTFs in `assets/`
- Self-hosted variable fonts: Space Grotesk (display), Newsreader
  (editorial serif), JetBrains Mono (data), **Vazirmatn** (Persian) —
  SIL OFL, in `public/fonts/`

## Content integrity rules

This site makes a point of not inventing:

- Career facts are limited to the closed set in `/journey` — years,
  employers and roles the site owner supplied. The Ubuntu CD story has
  no year on purpose.
- Employer names appear only where already published (Tel4Tel, FCP) or
  at the published abstraction ("a global-scale cloud provider").
- Outcomes are qualitative unless a figure was already public.
- History events carry `approximate` flags and source references; BCE
  years are encoded as negative integers.
- Contact channels render only what exists — GitHub is verified via the
  repository remote; LinkedIn/email appear the moment their URLs are
  added to `src/content/site.ts`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

Validation before shipping:

```bash
npm run lint    # eslint, zero warnings policy
npx tsc --noEmit
npm run build   # production build must succeed
```

## Accessibility

- WCAG AA contrast targets (ink ramp verified ≥ 4.5:1 on paper),
  visible focus rings (`:focus-visible`)
- Keyboard-only operation: skip link, ⌘K palette with full
  combobox/listbox semantics (`aria-activedescendant`), Escape to close
- The spatial timeline has a semantically ordered list alternative
  rendered for mobile and assistive technology; filters announce counts
  via `role="status"`
- Reduced-motion users get a still circle and text-only breathing phases
- Persian pages are `dir="rtl"` end-to-end with logical-property CSS and
  independently tuned typography

## Privacy

No trackers, no cookies, no analytics. Nothing leaves the visitor's
browser.

## Documentation

- [docs/professional-brand-spec.md](docs/professional-brand-spec.md) — audience, positioning, hierarchy, content rules
- [docs/architecture.md](docs/architecture.md) — how the app is put together
- [docs/content-model.md](docs/content-model.md) — the content graph and how to extend it
- [docs/design-system.md](docs/design-system.md) — tokens, typography, motion

© Mehdi Shabestari. Built with care and a terminal.
