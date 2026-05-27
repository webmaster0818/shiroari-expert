import type { Metadata } from "next";
import { Breadcrumb, BreadcrumbJsonLd } from "../components/Breadcrumb";
import { SITE_NAME } from "../lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${SITE_NAME}のプライバシーポリシー。当サイトでの個人情報の取り扱い、Cookie・アクセス解析、広告配信について記載しています。`,
};

export default function PrivacyPolicyPage() {
  const crumbs = [
    { name: "ホーム", href: "/" },
    { name: "プライバシーポリシー", href: "/privacy-policy/" },
  ];
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumb items={crumbs} />
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="mb-8 pb-6 border-b border-border">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-3">
            プライバシーポリシー
          </h1>
          <p className="text-foreground/75 text-sm leading-relaxed">
            {SITE_NAME}（以下「当サイト」）における個人情報の取り扱いについて定めます。
          </p>
        </header>
        <div className="article-body">
          <h2>個人情報の取得</h2>
          <p>
            当サイトでは、お問い合わせフォーム等を通じてユーザーからお名前・メールアドレス等の個人情報をご提供いただく場合があります。これらの情報は、ご質問への回答、サービスの提供以外の目的では利用いたしません。
          </p>
          <h2>個人情報の第三者提供</h2>
          <p>
            当サイトは、ご提供いただいた個人情報を法令に基づく場合を除き、本人の同意なく第三者に提供することはありません。
          </p>
          <h2>Cookie・アクセス解析</h2>
          <p>
            当サイトでは、サービス改善のためにCookieを使用したアクセス解析ツール（Googleアナリティクスなど）を利用する場合があります。これらのツールはトラフィックデータを収集しますが、データは匿名で個人を特定するものではありません。
          </p>
          <h2>広告配信</h2>
          <p>
            当サイトは第三者配信の広告サービス（Google AdSense、ASPアフィリエイトなど）を利用する場合があります。広告配信事業者はユーザーの興味に応じた商品やサービスの広告を表示するために、Cookieを使用してユーザーがそのサイトに訪問した履歴を利用することがあります。Cookieの無効化は各ブラウザの設定から行えます。
          </p>
          <h2>アフィリエイトリンク</h2>
          <p>
            当サイトには、A8.net、もしもアフィリエイト、アクセストレード、バリューコマースなどのアフィリエイトプログラムを通じた広告リンクが含まれます。広告リンク経由でユーザーが商品・サービスを購入・申込みした場合、当サイトは報酬を受け取ることがあります。
          </p>
          <h2>免責事項</h2>
          <p>
            当サイトに掲載されている情報は、可能な限り正確を期しておりますが、その正確性・完全性を保証するものではありません。当サイト情報を利用したことによるいかなる損害についても、当サイトは責任を負いかねます。
          </p>
          <h2>改定について</h2>
          <p>
            本ポリシーは、必要に応じて改定することがあります。最新版は当ページにてご確認ください。
          </p>
          <p className="text-muted text-sm">最終更新日：2026年5月28日</p>
        </div>
      </article>
    </>
  );
}
