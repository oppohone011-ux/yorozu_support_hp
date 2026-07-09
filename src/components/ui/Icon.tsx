/**
 * 線画SVGアイコン集（絵文字の置き換え用）。
 * 参考デザインに合わせて、色を渡せる／淡い背景円に乗せられる作り。
 *
 * 使い方:
 *   <Icon name="pc" />                     … 現在の文字色で描画
 *   <Icon name="pc" color="var(--c-pc)" /> … 色を指定
 *   <Icon name="pc" boxed />               … 淡い色の丸背景つき（カード用）
 *
 * 新しいアイコンを足すときは PATHS に1件追加するだけ。
 */
import type { ReactElement } from "react";

export type IconName =
  | "pc"
  | "ai"
  | "tools"
  | "recycle"
  | "badminton"
  | "chat"
  | "cart"
  | "leaf"
  | "mail"
  | "phone"
  | "line"
  | "pin"
  | "yen"
  | "star"
  | "arrow"
  | "truck"
  | "building"
  | "doc"
  | "home";

// 24x24 / stroke ベース（fill は none、currentColor 継承）
const PATHS: Record<IconName, ReactElement> = {
  pc: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
      <path d="M18 14l.7 1.6L20 16l-1.3.4L18 18l-.7-1.6L16 16l1.3-.4L18 14z" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a3.5 3.5 0 00-4.6 4.6l-6 6 2 2 6-6a3.5 3.5 0 004.6-4.6l-2.2 2.2-1.8-.2-.2-1.8 2.2-2.2z" />
    </>
  ),
  recycle: (
    <>
      <path d="M8.5 5.5l2-2 2 2" />
      <path d="M10.5 3.5v5.5a2 2 0 01-2 2H4" />
      <path d="M4.5 13l-1 2.5 2.5 1" />
      <path d="M18.5 9l1.7 1 1-1.7" />
      <path d="M20 10v3a2 2 0 01-2 2h-6" />
      <path d="M13.5 12.5l-2 2.5 2.5 1.5" />
    </>
  ),
  badminton: (
    <>
      <circle cx="17" cy="17" r="3" />
      <path d="M15 15l-8-8M7 7l-1.5 3.5M7 7l3.5-1.5M7 7l-2.5 0.5M7 7l0.5-2.5" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v10H9l-4 4V5z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2 11h10l2-7H6" />
      <circle cx="9" cy="19" r="1.3" />
      <circle cx="17" cy="19" r="1.3" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <path d="M5 19c3-5 7-8 11-9" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M4 6l8 6 8-6" />
    </>
  ),
  phone: (
    <>
      <path d="M6 3h3l1.5 5-2 1.5a12 12 0 006 6l1.5-2 5 1.5v3a2 2 0 01-2 2A17 17 0 014 5a2 2 0 012-2z" />
    </>
  ),
  line: (
    <>
      <path d="M12 4C7 4 3 7.3 3 11.4c0 3.7 3.2 6.8 7.6 7.4.3 0 .7.2.8.5.1.4 0 .9 0 .9l-.1.9c0 .3-.2 1 .9.6 1.1-.5 5.9-3.5 8-6C21.4 14.4 22 13 22 11.4 22 7.3 17.5 4 12 4z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.5 7-8 7-11a7 7 0 10-14 0c0 3 3 6.5 7 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  yen: (
    <>
      <path d="M8 5l4 6 4-6" />
      <path d="M12 11v8M8.5 13h7M8.5 16h7" />
    </>
  ),
  star: (
    <>
      <path d="M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7L12 3z" />
    </>
  ),
  arrow: (
    <>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v10H2z" />
      <path d="M13 10h4l3 3v3h-7" />
      <circle cx="6.5" cy="17.5" r="1.6" />
      <circle cx="16.5" cy="17.5" r="1.6" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="4" width="10" height="16" rx="1" />
      <path d="M14 9h5a1 1 0 011 1v10H14" />
      <path d="M7 8h2M11 8h0M7 12h2M11 12h0M7 16h2" />
      <path d="M17 13h1M17 16h1" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 15h6M9 9h2" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
};

export function Icon({
  name,
  size = 24,
  color,
  boxed = false,
  boxColor,
}: {
  name: IconName;
  size?: number;
  color?: string;
  /** 淡い色の丸背景に乗せる（カードアイコン用） */
  boxed?: boolean;
  /** 丸背景の色（boxed時）。未指定なら color を薄めに使う想定でCSS側で調整 */
  boxColor?: string;
}) {
  const svg = (
    <svg
      width={boxed ? size : size}
      height={boxed ? size : size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );

  if (!boxed) return svg;

  // 丸背景の色。未指定ならアイコン色の淡いトーンを自動生成。
  const bg =
    boxColor ??
    (color ? `color-mix(in srgb, ${color} 15%, #fff)` : "var(--color-primary-soft)");

  return (
    <span className="icon-box" style={{ background: bg, color }}>
      {svg}
    </span>
  );
}
