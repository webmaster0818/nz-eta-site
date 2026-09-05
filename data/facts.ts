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

  /* ── 入国・滞在の実務（2026-09-05 公式で裏取り。出典は各ページに明記する） ──
     ⚠️ 罰金額と滞在ルールは間違えると読者に実害が出る。必ず一次情報を確認してから変えること。 */

  /** 「3か月まで」の裏にある本当の上限。12か月のうち合計6か月まで。
   *  ⚠️ これを落とすと「出入国を繰り返せば無限に居られる」と誤解させる。
   *  出典: immigration.govt.nz Visa Waiver Visitor Visa */
  stayMonths: 3,
  stayMaxInTwelveMonths: 6,
  /** パスポートは「出国予定日」から3か月以上の残存が必要（入国日からではない） */
  passportValidityMonths: 3,
  /** 滞在資金の目安。宿泊費を支払い済みなら低いほうが適用される */
  fundsPerMonth: "NZD $1,000",
  fundsPerMonthPrepaid: "NZD $400",
  /** ビザ免除での就学は12か月のうち3か月まで */
  studyMonthsInTwelveMonths: 3,

  /** 生物検疫（MPI）: 申告漏れは故意でなくても即時反則金。Biosecurity Act 1993 s154N(21) */
  biosecurityInstantFine: "NZD $400",
  biosecurityMaxFine: "NZD $100,000",
  biosecurityMaxPrisonYears: 5,

  /** 税関（NZ Customs）の免税範囲。超えたら申告が必要 */
  customsGoodsAllowance: "NZD $700",
  customsCashThreshold: "NZD $10,000",
  customsCigarettes: 50,
  customsSpiritsBottles: 3,
  customsWineBeerLitres: 4.5,
  customsAlcoholAgeMin: 17,

  /** New Zealand Traveller Declaration（NZTD）: 全員必須・無料・出発24時間前から */
  nztdHoursBefore: 24,
  nztdUrl: "https://www.travellerdeclaration.govt.nz/",
  /** ISOで持つ。⚠️ 画面には英語圏で自然な "17 August 2026" 形式で出す（updatedLabel） */
  updated: "2026-08-17",
  updatedLabel: "17 August 2026",
  /** 申請先。公式以外に窓口は無いので、CTAは全部ここを指す */
  officialUrl:
    "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
} as const;

/** canonical・OG・sitemap で使う本番URL（2026-08-17 okina取得）。 */
export const SITE = "https://nzeta-online.com";
