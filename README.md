# 唐津よろずサポート LP

佐賀県唐津市周辺の地元向け「よろずサポート」ランディングページ。
パソコン・AI・軽作業・暮らしのお手伝い・バドミントン練習相手・話し相手まで、
頼み先に迷う“ちょっと困った”を気軽に相談できる **困りごと相談パートナー** のサイトです。

> コンセプト：システム会社に頼むほどじゃない。便利屋さんに頼むほどでもない。
> そんな“ちょっと困った”を気軽に相談できる地元のサポート。

---

## プロジェクト概要

- **目的**：地元の人が気軽に相談できる窓口をつくる。将来はサービス追加・料金表・実績・ブログを足して育てる前提。
- **技術**：Next.js 15（App Router）/ React 19 / TypeScript / 素のCSS（CSS変数でトークン管理）
- **現状**：まず公開できる **1ページ完結のLP**。複数ページへ拡張しやすい構成にしてあります。

詳しい方針は [`docs/`](./docs/) にまとまっています（最初に [`docs/00_overview.md`](./docs/00_overview.md) を読んでください）。

## 起動方法

```bash
npm install      # 初回のみ
npm run dev      # 開発サーバ（http://localhost:3000）
npm run build    # 本番ビルド
npm run start    # 本番ビルドを起動
```

Node.js は v18 以上（開発時 v24 で確認）。

## フォルダ構成

