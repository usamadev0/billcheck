import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SNGPL — Sui Northern Gas Pipelines Limited Explained | SNGPL Bill Check Hub',
  description: 'The independent reference profile for SNGPL: what it does, its OGRA-regulated tariffs, service area, consumer number, meter reading, new connections, complaints, and official contact channels.',
  alternates: { canonical: 'https://checkgasbills.pk/companies/sngpl' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'SNGPL — Sui Northern Gas Pipelines Limited Explained',
    description: 'An independent profile of SNGPL: company facts, OGRA relationship, consumer lifecycle, and official service channels — verified against SNGPL\'s own published material.',
    url: 'https://checkgasbills.pk/companies/sngpl',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'overview', label: 'SNGPL Overview' },
  { id: 'what-we-do', label: 'What SNGPL Does' },
  { id: 'service-area', label: 'Areas / Regions Served' },
  { id: 'ogra-relationship', label: 'SNGPL and OGRA' },
  { id: 'billing', label: 'SNGPL Gas Billing' },
  { id: 'consumer-number', label: 'Consumer Number' },
  { id: 'meter', label: 'Gas Meter & Meter Reading' },
  { id: 'new-connection', label: 'New Gas Connection' },
  { id: 'ownership-transfer', label: 'Ownership / Name Transfer' },
  { id: 'load-extension', label: 'Load Extension / Reduction' },
  { id: 'disconnection', label: 'Disconnection & Reconnection' },
  { id: 'complaints', label: 'Billing Complaints' },
  { id: 'emergency', label: 'Gas Leak / Emergency' },
  { id: 'contact', label: 'Customer Service Channels' },
  { id: 'online-services', label: 'Official Online Services' },
  { id: 'tariffs', label: 'Tariffs & OGRA Determinations' },
  { id: 'consumer-categories', label: 'Domestic vs Commercial vs Industrial' },
  { id: 'documents', label: 'Important Consumer Documents' },
  { id: 'sngpl-vs-ssgc', label: 'SNGPL vs SSGC' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'sources', label: 'Sources Used' },
];

const faqs = [
  { q: 'Is CheckGasBills.pk affiliated with SNGPL?', a: 'No. This site is an independent informational resource and is not owned, operated, endorsed, or authorized by SNGPL, OGRA, or any government body. See our Independence Disclosure below.' },
  { q: 'Can I get a new domestic gas connection right now?', a: 'As of this review, SNGPL is processing new domestic connections only on the RLNG (Re-Gasified Liquefied Natural Gas) tariff, per SNGPL\'s own published procedure. General system-gas connections are not currently being issued to new applicants. Confirm current status directly with SNGPL before applying.' },
  { q: 'Who sets SNGPL\'s gas tariffs?', a: 'SNGPL does not set its own prices. Tariffs are determined by OGRA and notified by the Federal Government. See our full explanation on the OGRA page.' },
  { q: 'What number do I call for a gas emergency?', a: 'SNGPL\'s helpline is 1199. For a suspected gas leak, do not operate switches or flames — see the Gas Leak / Emergency section below.' },
  { q: 'Where can I check SNGPL company registration details?', a: 'SNGPL\'s Company Registration Number (CUIN), NTN, and GST number are published on SNGPL\'s own "About Us" page and reproduced with a source link in the Sources Used section below.' },
];

