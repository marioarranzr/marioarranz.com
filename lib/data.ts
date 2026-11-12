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
    body: "Lead engineer on several client projects, owning technical direction and architecture decisions end to end. Designed and integrated multiple LLM providers into production systems. Integrated crypto exchange APIs (Bybit, OKX) for client work in digital asset trading.",
    stack: ["Go", "TypeScript", "Python", "PHP", "React", "GraphQL"],
  },
  {
    company: "Paddle",
    role: "Senior Software Engineer",
    period: "Mar 2020 - May 2025",
    location: "Remote",
    body: "Five years on the payments core team at a SaaS billing platform ($1.4B valuation). Built a payment reprocessing system that classified failures by type and queued them in SQS, enabling safe, targeted recovery from incidents. Diagnosed recurring AWS regional outages and DDoS attacks using Grafana and logz.io.",
    stack: ["Go", "PHP", "AWS", "GCP", "Kubernetes", "Terraform", "SQS"],
  },
  {
    company: "Independent",
    role: "Algorithmic Trader (crypto), alongside employment",
    period: "2020 - 2023",
    location: "Switzerland / Remote",
    body: "Built and ran a low-latency trading bot in Go with real capital, detecting millisecond-scale liquidity-driven price spikes and trading their repetitions (often 10+ round trips per event). Position size capped at 5% of incoming liquidity. Profitable until 2023, when deeper market liquidity removed the edge.",
    stack: ["Go", "WebSockets", "Kraken API", "Hyperliquid"],
    link: "/projects/trading-bot",
  },
  {
    company: "Touchnote",
    role: "Senior Backend Engineer",
    period: "Apr 2019 - Mar 2020",
    location: "United Kingdom",
    body: "Part of a very small backend team responsible for infrastructure, development, testing and release. Built and improved a microservices architecture following the API-Gateway pattern.",
    stack: ["Go", "Node.js", "Redis", "SQS", "SNS", "Lambda"],
  },
  {
    company: "Yoti",
    role: "Backend Engineer",
    period: "Oct 2017 - Apr 2019",
    location: "United Kingdom",
    body: "Digital identity application. Part of the team responsible for delivery of the administration panel using microservices. Migrated key back-office services from Java to Go.",
    stack: ["Go", "Node.js", "Java"],
  },
  {
    company: "iGEO ERP",
    role: "Project Manager / Full Stack Developer",
    period: "Mar 2016 - Oct 2017",
    location: "Madrid, Spain",
    body: "Joined in the company's early stages as one of the first engineers, combining full stack development with project management for a cloud ERP focused on pest-control companies. Coordinated customer service, design and development teams.",
    stack: ["PHP", "JavaScript", "MySQL"],
  },
  {
    company: "Amadeus & Tecnilogica",
    role: "Full Stack Developer",
    period: "Sep 2012 - Mar 2016",
    location: "Madrid, Spain",
    body: "Main developer of a management platform for travel agencies at Amadeus. Earlier, software development for the tourism sector (Air Europa, Halcon Viajes) at Tecnilogica, starting as an intern during university.",
    stack: ["Java", "PHP", "JavaScript"],
  },
];

export const projects = [
  {
    name: "llm-gateway",
    problem: "OpenAI-compatible proxy in Go: routes across multiple providers (OpenAI, Anthropic), circuit breaker per provider, Redis cache, and per-key daily cost budgets.",
    stack: ["Go", "Redis", "Prometheus", "Docker"],
    result: "< 5ms added latency, automatic fallback when a provider is down",
    repo: "https://github.com/marioarranzr/llm-gateway",
  },
  {
    name: "crypto trading bot",
    problem: "Low-latency bot that detected recurring, liquidity-driven price spikes in low-liquidity tokens and traded each repetition, on centralized and decentralized exchanges.",
    stack: ["Go", "WebSockets", "Kraken API", "Hyperliquid"],
    result: "Profitable 2020 - 2023, often 10+ round trips per event",
    repo: "/projects/trading-bot",
  },
  {
    name: "radar",
    problem: "Research any company on the web and get a one-page sales brief with cited sources.",
    stack: ["Next.js", "OpenAI Responses API", "SQLite"],
    result: "~1 min per brief, sources cited per claim",
    repo: "https://github.com/marioarranzr/radar",
  },
  {
    name: "questionnaire-copilot",
    problem: "Draft answers to security questionnaires (100-300 questions in Excel) from a curated fact bank. Marks unsupported items as 'needs input' with an owner.",
    stack: ["Node.js", "OpenAI API", "Zod structured outputs", "CSV/XLSX"],
    result: "33 questions in ~25s, 30-32/33 accuracy, 0 overclaims on eval",
    repo: "https://github.com/marioarranzr/questionnaire-copilot",
  },
  {
    name: "garmin-coach-template",
    problem: "Self-adjusting running and triathlon coach for Garmin: reads your recovery data daily and puts the right workout on your watch.",
    stack: ["Python", "Garmin Connect API"],
    result: "Fully automated daily plan - no manual scheduling",
    repo: "https://github.com/marioarranzr/garmin-coach-template",
  },
];

export const stack = [
  "Go",
  "TypeScript / Node.js",
  "Python",
  "PostgreSQL",
  "Redis",
  "Kubernetes / Helm",
  "Terraform",
  "Prometheus / OpenTelemetry",
  "Claude API / OpenAI API",
  "GitHub Actions",
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
