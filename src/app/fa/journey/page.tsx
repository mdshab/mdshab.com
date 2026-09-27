import type { Metadata } from "next";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { faJourneyPage } from "@/content/i18n/fa";

export const metadata: Metadata = {
  title: "مسیر",
  description:
    "از یک کامپیوتر خانگی و یک CD پستی تا مدیریت محصول ابری — مسیری که به قضاوت محصولی، عمق فنی می‌دهد، در پنج فصل.",
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
    desc: "یک کامپیوتر خانگی، یک خط فرمان DOS، خطوط تلفن آنالوگ — و یک CD لینوکس که با پست بین‌المللی رسید.",
    entries: [
      {
        period: "سال‌های آغازین",
        title: "یک کامپیوتر در خانه",
        story:
          "با Windows 95 و Norton Commander شروع شد: دو پنل آبی، یک کیبورد، و یک فایل‌سیستم برای کشف. اینترنتی برای تکیه‌گرفتن نبود، پس خودِ سیستم‌عامل زمین بازی بود — نصب کن، خراب کن، دوباره نصب کن، و آهسته بفهم یک کامپیوتر واقعاً چیست.",
        tech: ["Windows 95", "Norton Commander", "سخت‌افزار x86"],
      },
      {
        period: "سال‌های آغازین",
        title: "سیستم‌های آنالوگ، قبل از دیجیتال‌ها",
        story:
          "قبل از شبکه‌های دیجیتال، سیستم‌های آنالوگی بود که باید می‌شناختی — سیم‌کشی، سیگنال‌ها، لایهٔ فیزیکی‌ای که وقتی کار می‌کند همه یادشان می‌رود. کار دستی با تجهیزات آنالوگ بهم آموخت هر چیز «مجازی» بالاخره به چیزی واقعی می‌خورد.",
        tech: ["تلفن آنالوگ", "مبانی PSTN", "سیم‌کشی برق"],
      },
      {
        period: "سال‌های آغازین",
        title: "CD‌ای که با پست آمد",
        story:
          "فرم اینترنتی را روی یک اتصال قرضی پر کردم و منتظر ماندم. هفته‌ها بعد پاکتی از هلند رسید با یک CD اوبونتو داخلش — یک سیستم‌عامل که رایگان و با پست از مرز عبور کرده بود. نصبش کردم و خط فرمان، خانه شد.",
        tech: ["Ubuntu", "CLI", "متن‌باز"],
        artifact: true,
      },
    ],
  },
  {
    index: "فصل ۲",
    title: "صدا روی شبکهٔ دیگران",
    era: "۲۰۰۷",
    desc: "راه‌اندازی VoIP در Tel4Tel: لحظه‌ای که تلفن از سیم شد نرم‌افزار.",
    entries: [
      {
        period: "۲۰۰۷",
        title: "مدیر VoIP",
        org: "Tel4Tel",
        story:
          "در Tel4Tel سیستم‌های VoIP را راه می‌انداختم: جریان‌های تماس، ترانک‌های SIP، کدک‌ها، گیت‌وی‌ها. تلفن — امپراتوری صدسالهٔ مس و سوییچ — داشت به اپلیکیشن بازنویسی می‌شد و من در تیمی بودم که برای مشتریان واقعی این بازنویسی را انجام می‌داد.",
        tech: ["VoIP", "SIP", "Asterisk", "گیت‌وی‌ها", "کدک‌ها"],
      },
    ],
  },
  {
    index: "فصل ۳",
    title: "زیر کابل‌ها در FCP",
    era: "۲۰۱۱ تا ۲۰۱۸",
    desc: "پشتیبانی فنی، مهندسی شبکه، و بعد تخصص VoIP — یادگیری کل استک، از صف تیکت تا ترانک.",
    entries: [
      {
        period: "۲۰۱۱",
        title: "یادگرفتن با جواب‌دادن به تلفن",
        org: "FCP",
        story:
          "ورود به FCP در پشتیبانی فنی یعنی مالک‌بودن لحظه‌ای که چیزها برای کاربران واقعی می‌شکند. هر تیکت درسی بود دربارهٔ اینکه سیستم‌ها واقعاً چطور خراب می‌شوند — و آدم‌ها این خرابی را چطور تجربه می‌کنند.",
        tech: ["سیستم‌های تیکتینگ", "شبکه", "Windows / Linux"],
      },
      {
        period: "۲۰۱۲",
        title: "زیر کابل‌ها",
        org: "FCP",
        story:
          "یک سال بعد رفتم سراغ مهندسی شبکه: روتینگ، سوییچینگ، فایروال، مسیرهایی که بسته‌ها می‌روند. از داخل شبکه، «ابر» از یک کلمهٔ تبلیغاتی به روتر و جدول و طرح failover تبدیل شد.",
        tech: ["Routing & switching", "فایروال", "VPN", "BGP"],
      },
      {
        period: "۲۰۱۲ تا ۲۰۱۸",
        title: "از ترانک تا تیم",
        org: "FCP",
        story:
          "در FCP به تخصص VoIP و بعد مدیریت این حوزه رسیدم — معماری NGN، صدای سیسکو، سیستم‌های PBX، و آدم‌هایی که همه‌اش را زنده نگه می‌داشتند. طراحی پلتفرم‌های تماس، تبدیل شد به طراحی نحوهٔ کار یک تیم.",
        tech: ["Cisco VoIP", "NGN", "PBX", "ترانک SIP", "رهبری تیم"],
      },
    ],
  },
  {
    index: "فصل ۴",
    title: "نردبان انتزاع",
    era: "۲۰۱۹ تا ۲۰۲۰",
    desc: "مهندسی ابر و رهبری NOC در یک ارائه‌دهندهٔ ابرِ مقیاس جهانی — از هاست‌های فیزیکی تا ناوگان‌ها، از درست‌کردن تا هماهنگ‌کردن.",
    entries: [
      {
        period: "۲۰۱۹",
        title: "مهندس ابر / sysadmin",
        org: "ارائه‌دهندهٔ ابر مقیاس جهانی",
        story:
          "رفتن به یک ارائه‌دهندهٔ ابر مقیاس جهانی در ۲۰۱۹ یعنی زندگی داخل نردبان انتزاع: هاست‌های فیزیکی، مجازی‌سازی، orchestration، اتوماسیون. سیستمی که یکی‌یکی اداره می‌کردم، حالا به‌شکل ناوگانی با داشبورد وجود داشت.",
        tech: ["مجازی‌سازی", "لینوکس در مقیاس", "اتوماسیون", "مانیتورینگ"],
      },
      {
        period: "۲۰۲۰",
        title: "سرگروه NOC",
        org: "ارائه‌دهندهٔ ابر مقیاس جهانی",
        story:
          "رهبری مرکز عملیات شبکه یعنی مالکیت رخدادها از اول تا آخر: مسیرهای تشدید، runbookها، تحویل‌ها، و آدم‌های ساعت ۳ صبح. در سالی که ترافیک دنیا به داخل خانه‌ها رفت، NOC جایی بود که اینترنت روشن ماند.",
        tech: ["عملیات NOC", "مدیریت رخداد", "On-call", "Runbook"],
      },
    ],
  },
  {
    index: "فصل ۵",
    title: "زیرساخت به‌مثابه محصول",
    era: "۲۰۲۲ تا امروز",
    desc: "مدیریت محصول فنی برای سرویس‌هایی که صدها هزار نفر استفاده می‌کنند — تبدیل قابلیت اطمینان به چیزی که می‌شود طراحی‌اش کرد.",
    entries: [
      {
        period: "۲۰۲۲ تا امروز",
        title: "مدیر محصول فنی",
        org: "ارائه‌دهندهٔ ابر مقیاس جهانی",
        story:
          "از ۲۰۲۲ به‌عنوان مدیر محصول فنی روی سرویس‌های ابری با صدها هزار کاربر کار کرده‌ام — تصمیم‌گیری دربارهٔ اینکه چه ساخته شود، برای چه کسی، و چرا، با انضباطِ زیرساختیِ یک دههٔ پشت هر انتخاب.",
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
