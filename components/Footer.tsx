import Link from "next/link";
import { footer, site } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink text-fg">
      <div className="container-page grid gap-14 pb-16 pt-24 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:pt-28">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-dim">{site.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="label mt-8 inline-block text-dim transition-colors hover:text-champagne"
          >
            {site.email}
          </a>
        </div>
        {footer.columns.map((col) => (
          <div key={col.title}>
            <div className="label mb-6 text-faint">{col.title}</div>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-dim transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-page flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] py-8 md:flex-row md:items-center">
        <div className="label text-faint">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-6">
          {footer.socials.map((s) => (
            <a key={s.label} href={s.href} className="label text-faint transition-colors hover:text-fg">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <div className="display -mb-[0.2em] whitespace-nowrap text-center text-[21vw] leading-[0.8] text-white/[0.045]">
          {site.name}
        </div>
      </div>
    </footer>
  );
}
