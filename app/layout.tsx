import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prismflow — Optimize Your SaaS Onboarding',
  description: 'Turn sign-ups into power users. Prismflow helps B2B SaaS companies detect friction, build smart onboarding flows, and boost activation rates.',
  keywords: ['onboarding', 'SaaS', 'activation', 'user onboarding', 'B2B', 'product adoption'],
  openGraph: {
    title: 'Prismflow — Optimize Your SaaS Onboarding',
    description: 'Turn sign-ups into power users with data-driven onboarding optimization.',
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
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}