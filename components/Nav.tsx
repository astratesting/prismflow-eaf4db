'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-navy-900 tracking-tight">
          <svg className="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Prismflow
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">
            Pricing
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/sign-in" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors px-4 py-2">
            Sign in
          </Link>
          <Link href="/sign-up" className="btn-nav text-sm">
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-navy-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          <Link href="#features" className="block py-2 text-sm font-medium text-gray-600" onClick={() => setMobileOpen(false)}>
            Features
          </Link>
          <Link href="#how-it-works" className="block py-2 text-sm font-medium text-gray-600" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="#pricing" className="block py-2 text-sm font-medium text-gray-600" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link href="/sign-in" className="btn-secondary text-sm text-center">Sign in</Link>
            <Link href="/sign-up" className="btn-primary text-sm">Get started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
