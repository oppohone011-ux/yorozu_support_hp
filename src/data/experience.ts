/**
 * 経験・実績セクションのデータ。
 * ブランディングの軸：「何でもできます」ではなく
 * 「いろいろな仕事を経験してきました」＝
 * “現場もPCも知っている、経験豊富なサポート役”。
 * （docs/03_content_policy.md：事実ベース・誇張しない）
 */
import type { IconName } from "@/components/ui/Icon";

export const experienceCopy = {
  eyebrow: "これまでの経験",
  title: "現場もPCも知っている、\n経験豊富なサポート役です。",
  lead: "「何でもできます」とは言いません。ただ、システム開発から建設現場まで、幅広い仕事を実際に経験してきました。だから、いろいろな困りごとに現実的な形で寄り添えます。",
};

/** 経験してきた分野（職歴の幅） */
export type ExperienceField = {
  icon: IconName;
  color: string;
  label: string;
};

export const experienceFields: ExperienceField[] = [
  { icon: "pc", color: "#3b82c4", label: "システム開発" },
  { icon: "cart", color: "#e05a7a", label: "物販・EC" },
  { icon: "tools", color: "#4a9d5f", label: "工場" },
  { icon: "pin", color: "#2fa39a", label: "測量" },
  { icon: "truck", color: "#b58a3c", label: "建設・現場" },
  { icon: "recycle", color: "#8b5cf6", label: "倉庫" },
  { icon: "star", color: "#e08a3c", label: "イベント設営" },
];

/** システム開発の実績（事実のみ） */
export const devWorks: string[] = [
  "測量会社向け 内業システム",
  "工場向け 業務システム・動画分析システム",
  "EC会社向け 業務システム",
  "アメリカのEC事業者向け マーケティングツール",
  "物販支援システム「ECライド」（個人開発）",
];

/** 協力体制（一人で抱え込まない安心感） */
export const partners = {
  title: "協力できる仲間もいます",
  body: "一人親方など、信頼できる知り合いがおります。内容によっては、私一人では対応できないものでも、協力して対応できる場合があります。お気軽にご相談ください。",
};
