import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/About";
import { Principles } from "@/components/home/Principles";
import { Systems } from "@/components/home/Engine";
import { Engagements } from "@/components/home/Tiers";
import { Process } from "@/components/home/Process";
import { Fit } from "@/components/home/Fit";
import { Proof } from "@/components/home/Results";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/CTA";
import { Benchmarks } from "@/components/Benchmarks";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Principles />
      <Systems />
      <Engagements />
      <Process />
      <Benchmarks />
      <Fit />
      <Proof />
      <FAQ />
      <CTA />
    </>
  );
}
