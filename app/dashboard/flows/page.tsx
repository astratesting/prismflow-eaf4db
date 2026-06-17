import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const flows = [
  {
    id: '1',
    name: 'Standard Sign-up Flow',
    steps: 4,
    activationRate: '--',
    status: 'Draft',
  },
  {
    id: '2',
    name: 'Enterprise Onboarding',
    steps: 6,
    activationRate: '--',
    status: 'Draft',
  },
  {
    id: '3',
    name: 'Quick Start Wizard',
    steps: 3,
    activationRate: '--',
    status: 'Draft',
  },
];

export default async function FlowsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Onboarding Flows</h1>
          <p className="text-gray-500 mt-1">Create and manage your onboarding flows.</p>
        </div>
        <button className="btn-primary text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Flow
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flows.map((flow) => (
          <div key={flow.id} className="card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-accent-blue flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16M9 6v12" />
                </svg>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                flow.status === 'Draft' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-700'
              }`}>
                {flow.status}
              </span>
            </div>
            <h3 className="font-semibold text-navy-900 mb-2">{flow.name}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{flow.steps} steps</span>
              <span>Activation: {flow.activationRate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
