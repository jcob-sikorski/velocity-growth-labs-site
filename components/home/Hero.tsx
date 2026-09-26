import { hero, marquee, site } from "@/lib/content";
import { Button } from "../ui";
import { FluidBackground } from "./FluidBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-ink text-fg">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/4 top-1/4 h-[60vh] w-[80vw] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(58,85,255,0.18),transparent)] blur-2xl" />
        <FluidBackground />
        <div className="grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_55%,rgba(5,6,10,0.55),transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-ink" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 flex flex-1 flex-col items-center justify-center pb-16 pt-36 text-center">
        <div className="label flex max-w-[18rem] animate-rise items-center justify-center gap-3 text-center leading-relaxed text-dim sm:max-w-none">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne shadow-[0_0_12px_2px_rgba(205,187,146,0.6)]" />
          {hero.eyebrow}
        </div>

        <h1 className="display mt-10 text-[clamp(3.5rem,11vw,10.5rem)]">
          <span className="text-metal block animate-rise [animation-delay:120ms]">{hero.line1}</span>
          <em className="text-champagne-metal -mb-[0.14em] block animate-rise pb-[0.14em] pr-[0.08em] italic [animation-delay:260ms]">
            {hero.line2}
          </em>
        </h1>

        <p className="mt-10 max-w-xl animate-rise text-[17px] leading-relaxed text-dim [animation-delay:420ms] md:text-lg">
          {hero.sub}
        </p>

        <div className="mt-12 flex animate-rise flex-wrap items-center justify-center gap-3 [animation-delay:560ms]">
          <Button href={site.bookUrl}>{hero.primary}</Button>
          <Button href="#systems" variant="ghost">
            {hero.secondary}
          </Button>
        </div>
      </div>

      {/* Capability marquee */}
      <div className="relative z-10 border-y border-white/[0.06] bg-ink/40 backdrop-blur-sm">
        <div className="overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex items-center">
                {marquee.map((m) => (
                  <span key={m} className="label flex items-center whitespace-nowrap text-dim">
                    <span className="px-8">{m}</span>
                    <span className="h-1 w-1 rounded-full bg-champagne/50" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
