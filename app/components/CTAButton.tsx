import Link from "next/link";

type Variant = "primary" | "secondary" | "accent" | "outline";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  sponsored?: boolean;
  className?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-sm hover:shadow-md",
  secondary:
    "bg-secondary text-white hover:bg-secondary-light shadow-sm hover:shadow-md",
  accent:
    "bg-accent text-white hover:bg-accent-light shadow-sm hover:shadow-md",
  outline:
    "bg-white text-primary border border-primary hover:bg-muted-bg",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  sponsored = false,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium px-6 py-3 rounded-sm transition-colors text-sm";
  const cls = `${base} ${styles[variant]} ${className}`;

  if (external) {
    const rel = sponsored
      ? "noopener noreferrer sponsored"
      : "noopener noreferrer nofollow";
    return (
      <a href={href} target="_blank" rel={rel} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function PhoneCTA({
  phone,
  label = "今すぐ電話で相談",
}: {
  phone: string;
  label?: string;
}) {
  const tel = phone.replace(/[^0-9]/g, "");
  return (
    <a
      href={`tel:${tel}`}
      className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white font-bold px-6 py-3 rounded-sm hover:bg-primary transition-colors text-sm shadow-sm"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      {label}（{phone}）
    </a>
  );
}
