import Link from "next/link";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { CommandPalette } from "@/components/command-palette/command-palette";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <CommandPalette />
      <main id="main" className="home">
        {/* ---------------------------------------------------------- */}
        {/* Act I — The deep past                                       */}
        {/* ---------------------------------------------------------- */}
        <section className="home-act home-act-1" aria-labelledby="home-h1">
          <p className="home-kicker mono-meta">A personal knowledge site</p>
          <h1 id="home-h1" className="home-hero">
            Three thousand years,
            <br />
            one moment.
          </h1>
          <p className="home-lede">
            This site connects the long history of human civilization —
            empires, ideas, inventions — with the history of ideas, and with
            one career spent building communication infrastructure. It is a
            knowledge graph, not a blog: every event, thinker and story here
            is linked.
          </p>
          <div className="home-cta-row">
            <Link href="/humanity" className="btn btn-primary">
              Explore 3,000 years →
            </Link>
            <Link href="/journey" className="btn btn-ghost">
              Or start with my journey
            </Link>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Act II — Ideas                                              */}
        {/* ---------------------------------------------------------- */}
        <section className="home-act home-act-2" aria-labelledby="home-ideas-h">
          <h2 id="home-ideas-h" className="home-act-title">
            Ideas are the oldest technology
          </h2>
          <p className="home-act-lede">
            Questions about reality, freedom, suffering and the good life have
            been asked on every continent, in every century.{" "}
            <Link href="/ideas">Meet the thinkers</Link> who sharpened them —
            from Athens to Nishapur to Kyoto — and{" "}
            <Link href="/ideas">the questions themselves</Link>, framed so you
            can hold your own answer.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Act III — Industry & infrastructure                         */}
        {/* ---------------------------------------------------------- */}
        <section className="home-act home-act-3" aria-labelledby="home-infra-h">
          <h2 id="home-infra-h" className="home-act-title">
            Then industrial, then electronic, then connected
          </h2>
          <p className="home-act-lede">
            Steam, telegraph, telephone, transistor, packet switching — the
            modern world is a stack of communication machines. Follow the{" "}
            <Link href="/humanity?thread=communication">communication thread</Link>{" "}
            through the whole timeline, or read how a telephony career became
            a cloud career in the{" "}
            <Link href="/journey">Journey section</Link>.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Act IV — Now                                                */}
        {/* ---------------------------------------------------------- */}
        <section className="home-act home-act-4" aria-labelledby="home-mind-h">
          <p className="mono-meta home-mind-kicker">
            All of it — the empires, the proofs, the packets — happened in
            somebody&apos;s present tense.
          </p>
          <h2 id="home-mind-h" className="home-mind-title">
            Three thousand years of history, and this moment is the only one
            we&apos;re actually in.
          </h2>
          <div className="home-cta-row">
            <Link href="/mind" className="btn btn-mind">
              Enter Mind →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
