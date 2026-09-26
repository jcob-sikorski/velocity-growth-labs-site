import { cta, site } from "@/lib/content";
import { FluidBackground } from "./home/FluidBackground";
import { Button, TextLink } from "./ui";

/** Closing call-to-action — reprises the fluid hero background. */
export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-fg">
      <div className="container-page pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08]">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <FluidBackground />
            <div className="grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(5,6,10,0.5),transparent_80%)]" />
          </div>
          <div className="relative px-6 py-24 text-center md:px-16 md:py-36">
            <div className="label flex items-center justify-center gap-3 text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              {cta.label}
            </div>
            <h2 className="display mt-10 text-[clamp(4rem,12vw,11rem)]">
              <span className="text-metal">{cta.title} </span>
              <em className="text-champagne-metal pr-[0.08em] italic">{cta.accent}</em>
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-[17px] leading-relaxed text-dim md:text-lg">{cta.body}</p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <Button href={site.bookUrl}>{cta.button}</Button>
              <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
