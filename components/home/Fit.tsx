import { fit } from "@/lib/content";
import { Reveal } from "../Reveal";
import { Label, Title } from "../ui";

export function Fit({ index = "06" }: { index?: string }) {
  return (
    <section className="relative bg-ink text-fg">
      <div className="container-page py-28 md:py-40">
        <Label index={index}>{fit.label}</Label>
        <Reveal>
          <Title title={fit.title} accent={fit.accent} className="mt-8 max-w-5xl text-[clamp(2.6rem,5.6vw,5.25rem)]" />
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-[28px] border border-champagne/30 bg-[linear-gradient(180deg,rgba(205,187,146,0.06),transparent)] p-8 md:p-12">
            <div className="label text-champagne">A fit if</div>
            <ul className="mt-8">
              {fit.yes.map((y) => (
                <li key={y} className="flex gap-4 border-b border-white/[0.08] py-5 text-[17px] last:border-0">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                  {y}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-[28px] border border-white/[0.08] p-8 md:p-12">
            <div className="label text-faint">Not a fit if</div>
            <ul className="mt-8">
              {fit.no.map((n) => (
                <li key={n} className="flex gap-4 border-b border-white/[0.08] py-5 text-[17px] text-dim last:border-0">
                  <span className="mt-[11px] h-px w-3 shrink-0 bg-faint" />
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
