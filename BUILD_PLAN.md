# Prismflow — Build Plan

## 1. PRODUCT

Prismflow is a B2B SaaS onboarding optimization platform that lets product teams build, ship, and measure in-app onboarding flows without engineering tickets. The core value is **activation-rate lift**: research shows the average SaaS activation rate is 37.5% and a 25% activation improvement drives a 34% MRR increase over 12 months. The primary user is a Product Manager or Head of Growth at a mid-market B2B SaaS company (50–500 employees, 1K–50K MAUs) who is losing 62.5% of signups before activation and needs a faster, cheaper alternative to WalkMe/Pendo/Whatfix. Prismflow ships a focused flow builder, real-time activation analytics, and AI-suggested flow improvements — all behind a single dashboard.

## 2. WHO IT'S FOR

**ICP:** Product Managers, Growth leads, and Heads of Product at mid-market B2B SaaS companies (50–500 employees, 1K–50K MAUs) who own activation metrics and ship onboarding changes weekly.

**How this shapes the product:**
- **Time-poor, metric-obsessed.** Dashboard opens on a single Today view with one primary CTA ("Create your first flow") — no nested menus, no setup wizards longer than 3 steps.
- **Numbers-first.** Every screen surfaces a metric (activation %, completion %, drop-off). No decorative charts.
- **Self-serve.** No "contact sales" gating on the core feature. Pricing is transparent.
- **Tone:** confident, plain-spoken, slightly opinionated. "Ship a flow in 4 minutes" not "Empower your onboarding journey."

## 3. LOOK & FEEL

### Visual system

