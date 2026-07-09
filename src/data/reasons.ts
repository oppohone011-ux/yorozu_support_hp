/**
 * 「選ばれる理由」セクションの内容。
 * 派手な売り込みではなく、相談しやすさ・安心感を伝える。
 */

import type { IconName } from "@/components/ui/Icon";

export type Reason = {
  icon: IconName;
  color: string;
  title: string;
  desc: string;
};

export const reasons: Reason[] = [
  {
    icon: "pin",
    color: "#4a9d5f",
    title: "地元だから、気軽",
    desc: "唐津周辺で活動しています。顔の見える距離感で、遠慮なく相談できます。",
  },
  {
    icon: "chat",
    color: "#e08a3c",
    title: "何でも、まず相談",
    desc: "「これ頼めるかな？」からで大丈夫。内容を聞いて、できること・できないことを正直にお伝えします。",
  },
  {
    icon: "ai",
    color: "#8b5cf6",
    title: "専門用語を使わない",
    desc: "パソコンもAIも、わかる言葉で説明します。初歩的な質問こそ歓迎です。",
  },
  {
    icon: "yen",
    color: "#3b82c4",
    title: "少額・単発でもOK",
    desc: "システム会社や便利屋さんに頼むほどでもない、小さな困りごと一つから対応します。",
  },
];
