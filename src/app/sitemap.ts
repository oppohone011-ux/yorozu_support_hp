import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getBlogPosts, isBlogConfigured } from "@/lib/microcms";

/**
 * sitemap.xml（/sitemap.xml で自動配信）。
 * 固定ページを追加したら（/pricing, /works 等）ここにも1件足すこと。
 * ブログ記事は microCMS から自動で載る。
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = isBlogConfigured() ? await getBlogPosts(100) : [];

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${site.url}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.id}`,
      lastModified: new Date(post.revisedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
