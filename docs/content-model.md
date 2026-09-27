# Content model

All content is typed TypeScript under `src/content/`, shaped by the
interfaces in `src/types/content.ts`. Together the modules form a **personal
knowledge graph**: entities reference each other by kebab-case `id`, and
every detail page renders its backlinks. There is no CMS and no database —
adding content means editing these modules, and the type checker verifies
every cross-reference.

```
HistoryEvent ──threads──> Thread
     │  ▲
     │  └──relatedEvents──> HistoryEvent
     └──people──(names; thinker links where the person has a page)

Thinker ──questions──> Question          (and Question pages list voices)
Article ──relatedEvents/relatedProjects/relatedPeople──> above
JourneyEntry ──(chapter grouping)──> JourneyChapter
CaseStudy ──relatedArticles/relatedHistory──> above
```

## Conventions

- **Years are integers; BCE is negative.** `startYear: -525` is 525 BCE.
  `formatYear` in `src/lib/format.ts` renders the "BCE"/"CE" label.
- **`approximate: boolean` is required** on every event. Approximate dates
  render with a "c." prefix (`formatEventRange`). Ranges use an en dash.
- **Quotes are sourced or absent.** `Thinker.quote` must point at a real
  text; when attribution is uncertain, omit the quote and let
  `coreIdeas`/`idea` carry a faithful summary.
- **Career facts are a closed set.** Journey entries use only the years the
  site owner supplied. Pre-career entries omit `year` entirely — the Ubuntu
  CD entry is `period: "Early computing years"`, deliberately undated.
- **Confidentiality envelope.** Case studies name employers only as
  already published (Tel4Tel, FCP, "a global-scale cloud provider");
  outcomes stay qualitative unless a figure was already public. The
  cloud-provider case studies describe judgment, never internal
  architecture or figures.
- **`draft: true` hides articles** from the listing, sitemap and detail
  routes (`getPublishedArticles`).

## Where each kind lives

| Kind | Module | Count | Notes |
| --- | --- | --- | --- |
| site/contact/nav model | `content/site.ts` | 1 | identity, grounded contact channels, nav lists |
| home copy (EN) | `content/home.ts` | 1 | hero, impact, help, teasers, final CTA |
| contact copy (EN) | `content/contact.ts` | 1 | intents + notes |
| CaseStudy | `content/work/work.ts` | 4 | `track: practice \| build`; sections from `CaseStudySection` union |
| Principle + models | `content/thinking/thinking.ts` | 9 + 2 | ladder rungs, telecom↔cloud pairs with confidence markers |
| HistoryEvent | `content/history/{ancient,medieval,modern,computing}.ts` | 115 | 14 categories, 9 regions |
| Thread | `content/history/threads.ts` | 7 | communication, computation, knowledge, … |
| Thinker | `content/ideas/thinkers.ts` | 34 | Greek, Eastern, Persian/Islamic, modern |
| Question | `content/ideas/questions.ts` | 10 | `framing`, `voices` (thinker ids) |
| JourneyChapter / JourneyEntry | `content/journey/journey.ts` | 5 / 11 | `artifact: true` marks the Ubuntu CD |
| Reflection, Now | `content/mind/mind.ts` | 6 + now | `now.updated` is `YYYY-MM` |
| ArticleMeta | `content/writing/articles.ts` | 6 | bodies are MDX files in `content/writing/mdx/` |

## Cross-reference integrity

Lookups (`getEvent`, `getThread`, `getThinker`, `getQuestion`,
`getArticleMeta`, `getCaseStudy`, …) are Map-backed in the matching
`index.ts`. A dangling id fails two ways:

1. **Type checking** — ids are typed as plain strings, but every page's
   `generateStaticParams` + content fetch will throw at build time if a
   referenced page can't be built.
2. **The build itself** — `npm run build` prerenders every detail page, so
   a bad `relatedEvents` id or an article slug without an MDX file breaks
   the build rather than shipping a dead link.

Before committing content changes, run:

```bash
npx tsc --noEmit && npm run build
```

## Adding a case study (worked example)

```ts
// src/content/work/work.ts
{
  id: "gpu-cloud-platform",            // kebab-case, unique across site
  title: "…",
  summary: "One line for cards and metadata.",
  track: "practice",                   // practice | build
  domain: "cloud",                     // cloud | product | infrastructure | telecom | web
  period: "2023 – present",
  role: "Technical Product Manager",
  organization: "Global-scale cloud provider",  // keep inside the envelope
  lede: "Opening line of the detail page.",
  sections: [ { heading: "context", body: "…" }, /* subset of CaseStudySection, in order */ ],
  technologies: ["…"],
  relatedArticles: ["why-infrastructure-products-are-different"],
}
```


## Adding an article

1. Add the `ArticleMeta` to `src/content/writing/articles.ts` (slug, date,
   category, tags, `readingTime`, optional `relatedEvents` /
   `relatedProjects`).
2. Write the body as MDX in `src/content/writing/mdx/<slug>.mdx` (start
   the file with a `{/* … */}` comment).
3. Import it in `src/app/writing/[article]/page.tsx` and add the slug →
   component mapping in `bodies`.

The listing sorts newest-first; the sitemap picks the article up
automatically.

## Adding a contact channel

Fill `linkedin` / `email` in `src/content/site.ts` — the header CTA
row, contact page, final CTA and footer render the channel wherever it
is defined. Nothing else to wire.
