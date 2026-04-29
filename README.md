# ifarobi.com

Personal landing page. Vite + React + TypeScript, deployed to Cloudflare Pages.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # tsc + vite build → dist/
pnpm preview  # serve dist/
```

## Analytics

PostHog, proxied through `/ingest/*` to keep traffic first-party. Rewrite rules
live in `public/_redirects` (Cloudflare Pages); init lives in `src/posthog.ts`.

Set `VITE_POSTHOG_KEY` locally in `.env` (gitignored) and in Cloudflare Pages →
Settings → Variables and Secrets for production. See `.env.example`.

If PostHog is unavailable (no key set), the app no-ops cleanly.
