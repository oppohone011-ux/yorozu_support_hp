import Link from "next/link";
import { blogTeaser } from "@/data/blog";
import { getBlogPosts, isBlogConfigured, formatDate } from "@/lib/microcms";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * ブログ・お知らせ（トップページ用）。
 * microCMSに記事があれば最新3件を表示し、
 * 未設定・記事0件なら「近日公開」の予告を表示する。
 */
export async function BlogTeaserSection() {
  const posts = isBlogConfigured() ? await getBlogPosts(3) : [];

  if (posts.length === 0) {
    return (
      <section className="section" id="blog">
        <Container>
          <SectionHeading
            eyebrow={blogTeaser.eyebrow}
            title={blogTeaser.title}
            lead={blogTeaser.lead}
          />
          <ul className="blog-topics">
            {blogTeaser.plannedTopics.map((topic) => (
              <li className="blog-topic" key={topic}>
                📝 {topic}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
  }

  return (
    <section className="section" id="blog">
      <Container>
        <SectionHeading
          eyebrow={blogTeaser.eyebrow}
          title="最新の記事"
          lead="地元での活動や、暮らしに役立つ情報を発信しています。"
        />

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
                  <h3 className="blog-card__title">{post.title}</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <p className="blog-more">
          <Link className="btn btn--outline" href="/blog">
            記事一覧を見る
          </Link>
        </p>
      </Container>
    </section>
  );
}
