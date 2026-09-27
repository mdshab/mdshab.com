import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "Work — case studies",
  description:
    "Case studies from twenty years of infrastructure and product work: cloud services at scale, network operations, telephony platforms, and this site. Judgment, constraints, trade-offs — described honestly.",
  alternates: {
    canonical: "/work",
    languages: { en: "/work", fa: "/fa/work" },
  },
};

const trackLabels = { practice: "Practice", build: "Build" } as const;
const domainLabels: Record<string, string> = {
  cloud: "Cloud",
  product: "Product",
  infrastructure: "Infrastructure",
  telecom: "Telecom",
  web: "Web",
};

export default function WorkPage() {
  const practice = caseStudies.filter((c) => c.track === "practice");
  const builds = caseStudies.filter((c) => c.track === "build");

  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">Work</p>
          <h1 className="page-title">Case studies</h1>
          <p className="page-lede">
            The format is the one I wish every project document used:
            context, problem, constraints, decision, trade-offs, outcome.
            Where numbers don&apos;t exist, none are invented.
          </p>
        </header>

        <p className="work-note">
          Employer names and internal figures stay private where that privacy
          was promised — the cloud-provider work is described at the level of
          judgment, not architecture diagrams. The reasoning is the point;
          the confidentiality is the constraint, and both are real.
        </p>

        <section aria-labelledby="practice-h">
          <h2 id="practice-h" className="section-title">
            From the practice
          </h2>
          <ul className="work-page-grid">
            {practice.map((study) => (
              <li key={study.id}>
                <Link href={`/work/${study.id}`} className="lab-card">
                  <p className="lab-card-status mono-meta">
                    <span style={{ color: "var(--accent)" }}>
                      {trackLabels[study.track]}
                    </span>{" "}
                    · {domainLabels[study.domain]} · {study.period}
                  </p>
                  <h3 className="lab-card-title">{study.title}</h3>
                  <p className="lab-card-summary">{study.summary}</p>
                  <p className="lab-card-period mono-meta">
                    {study.role} — {study.organization}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="builds-h" style={{ marginTop: "2.5rem" }}>
          <h2 id="builds-h" className="section-title">
            Built in public
          </h2>
          <ul className="work-page-grid">
            {builds.map((study) => (
              <li key={study.id}>
                <Link href={`/work/${study.id}`} className="lab-card">
                  <p className="lab-card-status mono-meta">
                    <span style={{ color: "var(--accent)" }}>
                      {trackLabels[study.track]}
                    </span>{" "}
                    · {domainLabels[study.domain]} · {study.period}
                  </p>
                  <h3 className="lab-card-title">{study.title}</h3>
                  <p className="lab-card-summary">{study.summary}</p>
                  <p className="lab-card-period mono-meta">
                    {study.role} — {study.organization}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
