import { SUBSIDIES, SubsidyEntry } from "../lib/subsidies";

const REGION_ORDER: SubsidyEntry["region"][] = [
  "北海道",
  "東北",
  "関東",
  "中部",
  "関西",
  "中国",
  "四国",
  "九州",
];

type Props = {
  variant?: "summary" | "full";
};

export function RegionList({ variant = "summary" }: Props) {
  if (variant === "summary") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
        {REGION_ORDER.map((region) => {
          const items = SUBSIDIES.filter((s) => s.region === region);
          return (
            <div
              key={region}
              className="bg-white border border-border rounded-sm px-3 py-3"
            >
              <p className="font-bold text-primary-dark mb-1.5">{region}</p>
              <p className="text-foreground/80 leading-relaxed">
                {items.map((s) => s.pref).join("・")}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {REGION_ORDER.map((region) => {
        const items = SUBSIDIES.filter((s) => s.region === region);
        return (
          <section key={region}>
            <h3 className="font-display text-lg font-bold text-primary-dark mb-3 pl-2 border-l-4 border-accent">
              {region}地方
            </h3>
            <div className="table-wrapper">
              <table className="w-full text-sm bg-white border border-border">
                <thead>
                  <tr className="bg-muted-bg">
                    <th className="px-3 py-2 text-left font-bold w-28 whitespace-nowrap">
                      都道府県
                    </th>
                    <th className="px-3 py-2 text-left font-bold">補助制度の概要</th>
                    <th className="px-3 py-2 text-left font-bold w-24 whitespace-nowrap">
                      確認状況
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((s) => (
                    <tr key={s.pref} className="border-t border-border">
                      <td className="px-3 py-2 font-bold align-top">{s.pref}</td>
                      <td className="px-3 py-2 align-top text-xs leading-relaxed">
                        {s.note}
                      </td>
                      <td className="px-3 py-2 align-top text-xs">
                        <span className="inline-block bg-accent/10 text-accent border border-accent/30 px-2 py-0.5 rounded-sm">
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
      <p className="text-xs text-muted mt-4 leading-relaxed">
        ※補助金制度は年度ごとに改廃されるため、申請前に必ずお住まいの市区町村公式サイトで最新情報をご確認ください。本表は「シロアリ防除・住宅リフォーム補助の有無を確認すべき主体」を示すリファレンスです。
      </p>
    </div>
  );
}
