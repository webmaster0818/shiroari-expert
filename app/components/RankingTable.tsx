import { Provider } from "../lib/providers";
import { CTAButton } from "./CTAButton";

type Props = {
  providers: Provider[];
  showRank?: boolean;
};

export function RankingTable({ providers, showRank = true }: Props) {
  return (
    <div className="space-y-6">
      {providers.map((p, i) => (
        <article
          key={p.slug}
          className="bg-white border border-border rounded-md overflow-hidden"
        >
          <header className="bg-primary text-white px-5 py-3 flex items-center gap-4">
            {showRank && (
              <span className="font-display text-2xl font-bold leading-none">
                第{i + 1}位
              </span>
            )}
            <div className="flex-1">
              <h3 className="font-bold text-lg leading-tight">{p.name}</h3>
              <p className="text-white/80 text-xs mt-0.5">運営: {p.operator}</p>
            </div>
          </header>
          <div className="p-5">
            <p className="text-accent text-sm font-bold mb-3">{p.tagline}</p>
            <p className="text-foreground/85 text-sm leading-relaxed mb-4">
              {p.highlight}。{p.recommendedFor}におすすめできる選択肢です。
            </p>
            <ul className="space-y-1.5 mb-4 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 text-xs mb-5 bg-muted-bg p-4 rounded-sm">
              <div>
                <dt className="font-bold text-primary-dark">対応エリア</dt>
                <dd className="text-foreground/80 mt-0.5">{p.areas}</dd>
              </div>
              <div>
                <dt className="font-bold text-primary-dark">料金目安</dt>
                <dd className="text-foreground/80 mt-0.5">{p.fee}</dd>
              </div>
              <div>
                <dt className="font-bold text-primary-dark">保証</dt>
                <dd className="text-foreground/80 mt-0.5">{p.warranty}</dd>
              </div>
              <div>
                <dt className="font-bold text-primary-dark">電話</dt>
                <dd className="text-foreground/80 mt-0.5">{p.phone}</dd>
              </div>
            </dl>
            <div className="flex flex-col sm:flex-row gap-2">
              <CTAButton href={p.url} external sponsored variant="primary" className="flex-1">
                公式サイトで詳細を見る
              </CTAButton>
            </div>
            <p className="text-[10px] text-muted mt-3">
              ※情報は{p.sourceConfirmed}時点。最新の対応エリア・料金は公式サイトでご確認ください。
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
