import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Transparency Statement | SNGPL Bill Check Hub',
  description: 'Ownership, independence, monetization, and conflict-of-interest disclosures for SNGPL Bill Check Hub.',
  alternates: { canonical: 'https://checkgasbills.pk/transparency-statement' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Transparency Statement | SNGPL Bill Check Hub',
    description: 'Who operates this site, how it is funded, and what independence and conflict-of-interest commitments apply to its content.',
    url: 'https://checkgasbills.pk/transparency-statement',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'ownership', label: 'Ownership Disclosure' },
  { id: 'independence', label: 'Independence Statement' },
  { id: 'monetization', label: 'Advertising & Monetization' },
  { id: 'non-affiliation', label: 'Non-Affiliation Statement' },
  { id: 'editorial-independence', label: 'Editorial Independence' },
  { id: 'conflict', label: 'Conflict-of-Interest Policy' },
];

export default function TransparencyStatementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://checkgasbills.pk/about' },
          { '@type': 'ListItem', position: 3, name: 'Transparency Statement', item: 'https://checkgasbills.pk/transparency-statement' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Transparency Statement',
        url: 'https://checkgasbills.pk/transparency-statement',
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
            <span className="text-white">Transparency Statement</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            🔎 Who&apos;s Behind This Site
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Transparency Statement</h1>
          <p className="text-marine-100 text-base md:text-lg max-w-3xl leading-relaxed">
            Who operates this site, how it is funded, and what commitments govern its independence.
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

          <h2 id="ownership">Ownership Disclosure</h2>
          <p>
            SNGPL Bill Check Hub (checkgasbills.pk) is an independently operated informational website. It
            is not owned, funded, or controlled by SNGPL, SSGC, OGRA, or any Pakistani government body.
          </p>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>Placeholder:</strong> The specific registered operating entity and named
              point-of-contact for this site are being finalized for publication here. We have chosen to
              leave this incomplete rather than publish placeholder names or credentials that aren&apos;t
              real.
            </p>
          </div>

          <h2 id="independence">Independence Statement</h2>
          <p>
            This site receives no compensation, preferential access, or editorial direction from SNGPL,
            SSGC, or OGRA. Nothing we publish is reviewed or approved by any of these organizations before
            it goes live. Our full independence commitments are documented on our{' '}
            <Link href="/editorial-policy#independence">Editorial Policy</Link> page.
          </p>

          <h2 id="monetization">Advertising &amp; Monetization</h2>
          <p>
            This site is supported by contextual display advertising (Google AdSense), as already disclosed
            in our{' '}
            <a href="/privacy-policy" className="text-marine-600 hover:underline">Privacy Policy</a>. We do
            not charge SNGPL, SSGC, OGRA, or any payment provider for placement, mention, or favorable
            coverage in our guides. Advertising is served programmatically and does not influence which
            topics we cover or what we say about them.
          </p>

          <h2 id="non-affiliation">Non-Affiliation Statement</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 not-prose">
            <p className="text-amber-900 font-medium mb-0">
              ⚠️ SNGPL Bill Check Hub is <strong>not affiliated with</strong> Sui Northern Gas Pipelines
              Limited (SNGPL), Sui Southern Gas Company (SSGC), the Oil and Gas Regulatory Authority
              (OGRA), or any Pakistani government body. For official billing queries, contact SNGPL
              directly at <strong>1199</strong> or visit{' '}
              <a href="https://www.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-marine-700 underline">sngpl.com.pk</a>.
            </p>
          </div>

          <h2 id="editorial-independence">Editorial Independence</h2>
          <p>
            Content decisions — what we cover, how we explain it, and when we correct or update it — are
            made independently of any advertiser, utility company, or regulator. The process behind those
            decisions is documented in full on our{' '}
            <Link href="/editorial-policy">Editorial Policy</Link> page rather than repeated here.
          </p>

          <h2 id="conflict">Conflict-of-Interest Policy</h2>
          <p>
            We do not accept payment, free services, or preferential treatment from SNGPL, SSGC, OGRA, any
            payment provider (Easypaisa, JazzCash, or banks), or any other party in exchange for coverage,
            placement, or favorable framing in our guides. If this ever changes for any part of the site,
            it will be disclosed on this page before it takes effect.
          </p>

        </article>

        <section className="mt-12 bg-marine-50 rounded-2xl p-6 border border-marine-100">
          <h3 className="font-bold text-marine-900 mb-4">Related Trust Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/editorial-policy" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Editorial Policy</div>
              <div className="text-xs text-gray-500">The standards every page follows</div>
            </Link>
            <Link href="/about" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">About This Site</div>
              <div className="text-xs text-gray-500">Who we are and what we cover</div>
            </Link>
            <Link href="/corrections-policy" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Corrections Policy</div>
              <div className="text-xs text-gray-500">How we handle reported errors</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
