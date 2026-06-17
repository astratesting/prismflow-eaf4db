# Prismflow — Production Build Plan

## 1. PRODUCT

Prismflow is a B2B SaaS Digital Adoption Platform that lets a product team author and ship in-app onboarding flows (tooltips, hotspots, checklists, modals) without an engineering release, then measure activation lift on those flows in a single analytics view. The core value is: a PM or growth lead drops one JS snippet into their app, builds a flow in the dashboard in under five minutes, and within hours can see completion/drop-off per step and per segment — closing the loop between "we shipped onboarding" and "users actually activated." The primary user is a time-poor Product Manager or Head of Growth at a 50–500-person B2B SaaS company running 1k–50k MAUs who is losing ~62% of signups in week one (per the research benchmark of 37.5% activation) and needs a cheaper, faster alternative to WalkMe/Pendo/Whatfix.

## 2. WHO IT'S FOR

The ICP is a PM/VP Product at a mid-market B2B SaaS company (50–500 employees, 1k–50k MAUs). They are:
- **Time-poor** → the dashboard opens on a single "Today" view with one primary CTA (Create flow). No nested menus. Sidebar collapsed by default on first visit.
- **Numbers-driven** → the north-star metric is activation rate, surfaced as a big number with a delta. Every flow card shows live completion %.
- **Cares about segment lift, not vanity reach** → segment builder appears in the flow editor, not as a separate enterprise feature.
- **Distrusts sales-led tools** → the tone is plain, direct, no marketing fluff. Copy uses concrete numbers ("37.5% is the SaaS average; we'll show you yours"), not hype.

Tone: confident, technical, no exclamation marks on the landing page, no invented social proof. Honest empty states ("No flows yet — create your first one").

## 3. LOOK & FEEL

### Visual system

- **Positioning:** Calm, technical, premium-but-not-fancy. The product should feel like Linear or PostHog — not like a Salesforce module.
- **Palette (extending the existing brand):**
  - Background: `#0A1628` (navy) for dark surfaces, `#FFFFFF` and `#F8FAFC` for light surfaces.
  - Primary: `#3B82F6` (blue) — buttons, links, active state.
  - Accent: `#14B8A6` (teal) — success states, "live" indicators, activation up-arrows.
  - Neutrals: `#0F172A` (slate-900), `#334155` (slate-700), `#64748B` (slate-500), `#E2E8F0` (slate-200), `#F1F5F9` (slate-100).
  - Semantic: `#10B981` (emerald-500, complete), `#F59E0B` (amber-500, warning), `#EF4444` (red-500, error/drop-off).
- **Typography:** `Inter` for UI (weights 400/500/600/700), `Geist Mono` for snippet code blocks. Display headings use `tracking-tight` and tighter leading. Tabular numbers (`font-variant-numeric: tabular-nums`) on all metric values.
- **Spacing/layout:** 8px grid. Generous whitespace on landing (max-w-6xl, py-24 sections). Dashboard uses 4px grid, tighter (p-4, p-6, gap-3). Cards use `rounded-xl`, `border border-slate-200`, `shadow-sm`.
- **Iconography:** Lucide icons (already in Next.js ecosystem, tree-shakeable). 16px in dense UI, 20px in headers, 24px in empty states.
- **Imagery:** Landing page is **illustration + UI screenshots, no stock photos, no faces**. Dashboard is text + data + small SVG sparklines. No fake customer logos anywhere.
- **Motion:** Subtle. Hover transitions 150ms ease-out. Page transitions via Next.js `loading.tsx` skeletons (no spinners on the dashboard). Chart bars animate in on mount (200ms). Respect `prefers-reduced-motion`.

### Per-screen layout (top → bottom)

