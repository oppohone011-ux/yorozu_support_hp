/**
 * お客様の声。
 * 目的：安心感を伝える。
 * ルール：実在の声のみ・許可を得て掲載する（docs/03_content_policy.md）。
 * 名前はイニシャル可、年齢は任意。ここに載っているのは初期のサンプルです。
 */

export type Testimonial = {
  name: string; // イニシャル可
  age?: string; // 任意
  area: string;
  rating: number; // 1〜5
  comment: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "T様",
    area: "唐津市",
    rating: 5,
    comment: "相談しやすく、とても丁寧でした。",
  },
  {
    name: "K様",
    area: "唐津市",
    rating: 5,
    comment: "小さな依頼でも快く対応していただき助かりました。",
  },
  {
    name: "M様",
    area: "唐津市",
    rating: 5,
    comment: "AIの使い方が分かるようになりました。",
  },
];
