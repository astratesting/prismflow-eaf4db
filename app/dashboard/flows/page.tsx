import { createClient } from '@/lib/supabase/server';
import FlowCard from '@/components/FlowCard';
import EmptyState from '@/components/EmptyState';
import Link from 'next/link';

export default async function FlowsPage() {
  const supabase = await createClient();

  // Fetch flows from Supabase
  const { data: flows, error } = await supabase
    .from('onboarding_flows')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#6B6378] font-[family-name:var(--font-body)]">
            Manage and monitor your onboarding flows.
          </p>
        </div>
        <Link href="/dashboard/flows/new" className="btn-primary text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create Flow
          </span>
        </Link>
      </div>

      {/* Flows List */}
      {flows && flows.length > 0 ? (
        <div className="space-y-3">
          {flows.map((flow: any) => (
            <FlowCard
              key={flow.id}
              name={flow.name}
              status={flow.status || 'draft'}
              steps={flow.steps ? (Array.isArray(flow.steps) ? flow.steps.length : 0) : 0}
              conversionRate={flow.conversion_rate}
              updatedAt={new Date(flow.updated_at || flow.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            />
          ))}
        </div>
      ) : (
        <div className="card">
          <EmptyState
            title="No onboarding flows yet"
            description="Create your first flow to start guiding users through your product and improving activation rates."
            actionLabel="Create Your First Flow"
            actionHref="/dashboard/flows/new"
          />
        </div>
      )}
    </div>
  );
}