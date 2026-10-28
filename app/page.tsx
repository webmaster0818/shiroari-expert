import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "./lib/articles";
import { getTopProviders, PROVIDERS } from "./lib/providers";
import { ComparisonTable } from "./components/ComparisonTable";
import { RankingTable } from "./components/RankingTable";
import { RegionList } from "./components/RegionList";
import { CTAButton, PhoneCTA } from "./components/CTAButton";
import { FAQ, FaqJsonLd, FaqItem } from "./components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqs: FaqItem[] = [
  {
    question: "シロアリ駆除の費用はいくらかかりますか？",
    answer:
      "シロアリ駆除は工法と床面積で価格が変わります。シロアリ110番では公式に1㎡あたり1,320円（税込）・66㎡以下は一律88,000円（税込）と料金表示されており、被害の程度・床下構造によって変動します。バリア工法は5年で更新、ベイト工法は年間契約型のため、再施工や継続契約の費用も含めて比較することをおすすめします。",
  },
  {
    question: "羽アリを見つけたらすぐに駆除すべきですか？",
    answer:
      "黒っぽい羽アリの飛来は、シロアリかクロアリかで対応が大きく変わります。シロアリの羽アリは触角がまっすぐで腹部にくびれがなく、4枚の羽が同じ大きさです。シロアリと判別された場合は巣の活動が活発になっているサインのため、早めに専門業者へ床下点検を依頼することをおすすめします。",
  },
  {
    question: "シロアリ駆除に火災保険は使えますか？",
    answer:
      "原則としてシロアリ被害そのものは火災保険の補償対象外です。ただし、水漏れ事故が原因で発生したシロアリ被害（例：給排水設備からの漏水が床下を湿気らせた結果）であれば、水濡れ事故の補償として認められるケースがあります。約款の「水濡れ事故」「不測かつ突発的な事故」の条項を確認し、契約している損害保険会社に被害状況を申告してください。",
  },
  {
    question: "シロアリ駆除の補助金は出ますか？",
    answer:
      "シロアリ駆除のみを対象とした補助金は多くありません。「改修工事を伴う場合のみ対象」「対象外」など扱いは自治体で分かれるため、お住まいの市区町村の補助金の対象工事一覧と担当窓口で確認してください。",
  },
  {
    question: "中古住宅を買う前にシロアリ点検をすべきですか？",
    answer:
      "中古住宅の購入前には、ホームインスペクション（住宅診断）とあわせてシロアリの床下点検を実施することをおすすめします。既存住宅売買瑕疵保険は、引渡し前に保険法人の検査（現場検査）に合格することが加入の条件で、シロアリ等の「虫食い」による損害は保険の対象外（免責事由）とされています（ハウスプラス住宅保証「既存住宅売買瑕疵保険のご案内」2026年7月23日版）。そのため、不動産売買契約前のタイミングで売主・仲介業者と協議し、現況確認を済ませてから契約に進むことをおすすめします。",
  },
];

const persona = [
  {
    title: "床のきしみ・羽アリの飛来で困っている方",
    desc: "羽アリの群飛や床下のサインは、シロアリの活動が活発化している可能性があります。早期発見で被害規模と費用を抑えられます。",
    link: "/articles/shiroari-higai-shoujou/",
    cta: "被害症状の見分け方を読む",
  },
  {
    title: "業者の選び方がわからない方",
    desc: "公益社団法人日本しろあり対策協会の加盟業者を中心に、保証期間・施工方式・対応エリアを中立的な立場で比較しています。",
    link: "/articles/shiroari-gyousha-erabikata/",
    cta: "業者の選び方を見る",
  },
  {
    title: "中古住宅を購入する方",
    desc: "購入前のインスペクションと、既存住宅売買瑕疵保険の加入前の検査・「虫食い」が対象外となる扱いを整理し、中古戸建てを購入する際の手順をご説明します。",
    link: "/articles/chuuko-juutaku-inspection/",
    cta: "インスペクションを確認する",
  },
];

