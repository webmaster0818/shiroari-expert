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
      "会社により異なります。再発時の「再施工」までを保証するものと、被害を受けた木材の「修繕」まで含むものがあり、後者は保証の上限額が設定されていることがあります。契約前に、再発時に何がどこまで無料となるのかを書面でご確認ください。",
  },
  {
    question: "保証が無効になるのはどのような場合ですか？",
    answer:
      "代表的な例は、増改築や床下の改修を行った場合、雨漏り・漏水を放置した場合、年1回の定期点検を受けなかった場合などです。免責事項は保証書に記載されているため、契約前に内容をご確認ください。",
  },
  {
    question: "保証年数が長いほど良い業者といえますか？",
    answer:
      "年数だけでは判断できません。長期の保証でも範囲が狭ければ実質的な補償は小さく、反対に5年でも再施工と修繕まで含む場合は手厚い保証といえます。年数・範囲・免責・点検義務の4点をあわせて比較してください。",
  },
  {
    question: "床下に入れない場所があると言われた場合はどうすればよいですか？",
    answer:
      "点検口がない、配管で塞がれているなどの理由で進入できない区画は珍しくありません。その区画が保証の対象外となるかどうかは会社によって扱いが異なるため、見積もり時に「進入できなかった箇所は保証に含まれるか」をご確認ください。",
  },
];

export default function Page() {
  return (
    <ArticleLayout meta={meta} updatedAt="2026-09-17">
      <FaqJsonLd items={faqs} />
      <p>
        シロアリ駆除の見積書には、多くの場合「5年保証」と記載されています。
        ただし、<strong>保証の内容は会社ごとに異なります</strong>。
        同じ「5年保証」でも、再発時に無料で再施工するのみのものと、
        食害を受けた木材の修繕費まで含むものがあります。そのため、年数だけで比較することはおすすめできません。
      </p>

      <h2>保証で確認すべき4つの項目</h2>
      <ul>
        <li><strong>範囲</strong>：再施工だけか、被害材の修繕まで含むか。修繕を含む場合は上限額があるか</li>
        <li><strong>年数</strong>：何年か。起算日は施工日か、引き渡し日か</li>
        <li><strong>免責</strong>：増改築・漏水の放置・自然災害などで無効になる条件</li>
        <li><strong>義務</strong>：年1回の定期点検を受けることが条件になっていないか</li>
      </ul>
      <p>
        このうち見落とされやすいのが<strong>義務</strong>です。定期点検を受けなかったために
        保証が失効していた、という事例もあります。点検の案内が届く連絡先（転居した場合の変更方法）まで
        確認しておくことをおすすめします。
      </p>

      <h2>各社の公式表記</h2>
      <p>
        当サイトで掲載している業者の保証について、<strong>公式サイトの表記をそのまま</strong>掲載しています。
        条件は加盟店や施工内容によって異なるため、最終的な内容は見積もり時にご確認ください。
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
        ※「加盟店により異なる」と記載されている会社は、<strong>実際に施工する会社の保証</strong>が適用されます。
        窓口の会社名ではなく、契約書に記載された施工会社の保証内容をご確認ください。
      </p>

      <h2>保証書の受け取りまで確認してください</h2>
      <p>
        施工が完了したら、保証書を受け取り、内容を確認します。口頭で「5年保証です」と説明されただけの状態や、
        見積書に一行記載されているだけの状態は避けてください。
        再発時の根拠となるのは書面です。
      </p>
      <p>
        費用そのものの考え方は<Link href="/articles/shiroari-kuchu-hiyou/">駆除費用の相場</Link>、
        業者の比べ方は<Link href="/articles/shiroari-gyousha-erabikata/">業者の選び方</Link>にまとめています。
      </p>

      <FAQ items={faqs} />
    </ArticleLayout>
  );
}
