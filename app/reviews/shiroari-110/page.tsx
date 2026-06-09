import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getProvider } from "../../lib/providers";
import { ArticleMeta } from "../../lib/articles";

const p = getProvider("shiroari-110")!;

const meta: ArticleMeta = {
  slug: "shiroari-110",
  shortTitle: "シロアリ110番の口コミ",
  title:
    "シロアリ110番の口コミ・評判は？料金・メリット・デメリットを実際のレビューから徹底解説【2026年】",
  description:
    "シロアリ110番の口コミ・評判を実際の利用者レビューから検証。1坪1,320円の料金は本当に安いのか、総合評価の実態、メリット・デメリット、向いている人まで出典付きで解説します。",
  category: "口コミ",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/reviews/shiroari-110/" },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: ["/images/reviews/shiroari-110-official.webp"],
  },
};

const faqs: FaqItem[] = [
  {
    question: "シロアリ110番の料金は本当に安いですか？",
    answer:
      "公式では1坪あたり1,320円（税込）からと明記されており、1平方メートルあたりの一般相場（おおむね2,000〜3,000円）と比べて安い水準です。ただし施工面積20坪（約66平方メートル）以下は最低料金が一律のため、被害が狭い場合は割高に感じることがあります。正確な金額は現地調査後の見積もりで確認してください。",
  },
  {
    question: "シロアリ110番はどんな会社が運営していますか？",
    answer:
      "東証上場のシェアリングテクノロジー株式会社が運営する、全国の加盟店をつなぐマッチング型のサービスです。実際の施工は各都道府県の加盟店が行います。",
  },
  {
    question: "口コミで多い不満点は何ですか？",
    answer:
      "最も多いのは「加盟店によって対応や施工品質に差がある」という声です。全国の加盟店ネットワークである性質上、担当する店舗によって体験にばらつきが出ることがあります。連絡・到着の遅れを指摘する声も一部あります。",
  },
  {
    question: "保証やアフターサービスはありますか？",
    answer:
      "公式では5年保証・年1回の無料点検が案内されています。ただし保証の細かな条件は加盟店により異なる場合があるため、契約前に書面で確認しましょう。",
  },
  {
    question: "見積もりだけでも依頼できますか？",
    answer:
      "現地調査・見積もりは無料と案内されています。電話（24時間365日受付）またはWebから依頼でき、金額に納得できなければ契約しない選択も可能です。複数社の相見積もりがおすすめです。",
  },
];

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span aria-hidden className="text-accent tracking-tight">
      {"★".repeat(full)}
      {half ? "☆" : ""}
      <span className="text-border">{"★".repeat(5 - full - (half ? 1 : 0))}</span>
    </span>
  );
}

function ReviewCard({
  rating,
  body,
  tag,
}: {
  rating: number;
  body: string;
  tag: string;
}) {
  return (
    <figure className="not-prose border border-border rounded-md p-5 bg-white">
      <figcaption className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-primary-dark bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm">
          {tag}
        </span>
        <span className="text-sm">
          <Stars value={rating} />
          <span className="ml-1 text-muted text-xs">{rating.toFixed(1)}</span>
        </span>
      </figcaption>
      <blockquote className="text-sm leading-relaxed text-foreground/85 m-0">
        「{body}」
      </blockquote>
    </figure>
  );
}

