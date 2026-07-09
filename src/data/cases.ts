/**
 * 相談事例。
 * 目的：「こんな相談もできるんだ」とイメージしてもらう。
 * 実績（works.ts）が「やったこと」なのに対し、こちらは
 * 「よくある相談のきっかけ」を会話調で見せるもの。
 */

import type { IconName } from "@/components/ui/Icon";

export type ConsultCase = {
  icon: IconName;
  color: string;
  trigger: string; // お客様のきっかけ（悩み）
  response: string; // どう対応するか
};

export const cases: ConsultCase[] = [
  {
    icon: "pc",
    color: "#3b82c4",
    trigger: "パソコンが苦手",
    response: "初期設定や使い方をご案内しました。",
  },
  {
    icon: "ai",
    color: "#8b5cf6",
    trigger: "AIを使ってみたい",
    response: "ChatGPTなどの基本的な使い方をご説明しました。",
  },
  {
    icon: "tools",
    color: "#4a9d5f",
    trigger: "家具を動かしたい",
    response: "大型家具の移動をお手伝いしました。",
  },
  {
    icon: "leaf",
    color: "#5a9e3f",
    trigger: "一人では草刈りが大変",
    response: "庭の草刈りをお手伝いしました。",
  },
  {
    icon: "badminton",
    color: "#5566cc",
    trigger: "バドミントンの練習相手が欲しい",
    response: "基礎打ち・ノック・試合形式など、ご希望に合わせて対応します。",
  },
  {
    icon: "pc",
    color: "#2fa39a",
    trigger: "業務に合うシステムが欲しい",
    response: "業務システムの開発実績があります。規模や予算に合わせてご提案します。",
  },
  {
    icon: "truck",
    color: "#b58a3c",
    trigger: "テントを設営してほしい",
    response: "イベント設営の経験があります。業者に頼むより費用を抑えられる場合が多いです。",
  },
  {
    icon: "chat",
    color: "#e08a3c",
    trigger: "何でもいいから相談したい",
    response: "相談だけでも大歓迎です。内容が決まっていなくても大丈夫。",
  },
];
