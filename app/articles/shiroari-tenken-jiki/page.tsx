import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";

const meta = getArticle("shiroari-tenken-jiki")!;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/articles/shiroari-tenken-jiki/" },
};

const faqs: FaqItem[] = [
  {
    question: "点検は何年おきに受ければいいですか？",
    answer:
      "防蟻処理に使う薬剤の効果は5年を目安に設計されているため、5年ごとの再処理とその前の点検が基本サイクルです。前回の施工時期が分からない場合は、まず現状を見てもらうところから始めてください。",
  },
  {
    question: "羽アリを見てから頼むのでは遅いですか？",
    answer:
      "遅くはありませんが、群飛は「巣が成熟して次の巣を作る段階に来た」という合図です。つまり被害はすでに進行しています。見つけたら季節を待たず相談してください。",
  },
  {
    question: "点検に一番いい季節はありますか？",
    answer:
      "床下に入る作業なので、極端に暑い時期・寒い時期を避けると作業しやすいという実務上の事情はあります。ただし被害の有無は季節で変わらないため、「都合のつく時期に受ける」で問題ありません。群飛時期の直前（ヤマトシロアリなら3月ごろ）に受けておくと、群飛を見たときに慌てずに済みます。",
  },
  {
    question: "無料点検は受けても大丈夫ですか？",
    answer:
      "無料点検そのものは一般的なサービスです。ただし点検後にその場で契約を迫られた場合は、いったん保留にしてください。同じ条件で他社からも見積もりを取るのが基本です。判断材料は当日そろわなくて構いません。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} updatedAt="2026-09-17">
      <FaqJsonLd items={faqs} />
      <p>
        シロアリ点検の時期は、<strong>羽アリが出る時期から逆算する</strong>と決めやすくなります。
        群飛（羽アリが一斉に飛び立つこと）は「巣が成熟した」という合図なので、
        それを見てから動くと、すでに被害が進んだ状態からのスタートになります。
      </p>

      <h2>群飛の時期（種類と地域で違う）</h2>
      <ul>
        <li><strong>ヤマトシロアリ</strong>：4〜5月の昼間。ただし沖縄は2月、東北・北海道は6月ごろ</li>
        <li><strong>イエシロアリ</strong>：6〜7月の夜。電灯に飛来する</li>
        <li><strong>アメリカカンザイシロアリ</strong>：6〜9月の昼間に何度も</li>
      </ul>
      <p className="text-sm">
        出典：公益社団法人 日本しろあり対策協会
        <a href="https://www.hakutaikyo.or.jp/faq/2278.html" target="_blank" rel="noopener noreferrer">
          「羽アリが飛ぶ時期はいつごろですか？」
        </a>
        （2026-09-17 確認）
      </p>
      <p>
        住んでいる地域でどの種類が対象になるかは
        <Link href="/articles/shiroari-shurui-bunpu/">種類と分布</Link>、
        都道府県別の時期は<Link href="/area/">エリア別ページ</Link>で確認できます。
      </p>

      <h2>点検のサイクルは5年が基準</h2>
      <p>
        防蟻処理の薬剤は、効果の持続がおおむね5年を目安に設計されています。
        そのため「5年ごとに再処理し、その手前で点検する」が基本の型です。
        新築時に防蟻処理を受けている住宅も、5年を過ぎたあたりから同じ考え方になります。
      </p>
      <p>
        前回いつ施工したか分からない住宅、中古で取得した住宅は、年数を推測するより
        <Link href="/articles/shiroari-yukashita-tenken/">床下点検</Link>で現状を見てもらうほうが早いです。
      </p>

      <h2>群飛の前に点検しておくと何が違うか</h2>
      <p>
        羽アリが家の中で発生すると、多くの人はその場で業者を探し始めます。
        季節が重なるため問い合わせが集中し、希望日に入ってもらえないことがあります。
        群飛時期の1〜2か月前に点検を済ませておくと、被害があった場合でも
        <strong>複数社から見積もりを取る時間</strong>が確保できます。
      </p>
      <p>
        比較の手順は<Link href="/articles/shiroari-aimitsumori/">相見積もりの取り方</Link>にまとめています。
      </p>

      <h2>点検の前に自分で見ておくこと</h2>
      <ul>
        <li>浴室・洗面所まわりの床に沈み、きしみがないか</li>
        <li>基礎の外側や床下に蟻道（土でできた細いトンネル）がないか</li>
        <li>玄関・勝手口の枠を軽く叩いて、中空の音がしないか</li>
        <li>春〜初夏に羽アリを見たか。見たなら<strong>時間帯</strong>（昼か夜か）</li>
      </ul>
      <p>
        該当するものがあれば点検時に伝えてください。症状の詳しい見方は
        <Link href="/articles/shiroari-higai-shoujou/">シロアリ被害の症状</Link>にあります。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
