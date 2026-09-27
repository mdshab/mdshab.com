import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mehdi Shabestari — technical product manager for cloud infrastructure. Twenty years from analog telephony to cloud products, and the habit of asking what it all looked like three thousand years ago.",
  alternates: {
    canonical: "/about",
    languages: { en: "/about", fa: "/fa/about" },
  },
};

const facts = [
  { label: "Role", value: "Technical Product Manager" },
  { label: "Domain", value: "Cloud & AI infrastructure" },
  { label: "Base", value: "Tehran · working internationally" },
  { label: "Languages", value: "Persian, English" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <div className="about-page">
          <header className="page-header">
            <p className="page-kicker mono-meta">About</p>
            <h1 className="page-title">{site.name}</h1>
            <p className="page-lede">
              Twenty years in the layers most people never see — telecom
              switches, enterprise networks, datacenters, cloud platforms —
              and now the layer where those all become someone&apos;s product.
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
              manager for cloud services at a global-scale cloud provider,
              working on products that serve hundreds of thousands of users.
              Before that: cloud engineering and NOC leadership, voice and NGN
              infrastructure, network engineering, technical support, and —
              starting in 2007 — VoIP administration. I climbed the whole
              stack, and now I decide what gets built on top of it.
            </p>

            <h2>Why that path matters</h2>
            <p>
              Product management borrowed from infrastructure tends to
              over-promise; engineering without product sense builds elegant
              systems nobody asked for. I sit on the bridge deliberately.
              The NOC taught me what a broken promise costs. Support taught
              me how failure actually feels from the outside. Telecom taught
              me that reliability is a feature, decades before cloud
              marketing said so. The product work is where all of that
              becomes decisions.
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
              The career in one line: <strong>2007</strong> VoIP
              administration at Tel4Tel; <strong>2011</strong> technical
              support at FCP; <strong>2012</strong> network engineer, then
              VoIP expert and manager at FCP through 2018, working on NGN and
              Cisco voice infrastructure; <strong>2019</strong> cloud
              engineer and system administrator; <strong>2020</strong> NOC
              team lead; <strong>2022</strong> to present, technical product
              management for cloud services. I studied Information Technology
              at the University of Applied Science and Technology.
            </p>

            <h2>Beyond work</h2>
            <p>
              I keep a three-thousand-year timeline of the technology that
              made this career possible — the{" "}
              <Link href="/humanity">Humanity section</Link> of this site,
              with 115 events from the alphabet to packet switching. The{" "}
              <Link href="/ideas">Ideas section</Link> holds the thinkers who
              sharpened the questions I enjoy most, and{" "}
              <Link href="/mind">Mind</Link> is a small breathing space —
              uptime for humans. History of computing, Persian poetry, and
              whatever the footnotes lead to are usually on the nightstand.
            </p>

            <h2>How to reach me</h2>
            <p>
              The shortest path is the{" "}
              <Link href="/contact">contact page</Link> — GitHub reaches me
              directly. I read everything and I answer.
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
