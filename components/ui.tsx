import Link from "next/link";
import type { ReactNode } from "react";

/* ── Buttons ──────────────────────────────────────────────── */

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark" | "ghost-dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: BtnProps) {
  const styles = {
    primary: "bg-ivory text-ink hover:bg-white",
    dark: "bg-ink text-ivory hover:bg-graphite",
    ghost: "border border-white/15 text-fg hover:border-white/40 hover:bg-white/[0.03]",
    "ghost-dark": "border border-ink/15 text-ink hover:border-ink/40",
  }[variant];
  const dot = {
    primary: "bg-ink text-ivory",
    dark: "bg-ivory text-ink",
    ghost: "bg-white/10 text-fg",
    "ghost-dark": "bg-ink/10 text-ink",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-medium tracking-[-0.01em] transition-all duration-500 ease-[var(--ease-premium)] ${styles} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`grid h-9 w-9 place-items-center rounded-full transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-rotate-45 ${dot}`}
      >
        <Arrow />
      </span>
    </Link>
  );
}

export function TextLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[15px] ${dark ? "text-ink" : "text-fg"}`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-x-0 ${
            dark ? "bg-ink/30" : "bg-white/30"
          }`}
        />
      </span>
      <Arrow />
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Labels & headings ────────────────────────────────────── */

/** Mono section label with a short rule: "01 — Manifesto" */
export function Label({
  index,
  children,
  dark = false,
  className = "",
}: {
  index?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`label flex items-center gap-3 ${dark ? "text-stone" : "text-dim"} ${className}`}>
      {index && <span className={dark ? "text-ink" : "text-champagne"}>{index}</span>}
      <span className={`h-px w-8 ${dark ? "bg-ink/20" : "bg-white/15"}`} />
      <span>{children}</span>
    </div>
  );
}

/** Display heading: roman first line + italic accent. */
export function Title({
  title,
  accent,
  className = "",
  as: Tag = "h2",
  breakAccent = true,
}: {
  title: string;
  accent?: string;
  className?: string;
  as?: "h1" | "h2";
  breakAccent?: boolean;
}) {
  return (
    <Tag className={`display ${className}`}>
      {title}
      {accent && (
        <>
          {breakAccent ? <br /> : " "}
          <em className="italic">{accent}</em>
        </>
      )}
    </Tag>
  );
}

/* ── Section shell ────────────────────────────────────────── */

export function Section({
  children,
  tone = "dark",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "deep";
  className?: string;
  id?: string;
}) {
  const bg = { dark: "bg-ink text-fg", deep: "bg-ink-2 text-fg", light: "bg-ivory text-ink" }[tone];
  return (
    <section id={id} className={`relative ${bg} ${className}`}>
      <div className="container-page py-28 md:py-40">{children}</div>
    </section>
  );
}
