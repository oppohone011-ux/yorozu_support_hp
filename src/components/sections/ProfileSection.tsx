import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/**
 * プロフィール。上段＝顔ブロック（写真・名前・一言・自己紹介）、
 * 下段＝ファクトカード（アイコン＋見出し＋チップ/文章）の2段構成。
 * スマホでは1列に積んでも整って見えるよう、各項目をカード化している。
 */
export function ProfileSection() {
  return (
    <section className="section section--alt" id="profile">
      <Container>
        <SectionHeading eyebrow="どんな人？" title="プロフィール" />

        <div className="profile">
          {/* 上段：顔ブロック */}
          <div className="profile__header">
            <div className="profile__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={`${profile.role}のプロフィール写真`}
              />
            </div>

            <div className="profile__intro">
              <p className="profile__name">
                {profile.name}
                <span className="profile__name-reading">
                  （{profile.nameReading}）
                </span>
              </p>
              <p className="profile__role">{profile.role}</p>

              {/* 本人の一言：ここだけ話し言葉（人間味担当） */}
              <p className="profile__motto">「{profile.motto}」</p>

              <p className="profile__bio">{profile.bio}</p>
            </div>
          </div>

          {/* 下段：ファクトカード */}
          <div className="profile__facts">
            {profile.facts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <p className="fact-card__label">
                  <Icon name={fact.icon} color={fact.color} boxed size={16} />
                  {fact.label}
                </p>
                {fact.tags ? (
                  <ul className="fact-card__tags">
                    {fact.tags.map((tag) => (
                      <li className="fact-card__tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="fact-card__text">{fact.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
