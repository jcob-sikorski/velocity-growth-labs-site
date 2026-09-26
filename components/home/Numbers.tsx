import { numbers } from "@/lib/content";
import { Reveal } from "../Reveal";

export function Numbers({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <section className={light ? "bg-ivory text-ink" : "border-y border-white/[0.06] bg-ink-2 text-fg"}>
      <div className="container-page">
        <div className={`grid grid-cols-2 lg:grid-cols-4 ${light ? "divide-ink/10" : "divide-white/[0.08]"} lg:divide-x`}>
          {numbers.items.map((n, i) => (
            <Reveal key={n.label} delay={i * 90} className="px-2 py-14 md:px-8 md:py-20 lg:first:pl-0">
              <div className={`display text-[clamp(3rem,6vw,5.5rem)] ${light ? "" : "text-metal"}`}>{n.value}</div>
              <div className={`label mt-5 leading-relaxed ${light ? "text-stone" : "text-dim"}`}>{n.label}</div>
            </Reveal>
          ))}
        </div>
        {numbers.note && <p className={`label pb-8 ${light ? "text-stone/70" : "text-faint"}`}>{numbers.note}</p>}
      </div>
    </section>
  );
}
