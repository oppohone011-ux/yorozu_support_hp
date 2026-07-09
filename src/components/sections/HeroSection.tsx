import { contact } from "@/data/site";
import { trustBadges } from "@/data/experience";
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

            {/* こんな人です（経歴・事実ベース。枠なしのすっきり表記） */}
            <ul className="hero__trust">
              {trustBadges.map((badge) => (
                <li className="hero__trust-item" key={badge.label}>
                  <Icon name={badge.icon} size={16} color={badge.color} />
                  {badge.label}
                </li>
              ))}
            </ul>
          </div>

          {/* 右：スライドショー（背面に傾きカードの飾り） */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__art">
              <HeroSlideshow />
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
