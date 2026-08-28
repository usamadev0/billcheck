import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pakistan Gas Tariffs Explained — OGRA, SNGPL & SSGC | SNGPL Bill Check Hub',
  description: 'The independent authority hub for Pakistan natural gas tariffs: how OGRA determines prices, how SNGPL and SSGC bill consumers, what goes into a gas bill, and a dated, sourced history of prescribed-price determinations.',
  alternates: { canonical: 'https://www.checkgasbills.pk/tariffs' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pakistan Gas Tariffs Explained — OGRA, SNGPL & SSGC',
    description: 'How gas tariffs are determined and billed in Pakistan, with a dated, sourced historical record of OGRA prescribed-price determinations.',
    url: 'https://www.checkgasbills.pk/tariffs',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'overview', label: 'How Tariffs Work: The Full Chain' },
  { id: 'domestic', label: 'Domestic Tariff' },
  { id: 'commercial', label: 'Commercial Tariff' },
  { id: 'industrial', label: 'Industrial Tariff' },
  { id: 'regulatory-process', label: 'OGRA Determination Process' },
  { id: 'prescribed-vs-sale', label: 'Prescribed Price vs. Consumer Sale Price' },
  { id: 'cost-components', label: 'Cost Components (GIDC, GST, Fixed Charges)' },
  { id: 'bill-breakdown', label: 'Bill Cost Breakdown' },
  { id: 'history', label: 'Tariff History Dataset' },
  { id: 'timeline', label: 'Tariff Change Timeline' },
  { id: 'methodology', label: 'Dataset Methodology & Coverage' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'sources', label: 'Sources Used' },
];

type TariffRecord = {
  fiscalYear: string;
  category: string;
  sngplPrescribed: string;
  ssgcPrescribed: string;
  consumerOutcome: string;
  source: string;
  sourceUrl: string;
  sourceDate: string;
};

const tariffHistory: TariffRecord[] = [
  {
    fiscalYear: 'FY 2024-25',
    category: 'Average prescribed price (all categories, per utility)',
    sngplPrescribed: 'Rs. 1,635.90 / MMBtu (−Rs. 179.17, −10%)',
    ssgcPrescribed: 'Rs. 1,401.25 / MMBtu (−Rs. 59.23, −4%)',
    consumerOutcome: 'OGRA requested federal government advice on category-wise sale prices; existing consumer prices to continue until notified otherwise.',
    source: 'Profit by Pakistan Today — "OGRA cuts gas prices by 10% for SNGPL, 4% for SSGC for FY2024-25"',
    sourceUrl: 'https://profit.pakistantoday.com.pk/2024/05/21/ogra-cuts-gas-prices-by-10-for-sngpl-4-for-ssgc-for-fy2024-25',
    sourceDate: '21 May 2024',
  },
  {
    fiscalYear: 'FY 2025-26',
    category: 'Average prescribed price (all categories, per utility)',
    sngplPrescribed: 'Rs. 1,804.08 / MMBtu (−3%)',
    ssgcPrescribed: 'Rs. 1,549.41 / MMBtu (−8%)',
    consumerOutcome: 'Determination sent to federal government for advice; consumer tariffs unchanged as of this report.',
    source: 'Profit by Pakistan Today — "OGRA slashes SNGPL gas price by 3% and SSGCL by 8% for FY2025-26"',
    sourceUrl: 'https://profit.pakistantoday.com.pk/2025/11/25/ogra-slashes-sngpl-gas-price-by-3-and-ssgcl-by-8-for-fy2025-26',
    sourceDate: '25 Nov 2025',
  },
  {
    fiscalYear: 'FY 2026-27',
    category: 'Average prescribed price (both utilities combined)',
    sngplPrescribed: 'Rs. 1,719 / MMBtu',
    ssgcPrescribed: 'Rs. 1,691 / MMBtu',
    consumerOutcome: 'Federal government kept consumer tariffs unchanged and told the IMF it would not pass the reduction through, despite the OGRA cut.',
    source: 'Profit by Pakistan Today — "Govt keeps gas tariffs unchanged despite Ogra cut in prescribed prices" (citing The News)',
    sourceUrl: 'https://profit.pakistantoday.com.pk/2026/07/07/govt-keeps-gas-tariffs-unchanged-despite-ogra-cut-in-prescribed-prices',
    sourceDate: '7 Jul 2026',
  },
];

