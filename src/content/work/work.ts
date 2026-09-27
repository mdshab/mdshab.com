import type { CaseStudy } from "@/types/content";

/**
 * Professional case studies.
 *
 * Writing rules for this file:
 * - Plain sentences over impressive ones. Evidence over positioning
 *   language. A senior peer explaining their work, not an award entry.
 * - Employers appear only with names already published on this site
 *   (Tel4Tel, FCP) or at the published abstraction ("a global-scale
 *   cloud provider").
 * - No confidential internals: architecture, customers, numbers, roadmaps.
 * - Outcomes qualitative unless a figure was already public.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "cloud-services-at-scale",
    title: "Product decisions for cloud services at scale",
    summary:
      "Cloud Server, VPC, Storage, Migration: deciding what gets built, which defaults ship, and which promises the platform can keep. Hundreds of thousands of users.",
    track: "practice",
    domain: "cloud",
    period: "2022 – present",
    role: "Technical Product Manager",
    organization: "Global-scale cloud provider",
    lede:
      "Since 2022 I've decided what gets built, for whom and why, for cloud services used by hundreds of thousands of people. This is how those decisions actually get made.",
    sections: [
      {
        heading: "context",
        body: "I work on the IaaS layer of a global-scale cloud provider: Cloud Server, networking and VPC, Storage, Migration, and more recently GPU services. The customers are engineers and enterprises running production workloads — their applications, not their spare time. The infrastructure I now shape in product decisions is the kind I operated myself for the decade before.",
      },
      {
        heading: "problem",
        body: "Users of infrastructure don't want the product. They want their application to work, their backups to exist, their launch to survive its traffic. Success is measured by nothing happening, and only failure is visible. That changes what product work means here: you can't manufacture desire, you can only remove decisions and keep promises.",
      },
      {
        heading: "why-it-mattered",
        body: "For infrastructure, differentiation isn't delight — it's working under specific, adversarial conditions. Durability figures, latency ceilings, failure-domain behavior: for the customer that is not fine print, it's the thing being purchased.",
      },
      {
        heading: "my-role",
        body: "I own the what-for-whom-why side: reading usage and support signals, setting direction with engineering, negotiating scope with stakeholders, and turning architecture constraints into roadmap items the business can evaluate. Ten years of operating this class of system is what I use daily — when I read an architecture proposal, I can tell which shortcuts will page someone later.",
      },
      {
        heading: "constraints",
        body: "Four audiences at once: the engineer who integrates the service, the operator who runs it at 3 a.m., finance, and security. A change that helps one can hurt another. Enterprise sales cycles are long, compliance requirements are real, and switching costs work in both directions.",
      },
      {
        heading: "discovery",
        body: "The honest signals are behavioral: what users do during an incident at 2 a.m., which API calls cluster together, which tickets repeat, what prospects ask before buying, what the ops floor says in postmortems. Feature requests are data about frustration, not specifications — the work is digging back to the task the user was trying to finish.",
      },
      {
        heading: "product-reasoning",
        body: "Three rules I actually apply: default to defaults — make the right path the one with the fewest decisions. Price the promise — every reliability figure is a roadmap item with an engineering cost. Write like an operator — if the runbook can't be followed at 3 a.m., the feature isn't done.",
      },
      {
        heading: "trade-offs",
        body: "The recurring one is flexibility versus defaults. Every option we expose is a decision we push onto the user, and a state the platform supports forever. Removing an option is often worth more than adding one, though it's the harder conversation. The other is transparency versus noise: showing every failure domain builds trust with some users and overwhelms the rest, so the work is layering.",
      },
      {
        heading: "outcome",
        body: "Services that kept their promises as scale grew, and setup paths where users take fewer decisions to reach a safe working configuration. I can't publish internal figures; the shape of the outcome is what I can describe.",
      },
      {
        heading: "what-i-learned",
        body: "You can't price a promise you've never had to keep. The decade in operations wasn't a detour before product — it was the qualification.",
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
    title: "The network operations center in 2020",
    summary:
      "The first pandemic year: the world's traffic moved home. Escalation paths, shift handovers, and runbooks for the people awake at 3 a.m.",
    track: "practice",
    domain: "infrastructure",
    period: "2020",
    role: "Team Lead, Network Operations Center",
    organization: "Global-scale cloud provider",
    lede:
      "In 2020 I led the network operations center at a global-scale cloud provider — the year work, school and family traffic all moved home at once. This is what running incidents at scale taught me about how organizations fail.",
    sections: [
      {
        heading: "context",
        body: "I had joined as a cloud engineer in 2019. A year later the pandemic moved everything onto the platform at the same time, and I was leading the NOC team through it.",
      },
      {
        heading: "problem",
        body: "A NOC fails two ways. Technically: an incident outruns understanding. Organizationally: the right information exists in the room but never reaches the right person. The second failure is more common and more damaging — and it's a design problem, not a staffing one.",
      },
      {
        heading: "my-role",
        body: "Owning incidents end to end: escalation paths, shift handovers, runbooks, and the people awake at 3 a.m.",
      },
      {
        heading: "constraints",
        body: "At that scale no single person holds the system in their head, so context has to survive handovers intact. On-call rotations, constant pressure, and the constraint I cared about most: the youngest engineer on the 4 a.m. shift still had to make good calls with incomplete information.",
      },
      {
        heading: "discovery",
        body: "Patterns across incidents taught the durable lessons: which alerts predicted trouble and which were noise, which escalation paths worked and which just relocated anxiety, where runbooks had been written for their author instead of their reader. Postmortems were the curriculum — for finding where information stopped flowing, not for assigning blame.",
      },
      {
        heading: "decision",
        body: "Three decisions that stuck. One: a fixed handover format — what we know, what we've ruled out, what we're watching, who owns the next step. Two: runbooks written to be executed by a tired stranger, not their author. Three: an explicit norm that 'we don't know yet' is an acceptable status. Stated ambiguity beats false confidence every time.",
      },
      {
        heading: "trade-offs",
        body: "Structure costs speed in quiet moments to buy correctness in bad ones. A fixed handover format feels bureaucratic on a quiet Tuesday and is priceless during a multi-region event. Choosing clarity over heroics also means the brilliant-improvisation path is deliberately closed.",
      },
      {
        heading: "execution",
        body: "Working with engineering on alert quality, with shift leads on handover discipline, and with every incident review on feeding lessons back into the runbooks. Half the job was protocol; the other half was trust.",
      },
      {
        heading: "outcome",
        body: "A team that got through the platform's hardest traffic year, and incident reports engineering could act on without re-deriving them.",
      },
      {
        heading: "what-i-learned",
        body: "Most 'technical' failures at scale are interface failures between humans. That conclusion is what later moved me toward product.",
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
    title: "Voice platforms, 2007–2018",
    summary:
      "Eleven years while the phone network became software: VoIP administration at Tel4Tel, then network engineering and leading the voice team at FCP.",
    track: "practice",
    domain: "telecom",
    period: "2007 – 2018",
    role: "VoIP Administrator → Network Engineer → Voice Team Lead",
    organization: "Tel4Tel, then FCP",
    lede:
      "Between 2007 and 2018 the phone network stopped being hardware and became software. I spent those years at Tel4Tel and FCP, moving from administering VoIP systems to leading the voice team.",
    sections: [
      {
        heading: "context",
        body: "I started in 2007 administering VoIP at Tel4Tel: call flows, SIP trunks, codecs, gateways. In 2011 I moved to FCP — technical support first, network engineering a year later, then VoIP specialization and eventually managing the voice function through 2018.",
      },
      {
        heading: "problem",
        body: "Voice is unforgiving product territory. Users notice a broken call instantly — everyone from a CEO to a grandmother — and the system spans analog handsets, ISDN lines, IP networks and carrier interconnects, each with its own failure modes. When a call breaks, 'the network' gets blamed; finding which layer actually broke is the work.",
      },
      {
        heading: "why-it-mattered",
        body: "For the businesses we served, telephony wasn't a feature. It was revenue, safety, and sometimes the only line to their own customers.",
      },
      {
        heading: "my-role",
        body: "Across the years: administering production VoIP platforms; answering the phone when things broke; engineering the networks voice ran over; designing NGN and Cisco voice platforms; and finally leading the people who kept them alive.",
      },
      {
        heading: "constraints",
        body: "Legacy everywhere: equipment designed decades before IP, interconnects with monolithic carriers, customers who couldn't describe their own call flows — and voice's hard real-time constraint. Latency and jitter aren't degraded UX; they're broken calls.",
      },
      {
        heading: "discovery",
        body: "Answering the support line was the best product education I ever received, years before I heard the word discovery. Every ticket showed how systems actually fail and how people experience the failure. Reproduce, isolate, verify — the one skill that has outlived every technology I've used since.",
      },
      {
        heading: "decision",
        body: "As the voice lead: which platforms to standardize on; how to structure the team so knowledge lived in systems and documentation instead of one expert's head; and how to keep physical-layer thinking alive in an IP world that preferred to forget it.",
      },
      {
        heading: "trade-offs",
        body: "Deep specialization in voice was narrowing; the compensation was knowing one vertical end to end — signaling, transport, switching, and the organization around them. Managing meant solving problems through people instead of my own keyboard, which felt slower and turned out to scale.",
      },
      {
        heading: "outcome",
        body: "Voice platforms designed and operated for real customers over years, and a team that didn't depend on any single expert.",
      },
      {
        heading: "what-i-learned",
        body: "Voice was my first infrastructure product: invisible when working, binary when broken. Every product principle I hold has a telephony ancestor.",
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
    title: "This website",
    summary:
      "A bilingual static site of about 200 pages: typed content models, no trackers, built by one person.",
    track: "build",
    domain: "web",
    period: "Built 2026",
    role: "Design, engineering, writing",
    organization: "Personal project",
    lede:
      "My own site: bilingual, about 200 static pages, no trackers. It serves as its own case study.",
    sections: [
      {
        heading: "context",
        body: "A personal site where the content is supposed to connect: history events link to essays, essays link to projects, all on a shared data model.",
      },
      {
        heading: "problem",
        body: "Personal sites are usually disconnected pages: an about, some posts, no relationships. I wanted a graph. And since some of the readers sit behind restricted networks, the fonts are self-hosted too.",
      },
      {
        heading: "my-role",
        body: "Design, engineering and writing — one person, in the time that's left over.",
      },
      {
        heading: "architecture",
        body: "Content lives as typed TypeScript data, not a CMS — heavier to write, but type-checked and diffable in git. Fully static rendering. The timeline has two views: a spatial one for desktop, a semantic list for screen readers and small screens. No analytics served at all.",
      },
      {
        heading: "trade-offs",
        body: "TypeScript data files over a CMS cost writing speed and buy type safety and zero runtime dependencies — the right trade for a site that must survive neglect. Dual-rendering the timeline costs code and buys accessibility. Serving no analytics protects readers and costs me data I decided I don't need.",
      },
      {
        heading: "execution",
        body: "Next.js App Router with static prerendering, a command palette built over the same content modules the pages render, MDX essays compiled as React Server Components with no client-side MDX runtime, and a Persian edition written independently rather than translated.",
      },
      {
        heading: "outcome",
        body: "This site. A content model one person can extend by editing typed files — you're reading one of its pages.",
      },
      {
        heading: "what-i-learned",
        body: "The content model is the architecture. Deciding what fields an 'event' has was harder and more useful than any page layout.",
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
