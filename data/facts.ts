/**
 * NZeTA の事実。ページ側に数値を直書きしない。
 *
 * ⚠️ 数値は必ず一次情報で裏を取ってから変える。
 *    IVL（International Visitor Conservation and Tourism Levy）は
 *    2024年10月に NZ$35 → NZ$100 へ改定され、2026年8月時点も NZ$100。
 *    ⚠️ NZeTA の申請料と IVL は別物で、合算が実質の支払額になる。
 *       分けて書かないと「NZ$17で行ける」と誤解させる。
 */
export const FACTS = {
  feeApp: "NZ$17",
  feeWeb: "NZ$23",
  ivl: "NZ$100",
  totalApp: "NZ$117",
  totalWeb: "NZ$123",
  validYears: 2,
  stayDays: 90,
  /** ⚠️ 英国パスポート保持者だけ滞在上限が6か月（他は3か月）。
   *     英語サイトは英国からの読者が多いので、この例外を落とさない。 */
  stayUkMonths: 6,
  decisionTypical: "72 hours",
  /** ISOで持つ。⚠️ 画面には英語圏で自然な "17 August 2026" 形式で出す（updatedLabel） */
  updated: "2026-08-17",
  updatedLabel: "17 August 2026",
  /** 申請先。公式以外に窓口は無いので、CTAは全部ここを指す */
  officialUrl:
    "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
} as const;

/** ⚠️ ドメイン未確定。決まり次第ここだけ差し替える（canonical/OGで使う）。 */
export const SITE = "https://example.invalid";
