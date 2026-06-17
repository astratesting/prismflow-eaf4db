# Prismflow — Build Plan (Landing + Auth + Dashboard)

## 1. PRODUCT
Prismflow is an activation-rate-first onboarding optimization platform for mid-market B2B SaaS. The landing page already exists with the warm SaaS design system; this build adds the full product: email+password auth, a `/dashboard` that opens on activation metrics (the number every PM/VP Product at a mid-market SaaS company is measured on), a flow builder/manager, an activation funnel analytics view, and account settings. The core pain: 62.5% of trial users never reach the activation event, costing the ICP real MRR (a 25% activation lift = 34% MRR gain). Prismflow makes that lift measurable and actionable.

## 2. WHO IT'S FOR
**ICP:** Product Managers and VP Product at B2B SaaS companies, 50–500 employees, 1k–50k MAUs, mid-market pricing tier ($40k–$60k ACV). They are time-poor, live in Linear/Notion/Slack, measure themselves on activation and retention, and distrust bloated enterprise tools (WalkMe's $32k+/yr heaviness, Pendo's steep learning curve). They want to see activation rate move in a week, not a quarter.

**How this shapes the product:**
- Default the dashboard to a single "Today" view with the **Activation Rate** number top-left. No nested menus.
- Every screen answers one question: "Are users activating, and what do I do next?"
- Tone: confident, plain-spoken, numbers-first. No "synergy," no "best-in-class."
- Time-to-insight: under 60 seconds from signup → seeing a funnel.

## 3. LOOK & FEEL

### Visual System (carried from landing)
- **Palette:** violet `#7C3AED` (primary), coral `#FF6B6B` (accent/CTAs), honey `#F59E0B` (warning/insight), warm off-white `#FFF7ED` (canvas), ink `#1F1730` (text), muted `#6B5B7A` (secondary text), hairline `#F0E4D8` (borders), success `#10B981`, danger `#EF4444`.
- **Typography:** Manrope 600/700 for headings; Source Sans 3 400/500/600 for body. Numerals tabular for metrics.
- **Type scale:** Display 40/48, H1 30/36, H2 24/32, H3 18/28, Body 15/24, Small 13/20, Micro 11/16 (uppercase, tracked).
- **Spacing:** 4px base; rhythm 8/12/16/24/32/48.
- **Radius:** sm 8, md 12, lg 16, xl 24. Cards 16. Buttons 10.
- **Shadow:** `0 1px 2px rgba(31,23,48,0.06), 0 8px 24px rgba(124,58,237,0.08)`.
- **Surfaces:** Dashboard canvas `#FFFCF8` (a half-step warmer than the landing `#FFF7ED` to reduce glare in long sessions). Cards `#FFFFFF` on canvas with 1px `#F0E4D8` border.
- **Iconography:** Lucide React. Compass motif lives in: (a) the app logo (unchanged from landing), (b) an empty-state illustration on `/dashboard/flows` and `/dashboard/analytics`, (c) a subtle 4-point sparkle on the "Live" status pill.
- **Imagery:** No stock photos inside the app. Soft gradient washes (`#FFF7ED → #F5E9FF`) used sparingly for hero cards.
- **Motion:** 150ms ease-out for hovers, 250ms ease-out for panel transitions, 400ms for route fades. No bounce. Subtle compass-needle rotation (0→45deg over 600ms) on the Overview page when data loads.

### Components (shared)
- `<Button variant="primary|secondary|ghost|danger" size="sm|md|lg">`
- `<MetricCard label value delta trend>` — delta is colored (honey up is good if metric up, coral if metric down; success green for in-target).
- `<Sidebar>` — 240px fixed, collapsible to 64px icon-only. Brand compass at top, nav items, user pill at bottom.
- `<Topbar>` — 64px, page title left, contextual actions right (e.g., "New flow" on /flows).
- `<DataTable>` — sticky header, zebra `#FFFCF8`, row hover `#F5E9FF`.
- `<Chart>` — Recharts wrapper with warm palette and 4px grid lines.
- `<EmptyState illustration="compass"|"funnel" title cta>` — coral/violet compass SVG inline.
- `<StatusPill status="draft|live|paused|archived">`
- `<FormField label hint error>` — input/select/textarea all styled the same.

