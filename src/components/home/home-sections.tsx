import Link from "next/link";

export interface HomeContent {
  hero: {
    kicker: string;
    roleLine: string;
    h1: string;
    support: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
  };
  featuredDecision: {
    label: string;
    title: string;
    context: string;
    decision: string;
    tradeoff: string;
    note: string;
    cta: { href: string; label: string };
    allWork: { href: string; label: string };
  };
  homeThinking: {
    title: string;
    principles: { claim: string; example: string; href: string }[];
  };
  personalThread: {
    label: string;
    title: string;
    body: string;
    story: { href: string; label: string };
    library: { href: string; label: string };
  };
  finalCta: {
    title: string;
    body: string;
    cta: { href: string; label: string };
  };
}

export function HomeMain({ content: t }: { content: HomeContent }) {
  return (
    <main id="main" className="home">
      <section className="hero" aria-labelledby="home-h1">
        <div className="hero-kicker">
          <p className="hero-kicker-name">{t.hero.kicker}</p>
          <span className="hero-kicker-rule" aria-hidden="true" />
        </div>
        <p className="hero-role mono-meta">{t.hero.roleLine}</p>
        <h1 id="home-h1" className="home-hero">{t.hero.h1}</h1>
        <p className="home-lede">{t.hero.support}</p>
        <div className="home-cta-row">
          <Link href={t.hero.primaryCta.href} className="btn btn-primary">
            {t.hero.primaryCta.label} →
          </Link>
          <Link href={t.hero.secondaryCta.href} className="btn btn-ghost">
            {t.hero.secondaryCta.label}
          </Link>
        </div>
      </section>

      <section className="home-section" aria-labelledby="decision-h">
        <p className="section-index mono-meta">01 / {t.featuredDecision.label}</p>
        <h2 id="decision-h" className="section-heading">{t.featuredDecision.title}</h2>
        <div className="home-decision">
          <p className="home-decision-context">{t.featuredDecision.context}</p>
          <dl className="home-decision-details">
            <div>
              <dt className="mono-meta">The practice</dt>
              <dd>{t.featuredDecision.decision}</dd>
            </div>
            <div>
              <dt className="mono-meta">The trade-off</dt>
              <dd>{t.featuredDecision.tradeoff}</dd>
            </div>
          </dl>
        </div>
        <p className="home-decision-note">{t.featuredDecision.note}</p>
        <div className="home-link-row">
          <Link href={t.featuredDecision.cta.href} className="text-cta">
            {t.featuredDecision.cta.label} →
          </Link>
          <Link href={t.featuredDecision.allWork.href} className="text-cta">
            {t.featuredDecision.allWork.label} →
          </Link>
        </div>
      </section>

      <section className="home-section" aria-labelledby="think-h">
        <p className="section-index mono-meta">02 / Thinking</p>
        <h2 id="think-h" className="section-heading">{t.homeThinking.title}</h2>
        <ul className="home-principles">
          {t.homeThinking.principles.map((principle) => (
            <li key={principle.href}>
              <h3>{principle.claim}</h3>
              <p>{principle.example}</p>
              <Link href={principle.href} className="text-cta">Read the principle →</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="personal-h">
        <p className="section-index mono-meta">03 / {t.personalThread.label}</p>
        <h2 id="personal-h" className="section-heading">{t.personalThread.title}</h2>
        <p className="home-personal-body">{t.personalThread.body}</p>
        <div className="home-link-row">
          <Link href={t.personalThread.story.href} className="text-cta">
            {t.personalThread.story.label} →
          </Link>
          <Link href={t.personalThread.library.href} className="text-cta">
            {t.personalThread.library.label} →
          </Link>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-h">
        <h2 id="final-h" className="final-cta-title">{t.finalCta.title}</h2>
        <p className="final-cta-body">{t.finalCta.body}</p>
        <Link href={t.finalCta.cta.href} className="btn btn-primary">
          {t.finalCta.cta.label} →
        </Link>
      </section>
    </main>
  );
}
