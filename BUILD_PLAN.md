# Prismflow — Build Plan

## 1. PRODUCT

Prismflow is a pipeline builder for creative and digital agencies. It replaces the spreadsheet-plus-Slack mess of tracking active client work with a visual kanban-style pipeline (Backlog → In Progress → Review → Done), lightweight task automation, and a live analytics view of where hours, money, and slippage are actually going. The core user is a project manager at a 10–40 person agency who today juggles status across Notion, Trello, Google Sheets, and Slack, and who loses visibility the moment a project has more than three active workstreams. The pain is concrete: agency work is multi-stage and dependent, but every incumbent (Trello, Asana, Monday) either treats tasks as flat cards with no concept of "deliverable stage" or charges enterprise prices for analytics that a 15-person shop cannot justify. Prismflow owns one narrow job — **pipeline visibility for creative delivery** — and makes it feel fast, opinionated, and visually loud.

## 2. WHO IT'S FOR

The ICP is a project manager (or head of production) at a 10–40 person digital/creative agency. They run 5–15 active client projects at any time, have 2–4 reports, use Trello/Asana/Notion today, and judge tools on **how quickly they can answer "what's slipping this week?"**. That shapes the product in three ways:

- **Tone**: confident, slightly opinionated, zero hand-holding. No "Welcome! Let's get you started!" tour screens. The dashboard opens on the pipeline, ready to be used.
- **Density**: agency PMs read dense screens. Use a compact sidebar, tight row heights (56px), numeric density in analytics, and a persistent "this week" strip across the top of the dashboard.
- **Speed**: every screen is a single primary action plus navigation. No nested settings trees. Settings lives behind a single route, but the in-context actions (rename column, assign task, mark done) live on the card.

## 3. LOOK & FEEL

### 3.1 Visual System

**Vibe / positioning**: "Bold Frontier" — a launch brand. High contrast, oversized type, generous negative space around dense data. Feels like Linear's discipline crossed with a brutalist poster. The product is confident; the landing page is louder than the app, but the app inherits the same palette and type so brand continuity is unbroken.

**Color tokens** (defined as CSS vars in `app/globals.css`):
- `--ink: #0a0e17` — primary background (app)
- `--ink-2: #11161f` — surface (sidebar, cards)
- `--ink-3: #1a2230` — raised surface (modals, hovered card)
- `--line: #232c3d` — hairlines
- `--text: #e8ecf3` — primary text
- `--muted: #8a93a6` — secondary text
- `--flame: #ff6b35` — primary action, "In Progress" column, key CTAs
- `--magenta: #d63384` — accent, "Review" column, highlights
- `--acid: #00f5d4` — success, "Done" column, positive deltas
- `--warn: #ffb020` — at-risk badges

**Typography**:
- `font-display: 'Archivo Black', system-ui` — for headings, hero, and oversized numbers
- `font-sans: 'Satoshi', 'Inter', system-ui` — for body, UI, tables
- Loaded via `next/font/local` from `app/fonts/`. Satoshi (variable) and Archivo Black (single weight 900) ship as `.woff2` in `public/fonts/`. If a runtime font loader is preferred, fall back to `@fontsource/archivo-black` and `@fontsource/satoshi` packages — both work offline once installed.
- Type scale: 12 / 14 / 16 / 20 / 28 / 40 / 64 / 96. Display headings on landing only (64–96). App uses 20 / 28 for screen titles, 14 for UI.

**Spacing / layout**:
- 4px base grid. Use `p-2, p-3, p-4, p-6, p-8, p-12`.
- App shell: 240px fixed left sidebar + fluid content. Sidebar items 36px tall. Content has 24px page padding on desktop, 16px on mobile.
- Kanban columns: 320px wide, 16px gap, horizontally scrollable.

