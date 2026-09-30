import Link from "next/link";

/** Homepage sections, rendered on the server from the content model. */
export interface HomeContent {
  hero: {
    kicker: string;
    roleLine: string;
    h1: string;
    support: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    facts: { value: string; label: string }[];
  };
  helpWith: {
    title: string;
    lede: string;
    items: { title: string; body: string }[];
  };
  featuredWork: {
    title: string;
    lede: string;
    cta: { href: string; label: string };
    cards: {
      href: string;
      kind: string;
      period: string;
      title: string;
      summary: string;
      role: string;
    }[];
  };
  homeThinking: {
    title: string;
    lede: string;
    principles: { claim: string; body: string }[];
    cta: { href: string; label: string };
  };
  journeyTeaser: {
    title: string;
    lede: string;
    chapters: { era: string; label: string }[];
    cta: { href: string; label: string };
  };
  selectedWriting: {
    title: string;
    lede: string;
    cta: { href: string; label: string };
    articles: { href: string; title: string; desc: string }[];
  };
  beyondWork: {
    title: string;
    lede: string;
    items: { title: string; body: string; href: string; label: string }[];
  };
  finalCta: {
    kicker: string;
    title: string;
    body: string;
    paths: { title: string; body: string; href: string; label: string }[];
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
        <h1 id="home-h1" className="home-hero">
          {t.hero.h1}
        </h1>
        <p className="home-lede">{t.hero.support}</p>
        <div className="home-cta-row">
          <Link href={t.hero.primaryCta.href} className="btn btn-primary">
            {t.hero.primaryCta.label} →
          </Link>
          <Link href={t.hero.secondaryCta.href} className="btn btn-ghost">
            {t.hero.secondaryCta.label}
          </Link>
        </div>
        <dl className="hero-facts">
          {t.hero.facts.map((fact) => (
            <div className="hero-fact" key={fact.label}>
              <dt className="hero-fact-value">{fact.value}</dt>
              <dd className="hero-fact-label">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="home-section" aria-labelledby="work-h">
        <header className="home-section-head">
          <span className="section-index mono-meta">01</span>
          <h2 id="work-h" className="section-heading">{t.featuredWork.title}</h2>
          <p className="section-lede">{t.featuredWork.lede}</p>
        </header>
        <ul className="home-work-grid">
          {t.featuredWork.cards.map((card) => (
            <li key={card.href}>
              <Link href={card.href} className="work-card">
                <p className="work-card-meta mono-meta">
                  <span className="work-card-kind">{card.kind}</span>
                  <span className="work-card-period">{card.period}</span>
                </p>
                <h3 className="work-card-title">{card.title}</h3>
                <p className="work-card-summary">{card.summary}</p>
                <p className="work-card-role">{card.role}</p>
                <span className="work-card-read">Read the study →</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="home-section-cta">
          <Link href={t.featuredWork.cta.href} className="text-cta">
            {t.featuredWork.cta.label} →
          </Link>
        </p>
      </section>

      <section className="home-section" aria-labelledby="help-h">
        <header className="home-section-head">
          <span className="section-index mono-meta">02</span>
          <h2 id="help-h" className="section-heading">{t.helpWith.title}</h2>
          <p className="section-lede">{t.helpWith.lede}</p>
        </header>
        <ul className="help-grid">
          {t.helpWith.items.map((item) => (
            <li className="help-item" key={item.title}>
              <h3 className="help-item-title">{item.title}</h3>
              <p className="help-item-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="think-h">
        <header className="home-section-head">
          <span className="section-index mono-meta">03</span>
          <h2 id="think-h" className="section-heading">{t.homeThinking.title}</h2>
          <p className="section-lede">{t.homeThinking.lede}</p>
        </header>
        <ul className="principles-teaser">
          {t.homeThinking.principles.map((p) => (
            <li key={p.claim}>
              <h3 className="principle-teaser-claim">{p.claim}</h3>
              <p className="principle-teaser-body">{p.body}</p>
            </li>
          ))}
        </ul>
        <p className="home-section-cta">
          <Link href={t.homeThinking.cta.href} className="text-cta">
            {t.homeThinking.cta.label} →
          </Link>
        </p>
      </section>

      <section className="home-section" aria-labelledby="journey-h">
        <header className="home-section-head">
          <span className="section-index mono-meta">04</span>
          <h2 id="journey-h" className="section-heading">{t.journeyTeaser.title}</h2>
          <p className="section-lede">{t.journeyTeaser.lede}</p>
        </header>
        <ul className="journey-strip">
          {t.journeyTeaser.chapters.map((chapter) => (
            <li className="journey-strip-item" key={chapter.era + chapter.label}>
              <span className="journey-strip-era mono-meta">{chapter.era}</span>
              <span className="journey-strip-label">{chapter.label}</span>
            </li>
          ))}
        </ul>
        <p className="home-section-cta">
          <Link href={t.journeyTeaser.cta.href} className="text-cta">
            {t.journeyTeaser.cta.label} →
          </Link>
        </p>
      </section>

      <section className="home-section" aria-labelledby="writing-h">
        <header className="home-section-head">
          <span className="section-index mono-meta">05</span>
          <h2 id="writing-h" className="section-heading">{t.selectedWriting.title}</h2>
          <p className="section-lede">{t.selectedWriting.lede}</p>
        </header>
        <ul className="home-writing-list">
          {t.selectedWriting.articles.map((article) => (
            <li key={article.href}>
              <Link href={article.href} className="home-writing-item">
                <span className="home-writing-title">{article.title}</span>
                <span className="home-writing-desc">{article.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="home-section-cta">
          <Link href={t.selectedWriting.cta.href} className="text-cta">
            {t.selectedWriting.cta.label} →
          </Link>
        </p>
      </section>

      <section className="home-section" aria-labelledby="beyond-h">
        <header className="home-section-head">
          <span className="section-index mono-meta">06</span>
          <h2 id="beyond-h" className="section-heading">{t.beyondWork.title}</h2>
          <p className="section-lede">{t.beyondWork.lede}</p>
        </header>
        <ul className="beyond-grid">
          {t.beyondWork.items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="beyond-card">
                <span className="beyond-card-title">{item.title}</span>
                <span className="beyond-card-body">{item.body}</span>
                <span className="text-cta">{item.label} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="final-cta" aria-labelledby="final-h">
        <p className="final-cta-kicker mono-meta">{t.finalCta.kicker}</p>
        <h2 id="final-h" className="final-cta-title">{t.finalCta.title}</h2>
        <p className="final-cta-body">{t.finalCta.body}</p>
        <ul className="final-cta-paths">
          {t.finalCta.paths.map((path) => (
            <li key={path.title}>
              <h3 className="final-cta-path-title">{path.title}</h3>
              <p className="final-cta-path-body">{path.body}</p>
              <Link href={path.href} className="text-cta">{path.label} →</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
