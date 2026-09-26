import Link from "next/link";
import { site } from "@/lib/content";
import { LOGO } from "./logo-paths";

/**
 * jaxescales lockup — italic "j" monogram in a hairline ring + wordmark,
 * both outlined from Instrument Serif. The j's dot is champagne.
 * Colour follows `currentColor`; standalone files live in /public/brand.
 */
export function LogoSvg({ className = "", mark = true }: { className?: string; mark?: boolean }) {
  return (
    <svg
      viewBox={LOGO.viewBox}
      className={className}
      role="img"
      aria-label={site.name}
      fill="currentColor"
    >
      <defs>
        <linearGradient id="jx-champagne" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe4c8" />
          <stop offset=".55" stopColor="#cdbb92" />
          <stop offset="1" stopColor="#8d8065" />
        </linearGradient>
      </defs>
      <g transform={LOGO.root}>
        {mark && (
          <>
            <circle
              cx={LOGO.ring.cx}
              cy={LOGO.ring.cy}
              r={LOGO.ring.r}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.38}
              strokeWidth={LOGO.ring.strokeWidth}
            />
            <g transform={LOGO.mark.transform}>
              <path d={LOGO.mark.body} />
              <path d={LOGO.mark.accent} fill="url(#jx-champagne)" />
            </g>
          </>
        )}
        <g transform={LOGO.word.transform}>
          <path d={LOGO.word.body} />
          <path d={LOGO.word.accent} fill="url(#jx-champagne)" />
        </g>
      </g>
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex select-none items-center ${dark ? "text-ink" : "text-fg"}`}
    >
      <LogoSvg className="h-7 w-auto md:h-8" />
    </Link>
  );
}
