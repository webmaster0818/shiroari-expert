import { Provider } from "../lib/providers";

type Props = {
  providers: Provider[];
};

export function ComparisonTable({ providers }: Props) {
  return (
    <div className="table-wrapper">
      <table className="w-full border-collapse text-sm bg-white">
        <thead>
          <tr className="bg-primary text-white">
            <th className="px-3 py-3 text-left font-bold whitespace-nowrap">業者</th>
            <th className="px-3 py-3 text-left font-bold whitespace-nowrap">運営会社</th>
            <th className="px-3 py-3 text-left font-bold">対応エリア</th>
            <th className="px-3 py-3 text-left font-bold whitespace-nowrap">保証</th>
            <th className="px-3 py-3 text-left font-bold whitespace-nowrap">電話受付</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((p, i) => (
            <tr
              key={p.slug}
              className={i % 2 === 0 ? "bg-white" : "bg-muted-bg"}
            >
              <td className="px-3 py-3 align-top border-t border-border font-bold">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-primary hover:underline"
                >
                  {p.name}
                </a>
              </td>
              <td className="px-3 py-3 align-top border-t border-border text-xs">
                {p.operator}
              </td>
              <td className="px-3 py-3 align-top border-t border-border text-xs">
                {p.areas}
              </td>
              <td className="px-3 py-3 align-top border-t border-border text-xs">
                {p.warranty}
              </td>
              <td className="px-3 py-3 align-top border-t border-border text-xs whitespace-nowrap">
                {p.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
