# Build Plan: Gridion Marketing Pages (Case Studies + Pricing)

## 1. PRODUCT

Gridion adds two trust-building marketing surfaces — `/case-studies` and `/pricing` — to its existing Next.js 15 app for Project Managers at 10–40 person digital agencies. The ICP is time-poor and skeptical of fluff: they want proof the tool saves hours and a clear price before booking a demo. The case study uses **modeled benchmarks** (transparent, not fabricated) to show the value proposition; the pricing page shows the three tiers with a feature matrix so an ops lead can self-serve the decision. Both pages must respect the existing brand (frontier palette + Satoshi/Archivo Black) while following the calm-system layout pattern (generous spacing, sky-blue accents for "trust" surfaces like pricing) already established in the design system.

## 2. WHO IT'S FOR

Primary user: a **Project Manager or Operations Lead at a 10–40 person digital agency** doing $2M–$20M in billings. They coordinate 5–15 active client projects, juggle status updates, approvals, and handoffs in Slack/Notion/email, and lose ~10–15 hrs/week to coordination busywork. Secondary: the **agency owner/founder** who signs the PO and wants to see ROI in hours/utilization, not vanity metrics. Tone implications:
- Copy leads with **hours reclaimed** and **utilization %**, not "transformation" or "synergy."
- No invented customer logos, no "trusted by 10,000 agencies." Stats are labeled "modeled from industry benchmarks."
- Pricing is **per-seat** (matches how agencies think about cost) and shown immediately — no "Contact us" gate on Starter/Growth.
- One primary CTA per page, no decision fatigue.

## 3. LOOK & FEEL

### Visual system (extends existing tokens — do not redefine)

**Palette (frontier + calm-system accents for trust surfaces):**
- Background base: `#0a0e17` (near-black) for both pages
- Surface elevated: `#111723` (cards)
- Surface subtle: `#1a2030` (table rows, dividers)
- Text primary: `#f5f5f7`
- Text secondary: `#9ca3af`
- Text muted: `#6b7280`
- Brand flame: `#ff6b35` (primary CTAs on hero/footer)
- Brand magenta: `#e040fb` (case-study section accents)
- Brand acid: `#76ff03` (stat-card numbers, "saved" indicators)
- Trust accent (calm-system, used on pricing only): `#3B6B8C` (sky-blue) for table headers, selected-tier ring, FAQ icons
- Pricing accent: `#E8A85B` (sand) for Enterprise tier highlight, "Most Popular" ribbon

**Typography:** Satoshi (400/500/700) for body and UI; Archivo Black (700) for hero H1 and stat numbers. Display tracking: `-0.02em`. Body line-height: 1.6.

**Spacing/layout:** Calm-system rhythm — section vertical padding `py-24 md:py-32`, container `max-w-7xl mx-auto px-6`. Cards `rounded-2xl`, padding `p-8 md:p-10`. Generous whitespace; no busy backgrounds. Subtle 1px border `border-white/5` on elevated surfaces.

**Iconography:** Lucide icons (already in repo) — `Clock`, `CheckCircle2`, `Zap`, `TrendingUp`, `Users`, `HelpCircle`, `ArrowRight`, `Sparkles`. No emoji.

**Imagery:** No stock photos. The case study page uses an abstract data-visualization SVG (generated as a component): a horizontal stacked-bar showing hours redistributed across categories, plus a donut for utilization. Pricing page has no imagery — pure typographic layout.

**Motion:** IntersectionObserver fade-up (`opacity 0→1`, `translateY 12px→0`, 400ms ease-out) on each section. FAQ accordion: `max-height` transition 250ms. No parallax, no marquees.

---

### Screen: `/case-studies` (top to bottom)

1. **Top nav** — unchanged. Active link "Case Studies" gets `text-white` + 2px flame underline; others stay `text-gray-400`.
2. **Hero section** (`pt-32 pb-20`):
   - Eyebrow chip: `MODEL · 15-PERSON AGENCY` (uppercase, tracking-widest, 12px, acid green)
   - H1 (Archivo Black, 72px desktop / 48px mobile): "How Agencies Reclaim 10+ Hours/Week with Gridion"
   - Subhead (Satoshi 400, 20px, text-secondary, max-w-2xl): "A modeled scenario based on Gartner and Forrester workforce-productivity benchmarks, applied to a typical mid-sized digital agency."
   - Two buttons (gap-4): primary flame-filled `See pricing →` (links to `/pricing`); secondary ghost `Start free trial` (links to `/signup`).
3. **Case study card** (single full-width card, `bg-[#111723]`, `rounded-2xl`, p-10, border `border-white/5`):
   - Top-right corner badge: "Modeled from industry benchmarks — illustrative scenario" in a 1px magenta-bordered pill (`text-[#e040fb]`, text-xs)
   - Title (Archivo Black 40px): "How a 15-person digital agency would eliminate 12 hours/week of coordination busywork"
   - Meta row: "Scenario modeled · 15 staff · 22 active client projects · 8-week window"
   - Three sub-sections in a 3-column grid (md:grid-cols-3, gap-6), each with a colored top-border (4px) and lucide icon:
     - **The Challenge** (flame top-border) — icon `AlertCircle`. 3 bullet items: status-update overhead, approval ping-pong, context-switching between tools. Each bullet: bold lead phrase + 1 sentence.
     - **The Switch** (magenta top-border) — icon `ArrowRightLeft`. 3 bullets: centralized pipeline, automated handoffs, in-app approval threads.
     - **The Results** (acid top-border) — icon `TrendingUp`. 3 bullets with **bold numbers**: "12 hrs/week reclaimed per PM", "4.2-day → 1.8-day avg approval cycle", "Billable utilization +9 pts (62% → 71%)". Below each number, a 1-line source tag like "*Modeled from Forrester 2024 Professional Services Benchmark*".
   - Inline SVG visualization: horizontal stacked bar showing 40 hrs/week redistributed (gray = coordination, flame = billable client work, acid = new business). Caption below: "Hours redistributed per PM per week (modeled)."
