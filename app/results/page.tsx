import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Numbers } from "@/components/home/Numbers";
import { Proof } from "@/components/home/Results";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Results" };

export default function Page() {
  return (
    <>
      <PageHero
        label="Results"
        title="Outcomes,"
        accent="not activity."
        intro="What our systems have done for the people who trusted us with their offers. Every entry here is real, specific and approved by the client."
      >
        <Button href={site.bookUrl}>Book a call</Button>
      </PageHero>
      <Numbers />
      <Proof index="01" showLink={false} />
      <CTA />
    </>
  );
}
