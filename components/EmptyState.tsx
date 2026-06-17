import Link from 'next/link';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: EmptyStateProps) {
  const actionButton = actionLabel && (
    actionHref ? (
      <Link href={actionHref} className="btn-primary inline-flex">
        {actionLabel}
      </Link>
    ) : onAction ? (
      <button onClick={onAction} className="btn-primary">
        {actionLabel}
      </button>
    ) : null
  );

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {icon || (
        <div className="w-16 h-16 bg-[#F5F3FF] rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
          </svg>
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">{title}</h3>
      <p className="text-[#6B6378] max-w-sm mb-6 font-[family-name:var(--font-body)]">{description}</p>
      {actionButton}
    </div>
  );
}