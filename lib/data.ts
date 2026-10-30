export const languages = [
  { language: "English", level: "Full professional proficiency" },
  { language: "Español", level: "Native or bilingual proficiency" },
  { language: "German", level: "Limited working proficiency" },
];

export const experience = [
  {
    company: "Deep Impact AG",
    role: "Lead Engineer, multiple client projects",
    period: "May 2025 - Sep 2026",
    location: "Winterthur, Zurich, Switzerland",
    body: "Technical lead across several client engagements, covering the full lifecycle from architecture to delivery. Built LLM integrations and turned them into production-ready products. Owned end-to-end delivery on two concurrent projects, coordinating with client stakeholders and managing scope.",
  },
  {
    company: "Paddle",
    role: "Senior Software Engineer",
    period: "Mar 2020 - May 2025",
    location: "Remote",
    body: "Five years on the payments core team at a SaaS billing platform. Designed and shipped the retry and recovery system that reduced failed payment volume by a significant margin. Built payment method integrations with multiple processors and led the migration of a high-traffic checkout flow to a new architecture.",
  },
  {
    company: "TouchNote",
    role: "Senior Backend Developer",
    period: "Apr 2019 - Mar 2020",
    location: "United Kingdom",
    body: "Led a small backend team building a resilient, scalable API. Introduced structured observability with distributed tracing and cut p99 latency on the order flow by roughly half. Managed technical direction while staying hands-on with delivery.",
  },
  {
    company: "Yoti",
    role: "Backend Developer",
    period: "Oct 2017 - Apr 2019",
    location: "United Kingdom",
    body: "Backend developer at a digital identity startup where security and privacy shaped every decision. Migrated key back-office services from Java to Go. Built internal tooling for identity verification workflows used across multiple regulated markets.",
  },
  {
    company: "iGEO ERP",
    role: "Project Manager / Full Stack Developer",
    period: "Mar 2016 - Oct 2017",
    location: "Madrid, Spain",
    body: "Joined as a full-stack developer at an early-stage ERP startup and moved into the PM role within a few months. Took the product from prototype to paying customers, handling technical delivery, client onboarding, and team coordination.",
  },
  {
    company: "Amadeus",
    role: "Full Stack Developer",
    period: "Apr 2015 - Mar 2016",
    location: "Madrid, Spain",
    body: "Lead developer on back-office platforms for travel industry clients, including Trenitalia. Delivered two projects end to end within tight deadlines, working directly with client technical teams.",
  },
  {
    company: "Tecnilogica SL",
    role: "Backend Developer",
    period: "Sep 2012 - Apr 2015",
    location: "Madrid, Spain",
    body: "Started as an intern while finishing university and stayed on for nearly three years. Built backend services for clients in the tourism sector. First professional exposure to production systems and real-world operational constraints.",
  },
];

export const defaultDomains = [
  {
    name: "Backend Architecture",
    body: "APIs, data models, and services designed to handle real production load and scale from day one.",
    slug: "backend-architecture",
    image: "backend",
  },
  {
    name: "Platform Engineering",
    body: "CI/CD, observability, and infrastructure tooling that keeps deployments predictable and teams shipping confidently.",
    slug: "platform-engineering",
    image: "platform",
  },
  {
    name: "AI-Assisted Development",
    body: "Using AI development tools to accelerate implementation without sacrificing architecture quality or code reliability.",
    slug: "ai-products",
    image: "ai-products",
  },
  {
    name: "APIs & Integrations",
    body: "Reliable, well-contracted integrations with payment processors, crypto protocols, CRMs, and third-party platforms.",
    slug: "api-integrations",
    image: "api",
  },
  {
    name: "Automation Systems",
    body: "Replacing manual processes with reliable, observable automation. Pipelines, orchestration, and internal tooling.",
    slug: "automation",
    image: "automation",
  },
  {
    name: "Fintech & Payments",
    body: "Payment infrastructure, crypto platforms, and financial workflows built for correctness, compliance, and uptime.",
    slug: "fintech",
    image: "fintech",
  },
];