**Key components** (in `components/ui/`):
- `Button` — variants: `primary` (flame), `ghost` (transparent, line on hover), `danger` (red 500), `accent` (acid). Sizes `sm` 32px, `md` 40px, `lg` 48px.
- `Card` — `--ink-2` bg, 1px `--line` border, 12px radius. Hover lifts to `--ink-3` with 1px `--flame` border for interactive cards.
- `Badge` — small pill, used for status, priority. Color variants map to palette.
- `Input`, `Textarea`, `Select` — 40px tall, dark surface, 1px `--line`, focus ring `--flame` 2px.
- `Avatar` — 28px circle, initials fallback, optional 2px ring for online state.
- `Modal` — backdrop `rgba(10,14,23,0.7)`, panel `--ink-2`, 16px radius, max 560px wide.
- `Toast` — bottom-right, auto-dismiss 4s, supports success/error.
- `Sidebar`, `Topbar`, `Stat`, `EmptyState`, `Skeleton` (shimmer in `--ink-3`).

**Iconography**: `lucide-react`. Stroke 1.5, size 16 for inline, 20 for nav, 24 for empty states. No filled icons; everything is line for consistency on the dark surface.

**Imagery**: No stock photography anywhere. The landing page uses abstract SVG gradients (radial flame + magenta blobs on `--ink`). The app uses no images; data is the visual.

**Interaction / motion**:
- All transitions 150ms ease-out. Hover 100ms.
- Drag-and-drop on kanban uses `@dnd-kit/core` with a 2px lift on pickup, 8px shadow, and the source column shows an 8px dashed `--flame` slot indicator.
- Card create: optimistic insert with a 200ms fade-in.
- Route transitions: none (App Router). Sidebar nav uses a 200ms underline wipe on the active item (flame).
- Loading: skeletons only on first load. Subsequent navigations are cached; no spinners.

### 3.2 Screens (top to bottom)

**Landing — `app/page.tsx`** (single page, anchored sections):
- **Sticky top bar**: wordmark "PRISMFLOW" (Archivo Black, 20px, white) left; nav links Features / Pipeline / Analytics / Pricing (anchors, but also real `/#features` etc.); right side: "Sign in" (`/sign-in`, ghost) and "Start free" (`/sign-up`, flame, 40px). Background `--ink` with a 1px bottom border that fades in after 32px scroll.
- **Hero**: oversized headline "Ship client work at the speed of light." in Archivo Black 80–96px, line-height 0.95, max 8 chars per visual line. Subhead 20px muted, max 560px. Primary CTA "Start free →" (flame, 48px) + secondary "Watch demo" (ghost, plays a 30s muted-loop local MP4 in a modal — file in `public/demo.mp4`, can be a 1px transparent placeholder for now, honest). To the right of the copy: a 560×420 static SVG of a stylised pipeline (4 columns with sample cards in flame/magenta/acid) with a soft radial gradient glow behind it. The whole hero has a flame-to-magenta radial gradient on the bottom 40% of the section.
- **Logo strip**: "Trusted by teams at" — DO NOT invent logos. Use the honest line: "Built for project managers at modern creative agencies." 16px muted, centered.
- **Features** (`#features`): three-up grid, each card 360px wide, 1px `--line`, `--ink-2` bg, 24px padding. Icon (lucide, 24px, flame) top-left, title 20px Satoshi semibold, body 14px muted. Cards: "Visual pipeline", "Real-time analytics", "Automation that just works".
- **Pipeline deep-dive** (`#pipeline`): full-bleed `--ink-2` band. Headline 40px "A pipeline you'll actually look at." Below: a 1200×420 wide screenshot mock built with real DOM (4 columns, 6 sample tasks, 2 with avatars). No image file — it's React, so it stays sharp.
- **Analytics deep-dive** (`#analytics`): two columns. Left: copy. Right: a recharts `<LineChart>` and `<BarChart>` rendered with mock data, framed in a `--ink-2` card with 1px `--line`. This is the only place charts appear outside the dashboard.
- **Pricing** (`#pricing`): two cards. "Starter — Free for 1 user" and "Team — $24/user/mo". Each card: name (Archivo Black 28px), price (Archivo Black 56px), 5 bullet features (14px), CTA button (full width). No fake "most popular" badge. An honest footnote: "All prices in USD. Billed monthly."
- **CTA band**: full-width flame-to-magenta horizontal gradient. Headline 40px white "Ready to ship faster?" + "Start free" button (ink background, white text) + "Talk to us" (transparent, 1px white border).
- **Footer**: three columns — Product / Company / Legal. Real routes where they exist (`/sign-in`, `/sign-up`, `/dashboard`, `/dashboard/settings`); other links are honest `#` anchors that scroll to sections or go to `/` with hash. Bottom row: copyright, "Made for agencies that ship."

