import type { JourneyChapter, JourneyEntry } from "@/types/content";

/**
 * Journey content. YEARS ARE ONLY INCLUDED WHERE SUPPLIED.
 * The pre-career entries have no years — they use `period` text instead.
 * The professional timeline uses only the years in the known-facts list.
 */
export const journeyChapters: JourneyChapter[] = [
  {
    id: "before-connected",
    index: "CH·01",
    title: "Before everything was connected",
    era: "Early computing years",
    description:
      "A home computer, a DOS prompt, analog phone lines — and a Linux CD that arrived by international post.",
  },
  {
    id: "telecom",
    index: "CH·02",
    title: "Voice over someone else's network",
    era: "2007",
    description:
      "VoIP administration at Tel4Tel: the moment telephony stopped being wires and became software.",
  },
  {
    id: "networking",
    index: "CH·03",
    title: "Under the cables at FCP",
    era: "2011 – 2018",
    description:
      "Technical support, network engineering, then VoIP expertise at FCP — learning the whole stack from ticket queue to trunk.",
  },
  {
    id: "datacenter",
    index: "CH·04",
    title: "The abstraction ladder",
    era: "2019 – 2022",
    description:
      "Cloud engineering and support leadership at a global-scale cloud provider: from physical hosts to fleets, from fixing to coordinating.",
  },
  {
    id: "cloud-product",
    index: "CH·05",
    title: "Infrastructure as a product",
    era: "2022 – present",
    description:
      "Technical product management for services used by hundreds of thousands of people — turning reliability into something you can design.",
  },
];

