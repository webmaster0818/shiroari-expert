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
    description: `${a.pref}のシロアリ駆除を、対象になるシロアリの種類・羽アリが出る時期・費用の考え方・実在業者の対応エリアで整理しました。${a.pref}で注意すべき点と、見積もり前に確認することをまとめています。`,
    alternates: { canonical: `${SITE_URL}/area/${a.slug}/` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) return null;
  const subsidy = SUBSIDIES.find((s) => s.pref === a.pref);
  const providers = getTopProviders().slice(0, 5);
  const nearby = AREAS.filter((x) => x.region === a.region && x.slug !== a.slug).slice(0, 6);

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
      question: `${a.pref}で気をつけるシロアリの種類は？`,
      answer:
        a.ie === "yes"
          ? `ヤマトシロアリに加えてイエシロアリが対象になります。イエシロアリは公益社団法人 日本しろあり対策協会が「神奈川県以西の海岸線に沿った温暖な地域」を分布として挙げており、${a.pref}はここに含まれます。${a.daikoku ? "さらに奄美大島以南ではダイコクシロアリも対象です。" : ""}`
          : a.ie === "check"
          ? `基本はヤマトシロアリです。イエシロアリについては${a.ieNote}`
          : `ヤマトシロアリが対象です。イエシロアリの分布は「神奈川県以西の海岸線に沿った温暖な地域と千葉県の一部、南西諸島、小笠原諸島」とされており、${a.pref}は含まれません。`,
    },
    {
      question: `${a.pref}で羽アリが出るのはいつですか？`,
      answer:
        `ヤマトシロアリの群飛は${a.yamatoSwarm}です（協会の記載では4〜5月の昼間、ただし沖縄は2月、東北・北海道は6月ごろ）。` +
        (a.ie === "none"
          ? "イエシロアリの分布域ではないため、夜に電灯へ飛来するタイプの群飛は基本的に想定しません。"
          : "イエシロアリは6〜7月の夜に群飛し、電灯に飛来します。夜に羽アリが灯りへ集まる場合はイエシロアリを疑ってください。"),
    },
    {
      question: `${a.pref}に補助金はありますか？`,
      answer:
        (subsidy?.note ?? "自治体により制度の有無が異なります。") +
        " 制度の有無・金額・対象工事は自治体ごとに異なり、年度で変わります。申請前に必ずお住まいの市区町村の公式窓口で確認してください。",
    },
    {
      question: "見積もりは何社から取るべきですか？",
      answer:
        "最低2社です。同じ床面積でも工法（バリア/ベイト）・薬剤・保証年数で金額が変わるため、1社だけでは高いのか安いのか判断できません。見積書では『追加費用が発生する条件』『保証の範囲』『床下に進入できない箇所の扱い』を必ず確認してください。",
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

        {/* 結論を先に出す。県ごとに変わるのはここ */}
        <div className="mt-6 border border-border rounded-sm bg-muted-bg p-4 text-sm leading-relaxed">
          <p className="font-bold text-primary-dark">{a.pref}で押さえる3点</p>
          <ul className="mt-3 space-y-2">
            <li>
              <span className="font-bold">対象になる種類</span>：ヤマトシロアリ
              {a.ie === "yes" && "／イエシロアリ"}
              {a.daikoku && "／ダイコクシロアリ（奄美大島以南）"}
              <br />
              <span className="text-foreground/70">イエシロアリ：{ieLabel}</span>
            </li>
            <li>
              <span className="font-bold">羽アリが出る時期</span>：ヤマトシロアリ＝{a.yamatoSwarm}
              {a.ie !== "none" && "／イエシロアリ＝6〜7月の夜（電灯に飛来）"}
            </li>
            <li>
              <span className="font-bold">補助金</span>：{subsidy?.note ?? "自治体により異なります。"}
            </li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">
          {a.pref}で対象になるシロアリ
        </h2>
        <p className="mt-3 leading-relaxed">{a.ieNote}</p>
        <p className="mt-3 leading-relaxed">
          ヤマトシロアリは「北海道北部を除く日本全土」に分布するため、{a.pref}でも対象になります。
          {a.ie === "yes"
            ? "イエシロアリは巣の規模が大きく被害の進み方が速いとされるため、分布域では点検の優先度が上がります。"
            : "イエシロアリの分布域ではないぶん、対策はヤマトシロアリに絞って考えられます。"}
        </p>
        <p className="mt-3 text-xs text-foreground/60">
          出典：公益社団法人 日本しろあり対策協会「わが国で建築物を加害するシロアリの種類と分布」
          <a className="underline ml-1" href="https://www.hakutaikyo.or.jp/faq/1813.html" target="_blank" rel="noopener noreferrer">
            hakutaikyo.or.jp
          </a>
          （2026-09-17 確認）
        </p>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">
          羽アリを見たときの判断（{a.pref}の時期）
        </h2>
        <p className="mt-3 leading-relaxed">
          {a.pref}でヤマトシロアリの群飛が見られるのは{a.yamatoSwarm}です。
          {a.ie === "none"
            ? "昼間に羽アリが出た場合はヤマトシロアリの可能性があります。夜に灯りへ集まる羽アリはクロアリなど別の虫であることが多く、まず種類の判別が先です。"
            : "これに加えてイエシロアリが6〜7月の夜に群飛し、電灯に飛来します。昼か夜かで種類の見当がつくため、見つけた時間帯を業者に伝えてください。"}
        </p>
        <p className="mt-3 leading-relaxed">
          羽アリはシロアリかクロアリかで対応が変わります。判別の手順は
          <Link className="text-primary underline" href="/articles/hane-ari-mikiwake/">羽アリの見分け方</Link>
          にまとめています。
        </p>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">
          {a.pref}に対応している業者の比較
        </h2>
        <p className="mt-3 leading-relaxed text-sm">
          ⚠️ 下の対応エリアは<strong>各社の公式表記</strong>をそのまま載せています。
          全国対応をうたう会社でも、実際の施工は地域の加盟店が行う場合があり、
          {a.pref}内のどこまで対応できるかは問い合わせ時に確認が必要です。
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
          費用は床面積と工法で決まるため、{a.pref}だから高い・安いという地域差より、
          自宅の構造と被害の進み方のほうが効きます。相場の内訳と、
          バリア工法・ベイト工法を5年の総額で比べた結果は
          <Link className="text-primary underline" href="/articles/shiroari-kuchu-hiyou/">シロアリ駆除費用の相場</Link>
          で整理しています。
        </p>

        <h2 className="mt-10 text-xl font-bold text-primary-dark">{a.pref}の補助金</h2>
        <p className="mt-3 leading-relaxed">{subsidy?.note ?? "自治体により制度の有無が異なります。"}</p>
        <p className="mt-3 leading-relaxed text-sm text-foreground/70">
          ⚠️ 補助金は<strong>市区町村ごと・年度ごと</strong>に変わります。ここでは有無を断定していません。
          申請前に必ずお住まいの自治体の公式窓口で確認してください。全国の状況は
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
