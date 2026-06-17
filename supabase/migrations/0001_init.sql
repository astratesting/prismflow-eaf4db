-- Prismflow initial database schema

-- Profiles table (extends auth.users)
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-create profile on sign-up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Onboarding flows
create table public.onboarding_flows (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  description text,
  status text default 'draft' check (status in ('active', 'draft', 'archived')),
  steps jsonb default '[]'::jsonb,
  conversion_rate numeric(5,2),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Flow steps
create table public.flow_steps (
  id uuid default gen_random_uuid() primary key,
  flow_id uuid references public.onboarding_flows(id) on delete cascade not null,
  "order" integer not null,
  name text not null,
  description text,
  step_type text default 'tooltip' check (step_type in ('tooltip', 'modal', 'checklist', 'walkthrough', 'survey')),
  created_at timestamptz default now()
);

-- Analytics events
create table public.analytics_events (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  flow_id uuid references public.onboarding_flows(id) on delete set null,
  event_type text not null check (event_type in ('signup', 'started_onboarding', 'completed_step', 'completed_onboarding', 'activated', 'dropped_off')),
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.onboarding_flows enable row level security;
alter table public.flow_steps enable row level security;
alter table public.analytics_events enable row level security;

-- RLS Policies
create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create policy "Users can CRUD own flows"
  on public.onboarding_flows for all using (auth.uid() = user_id);

create policy "Users can CRUD steps for own flows"
  on public.flow_steps for all using (
    flow_id in (select id from public.onboarding_flows where user_id = auth.uid())
  );

create policy "Users can view own events"
  on public.analytics_events for select using (auth.uid() = user_id);

create policy "Users can insert own events"
  on public.analytics_events for insert with check (auth.uid() = user_id);

-- Indexes
create index onboarding_flows_user_id_idx on public.onboarding_flows(user_id);
create index flow_steps_flow_id_idx on public.flow_steps(flow_id);
create index analytics_events_user_id_idx on public.analytics_events(user_id);
create index analytics_events_flow_id_idx on public.analytics_events(flow_id);
create index analytics_events_event_type_idx on public.analytics_events(event_type);

-- Updated_at trigger
create or replace function public.update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger onboarding_flows_updated_at
  before update on public.onboarding_flows
  for each row execute procedure public.update_updated_at();

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.update_updated_at();