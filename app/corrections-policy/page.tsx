import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corrections Policy | SNGPL Bill Check Hub',
  description: 'How to report an error on SNGPL Bill Check Hub, how corrections are reviewed, and the difference between a factual correction and an editorial improvement.',
  alternates: { canonical: 'https://checkgasbills.pk/corrections-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Corrections Policy | SNGPL Bill Check Hub',
    description: 'How errors are reported, reviewed, and corrected on this site.',
    url: 'https://checkgasbills.pk/corrections-policy',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'report', label: 'How to Report an Error' },
  { id: 'review', label: 'How Corrections Are Reviewed' },
  { id: 'types', label: 'Factual vs. Editorial Changes' },
  { id: 'process', label: 'The Public Correction Process' },
  { id: 'log', label: 'Correction Log' },
];

export default function CorrectionsPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://checkgasbills.pk/about' },
          { '@type': 'ListItem', position: 3, name: 'Corrections Policy', item: 'https://checkgasbills.pk/corrections-policy' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Corrections Policy',
        url: 'https://checkgasbills.pk/corrections-policy',
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
            <span className="text-white">Corrections Policy</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            ✅ How We Handle Mistakes
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Corrections Policy</h1>
          <p className="text-marine-100 text-base md:text-lg max-w-3xl leading-relaxed">
            How to report something wrong on this site, and exactly what happens after you do.
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

          <h2 id="report">How to Report an Error</h2>
          <p>
            If you find information on this site that is incorrect, outdated, or unclear, report it through
            our <a href="/contact" className="text-marine-600 hover:underline">Contact page</a>. Please
            include the page URL, what you believe is wrong, and — if you have one — a link to the official
            source that shows the correct information. That last part is what lets us verify and fix the
            issue quickly rather than taking your word (or ours) on faith.
          </p>

          <h2 id="review">How Corrections Are Reviewed</h2>
          <p>
            Every report is checked against the relevant primary source before anything is changed — see{' '}
            <Link href="/research-methodology">Research Methodology</Link> for how that verification works.
            If the report is confirmed, the page is corrected. If it can&apos;t be confirmed against an
            official source, we don&apos;t make the change on the strength of the report alone, but we will
            follow up if you&apos;re able to point us to something we can verify.
          </p>

          <h2 id="types">Factual Corrections vs. Editorial Improvements</h2>
          <p>
            We treat these as two different things. A <strong>factual correction</strong> fixes information
            that was actually wrong — an incorrect tariff figure, a wrong phone number, a description of a
            process that doesn&apos;t match how it actually works. A factual correction always follows the
            verification step above before publishing. An <strong>editorial improvement</strong> is a
            wording, clarity, or structural change that doesn&apos;t alter the substance of what a page says
            — fixing an unclear sentence, reorganizing a list, adding a missing link. Editorial improvements
            don&apos;t require the same source-verification step because nothing factual is changing.
          </p>
          <p>
            This distinction matters for how a page&apos;s update history should be read: a page revised
            for a factual correction is telling you something changed about the information itself; a page
            revised for an editorial improvement is not. See our{' '}
            <Link href="/content-update-policy">Content Update Policy</Link> for how this affects what
            counts as a substantive update.
          </p>

          <h2 id="process">The Public Correction Process</h2>
          <ol>
            <li>You report an issue via <a href="/contact" className="text-marine-600 hover:underline">Contact</a>, ideally with a source.</li>
            <li>We check the report against the relevant official source (OGRA, SNGPL, SSGC, or FBR).</li>
            <li>If confirmed, the page is corrected and, for a substantive factual change, its &quot;last reviewed&quot; status is updated to reflect that — see our <Link href="/content-update-policy#philosophy">Last Reviewed philosophy</Link>.</li>
            <li>If not confirmed, we do not change the page, but we keep the report on file in case supporting evidence becomes available later.</li>
          </ol>

          <h2 id="log">Correction Log</h2>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>Placeholder:</strong> A public, dated log of confirmed corrections is planned as this
              site&apos;s correction process matures. Until it exists, corrections are reflected directly on
              the affected page rather than tracked in a separate public record.
            </p>
          </div>

        </article>

        <section className="mt-12 bg-marine-50 rounded-2xl p-6 border border-marine-100">
          <h3 className="font-bold text-marine-900 mb-4">Related Trust Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/editorial-policy" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Editorial Policy</div>
              <div className="text-xs text-gray-500">Review standards and error reporting</div>
            </Link>
            <Link href="/content-update-policy" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Content Update Policy</div>
              <div className="text-xs text-gray-500">What counts as a substantive update</div>
            </Link>
            <Link href="/transparency-statement" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Transparency Statement</div>
              <div className="text-xs text-gray-500">Ownership and independence disclosures</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
