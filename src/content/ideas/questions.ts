import type { PhilosophicalQuestion } from "@/types/content";

/**
 * Ten questions, each an entry point into the thinker graph.
 * Each question links the thinkers who give it a distinct perspective.
 */
export const philosophicalQuestions: PhilosophicalQuestion[] = [
  {
    id: "what-can-i-control",
    question: "What can I control?",
    framing:
      "The most practical question in philosophy: separating what is yours — judgments, choices, effort — from what is not, so effort lands where it changes things.",
    thinkerIds: ["epictetus", "marcus-aurelius", "seneca", "khayyam", "spinoza"],
  },
  {
    id: "what-is-the-good-life",
    question: "What is the good life?",
    framing:
      "Not 'what feels good' but what kind of life is worth wanting — flourishing, virtue, love, or presence in the moment.",
    thinkerIds: ["aristotle", "confucius", "laozi", "khayyam", "seneca"],
  },
  {
    id: "what-is-knowledge",
    question: "What can I know?",
    framing:
      "Where does knowledge come from, how far does it reach, and what should we do when certainty is unavailable?",
    thinkerIds: ["socrates", "plato", "descartes", "al-ghazali", "hume", "kant", "wittgenstein"],
  },
  {
    id: "what-is-real",
    question: "What is real?",
    framing:
      "Appearance and reality: from Plato's Forms to emptiness to the everyday world of language and use.",
    thinkerIds: ["plato", "nagarjuna", "zhuangzi", "spinoza", "shankara", "wittgenstein"],
  },
  {
    id: "what-is-freedom",
    question: "What is freedom?",
    framing:
      "Freedom as doing what you want, freedom from illusion, freedom as understanding necessity, freedom as the burden of choosing.",
    thinkerIds: ["kierkegaard", "nietzsche", "spinoza", "de-beauvoir", "arendt", "kant"],
  },
  {
    id: "what-am-i",
    question: "Who am I?",
    framing:
      "The self: a soul, a process, a bundle of perceptions, a role made by society — or something that dissolves when you look.",
    thinkerIds: ["buddha", "nagarjuna", "dogen", "ibn-sina", "hume", "de-beauvoir", "arendt"],
  },
  {
    id: "what-is-suffering",
    question: "Why do we suffer?",
    framing:
      "Suffering diagnosed from five angles: craving, judgment, illusion, fate, and the structures of the world.",
    thinkerIds: ["buddha", "epictetus", "rumi", "khayyam", "shankara"],
  },
  {
    id: "how-should-i-live",
    question: "How should I live?",
    framing:
      "The umbrella question — every tradition gives an answer as a practice: examine, cultivate, flow, love, accept, create.",
    thinkerIds: [
      "socrates",
      "confucius",
      "laozi",
      "epictetus",
      "rumi",
      "attar",
      "dogen",
      "kierkegaard",
      "nietzsche",
    ],
  },
  {
    id: "what-is-justice",
    question: "What is justice?",
    framing:
      "From the just city to the just tax code: what do we owe each other, and what happens when power ignores the answer?",
    thinkerIds: ["socrates", "plato", "aristotle", "confucius", "ibn-khaldun", "arendt", "kant"],
  },
  {
    id: "what-is-time",
    question: "What is time?",
    framing:
      "The least visible medium of life: moments as all we possess, time as being itself, clock time versus lived time.",
    thinkerIds: ["seneca", "dogen", "khayyam", "marcus-aurelius"],
  },
];
