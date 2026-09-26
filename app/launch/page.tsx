import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Benchmarks } from "@/components/Benchmarks";
import { Block, BlockHead, Cards, DeepList, ListColumns, PhasePlan, Table } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui";
import { site } from "@/lib/content";
import { launch as p } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Launch",
  description: "A fixed 14-day build of your paid acquisition system: offer, VSL or webinar funnel, ads, sales process and tracking.",
};

export default function Page() {
  return (
    <>
      <PageHero {...p.hero}>
        <Button href={`${site.bookUrl}?engagement=launch`}>Apply for Launch</Button>
        <Button href="#plan" variant="ghost">
          See the 14 days
        </Button>
      </PageHero>

      <Block>
        <BlockHead index="01" head={p.forWho.head} />
        <Cards items={p.forWho.cards} />
        <Reveal>
          <p className="mt-10 max-w-2xl border-l border-champagne/50 pl-5 text-[15px] leading-relaxed text-dim">{p.forWho.not}</p>
        </Reveal>
      </Block>

      <Block tone="deep">
        <BlockHead index="02" head={p.problem.head} />
        <Table columns={p.problem.columns} rows={p.problem.rows} highlight={2} />
      </Block>

      <Block>
        <BlockHead index="03" head={p.build.head} />
        <DeepList items={p.build.items} />
      </Block>

      <Block id="plan" tone="light">
        <BlockHead index="04" head={p.plan.head} tone="light" />
        <PhasePlan phases={p.plan.phases} tone="light" />
      </Block>

      <Benchmarks index="05" />

      <Block>
        <BlockHead index="06" head={p.inputs.head} />
        <ListColumns columns={p.inputs.columns} />
      </Block>

      <Block tone="deep">
        <BlockHead index="07" head={p.after.head} />
        <ListColumns columns={p.after.columns} />
      </Block>

      <FAQ index="08" items={p.faq} />
      <CTA />
    </>
  );
}
