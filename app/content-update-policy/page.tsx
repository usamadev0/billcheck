import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Update Policy | SNGPL Bill Check Hub',
  description: 'What triggers an update on SNGPL Bill Check Hub, how often pages are reviewed, and what "Last Reviewed" actually means on this site.',
  alternates: { canonical: 'https://checkgasbills.pk/content-update-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Content Update Policy | SNGPL Bill Check Hub',
    description: 'What triggers a content update, how review cadence works, and what "Last Reviewed" means on this site.',
    url: 'https://checkgasbills.pk/content-update-policy',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'triggers', label: 'What Triggers an Update' },
  { id: 'cadence', label: 'Review Cadence' },
  { id: 'substantive-vs-cosmetic', label: 'Substantive vs. Cosmetic Updates' },
  { id: 'philosophy', label: '"Last Reviewed" Philosophy' },
];

export default function ContentUpdatePolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://checkgasbills.pk/about' },
          { '@type': 'ListItem', position: 3, name: 'Content Update Policy', item: 'https://checkgasbills.pk/content-update-policy' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Content Update Policy',
        url: 'https://checkgasbills.pk/content-update-policy',
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
            <span className="text-white">Content Update Policy</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            🔄 How Pages Change Over Time
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Content Update Policy</h1>
          <p className="text-marine-100 text-base md:text-lg max-w-3xl leading-relaxed">
            What actually triggers a page to be revised on this site — and why a page&apos;s date should
            mean something when it changes.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="bg-marine-100 border border-marine-200 rounded-2xl p-4 mb-10">
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

          <h2 id="triggers">What Triggers an Update</h2>
          <p>Pages on this site are revised when one of the following actually happens — not on a fixed calendar:</p>
          <ul>
            <li><strong>An OGRA tariff or regulatory change</strong> — a new determination affecting slab rates, GIDC, or service standards.</li>
            <li><strong>An SNGPL or SSGC process notice</strong> — a change to how a service (payment, complaint registration, connection process) actually works.</li>
            <li><strong>A confirmed user-reported correction</strong> — see our <Link href="/corrections-policy">Corrections Policy</Link> for how these are verified.</li>
            <li><strong>A scheduled periodic check</strong> — pages covering information that can drift over time (tariffs, contact numbers, procedures) are periodically re-checked against the primary source even without an external trigger.</li>
          </ul>

          <h2 id="cadence">Review Cadence</h2>
          <p>
            We don&apos;t operate on a blanket &quot;refresh everything every X months&quot; schedule —
            that produces exactly the kind of cosmetic date-stamping we&apos;re trying to avoid (see below).
            Instead, pages tied to regulated, changeable information (tariffs, taxes, official processes)
            are checked more frequently than pages describing something stable (what a consumer number is,
            how HHM is measured). The full verification process behind this is documented in{' '}
            <Link href="/research-methodology">Research Methodology</Link>.
          </p>

          <h2 id="substantive-vs-cosmetic">Substantive vs. Cosmetic Updates</h2>
          <p>
            A <strong>substantive update</strong> changes what a page actually says — a corrected figure, a
            revised process, new information that changes the guidance given. A <strong>cosmetic
            edit</strong> changes how a page reads without changing what it says — fixing a typo, improving
            a sentence, adjusting formatting. Only a substantive update should ever be reflected in a
            page&apos;s displayed &quot;last reviewed&quot; or &quot;last updated&quot; status. This mirrors
            the distinction we draw between factual corrections and editorial improvements on our{' '}
            <Link href="/corrections-policy#types">Corrections Policy</Link> page.
          </p>

          <h2 id="philosophy">&quot;Last Reviewed&quot; Philosophy</h2>
          <p>
            A &quot;last reviewed&quot; or &quot;last updated&quot; date is only meaningful if it reflects
            something that actually happened on that date. A date that changes automatically every time a
            page is rebuilt, regardless of whether anything on it changed, doesn&apos;t tell a reader
            anything true — and readers (and search engines) eventually learn to ignore a signal like that
            entirely. Our commitment is the opposite: a displayed review date should only move when a real,
            substantive check or correction happened, so that when it does move, it means something.
          </p>

        </article>

        <section className="mt-12 bg-marine-100 rounded-2xl p-6 border border-marine-100">
          <h3 className="font-bold text-marine-900 mb-4">Related Trust Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/editorial-policy" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Editorial Policy</div>
              <div className="text-xs text-gray-500">The standards every page follows</div>
            </Link>
            <Link href="/research-methodology" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Research Methodology</div>
              <div className="text-xs text-gray-500">How we verify before publishing</div>
            </Link>
            <Link href="/corrections-policy" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Corrections Policy</div>
              <div className="text-xs text-gray-500">How reported errors get fixed</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
