import { systems } from "@/lib/content";
import { Reveal } from "../Reveal";
import { Label, Title } from "../ui";

/** The acquisition engine — VSL and webinar systems. */
export function Systems() {
  return (
    <section id="systems" className="relative scroll-mt-20 overflow-hidden bg-ink-2 text-fg">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(58,85,255,0.12),transparent)]"
      />
      <div className="container-page relative py-28 md:py-40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <Label index="03">{systems.label}</Label>
            <Reveal>
              <Title title={systems.title} accent={systems.accent} className="mt-8 text-[clamp(2.8rem,6vw,5.75rem)]" />
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-dim lg:ml-auto">{systems.intro}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          {systems.items.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 120}
              as="article"
              className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-ink/60 p-8 transition-colors duration-700 hover:border-white/[0.16] md:p-12"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="label text-champagne">{s.kicker}</span>
                <span className="label text-faint">{i === 0 ? "Evergreen" : "Live / evergreen"}</span>
              </div>

              <h3 className="display mt-10 text-5xl md:text-6xl">{s.name}</h3>
              <p className="mt-3 font-serif text-xl italic text-dim md:text-2xl">{s.tagline}</p>

              <Flow steps={s.flow} />

              <p className="mt-10 text-[15px] leading-relaxed text-dim">{s.body}</p>

              <ul className="mt-8 grid gap-x-6 gap-y-3 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[15px] text-fg/90">
                    <span className="h-px w-3 bg-champagne" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Animated funnel flow: 4 nodes joined by a moving dashed line. */
function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.015] px-3 py-6 sm:px-5">
      <div className="relative grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
        <svg
          aria-hidden
          className="absolute top-5 h-px"
          style={{ left: `${50 / steps.length}%`, right: `${50 / steps.length}%`, width: `${100 - 100 / steps.length}%` }}
          preserveAspectRatio="none"
          viewBox="0 0 100 1"
        >
          <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="rgba(255,255,255,0.28)" strokeWidth="1" className="flow-dash" vectorEffect="non-scaling-stroke" />
        </svg>
        {steps.map((step, i) => (
          <div key={step} className="relative flex flex-col items-center gap-3 text-center">
            <span
              className={`grid h-10 w-10 place-items-center rounded-full border font-mono text-[11px] ${
                i === steps.length - 1
                  ? "border-champagne/60 bg-[#15140f] text-champagne shadow-[0_0_24px_-4px_rgba(205,187,146,0.5)]"
                  : "border-white/15 bg-ink text-dim"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="label text-[8.5px] leading-snug tracking-[0.04em] text-dim [overflow-wrap:anywhere] sm:text-[10px] sm:tracking-[0.14em]">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
