import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { faJourneyPage } from "@/content/i18n/fa";

export const metadata: Metadata = {
  title: "مسیر",
  description:
    "از یک کامپیوتر خانگی و یک CD لینوکسی که با پست آمد تا مدیریت محصول سرویس‌های ابری، در پنج فصل؛ با تاریخ‌های واقعی.",
  alternates: {
    canonical: "/fa/journey",
    languages: { en: "/journey", fa: "/fa/journey" },
  },
};

/**
 * Persian journey. Career facts mirror the English Journey exactly
 * (journey.ts is the closed set of dated facts) — only the framing
 * prose is localized. The full per-entry narratives remain on the
 * English page; this edition presents the five chapters and their
 * stories compactly.
 */
interface FaJourneyEntry {
  period: string;
  title: string;
  org?: string;
  story: string;
  tech: string[];
  artifact?: boolean;
}

interface FaJourneyChapter {
  index: string;
  title: string;
  era: string;
  desc: string;
  entries: FaJourneyEntry[];
}

const chapters: FaJourneyChapter[] = [
  {
    index: "فصل ۱",
    title: "قبل از اینکه همه‌چیز متصل شود",
    era: "سال‌های آغازین رایانش",
    desc: "یک کامپیوتر خانگی، خط تلفن آنالوگ — و یک CD لینوکس که با پست آمد.",
    entries: [
      {
        period: "سال‌های آغازین",
        title: "یک کامپیوتر در خانه",
        story:
          "با Windows 95 و Norton Commander شروع شد: دو پنل آبی، یک کیبورد. اینترنتی در کار نبود که عقب‌به‌عقب به آن تکیه کنی، پس خودِ سیستم‌عامل زمین بازی بود؛ نصب می‌کردی، خراب می‌کردی، دوباره نصب می‌کردی، و کم‌کم می‌فهمیدی کامپیوتر چیست.",
        tech: ["Windows 95", "Norton Commander", "سخت‌افزار x86"],
      },
      {
        period: "سال‌های آغازین",
        title: "سیستم‌های آنالوگ",
        story:
          "قبل از شبکه‌های دیجیتال، با سیستم‌های آنالوگ کار کرده بودم: سیم‌کشی، سیگنال، لایهٔ فیزیکی‌ای که وقتی کار می‌کند همه یادشان می‌رود. همان دوره عادت داد هر مسئله را اول تا لایهٔ فیزیکی پایین بروم.",
        tech: ["تلفن آنالوگ", "مبانی PSTN", "سیم‌کشی برق"],
      },
      {
        period: "سال‌های آغازین",
        title: "CD‌ای که با پست آمد",
        story:
          "یک فرم اینترنتی را با اتصال قرضی پر کردم و منتظر ماندم. چند هفته بعد پاکتی از هلند رسید؛ یک CD اوبونتو. نصبش کردم و خط فرمان شد خانهٔ دوم.",
        tech: ["Ubuntu", "CLI", "متن‌باز"],
        artifact: true,
      },
    ],
  },
  {
    index: "فصل ۲",
    title: "صدا روی شبکهٔ دیگران",
    era: "۲۰۰۷",
    desc: "راه‌اندازی سیستم‌های VoIP در Tel4Tel، در دورانی که تلفن داشت از سیم به نرم‌افزار تبدیل می‌شد.",
    entries: [
      {
        period: "۲۰۰۷",
        title: "راه‌انداز VoIP",
        org: "Tel4Tel",
        story:
          "در Tel4Tel سیستم‌های VoIP را راه می‌انداختم: جریان تماس، ترانک SIP، کدک، گیت‌وی. تلفنی که یک قرن سیم و سوییچ بود داشت نرم‌افزار می‌شد، و ما برای مشتری‌های واقعی این تبدیل را انجام می‌دادیم.",
        tech: ["VoIP", "SIP", "Asterisk", "گیت‌وی‌ها", "کدک‌ها"],
      },
    ],
  },
  {
    index: "فصل ۳",
    title: "زیر کابل‌ها در FCP",
    era: "۲۰۱۱ تا ۲۰۱۸",
    desc: "پشتیبانی فنی، مهندسی شبکه، و بعد تخصص و مدیریت صدا — از صف تیکت تا ترانک.",
    entries: [
      {
        period: "۲۰۱۱",
        title: "پشتیبانی فنی",
        org: "FCP",
        story:
          "ورود به FCP از پشتیبانی فنی بود: مالکِ لحظه‌ای که چیزها برای کاربر واقعی می‌شکند. هر تیکت یک درس بود؛ سیستم‌ها واقعاً چطور می‌شکنند، و کاربر این را چه حسی دارد.",
        tech: ["سیستم‌های تیکتینگ", "شبکه", "Windows / Linux"],
      },
      {
        period: "۲۰۱۲",
        title: "مهندس شبکه",
        org: "FCP",
        story:
          "یک سال بعد رفتم مهندسی شبکه: روتینگ، سوییچینگ، فایروال. از داخل شبکه، «ابر» دیگر کلمهٔ تبلیغاتی نبود؛ روتر بود و جدول مسیر و طرح failover.",
        tech: ["Routing & switching", "فایروال", "VPN", "BGP"],
      },
      {
        period: "۲۰۱۲ تا ۲۰۱۸",
        title: "متخصص و مدیر VoIP",
        org: "FCP",
        story:
          "در FCP به تخصص VoIP و بعد مدیریت همان حوزه رسیدم: معماری NGN، VoIP سیسکو، PBX، و تیمی که همه‌اش را نگه می‌داشت. کم‌کم طراحی پلتفرم تماس شد طراحی شیوهٔ کار تیم.",
        tech: ["Cisco VoIP", "NGN", "PBX", "ترانک SIP", "رهبری تیم"],
      },
    ],
  },
  {
    index: "فصل ۴",
    title: "نردبان انتزاع",
    era: "۲۰۱۹ تا ۲۰۲۰",
    desc: "مهندسی ابر و بعد رهبری NOC، در یک ابرِ مقیاس جهانی.",
    entries: [
      {
        period: "۲۰۱۹",
        title: "مهندس ابر",
        org: "ابر مقیاس جهانی",
        story:
          "ورود به ابر در ۲۰۱۹ یعنی زندگی داخل نردبان انتزاع: هاست فیزیکی، مجازی‌سازی، orchestration، اتوماسیون. سیستم‌هایی که قبلاً یکی‌یکی اداره می‌کردم، حالا ناوگان بودند با داشبورد.",
        tech: ["مجازی‌سازی", "لینوکس در مقیاس", "اتوماسیون", "مانیتورینگ"],
      },
      {
        period: "۲۰۲۰",
        title: "سرگروه NOC",
        org: "ابر مقیاس جهانی",
        story:
          "رهبری مرکز عملیات شبکه: مالک رخدادها از اول تا آخر — مسیر تشدید، تحویل شیفت، runbook، و آدم‌های ۳ صبح. سالی که ترافیک همه به خانه رفت، اینترنت از همین اتاق‌ها روشن ماند.",
        tech: ["عملیات NOC", "مدیریت رخداد", "On-call", "Runbook"],
      },
    ],
  },
  {
    index: "فصل ۵",
    title: "محصول",
    era: "۲۰۲۲ تا امروز",
    desc: "مدیریت محصول فنی سرویس‌هایی که صدها هزار کاربر دارند.",
    entries: [
      {
        period: "۲۰۲۲ تا امروز",
        title: "مدیر محصول فنی",
        org: "ابر مقیاس جهانی",
        story:
          "از ۲۰۲۲ مدیر محصول فنی سرویس‌های ابری‌ام؛ روی محصولاتی مثل Cloud Server، VPC، Storage و Migration. تصمیم می‌گیریم چه چیزی، برای چه کسی و چرا ساخته شود. ده سال انضباطِ عملیِ همین سیستم‌ها پشت هر انتخابم هست.",
        tech: ["استراتژی محصول", "سرویس‌های ابری", "تجربهٔ توسعه‌دهنده", "نقشهٔ راه"],
      },
    ],
  },
];

