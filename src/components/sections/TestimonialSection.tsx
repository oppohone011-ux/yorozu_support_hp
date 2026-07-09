import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** 星（rating 1〜5）を描画するちょっとした表示。 */
function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <span className="stars" aria-label={`5段階中 ${full}`}>
      {"★".repeat(full)}
      <span className="stars__empty">{"★".repeat(5 - full)}</span>
    </span>
  );
}

/** お客様の声。安心感を伝える。 */
export function TestimonialSection() {
  return (
    <section className="section section--alt" id="testimonials">
      <Container>
        <SectionHeading eyebrow="ご利用者の声" title="お客様の声" />

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <figure className="testimonial-card" key={i}>
              <Stars rating={t.rating} />
              <blockquote className="testimonial-card__comment">
                「{t.comment}」
              </blockquote>
              <figcaption className="testimonial-card__author">
                {t.name}
                {t.age ? `（${t.age}）` : ""} / {t.area}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
