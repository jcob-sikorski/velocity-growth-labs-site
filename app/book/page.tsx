import type { Metadata } from "next";
import { CalEmbed } from "@/components/CalEmbed";
import { PageHero } from "@/components/PageHero";
import { Label } from "@/components/ui";

export const metadata: Metadata = { title: "Book a call" };

const steps = [
  { t: "Your offer", b: "What you sell, who buys it and what it’s worth." },
  { t: "Your numbers", b: "Where buyers come from today, and where they drop off." },
  { t: "Our honest take", b: "What we’d do — or whether we’re the wrong fit." },
];

export default function Page() {
  return (
    <>
      <PageHero
        label="Book a call"
        title="Thirty minutes."
        accent="No pitch deck."
        intro="Pick a time below. We’ll look at your offer and your numbers, and tell you exactly what we’d do."
      />
      <section className="border-t border-white/[0.06] bg-ink text-fg">
        <div className="container-page py-24">
          {/* What happens on the call — one row above the calendar */}
          <Label index="01">On the call</Label>
          <ol className="mt-10 grid border-t border-white/[0.08] md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.t}
                className="grid grid-cols-[48px_1fr] border-b border-white/[0.08] py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <span className="label pt-2 text-champagne">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="display text-3xl">{s.t}</div>
                  <p className="mt-2 text-[15px] text-dim">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Calendar — full width so Cal uses its desktop layout */}
          <div className="mt-16">
            <Label index="02">Pick a time</Label>
            <div className="mt-10 min-h-[520px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-ink-2 p-2 md:p-4">
              <CalEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
