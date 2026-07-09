import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** robots.txt（/robots.txt で自動配信）。全ページクロール許可＋sitemapの場所を通知。 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
