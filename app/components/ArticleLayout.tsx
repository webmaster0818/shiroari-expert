import Link from "next/link";
import { ArticleMeta } from "../lib/articles";
import { SITE_NAME, SITE_URL } from "../lib/site";
import { Breadcrumb, BreadcrumbJsonLd, Crumb } from "./Breadcrumb";
import { CTAButton, PhoneCTA } from "./CTAButton";
import { getTopProviders } from "../lib/providers";

type Props = {
  meta: ArticleMeta;
  children: React.ReactNode;
  publishedAt?: string;
  updatedAt?: string;
};

export function ArticleLayout({
  meta,
  children,
  publishedAt = "2026-05-28",
  updatedAt = "2026-05-28",
}: Props) {
  const crumbs: Crumb[] = [
    { name: "ホーム", href: "/" },
    { name: meta.shortTitle, href: `/articles/${meta.slug}/` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/articles/${meta.slug}/`,
    },
  };

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumb items={crumbs} />

      <article className="max-w-4xl mx-auto px-4 pb-12">
        <header className="mb-8 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-3 py-1 rounded-sm">
              {meta.category}
            </span>
            <span className="bg-accent/10 text-accent border border-accent/20 text-xs font-bold px-3 py-1 rounded-sm">
              2026年最新
            </span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold leading-snug text-primary-dark mb-3">
            {meta.title}
          </h1>
          <p className="text-foreground/75 text-sm leading-relaxed">
            {meta.description}
          </p>
          <p className="text-xs text-muted mt-3">
            公開日 {publishedAt} ／ 最終更新 {updatedAt}
          </p>
        </header>

        <div className="article-body">{children}</div>

        <ArticleBottomCta />
        <RelatedArticles current={meta.slug} />
      </article>
    </>
  );
}

function ArticleBottomCta() {
  const top = getTopProviders();
  return (
    <section className="mt-12 bg-muted-bg border border-border rounded-md p-6">
      <h2 className="font-display text-lg md:text-xl font-bold mb-2 text-primary-dark text-center">
        シロアリ被害の相談は、専門業者の現地調査から
      </h2>
      <p className="text-sm text-foreground/80 text-center mb-5 leading-relaxed">
        本格被害は床下構造を熟知した専門業者の領域です。<br className="hidden md:inline" />
        まずは現地調査・見積もり無料の専門業者に状況を相談しましょう。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {top.map((p) => (
          <CTAButton
            key={p.slug}
            href={p.url}
            external
            sponsored
            variant="primary"
            className="w-full"
          >
            {p.name}
          </CTAButton>
        ))}
      </div>
      <div className="flex justify-center">
        <PhoneCTA phone="0120-987-282" label="ハウスプロテクトに電話相談" />
      </div>
    </section>
  );
}

function RelatedArticles({ current }: { current: string }) {
  const related = [
    { slug: "shiroari-gyousha-erabikata", title: "シロアリ駆除業者の選び方" },
    { slug: "shiroari-kuchu-hiyou", title: "駆除費用と5年TCO比較" },
    { slug: "shiroari-jibun-de", title: "シロアリを自分で駆除する方法" },
    { slug: "hane-ari-mikiwake", title: "羽アリの見分け方" },
    { slug: "shiroari-higai-shoujou", title: "シロアリ被害の症状" },
    { slug: "shiroari-yobou", title: "シロアリ予防対策" },
    { slug: "shiroari-kasai-hoken", title: "火災保険・地震保険の適用条件" },
    { slug: "chuuko-juutaku-inspection", title: "中古住宅インスペクション" },
    { slug: "shiroari-yukashita-tenken", title: "床下点検の費用相場" },
    { slug: "shiroari-hojo-kin-zenkoku", title: "47都道府県の補助金一覧" },
  ].filter((r) => r.slug !== current);

  return (
    <section className="mt-12">
      <h2 className="font-display text-lg md:text-xl font-bold mb-4 text-primary-dark pl-3 border-l-4 border-accent">
        関連記事
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        {related.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/articles/${r.slug}/`}
              className="block bg-white border border-border rounded-sm px-4 py-3 hover:border-primary hover:bg-muted-bg transition-colors"
            >
              {r.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
