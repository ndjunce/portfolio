# Decision Log — Portfolio Site

Append-only. Each entry: date · what was tried · outcome (WORKS / REJECTED / OPEN) · why.
Canonical log for `ndjunce/portfolio`. Freeze/tag good states as we go.

---

## 2026-08-13 — v1 scaffold — Next.js + Tailwind, single-scroll — BUILT (deploy pending)
**Stack:** Next.js 14 (App Router) + Tailwind CSS, deployed on Vercel. Chosen per user as the most professional / future-proof, Vercel-native. Plain JS (no TypeScript) to keep v1 lean; can add TS later if a role wants it.

**Positioning:** primary audience = data/analytics hiring managers (lead with substance); secondary = dev-adjacent (the site itself proves build+ship ability). Reads as "analyst who can also build and ship."

**Structure (single scroll):** Nav · Hero (name + one-line positioning + contact + MSP + by-the-numbers strip) · About · Skills (grouped) · Projects · How I work · Footer (contact + resume PDF slot).

**Projects (data-driven array in `app/page.js`, problem→approach→result framing, real links only):**
- #1 NFL Evidence Engine — marked **"in progress"** (grader built separately). Honest: live link is null, shows "Scorecard in progress", NOT a fake link. Clean slot to promote to headliner once the grader + public scorecard ship.
- #2 All-in-One Fantasy Dashboard — LIVE https://fantasy-dashboard-orpin.vercel.app + repo link.
- #3 NFL Pick'em Tracker — LIVE https://ndjunce.github.io/2026-nfl-picks + repo link.
- #4 NFL Matrix projection model — no live link (private repo), labeled honestly "Private repo".

**Voice/credibility rules applied (from resume standards):** no em-dashes mid-sentence, no "ready to ramp / familiar with / basic", verified facts only, direct voice. By-the-numbers strip uses only verified stats (4 yrs · 27 seasons · 9 leagues · 183K+ player-weeks). About copy is placeholder-flagged for the user to refine in his own voice.

**Design:** dark theme (near-black #0a0e14 base, blue #4aa8ff + green #33e08a accents), Inter font, subtle hero gradient glow, bordered panel cards, thin section dividers. Professional, not noisy. Not over-engineered — no animation library, no CMS; ship clean v1, iterate.

**Resume PDF:** footer has a `/resume.pdf` link; drop `public/resume.pdf` in to activate.

**Next:** verify local build → create repo ndjunce/portfolio → push → deploy on Vercel → confirm live URL → user refines project copy.
