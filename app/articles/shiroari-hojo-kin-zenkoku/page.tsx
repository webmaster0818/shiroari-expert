import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "../../components/ArticleLayout";
import { RegionList } from "../../components/RegionList";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";

const meta = getArticle("shiroari-hojo-kin-zenkoku")!;

export const metadata: Metadata = {
  alternates: { canonical: "/articles/shiroari-hojo-kin-zenkoku/" },
  title: meta.title,
  description: meta.description,
};

// 自治体の実例は、各自治体の公式ページ・公式PDFで確認できたものだけを載せる（確認日を必ず書く）
const CHECKED = "2026年10月15日";
// 予防の費用・千葉県の FAQ と冒頭は 10/21 に公式資料で確認
const CHECKED_PREVENT = "2026年10月21日";
const ABIKO_URL = "https://www.city.abiko.chiba.jp/kurashi/sumai/josei/reform/index.html";

const EXAMPLES: {
  name: string;
  program: string;
  termite: string;
  amount: string;
  term: string;
  sources: { label: string; url: string }[];
}[] = [
  {
    name: "滋賀県彦根市",
    program: "令和8年度 彦根市リフォーム事業",
    termite: "対象（「シロアリ駆除（改修工事を伴うもの）」と明記）",
    amount: "対象工事経費の10％（上限7万円）。工事費20万円以上（税込）・市内業者の施工が条件",
    term: "事前申込は令和8年4月1日〜7月31日（申込多数の場合は抽選）。当選後、工事完了から原則30日以内に交付申請。2026年度の事前申込は終了",
    sources: [
      { label: "彦根市 令和8年度リフォーム事業の手引き（PDF）", url: "https://www.city.hikone.lg.jp/material/files/group/95/r8_tebiki.pdf" },
    ],
  },
  {
    name: "鹿児島県瀬戸内町",
    program: "瀬戸内町住宅リフォーム等助成金（令和8年度）",
    termite: "条件付きで対象（「白蟻防除・駆除：リフォーム工事が伴えば可」）",
    amount: "50万円以上（税込）の工事1件につき10万円。町内業者の施工が条件",
    term: "令和8年4月6日から定員（20件）に達するまで。工事を始める前に申請",
    sources: [
      { label: "瀬戸内町 住宅リフォーム等助成金", url: "https://www.town.setouchi.lg.jp/jyuutaku/reformjosei.html" },
      { label: "助成金対象工事一覧（例）（PDF）", url: "https://www.town.setouchi.lg.jp/jyuutaku/documents/juutakureformjosei_taishoukouji.pdf" },
    ],
  },
  {
    name: "茨城県常陸大宮市",
    program: "令和8年度 常陸大宮市住宅リフォーム資金補助金",
    termite: "対象外（「シロアリ駆除、その他の防虫や消毒等の薬剤散布・塗布」を対象外工事に明記）",
    amount: "（参考）工事費20万円以上100万円未満は10％以内、100万円以上は10万円以内",
    term: "令和8年4月1日から受付。予算がなくなり次第終了",
    sources: [
      { label: "常陸大宮市 令和8年度住宅リフォーム資金補助金", url: "https://www.city.hitachiomiya.lg.jp/kurashi_gyousei/kurashi/sumai/news/page011782.html" },
      { label: "補助対象リフォーム工事一覧（PDF）", url: "https://www.city.hitachiomiya.lg.jp/data/doc/1783558326_doc_43_0.pdf" },
    ],
  },
];

