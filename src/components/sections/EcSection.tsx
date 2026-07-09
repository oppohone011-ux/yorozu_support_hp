import { ec } from "@/data/ec";
import { ectride } from "@/data/ectride";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

/**
 * 物販・EC の活動紹介。
 * 実績（Amazon月商250万円）は「当時の実績」と注記つきで正直に。
 * ECライドの PR動画・スクリーンショットで、開発の実在を裏づける。
 */
export function EcSection() {
  return (
    <section className="section section--alt" id="ec">
      <Container narrow>
        <SectionHeading eyebrow={ec.eyebrow} title={ec.title} />

        <div className="ec-highlights">
          {ec.highlights.map((h) => (
            <div className="ec-highlight" key={h.label}>
              <span className="ec-highlight__label">{h.label}</span>
              <span className="ec-highlight__value">{h.value}</span>
              <span className="ec-highlight__note">{h.note}</span>
            </div>
          ))}
        </div>

        <div className="ec-body">
          {ec.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {/* ECライド：PR動画 */}
        {ectride.videoId && (
          <div className="ec-media">
            <h3 className="ec-media__title">
              <Icon name="cart" size={20} color="var(--color-primary)" />
              <span>
                開発中の物販支援システム<span className="nowrap">「ECライド」</span>
              </span>
            </h3>

            <div className="ec-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${ectride.videoId}`}
                title={ectride.videoTitle}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* PC画面（横長・ブラウザ枠） */}
            <div className="ec-desktops">
              {ectride.desktopShots.map((shot) => (
                <figure className="ec-desktop" key={shot.src}>
                  <div className="ec-desktop__frame">
                    <div className="ec-desktop__bar" aria-hidden="true">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    {shot.ready ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={shot.src} alt={shot.caption} loading="lazy" />
                    ) : (
                      <div className="ec-shot__placeholder">
                        <Icon name="pc" size={26} color="var(--color-primary)" />
                        <span>スクリーンショット準備中</span>
                      </div>
                    )}
                  </div>
                  <figcaption className="ec-shot__cap">
                    <strong>{shot.caption}</strong>
                    <span>{shot.desc}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* スマホ画面（縦長）＋操作デモ動画 */}
            <div className="ec-shots">
              {ectride.appDemo && (
                <figure className="ec-shot">
                  <div className="ec-shot__frame">
                    <video
                      src={ectride.appDemo.src}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <figcaption className="ec-shot__cap">
                    <strong>{ectride.appDemo.caption}</strong>
                    <span>{ectride.appDemo.desc}</span>
                  </figcaption>
                </figure>
              )}
              {ectride.screenshots.map((shot) => (
                <figure className="ec-shot" key={shot.src}>
                  <div className="ec-shot__frame">
                    {shot.ready ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={shot.src} alt={shot.caption} loading="lazy" />
                    ) : (
                      <div className="ec-shot__placeholder">
                        <Icon name="pc" size={26} color="var(--color-primary)" />
                        <span>スクリーンショット準備中</span>
                      </div>
                    )}
                  </div>
                  <figcaption className="ec-shot__cap">
                    <strong>{shot.caption}</strong>
                    <span>{shot.desc}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
