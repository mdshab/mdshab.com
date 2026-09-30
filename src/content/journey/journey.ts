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
    title: "Starting in international telecommunications",
    era: "2007",
    description:
      "Technical support at Tel4Tel, an international telecom carrier, followed by administration and acting supervision.",
  },
  {
    id: "networking",
    index: "CH·03",
    title: "Networks, systems and services at FCP",
    era: "2011 – 2018",
    description:
      "From the NOC and network engineering to telecom platforms, Linux systems and infrastructure service development.",
  },
  {
    id: "datacenter",
    index: "CH·04",
    title: "Cloud operations and customer excellence",
    era: "2019 – 2022",
    description:
      "Systems administration and DevOps at a global-scale cloud provider, followed by leadership of customer-facing technical support.",
  },
  {
    id: "cloud-product",
    index: "CH·05",
    title: "Infrastructure as a product",
    era: "2022 – present",
    description:
      "Technical product management for a 200,000-user cloud product: customer problems, requirements, priorities, roadmap and product strategy.",
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
    role: "Technical Support → Administrator / Acting Head",
    organization: "Tel4Tel — International telecom carrier",
    title: "From support to supervision",
    story:
      "I started in technical support at Tel4Tel, an international telecommunications carrier. After six months I moved into administration and an acting head / supervisor role. The work combined hands-on telecom systems administration with responsibility for the support function.",
    reflection:
      "Starting with customer issues gave me a practical way into the system. Moving into supervision meant paying attention to how other people could diagnose and resolve those issues too.",
    technologies: ["Telecommunications", "Technical support", "Systems administration", "Supervision", "VoIP", "SIP"],
    relatedHistory: ["voip-vocaltec", "bell-telephone"],
    relatedArticles: ["from-pbx-to-cloud-communications"],
  },

  /* --------------------------- CH·03 — networking --------------------------- */
  {
    id: "fcp-technical-support",
    chapter: "networking",
    year: 2011,
    period: "2011",
    role: "NOC / Technical Support",
    organization: "FCP — Telecommunications",
    title: "Network operations",
    story:
      "I joined FCP in the NOC, working on technical issues and network services in a telecom environment. This was the starting point for broader work across access networks, routing, switching and the platforms those networks carried.",
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
    organization: "FCP — Telecommunications",
    title: "Network engineering",
    story:
      "I moved into network engineering, working with Cisco routing and switching, Huawei and Siemens equipment, fiber, GPON and DSLAM access infrastructure. The scope covered how customers connected to the network as well as how traffic moved through it.",
    reflection:
      "Networks are the nearest thing infrastructure has to a nervous system. Once you've traced a packet across one, every abstraction above feels earned.",
    technologies: ["Cisco routing & switching", "Huawei", "Siemens", "Fiber", "GPON", "DSLAM", "BGP"],
    relatedHistory: ["arpanet", "tcp-ip"],
  },
  {
    id: "fcp-voip-expert-manager",
    chapter: "networking",
    year: 2018,
    period: "2012 – 2018",
    role: "Telecom Platform Engineer / Manager",
    organization: "FCP",
    title: "Telecom service platforms",
    story:
      "At FCP I moved into telecom platform engineering and management, working with SDN, MGCP, Cisco voice, CUCM, UCCX, NGN and softswitch systems. This added the service and signaling layer to my network engineering background.",
    reflection:
      "Understanding the network and the service above it helped me follow a customer issue across layers rather than stop at one team's boundary.",
    technologies: ["Cisco voice", "SDN", "MGCP", "CUCM", "UCCX", "NGN", "Softswitch"],
    relatedArticles: ["from-pbx-to-cloud-communications", "what-infrastructure-taught-me"],
  },
  {
    id: "fcp-systems-administration",
    chapter: "networking",
    period: "Later at FCP · before 2019",
    role: "Linux Systems Administrator",
    organization: "FCP — Telecommunications",
    title: "From networks to systems",
    story:
      "I moved into Linux systems administration, extending my work from the network into the servers and operating systems behind the services. Linux and LPIC studies supported that transition.",
    technologies: ["Linux", "Systems administration", "Service operations"],
    relatedArticles: ["physical-servers-vms-containers"],
  },
  {
    id: "fcp-service-development",
    chapter: "networking",
    period: "Later at FCP · before 2019",
    role: "Infrastructure Service Development",
    organization: "FCP — Telecommunications",
    title: "Developing and operating infrastructure services",
    story:
      "In the service development function, my work covered developing, running and maintaining infrastructure built around Ceph, OpenStack, DNS and CDN. This brought systems administration together with the ongoing work of delivering a service.",
    reflection:
      "The service needs to work beyond its first deployment. Maintenance and operation became part of how I evaluated a technical choice.",
    technologies: ["Ceph", "OpenStack", "DNS", "CDN", "Operations & maintenance"],
  },

  /* -------------------------- CH·04 — datacenter --------------------------- */
  {
    id: "cloud-engineer",
    chapter: "datacenter",
    year: 2019,
    period: "2019",
    role: "Systems Administrator / DevOps",
    organization: "Global-scale cloud provider",
    title: "Operating cloud infrastructure",
    story:
      "I joined a global-scale cloud provider in systems administration and DevOps. The work was operating cloud infrastructure as a service: maintaining systems, investigating failures and improving the automation and processes around them.",
    reflection:
      "This was the point where my telecom and systems background met cloud delivery. The underlying work was still about reliable services, but the scale and the customer expectation were different.",
    technologies: ["Linux", "Cloud operations", "DevOps", "Automation", "Monitoring"],
    relatedHistory: ["aws-launch", "docker-kubernetes"],
    relatedArticles: ["physical-servers-vms-containers"],
  },
  {
    id: "noc-team-lead",
    chapter: "datacenter",
    year: 2020,
    period: "2020",
    role: "Customer Excellence Lead",
    organization: "Global-scale cloud provider",
    title: "From technical support to customer excellence",
    story:
      "I moved into customer excellence and led the work of resolving technical user issues. That meant understanding the system well enough to diagnose problems, coordinating with engineering and operations, and improving the service around recurring issues. Alongside the role I studied service design, nonviolent communication and enterprise product management.",
    reflection:
      "Incident response is applied epistemology: what do we know, how do we know it, and who needs to know it next? Everything else is keyboard work.",
    technologies: ["Customer excellence", "Technical support", "Service design", "Nonviolent communication", "Enterprise product management"],
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
      "I moved into technical product management for a cloud product used by 200,000 people. My responsibility is to make sure we are building the right product and solving the right customer problems: defining requirements, prioritizing features, managing the roadmap, and contributing to decisions about new features, pricing and product strategy.",
    reflection:
      "The role is translation with accountability: customer and business needs into clear technical requirements, engineering constraints into product decisions, and priorities into a roadmap that multiple teams can execute.",
    technologies: ["Technical product management", "Product requirements", "Prioritization", "Roadmapping", "Product strategy", "Usage data", "Cloud infrastructure"],
    relatedHistory: ["aws-launch", "world-wide-web"],
    relatedArticles: ["why-infrastructure-products-are-different"],
  },
];
