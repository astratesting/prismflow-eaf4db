import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prismflow — Optimize Your Onboarding. Reduce Drop-off.',
  description: 'Prismflow helps B2B SaaS companies streamline digital onboarding experiences, reduce user drop-off, and improve activation rates with data-driven insights.',
  keywords: ['onboarding', 'B2B SaaS', 'user activation', 'drop-off reduction', 'funnel analytics', 'digital adoption'],
  openGraph: {
    title: 'Prismflow — Onboarding Optimization Platform',
    description: 'Reduce user drop-off during sign-up and activation. Data-driven onboarding for enterprise SaaS.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
