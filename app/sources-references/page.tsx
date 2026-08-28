import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sources & References | SNGPL Bill Check Hub',
  description: 'Every official government body, regulator, and utility company SNGPL Bill Check Hub relies on for tariff, tax, and regulatory information.',
  alternates: { canonical: 'https://www.checkgasbills.pk/sources-references' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Sources & References | SNGPL Bill Check Hub',
    description: 'The official sources — OGRA, SNGPL, SSGC, FBR — behind the information on this site, with what each one is referenced for.',
    url: 'https://www.checkgasbills.pk/sources-references',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

type Source = { name: string; purpose: string; url: string; referencedFor: string; internalLink?: { href: string; label: string } };

const regulatoryBodies: Source[] = [
  {
    name: 'OGRA — Oil and Gas Regulatory Authority',
    purpose: 'The federal regulator for Pakistan\'s gas sector. Sets and approves tariff rates, monitors service quality, and handles escalated consumer complaints against SNGPL and SSGC.',
    url: 'https://ogra.org.pk',
    referencedFor: 'Tariff determinations, service quality benchmarks, complaint escalation process, regulatory context for domestic/commercial/industrial gas pricing.',
  },
];

const governmentAuthorities: Source[] = [
  {
    name: 'FBR — Federal Board of Revenue',
    purpose: 'The federal tax authority responsible for administering General Sales Tax (GST) and other federal levies.',
    url: 'https://www.fbr.gov.pk',
    referencedFor: 'GST rate and tax-treatment context for the sales tax component of gas bills.',
  },
];

const utilityCompanies: Source[] = [
  {
    name: 'SNGPL — Sui Northern Gas Pipelines Limited',
    purpose: 'The gas utility serving Punjab, Khyber Pakhtunkhwa, and Azad Jammu & Kashmir.',
    url: 'https://www.sngpl.com.pk',
    referencedFor: 'Bill checking portal, consumer number format, duplicate bill process, payment channels, and SNGPL-specific procedures covered across this site.',
    internalLink: { href: '/companies/sngpl', label: 'Read our full SNGPL company profile' },
  },
  {
    name: 'SNGPL Self-Service Portal',
    purpose: 'SNGPL\'s online account management and complaint-registration system.',
    url: 'https://selfservice.sngpl.com.pk',
    referencedFor: 'Online complaint registration and self-service account processes referenced in our troubleshooting and payment guides.',
  },
  {
    name: 'SSGC — Sui Southern Gas Company',
    purpose: 'The gas utility serving Sindh and Balochistan, including Karachi, Hyderabad, and Quetta.',
    url: 'https://www.ssgc.com.pk/web/',
    referencedFor: 'Company profile and regulatory context. SSGC-specific bill-checking guides are not yet published on this site — see our note below.',
    internalLink: { href: '/companies/ssgc', label: 'Read our full SSGC company profile' },
  },
];

const helpCenters: Source[] = [
  {
    name: 'SNGPL Helpline (1199)',
    purpose: 'SNGPL\'s 24/7 customer service line for billing queries, complaints, and emergencies.',
    url: 'https://www.sngpl.com.pk',
    referencedFor: 'Contact information provided across our guides for issues we cannot resolve directly.',
  },
  {
    name: 'SSGC Customer Facilitation Centers',
    purpose: 'SSGC\'s in-person service centers for billing, connections, and complaints.',
    url: 'https://www.ssgc.com.pk/web/?page_id=128',
    referencedFor: 'General reference for SSGC\'s customer-facing service channels.',
  },
  {
    name: 'SSGC Complaints/Feedback',
    purpose: 'SSGC\'s official channel for lodging complaints and feedback.',
    url: 'https://www.ssgc.com.pk/web/?page_id=132',
    referencedFor: 'General reference for SSGC\'s complaint process.',
  },
];

function SourceCard({ s }: { s: Source }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="font-bold text-gray-900 mb-1">{s.name}</div>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.purpose}</p>
      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-medium hover:underline break-all">
        {s.url} ↗
      </a>
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Referenced for</div>
        <p className="text-sm text-gray-700 leading-relaxed">{s.referencedFor}</p>
      </div>
      {s.internalLink && (
        <div className="mt-3">
          <Link href={s.internalLink.href} className="text-blue-700 text-sm font-medium hover:underline">
            {s.internalLink.label} →
          </Link>
        </div>
      )}
    </div>
  );
}

export default function SourcesReferencesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.checkgasbills.pk/about' },
          { '@type': 'ListItem', position: 3, name: 'Sources & References', item: 'https://www.checkgasbills.pk/sources-references' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Sources & References',
        url: 'https://www.checkgasbills.pk/sources-references',
        isPartOf: { '@id': 'https://www.checkgasbills.pk/#website' },
        about: { '@id': 'https://www.checkgasbills.pk/#organization' },
      }) }} />

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span>/</span>
            <span className="text-white">Sources &amp; References</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            📚 Primary Sources
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Sources &amp; References</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
            We are an independent, secondary source. Every regulatory, tariff, and procedural claim on this
            site traces back to one of the official bodies below — this page lists them directly so you can
            verify anything for yourself. For why we source this way, see{' '}
            <Link href="/government-sources" className="text-white underline">Government Sources</Link>.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Regulatory Bodies</h2>
          <p className="text-gray-600 text-sm mb-5">The authority that governs how Pakistan&apos;s gas utilities set prices and treat consumers.</p>
          <div className="grid sm:grid-cols-1 gap-4">
            {regulatoryBodies.map(s => <SourceCard key={s.name} s={s} />)}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Government Authorities</h2>
          <p className="text-gray-600 text-sm mb-5">Federal bodies referenced for specific tax components of a gas bill.</p>
          <div className="grid sm:grid-cols-1 gap-4">
            {governmentAuthorities.map(s => <SourceCard key={s.name} s={s} />)}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Utility Companies</h2>
          <p className="text-gray-600 text-sm mb-5">The gas distribution companies our guides cover.</p>
          <div className="grid sm:grid-cols-1 gap-4">
            {utilityCompanies.map(s => <SourceCard key={s.name} s={s} />)}
          </div>
          <div className="warning-box mt-4">
            <p className="mb-0 text-sm">
              <strong>Scope note:</strong> This site currently focuses on SNGPL. SSGC is listed here as a
              source for company and regulatory context; step-by-step SSGC bill-checking guides are planned
              but not yet published.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Official Help Centers</h2>
          <p className="text-gray-600 text-sm mb-5">Where to go for an issue we cannot resolve on this site.</p>
          <div className="grid sm:grid-cols-1 gap-4">
            {helpCenters.map(s => <SourceCard key={s.name} s={s} />)}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Official Publications</h2>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>Placeholder:</strong> Direct citations to specific OGRA tariff determinations,
              circulars, and notifications (by document number and date) are being added as each is
              individually verified. We do not cite a specific document title or number until we have
              confirmed it against OGRA&apos;s own publication. Until then, consult{' '}
              <a href="https://ogra.org.pk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                ogra.org.pk
              </a>{' '}
              directly for official determinations.
            </p>
          </div>
        </section>

        <section className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-4">Related Trust Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/about" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">About This Site</div>
              <div className="text-xs text-gray-500">Who we are and what we cover</div>
            </Link>
            <Link href="/editorial-policy" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">Editorial Policy</div>
              <div className="text-xs text-gray-500">The standards every page follows</div>
            </Link>
            <Link href="/research-methodology" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">Research Methodology</div>
              <div className="text-xs text-gray-500">How we gather and verify information</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
