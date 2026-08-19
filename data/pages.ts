import { FACTS as F } from "@/data/facts";

/**
 * 英語（ルート）の下層ページ。uketa（eta-se.com）の言語ディレクトリと同じ13本構成に合わせる。
 *   トップ（app/page.tsx）＋ここに定義する12本 = 13ページ
 *
 * ⚠️ 数値は必ず F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ NZeTA固有の要点を各ページで外さないこと:
 *      料金は申請料とIVLの二段構造／滞在は3か月・英国旅券のみ6か月／
 *      NZeTAはビザではない（ビザ免除国向けの渡航認証）
 */
export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { note: string };

export type Page = {
  slug: string;
  title: string;
  /** メニューやカードに出す短い名前 */
  nav: string;
  description: string;
  blocks: Block[];
};

export const PAGES: Page[] = [
  {
    slug: "what-is-nzeta",
    nav: "What is the NZeTA",
    title: "What is the NZeTA? The New Zealand Electronic Travel Authority explained",
    description:
      "The NZeTA is a pre-travel authorisation for visa-waiver passports, not a visa. What it covers, who needs one, and what it does not do.",
    blocks: [
      {
        p: `The New Zealand Electronic Travel Authority (NZeTA) is a pre-travel authorisation. It is required before you board if you hold a passport from a visa-waiver country or territory, if you are a cruise passenger, or if you are transiting through Auckland.`,
      },
      { h2: "It is not a visa" },
      {
        p: "A visa gives permission to travel to and stay in a country under set conditions. The NZeTA is lighter than that: it confirms in advance that you are eligible to board a flight to New Zealand. If your passport is not on the visa-waiver list, an NZeTA is not available to you and you need a visitor visa instead.",
      },
      { h2: "Who needs one" },
      {
        ul: [
          "Visa-waiver passport holders travelling for tourism or business visits",
          "Cruise ship passengers, regardless of nationality",
          "Most passengers transiting through Auckland International Airport",
          "Every traveller individually, including infants",
        ],
      },
      { h2: "What it does not do" },
      {
        ul: [
          "It does not guarantee entry — the border officer decides on arrival",
          `It does not extend your stay: up to three months per visit, or ${F.stayUkMonths} months on a UK passport`,
          "It does not permit work for a New Zealand employer",
        ],
      },
      {
        note: `The authorisation is linked electronically to the passport you applied with and lasts ${F.validYears} years. A new passport means a new application.`,
      },
    ],
  },
  {
    slug: "how-to-apply",
    nav: "How to apply",
    title: "How to apply for an NZeTA, step by step",
    description:
      `Applying takes about ten minutes in the official app (${F.feeApp}) or on the Immigration New Zealand website (${F.feeWeb}). Here is the order of the steps and what trips people up.`,
    blocks: [
      {
        p: `There are exactly two official channels: the NZeTA app and the Immigration New Zealand website. The app costs ${F.feeApp} and the website ${F.feeWeb} — the same authorisation either way.`,
      },
      { h2: "1. Choose the app if you can" },
      {
        p: "The app reads the chip in your passport, which removes most typing errors. It is also NZ$6 cheaper. Use the website if you cannot install the app or your phone cannot read the chip.",
      },
      { h2: "2. Enter your details exactly as printed" },
      {
        ul: [
          "Name, passport number and expiry date must match the passport exactly",
          "You will be asked for a photo of your face",
          "You declare any criminal convictions and past deportations",
        ],
      },
      { h2: "3. Pay both charges together" },
      {
        p: `The request fee and the ${F.ivl} International Visitor Conservation and Tourism Levy are charged in one transaction, so the amount you see is about ${F.totalApp} (app) or ${F.totalWeb} (website).`,
      },
      { h2: "4. Wait for the decision" },
      {
        p: `Many applications are approved within minutes, but allow up to ${F.decisionTypical}. Apply before you book anything non-refundable.`,
      },
      {
        note: "Commercial sites charge a mark-up to fill in the same form. Nothing they do is required, and they cannot make a decision come faster.",
      },
    ],
  },
  {
    slug: "cost",
    nav: "Cost",
    title: `How much does an NZeTA cost? ${F.totalApp} once the IVL is included`,
    description:
      `The NZeTA request fee is ${F.feeApp} in the app or ${F.feeWeb} online, plus the ${F.ivl} IVL — about ${F.totalApp}–${F.totalWeb} in total.`,
    blocks: [
      {
        p: "Two separate charges are collected in a single payment. This is where most of the confusion about the price comes from.",
      },
      { h2: "The two charges" },
      {
        ul: [
          `NZeTA request fee: ${F.feeApp} in the official app, ${F.feeWeb} on the website`,
          `International Visitor Conservation and Tourism Levy (IVL): ${F.ivl}`,
          `Total paid: about ${F.totalApp} (app) or ${F.totalWeb} (website)`,
        ],
      },
      { h2: "What the IVL is" },
      {
        p: `The IVL is not part of the NZeTA. It is a separate levy that funds conservation and tourism infrastructure, and it rose from NZ$35 to ${F.ivl} in October 2024. It is still ${F.ivl} as of ${F.updatedLabel}.`,
      },
      { h2: "Who does not pay the IVL" },
      {
        p: "Some travellers are exempt from the levy — for example Australian citizens and permanent residents, and passengers from most Pacific Island Forum countries. The application asks the questions that determine this; you do not need to claim it separately.",
      },
      {
        note: `If a website quotes only ${F.feeApp}, it is quoting the request fee alone. If it quotes much more than ${F.totalWeb}, the difference is its own service charge.`,
      },
    ],
  },
  {
    slug: "required-documents",
    nav: "What you need",
    title: "What you need to apply for an NZeTA",
    description:
      "A valid passport, a photo of your face, an email address and a payment card. What the photo has to look like and what else is asked.",
    blocks: [
      { p: "The NZeTA application is short. Having these four things ready is enough for most travellers." },
      { h2: "The four essentials" },
      {
        ul: [
          "A passport that is valid for your trip — the authorisation is tied to it",
          "A photo of your face taken during the application",
          "An email address you can access while travelling",
          "A credit or debit card for the payment",
        ],
      },
      { h2: "About the photo" },
      {
        p: "The app takes the photo on the spot. Face the camera straight on, use even lighting, remove hats and sunglasses, and keep the background plain. Photos are rejected far more often for shadows than for anything else.",
      },
      { h2: "Questions you must answer" },
      {
        ul: [
          "Criminal convictions, including sentences served long ago",
          "Whether you have been deported or excluded from any country",
          "Your travel purpose and, for cruise passengers, the ship",
        ],
      },
      {
        note: "Answer honestly. A declaration that needs assessment slows the decision down, but a false declaration can lead to refusal and affects future applications.",
      },
    ],
  },
  {
    slug: "processing-time",
    nav: "Processing time",
    title: `How long does an NZeTA take? Allow up to ${F.decisionTypical}`,
    description:
      `Most NZeTA requests are decided in minutes, but Immigration New Zealand asks you to allow up to ${F.decisionTypical}. What makes an application take longer.`,
    blocks: [
      {
        p: `The official guidance is to allow up to ${F.decisionTypical}. In practice many applications are approved automatically within minutes — but that is not something to plan around.`,
      },
      { h2: "What slows a decision down" },
      {
        ul: [
          "A declared criminal conviction or previous deportation",
          "Details that do not match the passport",
          "A photo that cannot be processed",
          "Applying at a peak time before a holiday period",
        ],
      },
      { h2: "When to apply" },
      {
        p: "Apply as soon as your trip is decided, and before you book anything non-refundable. Airlines check the authorisation electronically at check-in, so there is no way to travel while a decision is pending.",
      },
      {
        note: "No official channel offers a paid express option. Sites advertising faster processing for a fee cannot change the queue.",
      },
    ],
  },
  {
    slug: "validity",
    nav: "Validity",
    title: `How long is an NZeTA valid? ${F.validYears} years, multiple entries`,
    description:
      `An NZeTA lasts ${F.validYears} years from the date it is issued, or until your passport expires — whichever comes first — and allows multiple entries.`,
    blocks: [
      {
        p: `An approved NZeTA is valid for ${F.validYears} years from the date it is issued, or until the passport it is linked to expires, whichever comes first.`,
      },
      { h2: "Multiple entries" },
      {
        p: "Within that period you may enter New Zealand as often as you like. Each visit is subject to the permitted length of stay, and each entry is decided by the border officer.",
      },
      { h2: "A new passport means a new NZeTA" },
      {
        p: "The authorisation is held against the passport you applied with. If you renew your passport, change your name, or travel on a second nationality, you need to apply again — the old NZeTA cannot be transferred.",
      },
      { h2: "Cruise passengers" },
      {
        p: "Cruise passengers need an NZeTA regardless of nationality, and the same validity applies. If your cruise falls near the expiry date, check it before you sail.",
      },
      {
        note: `You can check the status and expiry of an existing NZeTA at any time — see the status check page.`,
      },
    ],
  },
  {
    slug: "length-of-stay",
    nav: "Length of stay",
    title: "How long can you stay in New Zealand on an NZeTA?",
    description:
      `Up to three months per visit for most travellers, and up to ${F.stayUkMonths} months on a UK passport. The border officer decides on arrival.`,
    blocks: [
      {
        p: `The NZeTA itself lasts ${F.validYears} years, but that is not how long you may stay. Most visa-waiver travellers may stay up to three months per visit.`,
      },
      { h2: "The UK exception" },
      {
        p: `Holders of a UK passport with the right of abode in the United Kingdom may stay up to ${F.stayUkMonths} months per visit. This is the single most-missed detail on English-language guides.`,
      },
      { h2: "Conditions that apply to your stay" },
      {
        ul: [
          "You must hold an onward or return ticket",
          "You must have funds to support yourself, or sponsorship",
          "You may not work for a New Zealand employer",
          "Study is limited to a short course",
        ],
      },
      { h2: "The border officer has the final say" },
      {
        p: "An approved NZeTA permits you to travel. The immigration officer at the airport decides whether you may enter and for how long, and may ask about your plans, your accommodation and your funds.",
      },
      {
        note: "Repeated back-to-back visits are noticed. If your pattern of travel looks like living in New Zealand rather than visiting, expect questions.",
      },
    ],
  },
  {
    slug: "status-check",
    nav: "Check your status",
    title: "How to check your NZeTA status",
    description:
      "Where the confirmation is sent, how to check an existing NZeTA, and what to do if the email never arrives.",
    blocks: [
      {
        p: "The decision is sent by email to the address used in the application. There is nothing to print — the authorisation is recorded against your passport.",
      },
      { h2: "If the email has not arrived" },
      {
        ul: [
          "Check the spam or promotions folder first",
          "Confirm the address you typed in the application had no typo",
          "Check the app: an application made there shows its status in the app",
          "Allow the full processing window before assuming something went wrong",
        ],
      },
      { h2: "Checking an older NZeTA" },
      {
        p: `If you applied more than ${F.validYears} years ago, it has expired. If you are unsure whether yours is still valid, the safest check is the official Immigration New Zealand channel — not a third-party site that asks for your passport number.`,
      },
      {
        note: "Be careful where you enter passport details. Only immigration.govt.nz and the official app are genuine channels.",
      },
    ],
  },
  {
    slug: "faq",
    nav: "FAQ",
    title: "NZeTA: frequently asked questions",
    description:
      "Short answers to the questions travellers ask most about the New Zealand Electronic Travel Authority.",
    blocks: [
      { h2: `Is the NZeTA really ${F.totalApp}?` },
      {
        p: `The request fee is ${F.feeApp} in the app or ${F.feeWeb} online, and the ${F.ivl} IVL is charged at the same time — so most travellers pay about ${F.totalApp}–${F.totalWeb} in total.`,
      },
      { h2: "Is the app cheaper than the website?" },
      { p: `Yes, by NZ$6, for exactly the same authorisation.` },
      { h2: "Do children need their own NZeTA?" },
      { p: "Yes. Every traveller needs one, including infants, on their own passport." },
      { h2: "Do I need one to transit?" },
      { p: "Most passengers transiting through Auckland do need an NZeTA, even without leaving the airport." },
      { h2: "I have a new passport — is my NZeTA still valid?" },
      { p: "No. It is linked to the old passport. Apply again with the new one." },
      { h2: "Does an NZeTA guarantee entry?" },
      { p: "No. It permits travel; entry is decided by the border officer on arrival." },
      { h2: "Can I work in New Zealand on an NZeTA?" },
      { p: "No. Business visitor activities such as meetings and conferences are allowed, but not employment with a New Zealand employer." },
    ],
  },
  {
    slug: "about",
    nav: "About this guide",
    title: "About this guide",
    description:
      "Who runs this independent guide to the New Zealand Electronic Travel Authority, and what we do not do.",
    blocks: [
      { h2: "An independent guide" },
      {
        p: "This site explains the New Zealand Electronic Travel Authority in plain English. It is not a government website and is not affiliated with Immigration New Zealand or the New Zealand Government. Published by MediaX Co., Ltd. (Japan). Contact: webmaster@mediax.biz",
      },
      { h2: "What we do not do" },
      {
        ul: [
          "We do not submit applications or accept application fees",
          "We do not collect passport details",
          "We do not provide legal or immigration advice",
        ],
      },
      { h2: "How the figures are checked" },
      {
        p: `Fees, validity and processing times are taken from Immigration New Zealand's published information and are stated as of ${F.updatedLabel}. Immigration rules change; the official site is always the authority. If you find an error, tell us and we will correct it.`,
      },
    ],
  },
  {
    slug: "privacy",
    nav: "Privacy",
    title: "Privacy policy",
    description: "What data this site processes, why, and the rights you have.",
    blocks: [
      { h2: "In short" },
      {
        p: "This is a static information site. There is no registration, nothing is sold, and we never ask for passport details. Personal data is processed only as far as running the site technically requires.",
      },
      { h2: "Server logs" },
      {
        p: "The site is served through Cloudflare Pages. Requests are logged with technical details such as IP address, time, requested address and browser information, to keep the site available and to defend against attacks.",
      },
      { h2: "Cookies and analytics" },
      {
        p: "We set no advertising cookies and embed no third-party tracking scripts. If audience measurement is added later, this page will say so before it goes live.",
      },
      { h2: "External links" },
      {
        p: "We link to official government pages. Those sites are governed by their own privacy policies.",
      },
      { h2: "Your rights" },
      {
        ul: [
          "Access to the personal data held about you",
          "Correction of inaccurate data",
          "Erasure, where no retention duty applies",
          "Restriction of processing and objection",
          "Complaint to a supervisory authority",
        ],
      },
      { p: "For privacy enquiries, contact webmaster@mediax.biz." },
    ],
  },
  {
    slug: "terms",
    nav: "Terms",
    title: "Terms of use",
    description: "The conditions that apply when you use the information on this site.",
    blocks: [
      { h2: "Purpose" },
      {
        p: "The content of this site is general information about the New Zealand Electronic Travel Authority. It is not legal or immigration advice and creates no advisory relationship.",
      },
      { h2: "We do not process applications" },
      {
        p: "We are neither an agency nor a government body. Applications are made only through Immigration New Zealand's official app and website. We receive no applications, fees or passport data.",
      },
      { h2: "Liability" },
      {
        p: "We take care to keep the information accurate and current but cannot guarantee that it is complete or error-free. Liability for loss arising from use of this information is limited to intent and gross negligence.",
      },
      { h2: "Copyright" },
      {
        p: "The text and design of this site are protected by copyright. Reproducing whole pages is not permitted; short quotations with a source and link are welcome.",
      },
      { h2: "Changes" },
      {
        p: "These terms may be updated when the site or the legal requirements change. The version published on this page applies.",
      },
    ],
  },
];

export const PAGE_SLUGS = PAGES.map((p) => p.slug);
