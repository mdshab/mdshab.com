import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mehdi Shabestari — technical product manager for cloud infrastructure. A career across telecom, networks, systems, infrastructure service development, DevOps and customer excellence.",
  alternates: {
    canonical: "/about"
  },
};

const facts = [
  { label: "Role", value: "Technical Product Manager" },
  { label: "Domain", value: "Cloud infrastructure" },
  { label: "Base", value: "Tehran · working internationally" },
  { label: "Languages", value: "Persian, English" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <div className="about-page">
          <header className="page-header">
            <p className="page-kicker mono-meta">About</p>
            <h1 className="page-title">{site.name}</h1>
            <p className="page-lede">
              I work on cloud infrastructure products. My background spans
              telecommunications, network operations, systems administration,
              infrastructure services, cloud operations and customer support.
            </p>
          </header>

          <dl className="about-facts">
            {facts.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <dt className="mono-meta">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="prose-editorial">
            <h2>The short version</h2>
            <p>
              I&apos;m Mehdi. Since 2022 I&apos;ve been a technical product
              manager for a cloud product used by 200,000 people. I define
              requirements, prioritize features, manage the roadmap and work
              with engineering, infrastructure, operations, sales and support.
              Before product, my career covered telecommunications, network
              operations, systems administration, infrastructure service
              development, DevOps and customer excellence.
            </p>

            <h2>Why that path matters</h2>
            <p>
              Operations helps me evaluate the cost of a product decision:
              what happens during a failure, who will support a new option,
              and whether a customer can recover without our help. Support
              taught me to look for the task behind a feature request.
              Today I use that experience when setting direction with
              engineering and negotiating scope with stakeholders.
            </p>

            <h2>The longer version</h2>
            <p>
              My first computer ran Windows 95, and Norton Commander was the
              first interface that felt like mine. Before networking there
              were analog systems — the kind you fix with your hands. An
              Ubuntu CD that arrived by international post opened Linux to
              me; years later, the same class of problem I solve with{" "}
              <code>terraform apply</code> is the one that CD started.
            </p>
            <p>
              I started in technical support at Tel4Tel, an international
              telecom carrier, in <strong>2007</strong>. Six months later I
              moved into administration and acting supervision. At FCP,
              starting in <strong>2011</strong>, the path ran from the NOC
              through network engineering and telecom platforms into Linux
              systems and infrastructure service development: Ceph,
              OpenStack, DNS and CDN.
            </p>
            <p>
              In <strong>2019</strong> I joined a global-scale cloud provider
              in systems administration and DevOps, then moved into customer
              excellence leadership in <strong>2020</strong>. Service design,
              nonviolent communication and enterprise product management
              studies helped me connect technical problem solving with the
              customer&apos;s experience. I moved into technical product management
              in <strong>2022</strong>. I also studied Information Technology
              at the University of Applied Science and Technology.
            </p>

            <h2>Beyond work</h2>
            <p>
              I keep a three-thousand-year timeline of communication
              technology — the{" "}
              <Link href="/humanity">Humanity section</Link> of this site,
              with 115 events from the alphabet to packet switching. The{" "}
              <Link href="/ideas">Ideas section</Link> holds the thinkers
              behind the questions I enjoy most, and{" "}
              <Link href="/mind">Mind</Link> is a small page for breathing.
              History of computing, Persian poetry, and whatever the
              footnotes lead to are usually on the nightstand.
            </p>

            <h2>How to reach me</h2>
            <p>
              Message me on LinkedIn for a role, a project or a conversation
              about infrastructure products. The{" "}
              <Link href="/contact">contact page</Link> has the link and a
              few suggestions for what to include.
            </p>

            <p>
              Nothing on this site is tracked, profiled or sold. Read it the
              way it was built: slowly, and in one piece.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
