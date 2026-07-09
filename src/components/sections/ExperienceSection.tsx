import {
  experienceCopy,
  experienceFields,
  devWorks,
  partners,
} from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

/**
 * 経験・実績セクション。
 * 「何でもできます」ではなく「幅広い仕事を経験してきた」ことを
 * 事実ベースで見せて信頼につなげる（ブランディングの核）。
 */
export function ExperienceSection() {
  return (
    <section className="section experience" id="experience">
      <Container>
        <div className="section-heading">
          <span className="section-heading__eyebrow">
            {experienceCopy.eyebrow}
          </span>
          <h2 className="section-heading__title">
            {experienceCopy.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="section-heading__lead">{experienceCopy.lead}</p>
        </div>

        {/* 経験してきた分野 */}
        <div className="exp-fields">
          {experienceFields.map((field) => (
            <div className="exp-field" key={field.label}>
              <Icon name={field.icon} color={field.color} boxed size={24} />
              <span className="exp-field__label">{field.label}</span>
            </div>
          ))}
        </div>

        <div className="exp-columns">
          {/* システム開発の実績 */}
          <div className="exp-card">
            <h3 className="exp-card__title">
              <Icon name="pc" size={20} color="var(--color-primary)" />
              システム開発の実績
            </h3>
            <ul className="exp-card__list">
              {devWorks.map((work) => (
                <li className="exp-card__item" key={work}>
                  {work}
                </li>
              ))}
            </ul>
          </div>

          {/* 協力できる仲間 */}
          <div className="exp-card exp-card--partner">
            <h3 className="exp-card__title">
              <Icon name="chat" size={20} color="var(--color-accent)" />
              {partners.title}
            </h3>
            <p className="exp-card__body">{partners.body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
