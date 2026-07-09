/**
 * 依頼の流れ（4ステップ）。
 * 「相談のハードルが低い」ことが伝わる流れにする。
 */

import type { IconName } from "@/components/ui/Icon";

export type FlowStep = {
  icon: IconName;
  title: string;
  desc: string;
};

export const flowSteps: FlowStep[] = [
  {
    icon: "chat",
    title: "まずは相談",
    desc: "LINE・メールのどちらでもOK。「これ頼めるかな？」の段階で気軽にご連絡ください。",
  },
  {
    icon: "yen",
    title: "内容の確認・お見積り",
    desc: "困りごとの内容をうかがい、できること・料金の目安・日程をお伝えします。無理な提案はしません。",
  },
  {
    icon: "tools",
    title: "対応",
    desc: "ご納得いただいてから作業・サポートを行います。わからないことはその場で確認しながら進めます。",
  },
  {
    icon: "star",
    title: "完了・お支払い",
    desc: "内容をご確認いただいて完了です。次回もまた気軽にご相談ください。",
  },
];
