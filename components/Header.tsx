import Link from "next/link";

/** ヘッダー。まだTOPのみの段階なので、下層ページのリンクは増やさない。
    ⚠️ リンク先の無いメニューを並べると404を作るので、ページを作った分だけ足す。 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: "var(--color-navy)", borderBottom: "3px solid var(--color-red)" }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <span className="block text-lg font-bold" style={{ color: "#fff", fontFamily: "var(--font-noto-serif), serif" }}>
            NZeTA Guide
          </span>
          <span className="block text-[10px] tracking-wide" style={{ color: "rgba(255,255,255,.7)" }}>
            New Zealand Electronic Travel Authority
          </span>
        </Link>
        <a
          href="https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
          style={{ padding: ".6rem 1.2rem" }}
        >
          Official site
        </a>
      </div>
    </header>
  );
}
