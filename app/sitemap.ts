import type { MetadataRoute } from "next";
import { SITE } from "@/data/facts";
import { PAGE_SLUGS } from "@/data/pages";

/** ⚠️ output:"export" では必須。無いと「dynamic not configured」でビルドが落ちる。 */
export const dynamic = "force-static";

/**
 * sitemap。⚠️ 以前はテンプレ由来の public/sitemap.xml が置かれており、
 *    **別サイト（eta-pl.com）のURL**を配信していた。SITEから生成する形に変えて再発を防ぐ。
 * ⚠️ 下層ページを作ったらここに足す（作っていないURLを載せない）。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const d = new Date("2026-08-19");
  return [
    { url: `${SITE}/`, lastModified: d, changeFrequency: "weekly", priority: 1 },
    ...PAGE_SLUGS.map((slug) => ({
      url: `${SITE}/${slug}/`,
      lastModified: d,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
