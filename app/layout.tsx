import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const BASE = 'https://checkgasbills.pk';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'SNGPL Bill Check Online | Pakistan Gas Bill Checker Hub',
    template: '%s | SNGPL Bill Check Hub',
  },
  description:
    'Check your SNGPL gas bill online instantly. Enter your consumer number and get safely redirected to the official Sui Northern Gas portal. Includes calculator, guides, and duplicate bill download help.',
  keywords: [
    'SNGPL bill check online',
    'SNGPL duplicate bill',
    'gas bill online Pakistan',
    'SNGPL consumer number',
    'SNGPL bill calculator',
    'SNGPL gas bill download',
    'sui northern gas bill check',
    'SNGPL online portal Pakistan',
  ],
  authors: [{ name: 'SNGPL Bill Check Hub', url: BASE }],
  creator: 'SNGPL Bill Check Hub',
  publisher: 'SNGPL Bill Check Hub',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website', locale: 'en_PK',
    url: BASE,
    siteName: 'SNGPL Bill Check Hub',
    title: 'SNGPL Gas Bill Check Online | Pakistan Gas Bill Hub',
    description: 'Check SNGPL gas bills online. Consumer number guide, duplicate bill download, bill calculator & more.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'SNGPL Bill Check Hub — Pakistan Gas Bill Checker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNGPL Gas Bill Check Online | Pakistan',
    description: 'Check SNGPL gas bills instantly. Official portal redirect + guides + calculator.',
  },
  alternates: { canonical: BASE },
  verification: { google: 'LcX_ouViZIkyjMAUQz5B4oZQLhI9nkgtQenOHos6wQk' },
  category: 'utility',
};

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, themeColor: '#2563eb',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: 'SNGPL Bill Check Hub',
  url: BASE,
  logo: { '@type': 'ImageObject', url: `${BASE}/opengraph-image`, width: 1200, height: 630 },
  description: 'Pakistan\'s most complete resource for SNGPL gas bill checking, consumer number guides, duplicate bill downloads, and gas bill calculators.',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', areaServed: 'PK', availableLanguage: ['English', 'Urdu'] },
  sameAs: ['https://www.sngpl.com.pk'],
  knowsAbout: ['SNGPL gas bills', 'Pakistan gas utilities', 'consumer number lookup', 'gas bill calculation'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: 'SNGPL Bill Check Hub',
  description: 'Check your SNGPL gas bill online instantly with official portal redirect, calculator, and guides.',
  publisher: { '@id': `${BASE}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/sngpl/cities/{search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.sngpl.com.pk" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-gray-200 p-3 shadow-xl">
          <a href="/#checker" className="btn-primary w-full py-3.5 text-base justify-center">
            Check SNGPL Bill Now →
          </a>
        </div>
      </body>
    </html>
  );
}
