# TheLexKit

Practical legal documentation system — landing page + waitlist, pre-launch.

## Stack
- **Frontend:** React + Vite (plain JS, no TypeScript)
- **Hosting:** Vercel (project: `thelexkit`, linked to this repo)
- **Backend:** Supabase (project ref: `vipzeogaqxrfcpipzmdo`)

## What's live right now
- `/` — hero, three pricing tiers (Starter $19 / Professional $49 / Business $99 — launch
  estimates, not final), "not just templates" section, waitlist form
- `/terms`, `/privacy` — **draft placeholders only**, not reviewed, do not treat as final
  before real launch
- Waitlist submissions write to the `waitlist` table in Supabase. RLS only allows
  `INSERT` from the anon/publishable key — the frontend cannot read the list back, so
  emails aren't scrapeable client-side. Check the list via the Supabase dashboard or
  SQL editor.

## Local development
```bash
npm install
npm run dev
```

## Deploying
This repo is connected to Vercel — pushing to `main` auto-deploys to production
(`thelexkit.vercel.app`, pending custom domain purchase).

## Known gaps / next steps
- No payment integration yet. Recommended path: **Whop** (confirmed to support
  Pakistan-based seller payouts directly to a local bank account, no foreign entity
  needed) — see conversation history for why Stripe/PayPal/Gumroad/Lemon Squeezy don't
  work for this.
- Terms/Privacy need real legal review before any real sales — refund policy,
  governing law, and contact email are all unfilled placeholders.
- No documents are attached to the pricing tiers yet — those are being drafted
  separately as Word/PDF files (see the NDA and Payment Demand Notice already built as
  the Tier 1 / Tier 3 quality benchmarks).
- `.env` values are intentionally NOT used for the Supabase keys — the publishable
  key is safe to hardcode in `src/supabaseClient.js` since it's a public/anon key by
  design (protected by RLS, not secrecy). Do not put any *secret* keys in this repo
  the same way — check `.gitignore` covers `.env` before ever adding one.

## Security note
An earlier push accidentally included an unrelated project's source and a `.env.local`
file in a differently-named repo (`THE-LEXKIT-`, since deleted). That repo no longer
exists. This repo (`THE-LEXKIT`) has been verified clean — no `.env` files, no
unrelated project files. If you ever see a `pwd` showing an unexpected directory before
a `git add .`, stop and check before committing.
