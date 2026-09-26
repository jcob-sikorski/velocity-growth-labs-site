"use client";

import { useEffect, useRef } from "react";
import { manifesto } from "@/lib/content";
import { Label } from "../ui";

/**
 * Manifesto — words brighten one by one as the section scrolls through
 * the viewport. Pure DOM updates (no React re-renders) for smoothness.
 */
export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-w]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      words.forEach((w) => (w.style.opacity = "1"));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top reaches 80% of the viewport, 1 when its bottom reaches 55%
      const start = vh * 0.8;
      const end = vh * 0.55;
      const progress = Math.min(1, Math.max(0, (start - r.top) / (r.height - end + start - vh * 0.25)));
      const lit = progress * words.length;
      words.forEach((w, i) => {
        const o = Math.min(1, Math.max(0, lit - i + 1));
        w.style.opacity = String(0.14 + o * 0.86);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="manifesto" className="relative bg-ink text-fg">
      <div className="container-page py-32 md:py-48">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <Label index="01">{manifesto.label}</Label>
          </div>

          <div ref={ref} className="max-w-4xl space-y-10">
            {manifesto.paragraphs.map((p, pi) => (
              <p
                key={pi}
                className={`display ${
                  pi === 0 ? "text-[clamp(2.2rem,4.6vw,4.4rem)]" : "text-[clamp(1.9rem,3.6vw,3.4rem)]"
                } leading-[1.08]`}
              >
                {p.split(" ").map((w, wi) => (
                  <span key={wi} data-w className="transition-opacity duration-300" style={{ opacity: 0.14 }}>
                    {w}{" "}
                  </span>
                ))}
              </p>
            ))}
            <p className="display pt-6 text-[clamp(3rem,7vw,6.5rem)]">
              <em data-w className="text-champagne-metal italic" style={{ opacity: 0.14 }}>
                {manifesto.signoff}
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
