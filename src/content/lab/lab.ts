import type { LabProject } from "@/types/content";

/**
 * Lab case studies. Outcomes are described honestly — qualitative where
 * no measured numbers exist. No invented metrics.
 */
export const labProjects: LabProject[] = [
  {
    id: "abstraction-ladder",
    title: "The Abstraction Ladder, as a working model",
    status: "ongoing",
    kind: "infrastructure",
    period: "Ongoing since 2019",
    summary:
      "A mental model of infrastructure as five rungs — physical, virtualization, cloud, cloud native, intelligent — used to explain, plan and teach.",
    sections: [
      {
        heading: "context",
        body: "Every infrastructure conversation mixes rungs: someone means racks, someone means clusters, someone means a control plane. Over years of NOC work and product management, a five-rung ladder kept resolving the confusion.",
      },
      {
        heading: "problem",
        body: "New engineers see the ladder as marketing jargon; experienced engineers forget how much each rung changes failure modes, skills and cost models.",
      },
      {
        heading: "why-it-mattered",
        body: "Shared vocabulary is infrastructure. A team that can name which rung a decision lives on argues about the right things.",
      },
      {
        heading: "constraints",
        body: "The model had to work for non-engineers (product, sales, support), survive contact with real incidents, and not become a replacement for actual architecture diagrams.",
      },
      {
        heading: "decision",
        body: "Five rungs, each defined by what it hides: virtualization hides hardware, cloud hides location, cloud native hides servers entirely, the intelligent layer hides configuration itself.",
      },
      {
        heading: "trade-offs",
        body: "Any ladder oversimplifies — real systems mix rungs, and boundary cases (bare-metal cloud, serverless-with-servers) refuse to sit still.",
      },
      {
        heading: "outcome",
        body: "The ladder became a standing explainer in onboarding and roadmap discussions. It is also the organizing idea of the Journey section of this site.",
      },
      {
        heading: "what-i-learned",
        body: "The models that spread are the ones that fit on one diagram and survive being drawn from memory.",
      },
    ],
    technologies: ["Cloud architecture", "Virtualization", "Technical writing"],
    relatedArticles: ["physical-servers-vms-containers"],
    relatedHistory: ["aws-launch", "docker-kubernetes"],
  },
  {
    id: "mdshab-com",
    title: "mdshab.com — this website",
    status: "active",
    kind: "web",
    period: "Built 2026",
    summary:
      "A personal knowledge site connecting 3,000 years of history, the history of ideas, and one infrastructure career — built data-first, with typed content models and a knowledge graph.",
    sections: [
      {
        heading: "context",
        body: "Twenty years in telecommunications and cloud infrastructure, plus a long-standing interest in history and philosophy — the site is the intersection, structured as a graph rather than a blog.",
      },
      {
        heading: "problem",
        body: "Personal sites usually isolate their content: an about page, some posts, no connective tissue. I wanted events, thinkers, career entries and articles to reference each other.",
      },
      {
        heading: "why-it-mattered",
        body: "The web was invented for exactly this — linked knowledge. Most sites, including most personal ones, don't use the links.",
      },
      {
        heading: "constraints",
        body: "Static-friendly (no backend), fast on flaky connections, accessible, content in typed TypeScript models, no invented facts anywhere.",
      },
      {
        heading: "architecture",
        body: "Next.js App Router; content as typed data in src/content; a shared design system with Fluent UI v9 primitives under a custom theme; the command palette and cross-links read from one search index.",
      },
      {
        heading: "product-reasoning",
        body: "The site's product decision is the graph: every event, thinker, question and journey entry can be an entry point, and each page offers its neighbors.",
      },
      {
        heading: "trade-offs",
        body: "TypeScript data files are heavier than a CMS but type-checked, diffable, and free of runtime dependencies — the right trade for a site that must survive neglect.",
      },
      {
        heading: "outcome",
        body: "This site. The Lab section you're reading is itself an entry in its own graph.",
      },
      {
        heading: "what-i-learned",
        body: "Content models are architecture. Deciding what an 'event' is — fields, types, relations — was harder and more valuable than any page layout.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Fluent UI v9", "Motion", "MDX"],
    relatedArticles: ["why-infrastructure-products-are-different"],
    relatedHistory: ["world-wide-web"],
  },
  {
    id: "telecom-evolution-map",
    title: "Telecom → Cloud, an evolution map",
    status: "archived",
    kind: "infrastructure",
    period: "Archived",
    summary:
      "A mapping of classic telecom concepts onto their cloud-era equivalents — trunk to gateway to API, switchboard to control plane — drawn from a career spent on both sides.",
    sections: [
      {
        heading: "context",
        body: "Telecom solved reliability, scale and billing decades before cloud computing had a name. The map started as notes explaining cloud ideas to telecom colleagues.",
      },
      {
        heading: "problem",
        body: "Both industries reinvent each other's wheels, and the vocabulary gap hides it: what telecom calls a number plan, cloud calls addressing; what telecom called a switchboard, cloud calls an orchestrator.",
      },
      {
        heading: "why-it-mattered",
        body: "Engineers who know both sides can see which 'new' ideas are old ideas with better tooling — and which are genuinely new.",
      },
      {
        heading: "constraints",
        body: "The mapping had to stay honest: not every pair is exact, and pretending otherwise produces bad architecture.",
      },
      {
        heading: "decision",
        body: "A table of pairs with confidence markers — 'exact', 'analogous', 'inspired by' — so the gaps stay visible.",
      },
      {
        heading: "trade-offs",
        body: "Analogy clarifies and then misleads; the markers exist because the temptation to over-map is strong.",
      },
      {
        heading: "outcome",
        body: "Used in internal talks and onboarding; the clearest pairs became articles, including 'From PBX to Cloud Communications'.",
      },
      {
        heading: "what-i-learned",
        body: "The history of a technology is the fastest way to teach it.",
      },
    ],
    technologies: ["VoIP", "SIP", "Cloud telephony", "Teaching"],
    relatedArticles: ["from-pbx-to-cloud-communications", "3000-years-of-communication-technology"],
    relatedHistory: ["voip-vocaltec", "bell-telephone", "morse-telegraph"],
  },
  {
    id: "communication-timeline-engine",
    title: "Timeline engine (the one under Humanity)",
    status: "structure",
    kind: "product",
    period: "Built 2026",
    summary:
      "The rendering engine behind the Humanity section: one typed dataset, two experiences — spatial horizontal timeline on desktop, vertical chronology on mobile — with keyboard and screen-reader access.",
    sections: [
      {
        heading: "context",
        body: "A timeline of a hundred-plus events across thirty centuries can't be one `<div>` with a scroll bar. It has to remain an article that happens to look like a map.",
      },
      {
        heading: "problem",
        body: "Timelines on the web are usually either visual (exclusionary, fragile on mobile) or lists (accurate but flat). The spec for this site demanded both experiences from one source of truth.",
      },
      {
        heading: "constraints",
        body: "WCAG AA, reduced-motion support, no more than one canonical copy of the data, and honest alternatives for every visual encoding.",
      },
      {
        heading: "architecture",
        body: "Events live in typed data files; a scale function maps years to positions for the spatial view; the same data renders a semantic list for assistive technology and small screens. Filters are URL state, so every view is shareable.",
      },
      {
        heading: "product-reasoning",
        body: "The desktop view gives the 30,000-year sweep; the list view gives the scholarship. Neither is a degraded version of the other.",
      },
      {
        heading: "trade-offs",
        body: "Two renderers of one dataset is more code than one responsive view — paid off in accessibility and clarity.",
      },
      {
        heading: "outcome",
        body: "Live in Humanity. This site's most ambitious component and the reason the content layer exists in its current form.",
      },
      {
        heading: "what-i-learned",
        body: "Accessibility-first design isn't a constraint on the visual — it's the spec that makes the visual possible at all.",
      },
    ],
    technologies: ["Next.js", "d3-scale", "Motion", "Accessibility"],
    relatedHistory: ["gutenberg-press", "arpanet"],
  },
];
