import type { Metadata } from "next";
import Link from "next/link";
import { AREAS } from "../lib/areas";
import { Breadcrumb, BreadcrumbJsonLd, Crumb } from "../components/Breadcrumb";
import { SITE_URL } from "../lib/site";

/* エリア一覧のハブ。地方→都道府県で辿れるようにする。 */
export const metadata: Metadata = {
  title: "エリア別シロアリ駆除業者の比較｜47都道府県",
  description:
    "都道府県ごとに、対象になるシロアリの種類（ヤマトシロアリ／イエシロアリ）・羽アリが出る時期・補助金の状況・対応業者を整理しました。イエシロアリの分布は神奈川県以西の海岸線が中心で、地域によって対策が変わります。",
  alternates: { canonical: `${SITE_URL}/area/` },
};

const REGIONS = ["北海道", "東北", "関東", "中部", "関西", "中国", "四国", "九州"];

export default function Page() {
  const crumbs: Crumb[] = [
    { name: "ホーム", href: "/" },
    { name: "エリア別", href: "/area/" },
  ];
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Breadcrumb items={crumbs} />
      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary-dark">
          エリア別シロアリ駆除業者の比較
        </h1>
        <p className="mt-4 leading-relaxed">
          シロアリ対策は、住んでいる地域で<strong>対象になる種類が変わります</strong>。
          ヤマトシロアリは北海道北部を除く日本全土に分布しますが、被害の進み方が速いイエシロアリは
          「神奈川県以西の海岸線に沿った温暖な地域と千葉県の一部、南西諸島、小笠原諸島」に限られます。
          羽アリが出る時期も、沖縄は2月、東北・北海道は6月ごろと差があります。
        </p>
        <p className="mt-3 text-xs text-foreground/60">
          出典：公益社団法人 日本しろあり対策協会
          <a className="underline ml-1" href="https://www.hakutaikyo.or.jp/faq/1813.html" target="_blank" rel="noopener noreferrer">
            種類と分布
          </a>
          ／
          <a className="underline ml-1" href="https://www.hakutaikyo.or.jp/faq/2278.html" target="_blank" rel="noopener noreferrer">
            羽アリが飛ぶ時期
          </a>
          （2026-09-17 確認）
        </p>

        {REGIONS.map((r) => {
          const items = AREAS.filter((a) => a.region === r);
          if (!items.length) return null;
          return (
            <section key={r} className="mt-8">
              <h2 className="text-lg font-bold text-primary-dark">{r}</h2>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
                {items.map((a) => (
                  <Link key={a.slug} href={`/area/${a.slug}/`}
                        className="border border-border rounded-sm px-3 py-2 text-sm hover:border-primary">
                    <span className="font-bold">{a.pref}</span>
                    <span className="block text-xs text-foreground/60 mt-0.5">
                      {a.ie === "yes" ? "イエシロアリ分布域" : a.ie === "check" ? "県内で分かれる" : "ヤマトシロアリ中心"}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </article>
    </>
  );
}
