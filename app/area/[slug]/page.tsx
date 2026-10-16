import type { Metadata } from "next";
import Link from "next/link";
import { AREAS, AREA_SLUGS, getArea } from "../../lib/areas";
import { SUBSIDIES } from "../../lib/subsidies";
import { PROVIDERS, getTopProviders } from "../../lib/providers";
import { ComparisonTable } from "../../components/ComparisonTable";
import { Breadcrumb, BreadcrumbJsonLd, Crumb } from "../../components/Breadcrumb";
import { CTAButton } from "../../components/CTAButton";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { SITE_NAME, SITE_URL } from "../../lib/site";

/*
  都道府県別の比較ページ。
  ⚠️ 全国共通の話だけで47ページ作ると、同じ内容の複製になる（他サイトで薄いページを
     大量に作ってnoindexする羽目になった）。このページで県ごとに変わるのは次の4点で、
     いずれも一次情報（公益社団法人 日本しろあり対策協会）に根拠がある:
       ① イエシロアリの分布に当たるか（神奈川県以西の海岸線・千葉県の一部・南西諸島）
       ② ヤマトシロアリの群飛時期（沖縄2月／東北・北海道6月ごろ／その他4〜5月）
       ③ ダイコクシロアリ（奄美大島以南）の対象か
       ④ 補助金の状況（subsidies.ts・自治体ごとに異なるため断定しない）
  ⚠️ 業者は providers.ts の**実在確認済み**のみ。対応エリアは公式表記をそのまま使う。
*/

