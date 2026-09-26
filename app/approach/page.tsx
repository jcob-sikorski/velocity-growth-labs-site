import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Manifesto } from "@/components/home/About";
import { Principles } from "@/components/home/Principles";
import { Process } from "@/components/home/Process";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { Button, Label } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Approach" };

const different = [
  { t: "We stay after launch.", b: "Launching is the easy part. We’re built to operate — so the system keeps working when the launch buzz fades." },
  { t: "Senior people only.", b: "The people on your first call are the people doing the work. No hand-offs to juniors." },
  { t: "One offer at a time.", b: "Focus is a strategy. We make one offer great before we let anyone add a second." },
  { t: "Numbers every week.", b: "You’ll always know what’s working, what isn’t and what we’re changing next." },
];

export default function Page() {
  return (
    <>
      <PageHero
        label="Approach"
        title="Less, done"
        accent="properly."
        intro="We don’t sell tools, hacks or theatre. We launch and operate high-ticket offers with a small number of simple systems — and the discipline to run them."
      >
        <Button href={site.bookUrl}>Book a call</Button>
      </PageHero>
      <Manifesto />
      <Principles />
      <section className="bg-ivory text-ink">
        <div className="container-page py-28 md:py-40">
          <Label index="03" dark>How we’re different</Label>
          <div className="mt-16 grid gap-x-10 md:grid-cols-2">
            {different.map((d, i) => (
              <Reveal key={d.t} delay={i * 80} className="border-t border-ink/10 py-10">
                <h3 className="display text-4xl md:text-5xl">{d.t}</h3>
                <p className="mt-5 max-w-md leading-relaxed text-stone">{d.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Process index="04" />
      <CTA />
    </>
  );
}
