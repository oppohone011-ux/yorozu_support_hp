import { reasons } from "@/data/reasons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/** 選ばれる理由。安心感・相談しやすさを4点で。 */
export function ReasonSection() {
  return (
    <section className="section" id="reasons">
      <Container>
        <SectionHeading eyebrow="安心して相談できる理由" title="選ばれる理由" />

        <div className="reason-grid">
          {reasons.map((reason) => (
            <div className="reason-card" key={reason.title}>
              <Icon name={reason.icon} color={reason.color} boxed size={30} />
              <h3 className="reason-card__title">{reason.title}</h3>
              <p className="reason-card__desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