**Landing `/`**
1. **Nav** (sticky, backdrop-blur, white/80 with border-b). Left: Prismflow wordmark (teal dot + navy text). Center: Product, Pricing, Docs, Changelog. Right: "Sign in" (ghost) + "Start free" (primary blue).
2. **Hero** (existing `Hero.tsx`). H1: "Ship onboarding flows your users actually finish." Sub: "Build in-app tooltips, checklists, and tours in minutes. Measure activation lift in the same dashboard." Two CTAs: "Start free — no card" (primary) and "See a live demo" (ghost). Below: code snippet showing the install line (`<script src="https://prismflow.app/snippet.js" data-workspace="..." async></script>`) in a dark navy panel with copy button.
3. **Social-proof-free "By the numbers" strip** (honest, no fake logos): three columns showing *category benchmarks* from the research — "37.5% avg SaaS activation", "62% drop in week one", "25% activation lift = 34% MRR gain" — with caption "Industry benchmarks. We'll show you yours in the dashboard."
4. **How it works** (3 steps with Lucide icons: `MousePointerClick`, `SlidersHorizontal`, `LineChart`). Install snippet → Build flow in dashboard → See activation lift.
5. **Feature grid** (3×2): Flow Builder, Segments, Analytics, Checklist, A/B-ready events, Snippet SDK. Each card: icon, 1-line title, 2-line description, no fake "trusted by" lines.
6. **Code example section**: side-by-side — left: dark code block showing a flow definition (JSON), right: mock UI screenshot of the same flow rendered in a fake SaaS app.
7. **Pricing teaser** (links to `/pricing`): three tier cards (Free / Growth / Scale) with honest prices, no "most popular" badge on a fake social basis — just a "Recommended" label on Growth with reasoning ("For teams shipping 2+ flows/month").
8. **CTA band** (navy background, teal accent): "See your activation rate in 5 minutes." Primary button → /sign-up.
9. **Footer** (existing `Footer.tsx`): Product / Resources / Company columns, with honest copy ("We're a new product — your feedback shapes what we build.").

**Pricing `/pricing`**
- Three tier cards in a centered row, with a "Compare features" toggle that expands an honest matrix (no inflated checkmark counts). Each tier lists: MAUs included, flows allowed, segment definitions, data retention, seats, support response time.
- No fake "X teams use this" counters. FAQ accordion below.

**Features `/features`** (optional, but referenced from nav)
- Long-form section per feature, same visual system. Honest copy. No invented case studies.

**Sign-in `/sign-in` and Sign-up `/sign-up`**
- Centered card on a soft slate-50 background. Width: `max-w-sm`. Title, email, password (sign-up adds name + workspace name), primary button, "or" divider, link to the other. Below the card: a single line — "By continuing you agree to our Terms and Privacy Policy" (links open in new tab).
- Inline error states (red border + helper text), success state disables button and shows spinner.
- Post-sign-up: show a "Check your email" panel with the user's email and a "Resend" link.

**Auth callback `/api/auth/callback`** and **`/auth/confirm`**
- Server route that exchanges the Supabase code for a session, sets cookies, then redirects. The `/auth/confirm` page handles the `?code=` exchange with a loading state and a friendly error fallback if the link is expired (with a "Send a new one" button).

**Onboarding `/onboarding`** (post-signup, gated by middleware)
- Three steps in a left-rail progress UI:
  1. **Workspace** (prefilled from sign-up, editable).
  2. **Install snippet** — shows the JS line with the workspace key pre-filled, copy button, and a "How do I install this?" link to a /docs page (or anchor section).
  3. **Create your first flow** — inline mini-builder: name, audience (All users / New signups), one step (type: tooltip, target: CSS selector, content). Save → /dashboard.
- "Skip for now" link visible on steps 2 and 3 (you can finish in the dashboard).

**Dashboard `/dashboard`**
- **Header** (existing `DashboardHeader.tsx`): workspace switcher (left), search (center, `Cmd+K` palette), notifications + avatar menu (right).
- **Sidebar** (existing `DashboardNav.tsx`): icon + label for Overview, Flows, Segments, Analytics, Settings. Active state: blue-50 background + blue-600 text + 2px left border.
- **Main: Today view**
  - Top row: three metric cards (full width on mobile, 1/3 each on desktop). Each card: small label ("Activation rate", "Active flows", "Users in last 24h"), large tabular number, sparkline, delta vs. previous 7 days (green ↑ / red ↓ / slate —). On empty: "No data yet — install the snippet to start tracking."
  - Middle row: "Live flow activity" feed — a list of the 20 most recent `flow_view` / `flow_complete` events with timestamp, flow name, step, user id (hashed), event type as a colored dot. Empty state: "Once users start hitting your flows, you'll see them here in real time."
  - Bottom row: "Recommended next step" card (the one primary CTA): "Create your first flow" with a teal `+ New flow` button. On hover: subtle lift.

