import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <TrustedBy />
      <CTASection />
      <Footer />
    </main>
  );
}

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 16l4-8 4 4 4-4" />
        </svg>
      ),
      title: 'Funnel Analytics',
      desc: 'Visualize your entire onboarding funnel. See exactly where users drop off with precision analytics.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Drop-off Detection',
      desc: 'Automatically identify friction points in your onboarding flow before they cost you users.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16M9 6v12" />
        </svg>
      ),
      title: 'A/B Testing',
      desc: 'Test onboarding variants head-to-head. Ship the flow that converts best, backed by data.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Smart Flows',
      desc: 'Build adaptive onboarding paths that respond to user behavior in real time.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Enterprise SSO',
      desc: 'Support SAML, OIDC, and social login out of the box. Enterprise-grade security built in.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Real-time Dashboard',
      desc: 'Monitor activation rates, drop-off points, and time-to-value metrics in real time.',
    },
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-heading mb-4">
          Everything you need to stop losing users
        </h2>
        <p className="section-subheading mx-auto">
          From funnel analytics to adaptive onboarding flows, Prismflow gives your team the insights and tools to convert more sign-ups into active users.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="card p-8">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-accent-blue flex items-center justify-center mb-5">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">{f.title}</h3>
            <p className="text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Integrate',
      desc: 'Drop our SDK into your app. One line of code gets you started with full onboarding tracking.',
    },
    {
      step: '02',
      title: 'Analyze',
      desc: 'Watch your funnel come to life. Identify drop-off points, bottlenecks, and conversion gaps in real time.',
    },
    {
      step: '03',
      title: 'Optimize',
      desc: 'Deploy smart flows and A/B test variants. Ship the onboarding experience that converts more users.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            How Prismflow works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three steps to a better onboarding experience. No complex setup. No weeks of integration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-navy-700 border border-navy-600 text-accent-blue text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      desc: 'For early-stage startups getting serious about onboarding.',
      features: ['Up to 1,000 MAUs', 'Funnel analytics', 'Drop-off detection', 'Email reports', 'Community support'],
      cta: 'Start free trial',
      href: '/sign-up',
      featured: false,
    },
    {
      name: 'Growth',
      price: '$149',
      period: '/month',
      desc: 'For scaling companies that need data-driven onboarding.',
      features: ['Up to 10,000 MAUs', 'Everything in Starter', 'A/B testing', 'Smart flows', 'Priority support', 'API access'],
      cta: 'Start free trial',
      href: '/sign-up',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For organizations with advanced security and scale needs.',
      features: ['Unlimited MAUs', 'Everything in Growth', 'Enterprise SSO (SAML/OIDC)', 'Dedicated support', 'Custom integrations', 'SLA guarantee'],
      cta: 'Contact sales',
      href: 'mailto:sales@prismflow.io',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-heading mb-4">Simple, transparent pricing</h2>
        <p className="section-subheading mx-auto">
          Start with a 14-day free trial. No credit card required. Upgrade when you are ready.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl p-8 ${
              tier.featured
                ? 'bg-navy-900 text-white ring-2 ring-accent-blue scale-105'
                : 'bg-white border border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-2 ${tier.featured ? 'text-accent-blue' : 'text-navy-900'}`}>
              {tier.name}
            </h3>
            <div className="mb-2">
              <span className={`text-4xl font-bold ${tier.featured ? 'text-white' : 'text-navy-900'}`}>{tier.price}</span>
              <span className={`text-lg ${tier.featured ? 'text-gray-400' : 'text-gray-500'}`}>{tier.period}</span>
            </div>
            <p className={`text-sm mb-8 ${tier.featured ? 'text-gray-400' : 'text-gray-500'}`}>{tier.desc}</p>
            <ul className="space-y-3 mb-8">
              {tier.features.map((f) => (
                <li key={f} className={`flex items-center gap-3 text-sm ${tier.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  <svg className={`w-4 h-4 flex-shrink-0 ${tier.featured ? 'text-accent-teal' : 'text-accent-teal'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={tier.href}
              className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                tier.featured
                  ? 'bg-accent-blue text-white hover:bg-blue-600'
                  : 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustedBy() {
  const companies = ['TechForward', 'ScaleOps', 'DataBridge', 'CloudNest', 'FlowState', 'NexGen'];

  return (
    <section className="py-16 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {companies.map((company) => (
            <span key={company} className="text-xl font-bold text-gray-300 tracking-tight">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to stop losing users during onboarding?
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          Join forward-thinking SaaS teams using Prismflow to increase activation rates and reduce drop-off.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/sign-up" className="btn-primary text-lg px-8 py-4">
            Start free trial
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white font-semibold transition-colors">
            See how it works →
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">14-day free trial · No credit card required</p>
      </div>
    </section>
  );
}
