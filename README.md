VYRON ENTERPRISE EDITION - MOBILE-FIRST ZIP
==========================================

This archive is a production-ready starter for VYRON V3 (Enterprise edition).
It includes a frontend (Next.js), backend stubs, worker stubs, WebGPU notes and ad placeholders.
Designed so you can upload the full ZIP from your mobile and deploy on Vercel / Heroku / Render.

Files:
- pages/ (Next.js pages: index, studio, generate, pricing)
- components/ (VideoPlayer, AdSlot, Header, studio/*)
- pages/api/* (generate, status, upload stubs)
- backend/ (server stub and VIS client stub)
- worker/ (worker stub)
- public/demo-video.mp4 (placeholder if original not present)
- styles/ (globals.css)
- package.json, next.config.js, tailwind.config.js, postcss.config.js

Mobile upload instructions (GitHub web UI):
1. Open your repo on github.com (mobile browser).
2. Tap 'Add file' → 'Upload files' → choose this ZIP (vyron_enterprise.zip).
3. GitHub will upload the file. After upload click 'Commit changes'. If GitHub does not auto-extract, open the repo and use 'Add file' -> 'Upload files' and upload the extracted folder contents instead.
4. Link the repo to Vercel: Vercel → New Project → Import from GitHub → select repo → Deploy. In Vercel set Environment Variables (see .env.example below).
5. Ezoic: Create account, add site, follow their instructions. Insert Ezoic publisher id into .env in your repo or use Ezoic dashboard to manage ad script.

.env.example (placeholders):
NEXT_PUBLIC_BASE_URL=https://your-domain.example
EZOIC_PUBLISHER_ID=__PLACEHOLDER__
VIS_API_KEY=__PLACEHOLDER__
STRIPE_SECRET_KEY=__PLACEHOLDER__
STRIPE_PUBLISHABLE_KEY=__PLACEHOLDER__
S3_BUCKET=__PLACEHOLDER__
S3_REGION=__PLACEHOLDER__
S3_KEY=__PLACEHOLDER__
S3_SECRET=__PLACEHOLDER__
NEXTAUTH_URL=https://your-domain.example
NEXTAUTH_SECRET=__PLACEHOLDER__

Notes:
- This package contains placeholders and stubs for heavy parts (GPU render engine, queue, payments). These require server keys and cloud GPU providers.
- Ad code is placeholder only. Do not paste live ad scripts into the repo until your Ezoic/AdSense account is ready.
- Contact me with the GitHub repo link after upload and I will verify imports, fix any path issues, and prepare Vercel deployment settings.

