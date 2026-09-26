import type { Metadata } from "next";
import { ProgrammePage, type Engagement } from "@/components/ProgrammePage";

export const metadata: Metadata = { title: "Launch" };

const p: Engagement = {
  slug: "launch",
  label: "Engagement 01 · 0 → 1",
  title: "Launch.",
  accent: "Live in 14 days.",
  intro:
    "We shape the offer, price it, position it and build the VSL or webinar system that brings premium buyers to your calendar — then we launch it with you, in 14 days.",
  includes: [
    { title: "Offer architecture", body: "What you sell, to whom, at what price, with what promise. Built so the right buyer feels it was made for them." },
    { title: "Positioning & message", body: "The angle and the language that make you the obvious choice — not another option." },
    { title: "VSL or webinar system", body: "Script, structure, pages and application flow for the system that fits your offer best." },
    { title: "Paid acquisition", body: "Campaigns built to attract qualified, premium buyers — not cheap leads." },
    { title: "Sales process", body: "Qualification criteria, call structure, scripts and follow-up that turn booked calls into clients." },
    { title: "Scorecard & reporting", body: "One page of numbers that tells you exactly what’s working, every week." },
  ],
  timeline: [
    { phase: "Diagnose", when: "Days 1–2", body: "Offer, market, numbers and bottlenecks — audited honestly." },
    { phase: "Design", when: "Days 3–4", body: "Offer, message and the VSL or webinar system mapped on one page." },
    { phase: "Build", when: "Days 5–10", body: "Pages, scripts, campaigns, sales process and automations shipped." },
    { phase: "Launch", when: "Days 11–14", body: "Traffic on, calls booked, numbers reviewed daily and tuned." },
  ],
  outcomes: [
    "A priced, positioned offer",
    "A live VSL or webinar system",
    "Qualified calls on the calendar",
    "A sales process that closes",
    "A weekly scorecard",
    "A clear plan to scale",
  ],
  faq: [
    { q: "How long does a launch take?", a: "14 days from kickoff to live traffic. The timeline holds because decisions get made fast — which is why we need a decision-maker involved from day one." },
    { q: "VSL or webinar — who decides?", a: "We recommend one during the diagnosis based on your price point, audience and how much education the buyer needs. You approve before we build." },
    { q: "Do you produce the video?", a: "We write the script and direct the structure. Production can be handled by your team or by production partners we work with." },
    { q: "What happens after launch?", a: "You can take the system in-house with full documentation, or move straight into Operate and let us run it." },
  ],
};

export default function Page() {
  return <ProgrammePage p={p} />;
}
