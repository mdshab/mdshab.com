/**
 * Homepage copy. English source of truth; the Persian edition lives in
 * content/i18n/fa.ts and is written independently — it is NOT a
 * translation.
 *
 * Voice: a real senior technical PM writing his own site. Plain
 * sentences over impressive ones, facts over positioning language.
 */

export const hero = {
  kicker: "Mehdi Shabestari",
  roleLine: "Technical Product Manager · Cloud Infrastructure",
  h1: "I do product management for cloud infrastructure. Before that, I ran it for fifteen years.",
  support:
    "Since 2022 I've been a technical product manager at a global-scale cloud provider, working on services like Cloud Server, VPC, Storage and Migration that hundreds of thousands of people rely on. Before product, I came up through the same stack: VoIP administration, network engineering, cloud operations, NOC leadership.",
  primaryCta: { href: "/work", label: "See the work" },
  secondaryCta: { href: "/contact", label: "Let's talk" },
  facts: [
    { value: "Since 2007", label: "VoIP · networking · datacenter · product" },
    { value: "Hundreds of thousands", label: "people on services I work on" },
    { value: "Cloud Server · VPC · Storage", label: "the product surfaces I cover" },
  ],
};

export const selectedImpact = {
  title: "What I've done",
  lede: "What I worked on, what my part was, and what changed. Where I don't have a number, I don't write one.",
  items: [
    {
      headline: "Cloud services with hundreds of thousands of users",
      body: "Since 2022 I've owned product direction for infrastructure services at a global-scale cloud provider — compute, networking, storage, migration. The work: deciding what gets built, which defaults ship, and which promises the platform can keep.",
      link: { href: "/work/cloud-services-at-scale", label: "Case study" },
    },
    {
      headline: "The network operations center through 2020",
      body: "I led the NOC team in 2020, the year everyone's traffic moved home. Escalation paths, shift handovers, and runbooks a tired engineer could actually follow.",
      link: { href: "/work/keeping-the-network-up", label: "Case study" },
    },
    {
      headline: "Voice platforms, 2007–2018",
      body: "Eleven years in telephony while the phone network became software — VoIP administration at Tel4Tel, then network engineering and leading the voice function at FCP.",
      link: { href: "/work/voice-becomes-software", label: "Case study" },
    },
    {
      headline: "This site",
      body: "A bilingual, ~200-page static site with typed content models and no trackers. Designed, built and written by one person, Persian edition included.",
      link: { href: "/work/this-website", label: "Case study" },
    },
  ],
};

export const helpWith = {
  title: "What I can help with",
  lede: "The situations I'm actually useful in, rather than a list of skills.",
  items: [
    {
      title: "Productizing infrastructure",
      body: "My day job: taking things like Cloud Server, VPC, Storage and Migration and making them a product a customer can understand, evaluate and operate.",
    },
    {
      title: "Deciding what gets built",
      body: "When reliability is the differentiator, the main decisions are which promises to make and what keeping them costs engineering. That is where most of my time goes.",
    },
    {
      title: "Between engineering and business",
      body: "Turning architecture constraints into roadmap decisions a business can evaluate, and business goals into constraints engineering accepts. I've sat on both sides of that table.",
    },
    {
      title: "Products with several audiences",
      body: "The engineer who integrates, the operator on call, the finance owner, the security reviewer. A change that helps one can hurt another; the product has to hold all of them.",
    },
    {
      title: "Discovery on technical systems",
      body: "Starting from usage data, support tickets and postmortems rather than surveys — and figuring out what the product should be.",
    },
    {
      title: "AI infrastructure",
      body: "GPU and AI services are the newest layer of the stack, with the same physics underneath. The same discipline applies.",
    },
  ],
};

export const homeThinking = {
  title: "How I think",
  lede: "Working principles, each traceable to an incident or a decision rather than a book.",
  principles: [
    {
      claim: "Users buy outcomes, tolerate products",
      body: "Nobody wants your infrastructure. They want their application to work. Design for that.",
    },
    {
      claim: "Abstractions are promises",
      body: "Each layer of the stack promises you can stop thinking about the one below. When it leaks, someone answers for it — usually at 3 a.m.",
    },
    {
      claim: "Coordination problems are technical problems",
      body: "Most 'technical' failures at scale are failures between humans or teams. Fixing that interface is real engineering.",
    },
  ],
  cta: { href: "/thinking", label: "All principles" },
};

export const journeyTeaser = {
  title: "From analog to cloud native",
  lede: "The path started in analog telephony, went through networking and the datacenter, and reached product in 2022. Every step has dates.",
  chapters: [
    { era: "Early years", label: "A home computer, a Linux CD that came by post" },
    { era: "2007", label: "VoIP administration at Tel4Tel" },
    { era: "2011 – 2018", label: "Networks and voice at FCP" },
    { era: "2019 – 2020", label: "Cloud engineering, then the NOC room" },
    { era: "2022 –", label: "Infrastructure as a product" },
  ],
  cta: { href: "/journey", label: "The whole journey" },
};

export const selectedWriting = {
  title: "Selected writing",
  lede: "Longer versions of these arguments.",
  cta: { href: "/writing", label: "All essays" },
};

export const beyondWork = {
  title: "Beyond work",
  lede: "Work is most of this site. The rest is history, ideas, and a quiet page.",
  items: [
    {
      title: "3,000 years of communication technology",
      body: "115 events from the alphabet to packet switching — the long warm-up for the network you're using right now.",
      href: "/humanity",
      label: "Humanity",
    },
    {
      title: "The people behind the questions",
      body: "Thirty-four thinkers across Greek, Eastern, Persian and modern traditions.",
      href: "/ideas",
      label: "Ideas",
    },
    {
      title: "A breathing space",
      body: "A small page for being where you are. No gamification, no claims.",
      href: "/mind",
      label: "Mind",
    },
  ],
};

export const finalCta = {
  kicker: "Contact",
  title: "Get in touch",
  body: "If you're hiring for a technical product role, or you have an infrastructure product that needs someone who understands what's under it, I'd like to hear about it. I read everything and I answer.",
  paths: [
    {
      title: "A role",
      body: "Technical product management on cloud, platform or AI infrastructure products.",
      href: "/contact",
      label: "Start the conversation",
    },
    {
      title: "A project",
      body: "Productizing infrastructure, discovery on a technical system, or a product strategy problem.",
      href: "/contact",
      label: "Tell me about it",
    },
    {
      title: "First, look around",
      body: "Case studies, principles and the journey are all one click away.",
      href: "/work",
      label: "See the work",
    },
  ],
};
