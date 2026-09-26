import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Benchmarks } from "@/components/Benchmarks";
import { Block, BlockHead, DeepList, ListColumns, PhasePlan, Table } from "@/components/sections";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui";
import { site } from "@/lib/content";
import { operate as p } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Operate",
  description: "Our team runs your paid acquisition end to end: ads, creative, VSL and webinars, content, setters and closers, and reporting.",
};

export default function Page() {
  return (
    <>
      <PageHero {...p.hero}>
        <Button href={`${site.bookUrl}?engagement=operate`}>Apply for Operate</Button>
        <Button href="#rhythm" variant="ghost">
          How it runs
        </Button>
      </PageHero>

      <Block>
        <BlockHead index="01" head={p.problem.head} />
        <Table columns={p.problem.columns} rows={p.problem.rows} highlight={2} />
      </Block>

      <Block tone="deep">
        <BlockHead index="02" head={p.workstreams.head} />
        <DeepList items={p.workstreams.items} />
      </Block>

      <Block tone="light">
        <BlockHead index="03" head={p.team.head} tone="light" />
        <PhasePlan phases={p.team.phases} tone="light" />
      </Block>

      <Block id="rhythm">
        <BlockHead index="04" head={p.rhythm.head} />
        <ListColumns columns={p.rhythm.columns} />
      </Block>

      <Block tone="deep">
        <BlockHead index="05" head={p.first90.head} />
        <PhasePlan phases={p.first90.phases} />
      </Block>

      <Benchmarks index="06" tone="dark" />

      <Block tone="light">
        <BlockHead index="07" head={p.split.head} tone="light" />
        <ListColumns columns={p.split.columns} tone="light" />
      </Block>

      <FAQ index="08" items={p.faq} />
      <CTA />
    </>
  );
}
