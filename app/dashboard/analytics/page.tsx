import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AnalyticsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy-900">Analytics</h1>
        <p className="text-gray-500 mt-1">Monitor your onboarding funnel performance.</p>
      </div>

      {/* Empty state */}
      <div className="card p-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-accent-blue flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 16l4-8 4 4 4-4" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-navy-900 mb-2">No data yet</h3>
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          Connect the Prismflow SDK to your application to start seeing onboarding funnel analytics.
        </p>
        <code className="inline-block bg-gray-100 px-4 py-2 rounded-lg text-sm font-mono text-gray-700">
          npm install @prismflow/sdk
        </code>
      </div>
    </div>
  );
}
