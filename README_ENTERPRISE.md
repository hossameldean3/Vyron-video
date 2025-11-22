
VYRON ENTERPRISE BUILD
======================

This package was prepared as the Enterprise-ready build (Demo mode). Stripe is disabled for now.
Files modified and added are documented below.

How to test locally:
1. Copy this project to your machine.
2. Create .env.local with:
   NEXT_PUBLIC_URL=http://localhost:3000
   # Stripe keys will be added later when enabling payments.

3. Clean and install:
   rm -rf node_modules package-lock.json
   npm install

4. Run dev:
   npm run dev

Notes:
- Tailwind config contains the Vyron theme colors.
- Global styles in styles/globals.css include the vyron-glow utility.
- Demo API route available at /api/demo that returns a demo JSON response.
- Video should be located at public/videos/demo-video.mp4 (included if you uploaded it).
- Logo files should be in public/images/. Replace vyron-logo.png with your preferred asset.

Next steps to enable Stripe:
- Add server-side Stripe route and set STRIPE_SECRET_KEY & NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in Vercel env vars.
- I can add the Stripe routes and webhook handler when you are ready.