**Flows list `/dashboard/flows`**
- Header: "Flows" + filter chips (All / Draft / Live / Archived) + "New flow" primary button (right).
- Body: list of `FlowCard` rows — name, status badge, target segment, last published at, completion % (with teal progress bar), 7-day views, kebab menu (Duplicate, Archive, Delete).
- Empty state: centered card with illustration of an empty kanban, "No flows yet", "Build your first onboarding flow in under 5 minutes", primary button.

**New flow `/dashboard/flows/new`**
- Two-column layout. Left (60%): form — name, description, target segment (dropdown; "+ New segment" link opens modal), trigger ("On page load" / "On element click" / "After 5s"). Right (40%): live preview pane (empty until steps are added).
- Below: "Steps" section with a single empty `StepCard` row saying "Add your first step" → opens step type chooser (Tooltip / Hotspot / Modal / Checklist item).

**Flow editor `/dashboard/flows/[id]/edit`**
- Three-pane: left = step list (draggable, re-orderable), center = step config form (selector, title, body, position, "next" trigger), right = live preview iframe of a mock target page (or your own app if embedded). Top bar: flow name (editable), status pill (Draft / Live), "Preview as user" button, "Publish" primary button.
- Publish opens a confirm modal explaining the change will go live immediately and is reversible via "Pause".

**Flow detail `/dashboard/flows/[id]`** (read-only)
- Summary header (name, status, created, last published), then tabs: Performance / Steps / Settings.
- Performance: line chart (views + completions per day, 30d), funnel chart of step-by-step drop-off, top segments breakdown table.

**Analytics `/dashboard/analytics`**
- Global view across all flows. Time range picker (7d / 30d / 90d / Custom). Same metric cards as Today, plus a stacked bar chart "Activation by segment" and a "Top drop-off steps" list (the 5 steps with the worst completion %, with one-click "Open in editor").

**Segments `/dashboard/segments`**
- List with: name, user count (live), "used in N flows", kebab menu. "New segment" button.
- Segment builder: rule rows (attribute / operator / value, with AND/OR groups). Live count estimate on the right (queries Supabase with a count function; shows "— calculating" then a number with a 5% confidence hint).

**Settings `/dashboard/settings`**
- Sub-nav (within settings page): Workspace / Team / Billing / Integrations / API keys / Danger zone.
- Workspace: name, slug, logo upload, default segment, delete workspace (gated by typed confirmation).
- Team: member list with role badges (Owner / Admin / Editor / Viewer), invite by email, role change dropdown.
- Billing: current plan, usage bars (MAUs, flows), upgrade/downgrade buttons (stubbed — show a "Contact sales" modal for now, no fake Stripe success states).
- Integrations: list of "coming soon" tiles (Segment, Mixpanel, Slack, Webhook) — all clearly labeled "Coming soon" so nothing pretends to work that doesn't.
- API keys: generate/revoke keys (shown once on create).

## 4. USER FLOWS

### A. New customer: sign up → first flow
1. Land on `/`. Click "Start free" → `/sign-up`.
2. Fill form (name, email, password, workspace name) → submit. Server action calls `supabase.auth.signUp({...})`. Show "Check your email" panel.
3. User clicks email link → `/auth/confirm?code=...` exchanges code, sets session cookies, redirects to `/onboarding`.
4. Step 1: confirm workspace name → "Continue".
5. Step 2: copy install snippet. "I've installed it — verify" (calls a server action that hits a public health endpoint; on success, "Continue"). Or "Skip for now".
6. Step 3: build a tiny flow (name, segment, one tooltip step). Save → redirect to `/dashboard/flows/[id]/edit`. Show a success toast: "Flow created. Hit Publish to go live."
7. User publishes → status becomes Live → toast: "Live. Data will appear in a few minutes."

### B. End-user encounters a flow (the snippet)
1. Page loads on customer's app. Snippet fetches `/snippet.js?w={workspaceId}`.
2. Snippet reads a `prismflow` global config, calls `POST /api/track` with `{type: "identify", userId, traits}` if `prismflow.identify()` was called by the host app; otherwise uses an anonymous cookie id.
3. Snippet fetches `/api/flows?w=...&segment=...` to get active flows targeting this user.
4. For each step whose trigger matches, render the UI (tooltip / hotspot / modal / checklist).
5. On view/click/complete, fire `POST /api/track` with `{type: "flow_event", flowId, stepId, eventType, sessionId, ts}`. Server validates (workspace match), writes to `events` table.
6. Snippet is no-op if API is unreachable (catches errors, never throws to host page).

