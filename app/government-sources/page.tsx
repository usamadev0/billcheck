import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government Sources | SNGPL Bill Check Hub',
  description: 'Why SNGPL Bill Check Hub relies on official government and regulatory sources — OGRA, SNGPL, SSGC, and FBR — instead of presenting itself as a primary authority.',
  alternates: { canonical: 'https://checkgasbills.pk/government-sources' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Government Sources | SNGPL Bill Check Hub',
    description: 'Why we rely on OGRA, SNGPL, SSGC, and FBR as our primary sources, and what each one actually governs.',
    url: 'https://checkgasbills.pk/government-sources',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

type GovSourceCategory = {
  label: string;
  name: string;
  url: string;
  governs: string;
  usedFor: string;
  internalLink?: { href: string; label: string };
  secondaryLink?: { href: string; label: string };
  tertiaryLink?: { href: string; label: string };
  quaternaryLink?: { href: string; label: string };
};

const categories: GovSourceCategory[] = [
  {
    label: 'Regulator',
    name: 'OGRA — Oil and Gas Regulatory Authority',
    url: 'https://ogra.org.pk',
    governs: 'Sets and approves gas tariffs, monitors service quality, and hears consumer complaints escalated beyond SNGPL or SSGC.',
    usedFor: 'Any explanation of how tariffs are set, what a consumer is entitled to, or how a complaint can be escalated.',
    internalLink: { href: '/ogra', label: 'Read our full OGRA authority page' },
    secondaryLink: { href: '/tariffs', label: 'See our Gas Tariffs hub' },
    tertiaryLink: { href: '/complaints', label: 'See our Complaints & Consumer Rights hub' },
    quaternaryLink: { href: '/safety', label: 'See our Gas Safety & Emergency Guide' },
  },
  {
    label: 'Utility company',
    name: 'SNGPL — Sui Northern Gas Pipelines Limited',
    url: 'https://www.sngpl.com.pk',
    governs: 'Distributes and bills natural gas in Punjab, Khyber Pakhtunkhwa, Azad Jammu & Kashmir, and the Islamabad Capital Territory.',
    usedFor: 'Every SNGPL-specific process this site currently documents — bill checking, consumer numbers, duplicate bills, payments.',
  },
  {
    label: 'Utility company',
    name: 'SSGC — Sui Southern Gas Company',
    url: 'https://www.ssgc.com.pk/web/',
    governs: 'Distributes and bills natural gas in Sindh and Balochistan.',
    usedFor: 'Company and regulatory context, plus our full SSGC entity profile.',
    internalLink: { href: '/companies/ssgc', label: 'Read our full SSGC company profile' },
  },
  {
    label: 'Tax authority',
    name: 'FBR — Federal Board of Revenue',
    url: 'https://www.fbr.gov.pk',
    governs: 'Administers General Sales Tax (GST) and other federal levies collected through utility bills.',
    usedFor: 'Context for the GST component shown on a gas bill.',
  },
];

export default function GovernmentSourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://checkgasbills.pk/about' },
          { '@type': 'ListItem', position: 3, name: 'Government Sources', item: 'https://checkgasbills.pk/government-sources' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Government Sources',
        url: 'https://checkgasbills.pk/government-sources',
        isPartOf: { '@id': 'https://checkgasbills.pk/#website' },
        about: { '@id': 'https://checkgasbills.pk/#organization' },
      }) }} />

      <section className="bg-gradient-to-br from-marine-600 to-marine-500 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-marine-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span>/</span>
            <span className="text-white">Government Sources</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            🏛️ Why We Cite Official Sources
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Government Sources</h1>
          <p className="text-marine-100 text-base md:text-lg max-w-3xl leading-relaxed">
            We are a secondary source. This page explains why every regulatory or financial claim on this
            site traces back to a government or regulatory body, and what each one is actually responsible
            for.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="highlight-box mb-8">
          <p className="mb-0 text-sm">
            This page explains <strong>why</strong> we source information the way we do and what each
            body governs. For the practical list of every source with the exact official link, see{' '}
            <Link href="/sources-references">Sources &amp; References</Link>.
          </p>
        </div>

        <article className="prose-content">
          <h2>Why Official Sources</h2>
          <p>
            Gas billing in Pakistan sits inside a regulated system: OGRA sets the rules, SNGPL and SSGC
            operate within them, and FBR governs the tax component. We are not any of these institutions,
            and we don&apos;t have independent authority to say what a tariff or a consumer&apos;s rights
            actually are — only they do. Our role is to explain that system clearly and point directly to
            the source whenever a claim can be verified, rather than asking readers to trust our summary on
            its own.
          </p>
          <p>
            This is also why, wherever practical, we link outward to the official website itself instead of
            only describing it — verifying us should never be harder than verifying the primary source
            directly.
          </p>
        </article>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {categories.map(c => (
            <div key={c.name} className="bg-white rounded-2xl border border-gray-200 p-5">
              <span className="badge bg-marine-100 text-marine-700 mb-2">{c.label}</span>
              <div className="font-bold text-gray-900 mb-2">{c.name}</div>
              <p className="text-sm text-gray-600 mb-3"><strong className="text-gray-800">Governs:</strong> {c.governs}</p>
              <p className="text-sm text-gray-600 mb-3"><strong className="text-gray-800">Used for:</strong> {c.usedFor}</p>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-marine-600 text-sm font-medium hover:underline break-all">
                {c.url} ↗
              </a>
              {c.internalLink && (
                <div className="mt-2">
                  <Link href={c.internalLink.href} className="text-marine-700 text-sm font-medium hover:underline">
                    {c.internalLink.label} →
                  </Link>
                </div>
              )}
              {c.secondaryLink && (
                <div className="mt-1">
                  <Link href={c.secondaryLink.href} className="text-marine-700 text-sm font-medium hover:underline">
                    {c.secondaryLink.label} →
                  </Link>
                </div>
              )}
              {c.tertiaryLink && (
                <div className="mt-1">
                  <Link href={c.tertiaryLink.href} className="text-marine-700 text-sm font-medium hover:underline">
                    {c.tertiaryLink.label} →
                  </Link>
                </div>
              )}
              {c.quaternaryLink && (
                <div className="mt-1">
                  <Link href={c.quaternaryLink.href} className="text-marine-700 text-sm font-medium hover:underline">
                    {c.quaternaryLink.label} →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Government Portals</h2>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>Placeholder:</strong> Beyond the regulator, the two utility companies, and the tax
              authority above, we have not yet verified a broader list of relevant government portals
              (for example, provincial consumer-complaint or ombudsman services) closely enough to list
              them here. We would rather leave this section incomplete than list a portal we haven&apos;t
              checked.
            </p>
          </div>
        </section>

        <section className="mt-12 bg-marine-50 rounded-2xl p-6 border border-marine-100">
          <h3 className="font-bold text-marine-900 mb-4">Related Trust Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/sources-references" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Sources &amp; References</div>
              <div className="text-xs text-gray-500">The full source list with official links</div>
            </Link>
            <Link href="/research-methodology" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Research Methodology</div>
              <div className="text-xs text-gray-500">How we verify against these sources</div>
            </Link>
            <Link href="/editorial-policy" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Editorial Policy</div>
              <div className="text-xs text-gray-500">Our government-first sourcing principle</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