### Screen-by-Screen Layout

**`/` (existing landing — kept as-is, sign-in link in header now points to `/sign-in`)**

**`/sign-up`**
- Centered card (max-w 440px) on `#FFF7ED` canvas, top compass logo linking to `/`.
- H1 "Create your workspace." Sub: "Free during early access. No card required."
- Fields: Full name, Work email, Company name, Password (with strength meter using honey→violet gradient), Confirm password.
- Primary CTA "Create workspace" (violet→coral gradient button, full width).
- Below: "Already have an account? Sign in" link.
- Side panel (hidden on mobile): soft gradient panel with three lines: "See your activation rate in 60 seconds." / "Build a flow in under 5 minutes." / "No credit card."

**`/sign-in`**
- Same centered card. H1 "Welcome back." Sub: "Sign in to your Prismflow workspace."
- Email + Password. "Sign in" CTA. "Forgot password?" link (sends reset email via Supabase, shows toast on success, never reveals whether email exists).
- Footer link to `/sign-up`.

**`/auth/callback`**
- Server component, calls `exchangeCodeForSession`, redirects to `/dashboard`. If error, redirects to `/sign-in?error=callback`.

**`/dashboard` (Overview — the default after login)**
- Sidebar left (240px). Topbar: "Overview" + date range pill (Last 7 days, default).
- Main grid (12-col, gap 24):
  - **Row 1 — Hero metrics (4 cards, col-span-3 each):**
    1. **Activation Rate** — large number (Manrope 48, tabular), delta vs. previous period, mini sparkline (violet). Subtitle: "Users reaching `app.activated` event."
    2. **New Activated Users** — count, delta, coral sparkline.
    3. **Avg. Time-to-Activate** — duration, delta (down is good, shown in success green).
    4. **Flow Completion Rate** — %, honey sparkline.
  - **Row 2 (8/4 split):** Activation funnel chart (Recharts area, violet→coral gradient fill) | Quick Actions card with three buttons: "+ New flow", "View analytics", "Install snippet" (each opens the right route or copies a snippet to clipboard with toast).
  - **Row 3 (full width) — Recent Flows table:** Columns: Name · Status (pill) · Steps · Completion · Last edited. Empty state: compass illustration + "Create your first onboarding flow."
- Empty workspace state (no flows yet): whole page replaces metrics with a friendly onboarding card: "Let's set up your first flow in 3 steps" → button to `/dashboard/flows?new=1`.

**`/dashboard/flows`**
- Topbar: "Onboarding Flows" + "+ New flow" primary button (opens slide-over drawer).
- Left: filter chips (All / Draft / Live / Paused / Archived) + search input.
- Right: card grid (3 cols on desktop) of flow cards. Each card: name (H3), status pill, 3-line description, 4-stat strip (Users · Completion · Avg time · Last run), kebab menu (Edit / Duplicate / Pause / Archive).
- Drawer (`/dashboard/flows?new=1`): title field, description, activation event selector (dropdown populated from `events` table, or "+ Define new event"), steps list (drag-handle reorderable, each step: type select [tooltip / checklist / modal / email], title, content textarea), primary "Save as draft" + secondary "Publish".

**`/dashboard/analytics`**
- Topbar: "Analytics" + export button (generates CSV from current view).
- Left rail (180px): funnel builder — list of events in order with drag-reorder, "+ Add step" button. "Save funnel" CTA.
- Main: large funnel chart (Recharts bar funnel, violet gradient) showing drop-off between steps with absolute counts + % conversion between steps.
- Below: line chart of activation rate over time (toggle Day/Week/Month), with benchmark band (industry avg 37.5% drawn as dotted honey line, labeled "Industry median").
- Cohort retention heatmap (simple grid, violet intensity).
- Empty state: compass + "Track your first event to see analytics."

