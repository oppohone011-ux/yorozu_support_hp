import { contact } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";

/**
 * ファーストビュー。参考デザインに合わせた2カラム構成。
 *  - 左：見出し・リード・CTA・安心バッジ
 *  - 右：イラスト枠（後で画像を差し込む）＋周囲に浮かぶカラーアイコン
 */
export function HeroSection() {
  return (
    <section className="hero" id="top">
      <Container>
        <div className="hero__grid">
          {/* 左：コピー */}
          <div className="hero__copy">
            <span className="hero__badge">
              <Icon name="pin" size={16} color="var(--color-primary)" />
              地元密着で、丁寧に対応します
            </span>

            <h1 className="hero__title">
              暮らしの「困った」を
              <br />
              <span className="accent">まとめてサポート。</span>
            </h1>

            <p className="hero__lead">
              パソコン・AIから、暮らしの軽作業、不用品整理まで。
              <br />
              「これ頼めるかな？」から、なんでもお気軽にご相談ください。
            </p>

            <div className="hero__actions">
              <Button href={contact.line.href} variant="line">
                <Icon name="line" size={18} /> まずは相談してみる（無料）
              </Button>
              <Button href="#services" variant="outline">
                サービスを見る
              </Button>
            </div>

            <p className="hero__note">
              システム会社に頼むほどじゃない。でも自分では難しい。
              <br />
              現場もPCも知っている経験豊富なサポート役が、そんな“ちょっと困った”に寄り添います。
            </p>
          </div>

          {/* 右：イラスト枠＋浮かぶアイコン */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__art">
              <HeroSlideshow />
            </div>

            {/* 周囲に浮かぶサービスアイコン */}
            <span className="hero__float hero__float--1">
              <Icon name="pc" size={26} color="#3b82c4" boxed />
            </span>
            <span className="hero__float hero__float--2">
              <Icon name="tools" size={26} color="#4a9d5f" boxed />
            </span>
            <span className="hero__float hero__float--3">
              <Icon name="recycle" size={26} color="#2fa39a" boxed />
            </span>
            <span className="hero__float hero__float--4">
              <Icon name="badminton" size={26} color="#5566cc" boxed />
            </span>
            <span className="hero__float hero__float--5">
              <Icon name="cart" size={26} color="#e05a7a" boxed />
            </span>
          </div>
        </div>

        {/* サービスのタグ（下部） */}
        <ul className="hero__tags">
          {services.map((service) => (
            <li className="hero__tag" key={service.slug}>
              <Icon name={service.icon} size={16} color={service.color} />
              {service.title}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
