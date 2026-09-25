import type { Thread } from "@/types/content";

/**
 * Threads: single capabilities followed across the whole timeline.
 * Each thread is an ordered path through event ids — the Connective
 * tissue of the site's knowledge graph.
 */
export const threads: Thread[] = [
  {
    id: "communication",
    title: "Communication",
    description:
      "How messages move: from alphabets and couriers to wires, radio, packets and the phone in your pocket.",
    accent: "tech",
    eventIds: [
      "alphabetic-phonician",
      "royal-road",
      "paper-invention",
      "talas-paper-route",
      "diamond-sutra-printing",
      "bi-sheng-movable-type",
      "gutenberg-press",
      "morse-telegraph",
      "transatlantic-cable",
      "bell-telephone",
      "marconi-radio",
      "arpanet",
      "tcp-ip",
      "world-wide-web",
      "gsm-mobile",
      "voip-vocaltec",
      "smartphone-iphone",
    ],
  },
  {
    id: "computation",
    title: "Computation",
    description:
      "The long road from 'number as structure' to programmable machinery, and from machinery to intelligence.",
    accent: "tech",
    eventIds: [
      "pythagoras",
      "euclid-elements",
      "al-khwarizmi-algebra",
      "newton-principia",
      "eniac",
      "transistor",
      "integrated-circuit",
      "intel-4004",
      "personal-computer",
      "linux-kernel",
      "aws-launch",
      "docker-kubernetes",
      "alexnet-deep-learning",
      "transformer-ai",
    ],
  },
  {
    id: "knowledge",
    title: "Knowledge",
    description:
      "How societies collect, copy and preserve what they know — and what happens when they lose it.",
    accent: "history",
    eventIds: [
      "alphabetic-phonician",
      "alexandria-library",
      "house-of-wisdom",
      "talas-paper-route",
      "gutenberg-press",
      "timbuktu-sankore",
      "scientific-method",
      "world-wide-web",
      "transformer-ai",
    ],
  },
  {
    id: "medicine",
    title: "Medicine",
    description:
      "From natural causes to clinical method to sequencing: the incremental, hard-won art of healing.",
    accent: "mind",
    eventIds: [
      "hippocrates",
      "galen-medicine",
      "bimaristan-hospitals",
      "ibn-sina-canon",
      "vesalius-anatomy",
      "harvey-circulation",
      "jenner-vaccination",
      "penicillin-fleming",
      "human-genome",
      "mrna-vaccines",
    ],
  },
  {
    id: "energy",
    title: "Energy",
    description:
      "Each new source of power — muscle, coal, steam, electricity, silicon — reorganized the world built on the last one.",
    accent: "history",
    eventIds: [
      "iron-age-begins",
      "watt-steam-engine",
      "industrial-revolution",
      "edison-lighting",
      "transistor",
    ],
  },
  {
    id: "transportation",
    title: "Transportation",
    description:
      "Roads, relays, rails, wings and rockets: every gain in speed redrew the map of what was possible.",
    accent: "lab",
    eventIds: [
      "royal-road",
      "roman-infra",
      "silk-road-opens",
      "mongol-yam",
      "rocket-railway",
      "benz-automobile",
      "wright-flight",
      "apollo-11",
    ],
  },
  {
    id: "governance",
    title: "Governance",
    description:
      "Experiments in organizing people: mandates, republics, charters, codes, rights — written down and fought over.",
    accent: "ideas",
    eventIds: [
      "zhou-dynasty",
      "roman-republic",
      "justinian-code",
      "magna-carta",
      "ibn-khaldun-muqaddimah",
      "french-revolution",
      "iran-constitutional-revolution",
    ],
  },
];
