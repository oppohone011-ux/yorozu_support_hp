/**
 * 料金の目安。
 * 金額は運営者決定（2026-07-09）。「〜／時間」の目安表記で、
 * 断定・固定価格にはしない（docs/03_content_policy.md）。
 */
import type { IconName } from "@/components/ui/Icon";

export const pricingPolicy = {
  headline: "料金の目安",
  lead: "ご相談・お見積りは無料です。作業前に目安をお伝えし、ご納得いただいてから対応します。",
  notes: [
    "料金はあくまで目安です。作業内容・作業時間・場所に応じて変動する場合があります。",
    "交通費は別途いただきます。",
    "まずはお気軽にご相談ください。",
  ],
};

export type PriceRow = {
  icon: IconName;
  color: string;
  service: string;
  price: string;
};

/** サービス別の料金目安 */
export const priceList: PriceRow[] = [
  {
    icon: "pc",
    color: "#3b82c4",
    service: "AI・パソコンサポート",
    price: "3,000円〜 / 時間",
  },
  {
    icon: "ai",
    color: "#8b5cf6",
    service: "システム開発・自動化",
    price: "お見積り",
  },
  {
    icon: "home",
    color: "#4a9d5f",
    service: "家のお手伝い・荷物の移動",
    price: "3,000円〜 / 時間",
  },
  {
    icon: "truck",
    color: "#b58a3c",
    service: "現場仕事",
    price: "3,000円〜 / 時間",
  },
  {
    icon: "chat",
    color: "#e08a3c",
    service: "相談・話し相手",
    price: "2,000円〜 / 時間",
  },
  {
    icon: "badminton",
    color: "#5566cc",
    service: "バドミントンの練習相手",
    price: "2,000円〜 / 2時間",
  },
];
