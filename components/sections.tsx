import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Label, Title } from "./ui";

/* Long-form building blocks for the inner pages (Launch, Operate, Approach).
   Copy lives in lib/pages.ts. */

type Tone = "dark" | "deep" | "light";
const bg: Record<Tone, string> = { dark: "bg-ink text-fg", deep: "bg-ink-2 text-fg", light: "bg-ivory text-ink" };
const isLight = (t: Tone) => t === "light";

export type Head = { label: string; title: string; accent?: string; intro?: string };

export function Block({ id, tone = "dark", children }: { id?: string; tone?: Tone; children: ReactNode }) {
  return (
    <section id={id} className={`relative scroll-mt-20 border-t ${isLight(tone) ? "border-ink/5" : "border-white/[0.06]"} ${bg[tone]}`}>
      <div className="container-page py-24 md:py-36">{children}</div>
    </section>
  );
}

export function BlockHead({ index, head, tone = "dark" }: { index?: string; head: Head; tone?: Tone }) {
  const light = isLight(tone);
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
      <div>
        <Label index={index} dark={light}>
          {head.label}
        </Label>
        <Reveal>
          <Title title={head.title} accent={head.accent} className="mt-8 text-[clamp(2.6rem,5.6vw,5.25rem)]" />
        </Reveal>
      </div>
      {head.intro && (
        <Reveal delay={120}>
          <p className={`max-w-md text-lg leading-relaxed lg:ml-auto ${light ? "text-stone" : "text-dim"}`}>{head.intro}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ── Cards: short title + body, 2–3 columns ──────────────── */
export function Cards({ items, tone = "dark", cols = 3 }: { items: { kicker?: string; title: string; body: string }[]; tone?: Tone; cols?: 2 | 3 }) {
  const light = isLight(tone);
  return (
    <div className={`mt-16 grid gap-5 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((c, i) => (
        <Reveal
          key={c.title}
          delay={i * 90}
          as="article"
          className={`rounded-[24px] p-8 md:p-10 ${light ? "border border-ink/10 bg-white/60" : "border border-white/[0.08] bg-ink/60"}`}
        >
          <span className={`label ${light ? "text-stone" : "text-champagne"}`}>{c.kicker ?? String(i + 1).padStart(2, "0")}</span>
          <h3 className="display mt-8 text-3xl md:text-4xl">{c.title}</h3>
          <p className={`mt-4 text-[15px] leading-relaxed ${light ? "text-stone" : "text-dim"}`}>{c.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Table: stacks into labelled cards on mobile ─────────── */
export function Table({ columns, rows, tone = "dark", highlight }: { columns: string[]; rows: string[][]; tone?: Tone; highlight?: number }) {
  const light = isLight(tone);
  const line = light ? "border-ink/10" : "border-white/[0.08]";
  const muted = light ? "text-stone" : "text-dim";
  const tpl = { gridTemplateColumns: `minmax(0,0.9fr) repeat(${columns.length - 1}, minmax(0,1.2fr))` };
  return (
    <div className="mt-16">
      <div className={`hidden gap-8 border-b pb-5 md:grid ${line}`} style={tpl}>
        {columns.map((c, i) => (
          <span key={c} className={`label ${i === highlight ? (light ? "text-ink" : "text-champagne") : muted}`}>{c}</span>
        ))}
      </div>
      {rows.map((r, ri) => (
        <Reveal key={ri} delay={ri * 50} className={`border-b py-7 ${line}`}>
          <div
            style={{ ["--tpl" as string]: tpl.gridTemplateColumns }}
            className="grid gap-3 md:gap-8 md:[grid-template-columns:var(--tpl)]"
          >
            {r.map((cell, ci) =>
              ci === 0 ? (
                <div key={ci} className="display text-2xl md:text-[1.7rem]">{cell}</div>
              ) : (
                <div key={ci}>
                  <span className={`label mb-2 block md:hidden ${ci === highlight ? (light ? "text-ink" : "text-champagne") : muted}`}>{columns[ci]}</span>
                  <p className={`text-[15px] leading-relaxed ${ci === highlight ? (light ? "text-ink" : "text-fg") : muted}`}>{cell}</p>
                </div>
              ),
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Deep list: numbered items with detail bullets ───────── */
export type DeepItem = { title: string; body: string; bullets?: string[]; foot?: { label: string; text: string } };
export function DeepList({ items, tone = "dark" }: { items: DeepItem[]; tone?: Tone }) {
  const light = isLight(tone);
  const line = light ? "border-ink/10" : "border-white/[0.08]";
  return (
    <div className={`mt-16 border-t ${line}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={60} className={`grid gap-6 border-b py-12 md:grid-cols-[72px_1fr_1.4fr] md:gap-10 ${line}`}>
          <span className={`label pt-2 ${light ? "text-stone" : "text-champagne"}`}>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="display text-3xl md:text-[2.6rem]">{it.title}</h3>
            <p className={`mt-5 max-w-md text-[15px] leading-relaxed ${light ? "text-stone" : "text-dim"}`}>{it.body}</p>
          </div>
          <div>
            {it.bullets && (
              <ul className="grid gap-3">
                {it.bullets.map((b) => (
                  <li key={b} className={`flex gap-3 text-[15px] leading-relaxed ${light ? "text-ink/85" : "text-fg/90"}`}>
                    <span className={`mt-[11px] h-px w-3 shrink-0 ${light ? "bg-ink/50" : "bg-champagne"}`} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {it.foot && (
              <p className={`mt-7 rounded-2xl px-5 py-4 text-[14px] leading-relaxed ${light ? "bg-ink/[0.04] text-stone" : "bg-white/[0.03] text-dim"}`}>
                <span className={`label mr-3 ${light ? "text-ink" : "text-champagne"}`}>{it.foot.label}</span>
                {it.foot.text}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Phased plan: day ranges with tasks, output, client part ─ */
export type Phase = { when: string; name: string; body: string; tasks: string[]; output: string; you?: string };
export function PhasePlan({ phases, tone = "dark" }: { phases: Phase[]; tone?: Tone }) {
  const light = isLight(tone);
  return (
    <ol className="relative mt-16">
      <span aria-hidden className={`absolute bottom-0 left-[27px] top-0 hidden w-px md:block ${light ? "bg-ink/10" : "bg-gradient-to-b from-champagne/60 via-white/10 to-white/5"}`} />
      {phases.map((p, i) => (
        <Reveal key={p.name} as="li" delay={60} className="relative grid gap-6 pb-14 last:pb-0 md:grid-cols-[56px_1fr] md:gap-10">
          <span className={`relative hidden h-14 w-14 place-items-center rounded-full border font-mono text-xs md:grid ${light ? "border-ink/15 bg-ivory text-ink" : "border-white/15 bg-ink text-champagne"}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className={`rounded-[24px] p-7 md:p-10 ${light ? "border border-ink/10 bg-white/60" : "border border-white/[0.08] bg-ink/60"}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="display text-4xl md:text-5xl">{p.name}</h3>
              <span className={`label ${light ? "text-stone" : "text-champagne"}`}>{p.when}</span>
            </div>
            <p className={`mt-4 max-w-2xl text-[16px] leading-relaxed ${light ? "text-stone" : "text-dim"}`}>{p.body}</p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <ul className="grid content-start gap-3">
                {p.tasks.map((t) => (
                  <li key={t} className={`flex gap-3 text-[15px] leading-relaxed ${light ? "text-ink/85" : "text-fg/90"}`}>
                    <span className={`mt-[11px] h-px w-3 shrink-0 ${light ? "bg-ink/50" : "bg-champagne"}`} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="grid content-start gap-4">
                <div className={`rounded-2xl p-5 ${light ? "bg-ink/[0.04]" : "bg-white/[0.03]"}`}>
                  <div className={`label ${light ? "text-ink" : "text-champagne"}`}>You receive</div>
                  <p className={`mt-3 text-[14px] leading-relaxed ${light ? "text-stone" : "text-dim"}`}>{p.output}</p>
                </div>
                {p.you && (
                  <div className={`rounded-2xl border p-5 ${light ? "border-ink/10" : "border-white/[0.08]"}`}>
                    <div className={`label ${light ? "text-stone" : "text-faint"}`}>Your part</div>
                    <p className={`mt-3 text-[14px] leading-relaxed ${light ? "text-stone" : "text-dim"}`}>{p.you}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/* ── Columns of short lists (cadence, we/you, paths) ─────── */
export function ListColumns({ columns, tone = "dark" }: { columns: { title: string; meta?: string; items: string[] }[]; tone?: Tone }) {
  const light = isLight(tone);
  const n = columns.length;
  return (
    <div className={`mt-16 grid gap-5 ${n >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : n === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {columns.map((c, i) => (
        <Reveal
          key={c.title}
          delay={i * 90}
          className={`rounded-[24px] p-8 ${light ? "border border-ink/10 bg-white/60" : "border border-white/[0.08] bg-ink/60"}`}
        >
          {c.meta && <span className={`label ${light ? "text-stone" : "text-champagne"}`}>{c.meta}</span>}
          <h3 className="display mt-6 text-3xl md:text-4xl">{c.title}</h3>
          <ul className={`mt-6 border-t ${light ? "border-ink/10" : "border-white/[0.08]"}`}>
            {c.items.map((it) => (
              <li key={it} className={`border-b py-3.5 text-[15px] leading-relaxed ${light ? "border-ink/10 text-ink/85" : "border-white/[0.06] text-fg/90"}`}>
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Funnel chain: stage → target, with a worked example ─── */
export type Chain = { name: string; meta: string; stages: { stage: string; target: string; example: string }[]; result: string };
export function Chains({ chains }: { chains: Chain[] }) {
  return (
    <div className="mt-16 grid gap-5 lg:grid-cols-2">
      {chains.map((c, ci) => (
        <Reveal key={c.name} delay={ci * 120} as="article" className="rounded-[28px] border border-white/[0.08] bg-ink/60 p-7 md:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="display text-4xl md:text-5xl">{c.name}</h3>
            <span className="label text-champagne">{c.meta}</span>
          </div>
          <div className="mt-8 grid grid-cols-[1fr_auto_auto] gap-x-6 border-b border-white/[0.08] pb-3">
            <span className="label text-faint">Stage</span>
            <span className="label text-faint">Target</span>
            <span className="label w-16 text-right text-faint">Example</span>
          </div>
          <ol>
            {c.stages.map((s, i) => (
              <li key={s.stage} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border-b border-white/[0.06] py-3.5">
                <span className="flex items-center gap-3 text-[15px] text-fg/90">
                  <span className="font-mono text-[10px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                  {s.stage}
                </span>
                <span className="font-mono text-[13px] text-champagne">{s.target}</span>
                <span className="w-16 text-right font-mono text-[13px] text-dim">{s.example}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] leading-relaxed text-dim">{c.result}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Prose: a statement and supporting paragraphs ────────── */
export function Prose({ statement, paragraphs, tone = "dark" }: { statement: string; paragraphs: string[]; tone?: Tone }) {
  const light = isLight(tone);
  return (
    <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
      <Reveal>
        <p className="display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.08]">{statement}</p>
      </Reveal>
      <Reveal delay={120} className="grid content-start gap-5">
        {paragraphs.map((p) => (
          <p key={p} className={`text-[16px] leading-relaxed ${light ? "text-stone" : "text-dim"}`}>{p}</p>
        ))}
      </Reveal>
    </div>
  );
}
