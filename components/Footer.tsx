import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-white tracking-tight mb-4">
              <svg className="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Prismflow
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Helping B2B SaaS companies optimize their onboarding experience. Reduce drop-off, increase activation, and grow with confidence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:hello@prismflow.io" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Prismflow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
