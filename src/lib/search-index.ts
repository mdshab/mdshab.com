import { getPublishedArticles } from "@/content/writing";
import { historyEvents, threads } from "@/content/history";
import { thinkers, philosophicalQuestions } from "@/content/ideas";
import { journeyEntries, journeyChapters } from "@/content/journey";
import { caseStudies } from "@/content/work";

export interface SearchItem {
  id: string;
  /** Primary display text */
  title: string;
  /** Type badge in the palette */
  kind:
    | "event"
    | "thinker"
    | "question"
    | "journey"
    | "project"
    | "article"
    | "thread"
    | "page";
  /** Short subtitle line */
  subtitle?: string;
  href: string;
  /** Lowercased haystack for matching */
  haystack: string;
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  /* Static pages */
  const pages: Array<[string, string, string]> = [
    ["Home", "/", "Technical product management for cloud and AI infrastructure"],
    ["Work", "/work", "Case studies from infrastructure and product work"],
    ["How I think", "/thinking", "Principles and models, earned in infrastructure"],
    ["Journey", "/journey", "From a home computer to cloud product management"],
    ["Writing", "/writing", "Essays on infrastructure, history and ideas"],
    ["About", "/about", "Who is behind this site"],
    ["Contact", "/contact", "Start a conversation"],
    ["Humanity", "/humanity", "History 1000 BCE to present, as threads"],
    ["Ideas", "/ideas", "Thinkers and questions across traditions"],
    ["Mind", "/mind", "A quiet corner: breathe, reflect, be here"],
    ["Now", "/now", "What I'm doing currently"],
  ];
  for (const [title, href, subtitle] of pages) {
    items.push({
      id: `page:${href}`,
      title,
      kind: "page",
      subtitle,
      href,
      haystack: `${title} ${subtitle}`.toLowerCase(),
    });
  }

  /* History events */
  for (const event of historyEvents) {
    items.push({
      id: `event:${event.id}`,
      title: event.title,
      kind: "event",
      subtitle: event.summary,
      href: `/humanity/${event.id}`,
      haystack: `${event.title} ${event.summary} ${event.significance} ${event.people?.join(" ") ?? ""}`.toLowerCase(),
    });
  }

  /* Threads */
  for (const thread of threads) {
    items.push({
      id: `thread:${thread.id}`,
      title: thread.title,
      kind: "thread",
      subtitle: thread.description,
      href: `/humanity?thread=${thread.id}`,
      haystack: `${thread.title} ${thread.description}`.toLowerCase(),
    });
  }

  /* Thinkers */
  for (const thinker of thinkers) {
    items.push({
      id: `thinker:${thinker.id}`,
      title: thinker.name,
      kind: "thinker",
      subtitle: thinker.summary,
      href: `/ideas/${thinker.id}`,
      haystack: `${thinker.name} ${thinker.summary} ${thinker.coreIdeas.join(" ")} ${thinker.placeLabel}`.toLowerCase(),
    });
  }

  /* Questions */
  for (const question of philosophicalQuestions) {
    items.push({
      id: `question:${question.id}`,
      title: question.question,
      kind: "question",
      subtitle: question.framing,
      href: `/ideas/questions/${question.id}`,
      haystack: `${question.question} ${question.framing}`.toLowerCase(),
    });
  }

  /* Journey */
  for (const entry of journeyEntries) {
    items.push({
      id: `journey:${entry.id}`,
      title: entry.title,
      kind: "journey",
      subtitle: entry.period,
      href: `/journey#${entry.id}`,
      haystack: `${entry.title} ${entry.story} ${entry.period} ${entry.role ?? ""} ${entry.organization ?? ""}`.toLowerCase(),
    });
  }
  for (const chapter of journeyChapters) {
    items.push({
      id: `journey-chapter:${chapter.id}`,
      title: chapter.title,
      kind: "journey",
      subtitle: `Chapter ${chapter.index}`,
      href: `/journey#${chapter.id}`,
      haystack: `${chapter.title} ${chapter.description}`.toLowerCase(),
    });
  }

  /* Case studies */
  for (const study of caseStudies) {
    items.push({
      id: `project:${study.id}`,
      title: study.title,
      kind: "project",
      subtitle: study.summary,
      href: `/work/${study.id}`,
      haystack: `${study.title} ${study.summary} ${study.technologies.join(" ")}`.toLowerCase(),
    });
  }

  /* Articles */
  for (const article of getPublishedArticles()) {
    items.push({
      id: `article:${article.slug}`,
      title: article.title,
      kind: "article",
      subtitle: article.description,
      href: `/writing/${article.slug}`,
      haystack: `${article.title} ${article.description} ${article.tags.join(" ")}`.toLowerCase(),
    });
  }

  return items;
}

let cachedIndex: SearchItem[] | null = null;

/** The full search index (built once per server process). */
export function getSearchIndex(): SearchItem[] {
  if (!cachedIndex) cachedIndex = buildIndex();
  return cachedIndex;
}

/** Simple subsequence-ish scoring search over the index. */
export function searchContent(query: string, limit = 12): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    /* Empty query: offer the sections as entry points */
    return getSearchIndex().filter((item) => item.kind === "page");
  }
  const terms = q.split(/\s+/);
  const scored: Array<{ item: SearchItem; score: number }> = [];
  for (const item of getSearchIndex()) {
    let score = 0;
    for (const term of terms) {
      const idx = item.haystack.indexOf(term);
      if (idx === -1) {
        score = -1;
        break;
      }
      // Earlier matches and title matches rank higher
      score += idx < 20 ? 3 : 1;
      if (item.title.toLowerCase().includes(term)) score += 2;
    }
    if (score > 0) scored.push({ item, score });
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}