**Sign-in — `app/(auth)/sign-in/page.tsx`**:
- Centered 400px card on `--ink`. Logo top, "Welcome back" 28px Archivo Black, sub 14px muted. Email input, password input (with show/hide toggle), "Sign in" flame button full width, "Forgot password?" link (to `/forgot-password` — that route renders a simple "Check your email" message for now, no real reset until Supabase email is wired). Bottom: "Don't have an account? Sign up" linking to `/sign-up`.
- Below the card: a single muted line "By continuing you agree to our Terms and Privacy." with both as `#` anchors to `/terms` and `/privacy` static pages (created as minimal MDX-style pages with one paragraph of placeholder text).
- Error region above the form for Supabase error messages in 14px flame.
- On successful sign-in: `router.push('/dashboard')`. On success but no email confirmed, show a flame banner: "Check your email to confirm your account."

**Sign-up — `app/(auth)/sign-up/page.tsx`**:
- Same shell. Headline "Create your workspace" 28px Archivo Black. Fields: full name, work email, password (with 8-char minimum helper), "Create account" flame button. Below: muted "Already have an account? Sign in" to `/sign-in`.
- On success: show an ink-2 banner "Check your email to confirm your account, then sign in." with a "Resend email" link calling a server action. Do not auto-redirect.

**Dashboard layout — `app/dashboard/layout.tsx`**:
- 240px sidebar (`--ink-2`, 1px right border `--line`):
  - Top: PRISMFLOW wordmark 20px Archivo Black + 12px tagline "Pipeline OS".
  - Workspace switcher (a `<button>` showing current workspace name, opens a popover with a list — for v1 there is only one workspace, the user's own).
  - Nav group "WORKSPACE": Pipeline (→ `/dashboard`), Analytics (→ `/dashboard/analytics`), Automations (→ `/dashboard/automations` — renders a "Coming soon" empty state with a flame button to `/dashboard`).
  - Nav group "ACCOUNT": Settings (→ `/dashboard/settings`), Help (→ `/dashboard/help` — minimal FAQ page).
  - Bottom: user avatar 28px + name + email truncated, hover reveals a dropdown with "Sign out" (calls a server action that calls `supabase.auth.signOut()` then `router.push('/sign-in')`).
- Top bar (56px, `--ink`, 1px bottom border): breadcrumb left (workspace name / page), search input center (placeholder "Search tasks… ⌘K" — for v1 it's a stub that focuses a hidden input on `/dashboard`; future hook for command palette), right side: "+ New task" flame button (opens a modal that pre-fills the Backlog column).
- Main content area: `--ink` bg, 24px padding.

**Pipeline (Dashboard home) — `app/dashboard/page.tsx`**:
- Below the topbar, a 56px "This week" strip: 4 stat tiles (32px tall, no card) — Active projects, Tasks in progress, Awaiting review, Shipped this week — each: small label 12px muted, number 28px Archivo Black, delta line 12px (acid green `+12%` or flame `-3%`).
- Below: 4 kanban columns in a horizontal flex row, each 320px, 1px `--line`, 12px radius, `--ink-2` bg, header 48px with column name (Satoshi 14px uppercase tracked), count badge (acid for Done, magenta for Review, flame for In Progress, muted for Backlog), and a `+` icon button to quick-add a task.
- Each column is a scrollable list of task cards. Card: 12px padding, 1px `--line`, `--ink-3` on hover. Top row: title 14px Satoshi medium (truncated to 1 line), priority dot (8px circle, flame / warn / acid). Body: 2 lines of description 12px muted, truncated. Footer row: 2 left-side avatar stack (16px circles, max 2, "+N" overflow), right-side due date 12px (flame if overdue, warn if due in ≤2 days, muted otherwise).
- Drag any card across columns; drop persists via server action.
- Empty column state: 80px tall, centered muted 12px "No tasks yet" + 24px flame `+` button.
- Loading: show 6 skeleton cards per column on first mount.

**Analytics — `app/dashboard/analytics/page.tsx`**:
- Page title "Analytics" 28px Archivo Black, sub 14px muted "Last 30 days".
- Top row: 4 stat cards in a grid (240px wide each, `--ink-2`, 1px `--line`, 24px padding). Each: label 12px muted, value 40px Archivo Black, delta pill (acid or flame) with arrow icon, sparkline (recharts `<AreaChart>`, 80px tall, no axes, gradient fill flame→transparent).
- Middle row: full-width card containing a `<LineChart>` (recharts) — 320px tall, dark gridlines (`#232c3d`), flame line 2px, magenta secondary line, acid green tertiary line. Tooltip on hover: `--ink-3` panel, 1px `--line`, 12px Satoshi. Legend top-right with line dots.
- Bottom row: two cards side by side. Left: `<BarChart>` "Tasks shipped per week" (8 bars, acid fill, flame for the current week). Right: `<PieChart>` or `<RadialBarChart>` "Time by stage" with 4 slices colored flame/magenta/acid/muted.
- All charts read from a single `getAnalytics()` server function that returns deterministic mock data for v1 (seeded by workspace id) — no external API. This is honest: clearly the source is the workspace's own tasks; once real data flows, the same shape is used.

**Settings — `app/dashboard/settings/page.tsx`**:
- Tabs across the top: "Profile" (default), "Workspace", "Team", "Billing". Tabs are a local `<div role="tablist">` with flame underline on the active tab.
- **Profile**: form — full name, email (disabled, muted helper "Email is tied to your sign-in"), avatar URL (text input, optional). Save button (flame) calls a server action that updates `profiles`.
- **Workspace**: workspace name (input), slug (input, helper "Used in invitations"). Save button.
- **Team**: table of members (avatar, name, email, role badge, "Remove" ghost-danger button on each row except self). Top-right: "Invite member" flame button — opens a modal with email input and role select (`Admin` / `Member`). For v1, invite is a server action that writes a `workspace_members` row with a placeholder status; the actual email-send is honest-stubbed: a toast says "Invite recorded. Email delivery is coming soon."
- **Billing**: honest stub card — "You're on the Starter plan (free for 1 user). Upgrade to Team to add members and unlock automations." A single flame "Upgrade" button is wired to a server action that flips the workspace `plan` to `team` in the DB (no Stripe; this is the v1 simulation of upgrade, and the UI says exactly that in a muted helper line below the button).
- Sign-out button at the very bottom, ghost-danger.

**Auth callback — `app/auth/callback/route.ts`**:
- A GET handler. Reads `code` from query, calls `supabase.auth.exchangeCodeForSession(code)`, on success redirects to `/dashboard`, on failure to `/sign-in?error=callback`.

## 4. USER FLOWS

**F1 — Sign up & enter app**:
1. User on `/` clicks "Start free" → `/sign-up`.
2. Submits name + email + password. Supabase creates user and sends confirmation email.
3. Banner appears: "Check your email to confirm your account."
4. User clicks confirmation link → `/auth/callback?code=…` → exchanges code → `redirect('/dashboard')`.
5. Middleware on `/dashboard/*` checks Supabase session. If absent, `redirect('/sign-in')`. If present, page loads.
6. First time on `/dashboard`: profiles row is auto-created by a server action `ensureProfile()` called from the dashboard layout, with `display_name` from sign-up and `workspace_id` of a newly created workspace.
7. Pipeline renders with seeded sample data (3 tasks across 3 columns) so the screen is never empty for a new user.

**F2 — Create and move a task**:
1. Click `+` on any column header (or topbar `+ New task` which defaults to Backlog).
2. Modal: title (required), description (optional), column (defaults to clicked column), priority (default `normal`), assignees (multi-select with current team), due date (date input, default +7 days).
3. Submit → server action `createTask()` → optimistic insert at top of column, fade-in 200ms.
4. Drag card from Backlog to In Progress: `@dnd-kit` onDragEnd → server action `moveTask(id, toColumn, toPosition)` → optimistic reorder, rollback on error with a flame toast.

**F3 — Invite a teammate**:
1. Settings → Team → "Invite member".
2. Email + role → submit → `inviteMember()` writes `workspace_members` row.
3. Toast: "Invite recorded. Email delivery is coming soon." Honest copy.

**F4 — Sign out**:
1. Sidebar avatar → dropdown → "Sign out" → `signOutAction()` → `supabase.auth.signOut()` → `redirect('/sign-in')`.

**F5 — Forgot password** (stub):
1. `/sign-in` → "Forgot password?" → `/forgot-password` form → on submit calls `resetPasswordForEmail()` (Supabase), then renders a static "Check your email" message. The reset link target is `/auth/callback` which the same handler routes.

States covered for every flow: loading (skeleton), empty (column empty state), error (flame banner above form, toast for actions), success (toast, redirect, optimistic UI).

## 5. PAGES / ROUTES

| Route | Purpose | Layout / main elements |
|---|---|---|
| `/` | Marketing landing | Sections: hero, features, pipeline demo, analytics demo, pricing, CTA, footer. Anchors: `#features`, `#pipeline`, `#analytics`, `#pricing`. |
| `/sign-in` | Sign in | Centered 400px card, email+password, show/hide, error region, link to sign-up and forgot-password. |
| `/sign-up` | Sign up | Centered 400px card, name+email+password, banner on success. |
| `/forgot-password` | Password reset request | Single email input, submit shows static confirmation message. |
| `/auth/callback` | OAuth/code exchange | GET handler, exchanges code, redirects to `/dashboard` or `/sign-in?error=…`. |
| `/terms` | Terms placeholder | Single Archivo Black 28px title + 14px muted body paragraph. |
| `/privacy` | Privacy placeholder | Same shape as `/terms`. |
| `/dashboard` | Pipeline (kanban) | This-week strip + 4 kanban columns. |
| `/dashboard/analytics` | Analytics | 4 stat cards, line chart, bar chart, radial chart. |
| `/dashboard/automations` | Automations (stub) | "Coming soon" empty state, flame button back to pipeline. |
| `/dashboard/settings` | Settings | Tabs: Profile, Workspace, Team, Billing. |
| `/dashboard/help` | Help / FAQ | 5-question static FAQ, archivo black question, muted answer. |
| `/api/tasks` | (Optional REST stub, not used; server actions are the primary path) | n/a |

Every link in nav, footer, landing, and in-app empty states points to a real route listed above. No `#` links except scroll anchors on the landing page.

## 6. CORE FEATURES

**F-1 Email + password auth (Supabase SSR)**
- `lib/supabase/client.ts` — `createBrowserClient` from `@supabase/ssr`. Used in client components and forms.
- `lib/supabase/server.ts` — `createServerClient` with `cookies` adapter from `next/headers`. Used in server components and server actions.
- `middleware.ts` — refreshes session on every request to `/dashboard/*` and `/auth/*`, redirects unauthenticated users on `/dashboard/*` to `/sign-in`, and redirects authenticated users away from `/sign-in` and `/sign-up` to `/dashboard`.
- Server actions: `signInAction`, `signUpAction`, `signOutAction`, `resetPasswordAction` in `app/(auth)/actions.ts`. Each uses `revalidatePath('/dashboard', 'layout')` after success.
- No OAuth, no social buttons, no Clerk.

**F-2 Pipeline (kanban)**
- Four fixed columns: `backlog`, `in_progress`, `review`, `done`. Order is hard-coded in `lib/pipeline.ts` as `COLUMNS`.
- Each column is a `<Droppable>` from `@dnd-kit/core`. Each card is a `<Draggable>`.
- Card data shape from `tasks` table.
- Quick-add modal: `components/tasks/TaskModal.tsx`. Opens with column preselected.
- Server action `moveTask(id, toColumn, toPosition)` updates `tasks.column` and `tasks.position` (integer rank for stable ordering within a column; reorder updates the affected rows only).
- Optimistic update via `useOptimistic` from React 19.

**F-3 Real-time analytics**
- Charts: `recharts`. Components: `LineChart`, `BarChart`, `AreaChart` (sparkline), `RadialBarChart` (time by stage).
- Data source: `lib/analytics.ts → getAnalytics(workspaceId)` returns typed mock data shaped exactly like the real aggregations (counts per column per day for last 30 days; tasks shipped per ISO week; seconds spent per stage). The function is intentionally a deterministic seed (using a `mulberry32` PRNG seeded by workspace id) so the same workspace always shows the same numbers — this is honest because it's labeled as sample data, and the same shape is reused when real data is wired in.
- Time range pill row above the charts: "7d / 30d / 90d" — for v1, all three call the same function with different lookback windows of the seeded data.

**F-4 Task creation, edit, delete**
- Create: `TaskModal` from `+` button or topbar.
- Edit: click a card to open the same `TaskModal` in edit mode (title, description, priority, assignees, due date, column).
- Delete: card overflow menu (`⋯` button) → "Delete" with confirm modal. Server action `deleteTask(id)`.
- All actions are server actions returning `{ ok: boolean, error?: string }`. UI toasts on error, optimistically updates on success.

**F-5 Team management**
- Members list from `workspace_members` joined with `profiles`.
- Invite modal: email + role. `inviteMember()` server action. Honest toast: "Invite recorded. Email delivery is coming soon."
- Remove member: confirm modal, `removeMember()` server action. Cannot remove self.

**F-6 Profile & workspace settings**
- Profile update writes to `profiles`. Workspace name/slug writes to `workspaces`.
- All forms use a generic `<SettingsForm>` wrapper that handles pending state and toasts.

**F-7 Plan upgrade (honest simulation)**
- "Upgrade" button on Billing tab calls `upgradePlan()` server action that updates `workspaces.plan` to `team` and unlocks the "Team" member count (the Team tab allows inviting up to 10 members). No real Stripe.
- A muted helper line below the button: "This is a v1 simulation. Real billing is coming soon."

**F-8 Search stub**
- Topbar search input is a focusable `<input>` that on `⌘K` / `Ctrl+K` opens a `CommandPalette` modal. For v1 the palette shows "Try: create task, go to analytics, open settings" as clickable items that navigate. No fuzzy search yet; this is the integration point for v2.

**F-9 Toasts**
- `components/ui/Toast.tsx` plus a `ToastProvider` mounted in `app/layout.tsx`. `useToast()` hook. Variants: success (acid border), error (flame border), info (muted).

## 7. DATA MODEL

All tables in Supabase Postgres. RLS enabled on every table.

**`profiles`** — one row per auth user.
- `id uuid PK references auth.users(id) on delete cascade`
- `display_name text not null`
- `avatar_url text`
- `created_at timestamptz default now()`

**`workspaces`** — one per user on first sign-in.
- `id uuid PK default gen_random_uuid()`
- `name text not null`
- `slug text not null unique`
- `plan text not null default 'starter' check (plan in ('starter','team'))`
- `created_by uuid references auth.users(id)`
- `created_at timestamptz default now()`

**`workspace_members`**
- `id uuid PK default gen_random_uuid()`
- `workspace_id uuid not null references workspaces(id) on delete cascade`
- `user_id uuid not null references auth.users(id) on delete cascade`
- `role text not null default 'member' check (role in ('admin','member'))`
- `created_at timestamptz default now()`
- Unique `(workspace_id, user_id)`

**`tasks`**
- `id uuid PK default gen_random_uuid()`
- `workspace_id uuid not null references workspaces(id) on delete cascade`
- `title text not null`
- `description text`
- `column text not null check (column in ('backlog','in_progress','review','done'))`
- `position int not null default 0` — rank within column, lower = top
- `priority text not null default 'normal' check (priority in ('low','normal','high'))`
- `due_date date`
- `created_by uuid references auth.users(id)`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

**`task_assignees`** — many-to-many task ↔ user.
- `task_id uuid references tasks(id) on delete cascade`
- `user_id uuid references auth.users(id) on delete cascade`
- PK `(task_id, user_id)`

**Indexes**: `tasks(workspace_id, column, position)`, `workspace_members(workspace_id)`, `profiles(id)`.

**RLS policies** (sketch):
- `profiles`: a user can `select` and `update` their own row.
- `workspaces`: a user can `select` a workspace they are a member of; `update` if they are an `admin` member.
- `workspace_members`: a user can `select` rows for workspaces they belong to; `insert`/`delete` only if they are an `admin` of that workspace (except self-deletion).
- `tasks`: a user can `select/insert/update/delete` tasks where `workspace_id` is in the set of workspaces they belong to.
- `task_assignees`: same scoping as `tasks`.

**Auto-profile trigger**: a Postgres trigger `on_auth_user_created` inserts a `profiles` row and a `workspaces` row, and a `workspace_members` row with `role = 'admin'`, all in a single transaction. This runs server-side on `auth.users` insert. (Alternative: do it in a server action called from the dashboard layout. The trigger is cleaner because it works even if the user lands on the auth callback without visiting the dashboard first.)

## 8. AUTH

- Provider: Supabase Auth, email + password only.
- `@supabase/ssr` package, used via `createBrowserClient` and `createServerClient` (cookies adapter).
- `middleware.ts` runs `supabase.auth.getUser()` on every request to refresh the session cookie. For `/dashboard/*` it redirects to `/sign-in` if no user; for `/sign-in` and `/sign-up` it redirects to `/dashboard` if a user exists.
- All forms are React Server Components with server actions. Client islands only where needed (password show/hide toggle, toast provider).
- Password requirement: minimum 8 characters, enforced in the form and in the Supabase dashboard policy.
- Confirmation email: required (default Supabase behavior). The sign-up success state tells the user to check email; the callback route handles the confirmation.
- No Clerk. No Google/GitHub/social buttons. No `dynamic = 'error'` on auth pages (auth pages are statically rendered shells with client islands).

## 9. FILES

```
app/
  layout.tsx
  globals.css
  page.tsx                          // landing
  (auth)/
    sign-in/page.tsx
    sign-up/page.tsx
    forgot-password/page.tsx
    actions.ts                      // signInAction, signUpAction, signOutAction, resetPasswordAction
  auth/
    callback/route.ts               // code exchange
  dashboard/
    layout.tsx                      // sidebar + topbar shell
    page.tsx                        // pipeline (kanban)
    analytics/page.tsx
    automations/page.tsx
    settings/page.tsx
    help/page.tsx
    actions.ts                      // createTask, moveTask, updateTask, deleteTask, inviteMember, removeMember, updateProfile, updateWorkspace, upgradePlan, ensureProfile
  terms/page.tsx
  privacy/page.tsx
components/
  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    Input.tsx
    Textarea.tsx
    Select.tsx
    Avatar.tsx
    Modal.tsx
    Toast.tsx
    Skeleton.tsx
    Stat.tsx
    EmptyState.tsx
    Tabs.tsx
  layout/
    Sidebar.tsx
    Topbar.tsx
    UserMenu.tsx
  landing/
    Hero.tsx
    Features.tsx
    PipelineDemo.tsx                // DOM-built pipeline mock
    AnalyticsDemo.tsx               // recharts with mock data
    Pricing.tsx
    CtaBand.tsx
    Footer.tsx
    Nav.tsx
  pipeline/
    Board.tsx                       // 4 columns + dnd-kit
    Column.tsx
    TaskCard.tsx
    TaskModal.tsx
    QuickAddButton.tsx
    WeekStrip.tsx
  analytics/
    StatCard.tsx
    LineCard.tsx
    BarCard.tsx
    RadialCard.tsx
    TimeRange.tsx
  settings/
    ProfileForm.tsx
    WorkspaceForm.tsx
    TeamTable.tsx
    InviteModal.tsx
    BillingCard.tsx
lib/
  supabase/
    client.ts                       // createBrowserClient
    server.ts                       // createServerClient (cookies)
  pipeline.ts                       // COLUMNS, columnMeta
  analytics.ts                      // getAnalytics(workspaceId) with seeded mock
  types.ts                          // Task, Profile, Workspace, Member types
  utils.ts                          // cn(), formatDate, initials()
middleware.ts                       // session refresh + route guards
supabase/
  schema.sql                        // tables, indexes, RLS, trigger
public/
  fonts/                            // Satoshi-Variable.woff2, Archivo-Black.woff2
tailwind.config.ts
postcss.config.js
package.json
tsconfig.json
next.config.mjs
.env.example                        // NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## 10. ACCEPTANCE

A reviewer running `pnpm install && pnpm dev` against a configured Supabase project should observe:

- [ ] Landing page at `/` renders with the four palette colors, Archivo Black on the hero headline, no broken images, every CTA wired to a real route (`/sign-in`, `/sign-up`).
- [ ] `/sign-in` and `/sign-up` render without errors, are not marked `dynamic = 'error'`, and forms submit to working Supabase endpoints.
- [ ] Submitting sign-up produces a confirmation email; the callback route at `/auth/callback` exchanges the code and lands on `/dashboard`.
- [ ] Visiting `/dashboard` while signed out redirects to `/sign-in`. Visiting `/sign-in` while signed in redirects to `/dashboard`.
- [ ] Dashboard layout shows the sidebar with 4 nav items + user menu, and a topbar with breadcrumb, search input, and `+ New task`.
- [ ] Pipeline renders 4 columns with at least the seeded sample tasks. Drag-and-drop persists across reload. The `+` on a column opens the create modal; submitting inserts a card in that column without a full page reload.
- [ ] Analytics page renders 4 stat cards with sparklines, one line chart, one bar chart, and one radial chart, all from `recharts`, with a dark theme that matches the palette.
- [ ] Settings page has 4 working tabs; saving Profile/Workspace persists to Supabase; inviting a member adds a row and shows the honest "email delivery coming soon" toast; the Upgrade button toggles `workspaces.plan`.
- [ ] `supabase/schema.sql` runs cleanly on a fresh project: all tables, indexes, RLS policies, and the `on_auth_user_created` trigger are created. A new sign-up automatically produces a `profiles` row, a `workspaces` row, and a `workspace_members` row with `admin` role.
- [ ] No file in the repo imports `clerk` or any social OAuth SDK. No "Sign in with Google/GitHub" buttons exist anywhere.
- [ ] No invented customer logos, testimonials, user counts, ratings, or press quotes appear in any file.
- [ ] `pnpm build` completes with no TypeScript errors and no missing-import errors on Next.js 15.
- [ ] Every `<a href>` and `<Link href>` in the rendered app resolves to a route that exists in the file tree.

FILES: ["app/layout.tsx","app/globals.css","app/page.tsx","app/(auth)/sign-in/page.ts