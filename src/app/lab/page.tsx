import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";
import { labProjects } from "@/content/lab";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Infrastructure and product work, written up as honest case studies — decisions, trade-offs, outcomes.",
};

const statusLabels: Record<string, string> = {
  active: "Active",
  ongoing: "Ongoing",
  archived: "Archived",
  structure: "Structure",
};

export default function LabPage() {
  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">Work, written up</p>
          <h1 className="page-title">Lab</h1>
          <p className="page-lede">
            Case studies in the format I wish every project document used:
            context, problem, constraints, decision, trade-offs, outcome,
            lessons. Where numbers don&apos;t exist, none are invented.
          </p>
        </header>

        <ul className="lab-grid">
          {labProjects.map((project) => (
            <li key={project.id}>
              <Link href={`/lab/${project.id}`} className="lab-card">
                <p className="lab-card-status mono-meta">
                  {statusLabels[project.status]} · {project.kind}
                </p>
                <h2 className="lab-card-title">{project.title}</h2>
                <p className="lab-card-period mono-meta">{project.period}</p>
                <p className="lab-card-summary">{project.summary}</p>
                <p className="lab-card-sections mono-meta">
                  {project.sections.length} sections
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
