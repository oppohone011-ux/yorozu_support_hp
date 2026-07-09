/**
 * 運営者プロフィール。
 * 誇張しない・事実ベース（docs/03_content_policy.md）。
 * バドミントン実績は「学生時代に県大会優勝・実業団で約1年・現在は競技選手ではない」で固定。
 * facts は text（文章）か tags（チップ表示）のどちらかを持つ。
 */
import type { IconName } from "@/components/ui/Icon";

export type ProfileFact = {
  icon: IconName;
  color: string;
  label: string;
  text?: string;
  tags?: string[];
};

export const profile = {
  name: "古川 秀幸",
  nameReading: "ふるかわ ひでゆき",
  role: "唐津よろずサポート 運営",
  /** プロフィール写真（public/ 直下）。差し替えは同名で上書きすればOK */
  photo: "/profile-photo.png",
  /**
   * 本人の一言（あえて話し言葉のまま。ここだけトーンを崩して人間味を出す）
   */
  motto:
    "難しいことは、私にお任せください。「これ頼めるかな？」だけで大丈夫です。できないことは、正直に言います。",
  bio: "工場の品質保証にはじまり、陸上自衛隊に4年、ドバイでの海外勤務、Amazon物販、データ抽出、システム開発——自分でも数えきれないくらい、いろんな仕事を経験してきました。いわば「転職王」です。だからこそ、たいていの困りごとには驚きませんし、現場の気持ちもPCの理屈もわかります。唐津周辺の“ちょっと困った”の相談パートナーを目指しています。",

  facts: [
    {
      icon: "pin",
      color: "#4a9d5f",
      label: "活動エリア",
      text: "佐賀県唐津市周辺（長崎・福岡も対応）",
    },
    {
      icon: "truck",
      color: "#b58a3c",
      label: "経歴",
      tags: [
        "工場品質保証",
        "陸上自衛隊 4年",
        "ドバイ勤務",
        "Amazon物販",
        "データ抽出(SQL)",
        "システム開発",
        "測量補助",
        "設営・搬入",
      ],
    },
    {
      icon: "ai",
      color: "#8b5cf6",
      label: "得意分野",
      tags: [
        "Python",
        "VBA",
        "GAS",
        "RPA",
        "生成AI",
        "業務改善ツール開発",
        "ホームページ制作",
        "現場作業の補助",
      ],
    },
    {
      icon: "chat",
      color: "#e08a3c",
      label: "口癖",
      text: "「めんどくせ」「意味なくない？なら変えよう」「無駄なことは、自分じゃなくて機械で」——面倒が嫌いだからこそ、効率化・自動化が得意になりました。",
    },
    {
      icon: "badminton",
      color: "#5566cc",
      label: "バドミントン",
      text: "学生時代に県大会優勝、実業団で約1年プレー（現在は競技選手ではありません）",
    },
    {
      icon: "star",
      color: "#2fa39a",
      label: "スタンス",
      text: "できること・できないことを正直にお伝えします",
    },
  ] satisfies ProfileFact[],
};
