// 実在業者の公式情報（2026-05-28 時点で公式サイトを確認済み）
// 価格目安は公式記載がない場合「公式問い合わせ」と明記し、推測を含めないこと。

export type Provider = {
  slug: string;
  name: string;
  url: string;
  operator: string;
  tagline: string;
  features: string[];
  areas: string;
  fee: string;
  warranty: string;
  phone: string;
  highlight: string;
  recommendedFor: string;
  sourceConfirmed: string;
};

export const PROVIDERS: Provider[] = [
  {
    slug: "shiroari-110",
    name: "シロアリ110番",
    url: "https://www.sharing-tech.co.jp/shiroari/",
    operator: "シェアリングテクノロジー株式会社（東証上場）",
    tagline: "全国対応・公益社団法人日本しろあり対策協会の加盟業者と連携",
    features: [
      "全国47都道府県の加盟店ネットワーク（公式記載）",
      "1坪あたり1,320円（税込）からの明朗価格表示",
      "5年保証・年1回の無料点検（公式記載）",
    ],
    areas: "全国47都道府県（地域により対応加盟店が異なる）",
    fee: "公式で1坪1,320円（税込）からと明記。被害状況・床面積で変動",
    warranty: "5年保証・年1回の無料点検（加盟店により条件あり）",
    phone: "0120-588-220（24時間365日）",
    highlight: "全国対応で電話一本で見積もり依頼が可能",
    recommendedFor: "地方在住で地元業者の選択肢が少ない人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "asante",
    name: "アサンテ",
    url: "https://www.asante-net.com/",
    operator: "株式会社アサンテ（東証プライム上場）",
    tagline: "東証プライム上場・シロアリ防除専業の最大手",
    features: [
      "シロアリ防除専業として全国に施工拠点を展開",
      "公益社団法人日本しろあり対策協会の正会員",
      "5年保証付きの防蟻処理サイクルを公式で提示",
    ],
    areas: "全国（公式の営業所一覧で要確認）",
    fee: "公式問い合わせ（被害規模と床面積で見積もり）",
    warranty: "5年保証（防蟻処理に関する公式記載あり）",
    phone: "公式サイトから資料請求・見積もり依頼",
    highlight: "上場企業の安定運営と防除専業の知見",
    recommendedFor: "上場企業の信頼性と長期サイクル契約を重視する人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "house-protect",
    name: "ハウスプロテクト",
    url: "https://house-protect.net/",
    operator: "株式会社GROWTH",
    tagline: "Google口コミ4.7点・リフォーム会社母体の総合シロアリ対策",
    features: [
      "Google口コミ評価4.7点・5,000件以上（公式記載）",
      "リフォーム会社母体で床下リフォームも含めた対応",
      "現地調査・見積もり無料／追加料金原則なしを明記",
    ],
    areas: "関東・関西・東海・中四国・九州（一部都道府県）／公式で要確認",
    fee: "現地調査・見積もり無料／追加料金原則なしを明記",
    warranty: "業界最長クラスの保証期間（築年数・施工内容で変動）",
    phone: "0120-987-282（24時間受付）",
    highlight: "施工品質と長期保証で総合力が高い",
    recommendedFor: "シロアリと同時に床下リフォームも検討したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "gaiju-110",
    name: "害獣駆除110番",
    url: "https://www.sharing-tech.co.jp/gaiju/",
    operator: "シェアリングテクノロジー株式会社",
    tagline: "全国47都道府県・24時間365日対応のマッチング型",
    features: [
      "全国47都道府県の加盟店ネットワーク（公式記載）",
      "24時間365日・年中無休受付",
      "シロアリ110番との連携でワンストップ相談可能",
    ],
    areas: "全国47都道府県",
    fee: "見積もり無料／加盟店により価格は異なる",
    warranty: "「保証あり/なし」で加盟店を絞り込み可（加盟店により異なる）",
    phone: "0120-949-085 ／ 0120-949-405",
    highlight: "シロアリ以外の害虫害獣も併発時に便利",
    recommendedFor: "シロアリと他害獣（ネズミ等）を同時に相談したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "curama",
    name: "くらしのマーケット",
    url: "https://curama.jp/",
    operator: "株式会社みんなのマーケット",
    tagline: "口コミ評価で個人事業者を比較できるマッチングプラットフォーム",
    features: [
      "全国のシロアリ駆除事業者を口コミ・写真で比較可能",
      "ハウスクリーニング等と並ぶ大手マッチング",
      "料金が事前掲載で明朗（事業者ごとに異なる）",
    ],
    areas: "全国（出店事業者の対応地域に依存）",
    fee: "事業者により異なる（事前掲載／要事前見積もり）",
    warranty: "事業者により異なる（プラン詳細で要確認）",
    phone: "公式サイトから事業者へ個別連絡",
    highlight: "口コミ件数の多さと料金の明朗さ",
    recommendedFor: "口コミ・写真をじっくり比較したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
  {
    slug: "meetsmore",
    name: "ミツモア",
    url: "https://meetsmore.com/services/termite-control",
    operator: "ミツモア株式会社",
    tagline: "最大5社の見積もりを一括取得できる相見積もり型",
    features: [
      "1分の質問入力で最大5社から見積もり取得（公式記載）",
      "全国47都道府県の事業者が登録",
      "シロアリ駆除カテゴリを公式に提供",
    ],
    areas: "全国47都道府県",
    fee: "事業者ごとに異なる（公式で相場帯を提示）",
    warranty: "事業者ごとに異なる（個別プランで要確認）",
    phone: "公式サイトから事業者へ個別連絡",
    highlight: "一括見積もりで相場感を素早く把握できる",
    recommendedFor: "複数社の料金を効率よく比較したい人",
    sourceConfirmed: "2026-05-28 公式サイト確認",
  },
];

// TOPに掲載するランキング上位3社（保証・専門性・実績で選定）
export const TOP_PROVIDERS: string[] = ["shiroari-110", "asante", "house-protect"];

export function getProvider(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}

export function getTopProviders(): Provider[] {
  return TOP_PROVIDERS.map((slug) => getProvider(slug)).filter(
    (p): p is Provider => p !== undefined,
  );
}
