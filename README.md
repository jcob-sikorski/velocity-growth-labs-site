# jaxescales — website

Next.js 15 (App Router) + Tailwind CSS v4. Fonts are self-hosted in `app/fonts`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Where things live

- `lib/content.ts` — homepage copy, nav and footer links. The brand name lives only in `site.name`.
- `lib/pages.ts` — long-form copy for `/launch`, `/operate` and `/approach`, rendered with the blocks in `components/sections.tsx`
- `components/Benchmarks.tsx` — VSL and webinar operating targets (data in `lib/content.ts → benchmarks`)
- `app/globals.css` — design tokens (colours, fonts, easing, animations) in the `@theme` block
- `components/home/` — homepage sections
  - `Hero.tsx` + `FluidBackground.tsx` (WebGL liquid background)
  - `About.tsx` → Manifesto (scroll-lit words)
  - `Principles.tsx`, `Engine.tsx` → VSL & webinar systems, `Tiers.tsx` → Launch / Operate,
    `Process.tsx`, `Numbers.tsx`, `Fit.tsx`, `Results.tsx` → Proof, `FAQ.tsx`
- `app/book/page.tsx` — drop your Calendly / Cal.com embed here
- `app/ignition`, `app/escape-velocity`, `app/about` — old routes, now redirects (safe to delete)

## Before launch

- Replace placeholder numbers (`$00M+`, `00%`, `0.0×`) with verified figures
- Replace placeholder testimonials with real, client-approved quotes
- Add your scheduler embed and real social links (`lib/content.ts → footer.socials`)
- Have Privacy and Terms written by counsel
