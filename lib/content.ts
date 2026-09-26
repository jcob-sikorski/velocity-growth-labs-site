// ─────────────────────────────────────────────────────────────
// All site copy lives here. The brand name appears ONLY via
// `site.name` (logo, footer, page titles) — change it once.
// Figures and testimonials marked PLACEHOLDER must be replaced
// with verified, client-approved material before launch.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "jaxescales",
  tagline: "We launch and operate high-ticket offers.",
  description:
    "We launch and operate high-ticket offers, using VSL and webinar systems to attract premium, qualified buyers. Boring systems, creativity, information and simplicity.",
  bookUrl: "/book",
  email: "hello@jaxescales.com",
};

export const nav = [
  { label: "Launch", href: "/launch" },
  { label: "Operate", href: "/operate" },
  { label: "Approach", href: "/approach" },
  { label: "Results", href: "/results" },
];

/* ── Home ─────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Acquisition systems for high‑ticket offers",
  line1: "Systems that scale",
  line2: "premium offers.",
  sub: "We build and operate the VSL and webinar systems behind high-ticket offers — attracting premium buyers, raising the value of every client and scaling revenue without the chaos. Live in two weeks.",
  primary: "Book a call",
  secondary: "See the systems",
};

export const marquee = [
  "Offer architecture",
  "Positioning",
  "VSL funnels",
  "Webinar systems",
  "Paid acquisition",
  "Sales systems",
  "Follow-up",
  "Delivery ops",
  "Weekly reporting",
];

export const manifesto = {
  label: "Manifesto",
  // Each string is one paragraph; words light up as you scroll.
  paragraphs: [
    "It’s funny how much pain people put themselves through simply because they don’t think bigger, make poor decisions, or overcomplicate the process.",
    "Another tool. Another funnel hack. Another launch that almost worked.",
    "There’s no flashy tool. No secret way of doing things.",
    "Just boring systems, creativity, information and simplicity — applied with discipline, every single week.",
    "That’s the whole job. It’s the only one we do.",
  ],
  signoff: "Think bigger.",
};

export const principles = {
  label: "What actually works",
  title: "Four things.",
  accent: "Nothing else.",
  items: [
    {
      name: "Boring systems",
      body: "The unglamorous machinery that makes revenue repeatable — pipelines, follow-up, scorecards, weekly reviews. Boring is what scales.",
    },
    {
      name: "Creativity",
      body: "The offer, the angle, the message. The one place you should be radically different, because it’s where buyers decide.",
    },
    {
      name: "Information",
      body: "Decisions made on numbers, not moods. Every stage measured, every week reviewed, nothing left to guesswork.",
    },
    {
      name: "Simplicity",
      body: "Fewer moving parts, fewer tools, fewer excuses. If it can’t be explained on one page, it isn’t ready to launch.",
    },
  ],
};

export const systems = {
  label: "The acquisition engine",
  title: "Premium buyers don’t get chased.",
  accent: "They get convinced.",
  intro:
    "Every offer we run is powered by one of two proven systems. Both do the same job: educate, filter and pre-sell — so the only people on your calendar are qualified, ready and able to buy.",
  items: [
    {
      kicker: "System 01",
      name: "VSL system",
      tagline: "One video. Sells around the clock.",
      body: "A scripted, produced video sales letter that explains the problem, earns belief and makes the case — then routes qualified viewers straight to a sales call.",
      flow: ["Paid traffic", "VSL page", "Application", "Sales call"],
      points: ["Script & story architecture", "Production direction", "Qualification application", "Retargeting & nurture"],
    },
    {
      kicker: "System 02",
      name: "Webinar system",
      tagline: "Teach once. Sell to the room.",
      body: "A live or evergreen webinar that delivers real value, builds authority at scale and converts the right attendees into booked calls or direct enrolments.",
      flow: ["Paid traffic", "Registration", "Webinar", "Sales call"],
      points: ["Webinar structure & slides", "Show-up sequences", "Live or evergreen delivery", "Post-event follow-up"],
    },
  ],
};

export const engagements = {
  label: "How we work",
  title: "We launch it.",
  accent: "Then we run it.",
  intro:
    "Most agencies disappear after launch day. The real work is what comes after — so we stay.",
  items: [
    {
      slug: "launch",
      index: "01",
      range: "0 → 1",
      name: "Launch",
      tagline: "From idea to live offer in two weeks.",
      body: "We shape the offer, price it, position it and build the path from first click to closed deal. You walk away with a proven offer and a system that runs.",
      points: [
        "Offer & pricing architecture",
        "Positioning and messaging",
        "VSL or webinar funnel build",
        "Sales process and scripts",
        "First-cohort launch",
      ],
      meta: "Live in 14 days",
    },
    {
      slug: "operate",
      index: "02",
      range: "1 → n",
      name: "Operate",
      tagline: "A senior team running the whole engine, every week.",
      body: "We take ownership of acquisition, sales operations and reporting — and keep refining until growth is predictable. You keep the vision. We keep it moving.",
      points: [
        "VSL & webinar acquisition at scale",
        "Sales ops, CRM and follow-up",
        "Weekly performance reviews",
        "Delivery & retention systems",
        "Direct partner access",
      ],
      meta: "Ongoing · two-week sprints",
    },
  ],
};

export const process = {
  label: "The process",
  title: "Four steps.",
  accent: "No theatre.",
  steps: [
    {
      name: "Diagnose",
      when: "Days 1–2",
      body: "We audit the offer, the numbers and the bottlenecks. Most problems are obvious once someone honest looks.",
    },
    {
      name: "Design",
      when: "Days 3–5",
      body: "We decide what to build — and, more importantly, what not to. One offer, one path, one scorecard.",
    },
    {
      name: "Launch",
      when: "Days 6–14",
      body: "The VSL or webinar, the campaigns, the sales process and the follow-up go live. Every number is watched daily.",
    },
    {
      name: "Operate",
      when: "Ongoing",
      body: "Weekly reviews, two-week sprints, constant refinement. Simple systems, run properly, compound.",
    },
  ],
};

// PLACEHOLDER figures — replace with verified numbers.
export const numbers = {
  items: [
    { value: "$100K+", label: "Revenue generated for clients" },
    { value: "1", label: "High-ticket offers launched" },
    { value: "73%", label: "Average call show rate" },
    { value: "12.4×", label: "Average return on ad spend" },
  ],
  note: "",
};

export const fit = {
  label: "Is this you?",
  title: "Built for people who already know",
  accent: "it can be bigger.",
  yes: [
    "You sell expertise worth $3,000+ per client",
    "You have proof it works — you just can’t scale it cleanly",
    "You’d rather do one thing properly than ten things badly",
    "You make decisions quickly and stick to them",
  ],
  no: [
    "You’re looking for a hack or a shortcut",
    "You want another tool, not a system",
    "You haven’t sold the offer to anyone yet",
    "You need it all to happen this week",
  ],
};

// PLACEHOLDER testimonials — replace with real, attributable,
// client-approved quotes before publishing.
export const proof = {
  label: "Proof",
  title: "Quiet work.",
  accent: "Loud results.",
  featured: {
    quote:
      "Exceptional from the first week. Jakub delivered a pipeline of pre-qualified leads we now close at 35% — and his team recruited the setters and closers to handle it.",
    name: "Bartłomiej Sikorski",
    role: "Founder, Dochodowe Studio",
  },
  // Add supporting quotes here: { quote, name, role }
  items: [] as { quote: string; name: string; role: string }[],
};

export const faq = {
  label: "Questions",
  items: [
    {
      q: "What counts as a high-ticket offer?",
      a: "Anything where a single client is worth enough to justify a real sales conversation — typically $3,000 and up. Coaching, consulting, services, programmes and productised expertise.",
    },
    {
      q: "VSL or webinar — which is right for us?",
      a: "It depends on the offer, the price point and how much education the buyer needs. We decide during the diagnosis, based on your numbers — and some offers run both.",
    },
    {
      q: "Do you only work on new offers?",
      a: "No. Launch is for new or relaunched offers. Operate is for offers that already sell and need a senior team to run and scale them.",
    },
    {
      q: "How quickly will we see results?",
      a: "Launches go live within 14 days of kickoff. You’ll get an honest estimate of first sales after the diagnosis — before you commit to anything.",
    },
    {
      q: "What do you need from us?",
      a: "A decision-maker, access to your numbers and around two hours a week. We handle the rest.",
    },
    {
      q: "Do you take on everyone?",
      a: "No. We keep a small roster so every client gets senior attention. If we’re not the right fit, we’ll tell you on the first call.",
    },
  ],
};

export const cta = {
  label: "Your move",
  title: "Think",
  accent: "bigger.",
  body: "Book a 30-minute call. We’ll look at your offer, your numbers and your next move — and tell you exactly what we’d do.",
  button: "Book a call",
};

/* ── Footer ───────────────────────────────────────────────── */

export const footer = {
  columns: [
    {
      title: "Engagements",
      links: [
        { label: "Launch", href: "/launch" },
        { label: "Operate", href: "/operate" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Approach", href: "/approach" },
        { label: "Results", href: "/results" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jcob-sikorski/" },
    { label: "X", href: "https://x.com/jaxescales" },
    { label: "YouTube", href: "https://www.youtube.com/@jaxe.scales" },
    { label: "Instagram", href: "https://www.instagram.com/jaxescales" },
  ],
};
