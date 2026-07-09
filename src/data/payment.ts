/**
 * お支払いセクションのデータ。
 * 目的：「前払い？後払い？」の不安を、文章ではなく
 * カード＋アイコン＋支払いタイミングの図で直感的に解消する。
 * 表現ルール：金額の断定はしない（docs/03_content_policy.md）。
 */
import type { IconName } from "@/components/ui/Icon";

export const paymentCopy = {
  eyebrow: "💳 お支払いについて",
  title: "仕事内容によってお支払い方法が異なります",
  lead: "お見積り時に必ずご説明いたしますので、ご安心ください。",
  footer:
    "安心してご利用いただけるよう、お見積り時に料金・お支払い方法を分かりやすくご説明いたします。無理な追加料金はありません。",
};

export type PaymentType = {
  icon: IconName;
  color: string;
  title: string;
  /** 支払いタイミングのバッジ（後払い / 前払い など） */
  badge: string;
  badgeColor: string;
  /** タイミングを図解する2ステップ（左 → 右） */
  flow: { icon: IconName; label: string }[];
  desc: string;
  examples: string[];
};

export const paymentTypes: PaymentType[] = [
  {
    icon: "home",
    color: "#4a9d5f",
    title: "軽作業・暮らしサポート",
    badge: "後払い",
    badgeColor: "#4a9d5f",
    flow: [
      { icon: "tools", label: "作業完了" },
      { icon: "yen", label: "お支払い" },
    ],
    desc: "作業完了後のお支払いです。",
    examples: ["家具移動", "草刈り", "荷物運び", "清掃", "軽作業"],
  },
  {
    icon: "pc",
    color: "#3b82c4",
    title: "ホームページ・システム制作",
    badge: "前払い・一部前払い",
    badgeColor: "#3b82c4",
    flow: [
      { icon: "yen", label: "お支払い" },
      { icon: "pc", label: "制作開始" },
    ],
    desc: "着手前のお支払い、または一部前払いとなります。",
    examples: ["ホームページ制作", "LP制作", "システム制作", "AIサポート"],
  },
  {
    icon: "building",
    color: "#8b5cf6",
    title: "法人様",
    badge: "請求書払いOK",
    badgeColor: "#8b5cf6",
    flow: [
      { icon: "doc", label: "請求書" },
      { icon: "yen", label: "お振込" },
    ],
    desc: "請求書払いなどもお気軽にご相談ください。",
    examples: ["請求書払い", "月末締め", "お支払いサイトの相談"],
  },
];
