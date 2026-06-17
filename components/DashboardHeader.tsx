'use client';

import { usePathname } from 'next/navigation';

const PAGE_TITLES: Record<string, string> = {
  '/dashboard': 'Overview',
  '/dashboard/flows': 'Onboarding Flows',
  '/dashboard/analytics': 'Analytics',
  '/dashboard/settings': 'Settings',
};

export default function DashboardHeader() {
  const pathname = usePathname();
  const title = PAGE_TITLES[pathname] || 'Dashboard';

  return (
    <header className="bg-white border-b border-[#F5F0EB] px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
          {title}
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-[#7C3AED] to-[#FF6B6B] rounded-full flex items-center justify-center text-white text-sm font-bold font-[family-name:var(--font-heading)]">
            U
          </div>
        </div>
      </div>
    </header>
  );
}