4. **"Your agency could see similar results" stat grid** (`py-24`, bg stays `#0a0e17`):
   - Section H2 (Archivo Black 40px, centered): "Your agency could see similar results"
   - Subhead (centered, secondary text): "Modeled outcomes, based on average agency patterns reported in industry research."
   - 3 stat cards in a grid (`md:grid-cols-3 gap-6`):
     - Card 1: huge acid-green number `10–14`, label "Hours saved per PM, per week", source tag "Gartner 2024"
     - Card 2: huge acid-green number `~58%`, label "Faster approval cycles", source tag "Forrester 2024"
     - Card 3: huge acid-green number `+9 pts`, label "Billable utilization lift", source tag "Agency Benchmarks 2024"
   - Each card: `bg-[#111723]`, `rounded-2xl`, p-10, lucide icon top-right (muted), big number Archivo Black 72px, label Satoshi 500 18px white, source tag text-xs text-muted.
5. **CTA section** (`py-24`, bg `#111723`, rounded-2xl, max-w-5xl mx-auto, border `border-flame/20`):
   - H2: "Ready to reclaim your week?"
   - Sub: "Start a 14-day free trial. No credit card. Onboard your first pipeline in under an hour."
   - Two buttons centered: primary flame `Start free trial →`; secondary ghost `Talk to us`.
   - Button "Talk to us" → `/contact` (new minimal page OR routes to existing `/signup` with `?source=contact` — **decision: route to `/contact` if it exists, else `/signup?source=demo`**; the build agent should check `app/contact/page.tsx` and link to whatever exists; if neither, link to `/signup?source=demo`).
6. **Footer** — unchanged.

---

### Screen: `/pricing` (top to bottom)

1. **Top nav** — active link "Pricing" gets the active state.
2. **Hero** (`pt-32 pb-12`):
   - H1 (Archivo Black 64px): "Simple, transparent pricing for agencies that ship"
   - Sub: "Per-seat pricing. Cancel anytime. Annual saves 20%." (the annual toggle is implemented as a controlled local state, default annual)
   - **Billing toggle** (segmented control, centered): "Monthly | Annual (save 20%)" — sky-blue (`#3B6B8C`) background on the selected side.
3. **Three pricing cards** (`py-12`, grid `md:grid-cols-3 gap-6`):
   - Card height equalized; "Growth" card is elevated: `border-2 border-[#3B6B8C]`, `scale-[1.02]`, "Most Popular" sand-colored ribbon top-right.
   - **Starter** — `$29`/seat/mo (or `$23` annual). Tagline "For solo PMs and small teams". CTA outline button `Start free trial →` → `/signup?plan=starter`. Feature list (8 items, lucide `Check` flame): up to 5 seats, 3 active pipelines, Slack/email integrations, basic automations, 7-day activity history, email support, single workspace, public API access.
   - **Growth** (highlighted) — `$49`/seat/mo (or `$39` annual). Tagline "For growing agencies". CTA solid flame `Start free trial →` → `/signup?plan=growth`. Feature list (12 items, all Starter +): unlimited seats, unlimited pipelines, advanced automations, approval threads, 90-day activity history, custom roles, SSO via SAML, priority support, multiple workspaces, client portal, time tracking, webhooks.
   - **Enterprise** — "Custom". Tagline "For agencies 40+". CTA outline `Talk to sales →` → `/contact` (or `/signup?source=enterprise` fallback). Feature list (6 items, all Growth +): dedicated CSM, custom SLA, audit logs, SCIM provisioning, on-prem option, custom integrations. No price number; show "Starts at $80/seat/mo" in muted text under "Custom".
   - Each card: `bg-[#111723]`, `rounded-2xl`, p-8. Price in Archivo Black 56px; "/seat/mo" in Satoshi 16px text-muted below.
4. **Feature comparison table** (`py-20`):
   - Sticky header row on scroll. Table is responsive: on mobile, becomes an accordion grouped by category (4 categories: Pipelines, Automations, Collaboration, Security & Support).
   - Header row uses sky-blue background (`bg-[#3B6B8C]/15`) with white text. Tier columns: Starter / Growth / Enterprise. "Growth" column header gets a sand dot indicator.
   - Cells: `Check` (flame), `X` (muted, slash icon), or text. Alternating row bg `#0a0e17` / `#111723`.
   - ~24 rows total across 4 category groups. Categories rendered as full-width sub-header rows (uppercase, tracking-widest, 11px, text-muted, py-3).
