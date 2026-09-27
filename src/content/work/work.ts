import type { CaseStudy } from "@/types/content";

/**
 * Professional case studies.
 *
 * Writing rules for this file:
 * - Employers appear only with the names already published on this site
 *   (Tel4Tel, FCP) or at the already-published abstraction ("a
 *   global-scale cloud provider").
 * - No confidential internals: architecture, customers, numbers, roadmaps.
 * - Outcomes qualitative unless a figure was already public.
 * - The point of each study is the JUDGMENT — what made the decision hard,
 *   what alternatives existed, what was traded away — not a project report.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "cloud-services-at-scale",
    title: "Product decisions for cloud services at scale",
    summary:
      "Technical product management for infrastructure services used by hundreds of thousands of people — where reliability is the product and the best UX is less UX.",
    track: "practice",
    domain: "cloud",
    period: "2022 – present",
    role: "Technical Product Manager",
    organization: "Global-scale cloud provider",
    lede:
      "Infrastructure products are judged by what never happens. This is what deciding what gets built looks like when the user's definition of success is silence.",
    sections: [
      {
        heading: "context",
        body: "Since 2022 I've worked as a technical product manager on cloud services serving hundreds of thousands of users. The customers are engineers and enterprises running real workloads; the stakes are their production systems, not their leisure time. The product surface I work on sits on top of infrastructure I used to operate myself, a decade earlier.",
      },
      {
        heading: "problem",
        body: "Nobody wants cloud infrastructure. They want their application to work, their backups to exist, their launch to survive its traffic. The product's success is measured by its own invisibility — which inverts most consumer product instincts. Desire cannot be manufactured; only friction can be removed and trust earned.",
      },
      {
        heading: "why-it-mattered",
        body: "For an infrastructure provider, differentiation is not delight — it is working under specific, quantified, adversarial conditions. Durability, latency ceilings, failure-domain behavior: for the customer these are not fine print, they are the purchase. The product organization's job is to decide which of those promises to make, and what each one costs to keep.",
      },
      {
        heading: "my-role",
        body: "I own the 'what, for whom, and why' side of the services I cover: reading usage and support signals, defining direction with engineering, negotiating scope with stakeholders, and turning architecture constraints into roadmap choices a business can evaluate. The previous decade operating this class of system is the tool I use daily — I can read an architecture discussion and know which corner cuts will page someone at 3 a.m.",
      },
      {
        heading: "constraints",
        body: "The cast is the constraint set: the engineer who integrates the service, the operator who runs it at 3 a.m., the finance owner who pays, the security reviewer who gates. A change that delights one can punish another. Add enterprise buyers with long decision cycles, compliance requirements, and migration costs that make switching painful in both directions.",
      },
      {
        heading: "discovery",
        body: "The honest signals in infrastructure are behavioral, not aspirational: what users do at 2 a.m. during an incident, which API calls cluster together, where support tickets repeat, what prospects ask before they buy, what the ops floor says in postmortems. Feature requests are data about frustration, not specifications — the work is digging back to the job the user was trying to do.",
      },
      {
        heading: "product-reasoning",
        body: "Three rules I apply, distilled in the Thinking section of this site: default to defaults (make the right path the path of least decisions); price the promise (every reliability figure is a roadmap item with an engineering cost); write like an operator (if the runbook can't be followed at 3 a.m., the feature isn't done).",
      },
      {
        heading: "trade-offs",
        body: "The recurring one: flexibility versus inevitability. Every configuration option we expose is a decision we push onto the user and a state the platform must support forever. Removing an option is often the more valuable roadmap item than adding one — and the harder conversation. The second: transparency versus cognitive load — showing every failure domain builds trust and overwhelms most users; the design work is layering.",
      },
      {
        heading: "outcome",
        body: "Services that kept their promises at growing scale, a product direction that engineers could defend in architecture reviews because it accounted for how the system actually fails, and roadmap choices the business could evaluate on cost-of-promise rather than feature-count. The qualitative outcome that matters most to me: fewer decisions required from each user to get to a safe, working setup.",
      },
      {
        heading: "what-i-learned",
        body: "Infrastructure product management is the craft of making powerful things feel inevitable. The decade I spent in the NOC was not a detour before product — it was the qualification. You cannot price a promise you have never had to keep.",
      },
    ],
    technologies: [
      "Product strategy",
      "Cloud services",
      "Roadmapping",
      "Developer experience",
      "Enterprise requirements",
    ],
    relatedArticles: ["why-infrastructure-products-are-different"],
    relatedHistory: ["aws-launch"],
  },
  {
    id: "keeping-the-network-up",
    title: "The room where the internet stays up",
    summary:
      "Leading a Network Operations Center through 2020: incident response as applied epistemology — what do we know, how do we know it, who needs to know it next.",
    track: "practice",
    domain: "infrastructure",
    period: "2020",
    role: "Team Lead, Network Operations Center",
    organization: "Global-scale cloud provider",
    lede:
      "In a NOC, every incident is a race between two systems: the one that is failing, and the one of people, escalations and handovers trying to understand it. I led the second one.",
    sections: [
      {
        heading: "context",
        body: "In 2020 the world's traffic moved indoors and stayed there. The cloud provider I had joined as an engineer the year before was running infrastructure that suddenly carried everything — work, school, family. I was leading the Network Operations Center team through it.",
      },
      {
        heading: "problem",
        body: "A NOC fails in two ways: technically, when an incident outpaces understanding, and organizationally, when the right information exists in the room but never reaches the right person. The second failure is more common and more damaging — and it is a design problem, not a staffing one.",
      },
      {
        heading: "my-role",
        body: "Owning incidents end to end: escalation paths, handovers between shifts, runbooks, and the humans at 3 a.m. Building the operating rhythm — what gets escalated, when, to whom, with what information — and coaching the team through the hardest educational year most of us had worked.",
      },
      {
        heading: "constraints",
        body: "Scale meant no single person could hold the system in their head. On-call rotations meant context had to survive handovers intact. Public stakes meant pressure was constant. And the constraint I cared about most: the youngest engineer on shift at 4 a.m. still had to make good decisions with imperfect information.",
      },
      {
        heading: "discovery",
        body: "Pattern-reading across incidents taught the durable lessons: which alerts actually predicted trouble versus noise; which escalation paths worked and which just moved anxiety; where runbooks were written for the author instead of the reader. Postmortems were the curriculum — not for assigning cause, but for finding where information had stopped flowing.",
      },
      {
        heading: "decision",
        body: "Invest in the information system, not just the technical one: handovers with a fixed structure (what we know, what we've ruled out, what we're watching, who owns next steps), runbooks written to be executed by a tired stranger, and explicit norms that saying 'we don't know yet' is an acceptable status. Ambiguity stated clearly beats false confidence every time.",
      },
      {
        heading: "trade-offs",
        body: "Structure costs speed in the easy moments to buy correctness in the hard ones. A fixed handover format feels bureaucratic at 15:00 on a quiet Tuesday and priceless at 03:00 during a multi-region event. Choosing clarity over heroics also means accepting that the brilliant-individual-improvisation path is deliberately closed.",
      },
      {
        heading: "execution",
        body: "Working with engineering teams on alert quality, with the shift leads on handover discipline, and with every incident review on feeding the lessons back into the runbooks. Coordination with engineering leadership on what the NOC was seeing before it became their postmortem. The job was equal parts protocol and trust.",
      },
      {
        heading: "outcome",
        body: "A team that held through the most demanding year in the platform's traffic history, escalation paths people actually used, and an incident language precise enough that engineering could act on our reports without re-deriving them. The reflection I kept from that year: incident response is applied epistemology.",
      },
      {
        heading: "what-i-learned",
        body: "Most 'technical' problems at scale are interface problems between humans. That insight is why I later moved toward product: a product is just an interface between an organization and its users, and the discipline of designing one well is the same.",
      },
    ],
    technologies: [
      "Incident management",
      "NOC operations",
      "On-call",
      "Runbooks",
      "Team leadership",
    ],
    relatedArticles: ["what-infrastructure-taught-me"],
  },
  {
    id: "voice-becomes-software",
    title: "Voice becomes software",
    summary:
      "Eleven years in telephony while the phone network was rewritten as software — from administering VoIP systems to leading voice infrastructure for real customers.",
    track: "practice",
    domain: "telecom",
    period: "2007 – 2018",
    role: "VoIP Administrator → Network Engineer → VoIP Expert & Manager",
    organization: "Tel4Tel, then FCP",
    lede:
      "Telephony spent a century as copper and switches, then became configuration. I spent eleven years on the bridge between the two — and the view from there shaped everything after.",
    sections: [
      {
        heading: "context",
        body: "I started in 2007 administering VoIP systems at Tel4Tel: call flows, SIP trunks, codecs, gateways. The century-old empire of copper was being rewritten as applications, and real customers depended on the rewrite working. In 2011 I moved to FCP — technical support first, network engineering a year later, then years of VoIP specialization and eventually managing the VoIP function through 2018.",
      },
      {
        heading: "problem",
        body: "Voice is unforgiving product territory: people notice a broken phone call instantly, everyone from a CEO to a grandmother is a user, and the system spans analog handsets, ISDN lines, IP networks and carrier interconnects — each layer with its own failure modes. When a call breaks, 'the network' is blamed; finding which layer actually broke is the work.",
      },
      {
        heading: "why-it-mattered",
        body: "For the businesses we served, telephony was not a feature — it was revenue, safety, and sometimes the only line to their own customers. Reliability was a form of respect long before I could articulate it as a product principle.",
      },
      {
        heading: "my-role",
        body: "Across the years: administering production VoIP platforms; answering the phone when things broke; engineering the networks voice ran over; designing NGN and Cisco voice platforms; and finally leading the people who kept them alive. The progression mattered — support taught me how systems actually fail, engineering taught me why, and management taught me that coordination is its own discipline.",
      },
      {
        heading: "constraints",
        body: "Legacy everywhere: equipment designed decades before IP, interconnects with monolithic carriers, customers who could not describe their own call flows, and the hard realtime constraint of voice — latency and jitter are not degradeable UX, they are broken calls.",
      },
      {
        heading: "discovery",
        body: "Answering the support line was the best product education I ever received, before I knew the word 'discovery'. Every ticket was a lesson in how systems actually fail — and how people experience failure. Reproduce, isolate, verify: the skill that outlived every technology I've used since.",
      },
      {
        heading: "decision",
        body: "When I led the VoIP function, the standing decisions were about where to standardize: which platforms to build on, how to structure the team so knowledge lived in the systems and documentation rather than in one expert's head, and how to keep the analog discipline — physical-layer thinking — alive in an IP world that preferred to forget it.",
      },
      {
        heading: "trade-offs",
        body: "Deep specialization in voice was narrowing; the compensation was mastering a whole vertical end to end — signaling, transport, switching, and the human organization around them. The clearest trade of the management years: solving problems through people instead of through my own keyboard, which felt slower and turned out to scale.",
      },
      {
        heading: "outcome",
        body: "Voice platforms designed and operated for real customers over years, a team structured to survive its own expertise, and — in the direction that mattered most to my later career — a firsthand understanding of what it means when a network service becomes a product: the promises, the failure modes, and the user on the other end of a silent line.",
      },
      {
        heading: "what-i-learned",
        body: "Voice was my first infrastructure product: invisible when working, binary when broken, judged by everyone. Every product principle I hold now — defaults, promises, operational honesty — has a telephony ancestor.",
      },
    ],
    technologies: [
      "VoIP",
      "SIP",
      "Asterisk",
      "Cisco VoIP",
      "NGN",
      "Routing & switching",
      "BGP",
    ],
    relatedArticles: [
      "from-pbx-to-cloud-communications",
      "what-infrastructure-taught-me",
    ],
    relatedHistory: ["bell-telephone", "voip-vocaltec"],
  },
  {
    id: "this-website",
    title: "mdshab.com — this website",
    summary:
      "A personal knowledge platform built data-first: typed content models, static generation, and accessibility as an architectural constraint, not a coat of paint.",
    track: "build",
    domain: "web",
    period: "Built 2026",
    role: "Designer, engineer, content",
    organization: "Personal project",
    lede:
      "Most personal sites are pages. I wanted a graph — events, thinkers, career entries and essays referencing each other — and I wanted it to survive neglect. This site is the result, and it is its own case study.",
    sections: [
      {
        heading: "context",
        body: "Twenty years across telecom and cloud, plus a long-standing interest in history and philosophy, produce a lot of connected material. The site is the intersection, structured so that every event, thinker, question, journey entry and article can reference its neighbors.",
      },
      {
        heading: "problem",
        body: "Personal sites usually isolate their content: an about page, some posts, no connective tissue. Meanwhile every 'personal brand' template optimizes for appearing impressive rather than being explorable. I wanted the opposite: a site whose structure communicates how the person thinks.",
      },
      {
        heading: "constraints",
        body: "Static-friendly with no backend or database; fast on flaky connections (some of my readers are behind restricted networks — which is also why the fonts are self-hosted); accessible to keyboard and screen readers; honest content with no invented facts; maintainable by one person in spare time.",
      },
      {
        heading: "architecture",
        body: "Next.js App Router with static prerendering; content as typed TypeScript modules forming a knowledge graph with Map-backed lookups; a shared design system on Fluent UI v9 primitives under a custom theme; a ⌘K command palette driven by a search index built from the same content modules the pages render; MDX essays compiled as React Server Components with zero client-side MDX runtime.",
      },
      {
        heading: "product-reasoning",
        body: "The product decision is the graph: every entity is an entry point, and every page offers its neighbors. The homepage was redesigned around a professional narrative — value, evidence, thinking, then the deeper library — while the library sections (a 115-event historical timeline, 34 thinkers, a breathing space) remain one click away, repositioned as depth rather than noise.",
      },
      {
        heading: "trade-offs",
        body: "TypeScript data files are heavier to write than a CMS but type-checked, diffable in git, and free of runtime dependencies — the right trade for a site that must survive neglect. Dual-rendering the timeline (spatial for desktop eyes, semantic list for screen readers and small screens) costs code and buys accessibility. Serving no analytics protects readers and costs me data I decided I don't need.",
      },
      {
        heading: "execution",
        body: "Design system first (tokens, type, Fluent theme), then content models, then rendering. The timeline engine positions 115 events across thirty centuries with d3-scale in one view and a semantically ordered list in the other; filters are URL state so every view is shareable and works without JavaScript. The command palette implements the WAI-ARIA combobox pattern with aria-activedescendant tracking.",
      },
      {
        heading: "outcome",
        body: "This site: fully static, bilingual (English and native Persian), WCAG-AA-minded, with zero trackers and a content graph a single person can extend by editing typed files. You are reading an entry in it.",
      },
      {
        heading: "what-i-learned",
        body: "Content models are architecture: deciding what an 'event' is — fields, types, relations — was harder and more valuable than any page layout. The same is true of every product I have worked on; this site just made it visible.",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Fluent UI v9",
      "MDX",
      "Accessibility",
    ],
    relatedArticles: ["why-infrastructure-products-are-different"],
    relatedHistory: ["world-wide-web"],
  },
];

export const getCaseStudy = (() => {
  const map = new Map(caseStudies.map((study) => [study.id, study]));
  return (id: string) => map.get(id);
})();

/** Featured on the homepage (order matters). */
export const featuredCaseStudyIds = [
  "cloud-services-at-scale",
  "keeping-the-network-up",
  "voice-becomes-software",
];
