# Gridion Build Plan — New Pages

## 1. PRODUCT

Gridion is an automation-first pipeline builder for creative agencies. It replaces the 6-tool stack (PM tool + file storage + chat + approvals + invoicing + spreadsheets) with a single pipeline that auto-advances jobs through intake → brief → draft → review → approval → delivery, so nothing falls through the cracks. The primary user is a Project Manager or Operations Manager at a 10–40 person digital agency doing $2M–$20M in annual billings, who is currently losing 10+ hours/week to status meetings, Slack threads, and "where is the latest file?" pings. The five additions in this build give that operator a public-facing sales surface (Services, Case Studies, Proposals, enhanced Pricing) to win new client work, plus a private Close Playbook inside the dashboard to run those wins on a consistent framework.

## 2. WHO IT'S FOR

**ICP:** Project/Operations leaders at 10–40 person digital agencies ($2M–$20M billings) using 4+ tools to coordinate work. Time-poor, allergic to agency-bro jargon, allergic to "AI will change everything" fluff. They want one screen that tells them the truth about every active job, and they want their BD team to stop reinventing the sales deck.

**Tone implications:**
- Copy is declarative, lowercase eyebrows, sentence-case body, no exclamation marks.
- Numbers and structure over adjectives ("3 pipeline stages", not "powerful features").
- Honest framing throughout: case studies are labeled "Projected scenarios, not customer results"; proposal templates are previews, not "AI-generated proposals"; playbook is a framework, not "guaranteed closes".
- No invented logos, ratings, MRR, or testimonial quotes anywhere. New product, no customers yet.

## 3. LOOK & FEEL

**Existing design system (use as-is, do not redefine):**
- **Palette tokens** (from `tailwind.config.ts`): `canvas` (ivory background), `ink` (charcoal text), `line` (hairline borders), `accent` (muted gold for emphasis and active states), `accent-deep` (burgundy for the single most important affordance per page).
- **Typography:** Serif display family (Canela-style, used for H1/H2 and prices) + sans body family (Neue Haas-style, used for everything else). Eyebrows are uppercase, tracked, sans, `text-[11px]`. Body is 15–16px, line-height relaxed.
- **Spacing:** Editorial — 96–128px section padding on desktop, 56–72px on mobile. Cards separated by hairlines, not shadows.
- **Components in the existing system:** `Button` (primary = ink fill, secondary = outline, ghost = text-only), `Card` (1px `border-line`, no radius or 2px radius), `Eyebrow` (uppercase label), `Section` (id + eyebrow + headline + subhead + slot).
- **Signal motif:** a thin horizontal line with one diamond/plus tick — used as a section divider, as a bullet, and as the "in-stock / active" indicator. Reuse the existing `<Signal />` if present; if not, inline as a 12px-wide SVG.
- **Iconography:** 1.25px stroke line icons, monochrome `ink`, 16–20px.
- **Motion:** 180–220ms ease-out for hover and accordion; no bounce, no parallax, no scroll-jacking. Annual toggle slides a 2px accent-gold underline; accordion chevron rotates 90°.

### Screens, top to bottom

**`/services` — Service Packages**
1. **Page header (centered, 96px top padding).** Eyebrow `SERVICES` · H1 serif "Three ways to run your pipeline." · subhead "Pick the seat count that matches your studio. Switch any time."
2. **Billing context strip.** Small inline note: "Billed monthly per active seat. Inactive seats are free." — sits below subhead, gold underline accent on "free".
3. **Three-up pricing grid** (max-w-6xl, 24px gap, middle card is 8px taller and has a 1px `accent` top border and a small "Most teams pick this" badge in `accent-deep`).
   - **Card 1 — Studio, $49 / seat / mo.** Eyebrow `STUDIO` · serif price `$49` with `/seat/mo` in 14px sans underneath · 2-line description "For solo producers and 2–5 person studios getting their first pipeline off the ground." · feature list (10 items, each a single line ending in a small signal tick): unlimited active jobs, 3 pipeline templates, client approval portal, 5GB file storage, email support, single workspace, etc. · CTA: secondary `Button` "Start with Studio" → `/sign-up?plan=studio`.
   - **Card 2 — Agency, $79 / seat / mo.** Same structure. Description: "For 6–40 person agencies running multiple client pipelines at once." Features: everything in Studio plus unlimited workspaces, custom pipeline templates, 100GB storage, Slack/Linear webhooks, priority support, audit log, SSO via Google. CTA: primary `Button` "Start with Agency" → `/sign-up?plan=agency`.
   - **Card 3 — Enterprise, Custom.** Price is the word "Custom" in serif. Description: "For 40+ person agencies and holding companies with security and procurement needs." Features: everything in Agency plus dedicated CSM, custom MSA/SLA, SCIM provisioning, on-prem file storage option, 99.9% uptime SLA, custom integrations. CTA: secondary `Button` "Talk to sales" → `/contact?topic=enterprise`.
