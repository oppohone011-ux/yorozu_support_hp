import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts, isBlogConfigured, formatDate } from "@/lib/microcms";
import { blogTeaser } from "@/data/blog";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "ブログ・お知らせ",
  description:
    "唐津よろずサポートのブログ・お知らせ。地元での活動や、パソコン・AI・バドミントンのお役立ち情報を発信します。",
};

// microCMS更新を10分ごとに反映（ISR）
export const revalidate = 600;

/** ブログ一覧ページ。microCMS未設定・記事0件のときは準備中表示。 */
export default async function BlogPage() {
  const posts = isBlogConfigured() ? await getBlogPosts(30) : [];

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="ブログ・お知らせ"
          title="ブログ・お知らせ"
          lead="地元での活動や、暮らしに役立つ情報を発信しています。"
        />

        {posts.length === 0 ? (
          /* 準備中（microCMS未設定 or 記事なし） */
          <div className="blog-empty">
            <p className="blog-empty__title">記事は準備中です</p>
            <p className="blog-empty__lead">{blogTeaser.lead}</p>
            <ul className="blog-topics">
              {blogTeaser.plannedTopics.map((topic) => (
                <li className="blog-topic" key={topic}>
                  📝 {topic}
                </li>
              ))}
            </ul>
            <p className="blog-empty__back">
              <Link href="/">← トップページへ戻る</Link>
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.id}>
                <Link href={`/blog/${post.id}`} className="blog-card__link">
                  <div className="blog-card__eyecatch">
                    {post.eyecatch ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`${post.eyecatch.url}?w=640&fm=webp`}
                        alt=""
                        loading="lazy"
                      />
                    ) : (
                      <span className="blog-card__no-image" aria-hidden="true">
                        📝
                      </span>
                    )}
                  </div>
                  <div className="blog-card__body">
                    <p className="blog-card__meta">
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                      {post.category?.name && (
                        <span className="blog-card__category">
                          {post.category.name}
                        </span>
                      )}
                    </p>
                    <h2 className="blog-card__title">{post.title}</h2>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
