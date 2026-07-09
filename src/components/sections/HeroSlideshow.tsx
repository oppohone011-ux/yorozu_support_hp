"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/data/heroSlides";

const INTERVAL_MS = 4500; // 切り替え間隔
const FADE_MS = 900; // フェード時間（CSSと合わせる）

/**
 * ヒーローのスライドショー。
 * クロスフェード＋ほんのり拡大（Ken Burns風）で自動的に切り替わる。
 * OSの「視差効果を減らす」設定時は自動切り替えを止める。
 */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // アクセシビリティ：動きを減らす設定の人には自動再生しない
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slideshow" style={{ "--fade": `${FADE_MS}ms` } as React.CSSProperties}>
      {heroSlides.map((slide, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={
            i === index ? "hero-slideshow__img is-active" : "hero-slideshow__img"
          }
          loading={i === 0 ? "eager" : "lazy"}
          width={880}
          height={880}
        />
      ))}

      {/* ドットインジケーター（タップで切り替えも可能） */}
      <div className="hero-slideshow__dots" aria-hidden="true">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.src}
            className={
              i === index
                ? "hero-slideshow__dot is-active"
                : "hero-slideshow__dot"
            }
            onClick={() => setIndex(i)}
            tabIndex={-1}
          />
        ))}
      </div>
    </div>
  );
}