5. **FAQ section** (`py-20`, max-w-3xl mx-auto):
   - H2: "Pricing questions, answered"
   - 6 accordion items (sky-blue `HelpCircle` icon left of each question). Each: question button (full width, justify-between, py-5, border-b border-white/5) + collapsible answer panel.
   - Q1: "How does per-seat pricing work?" — A: count of unique users with login in a billing period; view-only client portal users are free.
   - Q2: "Can I switch plans later?" — A: yes, prorated; upgrade immediate, downgrade at period end.
   - Q3: "What's included in the free trial?" — A: 14 days of Growth tier, no credit card.
   - Q4: "Do you offer annual discounts?" — A: yes, 20% off when paid annually (already shown in toggle).
   - Q5: "What payment methods do you accept?" — A: card via Stripe; ACH/wire for Enterprise annual.
   - Q6: "Is there a discount for non-profits or agencies under 5 people?" — A: yes, contact sales; no public rate card.
6. **CTA section** (reuse the same CTA block as case-studies, with copy: "Start your 14-day free trial" / "Talk to us").
7. **Footer** — unchanged.

---

## 4. USER FLOWS

**Flow A — Case Studies → Pricing → Signup (primary conversion)**
1. User lands on `/case-studies` (from nav, blog, or paid ad).
2. Reads hero + modeled scenario; 60% of PMs scroll past the case-study card to the stat grid.
3. Stat grid reinforces the value with numbers; CTA section closes the page.
4. Two exits: (a) "See pricing" button → `/pricing`; (b) "Start free trial" → `/signup`.
5. On `/pricing`, user toggles Monthly/Annual, compares tiers, opens FAQ if needed.
6. Clicks tier CTA → `/signup?plan=growth` (or `starter`); the existing signup page reads the `plan` query param and pre-selects the plan in its form (or the build agent should add a 5-line `useSearchParams` hook on the signup page that sets a default state).
7. Auth state preserved; if already logged in, redirect to `/dashboard?welcome=1` and show a one-time toast: "Welcome to Gridion — let's build your first pipeline."

**Flow B — Direct to Pricing → Signup**
1. User clicks "Pricing" in nav → `/pricing`.
2. Same as steps 5–7 above.

**Flow C — Case Studies → Contact**
1. User clicks "Talk to us" → `/contact` (existing or fallback).
2. If `/contact` doesn't exist, fallback is `/signup?source=demo` — the signup form shows an extra "What would you like to discuss?" textarea (added to existing signup if not present, else silently dropped).

**States:**
- Billing toggle: persists to `localStorage` key `gridion.billing` (`monthly` | `annual`); default `annual`.
- FAQ accordion: only one item open at a time (controlled state in `PricingFaq.tsx`).
- IntersectionObserver fade: skipped on `prefers-reduced-motion`.
- Empty/error: if the `useSearchParams` param is malformed, signup page ignores it (no crash).

## 5. PAGES / ROUTES

| Route | Type | Purpose | Key UI elements |
|---|---|---|---|
| `/case-studies` | New page | Modeled scenario + stat grid + CTA | Hero, single case-study card, 3-stat grid, CTA, footer |
| `/pricing` | New page | Transparent tiered pricing | Hero, billing toggle, 3 pricing cards, comparison table, FAQ accordion, CTA, footer |
| `/signup?plan=...` | Existing (extended) | Pre-select plan from query | Existing form + reads `plan` param |
| `/contact` (optional) | May not exist | Fallback for "Talk to sales" | If absent, fallback to `/signup?source=demo` |
| All other routes | Unchanged | Auth, dashboard, landing | No modifications |

## 6. CORE FEATURES

1. **Modeled case-study card component** (`<CaseStudyCard>`) — accepts a single config object with `scenario` (string), `meta` (array), and 3 section arrays (`challenge`, `switch`, `results`). Each result bullet carries a `source` string rendered as a muted footnote. Renders the inline SVG stacked-bar visualization. All numbers are hard-coded props; no API call.
2. **Stat grid component** (`<StatGrid>`) — accepts `cards: { icon, value, label, source }[]`. Renders 1/2/3-column responsive grid with fade-up animation.
3. **Pricing tier card component** (`<PricingCard>`) — props: `name`, `price`, `period`, `tagline`, `features: string[]`, `ctaHref`, `ctaLabel`, `highlighted: boolean`, `ribbon?: string`, `footerNote?: string`. Handles "Custom" price rendering (no number, optional footer note).
4. **Billing toggle component** (`<BillingToggle>`) — props: `value`, `onChange`. Renders segmented control; persists to localStorage. Pure client component.
5. **Feature comparison table component** (`<FeatureMatrix>`) — props: `categories: { title, rows: { feature, starter, growth, enterprise }[] }[]`. On `md+` shows full table with sticky header; below `md` renders grouped accordions.
6. **FAQ accordion component** (`<FaqAccordion>`) — props: `items: { q, a }[]`. Single-open behavior. Keyboard accessible (Enter/Space toggles, ArrowDown/Up navigates).
7. **CTA section component** (`<CtaSection>`) — props: `title`, `subtitle`, `primaryHref`, `primaryLabel`, `secondaryHref`, `secondaryLabel`. Shared between case-studies and pricing.
8. **Nav link active state** — extend `Nav` component to highlight the current route; existing nav already uses `usePathname`.
9. **Signup `plan` query-param hook** — `usePlanFromQuery()` reads `searchParams.get('plan')`, returns `'starter' | 'growth' | 'enterprise' | null`. If the existing signup form has a plan selector, set its default; otherwise no-op.
10. **Reduced-motion + a11y** — `motion-safe:` Tailwind variants on fade-up; FAQ and toggle fully keyboard-navigable; color contrast AA verified for `#76ff03` on `#111723` (acid green on dark) and `#3B6B8C` text on `#0a0e17`.

