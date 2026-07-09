# 06. ブログのセットアップ（microCMS）

ブログ・お知らせは **microCMS**（日本製ヘッドレスCMS・無料枠あり）を使う設計です。
スマホのブラウザから記事を書けるので、現場の合間の投稿にも向いています。

> 💡 microCMS未設定でもサイトは正常に動きます。
> ブログ部分が「準備中」表示になるだけなので、あわてて設定しなくてOK。

---

## 1. microCMSに登録する（無料）

1. https://microcms.io/ でアカウント作成
2. サービスを作成（サービスID は自由。例: `karatsu-yorozu`）
   - このIDが `MICROCMS_SERVICE_DOMAIN` になります

## 2. API を作成する（ブログテンプレート）✅設定済み

サービス作成時に **「ブログ」テンプレート** を選ぶと、次の構成で自動作成されます
（このサイトのコードはこの構成に対応済み）:

- エンドポイント: `blogs`（記事）、`categories`（カテゴリ）
- 記事のフィールド:

| フィールドID | 表示名 | 種類 |
|---|---|---|
| `title` | タイトル | テキストフィールド |
| `content` | 内容 | リッチエディタ |
| `eyecatch` | アイキャッチ | 画像 |
| `category` | カテゴリ | categories への参照 |

カテゴリは「categories」APIに追加する（例:
`お知らせ` `作業事例` `AI活用` `パソコンの小技` `バドミントン` `EC・フリマ`）。

## 3. APIキーを設定する

1. microCMS管理画面 → 「権限管理」→ APIキーをコピー（GET権限のみでOK）
2. プロジェクト直下に `.env.local` を作成（`.env.local.example` をコピー）:

```bash
MICROCMS_SERVICE_DOMAIN=karatsu-yorozu   # あなたのサービスID
MICROCMS_API_KEY=xxxxxxxxxxxxxxxx        # コピーしたAPIキー
```

3. 開発サーバーを再起動（`Ctrl+C` → `npm run dev`）

これで `/blog` に記事が表示され、トップページの「ブログ・お知らせ」も最新3件に切り替わります。

## 4. 公開時（Vercel）の設定

1. Vercelのプロジェクト設定 → Environment Variables に上記2つを登録
2. **即時反映させたい場合**：microCMS管理画面 → API設定 → Webhook で
   Vercelの「Deploy Hook」URLを登録（記事公開のたびに自動再ビルド）
   - Webhookを設定しない場合も、**10分ごとに自動反映**されます（ISR設定済み）

## 5. 記事の書き方・運用

- microCMS管理画面（スマホブラウザ可）から「blog」→「追加」で書くだけ
- 更新頻度は無理をせず **月2〜4記事** 目安（docs/05参照）
- ネタ例: 対応した作業の紹介（許可を得て）/ AIの便利な使い方 / パソコンの小技 / バドミントン練習のコツ / お知らせ・営業日
- 表現ルールは通常ページと同じく [`03_content_policy.md`](./03_content_policy.md) に従う

## 実装の場所（開発者向け）

| ファイル | 役割 |
|---|---|
| [`src/lib/microcms.ts`](../src/lib/microcms.ts) | APIクライアント・型定義・未設定フォールバック |
| [`src/app/blog/page.tsx`](../src/app/blog/page.tsx) | 記事一覧（0件なら準備中表示） |
| [`src/app/blog/[id]/page.tsx`](../src/app/blog/[id]/page.tsx) | 記事詳細（ISR・OGP対応） |
| [`src/components/sections/BlogTeaserSection.tsx`](../src/components/sections/BlogTeaserSection.tsx) | トップの最新3件（未設定時は予告表示） |
