import type { ArticleMeta } from "@/types/content";

/**
 * Article registry. Bodies live as MDX files next to this registry in
 * src/content/writing/articles/<slug>.mdx. Only reliably-known personal
 * experience appears here — no invented metrics or employers.
 */
export const articles: ArticleMeta[] = [
  {
    slug: "from-pbx-to-cloud-communications",
    title: "From PBX to Cloud Communications",
    description:
      "What is lost and what is gained when the phone system stops being a room with a hum and becomes an API call.",
    date: "2026-09-01",
    category: "telecom",
    tags: ["voip", "sip", "cloud", "career"],
    readingTime: 7,
    relatedEvents: ["bell-telephone", "voip-vocaltec", "aws-launch"],
    relatedProjects: ["telecom-evolution-map"],
  },
  {
    slug: "what-infrastructure-taught-me",
    title: "What Twenty Years of Infrastructure Change Taught Me",
    description:
      "Notes from 2007 to now: the patterns that survived every platform shift, from PBX consoles to cloud control planes.",
    date: "2026-09-05",
    category: "infrastructure",
    tags: ["career", "operations", "leadership"],
    readingTime: 9,
    relatedEvents: ["voip-vocaltec", "aws-launch", "docker-kubernetes"],
  },
  {
    slug: "physical-servers-vms-containers",
    title: "Physical Servers, VMs, Containers: A Field Guide",
    description:
      "The abstraction ladder in practice — what each rung actually hides, and how failure feels different at every level.",
    date: "2026-09-08",
    category: "cloud",
    tags: ["virtualization", "containers", "kubernetes", "cloud"],
    readingTime: 8,
    relatedEvents: ["aws-launch", "docker-kubernetes", "linux-kernel"],
    relatedProjects: ["abstraction-ladder"],
  },
  {
    slug: "the-cd-in-the-mail",
    title: "The CD in the Mail",
    description:
      "A free operating system, an envelope from the Netherlands, and the moment a command line became home.",
    date: "2026-09-12",
    category: "ideas",
    tags: ["linux", "open source", "personal"],
    readingTime: 5,
    relatedEvents: ["linux-kernel", "world-wide-web"],
  },
  {
    slug: "why-infrastructure-products-are-different",
    title: "Why Infrastructure Products Are Different",
    description:
      "Users don't want your product. They want what it makes possible — and infrastructure product management starts from that asymmetry.",
    date: "2026-09-15",
    category: "product",
    tags: ["product management", "cloud", "developer experience"],
    readingTime: 8,
    relatedEvents: ["aws-launch", "world-wide-web"],
    relatedProjects: ["mdshab-com"],
  },
  {
    slug: "3000-years-of-communication-technology",
    title: "3,000 Years of Communication Technology",
    description:
      "From the Phoenician alphabet to SIP trunks: one thread through the Humanity dataset, and what it says about the network you're reading this on.",
    date: "2026-09-18",
    category: "history",
    tags: ["history", "communication", "telecom"],
    readingTime: 10,
    relatedEvents: [
      "alphabetic-phonician",
      "royal-road",
      "gutenberg-press",
      "morse-telegraph",
      "arpanet",
      "smartphone-iphone",
    ],
  },
];
