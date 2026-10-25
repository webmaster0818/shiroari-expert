// 47都道府県の補助金概要。具体的な金額・要件は自治体公式で必ず確認すること。
// status: "確認推奨" = 制度の有無や金額が変動するため、申請前に必ず自治体公式へ。
export type SubsidyEntry = {
  pref: string;
  region: "北海道" | "東北" | "関東" | "中部" | "関西" | "中国" | "四国" | "九州";
  note: string;
  status: "確認推奨";
};

export const SUBSIDIES: SubsidyEntry[] = [
  { pref: "北海道", region: "北海道", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "青森県", region: "東北", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "岩手県", region: "東北", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "宮城県", region: "東北", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "秋田県", region: "東北", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "山形県", region: "東北", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "福島県", region: "東北", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "茨城県", region: "関東", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "栃木県", region: "関東", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "群馬県", region: "関東", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "埼玉県", region: "関東", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "千葉県", region: "関東", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "東京都", region: "関東", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "神奈川県", region: "関東", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "新潟県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "富山県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "石川県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "福井県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "山梨県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "長野県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "岐阜県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "静岡県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "愛知県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "三重県", region: "中部", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "滋賀県", region: "関西", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "京都府", region: "関西", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "大阪府", region: "関西", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "兵庫県", region: "関西", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "奈良県", region: "関西", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "和歌山県", region: "関西", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "鳥取県", region: "中国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "島根県", region: "中国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "岡山県", region: "中国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "広島県", region: "中国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "山口県", region: "中国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "徳島県", region: "四国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "香川県", region: "四国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "愛媛県", region: "四国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "高知県", region: "四国", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "福岡県", region: "九州", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "佐賀県", region: "九州", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "長崎県", region: "九州", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "熊本県", region: "九州", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "大分県", region: "九州", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "宮崎県", region: "九州", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "鹿児島県", region: "九州", note: "各自治体にてご確認ください。", status: "確認推奨" },
  { pref: "沖縄県", region: "九州", note: "各自治体にてご確認ください。", status: "確認推奨" },
];
