import type { Metadata } from "next";
import { Breadcrumb, BreadcrumbJsonLd } from "../components/Breadcrumb";
import { SITE_NAME } from "../lib/site";

export const metadata: Metadata = {
  title: "編集方針",
  description: `${SITE_NAME}の編集方針、業者選定基準、広告掲載基準について解説します。`,
};

export default function EditorialPage() {
  const crumbs = [
    { name: "ホーム", href: "/" },
    { name: "編集方針", href: "/editorial/" },
  ];
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumb items={crumbs} />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8 pb-6 border-b border-border">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-3">
            編集方針
          </h1>
          <p className="text-foreground/75 text-sm leading-relaxed">
            当サイトの記事制作・業者選定・広告掲載に関する基本ポリシーです。
          </p>
        </header>
        <div className="article-body">
          <h2>記事制作のポリシー</h2>
          <ol>
            <li>業者情報は公式サイトを一次情報とし、確認日を併記します。</li>
            <li>料金は公式記載がある場合のみレンジで表記し、なければ「要見積もり」と明記します。</li>
            <li>感染症・法律など専門領域は、公的機関の公開情報を出典として明記します。</li>
            <li>個人体験の演出やレビュー捏造は行いません。</li>
          </ol>
          <h2>業者選定の基準</h2>
          <ul>
            <li>法人格を持ち、運営会社情報が公式サイトで確認できること。</li>
            <li>対応エリアと施工内容が公式サイトに明記されていること。</li>
            <li>公益社団法人日本しろあり対策協会の加盟、または同等の防除施工士・しろあり防除士の資格保持者を採用していること。</li>
            <li>無料現地調査・見積もりに対応していること。</li>
          </ul>
          <h2>広告掲載基準</h2>
          <p>
            当サイトはアフィリエイト広告を含みますが、編集判断は広告主から独立しています。広告主の意向によって順位やレビュー内容を改変することはありません。広告リンクには <code>rel=&quot;sponsored&quot;</code> 属性を付与し、PR表記を明示します。
          </p>
          <h2>免責事項</h2>
          <p>
            業者の料金・対応エリア・保証内容は更新される可能性があります。申込み・契約前に必ず公式サイトで最新情報をご確認ください。当サイト記載の情報による損失について、当サイトは責任を負いかねます。
          </p>
        </div>
      </article>
    </>
  );
}
