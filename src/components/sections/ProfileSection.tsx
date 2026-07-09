import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** プロフィール。誰が対応するかを見せて安心感につなげる。 */
export function ProfileSection() {
  return (
    <section className="section section--alt" id="profile">
      <Container>
        <SectionHeading eyebrow="どんな人？" title="プロフィール" />

        <div className="profile">
          <div className="profile__photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt={`${profile.role}のプロフィール写真`} />
          </div>

          <div>
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

            <dl className="profile__facts">
              {profile.facts.map((fact) => (
                <div className="profile__fact" key={fact.label}>
                  <dt className="profile__fact-label">{fact.label}</dt>
                  <dd style={{ margin: 0 }}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
