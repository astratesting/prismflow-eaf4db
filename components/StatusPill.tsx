interface StatusPillProps {
  status: 'active' | 'draft' | 'archived';
}

export default function StatusPill({ status }: StatusPillProps) {
  const styles = {
    active: 'badge-active',
    draft: 'badge-draft',
    archived: 'badge-archived',
  };

  const labels = {
    active: 'Active',
    draft: 'Draft',
    archived: 'Archived',
  };

  return (
    <span className={styles[status]}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
        status === 'active' ? 'bg-[#059669]' :
        status === 'draft' ? 'bg-[#D97706]' :
        'bg-[#6B7280]'
      }`} />
      {labels[status]}
    </span>
  );
}