export default function FaJourneyPage() {
  const t = faJourneyPage;
  return (
    <>
      <SiteHeader locale="fa" />
      <main id="main" className="page">
        <header className="page-header">
          <p className="page-kicker mono-meta">{t.kicker}</p>
          <h1 className="page-title">{t.title}</h1>
          <p className="page-lede">{t.lede}</p>
        </header>

        {chapters.map((chapter) => (
          <section
            key={chapter.index}
            className="journey-chapter"
            aria-labelledby={`fa-${chapter.index.replace(/\s/g, "")}`}
          >
            <header className="journey-chapter-header">
              <p className="journey-chapter-index mono-meta">{chapter.index}</p>
              <h2
                id={`fa-${chapter.index.replace(/\s/g, "")}`}
                className="journey-chapter-title"
              >
                {chapter.title}
              </h2>
              <p className="journey-chapter-era mono-meta">{chapter.era}</p>
              <p className="journey-chapter-desc">{chapter.desc}</p>
            </header>

            <ol className="journey-entries">
              {chapter.entries.map((entry) => (
                <li
                  key={entry.title}
                  className={`journey-entry${entry.artifact ? " journey-entry-artifact" : ""}`}
                >
                  <article className="journey-entry-card">
                    {entry.artifact && (
                      <p className="journey-artifact-badge mono-meta">Artifact</p>
                    )}
                    <p className="journey-entry-period mono-meta">{entry.period}</p>
                    <h3 className="journey-entry-title">{entry.title}</h3>
                    {entry.org && <p className="journey-entry-org">{entry.org}</p>}
                    <p className="journey-entry-story">{entry.story}</p>
                    <ul className="journey-entry-tech" aria-label="فناوری‌ها">
                      {entry.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="artifact-then-now" aria-labelledby="fa-then-now-h">
          <h2 id="fa-then-now-h" className="page-title-sm">
            {t.thenNowTitle}
          </h2>
          <div className="then-now-grid">
            <div className="then-now-cell">
              <p className="mono-meta then-now-label">{t.thenNow.then}</p>
              <p className="then-now-body">{t.thenNow.thenBody}</p>
            </div>
            <div className="then-now-cell">
              <p className="mono-meta then-now-label">{t.thenNow.now}</p>
              <p className="then-now-body">{t.thenNow.nowBody}</p>
            </div>
          </div>
          <p className="then-now-coda">{t.thenNowCoda}</p>
        </section>

        <section className="ladder" aria-labelledby="fa-ladder-h">
          <h2 id="fa-ladder-h" className="page-title-sm">
            {t.ladderTitle}
          </h2>
          <p className="ladder-lede">{t.ladderLede}</p>
          <ol className="ladder-list">
            {faLadderRungs.map((step, index) => (
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
        </section>
      </main>
      <SiteFooter locale="fa" />
    </>
  );
}

const faLadderRungs = [
  { rung: "فیزیکی", question: "فلزِ لخت. آنچه می‌شکند را لمس می‌کنی.", example: "رک‌ها، کابل‌ها، کابینت‌های PBX" },
  { rung: "مجازی‌سازی", question: "یک میزبان، ماشین‌های زیاد.", example: "هایپروایزر، VM، اسنپ‌شات" },
  { rung: "ابر", question: "مکان دیگر مهم نیست.", example: "ریجن‌ها، IaaS، مقیاس الاستیک" },
  { rung: "کلود-نیتیو", question: "سرور دیگر مهم نیست.", example: "کانتینرها، orchestration، سرویس‌ها" },
  { rung: "زیرساخت هوشمند", question: "پیکربندی شروع می‌کند خودش را بنویسد.", example: "اتوماسیون، عملیاتِ AI-یاری‌شده" },
];
