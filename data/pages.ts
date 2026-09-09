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
  | { note: string }
  /** 出典リンク。数値・罰則を書いたページには必ず添える（読者が一次情報を辿れるように） */
  | { source: { label: string; url: string } };

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
      { h2: "The limit most guides leave out" },
      {
        // ⚠️ 「3か月」だけを書くと「出入国を繰り返せば無限に居られる」と誤解させる。
        //    実際の上限は12か月中6か月。ここを落とさない（2026-09-05 公式で確認）。
        p: `Three months is the per-visit limit. Separately, you may only visit New Zealand for up to ${F.stayMaxInTwelveMonths} months in any ${2 * F.stayMaxInTwelveMonths}-month period. Leaving the country and coming back does not create new time — it only splits the time you already have.`,
      },
      { h2: "Conditions that apply to your stay" },
      {
        ul: [
          "You must hold an onward or return ticket",
          `You must have funds to support yourself — ${F.fundsPerMonth} per month, or ${F.fundsPerMonthPrepaid} per month if your accommodation is already paid for`,
          `Your passport must be valid for at least ${F.passportValidityMonths} months after you plan to leave`,
          "You may not work for a New Zealand employer",
          `Study is limited to ${F.studyMonthsInTwelveMonths} months in any ${2 * F.stayMaxInTwelveMonths}-month period`,
        ],
      },
      { source: { label: "Immigration New Zealand — Visa Waiver Visitor Visa", url: "https://www.immigration.govt.nz/visas/visa-waiver-visitor-visa/" } },
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
    slug: "six-months-in-12-months",
    nav: "6 months in any 12",
    title: "The rule that really limits your stay: 6 months in any 12-month period",
    description:
      "Three months per visit is not the whole story. Visa-waiver travellers may spend at most six months in New Zealand in any twelve-month period, however many trips that takes.",
    blocks: [
      {
        p: `Most guides stop at "three months per visit". That is correct, but it is not the limit that catches people out. Immigration New Zealand also caps the total: you may only visit New Zealand for up to ${F.stayMaxInTwelveMonths} months in any ${2 * F.stayMaxInTwelveMonths}-month period.`,
      },
      { h2: "Why both numbers exist" },
      {
        p: `The per-visit limit controls how long one entry can last: ${F.stayMonths} months for most passports, ${F.stayUkMonths} months on a UK passport. The ${F.stayMaxInTwelveMonths}-months-in-${2 * F.stayMaxInTwelveMonths} rule controls how much of the year you may spend in the country in total. You have to satisfy both.`,
      },
      { h2: "What this means in practice" },
      {
        ul: [
          `Two separate three-month visits in one year put you at the ${F.stayMaxInTwelveMonths}-month ceiling`,
          "A UK passport holder reaches the ceiling in a single six-month visit",
          "The period is rolling, not a calendar year — it is measured backwards from the day you want to arrive",
        ],
      },
      { h2: "If you have already used your six months" },
      {
        p: "Immigration New Zealand is explicit about this: if you have already spent six months in New Zealand in a 12-month period, you must apply for a visitor visa before you travel. Arriving on an NZeTA instead is not an option, and the decision is made before you board.",
      },
      { source: { label: "Immigration New Zealand — Visa Waiver Visitor Visa", url: "https://www.immigration.govt.nz/visas/visa-waiver-visitor-visa/" } },
      {
        note: "An approved NZeTA does not override this. It authorises you to travel; it does not confirm that you are still within the six-month allowance.",
      },
    ],
  },
  {
    slug: "leaving-and-returning",
    nav: "Leaving and returning",
    title: "Does leaving New Zealand and coming back reset your three months?",
    description:
      "A short trip to Australia and back does not give you a fresh three months. Here is what actually resets, what does not, and why repeated entries attract questions.",
    blocks: [
      {
        p: "This is the most common misunderstanding about visa-waiver travel to New Zealand. The short answer is no: hopping over to Australia or the Pacific and returning does not hand you a clean three months.",
      },
      { h2: "What resets and what does not" },
      {
        ul: [
          `The per-visit clock does restart — a new entry is a new visit of up to ${F.stayMonths} months`,
          `The annual total does not — you are still capped at ${F.stayMaxInTwelveMonths} months in any ${2 * F.stayMaxInTwelveMonths}-month period`,
          `Your NZeTA is unaffected either way: it lasts ${F.validYears} years and covers multiple entries`,
        ],
      },
      {
        p: `So the trip out does not create new time. It only splits the time you already have into separate visits. If you have used four months of your ${F.stayMaxInTwelveMonths}, leaving and returning leaves you with two.`,
      },
      { h2: "The pattern matters as much as the arithmetic" },
      {
        p: "Immigration officers look at the shape of your travel, not just each entry in isolation. Someone who leaves for three days every three months and spends the rest of the year in New Zealand is living there, not visiting, whatever the stamps say. Expect to be asked about your ties to your home country, your work, and how you are funding a long stay.",
      },
      { h2: "What to carry if you are re-entering" },
      {
        ul: [
          "Your onward or return ticket",
          `Evidence of funds — ${F.fundsPerMonth} per month, or ${F.fundsPerMonthPrepaid} per month if your accommodation is already paid for`,
          "Something that shows you are going home: a job, a lease, enrolment, family commitments",
        ],
      },
      { source: { label: "Immigration New Zealand — Visa Waiver Visitor Visa", url: "https://www.immigration.govt.nz/visas/visa-waiver-visitor-visa/" } },
      {
        note: "If your plan genuinely needs more than six months in the year, apply for a visitor visa before you travel rather than relying on repeated entries.",
      },
    ],
  },
  {
    slug: "extending-your-stay",
    nav: "Extending your stay",
    title: "Can you extend a visa-waiver stay in New Zealand?",
    description:
      "The NZeTA itself cannot be extended. What you can do is apply for a visitor visa from inside New Zealand — and the timing of that application matters.",
    blocks: [
      {
        p: `The NZeTA is not a visa and has no extension mechanism. Your ${F.validYears}-year authorisation is about permission to board, not permission to stay longer. To remain beyond your visa-waiver entry you need a different immigration status: a visitor visa.`,
      },
      { h2: "Apply before your current stay expires" },
      {
        p: "An application made while you are still lawfully in New Zealand is treated very differently from one made after your permitted stay has ended. Once you overstay you are unlawfully in the country, which affects future applications to New Zealand and can affect other countries too. Do not let the date pass while you decide.",
      },
      { h2: "The six-month ceiling still applies" },
      {
        p: `A visitor visa is also subject to the overall limit on visitor time. Immigration New Zealand's guidance is that visitors may only be in New Zealand for up to ${F.stayMaxInTwelveMonths} months in any ${2 * F.stayMaxInTwelveMonths}-month period, and a longer stay needs to be justified on its own terms.`,
      },
      { h2: "What a visitor visa asks for that an NZeTA does not" },
      {
        ul: [
          "Evidence of funds for the whole extended period",
          "A reason for the longer stay that is consistent with visiting",
          "Evidence that you intend to leave — ties to your home country",
          "In some cases, medical or character documentation",
        ],
      },
      { h2: "What an extension will not give you" },
      {
        ul: [
          "The right to work for a New Zealand employer",
          `Unlimited study — study on a visitor status is limited to ${F.studyMonthsInTwelveMonths} months in any ${2 * F.stayMaxInTwelveMonths}-month period`,
          "Residence, or a path to it",
        ],
      },
      { source: { label: "Immigration New Zealand — Visa Waiver Visitor Visa", url: "https://www.immigration.govt.nz/visas/visa-waiver-visitor-visa/" } },
      {
        note: "Applications are made only through Immigration New Zealand. No third party can extend a stay on your behalf, and no paid service speeds the decision up.",
      },
    ],
  },
  {
    slug: "passport-validity",
    nav: "Passport validity",
    title: "How much passport validity do you need for New Zealand?",
    description:
      `Your passport must be valid for at least ${F.passportValidityMonths} months after you plan to leave New Zealand — not after you arrive. Renewing mid-trip also invalidates your NZeTA.`,
    blocks: [
      {
        p: `Immigration New Zealand requires your passport to be valid for at least ${F.passportValidityMonths} months after the date you plan to leave New Zealand. Read that carefully: the count runs from your departure, not your arrival. A passport that expires four months after you land can still fail if you are staying three months.`,
      },
      { h2: "Work it out from the end of the trip" },
      {
        ul: [
          "Take your planned departure date from New Zealand",
          `Add ${F.passportValidityMonths} months`,
          "Your passport must still be valid on that date",
        ],
      },
      { h2: "A new passport means a new NZeTA" },
      {
        p: `The NZeTA is linked electronically to the passport used in the application. If you renew your passport, the authorisation does not transfer — even though it would otherwise still be within its ${F.validYears} years. You must request a new one before you travel.`,
      },
      { h2: "Travel on the passport you applied with" },
      {
        p: "If you hold more than one nationality, the passport you present at check-in must be the one your NZeTA is attached to. Dual nationals are refused boarding for this reason more often than for any problem with the authorisation itself.",
      },
      { source: { label: "Immigration New Zealand — Visa Waiver Visitor Visa", url: "https://www.immigration.govt.nz/visas/visa-waiver-visitor-visa/" } },
      {
        note: "Damaged passports are a separate risk. A water-damaged or torn biodata page can be refused even when the expiry date is fine, and the chip may fail to read in the NZeTA app.",
      },
    ],
  },
  {
    slug: "traveller-declaration",
    nav: "Traveller Declaration",
    title: "The New Zealand Traveller Declaration: what it is and when to file it",
    description:
      `Everyone arriving in New Zealand must complete a Traveller Declaration, including New Zealand passport holders. It is free and opens ${F.nztdHoursBefore} hours before you travel.`,
    blocks: [
      {
        p: `New Zealand collects its arrival information through the New Zealand Traveller Declaration (NZTD). Everyone travelling into New Zealand must complete one — including New Zealand passport holders. It is free.`,
      },
      { h2: "When you can submit it" },
      {
        ul: [
          `Flying: from ${F.nztdHoursBefore} hours before you start your trip to New Zealand`,
          `By sea: from ${F.nztdHoursBefore} hours before the vessel leaves its last foreign port`,
        ],
      },
      {
        p: "Doing it before you fly is easier than filling in a paper declaration on board, and it means you are not trying to recall an address or a flight number while queuing.",
      },
      { h2: "What it asks for" },
      {
        ul: [
          "Passport details and your contact address in New Zealand",
          "Travel details and where you have been in the last 30 days",
          "Your visa or NZeTA status",
          "Your customs and biosecurity declarations",
        ],
      },
      { h2: "It is not the same thing as an NZeTA" },
      {
        p: `The NZeTA is requested once and lasts ${F.validYears} years. The Traveller Declaration is completed for every arrival. Having one does not replace the other, and the declaration is free while the NZeTA is not.`,
      },
      { source: { label: "New Zealand Traveller Declaration", url: "https://www.travellerdeclaration.govt.nz/" } },
      {
        note: `A false or incorrect declaration carries an instant fine of ${F.biosecurityInstantFine}. If you are unsure whether something needs declaring, declare it — there is no penalty for declaring an item that turns out to be fine.`,
      },
    ],
  },
  {
    slug: "biosecurity",
    nav: "Biosecurity",
    title: "New Zealand biosecurity: what you must declare, and the fine if you do not",
    description:
      `Failing to declare risk goods is an instant ${F.biosecurityInstantFine} fine even when it is an honest mistake. Deliberate smuggling carries up to ${F.biosecurityMaxFine} and ${F.biosecurityMaxPrisonYears} years in prison.`,
    blocks: [
      {
        p: "New Zealand's economy rests on agriculture and its ecosystems evolved in isolation, so its biosecurity controls are among the strictest anywhere. Travellers who arrive expecting European or North American norms are the ones who get fined.",
      },
      { h2: "This is a strict liability offence" },
      {
        p: `Under the Biosecurity Act 1993, failing to declare risk goods you have with you is an offence whether or not you meant to. Forgetting an apple in your bag is treated the same as hiding one. The penalty is an instant infringement fee of ${F.biosecurityInstantFine}.`,
      },
      {
        p: `Deliberately concealing items is a different matter: a maximum fine of ${F.biosecurityMaxFine} and up to ${F.biosecurityMaxPrisonYears} years' imprisonment.`,
      },
      { h2: "What people are actually caught with" },
      {
        ul: [
          "Food of any kind — fruit, meat, dairy, honey, snacks from the plane",
          "Plant material — seeds, wooden souvenirs, woven items, flowers",
          "Hiking boots and tent pegs with soil still on them",
          "Camping and fishing gear, and anything used around animals",
        ],
      },
      { h2: "The rule that keeps you safe" },
      {
        p: "Declaring costs nothing. If you declare an item and it turns out to be permitted, you keep it and walk on. If you fail to declare it and it is found, the fine applies even if the item itself would have been allowed through. When in doubt, tick yes.",
      },
      { h2: "Before you pack" },
      {
        ul: [
          "Clean the soil off boots, tent pegs and sports equipment at home",
          "Eat or bin food before you land rather than carrying it through",
          "Check wooden and woven souvenirs — they are risk goods, not curios",
        ],
      },
      { source: { label: "Ministry for Primary Industries — What happens if you fail to declare", url: "https://www.mpi.govt.nz/bring-send-to-nz/bringing-and-posting-items-to-nz/what-happens-if-you-fail-to-declare" } },
      {
        note: "Bins are provided before the biosecurity queue. Using one is free; being found with the item afterwards is not.",
      },
    ],
  },
  {
    slug: "customs-allowances",
    nav: "Customs allowances",
    title: "New Zealand customs allowances: goods, alcohol, tobacco and cash",
    description:
      `Goods over ${F.customsGoodsAllowance}, more than ${F.customsCigarettes} cigarettes, and cash of ${F.customsCashThreshold} or more all have to be declared on arrival.`,
    blocks: [
      {
        p: "Customs and biosecurity are separate checks with separate rules. Biosecurity is about what could harm New Zealand's environment; customs is about duty, GST and prohibited goods. You can clear one and be stopped by the other.",
      },
      { h2: "Goods you bought overseas" },
      {
        p: `You must declare goods totalling more than ${F.customsGoodsAllowance} that you obtained overseas or bought duty-free, gifts included. Travelling companions cannot pool their allowances into one larger figure.`,
      },
      { h2: "Alcohol and tobacco" },
      {
        ul: [
          `You must be ${F.customsAlcoholAgeMin} or over to claim the alcohol and tobacco concessions`,
          `Alcohol: more than ${F.customsSpiritsBottles} bottles of spirits (each up to 1.125 litres) and ${F.customsWineBeerLitres} litres of wine or beer must be declared`,
          `Tobacco: more than ${F.customsCigarettes} cigarettes or ${F.customsCigarettes} grams of tobacco products must be declared`,
        ],
      },
      { h2: "Cash" },
      {
        p: `Carrying ${F.customsCashThreshold} or more — or the equivalent in another currency — has to be declared. This includes travellers cheques, bank drafts and money orders, not only banknotes. Declaring it is not a problem; failing to is.`,
      },
      { h2: "What it costs to get this wrong" },
      {
        p: `A false or incorrect declaration carries an instant fine of ${F.biosecurityInstantFine}, the same figure that applies to undeclared biosecurity risk goods.`,
      },
      { source: { label: "New Zealand Customs Service — On your arrival", url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/on-your-arrival" } },
      {
        note: "Duty-free purchased on your way into New Zealand still counts towards the goods allowance. Buying it airside does not exempt it.",
      },
    ],
  },
  {
    slug: "medicines",
    nav: "Bringing medicines",
    title: "Bringing prescription medicines into New Zealand",
    description:
      `You may bring up to ${F.medsMonthsPrescription} months' supply of prescription medicine, but only ${F.medsMonthsControlled} month if it is a controlled drug. Both need documentation, and both must be declared.`,
    blocks: [
      {
        p: "New Zealand treats medicine you bring for your own use as an import, and the rules differ depending on what the medicine is. Getting this wrong is one of the few ways an otherwise straightforward arrival turns into a long conversation at the border.",
      },
      { h2: "The two limits" },
      {
        ul: [
          `Prescription medicines: up to ${F.medsMonthsPrescription} months' supply`,
          `Oral contraceptives: up to ${F.medsMonthsContraceptive} months' supply`,
          `Medicines that are also controlled drugs: only ${F.medsMonthsControlled} month's supply`,
        ],
      },
      {
        p: "The controlled-drug category is where people get caught. Strong painkillers, some ADHD medicines and some sleep medicines fall into it even when they are entirely ordinary prescriptions at home.",
      },
      { h2: "What you must carry" },
      {
        ul: [
          "A copy of the prescription, or a letter from your doctor saying you are being treated with the medicine",
          "The medicine in its original labelled containers — not a pill organiser",
          "For controlled drugs, the letter should state the name and strength of the medicine",
        ],
      },
      { h2: "Declare it" },
      {
        p: "Medicines are declared on your New Zealand Traveller Declaration. Controlled drugs must be declared. Declaring is not a problem; arriving with an undeclared controlled drug is.",
      },
      { source: { label: "Ministry of Health / Medsafe — Bringing medicines into New Zealand", url: "https://www.health.govt.nz/regulation-legislation/medicines-control/bringing-medicines-into-new-zealand" } },
      { source: { label: "New Zealand Customs Service — Medicines", url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/medicines" } },
      {
        note: "If your trip is longer than the supply limit allows, arrange treatment in New Zealand rather than carrying extra. Bringing more than the permitted quantity is an import, not a personal supply.",
      },
    ],
  },
  {
    slug: "transit",
    nav: "Transit through Auckland",
    title: "Do you need an NZeTA just to change planes in Auckland?",
    description:
      "Most passengers transiting through Auckland need an NZeTA even though they never leave the airport. This is the single most missed requirement for New Zealand.",
    blocks: [
      {
        p: "Yes, in most cases. Transit is the requirement travellers overlook, because in many countries changing planes needs nothing at all. New Zealand is not one of them: most passengers transiting through Auckland International Airport need an NZeTA.",
      },
      { h2: "Why this catches people out" },
      {
        ul: [
          "You are not entering the country, so it does not feel like it should need permission",
          "The requirement is checked at your departure airport, not on arrival",
          "Airlines refuse boarding without it — the trip ends before it starts",
        ],
      },
      { h2: "What to do" },
      {
        p: `Request the NZeTA before you fly, the same as any other traveller: ${F.feeApp} in the official app or ${F.feeWeb} on the Immigration New Zealand website, and allow for the ${F.decisionTypical} that a decision usually takes.`,
      },
      { h2: "The levy question" },
      {
        p: `The International Visitor Conservation and Tourism Levy (${F.ivl}) is charged with the NZeTA. Whether it applies to your particular transit is worth checking on the official page before you assume either way.`,
      },
      { source: { label: "Immigration New Zealand — NZeTA", url: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/" } },
      {
        note: "If your itinerary changes and you now have a longer stopover that takes you out of the airport, you are no longer transiting — you are visiting, and the visitor conditions apply.",
      },
    ],
  },
  {
    slug: "cruise-passengers",
    nav: "Cruise passengers",
    title: "Cruise passengers need an NZeTA — regardless of nationality",
    description:
      "The visa-waiver list does not apply to cruise arrivals. Every cruise passenger needs an NZeTA, including nationalities that would otherwise need a visa.",
    blocks: [
      {
        p: "This is the rule that works the opposite way from what people expect. For air travel, the NZeTA is only for visa-waiver passports. For cruise passengers, it applies to everyone — whatever passport you hold.",
      },
      { h2: "Why it is different" },
      {
        p: "A cruise ship calls at several ports over a few days. Rather than assessing each passenger at each port, New Zealand requires the authorisation in advance from every passenger, and the ship's arrival is processed as a whole.",
      },
      { h2: "What this means in practice" },
      {
        ul: [
          "Every passenger needs their own NZeTA, including infants",
          "Nationality does not exempt you — the visa-waiver list is not the test here",
          "Request it before you board, not at the first New Zealand port",
        ],
      },
      { h2: "Do not rely on the cruise line" },
      {
        p: "Some lines remind passengers and some do not, and the responsibility is yours either way. Being refused boarding at the start of a cruise is a worse outcome than being turned back at an airport, because the ship leaves without you.",
      },
      { source: { label: "Immigration New Zealand — NZeTA", url: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/" } },
      {
        note: `The authorisation lasts ${F.validYears} years, so one request covers repeat cruises within that period — as long as you still hold the same passport.`,
      },
    ],
  },
  {
    slug: "if-declined",
    nav: "If you are declined",
    title: "What happens if your NZeTA is declined",
    description:
      "A declined NZeTA is not the end of the trip, but reapplying with the same details will not change the outcome. Here is what actually comes next.",
    blocks: [
      {
        p: "Most NZeTA requests are approved automatically. When one is not, it is either referred for a manual check — which simply takes longer — or declined. The two are different, and the response to each is different.",
      },
      { h2: "First, check which one it is" },
      {
        ul: [
          `Still processing: decisions usually take ${F.decisionTypical}, and some take longer. Wait rather than reapplying`,
          "Declined: you have been assessed and refused. Requesting another NZeTA with the same information will produce the same answer",
        ],
      },
      { h2: "Why NZeTAs are declined" },
      {
        ul: [
          "Your passport is not eligible for the visa-waiver arrangement",
          "Details entered do not match the passport",
          "Character or immigration history questions that need a full assessment",
          "You have already used your allowance of visitor time",
        ],
      },
      { h2: "What to do instead" },
      {
        p: "If the reason is a data-entry error, correcting it and requesting again is legitimate. If the reason is that you are not eligible for the NZeTA, the route is a visitor visa, which is a fuller application assessed by a person. Do not keep submitting NZeTA requests in the hope of a different result — the pattern itself becomes part of your record.",
      },
      { h2: "Do not use a third party to 'fix' it" },
      {
        p: `No agent has influence over the decision, and none can appeal it for you. Applications are made only through Immigration New Zealand, at ${F.feeApp} in the app or ${F.feeWeb} on the website.`,
      },
      { source: { label: "Immigration New Zealand — NZeTA", url: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/" } },
      {
        note: "An approved NZeTA is still not a guarantee of entry. The border officer decides on arrival, and being refused entry is a separate outcome from being declined an NZeTA.",
      },
    ],
  },
  {
    slug: "dual-nationals",
    nav: "Dual nationals",
    title: "Which passport should a dual national use for the NZeTA?",
    description:
      "The NZeTA is linked to one passport, and you must travel on that passport. Holding a second nationality is not a problem — presenting the wrong document at check-in is.",
    blocks: [
      {
        p: "The rule is short: the NZeTA is attached electronically to the passport used in the request, and you must travel on that passport. Everything else follows from that.",
      },
      { h2: "Choosing which passport" },
      {
        ul: [
          "It must be a passport from a visa-waiver country or territory — otherwise the NZeTA is not available on that document",
          "If only one of your passports is eligible, that is the one to use",
          "If both are eligible, use the one you will actually be carrying and checking in with",
        ],
      },
      { h2: "Where it goes wrong" },
      {
        p: "Dual nationals are refused boarding for this more often than for any problem with the authorisation itself. The airline checks the passport in your hand against the record. If the NZeTA is attached to your other passport, the system finds nothing, and nothing is what the check-in agent acts on.",
      },
      { h2: "If you renew one of them" },
      {
        p: `A new passport means a new NZeTA, even though the authorisation would otherwise last ${F.validYears} years. This applies to whichever passport the NZeTA is attached to.`,
      },
      { h2: "New Zealand citizens" },
      {
        p: "If one of your nationalities is New Zealand, you travel on your New Zealand passport and do not need an NZeTA at all. Requesting one on your other passport does not change that.",
      },
      { source: { label: "Immigration New Zealand — NZeTA", url: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/" } },
    ],
  },
  {
    slug: "children-and-infants",
    nav: "Children and infants",
    title: "Do children and babies need their own NZeTA?",
    description:
      "Yes. Every traveller needs an NZeTA in their own name, including infants who are travelling on a parent's lap and do not have their own seat.",
    blocks: [
      {
        p: "Yes — every traveller needs one, including infants. There is no family application and no way to add a child to a parent's authorisation. Each person has their own passport, so each person has their own NZeTA.",
      },
      { h2: "This includes" },
      {
        ul: [
          "Babies travelling on a parent's lap without their own seat",
          "Children on a parent's itinerary but with their own passport",
          "Cruise passengers of any age",
        ],
      },
      { h2: "Applying for a child" },
      {
        ul: [
          "Use the child's own passport details, not a parent's",
          "The photo requirements apply to children too — this is where infant applications are most often rejected",
          `Each application costs ${F.feeApp} in the app or ${F.feeWeb} on the website, plus the ${F.ivl} levy where it applies`,
        ],
      },
      { h2: "Budget for the whole family" },
      {
        p: `A family of four is four separate requests and four levies. Using the app for each saves the difference between ${F.feeApp} and ${F.feeWeb} per person, which adds up.`,
      },
      { h2: "Children's passports expire sooner" },
      {
        p: `Children's passports are issued for shorter periods than adults'. An NZeTA lasts ${F.validYears} years, but a child's passport may expire before that — and when it does, the NZeTA stops working. Check the expiry date before assuming last year's authorisation still covers this year's trip.`,
      },
      { source: { label: "Immigration New Zealand — Visa Waiver Visitor Visa", url: "https://www.immigration.govt.nz/visas/visa-waiver-visitor-visa/" } },
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
