import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { areas } from "@/data/areas";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { LineModal } from "@/components/layout/LineModal";

/**
 * Webフォント（next/fontで自前配信・FOUT対策込み）。
 * 本文・見出しとも Noto Sans JP。OSに依存せず、どの端末でも同じ読みやすさに。
 * （見出し用の丸ゴシック Zen Maru Gothic は試したが不採用：2026-07）
 */
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

/**
 * SEO・OGPの基本設定。
 * ⚠️ site.url（data/site.ts）は仮ドメイン。公開時に必ず差し替えること。
 * 詳しくは docs/05_future_expansion.md の「SEO対策」を参照。
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}｜唐津市のパソコン・AI相談、軽作業、困りごとサポート`,
    template: `%s｜${site.name}`,
  },
  description: site.seoDescription,
  keywords: [
    "唐津 便利屋",
    "唐津 パソコン相談",
    "唐津 パソコン設定",
    "唐津 AI 相談",
    "唐津 ホームページ制作",
    "唐津 草刈り",
    "唐津 家具移動",
    "唐津 不用品 相談",
    "唐津 バドミントン 練習相手",
    "唐津 何でも相談",
    "佐賀 業務システム開発",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: site.name,
    title: `${site.name}｜${site.tagline}`,
    description: site.seoDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name}（${site.area}の困りごと相談パートナー）`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}｜${site.tagline}`,
    description: site.seoDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  // Google Search Console の所有権確認タグ（2026-07-10 登録）
  verification: {
    google: "CUJwBB0MhvlJqRK0YdQFPM4mv6VUKXLhRrh5SSQXLxY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2f7d5b",
};

/**
 * 構造化データ（JSON-LD / LocalBusiness）。
 * ローカル検索（「唐津 パソコン相談」等）でリッチに表示されやすくする。
 * 電話番号・URLなど未確定の情報は、確定してから追加する（偽の値を入れない）。
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.seoDescription,
  image: `${site.url}/og-image.png`,
  email: "corelinks.info.contact@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "佐賀県",
    addressLocality: "唐津市",
    addressCountry: "JP",
  },
  areaServed: areas.map((a) => ({
    "@type": "City",
    name: a.name,
  })),
  knowsAbout: [
    "パソコン設定",
    "AI活用支援",
    "ホームページ制作",
    "業務システム開発",
    "草刈り・軽作業",
    "家具移動・搬入",
    "イベント設営",
    "バドミントン練習サポート",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <LineModal />
      </body>
    </html>
  );
}