- **Vibe:** Warm SaaS — approachable but professional. Not corporate-blue, not playful-purple. Think Linear meets Notion's warmth.
- **Palette (from existing globals.css):**
  - `--violet` (#7c3aed) — primary actions, links, focus rings
  - `--coral` (#fb7185) — secondary accent, highlights, "live" indicators
  - `--honey` (#f59e0b) — warnings, in-progress states, metric highlights
  - `--warm-off-white` (#faf7f2) — page background
  - `--ink` (#1a1a1a) — primary text
  - `--muted` (#6b6b6b) — secondary text
  - `--surface` (#ffffff) — cards
  - `--border` (#e8e3d8) — dividers
- **Typography:** Manrope (display, headings, buttons), Source Sans 3 (body, tables). Headings tight tracking, body relaxed.
- **Spacing:** 4px base. Cards use 24px padding. Sections separated by 64–96px vertical rhythm.
- **Surfaces:** 12px rounded corners on cards, 8px on inputs/buttons. Subtle 1px borders, no heavy shadows. One soft shadow reserved for floating elements (dropdowns, modals).
- **Iconography:** Lucide icons, 16px in dense UI, 20px in cards, 24px in feature blocks. Stroke width 1.5.
- **Imagery:** No stock photos. Abstract gradient blobs (violet→coral) for hero backgrounds. Product screenshots are real dashboard mockups.
- **Motion:** 150ms ease-out on hover, 200ms on state changes. Subtle scale (1.02) on card hover. No bouncy springs.

### Screen-by-screen layout

**Landing page (`/`) — already exists, keep as-is:**
- Sticky transparent navbar (logo left, nav center, Sign in + "Start free" CTA right)
- Hero: left-aligned headline ("Ship onboarding flows that actually convert"), subhead, two CTAs (primary "Start free", secondary "See how it works"), right-side product preview card showing a flow editor
- Features: 3-column grid, 6 features (Flow Builder, Activation Analytics, AI Suggestions, A/B Testing, Segmentation, Integrations)
- HowItWorks: 3 numbered steps with screenshots
- Pricing: 3 tiers (Free, Growth $249/mo, Scale $799/mo) — transparent, no "contact us"
- TrustedBy: neutral placeholder ("Used by product teams at B2B SaaS companies") — no fake logos
- CTA: full-width gradient banner
- Footer: 4 columns (Product, Company, Resources, Legal) + copyright

**Sign-in (`/sign-in`):**
- Centered card on warm-off-white background, max-width 400px
- Logo top, "Welcome back" heading, email + password fields, "Sign in" primary button (full width, violet)
- Below: "Don't have an account? Sign up" link
- Error messages inline below fields, coral text
- No social buttons (per rules)

**Sign-up (`/sign-up`):**
- Same layout as sign-in
- Heading: "Start free — no credit card"
- Fields: Full name, Work email, Password (with strength indicator), Company name
- Submit creates account via `/api/auth/signup`, then signs in, then redirects to `/dashboard/onboarding`
- Below: "Already have an account? Sign in"

**Dashboard layout (`/dashboard/*`):**
- Left sidebar (240px, collapsible to 64px): logo top, nav items (Home, Flows, Analytics, Settings), user avatar + name at bottom
- Top bar: page title left, search center (placeholder), user menu right (avatar dropdown: Profile, Settings, Sign out)
- Main content area: max-width 1200px, 32px padding

**Dashboard Home (`/dashboard`):**
- Greeting: "Good morning, {name}" + today's date
- 4 metric cards in a row: Activation Rate (37.5% with +2.3% delta, honey accent), Active Flows (12), Users in Flows (1,247), Avg. Completion (68%)
- "Your flows" section: list of 3–5 recent flows with status badges (Live/Draft/Paused), last edited, completion %
- "Quick actions" card: "Create your first flow" CTA (violet), "Connect your app" CTA (outlined)
- Empty state for new users: friendly illustration (gradient blob), "Let's build your first onboarding flow" with single CTA

**Dashboard Flows (`/dashboard/onboarding-flows`):**
- Header: "Onboarding Flows" title, "New flow" primary button (violet)
- Filter bar: status tabs (All, Live, Draft, Paused), search input
- Table: Flow name, Status badge, Steps count, Users this week, Completion %, Last edited, Actions menu
- Empty state: "No flows yet" with CTA

**Dashboard Analytics (`/dashboard/analytics`):**
- Header: "Analytics" title, date range selector (7d / 30d / 90d)
- Top row: 3 KPI cards (Activation Rate trend, Flow Completion trend, Drop-off rate)
- Main chart: line chart showing activation rate over time (Recharts), violet line, coral area fill
- Secondary chart: bar chart of step-by-step drop-off in selected flow
- Below: "Top performing flows" table

**Dashboard Settings (`/dashboard/settings`):**
- Tabs: Profile, Team, Integrations, Billing
- Profile: name, email (read-only), avatar upload placeholder, "Save" button
- Team: placeholder list with "Invite teammate" button
- Integrations: cards for Segment, Mixpanel, PostHog, Slack — each with "Connect" button (non-functional placeholder, honest copy)
- Billing: current plan, "Upgrade" CTA

**Pricing (`/pricing`):**
- Same as landing pricing section but full-page, with FAQ below
- 3 tier cards, middle one highlighted (coral border, "Most popular" badge)
- FAQ: 6 questions (How does activation tracking work?, Can I cancel anytime?, Do you offer discounts for startups?, etc.)

## 4. USER FLOWS

### Flow 1: New user sign-up → first flow
1. Land on `/` → click "Start free" → `/sign-up`
2. Fill form (name, email, password, company) → submit
3. POST `/api/auth/signup` creates Supabase user + profile row
4. Auto sign-in → redirect to `/dashboard/onboarding`
5. See empty state → click "Create your first flow"
6. (Future: flow builder. For now: creates a draft flow row, redirects to flow detail page with "Coming soon" message)
7. User can navigate to Analytics to see "Connect your app to see data" empty state

### Flow 2: Returning user sign-in
1. Land on `/` → click "Sign in" → `/sign-in`
2. Enter credentials → submit
3. Supabase auth → set session cookie → redirect to `/dashboard`
4. See dashboard with real (or zero-state) metrics

### Flow 3: Sign out
1. In dashboard, click avatar → dropdown → "Sign out"
2. Supabase sign-out → clear session → redirect to `/`

### Flow 4: Protected route access without auth
1. User visits `/dashboard` while signed out
2. Middleware redirects to `/sign-in?redirect=/dashboard`
3. After sign-in, redirect to original path

### States
- **Loading:** Skeleton placeholders on dashboard cards (pulse animation)
- **Empty:** Friendly illustration + single CTA
- **Error:** Inline form errors (coral), toast for action errors
- **Success:** Toast confirmation (honey accent) for saves

## 5. PAGES / ROUTES

| Route | Purpose | Layout |
|---|---|---|
| `/` | Landing page | Marketing layout (navbar + footer) |
| `/pricing` | Full pricing page | Marketing layout |
| `/sign-in` | Email/password sign-in | Centered card, no nav |
| `/sign-up` | Email/password sign-up | Centered card, no nav |
| `/auth/callback` | Supabase auth callback handler | Route handler, redirects |
| `/dashboard` | Home dashboard | Dashboard layout (sidebar + topbar) |
| `/dashboard/onboarding-flows` | Flow list | Dashboard layout |
| `/dashboard/analytics` | Analytics | Dashboard layout |
| `/dashboard/settings` | Settings | Dashboard layout |
| `/api/auth/signup` | Create account | API route |
| `/api/auth/signout` | Sign out | API route |

## 6. CORE FEATURES

### F1. Email + password authentication
- **What:** Users sign up and sign in with email/password via Supabase Auth.
- **How:** `/sign-up` form POSTs to `/api/auth/signup` which calls `supabase.auth.admin.createUser` (server-side with service role key), creates a `profiles` row, then signs the user in. `/sign-in` uses `supabase.auth.signInWithPassword` client-side. Session persisted via cookies (@supabase/ssr).

### F2. Protected dashboard routes
- **What:** All `/dashboard/*` routes require an authenticated session.
- **How:** `middleware.ts` checks Supabase session on every request to `/dashboard/*`. If no session, redirect to `/sign-in?redirect={path}`. If session exists, refresh it and continue.

### F3. Dashboard home with metrics
- **What:** Shows 4 KPI cards and recent flows list.
- **How:** Server component fetches user profile + flow list from Supabase. Metrics are computed from `flows` and `flow_events` tables (zero-state shown for new users). Cards display metric value, delta vs. previous period, and sparkline placeholder.

### F4. Onboarding flows list
- **What:** Table of all flows with status, step count, completion rate.
- **How:** Server component queries `flows` table filtered by `user_id`. Renders table with status badges (Live = green dot, Draft = honey dot, Paused = gray dot). Row click navigates to flow detail (placeholder page for now).

### F5. Analytics page
- **What:** Activation rate chart + step drop-off chart.
- **How:** Server component fetches aggregated `flow_events` data. Renders Recharts line chart (activation rate over 30 days) and bar chart (drop-off per step). Empty state when no data.

### F6. Settings page
- **What:** Profile, team, integrations, billing tabs.
- **How:** Client component with tab navigation. Profile form updates `profiles` table. Other tabs show honest placeholders ("Invite teammates — coming soon", "Connect Segment — coming soon").

### F7. Navbar with auth awareness
- **What:** Shows Sign in / Sign up buttons when logged out; user menu when logged in.
- **How:** Client component reads Supabase session via `supabase.auth.getUser()`. Renders conditional UI. User menu is a dropdown with Profile, Settings, Sign out.

### F8. Footer
- **What:** 4-column footer with links and copyright.
- **How:** Static component, links go to real pages or `#` for placeholders (with honest "Coming soon" labels where appropriate).

## 7. DATA MODEL

### `profiles`
| Field | Type | Notes |
|---|---|---|
| id | uuid (PK, FK → auth.users.id) | |
| full_name | text | |
| company_name | text | |
| avatar_url | text nullable | |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

### `flows`
| Field | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| user_id | uuid (FK → profiles.id) | |
| name | text | |
| status | text | 'draft' \| 'live' \| 'paused' |
| steps | jsonb | array of step objects |
| created_at | timestamptz | |
| updated_at | timestamptz | |

### `flow_events`
| Field | Type | Notes |
|---|---|---|
| id | uuid (PK) | |
| flow_id | uuid (FK → flows.id) | |
| user_identifier | text | anonymous user ID from client app |
| event_type | text | 'flow_started' \| 'step_completed' \| 'flow_completed' \| 'flow_dropped' |
| step_index | int nullable | |
| created_at | timestamptz | |

### Relationships
- `profiles.id` → `auth.users.id` (1:1, managed by Supabase Auth)
- `profiles.id` → `flows.user_id` (1:many)
- `flows.id` → `flow_events.flow_id` (1:many)

### Row Level Security
- Users can only read/write their own `profiles` row
- Users can only read/write their own `flows`
- Users can only read `flow_events` for their own flows

## 8. AUTH

**Provider:** Supabase Auth via `@supabase/ssr` (server + client + middleware pattern).

**Methods:** Email + password only. No OAuth, no magic links (keeps it simple, works out of the box).

**Setup:**
- `lib/supabase/client.ts` — browser client using `createBrowserClient`
- `lib/supabase/server.ts` — server client using `createServerClient` with cookies
- `lib/supabase/middleware.ts` — session refresh helper
- `middleware.ts` — protects `/dashboard/*`, calls Supabase session check
- `app/auth/callback/route.ts` — handles email confirmation redirects (if enabled)

**No Clerk. No NextAuth. No social buttons.**

## 9. FILES

```
app/
├── layout.tsx                          # Root layout: html, body, fonts, metadata
├── page.tsx                            # Landing page (existing)
├── pricing/
│   └── page.tsx                        # Full pricing page
├── sign-in/
│   └── page.tsx                        # Sign-in form
├── sign-up/
│   └── page.tsx                        # Sign-up form
├── auth/
│   └── callback/
│       └── route.ts                    # Supabase auth callback handler
├── dashboard/
│   ├── layout.tsx                      # Dashboard shell: sidebar + topbar
│   ├── page.tsx                        # Dashboard home (metrics + recent flows)
│   ├── onboarding-flows/
│   │   └── page.tsx                    # Flows list table
│   ├── analytics/
│   │   └── page.tsx                    # Analytics charts
│   └── settings/
│       └── page.tsx                    # Settings tabs
└── api/
    └── auth/
        ├── signup/
        │   └── route.ts                # POST: create user + profile
        └── signout/
            └── route.ts                # POST: sign out

components/
├── marketing/
│   ├── Navbar.tsx                      # Auth-aware navbar
│   ├── Footer.tsx                      # Site footer
│   ├── Hero.tsx                        # (existing)
│   ├── Features.tsx                    # (existing)
│   ├── HowItWorks.tsx                  # (existing)
│   ├── Pricing.tsx                     # (existing)
│   ├── TrustedBy.tsx                   # (existing)
│   └── CTA.tsx                         # (existing)
├── dashboard/
│   ├── Sidebar.tsx                     # Dashboard sidebar nav
│   ├── Topbar.tsx                      # Dashboard top bar with user menu
│   ├── MetricCard.tsx                  # KPI card component
│   ├── FlowsTable.tsx                  # Flows list table
│   ├── ActivationChart.tsx             # Line chart (Recharts)
│   ├── DropoffChart.tsx                # Bar chart (Recharts)
│   └── EmptyState.tsx                  # Reusable empty state
├── auth/
│   ├── SignInForm.tsx                  # Client form for sign-in
│   └── SignUpForm.tsx                  # Client form for sign-up
└── ui/
    ├── Button.tsx                      # (existing)
    ├── Input.tsx                       # (existing)
    └── Card.tsx                        # (existing)

lib/
├── supabase/
│   ├── client.ts                       # Browser Supabase client
│   ├── server.ts                       # Server Supabase client
│   └── middleware.ts                   # Middleware session helper
└── utils.ts                            # (existing)

middleware.ts                            # Root middleware: protect /dashboard/*
supabase/
└── migrations/
    └── 001_initial_schema.sql          # Tables: profiles, flows, flow_events + RLS
```

## 10. ACCEPTANCE

- [ ] Root `app/layout.tsx` exists and wraps app with proper html/body/fonts
- [ ] `/sign-in` renders a working email+password form; submitting with valid credentials signs the user in and redirects to `/dashboard`
- [ ] `/sign-up` renders a working form; submitting creates a Supabase user, creates a `profiles` row, signs in, and redirects to `/dashboard/onboarding`
- [ ] `/api/auth/signup` POST endpoint creates user via Supabase Admin API and returns success/error
- [ ] `/auth/callback/route.ts` exists and handles Supabase auth redirects
- [ ] `middleware.ts` protects `/dashboard/*` — unauthenticated users are redirected to `/sign-in?redirect=...`
- [ ] `/dashboard` shows 4 metric cards (with zero-state values for new users) and a "Your flows" section
- [ ] `/dashboard/onboarding-flows` shows a flows table with empty state
- [ ] `/dashboard/analytics` shows activation chart and drop-off chart with empty state
- [ ] `/dashboard/settings` shows profile form and tabs for Team/Integrations/Billing
- [ ] `/pricing` page exists with 3 tiers and FAQ
- [ ] Navbar shows "Sign in" + "Start free" when logged out, user menu when logged in
- [ ] Footer renders on all marketing pages
- [ ] `lib/supabase/client.ts`, `lib/supabase/server.ts`, `lib/supabase/middleware.ts` exist and use `@supabase/ssr`
- [ ] No Clerk, no NextAuth, no social sign-in buttons
- [ ] No `dynamic = 'error'` on any authenticated page
- [ ] All buttons/links navigate to real pages (no dead `#` links on primary CTAs)
- [ ] No fake testimonials, logos, or user counts anywhere
- [ ] Existing landing page sections (Hero, Features, HowItWorks, Pricing, TrustedBy, CTA) remain unchanged
- [ ] Existing design system colors (violet, coral, honey, warm off-white) are used consistently
- [ ] TypeScript throughout, no `any` in component props
- [ ] App builds without errors (`npm run build` succeeds)

FILES: ["app/layout.tsx", "app/sign-in/page.tsx", "app/sign-up/page.tsx", "app/auth/callback/route.ts", "app/dashboard/layout.tsx", "app/dashboard/page.tsx", "app/dashboard/onboarding-flows/page.tsx", "app/dashboard/analytics/page.tsx", "app/dashboard/settings/page.tsx", "app/pricing/page.tsx", "app/api/auth/signup/route.ts", "app/api/auth/signout/route.ts", "components/marketing/Navbar.tsx", "components/marketing/Footer.tsx", "components/dashboard/Sidebar.tsx", "components/dashboard/Topbar.tsx", "components/dashboard/MetricCard.tsx", "components/dashboard/FlowsTable.tsx", "components/dashboard/ActivationChart.tsx", "components/dashboard/DropoffChart.tsx", "components/dashboard/EmptyState.tsx", "components/auth/SignInForm.tsx", "components/auth/SignUpForm.tsx", "lib/supabase/client.ts", "lib/supabase/server.ts", "lib/supabase/middleware.ts", "middleware.ts", "supabase/migrations/001_initial_schema.sql"]