# ECライドのメディア置き場

物販・ECセクションに表示する、ECライドの画像を置くフォルダです。

## 現在の状態

| ファイル | 内容 | 状態 |
|----------|------|------|
| `buying-list.jpg` | 仕入表（買い出しリスト） | ✅ 表示中 |
| `research.jpg` | 店舗リサーチ | ✅ 表示中 |

表示のON/OFFや差し替えは [`src/data/ectride.ts`](../../src/data/ectride.ts) で管理しています。

## スマホ操作動画について

端末で撮った `app-demo.mp4`（約200MB）は、Webに直接載せると重すぎるため
`public/` の外の `media-source/` フォルダへ避難しています（デプロイ対象外）。

おすすめの載せ方：
1. YouTube に「限定公開」でアップロード
2. `src/data/ectride.ts` の `videoId` をその動画IDに差し替え
   （現在は紹介動画 `_1AE4hXuaMM` を表示中）

→ YouTube側で最適化・ストリーミングされるので、サイトは軽いままです。

## 画像を追加・差し替えるとき

1. この `public/ectride/` に画像を保存
2. `src/data/ectride.ts` の `src` をファイル名に合わせ、`ready: true` にする
