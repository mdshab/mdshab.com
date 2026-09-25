import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";

export const metadata: Metadata = {
  title: "About",
  description:
    "The person behind mdshab.com — twenty years across telecom, networking and cloud infrastructure, and the history that puts it in context.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">The person behind the site</p>
          <h1 className="page-title">About</h1>
          <p className="page-lede">
            Twenty years of telecom, networking and cloud — and the habit of
            asking what it all looked like three thousand years ago.
          </p>
        </header>

        <div className="prose-editorial">
          <p>
            I&apos;m Mehdi — the mdshab behind mdshab.com. I&apos;ve spent
            two decades in the layers most people never see: telecom
            switches, enterprise networks, datacenters and cloud
            infrastructure.
          </p>

          <h2>The short version</h2>
          <p>
            I started in VoIP administration in 2007, moved through technical
            support and network engineering, spent years leading voice and
            NGN infrastructure, then crossed into cloud engineering and NOC
            leadership. Since 2022 I&apos;ve been a technical product manager
            for cloud services at a global-scale cloud provider, working on
            products that serve hundreds of thousands of users.
          </p>

          <h2>The longer version</h2>
          <p>
            My first computer ran Windows 95, and Norton Commander was the
            first interface that felt like mine. Before networking there were
            analog systems — the kind you fix with your hands. An Ubuntu CD
            that arrived by international post opened Linux to me; years
            later, the same class of problem I solve with{" "}
            <code>terraform apply</code> is the one that CD started.
          </p>
          <p>
            The career in one line: <strong>2007</strong> VoIP administration
            at Tel4Tel; <strong>2011</strong> technical support at FCP;{" "}
            <strong>2012</strong> network engineer, then VoIP expert and
            manager at FCP through 2018, working on NGN and Cisco voice
            infrastructure; <strong>2019</strong> cloud engineer and system
            administrator; <strong>2020</strong> NOC team lead;{" "}
            <strong>2022</strong> to present, technical product management for
            cloud services.
          </p>
          <p>
            I studied Information Technology at the University of Applied
            Science and Technology.
          </p>

          <h2>Why this site exists</h2>
          <p>
            What ties the career together is a conviction that
            infrastructure is the modern chapter of a very old story — the
            same one told by the Royal Road, the telegraph and the
            transatlantic cable. This site is my attempt to read the whole
            story, not just my chapter of it.
          </p>
          <p>
            Nothing here is tracked, profiled or sold. Read it the way it was
            built: slowly, and in one piece.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
