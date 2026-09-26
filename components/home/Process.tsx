import { process } from "@/lib/content";
import { Reveal } from "../Reveal";
import { Label, Title } from "../ui";

export function Process({ index = "05" }: { index?: string }) {
  return (
    <section className="relative bg-ink text-fg">
      <div className="container-page py-28 md:py-40">
        <Label index={index}>{process.label}</Label>
        <Reveal>
          <Title title={process.title} accent={process.accent} className="mt-8 text-[clamp(3rem,7vw,6.5rem)]" />
        </Reveal>

        <ol className="relative mt-20 grid gap-0 md:grid-cols-4">
          {/* connecting line */}
          <span aria-hidden className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-champagne/60 via-white/15 to-white/5 md:block" />
          {process.steps.map((s, i) => (
            <Reveal key={s.name} as="li" delay={i * 110} className="relative border-t border-white/[0.08] py-10 md:border-t-0 md:pr-10 md:pt-0">
              <div className="flex items-center gap-4">
                <span className="relative grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-ink font-mono text-xs text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="label text-faint">{s.when}</span>
              </div>
              <h3 className="display mt-10 text-4xl md:text-5xl">{s.name}</h3>
              <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-dim">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