### C. Returning user: sign in → dashboard
1. `/sign-in` → email + password → `signInWithPassword` → on success, server sets cookies and redirects to `/dashboard` (or to `?next=` if present).
2. Middleware on `/dashboard/**` checks session, refreshes if needed, redirects to `/sign-in?next=/dashboard/...` if missing.
3. Dashboard layout loads workspace via server component (single Supabase query), passes to client children.

### D. Error states
- Expired confirmation link: `/auth/confirm` shows a card with "This link has expired or been used" + "Send a new verification email" button (calls `supabase.auth.resend`).
- Network error on track: snippet buffers up to 50 events in `localStorage` and retries with exponential backoff; never blocks UI.
- Build/deploy failure: Vercel build log is the only error surface — no fake "demo mode" that hides real errors.

## 5. PAGES / ROUTES

| Route | Purpose | Auth | Layout summary |
|---|---|---|---|
| `/` | Landing | public | Nav → Hero → Benchmarks → How it works → Features → Code → Pricing teaser → CTA → Footer |
| `/pricing` | Pricing tiers | public | Nav → 3 tier cards → Compare matrix → FAQ → Footer |
| `/features` | Feature detail | public | Nav → per-feature sections → Footer |
| `/sign-in` | Sign in | public | Centered card on slate-50 |
| `/sign-up` | Sign up | public | Centered card, includes workspace name |
| `/auth/confirm` | Email confirmation | public | Loading → success → redirect; error → resend card |
| `/api/auth/callback` | OAuth/code exchange (server) | public | 302 redirect, sets cookies |
| `/api/auth/sign-out` | Sign out (server action target) | auth | Clears session, redirects to `/` |
| `/onboarding` | 3-step setup | auth, must be signed in | Left rail progress + right form |
| `/dashboard` | Today view | auth | Header + Sidebar + 3 metric cards + activity feed + CTA card |
| `/dashboard/flows` | Flow list | auth | Header + filters + FlowCard list |
| `/dashboard/flows/new` | Create flow | auth | Two-column: form + preview |
| `/dashboard/flows/[id]` | Flow detail | auth | Header + tabs (Performance/Steps/Settings) |
| `/dashboard/flows/[id]/edit` | Flow editor | auth | 3-pane: steps / config / preview + Publish |
| `/dashboard/analytics` | Global analytics | auth | Time range + metric cards + charts + drop-off list |
| `/dashboard/segments` | Segments list | auth | List + builder modal |
| `/dashboard/segments/[id]` | Segment detail | auth | Builder + live count + used-in-flows list |
| `/dashboard/settings` | Settings landing (redirects to /workspace) | auth | Redirects |
| `/dashboard/settings/workspace` | Workspace settings | auth | Form + danger zone |
| `/dashboard/settings/team` | Team management | auth | Member table + invite |
| `/dashboard/settings/billing` | Billing | auth | Plan + usage + stubbed upgrade modal |
| `/dashboard/settings/integrations` | Integrations | auth | Grid of "Coming soon" tiles |
| `/dashboard/settings/api-keys` | API keys | auth | List + create modal (show once) |
| `/api/track` | Event ingestion (public, workspace-key scoped) | workspace-key | POST JSON → writes events |
| `/api/flows` | List/create flows (dashboard auth) | auth | GET list, POST create |
| `/api/flows/[id]` | Get/update/delete flow | auth | GET, PATCH, DELETE |
| `/api/segments` | List/create segments | auth | GET, POST |
| `/api/segments/[id]/count` | Live count estimate | auth | Returns count |
| `/api/workspaces` | Get/update workspace | auth | GET, PATCH |
| `/api/team/invite` | Invite member | auth | POST |
| `/api/team/[id]` | Update/remove member | auth | PATCH, DELETE |
| `/api/api-keys` | Create/revoke keys | auth | POST, DELETE |
| `/snippet.js` | Public JS bundle for customers | public (workspace-key param) | Serves minified IIFE |
| `/snippet/health` | Snippet liveness check | public | Returns `{ok:true, workspaceId}` |
| `/robots.txt` | SEO | public | Next.js `app/robots.ts` |
| `/sitemap.xml` | SEO | public | Next.js `app/sitemap.ts` |
| `/not-found.tsx` | 404 | public | Friendly card with link home |
| `/error.tsx` | Route error | any | Card with "Try again" + link to / |
| `/loading.tsx` (dashboard) | Dashboard skeleton | auth | Skeleton cards |

