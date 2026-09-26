// ─────────────────────────────────────────────────────────────
// Long-form copy for the inner pages: /launch, /operate, /approach.
// Rendered with the blocks in components/sections.tsx.
// ─────────────────────────────────────────────────────────────

/* ══ LAUNCH ═══════════════════════════════════════════════ */

export const launch = {
  hero: {
    label: "Engagement 01 · 0 → 1 · 14 days",
    title: "Launch.",
    accent: "Live in 14 days.",
    intro:
      "A fixed 14-day build. We take your offer from where it is today to a live paid acquisition system: a priced and positioned offer, a VSL or webinar funnel, ads running on it, a setting and sales process, and a scorecard that tracks every stage from ad spend to cash. On day 14 traffic is on and qualified calls start landing on your calendar.",
  },

  forWho: {
    head: {
      label: "Who Launch is for",
      title: "Offers that work,",
      accent: "but don’t scale yet.",
      intro:
        "Launch is for founders who have already proven they can deliver a result. What’s missing is a way to sell it to strangers, every day, at a price that reflects its value.",
    },
    cards: [
      {
        title: "Proven, not packaged",
        body: "You’ve delivered results one-to-one or through referrals. Now you want an offer with a clear price, promise and buyer that can be sold to cold traffic.",
      },
      {
        title: "Capped by referrals",
        body: "The offer sells when people hear about you. Revenue rises and falls with your network, your content schedule and your own time on calls.",
      },
      {
        title: "The funnel that almost worked",
        body: "You’ve run ads before. The leads came in cheap and unqualified, calls didn’t show, and nobody could tell you which part was broken.",
      },
    ],
    not: "Launch isn’t for offers that have never sold. We need paying clients and results we can point to, because the funnel is built from them.",
  },

  problem: {
    head: {
      label: "Why launches stall",
      title: "It’s rarely one thing.",
      accent: "It’s the gaps between them.",
      intro:
        "A launch has six moving parts. When different people build each one, every handover leaks. These are the leaks we design out before a dollar is spent.",
    },
    columns: ["The leak", "What it costs you", "How Launch builds it instead"],
    rows: [
      [
        "Ads optimised for leads",
        "The platform finds people who fill in forms, not people who buy. Cost per lead looks great; cost per qualified call doesn’t.",
        "Qualified-call events are sent back to the ad account from day one, so it optimises towards buyers.",
      ],
      [
        "Application and calendar on separate pages",
        "Roughly half of applicants can drop between the form and the booking step.",
        "Application and calendar sit on the same step, with drop-off held to 20% or less.",
      ],
      [
        "Long applications",
        "Every extra question raises the cost of a booked call. Long forms can cost several times more per call than short ones.",
        "One qualifying question, then straight to the calendar. Everything else is asked on the call.",
      ],
      [
        "Silence between booking and call",
        "Calls booked days out go cold. Buyers forget, doubt creeps in, show rate drops.",
        "A pre-call sequence of email, SMS, breakout videos and setter confirmation, with the call booked 2–3 days out.",
      ],
      [
        "No stage-by-stage tracking",
        "Nobody can say whether to fix the ad, the page, the follow-up or the call, so everything gets changed at once.",
        "One scorecard from spend to cash, with a target for every stage, live before traffic goes on.",
      ],
    ],
  },

  build: {
    head: {
      label: "What we build",
      title: "Six deliverables.",
      accent: "Each one signed off.",
      intro:
        "Every deliverable has a defined scope and a finish line. You approve each one before the next depends on it.",
    },
    items: [
      {
        title: "Offer & pricing",
        body: "The offer is the single biggest lever on cost per call, show rate and close rate. We build it before anything else.",
        bullets: [
          "Ideal buyer profile: situation, trigger event, budget, objections",
          "The outcome, timeframe and mechanism the offer promises",
          "Delivery format and what the client actually receives",
          "Price, payment options and guarantee or risk-reversal terms",
          "Qualification criteria: who you will not take on",
        ],
        foot: { label: "Done when", text: "the whole offer fits on one page and you’ve signed it off." },
      },
      {
        title: "Premium messaging",
        body: "Premium buyers decide on specifics. We write the message from what your buyers actually say, not what sounds good in a brainstorm.",
        bullets: [
          "Research from your sales calls, client results and reviews",
          "The core angle: why this offer, why you, why now",
          "A hook bank for ads, pages and the VSL or webinar",
          "An objection map, with each answer placed in the funnel before the call",
        ],
        foot: { label: "Done when", text: "every ad, page and script draws from one approved message document." },
      },
      {
        title: "VSL or webinar funnel",
        body: "One front end, chosen in the diagnosis based on your price point and how much teaching the buyer needs. Some offers get both.",
        bullets: [
          "VSL: script with chapters, one page with headline, video, application and calendar, qualified / unqualified routing, confirmation page with breakout videos",
          "Webinar: 90-minute presentation that teaches for about 60 minutes then pitches a call, registration and confirmation pages, lead scoring, tiered calendars, show-up sequence, replay, pop-up session and re-pitch",
          "Recording directed by us; filmed by your team or our production partners",
        ],
        foot: { label: "Done when", text: "the funnel is live and tested end to end, from ad click to booked call in your CRM." },
      },
      {
        title: "Paid acquisition",
        body: "Ads built to attract buyers who can afford the offer, and an account that learns from qualified calls instead of form fills.",
        bullets: [
          "Ad account, pixel and Conversions API audit and setup",
          "Application, qualified and booked-call events sent back to the platform",
          "First batch of direct-response creative: talking-head scripts and statics",
          "Campaign structure for testing and scaling, plus launch budget plan",
          "Retargeting audiences for viewers, applicants and booked leads",
        ],
        foot: { label: "Done when", text: "campaigns are approved and spending, and qualified-call events show in the ad account." },
      },
      {
        title: "Setting & sales process",
        body: "A booked call is only worth something if it shows and closes. The process around the call is built with the same care as the funnel.",
        bullets: [
          "Setter scripts for inbound DMs, applications and call confirmation",
          "Pre-call sequence: email, SMS and breakout videos between booking and call",
          "Closing call structure with objection handling",
          "No-show recovery and post-call follow-up",
          "Role profiles and scorecards for setters and closers",
        ],
        foot: { label: "Done when", text: "whoever takes the calls has the scripts, the sequence is live and no-shows are followed up automatically." },
      },
      {
        title: "Tracking & scorecard",
        body: "You should never have to ask how the launch is going. The numbers are visible every morning.",
        bullets: [
          "CRM pipeline: applied, qualified, booked, showed, closed, cash collected",
          "Source tracking down to campaign and creative",
          "One scorecard with a target for every stage",
          "Daily numbers review during launch week",
        ],
        foot: { label: "Done when", text: "you can see yesterday’s cost per booked call, show rate and cash collected without asking anyone." },
      },
    ],
  },

  plan: {
    head: {
      label: "The 14 days",
      title: "Day by day.",
      accent: "No black box.",
      intro:
        "The timeline holds because every phase ends with a sign-off and a named output. Here is exactly what happens, what you get and what we need from you.",
    },
    phases: [
      {
        when: "Days 1–2",
        name: "Diagnose",
        body: "We find out what’s true about the offer today, before deciding what to build.",
        tasks: [
          "90-minute kickoff with the decision-maker",
          "Access to ad account, CRM, calendar and analytics",
          "Review of recorded sales calls, sales data and client results",
          "Every existing funnel stage audited against target",
        ],
        output: "A diagnosis: the offer’s current numbers, the first place the funnel breaks, a VSL-or-webinar recommendation and a recommended launch ad budget.",
        you: "Kickoff call, access, and your best client results and call recordings.",
      },
      {
        when: "Days 3–5",
        name: "Design",
        body: "Everything that gets built is decided on paper first, so the build has no guesswork.",
        tasks: [
          "Offer and pricing finalised",
          "Message document and hook bank written",
          "Funnel map: every page, step, sequence and routing rule",
          "Scorecard targets set for every stage",
          "Creative briefs for the first batch of ads",
        ],
        output: "One-page offer, message document, funnel map and scorecard, ready for your sign-off.",
        you: "One review session and sign-off within a working day.",
      },
      {
        when: "Days 6–11",
        name: "Build",
        body: "Scripts, pages, ads, automations and tracking are built in parallel against the approved design.",
        tasks: [
          "VSL or webinar script written; recording directed",
          "Pages, application, routing and calendar built",
          "CRM stages, automations and pre-call sequence set up",
          "Ad creative produced and campaigns built",
          "Setter and closer scripts written",
        ],
        output: "The full funnel on a staging link, tested end to end with test leads.",
        you: "Recording day for the VSL or webinar, plus ad creative footage.",
      },
      {
        when: "Days 12–14",
        name: "Launch",
        body: "Traffic goes on. For the first days, every number is watched daily and tuned.",
        tasks: [
          "Campaigns switched on",
          "Daily review of spend, applications, booked calls and shows",
          "First fixes to creative, page and sequence",
          "Whoever takes calls is briefed on scripts and the scorecard",
        ],
        output: "Live traffic, the first qualified calls on your calendar and a launch-week scorecard.",
        you: "Take, or have your closer take, the first calls.",
      },
    ],
  },

  inputs: {
    head: {
      label: "What we need from you",
      title: "Two hours a week.",
      accent: "And fast decisions.",
      intro: "We do the building. These are the things only you can provide.",
    },
    columns: [
      {
        title: "Decisions",
        meta: "Critical",
        items: ["One decision-maker on every call", "Sign-offs within a working day", "Final say on offer and price"],
      },
      {
        title: "Access & proof",
        meta: "Day 1",
        items: ["Ad account, CRM, calendar and analytics", "Client results, testimonials and case studies", "Recorded sales calls, if you have them"],
      },
      {
        title: "Time & budget",
        meta: "Days 1–14",
        items: ["About two hours a week plus kickoff", "One recording day", "Ad spend, paid directly to the platforms"],
      },
    ],
  },

  after: {
    head: {
      label: "After day 14",
      title: "Two ways",
      accent: "to keep it running.",
      intro: "The system is yours either way. The only question is who runs it.",
    },
    columns: [
      {
        title: "Run it in-house",
        meta: "Handover",
        items: [
          "SOPs for every system",
          "All scripts, sequences and creative briefs",
          "The scorecard and how to read it",
          "Full ownership of accounts, pages and assets",
        ],
      },
      {
        title: "Move into Operate",
        meta: "We run it",
        items: [
          "Our team takes over ads, funnel, content and reporting",
          "We recruit and manage your setters and closers",
          "Two-week sprints against the same scorecard",
          "Direct access to Jakub",
        ],
      },
    ],
  },

  faq: [
    {
      q: "How long does a launch take?",
      a: "14 days from kickoff to live traffic. The timeline holds because decisions get made fast, which is why we need a decision-maker involved from day one.",
    },
    {
      q: "VSL or webinar: who decides?",
      a: "We recommend one during the diagnosis based on your price point, audience and how much education the buyer needs. You approve before we build.",
    },
    {
      q: "Do you produce the video?",
      a: "We write the script and direct the recording. Filming can be done by your team or by production partners we work with.",
    },
    {
      q: "Is ad spend included?",
      a: "No. Ad spend is paid by you, directly to the platforms. The diagnosis ends with the budget we recommend for the launch.",
    },
    {
      q: "Who takes the sales calls during launch?",
      a: "You or your existing closer. If you don’t have a sales team, we start recruiting setters and closers when you move into Operate.",
    },
    {
      q: "What happens after launch?",
      a: "You take the system in-house with the SOPs, scripts and scorecard, or move straight into Operate and we run and scale it.",
    },
  ],
};

