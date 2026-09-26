// ─────────────────────────────────────────────────────────────
// All site copy lives here. The brand name appears ONLY via
// `site.name` (logo, footer, page titles) — change it once.
// Figures and testimonials marked PLACEHOLDER must be replaced
// with verified, client-approved material before launch.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "jaxescales",
  tagline: "We build and run paid acquisition for high-ticket offers.",
  description:
    "We build and run the full paid acquisition system for offers priced $3,000+: offer and messaging, VSL or webinar funnel, ads, retargeting content, setting, a recruited sales team and ad-to-cash tracking. Live in 14 days.",
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
  eyebrow: "For offers priced $3,000+ per client",
  line1: "Systems that scale",
  line2: "premium offers.",
  sub: "We build and operate the VSL and webinar systems behind high-ticket offers — attracting premium buyers, raising the value of every client and scaling revenue without the chaos. Live in two weeks.",
  primary: "Book a call",
  secondary: "See the systems",
};

export const marquee = [
  "Offer & pricing",
  "Premium messaging",
  "VSL funnels",
  "Weekly & Monthly webinars",
  "Paid ads",
  "Creative testing",
  "Retargeting content",
  "DM setting",
  "Setter & closer hiring",
  "Sales scripts",
  "Ad-to-cash tracking",
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
      meta: "Foundation",
      name: "Offer & message",
      tagline: "The offer premium buyers say yes to.",
      body: "We define who the offer is for, the outcome it promises, the price, the mechanism and the proof. Then we write the message that qualifies on sight: the buyer’s problem in their own words, and clear reasons for the wrong buyer to opt out before they cost you a call.",
      flow: ["Market", "Buyer", "Offer", "Message"],
      points: ["Ideal buyer & buying triggers", "Offer, price & guarantee", "Unique mechanism", "Angle & hook bank for ads"],
    },
    {
      kicker: "System 02",
      meta: "Evergreen",
      name: "VSL call funnel",
      tagline: "One video that qualifies and pre-sells, 24/7.",
      body: "Direct-response ads send cold traffic to one page: headline, VSL, application and calendar on the same step, so applicants don’t drop between the form and the booking. Qualified applicants book. Unqualified ones are routed out before they reach your calendar. Your ad account is fed qualified-call events, so it optimises for buyers, not clicks.",
      flow: ["Ads", "VSL page", "Application", "Booked call"],
      points: ["VSL script with chapters", "One-question application", "Qualified / unqualified routing", "Qualified-call events sent to ads"],
    },
    {
      kicker: "System 03",
      meta: "Live · monthly",
      name: "Webinar system",
      tagline: "Teach once a week / month. Sell to the room.",
      body: "A live monthly webinar, promoted with paid traffic for 14 days. Registrants are scored on sign-up, and the highest-intent get the earliest call slots. The presentation teaches, then pitches a call. A replay, a pop-up session and a final re-pitch catch the buyers who needed another day.",
      flow: ["Ads", "Registration", "Live webinar", "Booked call"],
      points: ["Presentation & pitch script", "Lead scoring & tiered calendars", "Show-up sequences", "Replay, pop-up & re-pitch"],
    },
    {
      kicker: "System 04",
      meta: "Always-on",
      name: "Retargeting content",
      tagline: "Content that makes the call a formality.",
      body: "We turn the founder’s expertise into short- and long-form content and run it as ads to everyone who has watched, applied or booked. By the time a prospect speaks to sales, they’ve seen your thinking many times over, and the call starts with trust instead of scepticism.",
      flow: ["Founder", "Content", "Retargeting", "Call"],
      points: ["Short- & long-form content library", "Retargeting to warm audiences", "Pre-call breakout videos", "Proof & case-study assets"],
    },
    {
      kicker: "System 05",
      meta: "Human layer",
      name: "Setting & sales",
      tagline: "Booked calls, turned into cash.",
      body: "Setters work every inbound DM and application: qualify, confirm and run the pre-call sequence so buyers turn up. Closers run a documented call structure. We recruit, onboard and manage both, so revenue isn’t capped by how many calls the founder can take.",
      flow: ["Lead", "Setter", "Closer", "Cash"],
      points: ["Setter & closer recruitment", "DM setting & qualification", "Pre-call nurture sequence", "Scripts, call reviews & no-show recovery"],
    },
    {
      kicker: "System 06",
      meta: "Visibility",
      name: "Tracking",
      tagline: "Every dollar of spend traced to cash.",
      body: "One view of ad spend, cost per booked call, show rate, close rate and cash collected per call, broken down by campaign, by creative and by rep. Every week starts with the same question: where does the funnel break first? That’s what we fix next.",
      flow: ["Spend", "Calls", "Closes", "Cash"],
      points: ["CRM & pipeline stages", "Ad-to-cash attribution", "Rep-level scorecards", "Weekly constraint review"],
    },
  ],
};

