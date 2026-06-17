import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FF6B6B]/5 rounded-full blur-3xl" />
      <div className="absolute top-40 left-1/4 w-48 h-48 bg-[#F59E0B]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#F5F0EB] text-[#7C3AED] text-sm font-semibold px-4 py-2 rounded-full mb-8 shadow-sm font-[family-name:var(--font-heading)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B6B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B6B]" />
            </span>
            Now in early access
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 font-[family-name:var(--font-heading)]">
            Turn sign-ups into
            <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#FF6B6B] to-[#F59E0B] bg-clip-text text-transparent">
              power users
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-[#6B6378] max-w-2xl mx-auto mb-10 leading-relaxed font-[family-name:var(--font-body)]">
            Most SaaS products lose over 60% of users before they ever see real value.
            Prismflow detects friction, builds smart onboarding flows, and helps you
            activate more users — in days, not months.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="btn-primary text-lg px-8 py-4 shadow-lg shadow-[#7C3AED]/25 hover:shadow-xl hover:shadow-[#7C3AED]/30"
            >
              Get Started Free →
            </Link>
            <Link
              href="#how-it-works"
              className="bg-white text-[#4A4258] px-8 py-4 rounded-xl font-semibold border-2 border-[#E5E0DB] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-200 font-[family-name:var(--font-heading)] text-lg"
            >
              See How It Works
            </Link>
          </div>

          <p className="mt-6 text-sm text-[#A89F94] font-[family-name:var(--font-body)]">
            No credit card required · 14-day free trial · Free forever tier available
          </p>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '62%', label: 'Average user drop-off in onboarding' },
              { value: '34%', label: 'MRR increase from better activation' },
              { value: '3.2x', label: 'Higher retention with day-0 activation' },
              { value: '<5 min', label: 'Time to integrate Prismflow' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-[#7C3AED] font-[family-name:var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#A89F94] mt-1 leading-tight font-[family-name:var(--font-body)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}