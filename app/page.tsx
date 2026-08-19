import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";
import Link from "next/link";
import { FACTS as F, SITE } from "@/data/facts";
import { PAGES } from "@/data/pages";

/*
  構成は eta-se.com（UK ETA）に合わせて統一感を出している。
  UIの作りも同サイトの実装値に合わせた（okina指摘の差分）:
    ・CTAボタン  .btn-red / .cta-button-red（radius .625〜.75rem・hoverで1px浮く）
    ・カード      .card / .feature-card（金の「」角飾り・hoverで持ち上がる）
    ・見出し      .heading-band（見出し上に金→紺のグラデ罫）
    ・出現        .reveal（スクロールで下から24pxフェードイン）
    ・追従CTA     .cta-sticky-bar（ヒーローを過ぎたら下から出る）
    ・ヒーロー     .hero-zoom（22秒で scale 1.1 → 1 のゆっくりズーム）

  ⚠️ NZeTA固有で、UK ETAと決定的に違うのは料金の構造。
     申請料（NZ$17 or NZ$23）と IVL（NZ$100）が別で、合算が実支払額になる。
     ここを1行で流すと「NZ$17で行ける」と誤解させるので、独立した節にしている。
*/

export const metadata: Metadata = {
  title: {
    absolute: `NZeTA: ${F.totalApp} all in, valid ${F.validYears} years | New Zealand eTA Guide 2026`,
  },
  description:
    `A plain-English guide to the New Zealand eTA (NZeTA): the request fee is ${F.feeApp} in the app or ${F.feeWeb} online, plus the ${F.ivl} IVL — about ${F.totalApp}–${F.totalWeb} in total. Valid ${F.validYears} years, up to ${F.stayDays} days per visit.`,
  alternates: { canonical: `${SITE}/` },
  openGraph: {
    title: `NZeTA: ${F.totalApp} all in, valid ${F.validYears} years`,
    description: `What the New Zealand eTA actually costs once the ${F.ivl} IVL is included, and how to apply on the official Immigration New Zealand channels.`,
    locale: "en",
    type: "website",
  },
};

const STATS = [
  { v: F.totalApp, l: "What you pay", s: `${F.feeApp} request fee + ${F.ivl} IVL` },
  { v: `${F.validYears} years`, l: "Valid for", s: "Multiple entries allowed" },
  { v: "3 months", l: "Stay per visit", s: `${F.stayUkMonths} months on a UK passport` },
  { v: F.decisionTypical, l: "Processing time", s: "Often approved in minutes" },
];

const FEATURES = [
  {
    h: "It is not a visa",
    p: "It is a pre-travel authorisation for visa-waiver passports. If your country is not on the waiver list, you need a visitor visa instead.",
  },
  {
    h: "Checked before you board",
    p: "Airlines and cruise lines check it electronically against your passport, so there is nothing to print and nothing to carry.",
  },
  {
    h: "Two charges, one payment",
    p: `The request fee (${F.feeApp} in the app, ${F.feeWeb} online) and the ${F.ivl} IVL are taken in one transaction — about ${F.totalApp} in total.`,
  },
];

const STEPS = [
  {
    h: "Use the official app or website",
    p: `The NZeTA app costs ${F.feeApp}; applying through the Immigration New Zealand website costs ${F.feeWeb}. Same authorisation — the app is simply cheaper.`,
  },
  {
    h: "Scan your passport and take a photo",
    p: "The app reads your passport chip, then asks you to take a photo of your face. Your details must match your passport exactly.",
  },
  {
    h: "Pay the request fee and the IVL together",
    p: `Both are charged in the same transaction, so the amount you actually see is about ${F.totalApp} (app) or ${F.totalWeb} (website).`,
  },
  {
    h: "Wait for the decision by email",
    p: `Many are approved within minutes, but allow up to ${F.decisionTypical}. Apply before booking anything non-refundable.`,
  },
];