export const engagements = {
  label: "How we work",
  title: "One system.",
  accent: "Two ways in.",
  intro:
    "Launch builds the six systems and takes them live in 14 days. Operate is our team running them every week after: ads, funnel, content, setting, sales management and reporting.",
  items: [
    {
      slug: "launch",
      index: "01",
      range: "0 → 1",
      name: "Launch",
      tagline: "From idea to live offer in two weeks.",
      body: "For new, relaunched or stalled offers. We build the offer, the VSL or webinar funnel, the ads, the sales process and the tracking, then switch traffic on. You leave with a documented, working system, or roll straight into Operate.",
      points: [
        "Offer, pricing & premium messaging",
        "VSL or webinar funnel, built & tracked",
        "Ad creative & campaign launch",
        "Setting & sales scripts",
        "Dashboard, SOPs & handover",
      ],
      meta: "Live in 14 days",
    },
    {
      slug: "operate",
      index: "02",
      range: "1 → n",
      name: "Operate",
      tagline: "We build it and run it. You keep the vision.",
      body: "We take ownership of acquisition, sales operations and reporting — and keep refining until growth is predictable. You keep the vision. We keep it moving.",
      points: [
        "Paid media & creative testing",
        "VSL optimisation & monthly webinars",
        "Retargeting content production",
        "Setter & closer recruitment and management",
        "Weekly scorecard review with Jakub",
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
      body: "We pull your offer, price, cost per call, show rate, close rate and cash per call, and find the first stage where the funnel breaks.",
    },
    {
      name: "Design",
      when: "Days 3–5",
      body: "We choose VSL or webinar, write the offer and message, and set a target for every stage on one scorecard. One offer, one path.",
    },
    {
      name: "Launch",
      when: "Days 6–14",
      body: "Pages, application, ads, sequences and tracking go live. Setters and closers are briefed. Every number is watched daily.",
    },
    {
      name: "Operate",
      when: "Ongoing",
      body: "Weekly reviews, two-week sprints, constant refinement. Simple systems, run properly, compound.",
    },
  ],
};

// Operating targets — sourced from Jeremy Haynes’ published VSL and webinar
// figures. Shown as targets, not promises. VSL and webinar kept separate.
export const benchmarks = {
  label: "Operating targets",
  title: "Two front ends.",
  accent: "Two sets of numbers.",
  intro:
    "A VSL and a webinar convert differently, so we never manage them against the same targets. These are the numbers each system is built and run to hit.",
  groups: [
    {
      name: "VSL call funnel",
      meta: "Evergreen · calls every day",
      items: [
        { value: "3–6%", label: "Page visitors who book a call" },
        { value: "≤ 1", label: "Qualifying question before the calendar" },
        { value: "15+", label: "Retargeting touches between booking and call" },
        { value: "70%+", label: "Booked-call show rate" },
        { value: "20–40%", label: "Close rate on calls held" },
        { value: "3–5×", label: "Return on ad spend" },
      ],
    },
    {
      name: "Webinar system",
      meta: "Live · once a month",
      items: [
        { value: "3–14 days", label: "Paid promotion before each live event" },
        { value: "30%+", label: "Registrants who attend live" },
        { value: "10–15%", label: "Live attendees who book a call" },
        { value: "60–80%", label: "Booked-call show rate" },
        { value: "20–40%", label: "Close rate on calls held" },
        { value: "4–6×", label: "Return on ad spend" },
      ],
    },
  ],
  note: "Targets are operating benchmarks from best-in-class VSL and webinar funnels, not guaranteed outcomes.",
};

// PLACEHOLDER figures — replace with verified numbers.
export const numbers = {
  label: "",
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
    "You sell an offer worth $3,000+ per client",
    "You’ve already closed clients and have results to show",
    "You’re ready to put real budget behind paid traffic",
    "You make decisions quickly and stick to them",
  ],
  no: [
    "You’re looking for a hack or a shortcut",
    "You want one piece, like ads only, not the system",
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
      a: "Anything where one client is worth enough to justify a sales call: typically $3,000 and up. Coaching, consulting, services, programmes and productised expertise.",
    },
    {
      q: "What exactly do you build?",
      a: "Six connected systems: offer and message, a VSL call funnel, a webinar system, retargeting content, setting and sales, and tracking. Most offers run one front end (VSL or webinar); some run both.",
    },
    {
      q: "VSL or webinar: which is right for us?",
      a: "It depends on price point, audience and how much education the buyer needs. A VSL runs evergreen and produces calls every day. A monthly webinar concentrates demand into one event and suits offers that need more teaching. We recommend one in the diagnosis; you approve before we build.",
    },
    {
      q: "Do you run the ads?",
      a: "Yes. Creative, campaign structure, budgets and testing. The ad account is optimised on qualified booked calls, not leads, so spend goes towards buyers.",
    },
    {
      q: "Do you hire our sales team?",
      a: "Yes. We recruit, onboard and manage setters and closers, and give them the scripts, pre-call sequences and call reviews to perform. The team works for your business, not ours.",
    },
    {
      q: "How quickly will we see results?",
      a: "Launches go live within 14 days of kickoff. After the diagnosis you get an honest estimate of cost per call and first sales, before you commit to anything.",
    },
    {
      q: "What do you need from us?",
      a: "A decision-maker, access to your numbers, an ad budget and around two hours a week. Operate clients also record content for the retargeting system. We handle the rest.",
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
  body: "Book a 30-minute call. We’ll look at your cost per call, show rate and close rate, find the first stage that’s breaking, and tell you whether Launch, Operate or neither is the right move.",
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
