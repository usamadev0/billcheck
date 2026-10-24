import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Research Methodology | SNGPL Bill Check Hub',
  description: 'How SNGPL Bill Check Hub gathers, verifies, and updates the tariff and regulatory information used across this site.',
  alternates: { canonical: 'https://checkgasbills.pk/research-methodology' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Our Research Methodology | SNGPL Bill Check Hub',
    description: 'How information on this site is collected, verified against official sources, and updated when regulations change.',
    url: 'https://checkgasbills.pk/research-methodology',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'collection', label: 'How Information Is Collected' },
  { id: 'sources', label: 'Which Official Sources We Use' },
  { id: 'tariffs', label: 'How Tariff Updates Are Verified' },
  { id: 'regulatory', label: 'How Regulatory Updates Are Tracked' },
  { id: 'review', label: 'How Pages Are Reviewed' },
  { id: 'when', label: 'When Pages Are Updated' },
  { id: 'uncertainty', label: 'How Uncertainty Is Handled' },
  { id: 'changes', label: 'When Official Information Changes' },
];

export default function ResearchMethodologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://checkgasbills.pk/about' },
          { '@type': 'ListItem', position: 3, name: 'Our Research Methodology', item: 'https://checkgasbills.pk/research-methodology' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Our Research Methodology',
        url: 'https://checkgasbills.pk/research-methodology',
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
            <span className="text-white">Our Research Methodology</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            🔍 How We Work
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Our Research Methodology</h1>
          <p className="text-marine-100 text-base md:text-lg max-w-3xl leading-relaxed">
            How tariff figures, tax rates, and regulatory information on this site are gathered, checked
            against official sources, and kept current.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="bg-marine-50 border border-marine-200 rounded-2xl p-4 mb-10">
          <h3 className="font-bold text-marine-900 text-sm mb-3">On this page</h3>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="toc-link">{i + 1}. {item.label}</a>
              </li>
            ))}
          </ol>
        </div>

        <article className="prose-content">

          <h2 id="collection">How Information Is Collected</h2>
          <p>
            Guides on this site start from the official process or figure as published by the relevant
            authority — not from other bill-checking websites, forums, or general assumptions about how
            Pakistani utilities work. Where a process is described (for example, how to report a meter
            fault, or how a complaint escalates to OGRA), it is checked against what SNGPL, SSGC, or OGRA
            themselves publish about that process.
          </p>

          <h2 id="sources">Which Official Sources We Use</h2>
          <p>
            Our primary sources are the Oil and Gas Regulatory Authority (OGRA), Sui Northern Gas Pipelines
            Limited (SNGPL), Sui Southern Gas Company (SSGC), and, for tax-specific questions, the Federal
            Board of Revenue (FBR). The complete list, with the official website for each, is maintained on
            our <Link href="/sources-references">Sources &amp; References</Link> page rather than repeated
            on every guide.
          </p>

          <h2 id="tariffs">How Tariff Updates Are Verified</h2>
          <p>
            Tariff and tax figures (slab rates, GIDC, GST, fixed and meter-rent charges) are checked against
            OGRA&apos;s published determinations and against SNGPL&apos;s and SSGC&apos;s own published
            rate information. Because tariff rates are periodically revised, every page displaying a rate is
            expected to state the basis for that figure rather than presenting a number without a source.
          </p>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>Placeholder:</strong> Direct citations to specific OGRA determination numbers and
              dates for each tariff figure are being added to individual pages progressively. Until a page
              carries that specific citation, treat published rates as indicative and verify the current
              rate on your official SNGPL or SSGC bill or portal before making a payment decision.
            </p>
          </div>

          <h2 id="regulatory">How Regulatory Updates Are Tracked</h2>
          <p>
            Changes to consumer-facing processes — complaint procedures, connection requirements, service
            quality benchmarks — are tracked by monitoring OGRA&apos;s and the utility companies&apos;
            official publications. A dedicated, dated log of regulatory and tariff changes is planned as
            part of this site&apos;s ongoing trust infrastructure; until it exists, individual guide pages
            reflect the most recently verified process at the time each page was last substantively
            updated.
          </p>

          <h2 id="review">How Pages Are Reviewed</h2>
          <p>
            Before publishing, a page&apos;s factual claims are checked against the primary source it
            relies on. Full detail on review roles and the review workflow is documented on our{' '}
            <Link href="/editorial-policy">Editorial Policy</Link> page.
          </p>

          <h2 id="when">When Pages Are Updated</h2>
          <p>
            Pages are revised when there is a real reason to revise them: an official tariff or process
            change, a confirmed error report, or a scheduled periodic check for pages covering
            regulation that changes over time. Pages are not revised simply to display a newer date — see
            our <Link href="/editorial-policy#updates">Update Standards</Link> for why.
          </p>

          <h2 id="uncertainty">How Uncertainty Is Handled</h2>
          <p>
            Where we cannot confirm a specific figure, date, or process detail against a primary source, we
            say so directly on the page rather than presenting a best guess as settled fact. You will see
            this as an explicitly marked note rather than a silently approximate figure. If you notice a
            gap like this, we&apos;d rather know about it — see the error reporting process on our{' '}
            <Link href="/editorial-policy#errors">Editorial Policy</Link> page.
          </p>

          <h2 id="changes">What Happens When Official Information Changes</h2>
          <p>
            When OGRA, SNGPL, or SSGC change a tariff, fee, or process, the affected page is queued for
            review and updated once the change has been confirmed against the official source. We do not
            update figures based on unconfirmed reports, media speculation, or unofficial estimates —
            only against a verifiable primary source.
          </p>

        </article>

        <section className="mt-12 bg-marine-50 rounded-2xl p-6 border border-marine-100">
          <h3 className="font-bold text-marine-900 mb-4">Related Trust Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/about" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">About This Site</div>
              <div className="text-xs text-gray-500">Who we are and what we cover</div>
            </Link>
            <Link href="/editorial-policy" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Editorial Policy</div>
              <div className="text-xs text-gray-500">The standards every page follows</div>
            </Link>
            <Link href="/sources-references" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Sources &amp; References</div>
              <div className="text-xs text-gray-500">Every official source we rely on</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
