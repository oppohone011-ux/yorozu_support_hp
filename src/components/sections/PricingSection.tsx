import { pricingPolicy, priceUnits } from "@/data/pricing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 料金。断定価格は出さず「お見積り」＋時間単位の参考のみ。
 * 金額が決まったら data/pricing.ts の priceUnits に price を入れる。
 */
export function PricingSection() {
  return (
    <section className="section section--alt" id="pricing">
      <Container narrow>
        <SectionHeading
          eyebrow="料金について"
          title={pricingPolicy.headline}
          lead={pricingPolicy.lead}
        />

        <div className="pricing-box">
          <p className="pricing-box__label">時間単位でも対応できます（参考）</p>
          <div className="pricing-units">
            {priceUnits.map((unit) => (
              <div className="pricing-unit" key={unit.label}>
                <span className="pricing-unit__label">{unit.label}</span>
                <span className="pricing-unit__price">
                  {unit.price ?? "お見積り"}
                </span>
              </div>
            ))}
          </div>
          <p className="pricing-box__note">{pricingPolicy.note}</p>
        </div>
      </Container>
    </section>
  );
}