export const dynamicParams = false;
export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) return {};
  const title = a.ie === "yes"
    ? `${a.pref}のシロアリ駆除業者を比較｜イエシロアリの分布域・費用と選び方`
    : `${a.pref}のシロアリ駆除業者を比較｜対象種と群飛時期・費用の目安`;
  return {
    title,
    description: `${a.pref}のシロアリ駆除を、対象になるシロアリの種類・羽アリが出る時期・費用の考え方・実在業者の対応エリアで整理しました。${a.pref}で注意すべき点と、見積もり前の確認事項をまとめています。`,
    alternates: { canonical: `${SITE_URL}/area/${a.slug}/` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) return null;
  const subsidy = SUBSIDIES.find((s) => s.pref === a.pref);
  const providers = getTopProviders().slice(0, 5);
  // 同じ地方の前後3県ずつを循環で出す（以前は先頭6県固定で、7番目以降の県と北海道・沖縄がどこからも張られていなかった）。
  const sameRegion = AREAS.filter((x) => x.region === a.region);
  const ri = sameRegion.findIndex((x) => x.slug === a.slug);
  const nearby: typeof AREAS = [];
  for (const d of [1, -1, 2, -2, 3, -3]) {
    const n = sameRegion[(ri + d + sameRegion.length * 4) % sameRegion.length];
    if (n && n.slug !== a.slug && !nearby.includes(n)) nearby.push(n);
  }
  {
    // 全国の並びで隣の県も足す（地方の境目＝北海道⇔青森 などをつなぐ）。地方内が3県未満なら前後2県まで。
    const gi = AREAS.findIndex((x) => x.slug === a.slug);
    for (const d of nearby.length < 3 ? [1, -1, 2, -2] : [1, -1]) {
      const n = AREAS[gi + d];
      if (n && n.slug !== a.slug && !nearby.includes(n)) nearby.push(n);
    }
  }

  const crumbs: Crumb[] = [
    { name: "ホーム", href: "/" },
    { name: "エリア別", href: "/area/" },
    { name: a.pref, href: `/area/${a.slug}/` },
  ];

  const ieLabel =
    a.ie === "yes" ? "分布域にあたります"
    : a.ie === "check" ? "県内で分かれます（要確認）"
    : "分布域ではありません";

  const faqs: FaqItem[] = [
    {
      question: `${a.pref}で注意すべきシロアリの種類は？`,
      answer:
        a.ie === "yes"
          ? `ヤマトシロアリに加えてイエシロアリが対象になります。イエシロアリは公益社団法人 日本しろあり対策協会が「神奈川県以西の海岸線に沿った温暖な地域」を分布として挙げており、${a.pref}はここに含まれます。${a.daikoku ? "さらに奄美大島以南ではダイコクシロアリも対象です。" : ""}`
          : a.ie === "check"
          ? `基本はヤマトシロアリです。${a.ieNote}`
          : `ヤマトシロアリが対象です。イエシロアリの分布は「神奈川県以西の海岸線に沿った温暖な地域と千葉県の一部、南西諸島、小笠原諸島」とされており、${a.pref}は含まれません。`,
    },
    {
      question: `${a.pref}で羽アリが出るのはいつですか？`,
      answer:
        `ヤマトシロアリの群飛は${a.yamatoSwarm}です（協会の記載では4〜5月の昼間、ただし沖縄は2月、東北・北海道は6月ごろ）。` +
        (a.ie === "none"
          ? "イエシロアリの分布域ではないため、夜間に電灯へ飛来する種類の群飛は、基本的に想定されません。"
          : "イエシロアリは6〜7月の夜に群飛し、電灯に飛来します。夜間に羽アリが照明に集まる場合は、イエシロアリの可能性があります。"),
    },
    {
      question: `${a.pref}に補助金はありますか？`,
      answer:
        (subsidy?.note ?? "自治体により制度の有無が異なります。") +
        " 制度の有無・金額・対象工事は自治体ごとに異なり、年度によっても変わります。申請前に、お住まいの市区町村の窓口にてご確認ください。",
    },
    {
      question: "見積もりは何社から取ればよいですか？",
      answer:
        "2社以上から取ることをおすすめします。同じ床面積でも工法（バリア/ベイト）・薬剤・保証年数によって金額が変わるため、1社のみでは金額の妥当性を判断しにくいためです。見積書では「追加費用が発生する条件」「保証の範囲」「床下に進入できない箇所の扱い」をご確認ください。",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <FaqJsonLd items={faqs} />
      <Breadcrumb items={crumbs} />

      <article className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-xs text-foreground/60">{a.region}／{a.pref}</p>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-primary-dark leading-snug">
          {a.pref}のシロアリ駆除業者を比較
        </h1>

        {/* 県ごとに変わる要点 */}
        <div className="mt-6 border border-border rounded-sm bg-muted-bg p-4 text-sm leading-relaxed">
          <p className="font-bold text-primary-dark">{a.pref}のシロアリ対策の要点</p>
          <ul className="mt-3 space-y-2">
            <li>
              <span className="font-bold">対象となる種類</span>：ヤマトシロアリ
              {a.ie === "yes" && "／イエシロアリ"}
              {a.daikoku && "／ダイコクシロアリ（奄美大島以南）"}
              <br />
              <span className="text-foreground/70">イエシロアリ：{ieLabel}</span>
            </li>
            <li>
              <span className="font-bold">羽アリが発生する時期</span>：ヤマトシロアリ＝{a.yamatoSwarm}
              {a.ie !== "none" && "／イエシロアリ＝6〜7月の夜（電灯に飛来）"}
            </li>
            <li>
              <span className="font-bold">補助金</span>：{subsidy?.note ?? "自治体により異なります。"}
            </li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">
          {a.pref}で対象となるシロアリ
        </h2>
        <p className="mt-3 leading-relaxed">{a.ieNote}</p>
        <p className="mt-3 leading-relaxed">
          ヤマトシロアリは「北海道北部を除く日本全土」に分布するため、{a.pref}でも対象となります。
          {a.ie === "yes"
            ? "イエシロアリは巣の規模が大きく、被害の進行が速いとされるため、分布域では早めの点検をおすすめします。"
            : a.ie === "check"
            ? "イエシロアリの分布域にあたるかは地域により異なるため、点検時に種類を確認することをおすすめします。"
            : "イエシロアリの分布域ではないため、ヤマトシロアリを対象とした対策が中心となります。"}
        </p>
        <p className="mt-3 text-xs text-foreground/60">
          出典：公益社団法人 日本しろあり対策協会「わが国で建築物を加害するシロアリの種類と分布」
          <a className="underline ml-1" href="https://www.hakutaikyo.or.jp/faq/1813.html" target="_blank" rel="noopener noreferrer">
            hakutaikyo.or.jp
          </a>
          （2026年9月17日確認）
        </p>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">
          羽アリを見つけた場合の判断（{a.pref}の発生時期）
        </h2>
        <p className="mt-3 leading-relaxed">
          {a.pref}でヤマトシロアリの群飛が見られるのは{a.yamatoSwarm}です。
          {a.ie === "none"
            ? "昼間に羽アリが発生した場合は、ヤマトシロアリの可能性があります。夜間に照明へ集まる羽アリはクロアリなど別の虫であることが多いため、まず種類を判別することが重要です。"
            : "これに加えて、イエシロアリが6〜7月の夜間に群飛し、電灯に飛来します。昼か夜かによって種類をある程度推定できるため、見つけた時間帯を業者にお伝えください。"}
        </p>
        <p className="mt-3 leading-relaxed">
          羽アリは、シロアリかクロアリかによって対応が異なります。判別の手順は
          <Link className="text-primary underline" href="/articles/hane-ari-mikiwake/">羽アリの見分け方</Link>
          にまとめています。
        </p>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">
          {a.pref}に対応している業者の比較
        </h2>
        <p className="mt-3 leading-relaxed text-sm">
          以下の対応エリアは、<strong>各社の公式表記</strong>をそのまま掲載しています。
          全国対応としている会社でも、実際の施工は地域の加盟店が行う場合があるため、
          {a.pref}内の対応範囲はお問い合わせの際にご確認ください。
        </p>
        <div className="mt-4">
          <ComparisonTable providers={providers} />
        </div>
        <div className="mt-6">
          {/* 送客は実在業者の公式URLへ。広告であることを開示し rel に sponsored を付ける */}
          <CTAButton href={providers[0].url} external sponsored variant="primary">
            （PR）{providers[0].name}の公式サイトで{a.pref}の対応を確認する
          </CTAButton>
        </div>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">費用の考え方</h2>
        <p className="mt-3 leading-relaxed">
          費用は床面積と工法によって決まるため、地域による差よりも、
          住宅の構造や被害の進行状況による影響が大きくなります。相場の内訳と、
          バリア工法・ベイト工法を5年間の総額で比較した結果は
          <Link className="text-primary underline" href="/articles/shiroari-kuchu-hiyou/">シロアリ駆除費用の相場</Link>
          で整理しています。
        </p>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">{a.pref}の補助金</h2>
        <p className="mt-3 leading-relaxed">{subsidy?.note ?? "自治体により制度の有無が異なります。"}</p>
        <p className="mt-3 leading-relaxed text-sm text-foreground/70">
          補助金の制度は<strong>市区町村ごと・年度ごと</strong>に異なるため、当ページでは制度の有無を断定していません。
          申請前に、お住まいの自治体の窓口にてご確認ください。全国の状況は
          <Link className="text-primary underline" href="/articles/shiroari-hojo-kin-zenkoku/">シロアリ駆除の補助金</Link>
          にまとめています。
        </p>

        <div className="mt-10">
          <FAQ items={faqs} />
        </div>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">{a.region}の他のエリア</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {nearby.map((n) => (
            <Link key={n.slug} href={`/area/${n.slug}/`}
                  className="text-sm border border-border rounded-sm px-3 py-1.5 hover:border-primary">
              {n.pref}
            </Link>
          ))}
          <Link href="/area/" className="text-sm border border-border rounded-sm px-3 py-1.5 hover:border-primary">
            全国のエリア一覧
          </Link>
        </div>
      </article>
    </>
  );
}
