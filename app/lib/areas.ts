// 都道府県別ページのデータ。
//
// ■ 事実の出所（すべて公益社団法人 日本しろあり対策協会のQ&A・2026-09-17に確認）
//   分布 https://www.hakutaikyo.or.jp/faq/1813.html
//     ヤマトシロアリ …「北海道北部を除く日本全土」
//     イエシロアリ  …「神奈川県以西の海岸線に沿った温暖な地域と千葉県の一部、
//                     それに南西諸島、小笠原諸島に分布」
//     ダイコクシロアリ…「奄美大島以南に分布」
//   群飛 https://www.hakutaikyo.or.jp/faq/2278.html
//     ヤマトシロアリ … 4〜5月の昼間（ただし沖縄2月、東北・北海道6月頃）
//     イエシロアリ  … 6〜7月の夜。電灯に飛来する
//     アメリカカンザイシロアリ … 6〜9月の昼間に何度も群飛
//
// ⚠️ ie の判定について
//   協会の記載は「海岸線に沿った温暖な地域」という条件で、県境で切れるものではない。
//   そこで、内陸で条件に当たらない県は "none"、沿岸で該当する県は "yes"、
//   **県内で分かれる・判断できない県は "check"** とし、断定しない。
//   ⚠️ "check" を "yes" に寄せて書かないこと（居ない地域に不安を煽ることになる）。
export type IeStatus = "yes" | "check" | "none";

export type Area = {
  slug: string;
  pref: string;
  region: string;
  /** イエシロアリの分布に当たるか */
  ie: IeStatus;
  /** ヤマトシロアリの群飛時期（協会の記載に沿って地域差を反映） */
  yamatoSwarm: string;
  /** ダイコクシロアリ（奄美大島以南）の対象か */
  daikoku?: boolean;
  /** 県内の主要都市。ページ内の説明に使う（実在の市名のみ） */
  cities: string[];
  /** イエシロアリ判定の根拠を読者に説明する一文 */
  ieNote: string;
};

const SPRING = "4〜5月の昼間";
const EARLY_SUMMER = "6月ごろの昼間";
const OKINAWA = "2月ごろの昼間";

