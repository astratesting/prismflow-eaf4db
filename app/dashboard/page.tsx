import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

const metrics = [
  {
    label: 'Activation Rate',
    value: '--',
    change: 'Connect SDK',
    changePositive: true,
  },
  {
    label: 'Drop-off Rate',
    value: '--',
    change: 'Connect SDK',
    changePositive: false,
  },
  {
    label: 'Active Users',
    value: '--',
    change: 'Connect SDK',
    changePositive: true,
  },
  {
    label: 'Avg Time-to-Value',
    value: '--',
    change: 'Connect SDK',
    changePositive: false,
  },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy-900">
          Welcome back{user.user_metadata?.name ? `, ${user.user_metadata.name.split(' ')[0]}` : ''}
        </h1>
        <p className="text-gray-500 mt-1">
          Here is what is happening with your onboarding flows.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="card p-6">
            <p className="text-sm text-gray-500 mb-2">{m.label}</p>
            <p className="text-3xl font-bold text-navy-900 mb-1">{m.value}</p>
            <p className={`text-xs font-medium ${m.changePositive ? 'text-accent-teal' : 'text-gray-400'}`}>
              {m.change}
            </p>
          </div>
        ))}
      </div>

      {/* Getting Started Card */}
      <div className="card p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 text-accent-blue flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Get started with Prismflow</h3>
            <p className="text-sm text-gray-500 mb-4">
              Integrate our SDK into your app to start tracking onboarding flows and identifying drop-off points.
            </p>
            <ol className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-accent-blue text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Install the Prismflow SDK: <code className="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono">npm install @prismflow/sdk</code>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-accent-blue text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>Initialize the SDK with your project key in your app entry point.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-accent-blue text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>Your onboarding funnel data will appear here in real time.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