**`/dashboard/settings`**
- Tabs (vertical left nav, 200px): Account · Workspace · Members · Integrations · Billing.
- **Account:** name, email (read-only, with "Change email" link sending confirmation), avatar upload, "Update password" (current + new + confirm, Supabase `updateUserById`).
- **Workspace:** workspace name, slug, timezone, industry (select: SaaS / Fintech / Other — affects benchmark shown in analytics).
- **Members:** table (Name, Email, Role [Owner/Editor/Viewer], Status, kebab). "Invite member" opens modal with email + role select. Invitations table below.
- **Integrations:** cards for "Install snippet" (shows the JS snippet with copy button — actual code from a code template, not invented), "Webhooks" (URL + secret, copy), "API keys" (list with masked tokens, rotate button).
- **Billing:** honest copy ("Early access — no charges today"), placeholder plan card (Starter / Growth labels but prices shown only as "Contact us" until published), current plan indicator. No fake invoices.

## 4. USER FLOWS

**Flow A — Sign up & first-run**
1. User lands on `/`, clicks "Start free" → `/sign-up`.
2. Submits form → Supabase `signUp` with `emailRedirectTo: /auth/callback`. Toast "Check your email to confirm."
3. User clicks email link → `/auth/callback` exchanges code → redirect `/dashboard`.
4. Middleware sees `profiles` row missing or workspace empty → Overview shows empty-state card.
5. User clicks "Create your first flow" → drawer at `/dashboard/flows?new=1`. Saves draft.
6. User clicks "Install snippet" → copies code → pastes into their app → first event fires.
7. Overview metrics populate from seeded sample events; user sees non-zero funnel.

**Flow B — Returning user**
1. Hits `/dashboard/*` → middleware checks Supabase session; if missing, redirect to `/sign-in?next=/dashboard/flows`.
2. Sign in → server action sets cookie via `@supabase/ssr` → redirect to `next` param.
3. Dashboard renders with persisted filters.

**Flow C — Forgot password**
1. `/sign-in` → "Forgot password?" → modal asks email → `resetPasswordForEmail` with `redirectTo: /auth/callback?type=recovery`.
2. Callback exchanges, redirects to `/dashboard/settings?tab=account&reset=1` showing "Set a new password" form → `updateUser({ password })` → success toast.

**States covered:** loading (skeleton cards with subtle shimmer using honey→violet 8% gradient), empty (compass illustration + CTA), error (toast + inline form error), success (toast top-right, 3s). Sign-out clears cookies via Supabase client and redirects to `/`.

## 5. PAGES / ROUTES

| Route | Purpose | Layout |
|---|---|---|
| `/` | Existing landing | Unchanged, sign-in/up links wired |
| `/sign-up` | Create account | Centered card + side panel |
| `/sign-in` | Sign in | Centered card |
| `/forgot-password` | Request reset | Centered card, email only |
| `/auth/callback` | OAuth/recovery code exchange | Server component, redirects |
| `/auth/sign-out` | Server action route, signs out + redirects `/` | Server-only |
| `/dashboard` | Overview metrics + recent flows | Sidebar + Topbar + 12-col grid |
| `/dashboard/flows` | Manage flows | Sidebar + Topbar + filter chips + card grid |
| `/dashboard/flows/[id]` | Flow detail/edit | Sidebar + Topbar + full editor (title, steps, status controls) |
| `/dashboard/analytics` | Funnel + retention charts | Sidebar + Topbar + funnel builder rail + chart area |
| `/dashboard/settings` | Account/workspace/members/integrations/billing | Sidebar + Topbar + vertical tab nav |
| `/api/flows` (POST/GET/PATCH/DELETE) | CRUD flows | Route handler, Supabase server client |
| `/api/events` (POST) | Ingest events from snippet | Route handler, validates, inserts |
| `/api/funnel` (GET) | Compute funnel for given event list + date range | Route handler |

