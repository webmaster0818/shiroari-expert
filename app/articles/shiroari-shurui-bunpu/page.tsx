import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";
import { AREAS } from "../../lib/areas";

// 出典はすべて公益社団法人 日本しろあり対策協会（2026-09-17確認）。
// ⚠️ 分布は県境で切れないので、断定できない県は「要確認」と書く。
const meta = getArticle("shiroari-shurui-bunpu")!;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/articles/shiroari-shurui-bunpu/" },
};

const faqs: FaqItem[] = [
  {
    question: "自分の家に出るのはどの種類ですか？",
    answer:
      "ヤマトシロアリは北海道北部を除く日本全土に分布するため、ほぼ全国で対象になります。イエシロアリは神奈川県以西の海岸線に沿った温暖な地域と千葉県の一部、南西諸島、小笠原諸島に限られます。内陸や東日本ではヤマトシロアリだけを想定すれば足りることが多いです。",
  },
  {
    question: "ヤマトシロアリとイエシロアリで対策は変わりますか？",
    answer:
      "変わります。イエシロアリは巣の規模が大きく加害のスピードが速いとされ、分布域では点検の優先度が上がります。また群飛の時期と時間帯が違い、ヤマトシロアリは昼、イエシロアリは夜に電灯へ飛来します。羽アリを見た時間帯は業者に伝えてください。",
  },
  {
    question: "アメリカカンザイシロアリは何が違いますか？",
    answer:
      "ヤマトシロアリ・イエシロアリが土壌とつながって加害するのに対し、アメリカカンザイシロアリは乾いた木材の中で生活します。床下の土壌処理という定石が通用しにくく、被害箇所も小屋裏や建具など広がりやすいのが特徴です。群飛は6〜9月の昼間に何度も起こります。",
  },
  {
    question: "北海道にもシロアリはいますか？",
    answer:
      "います。協会はヤマトシロアリの分布を「北海道北部を除く日本全土」としており、道内でも地域によって対象になります。一方でイエシロアリの分布域ではありません。",
  },
];

export default function Page() {
  const ie = AREAS.filter((a) => a.ie === "yes").map((a) => a.pref);
  const check = AREAS.filter((a) => a.ie === "check").map((a) => a.pref);
  return (
    <ArticleLayout meta={meta} updatedAt="2026-09-17">
      <FaqJsonLd items={faqs} />
      <p>
        シロアリ対策で最初に決まるのは「どの種類が相手か」です。日本には22種のシロアリがいますが、
        建築物を加害するのは主に<strong>ヤマトシロアリ</strong>と<strong>イエシロアリ</strong>の2種で、
        この2つは<strong>分布も群飛の時期も違います</strong>。ここを取り違えると、点検の時期も薬剤の選び方もずれます。
      </p>

      <h2>建築物を加害する主な種類</h2>
      <ul>
        <li>
          <strong>ヤマトシロアリ</strong>：北海道北部を除く日本全土に分布。群飛は4〜5月の昼間
          （沖縄は2月、東北・北海道は6月ごろ）。
        </li>
        <li>
          <strong>イエシロアリ</strong>：神奈川県以西の海岸線に沿った温暖な地域と千葉県の一部、
          南西諸島、小笠原諸島に分布。群飛は6〜7月の夜で、電灯に飛来します。
        </li>
        <li>
          <strong>アメリカカンザイシロアリ</strong>：乾いた木材の中で生活する「乾材シロアリ」。
          近年被害が増えています。群飛は6〜9月の昼間に何度も。
        </li>
        <li>
          <strong>ダイコクシロアリ</strong>：奄美大島以南に分布。
        </li>
      </ul>
      <p className="text-sm">
        出典：公益社団法人 日本しろあり対策協会
        <a href="https://www.hakutaikyo.or.jp/faq/1813.html" target="_blank" rel="noopener noreferrer">
          「わが国で建築物を加害するシロアリの種類と分布」
        </a>
        ／
        <a href="https://www.hakutaikyo.or.jp/faq/2278.html" target="_blank" rel="noopener noreferrer">
          「羽アリが飛ぶ時期はいつごろですか？」
        </a>
        （2026-09-17 確認）
      </p>

      <h2>イエシロアリの分布にあたる都道府県</h2>
      <p>
        協会の記載をもとに整理すると、イエシロアリの分布域にあたるのは次の{ie.length}都府県です。
      </p>
      <p><strong>{ie.join("・")}</strong></p>
      <p>
        一方、次の{check.length}都府県は<strong>県内で条件が分かれます</strong>。
        海岸線沿いの温暖な地域かどうかで変わるため、ここでは該当・非該当を断定していません。
      </p>
      <p><strong>{check.join("・")}</strong></p>
      <p>
        これ以外の道県は、協会が示す分布の条件（神奈川県以西の海岸線・千葉県の一部・南西諸島・小笠原諸島）に
        当たらないため、ヤマトシロアリを前提に考えて差し支えありません。
      </p>
      <p>
        <Link href="/area/">エリア別のページ</Link>で、都道府県ごとに対象種・群飛時期・補助金の状況をまとめています。
      </p>

      <h2>なぜ種類で対策が変わるのか</h2>
      <p>
        ヤマトシロアリとイエシロアリはどちらも土壌と行き来しながら加害するため、
        床下の土壌処理と木部処理という定石が効きます。ただしイエシロアリは巣の規模が大きく、
        加害の進み方が速いとされます。分布域では「まだ大丈夫だろう」と先延ばしにするリスクが相対的に高くなります。
      </p>
      <p>
        これに対してアメリカカンザイシロアリは乾いた木材の中で完結するため、
        床下だけを処理しても解決しないことがあります。小屋裏や建具から木くず（糞粒）が落ちている場合は、
        床下点検だけで終わらせず、加害箇所の特定から相談してください。
      </p>

      <h2>羽アリを見たら、まず種類を確かめる</h2>
      <p>
        羽アリはシロアリとクロアリで対応が正反対になります。触角の形・胴のくびれ・羽の大きさで判別できます。
        手順は<Link href="/articles/hane-ari-mikiwake/">羽アリの見分け方</Link>にまとめました。
        見た<strong>時間帯（昼か夜か）</strong>も種類の手がかりになるので、記録しておいてください。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
