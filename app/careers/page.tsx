import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Arrow, Label } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Careers" };

// PLACEHOLDER roles — update with live openings.
const roles = [
  { title: "Senior Media Buyer", team: "Acquisition", type: "Remote · Full-time" },
  { title: "VSL & Webinar Copywriter", team: "Creative", type: "Remote · Contract" },
  { title: "Funnel & CRO Specialist", team: "Acquisition", type: "Remote · Full-time" },
  { title: "Sales Operations Lead", team: "Operations", type: "Remote · Full-time" },
];

export default function Page() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Think bigger"
        accent="with us."
        intro="We hire a small number of senior operators who like measurable work, simple systems and clients who make decisions."
      />
      <section className="border-t border-white/[0.06] bg-ink text-fg">
        <div className="container-page py-24 md:py-32">
          <Label index="01">Open roles</Label>
          <ul className="mt-12 border-t border-white/[0.08]">
            {roles.map((r, i) => (
              <Reveal key={r.title} as="li" delay={i * 70}>
                <Link
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${r.title}`)}`}
                  className="group flex flex-col gap-3 border-b border-white/[0.08] py-9 md:flex-row md:items-center md:justify-between"
                >
                  <span className="display text-3xl transition-transform duration-700 ease-[var(--ease-premium)] group-hover:translate-x-2 md:text-5xl">
                    {r.title}
                  </span>
                  <span className="flex items-center gap-8">
                    <span className="label text-dim">{r.team} · {r.type}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-all duration-500 group-hover:-rotate-45 group-hover:border-champagne group-hover:text-champagne">
                      <Arrow />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
