import { areaGroups, areaLead, areaMapEmbedUrl } from "@/data/areas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/**
 * 対応地域。県ごとのグループ＋Googleマップ（広域）。
 * エリアの追加は data/areas.ts の areaGroups を編集。
 */
export function ServiceAreaSection() {
  return (
    <section className="section section--alt" id="areas">
      <Container>
        <SectionHeading
          eyebrow="対応エリア"
          title="対応地域"
          lead={areaLead}
        />

        <div className="area-layout">
          <div className="area-groups">
            {areaGroups.map((group) => (
              <div className="area-group" key={group.prefecture}>
                <h3 className="area-group__pref">
                  <Icon name="pin" size={18} color="var(--color-primary)" />
                  {group.prefecture}
                </h3>
                <ul className="area-list">
                  {group.areas.map((area) => (
                    <li
                      className={
                        area.main ? "area-chip area-chip--main" : "area-chip"
                      }
                      key={area.name}
                    >
                      {area.main && (
                        <span className="area-chip__star" aria-hidden="true">
                          ★
                        </span>
                      )}
                      {area.name}
                      {area.note && (
                        <span className="area-chip__note">（{area.note}）</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p className="area-groups__note">
              ★＝拠点エリア ／ その他の地域もお気軽にご相談ください
            </p>
          </div>

          <div className="area-map">
            <iframe
              src={areaMapEmbedUrl}
              title="対応地域の地図（唐津市を中心とした広域）"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
