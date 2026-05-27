import type { Metadata } from "next";
import { Breadcrumb, BreadcrumbJsonLd } from "../components/Breadcrumb";
import { SITE_NAME } from "../lib/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${SITE_NAME}の運営者情報、運営方針、お問い合わせ方法についてご案内します。`,
};

export default function AboutPage() {
  const crumbs = [
    { name: "ホーム", href: "/" },
    { name: "運営者情報", href: "/about/" },
  ];
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumb items={crumbs} />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8 pb-6 border-b border-border">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-3">
            運営者情報
          </h1>
          <p className="text-foreground/75 text-sm leading-relaxed">
            当サイトの運営方針・編集体制・お問い合わせ方法をご案内します。
          </p>
        </header>
        <div className="article-body">
          <h2>サイト概要</h2>
          <p>
            {SITE_NAME}（以下「当サイト」）は、シロアリ被害でお困りの住宅オーナー・中古住宅購入予定者・賃貸オーナーに向けて、バリア工法とベイト工法の中立比較、5年TCO計算の考え方、火災保険・地震保険の適用条件、47都道府県の補助金確認ポイント、羽アリ・蟻道などの識別方法を提供するメディアです。
          </p>
          <h2>運営方針</h2>
          <ul>
            <li>掲載するシロアリ駆除業者は、公式サイトで対応エリア・料金・保証内容を都度確認します。</li>
            <li>架空の業者・推測情報・誇張表現は掲載しません。</li>
            <li>料金・補助金・保険適用など変動する内容は、確認日と出典を明記します。</li>
            <li>公益社団法人日本しろあり対策協会の加盟業者を中心に紹介し、特定工法に偏らない中立記事を目指します。</li>
          </ul>
          <h2>編集体制</h2>
          <p>
            当サイトの記事は、シロアリ駆除分野の一次情報（業者公式サイト・自治体公式・公益社団法人日本しろあり対策協会・国税庁・金融庁の公開情報）をもとに編集しています。専門的判断が必要な医療・法律・税務トピックについては該当領域の公的資料を出典として明記しています。
          </p>
          <h2>お問い合わせ</h2>
          <p>
            記事に関するご指摘、業者情報の更新依頼、取材・提携のご相談などは、お問い合わせフォームまたはメールでご連絡ください。<strong>業者の選定基準・料金記載の根拠</strong>についてもご質問にお応えします。
          </p>
          <p className="text-muted text-sm">
            ※お問い合わせフォームは準備中です。ドメイン確定後にフォームを公開予定です。
          </p>
        </div>
      </article>
    </>
  );
}
