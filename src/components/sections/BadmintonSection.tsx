import { badminton } from "@/data/badminton";
import { contact } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * バドミントンサポート特集。
 * 実績は正直に（県大会優勝は学生時代／現在は競技選手ではない）。
 */
export function BadmintonSection() {
  return (
    <section className="section badminton" id="badminton">
      <Container>
        <div className="badminton__inner">
          <span className="section-heading__eyebrow">{badminton.eyebrow}</span>
          <h2 className="badminton__title">{badminton.title}</h2>

          {badminton.intro.map((p) => (
            <p className="badminton__intro" key={p}>
              {p}
            </p>
          ))}

          <div className="badminton__voices">
            {badminton.voices.map((v) => (
              <span className="badminton__voice" key={v}>
                「{v}」
              </span>
            ))}
          </div>

          <h3 className="badminton__subtitle">対応内容</h3>
          <ul className="badminton__items">
            {badminton.items.map((item) => (
              <li className="badminton__item" key={item}>
                🏸 {item}
              </li>
            ))}
          </ul>

          <ul className="badminton__notes">
            {badminton.notes.map((note) => (
              <li key={note}>※ {note}</li>
            ))}
          </ul>

          <div className="badminton__cta">
            <Button href={contact.line.href} variant="primary">
              バドミントンの相談をする
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
