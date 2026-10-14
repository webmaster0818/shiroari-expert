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
    "シロアリ110番の口コミ・評判は？加盟店の仕組み・料金・保証を公式情報とレビューで検証【2026年10月】",
  description:
    "シロアリ110番の良い口コミ・気になる口コミを出典付きで整理。施工は加盟店が行う取次ぎ型の仕組み、1㎡1,320円・66㎡以下一律88,000円の料金と含まれる範囲、保証、平均費用まで公式情報で解説します。",
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
      "公式では1㎡あたり1,320円（税込）と明記されており、1㎡あたりの一般相場（おおむね2,000〜3,000円）と比べて安い水準です。ただし66㎡以下は一律88,000円（税込）のため、被害が狭い場合は割高に感じることがあります。運営会社の集計では2025年の施工4,468件の平均は192,838円でした。正確な金額は現地調査後の見積もりで確認してください。",
  },
  {
    question: "シロアリ110番はどんな会社が運営していますか？",
    answer:
      "東証上場のシェアリングテクノロジー株式会社が運営する、問い合わせを全国293社以上の加盟店に取り次ぐサービスです。実際の施工は加盟店が行い、利用規約上、運営会社は利用者と加盟店の契約の当事者にはなりません（契約・キャンセル・苦情は加盟店に直接）。",
  },
  {
    question: "口コミで多い不満点は何ですか？",
    answer:
      "最も多いのは「加盟店によって対応や施工品質に差がある」という声です。全国の加盟店ネットワークである性質上、担当する店舗によって体験にばらつきが出ることがあります。連絡・到着の遅れを指摘する声も一部あります。",
  },
  {
    question: "保証やアフターサービスはありますか？",
    answer:
      "公式の料金ページでは5年間保証が案内されています（別ページには「最長10年」の表記もあります）。保証するのは施工した加盟店で、期間や内容は加盟店により異なる場合があるため、契約前に書面で確認しましょう。",
  },
  {
    question: "見積もりだけでも依頼できますか？",
    answer:
      "現地調査・見積もりは原則無料と案内されています（エリア・加盟店によっては事前確認のうえ調査費がかかる場合あり）。電話（24時間365日受付）またはWebから依頼でき、見積もり後に断ることもできます。複数社の相見積もりがおすすめです。",
  },
  {
    question: "被害が一部だけでも、その部分だけ頼めますか？",
    answer:
      "公式では、被害の拡大を防ぐため部分施工はできず建物全体を施工すると案内されています。66㎡以下は一律88,000円（税込）です。",
  },
  {
    question: "見積もり後に追加料金はかかりますか？",
    answer:
      "公式では正式な見積もり後の追加料金はかからないと案内されています。ただし障害物の移動・清掃、穴あけ・ハツリ作業、食害を受けた柱の補強は事前説明のうえ別料金で、見積もり後に要望を追加した場合も別途費用がかかることがあります。",
  },
  {
    question: "支払いはいつ・どうやって行いますか？",
    answer:
      "支払いは施工後です。クレジットカードも使えますが、一部の加盟店・エリアでは使えないため、受付時に確認してください。",
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
  ["shikumi", "取次ぎ型の仕組み（施工・契約・保証は加盟店）"],
  ["rating", "口コミから見た総合評価"],
  ["price", "料金は本当に安い？相場との比較"],
  ["include", "料金に含まれるもの・含まれないもの"],
  ["reviews", "実際の口コミ・評判（良い声・悪い声）"],
  ["merit", "口コミからわかったメリット"],
  ["demerit", "口コミからわかったデメリット・注意点"],
  ["who", "向いている人・向いていない人"],
  ["flow", "申し込みから施工までの流れ"],
  ["faq", "よくある質問"],
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} basePath="reviews" updatedAt="2026-10-14">
      <FaqJsonLd items={faqs} />

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

      <figure className="not-prose my-6 text-center">
        <a
          href={p.affiliateUrl ?? p.url}
          target="_blank"
          rel="nofollow noopener"
          className="inline-block"
        >
          <img
            src={p.affiliateBanner ?? "/images/reviews/shiroari-110-official.webp"}
            alt="シロアリ110番"
            width={300}
            height={250}
            loading="lazy"
            className="inline-block rounded-md border border-border"
          />
        </a>
        <figcaption className="text-xs text-muted mt-2 text-center">
          シロアリ110番（PR）／公式サイト：
          <a
            href={p.affiliateUrl ?? p.url}
            target="_blank"
            rel="nofollow noopener"
            className="underline"
          >
            {p.url}
          </a>
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

      <h2 id="shikumi">取次ぎ型の仕組み（施工・契約・保証は加盟店）</h2>
      <p>
        シロアリ110番は、問い合わせを受けて<strong>全国293社以上の加盟店</strong>に取り次ぐサービスです。
        現地調査・施工を行うのは加盟店で、公式の利用規約（第8条）では、運営会社は利用者と加盟店の
        <strong>契約の当事者にはならず</strong>、契約・問い合わせ・苦情・キャンセルは加盟店に直接行うと定められています。
        保証も施工した加盟店によるものです。口コミで「加盟店によって差がある」という声が最も多いのは、この仕組みによります。
      </p>
      <p>
        加盟店は、日本しろあり対策協会の「しろあり防除施工標準仕様書」に沿った施工方法を採用していると公式は案内しています。
        どの加盟店が来るか・保証の期間と範囲は、見積もりの段階で書面で確認しておくと安心です。
      </p>

      <h2 id="rating">口コミから見た総合評価</h2>
      <p>
        運営会社が2025年の利用者<strong>498件</strong>に行った調査では、総合満足度は<strong>4.7点（5点満点）</strong>でした。
        項目別では対応スピードが4.8点、費用・品質・コールセンターがそれぞれ4.6点です。
        ただし運営会社自身の調査である点に注意が必要で、第三者の調査記事では「加盟店による差」「繁忙期の待ち時間」などの不満も挙がっています。
      </p>
      <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        {[
          ["総合満足度", 4.7],
          ["対応スピード", 4.8],
          ["費用", 4.6],
          ["品質", 4.6],
        ].map(([label, val]) => (
          <div key={label as string} className="border border-border rounded-md p-4 bg-white text-center">
            <p className="text-xs text-muted mb-1">{label}</p>
            <p className="font-display text-2xl font-bold text-primary-dark">
              {(val as number).toFixed(1)}
            </p>
            <Stars value={val as number} />
          </div>
        ))}
      </div>
      <p className="text-xs text-muted">
        ※ 出典：<a href="https://www.sharing-tech.co.jp/shiroari/shiroari110-reviews/" target="_blank" rel="noopener noreferrer" className="underline">シロアリ110番 公式・利用者の口コミ調査（2025年・498件）</a>（2026年10月14日確認）。運営会社による自社調査です。
      </p>

      <h2 id="price">料金は本当に安い？相場との比較</h2>
      <p>
        シロアリ110番の料金は、公式で<strong>1㎡あたり1,320円（税込）</strong>、<strong>66㎡以下は一律88,000円（税込）</strong>と明記されています。
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
              <td className="p-3 font-bold text-primary-dark">1㎡ 1,320円（税込）</td>
              <td className="p-3">1平方メートル 2,000〜3,000円程度</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">追加費用</td>
              <td className="p-3">見積もり後の追加は原則なしと案内</td>
              <td className="p-3">業者により発生する場合あり</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">注意点</td>
              <td className="p-3">66㎡以下は一律88,000円（税込）・部分施工は不可</td>
              <td className="p-3">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted">
        ※ 金額は公式の表示にもとづく目安です。被害状況・床面積・建物構造で変動し、金額を保証するものではありません。
      </p>

      <h2 id="include">料金に含まれるもの・含まれないもの</h2>
      <p>公式の料金ページでは、料金に含まれる範囲と別料金の作業が次のように明記されています（2026年10月14日確認）。</p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse bg-white">
          <tbody>
            <tr className="border-b border-border">
              <th className="text-left bg-muted-bg font-bold p-3 w-36 align-top">含まれるもの</th>
              <td className="p-3">現地調査・出張費用・薬剤費用・建物の養生・木部処理・土壌処理</td>
            </tr>
            <tr className="border-b border-border">
              <th className="text-left bg-muted-bg font-bold p-3 align-top">別料金（事前に説明・見積もり）</th>
              <td className="p-3">床下の障害物の移動や清掃／薬剤注入のための穴あけ・コンクリートのハツリ作業／食害を受けた柱の補強</td>
            </tr>
            <tr className="border-b border-border">
              <th className="text-left bg-muted-bg font-bold p-3 align-top">追加料金</th>
              <td className="p-3">正式な見積もり後の追加料金はなし（見積もり後に要望を追加した場合は別途）</td>
            </tr>
            <tr className="border-b border-border">
              <th className="text-left bg-muted-bg font-bold p-3 align-top">実際の費用の目安</th>
              <td className="p-3">運営会社の集計で、2025年の施工4,468件の平均は192,838円</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted">
        ※ 出典：<a href="https://www.sharing-tech.co.jp/shiroari/price/" target="_blank" rel="noopener noreferrer" className="underline">シロアリ110番 公式・料金</a>／
        <a href="https://www.sharing-tech.co.jp/shiroari/shiroari110-reviews/" target="_blank" rel="noopener noreferrer" className="underline">公式・利用者の口コミ調査</a>。エリア・加盟店によっては公式の価格で対応できない場合があります。
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

      <p>
        このほか第三者の調査記事では、<strong>春〜初夏の繁忙期は現地調査や予約まで時間がかかる</strong>
        （<a href="https://agri.mynavi.jp/2025_03_20_303239/" target="_blank" rel="noopener noreferrer" className="underline">マイナビ農業</a>）、
        <strong>調査後の営業がやや強い・調査で写真の提示がなかった</strong>
        （<a href="https://isekakou.com/media/housecleaning/shiroari110-voice/" target="_blank" rel="noopener noreferrer" className="underline">伊勢化工</a>）
        といった声も挙がっています。公式の口コミ調査でも「最終的な金額が事前の情報より高くなった」「作業員の遅刻・連絡ミス」という不満が掲載されています。
      </p>

      <h2 id="merit">口コミからわかったメリット</h2>
      <h3>1. 料金が明朗で相場より安い傾向</h3>
      <p>1㎡1,320円（66㎡以下は一律88,000円）の明朗価格で、「ホームページ通りの金額だった」「追加費用がなかった」という声が多く、料金面の安心感が高評価です。</p>
      <h3>2. 全国対応で、地方でも依頼しやすい</h3>
      <p>全国47都道府県の加盟店ネットワークがあり、地元に選択肢が少ない地域でも電話一本で手配できる点が支持されています。</p>
      <h3>3. 受付・コールセンターの対応が丁寧</h3>
      <p>24時間365日の電話受付で、初めての人にも分かりやすく説明してくれる、という声が目立ちます。</p>
      <h3>4. 5年間保証（加盟店による）</h3>
      <p>公式の料金ページで5年間保証が案内されています。保証するのは施工した加盟店で、期間や内容は加盟店により異なる場合があるため書面で確認しましょう。</p>

      <h2 id="demerit">口コミからわかったデメリット・注意点</h2>
      <h3>1. 加盟店によって対応・品質に差が出ることがある</h3>
      <p>最も多い不満が「加盟店ごとのばらつき」です。マッチング型サービスの構造上、どうしても担当店舗による差が生じます。事前に保証内容や施工範囲を書面で確認しましょう。</p>
      <h3>2. 狭い面積では割高に感じる場合がある</h3>
      <p>66㎡以下は一律88,000円（税込）で、部分施工はできず建物全体の施工になるため、被害が局所的な場合は割高に感じることがあります。</p>
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
        <li><strong>現地調査・見積もり</strong>：加盟店が訪問し被害を確認（調査・見積もりは原則無料。エリア・加盟店により事前確認のうえ有料の場合あり）。</li>
        <li><strong>内容・金額の確認</strong>：見積もりに納得できれば契約。納得できなければ断ってもよい。</li>
        <li><strong>施工</strong>：駆除・予防作業を実施。床下の状況を写真で共有してくれる場合も。</li>
        <li><strong>支払い・アフター</strong>：支払いは施工後（カードは一部加盟店で不可）。保証は施工した加盟店による5年間保証（条件は加盟店で異なる場合あり）。</li>
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