const faqs = [
  { q: 'Is this the current SNGPL or SSGC tariff?', a: 'This page tracks OGRA\'s "prescribed price" determinations, which are one input into your final bill — not the category-wise consumer sale price itself. For an SNGPL bill estimate, use our calculator, and always confirm the exact current rate on your own bill or via SNGPL\'s official portal.' },
  { q: 'Why do OGRA\'s prescribed price and my bill not match?', a: 'They measure different things. OGRA\'s prescribed price is an average, per-utility figure in Rs/MMBtu used in the regulatory calculation. Your bill is priced per HHM within a specific consumer-category slab structure, set by the Federal Government\'s notification — which can lag or diverge from OGRA\'s determination. See Prescribed Price vs. Consumer Sale Price below.' },
  { q: 'Does OGRA revise gas prices only once a year?', a: 'No. OGRA issues an annual revenue-requirement/prescribed-price determination, but also issues more frequent adjustments tied to imported RLNG costs (we found separate OGRA RLNG price revisions dated January 2026 and April 2025, for example). These are not always the same figure — treat each dated determination as its own event rather than assuming one annual number.' },
  { q: 'Why does this page not show older tariff history?', a: 'We only publish a data point once we can verify it against a dated, named source. We have verified three consecutive fiscal years so far (FY2024-25 through FY2026-27) and are expanding the dataset over time — see Dataset Methodology below.' },
];

