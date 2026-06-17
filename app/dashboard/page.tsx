import { createClient } from '@/lib/supabase/server';
import MetricCard from '@/components/MetricCard';
import FlowCard from '@/components/FlowCard';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'there';

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
          Welcome back, {userName}
        </h2>
        <p className="text-[#6B6378] mt-1 font-[family-name:var(--font-body)]">
          Here&apos;s how your onboarding is performing today.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          label="Activation Rate"
          value="--"
          change="Connect your app to see data"
          trend="neutral"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          }
        />
        <MetricCard
          label="Active Flows"
          value="--"
          change="Create your first flow"
          trend="neutral"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          }
        />
        <MetricCard
          label="Total Users"
          value="--"
          change="Connect your app to see data"
          trend="neutral"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          }
        />
        <MetricCard
          label="Avg Time to Value"
          value="--"
          change="Connect your app to see data"
          trend="neutral"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/flows"
            className="card hover:border-[#7C3AED]/30 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#F5F3FF] rounded-xl flex items-center justify-center group-hover:bg-[#7C3AED] transition-colors">
                <svg className="w-5 h-5 text-[#7C3AED] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold font-[family-name:var(--font-heading)]">Create Flow</h4>
                <p className="text-sm text-[#6B6378] font-[family-name:var(--font-body)]">Build a new onboarding flow</p>
              </div>
            </div>
          </Link>
          <Link
            href="/dashboard/analytics"
            className="card hover:border-[#FF6B6B]/30 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FFF1F0] rounded-xl flex items-center justify-center group-hover:bg-[#FF6B6B] transition-colors">
                <svg className="w-5 h-5 text-[#FF6B6B] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold font-[family-name:var(--font-heading)]">View Analytics</h4>
                <p className="text-sm text-[#6B6378] font-[family-name:var(--font-body)]">See your activation funnel</p>
              </div>
            </div>
          </Link>
          <div className="card hover:border-[#F59E0B]/30 group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FFFBEB] rounded-xl flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors">
                <svg className="w-5 h-5 text-[#F59E0B] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold font-[family-name:var(--font-heading)]">Invite Team</h4>
                <p className="text-sm text-[#6B6378] font-[family-name:var(--font-body)]">Add teammates to collaborate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Flows */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">Recent Flows</h3>
          <Link
            href="/dashboard/flows"
            className="text-sm text-[#7C3AED] font-medium hover:underline font-[family-name:var(--font-body)]"
          >
            View all
          </Link>
        </div>
        <div className="card flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-[#F5F3FF] rounded-2xl flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
            </svg>
          </div>
          <h4 className="font-semibold mb-1 font-[family-name:var(--font-heading)]">No flows yet</h4>
          <p className="text-sm text-[#6B6378] mb-4 font-[family-name:var(--font-body)]">
            Create your first onboarding flow to start optimizing user activation.
          </p>
          <Link href="/dashboard/flows" className="btn-primary text-sm">
            Create Your First Flow
          </Link>
        </div>
      </div>
    </div>
  );
}