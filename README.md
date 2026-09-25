# mdshab.com

Three thousand years of history, the history of ideas, and one career in
infrastructure — connected.

A personal knowledge site built as a graph, not a blog: history events link
to threads and thinkers, thinkers link to questions, articles link back to
timeline events, and everything is reachable from a global ⌘K command
palette.

## Sections

| Route | What it is |
| --- | --- |
| `/` | The front door: three acts ending in *"this moment is the only one we're actually in."* |
| `/journey` | A career in five chapters, from a mailed Ubuntu CD to `terraform apply` |
| `/humanity` | 115 history events, 1000 BCE → present, filterable by thread, region and kind — with a desktop spatial timeline and a mobile/AT vertical list |
| `/humanity/[event]` | Event detail: significance, people, threads, related events, sources |
| `/ideas` | 34 thinkers across Greek, Eastern, Persian/Islamic and modern traditions, plus 10 philosophical questions |
| `/ideas/[thinker]`, `/ideas/questions/[question]` | Detail pages with cross-links between people and questions |
| `/mind` | "Be here." A breathing exercise (1/3/5/10 min, natural/box/4–6 patterns) and short reflections. No gamification, no claims. |
| `/lab` | Infrastructure and product case studies in a fixed 8-section format |
| `/writing` | Long-form essays, cross-linked to timeline events and lab projects |
| `/about`, `/now` | Who is behind this, and what is happening right now |

## Stack

- **Next.js 16** (App Router, static prerendering — 183 pages, dynamic
  filtering only on `/humanity` search params)
- **TypeScript strict**, typed content models in `src/types/content.ts`
- **Fluent UI v9** (`@fluentui/react-components`) as the accessibility
  foundation, with a custom near-black/warm-ink mdshab theme — it does not
  look like Microsoft 365
- **Tailwind 4** for utility layers; most styling is custom CSS in
  [src/app/globals.css](src/app/globals.css) using design tokens
- **motion/react** with `prefers-reduced-motion` support (breathing circle)
- **d3-scale** for timeline positioning
- **MDX** for essay bodies (`@next/mdx`, `providerImportSource: null` so
  articles render inside React Server Components)
- Self-hosted variable fonts: Space Grotesk (display), Newsreader
  (editorial serif), JetBrains Mono (data) — SIL OFL, in `public/fonts/`

## Content integrity rules

This site makes a point of not inventing:

- History events carry `approximate` flags and source references; BCE years
  are encoded as negative integers.
- Quotations appear only when reliably sourced; otherwise ideas are
  summarized and the uncertainty is stated.
- Career facts are limited to a fixed set (see `/journey`). The Ubuntu CD
  story has no year on purpose — it is told as *"Early computing years."*

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

- WCAG AA contrast targets, visible focus rings (`:focus-visible`)
- Keyboard-only operation: skip link, ⌘K palette with full
  combobox/listbox semantics (`aria-activedescendant`), Escape to close
- The spatial timeline has a semantically ordered list alternative rendered
  for mobile and assistive technology; filters announce counts via
  `role="status"`
- Reduced-motion users get a still circle and text-only breathing phases
- Color is never the only carrier of state (accent borders pair with text
  labels)

## Privacy

No trackers, no cookies, no analytics. Nothing leaves the visitor's
browser.

## Documentation

- [docs/architecture.md](docs/architecture.md) — how the app is put together
- [docs/content-model.md](docs/content-model.md) — the content graph and how to extend it

© mdshab. Built with care and a terminal.
