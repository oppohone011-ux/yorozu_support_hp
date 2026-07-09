import { notices } from "@/data/notices";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/**
 * 注意事項。誠実さ＝安心感につなげるセクション。
 * 見出し＋アイコン付きカードで、流し読みでも要点が掴めるようにする。
 * 法令配慮の文言（不用品・スクラップ）はここで明示。
 */
export function NoticeSection() {
  return (
    <section className="section section--alt" id="notice">
      <Container>
        <SectionHeading
          eyebrow="お読みください"
          title="ご相談前の注意事項"
          lead="安心してご利用いただくために、先にお伝えしておきたいことです。"
        />

        <div className="notice-grid">
          {notices.map((notice) => (
            <article className="notice-card" key={notice.title}>
              <h3 className="notice-card__title">
                <Icon name={notice.icon} color={notice.color} boxed size={20} />
                {notice.title}
              </h3>
              <p className="notice-card__body">{notice.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
