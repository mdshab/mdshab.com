import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import {
  faThinkingPage,
  faPrinciples,
  faLadder,
  faEvolutionPairs,
} from "@/content/i18n/fa";

export const metadata: Metadata = {
  title: "چطور فکر می‌کنم",
  description:
    "اصول محصولی که در زیرساخت به دست آمده‌اند: کاربر نتیجه را می‌خرد، انتزاع‌ها وعده‌اند، قابلیت اطمینان خودِ محصول است — به‌علاوهٔ مدل‌های پشت‌شان، از کار واقعی.",
  alternates: {
    canonical: "/fa/thinking",
    languages: { en: "/thinking", fa: "/fa/thinking" },
  },
};

export default function FaThinkingPage() {
  const t = faThinkingPage;
  return (
    <>
      <SiteHeader locale="fa" />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">{t.kicker}</p>
          <h1 className="page-title">{t.title}</h1>
          <p className="page-lede">{t.lede}</p>
        </header>

        <section aria-label="اصول">
          {faPrinciples.map((principle, index) => (
            <article className="principle" key={principle.id}>
              <span className="principle-index mono-meta">
                {String(index + 1).padStart(2, "0").replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)])}
              </span>
              <h2 className="principle-claim">{principle.claim}</h2>
              <p className="principle-body">{principle.body}</p>
              <p className="principle-origin mono-meta">{principle.origin}</p>
            </article>
          ))}
        </section>

        <section className="model-section" aria-labelledby="fa-ladder-h">
          <h2 id="fa-ladder-h" className="page-title-sm">
            {t.ladderTitle}
          </h2>
          <p className="model-lede">{t.ladderLede}</p>
          <ol className="ladder-list">
            {faLadder.map((step, index) => (
              <li
                key={step.rung}
                className="ladder-rung"
                style={{ "--rung": index } as React.CSSProperties}
              >
                <p className="ladder-rung-name">{step.rung}</p>
                <p className="ladder-rung-question">{step.question}</p>
                <p className="ladder-rung-example mono-meta">{step.example}</p>
              </li>
            ))}
          </ol>
          <p className="model-coda">{t.ladderCoda}</p>
        </section>

        <section className="model-section" aria-labelledby="fa-map-h">
          <h2 id="fa-map-h" className="page-title-sm">
            {t.mapTitle}
          </h2>
          <p className="model-lede">{t.mapLede}</p>
          <div style={{ overflowX: "auto" }}>
            <table className="evolution-table">
              <caption className="mono-meta">{t.tableCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.tableHeaders.concept}</th>
                  <th scope="col">{t.tableHeaders.telecom}</th>
                  <th scope="col">{t.tableHeaders.cloud}</th>
                  <th scope="col">{t.tableHeaders.confidence}</th>
                </tr>
              </thead>
              <tbody>
                {faEvolutionPairs.map((pair) => (
                  <tr key={pair.concept}>
                    <td>{pair.concept}</td>
                    <td>{pair.telecom}</td>
                    <td>{pair.cloud}</td>
                    <td>
                      <span className={`confidence confidence-${pair.confidence}`}>
                        {t.confidenceLabels[pair.confidence]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="model-coda">{t.mapCoda}</p>
        </section>
      </main>
      <SiteFooter locale="fa" />
    </>
  );
}
