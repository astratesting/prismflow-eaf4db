import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#F5F0EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#FF6B6B] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight font-[family-name:var(--font-heading)]">
              Prismflow
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-[#6B6378] font-[family-name:var(--font-body)]">
            <Link href="/privacy" className="hover:text-[#7C3AED] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#7C3AED] transition-colors">
              Terms of Service
            </Link>
            <a href="mailto:hello@prismflow.io" className="hover:text-[#7C3AED] transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#A89F94] font-[family-name:var(--font-body)]">
            &copy; {new Date().getFullYear()} Prismflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}