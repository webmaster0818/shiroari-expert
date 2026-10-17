import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";

const meta = getArticle("shiroari-baria-beito")!;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/articles/shiroari-baria-beito/" },
};

const BOUJO = "https://www.hakutaikyo.or.jp/jigyou/boujo";
const SHIYOUSHO = "https://www.hakutaikyo.or.jp/boujo/files/shiyousho.pdf";
const faq = (n: number) => `https://www.hakutaikyo.or.jp/faq/${n}.html`;

const faqs: FaqItem[] = [
  {
    question: "バリア工法とベイト工法では、どちらの効果が高いですか？",
    answer:
      "日本しろあり対策協会は、どちらの工法でも協会の仕様書を守って施工すれば効果はあると回答しています。効果の優劣ではなく、薬剤の使用量、維持管理の方法、費用、建物と敷地の条件を比べて選ぶことをおすすめします。",
  },
  {
    question: "ベイト工法のほうが費用は安いですか？",
    answer:
      "日本しろあり対策協会は、一般的にベイト工法のほうが費用がかかると回答しています。ただし金額は業者・建物の規模・契約期間によって異なるため、当サイトでは具体的な金額は掲載していません。同じ条件で複数社から見積もりを取り、総額で比較してください。",
  },
  {
    question: "工法は自分で指定できますか？",
    answer:
      "協会の回答では、通常は施工方法を業者が決めますが、協会は事前に十分な説明をするよう業者を指導しています。工法を指定したい場合は業者とよく相談し、納得できなければ他の業者にも見てもらって比べることが勧められています。",
  },
  {
    question: "アメリカカンザイシロアリにも同じ工法が使えますか？",
    answer:
      "協会の防除施工標準仕様書が対象とするのはヤマトシロアリとイエシロアリの2種で、アメリカカンザイシロアリとダイコクシロアリの駆除は「乾材シロアリの総合管理システム」によるとされています。乾材シロアリが疑われる場合は、その旨を業者にお伝えください。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} publishedAt="2026-10-17" updatedAt="2026-10-17">
      <FaqJsonLd items={faqs} />
      <p>
        バリア工法とベイト工法の違いは、<strong>薬剤で建物を守る範囲をつくるか、餌でコロニーそのものを駆除するか</strong>にあります。
        公益社団法人日本しろあり対策協会は、どちらの工法でも協会の仕様書を守って施工すれば効果はあるとしたうえで、
        一般的にはベイト工法のほうが費用がかかると回答しています。
        本記事では、協会の「防除施工標準仕様書（令和7年10月版）」と公式Q&amp;Aにもとづき、仕組み・維持管理・保証の考え方を比較します。
      </p>
      <p className="text-sm">
        ※「バリア工法」は業界で広く使われる呼び方で、協会の仕様書では「土壌処理」と「木材処理」として規定されています。
        当サイトでは、床下の土壌と木部に薬剤を処理する方法をバリア工法と表記しています。
      </p>

      <h2>比較表（協会の仕様書・Q&amp;Aで確認できる範囲）</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>項目</th><th>バリア工法（土壌処理・木材処理）</th><th>ベイト工法（維持管理型）</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>仕組み</td>
              <td>床下の土壌に薬剤を処理して防蟻層をつくり、木部にも薬剤を吹付・塗布・注入する</td>
              <td>餌木を入れた容器を建物の周囲に埋設し、シロアリが確認されたら駆除剤入りの餌（ベイト剤）を投与してコロニーを駆除する</td>
            </tr>
            <tr>
              <td>薬剤の量</td>
              <td>液剤の場合、帯状散布は処理長1mあたり1L、面状散布は1m²あたり3Lが標準</td>
              <td>従来工法の約千分の一の薬剤を、環境へ流出しない閉鎖系の容器で使用</td>
            </tr>
            <tr>
              <td>施工後の管理</td>
              <td>5年を目途に再処理</td>
              <td>定期的に訪問点検を行い、容器内のシロアリの活動状況を記録する</td>
            </tr>
            <tr>
              <td>施工者の要件</td>
              <td>協会に登録されたしろあり防除施工士（または同等以上の能力を有する者）の責任で施工</td>
              <td>ベイト工法管理者（しろあり防除施工士で、製造メーカーの講習試験の合格者）を置く</td>
            </tr>
            <tr>
              <td>費用</td>
              <td colSpan={2}>協会の回答は「一般的にベイト工法のほうが費用がかかります」。具体的な金額は業者・建物によって異なります</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm">
        出典：公益社団法人日本しろあり対策協会
        <a href={SHIYOUSHO} target="_blank" rel="noopener noreferrer">「防除施工標準仕様書（令和7年10月版）」</a>、
        <a href={BOUJO} target="_blank" rel="noopener noreferrer">「シロアリ防除について」</a>、
        <a href={faq(2682)} target="_blank" rel="noopener noreferrer">Q&amp;A「ベイト工法と薬剤の散布施工はどう違うのですか」</a>
        （いずれも2026年10月17日確認）
      </p>

      <h2>バリア工法（土壌処理・木材処理）の仕組み</h2>
      <p>
        協会は、ヤマトシロアリやイエシロアリは一般に地中を通って建物内に侵入することが多いため、
        基礎の内側や束石の周囲などの土壌を薬剤で処理することが侵入を防ぐ最も効果的な方法であると説明しています。
        仕様書では、防除処理は土壌処理と木材処理の両方で行うことになっています。
      </p>
      <h3>土壌処理</h3>
      <ul>
        <li>帯状散布法：基礎の立ち上がりの内周、束石・配管の周囲などに、壁際から20cm幅で薬剤を処理する</li>
        <li>面状散布法：床下の土壌表面に面状に薬剤を散布する</li>
        <li>そのほか、土壌表面皮膜形成工法、発泡施工法、土壌表面シート敷設工法などがある</li>
      </ul>
      <p>
        仕様書では、土壌処理は基礎内側の土壌を対象とし、建物の外周辺は行わないこととされています。
        基礎の内側であっても、環境汚染のおそれがある場合は土壌処理を行いません。
      </p>
      <h3>木材処理</h3>
      <p>
        木材の表面に噴霧器で吹き付ける方法、刷毛などで塗布する方法、木材や壁に穴を開けて薬液を注入する方法があります。
        新築建物では、通常、基礎の天端から1mまでの部材と、浴室まわり・洗面所・台所などの水回りの木材を処理します。
        仕様書は、床組と軸組を対象とし、原則として室内の見えがかりの木部処理は行わないとしています。
      </p>

      <h2>ベイト工法の仕組み</h2>
      <p>
        「ベイト工法」という名称は、駆除剤を混ぜた餌（ベイト剤）をシロアリに食べさせて集団を死滅させるシステムに対して、
        日本しろあり対策協会が付けたものです。協会は、IPM（総合的害虫管理）の理念に沿い、少量の薬剤で環境負荷を低減するシステムと説明しています。
      </p>
      <p>協会の説明では、設置方法は次の2通りです。</p>
      <ul>
        <li>薬剤の入っていない餌を入れたモニタリングステーションを地面に埋設し、シロアリを発見したときにベイト剤をセットする方法</li>
        <li>ベイト剤を入れたベイト・ステーションを、シロアリが生息している箇所に限定して設置する方法</li>
      </ul>
      <h3>仕様書が定める手順</h3>
      <ol>
        <li>事前調査（建物と敷地の状況、シロアリの生息場所、水回りや日当たりの悪い場所など）をもとに施工計画を作成する</li>
        <li>容器を建物の周囲を取り囲むように配置する。人が頻繁に通る場所、水がたまりやすい場所、地下配管などの障害物がある場所は避ける</li>
        <li>定期的に訪問点検を行い、容器内のシロアリの活動状況を記録する</li>
        <li>シロアリを確認した容器にベイト剤を投与し、コロニーの根絶が確認されたら食べ残しのベイト剤を回収して、再び定期点検を行う</li>
      </ol>
      <p>
        仕様書では、ベイト工法は施工時に加害しているコロニーだけでなく、施工後に形成されるコロニーも駆除する維持管理型の工法と位置付けられており、
        新築時の予防と既存建物の駆除のどちらにも用いることができます。使用できるのは協会に登録されたベイト工法に限られます。
      </p>

      <h2>選ぶ際に確認しておきたいこと</h2>
      <p>
        協会のQ&amp;Aでは、工法ごとの向き不向きを一律には示していません。当サイトでは、協会の回答と仕様書から読み取れる判断材料として、次の点の確認をおすすめします。
      </p>
      <ul>
        <li>
          <strong>床下に入れるか</strong>：協会は、床下にもぐれず「できる範囲に薬剤を撒く」処理となる場合、防除効果はある程度犠牲になるが費用は抑えられると回答しています。
          完全な防除も可能ですが、状況によっては高額になる場合があるとしています（
          <a href={faq(2681)} target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）。
        </li>
        <li>
          <strong>敷地に容器を設置できるか</strong>：ベイト工法では建物の周囲を取り囲むように容器を配置するため、外周の地面の状況が関係します。
        </li>
        <li>
          <strong>継続的な点検を受けられるか</strong>：ベイト工法は定期的な訪問点検を前提とする工法です。点検の頻度と、その費用が契約に含まれるかをご確認ください。
        </li>
        <li>
          <strong>部分施工にならないか</strong>：協会は、部分的な施工で家全体を守ることは難しく、家全体の施工を勧めると回答しています（
          <a href={faq(2677)} target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）。
        </li>
      </ul>

      <h2>保証の考え方</h2>
      <p>
        協会は、認定する薬剤の有効期間を5年としており、その理由を「5年を超えて長期間有効な薬剤は環境によくないと考えている」ためと説明しています（
        <a href={faq(2659)} target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）。
        また、予防工事後にシロアリが出た場合の相談に対しては、一般的には5年の保証が付いているはずなので、まず保証書を確認して業者に相談するよう回答しています（
        <a href={faq(2652)} target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）。
      </p>
      <p>
        一方で、保証を付けるかどうか、どこまでを対象にするかについては協会として統一したルールはなく、業者ごとの判断とされています。
        協会は、部分施工の場合は保証が付かない場合が多いとも回答しています（
        <a href={faq(2651)} target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）。
        工法にかかわらず、保証書の範囲・期間・免責・点検の条件を書面で確認してください。
        確認項目は<Link href="/articles/shiroari-hosho-naiyou/">「5年保証」は何を保証するのか</Link>にまとめています。
      </p>
      <p>
        工法は通常、業者が建物を調査したうえで決めます。協会は業者に対し、施工前に施工方法をきちんと説明するよう指導しています（
        <a href={faq(2706)} target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）。
        説明に納得できない場合は、<Link href="/articles/shiroari-aimitsumori/">相見積もり</Link>で他社の提案と比べることをおすすめします。
      </p>
      <p>
        費用の考え方は<Link href="/articles/shiroari-kuchu-hiyou/">駆除費用の相場</Link>、
        築年数ごとの再処理の目安は<Link href="/articles/shiroari-chikunensu-meyasu/">築年数別のシロアリ対策</Link>、
        お住まいの地域の対象種は<Link href="/area/">エリア別ページ</Link>でご確認いただけます。
      </p>
      <p className="text-sm">
        出典：公益社団法人日本しろあり対策協会「よくある質問」（
        <a href={faq(2685)} target="_blank" rel="noopener noreferrer">2685</a>・
        <a href={faq(2682)} target="_blank" rel="noopener noreferrer">2682</a>・
        <a href={faq(2681)} target="_blank" rel="noopener noreferrer">2681</a>・
        <a href={faq(2677)} target="_blank" rel="noopener noreferrer">2677</a>・
        <a href={faq(2659)} target="_blank" rel="noopener noreferrer">2659</a>・
        <a href={faq(2652)} target="_blank" rel="noopener noreferrer">2652</a>・
        <a href={faq(2651)} target="_blank" rel="noopener noreferrer">2651</a>・
        <a href={faq(2706)} target="_blank" rel="noopener noreferrer">2706</a>）、2026年10月17日確認
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
