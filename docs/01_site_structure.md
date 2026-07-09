# 01. サイト構成（Site Structure）

## 現在のページ構成

現状は **1ページ完結のLP**（`/`）です。
セクションを縦に並べ、各セクションはコンポーネント化しています。

| 順 | セクション | コンポーネント | データ | 役割 |
|----|-----------|----------------|--------|------|
| 1 | ファーストビュー | `HeroSection` | `site` / `services` | コンセプトと相談CTAを最初に伝える |
| 2 | 悩み・共感 | `ProblemSection` | `problems` | 「あるある」で共感 → 中心コピーで受け止める |
| 3 | サービス一覧 | `ServiceSection` | `services` | 6サービスをカードで提示 |
| 4 | 相談事例 | `CaseSection` | `cases` | 「こんな相談もできる」とイメージ |
| 5 | バドミントン特集 | `BadmintonSection` | `badminton` | 練習相手サポートを詳しく（実績は正直に） |
| 6 | 物販・EC | `EcSection` | `ec` | 運営者の物販活動・ECライド紹介 |
| 7 | 実績・対応事例 | `WorksSection` | `works` | 対応した内容で信頼感 |
| 8 | お客様の声 | `TestimonialSection` | `testimonials` | 利用者の声で安心感 |
| 9 | 選ばれる理由 | `ReasonSection` | `reasons` | 安心感・相談しやすさを4点で |
| 10 | 料金 | `PricingSection` | `pricing` | お見積り方針＋時間単位の参考 |
| 11 | お支払いについて | `PaymentSection` | `payment` | 前払い/後払いの不安を3枚カード＋図解で解消 |
| 12 | 対応地域 | `ServiceAreaSection` | `areas` | エリア一覧＋Googleマップ |
| 13 | 経験・実績 | `ExperienceSection` | `experience` | 職歴の幅＋開発実績＋協力体制で信頼感（ブランディングの核） |
| 14 | プロフィール | `ProfileSection` | `profile` | 「誰が対応するか」で安心感 |
| 15 | 依頼の流れ | `FlowSection` | `flow` | 相談〜完了までの4ステップ |
| 16 | よくある質問 | `FaqSection` | `faq` | 不安・疑問を先回りで解消 |
| 17 | ブログ・お知らせ | `BlogTeaserSection` | `blog` | 予定トピックの予告（記事は将来 `/blog`） |
| 18 | 仲間募集・雑談歓迎 | `CollaborationSection` | `collaboration` | 「一緒に面白いことを」ゆるく呼びかけ |
| 19 | 注意事項 | `NoticeSection` | `notices` | 法令配慮・誠実な但し書き |
| 20 | お問い合わせ | `ContactSection` | `site` | LINE（モーダル）＋相談フォーム＋営業時間（電話・メール単独カードは置かない） |

> ブランディング方針：「何でもできます」ではなく **「いろいろな仕事を経験してきました」**。
> “現場もPCも知っている、経験豊富なサポート役” を軸にする。

共通パーツ：

- `Header`（layout）… 上部追従ヘッダー
- `Footer`（layout）… フッター
- `StickyCta`（layout）… スマホ下部の追従CTA

セクションの並び順は [`src/app/page.tsx`](../src/app/page.tsx) の記述順で決まります。
入れ替えたいときはここを並べ替えるだけです。

## 各セクションの役割（詳しく）

- **Hero**：一目で「何をしてくれる人か」と「相談していい場所」だと分かること。
- **Problem**：売り込みの前に、まず読み手の困りごとに寄り添う。
- **Service**：具体的にできることを列挙。ここに無いことも相談OKと明記。
- **Reason**：他との違い（地元・気軽・専門用語を使わない・少額単発OK）。
- **Profile**：顔が見える安心感。実績は誇張せず正直に。
- **Flow**：「相談だけでもいい」とハードルを下げる。
- **Notice**：不用品/スクラップの法令配慮など、誠実さで信頼を得る。
- **Contact**：迷わせず、好きな手段で連絡できるようにする。

## 今後追加できるページ案

現状は 実績・料金・対応地域・FAQ・お客様の声 などを **LP内のセクション** として持っています。
情報量が増えてきたら、それぞれ **独立ページへ切り出す** のがおすすめです
（例：実績が増えたら `/works`、記事を書き始めたら `/blog`）。
その際は LP のセクションを「ダイジェスト＋詳細ページへのリンク」に置き換えます。

将来ページを増やす場合は `src/app/` 配下にフォルダを作り `page.tsx` を置きます。
予約用の空フォルダを先に用意してあります（`services/ pricing/ works/ blog/ contact/`）。

| ページ | 想定URL | 内容 |
|--------|---------|------|
| 料金ページ | `/pricing` | サービス別の料金目安・作業例 |
| 実績ページ | `/works` | 対応事例・ビフォーアフター |
| ブログ | `/blog` | 地元の話題・お役立ち情報（SEO） |
| バドミントン専用 | `/services/badminton` | 練習メニュー・対象・料金 |
| PC・AIサポート専用 | `/services/pc-ai` | 対応内容の詳細・事例 |
| 暮らしのお手伝い専用 | `/services/kurashi` | 軽作業の具体例・対応範囲 |

サービス個別ページは [`src/data/services.ts`](../src/data/services.ts) の `slug`
（`pc-ai` / `kurashi` / `seiri` / `badminton` / `tsukisoi`）と対応させる想定です。
拡張の進め方は [`05_future_expansion.md`](./05_future_expansion.md) を参照。
