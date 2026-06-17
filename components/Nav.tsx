'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF7ED]/80 backdrop-blur-lg border-b border-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-[#7C3AED] to-[#FF6B6B] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
            Prismflow
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-[#4A4258] hover:text-[#7C3AED] transition-colors font-[family-name:var(--font-body)]">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-[#4A4258] hover:text-[#7C3AED] transition-colors font-[family-name:var(--font-body)]">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-[#4A4258] hover:text-[#7C3AED] transition-colors font-[family-name:var(--font-body)]">
            Pricing
          </Link>
          <Link
            href="/sign-in"
            className="text-sm font-medium text-[#4A4258] hover:text-[#7C3AED] transition-colors font-[family-name:var(--font-body)]"
          >
            Sign In
          </Link>
          <Link href="/sign-up" className="btn-primary text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#F5F0EB] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#F5F0EB] bg-[#FFF7ED] px-6 py-4 space-y-3">
          <Link href="#features" className="block py-2 text-sm font-medium text-[#4A4258] hover:text-[#7C3AED] font-[family-name:var(--font-body)]" onClick={() => setMobileOpen(false)}>
            Features
          </Link>
          <Link href="#how-it-works" className="block py-2 text-sm font-medium text-[#4A4258] hover:text-[#7C3AED] font-[family-name:var(--font-body)]" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="#pricing" className="block py-2 text-sm font-medium text-[#4A4258] hover:text-[#7C3AED] font-[family-name:var(--font-body)]" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>
          <Link href="/sign-in" className="block py-2 text-sm font-medium text-[#4A4258] hover:text-[#7C3AED] font-[family-name:var(--font-body)]" onClick={() => setMobileOpen(false)}>
            Sign In
          </Link>
          <Link href="/sign-up" className="btn-primary text-sm inline-block" onClick={() => setMobileOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}