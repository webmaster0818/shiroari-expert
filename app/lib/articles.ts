export type ArticleMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "費用" | "症状" | "識別" | "対策" | "法律" | "補助金" | "比較" | "保険" | "予防" | "インスペクション";
};

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "shiroari-kuchu-hiyou",
    shortTitle: "駆除費用と5年TCO",
    title: "シロアリ駆除費用の相場｜バリア工法 vs ベイト工法 5年TCO比較",
    description:
      "シロアリ駆除の費用は工法と床面積で大きく変わります。バリア工法は1坪あたり7,000円〜10,000円が中央値、ベイト工法は年間契約型。5年間の総コスト（TCO）で比較し、自宅構造に合った工法を選ぶための判断基準を整理しました。",
    category: "費用",
  },
  {
    slug: "shiroari-gyousha-erabikata",
    shortTitle: "業者の選び方",
    title: "シロアリ駆除業者の選び方｜公益社団法人加盟と保証で見極める",
    description:
      "シロアリ駆除業者は公益社団法人日本しろあり対策協会の加盟有無、5年保証の内容、施工方式（バリア/ベイト）で選びます。実在業者を編集部基準で比較し、悪質業者を回避するポイントまで網羅しました。",
    category: "比較",
  },
  {
    slug: "shiroari-jibun-de",
    shortTitle: "自分で駆除",
    title: "シロアリを自分で駆除する方法｜DIYの可能範囲と限界",
    description:
      "羽アリの飛来程度ならホームセンターの薬剤で対応可能ですが、床下や柱への加害が始まった本格被害は専門業者の領域です。市販薬剤の使い方、注意点、業者依頼が必要なライン引きを実例で整理しました。",
    category: "対策",
  },
  {
    slug: "hane-ari-mikiwake",
    shortTitle: "羽アリ見分け方",
    title: "羽アリの見分け方｜ヤマトシロアリ・イエシロアリ・アメリカカンザイ",
    description:
      "羽アリはシロアリかクロアリかで対応が180度変わります。触角の形・くびれ・羽の大きさで判別し、ヤマトシロアリ・イエシロアリ・アメリカカンザイシロアリの群飛時期も整理しました。",
    category: "識別",
  },
  {
    slug: "shiroari-higai-shoujou",
    shortTitle: "被害症状",
    title: "シロアリ被害の症状｜床下・柱・畳で起こるサイン",
    description:
      "シロアリ被害は床のきしみ、柱の中空音、畳の沈み、蟻道（ぎどう）の発見などで初期検知できます。築年数別の被害進行パターンと、自宅でできるセルフチェック手順をまとめました。",
    category: "症状",
  },
  {
    slug: "shiroari-yobou",
    shortTitle: "予防対策",
    title: "シロアリ予防対策｜新築・築古別の防蟻処理サイクル",
    description:
      "シロアリ予防の基本は5年ごとの防蟻処理です。新築時の住宅瑕疵担保責任との関係、築古住宅での予防タイミング、湿気対策や換気の改善で効果を高める方法を解説します。",
    category: "予防",
  },
  {
    slug: "shiroari-kasai-hoken",
    shortTitle: "火災保険・地震保険",
    title: "シロアリ駆除と火災保険・地震保険｜適用される条件は？",
    description:
      "シロアリ被害そのものは火災保険の補償対象外が原則です。ただし水漏れ事故が起因となった被害や、地震保険の家財損害として認められる例外条件もあります。約款の読み方と確認ポイントを整理しました。",
    category: "保険",
  },
  {
    slug: "chuuko-juutaku-inspection",
    shortTitle: "中古住宅と床下点検",
    title: "中古住宅購入時のシロアリインスペクション｜実施タイミング",
    description:
      "中古住宅の購入前にはホームインスペクション（住宅診断）と合わせてシロアリ床下点検を実施するのが安全です。費用相場・実施タイミング・既存住宅瑕疵保険との関係を整理しました。",
    category: "インスペクション",
  },
  {
    slug: "shiroari-yukashita-tenken",
    shortTitle: "床下点検費用",
    title: "シロアリ床下点検の費用相場｜無料点検の注意点",
    description:
      "床下点検は無料を打ち出す業者が多いですが、契約義務の有無や追加調査の費用が異なります。点検時に確認すべき項目、悪質な押し売りの見抜き方、有料点検との違いを整理しました。",
    category: "費用",
  },
  {
    slug: "shiroari-hojo-kin-zenkoku",
    shortTitle: "47都道府県補助金",
    title: "シロアリ駆除の補助金一覧｜47都道府県の助成制度",
    description:
      "シロアリ駆除・予防への助成は市区町村単位で運用されている事例があります。リフォーム補助の一部としての適用、住宅耐震改修との連動など、47都道府県別に確認すべき窓口を整理しました。",
    category: "補助金",
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
