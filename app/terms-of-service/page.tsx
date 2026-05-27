import type { Metadata } from "next";
import { Breadcrumb, BreadcrumbJsonLd } from "../components/Breadcrumb";
import { SITE_NAME } from "../lib/site";

export const metadata: Metadata = {
  title: "利用規約",
  description: `${SITE_NAME}の利用規約。当サイトを利用する上での条件、禁止事項、免責事項について記載しています。`,
};

export default function TermsPage() {
  const crumbs = [
    { name: "ホーム", href: "/" },
    { name: "利用規約", href: "/terms-of-service/" },
  ];
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumb items={crumbs} />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8 pb-6 border-b border-border">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-3">
            利用規約
          </h1>
          <p className="text-foreground/75 text-sm leading-relaxed">
            {SITE_NAME}（以下「当サイト」）のご利用にあたり、以下の利用規約に同意いただくものとします。
          </p>
        </header>
        <div className="article-body">
          <h2>第1条（適用）</h2>
          <p>
            本規約は、当サイトを利用するすべてのユーザーに適用されます。ユーザーは、当サイトを利用することにより、本規約に同意したものとみなします。
          </p>
          <h2>第2条（コンテンツの利用）</h2>
          <p>
            当サイトに掲載されている文章・画像・データ等の著作権は、当サイト運営者または正当な権利を有する第三者に帰属します。無断での複製・転載・改変を禁じます。引用の場合は、出典を明記の上、引用要件を満たす範囲で行ってください。
          </p>
          <h2>第3条（禁止事項）</h2>
          <ul>
            <li>当サイトの運営を妨げる行為</li>
            <li>第三者の権利または利益を侵害する行為</li>
            <li>虚偽の情報を当サイトに提供する行為</li>
            <li>当サイトの情報を不正に利用する行為</li>
            <li>法令または公序良俗に違反する行為</li>
          </ul>
          <h2>第4条（情報の正確性）</h2>
          <p>
            当サイトに掲載されている業者情報・料金・補助金・法律情報等は、掲載時点で確認できる範囲の情報です。変動の可能性があるため、契約・申請等の前に必ず公式サイトおよび行政窓口にて最新情報をご確認ください。
          </p>
          <h2>第5条（免責事項）</h2>
          <p>
            当サイトの情報を利用したことにより発生したいかなる損害についても、当サイトは責任を負わないものとします。リンク先の外部サイトおよびサービスについても、当サイトは関与せず責任を負いません。
          </p>
          <h2>第6条（規約の変更）</h2>
          <p>
            当サイト運営者は、必要に応じて本規約を変更することができるものとします。変更後の規約は当ページに掲載した時点で効力を生じるものとします。
          </p>
          <p className="text-muted text-sm">最終更新日：2026年5月28日</p>
        </div>
      </article>
    </>
  );
}
