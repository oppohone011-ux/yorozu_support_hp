import type { Service } from "@/data/services";
import { Icon } from "@/components/ui/Icon";

/** サービス1件分のカード。data/services.ts の1要素を受け取って描画。 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card" id={`service-${service.slug}`}>
      <Icon name={service.icon} color={service.color} boxed size={28} />
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__catch">{service.catch}</p>

      <ul className="service-card__items">
        {service.items.map((item) => (
          <li className="service-card__item" key={item}>
            {item}
          </li>
        ))}
      </ul>

      {service.note && <p className="service-card__note">{service.note}</p>}
    </article>
  );
}
