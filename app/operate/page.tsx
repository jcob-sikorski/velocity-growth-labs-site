import type { Metadata } from "next";
import { ProgrammePage, type Engagement } from "@/components/ProgrammePage";

export const metadata: Metadata = { title: "Operate" };

const p: Engagement = {
  slug: "operate",
  label: "Engagement 02 · 1 → n",
  title: "Operate.",
  accent: "We run the engine.",
  intro:
    "A senior team that owns acquisition, sales operations and reporting for your high-ticket offer — and keeps refining it, week after week, until growth is predictable.",
  includes: [
    { title: "VSL & webinar operations", body: "We run, test and improve the systems that bring premium buyers in — creative, pages, sequences and shows." },
    { title: "Paid media management", body: "Budgets, creative testing and scaling handled by people who answer to revenue, not clicks." },
    { title: "Sales operations", body: "CRM, lead routing, call quality reviews, follow-up and no-show recovery." },
    { title: "Weekly performance reviews", body: "Every Monday: the numbers, what changed, what we’re doing next. No fluff." },
    { title: "Delivery & retention systems", body: "Onboarding and retention loops that protect margin and create referrals." },
    { title: "Direct partner access", body: "Strategy sessions with the partners every two weeks. Senior thinking, not account managers." },
  ],
  timeline: [
    { phase: "Onboard", when: "Days 1–3", body: "Access, audit and a two-week sprint plan built around your numbers." },
    { phase: "Stabilise", when: "Days 4–7", body: "Fix the leaks. Tighten the funnel, the follow-up and the tracking." },
    { phase: "Scale", when: "Days 8–14", body: "Increase spend on what works. Cut what doesn’t." },
    { phase: "Compound", when: "Ongoing", body: "Weekly reviews, a fresh plan every two weeks, steady refinement." },
  ],
  outcomes: [
    "Predictable qualified pipeline",
    "Higher show and close rates",
    "Lower cost per acquisition",
    "A team you don’t have to manage",
    "Numbers you trust",
    "Time back for the vision",
  ],
  faq: [
    { q: "Do we need to have done Launch first?", a: "No. Operate is for offers that already sell. We’ll start with a short diagnosis to see what we’re inheriting." },
    { q: "How involved do we need to be?", a: "A weekly review and fast decisions. We run the day-to-day." },
    { q: "Is there a minimum commitment?", a: "We work in two-week sprints, each one planned and reviewed with you. Details are covered on the first call." },
    { q: "Who will we work with?", a: "A small senior team with a dedicated lead, plus direct access to the partners every two weeks." },
  ],
};

export default function Page() {
  return <ProgrammePage p={p} />;
}
