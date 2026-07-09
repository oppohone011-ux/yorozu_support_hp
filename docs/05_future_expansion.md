# 05. 今後の拡張方針（Future Expansion）

現状は「まずLPとして公開できること」を優先した1ページ構成です。
ここでは、地域密着サポートサイトへ育てていく段階的なロードマップをまとめます。

---

## 拡張の基本方針

- **データ駆動を保つ**：文言・一覧は `src/data/` に置き、`.tsx` へ直書きしない。
- **セクション＝コンポーネント**：再利用できる単位で分ける。
- **1歩ずつ**：料金 → 実績 → ブログ の順に、必要になったものから足す。
- **表現ポリシーを常に守る**：[`03_content_policy.md`](./03_content_policy.md)（特に法令配慮）。

## サービス別ページ化

- `src/app/services/[slug]/page.tsx` を追加し、`data/services.ts` の `slug` と対応させる。
- まずは需要の高い **バドミントン** と **PC・AIサポート** から個別ページ化するのがおすすめ。
- 個別ページには「対応メニュー・料金目安・事例・FAQ・CTA」を載せる。

## 料金表の追加

- `src/data/pricing.ts`（新規）に料金データを定義 → `/pricing` ページで表示。
- 断定価格を避け「目安」として表現（ポリシー遵守）。
- LP内にも「料金の考え方」ミニセクションを足せる。

## お客様の声の追加

- `src/data/testimonials.ts`（新規）を作り、`TestimonialSection` を追加。
- 実在の声のみ・許可を得て掲載。

## 実績の追加

- `src/data/works.ts`（新規）＋ `/works` ページ。
- 個人情報・プライバシーに配慮（顔・住所などを出さない）。

## ブログの追加

- `/blog` に記事一覧＋個別記事。まずはMarkdownベースが管理しやすい。
- 地元の話題・お役立ち情報でSEOと親しみを両立。

## SEO対策

### 実装済み（コード側）✅

- ✅ 地域キーワード入りタイトル・description（[`src/app/layout.tsx`](../src/app/layout.tsx)）
- ✅ OGP・Twitterカード（`public/og-image.png`＝プロフィール写真ベース1200×630）
- ✅ 構造化データ JSON-LD（LocalBusiness：所在地・対応エリア・得意分野）
- ✅ `sitemap.ts` / `robots.ts`（/sitemap.xml・/robots.txt を自動配信）
- ✅ canonical・robots メタ

### 公開時に必ずやること ⚠️

1. **ドメイン取得・デプロイ後、[`src/data/site.ts`](../src/data/site.ts) の `url` を本番URLに差し替える**
   （現在は仮の `karatsu-yorozu.example.com`。OGP/sitemap/robotsがこのURL基準）
2. 電話番号が確定したら JSON-LD（layout.tsx）に `telephone` を追加

### 検索に載せるための登録作業（サイト外・運営者がやること）

- **Google Search Console** に登録し、sitemap.xml を送信（インデックス促進）
- **Googleビジネスプロフィール** を作成（「唐津 パソコン相談」等のローカル検索・地図表示に最重要）
- ページ追加時は `sitemap.ts` にもURLを追記

### 今後の上積み

- ページごとの `metadata`（/pricing 等を作ったら個別設定）
- ブログ記事による「唐津×サービス名」ロングテール獲得（月2〜4記事）
- お客様の声・実績を増やして E-E-A-T（経験・信頼性）を強化

## LINE問い合わせ導線

- 現状はCTAのリンク先が仮（`#line-placeholder`）。
- 公式アカウント作成後、[`src/data/site.ts`](../src/data/site.ts) の `contact.line.href` を
  実URL（例：`https://lin.ee/xxxx`）へ差し替えるだけで全CTAに反映される。

## Googleビジネスプロフィール連携

- Googleビジネスプロフィールを作成し、営業時間・エリア・写真を整備。
- LPフッターに地図・レビューリンクを追加。
- 「唐津 パソコン相談」等のローカル検索からの流入を狙う。

---

## 追加時のチェックリスト

- [ ] 文言は `data/` に置いたか（`.tsx` 直書きになっていないか）
- [ ] 法令・誇張への配慮はOKか（`03_content_policy.md`）
- [ ] スマホ表示で崩れないか
- [ ] 連絡先など仮の値を本番に差し替えたか
- [ ] `npm run build` が通るか
