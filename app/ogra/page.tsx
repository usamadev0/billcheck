import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OGRA — Oil & Gas Regulatory Authority Explained | SNGPL Bill Check Hub',
  description: 'What OGRA is, how it regulates SNGPL and SSGC, how gas tariffs are determined, and the difference between OGRA\'s prescribed price and the consumer sale price notified by the Federal Government.',
  alternates: { canonical: 'https://checkgasbills.pk/ogra' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'OGRA — Oil & Gas Regulatory Authority Explained',
    description: 'An independent reference page on OGRA: its mandate, its role in gas tariff determination, and how it interacts with SNGPL and SSGC.',
    url: 'https://checkgasbills.pk/ogra',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'what-is-ogra', label: 'What OGRA Is' },
  { id: 'oil-gas-role', label: 'Role in the Oil & Gas Sector' },
  { id: 'gas-role', label: 'Role in Natural Gas Regulation' },
  { id: 'sngpl-ssgc', label: 'How OGRA Interacts with SNGPL and SSGC' },
  { id: 'tariff-process', label: 'How Gas Tariff Determinations Work' },
  { id: 'prescribed-vs-sale', label: 'Prescribed Price vs. Consumer Sale Price' },
  { id: 'complaints', label: 'Complaints & Regulatory Role' },
  { id: 'safety-standards', label: 'Safety & Performance Standards' },
  { id: 'resources', label: 'Official OGRA Resources' },
  { id: 'sources', label: 'Sources Used' },
];