/* ══ OPERATE ══════════════════════════════════════════════ */

export const operate = {
  hero: {
    label: "Engagement 02 · 1 → n · Ongoing",
    title: "Operate.",
    accent: "We run the pipeline.",
    intro:
      "Our senior team runs your whole paid acquisition system as one unit: media buying, creative, the VSL and monthly webinars, retargeting content, setters and closers, and reporting. We work in two-week sprints against a stage-by-stage scorecard, and you work directly with Jakub. You keep the vision and the delivery. We own the path from first ad to cash collected.",
  },

  problem: {
    head: {
      label: "The problem Operate solves",
      title: "Five vendors.",
      accent: "No owner.",
      intro:
        "By the time an offer sells well, most founders are managing a media buyer, a funnel builder, an editor, a sales manager and a spreadsheet. Each reports their own number. Ads look fine, calls look fine, and revenue doesn’t move.",
    },
    columns: ["", "The usual setup", "Operate"],
    rows: [
      ["Ads", "The media buyer reports cost per lead.", "We report cost per qualified call and cash collected per call."],
      ["Funnel", "Built once, then left alone.", "VSL, application and routing improved every sprint against play rate, booking rate and drop-off."],
      ["Sales team", "Hired by the founder, managed by nobody.", "Setters and closers recruited, onboarded, scored and coached by us."],
      ["Content", "Made when the founder has time.", "Retargeting content produced on a schedule from one recording session a month."],
      ["Reporting", "A monthly deck of vanity metrics.", "A weekly scorecard, one named constraint and the fix for it."],
    ],
  },

  workstreams: {
    head: {
      label: "What we run",
      title: "Six workstreams.",
      accent: "One scorecard.",
      intro: "Each workstream has a clear scope and is measured on the numbers it controls. All of them roll up into cash collected.",
    },
    items: [
      {
        title: "Paid media",
        body: "Budgets, campaign structure, audiences and scaling. Spend moves towards what produces qualified calls, not cheap clicks.",
        bullets: [
          "Qualified-call events fed back to the ad platform",
          "Budget shifted into winning campaigns every sprint",
          "Retargeting to viewers, applicants and booked leads",
        ],
        foot: { label: "Measured on", text: "cost per application, cost per qualified booked call, return on ad spend." },
      },
      {
        title: "Creative",
        body: "Ads fatigue. A steady supply of new hooks, scripts and formats is what keeps cost per call from creeping up.",
        bullets: [
          "New creative batch every two-week sprint",
          "Talking-head scripts, statics and founder-led cuts",
          "Winning angles fed back into the VSL and webinar",
        ],
        foot: { label: "Measured on", text: "hook rate, click-through rate and cost per qualified call, per creative." },
      },
      {
        title: "VSL & monthly webinars",
        body: "The front end is never finished. We test it continuously and, for webinar offers, produce one live event every month.",
        bullets: [
          "VSL: chapter and opening tests, application and routing improvements",
          "Webinar: 14-day promotion, lead scoring, tiered calendars, live pitch",
          "Webinar follow-up: replay, pop-up session and final re-pitch",
        ],
        foot: {
          label: "Measured on",
          text: "VSL play rate, visitor-to-booked rate, application drop-off; webinar attendance, viewers at the pitch, bookings.",
        },
      },
      {
        title: "Retargeting content",
        body: "Prospects who see your thinking many times before the call show up warmer and close faster. We make that happen on a schedule.",
        bullets: [
          "One recording session with you each month",
          "Edited into short- and long-form pieces and pre-call breakout videos",
          "Building towards a library of 30–50 short and 15–30 long pieces",
        ],
        foot: { label: "Measured on", text: "content touches per booked lead (target 15+) and booked-call show rate." },
      },
      {
        title: "Setting & sales team",
        body: "We recruit, onboard and manage the setters and closers who turn booked calls into cash, so revenue isn’t capped by your calendar.",
        bullets: [
          "Recruitment against a written role profile and scorecard",
          "Onboarding on the offer, scripts and CRM",
          "Daily reporting, weekly call reviews and coaching",
          "Capacity planned so no closer carries more than eight calls a day",
        ],
        foot: { label: "Measured on", text: "speed to lead, show rate, close rate and cash collected per call, per rep." },
      },
      {
        title: "Tracking & reporting",
        body: "One source of truth from spend to cash, kept clean every week so decisions are made on numbers, not impressions.",
        bullets: [
          "CRM hygiene and pipeline stages enforced",
          "Attribution from campaign and creative to cash",
          "Weekly scorecard with targets and owners",
        ],
        foot: { label: "Measured on", text: "cash collected per booked call: the number everything else rolls up into." },
      },
    ],
  },

  team: {
    head: {
      label: "Your sales team",
      title: "Hired, trained",
      accent: "and managed by us.",
      intro:
        "The most common ceiling on a high-ticket offer is the founder’s own calendar. We replace it with a sales team that works for your business and is run by ours.",
    },
    phases: [
      {
        when: "Step 1",
        name: "Define",
        body: "We write the role before we look for the person.",
        tasks: ["Setter and closer role profiles", "Scorecard for each role: activity and outcome targets", "Compensation structure agreed with you"],
        output: "Role profiles, scorecards and a compensation plan you’ve approved.",
        you: "Approve the roles and compensation.",
      },
      {
        when: "Step 2",
        name: "Recruit",
        body: "Candidates are tested on the job they’ll actually do.",
        tasks: ["Sourcing and screening", "Interviews with live role-play on your offer", "Final shortlist presented to you"],
        output: "Setters and closers selected for your offer.",
        you: "Meet the final shortlist, if you want to.",
      },
      {
        when: "Step 3",
        name: "Onboard",
        body: "Nobody takes a call before they can explain the offer as well as you can.",
        tasks: ["Training on the offer, buyer and objection map", "Scripts, CRM and reporting setup", "Shadowing and reviewed practice calls"],
        output: "A team ready to take calls on your calendar.",
      },
      {
        when: "Ongoing",
        name: "Manage",
        body: "Performance is reviewed every week, not when something breaks.",
        tasks: ["Daily end-of-day reports", "Weekly call reviews and coaching", "Rep-level scorecards", "Underperformers retrained or replaced"],
        output: "Show and close rates managed against target, rep by rep.",
      },
    ],
  },

  rhythm: {
    head: {
      label: "The operating rhythm",
      title: "Every day, week,",
      accent: "sprint and month.",
      intro: "Nothing waits for a monthly report. Each cadence has a fixed agenda and a fixed output.",
    },
    columns: [
      {
        title: "Daily",
        meta: "Watch",
        items: ["Spend, applications, booked calls and shows checked", "Setter and closer end-of-day reports", "Anything off-target flagged the same day"],
      },
      {
        title: "Weekly",
        meta: "Monday",
        items: ["Scorecard review against targets", "This week’s constraint, actions and owners", "Creative results and sales call reviews"],
      },
      {
        title: "Every two weeks",
        meta: "Sprint",
        items: ["Strategy session with Jakub", "Sprint plan: what we test, fix and scale", "New creative batch and funnel tests shipped"],
      },
      {
        title: "Monthly",
        meta: "Cycle",
        items: ["Live webinar, for webinar offers", "Content recording session with you", "Month-end review of revenue and cash collected"],
      },
    ],
  },

  first90: {
    head: {
      label: "The first 90 days",
      title: "Stabilise, build,",
      accent: "then scale.",
      intro: "Scaling a leaking system only makes it leak faster. The first 90 days follow a fixed order.",
    },
    phases: [
      {
        when: "Days 1–14",
        name: "Stabilise",
        body: "We take over what exists and fix the leaks before adding spend.",
        tasks: [
          "Access and audit of every stage against target",
          "Tracking and CRM stages fixed",
          "Application, routing and pre-call sequence repaired",
          "Sprint 1 plan built around the first constraint",
        ],
        output: "A clean scorecard you can trust and a funnel that no longer leaks at the obvious points.",
        you: "Access, a kickoff session and your first content recording.",
      },
      {
        when: "Days 15–45",
        name: "Build",
        body: "The engines that keep the system running are put in place.",
        tasks: [
          "Setter and closer recruitment where capacity is short",
          "Creative testing cadence running every sprint",
          "Retargeting content in rotation",
          "First monthly webinar promoted and run, for webinar offers",
        ],
        output: "A sales team in place, a creative pipeline and content running to warm audiences.",
        you: "Weekly review and a monthly recording session.",
      },
      {
        when: "Days 46–90",
        name: "Scale",
        body: "With the stages holding target, spend goes up.",
        tasks: [
          "Budget increased on proven campaigns",
          "Second creative and content cycle",
          "Sales team at planned capacity",
          "Next constraint identified and fixed",
        ],
        output: "More qualified calls at a known cost, and a weekly scorecard that holds.",
      },
    ],
  },

  split: {
    head: {
      label: "Who owns what",
      title: "You keep the vision.",
      accent: "We keep it moving.",
      intro: "Clear lines, so nothing falls between us.",
    },
    columns: [
      {
        title: "We own",
        meta: "Our team",
        items: [
          "Ads, creative and budgets",
          "VSL, webinars, pages and sequences",
          "Content editing and retargeting",
          "Recruiting and managing setters and closers",
          "Tracking, reporting and the weekly scorecard",
        ],
      },
      {
        title: "You own",
        meta: "Your business",
        items: [
          "Delivery and client results",
          "Final say on offer and price",
          "One content recording session a month",
          "Ad spend and your sales team’s pay",
          "A weekly review and fast decisions",
        ],
      },
    ],
  },

  faq: [
    {
      q: "Do we need to have done Launch first?",
      a: "No. Operate is for offers that already sell. We start with a two-week stabilise phase to see what we’re inheriting, stage by stage.",
    },
    {
      q: "How involved do we need to be?",
      a: "A weekly review, a strategy session every two weeks, one content recording session a month and fast decisions. We run the day-to-day.",
    },
    {
      q: "Who pays the setters and closers?",
      a: "They work for your business, so they’re paid by your business. We handle recruiting, onboarding, scripts and day-to-day management.",
    },
    {
      q: "Can we keep our existing sales team?",
      a: "Yes. We onboard them onto the scripts, reporting and scorecards, and recruit only where there’s a gap in capacity or performance.",
    },
    {
      q: "Is there a minimum commitment?",
      a: "We work in two-week sprints, each one planned and reviewed with you. Details are covered on the first call.",
    },
    {
      q: "Who will we work with?",
      a: "Jakub on strategy, plus the specialists running media, creative, funnel, content and sales management.",
    },
  ],
};

