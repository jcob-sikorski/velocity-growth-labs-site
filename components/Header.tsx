"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Logo } from "./Logo";
import { Arrow } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-premium)] ${
          scrolled || open ? "border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="container-page flex h-[76px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] p-1 backdrop-blur-md md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-[14px] tracking-[-0.01em] transition-colors duration-300 ${
                    active ? "bg-white/[0.08] text-fg" : "text-dim hover:text-fg"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={site.bookUrl}
              className="group hidden items-center gap-2 rounded-full bg-ivory py-2 pl-5 pr-4 text-[14px] font-medium text-ink transition-colors hover:bg-white sm:inline-flex"
            >
              Book a call
              <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-fg transition-all duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px w-5 bg-fg transition-all duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-all duration-700 ease-[var(--ease-premium)] md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="container-page flex h-full flex-col justify-center gap-2 pt-20">
          {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              className={`display border-b border-white/[0.06] py-4 text-5xl transition-all duration-700 ease-[var(--ease-premium)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={site.bookUrl} className="mt-8 rounded-full bg-ivory py-4 text-center font-medium text-ink">
            Book a call
          </Link>
        </nav>
      </div>
    </>
  );
}