4. **Comparison footnote.** 4-column "All plans include" strip (signal tick + label): SOC 2 Type II in progress, daily backups, EU/US data residency, no per-job fees.
5. **FAQ teaser.** "Common questions" link with signal tick → scrolls to in-page FAQ (uses the same FAQ component as the Pricing page; reuse the data array).

**`/case-studies` — The Gridion Impact**
1. **Page header.** Eyebrow `CASE STUDIES` · H1 serif "The Gridion impact." · subhead "Three projected scenarios based on the average 10–40 person digital agency."
2. **Disclaimer band** (1px `accent-deep` left border, ivory background, 16px padding). Text: "These are illustrative scenarios, not customer results. Numbers are modeled from industry benchmarks and have not been validated by a Gridion customer."
3. **Three scenario sections** (full-width, stacked, each 1200px max, separated by hairlines). Each section is a 2-column grid (5/7 split on desktop, stacked on mobile):
   - **Left rail (sticky on scroll):** "SCENARIO 01" eyebrow (or 02, 03) · agency profile card: name, headcount range, billings range, primary services, tools they were using. A small `PROJECTED` badge (uppercase, 11px, `accent-deep` text, 1px `accent-deep` border, 2px radius).
   - **Right content:** Three sub-blocks, each a tiny eyebrow + 1–2 sentence body. `THE CHALLENGE` (2–3 sentences describing the pain — 10+ hrs/week coordination, scattered approvals, version chaos, etc.). `THE APPROACH` (2–3 sentences describing how they'd set up Gridion — which pipeline template, which integrations, which automations). `THE PROJECTED OUTCOME` (3 bullet metrics, each `metric + delta`, e.g. "Coordination overhead: −8 hrs/week", "Approval cycle time: 4.2 days → 1.5 days", "Tool spend: $14.3K/yr → $6.8K/yr". Each metric is preceded by a signal tick).
4. **Footer CTA band.** "Want to model your own scenario?" → secondary `Button` "Book a 30-min mapping call" → `/contact?topic=scenario`.

**`/proposals` — Proposal Templates**
1. **Page header.** Eyebrow `PROPOSALS` · H1 serif "Three proposal templates." · subhead "Open, customize, send. The structure is proven; the words are yours."
2. **Three template cards** (3-column grid on desktop, stacked on mobile). Each card is a `Card` with a 1px `line` border:
   - **Top strip:** 12px-tall accent-gold underline (only the leftmost 64px, decorative).
   - **Eyebrow** `TEMPLATE 01` (or 02, 03) + type label `WEBSITE REDESIGN` (etc).
   - **Serif H3** "Website Redesign Proposal" (or "Brand Identity Engagement" / "Digital Marketing Retainer").
   - **2-line description** ("A scoped, fixed-fee engagement with discovery, design, and launch phases.").
   - **Section preview list** (5 sections, each a small sans line ending in a thin `—` leader and a word count, e.g. "Executive summary — 120 words").
   - **Footer row:** "Open in editor" icon-link on the left, primary `Button` "Use template" on the right.
3. **`Use template` behavior:** click opens a centered Dialog (max-w-3xl, ivory background, 1px `line` border) titled "Website Redesign — full outline". The dialog body shows the full section list with prompts under each section header (e.g. "Goals: What business outcome does the client want in 90 days?"). Bottom-right of the dialog: secondary `Button` "Copy outline" + primary `Button` "Close". Clicking Copy fires `navigator.clipboard.writeText(...)` of the full template as markdown, then shows a toast `Outline copied — paste into your doc`.

**`/pricing` (enhancement of existing page)**
1. **Existing pricing cards stay.** Above the cards, add a `BillingToggle` component: two side-by-side text buttons "Monthly" / "Annual · save 20%", with a 2px `accent` underline that slides between them (180ms). When `annual` is active, each price recalculates client-side: `monthly * 12 * 0.8` displayed as a single annual number OR as the equivalent monthly. Add a small `Billed annually` subline under the price when annual is active.
2. **Below the existing pricing section, add a new section:**
   - Eyebrow `FAQ` · H2 serif "Common questions." · subhead "If yours isn't here, ask us directly."
   - 8-question FAQ accordion (reuse `<FaqAccordion />`). Each row: question on the left, `+`/`−` icon on the right, 1px `line` border between rows. Body reveals below with 200ms ease-out. Questions cover: seat counting (active vs inactive), annual vs monthly lock-in, mid-cycle plan changes, data export on cancel, security/compliance, support SLAs, agency vs studio differences, enterprise procurement.

**`/dashboard/playbook` (protected)**
1. **Page header.** Eyebrow `CLOSE PLAYBOOK` · H1 serif "The close framework." · subhead "Five sections. Use them in order, or jump to the one you need for the call you're about to take."
2. **Section index strip** (horizontal scroll on mobile, inline on desktop). 5 small pills, each a section name: Discovery, Demo, Objections, Pricing, Closing. Clicking a pill scrolls to and expands that section. The pill gets a 1px `accent` border when its section is expanded.
3. **Five accordion sections** (1px `line` border, 64px between sections). Each section, when expanded, shows:
   - Section eyebrow + serif H2 title.
   - Right-aligned ghost `Button` "Copy section" — copies the section body as markdown to clipboard and fires a toast `Section copied`.
   - Body content, formatted as a mix of short paragraphs and bulleted lists. Real, usable copy — not Lorem Ipsum.
4. **Section content (written for an agency BD lead closing a new client engagement):**
   - **Discovery Call Framework.** 6 steps with a one-line purpose and 2–3 sample questions each: (1) Warm-up — establish rapport, 90 seconds max. (2) Context — what changed that triggered this conversation. (3) Current state — what tools/process they use today and where it breaks. (4) Stakeholders — who's involved, who signs. (5) Success criteria — what does done look like in 90 days. (6) Next step — book the demo with a specific date and time, not "we'll be in touch".
   - **Demo Script.** 4 acts with timing: Opening (5 min, restate the problem they said on the call and confirm), Discovery confirmation (5 min, ask 2 questions to make them feel heard), Demo (25 min, only show the 2–3 pipeline templates relevant to their workflow, never the full product), Close (5 min, recap + book next step).
   - **Objection Handling.** 5 common objections each with a label, what the prospect actually means, and a 2–3 sentence response: "We're already using Asana/Monday", "It's too expensive for a 5-person agency", "We tried something like this before", "I need to talk to my partner", "Can you send me a deck?". Each response is conversational, not dismissive.
   - **Pricing Conversation Guide.** 5-step sequence: anchor to the cost of the status quo first, name the price without apology, explain what's included in one breath, pause (don't fill the silence), ask "Does that match what you expected?". Plus a short note on when to offer annual (only when they've already said yes to scope).
   - **Closing Checklist.** Two-column layout: "Before the close call" (7 items: proposal sent 48h ahead, decision-makers confirmed, current pipeline audit reviewed, pricing page link ready, 3 references available, contract template loaded, success criteria written down) and "On the call" (6 items: restate the problem, walk the proposal section by section, confirm scope and price out loud, ask for the close, send the contract in the same meeting, book the kickoff before hanging up).

## 4. USER FLOWS

**Flow A — Public visitor exploring Gridion (no auth)**
1. Lands on `/` → clicks "Pricing" in header → `/pricing` loads.
2. Toggles "Annual" → prices recalculate, `Billed annually` subline appears.
3. Scrolls to FAQ → expands "How do you count seats?" → reads answer → collapses.
4. Clicks "Services" in header → `/services` loads → clicks "Start with Agency" → redirects to `/sign-up?plan=agency`.
5. Hits `middleware.ts` redirect on `/dashboard/playbook` → bounced to `/sign-in?next=/dashboard/playbook`.

**Flow B — Authenticated agency operator, using Playbook**
1. Signs in → lands on `/dashboard/overview`.
2. Clicks "Playbook" in sidebar → `/dashboard/playbook` loads (no auth bounce because session is valid).
3. Reads Discovery Call Framework, clicks "Copy section" → toast appears top-right: `Section copied` · fades after 2.4s.
4. Clicks the "Objections" pill in the index strip → page scrolls smoothly to the Objections section, accordion auto-expands, pill gets accent border.
5. Expands a second section → first stays open (multi-expand accordion).
6. Logs out via existing user menu → returns to `/`.

**Flow C — Visitor evaluating proposal templates**
1. Clicks "Proposals" in header → `/proposals` loads.
2. Hovers "Use template" on the Brand Identity card → button darkens 1 step (existing hover treatment).
3. Clicks "Use template" → Dialog opens, body scrolls locked.
4. Reads section prompts → clicks "Copy outline" → toast `Outline copied — paste into your doc` appears top-right.
5. Clicks "Close" → Dialog dismisses, focus returns to the "Use template" button that opened it (focus trap).

**Flow D — Case study reader**
1. Clicks "Case Studies" in header → `/case-studies` loads.
2. Reads the disclaimer band first.
3. Scrolls through 3 scenarios, left rail stays sticky on desktop.
4. Clicks "Book a 30-min mapping call" in the footer band → `/contact?topic=scenario` (existing contact page, just prefills the topic field if such a field exists, otherwise just navigates).

## 5. PAGES / ROUTES

| Route | Auth | Purpose | Layout & key UI |
|---|---|---|---|
| `/services` | public | Show 3 service packages with prices and features | Page header · billing note · 3-card grid (Agency featured) · "All plans include" strip · FAQ teaser |
| `/case-studies` | public | Show 3 projected agency scenarios with disclaimer | Page header · disclaimer band · 3 stacked scenario blocks (sticky left rail) · footer CTA band |
| `/proposals` | public | Show 3 proposal templates with preview dialog | Page header · 3 template cards · Dialog (full template outline) · toast system |
| `/pricing` (existing, enhance) | public | Existing pricing + annual toggle + FAQ section | Existing pricing cards · `BillingToggle` above cards · FAQ accordion below |
| `/dashboard/playbook` | protected (Supabase session) | Sales close framework for the agency operator | Page header · section index pills · 5 accordion sections · copy-to-clipboard + toast |

## 6. CORE FEATURES

1. **BillingToggle** — two-state control bound to a `useState<'monthly' | 'annual'>`. On change, fires a custom event `gridion:billing-change` and updates local state. Visual: text buttons separated by a 1px `line` divider, with a 2px `accent` underline that translates between the two (CSS transform on a positioned `span`, 180ms ease-out). When `annual` is active, a small `Save 20%` chip appears next to the "Annual" label in `accent-deep` text.

2. **Dynamic price recalculation** — each pricing card receives a `monthly` and `annual` prop. Toggle reads from a `BillingContext` (lightweight React context with `mode` + `setMode`). When `annual` is active, the price node renders `${(monthly * 12 * 0.8).toFixed(0)} / yr` with a smaller `/seat / yr` subline; the equivalent monthly `${(monthly * 0.8).toFixed(0)} / seat / mo` appears in 13px underneath as the "billed annually, equivalent to" line.

3. **Template preview Dialog** — Radix-style (or hand-rolled) modal. Opens on `Use template` click. Body is a scrollable list of section headers, each followed by a small italic prompt sentence. Footer has `Copy outline` (writes a markdown string to clipboard, fires toast) and `Close`. ESC key and backdrop click both close. Focus is trapped while open and restored on close.

4. **Toast system** — `<ToastProvider>` mounted in the root layout (marketing layout for public pages, dashboard layout for `/dashboard/playbook` — wrap both). Exposes a `useToast()` hook returning `{ show: (message, variant?) => void }`. The provider renders a fixed top-right stack (max 3 visible, oldest dismissed on overflow). Each toast: ivory background, 1px `line` border, 2px `accent` left bar, 14px sans message, 2.4s auto-dismiss, dismissible on click. Animation: slide in from right (12px translate, 200ms) + fade.

5. **Copy-to-clipboard helper** — single `lib/clipboard.ts` exporting `copyToClipboard(text: string): Promise<boolean>`. Wraps `navigator.clipboard.writeText`, returns `false` and logs once if the API is unavailable (does not throw). Called by both the template dialog and the playbook copy buttons, both of which then call `useToast().show('Copied')` on success.

6. **FAQ accordion** — `<FaqAccordion items={items} />` server-renderable, hydrates as a client component. Multi-expand (no `single` mode). Each row: question (16px sans), `+`/`−` icon (rotates 90° on expand, 180ms), body reveals with `