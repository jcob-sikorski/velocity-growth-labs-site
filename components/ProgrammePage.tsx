import { site } from "@/lib/content";
import { CTA } from "./CTA";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { FAQ } from "./home/FAQ";
import { Button, Label } from "./ui";

export type Engagement = {
  slug: string;
  label: string;
  title: string;
  accent: string;
  intro: string;
  includes: { title: string; body: string }[];
  timeline: { phase: string; when: string; body: string }[];
  outcomes: string[];
  faq: { q: string; a: string }[];
};

/** Template for /launch and /operate. */
export function ProgrammePage({ p }: { p: Engagement }) {
  return (
    <>
      <PageHero label={p.label} title={p.title} accent={p.accent} intro={p.intro}>
        <Button href={`${site.bookUrl}?engagement=${p.slug}`}>Apply for {p.title.replace(".", "")}</Button>
        <Button href="#included" variant="ghost">
          What’s included
        </Button>
      </PageHero>

      {/* Included */}
      <section id="included" className="border-t border-white/[0.06] bg-ink text-fg">
        <div className="container-page py-28 md:py-36">
          <Label index="01">What’s included</Label>
          <div className="mt-16 border-t border-white/[0.08]">
            {p.includes.map((i, idx) => (
              <Reveal
                key={i.title}
                delay={idx * 60}
                className="group grid gap-4 border-b border-white/[0.08] py-10 md:grid-cols-[80px_1fr_1.2fr] md:gap-10"
              >
                <span className="label pt-2 text-champagne">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="display text-3xl transition-transform duration-700 ease-[var(--ease-premium)] group-hover:translate-x-2 md:text-4xl">
                  {i.title}
                </h3>
                <p className="max-w-lg text-[16px] leading-relaxed text-dim md:pt-2">{i.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink-2 text-fg">
        <div className="container-page py-28 md:py-36">
          <Label index="02">Timeline</Label>
          <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {p.timeline.map((t, i) => (
              <Reveal
                key={t.phase}
                as="li"
                delay={i * 100}
                className="rounded-[24px] border border-white/[0.08] bg-ink/60 p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="label text-champagne">{String(i + 1).padStart(2, "0")}</span>
                  <span className="label text-faint">{t.when}</span>
                </div>
                <h3 className="display mt-12 text-4xl">{t.phase}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-dim">{t.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-ivory text-ink">
        <div className="container-page py-28 md:py-36">
          <Label index="03" dark>
            What you walk away with
          </Label>
          <ul className="mt-16 grid gap-x-10 md:grid-cols-2">
            {p.outcomes.map((o, i) => (
              <Reveal key={o} as="li" delay={i * 60} className="flex items-baseline gap-5 border-b border-ink/10 py-7">
                <span className="label text-stone">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-3xl md:text-4xl">{o}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQ index="04" items={p.faq} />
      <CTA />
    </>
  );
}
