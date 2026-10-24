import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SSGC — Sui Southern Gas Company Profile | SNGPL Bill Check Hub',
  description: 'An independently verified profile of Sui Southern Gas Company (SSGC): service area, OGRA licence, customer channels, new connections, billing, and safety — sourced directly from SSGC and OGRA.',
  alternates: { canonical: 'https://checkgasbills.pk/companies/ssgc' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SSGC — Sui Southern Gas Company Profile | SNGPL Bill Check Hub',
    description: 'SSGC\'s service area, OGRA licence, customer channels, billing, and new-connection process — verified against SSGC\'s own current sources.',
    url: 'https://checkgasbills.pk/companies/ssgc',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

type RefRow = {
  service: string;
  source: string;
  sourceUrl: string;
  confirms: string;
  verified: string;
};

const consumerServicesReference: RefRow[] = [
  {
    service: 'Emergency / gas-leak reporting',
    source: 'SSGC FAQs (Q21, Q15)',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=111824',
    confirms: '1199 is described as available round the clock, 365 days, for emergencies and complaints; leaks must be reported immediately as a safety hazard.',
    verified: '28 Aug 2026',
  },
  {
    service: 'Bill payment options',
    source: 'SSGC FAQs (Q17)',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=111824',
    confirms: 'Bank branches/post offices, ATMs/online banking/cards, mobile wallets (Easypaisa, JazzCash, UPaisa).',
    verified: '28 Aug 2026',
  },
  {
    service: 'New RLNG domestic gas connection',
    source: 'SSGC New RLNG Domestic Connection Application',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=112530',
    confirms: 'Live online application form, required fields, document checklist, and current connection charges.',
    verified: '28 Aug 2026',
  },
  {
    service: 'Restoration after disconnection (via CFC)',
    source: 'SSGC FAQs (Q24)',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=111824',
    confirms: 'Restoration within 24 hours if disconnected under 6 months (with paid-bill proof); a site survey and 7–10 days if disconnected over 6 months.',
    verified: '28 Aug 2026',
  },
  {
    service: 'Complaint channel & escalation',
    source: 'SSGC Complaint Types & Estimated Resolution Timelines',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=111676',
    confirms: 'Department-by-department complaint categories and estimated resolution timelines, sourced to the Petroleum Division\'s Ease of Doing Business initiative.',
    verified: '28 Aug 2026',
  },
  {
    service: 'Customer information updates (CNIC)',
    source: 'SSGC — Update Your CNIC',
    sourceUrl: 'https://viewbill.ssgc.com.pk/web/?page_id=188',
    confirms: 'A dedicated official channel exists for updating customer CNIC records.',
    verified: '28 Aug 2026',
  },
  {
    service: 'Internal houseline installation standard',
    source: 'General Guidelines for Laying of Internal Gas Houseline',
    sourceUrl: 'https://www.ssgc.com.pk/web/wp-content/uploads/2025/09/new_rlng_connection_general_guidelines.pdf',
    confirms: 'Only metallic (G.I.) pipe per OGRA specifications is permitted; no gas pipe may be installed in solid walls/partitions or underground in concrete floors.',
    verified: '28 Aug 2026',
  },
];

export default function SsgcPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'Companies', item: 'https://checkgasbills.pk/companies/sngpl' },
          { '@type': 'ListItem', position: 3, name: 'SSGC', item: 'https://checkgasbills.pk/companies/ssgc' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'SSGC — Sui Southern Gas Company Profile',
        url: 'https://checkgasbills.pk/companies/ssgc',
        isPartOf: { '@id': 'https://checkgasbills.pk/#website' },
        publisher: { '@id': 'https://checkgasbills.pk/#organization' },
        mainEntity: {
          '@type': 'Corporation',
          name: 'Sui Southern Gas Company Limited',
          alternateName: 'SSGC',
          url: 'https://www.ssgc.com.pk',
          areaServed: ['Sindh, Pakistan', 'Balochistan, Pakistan'],
          description: 'An integrated public-limited natural gas transmission, distribution and sale utility, majority-owned directly and indirectly by the Government of Pakistan, operating in Sindh and Balochistan.',
        },
      }) }} />

      <section className="bg-gradient-to-br from-marine-600 to-marine-500 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-marine-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">SSGC</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            🏢 South Pakistan Gas Authority
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">SSGC — Sui Southern Gas Company Limited</h1>
          <p className="text-marine-100 text-base md:text-lg max-w-3xl leading-relaxed">
            An independently verified profile of the natural gas utility serving Sindh and Balochistan — service
            area, OGRA licence, customer channels, billing, new connections, and safety, each traced to SSGC&apos;s
            or OGRA&apos;s own current sources.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="highlight-box mb-8">
          <p className="mb-0 text-sm">
            <strong>Independence notice:</strong> CheckGasBills.pk is an independent informational website and is{' '}
            <strong>not affiliated with, endorsed by, or operated by SSGC</strong>. For account-specific action —
            payments, complaints, new connections — use SSGC&apos;s own official channels linked throughout this
            page.
          </p>
        </div>

        <div className="bg-marine-100 border border-marine-200 rounded-2xl p-4 mb-10">
          <div className="font-bold text-marine-900 mb-3 text-sm">On this page</div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <a href="#overview" className="toc-link">1. Entity Overview</a>
            <a href="#at-a-glance" className="toc-link">2. SSGC at a Glance</a>
            <a href="#ogra-relationship" className="toc-link">3. SSGC &amp; OGRA</a>
            <a href="#service-area" className="toc-link">4. Where SSGC Provides Gas Services</a>
            <a href="#consumer-ecosystem" className="toc-link">5. Consumer Ecosystem</a>
            <a href="#infrastructure" className="toc-link">6. Transmission &amp; Distribution</a>
            <a href="#customer-service" className="toc-link">7. Customer Service</a>
            <a href="#emergency" className="toc-link">8. Emergency &amp; Gas Leak</a>
            <a href="#billing" className="toc-link">9. SSGC Gas Bills</a>
            <a href="#payment-safety" className="toc-link">10. Payment Safety / Fraud</a>
            <a href="#new-connections" className="toc-link">11. New Gas Connections</a>
            <a href="#cfcs" className="toc-link">12. Customer Facilitation Centers</a>
            <a href="#disconnection-restoration" className="toc-link">13. Disconnection &amp; Restoration</a>
            <a href="#meter" className="toc-link">14. Meter &amp; Meter Safety</a>
            <a href="#conservation" className="toc-link">15. Gas Conservation</a>
            <a href="#ssgc-vs-sngpl" className="toc-link">16. SSGC vs. SNGPL</a>
            <a href="#relationship-map" className="toc-link">17. Entity Relationship Map</a>
            <a href="#consumer-services-reference" className="toc-link">18. Consumer Services Reference</a>
            <a href="#sources" className="toc-link">19. Sources Used</a>
          </div>
        </div>

        <article className="prose-content">
          <h2 id="overview">Entity Overview</h2>
          <p>
            Sui Southern Gas Company Limited (SSGC) describes itself, in its own current corporate profile, as
            &quot;Pakistan&apos;s leading integrated public-limited large-scale natural gas utility Company.&quot;
            The Government of Pakistan directly and indirectly owns the majority of its shareholding. SSGC has
            been engaged in the transmission and distribution of natural gas in the franchise provinces of Sindh
            and Balochistan since 1954, purchasing gas from onshore indigenous gas fields as well as RLNG
            re-gasification terminals for supply to its customers. It is managed by an 11-member autonomous Board
            of Directors; the Managing Director/CEO is appointed by the Government of Pakistan.
          </p>
          <p>
            SSGC has two wholly-owned subsidiaries per its own profile: SSGC-LPG (Pvt.) Ltd., marketing and
            distributing LPG since 2012, and SSGC-Alternate Energy (Pvt.) Ltd., established in 2022 to bring
            unallocated gas to customers through alternate means.
          </p>

          <h2 id="at-a-glance">SSGC at a Glance</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-3 my-6">
            {[
              ['Full name', 'Sui Southern Gas Company Limited (SSGCL)'],
              ['Nature', 'Public-limited natural gas utility, majority Government-owned'],
              ['Service area', 'Sindh and Balochistan'],
              ['Customers', '3.5 million (SSGC\'s current profile figure)'],
              ['Transmission network', 'Over 4,200 km (up to 42" diameter)'],
              ['Distribution network', 'Around 50,000 km'],
              ['Regulator', 'OGRA'],
              ['Headquarters', 'ST-4/B, Block 14, Sir Shah Suleman Road, Gulshan-e-Iqbal, Karachi'],
              ['Emergency / complaint number', '1199'],
              ['Official website', 'ssgc.com.pk'],
            ].map(([k, v]) => (
              <div key={k} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-1">{k}</div>
                <div className="text-sm text-gray-800">{v}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            Source: SSGC official Profile page, footer-dated &quot;Updated: May, 2025&quot; —{' '}
            <a href="https://www.ssgc.com.pk/web/?page_id=68" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk ↗</a>.
            This is SSGC&apos;s current stated figure and supersedes older third-party numbers.
          </p>

          <h2 id="ogra-relationship">SSGC &amp; OGRA</h2>
          <p>
            SSGC operates under a licence from OGRA — covered fully on our <Link href="/ogra">OGRA authority
            page</Link> — for the transmission, distribution and sale of natural gas. SSGC hosts its own licence
            document, &quot;License for Transmission, Distribution, and Sale of Natural Gas,&quot; on its official
            site. Public reporting from the time (Dawn, September 2003) describes OGRA granting SNGPL and SSGC
            non-exclusive 30-year licences for their respective territories, with exclusivity over existing and
            prospective consumers protected until 2010.
          </p>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              SSGC&apos;s hosted licence PDF is an image scan without extractable text, so we could not
              independently confirm the exact issuance date from that document this session; contemporaneous news
              reporting places the licensing decision in early September 2003. We are stating the month/year with
              confidence and the exact day with appropriate caution, rather than asserting a specific date we
              could not directly verify.
            </p>
          </div>
          <p>
            As a licensed utility, SSGC&apos;s tariffs are OGRA-notified rather than self-set — its own FAQ
            confirms bills are &quot;computed at the prevailing tariff as notified by OGRA.&quot; For the
            regulatory mechanism behind tariffs generally, see our <Link href="/tariffs">Gas Tariffs hub</Link>;
            for the complaint-escalation relationship, see our <Link href="/complaints">Complaints &amp; Consumer
            Rights hub</Link>.
          </p>

          <h2 id="service-area">Where SSGC Provides Gas Services</h2>
          <p>SSGC&apos;s franchise area, per its own profile, is limited to two provinces. We do not extend this list by assumption.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Province</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Utility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="p-3 text-gray-800">Sindh</td><td className="p-3 text-gray-600">SSGC</td></tr>
                <tr className="border-t border-gray-100"><td className="p-3 text-gray-800">Balochistan</td><td className="p-3 text-gray-600">SSGC</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            SSGC&apos;s Customer Facilitation Centers span six regions within these provinces — Karachi, Hyderabad,
            Mirpurkhas, Nawabshah, Sukkur, and Larkana in Sindh, and Quetta in Balochistan (see{' '}
            <a href="#cfcs" className="toc-link">Customer Facilitation Centers</a> below) — but we have not
            compiled an exhaustive city list beyond what SSGC itself publishes.
          </p>

          <h2 id="consumer-ecosystem">Consumer Ecosystem</h2>
          <p>
            SSGC organizes its rate structure around three main consumer categories with dedicated official rate
            and connection pages: <a href="https://www.ssgc.com.pk/web/?page_id=103" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">Domestic</a>,{' '}
            <a href="https://www.ssgc.com.pk/web/?page_id=102" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">Commercial</a>, and{' '}
            <a href="https://www.ssgc.com.pk/web/?page_id=106" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">Industrial</a>. Its
            authorized-usage rule for a standard domestic connection, per its own Gas Sale Agreement (FAQ Q18), is
            &quot;one meter — for one kitchen and one geyser utilization for purely domestic purposes.&quot; Across
            these categories, SSGC&apos;s current profile states supply to 3.5 million customers in its areas of
            operation.
          </p>

          <h2 id="infrastructure">Transmission &amp; Distribution</h2>
          <p>
            SSGC&apos;s current official profile (updated May 2025) states a transmission network of{' '}
            <strong>over 4,200 km</strong> (pipe up to 42&Prime; diameter) and a distribution network of{' '}
            <strong>around 50,000 km</strong>. Separately, corporate financial materials from a different
            reporting period have cited 4,143 km transmission and 49,098 km distribution — a close but not
            identical figure from an earlier snapshot. We are not combining these into one number; the current
            profile figure is treated as the current one, and the other is a dated, different-period figure.
          </p>
          <p>
            SSGC also states it purchases gas from both onshore indigenous fields and RLNG re-gasification
            terminals, and describes an ongoing rehabilitation program addressing system leakages (UFG) and
            strengthening network integrity.
          </p>

          <h2 id="customer-service">Customer Service</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="font-bold text-gray-900 mb-2">Call &amp; Contact</div>
              <p className="text-sm text-gray-600 mb-1">Call center: <strong>1199</strong></p>
              <p className="text-sm text-gray-600 mb-1">Main line: (+9221) 9902 1000</p>
              <p className="text-sm text-gray-600">Email: info@ssgc.com.pk</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="font-bold text-gray-900 mb-2">Online &amp; In-Person</div>
              <p className="text-sm text-gray-600 mb-1">View bill: <a href="https://viewbill.ssgc.com.pk" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">viewbill.ssgc.com.pk</a></p>
              <p className="text-sm text-gray-600 mb-1">23 Customer Facilitation Centers across Sindh &amp; Balochistan</p>
              <p className="text-sm text-gray-600">SSGC Customer Connect App (application-status updates)</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Source: SSGC official Profile (&quot;23 Customer Facilitation Centers... and 1199 call centres&quot;) and FAQs —{' '}
            <a href="https://www.ssgc.com.pk/web/?page_id=68" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk/profile</a>,{' '}
            <a href="https://www.ssgc.com.pk/web/?page_id=111824" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk/faqs</a>.
          </p>

          <h2 id="emergency">Emergency &amp; Gas Leak</h2>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>This is not a place for step-by-step emergency instructions.</strong> SSGC&apos;s own FAQ
              states: &quot;Please inform about gas leakage immediately at company hotline 1199, as it is also a
              safety hazard,&quot; and separately: &quot;For emergencies and complaints, please contact SSGC call
              center 1199 available round the clock for 365 days.&quot; Do not attempt to manipulate a meter,
              valve, or pipeline yourself. For the full emergency-vs-complaint distinction, OGRA&apos;s published
              response-time standards, and safety guidance, see our <Link href="/safety">Gas Safety &amp; Emergency
              Guide</Link>.
            </p>
          </div>

          <h2 id="billing">SSGC Gas Bills</h2>
          <p>
            This section explains SSGC&apos;s billing ecosystem as SSGC itself documents it; it does not duplicate
            or replace our bill-check tool. Per SSGC&apos;s own FAQ:
          </p>
          <ul>
            <li>Bills are issued on a roughly 30-day meter-reading cycle (up to 45 days); the due date is 15 days from the bill&apos;s issuance, and SSGC aims to give each consumer a minimum 7 days to pay after delivery.</li>
            <li>If a meter isn&apos;t read in a cycle, a system-generated provisional bill is issued and later adjusted against the actual reading.</li>
            <li>Bills are computed at the OGRA-notified tariff for the consumer&apos;s category, plus Meter Rent and applicable taxes (GST, WHT, etc.) — see our <Link href="/tariffs">Gas Tariffs hub</Link> for how tariffs themselves are set; we do not reproduce SSGC&apos;s own slab calculator here.</li>
            <li><strong>Outstanding previous bills can lead to disconnection even if the current bill&apos;s own due date has not yet passed</strong> — SSGC&apos;s FAQ states this explicitly (Q23).</li>
            <li>A Late Payment Surcharge applies on default: 10% of the current bill for domestic customers; 1.5%/month (first year) then 2%/month for industrial and commercial customers.</li>
            <li>Billing-related complaints go through SSGC&apos;s own complaint channel first; if unresolved, they can be escalated to OGRA — see our <Link href="/complaints">Complaints &amp; Consumer Rights hub</Link>.</li>
          </ul>
          <p className="text-xs text-gray-500">Source: SSGC FAQs (Q2, Q3, Q4, Q11, Q23) — <a href="https://www.ssgc.com.pk/web/?page_id=111824" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk/faqs</a>.</p>

          <h2 id="payment-safety">Payment Safety / Fraud Prevention</h2>
          <p>
            SSGC&apos;s own public notice for new RLNG domestic connections carries an explicit fraud warning,
            quoted directly:
          </p>
          <div className="highlight-box">
            <p className="mb-0 text-sm">
              &quot;SSGCL has not authorized any contractor to either collect or submit any application or payment
              on behalf of applicant in SSGCL. Applicants may submit their applications directly in the respective
              SSGCL Offices along with complete documents as mentioned above.&quot;
            </p>
          </div>
          <p>
            In practice: submit connection applications and payments only through SSGC&apos;s own Sales
            Department, Customer Facilitation Centers, or its official web/app channels — never through a
            contractor or intermediary claiming to act on SSGC&apos;s behalf. A dedicated Payments &amp; Fraud
            Authority page is planned as a future addition to this hub.
          </p>
          <p className="text-xs text-gray-500">Source: SSGC, &quot;Public Announcement,&quot; New RLNG Domestic Gas Connection Application (Sept 2025) — <a href="https://www.ssgc.com.pk/web/wp-content/uploads/2025/09/new_rlng_domestic_form.pdf" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk ↗</a>.</p>

          <h2 id="new-connections">New Gas Connections</h2>
          <p>
            The Government of Pakistan lifted its earlier ban on new domestic connections; SSGC&apos;s current
            public notice confirms new domestic connections are provided based on the OGRA-determined and notified
            monthly RLNG tariff for the distribution network — this is a time-sensitive, policy-linked status we
            verified directly against SSGC&apos;s own live notice this session, not assumed to remain unchanged
            indefinitely.
          </p>
          <p>SSGC&apos;s live online application (verified directly) requires, among other fields: zone, nearest customer/meter number, number of existing meters, floors, units/kitchens, premises type, plot size, applicant details, CNIC, and outstanding-dues disclosure. The required document checklist is:</p>
          <div className="not-prose grid sm:grid-cols-2 gap-2 my-6 text-sm">
            {[
              'Completely filled-in application form',
              'Copy of valid CNIC of applicant',
              'Copy of nearest/neighbour gas bill (or nearest customer/meter number)',
              'Attested property/ownership documents; tenancy agreement + landlord NOC if tenant',
              'Approved proposed & completion plan with QR code, and NOC from relevant authority (where applicable)',
              'Original NOC from society/relevant authority (if applicable)',
              'Affidavits/undertakings on Rs. 100 stamp paper, per SSGC\'s specimens',
              'Duly filled-in RLNG Contract Form',
            ].map(d => (
              <div key={d} className="bg-white border border-gray-200 rounded-lg p-3 text-gray-700">{d}</div>
            ))}
          </div>
          <p>
            After submission, application status updates are sent by SMS or via the SSGC Customer Connect App;
            SSGC advises emailing info.sales@ssgc.com.pk if no update arrives within a week.
          </p>

          <h3>Connection Charges</h3>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Plot size</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Sindh total</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Balochistan total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="p-3 text-gray-800">Up to 10 Marlas / 300 sq. yd</td>
                  <td className="p-3 text-gray-600">Rs. 22,725</td>
                  <td className="p-3 text-gray-600">Rs. 21,725</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="p-3 text-gray-800">Over 10 Marlas / 300 sq. yd</td>
                  <td className="p-3 text-gray-600">Rs. 24,450</td>
                  <td className="p-3 text-gray-600">Rs. 23,450</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">
              Each total combines New Connection Charges + Rs. 20,000 Gas Supply Deposit + province-specific sales
              tax (Sindh also adds Rs. 1,000/1,000 stamp duty). Cost of internal houseline, pipe fitting and labour
              is separately arranged and borne by the customer. Figures are SSGC&apos;s own, explicitly labeled{' '}
              <strong>&quot;Subject to Change,&quot;</strong> verified 28 Aug 2026 —{' '}
              <a href="https://www.ssgc.com.pk/web/?page_id=112530" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk ↗</a>.
            </p>
          </div>

          <h3>Connection Process</h3>
          <p>
            SSGC also publishes a separate &quot;Process of Gas Connection&quot; document, but the hosted file is
            an image scan we could not extract text from this session, so we are not restating specific stage
            names or timelines from it. What we <em>can</em> verify directly is the live application channel
            itself: applications may be submitted at the Sales Department (Head Office, Karachi), any Customer
            Facilitation Center, via SSGC&apos;s web/app, or — outside Karachi — at the relevant regional/zonal
            office, with status tracked by SMS or the Customer Connect App. Any published stage-by-stage
            timeline is SSGC&apos;s own and subject to policy constraints; we are not asserting a fixed number of
            days for the full process.
          </p>

          <h2 id="cfcs">Customer Facilitation Centers</h2>
          <p>
            SSGC operates <strong>23 Customer Facilitation Centers</strong> across six regions in Sindh and
            Balochistan — Karachi (12 CFCs), Hyderabad (4), Nawabshah (1), Sukkur (2), Larkana (1), and Quetta (3)
            — matching the count stated in SSGC&apos;s own profile. CFCs handle in-person matters including
            restoration after disconnection (on proof of payment), CNIC/customer-information updates, and general
            customer-service queries. Rather than reproduce SSGC&apos;s full address/phone directory here (it
            changes and is officially maintained), we link directly to it:
          </p>
          <p>
            <a href="https://www.ssgc.com.pk/web/?page_id=128" target="_blank" rel="noopener noreferrer" className="text-marine-600 font-medium hover:underline">Full Customer Facilitation Center directory (ssgc.com.pk) ↗</a>
          </p>

          <h2 id="disconnection-restoration">Disconnection &amp; Restoration</h2>
          <p>Per SSGC&apos;s own FAQ (Q23, Q24), presented as official SSGC statements rather than generalized guidance:</p>
          <ul>
            <li>Unpaid previous bills can lead to disconnection at any time, even if the current bill&apos;s printed due date has not yet lapsed.</li>
            <li>After clearing outstanding dues, a customer should provide a copy of the paid bill and CNIC at any CFC to request restoration.</li>
            <li>If the disconnection period is <strong>under 6 months</strong>, restoration typically occurs within <strong>24 hours</strong> of providing the paid-bill copy.</li>
            <li>If the disconnection period is <strong>over 6 months</strong>, SSGC conducts a premises survey per its SOP, and restoration may take <strong>7 to 10 days</strong>.</li>
          </ul>
          <p>These are SSGC&apos;s own stated timelines for the scenarios it describes, not a guarantee that applies to every case.</p>

          <h2 id="meter">Meter &amp; Meter Safety</h2>
          <p>
            SSGC operates what its own profile describes as South Asia&apos;s only gas meter manufacturing plant,
            assembling and manufacturing G-4 and G-16 domestic gas meters &quot;in compliance with the European
            standards,&quot; with annual production capacity exceeding 1.5 million units. The plant&apos;s own
            page states it has been producing meters since 1975 and has delivered over 15 million meters to
            customers, made from a special aluminium alloy for impact resistance.
          </p>
          <p>
            For internal houseline connecting to the meter, SSGC&apos;s official guidelines specify that only
            metallic (G.I.) pipe meeting OGRA specifications is permitted, that gas pipelines may not be installed
            in solid walls or partitions, and that no gas pipe may be installed underground in concrete or cement
            floors — installation must follow prevailing OGRA standards.
          </p>
          <p>
            The meter is SSGC&apos;s property; do not attempt to inspect, adjust, or tamper with it yourself.
            Meter safety connects directly to our broader <Link href="/safety">Gas Safety &amp; Emergency
            Guide</Link>, and a dedicated meter guide is planned as a future addition to this hub.
          </p>

          <h2 id="conservation">Gas Conservation</h2>
          <p>
            Following a Prime Minister-chaired energy-conservation meeting in January 2023, the Petroleum Division
            advised both Sui companies to install conical baffles in existing geysers; OGRA subsequently approved
            the related amendment to domestic/commercial gas-supply contracts, after which SSGC began including
            baffle-related charges in customer bills. SSGC has run a public-awareness campaign — including
            standees and brochures at its CFCs — around measures such as installing a conical baffle in a geyser,
            using instant geysers, cooking on a lower flame, and switching appliances off when not in use, which
            SSGC states can meaningfully reduce gas consumption and bills. SSGC also encourages reporting gas
            leakage through 1199 as part of the same conservation message. We are attributing the specific savings
            figures SSGC has publicized to SSGC&apos;s own campaign rather than presenting them as independently
            verified.
          </p>

          <h2 id="ssgc-vs-sngpl">SSGC vs. SNGPL</h2>
          <p>A concise comparison of stable, verifiable attributes only — not a ranking or quality comparison.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Attribute</th>
                  <th className="text-left p-3 font-semibold text-gray-700">SSGC</th>
                  <th className="text-left p-3 font-semibold text-gray-700">SNGPL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Primary service territory', 'Sindh, Balochistan', 'Punjab, Khyber Pakhtunkhwa, Azad Jammu & Kashmir'],
                  ['Regulator', 'OGRA', 'OGRA'],
                  ['Core business', 'Transmission, distribution & sale of natural gas', 'Transmission, distribution & sale of natural gas'],
                  ['Emergency / complaint number', '1199', '1199'],
                  ['Consumer services', 'SSGC channels (CFCs, 1199, viewbill.ssgc.com.pk)', 'SNGPL channels (complaints.jsp, 1199)'],
                ].map(row => (
                  <tr key={row[0]} className="border-t border-gray-100">
                    <td className="p-3 text-gray-800 font-medium">{row[0]}</td>
                    <td className="p-3 text-gray-600">{row[1]}</td>
                    <td className="p-3 text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>We do not compare service quality, complaint-resolution performance, or pricing here — see our <Link href="/companies/sngpl">SNGPL company profile</Link> and <Link href="/ogra">OGRA authority page</Link> for each utility on its own terms.</p>

          <h2 id="relationship-map">Entity Relationship Map</h2>
          <div className="not-prose bg-white border border-gray-200 rounded-2xl p-5 my-6">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="badge bg-marine-100 text-marine-700">SSGC</span>
              <span className="text-gray-400">→</span>
              <Link href="/ogra" className="badge bg-marine-100 text-marine-700 hover:bg-marine-100">OGRA</Link>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">Sindh</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">Balochistan</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">Domestic consumers</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">Commercial consumers</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">Industrial consumers</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">Gas meters</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">Gas bills</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">New connections</span>
              <span className="text-gray-400">→</span>
              <Link href="/complaints" className="badge bg-marine-100 text-marine-700 hover:bg-marine-100">Complaints</Link>
              <span className="text-gray-400">→</span>
              <Link href="/safety" className="badge bg-marine-100 text-marine-700 hover:bg-marine-100">Safety</Link>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">RLNG</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">Customer Facilitation Centers</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-gray-100 text-gray-700">1199</span>
            </div>
          </div>

          <h2 id="consumer-services-reference">SSGC Consumer Services Reference</h2>
          <p>A structured, source-attributed reference table — populated only with services we could directly verify.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Service</th>
                  <th className="text-left p-3 font-semibold text-gray-700">What the source confirms</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Last verified</th>
                </tr>
              </thead>
              <tbody>
                {consumerServicesReference.map(r => (
                  <tr key={r.service} className="border-t border-gray-100 align-top">
                    <td className="p-3 text-gray-800 font-medium">
                      {r.service}
                      <div><a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-marine-600 text-xs hover:underline">{r.source} ↗</a></div>
                    </td>
                    <td className="p-3 text-gray-600">{r.confirms}</td>
                    <td className="p-3 text-gray-500 text-xs whitespace-nowrap">{r.verified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="sources">Sources Used</h2>
          <ul className="text-sm">
            <li>SSGC Official Profile (updated May 2025) — <a href="https://www.ssgc.com.pk/web/?page_id=68" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk</a></li>
            <li>SSGC Frequently Asked Questions — <a href="https://www.ssgc.com.pk/web/?page_id=111824" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk</a></li>
            <li>SSGC New RLNG Domestic Gas Connection Application &amp; Public Announcement (Sept 2025) — <a href="https://www.ssgc.com.pk/web/?page_id=112530" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk</a></li>
            <li>SSGC General Guidelines for Laying of Internal Gas Houseline (Sept 2025) — <a href="https://www.ssgc.com.pk/web/wp-content/uploads/2025/09/new_rlng_connection_general_guidelines.pdf" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk</a></li>
            <li>SSGC License for Transmission, Distribution, and Sale of Natural Gas — <a href="https://www.ssgc.com.pk/web/?page_id=6227" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk</a></li>
            <li>SSGC Meter Manufacturing Plant — <a href="https://www.ssgc.com.pk/web/?page_id=113199" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk</a></li>
            <li>SSGC Customer Facilitation Centers directory — <a href="https://www.ssgc.com.pk/web/?page_id=128" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk</a></li>
            <li>SSGC Complaint Types &amp; Estimated Resolution Timelines — <a href="https://www.ssgc.com.pk/web/?page_id=111676" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">ssgc.com.pk</a></li>
            <li>OGRA — for the regulator&apos;s full mandate, see our <Link href="/ogra">OGRA authority page</Link></li>
            <li>Dawn.com, contemporaneous September 2003 reporting on OGRA&apos;s licensing decision (secondary, used only to corroborate the licence timeframe)</li>
          </ul>

          <div className="highlight-box mt-8">
            <p className="mb-0 text-sm">
              <strong>Last reviewed:</strong> 28 August 2026, by the SNGPL Bill Check Hub editorial process. Every
              factual claim above was checked directly against the primary source linked next to it; this page is
              not on an automatic daily or monthly update schedule — see our{' '}
              <Link href="/content-update-policy">Update Policy</Link>. Author: Usama, single operator of this
              site. See also our <Link href="/research-methodology">Research Methodology</Link> and{' '}
              <Link href="/corrections-policy">Corrections Policy</Link>.
            </p>
          </div>
        </article>

        <section className="mt-12 bg-marine-100 rounded-2xl p-6 border border-marine-100">
          <h3 className="font-bold text-marine-900 mb-4">Related Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/ogra" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">OGRA Authority Page</div>
              <div className="text-xs text-gray-500">The regulator behind SSGC&apos;s licence</div>
            </Link>
            <Link href="/companies/sngpl" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">SNGPL Company Profile</div>
              <div className="text-xs text-gray-500">The other licensed gas utility</div>
            </Link>
            <Link href="/safety" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Gas Safety &amp; Emergency Guide</div>
              <div className="text-xs text-gray-500">Emergency channels &amp; OGRA standards</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