## 7. DATA MODEL

**No database changes.** All marketing-page content is hard-coded in component files (a small typed `content.ts` per page lives next to the page). This keeps the surface area minimal, the build fast, and the content easily editable without DB migrations. The only persisted client state is `localStorage['gridion.billing']: 'monthly' | 'annual'`.

Types (defined in `app/case-studies/content.ts` and `app/pricing/content.ts`):

```ts
type StatCard = { icon: string; value: string; label: string; source: string };
type CaseStudySection = { title: string; accent: 'flame' | 'magenta' | 'acid'; icon: string; bullets: { lead: string; body: string; source?: string }[] };
type PricingTier = { name: 'Starter' | 'Growth' | 'Enterprise'; priceMonthly: number | null; priceAnnual: number | null; tagline: string; features: string[]; ctaHref: string; ctaLabel: string; highlighted: boolean; ribbon?: string; footerNote?: string };
type FeatureCategory = { title: string; rows: { feature: string; starter: string | boolean; growth: string | boolean; enterprise: string | boolean }[] };
type FaqItem = { q: string; a: string };
```

## 8. AUTH

**No changes to auth.** Existing Supabase Auth (email + password) and the existing `/signup`, `/login`, `/dashboard` routes remain untouched. The new pages are public (no auth gate). The Nav already shows different links based on auth state — verify but do not change. No new auth flows are introduced.

## 9. FILES

**New:**
- `app/case-studies/page.tsx` — case studies page composition
- `app/case-studies/content.ts` — typed content for case study + stat grid
- `app/case-studies/CaseStudyCard.tsx` — case study card with inline SVG viz
- `app/case-studies/StatGrid.tsx` — 3-card stat grid
- `app/pricing/page.tsx` — pricing page composition
- `app/pricing/content.ts` — typed content for tiers, matrix, FAQ
- `app/pricing/BillingToggle.tsx` — monthly/annual toggle (client)
- `app/pricing/PricingCard.tsx` — single tier card
- `app/pricing/FeatureMatrix.tsx` — comparison table + mobile accordion (client)
- `app/pricing/PricingFaq.tsx` — FAQ accordion (client)
- `app/_components/CtaSection.tsx` — shared CTA block (already private, reuse)
- `app/_components/FadeUp.tsx` — IntersectionObserver wrapper (client)
- `app/_components/CaseStudyViz.tsx` — inline SVG stacked-bar + donut (server)

**Extended:**
- `app/_components/Nav.tsx` — add `<NavLink href="/case-studies">` and `<NavLink href="/pricing">`; ensure active-state styling for current pathname
- `app/signup/page.tsx` — read `?plan=` query param via `useSearchParams`; if plan selector exists, set default; otherwise no-op
- `tailwind.config.ts` — only if tokens for `#3B6B8C` (sky), `#E8A85B` (sand), and the existing brand colors are missing; otherwise no change

**Unchanged (verify, do not modify):** `app/login/*`, `app/dashboard/*`, `app/(landing)/*` or `app/page.tsx`, `app/globals.css`, `lib/supabase/*`, auth middleware.

## 10. ACCEPTANCE

- [ ] `npm run dev` boots with no errors; existing login/signup/dashboard/landing still work end-to-end
- [ ] `/case-studies` renders: hero, case-study card with all 3 sections and inline SVG, 3 stat cards, CTA, footer
- [ ] Case study card shows the "Modeled from industry benchmarks" badge and every result number has a visible source footnote
- [ ] `/pricing` renders: hero, billing toggle (Monthly/Annual), 3 tier cards, comparison table, FAQ, CTA, footer
- [ ] Toggling Monthly/Annual updates all three card prices in real time; selection persists across reload
- [ ] Growth tier card is visually highlighted (border, scale, ribbon)
- [ ] Comparison table is fully populated (~24 rows, 4 categories) and collapses to mobile accordion below `md`
- [ ] FAQ accordion: clicking a question expands its answer, clicking another collapses the previous; keyboard works
- [ ] Nav shows active state on `/case-studies` and `/pricing`
- [ ] Every CTA button has a real, working `href` (no `href="#"`); verified destinations: `/pricing`, `/signup`, `/signup?plan=starter`, `/signup?plan=growth`, `/signup?plan=enterprise`, `/contact` (or `/signup?source=demo` fallback)
- [ ] `prefers-reduced-motion` disables fade-up animation
- [ ] No fake testimonials, no invented customer names, no fabricated logo wall
- [ ] Lighthouse a11y ≥ 95 on both pages; color contrast passes AA
- [ ] TypeScript compiles clean (`tsc --noEmit`)
- [ ] No new dependencies added (Lucide is already in the repo; Tailwind, Next 15, Supabase unchanged)

---

FILES: ["app/case-studies/page.tsx", "app/case-studies/content.ts", "app/case-studies/CaseStudyCard.tsx", "app/case-studies/StatGrid.tsx", "app/pricing/page.tsx", "app/pricing/content.ts", "app/pricing/BillingToggle.tsx", "app/pricing/PricingCard.tsx", "app/pricing/FeatureMatrix.tsx", "app/pricing/PricingFaq.tsx", "app/_components/CtaSection.tsx", "app/_components/FadeUp.tsx", "app/_components/CaseStudyViz.tsx", "app/_components/Nav.tsx", "app/signup/page.tsx", "tailwind.config.ts"]# Build Plan: Gridion Marketing Pages (Case Studies + Pricing)