const FAQ = [
  {
    q: `Why is it ${F.totalApp} when the NZeTA is only ${F.feeApp}?`,
    a: `Because two charges are collected together: the NZeTA request fee (${F.feeApp} in the app, ${F.feeWeb} on the website) and the International Visitor Conservation and Tourism Levy, or IVL, of ${F.ivl}. The IVL is not part of the NZeTA fee — it is a separate levy that funds conservation and tourism infrastructure. Most travellers pay ${F.totalApp}–${F.totalWeb} in total.`,
  },
  {
    q: "Is the app really cheaper than the website?",
    a: `Yes. The request fee is ${F.feeApp} in the official app versus ${F.feeWeb} through the website — NZ$6 cheaper for exactly the same authorisation. If you can install the app, use it.`,
  },
  {
    q: "How long does the NZeTA last?",
    a: `${F.validYears} years from the date it is issued, or until your passport expires — whichever comes first. It allows multiple entries.`,
  },
  {
    q: "How long can I stay in New Zealand?",
    a: `Up to three months per visit for most travellers. If you hold a UK passport, the limit is ${F.stayUkMonths} months. The NZeTA does not guarantee entry — the border officer decides how long you may stay.`,
  },
  {
    q: "Do I need a new NZeTA if I get a new passport?",
    a: "Yes. The authorisation is linked to the passport you applied with, so a new passport means a new application.",
  },
  {
    q: "Do children need their own NZeTA?",
    a: "Yes. Everyone travelling, including infants, needs their own authorisation.",
  },
  {
    q: "Is the NZeTA a visa?",
    a: "No. It is a travel authorisation for people from visa-waiver countries and territories, and for cruise passengers and transit passengers. If you are not from a visa-waiver country, you need a visitor visa instead.",
  },
];

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Reveal />
      <StickyCta />

      {/* ── ヒーロー ── */}
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/hero-nz.webp"
            alt="Turquoise glacial lake below the snow-capped Southern Alps, New Zealand"
            fill
            priority
            className="hero-img hero-zoom"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-inner max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <span className="eyebrow">New Zealand Electronic Travel Authority</span>
          <h1
            className="mt-5 text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: "#ffffff", maxWidth: "22ch" }}
          >
            The NZeTA costs{" "}
            <span style={{ color: "var(--color-red-light)" }}>{F.totalApp}</span> once the IVL is
            included
          </h1>
          <p
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,.9)", maxWidth: "52ch" }}
          >
            Most guides quote {F.feeApp}. That is only the request fee — the {F.ivl} visitor levy is taken
            at the same time. Here is what you actually pay, and how to apply through the official
            channels.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-red">
              Apply on the official site
            </a>
            <a href="#cost" className="btn-outline-light">
              See the full cost
            </a>
          </div>
          <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,.75)" }}>
            Independent guide · not affiliated with the New Zealand Government · updated {F.updatedLabel}
          </p>
        </div>
      </section>

      {/* ── 統計カード（ヒーロー直下にせり出す）── */}
      <section
        className="max-w-6xl mx-auto px-6"
        style={{ marginTop: "-3rem", position: "relative", zIndex: 2 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={s.l} className={`card stat-card text-center reveal reveal-delay-${i + 1}`}>
              <p className="stat-num">{s.v}</p>
              <p className="stat-label">{s.l}</p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-light)" }}>
                {s.s}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What is ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="heading-band text-2xl md:text-3xl reveal">What is the NZeTA?</h2>
        <p className="mt-5 leading-relaxed reveal reveal-delay-1" style={{ maxWidth: "70ch" }}>
          The New Zealand Electronic Travel Authority is a pre-travel authorisation, not a visa. If
          you hold a passport from a visa-waiver country or territory, you need it before you board.
          It is also required for cruise passengers and for most transit passengers.
        </p>
        <p className="mt-4 leading-relaxed reveal reveal-delay-2" style={{ maxWidth: "70ch" }}>
          It is linked to the passport you apply with, lasts {F.validYears} years, and allows
          multiple entries. Most visitors may stay up to three months per visit; holders of a UK
          passport may stay up to {F.stayUkMonths} months. The border officer decides how long you
          may stay on arrival.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div key={f.h} className={`feature-card reveal reveal-delay-${i + 1}`}>
              <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>
                {f.h}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 料金（NZeTA固有の要点）── */}
      <section id="cost" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="heading-band text-2xl md:text-3xl reveal">What it actually costs</h2>
          <p className="mt-5 leading-relaxed reveal reveal-delay-1" style={{ maxWidth: "70ch" }}>
            Two separate charges are taken in a single transaction, which is where most people go wrong.
          </p>
          <div className="mt-7 card reveal reveal-delay-2" style={{ padding: "1.6rem 1.6rem" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ borderCollapse: "collapse", minWidth: "34rem" }}>
                <thead>
                  <tr style={{ background: "var(--color-navy)", color: "#fff" }}>
                    <th className="text-left px-4 py-3">How you apply</th>
                    <th className="text-left px-4 py-3">Request fee</th>
                    <th className="text-left px-4 py-3">IVL</th>
                    <th className="text-left px-4 py-3">You pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <td className="px-4 py-3 font-medium">Official app</td>
                    <td className="px-4 py-3">{F.feeApp}</td>
                    <td className="px-4 py-3">{F.ivl}</td>
                    <td className="px-4 py-3 font-bold" style={{ color: "var(--color-red-vivid)" }}>
                      {F.totalApp}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Website</td>
                    <td className="px-4 py-3">{F.feeWeb}</td>
                    <td className="px-4 py-3">{F.ivl}</td>
                    <td className="px-4 py-3 font-bold">{F.totalWeb}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-sm reveal reveal-delay-3" style={{ maxWidth: "70ch" }}>
            The IVL — the International Visitor Conservation and Tourism Levy — is a separate charge
            from the NZeTA itself. It rose from NZ$35 to {F.ivl} in October 2024 and is still{" "}
            {F.ivl} as of {F.updatedLabel}. Sites that advertise only {F.feeApp} are quoting the request
            fee alone.
          </p>
        </div>
      </section>

      {/* ── 申請手順 ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="heading-band text-2xl md:text-3xl reveal">How to apply</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.h} className={`feature-card reveal reveal-delay-${(i % 4) + 1}`}>
              <p
                className="text-xs font-bold tracking-widest"
                style={{ color: "var(--color-gold-dark)" }}
              >
                STEP {i + 1}
              </p>
              <h3 className="mt-2 font-bold" style={{ color: "var(--color-navy)" }}>
                {s.h}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 reveal">
          <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="cta-button-red">
            Start on the official NZeTA site
          </a>
        </div>
      </section>

      {/* ── 入国時 ── */}
      <section style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="heading-band text-2xl md:text-3xl reveal">At the border</h2>
          <p className="mt-5 leading-relaxed reveal reveal-delay-1" style={{ maxWidth: "70ch" }}>
            There is nothing to print. Just carry the same passport you applied with — your authorisation
            is held against it electronically. You will also need to complete a New Zealand Traveller
            Declaration before you arrive, which is separate from the NZeTA and free of charge.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h2 className="heading-band text-2xl md:text-3xl reveal">Frequently asked questions</h2>
        <div className="mt-8 space-y-4">
          {FAQ.map((f, i) => (
            <details key={f.q} className={`card group reveal reveal-delay-${(i % 4) + 1}`}>
              <summary className="flex items-start justify-between gap-4 font-bold cursor-pointer list-none">
                <span>{f.q}</span>
                <span
                  className="shrink-0 transition-transform group-open:rotate-45"
                  style={{ color: "var(--color-red-vivid)", fontSize: "1.25rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── 下層ページへの導線 ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="heading-band text-2xl md:text-3xl reveal">Read more about the NZeTA</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {PAGES.filter((p) => !["privacy", "terms", "about"].includes(p.slug)).map((p, i) => (
            <Link key={p.slug} href={`/${p.slug}/`} className={`feature-card no-underline reveal reveal-delay-${(i % 4) + 1}`}>
              <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>{p.nav}</h3>
              <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-xs reveal">
          {PAGES.filter((p) => ["about", "privacy", "terms"].includes(p.slug)).map((p) => (
            <Link key={p.slug} href={`/${p.slug}/`}>{p.nav}</Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-navy)" }}>
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold reveal" style={{ color: "#fff" }}>
            Start your NZeTA application
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed reveal reveal-delay-1"
            style={{ color: "rgba(255,255,255,.85)" }}
          >
            Applications are made through Immigration New Zealand&apos;s own app and website. We are an
            independent guide and cannot submit an application on your behalf.
          </p>
          <div className="mt-8 reveal reveal-delay-2">
            <a
              href={F.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-red"
            >
              Go to the official NZeTA page
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
