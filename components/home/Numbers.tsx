import { numbers } from "@/lib/content";
import { Reveal } from "../Reveal";
import { Label } from "../ui";

type Stats = { label?: string; items: { value: string; label: string }[]; note?: string };

export function Numbers({ tone = "dark", data = numbers }: { tone?: "dark" | "light"; data?: Stats }) {
  const light = tone === "light";
  return (
    <section className={light ? "bg-ivory text-ink" : "border-y border-white/[0.06] bg-ink-2 text-fg"}>
      <div className="container-page">
        {data.label && (
          <div className="pt-16 md:pt-20">
            <Label dark={light}>{data.label}</Label>
          </div>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {data.items.map((n, i) => (
            <Reveal key={n.label} delay={(i % 4) * 90} className={`px-2 py-14 md:px-8 md:py-20 lg:border-l lg:[&:nth-child(4n+1)]:border-l-0 lg:[&:nth-child(4n+1)]:pl-0 ${light ? "border-ink/10" : "border-white/[0.08]"}`}>
              <div className={`display text-[clamp(3rem,6vw,5.5rem)] ${light ? "" : "text-metal"}`}>{n.value}</div>
              <div className={`label mt-5 leading-relaxed ${light ? "text-stone" : "text-dim"}`}>{n.label}</div>
            </Reveal>
          ))}
        </div>
        {data.note && <p className={`label pb-8 ${light ? "text-stone/70" : "text-faint"}`}>{data.note}</p>}
      </div>
    </section>
  );
}
