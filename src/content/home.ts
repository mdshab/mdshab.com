/**
 * Homepage copy. English source of truth; the Persian edition lives in
 * content/i18n/fa.ts. Keep claims inside the published-facts envelope:
 * scope statements come from journey/about; nothing quantitative is
 * invented here.
 */

export const hero = {
  kicker: "Mehdi Shabestari",
  roleLine: "Technical Product Manager · Cloud & AI Infrastructure",
  h1: "I turn complex infrastructure into products people can use.",
  support:
    "Twenty years up the stack — analog telephony, enterprise networks, datacenters, cloud platforms — and, since 2022, product decisions for cloud services used by hundreds of thousands of people. I speak fluent engineering and fluent business, and I'm most useful where the two don't translate themselves.",
  primaryCta: { href: "/work", label: "Explore my work" },
  secondaryCta: { href: "/contact", label: "Let's talk" },
  facts: [
    { value: "20 years", label: "from PSTN to AI-era infrastructure" },
    { value: "Hundreds of thousands", label: "people using services I help shape" },
    { value: "5 chapters", label: "support → network → datacenter → product" },
  ],
};

export const selectedImpact = {
  title: "Selected impact",
  lede: "What changed because I was in the room — described the way infrastructure people describe things: qualitatively, and only where the evidence supports it.",
  items: [
    {
      headline: "Cloud services at population scale",
      body: "Product direction for infrastructure services used by hundreds of thousands of people — where the roadmap is made of promises and every default removes a thousand bad decisions.",
      link: { href: "/work/cloud-services-at-scale", label: "Read the case study" },
    },
    {
      headline: "A NOC that held through 2020",
      body: "Led the network operations room when the world's traffic moved indoors: escalation paths people trusted, handovers that survived the night, and an incident language engineering could act on.",
      link: { href: "/work/keeping-the-network-up", label: "Read the case study" },
    },
    {
      headline: "Voice platforms for real customers",
      body: "Eleven years in telephony while the phone network became software — administering, engineering, and leading the systems businesses ran their calls on.",
      link: { href: "/work/voice-becomes-software", label: "Read the case study" },
    },
    {
      headline: "This site, as a working argument",
      body: "A bilingual, accessible, 180-page knowledge platform — typed content models, static generation, zero trackers — that practices the product thinking it documents.",
      link: { href: "/work/this-website", label: "Read the case study" },
    },
  ],
};

export const helpWith = {
  title: "Problems I help solve",
  lede: "Not a skill list — the situations where I create the most value.",
  items: [
    {
      title: "Productizing complex infrastructure",
      body: "Turn technically deep infrastructure into a product customers can understand, evaluate and operate — without lying about what's underneath.",
    },
    {
      title: "Platform and cloud product direction",
      body: "Define what gets built when reliability is the product: which promises to make, how to phrase them honestly, and what each one costs to keep.",
    },
    {
      title: "Product ↔ engineering translation",
      body: "Convert architecture constraints into roadmap choices a business can evaluate — and business goals into constraints engineering respects.",
    },
    {
      title: "Enterprise and technical buyers",
      body: "Keep the whole cast coherent: the engineer who integrates, the operator at 3 a.m., the finance owner, the security reviewer — one product, four audiences.",
    },
    {
      title: "Discovery on technical systems",
      body: "Take an ambiguous platform problem from signals — usage, tickets, postmortems, prospect questions — to product definition and execution.",
    },
    {
      title: "AI-era infrastructure products",
      body: "Apply the same discipline to the newest rung of the ladder: turning AI capability into infrastructure people can depend on, not just demo.",
    },
  ],
};

export const homeThinking = {
  title: "How I think",
  lede: "Principles earned the long way — each one traceable to an incident, a trade-off, or a system that stayed up (or didn't).",
  principles: [
    {
      claim: "Users buy outcomes, tolerate products",
      body: "Nobody wants your infrastructure. They want their launch to survive its traffic. Design for the outcome, remove the ceremony.",
    },
    {
      claim: "Abstractions are promises",
      body: "Each layer of the stack promises you can stop thinking about the one below. Every leak is a broken promise someone answers for.",
    },
    {
      claim: "Coordination problems are technical problems",
      body: "Most 'technical' failures at scale are interface failures between humans. Design the interface; don't just staff it.",
    },
  ],
  cta: { href: "/thinking", label: "All principles, and the models behind them" },
};

export const journeyTeaser = {
  title: "From analog to cloud native",
  lede: "The unusual part of this career is the direction: I didn't move from business into product vocabulary — I climbed the entire stack first. The product judgment has the smell of the datacenter on it.",
  chapters: [
    { era: "Early years", label: "A home computer, a mailed Linux CD" },
    { era: "2007", label: "Voice becomes software — VoIP at Tel4Tel" },
    { era: "2011 – 2018", label: "Under the cables — networks and voice at FCP" },
    { era: "2019 – 2020", label: "The abstraction ladder — cloud, then the NOC room" },
    { era: "2022 –", label: "Infrastructure as a product" },
  ],
  cta: { href: "/journey", label: "The whole journey" },
};

export const selectedWriting = {
  title: "Selected writing",
  lede: "Longer arguments behind the one-liners.",
  cta: { href: "/writing", label: "All essays" },
};

export const beyondWork = {
  title: "Beyond work",
  lede: "The rest of this site is the rest of me: three thousand years of communication history mapped as a timeline, the thinkers who sharpened the questions, and a quiet corner to breathe.",
  items: [
    {
      title: "3,000 years of communication technology",
      body: "115 events from the Phoenician alphabet to packet switching — because the network you're reading this on has a three-millennia warm-up.",
      href: "/humanity",
      label: "Humanity",
    },
    {
      title: "Ideas are the oldest technology",
      body: "Thirty-four thinkers across Greek, Eastern, Persian and modern traditions, and the questions they kept asking.",
      href: "/ideas",
      label: "Ideas",
    },
    {
      title: "Be here",
      body: "Uptime is my profession; presence is the same discipline pointed inward. A small breathing space, no gamification.",
      href: "/mind",
      label: "Mind",
    },
  ],
};

export const finalCta = {
  kicker: "Next",
  title: "Let's build something difficult.",
  body: "If you're hiring for a technical product role, shaping a cloud or AI infrastructure product, or want a second brain that has actually carried a pager — I'd like to hear about it.",
  paths: [
    {
      title: "Discuss a role",
      body: "Technical product management, platform and infrastructure product roles — especially where engineering credibility is part of the job description.",
      href: "/contact",
      label: "Start the conversation",
    },
    {
      title: "Discuss a project",
      body: "Productizing complex infrastructure, discovery on technical systems, or a product strategy problem that needs someone who can read the architecture.",
      href: "/contact",
      label: "Tell me about it",
    },
    {
      title: "Look around first",
      body: "Case studies, principles, and the journey that produced them — everything is one click from here.",
      href: "/work",
      label: "Explore the work",
    },
  ],
};
