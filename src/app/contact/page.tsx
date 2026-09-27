import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { contact } from "@/content/site";
import { contactPage } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Mehdi Shabestari — about a technical product role, a project, or a hard infrastructure problem worth thinking about together.",
  alternates: {
    canonical: "/contact"
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">Contact</p>
          <h1 className="page-title">{contactPage.title}</h1>
          <p className="page-lede">{contactPage.lede}</p>
        </header>

        <ul className="contact-intents">
          {contactPage.intents.map((intent) => (
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
              <span className="channel-card-name">GitHub</span>
              <br />
              <span className="channel-card-handle">github.com/mdshab</span>
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
                <span className="channel-card-name">LinkedIn</span>
                <br />
                <span className="channel-card-handle">Mehdi Shabestari</span>
              </span>
            </a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="channel-card">
              <MailIcon />
              <span>
                <span className="channel-card-name">Email</span>
                <br />
                <span className="channel-card-handle">{contact.email}</span>
              </span>
            </a>
          )}
        </div>

        <p className="contact-note">{contactPage.channelsNote}</p>
      </main>
      <SiteFooter />
    </>
  );
}
