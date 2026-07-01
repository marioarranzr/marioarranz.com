# marioarranz.com

Personal portfolio site for Mario Arranz, built with Next.js and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `.env.example` to `.env` and fill in your values:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_GITHUB_USERNAME` | Your GitHub username |
| `NEXT_PUBLIC_GITHUB_URL` | Full GitHub profile URL |
| `NEXT_PUBLIC_LINKEDIN_URL` | Full LinkedIn profile URL |
| `NEXT_PUBLIC_AVATAR_URL` | Avatar image path or URL |
| `NEXT_PUBLIC_PORTFOLIO_URL` | Your portfolio domain |
| `NEXT_PUBLIC_AVAILABLE_FOR_FREELANCE` | `true` or `false` — controls the availability badge |
| `CONTACT_EMAIL` / `NEXT_PUBLIC_CONTACT_EMAIL` | Email used in the contact form |

## Content

- **Hero, sections, contact** — `components/bento.tsx`
- **Capabilities** — `lib/data.ts`
- **Projects** — `app/api/fetch-project-posts/route.ts`
- **Author info** — `lib/authors.ts`

## Deployment

Deployed on [Vercel](https://vercel.com), which builds this Next.js app (App Router + API routes) with zero configuration. Set the variables from `.env.example` in the Vercel project's Environment Variables — do not rely on the committed `.env` for anything beyond local defaults.

Optional, only needed if those integrations are enabled:

| Variable | Used by |
| --- | --- |
| `GITHUB_TOKEN` | `app/api/fetch-github-stars` — raises the GitHub API rate limit |
| `UMAMI_API_CLIENT_ENDPOINT`, `UMAMI_API_CLIENT_USER_ID`, `UMAMI_API_CLIENT_SECRET` / `UMAMI_API_KEY` | `app/api/fetch-umami-stats`, `app/api/fetch-umami-events` |