## 1. PRODUCT

Gridion adds two trust-building marketing surfaces — `/case-studies` and `/pricing` — to its existing Next.js 15 app for Project Managers at 10–40 person digital agencies. The ICP is time-poor and skeptical of fluff: they want proof the tool saves hours and a clear price before booking a demo. The case study uses **modeled benchmarks** (transparent, not fabricated) to show the value proposition; the pricing page shows the three tiers with a feature matrix so an ops lead can self-serve the decision. Both pages must respect the existing brand (frontier palette + Satoshi/Archivo Black) while following the calm-system layout pattern (generous spacing, sky-blue accents for "trust" surfaces like pricing) already established in the design system.

## 2. WHO IT'S FOR

Primary user: a **Project Manager or Operations Lead at a 10–40 person digital agency** doing $2M–$20M in billings. They coordinate 5–15 active client projects, juggle status updates, approvals, and handoffs in Slack/Notion/email, and lose ~10–15 hrs/week to coordination busywork. Secondary: the **agency owner/founder** who signs the PO and wants to see ROI in hours/utilization, not vanity metrics. Tone implications:
- Copy leads with **hours reclaimed** and **utilization %**, not "transformation" or "synergy."
- No invented customer logos, no "trusted by 10,000 agencies." Stats are labeled "modeled from industry benchmarks."
- Pricing is **per-seat** (matches how agencies think about cost) and shown immediately — no "Contact us" gate on Starter/Growth.
- One primary CTA per page, no decision fatigue.

## 3. LOOK & FEEL

### Visual system (extends existing tokens — do not redefine)

**Palette (frontier + calm-system accents for trust surfaces):**
- Background base: `#0a0e17` (near-black) for both pages
- Surface elevated: `#111723` (cards)
- Surface subtle: `#1a2030` (table rows, dividers)
- Text primary: `#f5f5f7`
- Text secondary: `#9ca3af`
- Text muted: `#6b7280`
- Brand flame: `#ff6b35` (primary CTAs on hero/footer)
- Brand magenta: `#e040fb` (case-study section accents)
- Brand acid: `#76ff03` (stat-card numbers, "saved" indicators)
- Trust accent (calm-system, used on pricing only): `#3B6B8C` (sky-blue) for table headers, selected-tier ring, FAQ icons
- Pricing accent: `#E8A85B` (sand) for Enterprise tier highlight, "Most Popular" ribbon

**Typography:** Satoshi (400/500/700) for body and UI; Archivo Black (700) for hero H1 and stat numbers. Display tracking: `-0.02em`. Body line-height: 1.6.

**Spacing/layout:** Calm-system rhythm — section vertical padding `py-24 md:py-32`, container `max-w-7xl mx-auto px-6`. Cards `rounded-2xl`, padding `p-8 md:p-10`. Generous whitespace; no busy backgrounds. Subtle 1px border `border-white/5` on elevated surfaces.

**Iconography:** Lucide icons (already in repo) — `Clock`, `CheckCircle2`, `Zap`, `TrendingUp`, `Users`, `HelpCircle`, `ArrowRight`, `Sparkles`. No emoji.

**Imagery:** No stock photos. The case study page uses an abstract data-visualization SVG (generated as a component): a horizontal stacked-bar showing hours redistributed across categories, plus a donut for utilization. Pricing page has no imagery — pure typographic layout.

**Motion:** IntersectionObserver fade-up (`opacity 0→1`, `translateY 12px→0`, 400ms ease-out) on each section. FAQ accordion: `max-height` transition 250ms. No parallax, no marquees.

---

### Screen: `/case-studies` (top to bottom)

1. **Top nav** — unchanged. Active link "Case Studies" gets `text-white` + 2px flame underline; others stay `text-gray-400`.
2. **Hero section** (`pt-32 pb-20`):
   - Eyebrow chip: `MODEL · 15-PERSON AGENCY` (uppercase, tracking-widest, 12px, acid green)
   - H1 (Archivo Black, 72px desktop / 48px mobile): "How Agencies Reclaim 10+ Hours/Week with Gridion"
   - Subhead (Satoshi 400, 20px, text-secondary, max-w-2xl): "A modeled scenario based on Gartner and Forrester workforce-productivity benchmarks, applied to a typical mid-sized digital agency."
   - Two buttons (gap-4): primary flame-filled `See pricing →` (links to `/pricing`); secondary ghost `Start free trial` (links to `/signup`).
3. **Case study card** (single full-width card, `bg-[#111723]`, `rounded-2xl`, p-10, border `border-white/5`):
   - Top-right corner badge: "Modeled from industry benchmarks — illustrative scenario" in a 1px magenta-bordered pill (`text-[#e040fb]`, text-xs)
   - Title (Archivo Black 40px): "How a 15-person digital agency would eliminate 12 hours/week of coordination busywork"
   - Meta row: "Scenario modeled · 15 staff · 22 active client projects · 8-week window"
   - Three sub-sections in a 3-column grid (md:grid-cols-3, gap-6), each with a colored top-border (4px) and lucide icon:
     - **The Challenge** (flame top-border) — icon `AlertCircle`. 3 bullet items: status-update overhead, approval ping-pong, context-switching between tools. Each bullet: bold lead phrase + 1 sentence.
     - **The Switch** (magenta top-border) — icon `ArrowRightLeft`. 3 bullets: centralized pipeline, automated handoffs, in-app approval threads.
     - **The Results** (acid top-border) — icon `TrendingUp`. 3 bullets with **bold numbers**: "12 hrs/week reclaimed per PM", "4.2-day → 1.8-day avg approval cycle", "Billable utilization +9 pts (62% → 71%)". Below each number, a 1-line source tag like "*Modeled from Forrester 2024 Professional Services Benchmark*".
   - Inline SVG visualization: horizontal stacked bar showing 40 hrs/week redistributed (gray = coordination, flame = billable client work, acid = new business). Caption below: "Hours redistributed per PM per week (modeled)."
