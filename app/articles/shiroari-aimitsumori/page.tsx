import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";

const meta = getArticle("shiroari-aimitsumori")!;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/articles/shiroari-aimitsumori/" },
};

const faqs: FaqItem[] = [
  {
    question: "何社から見積もりを取ればよいですか？",
    answer:
      "2社あれば、金額が高いか安いかを判断できます。3社目は、1社目と2社目の説明が異なる場合の判断材料として有効です。依頼先を増やすほど良いわけではなく、その分、現地調査の立ち会いが必要になります。",
  },
  {
    question: "相見積もりであることを伝えてもよいですか？",
    answer:
      "伝えて問題ありません。伝えることで、各社が条件をそろえて見積もりを作成しやすくなります。伝えずに進めると、後から工法や保証の異なる見積もりを比較していたと判明することがあります。",
  },
  {
    question: "金額が大きく異なる場合はどのように判断すればよいですか？",
    answer:
      "まず工法（バリア/ベイト）と施工範囲が同じかを確認してください。同じ条件で差が出る場合は、薬剤の種類、保証の範囲、床下進入不可エリアの扱いのいずれかが異なることが多くあります。安い方の業者に理由を確認し、納得できる説明があるかどうかで判断してください。",
  },
  {
    question: "その場で契約を求められた場合はどうすればよいですか？",
    answer:
      "いったん持ち帰って検討してください。点検当日の契約を条件とする割引は、他社と比較する時間をなくす目的で提示されることがあります。必要な工事であれば、数日検討しても内容は変わりません。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} updatedAt="2026-09-17">
      <FaqJsonLd items={faqs} />
      <p>
        シロアリ駆除は、同じ住宅でも会社によって見積もりが異なります。
        ただし、<strong>条件をそろえずに取得した見積もりは比較の材料になりません</strong>。
        床面積・工法・保証が異なる見積もりを金額だけで比較し、安い方を選んでしまうことは、よくある失敗の一つです。
      </p>

      <h2>そろえるべき4つの条件</h2>
      <ul>
        <li><strong>施工範囲</strong>：床下全体か、被害箇所のみか。何坪分か</li>
        <li><strong>工法</strong>：バリア工法（薬剤処理）か、ベイト工法（設置型）か</li>
        <li><strong>保証</strong>：年数に加え、再施工までか修繕までか</li>
        <li><strong>追加費用の条件</strong>：床下に進入できない区画、被害材の交換が出た場合の扱い</li>
      </ul>
      <p>
        この4つの条件をあらかじめ決めたうえで、各社に同じ内容で依頼します。
        条件を指定せずに依頼すると、会社ごとに見積もりの前提が異なってしまいます。
      </p>

      <h2>手順</h2>
      <ol>
        <li>床面積（坪数）と築年数、気になる症状をメモにする</li>
        <li>2社に現地調査を依頼する（相見積もりであることは伝えて問題ありません）</li>
        <li>調査時に「床下に入れない箇所があったか」を確認する</li>
        <li>見積書は<strong>項目別の内訳</strong>で受け取る（「一式」の表記にしない）</li>
        <li>金額差が出たら、工法・薬剤・保証・進入可否のどれが原因かを確認する</li>
      </ol>

      <h2>見積書で確認すべき項目</h2>
      <p>
        比較の際に重要となるのは、総額よりも内訳です。薬剤散布費・木部処理費・土壌処理費・点検費・保証費が
        それぞれいくらかを確認してください。「一式」とまとめられている場合は、内訳の提示を依頼してください。
        内訳を提示できない見積もりは、他社との比較に適しません。
      </p>
      <p>
        保証の読み方は<Link href="/articles/shiroari-hosho-naiyou/">「5年保証」は何を保証するのか</Link>、
        費用の相場観は<Link href="/articles/shiroari-kuchu-hiyou/">駆除費用の相場</Link>にまとめています。
      </p>

      <h2>価格だけで選ばない理由</h2>
      <p>
        極端に安い見積もりは、薬剤の希釈率を上げる、必要な工程を省く、保証を付けない、
        といった方法で費用を下げている場合があります。施工の品質は、完了直後には判断できません。
        <strong>差が明らかになるのは、数年後に再発した時点です</strong>。
        そのため、保証の範囲と免責事項を見積もりの段階で確認しておくことをおすすめします。
      </p>
      <p>
        業者の見極め方は<Link href="/articles/shiroari-gyousha-erabikata/">業者の選び方</Link>、
        お住まいの地域で対応している会社は<Link href="/area/">エリア別ページ</Link>からご確認いただけます。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
