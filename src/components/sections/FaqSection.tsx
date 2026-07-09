import { faqs } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** よくある質問。details/summary で開閉できるアコーディオン。 */
export function FaqSection() {
  return (
    <section className="section section--alt" id="faq">
      <Container narrow>
        <SectionHeading eyebrow="はじめての方へ" title="よくある質問" />

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary className="faq-item__q">
                <span className="faq-item__q-mark">Q</span>
                {faq.question}
              </summary>
              <div className="faq-item__a">
                <span className="faq-item__a-mark">A</span>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