## 6. CORE FEATURES

**Auth (Supabase, `@supabase/ssr`)**
- Email + password only. `signUp`, `signInWithPassword`, `signOut`, `resetPasswordForEmail`, `updateUser`.
- Server client created per-request via `createServerClient` using cookies adapter.
- Browser client for client components. Same pattern.
- Middleware (`middleware.ts`) refreshes session on every request to `/dashboard/*`, redirects unauthenticated to `/sign-in?next=<path>`.
- Service-role key is server-only; never exposed. Anon key is in `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

**Dashboard overview**
- Fetches metrics from `/api/funnel` with default `events = [signed_up, activated]` and `range = 7d`.
- Recent flows: `SELECT id, name, status, steps, completion_rate, updated_at FROM flows ORDER BY updated_at DESC LIMIT 5`.
- Quick actions: copy snippet (writes to clipboard, toast "Snippet copied").

**Flows**
- Create / edit / archive flows. Steps stored as JSONB: `{ id, type, title, body, order }`.
- Status transitions: draft → live (publishes, requires ≥1 step + activation event defined) → paused → archived. Enforced in server action, not just UI.
- Duplicate creates a copy with `(copy)` suffix, status=draft.
- Drag-reorder persists new `order` indices on save.

**Analytics**
- Funnel builder persists `saved_funnels` per workspace.
- Funnel query: `SELECT event_name, COUNT(DISTINCT user_id) FROM events WHERE workspace_id=$1 AND ts >= $2 GROUP BY event_name` then computes step-to-step conversion in JS.
- Time-series: `date_trunc('day', ts)` grouped count.
- Benchmark band constant from research (37.5%) — labeled honestly as "Industry median (2024)" with tooltip linking to source note, not invented as "Prismflow benchmark."

**Settings**
- Profile updates via Supabase `updateUser` + `profiles` table for app-specific fields (avatar URL, full name).
- Members: server action invites by email; if user already exists, adds to `workspace_members`; otherwise creates `invitations` row and emails a join link.
- Install snippet: returns actual JS that posts to `/api/events` — code is a real template, not invented, with a workspace API key injected server-side.

**Empty-state behavior**
- All dashboard pages render a `compass` empty state when the underlying data is empty. No fabricated "you have 12 users" placeholders.

## 7. DATA MODEL (Supabase Postgres)

```
profiles
  id uuid PK (refs auth.users)
  full_name text
  avatar_url text
  created_at timestamptz

workspaces
  id uuid PK
  name text
  slug text unique
  timezone text
  industry text check in ('saas','fintech','other')
  owner_id uuid (refs profiles.id)
  created_at timestamptz

workspace_members
  id uuid PK
  workspace_id uuid (refs workspaces.id)
  user_id uuid (refs profiles.id)
  role text check in ('owner','editor','viewer')
  unique(workspace_id, user_id)

invitations
  id uuid PK
  workspace_id uuid
  email text
  role text
  token text unique
  expires_at timestamptz
  accepted_at timestamptz null

flows
  id uuid PK
  workspace_id uuid
  name text
  description text
  status text check in ('draft','live','paused','archived')
  steps jsonb default '[]'
  activation_event text
  created_by uuid
  created_at timestamptz
  updated_at timestamptz

events
  id bigserial PK
  workspace_id uuid
  user_id text  -- external user id from customer app
  event_name text
  properties jsonb
  ts timestamptz default now()
  index (workspace_id, event_name, ts)

saved_funnels
  id uuid PK
  workspace_id uuid
  name text
  event_order text[]
  created_at timestamptz