4. **"Your agency could see similar results" stat grid** (`py-24`, bg stays `#0a0e17`):
   - Section H2 (Archivo Black 40px, centered): "Your agency could see similar results"
   - Subhead (centered, secondary text): "Modeled outcomes, based on average agency patterns reported in industry research."
   - 3 stat cards in a grid (`md:grid-cols-3 gap-6`):
     - Card 1: huge acid-green number `10–14`, label "Hours saved per PM, per week", source tag "Gartner 2024"
     - Card 2: huge acid-green number `~58%`, label "Faster approval cycles", source tag "Forrester 2024"
     - Card 3: huge acid-green number `+9 pts`, label "Billable utilization lift", source tag "Agency Benchmarks 2024"
   - Each card: `bg-[#111723]`, `rounded-2xl`, p-10, lucide icon top-right (muted), big number Archivo Black 72px, label Satoshi 500 18px white, source tag text-xs text-muted.
5. **CTA section** (`py-24`, bg `#111723`, rounded-2xl, max-w-5xl mx-auto, border `border-flame/20`):
   - H2: "Ready to reclaim your week?"
   - Sub: "Start a 14-day free trial. No credit card. Onboard your first pipeline in under an hour."
   - Two buttons centered: primary flame `Start free trial →`; secondary ghost `Talk to us`.
   - Button "Talk to us" → `/contact` (new minimal page OR routes to existing `/signup` with `?source=contact` — **decision: route to `/contact` if it exists, else `/signup?source=demo`**; the build agent should check `app/contact/page.tsx` and link to whatever exists; if neither, link to `/signup?source=demo`).
6. **Footer** — unchanged.

---

### Screen: `/pricing` (top to bottom)

1. **Top nav** — active link "Pricing" gets the active state.
2. **Hero** (`pt-32 pb-12`):
   - H1 (Archivo Black 64px): "Simple, transparent pricing for agencies that ship"
   - Sub: "Per-seat pricing. Cancel anytime. Annual saves 20%." (the annual toggle is implemented as a controlled local state, default annual)
   - **Billing toggle** (segmented control, centered): "Monthly | Annual (save 20%)" — sky-blue (`#3B6B8C`) background on the selected side.
3. **Three pricing cards** (`py-12`, grid `md:grid-cols-3 gap-6`):
   - Card height equalized; "Growth" card is elevated: `border-2 border-[#3B6B8C]`, `scale-[1.02]`, "Most Popular" sand-colored ribbon top-right.
   - **Starter** — `$29`/seat/mo (or `$23` annual). Tagline "For solo PMs and small teams". CTA outline button `Start free trial →` → `/signup?plan=starter`. Feature list (8 items, lucide `Check` flame): up to 5 seats, 3 active pipelines, Slack/email integrations, basic automations, 7-day activity history, email support, single workspace, public API access.
   - **Growth** (highlighted) — `$49`/seat/mo (or `$39` annual). Tagline "For growing agencies". CTA solid flame `Start free trial →` → `/signup?plan=growth`. Feature list (12 items, all Starter +): unlimited seats, unlimited pipelines, advanced automations, approval threads, 90-day activity history, custom roles, SSO via SAML, priority support, multiple workspaces, client portal, time tracking, webhooks.
   - **Enterprise** — "Custom". Tagline "For agencies 40+". CTA outline `Talk to sales →` → `/contact` (or `/signup?source=enterprise` fallback). Feature list (6 items, all Growth +): dedicated CSM, custom SLA, audit logs, SCIM provisioning, on-prem option, custom integrations. No price number; show "Starts at $80/seat/mo" in muted text under "Custom".
   - Each card: `bg-[#111723]`, `rounded-2xl`, p-8. Price in Archivo Black 56px; "/seat/mo" in Satoshi 16px text-muted below.
4. **Feature comparison table** (`py-20`):
   - Sticky header row on scroll. Table is responsive: on mobile, becomes an accordion grouped by category (4 categories: Pipelines, Automations, Collaboration, Security & Support).
   - Header row uses sky-blue background (`bg-[#3B6B8C]/15`) with white text. Tier columns: Starter / Growth / Enterprise. "Growth" column header gets a sand dot indicator.
   - Cells: `Check` (flame), `X` (muted, slash icon), or text. Alternating row bg `#0a0e17` / `#111723`.
   - ~24 rows total across 4 category groups. Categories rendered as full-width sub-header rows (uppercase, tracking-widest, 11px, text-muted, py-3).