export const AREAS: Area[] = [
  { slug: "hokkaido", pref: "北海道", region: "北海道", ie: "none", yamatoSwarm: EARLY_SUMMER, cities: ["札幌市", "旭川市", "函館市"], ieNote: "北海道はイエシロアリの分布域ではありません。またヤマトシロアリも「北海道北部を除く」とされており、道内でも地域差があります。" },
  { slug: "aomori", pref: "青森県", region: "東北", ie: "none", yamatoSwarm: EARLY_SUMMER, cities: ["青森市", "八戸市", "弘前市"], ieNote: "東北はイエシロアリの分布域に含まれません。対象はヤマトシロアリです。" },
  { slug: "iwate", pref: "岩手県", region: "東北", ie: "none", yamatoSwarm: EARLY_SUMMER, cities: ["盛岡市", "一関市", "奥州市"], ieNote: "東北はイエシロアリの分布域に含まれません。対象はヤマトシロアリです。" },
  { slug: "miyagi", pref: "宮城県", region: "東北", ie: "none", yamatoSwarm: EARLY_SUMMER, cities: ["仙台市", "石巻市", "大崎市"], ieNote: "東北はイエシロアリの分布域に含まれません。対象はヤマトシロアリです。" },
  { slug: "akita", pref: "秋田県", region: "東北", ie: "none", yamatoSwarm: EARLY_SUMMER, cities: ["秋田市", "横手市", "大仙市"], ieNote: "東北はイエシロアリの分布域に含まれません。対象はヤマトシロアリです。" },
  { slug: "yamagata", pref: "山形県", region: "東北", ie: "none", yamatoSwarm: EARLY_SUMMER, cities: ["山形市", "鶴岡市", "酒田市"], ieNote: "東北はイエシロアリの分布域に含まれません。対象はヤマトシロアリです。" },
  { slug: "fukushima", pref: "福島県", region: "東北", ie: "none", yamatoSwarm: EARLY_SUMMER, cities: ["福島市", "郡山市", "いわき市"], ieNote: "東北はイエシロアリの分布域に含まれません。対象はヤマトシロアリです。" },

  { slug: "ibaraki", pref: "茨城県", region: "関東", ie: "none", yamatoSwarm: SPRING, cities: ["水戸市", "つくば市", "日立市"], ieNote: "協会が示すイエシロアリの分布は「神奈川県以西の海岸線」と「千葉県の一部」です。茨城県は含まれません。" },
  { slug: "tochigi", pref: "栃木県", region: "関東", ie: "none", yamatoSwarm: SPRING, cities: ["宇都宮市", "小山市", "足利市"], ieNote: "内陸のためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "gunma", pref: "群馬県", region: "関東", ie: "none", yamatoSwarm: SPRING, cities: ["前橋市", "高崎市", "太田市"], ieNote: "内陸のためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "saitama", pref: "埼玉県", region: "関東", ie: "none", yamatoSwarm: SPRING, cities: ["さいたま市", "川口市", "川越市"], ieNote: "内陸のためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "chiba", pref: "千葉県", region: "関東", ie: "check", yamatoSwarm: SPRING, cities: ["千葉市", "船橋市", "館山市"], ieNote: "協会は「千葉県の一部」をイエシロアリの分布に挙げています。県全域ではなく、温暖な海岸線沿いで散発的に確認される、という位置づけです。内陸部と沿岸部で扱いが変わるため、現地調査で確認してください。" },
  { slug: "tokyo", pref: "東京都", region: "関東", ie: "check", yamatoSwarm: SPRING, cities: ["23区", "八王子市", "町田市"], ieNote: "23区を含む本土側は基本的にヤマトシロアリが対象です。一方で協会は小笠原諸島をイエシロアリの分布域に挙げており、島しょ部は事情が異なります。" },
  { slug: "kanagawa", pref: "神奈川県", region: "関東", ie: "yes", yamatoSwarm: SPRING, cities: ["横浜市", "川崎市", "藤沢市"], ieNote: "協会の記載は「神奈川県以西の海岸線に沿った温暖な地域」。神奈川県はイエシロアリの分布の東端にあたります。" },

  { slug: "niigata", pref: "新潟県", region: "中部", ie: "none", yamatoSwarm: SPRING, cities: ["新潟市", "長岡市", "上越市"], ieNote: "日本海側で冬季の気温が低く、協会が示す「温暖な海岸線」の条件には当たりません。対象はヤマトシロアリです。" },
  { slug: "toyama", pref: "富山県", region: "中部", ie: "none", yamatoSwarm: SPRING, cities: ["富山市", "高岡市", "射水市"], ieNote: "日本海側のためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "ishikawa", pref: "石川県", region: "中部", ie: "none", yamatoSwarm: SPRING, cities: ["金沢市", "白山市", "小松市"], ieNote: "日本海側のためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "fukui", pref: "福井県", region: "中部", ie: "check", yamatoSwarm: SPRING, cities: ["福井市", "坂井市", "敦賀市"], ieNote: "日本海側ですが若狭湾沿いは比較的温暖です。協会の条件（海岸線沿いの温暖な地域）に当たるかは場所によるため、現地調査で確認してください。" },
  { slug: "yamanashi", pref: "山梨県", region: "中部", ie: "none", yamatoSwarm: SPRING, cities: ["甲府市", "富士吉田市", "南アルプス市"], ieNote: "海に面していないためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "nagano", pref: "長野県", region: "中部", ie: "none", yamatoSwarm: SPRING, cities: ["長野市", "松本市", "上田市"], ieNote: "海に面していないためイエシロアリの分布域ではありません。標高が高い地域も多く、ヤマトシロアリへの対策が中心になります。" },
  { slug: "gifu", pref: "岐阜県", region: "中部", ie: "none", yamatoSwarm: SPRING, cities: ["岐阜市", "大垣市", "高山市"], ieNote: "海に面していないためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "shizuoka", pref: "静岡県", region: "中部", ie: "yes", yamatoSwarm: SPRING, cities: ["静岡市", "浜松市", "沼津市"], ieNote: "神奈川県以西の温暖な海岸線にあたり、イエシロアリの分布域です。" },
  { slug: "aichi", pref: "愛知県", region: "中部", ie: "yes", yamatoSwarm: SPRING, cities: ["名古屋市", "豊橋市", "岡崎市"], ieNote: "神奈川県以西の温暖な海岸線にあたり、イエシロアリの分布域です。内陸部と沿岸部で状況は変わります。" },
  { slug: "mie", pref: "三重県", region: "中部", ie: "yes", yamatoSwarm: SPRING, cities: ["津市", "四日市市", "伊勢市"], ieNote: "神奈川県以西の温暖な海岸線にあたり、イエシロアリの分布域です。" },

  { slug: "shiga", pref: "滋賀県", region: "関西", ie: "none", yamatoSwarm: SPRING, cities: ["大津市", "草津市", "彦根市"], ieNote: "海に面していないためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "kyoto", pref: "京都府", region: "関西", ie: "check", yamatoSwarm: SPRING, cities: ["京都市", "宇治市", "舞鶴市"], ieNote: "府内は内陸の京都市側と日本海側の丹後地域で条件が異なります。協会の「温暖な海岸線」に当たるかは場所によるため、現地調査で確認してください。" },
  { slug: "osaka", pref: "大阪府", region: "関西", ie: "yes", yamatoSwarm: SPRING, cities: ["大阪市", "堺市", "東大阪市"], ieNote: "大阪湾沿いの温暖な地域を含み、イエシロアリの分布域にあたります。" },
  { slug: "hyogo", pref: "兵庫県", region: "関西", ie: "check", yamatoSwarm: SPRING, cities: ["神戸市", "姫路市", "豊岡市"], ieNote: "瀬戸内海側（神戸・姫路など）は温暖な海岸線に当たりますが、日本海側の但馬地域は条件が異なります。県内で分かれる点に注意してください。" },
  { slug: "nara", pref: "奈良県", region: "関西", ie: "none", yamatoSwarm: SPRING, cities: ["奈良市", "橿原市", "生駒市"], ieNote: "海に面していないためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "wakayama", pref: "和歌山県", region: "関西", ie: "yes", yamatoSwarm: SPRING, cities: ["和歌山市", "田辺市", "新宮市"], ieNote: "黒潮の影響を受ける温暖な海岸線が長く、イエシロアリの分布域にあたります。" },

  { slug: "tottori", pref: "鳥取県", region: "中国", ie: "none", yamatoSwarm: SPRING, cities: ["鳥取市", "米子市", "倉吉市"], ieNote: "日本海側のためイエシロアリの分布域ではありません。対象はヤマトシロアリです。" },
  { slug: "shimane", pref: "島根県", region: "中国", ie: "none", yamatoSwarm: SPRING, cities: ["松江市", "出雲市", "浜田市"], ieNote: "日本海側のためイエシロアリの分布域ではありません。協会は標高1,160mの三瓶山でのヤマトシロアリ繁殖報告にも触れており、山間部でも油断できません。" },
  { slug: "okayama", pref: "岡山県", region: "中国", ie: "yes", yamatoSwarm: SPRING, cities: ["岡山市", "倉敷市", "津山市"], ieNote: "瀬戸内海沿いの温暖な地域を含み、イエシロアリの分布域にあたります。" },
  { slug: "hiroshima", pref: "広島県", region: "中国", ie: "yes", yamatoSwarm: SPRING, cities: ["広島市", "福山市", "呉市"], ieNote: "瀬戸内海沿いの温暖な地域を含み、イエシロアリの分布域にあたります。" },
  { slug: "yamaguchi", pref: "山口県", region: "中国", ie: "yes", yamatoSwarm: SPRING, cities: ["山口市", "下関市", "宇部市"], ieNote: "瀬戸内海側を中心に温暖な海岸線があり、イエシロアリの分布域にあたります。" },

  { slug: "tokushima", pref: "徳島県", region: "四国", ie: "yes", yamatoSwarm: SPRING, cities: ["徳島市", "鳴門市", "阿南市"], ieNote: "四国は温暖な海岸線が長く、イエシロアリの分布域にあたります。" },
  { slug: "kagawa", pref: "香川県", region: "四国", ie: "yes", yamatoSwarm: SPRING, cities: ["高松市", "丸亀市", "坂出市"], ieNote: "瀬戸内海沿いの温暖な地域で、イエシロアリの分布域にあたります。" },
  { slug: "ehime", pref: "愛媛県", region: "四国", ie: "yes", yamatoSwarm: SPRING, cities: ["松山市", "今治市", "新居浜市"], ieNote: "瀬戸内海沿いの温暖な地域で、イエシロアリの分布域にあたります。" },
  { slug: "kochi", pref: "高知県", region: "四国", ie: "yes", yamatoSwarm: SPRING, cities: ["高知市", "南国市", "四万十市"], ieNote: "黒潮の影響を受ける温暖な太平洋岸で、イエシロアリの分布域にあたります。" },

  { slug: "fukuoka", pref: "福岡県", region: "九州", ie: "yes", yamatoSwarm: SPRING, cities: ["福岡市", "北九州市", "久留米市"], ieNote: "九州北部の温暖な海岸線で、イエシロアリの分布域にあたります。" },
  { slug: "saga", pref: "佐賀県", region: "九州", ie: "yes", yamatoSwarm: SPRING, cities: ["佐賀市", "唐津市", "鳥栖市"], ieNote: "温暖な海岸線を持ち、イエシロアリの分布域にあたります。" },
  { slug: "nagasaki", pref: "長崎県", region: "九州", ie: "yes", yamatoSwarm: SPRING, cities: ["長崎市", "佐世保市", "諫早市"], ieNote: "海岸線が非常に長く温暖で、イエシロアリの分布域にあたります。" },
  { slug: "kumamoto", pref: "熊本県", region: "九州", ie: "yes", yamatoSwarm: SPRING, cities: ["熊本市", "八代市", "天草市"], ieNote: "有明海・不知火海沿いの温暖な地域で、イエシロアリの分布域にあたります。" },
  { slug: "oita", pref: "大分県", region: "九州", ie: "yes", yamatoSwarm: SPRING, cities: ["大分市", "別府市", "中津市"], ieNote: "温暖な海岸線を持ち、イエシロアリの分布域にあたります。" },
  { slug: "miyazaki", pref: "宮崎県", region: "九州", ie: "yes", yamatoSwarm: SPRING, cities: ["宮崎市", "都城市", "延岡市"], ieNote: "黒潮の影響を受ける温暖な太平洋岸で、イエシロアリの分布域にあたります。" },
  { slug: "kagoshima", pref: "鹿児島県", region: "九州", ie: "yes", daikoku: true, yamatoSwarm: SPRING, cities: ["鹿児島市", "霧島市", "奄美市"], ieNote: "温暖な海岸線に加え、南西諸島もイエシロアリの分布域です。さらに協会は「奄美大島以南」をダイコクシロアリの分布に挙げており、離島では対象種が増えます。" },
  { slug: "okinawa", pref: "沖縄県", region: "九州", ie: "yes", daikoku: true, yamatoSwarm: OKINAWA, cities: ["那覇市", "沖縄市", "うるま市"], ieNote: "南西諸島はイエシロアリの分布域で、ダイコクシロアリ（奄美大島以南）の対象地域でもあります。国内では最も種類が多い地域です。" },
];

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);
export const AREA_SLUGS = AREAS.map((a) => a.slug);
