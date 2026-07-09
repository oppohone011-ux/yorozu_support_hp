/**
 * 注意事項。
 * 特に不用品・スクラップ関連は、許可・法令に配慮した表現を守る。
 * （断定的な「回収します」は使わない。docs/03_content_policy.md）
 * 見出し＋本文のカード形式で表示される（NoticeSection）。
 */
import type { IconName } from "@/components/ui/Icon";

export type Notice = {
  icon: IconName;
  color: string;
  title: string;
  body: string;
};

export const notices: Notice[] = [
  {
    icon: "recycle",
    color: "#2fa39a",
    title: "不用品・スクラップについて",
    body: "「回収」は法律で許可が必要な業務のため、当サービスでは行いません。片づけ・仕分け・売却/処分の判断など整理のサポートが中心です。内容に応じて、適切な業者のご案内も可能です。",
  },
  {
    icon: "tools",
    color: "#4a9d5f",
    title: "お受けできない場合",
    body: "作業の内容・場所・状況によっては、お受けできないことがあります。その場合は正直にお伝えしますので、まずはご相談ください。",
  },
  {
    icon: "badminton",
    color: "#5566cc",
    title: "バドミントンについて",
    body: "学生時代に県大会優勝・実業団で約1年の競技経験がありますが、現在は競技選手ではありません。基礎づくりや練習相手としてお手伝いします。",
  },
  {
    icon: "chat",
    color: "#e08a3c",
    title: "話し相手・付き添いについて",
    body: "医療行為・介護行為は行いません。買い物や散歩など、日常のちょっとした付き添いが中心です。",
  },
  {
    icon: "yen",
    color: "#3b82c4",
    title: "料金について",
    body: "料金は内容によって異なります。事前に目安をお伝えし、ご納得いただいてから対応します。無理な追加料金はありません。",
  },
];
