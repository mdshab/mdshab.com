import type { Now, Reflection } from "@/types/content";

/**
 * Mind: short personal reflections. No gamification, no claims about
 * medical or spiritual outcomes — just observations from a technical life.
 */
export const reflections: Reflection[] = [
  {
    id: "on-call-stillness",
    title: "What on-call taught me about attention",
    category: "attention",
    body:
      "When the pager goes off, panic is useless and calm is a skill. The engineers who lasted were the ones who could let the alarm be loud without letting their minds be loud. Attention under pressure turns out to be trainable — and the training is the same everywhere: notice, breathe, then act.",
  },
  {
    id: "abstractions-need-ground",
    title: "Abstractions need ground",
    category: "technology",
    body:
      "Every layer of the cloud hides the one below it. That's the point — but a mind that only ever lives in abstractions gets strange. Walking into the datacenter, feeling the air move, remembering that 'the fleet' is metal and heat: that's not nostalgia, it's calibration.",
  },
  {
    id: "restart-is-not-resolution",
    title: "A restart is not a resolution",
    category: "uncertainty",
    body:
      "Rebooting a broken system until it works teaches you nothing about the fault — it just postpones the lesson. The same is true of minds. Sitting with a problem, even uncomfortably, is sometimes the only way to actually fix it instead of pausing it.",
  },
  {
    id: "three-thousand-years-moment",
    title: "Three thousand years, one moment",
    category: "time",
    body:
      "I spent months building a timeline of three thousand years of history. What stayed with me is that every one of those events was somebody's present tense — the only tense anyone gets. The past is data; the future is forecast; this moment is the only thing actually running.",
  },
  {
    id: "latency-of-understanding",
    title: "The latency of understanding",
    category: "learning",
    body:
      "In networking, latency is the delay between request and response. Understanding has latency too: you read something, and weeks later it settles into place. I've stopped expecting insight to be instant — it has routing hops like everything else.",
  },
  {
    id: "be-here-also",
    title: "Be here (also)",
    category: "stillness",
    body:
      "My whole career is about uptime — keeping systems present, responsive, available. The Mind section of this site is the same discipline pointed inward: a few minutes of being where you actually are, with the alerts silenced. Not an achievement. Just presence, restarted on purpose.",
  },
];

/** The Now section: what I'm currently doing. Updated by hand. */
export const now: Now = {
  updated: "2026-09",
  items: [
    {
      label: "Building",
      value: "This website — mdshab.com, as a personal knowledge graph",
    },
    {
      label: "Working on",
      value: "Technical product management for cloud services at a global-scale cloud provider",
    },
    {
      label: "Exploring",
      value: "How large language models will change infrastructure products",
    },
    {
      label: "Reading",
      value: "History of computing, Persian poetry, and whatever the footnotes lead to",
    },
    {
      label: "Practicing",
      value: "Short daily sits — the One Minute mode exists because of this",
    },
    {
      label: "Thinking about",
      value: "What twenty years in infrastructure teaches about building durable things",
    },
  ],
};
