/**
 * 対応地域。県ごとにグループ化して表示する。
 * エリアの追加・変更は areaGroups を編集するだけ。
 * 地図は APIキー不要の埋め込み（output=embed）。z=9 で佐世保〜福岡西部までカバー。
 */

export type Area = {
  name: string;
  note?: string;
  /** 拠点（メインエリア）は強調表示 */
  main?: boolean;
};

export type AreaGroup = {
  prefecture: string;
  areas: Area[];
};

export const areaGroups: AreaGroup[] = [
  {
    prefecture: "佐賀県",
    areas: [
      { name: "唐津市", main: true },
      { name: "伊万里市" },
      { name: "玄海町" },
      { name: "多久市" },
      { name: "武雄市" },
      { name: "佐賀市", note: "一部" },
    ],
  },
  {
    prefecture: "長崎県",
    areas: [{ name: "佐世保市" }, { name: "松浦市" }],
  },
  {
    prefecture: "福岡県",
    areas: [
      { name: "福岡市早良区" },
      { name: "福岡市西区" },
      { name: "糸島市" },
    ],
  },
];

/** JSON-LD（構造化データ）用のフラットな一覧 */
export const areas: Area[] = areaGroups.flatMap((g) => g.areas);

export const areaLead =
  "佐賀県唐津市を拠点に、長崎（佐世保・松浦）、福岡（早良区・西区・糸島）まで対応しています。記載のない地域や県外も、ご相談ベースで対応できる場合があります。";

/** Googleマップ埋め込み（唐津中心・広域表示）。APIキー不要。 */
export const areaMapEmbedUrl =
  "https://maps.google.com/maps?q=%E4%BD%90%E8%B3%80%E7%9C%8C%E5%94%90%E6%B4%A5%E5%B8%82&z=9&output=embed";
