import { proof } from "@/lib/content";
import { Reveal } from "../Reveal";
import { Label, TextLink, Title } from "../ui";

/** Proof — featured quote + supporting quotes (placeholders). */
export function Proof({ index = "07", showLink = true }: { index?: string; showLink?: boolean }) {
  return (
    <section className="relative bg-ivory text-ink">
      <div className="container-page py-28 md:py-40">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Label index={index} dark>
              {proof.label}
            </Label>
            <Reveal>
              <Title title={proof.title} accent={proof.accent} className="mt-8 text-[clamp(3rem,7vw,6.5rem)]" />
            </Reveal>
          </div>
          {showLink && (
            <TextLink href="/results" dark>
              All results
            </TextLink>
          )}
        </div>

        <Reveal className="mt-20 border-t border-ink/10 pt-14">
          <blockquote className="display max-w-5xl text-[clamp(2rem,4vw,3.6rem)] leading-[1.1]">
            <span className="text-champagne-dim">“</span>
            {proof.featured.quote}
            <span className="text-champagne-dim">”</span>
          </blockquote>
          <Person name={proof.featured.name} role={proof.featured.role} />
        </Reveal>

        {proof.items.length > 0 && (
          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {proof.items.map((q, i) => (
              <Reveal key={i} delay={i * 100} as="article" className="flex flex-col rounded-[24px] border border-ink/10 bg-white/60 p-8">
                <p className="font-serif text-2xl leading-snug">“{q.quote}”</p>
                <div className="mt-auto pt-10">
                  <Person name={q.name} role={q.role} small />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Person({ name, role, small = false }: { name: string; role: string; small?: boolean }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div className={`flex items-center gap-4 ${small ? "" : "mt-10"}`}>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-mono text-xs text-ivory">{initials}</span>
      <div>
        <div className="text-[15px] font-medium">{name}</div>
        <div className="label mt-1.5 text-stone">{role}</div>
      </div>
    </div>
  );
}
