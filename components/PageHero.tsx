import type { ReactNode } from "react";
import { Label } from "./ui";

/** Inner-page hero: dark, editorial, left-aligned. */
export function PageHero({
  label,
  title,
  accent,
  intro,
  children,
}: {
  label: string;
  title: string;
  accent?: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-fg">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(58,85,255,0.14),transparent)]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(205,187,146,0.07),transparent)]" />
        <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      </div>
      <div className="container-page relative pb-24 pt-44 md:pb-32 md:pt-56">
        <div className="animate-rise">
          <Label>{label}</Label>
        </div>
        <h1 className="display mt-10 max-w-6xl animate-rise text-[clamp(3.25rem,9vw,8.5rem)] [animation-delay:120ms]">
          <span className="text-metal">{title}</span>
          {accent && (
            <>
              <br />
              <em className="text-champagne-metal pr-[0.08em] italic">{accent}</em>
            </>
          )}
        </h1>
        {intro && (
          <p className="mt-10 max-w-xl animate-rise text-lg leading-relaxed text-dim [animation-delay:260ms]">{intro}</p>
        )}
        {children && (
          <div className="mt-12 flex animate-rise flex-wrap items-center gap-3 [animation-delay:380ms]">{children}</div>
        )}
      </div>
    </section>
  );
}
