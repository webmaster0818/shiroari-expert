import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";

const meta = getArticle("shiroari-houmon-hanbai")!;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/articles/shiroari-houmon-hanbai/" },
};

const KOKUSEN_2018 = "https://www.kokusen.go.jp/news/data/n-20180301_1.html";
const KOKUSEN_2018_PDF = "https://www.kokusen.go.jp/pdf/n-20180301_1.pdf";
const KOKUSEN_TENKEN = "https://www.kokusen.go.jp/soudan_topics/data/reformtenken.html";
const KOKUSEN_COOLINGOFF = "https://www.kokusen.go.jp/soudan_now/data/coolingoff.html";
const CAA_HOUMON = "https://www.no-trouble.caa.go.jp/what/doortodoorsales/";

const faqs: FaqItem[] = [
  {
    question: "工事がすでに終わっていても、クーリング・オフはできますか？",
    answer:
      "訪問販売に該当する契約であれば、契約書面を受け取った日から8日以内はクーリング・オフができます。国民生活センターは、クーリング・オフを行った場合は既に工事が終わっていても代金を支払う必要はなく、工事をした部分を元に戻すことを望む場合は事業者に無償で求められると説明しています。",
  },
  {
    question: "8日を過ぎてしまった場合は、もう解約できませんか？",
    answer:
      "契約書面の記載に不備がある場合や、事業者が「クーリング・オフできない」と事実と違うことを告げたり、威迫したりしてクーリング・オフを妨げた場合は、期間を過ぎていてもクーリング・オフができる場合があります。ご自身で判断せず、消費者ホットライン（局番なしの188）から最寄りの消費生活センターにご相談ください。",
  },
  {
    question: "シロアリ駆除と一緒に床下換気扇や調湿材を勧められました。必要ですか？",
    answer:
      "公益社団法人日本しろあり対策協会は、床下換気扇や床下調湿材は床下の環境を改善するもので、シロアリ防除効果とは関係ないと回答しています。床下環境の改善が必要かどうかは別の問題として、建築会社などにご相談ください。",
  },
  {
    question: "電話で勧誘され、当日に業者が来ることになりました。断ってもよいですか？",
    answer:
      "日本しろあり対策協会は、同様の相談に対して当日断って差し支えないと回答しており、トラブルになりそうな場合はその場で最寄りの消費生活センターに電話するよう案内しています。なお、電話勧誘販売も特定商取引法のクーリング・オフ（8日間）の対象です。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} publishedAt="2026-10-17" updatedAt="2026-10-17">
      <FaqJsonLd items={faqs} />
      <p>
        「無料で床下を点検します」と訪問した業者から被害を指摘され、その場で高額な契約をしてしまう相談は、
        国民生活センターが「点検商法」として繰り返し注意を呼びかけている典型的な消費者トラブルです。
        訪問販売で契約した場合は、契約書面を受け取った日から<strong>8日以内であればクーリング・オフ</strong>ができます。
        本記事では、国民生活センター・消費者庁・日本しろあり対策協会の公表情報にもとづき、手口と対処の手順をご説明します。
      </p>

      <h2>点検商法の相談件数（国民生活センター公表）</h2>
      <p>
        国民生活センターは、点検に来たと言って来訪し「工事をしないと危険」などと言って契約させる手口を「点検商法」と呼び、
        全国の消費生活センター等に寄せられた相談件数を公表しています。
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>年度</th><th>2023</th><th>2024</th><th>2025</th></tr>
          </thead>
          <tbody>
            <tr><td>点検商法の相談件数</td><td>12,550件</td><td>19,249件</td><td>19,696件</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm">
        出典：独立行政法人国民生活センター
        <a href={KOKUSEN_TENKEN} target="_blank" rel="noopener noreferrer">
          「訪問販売によるリフォーム工事・点検商法」
        </a>
        （PIO-NETに登録された相談件数。2026年5月31日現在・消費生活センター等からの経由相談を含まない。2026年10月17日確認）
      </p>
      <p>
        この件数は屋根・分電盤・給湯器などを含む点検商法全体の数値で、シロアリ駆除に限った件数ではありません。
        シロアリ駆除については、同センターが2018年3月1日に公表した報告書で、住宅に関する点検商法の商品別平均契約購入額として
        <strong>白蟻駆除サービスは518,030円</strong>（床下換気扇は504,037円）と示されています。
        これは2007年度〜2017年度にPIO-NETへ登録された相談（2018年2月8日登録分まで）をもとにした数値で、現在の相場を示すものではありません。
      </p>
      <p className="text-sm">
        出典：国民生活センター
        <a href={KOKUSEN_2018} target="_blank" rel="noopener noreferrer">
          「『大雪で歪んだ』などと自宅の不具合を指摘して不安をあおる『点検商法』」
        </a>
        （<a href={KOKUSEN_2018_PDF} target="_blank" rel="noopener noreferrer">報告書PDF</a>・2018年3月1日公表、2026年10月17日確認）
      </p>

      <h2>報告されている手口</h2>
      <p>
        国民生活センターの報告書には、床下の点検をきっかけにした次のような相談事例が掲載されています（相談者の申し出をもとにした事例です）。
      </p>
      <ul>
        <li>
          約3,000円の床下消毒を契約したところ、業者が床下の写真をモニターに映して害虫の死骸を見せ、
          白アリ予防の消毒も勧められた。「30万円だが、今すぐ契約すれば26万円にする」と言われて契約したが、
          映像が本当に自宅の床下だったのか疑問に思った（2017年8月受付）
        </li>
        <li>
          「無料点検するので床下を見せてほしい」という訪問をきっかけに、木部補強・防虫防蟻処理などで約15万円の契約をした。
          工事当日に床下全面への調湿剤を勧められて約85万円の契約を追加し、その後も工事が続いて総額約175万円になった（2017年8月受付）
        </li>
      </ul>
      <p>
        同報告書に掲載された専門家の見解では、シロアリ駆除について、害虫の死骸や写真を見せて説明するものの
        <strong>当該建物とは関係のない写真であるケースが多い</strong>こと、その後に床下の調湿材の工事を売り込むパターンがあることが指摘されています。
        一般の方が床下に入って確認することが難しい点につけ込んだ手口です。
      </p>

      <h2>シロアリ防除と関係のない工事を勧められた場合</h2>
      <p>
        公益社団法人日本しろあり対策協会は、シロアリ駆除と同時に勧められることの多い工事について、次のように回答しています。
      </p>
      <ul>
        <li>
          備長炭などの床下調湿材：シロアリ防除効果とは関係なく、敷かなくても効果はある（
          <a href="https://www.hakutaikyo.or.jp/faq/2695.html" target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）
        </li>
        <li>
          床下換気扇・調湿シート：床下の環境を改善するもので、シロアリ防除効果とは関係ない（
          <a href="https://www.hakutaikyo.or.jp/faq/2696.html" target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）
        </li>
        <li>
          防カビ工事：シロアリ工事の効果に関しては必要なく、別の目的の工事である（
          <a href="https://www.hakutaikyo.or.jp/faq/2702.html" target="_blank" rel="noopener noreferrer">協会Q&amp;A</a>）
        </li>
      </ul>
      <p>
        これらの工事が不要と断定するものではありませんが、シロアリ対策とは目的が異なります。見積書で別項目として扱われているかをご確認ください。
        （公益社団法人日本しろあり対策協会「よくある質問」2026年10月17日確認）
      </p>

      <h2>特定商取引法で禁止されている行為</h2>
      <p>
        訪問販売には特定商取引法の規制がかかります。消費者庁の特定商取引法ガイドと国民生活センターの報告書では、次の点が示されています。
      </p>
      <ul>
        <li>
          事業者は勧誘に先立ち、事業者名・契約の勧誘が目的であること・商品や役務の種類を告げなければなりません（法第3条）。
          勧誘目的を告げずに「点検に来た」などと言って点検を行い、その後に工事を勧誘する場合は同条違反となります。
        </li>
        <li>
          勧誘の際に事実と違うことを告げる、威迫して困惑させるといった行為は禁止されています（法第6条）。
          自治体の関係者であるかのように告げられ、事実と誤認して契約した場合は、契約を取り消すことができます。
        </li>
        <li>
          事業者は法律で定められた書面を交付しなければなりません（法第4条）。工事内容を記載せず「床下工事一式」とのみ記載することは同条違反となります。
        </li>
      </ul>
      <p className="text-sm">
        出典：消費者庁
        <a href={CAA_HOUMON} target="_blank" rel="noopener noreferrer">
          特定商取引法ガイド「訪問販売」
        </a>
        、国民生活センター 2018年3月1日公表資料（いずれも2026年10月17日確認）
      </p>

      <h2>訪問を受けたときの対処</h2>
      <ol>
        <li>
          <strong>点検をさせない</strong>：国民生活センターは、点検と称して訪問してくる業者には、たとえ無料でも簡単に応対しないよう呼びかけています。
        </li>
        <li>
          <strong>写真や映像を確認する</strong>：点検をさせた場合でも、見せられた写真が自宅のものかを落ち着いて確認してください。写真の日付や映像の保存日の確認も一つの方法です。
        </li>
        <li>
          <strong>その場で契約しない</strong>：「今日中なら安くなる」などと契約をせかす業者とは契約しないこと、複数の業者から見積もりを取ることが推奨されています。
        </li>
        <li>
          <strong>契約書面を受け取り、内容を確認する</strong>：どの作業にいくらかかるのかを把握し、「一式」のようなあいまいな記載であれば明確にするよう求めてください。
        </li>
      </ol>
      <p>
        見積もりを比べる手順は<Link href="/articles/shiroari-aimitsumori/">相見積もりの取り方</Link>、
        無料点検を受ける場合の注意点は<Link href="/articles/shiroari-yukashita-tenken/">床下点検の費用相場と無料点検の注意点</Link>にまとめています。
      </p>

      <h2>クーリング・オフの手順</h2>
      <p>
        特定商取引法では、訪問販売と電話勧誘販売で契約した場合、<strong>8日間</strong>のクーリング・オフが認められています。
        国民生活センターと消費者庁の説明にもとづき、要点を整理しました。
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>項目</th><th>内容</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>期間</td>
              <td>申込書面または契約書面のいずれか早いほうを受け取った日から数えて8日以内</td>
            </tr>
            <tr>
              <td>方法</td>
              <td>書面（はがき可）または電磁的記録（電子メール、事業者のウェブサイトの専用フォーム、FAXなど。2022年6月1日から可能）</td>
            </tr>
            <tr>
              <td>記載事項</td>
              <td>契約年月日、契約者名、商品・役務名、契約金額など契約を特定する情報と、通知を発した日</td>
            </tr>
            <tr>
              <td>送り方</td>
              <td>はがきは両面をコピーし、特定記録郵便や簡易書留など発信の記録が残る方法で送付。電子メールは送信したメール、専用フォームは画面のスクリーンショットを保存</td>
            </tr>
            <tr>
              <td>クレジット契約</td>
              <td>販売会社とクレジット会社に同時に通知</td>
            </tr>
            <tr>
              <td>期間を過ぎた場合</td>
              <td>書面の記載に不備がある場合や、事業者の虚偽の説明・威迫によってクーリング・オフできなかった場合は、期間経過後も可能な場合があります</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        国民生活センターは、クーリング・オフを行った場合は工事が終わっていても代金を支払う必要がないこと、
        送付の記録や関係書類は少なくとも5年間保管することを案内しています。
      </p>
      <p className="text-sm">
        出典：国民生活センター
        <a href={KOKUSEN_COOLINGOFF} target="_blank" rel="noopener noreferrer">
          「クーリング・オフ」
        </a>
        、消費者庁
        <a href={CAA_HOUMON} target="_blank" rel="noopener noreferrer">
          特定商取引法ガイド「訪問販売」
        </a>
        （いずれも2026年10月17日確認）
      </p>

      <h2>相談先</h2>
      <ul>
        <li>
          <strong>消費者ホットライン「188」</strong>：局番なしの188で、お住まいの地域の消費生活センター等につながります。クーリング・オフができる取引か分からない場合も相談できます。
        </li>
        <li>
          <strong>住まいるダイヤル</strong>：国土交通大臣から指定を受けた公益財団法人住宅リフォーム・紛争処理支援センターの住宅専門の相談窓口です（
          <a href="https://www.chord.or.jp/" target="_blank" rel="noopener noreferrer">公式サイト</a>）。
        </li>
      </ul>
      <p>
        業者を自分で選んで依頼する場合の比較の観点は<Link href="/articles/shiroari-gyousha-erabikata/">業者の選び方</Link>、
        保証の読み方は<Link href="/articles/shiroari-hosho-naiyou/">「5年保証」は何を保証するのか</Link>をご覧ください。
        お住まいの地域の対象種や群飛時期は<Link href="/area/">エリア別ページ</Link>でご確認いただけます。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
