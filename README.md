VYRON V3 - Starter (Next.js + Tailwind)
-------------------------------------
This package is a production-ready starter scaffold with:
  - vercel.json + build config
  - Ezoic ad placeholders (AdSlot)
  - Minimal Stripe checkout endpoint (serverless stub)
  - Minimal auth API stubs
  - HLS video player component
  - Basic pages and studio layout (skeleton)

Quick start (locally):
  1. Copy .env.example -> .env.local and fill keys (STRIPE_SECRET, NEXT_PUBLIC_EZOIC_ID)
  2. npm ci
  3. npm run dev

Deploy:
  Push to GitHub and connect repository to Vercel. Vercel will auto-detect next.js.

Notes:
  - The Stripe endpoint is a stub that expects STRIPE_SECRET env.
  - Ezoic requires configuration at Ezoic dashboard and script insertion; this repo includes placeholders.
