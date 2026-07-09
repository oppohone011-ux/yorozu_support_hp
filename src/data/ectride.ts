/**
 * ECライド（個人開発の物販支援システム）の紹介メディア。
 * 物販・EC セクションで、PR動画とアプリのスクリーンショットを見せる。
 *
 * ▼ スクリーンショットの追加/差し替え
 *   1. public/ectride/ に画像を保存
 *   2. その項目の src をファイル名に合わせ、ready を true にする
 *   → ready が false の間は「準備中」枠が表示されます（壊れた画像は出ません）。
 *
 * ▼ スマホ操作動画について
 *   端末で撮った動画（app-demo.mp4）は 約200MB あり、Webに直接載せると
 *   表示が重くなるため public/ の外（media-source/）へ避難しています。
 *   → YouTubeに「限定公開」でアップして videoId を差し替えるのが手軽で軽量です。
 */

export const ectride = {
  // YouTube PR動画（https://youtu.be/_1AE4hXuaMM）
  videoId: "_1AE4hXuaMM",
  videoTitle: "ECライド 紹介動画",

  /**
   * スマホ版の操作デモ動画（自前ホスティング）。
   * 元動画（73MB）を media-source/ に保管し、Web用に圧縮した約4MB版を配信。
   * 差し替え時も ffmpeg で圧縮してから置くこと（README参照）。
   */
  appDemo: {
    src: "/ectride/app-demo.mp4",
    caption: "スマホ版 操作デモ",
    desc: "実際の操作の流れ（約1分）",
  },

  // スマホ画面（縦長）
  screenshots: [
    {
      src: "/ectride/buying-list.jpg",
      caption: "仕入表（買い出しリスト）",
      desc: "店頭で「買うもの・買った・買えず」を管理",
      ready: true,
    },
    {
      src: "/ectride/research.jpg",
      caption: "店舗リサーチ",
      desc: "「本当に直近で売れてる？」を確認して仕入れ",
      ready: true,
    },
  ],

  // PC画面（横長・ブラウザ枠で表示）
  desktopShots: [
    {
      src: "/ectride/pc-inventory.png",
      caption: "仕入・在庫管理",
      desc: "在庫状況・収益をダッシュボードで一覧管理",
      ready: true,
    },
    {
      src: "/ectride/pc-profit.png",
      caption: "経営ダッシュボード",
      desc: "売上・利益・在庫の見込みまでまとめて可視化",
      ready: true,
    },
  ],
};
