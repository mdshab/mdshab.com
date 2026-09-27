/**
 * Contact page copy. The rendered channels come from content/site.ts —
 * only grounded URLs appear; nothing here promises a channel that
 * doesn't exist yet.
 */

export const contactPage = {
  title: "Let's talk",
  lede: "The fastest way to reach me is GitHub or LinkedIn — I read everything and I answer. If you're writing about a role or a project, two sentences of context is plenty; I'll ask for the rest.",
  intents: [
    {
      title: "Hiring for a technical product role",
      body: "Tell me about the product, the team it sits with, and the hardest decision the role will own. If it involves cloud, infrastructure or AI systems, we'll have plenty to talk about.",
    },
    {
      title: "Have a project or a hard problem",
      body: "Infrastructure that deserves a product, a platform direction that needs an outside brain, or a discovery problem buried in technical ambiguity — describe the situation and what 'better' looks like.",
    },
    {
      title: "Just connecting",
      body: "Fellow practitioners of infrastructure, telecom history, product thinking, or anyone who read something here and disagreed — those are my favorite messages.",
    },
  ],
  channelsNote:
    "No forms, no funnel — write whatever is useful and I'll reply from the other side.",
};
