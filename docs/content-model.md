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
LabProject ──relatedArticles/relatedHistory──> above
```

## Conventions

- **Years are integers; BCE is negative.** `startYear: -525` is 525 BCE.
  `formatYear` in `src/lib/format.ts` renders the "BCE"/"CE" label.
- **`approximate: boolean` is required** on every event. Approximate dates
  render with a "c." prefix (`formatEventRange`). Ranges use an en dash.
- **Quotes are sourced or absent.** `Thinker.quote` and `quoteSource` must
  point at a real text; when the attribution is uncertain, say so in the
  source string or omit the quote and let `coreIdeas` carry the summary.
- **Career facts are a closed set.** Journey entries use only the years the
  site owner supplied. Pre-career entries omit `year` entirely — the Ubuntu
  CD entry is `period: "Early computing years"`, deliberately undated.
- **`draft: true` hides articles** from the listing, sitemap and detail
  routes (`getPublishedArticles`).

## Where each kind lives

| Kind | Module | Count | Notes |
| --- | --- | --- | --- |
| HistoryEvent | `content/history/{ancient,medieval,modern,computing}.ts` | 115 | 14 categories, 9 regions, sorted by `startYear` in `index.ts` |
| Thread | `content/history/threads.ts` | 7 | communication, computation, knowledge, medicine, energy, transportation, governance |
| Thinker | `content/ideas/thinkers.ts` | 34 | Greek, Eastern, Persian/Islamic, modern European |
| Question | `content/ideas/questions.ts` | 10 | `framing`, `lenses` (tradition-keyed), `voices` (thinker ids) |
| JourneyChapter / JourneyEntry | `content/journey/journey.ts` | 5 / 11 | `artifact: true` marks the Ubuntu CD THEN/NOW feature |
| LabProject | `content/lab/lab.ts` | 4 | `sections` must follow the 8 `CaseStudySection` headings in order |
| Reflection, Now | `content/mind/mind.ts` | 6 + now | `now.updated` is `YYYY-MM`, rendered "September 2026" |
| ArticleMeta | `content/writing/articles.ts` | 6 | bodies are MDX files in `content/writing/mdx/` |

## Cross-reference integrity

Lookups (`getEvent`, `getThread`, `getThinker`, `getQuestion`,
`getArticleMeta`, …) are Map-backed in the matching `index.ts`. A dangling
id fails two ways:

1. **Type checking** — ids are typed as plain strings, but every page's
   `generateStaticParams` + content fetch will throw at build time if a
   referenced page can't be built.
2. **The build itself** — `npm run build` prerenders every detail page, so
   a bad `relatedEvents` id, a `voices` entry without a thinker, or an
   article slug without an MDX file breaks the build rather than shipping
   a dead link.

Before committing content changes, run:

```bash
npx tsc --noEmit && npm run build
```

## Adding an event (worked example)

```ts
// src/content/history/modern.ts
{
  id: "commercial-steam-navigation",
  title: "Steamships put schedules on the sea",
  startYear: 1838,
  endYear: undefined,
  approximate: true,
  category: "technology",
  region: "europe",
  summary: "…",
  significance: "…",
  people: ["Isambard Kingdom Brunel"],
  threads: ["transportation", "communication"],
  relatedEvents: ["transatlantic-cable", "gutenberg-press"],
  sources: ["…"],
}
```

Then rebuild. The event automatically appears in: `/humanity` (both
timeline views), its event page with pager and backlinks, thread/region/
category filters, the ⌘K search index, the sitemap, and any thread pages
that include it — all derived, nothing to register by hand.

## Adding an article

1. Add the `ArticleMeta` to `src/content/writing/articles.ts` (slug, date,
   category, tags, `readingTime`, optional `relatedEvents` /
   `relatedProjects`).
2. Write the body as MDX in `src/content/writing/mdx/<slug>.mdx` (the file
   must start with a JSX comment or element — MDX treats bare markdown
   after frontmatter-style comments fine; this site starts bodies with
   `{/* ... */}`).
3. Import it in `src/app/writing/[article]/page.tsx` and add the slug →
   component mapping in `bodies`.

The listing sorts newest-first; the sitemap picks the article up
automatically.
