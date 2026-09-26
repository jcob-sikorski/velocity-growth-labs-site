import { faq } from "@/lib/content";
import { Label } from "../ui";

export function FAQ({
  index = "08",
  items = faq.items,
}: {
  index?: string;
  items?: { q: string; a: string }[];
}) {
  return (
    <section className="relative border-t border-white/[0.06] bg-ink text-fg">
      <div className="container-page grid gap-12 py-28 md:grid-cols-[1fr_2fr] md:py-40">
        <div>
          <Label index={index}>{faq.label}</Label>
          <h2 className="display mt-8 text-[clamp(2.6rem,5vw,4.5rem)]">
            Straight
            <br />
            <em className="italic">answers.</em>
          </h2>
        </div>
        <div className="border-t border-white/[0.08]">
          {items.map((f) => (
            <details key={f.q} className="group border-b border-white/[0.08]">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-7 text-left text-lg tracking-[-0.01em] transition-colors hover:text-champagne md:text-xl">
                {f.q}
                <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 transition-transform duration-500 ease-[var(--ease-premium)]">
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-2xl pb-8 pr-12 text-[16px] leading-relaxed text-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
