import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy | SNGPL Bill Check Hub',
  description: 'The editorial standards SNGPL Bill Check Hub follows: accuracy, independence, neutrality, government-first sourcing, and how errors are corrected.',
  alternates: { canonical: 'https://checkgasbills.pk/editorial-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Editorial Policy | SNGPL Bill Check Hub',
    description: 'The editorial standards this site follows before anything is published: accuracy, independence, neutrality, and government-first sourcing.',
    url: 'https://checkgasbills.pk/editorial-policy',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'principles', label: 'Editorial Principles' },
  { id: 'accuracy', label: 'Accuracy Policy' },
  { id: 'independence', label: 'Independence' },
  { id: 'neutrality', label: 'Neutrality' },
  { id: 'user-first', label: 'User-First Content' },
  { id: 'government-first', label: 'Government-First Sourcing' },
  { id: 'no-fabrication', label: 'No Fabricated Information' },
  { id: 'review', label: 'Review Standards' },
  { id: 'updates', label: 'Update Standards' },
  { id: 'errors', label: 'Error Reporting' },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://checkgasbills.pk/about' },
          { '@type': 'ListItem', position: 3, name: 'Editorial Policy', item: 'https://checkgasbills.pk/editorial-policy' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Editorial Policy',
        url: 'https://checkgasbills.pk/editorial-policy',
        isPartOf: { '@id': 'https://checkgasbills.pk/#website' },
        about: { '@id': 'https://checkgasbills.pk/#organization' },
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-marine-600 to-marine-500 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-marine-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span>/</span>
            <span className="text-white">Editorial Policy</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            📋 Editorial Standards
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Editorial Policy</h1>
          <p className="text-marine-100 text-base md:text-lg max-w-3xl leading-relaxed">
            The standards every page on this site is expected to meet before it is published — how we
            source information, how we handle uncertainty, and what happens when we get something wrong.
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

          <h2 id="principles">Editorial Principles</h2>
          <p>
            SNGPL Bill Check Hub exists to help gas consumers in Pakistan understand their bills, their
            rights, and the official processes that govern their gas service — accurately, and without
            confusing them further. Every page we publish is expected to meet four standards: it is
            accurate to the best information available at the time of publishing, it is independent of
            SNGPL, SSGC, and OGRA, it is written for the person trying to solve a real problem rather than
            for search engines, and it says clearly when we are uncertain instead of guessing.
          </p>

          <h2 id="accuracy">Accuracy Policy</h2>
          <p>
            Factual claims about tariffs, taxes, charges, and regulatory processes are checked against the
            official source before publishing — see our{' '}
            <Link href="/research-methodology">Research Methodology</Link> for how that check works and our{' '}
            <Link href="/sources-references">Sources &amp; References</Link> for exactly which official
            bodies we rely on. Where a figure or process cannot yet be confirmed against a primary source,
            the page says so explicitly rather than presenting an estimate as a fact.
          </p>

          <h2 id="independence">Independence</h2>
          <p>
            This site is not affiliated with, endorsed by, or operated on behalf of Sui Northern Gas
            Pipelines Limited (SNGPL), Sui Southern Gas Company (SSGC), or the Oil and Gas Regulatory
            Authority (OGRA). We do not have preferential access to any of these organizations, and nothing
            we publish is reviewed or approved by them before it goes live. Where our understanding of a
            process differs from what a reader experiences in practice, we want to hear about it — see{' '}
            <Link href="#errors">Error Reporting</Link> below.
          </p>

          <h2 id="neutrality">Neutrality</h2>
          <p>
            We describe official processes and consumer rights as they exist, not as we would prefer them
            to be. We do not soften criticism of a slow process to stay in anyone&apos;s good graces, and we
            do not exaggerate a problem to make our own guides look more necessary. Where a process is
            genuinely difficult or a timeline is genuinely long, we say so plainly.
          </p>

          <h2 id="user-first">User-First Content</h2>
          <p>
            Every page is written to answer the question a real visitor actually has, in the order they
            need it answered. We do not pad guides with unrelated background to lengthen them, and we do
            not repeat the same explanation across pages when a link to the canonical explanation would
            serve the reader better.
          </p>

          <h2 id="government-first">Government-First Sourcing</h2>
          <p>
            For anything regulatory, financial, or procedural — tariff rates, taxes, complaint escalation,
            connection processes — our starting point is always the official source: OGRA, SNGPL, SSGC, or
            the relevant government body. We link to those sources directly wherever possible instead of
            asking readers to take our summary on faith. The full list is maintained on our{' '}
            <Link href="/sources-references">Sources &amp; References</Link> page, and the reasoning
            behind this principle is explained on our <Link href="/government-sources">Government
            Sources</Link> page.
          </p>

          <h2 id="no-fabrication">No Fabricated Information</h2>
          <p>
            We do not invent tariff figures, dates, statistics, government policies, or quotes. We do not
            invent the identities or credentials of the people involved in producing this site. Where
            information genuinely isn&apos;t available or hasn&apos;t been verified yet, the relevant page
            says so with a clearly marked note rather than filling the gap with a plausible-sounding
            guess.
          </p>

          <h2 id="review">Review Standards</h2>
          <div className="highlight-box">
            <p className="mb-0">
              Every page is checked against the primary source it cites before publishing. As the editorial
              team behind this site grows, pages will move to a two-person review model — a distinct
              drafting step and a distinct, independent verification step.
            </p>
          </div>
          <div className="warning-box mt-4">
            <p className="mb-0 text-sm">
              <strong>Placeholder:</strong> The specific reviewer role and named reviewer(s) will be
              published here once that structure is formally in place. See{' '}
              <Link href="/research-methodology">Research Methodology</Link> for how information is checked
              today.
            </p>
          </div>

          <h2 id="updates">Update Standards</h2>
          <p>
            Pages are revised when the underlying official information changes — a new OGRA tariff
            determination, an updated SNGPL or SSGC process, a corrected fact. We do not change a
            page&apos;s displayed date without a substantive change to its content; a date that updates
            automatically on every visit, with nothing on the page actually changing, is not something we
            consider an honest freshness signal. The full policy — what counts as substantive, and what
            &quot;last reviewed&quot; is meant to signal — is on our{' '}
            <Link href="/content-update-policy">Content Update Policy</Link> page.
          </p>

          <h2 id="errors">Error Reporting Process</h2>
          <p>
            If you find information on this site that is incorrect, outdated, or unclear, you can report it
            through our{' '}
            <a href="/contact" className="text-marine-600 hover:underline">Contact page</a>. We review reports
            against the relevant primary source and correct confirmed errors. The full process — including
            the difference between a factual correction and an editorial improvement — is documented on our{' '}
            <Link href="/corrections-policy">Corrections Policy</Link> page.
          </p>

        </article>

        {/* Related trust pages */}
        <section className="mt-12 bg-marine-50 rounded-2xl p-6 border border-marine-100">
          <h3 className="font-bold text-marine-900 mb-4">Related Trust Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/about" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">About This Site</div>
              <div className="text-xs text-gray-500">Who we are and what we cover</div>
            </Link>
            <Link href="/research-methodology" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Research Methodology</div>
              <div className="text-xs text-gray-500">How we gather and verify information</div>
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
