import { pricingPolicy, priceList } from "@/data/pricing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/**
 * 料金の目安。サービス別の一覧表＋注意書き。
 * 金額の変更は data/pricing.ts を編集するだけ。
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

        <div className="price-table">
          {priceList.map((row) => (
            <div className="price-row" key={row.service}>
              <span className="price-row__service">
                <Icon name={row.icon} color={row.color} boxed size={18} />
                {row.service}
              </span>
              <span
                className={
                  row.price === "お見積り"
                    ? "price-row__price price-row__price--ask"
                    : "price-row__price"
                }
              >
                {row.price}
              </span>
            </div>
          ))}
        </div>

        <ul className="price-notes">
          {pricingPolicy.notes.map((note) => (
            <li key={note}>※ {note}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
