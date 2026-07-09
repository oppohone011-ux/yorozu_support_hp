/**
 * サイト全体の基本情報・問い合わせ導線をまとめた設定ファイル。
 * LINE・メールは本番の値を設定済み（2026-07-09）。
 * url のみ仮ドメインのため、公開時に差し替えてください。
 */

export const site = {
  name: "唐津よろずサポート",
  tagline: "地元の“ちょっと困った”を、気軽に相談できるところ",
  // ↓ 唐津市周辺を対象にした地域密着サービスであることを明示
  area: "佐賀県唐津市周辺",
  description:
    "パソコン・AI・軽作業・暮らしのお手伝い・バドミントン練習相手まで。システム会社に頼むほどじゃない、そんな困りごとの相談パートナーです。",
  /**
   * SEO用の説明文（検索結果に出る想定・地域キーワードを自然に含める）。
   */
  seoDescription:
    "佐賀県唐津市の何でも相談窓口。パソコン設定・AI活用・ホームページ制作・業務システム開発から、草刈り・家具移動・不用品整理の相談、バドミントンの練習相手まで。業者に頼むほどでもない小さな困りごとを、地元密着でサポートします。ご相談・お見積り無料。",
  /**
   * 本番URL。ドメイン取得・デプロイ後に必ず差し替えてください。
   * （OGP・sitemap・robots がこのURLを基準に生成されます）
   */
  url: "https://karatsu-yorozu.example.com",
  // 屋号ロゴ代わりの絵文字（画像を用意したら差し替え）
  logoMark: "🌾",
} as const;

/**
 * 問い合わせ手段（LINE・メール）。
 * 電話は運営者の意向により掲載しない（2026-07決定）。
 */
export const contact = {
  line: {
    label: "LINEで相談",
    value: "@139kzczx",
    // LINE公式アカウントの友だち追加リンク
    href: "https://line.me/R/ti/p/@139kzczx",
    icon: "💬",
    note: "友だち追加でそのまま相談できます",
  },
  email: {
    label: "メールで相談",
    value: "corelinks.info.contact@gmail.com",
    href: "mailto:corelinks.info.contact@gmail.com",
    icon: "✉️",
    note: "写真を送っていただくとスムーズです",
  },
} as const;

/**
 * 営業時間・定休日。○:○ 部分は仮置き。実際の時間に差し替えてください。
 */
export const businessHours = {
  hours: "9:00〜19:00（仮）",
  holiday: "不定休",
  note: "まずはお気軽にご連絡ください。返信は当日〜翌日を目安にしています。",
};

/**
 * ナビゲーション。セクション・ページを増やしたらここに追記。
 * アンカーは「/#〜」形式（ブログ等の別ページからでも効くように）。
 * ヘッダーに別のCTAボタンは置かない（お問い合わせとの重複防止）。
 */
export const navLinks = [
  { label: "サービス", href: "/#services" },
  { label: "実績", href: "/#works" },
  { label: "料金", href: "/#pricing" },
  { label: "対応地域", href: "/#areas" },
  { label: "ブログ", href: "/blog" },
  { label: "よくある質問", href: "/#faq" },
  { label: "お問い合わせ", href: "/#contact" },
] as const;
