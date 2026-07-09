import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBlogPost,
  getBlogPosts,
  isBlogConfigured,
  formatDate,
  extractDescription,
} from "@/lib/microcms";
import { Container } from "@/components/ui/Container";

// microCMS更新を10分ごとに反映（ISR）
export const revalidate = 600;

type Props = { params: Promise<{ id: string }> };

/** ビルド時に既存記事を静的生成（新規記事はアクセス時に生成） */
export async function generateStaticParams() {
  if (!isBlogConfigured()) return [];
  const posts = await getBlogPosts(100);
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPost(id);
  if (!post) return { title: "記事が見つかりません" };
  return {
    title: post.title,
    description: post.content ? extractDescription(post.content) : undefined,
    openGraph: post.eyecatch
      ? { images: [{ url: post.eyecatch.url }] }
      : undefined,
  };
}

/** ブログ記事ページ。本文は microCMS リッチエディタのHTMLをそのまま描画。 */
export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getBlogPost(id);
  if (!post) notFound();

  return (
    <article className="section">
      <Container narrow>
        <p className="article__meta">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          {post.category?.name && (
            <span className="blog-card__category">{post.category.name}</span>
          )}
        </p>
        <h1 className="article__title">{post.title}</h1>

        {post.eyecatch && (
          <div className="article__eyecatch">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${post.eyecatch.url}?w=1280&fm=webp`}
              alt=""
              width={post.eyecatch.width}
              height={post.eyecatch.height}
            />
          </div>
        )}

        <div
          className="article__body"
          // microCMSリッチエディタのHTML（信頼できる自分のCMSのみ描画する）
          dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
        />

        <p className="article__back">
          <Link href="/blog">← ブログ一覧へ戻る</Link>
        </p>
      </Container>
    </article>
  );
}
