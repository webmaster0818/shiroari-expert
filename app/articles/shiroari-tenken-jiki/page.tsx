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
    question: "点検は何年おきに受ければよいですか？",
    answer:
      "防蟻処理に使う薬剤の効果は5年を目安に設計されているため、5年ごとの再処理とその前の点検が基本サイクルです。前回の施工時期が分からない場合は、まず床下の現状を点検してもらうことをおすすめします。",
  },
  {
    question: "羽アリを見つけてから依頼するのでは遅いですか？",
    answer:
      "遅すぎることはありませんが、群飛は巣が成熟し、新たな巣を作る段階に入ったことを示しています。被害はすでに進行している可能性があるため、見つけた時点で早めにご相談ください。",
  },
  {
    question: "点検に適した季節はありますか？",
    answer:
      "床下に入る作業のため、極端に暑い時期や寒い時期を避けると作業しやすいという実務上の事情はあります。ただし、被害の有無は季節によって変わらないため、ご都合のよい時期に受けていただいて差し支えありません。群飛時期の直前（ヤマトシロアリの場合は3月ごろ）に受けておくと、群飛が発生した際にも落ち着いて対応できます。",
  },
  {
    question: "無料点検を受けても問題ありませんか？",
    answer:
      "無料点検そのものは一般的なサービスです。ただし、点検後にその場で契約を求められた場合は、いったん保留にしてください。同じ条件で他社からも見積もりを取ることをおすすめします。当日中に判断する必要はありません。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} updatedAt="2026-09-17">
      <FaqJsonLd items={faqs} />
      <p>
        シロアリ点検の時期は、<strong>羽アリが発生する時期から逆算する</strong>と決めやすくなります。
        群飛（羽アリが一斉に飛び立つこと）は巣が成熟したことを示すため、
        群飛を見てから対応すると、すでに被害が進んだ状態からの対応となります。
      </p>

      <h2>群飛の時期（種類と地域による違い）</h2>
      <ul>
        <li><strong>ヤマトシロアリ</strong>：4〜5月の昼間。ただし沖縄は2月、東北・北海道は6月ごろ</li>
        <li><strong>イエシロアリ</strong>：6〜7月の夜。電灯に飛来する</li>
        <li><strong>アメリカカンザイシロアリ</strong>：6〜9月の昼間に複数回</li>
      </ul>
      <p className="text-sm">
        出典：公益社団法人 日本しろあり対策協会
        <a href="https://www.hakutaikyo.or.jp/faq/2278.html" target="_blank" rel="noopener noreferrer">
          「羽アリが飛ぶ時期はいつごろですか？」
        </a>
        （2026年9月17日確認）
      </p>
      <p>
        お住まいの地域でどの種類が対象となるかは
        <Link href="/articles/shiroari-shurui-bunpu/">種類と分布</Link>、
        都道府県別の時期は<Link href="/area/">エリア別ページ</Link>でご確認いただけます。
      </p>

      <h2>点検のサイクルは5年が基準です</h2>
      <p>
        防蟻処理の薬剤は、効果の持続がおおむね5年を目安に設計されています。
        そのため、5年ごとに再処理を行い、その前に点検を受けることが基本となります。
        新築時に防蟻処理を受けている住宅も、築5年を過ぎた時点から同様の考え方となります。
      </p>
      <p>
        前回の施工時期が分からない住宅や中古で取得した住宅は、年数を推測するよりも
        <Link href="/articles/shiroari-yukashita-tenken/">床下点検</Link>で現状を確認することをおすすめします。
      </p>

      <h2>群飛の前に点検を受けるメリット</h2>
      <p>
        羽アリが室内で発生すると、多くの方がその時点で業者を探し始めます。
        同じ時期に問い合わせが集中するため、希望日に点検を受けられない場合があります。
        群飛時期の1〜2か月前に点検を済ませておくと、被害があった場合でも
        <strong>複数社から見積もりを取る時間</strong>が確保できます。
      </p>
      <p>
        比較の手順は<Link href="/articles/shiroari-aimitsumori/">相見積もりの取り方</Link>にまとめています。
      </p>

      <h2>点検の前にご自身で確認しておくこと</h2>
      <ul>
        <li>浴室・洗面所まわりの床に沈み、きしみがないか</li>
        <li>基礎の外側や床下に蟻道（土でできた細いトンネル）がないか</li>
        <li>玄関・勝手口の枠を軽く叩いて、中空の音がしないか</li>
        <li>春〜初夏に羽アリを見たか。見た場合はその<strong>時間帯</strong>（昼か夜か）</li>
      </ul>
      <p>
        該当するものがあれば、点検時にお伝えください。症状の詳しい見方は
        <Link href="/articles/shiroari-higai-shoujou/">シロアリ被害の症状</Link>でご説明しています。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
