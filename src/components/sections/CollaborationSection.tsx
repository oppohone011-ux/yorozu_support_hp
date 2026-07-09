import { collaboration } from "@/data/collaboration";
import { contact } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * 「一緒に面白いことをやりませんか？」。
 * ゆるい仲間募集・雑談歓迎のトーン。事業前提ではないことを明示。
 * 対象者リストはイラスト（public/collab-banner.webp）の吹き出しで表現し、
 * テキストは alt に持たせる。
 */

/** 文中の【】をマーカー強調(<mark>)に変換して描画 */
function Highlighted({ text }: { text: string }) {
  const parts = text.split(/【|】/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark className="collab__mark" key={i}>
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export function CollaborationSection() {
  return (
    <section className="section collab" id="collaboration">
      <Container narrow>
        <div className="collab__inner">
          <span className="section-heading__eyebrow">
            {collaboration.eyebrow}
          </span>
          <h2 className="collab__title">{collaboration.title}</h2>

          {/* 対象者の吹き出し入りイラスト */}
          <div className="collab__banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/collab-banner.webp"
              alt={`こんな方、歓迎です：${collaboration.targets.join("、")}`}
              loading="lazy"
              width={1200}
              height={445}
            />
          </div>

          <div className="collab__body">
            {collaboration.paragraphs.map((p) => (
              <p className="collab__text" key={p}>
                <Highlighted text={p} />
              </p>
            ))}
          </div>

          <p className="collab__closing">
            <span className="collab__closing-quote">
              {collaboration.closingQuote}
            </span>
            {collaboration.closingText}
          </p>

          <div className="collab__cta">
            <Button href={contact.line.href} variant="accent">
              気軽に話してみる
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