export default function TariffsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'Gas Tariffs', item: 'https://www.checkgasbills.pk/tariffs' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Pakistan Gas Tariffs — OGRA, SNGPL & SSGC Explained',
        url: 'https://www.checkgasbills.pk/tariffs',
        isPartOf: { '@id': 'https://www.checkgasbills.pk/#website' },
        publisher: { '@id': 'https://www.checkgasbills.pk/#organization' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'Pakistan Gas Tariff History — SNGPL & SSGC Prescribed Prices',
        description: 'A growing, dated, source-attributed record of OGRA prescribed-price determinations for SNGPL and SSGC, and whether the Federal Government passed each determination through to consumer sale prices.',
        temporalCoverage: '2024-05-21/2026-07-07',
        creator: { '@id': 'https://www.checkgasbills.pk/#organization' },
        variableMeasured: ['Average prescribed price per utility (Rs/MMBtu)', 'Consumer tariff pass-through outcome'],
        isAccessibleForFree: true,
        url: 'https://www.checkgasbills.pk/tariffs#history',
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Gas Tariffs</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            💰 Tariff &amp; Cost Authority
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            Pakistan Gas Tariffs — OGRA, SNGPL &amp; SSGC Explained
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
            How a gas tariff actually gets set, how it becomes your bill, and a dated, sourced record of how
            prices have moved — built to be expanded every time OGRA publishes a new determination.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="warning-box mb-8">
          <p className="mb-0 text-sm">
            <strong>Independence notice:</strong> This is an independent informational resource, not affiliated
            with OGRA, SNGPL, SSGC, or any government body. Official regulatory and utility sources remain the
            final authority on any figure on this page — see <a href="#sources" className="text-blue-700 underline">Sources Used</a>.
            Where we could not verify a figure, we have left it out rather than estimated it.
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

          <h2 id="overview">How Tariffs Work: The Full Chain</h2>
          <p>
            A Pakistani gas tariff is not set by any single body acting alone. It moves through a chain of
            distinct steps, each governed differently — collapsing this into "OGRA sets the price" or "SNGPL
            sets the price" is inaccurate. The chain runs:
          </p>
          <div className="not-prose bg-white border border-gray-200 rounded-2xl p-5 my-4">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium justify-center">
              {['OGRA determination', 'Federal Govt. advice/notification', 'SNGPL / SSGC', 'Consumer category', 'Prescribed price', 'Consumer sale price', 'Fixed charges', 'GST', 'GIDC', 'Final bill'].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="badge bg-blue-100 text-blue-700">{step}</span>
                  {i < arr.length - 1 && <span className="text-gray-400">→</span>}
                </span>
              ))}
            </div>
          </div>
          <p>
            Two links in this chain are the most commonly misunderstood: the gap between OGRA&apos;s
            &quot;prescribed price&quot; and the Federal Government&apos;s &quot;consumer sale price&quot;
            (explained fully <a href="#prescribed-vs-sale" className="text-blue-600 hover:underline">below</a>),
            and the fact that OGRA&apos;s role is to <em>determine and recommend</em> — the Federal Government
            still has a distinct statutory notification step before any figure reaches a consumer bill. For the
            regulator&apos;s full mandate and legal basis, see our <Link href="/ogra">OGRA authority page</Link>.
          </p>

          <h2 id="domestic">Domestic Tariff</h2>
          <p>
            Domestic (household) gas bills are calculated on metered consumption, measured in HHM, applied
            against a slab-rate structure — higher consumption bands are billed at a higher per-HHM rate. A
            fixed monthly charge and applicable taxes are added on top. We walk through this calculation, with
            a worked example, on our <Link href="/sngpl-taxes-explained">Gas Bill Taxes Explained</Link> guide,
            and our <Link href="/gas-bill-calculator">bill calculator</Link> lets you estimate a bill using the
            site&apos;s working slab assumptions.
          </p>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>On &quot;protected&quot; vs &quot;non-protected&quot; domestic categories:</strong> Pakistan
              has historically used protected/non-protected consumption-based classifications in energy pricing
              policy. We have not verified, from a current OGRA or Federal Government document, whether — or
              exactly how — this classification currently applies to SNGPL/SSGC domestic gas tariffs, so we are
              not stating a specific definition here. If you rely on this distinction, confirm it directly
              against your bill or OGRA&apos;s current notification.
            </p>
          </div>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>On the current domestic slab table:</strong> Our <Link href="/gas-bill-calculator">bill
              calculator</Link> uses a working slab-rate table set in an earlier phase of this site&apos;s
              development. We have not re-verified every individual slab rate in that table against a specific,
              dated OGRA/SNGPL notification this session, so we present it as an estimator, not as a confirmed
              current schedule — always cross-check against your actual bill.
            </p>
          </div>

          <h2 id="commercial">Commercial Tariff</h2>
          <p>
            Commercial consumers (shops, offices, small businesses, and categories such as Roti Tandoors, which
            OGRA has historically priced separately — we found a specific OGRA notification titled
            &quot;Clarification for Domestic and Commercial (Roti Tandoors) Slabs&quot; in OGRA&apos;s own
            notification index) are billed under a distinct tariff structure from domestic consumers, set
            through the same OGRA-determination-then-government-notification process described above. SNGPL
            publishes a separate application and tariff procedure for commercial connections — see the{' '}
            <Link href="/companies/sngpl#new-connection">New Gas Connection</Link> section of our SNGPL profile
            for the connection process, and SNGPL&apos;s own site (linked in Sources Used) for current
            commercial rates. We have not verified specific current commercial slab figures closely enough to
            publish them here.
          </p>

          <h2 id="industrial">Industrial Tariff</h2>
          <p>
            Industrial consumers — along with distinct sub-categories such as fertilizer, power generation, and
            cement, which SNGPL itself lists among the sectors it serves — are billed under yet another tariff
            structure, and are typically the category most directly affected by RLNG-cost pass-through
            decisions, since imported RLNG is frequently diverted to specific sectors during supply constraints
            (as seen in the FY2026-27 example on our <Link href="/ogra#prescribed-vs-sale">OGRA page</Link>,
            where a QatarEnergy LNG force majeure directly changed the prescribed price calculation). We have
            not verified specific current industrial slab figures closely enough to publish them here — OGRA
            and SNGPL/SSGC&apos;s own determinations remain the authoritative source.
          </p>

          <h2 id="regulatory-process">OGRA Determination Process</h2>
          <p>
            We cover this process in full — including the statutory basis and the exact roles of OGRA versus
            the Federal Government — on our <Link href="/ogra#tariff-process">OGRA page</Link>. In short: SNGPL
            or SSGC files an annual revenue-requirement petition → OGRA reviews it, typically through public
            consultation → OGRA issues a determination setting the prescribed price → the Federal Government is
            statutorily advised of the determination and separately notifies the prescribed price, minimum
            charges, and category-wise consumer sale price. Beyond this annual cycle, OGRA also issues more
            frequent price revisions tied specifically to imported RLNG costs — we verified separate,
            independently dated OGRA RLNG price notices, which is why we treat each dated determination as its
            own event in the history table below rather than assuming a single annual figure covers the whole
            year.
          </p>

          <h2 id="prescribed-vs-sale">Prescribed Price vs. Consumer Sale Price</h2>
          <p>This is the single most commonly misunderstood part of Pakistan&apos;s gas pricing system:</p>
          <div className="not-prose grid sm:grid-cols-2 gap-4 my-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">Prescribed price</div>
              <p className="text-sm text-gray-700 mb-0">Determined by OGRA. An average, per-utility figure (Rs/MMBtu) reflecting the utility&apos;s allowed revenue requirement. This is a regulatory input, not what appears on your bill.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">Consumer sale price</div>
              <p className="text-sm text-gray-700 mb-0">Notified by the Federal Government, category-by-category, in the Official Gazette. This is what actually determines your bill — and it can diverge from OGRA&apos;s prescribed price, sometimes substantially, as our FY2026-27 example shows.</p>
            </div>
          </div>
          <p>
            All three data points in our <a href="#history" className="text-blue-600 hover:underline">Tariff
            History Dataset</a> below show this same pattern: OGRA determines a prescribed price, but the
            consumer-facing outcome depends on a separate Federal Government decision that does not always
            follow OGRA&apos;s number. For the full legal mechanism (Section 8(3) of the OGRA Ordinance and the
            40-day advice window), see our <Link href="/ogra#prescribed-vs-sale">OGRA page</Link>.
          </p>

          <h2 id="cost-components">Cost Components</h2>
          <table>
            <thead><tr><th>Component</th><th>What it is</th><th>Set by</th></tr></thead>
            <tbody>
              <tr><td>Base gas charge</td><td>Consumption (HHM) × applicable slab rate</td><td>OGRA determination + Federal Government notification</td></tr>
              <tr><td>Fixed / meter charge</td><td>Flat monthly charge for meter use, regardless of consumption</td><td>OGRA-linked, notified alongside the tariff</td></tr>
              <tr><td>GIDC</td><td>Gas Infrastructure Development Cess — a federal levy on gas consumption</td><td>Federal Government (GIDC Act)</td></tr>
              <tr><td>GST</td><td>General Sales Tax on the combined gas + GIDC charge</td><td>FBR</td></tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-600">
            We do not list every possible bill line item here (arrears, late payment surcharges, meter-security
            deposits) because they are account-specific rather than tariff components — see{' '}
            <Link href="/sngpl-taxes-explained">Gas Bill Taxes Explained</Link> for the full worked-example
            breakdown of a real bill. If you believe a charge on your bill is actually wrong, see our{' '}
            <Link href="/complaints">Complaints &amp; Consumer Rights hub</Link> for how to dispute it.
          </p>

          <h2 id="bill-breakdown">Bill Cost Breakdown</h2>
          <p>
            Putting it together: <strong>Final bill = (consumption × slab rate) + fixed charge, then + GIDC on
            that subtotal, then + GST on the subtotal-plus-GIDC.</strong> Each of those inputs traces back to a
            different authority — the slab rate and fixed charge to OGRA/Federal Government notification, GIDC
            to federal levy legislation, and GST to FBR. Use our{' '}
            <Link href="/gas-bill-calculator">gas bill calculator</Link> to see this applied to a specific
            consumption figure, or our <Link href="/calculator">general calculator tool</Link>.
          </p>

          <h2 id="history">Tariff History Dataset</h2>
          <p>
            <strong>Pakistan Gas Tariff History — SNGPL &amp; SSGC Prescribed Prices.</strong> Every row below
            is sourced to a specific, dated, named article reporting an OGRA determination. We have not
            included any year or figure we could not verify this way.
          </p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-blue-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Fiscal year</th>
                  <th className="text-left p-3 font-semibold text-gray-700">SNGPL prescribed price</th>
                  <th className="text-left p-3 font-semibold text-gray-700">SSGC prescribed price</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Consumer outcome</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Source (dated)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 align-top">
                {tariffHistory.map((r) => (
                  <tr key={r.fiscalYear}>
                    <td className="p-3 font-medium whitespace-nowrap">{r.fiscalYear}</td>
                    <td className="p-3">{r.sngplPrescribed}</td>
                    <td className="p-3">{r.ssgcPrescribed}</td>
                    <td className="p-3 text-gray-600">{r.consumerOutcome}</td>
                    <td className="p-3">
                      <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">{r.source}</a>
                      <div className="text-xs text-gray-400 mt-1">{r.sourceDate}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            &quot;Prescribed price&quot; figures are OGRA&apos;s average determination per utility (Rs/MMBtu),
            not a per-category consumer slab rate — see{' '}
            <a href="#prescribed-vs-sale" className="text-blue-600 hover:underline">Prescribed Price vs. Consumer Sale Price</a>{' '}
            above before using these figures for any bill calculation.
          </p>

          <h2 id="timeline">Tariff Change Timeline</h2>
          <div className="not-prose space-y-3 my-4">
            {[
              { date: '21 May 2024', text: 'OGRA determination: SNGPL prescribed price cut 10% to Rs. 1,635.90/MMBtu; SSGC cut 4% to Rs. 1,401.25/MMBtu.' },
              { date: '1 Jul 2024', text: 'Federal cabinet decisions on circular-debt adjustments for SNGPL (Rs. 13,565m) and SSGCL (Rs. 47,315m), later referenced in OGRA\'s FY2025-26 determination.' },
              { date: '25 Nov 2025', text: 'OGRA determination: SNGPL prescribed price cut 3% to Rs. 1,804.08/MMBtu; SSGC cut 8% to Rs. 1,549.41/MMBtu. Sent to federal government for advice.' },
              { date: '4 Mar 2026', text: 'QatarEnergy declares force majeure on LNG supplies to Pakistan, later cited by OGRA as the reason for excluding RLNG diversion costs from its FY2026-27 determination.' },
              { date: '23 Jun 2026', text: 'OGRA\'s FY2026-27 determination received by the Petroleum Division (per Profit/The News reporting).' },
              { date: '30 Jun 2026', text: 'Federal government responds to OGRA, confirming current gas prices would be maintained for FY2026-27.' },
              { date: '7 Jul 2026', text: 'Reported: average prescribed price for FY2026-27 cut to Rs. 1,705/MMBtu (SNGPL Rs. 1,719, SSGC Rs. 1,691), but consumer tariffs held unchanged.' },
            ].map((e) => (
              <div key={e.date} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <div className="text-xs font-semibold text-blue-700 whitespace-nowrap w-28 shrink-0">{e.date}</div>
                <div className="text-sm text-gray-700">{e.text}</div>
              </div>
            ))}
          </div>

          <h2 id="methodology">Dataset Methodology &amp; Coverage</h2>
          <ul className="text-sm">
            <li><strong>Coverage period:</strong> FY 2024-25 through FY 2026-27 (prescribed-price determinations only, as of this publication).</li>
            <li><strong>Categories covered:</strong> Average per-utility prescribed price (SNGPL, SSGC) and whether the determination was passed through to consumer sale prices. Per-category consumer slab rates are not yet part of this dataset.</li>
            <li><strong>Source methodology:</strong> Each entry is sourced to a specific, dated, byline-attributed news report of an OGRA determination (primarily Profit by Pakistan Today, itself citing OGRA and, for FY2026-27, <em>The News</em>). We prioritize OGRA&apos;s own publications where directly accessible; where OGRA&apos;s site did not return readable determination text to us directly, we used dated secondary reporting and identified it as such.</li>
            <li><strong>Missing periods:</strong> Fiscal years before 2024-25 are not yet included — OGRA&apos;s own notification index (linked in Sources Used) confirms notifications exist back to at least 2008, but we have not yet verified individual figures from those documents.</li>
            <li><strong>Verification status:</strong> All entries above were directly fetched and cross-checked against their cited source at the time of writing. Last verified: 28 August 2026.</li>
            <li><strong>Planned expansion:</strong> This dataset is designed to be extended each time OGRA publishes a new determination, and to eventually incorporate category-wise consumer slab rates once independently verified.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="not-prose space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-xl p-4">
                <summary className="font-semibold text-gray-800 cursor-pointer text-sm">{f.q}</summary>
                <p className="text-sm text-gray-600 mt-2 mb-0">{f.a}</p>
              </details>
            ))}
          </div>

          <h2 id="sources">Sources Used</h2>
          <ul className="text-sm">
            <li>OGRA official notification index — <a href="https://ogra.org.pk/consumer-gas-prices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ogra.org.pk/consumer-gas-prices</a> (confirms OGRA&apos;s own published consumer gas price notifications going back to 2008; used to confirm OGRA directly publishes this category of document)</li>
            <li>Profit by Pakistan Today — <a href="https://profit.pakistantoday.com.pk/2024/05/21/ogra-cuts-gas-prices-by-10-for-sngpl-4-for-ssgc-for-fy2024-25" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FY2024-25 determination</a>, published 21 May 2024</li>
            <li>Profit by Pakistan Today — <a href="https://profit.pakistantoday.com.pk/2025/11/25/ogra-slashes-sngpl-gas-price-by-3-and-ssgcl-by-8-for-fy2025-26" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FY2025-26 determination</a>, published 25 Nov 2025</li>
            <li>Profit by Pakistan Today — <a href="https://profit.pakistantoday.com.pk/2026/07/07/govt-keeps-gas-tariffs-unchanged-despite-ogra-cut-in-prescribed-prices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FY2026-27 determination and consumer outcome</a>, published 7 Jul 2026, citing <em>The News</em></li>
            <li>SNGPL official website, &quot;Consumer Gas Prices&quot; — <a href="https://www.sngpl.com.pk/page.jsp?pgids=2205" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sngpl.com.pk</a></li>
            <li>Our own <Link href="/ogra">OGRA page</Link> and <Link href="/companies/sngpl">SNGPL profile</Link>, for the regulatory mechanism and utility-specific detail</li>
          </ul>

          <div className="highlight-box mt-6">
            <p className="mb-0 text-sm">
              <strong>Last reviewed:</strong> 28 August 2026, by the SNGPL Bill Check Hub editorial process
              described in our <Link href="/editorial-policy">Editorial Policy</Link>. Author: Usama, single
              operator of this site — see our <Link href="/about">About</Link> page. This dataset and page will
              be revised as new OGRA determinations are verified — see our{' '}
              <Link href="/content-update-policy">Content Update Policy</Link>. This is an independent
              informational resource; official regulatory and utility sources remain the final authority.
            </p>
          </div>
        </article>

        <section className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-4">Related Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/ogra" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">OGRA</div>
              <div className="text-xs text-gray-500">The regulator behind every tariff</div>
            </Link>
            <Link href="/companies/sngpl" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">SNGPL Profile</div>
              <div className="text-xs text-gray-500">Company facts, billing, connections</div>
            </Link>
            <Link href="/sngpl-taxes-explained" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">Gas Bill Taxes Explained</div>
              <div className="text-xs text-gray-500">Worked example of a real bill</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