export default function Home() {
  const top = getTopProviders();

  return (
    <>
      <FaqJsonLd items={faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div aria-hidden className="absolute inset-0">
          <img src="/images/hero.png" alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/30" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24">
          <p className="text-accent-light text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Shiroari Expert Navi 2026
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-5">
            シロアリ駆除業者を
            <br />
            <span className="text-accent-light">工法と保証</span>で比較する
          </h1>
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            当サイトでは、バリア工法とベイト工法の費用比較、火災保険の適用条件、中古住宅のインスペクションとの関係など、シロアリ駆除の検討に必要な情報を中立的な立場で掲載しています。
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <CTAButton
              href="/articles/shiroari-gyousha-erabikata/"
              variant="accent"
            >
              業者の選び方を見る
            </CTAButton>
            <CTAButton
              href="/articles/shiroari-kuchu-hiyou/"
              variant="outline"
              className="bg-white/10 text-white border-white/40 hover:bg-white/20"
            >
              駆除費用の相場と比べ方を見る
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-muted-bg border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-foreground/80">
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">01</span>
              <p>公益社団法人加盟の業者を中心に掲載</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">02</span>
              <p>公式サイトで料金・エリア・保証を確認</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">03</span>
              <p>47都道府県の補助金の確認先を掲載</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">04</span>
              <p>バリア工法・ベイト工法を中立的に比較</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
          シロアリ駆除おすすめ業者ランキング
        </h2>
        <p className="text-muted text-sm text-center mb-8">
          対応エリア・保証期間・施工方式の3つの観点で選定し、公式情報を確認した業者を掲載しています
        </p>
        <RankingTable providers={top} />
        <div className="text-center mt-8">
          <CTAButton
            href="/articles/shiroari-gyousha-erabikata/"
            variant="primary"
          >
            すべての業者比較を見る（全6社）
          </CTAButton>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-muted-bg py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
            主要6社の対応エリア・保証 一覧
          </h2>
          <p className="text-muted text-sm text-center mb-8">
            各社の対応エリア・保証・電話受付を一覧で比較できます
          </p>
          <ComparisonTable providers={PROVIDERS} />
        </div>
      </section>

      {/* Persona */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
          状況別の記事のご案内
        </h2>
        <p className="text-muted text-sm text-center mb-8">
          被害の状況や知りたい内容に応じて、関連する記事をご案内します
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {persona.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-border rounded-md p-6 flex flex-col"
            >
              <h3 className="font-display text-lg font-bold text-primary-dark mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">
                {p.desc}
              </p>
              <CTAButton href={p.link} variant="outline" className="w-full">
                {p.cta}
              </CTAButton>
            </div>
          ))}
        </div>
      </section>

      {/* All articles */}
      <section className="bg-muted-bg py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
            記事カテゴリ一覧
          </h2>
          <p className="text-muted text-sm text-center mb-8">
            全{ARTICLES.length}本の専門記事を公開しています
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}/`}
                className="block bg-white border border-border rounded-sm px-5 py-4 hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold px-2 py-0.5 rounded-sm whitespace-nowrap mt-0.5">
                    {a.category}
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-primary-dark leading-snug mb-1">
                      {a.shortTitle}
                    </p>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {a.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy summary */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
          47都道府県の補助金の確認先
        </h2>
        <p className="text-muted text-sm text-center mb-8">
          シロアリ防除に関する助成は市区町村ごとに制度が異なるため、地域ごとの確認先を一覧で掲載しています
        </p>
        <RegionList variant="summary" />
        <div className="text-center mt-8">
          <CTAButton
            href="/articles/shiroari-hojo-kin-zenkoku/"
            variant="primary"
          >
            47都道府県の詳細を見る
          </CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted-bg py-10">
        <FAQ items={faqs} />
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            現地調査・見積もりが無料の業者にご相談ください
          </h2>
          <p className="text-white/85 mb-8 text-sm md:text-base leading-relaxed">
            ご自身での駆除では、再発のおそれが残る場合があります。
            <br className="hidden md:inline" />
            無料相談の際に、被害の状況をお伝えください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton
              href="https://www.sharing-tech.co.jp/shiroari/"
              external
              sponsored
              variant="accent"
            >
              シロアリ110番 公式
            </CTAButton>
            <PhoneCTA phone="0120-987-282" label="ハウスプロテクトに電話" />
          </div>
          <p className="text-white/55 text-[10px] mt-6">
            ※業者の対応エリア・料金は、各業者カードに記載した確認日時点の公式サイトの情報です。最新情報は、各社の公式サイトにてご確認ください。
          </p>
        </div>
      </section>
    </>
  );
}