api_keys
  id uuid PK
  workspace_id uuid
  name text
  key_hash text  -- never store plaintext
  last_four text
  created_at timestamptz
  revoked_at timestamptz null
```

RLS enabled on every table; policies restrict to `workspace_id` matching the caller's membership.

## 8. AUTH
Email + password via Supabase Auth using `@supabase/ssr`. No social OAuth buttons (would be dead without provisioned credentials). No Clerk. Middleware protects `/dashboard/:path*`. Reset and email confirmation handled by Supabase redirecting to `/auth/callback`.

## 9. FILES
FILES:
[
  "middleware.ts",
  "app/layout.tsx",
  "app/page.tsx",
  "app/globals.css",
  "app/sign-up/page.tsx",
  "app/sign-in/page.tsx",
  "app/forgot-password/page.tsx",
  "app/auth/callback/route.ts",
  "app/auth/sign-out/route.ts",
  "app/dashboard/layout.tsx",
  "app/dashboard/page.tsx",
  "app/dashboard/flows/page.tsx",
  "app/dashboard/flows/[id]/page.tsx",
  "app/dashboard/analytics/page.tsx",
  "app/dashboard/settings/page.tsx",
  "app/api/flows/route.ts",
  "app/api/flows/[id]/route.ts",
  "app/api/events/route.ts",
  "app/api/funnel/route.ts",
  "app/api/invitations/route.ts",
  "lib/supabase/server.ts",
  "lib/supabase/client.ts",
  "lib/supabase/middleware.ts",
  "lib/auth/actions.ts",
  "lib/db/schema.sql",
  "lib/analytics/funnel.ts",
  "components/Button.tsx",
  "components/MetricCard.tsx",
  "components/Sidebar.tsx",
  "components/Topbar.tsx",
  "components/DataTable.tsx",
  "components/Chart.tsx",
  "components/EmptyState.tsx",
  "components/StatusPill.tsx",
  "components/FormField.tsx",
  "components/FlowCard.tsx",
  "components/FlowDrawer.tsx",
  "components/FunnelBuilder.tsx",
  "components/SnippetInstallCard.tsx",
  "components/illustrations/Compass.tsx",
  "tailwind.config.ts",
  ".env.local.example",
  "supabase/migrations/0001_init.sql",
  "supabase/migrations/0002_rls.sql"
]

## 10. ACCEPTANCE
- [ ] `/`, `/sign-up`, `/sign-in`, `/forgot-password`, `/auth/callback` all render with the warm SaaS palette and Manrope/Source Sans 3.
- [ ] Signing up creates a Supabase auth user, a `profiles` row, and a default `workspaces` row owned by them.
- [ ] Middleware redirects unauthenticated visits to `/dashboard/*` to `/sign-in?next=...` and returns the user to `next` after sign-in.
- [ ] Sign-out clears cookies and lands on `/`.
- [ ] `/dashboard` shows four metric cards, a funnel chart, a quick-actions card, and a recent-flows table — all populated from real Supabase queries (or honest empty states).
- [ ] `/dashboard/flows` lists flows in a card grid with working filter chips and a working `+ New flow` drawer that persists to `flows`.
- [ ] `/dashboard/flows/[id]` loads, edits, and saves a flow including step reorder.
- [ ] `/dashboard/analytics` renders a funnel from real `events` rows and a benchmark line at 37.5% labeled "Industry median."
- [ ] `/dashboard/settings` shows Account / Workspace / Members / Integrations / Billing tabs; invite flow creates an `invitations` row.
- [ ] `/api/events` POST accepts `{ workspace_key, user_id, event_name, properties }` and inserts a row.
- [ ] No dead buttons, no invented testimonials/logos/revenue numbers, no social OAuth buttons, no Clerk.
- [ ] All colors match the spec (`#7C3AED`, `#FF6B6B`, `#F59E0B`, `#FFF7ED`); compass motif appears in logo, empty states, and load animation.