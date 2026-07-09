import { contact, businessHours } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/sections/ContactForm";

/**
 * お問い合わせ。1枚のパネルに「LINE｜または｜フォーム」を並べる。
 * （電話は掲載しない方針。メール単独カードはフォームと重複するため置かない）
 * 連絡先は data/site.ts で管理。
 */
export function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <Container>
        <SectionHeading
          eyebrow="お問い合わせ"
          title="困ったら、まず相談してください。"
        />
        <p className="contact__lead">
          「これ頼めるかな？」から大歓迎です。ご都合のよい方法でお気軽にどうぞ。
        </p>

        <div className="contact-panel">
          {/* 左：LINE（いちばん早い） */}
          <div className="contact-panel__line">
            <span className="contact-panel__badge">いちばん早い</span>
            <span className="contact-panel__icon" aria-hidden="true">
              <Icon name="line" size={30} color="#06c755" />
            </span>
            <h3 className="contact-panel__title">LINEで相談</h3>
            <p className="contact-panel__desc">
              友だち追加して、そのままメッセージを送るだけ。
            </p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="contact-panel__qr"
              src="/line-qr.png"
              alt="LINE友だち追加のQRコード"
              width={150}
              height={150}
            />
            <p className="contact-panel__id">ID検索：{contact.line.value}</p>

            <a
              className="btn btn--line btn--block"
              href={contact.line.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              LINEアプリで開く
            </a>
            <p className="contact-panel__note">
              パソコンの方はスマホでQRコードを読み取ってください
            </p>
          </div>

          {/* 中央：区切り */}
          <div className="contact-panel__divider" aria-hidden="true">
            <span>または</span>
          </div>

          {/* 右：相談フォーム */}
          <div className="contact-panel__form">
            <ContactForm />
          </div>
        </div>

        <div className="contact__hours">
          <p>
            <strong>営業時間</strong> {businessHours.hours} ／{" "}
            <strong>定休日</strong> {businessHours.holiday}
          </p>
          <p>{businessHours.note}</p>
        </div>
      </Container>
    </section>
  );
}