/* ══ APPROACH ═════════════════════════════════════════════ */

export const approach = {
  hero: {
    label: "Approach",
    title: "Less, done",
    accent: "properly.",
    intro:
      "Our method fits on one page. Build the six systems as one pipeline. Give every stage a target. Fix the earliest stage that’s broken. Repeat every week. Here is how that works, and why it produces calls that close instead of leads that don’t.",
  },

  whole: {
    head: { label: "One pipeline", title: "Buyers don’t see", accent: "your org chart." },
    statement:
      "A buyer experiences one journey: an ad, a video, a form, a message from a setter, a call. If any step breaks, the whole journey breaks.",
    paragraphs: [
      "That’s why we don’t sell pieces. An ad buyer can’t fix a close rate. A sales trainer can’t fix an application that loses half its applicants before they book. A funnel builder can’t fix an offer the market doesn’t want.",
      "We build and run the offer, the front end, the ads, the content, the sales team and the tracking as one system, owned by one team and measured on one number: cash collected per booked call.",
    ],
  },

  numbers: {
    head: {
      label: "The pipeline as numbers",
      title: "Every stage",
      accent: "has a target.",
      intro:
        "A VSL and a webinar turn traffic into calls in different ways, so each has its own chain of stages and targets. The example column shows what the targets produce.",
    },
    chains: [
      {
        name: "VSL call funnel",
        meta: "Per 1,000 page visitors",
        stages: [
          { stage: "Book a qualified call", target: "3–6%", example: "45" },
          { stage: "Show up to the call", target: "70%+", example: "32" },
          { stage: "Close", target: "20–40%", example: "10" },
        ],
        result: "1,000 visitors at target rates: about 45 booked calls, 32 held and 10 new clients. At $5,000 per client, that is $50,000 in sales.",
      },
      {
        name: "Webinar system",
        meta: "Per 1,000 registrants",
        stages: [
          { stage: "Attend live", target: "30%+", example: "300" },
          { stage: "Book a call (of attendees)", target: "10–15%", example: "38" },
          { stage: "Show up to the call", target: "60–80%", example: "27" },
          { stage: "Close", target: "20–40%", example: "8" },
        ],
        result: "1,000 registrants at target rates: about 38 booked calls, 27 held and 8 new clients from one live event. At $5,000 per client, that is $40,000 in sales.",
      },
    ],
    note: "Worked examples use the middle of each range, or the floor where the target is a minimum. They illustrate the maths, not a forecast for your offer.",
  },

  decide: {
    head: {
      label: "VSL or webinar",
      title: "How we choose",
      accent: "the front end.",
      intro: "Neither is better in general. One is better for your offer, audience and cash flow. We decide in the diagnosis, on these criteria.",
    },
    columns: ["", "VSL call funnel", "Webinar system"],
    rows: [
      ["Rhythm", "Always on. Calls every day.", "One live event a month, promoted for 14 days."],
      ["Cash flow", "Steady and daily.", "Concentrated in the days after each event."],
      ["Risk & budget", "Lower. Testable on a smaller daily budget.", "Higher. Each event’s promotion budget is spent up front."],
      ["Best for", "Offers a buyer can understand from one video.", "Offers that need teaching, or buyers who decide after seeing you live."],
      ["Sales team load", "A steady flow of calls every day.", "A peak of calls in the days after each event."],
      ["Target return on ad spend", "3–5×", "4–6×"],
    ],
    note: "Many offers end up running both: a VSL for daily call flow and a monthly webinar for spikes of demand.",
  },

  constraint: {
    head: {
      label: "Fix the earliest break",
      title: "Symptom, cause,",
      accent: "fix.",
      intro:
        "Every stage inherits the problems of the stages before it. So each week we find the earliest stage below target and fix that first. These are the patterns we see most.",
    },
    columns: ["Symptom", "Usual cause", "What we do"],
    rows: [
      ["Cheap leads, few qualified", "Ads optimised on leads; hooks that don’t filter.", "Optimise on qualified-call events; put qualifiers into the hook."],
      ["Plenty of plays, few applications", "The VSL hasn’t earned the ask.", "Rework the opening and chapters; move the call to action."],
      ["Applicants don’t book", "Form and calendar on separate steps, or too many questions.", "Merge the steps; cut to one qualifying question."],
      ["Booked calls don’t show", "Silence between booking and call; calls booked too far out.", "Pre-call sequence, breakout videos, setter confirmation, 2–3 day window."],
      ["Calls held, few closes", "Wrong buyers on the calendar, or a weak call structure.", "Tighten qualification; weekly call reviews and coaching."],
      ["Closes, but low cash", "Price, payment terms or offer structure.", "Review the offer, price and payment options."],
    ],
  },

  different: {
    head: { label: "How we’re different", title: "What you won’t", accent: "get from an agency." },
    cards: [
      { title: "One owner, end to end", body: "Ads, funnel, content, sales team and tracking run by one team, so nobody can blame the stage before theirs." },
      { title: "We build your sales team", body: "Setters and closers recruited, onboarded and managed by us. Booked calls turn into cash without the founder on every call." },
      { title: "We stay after launch", body: "Launching is the easy part. We’re built to operate, so the system keeps working after launch week." },
      { title: "Senior people only", body: "The people on your first call are the people doing the work. No hand-offs to juniors." },
      { title: "One offer at a time", body: "Focus is a strategy. We make one offer work before anyone adds a second." },
      { title: "Numbers every week", body: "A scorecard every Monday: what’s working, what isn’t and what we’re changing next." },
    ],
  },
};
