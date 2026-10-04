/** Homepage copy. Specific experience over a list of responsibilities. */

export const hero = {
  kicker: "Mehdi Shabestari",
  roleLine: "Technical Product Manager · Cloud Infrastructure",
  h1: "I spent years keeping infrastructure running. Now I help decide what gets built.",
  support:
    "I work on a cloud product used by 200,000 people. Support, networks, systems and operations shaped how I approach product decisions — especially what happens after launch.",
  primaryCta: { href: "/work", label: "Explore my work" },
  secondaryCta: { href: "/contact", label: "Let's talk" },
};

export const featuredDecision = {
  label: "A decision from the work",
  title: "What should the next person know?",
  context:
    "In customer excellence, a technical issue could cross a customer's environment, the product, infrastructure and several teams. The next person taking over needed more than a ticket marked ‘in progress.’",
  decision:
    "We used a consistent handover: what was known, what had been ruled out and who owned the next action. Runbooks had to be usable by someone other than the person who wrote them.",
  tradeoff:
    "That structure takes time on a routine issue. The alternative is spending time reconstructing the same context when an issue crosses teams. The aim was enough detail to make the next step clear, without turning every ticket into a document.",
  note: "This is a working practice from a role overview, not a claim about a measured project outcome.",
  cta: { href: "/work/support-leadership", label: "Read the role overview" },
  allWork: { href: "/work", label: "See all work" },
};

export const homeThinking = {
  title: "How I think about the work",
  principles: [
    {
      claim: "A request needs a problem behind it",
      example:
        "Customer issues and usage data tell me where to look. Before writing a requirement, I want to know what the customer was trying to do and what blocked them.",
      href: "/thinking#problem-before-requirement",
    },
    {
      claim: "The cost continues after launch",
      example:
        "A new cloud option can be useful and still add setup choices, support cases and operating cost. Those consequences belong in the product decision, not in a post-launch surprise.",
      href: "/thinking#operating-cost-is-product-cost",
    },
  ],
};

export const personalThread = {
  label: "A little of the backstory",
  title: "An Ubuntu CD came by post.",
  body:
    "Before cloud products and roadmaps, there was a computer at home and a Linux CD that arrived in the mail. I still like following a system down to the layer where it becomes understandable. That curiosity is also why I built a timeline of communication technology, from the alphabet to packet switching.",
  story: { href: "/writing/the-cd-in-the-mail", label: "Read the story" },
  library: { href: "/humanity", label: "Explore the timeline" },
};

export const finalCta = {
  title: "Let's compare notes.",
  body:
    "If you're building an infrastructure product and want to talk through a role, a product problem or how a service works for its users, I'd like to hear from you.",
  cta: { href: "/contact", label: "Get in touch" },
};
