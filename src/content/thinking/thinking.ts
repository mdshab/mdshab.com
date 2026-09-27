/**
 * How I think — principles distilled from two decades of infrastructure
 * and product work. Each principle is short by design: one claim, the
 * experience behind it, and where it shows up in practice.
 *
 * No textbook definitions. No frameworks for their own sake.
 */

export interface Principle {
  id: string;
  claim: string;
  body: string;
  /** Where the principle came from / where it applies */
  origin: string;
}

export const principles: Principle[] = [
  {
    id: "users-buy-outcomes",
    claim: "Users buy outcomes, tolerate products",
    body: "Nobody wakes up wanting your infrastructure. They wake up wanting their application to work, their backups to exist, their launch to survive its traffic. When desire is already fixed at 'make it work', every screen, concept and required decision is friction against the outcome they came for. The best infrastructure UX often looks like less UX.",
    origin: "Cloud product management, 2022–present",
  },
  {
    id: "reliability-is-the-product",
    claim: "Reliability is the product",
    body: "For most products 'it works' is table stakes and differentiation happens above it. For infrastructure, working under specific, quantified, adversarial conditions is the differentiation. Durability figures, latency ceilings and failure-domain stories are not fine print — they are the thing being purchased. So a product manager here spends less time on features and more time on promises: which to make, how to phrase them honestly, what they cost to keep.",
    origin: "From the NOC to the roadmap",
  },
  {
    id: "price-the-promise",
    claim: "Price the promise",
    body: "Every reliability number is an engineering commitment with a running cost. 'Eleven nines' is not a slogan; somewhere it is redundancy, failover logic and an on-call burden. The honest version of product strategy is choosing which promises to sell at which price — including the price the organization pays to keep them.",
    origin: "Cloud product management",
  },
  {
    id: "abstractions-are-promises",
    claim: "Abstractions are promises",
    body: "Virtualization hides hardware. Cloud hides location. Cloud-native hides servers entirely. The intelligent layer hides configuration itself. Each rung of the ladder is a promise that you can stop thinking about what it hides — and every leak through the abstraction is a broken promise someone has to answer for. Knowing which promise you are making, and to whom, is most of technical product judgment.",
    origin: "The abstraction ladder — see below",
  },
  {
    id: "physical-layer-answers",
    claim: "The physical layer always answers eventually",
    body: "Every 'virtual' thing touches something real: metal, heat, fiber, a power cable someone tripped over. Twenty years of tracing failures down the stack built one durable instinct — when explanations get too abstract, walk down the ladder until you hit something you can touch. The bug is usually where the story stopped being physical.",
    origin: "Analog systems before digital ones",
  },
  {
    id: "coordination-is-technical",
    claim: "Coordination problems are technical problems",
    body: "The hardest scale-up I ever faced was not call volume — it was the coordination between the people keeping the calls alive. Most 'technical' failures at scale turn out to be interface failures between humans: between teams, shifts, vendors, or a company and its customers. A product is an interface between an organization and its users; designing it well includes designing the organization's side.",
    origin: "Leading voice infrastructure and a NOC",
  },
  {
    id: "write-like-an-operator",
    claim: "Write like an operator",
    body: "Users arrive with a job to do. The documentation is the onboarding, the pricing page and the support tier. A runbook that can't be followed at 3 a.m. by a tired stranger is not a runbook; it's a diary. If the operator can't execute your words under pressure, the feature isn't done.",
    origin: "Incident response, runbooks, postmortems",
  },
  {
    id: "measure-invisibility",
    claim: "Measure invisibility",
    body: "Infrastructure succeeds by disappearing, so success metrics have to look for the absence of things: fewer decisions per safe setup, fewer pages per task, fewer tickets per integration, less time from 'I signed up' to 'it works'. Counting features is counting the wrong thing.",
    origin: "Cloud product management",
  },
  {
    id: "restart-is-not-resolution",
    claim: "A restart is not a resolution",
    body: "Rebooting a broken system until it works teaches you nothing about the fault — it postpones the lesson. The same is true of products and organizations: shipping the workaround feels like progress until the same incident returns with interest. Sit with the problem long enough to understand it, or schedule the understanding explicitly. Postponed lessons compound.",
    origin: "Support, operations, and every postmortem since",
  },
];

/* ------------------------------------------------------------------ */
/* Models — reusable thinking tools drawn on real whiteboards          */
/* ------------------------------------------------------------------ */

export const abstractionLadder = {
  id: "abstraction-ladder",
  title: "The abstraction ladder",
  lede: "Infrastructure is easiest to explain as a ladder. Each rung hides the one below it — and changes what failure means, who can fix what, and what things cost.",
  rungs: [
    {
      rung: "Physical",
      question: "Bare metal. You touch what breaks.",
      example: "Racks, cables, PBX cabinets",
    },
    {
      rung: "Virtualization",
      question: "One host, many machines.",
      example: "Hypervisors, VMs, snapshots",
    },
    {
      rung: "Cloud",
      question: "Location stops mattering.",
      example: "Regions, IaaS, elastic scale",
    },
    {
      rung: "Cloud native",
      question: "Servers stop mattering.",
      example: "Containers, orchestration, services",
    },
    {
      rung: "Intelligent infrastructure",
      question: "Configuration starts writing itself.",
      example: "Automation, AI-assisted operations",
    },
  ],
  coda: "Any ladder oversimplifies — real systems mix rungs, and boundary cases like bare-metal cloud refuse to sit still. The model survives because it fits on one diagram and can be drawn from memory.",
};

export interface EvolutionPair {
  concept: string;
  telecom: string;
  cloud: string;
  confidence: "exact" | "analogous" | "inspired";
}

export const telecomCloudMap = {
  id: "telecom-cloud-map",
  title: "Telecom → Cloud, an evolution map",
  lede: "Telecom solved reliability, scale and billing decades before cloud computing had a name. Both industries keep reinventing each other's wheels — the vocabulary gap just hides it. The markers keep the mapping honest: exact, analogous, inspired.",
  pairs: [
    {
      concept: "Addressing",
      telecom: "Number plan",
      cloud: "IP addressing / DNS",
      confidence: "exact",
    },
    {
      concept: "Traffic steering",
      telecom: "Class-of-service routing",
      cloud: "Load balancing / traffic management",
      confidence: "analogous",
    },
    {
      concept: "Signaling",
      telecom: "SS7 / SIP",
      cloud: "Control planes / APIs",
      confidence: "analogous",
    },
    {
      concept: "Switchboard",
      telecom: "Operator / PBX",
      cloud: "Orchestrator",
      confidence: "inspired",
    },
    {
      concept: "Trunk capacity",
      telecom: "E1/T1 trunks",
      cloud: "Elastic bandwidth / autoscaling",
      confidence: "inspired",
    },
    {
      concept: "Availability engineering",
      telecom: "Five-nines culture",
      cloud: "SLAs and error budgets",
      confidence: "exact",
    },
    {
      concept: "Billing unit",
      telecom: "Minute of call",
      cloud: "Compute-second / GB transferred",
      confidence: "analogous",
    },
    {
      concept: "Local loop",
      telecom: "Last mile",
      cloud: "Edge / point of presence",
      confidence: "analogous",
    },
  ],
  coda: "Engineers who know both sides can see which 'new' ideas are old ideas with better tooling — and which are genuinely new. The history of a technology is the fastest way to teach it.",
};
