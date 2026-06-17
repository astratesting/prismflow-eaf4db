export default function AnalyticsPage() {
  const FUNNEL_STEPS = [
    { label: 'Sign-ups', value: '--', width: 100, color: '#7C3AED' },
    { label: 'Started Onboarding', value: '--', width: 75, color: '#8B5CF6' },
    { label: 'Completed Key Action', value: '--', width: 45, color: '#FF6B6B' },
    { label: 'Activated', value: '--', width: 35, color: '#F59E0B' },
  ];

  return (
    <div className="space-y-8">
      {/* Funnel */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-6 font-[family-name:var(--font-heading)]">
          Activation Funnel
        </h3>
        <div className="space-y-4">
          {FUNNEL_STEPS.map((step, i) => (
            <div key={step.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium font-[family-name:var(--font-body)]">{step.label}</span>
                <span className="text-sm font-semibold font-[family-name:var(--font-heading)]">{step.value}</span>
              </div>
              <div className="w-full bg-[#F5F0EB] rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${step.width}%`,
                    backgroundColor: step.color,
                    opacity: 0.8,
                  }}
                />
              </div>
              {i < FUNNEL_STEPS.length - 1 && (
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-[#A89F94] font-[family-name:var(--font-body)]">
                    --% conversion to next step
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overall Conversion */}
      <div className="card text-center">
        <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
          Overall Activation Rate
        </h3>
        <div className="text-5xl font-extrabold text-[#7C3AED] mb-2 font-[family-name:var(--font-heading)]">
          --%
        </div>
        <p className="text-sm text-[#6B6378] font-[family-name:var(--font-body)]">
          Connect your app to Prismflow to see real activation data.
        </p>
      </div>

      {/* Info Card */}
      <div className="card bg-[#F5F3FF] border-[#7C3AED]/20">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-[#7C3AED] rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1 font-[family-name:var(--font-heading)]">Getting Started</h4>
            <p className="text-sm text-[#6B6378] font-[family-name:var(--font-body)]">
              Add the Prismflow SDK to your app to start tracking user events and building your activation funnel. Once connected, this dashboard will show real-time conversion data at each step of your onboarding flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}