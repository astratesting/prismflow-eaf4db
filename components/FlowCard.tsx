import StatusPill from './StatusPill';

interface FlowCardProps {
  name: string;
  status: 'active' | 'draft' | 'archived';
  steps: number;
  conversionRate?: number;
  updatedAt: string;
}

export default function FlowCard({ name, status, steps, conversionRate, updatedAt }: FlowCardProps) {
  return (
    <div className="card flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#F5F3FF] rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold font-[family-name:var(--font-heading)]">{name}</h3>
          <p className="text-sm text-[#6B6378] font-[family-name:var(--font-body)]">
            {steps} {steps === 1 ? 'step' : 'steps'} · Updated {updatedAt}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {conversionRate !== undefined && (
          <div className="text-right">
            <div className="text-sm font-semibold text-[#059669] font-[family-name:var(--font-heading)]">
              {conversionRate}%
            </div>
            <div className="text-xs text-[#A89F94] font-[family-name:var(--font-body)]">conversion</div>
          </div>
        )}
        <StatusPill status={status} />
      </div>
    </div>
  );
}