export default function SngplCompanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'SNGPL', item: 'https://checkgasbills.pk/companies/sngpl' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'SNGPL — Sui Northern Gas Pipelines Limited',
        url: 'https://checkgasbills.pk/companies/sngpl',
        isPartOf: { '@id': 'https://checkgasbills.pk/#website' },
        publisher: { '@id': 'https://checkgasbills.pk/#organization' },
        mainEntity: {
          '@type': 'Corporation',
          name: 'Sui Northern Gas Pipelines Limited',
          alternateName: 'SNGPL',
          url: 'https://www.sngpl.com.pk',
          foundingDate: '1963',
          areaServed: ['Punjab, Pakistan', 'Khyber Pakhtunkhwa, Pakistan', 'Azad Jammu & Kashmir'],
          identifier: 'CUIN-0043761',
          taxID: '0801137-7',
          description: 'State-owned natural gas transmission and distribution company serving north-central Pakistan, listed on the Pakistan Stock Exchange and regulated by OGRA.',
        },
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-marine-600 to-marine-500 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-marine-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">SNGPL</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            🏢 Company &amp; Consumer Reference
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            SNGPL — Sui Northern Gas Pipelines Limited
          </h1>
          <p className="text-marine-100 text-base md:text-lg max-w-3xl leading-relaxed">
            What SNGPL is, how it&apos;s regulated, and everything a consumer actually needs to know — billing,
            meters, connections, complaints, and official contact channels — verified against SNGPL&apos;s own
            published material.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="warning-box mb-8">
          <p className="mb-0 text-sm">
            <strong>Independence notice:</strong> SNGPL Bill Check Hub is an independent informational resource
            and is <strong>not affiliated with, endorsed by, owned by, or operated on behalf of SNGPL</strong>.
            Facts on this page are drawn from SNGPL&apos;s own website and cross-checked wherever possible — see{' '}
            <a href="#sources" className="text-marine-700 underline">Sources Used</a>. For official information or
            to take any action on your account, always go to{' '}
            <a href="https://www.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-marine-700 underline">sngpl.com.pk</a>.
          </p>
        </div>

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

        {/* Entity relationship strip */}
        <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10 text-center text-xs font-medium">
          {['SNGPL', 'OGRA', 'Consumer', 'Gas Bill'].map((n) => (
            <div key={n} className="bg-white border border-marine-100 rounded-xl py-3 text-marine-800">{n}</div>
          ))}
        </div>

        <article className="prose-content">

          <h2 id="overview">SNGPL Overview</h2>
          <p>
            Sui Northern Gas Pipelines Limited (SNGPL) is a Pakistani state-owned natural gas transmission and
            distribution company headquartered in Lahore. It was incorporated as a private limited company in
            1963 and converted into a public limited company in January 1964; it is listed on the Pakistan
            Stock Exchange (PSX) and is classified as a Public Interest Company under the Third Schedule of the
            Companies Act, 2017. SNGPL describes itself as the largest integrated gas company in Pakistan,
            serving more than 7.40 million consumers in north-central Pakistan.
          </p>
          <div className="highlight-box not-prose">
            <p className="mb-0 text-sm">
              <strong>Registered identifiers (from SNGPL&apos;s own &quot;About Us&quot; page):</strong> Company
              Registration Number (CUIN): <strong>0043761</strong> · National Tax Number (NTN):{' '}
              <strong>0801137-7</strong> · General Sales Tax Number: <strong>03-91-9999-967-19</strong>.
            </p>
          </div>

          <h2 id="what-we-do">What SNGPL Does</h2>
          <p>
            SNGPL purchases, transmits, distributes, and supplies natural gas to residential, commercial, and
            industrial consumers. Its transmission system runs from Sui in Balochistan to Peshawar in Khyber
            Pakhtunkhwa, comprising over 9,538 km of transmission pipeline (main and loop lines). Its
            distribution network covers 5,766 main towns and villages across Punjab and Khyber Pakhtunkhwa,
            organized through 17 regional offices, with roughly 155,766 km of distribution pipeline. SNGPL has
            also expanded into Engineering, Procurement and Construction (EPC) contracting for pipeline
            projects, both for itself and other organizations.
          </p>

          <h2 id="service-area">Areas / Regions Served</h2>
          <p>
            Per SNGPL&apos;s own company profile, SNGPL serves consumers across <strong>Punjab, Khyber
            Pakhtunkhwa, and Azad Jammu &amp; Kashmir</strong>. If you are unsure whether your specific city or
            town falls within SNGPL&apos;s network (as opposed to SSGC&apos;s, which serves Sindh and
            Balochistan), see our <Link href="/sngpl/cities">city-by-city SNGPL guide</Link>.
          </p>

          <h2 id="ogra-relationship">SNGPL and OGRA Relationship</h2>
          <p>
            SNGPL is a licensee regulated by the Oil and Gas Regulatory Authority (OGRA), not an independent
            price-setter. SNGPL submits annual revenue requirement petitions to OGRA; OGRA reviews them,
            determines prescribed prices, and the Federal Government notifies the final consumer sale price.
            SNGPL cannot unilaterally change domestic gas tariffs. For the full explanation of how this process
            works — including the distinction between OGRA&apos;s prescribed price and the government-notified
            consumer price — see our dedicated <Link href="/ogra">OGRA page</Link>.
          </p>
          <div className="not-prose bg-white border border-gray-200 rounded-2xl p-4 my-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Regulatory relationship, simplified</div>
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
              <span className="badge bg-marine-100 text-marine-700">OGRA (regulator)</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-marine-100 text-marine-700">Federal Government (notifies price)</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-marine-100 text-marine-700">SNGPL (bills consumer)</span>
              <span className="text-gray-400">→</span>
              <span className="badge bg-marine-100 text-marine-700">Consumer</span>
            </div>
          </div>

          <h2 id="billing">SNGPL Gas Billing</h2>
          <p>
            An SNGPL bill combines several components: base gas charges (consumption in HHM × the applicable
            slab rate), GIDC, GST, meter rent, and any arrears or adjustments. We cover this in full, with a
            worked example, on our <Link href="/sngpl-taxes-explained">Gas Bill Taxes Explained</Link> guide.
            Consumers can view and pay bills through SNGPL&apos;s own portal — see{' '}
            <a href="#online-services" className="text-marine-600 hover:underline">Official Online Services</a>{' '}
            below.
          </p>

          <h2 id="consumer-number">Consumer Number</h2>
          <p>
            The consumer number is the unique identifier SNGPL assigns to a specific gas connection; it is
            required for checking a bill online, registering a complaint, or applying for most account
            changes. We cover exactly where to find it and how it&apos;s formatted in our dedicated{' '}
            <Link href="/consumer-number">Consumer Number guide</Link>.
          </p>

          <h2 id="meter">Gas Meter &amp; Meter Reading</h2>
          <p>
            SNGPL bills domestic consumers based on metered consumption measured in HHM (Hundred Heat units,
            i.e. hundred-cubic-foot equivalents adjusted for calorific value). Meter rent is a small fixed
            monthly charge for the use and maintenance of the installed meter, set in line with OGRA-approved
            charges, and appears as part of the fixed charges on a bill. For how HHM is calculated and shown on
            a bill, see our <Link href="/hhm-explained">HHM Explained</Link> guide.
          </p>

          <h2 id="new-connection">New Gas Connection</h2>
          <p>
            Per SNGPL&apos;s own published procedure (current as of this review), new domestic gas connections
            are being processed only on the <strong>RLNG (Re-Gasified Liquefied Natural Gas) tariff</strong> —
            general system-gas connections are not currently issued to new applicants. The published process
            runs as follows:
          </p>
          <ol>
            <li><strong>Submit an application</strong> — at a regional office, sub-office, or Customer Services Center, or online via SNGPL&apos;s website or its ConnectOn mobile app. Applicants choose &quot;Normal Merit&quot; or &quot;Fast Track&quot; (fast track carries an additional urgent fee of Rs. 25,000, per SNGPL, subject to revision).</li>
            <li><strong>House line survey</strong> — an SNGPL representative visits the premises to confirm feasibility and design the house line plan.</li>
            <li><strong>Demand Notice / Proposal Letter (DNPL)</strong> — issued with the house line plan and a list of SNGPL-registered installation contractors, along with the security and service line charges due.</li>
            <li><strong>House line installation</strong> — arranged and paid for by the applicant, using an SNGPL-enlisted contractor, with a completion certificate furnished to SNGPL.</li>
            <li><strong>Deposit of charges</strong> — the applicant signs the RLNG supply contract and pays the demand notice amount only at a designated bank or official online channel — never in cash to any individual.</li>
            <li><strong>Connection &amp; meter installation</strong> — completed on a first-come-first-served basis (by payment date) once all prerequisites are met.</li>
          </ol>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-marine-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Plot size</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Service line charge</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Security (refundable)</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="p-3">Up to 10 Marlas</td><td className="p-3">Rs. 1,500</td><td className="p-3">Rs. 20,000</td><td className="p-3 font-medium">Rs. 21,500</td></tr>
                <tr><td className="p-3">Above 10 Marlas</td><td className="p-3">Rs. 3,000</td><td className="p-3">Rs. 20,000</td><td className="p-3 font-medium">Rs. 23,000</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">
              Source: SNGPL, &quot;Brief Procedure For Domestic RLNG Connections.&quot; SNGPL states these
              charges are subject to change by OGRA from time to time — confirm the current amount with SNGPL
              before paying.
            </p>
          </div>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>Never pay an agent, tout, or contractor to speed up this process.</strong> SNGPL&apos;s
              own procedure explicitly warns that demand notice amounts must be paid only at a designated bank
              or official online channel, and that irregular connections obtained this way are liable to be
              removed, with SNGPL stating it has filed FIRs in such cases.
            </p>
          </div>

          <h2 id="ownership-transfer">Ownership / Name Transfer</h2>
          <p>
            SNGPL provides a dedicated &quot;Transfer of Gas Connection / Change of Name&quot; service for
            cases where a property (and its existing connection) changes hands — for example after a sale or
            inheritance — rather than requiring a brand-new connection application. This is handled through
            SNGPL&apos;s own online and in-person channels; SNGPL also publishes a specific FAQ for this
            process. We have not independently verified the exact current fee or document checklist for this
            specific service closely enough to publish it here — confirm directly with SNGPL&apos;s Transfer of
            Gas Connection service before applying.
          </p>

          <h2 id="load-extension">Load Extension / Reduction</h2>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>Placeholder:</strong> Load extension and load reduction are standard SNGPL account
              services (typically relevant to commercial and industrial consumers changing their gas
              requirement), but we have not yet verified SNGPL&apos;s current published fee schedule or
              processing timeline for this specific service closely enough to state it here. Rather than
              estimate, we are leaving this section without specific figures until it is verified. Contact
              SNGPL&apos;s Customer Services Center directly for current requirements.
            </p>
          </div>

          <h2 id="disconnection">Disconnection &amp; Reconnection</h2>
          <p>
            SNGPL publishes a dedicated &quot;Reconnection of Domestic Consumer&quot; online service for
            restoring supply after a disconnection (for example, following bill payment after a
            non-payment disconnection). As with load extension, we have not verified SNGPL&apos;s current
            specific reconnection fee or turnaround time closely enough to publish a figure here — use
            SNGPL&apos;s own reconnection service or contact a Customer Services Center for current terms.
          </p>

          <h2 id="complaints">Billing Complaints</h2>
          <p>
            SNGPL provides an official online complaint-lodging system and a separate tool to track a
            previously lodged complaint, alongside published guidelines for submitting feedback and
            complaints. If a billing complaint is not resolved to your satisfaction through SNGPL&apos;s own
            process, it can be escalated to OGRA. For the full escalation workflow, SNGPL and SSGC channels
            side by side, and a verified consumer-rights reference, see our{' '}
            <Link href="/complaints">Complaints &amp; Consumer Rights hub</Link>.
          </p>

          <h2 id="emergency">Gas Leak / Emergency Guidance</h2>
          <p>
            SNGPL&apos;s published contact number is <strong>1199</strong>, and its complaint categories explicitly
            include gas leakage, leakage at the meter, leakage at the regulator, fire case, and blast. If you
            smell gas or suspect a leak: avoid any switch, spark or flame, ventilate if it is safe to do so, move
            away from the area, and call 1199 from a safe distance — do not attempt to investigate, repair, or
            operate a gas valve yourself. For the full, source-attributed emergency guide — including OGRA&apos;s
            published response-time standards and the emergency-vs-complaint distinction — see our{' '}
            <Link href="/safety">Gas Safety &amp; Emergency Guide</Link>.
          </p>

          <h2 id="contact">Customer Service / Official Contact Channels</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Head Office</div>
              <div className="text-sm text-gray-700">Gas House, 21-Kashmir Road, P.O. Box No. 56, Lahore 54000, Pakistan</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Helpline</div>
              <div className="text-sm text-gray-700">1199 (24 hours)</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Office phone</div>
              <div className="text-sm text-gray-700">+92 42 99082000-06 / +92 42 99080000</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Customer services email</div>
              <div className="text-sm text-gray-700">customerservices@sngpl.com.pk</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            To find a Customer Services Center or regional office near you, use SNGPL&apos;s own{' '}
            <a href="https://www.sngpl.com.pk/page.jsp?pgids=1561&pgname=PAGES_NAME_a&secs=ss7xa852op845&cats=ct456712337&artcl=artuyh709123465" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">Locate Customer Care Centers</a> tool. Our own{' '}
            <Link href="/contact">Contact page</Link> lists these same official channels for quick reference.
          </p>

          <h2 id="online-services">Official SNGPL Online Services</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            <a href="https://www.sngpl.com.pk/login.jsp?mdids=85" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-marine-300 hover:bg-marine-100 transition-colors">
              <div className="font-semibold text-marine-700 text-sm mb-1">View / Pay Your Gas Bill ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk online billing portal</div>
            </a>
            <a href="https://www.sngpl.com.pk/complaints.jsp?mdids=89" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-marine-300 hover:bg-marine-100 transition-colors">
              <div className="font-semibold text-marine-700 text-sm mb-1">Lodge a Complaint ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/complaints.jsp</div>
            </a>
            <a href="https://www.sngpl.com.pk/complaintshistory.jsp?mdids=90" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-marine-300 hover:bg-marine-100 transition-colors">
              <div className="font-semibold text-marine-700 text-sm mb-1">Track Your Complaint ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/complaintshistory.jsp</div>
            </a>
            <a href="https://www.sngpl.com.pk/appstatus.jsp?mdids=291" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-marine-300 hover:bg-marine-100 transition-colors">
              <div className="font-semibold text-marine-700 text-sm mb-1">Track New Connection Application ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/appstatus.jsp</div>
            </a>
            <a href="https://www.sngpl.com.pk/billcalc.jsp?mdids=92" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-marine-300 hover:bg-marine-100 transition-colors">
              <div className="font-semibold text-marine-700 text-sm mb-1">SNGPL Bill Estimator ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/billcalc.jsp</div>
            </a>
            <a href="https://www.sngpl.com.pk/cname.jsp?mdids=94" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-marine-300 hover:bg-marine-100 transition-colors">
              <div className="font-semibold text-marine-700 text-sm mb-1">Transfer of Gas Connection ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/cname.jsp</div>
            </a>
            <a href="https://www.sngpl.com.pk/domrecon.jsp?mdids=286" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-marine-300 hover:bg-marine-100 transition-colors">
              <div className="font-semibold text-marine-700 text-sm mb-1">Reconnection of Domestic Consumer ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/domrecon.jsp</div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.sngpl.sngpl_connection_app_flutter" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-marine-300 hover:bg-marine-100 transition-colors">
              <div className="font-semibold text-marine-700 text-sm mb-1">ConnectOn (SNGPL mobile app) ↗</div>
              <div className="text-xs text-gray-500">Google Play</div>
            </a>
          </div>

          <h2 id="tariffs">SNGPL Tariffs and OGRA Determinations</h2>
          <p>
            SNGPL&apos;s domestic tariff is a slab-based structure applied to metered consumption, with GIDC,
            GST, and meter rent added on top — we walk through this calculation with a worked example in{' '}
            <Link href="/sngpl-taxes-explained">Gas Bill Taxes Explained</Link>. Every slab rate SNGPL bills
            against originates from an OGRA determination and the Federal Government&apos;s subsequent
            notification — see our <Link href="/ogra#tariff-process">How Gas Tariff Determinations Work</Link>{' '}
            section for the full mechanism, including the real FY2026-27 example of OGRA&apos;s prescribed
            price diverging from the government-notified consumer price. SNGPL also publishes its own current
            &quot;Consumer Gas Prices&quot; reference, which we link to below in Sources Used. For a dated,
            sourced history of recent OGRA determinations and how tariffs actually reach your bill, see our{' '}
            <Link href="/tariffs">Pakistan Gas Tariffs hub</Link>.
          </p>

          <h2 id="consumer-categories">Domestic vs Commercial vs Industrial Consumers</h2>
          <p>
            SNGPL classifies consumers into distinct categories — Domestic / Special Domestic, Commercial, and
            Industrial (with separate arrangements for Housing Societies) — each with its own application
            procedure, documentation, and tariff structure, published separately on SNGPL&apos;s site. This
            page focuses on the domestic consumer journey; commercial and industrial consumers should use
            SNGPL&apos;s dedicated procedure pages, linked in Sources Used, for category-specific requirements.
          </p>

          <h2 id="documents">Important Consumer Documents</h2>
          <p>For a new domestic RLNG connection specifically, SNGPL&apos;s published procedure lists:</p>
          <ul>
            <li><strong>Essential:</strong> a copy of the applicant&apos;s valid CNIC, and a copy of the property&apos;s title documents (registry, transfer certificate, or fard) — or, where the applicant is not the owner, a No Objection Certificate from the property owner.</li>
            <li><strong>Preferable:</strong> a copy of a neighbour&apos;s SNGPL gas bill (or their consumer number, which SNGPL states is mandatory for the online application), and a copy of the applicant&apos;s electricity bill for the premises.</li>
          </ul>
          <p className="text-sm text-gray-600">
            Document requirements differ for name transfer, load extension, and reconnection — SNGPL&apos;s own
            service pages (linked above) are the authoritative source for each.
          </p>

          <h2 id="sngpl-vs-ssgc">SNGPL vs SSGC</h2>
          <p>
            SNGPL and SSGC (Sui Southern Gas Company) are Pakistan&apos;s two natural gas distribution
            utilities, both regulated by OGRA, but they serve different, non-overlapping regions: SNGPL covers
            Punjab, Khyber Pakhtunkhwa, and Azad Jammu &amp; Kashmir, while SSGC covers Sindh and Balochistan,
            including Karachi. For a full, independently verified SSGC entity profile — service area, OGRA
            licence, customer channels, new connections, and billing — see our{' '}
            <Link href="/companies/ssgc">SSGC company profile</Link>.
          </p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <div className="not-prose space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-200 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-800 cursor-pointer text-sm">{f.q}</summary>
                <p className="text-sm text-gray-600 mt-2 mb-0">{f.a}</p>
              </details>
            ))}
          </div>

          <h2 id="sources">Sources Used</h2>
          <ul className="text-sm">
            <li>SNGPL official website, &quot;About Us / Company Profile&quot; — <a href="https://www.sngpl.com.pk/page.jsp?pgids=322" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">sngpl.com.pk</a> (company facts, registration identifiers, network figures)</li>
            <li>SNGPL official website, &quot;Brief Procedure For Domestic RLNG Connections&quot; — <a href="https://www.sngpl.com.pk/page.jsp?pgids=861" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">sngpl.com.pk</a> (new connection process and fee table)</li>
            <li>SNGPL homepage notice, &quot;Resumption Of Domestic Gas Connections&quot; — <a href="https://www.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">sngpl.com.pk</a> (current RLNG-only connection policy)</li>
            <li>SNGPL &quot;Consumer Gas Prices&quot; — <a href="https://www.sngpl.com.pk/page.jsp?pgids=2205" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">sngpl.com.pk</a></li>
            <li>SNGPL Customer Care Center locator — <a href="https://www.sngpl.com.pk/page.jsp?pgids=1561" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">sngpl.com.pk</a></li>
            <li>&quot;Sui Northern Gas Pipelines Limited,&quot; Wikipedia — <a href="https://en.wikipedia.org/wiki/Sui_Northern_Gas_Pipelines_Limited" target="_blank" rel="noopener noreferrer" className="text-marine-600 hover:underline">en.wikipedia.org</a>, used only as a corroborating cross-check against SNGPL&apos;s own published figures</li>
            <li>Our own <Link href="/ogra">OGRA page</Link>, for the regulatory relationship and tariff-determination mechanism</li>
          </ul>

          <div className="highlight-box mt-6">
            <p className="mb-0 text-sm">
              <strong>Last reviewed:</strong> 28 August 2026, by the SNGPL Bill Check Hub editorial process
              described in our <Link href="/editorial-policy">Editorial Policy</Link>. Author: Usama, single
              operator of this site — see our <Link href="/about">About</Link> and{' '}
              <Link href="/transparency-statement">Transparency Statement</Link> pages for the full honest
              disclosure of who runs this site and how. This page will be revised when SNGPL or OGRA publishes
              a relevant change — see our <Link href="/content-update-policy">Content Update Policy</Link>.
            </p>
          </div>

          <h2 id="independence">Independence / Non-Affiliation Disclosure</h2>
          <p>
            SNGPL Bill Check Hub is not SNGPL. We are an independent secondary source that explains SNGPL&apos;s
            published processes and OGRA&apos;s regulatory role in plain language. We do not have preferential
            access to SNGPL, we cannot act on your account, and nothing on this page has been reviewed or
            approved by SNGPL before publishing. For account actions — new connections, complaints, transfers,
            payments — use SNGPL&apos;s own official channels linked throughout this page.
          </p>
        </article>

        <section className="mt-12 bg-marine-100 rounded-2xl p-6 border border-marine-100">
          <h3 className="font-bold text-marine-900 mb-4">Related Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/ogra" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">OGRA</div>
              <div className="text-xs text-gray-500">The regulator behind SNGPL&apos;s tariffs</div>
            </Link>
            <Link href="/sngpl-taxes-explained" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Gas Bill Taxes Explained</div>
              <div className="text-xs text-gray-500">GIDC, GST, and tariff calculation</div>
            </Link>
            <Link href="/consumer-number" className="block p-4 bg-white rounded-xl border border-marine-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-marine-700 text-sm mb-1">Consumer Number Guide</div>
              <div className="text-xs text-gray-500">Where to find yours and what it means</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
