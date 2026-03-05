export interface Industry {
  slug: string;
  name: string;
  heroHeadline: string;
  description: string;
  architectRole: string;
  builderRole: string;
  moneyRole: string;
  operatorRole: string;
}

export const industries: Industry[] = [
  {
    slug: "e-commerce",
    name: "E-Commerce Stores",
    heroHeadline: "Scale Your E-Commerce Store with AI Employees",
    description: "Automate inventory, customer service, and ad scaling. Turn your solo shop into an empire without hiring human staff.",
    architectRole: "Designs high-converting funnels and omnichannel marketing strategies.",
    builderRole: "Builds landing pages, sets up tracking, and optimizes Shopify/WooCommerce.",
    moneyRole: "Tracks ROAS, manages ad budgets, and calculates daily profit margins.",
    operatorRole: "Handles customer support tickets, order fulfillment logic, and inventory alerts."
  },
  {
    slug: "real-estate",
    name: "Real Estate Agents",
    heroHeadline: "Automate Your Real Estate Business with AI",
    description: "Never miss a lead again. Automate your follow-ups, property listings, and appointment scheduling.",
    architectRole: "Maps out local SEO strategies and drip email campaigns for buyers and sellers.",
    builderRole: "Scrapes MLS data and auto-generates beautiful property landing pages.",
    moneyRole: "Tracks commission pipelines, escrow timelines, and marketing ROI.",
    operatorRole: "Qualifies inbound leads via SMS/Email and auto-books showings on your calendar."
  },
  {
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    heroHeadline: "Scale Your Marketing Agency with an AI Team",
    description: "Take on 10x more clients without hiring more staff. Automate reporting, campaign execution, and client onboarding.",
    architectRole: "Creates custom campaign blueprints and multi-platform media plans.",
    builderRole: "Writes ad copy, generates creative assets, and configures campaign setups.",
    moneyRole: "Monitors client ad spend, sends automated invoices, and tracks agency margins.",
    operatorRole: "Generates weekly client reports and manages Slack updates."
  },
  {
    slug: "content-creators",
    name: "Content Creators",
    heroHeadline: "Monetize Your Audience Faster with AI Agents",
    description: "Stop spending hours editing and scheduling. Let AI handle the heavy lifting while you focus on creating.",
    architectRole: "Plans content calendars, researches trending topics, and scripts videos.",
    builderRole: "Edits short-form content, generates thumbnails, and auto-publishes to social media.",
    moneyRole: "Manages sponsor payouts, affiliate revenue, and merch store accounting.",
    operatorRole: "Engages with comments, manages Discord communities, and repurposes old content."
  },
  {
    slug: "saas-founders",
    name: "Solo SaaS Founders",
    heroHeadline: "Grow Your Solo SaaS with AI Employees",
    description: "Write code, crush bugs, and manage subscriptions with a 24/7 AI workforce that never sleeps.",
    architectRole: "Designs system architecture, plans roadmaps, and outlines API structures.",
    builderRole: "Writes boilerplate code, runs test suites, and deploys updates to production.",
    moneyRole: "Tracks MRR/ARR, churn rates, and handles Stripe dispute automation.",
    operatorRole: "Resolves tier 1 support tickets, writes documentation, and monitors server uptime."
  },
  {
    slug: "consultants",
    name: "Independent Consultants",
    heroHeadline: "Automate Your Consulting Practice with AI",
    description: "Focus on delivering value to clients while AI agents handle prospecting, scheduling, and billing.",
    architectRole: "Designs bespoke frameworks and client transformation roadmaps.",
    builderRole: "Creates slide decks, whitepapers, and audits based on your raw notes.",
    moneyRole: "Manages retainer contracts, tracks billable hours, and follows up on unpaid invoices.",
    operatorRole: "Schedules client calls, sends pre-call questionnaires, and transcribes meeting notes."
  },
  {
    slug: "freelance-developers",
    name: "Freelance Developers",
    heroHeadline: "10x Your Freelance Dev Business with AI",
    description: "Take on more projects simultaneously. Let AI agents handle QA, client communication, and invoicing.",
    architectRole: "Translates client requirements into technical specifications and database schemas.",
    builderRole: "Generates frontend components, writes backend logic, and handles CSS styling.",
    moneyRole: "Calculates project profitability, milestones, and sends automated payment reminders.",
    operatorRole: "Provides daily asynchronous standups to clients and manages GitHub issues."
  },
  {
    slug: "online-coaches",
    name: "Online Coaches",
    heroHeadline: "Scale Your Coaching Business with AI Employees",
    description: "Serve hundreds of students without burning out. Automate program delivery, community management, and sales.",
    architectRole: "Designs curriculum structures and automated sales webinar funnels.",
    builderRole: "Builds membership portals, sets up email sequences, and creates worksheets.",
    moneyRole: "Tracks payment plans, manages affiliate payouts, and monitors ad spend.",
    operatorRole: "Answers common student questions, moderates Facebook groups, and tracks student progress."
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
