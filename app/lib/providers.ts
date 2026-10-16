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
  affiliateUrl?: string;
  affiliateBanner?: string;
  // サイト内の口コミ・評判ページ。比較表・ランキングから張る（2026-10-14 /reviews/shiroari-110/ がどこからも張られていなかった）
  reviewPath?: string;
};

export const PROVIDERS: Provider[] = [
  {
    slug: "shiroari-110",
    name: "シロアリ110番",
    url: "https://www.sharing-tech.co.jp/shiroari/",
    operator: "シェアリングテクノロジー株式会社（東証上場）",
    tagline: "全国対応・日本しろあり対策協会の標準仕様書に沿った施工（公式記載）",
    features: [
      "全国47都道府県の加盟店ネットワーク（公式記載）",
      "1㎡あたり1,320円（税込）・66㎡以下は一律88,000円（税込）の料金を公式サイトで公開",
      "現地調査・見積もりは原則無料、正式見積もり後の追加料金なし（公式記載）",
    ],
    areas: "全国47都道府県（地域により対応加盟店が異なる）",
    fee: "公式で1㎡あたり1,320円（税込）、66㎡以下は一律88,000円（税込）と明記。障害物の移動・ハツリ・柱の補強は別料金",
    warranty: "5年間保証（加盟店による保証・期間や内容は加盟店で異なる場合あり）",
    phone: "0120-949-952（24時間365日・通話無料）",
    highlight: "全国に対応しており、電話で見積もりを依頼できます",
    recommendedFor: "地方にお住まいで、地元業者の選択肢が少ない方",
    sourceConfirmed: "2026年10月14日",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=R96405.1.A141101G.R138225Y",
    affiliateBanner: "https://t.felmat.net/fmimg/R96405.A141101G.R138225Y",
    reviewPath: "/reviews/shiroari-110/",
  },
  {
    slug: "asante",
    name: "アサンテ",
    url: "https://www.asante.co.jp/",
    operator: "株式会社アサンテ（東証プライム上場）",
    tagline: "東証プライム上場・シロアリ対策シェアNo.1を掲げる大手（公式記載）",
    features: [
      "東北〜九州の28都府県・77拠点（北海道・沖縄は拠点なし／公式記載）",
      "5年保証を設けた防蟻処理のサイクルを公式サイトで案内",
    ],
    areas: "東北〜九州の28都府県・77拠点（北海道・沖縄は拠点なし）／公式記載",
    fee: "公式問い合わせ（被害規模と床面積で見積もり）",
    warranty: "5年保証（防蟻処理に関する公式記載あり）",
    phone: "0120-557-419（受付 8:30〜19:30・公式記載）",
    highlight: "上場企業としての運営体制とシロアリ防除の実績があります",
    recommendedFor: "上場企業による運営と長期的な管理契約を重視する方",
    sourceConfirmed: "2026年10月16日",
  },
  {
    slug: "house-protect",
    name: "ハウスプロテクト",
    url: "https://house-protect.net/",
    operator: "株式会社GROWTH",
    tagline: "害獣駆除が中心の業者・シロアリは施工事例に掲載（公式サイト）",
    features: [
      "全社クチコミ5,492件の平均4.7点（2024年6月時点・同社調べ／公式記載）",
      "現地調査・見積もりは無料、追加料金は原則なしと公式サイトに明記",
    ],
    areas: "関東・関西・東海・中四国・九州（一部都道府県）／公式で要確認",
    fee: "現地調査・見積もりは無料、追加料金は原則なしと公式サイトに明記",
    warranty: "業界最長クラスの保証期間（築年数・施工内容で変動）",
    phone: "0120-987-282（24時間受付）",
    highlight: "公式サイトは害獣駆除が中心で、シロアリは施工事例（ネズミ・シロアリ対策など）に掲載されています。シロアリ専用の料金ページは設けられていません",
    recommendedFor: "ネズミなどの害獣とシロアリをあわせて相談したい方",
    sourceConfirmed: "2026年10月16日",
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
      "シロアリ110番と同じ運営会社で、あわせて相談が可能",
    ],
    areas: "全国47都道府県",
    fee: "見積もり無料／加盟店により価格は異なる",
    warranty: "加盟店により異なる",
    phone: "0120-949-085 ／ 0120-949-405",
    highlight: "シロアリ以外の害虫・害獣もあわせて相談できます",
    recommendedFor: "シロアリと他の害獣（ネズミなど）を同時に相談したい方",
    sourceConfirmed: "2026年5月28日",
  },
  {
    slug: "curama",
    name: "くらしのマーケット",
    url: "https://curama.jp/",
    operator: "みんなのマーケット株式会社",
    tagline: "口コミ評価で個人事業者を比較できるマッチングプラットフォーム",
    features: [
      "全国のシロアリ駆除事業者を口コミ・写真で比較できる",
      "ハウスクリーニングなど多数のカテゴリを扱う大手マッチングサービス",
      "料金が事前に掲載されている（事業者ごとに異なる）",
    ],
    areas: "全国（出店事業者の対応地域に依存）",
    fee: "事業者により異なる（事前掲載・要見積もり）",
    warranty: "事業者により異なる（プラン詳細で要確認）",
    phone: "公式サイトから事業者へ個別連絡",
    highlight: "口コミの件数が多く、料金が事前に掲載されています",
    recommendedFor: "口コミや写真を比較して選びたい方",
    sourceConfirmed: "2026年5月28日",
  },
  {
    slug: "meetsmore",
    name: "ミツモア",
    url: "https://meetsmore.com/services/termite-control",
    operator: "株式会社ミツモア",
    tagline: "最大5社の見積もりを一括取得できる相見積もり型",
    features: [
      "1分程度の質問入力で最大5社から見積もりを取得（公式記載）",
      "全国47都道府県の事業者が登録",
      "シロアリ駆除のカテゴリを設けている",
    ],
    areas: "全国47都道府県",
    fee: "事業者ごとに異なる（公式で相場帯を提示）",
    warranty: "事業者ごとに異なる（個別プランで要確認）",
    phone: "公式サイトから事業者へ個別連絡",
    highlight: "一括見積もりにより相場を把握しやすくなります",
    recommendedFor: "複数社の料金を効率よく比較したい方",
    sourceConfirmed: "2026年5月28日",
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
