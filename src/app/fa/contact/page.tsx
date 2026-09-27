import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { contact } from "@/content/site";
import { faContactPage } from "@/content/i18n/fa";

export const metadata: Metadata = {
  title: "تماس",
  description:
    "شروع یک گفت‌وگو با مهدی شبستری — دربارهٔ یک نقش محصول فنی، یک پروژه، یا یک مسئلهٔ سخت زیرساختی که ارزش فکرکردن مشترک دارد.",
  alternates: {
    canonical: "/fa/contact",
    languages: { en: "/contact", fa: "/fa/contact" },
  },
};

export default function FaContactPage() {
  const t = faContactPage;
  return (
    <>
      <SiteHeader locale="fa" />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">{t.kicker}</p>
          <h1 className="page-title">{t.title}</h1>
          <p className="page-lede">{t.lede}</p>
        </header>

        <ul className="contact-intents">
          {t.intents.map((intent) => (
            <li className="contact-intent" key={intent.title}>
              <h2 className="contact-intent-title">{intent.title}</h2>
              <p className="contact-intent-body">{intent.body}</p>
            </li>
          ))}
        </ul>

        <div className="contact-channels">
          <a
            href={contact.github}
            className="channel-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span>
              <span className="channel-card-name" dir="ltr">GitHub</span>
              <br />
              <span className="channel-card-handle" dir="ltr">github.com/mdshab</span>
            </span>
          </a>
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              className="channel-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <span>
                <span className="channel-card-name" dir="ltr">LinkedIn</span>
                <br />
                <span className="channel-card-handle">مهدی شبستری</span>
              </span>
            </a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="channel-card">
              <MailIcon />
              <span>
                <span className="channel-card-name" dir="ltr">Email</span>
                <br />
                <span className="channel-card-handle" dir="ltr">{contact.email}</span>
              </span>
            </a>
          )}
        </div>

        <p className="contact-note">{t.channelsNote}</p>
      </main>
      <SiteFooter locale="fa" />
    </>
  );
}
