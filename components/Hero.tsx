import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal" />
          </span>
          Now in public beta
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Stop losing users during{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-teal">
            onboarding
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Prismflow helps B2B SaaS companies identify drop-off points, optimize activation flows, and convert more sign-ups into active users — with data-driven precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/sign-up" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
            Start free trial
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white px-6 py-4 font-semibold transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch demo
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">14-day free trial · No credit card required · Cancel anytime</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">30%</div>
            <div className="text-sm text-gray-400 mt-1">average activation lift</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5 min</div>
            <div className="text-sm text-gray-400 mt-1">integration setup</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">Real-time</div>
            <div className="text-sm text-gray-400 mt-1">funnel monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
}
