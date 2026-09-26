import { benchmarks } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Label, Title } from "./ui";

/** VSL and webinar operating targets, kept as two separate sets. */
export function Benchmarks({ index, tone = "deep" }: { index?: string; tone?: "deep" | "dark" }) {
  return (
    <section className={`relative border-y border-white/[0.06] text-fg ${tone === "deep" ? "bg-ink-2" : "bg-ink"}`}>
      <div className="container-page py-28 md:py-36">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <Label index={index}>{benchmarks.label}</Label>
            <Reveal>
              <Title title={benchmarks.title} accent={benchmarks.accent} className="mt-8 text-[clamp(2.6rem,5.6vw,5.25rem)]" />
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-dim lg:ml-auto">{benchmarks.intro}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {benchmarks.groups.map((g, gi) => (
            <Reveal
              key={g.name}
              delay={gi * 120}
              as="article"
              className="rounded-[28px] border border-white/[0.08] bg-ink/60 p-7 md:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-white/[0.08] pb-6">
                <h3 className="display text-4xl md:text-5xl">{g.name}</h3>
                <span className="label text-champagne">{g.meta}</span>
              </div>
              <dl className="grid grid-cols-2">
                {g.items.map((n, i) => (
                  <div
                    key={n.label}
                    className={`border-b border-white/[0.06] py-7 ${i % 2 === 0 ? "pr-4 md:pr-6" : "border-l pl-4 md:pl-6"} ${i >= g.items.length - 2 ? "border-b-0 pb-0" : ""}`}
                  >
                    <dt className="display text-metal text-[clamp(2.1rem,4vw,3.25rem)]">{n.value}</dt>
                    <dd className="label mt-4 leading-relaxed text-dim">{n.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
        <p className="label mt-10 leading-relaxed text-faint">{benchmarks.note}</p>
      </div>
    </section>
  );
}
