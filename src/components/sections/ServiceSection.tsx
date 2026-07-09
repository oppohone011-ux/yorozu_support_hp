import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";

/** サービス一覧。data/services.ts をカードで並べる。 */
export function ServiceSection() {
  return (
    <section className="section section--alt" id="services">
      <Container>
        <SectionHeading
          eyebrow="できること"
          title="サービス一覧"
          lead="ここに載っていないことも、まずはご相談ください。できるか一緒に考えます。"
        />

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
}
