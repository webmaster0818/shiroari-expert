import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SHORT, SITE_URL } from "./lib/site";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | シロアリ駆除の専門ガイド`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | シロアリ駆除の専門ガイド`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | シロアリ駆除の専門ガイド`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display font-bold text-primary-dark tracking-tight leading-tight"
        >
          <span className="block text-base md:text-lg">{SITE_SHORT}</span>
          <span className="block text-[10px] text-muted font-sans tracking-wider">
            バリア工法・ベイト工法を中立比較する専門ガイド
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-foreground/80">
          <Link href="/" className="hover:text-primary transition-colors">
            ホーム
          </Link>
          <Link
            href="/articles/shiroari-gyousha-erabikata/"
            className="hover:text-primary transition-colors"
          >
            業者の選び方
          </Link>
          <Link
            href="/articles/shiroari-kuchu-hiyou/"
            className="hover:text-primary transition-colors"
          >
            駆除費用
          </Link>
          <Link
            href="/articles/shiroari-hojo-kin-zenkoku/"
            className="hover:text-primary transition-colors"
          >
            補助金
          </Link>
          <Link
            href="/articles/shiroari-kasai-hoken/"
            className="hover:text-primary transition-colors"
          >
            火災保険
          </Link>
        </nav>
        <details className="md:hidden relative">
          <summary className="flex items-center justify-center w-10 h-10 rounded-sm border border-border hover:bg-muted-bg transition-colors">
            <svg
              className="w-5 h-5 text-primary-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="メニュー"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-60 bg-white border border-border rounded-sm shadow-lg py-2 z-50">
            <Link
              href="/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              ホーム
            </Link>
            <Link
              href="/articles/shiroari-gyousha-erabikata/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              業者の選び方
            </Link>
            <Link
              href="/articles/shiroari-kuchu-hiyou/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              駆除費用・5年TCO
            </Link>
            <Link
              href="/articles/hane-ari-mikiwake/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              羽アリ見分け方
            </Link>
            <Link
              href="/articles/shiroari-higai-shoujou/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              被害症状
            </Link>
            <Link
              href="/articles/shiroari-yobou/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              予防対策
            </Link>
            <Link
              href="/articles/shiroari-kasai-hoken/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              火災保険・地震保険
            </Link>
            <Link
              href="/articles/chuuko-juutaku-inspection/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              中古住宅インスペクション
            </Link>
            <Link
              href="/articles/shiroari-hojo-kin-zenkoku/"
              className="block px-4 py-2 text-sm hover:bg-muted-bg transition-colors"
            >
              47都道府県補助金
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-primary-dark text-white/85 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-lg font-bold mb-2 text-white">
              {SITE_NAME}
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              バリア工法とベイト工法を中立比較した専門ガイド。
              <br />
              5年TCO・火災保険・インスペクション連動まで、シロアリ駆除に本当に必要な情報を集約しました。
            </p>
          </div>
          <div>
            <p className="font-bold text-sm mb-3 text-white">主要コンテンツ</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/articles/shiroari-gyousha-erabikata/"
                  className="hover:text-white transition-colors"
                >
                  業者の選び方
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/shiroari-kuchu-hiyou/"
                  className="hover:text-white transition-colors"
                >
                  駆除費用と5年TCO
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/shiroari-hojo-kin-zenkoku/"
                  className="hover:text-white transition-colors"
                >
                  47都道府県補助金一覧
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/shiroari-kasai-hoken/"
                  className="hover:text-white transition-colors"
                >
                  火災保険・地震保険ガイド
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm mb-3 text-white">サイト情報</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/about/"
                  className="hover:text-white transition-colors"
                >
                  運営者情報
                </Link>
              </li>
              <li>
                <Link
                  href="/editorial/"
                  className="hover:text-white transition-colors"
                >
                  編集方針
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy/"
                  className="hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service/"
                  className="hover:text-white transition-colors"
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15 mt-8 pt-6 text-center text-xs text-white/55">
          <p>&copy; 2026 {SITE_NAME} All rights reserved.</p>
          <p className="mt-1">※当サイトはアフィリエイト広告を利用しています。</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <div className="bg-muted-bg border-b border-border py-1">
          <p className="max-w-5xl mx-auto px-4 text-[10px] text-muted">
            ※当サイトは広告を含みます。詳細は編集方針をご覧ください。
          </p>
        </div>
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