```
.
├── docs/                      # 設計・運用ドキュメント（下記参照）
├── public/                    # 画像・OGP・favicon などの静的アセット
├── src/
│   ├── app/                   # ルーティング（App Router）
│   │   ├── layout.tsx         # 全ページ共通の枠（メタ情報/Header/Footer/StickyCta）
│   │   ├── page.tsx           # トップページ＝LP本体（セクションを並べるだけ）
│   │   ├── globals.css        # ベース＆共通コンポーネントのスタイル
│   │   ├── services/          # ┐
│   │   ├── pricing/           # │ 将来ページ用の予約フォルダ
│   │   ├── works/             # │ （page.tsx を置くとルートになる）
│   │   ├── blog/              # │
│   │   └── contact/           # ┘
│   ├── components/
│   │   ├── layout/            # Header / Footer / StickyCta
│   │   ├── sections/          # LPの各セクション（下記）
│   │   ├── cards/             # ServiceCard など繰り返しカード
│   │   └── ui/                # Container / SectionHeading / Button（汎用パーツ）
│   ├── data/                  # ★文言・一覧データ（ここを編集して更新する）
│   │   ├── site.ts            # 屋号・連絡先(LINE/メール)・営業時間・ナビ
│   │   ├── services.ts        # サービス一覧
│   │   ├── problems.ts        # 悩み・共感の声＋中心コピー
│   │   ├── cases.ts           # 相談事例（こんな相談もOK）
│   │   ├── badminton.ts       # バドミントン特集
│   │   ├── ec.ts              # 物販・EC 活動紹介
│   │   ├── works.ts           # 実績・対応事例
│   │   ├── testimonials.ts    # お客様の声
│   │   ├── reasons.ts         # 選ばれる理由
│   │   ├── pricing.ts         # 料金（お見積り方針・時間単位）
│   │   ├── areas.ts           # 対応地域＋Googleマップ埋め込みURL
│   │   ├── profile.ts         # 運営者プロフィール
│   │   ├── flow.ts            # 依頼の流れ
│   │   ├── faq.ts             # よくある質問
│   │   ├── blog.ts            # ブログ予告（予定トピック）
│   │   ├── collaboration.ts   # 仲間募集・雑談歓迎
│   │   └── notices.ts         # 注意事項（法令配慮の文言）
│   ├── lib/                   # 共通ユーティリティ（今後追加）
│   └── styles/
│       └── tokens.css         # ★色・余白・角丸などのデザイントークン
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 主要ファイル

| やりたいこと | 触るファイル |
|--------------|--------------|
| 連絡先(LINE/メール)を変更する | [`src/data/site.ts`](./src/data/site.ts) の `contact` |
| サービスを追加・修正する | [`src/data/services.ts`](./src/data/services.ts) |
| 色・余白・フォントを調整する | [`src/styles/tokens.css`](./src/styles/tokens.css) |
| セクションの並び順を変える | [`src/app/page.tsx`](./src/app/page.tsx) |
| プロフィール文を直す | [`src/data/profile.ts`](./src/data/profile.ts) |
| 注意事項を直す | [`src/data/notices.ts`](./src/data/notices.ts) |

### セクション構成（上から順に）

Hero → 悩み共感 → サービス → 相談事例 → バドミントン特集 → 物販EC → 実績 →
お客様の声 → 選ばれる理由 → 料金 → 対応地域 → プロフィール → 依頼の流れ →
FAQ → ブログ予告 → 仲間募集 → 注意事項 → お問い合わせ
（対応コンポーネントは [`src/components/sections/`](./src/components/sections/)。並び順は [`src/app/page.tsx`](./src/app/page.tsx)）

## 公開前チェックリスト

- [x] LINE・メールを本番の値に設定（電話は掲載しない方針）
- [x] プロフィール写真・ヒーローイラスト・OGP画像・favicon
- [ ] `profile.ts` の氏名を実際のものにする
- [ ] ドメイン取得後、[`src/data/site.ts`](./src/data/site.ts) の `url` を本番URLへ差し替える
- [ ] `npm run build` が通ることを確認する
- [ ] Google Search Console / Googleビジネスプロフィール登録（docs/05参照）

## 今後の拡張方針

料金ページ・実績ページ・ブログ・サービス別ページなどへ段階的に拡張できます。
ロードマップは [`docs/05_future_expansion.md`](./docs/05_future_expansion.md) を参照。

## ドキュメント（`docs/`）

| ファイル | 内容 |
|----------|------|
| [`00_overview.md`](./docs/00_overview.md) | サイトの目的・ターゲット・コンセプト・主要サービス・問い合わせ導線 |
| [`01_site_structure.md`](./docs/01_site_structure.md) | 現在のページ構成・各セクションの役割・今後のページ案 |
| [`02_design_policy.md`](./docs/02_design_policy.md) | デザイン方針・色・フォント・余白・ボタン・スマホ対応 |
| [`03_content_policy.md`](./docs/03_content_policy.md) | 文章トーン・誇張しない・**法令配慮の表現ルール** |
| [`04_service_list.md`](./docs/04_service_list.md) | サービス別の説明・対象者・注意点 |
| [`05_future_expansion.md`](./docs/05_future_expansion.md) | 拡張ロードマップ（料金・実績・ブログ・SEO 等） |
| [`06_blog_setup.md`](./docs/06_blog_setup.md) | ブログのセットアップ手順（microCMS連携） |

---

## Claude Code / 他のAIが読むときの注意点

このリポジトリを編集するAIは、作業前に必ず次を守ってください。

1. **文言・一覧は `src/data/` に置く。** `.tsx` に直書きしない（保守性のため）。
2. **表現ポリシーを厳守する**（[`docs/03_content_policy.md`](./docs/03_content_policy.md)）。特に：
   - 不用品・スクラップは **「回収します」と書かない**。「相談・整理サポート」にとどめる（許可が必要な業務のため）。
   - バドミントンは **「学生時代に県大会優勝経験あり／現在は競技選手ではない」** と正直に書く。誇張しない。
   - 話し相手・付き添いは **医療・介護行為は行わない** と明記する。
3. **色・余白は `src/styles/tokens.css` で変える。** 各コンポーネントに直値を書かない。
4. **連絡先はLINE・メールのみ**（`src/data/site.ts` の `contact`、本番値設定済み）。**電話番号は運営者の意向で掲載しない** — 追加しないこと。`site.url` は仮ドメインなので公開時に差し替え。
5. 変更したら **`npm run build` が通ること** を確認する。
6. 迷ったら、まず [`docs/00_overview.md`](./docs/00_overview.md) → 該当docs の順に読む。
