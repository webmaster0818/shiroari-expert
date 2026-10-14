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
    question: "何社から取ればいいですか？",
    answer:
      "2社あれば「高いのか安いのか」の判断はできます。3社目は、1社目と2社目で説明が食い違ったときに決着をつける目的で使うと有効です。数を増やすほど良いわけではなく、そのぶん現地調査の立ち会いが必要になります。",
  },
  {
    question: "相見積もりだと伝えてよいですか？",
    answer:
      "伝えて問題ありません。むしろ伝えたほうが、各社が条件をそろえて出してくれます。隠して進めると、後から工法や保証が違うものを比べていたと分かることがあります。",
  },
  {
    question: "金額が大きく違うときはどう判断しますか？",
    answer:
      "まず工法（バリア/ベイト）と施工範囲が同じかを確認してください。同じ条件で差が出る場合は、薬剤の種類、保証の範囲、床下進入不可エリアの扱いのどれかが違うことが多いです。安いほうに理由を聞き、納得できる説明があるかで判断します。",
  },
  {
    question: "その場で契約を求められたら？",
    answer:
      "持ち帰ってください。点検当日に契約しないと受けられない割引は、比較する時間を奪うためのものです。本当に必要な工事なら、数日待っても内容は変わりません。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} updatedAt="2026-09-17">
      <FaqJsonLd items={faqs} />
      <p>
        シロアリ駆除は、同じ家でも会社によって見積もりが変わります。
        ただし<strong>条件をそろえずに並べた見積もりは比較になりません</strong>。
        床面積も工法も保証も違うものを金額だけで見比べて、安いほうを選んでしまうのが一番よくある失敗です。
      </p>

      <h2>そろえる4つの条件</h2>
      <ul>
        <li><strong>施工範囲</strong>：床下全体か、被害箇所だけか。何坪ぶんか</li>
        <li><strong>工法</strong>：バリア工法（薬剤処理）か、ベイト工法（設置型）か</li>
        <li><strong>保証</strong>：年数だけでなく、再施工までか修繕までか</li>
        <li><strong>追加費用の条件</strong>：床下に進入できない区画、被害材の交換が出た場合の扱い</li>
      </ul>
      <p>
        この4つを最初に自分の側で決めて、各社に同じ内容で依頼します。
        「おまかせで見積もってください」と言うと、会社ごとに前提が変わってしまいます。
      </p>

      <h2>手順</h2>
      <ol>
        <li>床面積（坪数）と築年数、気になる症状をメモにする</li>
        <li>2社に現地調査を依頼する。相見積もりであることは伝えてよい</li>
        <li>調査時に「床下に入れない箇所があったか」を必ず聞く</li>
        <li>見積書は<strong>項目別の内訳</strong>でもらう（一式いくら、にしない）</li>
        <li>金額差が出たら、工法・薬剤・保証・進入可否のどれが原因かを確認する</li>
      </ol>

      <h2>見積書で見るところ</h2>
      <p>
        総額の下に並ぶ内訳が本体です。薬剤散布費・木部処理費・土壌処理費・点検費・保証費が
        それぞれいくらか。「一式」でまとめられている場合は、内訳を出してもらってください。
        出せない理由がある見積もりは、比較の土俵に乗りません。
      </p>
      <p>
        保証の読み方は<Link href="/articles/shiroari-hosho-naiyou/">「5年保証」は何を保証するのか</Link>、
        費用の相場観は<Link href="/articles/shiroari-kuchu-hiyou/">駆除費用の相場</Link>にまとめています。
      </p>

      <h2>安さだけで選ばない理由</h2>
      <p>
        極端に安い見積もりは、薬剤の希釈率を上げる、必要な工程を省く、保証を付けない、
        といった形でコストを落としていることがあります。施工の品質は完了直後には分かりません。
        <strong>何年後かに再発したときに初めて差が出ます</strong>。
        だからこそ、保証の範囲と免責を見積もり段階で確認しておく価値があります。
      </p>
      <p>
        業者の見極め方は<Link href="/articles/shiroari-gyousha-erabikata/">業者の選び方</Link>、
        お住まいの地域で対応している会社は<Link href="/area/">エリア別ページ</Link>から確認できます。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
