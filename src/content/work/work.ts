import type { CaseStudy } from "@/types/content";

/**
 * Professional work. Scope and responsibilities use owner-supplied facts.
 * No confidential architecture, invented metrics or implied project results.
 * A role overview is identified as such rather than presented as one launch.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "cloud-services-at-scale",
    title: "Technical product management for cloud infrastructure",
    summary:
      "A 200,000-user cloud product: customer problems, requirements, feature priorities, roadmap, pricing and product strategy.",
    track: "practice",
    domain: "cloud",
    period: "2022 – present",
    role: "Technical Product Manager",
    organization: "Global-scale cloud provider",
    lede:
      "My product scope covers cloud infrastructure services. This is an overview of my responsibilities and recurring decisions, rather than a report on a single launch.",
    sections: [
      {
        heading: "context",
        body: "I work on a cloud product used by 200,000 people, with services including Cloud Server, VPC, Storage, Migration and GPU. The customer needs span running workloads, connecting services, storing data and moving existing systems into the cloud.",
      },
      {
        heading: "my-role",
        body: "My main responsibility is to make sure we build the right products and solve the right customer problems. I define product requirements, prioritize features and manage the roadmap. I also contribute to decisions about new features, pricing and overall product strategy.",
      },
      {
        heading: "discovery",
        body: "I monitor product performance and usage data to identify areas for improvement. Customer issues and input from sales and support help explain those signals. The task is to understand the problem behind a request before turning it into a requirement.",
      },
      {
        heading: "product-reasoning",
        body: "Customer and business needs have to become clear technical requirements. I work closely with engineering, infrastructure, operations, sales and support to establish priorities and keep the roadmap aligned. My technical background helps me discuss system constraints with engineering in detail and explain their business implications to non-technical stakeholders.",
      },
      {
        heading: "trade-offs",
        body: "Infrastructure choices carry an operating cost after launch. A configuration option may help a specialist while increasing setup effort and the number of states support must understand. A reliability commitment affects what engineering must build and operations must maintain. These are recurring product questions, alongside the business case for a new feature or a pricing change.",
      },
      {
        heading: "constraints",
        body: "The same product serves people with different responsibilities: the engineer integrating it, the operator maintaining it, the budget owner and the security reviewer. Requirements need to account for those differences. Internal architecture, commercial details and roadmap commitments remain private, so this overview does not claim a published project-level result.",
      },
      {
        heading: "what-i-learned",
        body: "My earlier roles help me connect the product decision to its consequences. Network and systems work provide technical context; customer excellence provides the view from the user who is blocked. Product management brings those perspectives together with business goals and a decision about what to do next.",
      },
    ],
    technologies: [
      "Product requirements",
      "Feature prioritization",
      "Roadmapping",
      "Usage & performance data",
      "Pricing",
      "Product strategy",
      "Cloud infrastructure",
    ],
    relatedArticles: ["why-infrastructure-products-are-different"],
  },
  {
    id: "support-leadership",
    title: "Customer excellence and technical support leadership",
    summary:
      "Leading customer-facing technical problem solving at a cloud provider, with service design and coordination across support, engineering and operations.",
    track: "practice",
    domain: "infrastructure",
    period: "2020",
    role: "Customer Excellence Lead",
    organization: "Global-scale cloud provider",
    lede:
      "After a first year in systems administration and DevOps, I moved into customer excellence leadership. The focus changed from operating the systems to helping the people using them.",
    sections: [
      {
        heading: "context",
        body: "I joined the cloud provider in a systems administration and DevOps role. Moving into customer excellence meant bringing that technical understanding to user issues and leading the function that helped resolve them.",
      },
      {
        heading: "problem",
        body: "A technical issue crosses several boundaries: the customer's environment, the product, the infrastructure and the teams operating it. Resolving it requires diagnosis, but also a shared account of what is known, what remains uncertain and who owns the next step.",
      },
      {
        heading: "my-role",
        body: "I led customer-facing technical support work, coordinating problem resolution with engineering and operations. The scope included service design, escalation paths, handovers and runbooks, as well as the quality of communication with users.",
      },
      {
        heading: "decision",
        body: "The working practices included a consistent handover format, runbooks that another engineer could execute, and clear communication when a diagnosis was not yet known. A handover needed to preserve what we knew, what we had ruled out and who owned the next action.",
      },
      {
        heading: "trade-offs",
        body: "Structure takes time during a routine issue, but reduces the need to reconstruct context when several people or teams become involved. The balance is enough shared information to make the next action clear, without making every ticket a documentation exercise.",
      },
      {
        heading: "what-i-learned",
        body: "This role moved my attention toward the service as the customer experienced it. I studied service design, nonviolent communication and enterprise product management alongside the work. That learning supported the later move into product: recurring user issues became questions about requirements, priorities and the product itself.",
      },
    ],
    technologies: [
      "Customer excellence",
      "Technical support",
      "Service design",
      "Incident coordination",
      "Runbooks",
      "Cross-functional communication",
    ],
    relatedArticles: ["what-infrastructure-taught-me"],
  },
  {
    id: "voice-becomes-software",
    title: "Telecommunications, networks and infrastructure services",
    summary:
      "Tel4Tel and FCP: support and supervision, NOC and network engineering, telecom platforms, Linux systems and service development.",
    track: "practice",
    domain: "telecom",
    period: "2007 – 2018",
    role: "Support & supervision → Network & systems engineering → Service development",
    organization: "Tel4Tel, then FCP",
    lede:
      "My telecom career covered several kinds of work. Voice platforms were one part of it, alongside networks, systems administration and the infrastructure behind services.",
    sections: [
      {
        heading: "context",
        body: "I started in technical support at Tel4Tel, an international telecom carrier, in 2007. After six months I moved into administration and an acting head / supervisor role. In 2011 I joined FCP in the NOC, then moved across network engineering, telecom platforms, systems administration and service development.",
      },
      {
        heading: "my-role",
        body: "At Tel4Tel the work combined technical support, telecom systems administration and supervision. At FCP I worked on network solutions and access infrastructure, later moving into voice platform specialization and management, Linux systems administration and infrastructure services. This is a career overview, not a single project with one outcome.",
      },
      {
        heading: "architecture",
        body: "The technical scope included Cisco routers and switches, Huawei and Siemens equipment, fiber, GPON and DSLAM. Telecom platform work included SDN, MGCP, Cisco voice, CUCM, UCCX, NGN and softswitch systems. Systems and service development extended into Linux, Ceph, OpenStack, DNS and CDN, including operation and maintenance.",
      },
      {
        heading: "constraints",
        body: "Telecom services run across equipment generations and organizational boundaries. Access infrastructure, transport, signaling and service platforms have different failure modes. A customer issue can involve several of them, so diagnosis requires understanding both the individual layer and its connections to the rest of the service.",
      },
      {
        heading: "what-i-learned",
        body: "Working across these roles gave me a broader view than any one specialization. Support showed how a failure reaches the customer. Network and systems work showed what it takes to operate the service. Supervision and service development added the people and process around it. Those are useful perspectives when evaluating a cloud product requirement today.",
      },
    ],
    technologies: [
      "Telecommunications",
      "Network operations",
      "Cisco routing & switching",
      "Huawei / Siemens",
      "Fiber / GPON / DSLAM",
      "SDN / MGCP",
      "CUCM / UCCX / NGN",
      "Linux",
      "Ceph / OpenStack",
      "DNS / CDN",
    ],
    relatedArticles: ["from-pbx-to-cloud-communications", "what-infrastructure-taught-me"],
  },
  {
    id: "this-website",
    title: "This website",
    summary:
      "A personal content platform with typed models, connected essays and a searchable library. No trackers or third-party fonts.",
    track: "build",
    domain: "web",
    period: "Built 2026",
    role: "Product direction, content and implementation",
    organization: "Personal project",
    lede:
      "A professional portfolio and a personal library on one content model. The site is a working example of the choices described here.",
    sections: [
      {
        heading: "context",
        body: "The site has two audiences: people evaluating my professional work, and readers exploring history, ideas and writing. The professional path needs to be easy to scan while the library remains available one level deeper.",
      },
      {
        heading: "problem",
        body: "The content should connect rather than become a collection of unrelated pages. History events link to essays, essays link to work, and search uses the same content model. Self-hosted fonts avoid a third-party request and work for readers behind restricted networks.",
      },
      {
        heading: "architecture",
        body: "Content lives in TypeScript modules and MDX, with Next.js rendering the pages. The timeline has a spatial desktop view and a semantic list for smaller screens and assistive technology. Search is built from the shared content graph.",
      },
      {
        heading: "trade-offs",
        body: "Typed files make editing more technical than a CMS, but keep the content versioned and diffable. The timeline's two presentations add code in exchange for accessibility. No analytics protects reader privacy and means I assess the site through content review and direct feedback rather than visitor tracking.",
      },
      {
        heading: "outcome",
        body: "A published site with connected content, self-hosted fonts, keyboard search and no trackers. Professional work comes first; the personal library stays accessible without competing for the opening screen.",
      },
      {
        heading: "what-i-learned",
        body: "The content model determines what the site can explain. Deciding what a case study or history event needs to contain is a product decision before it is a layout decision.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "MDX", "Accessibility", "Content modeling"],
    relatedHistory: ["world-wide-web"],
  },
];

export const getCaseStudy = (() => {
  const map = new Map(caseStudies.map((study) => [study.id, study]));
  return (id: string) => map.get(id);
})();

/** Featured on the homepage (order matters). */
export const featuredCaseStudyIds = [
  "cloud-services-at-scale",
  "support-leadership",
  "voice-becomes-software",
];