const faqs: FaqItem[] = [
  {
    question: "シロアリ駆除に補助金は出ますか？",
    answer:
      "シロアリ駆除だけを目的にした補助金は多くありません。市区町村の住宅リフォーム補助の中で扱われることが多く、その扱いは「改修工事を伴えば対象」（例：滋賀県彦根市・鹿児島県瀬戸内町の2026年度制度）と「対象外」（例：茨城県常陸大宮市の2026年度制度）に分かれます。お住まいの市区町村の対象工事一覧で確認してください。",
  },
  {
    question: "シロアリ駆除だけ（薬剤散布だけ）でも補助の対象になりますか？",
    answer:
      "当サイトが2026年10月15日に確認した自治体では、彦根市は「改修工事を伴うもの」、瀬戸内町は「リフォーム工事が伴えば可」としており、駆除単独では対象になりません。常陸大宮市はシロアリ駆除を対象外としています。駆除単独で対象になるかは、自治体の要綱・対象工事一覧で確認が必要です。",
  },
  {
    question: "シロアリ予防（新築後の再処理・予防処理）の費用に使える補助金はありますか？",
    answer:
      "当サイトが2026年10月21日に確認した範囲では、シロアリの予防処理だけを対象にした補助金は見つかりませんでした。国の制度についても、国土交通省住宅局「令和8年度 住宅局関係予算概要」（2026年2月）に、防蟻処理・シロアリ予防を補助対象と明記した事業は見当たりませんでした。市区町村の住宅リフォーム補助では扱いが分かれます。千葉県我孫子市（2026年度）は「基礎や土台のひび・欠けの補修・補強、塗装、部材交換（部材の防蟻処理を含む。）」を対象工事とし、害虫害獣の駆除に関する工事は除いています。鹿児島県瀬戸内町は「白蟻防除・駆除」をリフォーム工事が伴う場合に限り対象とし、茨城県常陸大宮市は「シロアリ駆除、その他の防虫や消毒等の薬剤散布・塗布」を対象外としています。なお、国税庁の質疑応答事例では、シロアリの被害を事前に防止するための費用と、駆除とともに行う予防のための費用は雑損控除の対象外です。再処理・予防処理だけを行う場合は、お住まいの市区町村の対象工事一覧で「防蟻」「白蟻」の記載を確認し、担当窓口にお問い合わせください。",
  },
  {
    question: "千葉県ではシロアリ駆除・予防に補助金を使えますか？",
    answer:
      "千葉県内で、シロアリの駆除・予防だけを対象にした補助金は、2026年10月21日に確認した範囲では見つかりませんでした。市町村の住宅リフォーム補助のうち、我孫子市の2026年度制度は「基礎や土台のひび・欠けの補修・補強、塗装、部材交換（部材の防蟻処理を含む。）」を対象工事に含め、「害虫害獣の駆除」に関する工事は除いています。補助額は持家のリフォームで対象経費の5％（上限7万円。転居・転入に伴う場合は年齢等により最大20％・上限60万円）、税込20万円以上・市の登録施工事業者による工事・交付決定後の着工が条件で、受付は2026年4月1日〜2027年2月10日（予算に達した場合は終了）です。四街道市・酒々井町・大多喜町・神崎町の住宅リフォーム補助の公式資料には、シロアリ・防蟻についての記載が見つかりませんでした（対象かどうかは各市町の窓口にご確認ください。四街道市の2026年度の受付は終了しています）。その他の市町村は、住宅リフォーム推進協議会の支援制度検索サイトとお住まいの市町村の窓口でご確認ください。",
  },
  {
    question: "申請のタイミングは？",
    answer:
      "確認した自治体はいずれも、工事の前に申し込む必要があります（常陸大宮市は交付決定後に着工、瀬戸内町は工事を始める前に申請、彦根市は受付期間内に事前申込→抽選→工事完了後に交付申請）。流れは自治体ごとに違い、受付期間や定員・予算の上限もあるため、業者と契約する前に市区町村の窓口で確認してください。",
  },
  {
    question: "シロアリ駆除の費用は確定申告で控除できますか？",
    answer:
      "国税庁の質疑応答事例では、シロアリ被害の修繕費用と、そのシロアリを駆除するための費用は雑損控除の対象とされています。一方、被害を事前に防ぐための費用や、駆除とあわせて行う予防のための費用は対象外です。補助金や保険金を受け取った場合はその額を差し引いて計算します。詳しくは税務署にご確認ください。",
  },
  {
    question: "お住まいの市区町村に補助制度があるか、どのように調べればよいですか？",
    answer:
      "一般社団法人 住宅リフォーム推進協議会の「地方公共団体における住宅リフォーム支援制度検索サイト」で、都道府県・市区町村ごとのリフォーム支援制度を検索できます。見つかった制度の要綱や対象工事一覧で「シロアリ」「白蟻」「防蟻」の記載を探し、最終的には担当窓口に電話でご確認ください。",
  },
  {
    question: "賃貸物件のオーナーや借家人も申請できますか？",
    answer:
      "自治体によって異なります。たとえば瀬戸内町は所有者の承諾書があれば借家人の申請も可としていますが、常陸大宮市は所有者が居住していることを条件としています。お住まいの自治体の要件を確認してください。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} updatedAt="2026-10-21">
      <FaqJsonLd items={faqs} />

      <div className="notice-box">
        <p className="font-bold text-primary-dark mb-1">要点（2026年10月15日時点）</p>
        <ul className="text-sm leading-relaxed mb-0 list-disc pl-5 space-y-1">
          <li>シロアリ駆除<strong>のみ</strong>を目的とした補助金は多くありません</li>
          <li>市区町村の<strong>住宅リフォーム補助</strong>で扱われることが多く、「改修工事を伴えば対象」「対象外」と自治体により扱いが分かれます</li>
          <li>確認した制度はどれも<strong>工事前の申込み</strong>が必要で、受付期間・定員・予算に上限があります</li>
          <li>駆除費用と被害の修繕費用は<strong>雑損控除</strong>の対象となります（予防の費用は対象外・国税庁）</li>
        </ul>
      </div>

      <p>
        「シロアリ駆除に補助金は使えるのか」を、2026年度の自治体の制度（公式ページで確認）と国税庁の公表資料をもとに整理しました。
        <strong>シロアリ予防（新築後の再処理・予防処理）だけを対象にした補助金</strong>は、当サイトが{CHECKED_PREVENT}に確認した自治体・国の資料の範囲では見つかりませんでした。
        リフォーム補助の中で扱う例として、<strong>千葉県我孫子市</strong>の2026年度の住宅リフォーム補助は「基礎や土台のひび・欠けの補修・補強、塗装、部材交換（部材の防蟻処理を含む。）」を対象工事とし、「害虫害獣の駆除」に関する工事は除いています（
        <a href={ABIKO_URL} target="_blank" rel="noopener noreferrer">我孫子市 住宅リフォーム補助金制度</a>
        ）。また、予防のための費用は雑損控除の対象になりません（国税庁）。
        お住まいの市区町村の制度の探し方と、47都道府県別の確認先も掲載しています。
      </p>
      <p className="text-xs text-muted">
        予防の費用・千葉県について確認した資料（{CHECKED_PREVENT}確認）：
        <a href="https://www.city.abiko.chiba.jp/kurashi/sumai/josei/reform/index.files/080327_R8_tebiki.pdf" target="_blank" rel="noopener noreferrer">我孫子市 住宅リフォーム補助金 申請の手引き R8（PDF）</a>／
        <a href="https://www.mlit.go.jp/page/content/001982271.pdf" target="_blank" rel="noopener noreferrer">国土交通省住宅局 令和8年度 住宅局関係予算概要（PDF）</a>／
        <a href="https://www.nta.go.jp/law/shitsugi/shotoku/05/01.htm" target="_blank" rel="noopener noreferrer">国税庁 質疑応答事例「シロアリの駆除費用」</a>／
        四街道市・酒々井町・大多喜町・神崎町の住宅リフォーム補助の公式ページ・要綱
      </p>

      <h2>シロアリ駆除の補助金は「リフォーム補助の一部」が中心</h2>
      <p>
        シロアリ駆除そのものを目的とした補助金は多くありません。実際には、市区町村が地域経済の活性化などを目的に行っている
        <strong>住宅リフォーム補助</strong>の「対象工事」にシロアリ駆除が含まれるかどうか、という形で扱われるのが一般的です。
        その扱いは、自治体によって明確に分かれています。
      </p>

      <h2>2026年度の自治体の実例（公式ページで確認）</h2>
      <p>
        以下は、当サイトが{CHECKED}に各自治体の公式ページ・公式資料で内容を確認できた例です。
        シロアリ駆除の扱いが「対象」「条件付き対象」「対象外」に分かれていることがわかります。
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse bg-white border border-border">
          <thead>
            <tr className="bg-muted-bg">
              <th className="text-left p-3 border-b border-border w-32">自治体</th>
              <th className="text-left p-3 border-b border-border">シロアリ駆除の扱い</th>
              <th className="text-left p-3 border-b border-border">補助額・条件</th>
              <th className="text-left p-3 border-b border-border">受付</th>
            </tr>
          </thead>
          <tbody>
            {EXAMPLES.map((e) => (
              <tr key={e.name} className="border-b border-border align-top">
                <td className="p-3">
                  <span className="font-bold">{e.name}</span>
                  <br />
                  <span className="text-xs text-muted">{e.program}</span>
                </td>
                <td className="p-3">{e.termite}</td>
                <td className="p-3 text-xs leading-relaxed">{e.amount}</td>
                <td className="p-3 text-xs leading-relaxed">{e.term}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="not-prose text-xs text-muted border border-border rounded-md p-4 my-6 leading-relaxed">
        <strong className="text-foreground/80">出典（{CHECKED}確認）：</strong>
        <ul className="list-disc pl-5 mt-1 space-y-0.5">
          {EXAMPLES.flatMap((e) =>
            e.sources.map((s) => (
              <li key={s.url}>
                {e.name}：
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline">
                  {s.label}
                </a>
              </li>
            )),
          )}
        </ul>
        <p className="mt-2 mb-0">
          ※ 制度は年度ごとに変わります。上記は2026年度の内容で、来年度も同じとは限りません。申請前に必ず各自治体へご確認ください。
        </p>
      </div>
      <p>
        注意すべき点は、対象となる自治体でも<strong>「改修工事を伴うもの」「リフォーム工事が伴えば可」</strong>という条件が付いていることです。
        床下の薬剤散布だけの駆除工事は、確認した範囲では補助の対象になっていません。被害を受けた土台・床の補修など、リフォーム工事とあわせて行う場合に、制度の利用をご検討ください。
      </p>

      <h2>お住まいの市区町村の補助制度を調べる方法</h2>
      <ol>
        <li>
          <strong>支援制度の検索サイトで探す</strong>：一般社団法人 住宅リフォーム推進協議会の
          <a href="https://www.j-reform.com/reform-support/" target="_blank" rel="noopener noreferrer">地方公共団体における住宅リフォーム支援制度検索サイト</a>
          で、都道府県・市区町村ごとのリフォーム支援制度を検索できます（最新情報は各自治体に確認するよう案内されています）。
        </li>
        <li>
          <strong>自治体の公式サイトで検索する</strong>：「（市区町村名） 住宅リフォーム 補助」で探し、制度ページの
          <strong>要綱・手引き・対象工事一覧</strong>を開きます。
        </li>
        <li>
          <strong>「シロアリ」「白蟻」「防蟻」で探す</strong>：対象工事一覧（PDF）の中でこの3語を探します。
          <strong>「対象外」の欄に書かれていることもある</strong>ので、どちらの欄かを必ず確認してください。
        </li>
        <li>
          <strong>窓口に電話で確認する</strong>：担当課（住宅・建築・商工など自治体で異なる）に、工事内容と見積もりを伝えて対象かどうかを確認します。
        </li>
      </ol>

      <h2>申請の流れ（一般的な例）</h2>
      <ol>
        <li><strong>制度の確認</strong>：対象工事・補助額・受付期間・定員を確認</li>
        <li><strong>見積もりの取得</strong>：補助の対象になる工事とならない工事を分けた、項目別の見積書を作ってもらう</li>
        <li><strong>交付申請（事前申込）</strong>：工事を始める前に申請書と添付書類（見積書の写し・工事前の写真など）を提出</li>
        <li><strong>交付決定の通知を待つ</strong>：決定前に着工すると対象外になる制度がある</li>
        <li><strong>工事の実施</strong>：確認した3自治体はいずれも、市区町村内の業者による施工が条件</li>
        <li><strong>完了報告・請求</strong>：領収書や工事後の写真などを提出（瀬戸内町は完了後10日以内）</li>
      </ol>
      <p>
        ※ 彦根市のように「事前申込→抽選→工事完了後に交付申請」という流れの自治体もあります。順番は自治体ごとに必ず確認してください。
      </p>
      <p>
        どの業者に頼むか決める前に、補助の条件（確認した3自治体はいずれも市区町村内の業者による施工が条件）を確認しておくと、申請後に対象外と判明する事態を避けることができます。
        見積もりは<Link href="/articles/shiroari-aimitsumori/">複数社の相見積もり</Link>で、項目別の内訳を提示してもらうことをおすすめします。
        料金を公式サイトで公開している業者の例として、シロアリ110番（1㎡1,320円・66㎡以下一律88,000円、税込）の
        <Link href="/reviews/shiroari-110/">料金と口コミの検証</Link>もあわせて参考にしてください。
        ただし、補助を使う場合は依頼先が自治体の条件（市区町村内の業者による施工など）に合うかを別途確認してください。
      </p>

      <h2>申請時の注意点</h2>
      <h3>工事前の申請が前提</h3>
      <p>
        確認した自治体はいずれも、工事の前に申込みが必要です（常陸大宮市・瀬戸内町は交付申請→決定→着工、彦根市は事前申込→抽選→工事→完了後に交付申請）。着工してから気づいても補助は受けられないため、業者と契約する前に制度を確認してください。
      </p>
      <h3>受付期間・定員・予算に上限がある</h3>
      <p>
        彦根市は受付期間（2026年度は4月1日〜7月31日）と抽選、瀬戸内町は定員20件、常陸大宮市は予算がなくなり次第終了です。年度の早い時期に募集が始まり、早めに締め切られることがあります。
      </p>
      <h3>対象工事の範囲を見積書の項目ごとに確認</h3>
      <p>
        「改修工事を伴う場合のみ対象」のように条件がつくことが多いため、見積書の項目ごとに対象かどうかを窓口で確認してください。
      </p>

      <h2>補助金以外で負担を軽くする方法</h2>
      <h3>1. 雑損控除（所得税）</h3>
      <p>
        国税庁の質疑応答事例「
        <a href="https://www.nta.go.jp/law/shitsugi/shotoku/05/01.htm" target="_blank" rel="noopener noreferrer">シロアリの駆除費用</a>
        」では、シロアリによる被害は「害虫その他の生物による異常な災害」にあたり、
        <strong>被害の修繕費用と、そのシロアリを駆除するための費用は雑損控除の対象</strong>とされています。
        一方で、<strong>被害を事前に防ぐための費用や、駆除とあわせて行う予防のための費用は対象外</strong>です。
      </p>
      <p>
        控除額は「（損害金額＋災害等関連支出−保険金等）−総所得金額等×10％」と「（災害関連支出−保険金等）−5万円」のうち多いほうで、
        確定申告の際は支出の領収書を添付または提示します（
        <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1110.htm" target="_blank" rel="noopener noreferrer">国税庁 No.1110 雑損控除</a>
        ）。見積書・領収書は「駆除」と「予防」を分けて書いてもらうと判断しやすくなります。個別の判断は税務署にご確認ください（{CHECKED}確認）。
      </p>
      <h3>2. 火災保険</h3>
      <p>
        シロアリ被害そのものは火災保険の補償対象外が原則です。例外になりうる条件は
        <Link href="/articles/shiroari-kasai-hoken/">シロアリ駆除と火災保険・地震保険</Link>で整理しています。
      </p>

      <h2>47都道府県別 補助制度の確認先</h2>
      <p>
        シロアリ駆除に関わる補助は市区町村単位の制度です。以下は都道府県ごとの確認先の目安です（個別の制度内容は当サイトで確認したものではありません）。お住まいの市区町村に直接お問い合わせください。
      </p>
      <RegionList variant="full" />

      <h2>まとめ：契約の前に「対象工事一覧」を確認</h2>
      <p>
        シロアリ駆除の補助は、市区町村の住宅リフォーム補助の中で扱われることが多く、2026年度の制度でも「改修工事を伴えば対象」と「対象外」に分かれていました。
        <strong>業者と契約する前に</strong>、お住まいの市区町村の対象工事一覧で「シロアリ」「白蟻」「防蟻」の記載を確認し、窓口に問い合わせてください。
        補助の対象にならない場合でも、駆除費用と修繕費用は雑損控除の対象になります。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
