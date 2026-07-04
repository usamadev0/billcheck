import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About SNGPL Bill Check Hub | Pakistan Gas Bill Resource',
  description: 'Learn about SNGPL Bill Check Hub — Pakistan\'s independent resource for gas bill checking, consumer number guides, duplicate bill downloads, and SNGPL calculators.',
  alternates: { canonical: 'https://www.checkgasbills.pk/about' },
  robots: { index: true, follow: true },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About SNGPL Bill Check Hub',
  url: 'https://www.checkgasbills.pk/about',
  description: 'Pakistan\'s independent resource for SNGPL gas bill checking, consumer number guides, and gas bill calculators.',
  isPartOf: { '@id': 'https://www.checkgasbills.pk/#website' },
  about: { '@id': 'https://www.checkgasbills.pk/#organization' },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">About SNGPL Bill Check Hub</h1>
          <p className="text-blue-100 text-lg">Pakistan&apos;s independent resource for SNGPL gas consumers</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p>
            SNGPL Bill Check Hub is an independent informational website dedicated to helping Pakistani gas
            consumers navigate SNGPL (Sui Northern Gas Pipelines Limited) services. We provide:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li><strong>Bill Check Tool</strong> — Enter your consumer number and get redirected safely to the official SNGPL portal</li>
            <li><strong>Gas Bill Calculator</strong> — Estimate your monthly bill based on HHM units and current slabs</li>
            <li><strong>Consumer Number Guide</strong> — Step-by-step help finding and recovering your SNGPL consumer number</li>
            <li><strong>Duplicate Bill Download</strong> — Multiple methods for downloading your SNGPL bill</li>
            <li><strong>City-Specific Guides</strong> — Tailored gas bill guides for 44+ cities across Pakistan</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p>
            Millions of Pakistani gas consumers struggle to find accurate, up-to-date information about
            their SNGPL bills. Official resources can be difficult to navigate. Our mission is to make
            SNGPL bill management simple, accessible, and stress-free for every consumer in Pakistan.
          </p>
          <p className="mt-3">
            We do not store your consumer number, process payments, or handle any sensitive utility data.
            Every interaction with bill data happens directly on the official SNGPL portal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p>
            Our team has deep knowledge of Pakistan&apos;s gas utility sector, including:
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>SNGPL tariff structures and slab-based billing</li>
            <li>HHM (Hundred Hundred Metric) measurement system and GCV calculations</li>
            <li>GIDC, GST, Meter Rent, and OGRA surcharge structures</li>
            <li>Official SNGPL portal workflows and consumer self-service systems</li>
            <li>Regional gas billing patterns across 44+ cities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Disclaimer</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-900 font-medium">
              ⚠️ SNGPL Bill Check Hub is <strong>not affiliated with</strong> Sui Northern Gas Pipelines
              Limited (SNGPL) or any Pakistani government body. This is an independent informational
              resource. For official billing queries, contact SNGPL directly at{' '}
              <strong>1199</strong> or visit{' '}
              <a href="https://www.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                sngpl.com.pk
              </a>.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/bill-check', label: 'SNGPL Bill Check Guide', desc: 'Step-by-step guide to checking your gas bill' },
              { href: '/calculator', label: 'Gas Bill Calculator', desc: 'Estimate your monthly SNGPL bill instantly' },
              { href: '/consumer-number', label: 'Consumer Number Help', desc: 'Find or recover your SNGPL consumer number' },
              { href: '/sngpl/cities', label: 'City Guides', desc: 'Gas bill guides for 44+ cities in Pakistan' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <div className="font-semibold text-blue-700 mb-1">{item.label}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
