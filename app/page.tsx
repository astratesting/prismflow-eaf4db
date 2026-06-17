import Link from 'next/link';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const FEATURES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'Friction Detection',
    description: 'Automatically identify where users drop off in your onboarding flow with real-time tracking and session analysis.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Activation Analytics',
    description: 'Track activation rates, time-to-value, and conversion funnels with beautiful, easy-to-read dashboards.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Smart Flows',
    description: 'Build adaptive onboarding flows that guide each user to their aha moment based on behavior and role.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    title: 'A/B Testing',
    description: 'Experiment with different onboarding flows and automatically optimize for the highest conversion rates.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Real-time Insights',
    description: 'Get instant visibility into user behavior with live event tracking and actionable recommendations.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Easy Integration',
    description: 'Add Prismflow to your app in minutes with our lightweight SDK. Works with any frontend framework.',
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '$199',
    period: '/month',
    description: 'Perfect for early-stage SaaS companies looking to improve their onboarding.',
    features: ['Up to 1,000 MAU', '5 onboarding flows', 'Basic analytics', 'Email support', 'Standard integrations'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$499',
    period: '/month',
    description: 'For growing SaaS businesses that need advanced optimization and A/B testing.',
    features: ['Up to 5,000 MAU', 'Unlimited flows', 'Advanced analytics', 'A/B testing', 'Priority support', 'Custom branding', 'API access'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations that need dedicated support, SLAs, and custom integrations.',
    features: ['Unlimited MAU', 'Unlimited flows', 'White-label option', 'Dedicated CSM', 'SLA guarantee', 'Custom integrations', 'SSO / SAML'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#F5F3FF] text-[#7C3AED] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-heading)]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Everything you need to fix
            <span className="text-[#7C3AED]"> onboarding</span>
          </h2>
          <p className="text-lg text-[#6B6378] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            From detecting friction to building smart flows, Prismflow gives you the complete toolkit to turn more sign-ups into active users.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="card group hover:border-[#7C3AED]/30"
            >
              <div className="text-[#7C3AED] mb-4 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)]">
                {feature.title}
              </h3>
              <p className="text-[#6B6378] leading-relaxed font-[family-name:var(--font-body)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#FFF7ED] text-[#F59E0B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-heading)]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
              </svg>
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
              From lost users to loyal
              <span className="text-[#F59E0B]"> advocates</span>
            </h2>
            <p className="text-lg text-[#6B6378] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Three simple steps to transform your onboarding from a leaky bucket into a growth engine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Connect Your App',
                description: 'Add our lightweight SDK in minutes. Prismflow automatically starts tracking user behavior and identifying friction points.',
                color: '#7C3AED',
              },
              {
                step: '2',
                title: 'Build Smart Flows',
                description: 'Use our visual builder to create adaptive onboarding flows that guide each user to value based on their behavior.',
                color: '#FF6B6B',
              },
              {
                step: '3',
                title: 'Watch Activation Soar',
                description: 'Monitor real-time analytics, run A/B tests, and continuously optimize. See your activation rate climb week over week.',
                color: '#F59E0B',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold font-[family-name:var(--font-heading)]"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-heading)]">{item.title}</h3>
                <p className="text-[#6B6378] leading-relaxed font-[family-name:var(--font-body)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F0] text-[#FF6B6B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 font-[family-name:var(--font-heading)]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Start free, scale as you
            <span className="text-[#FF6B6B]"> grow</span>
          </h2>
          <p className="text-lg text-[#6B6378] max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            14-day free trial on every plan. No credit card required. Cancel anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlight
                  ? 'bg-[#7C3AED] text-white ring-4 ring-[#7C3AED]/20 scale-105'
                  : 'bg-white border border-[#F5F0EB]'
              }`}
            >
              {tier.highlight && (
                <span className="inline-block bg-[#F59E0B] text-[#1E1B2E] text-xs font-bold px-3 py-1 rounded-full mb-4 font-[family-name:var(--font-heading)]">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-semibold mb-2 font-[family-name:var(--font-heading)] ${tier.highlight ? 'text-white' : 'text-[#1E1B2E]'}`}>
                {tier.name}
              </h3>
              <div className="mb-2">
                <span className={`text-4xl font-bold font-[family-name:var(--font-heading)] ${tier.highlight ? 'text-white' : 'text-[#1E1B2E]'}`}>
                  {tier.price}
                </span>
                <span className={tier.highlight ? 'text-[#DDD6FE]' : 'text-[#6B6378]'}>
                  {tier.period}
                </span>
              </div>
              <p className={`mb-6 text-sm font-[family-name:var(--font-body)] ${tier.highlight ? 'text-[#DDD6FE]' : 'text-[#6B6378]'}`}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#F59E0B]' : 'text-[#7C3AED]'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className={`text-sm font-[family-name:var(--font-body)] ${tier.highlight ? 'text-[#EDE9FE]' : 'text-[#4A4258]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 font-[family-name:var(--font-heading)] ${
                  tier.highlight
                    ? 'bg-white text-[#7C3AED] hover:bg-[#F5F3FF]'
                    : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#A89F94] uppercase tracking-wider mb-6 font-[family-name:var(--font-heading)]">
            Built for modern SaaS teams
          </p>
          <p className="text-lg text-[#6B6378] font-[family-name:var(--font-body)]">
            Prismflow helps product teams at B2B SaaS companies detect friction, build smarter onboarding, and boost activation rates — without the enterprise complexity.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-3xl p-12 md:p-16 shadow-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
            Ready to fix your onboarding?
          </h2>
          <p className="text-[#DDD6FE] text-lg mb-8 max-w-xl mx-auto font-[family-name:var(--font-body)]">
            Start your 14-day free trial. See exactly where users drop off and start building flows that convert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="bg-white text-[#7C3AED] px-8 py-3.5 rounded-xl font-semibold hover:bg-[#F5F3FF] transition-all duration-200 shadow-lg font-[family-name:var(--font-heading)]"
            >
              Get Started Free →
            </Link>
            <Link
              href="#features"
              className="text-white/90 hover:text-white px-8 py-3.5 rounded-xl font-semibold border border-white/30 hover:border-white/50 transition-all duration-200 font-[family-name:var(--font-heading)]"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-6 text-[#C4B5FD] text-sm font-[family-name:var(--font-body)]">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}