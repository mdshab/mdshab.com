/**
 * Content models for mdshab.com
 *
 * Every major domain (history, ideas, journey, lab, mind, writing) has a
 * typed content model. Content lives in `src/content/*` as structured data,
 * fully separated from presentation. These models are designed to grow to
 * thousands of entities and eventually form a personal knowledge graph:
 *
 *   historical event ↔ thread ↔ journey entry ↔ article ↔ thinker ↔ question
 *
 * All entity ids are kebab-case slugs, unique across the site, used by the
 * command palette, cross-links, and sitemap.
 */

/* ---------------------------------- History ---------------------------------- */

export type HistoryCategory =
  | "civilizations"
  | "empires"
  | "science"
  | "technology"
  | "philosophy"
  | "religion"
  | "art"
  | "economics"
  | "medicine"
  | "communication"
  | "computing"
  | "wars"
  | "exploration"
  | "knowledge";

export type HistoryRegion =
  | "world"
  | "middle-east"
  | "persia"
  | "europe"
  | "east-asia"
  | "south-asia"
  | "africa"
  | "americas"
  | "oceania";

export interface HistorySource {
  /** Human-readable reference title, e.g. "Encyclopædia Britannica" */
  title: string;
  /** Optional URL to a stable public reference */
  url?: string;
}

export interface HistoryEvent {
  id: string;
  title: string;
  /** Negative years = BCE. e.g. -1200 = 1200 BCE, 1450 = 1450 CE */
  startYear: number;
  /** Ongoing entities (empire spans) may set an end year */
  endYear?: number;
  /** true when historians commonly use approximate dating */
  approximate: boolean;
  region: HistoryRegion;
  modernCountry?: string;
  civilization?: string;
  category: HistoryCategory;
  summary: string;
  significance: string;
  relatedEvents: string[];
  people?: string[];
  /** Thread ids this event participates in (see Thread) */
  threads?: string[];
  sources: HistorySource[];
}

export interface Thread {
  id: string;
  title: string;
  /** One-line description of what the thread follows through history */
  description: string;
  /** Ordered event ids — the path of one capability through time */
  eventIds: string[];
  /** Accent key controlling the visual treatment */
  accent: "history" | "tech" | "ideas" | "mind" | "lab" | "writing";
}

/* ----------------------------------- Ideas ----------------------------------- */

export type TraditionId =
  | "greek"
  | "stoic"
  | "persian"
  | "islamic"
  | "sufi"
  | "buddhist"
  | "confucian"
  | "daoist"
  | "vedanta"
  | "zen"
  | "enlightenment"
  | "existentialist"
  | "modern";

export interface Thinker {
  id: string;
  name: string;
  /** Negative = BCE. Approximate lifetimes are marked via approximate flag. */
  birth?: number;
  death?: number;
  approximate: boolean;
  region: HistoryRegion;
  placeLabel: string;
  tradition: TraditionId;
  summary: string;
  coreIdeas: string[];
  /** Question ids this thinker speaks to (see PhilosophicalQuestion) */
  questions: string[];
  works?: string[];
  relatedThinkers: string[];
  historicalContext: string;
  /**
   * Quote only when reliably sourced and commonly translated; otherwise
   * `idea` carries a faithful summary of a characteristic view.
   */
  quote?: { text: string; source: string };
  idea?: string;
  sources: HistorySource[];
}

export interface PhilosophicalQuestion {
  id: string;
  /** e.g. "What can we control?" */
  question: string;
  /** Short framing: why humans keep asking this */
  framing: string;
  /** thinker ids offering perspectives */
  thinkerIds: string[];
}

/* ---------------------------------- Journey ---------------------------------- */

export type JourneyChapterId =
  | "before-connected"
  | "telecom"
  | "networking"
  | "datacenter"
  | "cloud-product";

export interface JourneyEntry {
  id: string;
  chapter: JourneyChapterId;
  /**
   * Only supplied facts get years (e.g. 2007). For stories without a
   * supplied date we render `period` text like "Early computing years"
   * and leave `year` undefined — never fabricate one.
   */
  year?: number;
  endYear?: number;
  period: string;
  role?: string;
  organization?: string;
  title: string;
  story: string;
  reflection?: string;
  technologies: string[];
  /** History event ids this story intersects with */
  relatedHistory?: string[];
  /** Article slugs */
  relatedArticles?: string[];
  /** Marks a highlighted artifact (e.g. the Ubuntu CD) */
  artifact?: boolean;
}

export interface JourneyChapter {
  id: JourneyChapterId;
  index: string;
  title: string;
  era: string;
  description: string;
}

/* ------------------------------------ Lab ------------------------------------ */

export type CaseStudySection =
  | "context"
  | "problem"
  | "why-it-mattered"
  | "constraints"
  | "options"
  | "decision"
  | "architecture"
  | "product-reasoning"
  | "trade-offs"
  | "outcome"
  | "what-i-learned";

export interface LabProject {
  id: string;
  title: string;
  status: "active" | "ongoing" | "archived" | "structure";
  kind: "cloud" | "ai" | "product" | "infrastructure" | "automation" | "web";
  period: string;
  summary: string;
  /** Ordered narrative sections — see CaseStudySection */
  sections: { heading: CaseStudySection; body: string }[];
  technologies: string[];
  relatedArticles?: string[];
  relatedHistory?: string[];
}

/* ----------------------------------- Mind ------------------------------------ */

export interface Reflection {
  id: string;
  title: string;
  category:
    | "attention"
    | "change"
    | "technology"
    | "time"
    | "uncertainty"
    | "learning"
    | "stillness";
  /** Short, personal observations — no pseudo-spiritual claims */
  body: string;
}

/* ---------------------------------- Writing ---------------------------------- */

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO date */
  date: string;
  updated?: string;
  category:
    | "infrastructure"
    | "cloud"
    | "telecom"
    | "product"
    | "ai"
    | "history"
    | "ideas"
    | "mind";
  tags: string[];
  readingTime: number;
  relatedEvents?: string[];
  relatedPeople?: string[];
  relatedProjects?: string[];
  draft?: boolean;
}

/* ----------------------------------- Now ------------------------------------- */

export interface NowEntry {
  label: string;
  value: string;
}

export interface Now {
  updated: string;
  items: NowEntry[];
}
