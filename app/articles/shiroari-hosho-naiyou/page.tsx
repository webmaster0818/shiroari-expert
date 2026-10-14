import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "../../components/ArticleLayout";
import { FAQ, FaqJsonLd, FaqItem } from "../../components/FAQ";
import { getArticle } from "../../lib/articles";
import { PROVIDERS } from "../../lib/providers";

// ⚠️ 保証の中身は会社ごとに違う。ここでは providers.ts の**公式表記のまま**並べ、
//    「全社こうです」とまとめない（まとめた瞬間に事実でなくなる）。
const meta = getArticle("shiroari-hosho-naiyou")!;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/articles/shiroari-hosho-naiyou/" },
};

const faqs: FaqItem[] = [
  {
    question: "5年保証があれば再発しても無料ですか？",
    answer:
      "会社によります。再発時の「再施工」までを保証するものと、被害を受けた木材の「修繕」まで含むものがあり、後者は保証の上限額が設定されていることがあります。契約前に、再発したとき何がどこまで無料になるのかを書面で確認してください。",
  },
  {
    question: "保証が無効になるのはどんなときですか？",
    answer:
      "よくあるのは、増改築や床下の改修を行った場合、雨漏り・漏水を放置した場合、年1回の定期点検を受けなかった場合などです。免責事項は保証書に書かれているので、契約前に読ませてもらってください。",
  },
  {
    question: "保証年数が長いほど良い業者ですか？",
    answer:
      "年数だけでは判断できません。長期保証でも範囲が狭ければ実質的な補償は小さく、逆に5年でも再施工＋修繕まで含むなら手厚いといえます。年数・範囲・免責・点検義務の4点をセットで比べてください。",
  },
  {
    question: "床下に入れない場所があると言われました",
    answer:
      "点検口がない、配管で塞がれているなどで進入できない区画は珍しくありません。その区画が保証の対象外になるかどうかは会社によって扱いが違うため、見積もり時に「進入できなかった箇所は保証に含まれるか」を必ず聞いてください。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} updatedAt="2026-09-17">
      <FaqJsonLd items={faqs} />
      <p>
        シロアリ駆除の見積書には、たいてい「5年保証」と書かれています。
        ところが<strong>何を保証するのかは会社ごとに違います</strong>。
        同じ「5年保証」でも、再発したときに無料でやり直してくれるだけのものと、
        食害された木材の修繕費まで見るものがあります。年数だけを見比べても意味がありません。
      </p>

      <h2>保証で確認する4点</h2>
      <ul>
        <li><strong>範囲</strong>：再施工だけか、被害材の修繕まで含むか。修繕を含む場合は上限額があるか</li>
        <li><strong>年数</strong>：何年か。起算日は施工日か、引き渡し日か</li>
        <li><strong>免責</strong>：増改築・漏水の放置・自然災害などで無効になる条件</li>
        <li><strong>義務</strong>：年1回の定期点検を受けることが条件になっていないか</li>
      </ul>
      <p>
        このうち見落とされやすいのが<strong>義務</strong>です。点検を受けなかったために
        保証が切れていた、というのは実際に起こります。点検の案内が来る連絡先（引っ越した場合の更新方法）まで
        確認しておくと確実です。
      </p>

      <h2>各社の公式表記</h2>
      <p>
        当サイトで掲載している業者の保証について、<strong>公式サイトの表記をそのまま</strong>並べます。
        条件は加盟店や施工内容で変わるため、最終的な内容は見積もり時にご自身で確認してください。
      </p>
      <div className="table-wrapper">
        <table className="w-full border-collapse text-sm bg-white">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-3 text-left font-bold">業者</th>
              <th className="px-3 py-3 text-left font-bold">保証（公式表記）</th>
              <th className="px-3 py-3 text-left font-bold whitespace-nowrap">確認日</th>
            </tr>
          </thead>
          <tbody>
            {PROVIDERS.map((p, i) => (
              <tr key={p.slug} className={i % 2 === 0 ? "bg-white" : "bg-muted-bg"}>
                <td className="px-3 py-3 align-top border-t border-border font-bold">{p.name}</td>
                <td className="px-3 py-3 align-top border-t border-border">{p.warranty}</td>
                <td className="px-3 py-3 align-top border-t border-border whitespace-nowrap text-xs">
                  {p.sourceConfirmed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm">
        ⚠️ 「加盟店により異なる」と書かれている会社は、<strong>実際に施工する会社の保証</strong>が適用されます。
        窓口の会社名ではなく、契約書に書かれた施工会社の保証内容を確認してください。
      </p>

      <h2>保証書をもらうまでが契約</h2>
      <p>
        施工が終わったら、保証書を受け取って内容を確認します。口頭で「5年保証です」と言われただけ、
        見積書の隅に一行書かれているだけ、という状態は避けてください。
        再発時に効くのは書面です。
      </p>
      <p>
        費用そのものの考え方は<Link href="/articles/shiroari-kuchu-hiyou/">駆除費用の相場</Link>、
        業者の比べ方は<Link href="/articles/shiroari-gyousha-erabikata/">業者の選び方</Link>にまとめています。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
