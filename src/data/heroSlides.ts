/**
 * ヒーローのスライドショー画像。
 * 追加・入れ替えはこの配列を編集するだけ（画像は public/hero/ に置く）。
 * 画像内に文字が入っているため、alt に内容を書いてSEO・読み上げに対応する。
 */

export type HeroSlide = {
  src: string;
  /** 丸枠の下に表示するラベル（スライドと同期して切り替わる） */
  caption: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/hero/slide-1-kurashi.webp",
    caption: "家の手伝いも、お任せください",
    alt: "家の手伝いも、お任せください。荷物の移動・片付け・家具の移動・不用品の運搬など",
  },
  {
    src: "/hero/slide-2-genba.webp",
    caption: "現場仕事も、お任せください",
    alt: "現場仕事もお任せください。搬入・設営・現場補助など",
  },
  {
    src: "/hero/slide-3-tsukisoi.webp",
    caption: "話し相手・付き添いも",
    alt: "話し相手・付き添いもお任せください。買い物や病院の付き添いなど",
  },
  {
    src: "/hero/slide-4-system.webp",
    caption: "システム開発も、お任せください",
    alt: "システム開発もお任せください。業務システム・自動化ツールの開発など",
  },
  {
    src: "/hero/slide-5-pc.webp",
    caption: "パソコン・AIの使い方も",
    alt: "パソコン講座もお任せください。パソコン・スマホ・AIの使い方サポート",
  },
  {
    src: "/hero/slide-6-badminton.webp",
    caption: "バドミントンの練習相手も",
    alt: "バドミントンの練習相手もお任せください。基礎打ち・ノック・初心者レッスン",
  },
];
