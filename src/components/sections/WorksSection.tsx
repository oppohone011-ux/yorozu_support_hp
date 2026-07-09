import { works } from "@/data/works";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** 実績（対応事例）。data/works.ts をカードで並べる。 */
export function WorksSection() {
  return (
    <section className="section" id="works">
      <Container>
        <SectionHeading
          eyebrow="対応してきたこと"
          title="実績・対応事例"
          lead="実際に対応した内容の一部です。（写真は許可をいただいた場合のみ掲載します）"
        />

        <div className="works-grid">
          {works.map((work) => (
            <article className="work-card" key={work.title}>
              <div className="work-card__photo" aria-hidden="true">
                {work.photo}
              </div>
              <div className="work-card__body">
                <span className="work-card__category">{work.category}</span>
                <h3 className="work-card__title">{work.title}</h3>
                <p className="work-card__summary">{work.summary}</p>

                {(work.duration || work.area) && (
                  <p className="work-card__meta">
                    {work.area && <span>📍 {work.area}</span>}
                    {work.duration && <span>⏱ {work.duration}</span>}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