export default function OgraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'OGRA', item: 'https://checkgasbills.pk/ogra' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'OGRA — Oil & Gas Regulatory Authority',
        url: 'https://checkgasbills.pk/ogra',
        isPartOf: { '@id': 'https://checkgasbills.pk/#website' },
        publisher: { '@id': 'https://checkgasbills.pk/#organization' },
        mainEntity: {
          '@type': 'GovernmentOrganization',
          name: 'Oil and Gas Regulatory Authority',
          alternateName: 'OGRA',
          url: 'https://ogra.org.pk',
          foundingDate: '2002-03-28',
          description: 'Federal regulatory authority responsible for the midstream and downstream oil and gas sector in Pakistan, established under the OGRA Ordinance, 2002.',
        },
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">OGRA</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            🏛️ Regulatory & Governance Authority
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            OGRA — Oil &amp; Gas Regulatory Authority
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
            The federal body that regulates Pakistan&apos;s gas sector and sets the framework SNGPL and SSGC
            operate within — what it does, how gas tariffs are actually determined, and where to go for
            official information.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="warning-box mb-8">
          <p className="mb-0 text-sm">
            <strong>Independence notice:</strong> SNGPL Bill Check Hub is an independent informational
            resource and is <strong>not affiliated with, endorsed by, or operated on behalf of OGRA</strong>.
            This page explains OGRA&apos;s role using OGRA&apos;s own published material and corroborating
            public reporting — it is not a reproduction of any OGRA document, and it is not a substitute for
            OGRA&apos;s own publications. For official information, always go to{' '}
            <a href="https://ogra.org.pk" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">ogra.org.pk</a>.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-10">
          <h3 className="font-bold text-blue-900 text-sm mb-3">On this page</h3>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="toc-link">{i + 1}. {item.label}</a>
              </li>
            ))}
          </ol>
        </div>

        <article className="prose-content">

          <h2 id="what-is-ogra">What OGRA Is</h2>
          <p>
            The Oil and Gas Regulatory Authority (OGRA) is a federal regulatory agency of the Government of
            Pakistan, established on <strong>28 March 2002</strong> under the{' '}
            <strong>Oil and Gas Regulatory Authority Ordinance, 2002</strong>. When it was created, OGRA
            absorbed the Natural Gas Regulatory Authority (NGRA), which had previously handled gas-sector
            regulation on its own — NGRA&apos;s functions, assets, and pending matters transferred to OGRA
            at that point.
          </p>
          <p>
            OGRA is headed by a Chairman and three Members, each responsible for a specific area: Gas,
            Finance, and Oil. Chairman and Members are appointed by the Federal Government through a
            competitive, tenure-based process set out in the Ordinance, with a maximum of two terms per
            appointee.
          </p>

          <h2 id="oil-gas-role">Role in the Oil &amp; Gas Sector</h2>
          <p>
            OGRA&apos;s stated objective is to foster competition, increase private investment in the
            midstream and downstream petroleum industry, protect the public interest, and provide effective
            regulation of the sector. Under Section 6 of the OGRA Ordinance, OGRA holds exclusive licensing
            authority over regulated activities across natural gas, compressed natural gas (CNG), liquefied
            petroleum gas (LPG), liquefied natural gas (LNG), and the oil sector — including pipeline
            construction, transmission and distribution network development, storage, refining, and
            marketing of petroleum products.
          </p>

          <h2 id="gas-role">Role in Natural Gas Regulation Specifically</h2>
          <p>
            For natural gas specifically, OGRA&apos;s core functions include determining the revenue
            requirement and prescribed prices of the natural gas utilities, notifying prescribed and
            consumer sale prices, enforcing technical standards for regulated activities, and resolving
            public complaints and disputes involving licensees. In practice, this means OGRA is the body
            that reviews how much it costs SNGPL and SSGC to supply gas, and translates that into the
            tariff structure consumers eventually see on their bills — subject to the Federal Government
            notification step explained below.
          </p>

          <h2 id="sngpl-ssgc">How OGRA Interacts with SNGPL and SSGC</h2>
          <p>
            SNGPL and SSGC are licensees regulated by OGRA, not independent price-setters. Both companies
            submit annual revenue requirement petitions to OGRA, detailing their operating costs,
            infrastructure investment, and gas procurement costs. OGRA&apos;s Finance function is
            specifically involved in reviewing and determining the revenue requirement for both companies.
            Neither SNGPL nor SSGC can unilaterally change domestic gas tariffs — every tariff structure
            they bill against traces back to an OGRA determination and the subsequent Federal Government
            notification process. For full entity profiles of each licensee, see our{' '}
            <Link href="/companies/sngpl">SNGPL company profile</Link> and{' '}
            <Link href="/companies/ssgc">SSGC company profile</Link>.
          </p>

          <h2 id="tariff-process">How Gas Tariff Determinations Work</h2>
          <p>
            At a structural level, the process runs: the utility (SNGPL or SSGC) files a revenue
            requirement petition → OGRA reviews the petition, typically through a public consultation
            process → OGRA issues a determination setting the revenue requirement and prescribed price →
            the Federal Government is advised of the determination and notifies the prescribed and
            consumer sale prices in the Official Gazette. OGRA also determines and notifies wellhead gas
            prices and utility revenue requirements on a recurring basis in line with applicable petroleum
            policy.
          </p>
          <p>
            We are treating this as the structural outline rather than an exhaustive procedural manual. For the
            full picture — including how this determination becomes the tariff on your actual bill, and a
            dated, sourced history of recent determinations — see our{' '}
            <Link href="/tariffs">Pakistan Gas Tariffs hub</Link>.
          </p>

          <h2 id="prescribed-vs-sale">Prescribed Price vs. Consumer Sale Price</h2>
          <p>
            This distinction matters and is often missed: the price OGRA <strong>determines</strong>
            (the &quot;prescribed price&quot;) is not automatically the price a consumer pays. Under Section
            8(3) of the OGRA Ordinance, the Federal Government is advised of OGRA&apos;s determination
            within 40 days and separately notifies the prescribed price, minimum charges, and the sale price
            for each consumer category in the Official Gazette. The Federal Government&apos;s notified sale
            price is what actually appears on a consumer bill — and it does not have to match OGRA&apos;s
            prescribed price exactly.
          </p>
          <div className="highlight-box">
            <p className="mb-0 text-sm">
              <strong>Real example:</strong> For FY2026-27, OGRA reduced its average prescribed gas price
              for SNGPL and SSGC from Rs. 1,793 to Rs. 1,705 per MMBtu (SNGPL: Rs. 1,719/MMBtu; SSGC: Rs.
              1,691/MMBtu), citing the exclusion of LNG diversion costs after a force majeure declaration on
              LNG supply. The Federal Government did not pass this reduction on to consumers and kept
              consumer gas tariffs unchanged — a direct, recent illustration of the prescribed-price /
              sale-price distinction described above.{' '}
              <em>Source: Profit by Pakistan Today, &quot;Govt keeps gas tariffs unchanged despite OGRA cuts,&quot; published 7 July 2026, citing <em>The News</em> and official sources — see Sources Used below.</em>
            </p>
          </div>

          <h2 id="complaints">Complaints &amp; Regulatory Role</h2>
          <p>
            OGRA&apos;s mandate includes resolving public complaints and disputes against licensees (such as
            SNGPL and SSGC) and between licensees. This is distinct from a utility&apos;s own internal
            complaint process — OGRA functions as the escalation point once a consumer has exhausted the
            utility&apos;s own channels, under a specific regulation (the Complaint Resolution Procedure
            Regulations, 2003) with defined timeframes and an appeal process. We cover the full mechanism,
            SNGPL and SSGC&apos;s own complaint channels, and the Federal Ombudsman as a separate escalation
            route on our <Link href="/complaints">Complaints &amp; Consumer Rights hub</Link>.
          </p>

          <h2 id="safety-standards">Safety &amp; Performance Standards</h2>
          <p>
            OGRA also publishes a Performance Standard document that sets response-time and service targets for
            licensed gas utilities — including how quickly a gas escape, fire, or other hazardous situation must
            be attended to, and how complaints of that nature must be distinguished from routine service
            complaints. These are regulatory targets for SNGPL and SSGC, not a service OGRA or this site directly
            provides. We cover the full standard, official emergency channels for both utilities, and a
            Pakistan-specific safety reference on our <Link href="/safety">Gas Safety &amp; Emergency Guide</Link>.
          </p>

          <h2 id="resources">Official OGRA Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3 not-prose">
            <a href="https://ogra.org.pk" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">OGRA Official Website ↗</div>
              <div className="text-xs text-gray-500">ogra.org.pk</div>
            </a>
            <a href="https://www.ogra.org.pk/introduction" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">OGRA — Introduction ↗</div>
              <div className="text-xs text-gray-500">ogra.org.pk/introduction</div>
            </a>
            <a href="https://ogra.org.pk/ordinance" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">OGRA Ordinance, 2002 (amended, full text) ↗</div>
              <div className="text-xs text-gray-500">ogra.org.pk/ordinance</div>
            </a>
            <Link href="/sngpl-taxes-explained" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">How OGRA Tariff Regulation Affects Your Bill</div>
              <div className="text-xs text-gray-500">Our existing guide to gas bill taxes</div>
            </Link>
          </div>

          <h2 id="sources">Sources Used</h2>
          <p className="text-sm text-gray-600">
            Every factual claim above traces to one of the following. Where OGRA&apos;s own site did not
            return readable content for direct citation of a specific passage, we relied on corroborating
            public-record sources instead of guessing at OGRA&apos;s wording.
          </p>
          <ul className="text-sm">
            <li>OGRA official website — <a href="https://ogra.org.pk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ogra.org.pk</a> (organizational structure, mandate)</li>
            <li>Oil and Gas Regulatory Authority Ordinance, 2002 (amended up to 5 March 2022) — full text via <a href="https://ogra.org.pk/ordinance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OGRA&apos;s own website</a>, cross-checked against <a href="https://www.pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Frbpg=-sg-jjjjjjjjjjjjj" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pakistan Code (Government of Pakistan)</a> (Sections 6 and 8 — licensing powers; prescribed price and Federal Government notification process)</li>
            <li>&quot;Oil &amp; Gas Regulatory Authority,&quot; Wikipedia — <a href="https://en.wikipedia.org/wiki/Oil_%26_Gas_Regulatory_Authority" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">en.wikipedia.org</a>, used as a corroborating secondary reference for establishment date, organizational structure, and function summary, cross-checked against the Ordinance text</li>
            <li>&quot;Govt keeps gas tariffs unchanged despite OGRA cuts,&quot; Profit by Pakistan Today, published 7 July 2026 — <a href="https://profit.pakistantoday.com.pk/2026/07/07/govt-keeps-gas-tariffs-unchanged-despite-ogra-cut-in-prescribed-prices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">profit.pakistantoday.com.pk</a> (FY2026-27 prescribed price vs. consumer sale price example)</li>
          </ul>

          <div className="highlight-box mt-6">
            <p className="mb-0 text-sm">
              <strong>Last reviewed:</strong> 28 August 2026, by the SNGPL Bill Check Hub editorial process
              described in our <Link href="/editorial-policy">Editorial Policy</Link>. This page will be
              revised when OGRA issues a new determination or when we identify a factual correction — see
              our <Link href="/content-update-policy">Content Update Policy</Link> for what that means in
              practice.
            </p>
          </div>
        </article>

        <section className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-4">Related Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/government-sources" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">Government Sources</div>
              <div className="text-xs text-gray-500">Why we rely on OGRA and other official bodies</div>
            </Link>
            <Link href="/sources-references" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">Sources &amp; References</div>
              <div className="text-xs text-gray-500">Every official source used across this site</div>
            </Link>
            <Link href="/sngpl-taxes-explained" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">Gas Bill Taxes Explained</div>
              <div className="text-xs text-gray-500">GIDC, GST, and OGRA-regulated charges</div>
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-4 mb-0">
            This is the first page in the site&apos;s Regulatory &amp; Governance Authority silo. Direct
            links to the SNGPL, SSGC, and Gas Tariffs authority pages will be added here as each is built.
          </p>
        </section>
      </div>
    </>
  );
}
