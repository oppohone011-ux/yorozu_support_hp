import { cases } from "@/data/cases";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/** 相談事例。「こんな相談もできるんだ」とイメージしてもらう。 */
export function CaseSection() {
  return (
    <section className="section" id="cases">
      <Container>
        <SectionHeading
          eyebrow="こんな相談もOK"
          title="相談事例"
          lead="実際にいただくご相談のきっかけです。似たようなお困りごと、ありませんか？"
        />

        <div className="case-grid">
          {cases.map((c) => (
            <div className="case-card" key={c.trigger}>
              <Icon name={c.icon} color={c.color} boxed size={26} />
              <p className="case-card__trigger">「{c.trigger}」</p>
              <p className="case-card__arrow" aria-hidden="true">
                ↓
              </p>
              <p className="case-card__response">{c.response}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