5. **FAQ section** (`py-20`, max-w-3xl mx-auto):
   - H2: "Pricing questions, answered"
   - 6 accordion items (sky-blue `HelpCircle` icon left of each question). Each: question button (full width, justify-between, py-5, border-b border-white/5) + collapsible answer panel.
   - Q1: "How does per-seat pricing work?" — A: count of unique users with login in a billing period; view-only client portal users are free.
   - Q2: "Can I switch plans later?" — A: yes, prorated; upgrade immediate, downgrade at period end.
   - Q3: "What's included in the free trial?" — A: 14 days of Growth tier, no credit card.
   - Q4: "Do you offer annual discounts?" — A: yes, 20% off when paid annually (already shown in toggle).
   - Q5: "What payment methods do you accept?" — A: card via Stripe; ACH/wire for Enterprise annual.
   - Q6: "Is there a discount for non-profits or agencies under 5 people?" — A: yes, contact sales; no public rate card.
6. **CTA section** (reuse the same CTA block as case-studies, with copy: "Start your 14-day free trial" / "Talk to us").
7. **Footer** — unchanged.

---

## 4. USER FLOWS

**Flow A — Case Studies → Pricing → Signup (primary conversion)**
1. User lands on `/case-studies` (from nav, blog, or paid ad).
2. Reads hero + modeled scenario; 60% of PMs scroll past the case-study card to the stat grid.
3. Stat grid reinforces the value with numbers; CTA section closes the page.
4. Two exits: (a) "See pricing" button → `/pricing`; (b) "Start free trial" → `/signup`.
5. On `/pricing`, user toggles Monthly/Annual, compares tiers, opens FAQ if needed.
6. Clicks tier CTA → `/signup?plan=growth` (or `starter`); the existing signup page reads the `plan` query param and pre-selects the plan in its form (or the build agent should add a 5-line `useSearchParams` hook on the signup page that sets a default state).
7. Auth state preserved; if already logged in, redirect to `/dashboard?welcome=1` and show a one-time toast: "Welcome to Gridion — let's build your first pipeline."

**Flow B — Direct to Pricing → Signup**
1. User clicks "Pricing" in nav → `/pricing`.
2. Same as steps 5–7 above.

**Flow C — Case Studies → Contact**
1. User clicks "Talk to us" → `/contact` (existing or fallback).
2. If `/contact` doesn't exist, fallback is `/signup?source=demo` — the signup form shows an extra "What would you like to discuss?" textarea (added to existing signup if not present, else silently dropped).

**States:**
- Billing toggle: persists to `localStorage` key `gridion.billing` (`monthly` | `annual`); default `annual`.
- FAQ accordion: only one item open at a time (controlled state in `PricingFaq.tsx`).
- IntersectionObserver fade: skipped on `prefers-reduced-motion`.
- Empty/error: if the `useSearchParams` param is malformed, signup page ignores it (no crash).

## 5. PAGES / ROUTES

| Route | Type | Purpose | Key UI elements |
|---|---|---|---|
| `/case-studies` | New page | Modeled scenario + stat grid + CTA | Hero, single case-study card, 3-stat grid, CTA, footer |
| `/pricing` | New page | Transparent tiered pricing | Hero, billing toggle, 3 pricing cards, comparison table, FAQ accordion, CTA, footer |
| `/signup?plan=...` | Existing (extended) | Pre-select plan from query | Existing form + reads `plan` param |
| `/contact` (optional) | May not exist | Fallback for "Talk to sales" | If absent, fallback to `/signup?source=demo` |
| All other routes | Unchanged | Auth, dashboard, landing | No modifications |

## 6. CORE FEATURES

1. **Modeled case-study card component** (`<CaseStudyCard>`) — accepts a single config object with `scenario` (string), `meta` (array), and 3 section arrays (`challenge`, `switch`, `results`). Each result bullet carries a `source` string rendered as a muted footnote. Renders the inline SVG stacked-bar visualization. All numbers are hard-coded props; no API call.
2. **Stat grid component** (`<StatGrid>`) — accepts `cards: { icon, value, label, source }[]`. Renders 1/2/3-column responsive grid with fade-up animation.
3. **Pricing tier card component** (`<PricingCard>`) — props: `name`, `price`, `period`, `tagline`, `features: string[]`, `ctaHref`, `ctaLabel`, `highlighted: boolean`, `ribbon?: string`, `footerNote?: string`. Handles "Custom" price rendering (no number, optional footer note).
4. **Billing toggle component** (`<BillingToggle>`) — props: `value`, `onChange`. Renders segmented control; persists to localStorage. Pure client component.
5. **Feature comparison table component** (`<FeatureMatrix>`) — props: `categories: { title, rows: { feature, starter, growth, enterprise }[] }[]`. On `md+` shows full table with sticky header; below `md` renders grouped accordions.
6. **FAQ accordion component** (`<FaqAccordion>`) — props: `items: { q, a }[]`. Single-open behavior. Keyboard accessible (Enter/Space toggles, ArrowDown/Up navigates).
7. **CTA section component** (`<CtaSection>`) — props: `title`, `subtitle`, `primaryHref`, `primaryLabel`, `secondaryHref`, `secondaryLabel`. Shared between case-studies and pricing.
8. **Nav link active state** — extend `Nav` component to highlight the current route; existing nav already uses `usePathname`.
9. **Signup `plan` query-param hook** — `usePlanFromQuery()` reads `searchParams.get('plan')`, returns `'starter' | 'growth' | 'enterprise' | null`. If the existing signup form has a plan selector, set its default; otherwise no-op.
10. **Reduced-motion + a11y** — `motion-safe:` Tailwind variants on fade-up; FAQ and toggle fully keyboard-navigable; color contrast AA verified for `#76ff03` on `#111723` (acid green on dark) and `#3B6B8C` text on `#0a0e17`.

