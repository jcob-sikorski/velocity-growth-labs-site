import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Manifesto } from "@/components/home/About";
import { Principles } from "@/components/home/Principles";
import { Process } from "@/components/home/Process";
import { Block, BlockHead, Cards, Chains, Prose, Table } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui";
import { site } from "@/lib/content";
import { approach as p } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Approach",
  description: "How we build and run paid acquisition for high-ticket offers: one pipeline, a target for every stage, fix the earliest break.",
};

export default function Page() {
  return (
    <>
      <PageHero {...p.hero}>
        <Button href={site.bookUrl}>Book a call</Button>
        <Button href="#numbers" variant="ghost">
          See the numbers
        </Button>
      </PageHero>
      <Manifesto />
      <Principles />

      <Block tone="deep">
        <BlockHead index="03" head={p.whole.head} />
        <Prose statement={p.whole.statement} paragraphs={p.whole.paragraphs} />
      </Block>

      <Block id="numbers">
        <BlockHead index="04" head={p.numbers.head} />
        <Chains chains={p.numbers.chains} />
        <p className="label mt-8 leading-relaxed text-faint">{p.numbers.note}</p>
      </Block>

      <Block tone="light">
        <BlockHead index="05" head={p.decide.head} tone="light" />
        <Table columns={p.decide.columns} rows={p.decide.rows} tone="light" />
        <Reveal>
          <p className="mt-10 max-w-2xl border-l border-ink/30 pl-5 text-[15px] leading-relaxed text-stone">{p.decide.note}</p>
        </Reveal>
      </Block>

      <Block tone="deep">
        <BlockHead index="06" head={p.constraint.head} />
        <Table columns={p.constraint.columns} rows={p.constraint.rows} highlight={2} />
      </Block>

      <Block tone="light">
        <BlockHead index="07" head={p.different.head} tone="light" />
        <Cards items={p.different.cards} tone="light" />
      </Block>

      <Process index="08" />
      <CTA />
    </>
  );
}
