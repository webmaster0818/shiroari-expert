export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
  title?: string;
};

export function FAQ({ items, title = "よくある質問" }: Props) {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="font-display text-xl md:text-2xl font-bold mb-6 text-center text-primary-dark">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((faq) => (
          <details
            key={faq.question}
            className="bg-white rounded-md border border-border overflow-hidden"
          >
            <summary className="flex items-center justify-between px-5 py-4 text-sm font-bold text-primary-dark hover:bg-muted-bg transition-colors">
              <span className="pr-4">Q. {faq.question}</span>
              <svg
                className="w-5 h-5 text-muted shrink-0 faq-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-5 pb-4 pt-1 text-sm text-foreground/80 leading-relaxed border-t border-border">
              <p className="pt-3">A. {faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
