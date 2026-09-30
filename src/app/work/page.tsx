import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "Work — case studies",
  description:
    "Professional work across cloud product management, customer excellence, telecommunications, networks and infrastructure services, plus the design and implementation of this website.",
  alternates: {
    canonical: "/work"
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
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">Work</p>
          <h1 className="page-title">Case studies</h1>
          <p className="page-lede">
            Role overviews and case studies from cloud, customer excellence
            and telecommunications. Each explains the scope, my contribution
            and the decisions involved. A role overview is labeled as one;
            project results appear only where they can be shared.
          </p>
        </header>

        <p className="work-note">
          For the cloud-provider work I keep internal details private — what
          follows is the decisions and the reasoning, which is the part that
          transfers to anyone else&apos;s situation.
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
