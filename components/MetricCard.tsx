interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

export default function MetricCard({ label, value, change, trend = 'neutral', icon }: MetricCardProps) {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm font-medium text-[#6B6378] font-[family-name:var(--font-body)]">
          {label}
        </span>
        <div className={`p-2 rounded-xl ${
          trend === 'up' ? 'bg-[#ECFDF5] text-[#059669]' :
          trend === 'down' ? 'bg-[#FFF1F0] text-[#FF6B6B]' :
          'bg-[#F5F0EB] text-[#6B6378]'
        }`}>
          {icon}
        </div>
      </div>
      <div className="text-3xl font-extrabold font-[family-name:var(--font-heading)]">
        {value}
      </div>
      {change && (
        <div className={`mt-1 text-sm font-medium font-[family-name:var(--font-body)] ${
          trend === 'up' ? 'text-[#059669]' :
          trend === 'down' ? 'text-[#FF6B6B]' :
          'text-[#6B6378]'
        }`}>
          {trend === 'up' && '↑ '}
          {trend === 'down' && '↓ '}
          {change}
        </div>
      )}
    </div>
  );
}