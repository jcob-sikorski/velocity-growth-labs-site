import { principles } from "@/lib/content";
import { Reveal } from "../Reveal";
import { Label, Title } from "../ui";

export function Principles() {
  return (
    <section className="relative border-t border-white/[0.06] bg-ink text-fg">
      <div className="container-page py-28 md:py-40">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Label index="02">{principles.label}</Label>
            <Reveal>
              <Title title={principles.title} accent={principles.accent} className="mt-8 text-[clamp(3rem,7vw,6.5rem)]" />
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid border-t border-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {principles.items.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 90}
              className="group relative border-b border-white/[0.08] py-10 md:px-8 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="label text-champagne">0{i + 1}</div>
              <h3 className="display mt-10 text-4xl md:text-[2.75rem]">{p.name}</h3>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-dim">{p.body}</p>
              <span className="absolute left-0 top-0 h-px w-0 bg-champagne transition-all duration-700 ease-[var(--ease-premium)] group-hover:w-full lg:group-first:left-0" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
