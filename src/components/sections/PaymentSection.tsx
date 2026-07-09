import { paymentCopy, paymentTypes } from "@/data/payment";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/**
 * お支払いについて。
 * 「前払い？後払い？」の不安を、3枚カード＋タイミング図解で
 * 文字を読まなくても分かる形にする。
 */
export function PaymentSection() {
  return (
    <section className="section" id="payment">
      <Container>
        <SectionHeading
          eyebrow={paymentCopy.eyebrow}
          title={paymentCopy.title}
          lead={paymentCopy.lead}
        />

        <div className="pay-grid">
          {paymentTypes.map((type) => (
            <article className="pay-card" key={type.title}>
              <Icon name={type.icon} color={type.color} boxed size={30} />
              <h3 className="pay-card__title">{type.title}</h3>

              <span
                className="pay-card__badge"
                style={{ background: type.badgeColor }}
              >
                {type.badge}
              </span>

              {/* 支払いタイミングの図解：ステップ → ステップ */}
              <div className="pay-flow" aria-label={type.desc}>
                {type.flow.map((step, i) => (
                  <div className="pay-flow__group" key={step.label}>
                    {i > 0 && (
                      <span className="pay-flow__arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                    <div className="pay-flow__step">
                      <span className="pay-flow__icon">
                        <Icon name={step.icon} size={22} color={type.color} />
                      </span>
                      <span className="pay-flow__label">{step.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="pay-card__desc">{type.desc}</p>

              <ul className="pay-card__examples">
                {type.examples.map((ex) => (
                  <li className="pay-card__example" key={ex}>
                    {ex}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="pay-footer">{paymentCopy.footer}</p>
      </Container>
    </section>
  );
}
