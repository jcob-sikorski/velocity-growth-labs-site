import { PageHero } from "./PageHero";

export function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero label="Legal" title={title} intro="Placeholder text — have this written or reviewed by legal counsel before publishing." />
      <section className="border-t border-white/[0.06] bg-ink text-fg">
        <div className="container-page max-w-3xl py-24">
          {sections.map((s, i) => (
            <div key={s.h} className="grid gap-4 border-b border-white/[0.08] py-10 md:grid-cols-[60px_1fr]">
              <span className="label pt-2 text-champagne">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="display text-3xl">{s.h}</h2>
                <p className="mt-4 leading-relaxed text-dim">{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
