import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import {
  principles,
  abstractionLadder,
  telecomCloudMap,
} from "@/content/thinking";

export const metadata: Metadata = {
  title: "How I think",
  description:
    "Product principles earned in infrastructure: users buy outcomes, abstractions are promises, reliability is the product — plus the models behind them, drawn from real work.",
  alternates: {
    canonical: "/thinking"
  },
};

export default function ThinkingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">How I think</p>
          <h1 className="page-title">Product decisions and working principles</h1>
          <p className="page-lede">
            How I approach customer problems, priorities and the cost of
            running infrastructure. The principles below connect product
            work with the systems and services I worked on before it.
          </p>
        </header>

        <section aria-label="Principles">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.id}>
              <span className="principle-index mono-meta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="principle-claim">{principle.claim}</h2>
              <p className="principle-body">{principle.body}</p>
              <p className="principle-origin mono-meta">{principle.origin}</p>
            </article>
          ))}
        </section>

        {/* Model 1 — the abstraction ladder */}
        <section
          className="model-section"
          aria-labelledby={`${abstractionLadder.id}-h`}
          id={abstractionLadder.id}
        >
          <h2 id={`${abstractionLadder.id}-h`} className="page-title-sm">
            {abstractionLadder.title}
          </h2>
          <p className="model-lede">{abstractionLadder.lede}</p>
          <ol className="ladder-list">
            {abstractionLadder.rungs.map((step, index) => (
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
          <p className="model-coda">{abstractionLadder.coda}</p>
        </section>

        {/* Model 2 — telecom → cloud evolution map */}
        <section
          className="model-section"
          aria-labelledby={`${telecomCloudMap.id}-h`}
          id={telecomCloudMap.id}
        >
          <h2 id={`${telecomCloudMap.id}-h`} className="page-title-sm">
            {telecomCloudMap.title}
          </h2>
          <p className="model-lede">{telecomCloudMap.lede}</p>
          <div style={{ overflowX: "auto" }}>
            <table className="evolution-table">
              <caption className="mono-meta">
                Confidence markers keep the mapping honest
              </caption>
              <thead>
                <tr>
                  <th scope="col">Concept</th>
                  <th scope="col">Telecom</th>
                  <th scope="col">Cloud</th>
                  <th scope="col">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {telecomCloudMap.pairs.map((pair) => (
                  <tr key={pair.concept}>
                    <td>{pair.concept}</td>
                    <td>{pair.telecom}</td>
                    <td>{pair.cloud}</td>
                    <td>
                      <span className={`confidence confidence-${pair.confidence}`}>
                        {pair.confidence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="model-coda">{telecomCloudMap.coda}</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
