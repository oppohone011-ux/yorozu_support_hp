/**
 * 料金の考え方。
 * ルール（docs/03_content_policy.md）：断定価格は書かない。
 * 「内容によってお見積り」「時間単位でも対応可」という表現にとどめる。
 * ※ 具体的な金額は今後決定。決まったら price を埋める。
 */

export const pricingPolicy = {
  headline: "内容に応じてお見積りいたします",
  lead: "ご相談・お見積りは無料です。作業前に目安をお伝えし、ご納得いただいてから対応します。",
  note: "※ 料金は内容により異なります。金額は今後決定・掲載予定です。まずはお気軽にご相談ください。",
};

export type PriceUnit = {
  label: string;
  price?: string; // 未定のうちは空。決まったら "3,000円〜" のように入れる。
};

/** 時間単位の参考（金額は今後決定） */
export const priceUnits: PriceUnit[] = [
  { label: "30分" },
  { label: "1時間" },
  { label: "半日" },
  { label: "1日" },
];
