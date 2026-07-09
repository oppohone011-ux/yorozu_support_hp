/**
 * 実績（対応事例）。
 * 目的：実際に対応した内容を見せて安心感・信頼感を高める。
 * 表現ルール（docs/03_content_policy.md）：
 *  - 事実ベース。誇張しない。
 *  - 写真は「許可をいただいた場合のみ」。個人情報・プライバシーに配慮。
 *  - photo は将来の画像用プレースホルダ（絵文字）。画像を用意したら差し替え。
 */

export type Work = {
  category: string;
  title: string;
  summary: string;
  /** 任意項目。分かる範囲で。空なら非表示。 */
  duration?: string;
  area?: string;
  problem?: string;
  solution?: string;
  photo: string; // 画像未設定時のプレースホルダ絵文字
};

export const works: Work[] = [
  {
    category: "PC・AIサポート",
    title: "パソコンの初期設定",
    summary: "新しいパソコンを使えるように設定しました。",
    photo: "💻",
  },
  {
    category: "PC・AIサポート",
    title: "ホームページ作成",
    summary: "個人事業向けのシンプルなホームページを制作しました。",
    photo: "🌐",
  },
  {
    category: "システム開発",
    title: "マーケティングツール開発",
    summary: "アメリカのEC事業者様向けに、マーケティングツールを開発・提供しました。",
    photo: "📊",
  },
  {
    category: "システム開発",
    title: "測量会社の内業システム",
    summary: "測量会社様向けに、内業を効率化するシステムを作成しました。",
    photo: "📐",
  },
  {
    category: "システム開発",
    title: "工場の動画分析システム",
    summary: "工場で使用する動画分析システムを開発・提供しました。",
    photo: "🎥",
  },
  {
    category: "搬入・物流",
    title: "医療機器の運搬・発送",
    summary: "中古医療機器の買取販売業者様のもとで、トラックでの機器の運搬・移動・発送に対応しました。",
    photo: "🚚",
  },
  {
    category: "暮らしのお手伝い",
    title: "家具移動",
    summary: "大型家具を一緒に移動しました。",
    photo: "🛋️",
  },
  {
    category: "暮らしのお手伝い",
    title: "草刈り",
    summary: "庭の草刈りを行いました。",
    photo: "🌿",
  },
  {
    category: "バドミントン",
    title: "初心者サポート",
    summary: "初心者向けに基礎打ち・フットワークをサポートしました。",
    photo: "🏸",
  },
];