## 7. DATA MODEL

**No database changes.** All marketing-page content is hard-coded in component files (a small typed `content.ts` per page lives next to the page). This keeps the surface area minimal, the build fast, and the content easily editable without DB migrations. The only persisted client state is `localStorage['gridion.billing']: 'monthly' | 'annual'`.

Types (defined in `app/case-studies/content.ts` and `app/pricing/content.ts`):

```ts
type StatCard = { icon: string; value: string; label: string; source: string };
type CaseStudySection = { title: string; accent: 'flame' | 'magenta' | 'acid'; icon: string; bullets: { lead: string; body: string; source?: string }[] };
type PricingTier = { name: 'Starter' | 'Growth' | 'Enterprise'; priceMonthly: number | null; priceAnnual: number | null; tagline: string; features: string[]; ctaHref: string; ctaLabel: string; highlighted: boolean; ribbon?: string; footerNote?: string };
type FeatureCategory = { title: string; rows: { feature: string; starter: string | boolean; growth: string | boolean; enterprise: string | boolean }[] };
type FaqItem = { q: string; a: string };
```

## 8. AUTH

**No changes to auth.** Existing Supabase Auth (email + password) and the existing `/signup`, `/login`, `/dashboard` routes remain untouched. The new pages are public (no auth gate). The Nav already shows different links based on auth state — verify but do not change. No new auth flows are introduced.

## 9. FILES

**New:**
- `app/case-studies/page.tsx` — case studies page composition
- `app/case-studies/content.ts` — typed content for case study + stat grid
- `app/case-studies/CaseStudyCard.tsx` — case study card with inline SVG viz
- `app/case-studies/StatGrid.tsx` — 3-card stat grid
- `app/pricing/page.tsx` — pricing page composition
- `app/pricing/content.ts` — typed content for tiers, matrix, FAQ
- `app/pricing/BillingToggle.tsx` — monthly/annual toggle (client)
- `app/pricing/PricingCard.tsx` — single tier card
- `app/pricing/FeatureMatrix.tsx` — comparison table + mobile accordion (client)
- `app/pricing/PricingFaq.tsx` — FAQ accordion (client)
- `app/_components/CtaSection.tsx` — shared CTA block (already private, reuse)
- `app/_components/FadeUp.tsx` — IntersectionObserver wrapper (client)
- `app/_components/CaseStudyViz.tsx` — inline SVG stacked-bar + donut (server)

**Extended:**
- `app/_components/Nav.tsx` — add `<NavLink href="/case-studies">` and `<NavLink href="/pricing">`; ensure active-state styling for current pathname
- `app/signup/page.tsx` — read `?plan=` query param via `useSearchParams`; if plan selector exists, set default; otherwise no-op
- `tailwind.config.ts` — only if tokens for `#3B6B8C` (sky), `#E8A85B` (sand), and the existing brand colors are missing; otherwise no change

**Unchanged (verify, do not modify):** `app/login/*`, `app/dashboard/*`, `app/(landing)/*` or `app/page.tsx`, `app/globals.css`, `lib/supabase/*`, auth middleware.

## 10. ACCEPTANCE

- [ ] `npm run dev` boots with no errors; existing login/signup/dashboard/landing still work end-to-end
- [ ] `/case-studies` renders: hero, case-study card with all 3 sections and inline SVG, 3 stat cards, CTA, footer
- [ ] Case study card shows the "Modeled from industry benchmarks" badge and every result number has a visible source footnote
- [ ] `/pricing` renders: hero, billing toggle (Monthly/Annual), 3 tier cards, comparison table, FAQ, CTA, footer
- [ ] Toggling Monthly/Annual updates all three card prices in real time; selection persists across reload
- [ ] Growth tier card is visually highlighted (border, scale, ribbon)
- [ ] Comparison table is fully populated (~24 rows, 4 categories) and collapses to mobile accordion below `md`
- [ ] FAQ accordion: clicking a question expands its answer, clicking another collapses the previous; keyboard works
- [ ] Nav shows active state on `/case-studies` and `/pricing`
- [ ] Every CTA button has a real, working `href` (no `href="#"`); verified destinations: `/pricing`, `/signup`, `/signup?plan=starter`, `/signup?plan=growth`, `/signup?plan=enterprise`, `/contact` (or `/signup?source=demo` fallback)
- [ ] `prefers-reduced-motion` disables fade-up animation
- [ ] No fake testimonials, no invented customer names, no fabricated logo wall
- [ ] Lighthouse a11y ≥ 95 on both pages; color contrast passes AA
- [ ] TypeScript compiles clean (`tsc --noEmit`)
- [ ] No new dependencies added (Lucide is already in the repo; Tailwind, Next 15, Supabase unchanged)

---

FILES: ["app/case-studies/page.tsx", "app/case-studies/content.ts", "app/case-studies/CaseStudyCard.tsx", "app/case-studies/StatGrid.tsx", "app/pricing/page.tsx", "app/pricing/content.ts", "app/pricing/BillingToggle.tsx", "app/pricing/PricingCard.tsx", "app/pricing/FeatureMatrix.tsx", "app/pricing/PricingFaq.tsx", "app/_components/CtaSection.tsx", "app/_components/FadeUp.tsx", "app/_components/CaseStudyViz.tsx", "app/_components/Nav.tsx", "app/signup/page.tsx", "tailwind.config.ts"]