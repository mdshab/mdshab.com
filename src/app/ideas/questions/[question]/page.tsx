import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import {
  philosophicalQuestions,
  getQuestion,
  getQuestionThinkers,
} from "@/content/ideas";

interface QuestionPageProps {
  params: Promise<{ question: string }>;
}

export function generateStaticParams() {
  return philosophicalQuestions.map((question) => ({
    question: question.id,
  }));
}

export async function generateMetadata({
  params,
}: QuestionPageProps): Promise<Metadata> {
  const { question: id } = await params;
  const question = getQuestion(id);
  if (!question) return { title: "Question not found" };
  return { title: question.question, description: question.framing };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { question: id } = await params;
  const question = getQuestion(id);
  if (!question) notFound();

  const voices = getQuestionThinkers(question);

  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <article className="question-page">
          <nav aria-label="Breadcrumb" className="breadcrumb mono-meta">
            <Link href="/ideas">Ideas</Link>
            <span aria-hidden="true"> / </span>
            <span>{question.question}</span>
          </nav>

          <header className="question-page-header">
            <p className="page-kicker mono-meta">A question</p>
            <h1 className="page-title">{question.question}</h1>
            <p className="page-lede">{question.framing}</p>
          </header>

          <section aria-labelledby="voices-h" className="voices">
            <h2 id="voices-h" className="section-title">
              {voices.length} perspectives
            </h2>
            <ol className="voice-list">
              {voices.map((thinker) => (
                <li key={thinker.id} className="voice">
                  <article>
                    <h3 className="voice-name">
                      <Link href={`/ideas/${thinker.id}`}>{thinker.name}</Link>
                    </h3>
                    <p className="voice-tradition mono-meta">
                      {thinker.placeLabel}
                    </p>
                    <p className="voice-idea">
                      {thinker.idea ??
                        thinker.coreIdeas[0] ??
                        thinker.summary}
                    </p>
                    {thinker.quote && (
                      <blockquote className="voice-quote">
                        “{thinker.quote.text}”
                        <span className="mono-meta"> — {thinker.quote.source}</span>
                      </blockquote>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <nav className="event-pager" aria-label="More questions">
            <div>
              {(() => {
                const index = philosophicalQuestions.findIndex(
                  (q) => q.id === question.id,
                );
                const prev = philosophicalQuestions[index - 1];
                return prev ? (
                  <Link
                    href={`/ideas/questions/${prev.id}`}
                    className="event-pager-link"
                  >
                    <span className="mono-meta">← Previous question</span>
                    <span>{prev.question}</span>
                  </Link>
                ) : null;
              })()}
            </div>
            <div className="event-pager-next">
              {(() => {
                const index = philosophicalQuestions.findIndex(
                  (q) => q.id === question.id,
                );
                const next = philosophicalQuestions[index + 1];
                return next ? (
                  <Link
                    href={`/ideas/questions/${next.id}`}
                    className="event-pager-link"
                  >
                    <span className="mono-meta">Next question →</span>
                    <span>{next.question}</span>
                  </Link>
                ) : null;
              })()}
            </div>
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
