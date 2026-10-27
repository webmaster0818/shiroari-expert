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
          シロアリ対策は、お住まいの地域によって<strong>対象となる種類が異なります</strong>。
          ヤマトシロアリは北海道北部を除く日本全土に分布していますが、被害の進行が速いイエシロアリの分布は
          「神奈川県以西の海岸線に沿った温暖な地域と千葉県の一部、南西諸島、小笠原諸島」に限られています。
          羽アリが発生する時期も、沖縄は2月、東北・北海道は6月ごろと地域により異なります。
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
          （2026年9月17日確認）
        </p>

        {/* 「沖縄 シロアリ」で /area/ が表示されるため、沖縄の答えと沖縄県ページへの導線を上に置く。事実は上の協会Q&A（areas.ts と同じ） */}
        <div className="mt-6 border border-border rounded-sm bg-muted-bg p-4 text-sm leading-relaxed">
          <p className="font-bold text-primary-dark">地域によって対策が変わる主な点</p>
          <ul className="mt-3 space-y-2">
            <li>
              <span className="font-bold">沖縄県</span>：ヤマトシロアリに加えて、イエシロアリ（南西諸島が分布域）とダイコクシロアリ（奄美大島以南に分布）が対象です。ヤマトシロアリの羽アリは2月ごろの昼間、イエシロアリは6〜7月の夜に飛びます。
              <Link className="text-primary underline ml-1" href="/area/okinawa/">沖縄県のシロアリ駆除業者の比較</Link>
            </li>
            <li>
              <span className="font-bold">イエシロアリの分布域</span>：神奈川県以西の海岸線に沿った温暖な地域と千葉県の一部、南西諸島、小笠原諸島です。
            </li>
            <li>
              <span className="font-bold">東北・北海道</span>：ヤマトシロアリの羽アリは6月ごろの昼間です（沖縄県・東北・北海道以外は4〜5月の昼間）。
            </li>
          </ul>
        </div>

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
