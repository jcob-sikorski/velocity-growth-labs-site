import Link from "next/link";
import { engagements, site } from "@/lib/content";
import { Reveal } from "../Reveal";
import { Arrow, Button, Label, Title } from "../ui";

/** Launch + Operate engagements (light ivory section for rhythm). */
export function Engagements() {
  return (
    <section className="relative bg-ivory text-ink">
      <div className="container-page py-28 md:py-40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <Label index="04" dark>
              {engagements.label}
            </Label>
            <Reveal>
              <Title title={engagements.title} accent={engagements.accent} className="mt-8 text-[clamp(3rem,7vw,6.5rem)]" />
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-stone lg:ml-auto">{engagements.intro}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          {engagements.items.map((e, i) => {
            const dark = i === 1;
            return (
              <Reveal
                key={e.slug}
                delay={i * 120}
                as="article"
                className={`group relative flex flex-col overflow-hidden rounded-[28px] p-8 transition-transform duration-700 ease-[var(--ease-premium)] hover:-translate-y-1 md:p-12 ${
                  dark ? "bg-ink text-fg" : "border border-ink/10 bg-white/60"
                }`}
              >
                {dark && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(205,187,146,0.18),transparent)]"
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <span className={`label ${dark ? "text-champagne" : "text-ink"}`}>Engagement {e.index}</span>
                  <span className={`label ${dark ? "text-faint" : "text-stone"}`}>{e.range}</span>
                </div>

                <h3 className="display relative mt-14 text-6xl md:text-7xl">{e.name}</h3>
                <p className={`relative mt-4 font-serif text-xl italic md:text-2xl ${dark ? "text-dim" : "text-stone"}`}>
                  {e.tagline}
                </p>
                <p className={`relative mt-8 text-[15px] leading-relaxed ${dark ? "text-dim" : "text-stone"}`}>{e.body}</p>

                <ul className={`relative mt-10 border-t ${dark ? "border-white/[0.08]" : "border-ink/10"}`}>
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className={`flex items-center justify-between border-b py-4 text-[15px] ${
                        dark ? "border-white/[0.08]" : "border-ink/10"
                      }`}
                    >
                      {p}
                      <span className={dark ? "text-champagne" : "text-ink/40"}>
                        <Arrow />
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto flex flex-wrap items-center justify-between gap-6 pt-12">
                  <span className={`label ${dark ? "text-faint" : "text-stone"}`}>{e.meta}</span>
                  <div className="flex items-center gap-5">
                    <Link
                      href={`/${e.slug}`}
                      className={`text-[15px] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-60 ${
                        dark ? "decoration-white/30" : "decoration-ink/30"
                      }`}
                    >
                      Details
                    </Link>
                    <Button href={`${site.bookUrl}?engagement=${e.slug}`} variant={dark ? "primary" : "dark"}>
                      Apply
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