export const journeyEntries: JourneyEntry[] = [
  /* ------------------------- CH·01 — before-connected ------------------------ */
  {
    id: "first-computer",
    chapter: "before-connected",
    period: "Early computing years",
    title: "A computer at home",
    story:
      "It started with Windows 95 and Norton Commander: two blue panels, a keyboard, and a file system to explore. There was no internet to fall back on, so the operating system itself was the playground — install, break, reinstall, and slowly learn what a computer actually is.",
    reflection:
      "Every abstraction I would later depend on professionally was, at some point in those years, something I had to physically reinstall at 2 a.m.",
    technologies: ["Windows 95", "Norton Commander", "x86 hardware"],
    relatedHistory: ["personal-computer"],
    relatedArticles: ["the-cd-in-the-mail"],
  },
  {
    id: "analog-systems",
    chapter: "before-connected",
    period: "Early computing years",
    title: "Analog systems before digital ones",
    story:
      "Before digital networks, there were analog systems to understand — wiring, signals, the physical layer that everyone forgets once it works. Hands-on time with analog equipment taught me that every 'virtual' thing eventually touches something real.",
    reflection:
      "Twenty years later I still trace problems down the stack to the physical layer first. That instinct was built here.",
    technologies: ["Analog telephony", "PSTN basics", "Electrical wiring"],
    relatedHistory: ["bell-telephone", "morse-telegraph"],
  },
  {
    id: "ubuntu-cd",
    chapter: "before-connected",
    period: "Early computing years",
    title: "The CD in the mail",
    story:
      "I filled in a web form on a borrowed connection and waited. Weeks later, an envelope from the Netherlands arrived with a pressed Ubuntu Linux CD inside — an operating system shipped across a border, free, by post. I installed it, and the command line became home.",
    reflection:
      "That disc was my first direct contact with the open-source world: strangers on another continent, mailing a stranger the tools to learn. Everything I've built since runs on what that envelope started.",
    technologies: ["Ubuntu Linux", "CLI", "Open source"],
    relatedHistory: ["linux-kernel", "world-wide-web"],
    relatedArticles: ["the-cd-in-the-mail"],
    artifact: true,
  },

  /* ---------------------------- CH·02 — telecom ----------------------------- */
  {
    id: "tel4tel-voip",
    chapter: "telecom",
    year: 2007,
    period: "2007",
    role: "VoIP Administrator",
    organization: "Tel4Tel",
    title: "Voice becomes software",
    story:
      "At Tel4Tel I administered VoIP systems: call flows, SIP trunks, codecs, gateways. Telephony — the century-old empire of copper and switches — was being rewritten as applications, and I was on the team doing the rewriting for real customers.",
    reflection:
      "This is where the two halves of my future met: the analog discipline of the phone network and the programmable logic of software. Voice stopped being physics and became configuration.",
    technologies: ["VoIP", "SIP", "Asterisk", "Gateways", "Codecs"],
    relatedHistory: ["voip-vocaltec", "bell-telephone"],
    relatedArticles: ["from-pbx-to-cloud-communications"],
  },

  /* --------------------------- CH·03 — networking --------------------------- */
  {
    id: "fcp-technical-support",
    chapter: "networking",
    year: 2011,
    period: "2011",
    role: "Technical Support / TSD",
    organization: "FCP",
    title: "Learning by answering the phone",
    story:
      "Joining FCP in technical support meant owning the moment when things break for real users. Every ticket was a lesson in how systems actually fail — and how people experience that failure.",
    reflection:
      "Support taught me the most durable engineering skill I know: reproduce, isolate, verify. It's also where I learned that reliability is a form of respect.",
    technologies: ["Ticketing systems", "Networking", "Windows / Linux"],
    relatedArticles: ["what-infrastructure-taught-me"],
  },
  {
    id: "fcp-network-engineer",
    chapter: "networking",
    year: 2012,
    period: "2012",
    role: "Network Engineer",
    organization: "FCP",
    title: "Under the cables",
    story:
      "A year later I moved into network engineering: routing, switching, firewalls, the paths packets take. From inside the network, 'the cloud' stopped being a marketing word and became routers, tables and failover plans.",
    reflection:
      "Networks are the nearest thing infrastructure has to a nervous system. Once you've traced a packet across one, every abstraction above feels earned.",
    technologies: ["Routing & switching", "Firewalls", "VPN", "BGP"],
    relatedHistory: ["arpanet", "tcp-ip"],
  },
  {
    id: "fcp-voip-expert-manager",
    chapter: "networking",
    year: 2018,
    period: "2012 – 2018",
    role: "VoIP Expert / Manager",
    organization: "FCP",
    title: "From trunks to teams",
    story:
      "At FCP I grew into VoIP expertise and eventually management of the VoIP function — NGN architecture, Cisco VoIP, PBX systems, and the people who kept them alive. Designing call platforms turned into designing how a team operates.",
    reflection:
      "The hardest scale-up was never the call volume; it was the coordination. Managing engineers taught me that most 'technical' problems are actually interface problems between humans.",
    technologies: ["Cisco VoIP", "NGN", "PBX", "SIP trunking", "Team leadership"],
    relatedArticles: ["from-pbx-to-cloud-communications", "what-infrastructure-taught-me"],
  },

  /* -------------------------- CH·04 — datacenter --------------------------- */
  {
    id: "cloud-engineer",
    chapter: "datacenter",
    year: 2019,
    period: "2019",
    role: "Cloud Engineer / System Administrator",
    organization: "Global-scale cloud provider",
    title: "Into the datacenter era",
    story:
      "Moving to a global-scale cloud provider in 2019 meant living inside the abstraction ladder: physical hosts, virtualization, orchestration, automation. Systems I had administered one by one now existed as fleets with dashboards.",
    reflection:
      "The ladder — physical, virtual, cloud, cloud native — isn't marketing. Each rung changes what 'failure' means and who can fix it.",
    technologies: ["Virtualization", "Linux at scale", "Automation", "Monitoring"],
    relatedHistory: ["aws-launch", "docker-kubernetes"],
    relatedArticles: ["physical-servers-vms-containers"],
  },
  {
    id: "noc-team-lead",
    chapter: "datacenter",
    year: 2020,
    period: "2020",
    role: "Team Lead — Customer Service & Support",
    organization: "Global-scale cloud provider",
    title: "Leading the room where it never sleeps",
    story:
      "Leading the customer service and support function meant owning incidents end to end: the escalation paths, the runbooks, the handovers, and the humans at 3 a.m. In the year the world's traffic moved indoors, this was where the internet stayed up.",
    reflection:
      "Incident response is applied epistemology: what do we know, how do we know it, and who needs to know it next? Everything else is keyboard work.",
    technologies: ["Customer service design", "Incident management", "On-call", "Runbooks"],
    relatedArticles: ["what-infrastructure-taught-me"],
  },

  /* ------------------------ CH·05 — cloud-product -------------------------- */
  {
    id: "technical-product-manager",
    chapter: "cloud-product",
    year: 2022,
    endYear: undefined,
    period: "2022 – present",
    role: "Technical Product Manager",
    organization: "Global-scale cloud provider",
    title: "Infrastructure as a product",
    story:
      "Since 2022 I've worked as a technical product manager on cloud services serving hundreds of thousands of users — deciding what gets built, for whom, and why, with the infrastructure discipline of the previous decade behind every choice.",
    reflection:
      "A product manager's job at infrastructure scale is translation: users' needs into architecture, architecture into roadmaps, roadmaps into promises the ops floor can keep.",
    technologies: ["Product strategy", "Cloud services", "Developer experience", "Roadmapping"],
    relatedHistory: ["aws-launch", "world-wide-web"],
    relatedArticles: ["why-infrastructure-products-are-different"],
  },
];
