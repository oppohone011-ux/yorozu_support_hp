/**
 * microCMS クライアント（ブログ・お知らせ用）。
 *
 * microCMSの「ブログテンプレート」で作成したAPIに対応:
 *   - エンドポイント: blogs
 *   - フィールド: title / content(リッチエディタ) / eyecatch(画像) / category(参照)
 *
 * ▼ セットアップ（詳細は docs/06_blog_setup.md）
 *   .env.local に以下を設定（Vercel には環境変数として登録）
 *     MICROCMS_SERVICE_DOMAIN=サービスID（例: x24fmj1860）
 *     MICROCMS_API_KEY=APIキー
 *
 * キー未設定でもビルド・表示が壊れないよう、
 * 取得系はすべて「空を返す」フォールバック付き。
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

/** ブログテンプレートの API スキーマに対応する記事型 */
export type BlogPost = {
  id: string;
  title: string;
  /** リッチエディタのHTML（一覧取得時は含まれない） */
  content?: string;
  /** アイキャッチ画像（任意） */
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
  /** カテゴリ（categories APIへの参照） */
  category?: {
    id: string;
    name: string;
  } | null;
  publishedAt: string;
  revisedAt?: string;
};

type ListResponse = {
  contents: BlogPost[];
  totalCount: number;
};

/** microCMS の設定が済んでいるか（未設定なら準備中表示に切り替える用） */
export function isBlogConfigured(): boolean {
  return Boolean(SERVICE_DOMAIN && API_KEY);
}

async function fetchMicroCMS<T>(
  path: string,
  query: Record<string, string> = {}
): Promise<T | null> {
  if (!isBlogConfigured()) return null;

  const params = new URLSearchParams(query).toString();
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${path}${
    params ? `?${params}` : ""
  }`;

  try {
    const res = await fetch(url, {
      headers: { "X-MICROCMS-API-KEY": API_KEY as string },
      // 10分ごとに再取得（Vercel上でのISR）。即時反映したい場合は
      // microCMSのWebhookでVercelの再デプロイを叩く（docs/06参照）。
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    // ネットワークエラー等でもページ全体は落とさない
    return null;
  }
}

/** 記事一覧（新しい順）。未設定・失敗時は空配列。 */
export async function getBlogPosts(limit = 20): Promise<BlogPost[]> {
  const data = await fetchMicroCMS<ListResponse>("blogs", {
    limit: String(limit),
    orders: "-publishedAt",
    // 一覧では本文を取得しない（軽量化）
    fields: "id,title,eyecatch,category,publishedAt,revisedAt",
  });
  return data?.contents ?? [];
}

/** 記事1件。未設定・見つからない場合は null。 */
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  return await fetchMicroCMS<BlogPost>(`blogs/${encodeURIComponent(id)}`);
}

/** 記事本文HTMLから素のテキスト要約を作る（meta description用） */
export function extractDescription(html: string, length = 100): string {
  const text = html
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length)}…` : text;
}

/** 日付表示用（例: 2026.07.09） */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}