## 6. CORE FEATURES (each one real and working)

1. **Auth (Supabase email + password)** — Sign up, sign in, sign out, email confirmation, session refresh via `@supabase/ssr` middleware. Server actions for all auth mutations. No social providers (per the no-OAuth-without-credentials rule). Sign out button in avatar menu posts to `/api/auth/sign-out`.
2. **Workspace creation** — On sign-up, a `workspaces` row is created and the user is added as `owner` in `workspace_members`. Slug is auto-generated from name and used in snippet key.
3. **Install snippet** — Server-generated per workspace; one line: `<script src="https://prismflow.app/snippet.js" data-workspace="WS_KEY" async></script>`. Snippet is a small (~6KB) IIFE that lazy-loads flows, renders steps, and posts events. Idempotent (won't double-load). No external runtime deps.
4. **Flow builder** — Create flows with ordered steps. Step types: `tooltip` (CSS-selector target, position, title, body), `hotspot` (pulsing dot on element), `modal` (centered card, optional CTA URL), `checklist` (multi-item list rendered in a fixed corner widget). Each step has: id, type, order, target_selector, content (JSON), position, next_trigger (`auto` | `click_target` | `click_button` | `manual`). Save is optimistic with rollback on error.
5. **Segments** — Rule-based: `attribute operator value` joined by AND/OR groups, max 2 levels of nesting. Attributes whitelist: `plan`, `role`, `signed_up_after`, `country`, `mau_tier`, plus any custom traits sent via `prismflow.identify()`. Live count runs a parameterized SQL count.
6. **Flow targeting** — A flow is shown to a user iff the user's traits match the flow's segment (or the flow has no segment = "All users"). Matching is computed in the snippet by evaluating the segment rules client-side against the user's known traits (rules are shipped with the snippet response; no PII leaves the server beyond what the host app sent).
7. **Event tracking** — Snippet posts `{type, workspaceId, sessionId, anonymousId, userId?, flowId, stepId, eventType, ts, props}` to `/api/track`. Server validates workspace key, rate-limits (60 req/min per anonymousId, 600 per workspaceId/min), writes to `events`. Types: `identify`, `flow_view`, `step_view`, `step_complete`, `flow_complete`, `flow_dismiss`. `flow_complete` also updates `flow_runs`.
8. **Analytics dashboard** — Server component fetches aggregates via Supabase RPC: `get_dashboard_metrics(workspace_id, range)`, `get_flow_performance(flow_id, range)`, `get_drop_off(flow_id, range)`, `get_activity_feed(workspace_id, limit)`. Charts: line (views/completions over time), funnel (step-by-step), stacked bar (activation by segment), sparkline (per-metric). All charts use Recharts (small, tree-shakeable, no runtime surprises during build).
9. **Activity feed** — Realtime subscription via `supabase.channel('events').on('postgres_changes', ...)` limited to the last 20 events for the workspace. Falls back to polling every 10s if realtime is not enabled on the Supabase project.
10. **Team management** — Invite by email (sends a Supabase invite-style magic link stubbed to just create a `workspace_members` row with `pending` status; on the invitee's first sign-up they get the role). Roles enforced in middleware + RLS.
11. **Settings** — Workspace rename, slug, logo (Supabase Storage `avatars` bucket), danger-zone delete (typed-name confirmation, soft-delete then 7-day hard-delete job — for MVP just hard-delete with confirm).
12. **API keys** — Generate (returns plaintext once, stores hash), list (hashed only), revoke. Used by the snippet in server-to-server contexts; browser snippet uses the public workspace key.
13. **Snippet distribution** — `/snippet.js` route serves a static, minified JS file from `public/snippet.js` (built by a small esbuild script in `scripts/build-snippet.ts` so the public bundle is decoupled from the dashboard Next.js build).
14. **SEO basics** — `app/sitemap.ts` (only public routes), `app/robots.ts`, per-page `metadata` exports, OpenGraph image (generated via `app/opengraph-image.tsx`).
15. **Accessibility** — All interactive elements keyboard-reachable, focus rings (blue-500 outline, 2px, 2px offset), `aria-live="polite"` for toasts, color contrast ≥ AA on text.

## 7. DATA MODEL

All tables in Supabase Postgres. `id` is `uuid` default `gen_random_uuid()`. Timestamps `timestamptz` default `now()`. RLS enabled on every table.

- **workspaces** —