import Link from "next/link";
import { ARTICLES } from "./lib/articles";
import { getTopProviders, PROVIDERS } from "./lib/providers";
import { ComparisonTable } from "./components/ComparisonTable";
import { RankingTable } from "./components/RankingTable";
import { RegionList } from "./components/RegionList";
import { CTAButton, PhoneCTA } from "./components/CTAButton";
import { FAQ, FaqJsonLd, FaqItem } from "./components/FAQ";

const faqs: FaqItem[] = [
  {
    question: "シロアリ駆除の費用はいくらかかりますか？",
    answer:
      "シロアリ駆除は工法と床面積で価格が変わります。バリア工法は1坪あたり7,000円〜10,000円が中央値で、30坪の住宅で21〜30万円前後が一般的なレンジです。シロアリ110番では公式に1坪1,320円（税込）からの料金表示がされており、被害の程度・床下構造によって変動します。バリア工法は5年で更新、ベイト工法は年間契約型のため、5年間のTCO（総保有コスト）で比較するのが安全です。",
  },
  {
    question: "羽アリを見つけたらすぐに駆除すべきですか？",
    answer:
      "黒っぽい羽アリの飛来は、シロアリかクロアリかで対応が大きく変わります。シロアリの羽アリは触角がまっすぐで腹部にくびれがなく、4枚の羽が同じ大きさです。シロアリと判別された場合は群飛から数日以内に巣の活動が活発化しているサインで、早めに専門業者の床下点検を依頼するのが安全です。",
  },
  {
    question: "シロアリ駆除に火災保険は使えますか？",
    answer:
      "原則としてシロアリ被害そのものは火災保険の補償対象外です。ただし、水漏れ事故が原因で発生したシロアリ被害（例：給排水設備からの漏水が床下を湿気らせた結果）であれば、水濡れ事故の補償として認められるケースがあります。約款の「水濡れ事故」「不測かつ突発的な事故」の条項を確認し、契約している損害保険会社に被害状況を申告してください。",
  },
  {
    question: "シロアリ駆除の補助金は出ますか？",
    answer:
      "シロアリ駆除単独での補助金は限定的ですが、市町村の住宅リフォーム補助制度の一部としてシロアリ防除工事が対象になるケースがあります。福島県金山町・高知県香美市など独自の防除助成を持つ自治体もあるため、お住まいの市区町村の建築指導課・住宅課で確認してください。",
  },
  {
    question: "中古住宅を買う前にシロアリ点検をすべきですか？",
    answer:
      "中古住宅の購入前に、ホームインスペクション（住宅診断）とあわせてシロアリ床下点検を実施するのが安全です。既存住宅瑕疵保険の付帯条件として防蟻処理が求められる場合もあるため、不動産売買契約前のタイミングで売主・仲介業者と協議し、現況確認を済ませてから契約に進むことをおすすめします。",
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
    desc: "公益社団法人日本しろあり対策協会の加盟業者を中心に、保証期間・施工方式・対応エリアで中立比較しています。",
    link: "/articles/shiroari-gyousha-erabikata/",
    cta: "業者の選び方を見る",
  },
  {
    title: "中古住宅を購入する方",
    desc: "購入前のインスペクション、既存住宅瑕疵保険の防蟻処理要件などを整理。中古戸建ての安全な購入手順を解説します。",
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
            シロアリ駆除を、
            <br />
            <span className="text-accent-light">工法と保証</span>で選ぶ。
          </h1>
          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            バリア工法とベイト工法の5年TCO比較、火災保険の適用条件、中古住宅のインスペクション連動まで、シロアリ駆除で本当に必要な情報を中立的に整理しました。
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
              駆除費用と5年TCOを確認
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
              <p>47都道府県の補助金確認リスト</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold">04</span>
              <p>バリア工法・ベイト工法の中立比較</p>
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
          対応エリア・保証期間・施工方式の3軸で厳選した、公式情報を確認済みの専門業者です
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
            気になる業者を素早く比較できます
          </p>
          <ComparisonTable providers={PROVIDERS} />
        </div>
      </section>

      {/* Persona */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-2 text-center">
          あなたの状況から、必要な記事へ
        </h2>
        <p className="text-muted text-sm text-center mb-8">
          被害の進行度や知りたい情報に合わせてご案内します
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
          47都道府県の補助金 確認マップ
        </h2>
        <p className="text-muted text-sm text-center mb-8">
          シロアリ防除関連の助成は市区町村ごとに制度が異なるため、地域の窓口を一覧で確認できます
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
            まずは現地調査・見積もり無料の業者へ
          </h2>
          <p className="text-white/85 mb-8 text-sm md:text-base leading-relaxed">
            無理な自己駆除では再発リスクが残ります。
            <br className="hidden md:inline" />
            無料相談で被害状況を共有することからはじめましょう。
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
            ※業者の対応エリア・料金は2026-05-28時点の公式サイト確認情報です。最新情報は各公式をご確認ください。
          </p>
        </div>
      </section>
    </>
  );
}