const TOC = [
  ["about", "シロアリ110番とは（運営会社と基本情報）"],
  ["rating", "口コミから見た総合評価"],
  ["price", "料金は本当に安い？相場との比較"],
  ["reviews", "実際の口コミ・評判（良い声・悪い声）"],
  ["merit", "口コミからわかったメリット"],
  ["demerit", "口コミからわかったデメリット・注意点"],
  ["who", "向いている人・向いていない人"],
  ["flow", "申し込みから施工までの流れ"],
  ["faq", "よくある質問"],
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} basePath="reviews" updatedAt="2026-06-10">
      <FaqJsonLd items={faqs} />

      {/* 結論ボックス */}
      <div className="not-prose border-l-4 border-accent bg-muted-bg rounded-r-md p-5 mb-8">
        <p className="font-bold text-primary-dark mb-2">この記事の結論</p>
        <p className="text-sm leading-relaxed mb-3">
          シロアリ110番は<strong>東証上場企業が運営する全国対応のマッチング型サービス</strong>で、
          <strong>1坪1,320円（税込）からの明朗価格</strong>が最大の魅力です。口コミ全体では
          「料金が安く明朗」「電話対応が丁寧」という声が多い一方、
          <strong>加盟店ごとの品質差</strong>を指摘する声もあります。
          まずは無料の現地調査で見積もりを取り、他社と比較するのが失敗しない使い方です。
        </p>
        <p className="text-xs text-muted mb-0">
          ※ 本記事の評価・口コミは、公式の利用者レビューおよび各口コミ調査サイトの公開情報をもとにまとめた参考情報です（出典は記事内に明記）。実際の対応・品質は担当加盟店により異なります。
        </p>
      </div>

      {/* 目次 */}
      <nav className="not-prose border border-border rounded-md p-5 mb-10 bg-white" aria-label="目次">
        <p className="font-bold text-primary-dark mb-3">目次</p>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-primary marker:text-muted">
          {TOC.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <h2 id="about">シロアリ110番とは（運営会社と基本情報）</h2>
      <p>
        シロアリ110番は、<strong>{p.operator}</strong>が運営する
        シロアリ駆除のマッチング型サービスです。{p.tagline}。
        全国に問い合わせ窓口を持ち、依頼が入ると地域の加盟店が現地調査・施工を担当する仕組みになっています。
      </p>

      <figure className="not-prose my-6">
        <img
          src="/images/reviews/shiroari-110-official.webp"
          alt="シロアリ110番の公式サイト"
          width={1600}
          height={1000}
          loading="lazy"
          className="w-full rounded-md border border-border"
        />
        <figcaption className="text-xs text-muted mt-2 text-center">
          シロアリ110番 公式サイト（
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline">
            {p.url}
          </a>
          ）
        </figcaption>
      </figure>

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {[
              ["運営会社", p.operator],
              ["対応エリア", p.areas],
              ["料金の目安", p.fee],
              ["保証", p.warranty],
              ["電話受付", p.phone],
            ].map(([k, v]) => (
              <tr key={k} className="border-b border-border">
                <th className="text-left bg-muted-bg font-bold p-3 w-32 align-top">{k}</th>
                <td className="p-3">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="rating">口コミから見た総合評価</h2>
      <p>
        各口コミ調査サイトでは、シロアリ110番の総合評価はおおむね
        <strong>星4.7前後（5点満点）</strong>と高めに集計されています。
        とくに「コールセンターの対応」「料金の明瞭さ」への評価が高い一方、
        現場対応は加盟店により差が出る、という傾向が読み取れます。
      </p>
      <div className="not-prose grid sm:grid-cols-3 gap-3 my-6">
        {[
          ["総合満足度", 4.7],
          ["電話・受付対応", 4.9],
          ["駆除作業", 4.7],
        ].map(([label, val]) => (
          <div key={label as string} className="border border-border rounded-md p-4 text-center bg-white">
            <p className="text-xs text-muted mb-1">{label}</p>
            <p className="text-2xl font-bold text-primary-dark leading-none mb-1">
              {(val as number).toFixed(1)}
            </p>
            <Stars value={val as number} />
          </div>
        ))}
      </div>
      <p className="text-xs text-muted">
        ※ 数値は公式の利用者レビュー・各口コミ調査サイトの公開集計にもとづく参考値です。
      </p>

      <h2 id="price">料金は本当に安い？相場との比較</h2>
      <p>
        シロアリ110番の料金は、公式で<strong>1坪あたり1,320円（税込）から</strong>と明記されています。
        一般的なシロアリ駆除の相場（1平方メートルあたり2,000〜3,000円程度）と比べても安い水準で、
        口コミでも「料金が明朗」「追加費用がなかった」という声が目立ちます。
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-muted-bg">
              <th className="text-left p-3 border-b border-border">項目</th>
              <th className="text-left p-3 border-b border-border">シロアリ110番</th>
              <th className="text-left p-3 border-b border-border">一般的な相場</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3">単価の目安</td>
              <td className="p-3 font-bold text-primary-dark">1坪 1,320円〜（税込）</td>
              <td className="p-3">1平方メートル 2,000〜3,000円程度</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">追加費用</td>
              <td className="p-3">見積もり後の追加は原則なしと案内</td>
              <td className="p-3">業者により発生する場合あり</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">注意点</td>
              <td className="p-3">20坪（約66平方メートル）以下は最低料金が一律</td>
              <td className="p-3">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted">
        ※ 金額は公式の表示にもとづく目安です。被害状況・床面積・建物構造で変動し、金額を保証するものではありません。
      </p>

      <h2 id="reviews">実際の口コミ・評判（良い声・悪い声）</h2>
      <p>
        ここでは、公式の利用者レビューや口コミ調査サイトで実際に挙がっている声を、
        良い口コミ・悪い口コミに分けて紹介します（要点を引用・要約）。
      </p>

      <h3>良い口コミ</h3>
      <div className="not-prose grid sm:grid-cols-2 gap-4 my-5">
        <ReviewCard tag="料金・明朗さ" rating={5} body="電話対応がとても良く、見積もりした業者も親切に説明してくれた。金額もホームページ通りで、追加費用もなかった。" />
        <ReviewCard tag="作業の丁寧さ" rating={4.5} body="作業は丁寧で、床下の状況も写真で見せてくれた。コールセンターの対応も感じが良かった。" />
        <ReviewCard tag="価格満足" rating={4.5} body="一般的な相場より安く、想定よりかなり費用を抑えられた。明朗会計で安心できた。" />
        <ReviewCard tag="スピード" rating={4} body="電話一本ですぐ手配してくれて、見積もりまで早かった。地方でも対応してもらえて助かった。" />
      </div>

      <figure className="not-prose my-6">
        <img
          src="/images/reviews/shiroari-110-reviews.webp"
          alt="シロアリ110番 公式サイトの利用者レビューページ"
          width={1600}
          height={1000}
          loading="lazy"
          className="w-full rounded-md border border-border"
        />
        <figcaption className="text-xs text-muted mt-2 text-center">
          公式サイトでは約500人の利用者口コミ調査の結果が公開されている（
          <a href="https://www.sharing-tech.co.jp/shiroari/shiroari110-reviews/" target="_blank" rel="noopener noreferrer" className="underline">
            公式 利用者レビューページ
          </a>
          ）
        </figcaption>
      </figure>

      <h3>悪い口コミ・気になる声</h3>
      <div className="not-prose grid sm:grid-cols-2 gap-4 my-5">
        <ReviewCard tag="加盟店の差" rating={2.5} body="加盟店によって対応や態度に差があると感じた。担当によって当たり外れがあるかもしれない。" />
        <ReviewCard tag="連絡" rating={3} body="営業担当と作業員の連絡ミスがあり、到着が予定より遅れた。連絡がもう少しスムーズだと良かった。" />
        <ReviewCard tag="最低料金" rating={3} body="被害箇所が狭かったが最低料金が一律で、面積の割にやや割高に感じた。" />
        <ReviewCard tag="仲介の仕組み" rating={3} body="実際に来るのは加盟店なので、どの業者が来るかは事前に分かりづらかった。" />
      </div>

      <div className="not-prose text-xs text-muted border border-border rounded-md p-4 my-6 leading-relaxed">
        <strong className="text-foreground/80">出典・参考：</strong>
        上記の口コミは、
        <a href="https://www.sharing-tech.co.jp/shiroari/shiroari110-reviews/" target="_blank" rel="noopener noreferrer" className="underline">公式の利用者レビュー（約500人調査）</a>、
        <a href="https://agri.mynavi.jp/2025_03_20_303239/" target="_blank" rel="noopener noreferrer" className="underline">マイナビ農業の調査記事</a>、
        <a href="https://www.sodanshitsu.co.jp/shiroari110/" target="_blank" rel="noopener noreferrer" className="underline">専門家の相談室の検証記事</a>
        など、公開されている利用者レビューの要点をまとめたものです。シロアリ110番は全国の加盟店ネットワークのため、実際の体験は担当する加盟店により異なります。
      </div>

      <h2 id="merit">口コミからわかったメリット</h2>
      <h3>1. 料金が明朗で相場より安い傾向</h3>
      <p>1坪1,320円からの明朗価格で、「ホームページ通りの金額だった」「追加費用がなかった」という声が多く、料金面の安心感が高評価です。</p>
      <h3>2. 全国対応で、地方でも依頼しやすい</h3>
      <p>全国47都道府県の加盟店ネットワークがあり、地元に選択肢が少ない地域でも電話一本で手配できる点が支持されています。</p>
      <h3>3. 受付・コールセンターの対応が丁寧</h3>
      <p>24時間365日の電話受付で、初めての人にも分かりやすく説明してくれる、という声が目立ちます。</p>
      <h3>4. 5年保証・無料点検の安心感</h3>
      <p>施工後の5年保証・年1回の無料点検が案内されており、長期的な安心につながります（条件は加盟店により異なる場合あり）。</p>

      <h2 id="demerit">口コミからわかったデメリット・注意点</h2>
      <h3>1. 加盟店によって対応・品質に差が出ることがある</h3>
      <p>最も多い不満が「加盟店ごとのばらつき」です。マッチング型サービスの構造上、どうしても担当店舗による差が生じます。事前に保証内容や施工範囲を書面で確認しましょう。</p>
      <h3>2. 狭い面積では割高に感じる場合がある</h3>
      <p>施工面積20坪（約66平方メートル）以下は最低料金が一律のため、被害が局所的な場合は割高に感じることがあります。</p>
      <h3>3. 実際の施工業者は事前に選びにくい</h3>
      <p>仲介の仕組みのため、どの加盟店が対応するかは依頼後に決まるのが一般的です。気になる場合は受付時に確認するとよいでしょう。</p>

      <h2 id="who">向いている人・向いていない人</h2>
      <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-border rounded-md p-5 bg-white">
          <p className="font-bold text-primary-dark mb-2">向いている人</p>
          <ul className="text-sm space-y-1.5 list-disc pl-5 text-foreground/85">
            <li>地方在住で地元業者の選択肢が少ない人</li>
            <li>明朗な料金で、まず相場感を知りたい人</li>
            <li>電話一本でスピーディに手配したい人</li>
          </ul>
        </div>
        <div className="border border-border rounded-md p-5 bg-white">
          <p className="font-bold text-primary-dark mb-2">向いていない人</p>
          <ul className="text-sm space-y-1.5 list-disc pl-5 text-foreground/85">
            <li>担当する業者を自分で指名・選定したい人</li>
            <li>ごく狭い範囲だけを最安で施工したい人</li>
            <li>地元に信頼できる老舗業者の当てがある人</li>
          </ul>
        </div>
      </div>
      <p>
        いずれの場合も、<Link href="/articles/shiroari-gyousha-erabikata/">業者選びのポイント</Link>を押さえ、
        <strong>複数社の相見積もり</strong>を取るのが失敗しないコツです。
      </p>

      <h2 id="flow">申し込みから施工までの流れ</h2>
      <ol>
        <li><strong>問い合わせ</strong>：電話（{p.phone}）またはWebから。状況を伝える。</li>
        <li><strong>現地調査・見積もり</strong>：加盟店が訪問し被害を確認（調査・見積もり無料）。</li>
        <li><strong>内容・金額の確認</strong>：見積もりに納得できれば契約。納得できなければ断ってもよい。</li>
        <li><strong>施工</strong>：駆除・予防作業を実施。床下の状況を写真で共有してくれる場合も。</li>
        <li><strong>アフター</strong>：5年保証・年1回の無料点検（条件は加盟店による）。</li>
      </ol>

      <h2 id="faq">よくある質問</h2>
      <FAQ items={faqs} />

      <p className="text-sm text-muted mt-8">
        本記事は公開情報・利用者レビューにもとづく参考情報です。最新の料金・保証・対応エリアは
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline">公式サイト</a>
        でご確認ください。
      </p>
    </ArticleLayout>
  );
}
