import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gas Complaints & Consumer Rights in Pakistan — SNGPL, SSGC, OGRA | SNGPL Bill Check Hub',
  description: 'How to escalate a gas complaint in Pakistan: SNGPL and SSGC complaint channels, OGRA\'s formal Complaint Resolution Procedure, the Federal Ombudsman, and a verified consumer-rights reference — all independently sourced.',
  alternates: { canonical: 'https://checkgasbills.pk/complaints' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Gas Complaints & Consumer Rights in Pakistan',
    description: 'A sourced, independent guide to escalating a gas complaint: utility channels, OGRA\'s formal process, the Federal Ombudsman, and what actually happens at each step.',
    url: 'https://checkgasbills.pk/complaints',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

const toc = [
  { id: 'overview', label: 'How Complaints Actually Work' },
  { id: 'categories', label: 'Complaint Categories' },
  { id: 'workflow', label: 'Escalation Workflow' },
  { id: 'sngpl-channels', label: 'SNGPL Complaint Channels' },
  { id: 'ssgc-channels', label: 'SSGC Complaint Channels' },
  { id: 'ssgc-timelines', label: 'SSGC Complaint Timelines (Verified)' },
  { id: 'ogra-process', label: "OGRA's Formal Complaint Process" },
  { id: 'ombudsman', label: 'Federal Ombudsman (Wafaqi Mohtasib)' },
  { id: 'rights', label: 'Consumer Rights Reference' },
  { id: 'checklist', label: 'Document Checklist' },
  { id: 'safety', label: 'Gas Leak & Emergency' },
  { id: 'tracker', label: 'Complaint Resolution Tracker' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'sources', label: 'Sources Used' },
];

type SsgcTimelineRow = { dept: string; type: string; timeline: string };
const ssgcTimelines: SsgcTimelineRow[] = [
  { dept: 'Customer Relations', type: 'Theft / irregularity — registered consumer', timeline: '5–6 working days' },
  { dept: 'Customer Relations', type: 'Theft / irregularity — unregistered consumer', timeline: '10–12 working days' },
  { dept: 'Customer Relations', type: 'Overhead leak complaint', timeline: '2–3 hours' },
  { dept: 'Customer Relations', type: 'Low pressure (meter/regulator issue)', timeline: '24–36 hours' },
  { dept: 'Customer Relations', type: 'Meter replacement (nil/minimum use or scheduled)', timeline: '2 working days after request' },
  { dept: 'Customer Relations', type: 'Meter not passing gas', timeline: '2 days (5 working days if dues are outstanding)' },
  { dept: 'Customer Relations', type: 'Regulator damage', timeline: '2 days after complaint' },
  { dept: 'Customer Relations', type: 'Name change / address correction', timeline: '2 billing cycles after complete documentation' },
  { dept: 'Recovery', type: 'Unlocking / reconnection after dues cleared', timeline: '24 hours' },
  { dept: 'Billing', type: 'Excessive or wrong billing', timeline: '15 days after request' },
  { dept: 'Billing', type: 'Meter reading issue', timeline: '3 working days' },
  { dept: 'Billing', type: 'Bill not received / bank query', timeline: '30 days after request' },
  { dept: 'Distribution', type: 'Underground leakage (once location pinpointed)', timeline: '24 hours, subject to civic-agency NOC for ditching work' },
  { dept: 'Distribution', type: 'New domestic service connection & meter install', timeline: '45 days after sales dept. issues request-to-install' },
  { dept: 'Distribution', type: 'Area low pressure (no maintenance work involved)', timeline: '24 hours' },
  { dept: 'Emergency', type: 'Line rupture / gas escape', timeline: '1 hour (controlled escape) or 2 hours (uncontrolled escape)' },
  { dept: 'Emergency', type: 'Fire, building collapse, or blast complaint', timeline: '1 hour (controlled escape) or 2 hours (uncontrolled escape)' },
];

const rights = [
  {
    topic: 'Right to first raise a complaint directly with your utility',
    appliesTo: 'All SNGPL and SSGC consumers',
    basis: 'OGRA Complaint Resolution Procedure Regulations, 2003 (CRPR 2003), issued under Section 42 of the OGRA Ordinance, 2002',
    org: 'SNGPL / SSGC, then OGRA',
    action: 'Lodge with your utility first and keep the reference/complaint number — OGRA will not accept a complaint unless you already sought redress from the licensee.',
  },
  {
    topic: 'Right to escalate to OGRA if the utility fails to resolve your complaint',
    appliesTo: 'All SNGPL and SSGC consumers',
    basis: 'CRPR 2003, application requirements',
    org: 'OGRA (Registrar Office → Designated Officer)',
    action: 'File within 90 days of failing to get redress from the licensee (or a longer period the Registrar approves), verified by affidavit, in English or Urdu.',
  },
  {
    topic: 'Right to a decision within a defined regulatory timeframe',
    appliesTo: 'Complaints accepted by OGRA under CRPR 2003',
    basis: 'CRPR 2003, complaint resolution provisions',
    org: 'OGRA Designated Officer',
    action: 'The Designated Officer must conclude and notify a decision within 90 days, with recorded reasons if delayed — this is a regulatory obligation, not a courtesy.',
  },
  {
    topic: 'Right to appeal an OGRA decision',
    appliesTo: 'Either the complainant or the licensee',
    basis: 'CRPR 2003, appeal provisions',
    org: 'OGRA',
    action: 'Appeal within 30 days of the decision, with the prescribed fee.',
  },
  {
    topic: 'Right to approach the Federal Ombudsman for maladministration',
    appliesTo: 'Consumers of federal government agencies and state-owned enterprises, including SNGPL and SSGC',
    basis: "Wafaqi Mohtasib (Federal Ombudsman) mandate — investigating maladministration by federal agencies",
    org: 'Wafaqi Mohtasib Secretariat',
    action: 'File free of cost via mohtasib.gov.pk or helpline 1055 — a separate channel from OGRA, focused on maladministration rather than technical/tariff regulation.',
  },
];

const faqs = [
  { q: 'Can I complain to OGRA before contacting SNGPL or SSGC?', a: 'No. Under OGRA\'s Complaint Resolution Procedure Regulations, 2003, OGRA will not accept an application unless you have already sought redress from your utility and failed to get it. Start with your utility\'s own complaint channel.' },
  { q: 'How long does SNGPL or SSGC have to resolve a complaint?', a: 'SSGC publishes its own estimated resolution timelines by complaint type — see the table below. We were not able to locate an equivalent published timeline table from SNGPL; SNGPL\'s own complaints-guidelines page exists but is published as an image, not text we could extract, so we are not stating an SNGPL timeline here.' },
  { q: 'What if OGRA doesn\'t resolve my complaint either?', a: 'You can appeal OGRA\'s decision to OGRA itself within 30 days (with a prescribed fee), or, for issues of maladministration rather than technical/regulatory disputes, approach the Federal Ombudsman (Wafaqi Mohtasib) — a separate, free channel.' },
  { q: 'Does CheckGasBills.pk resolve complaints?', a: 'No. We are an independent informational resource. We cannot lodge, track, or influence a complaint on your behalf — use the official channels linked throughout this page.' },
];

export default function ComplaintsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'Complaints', item: 'https://checkgasbills.pk/complaints' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Gas Complaints & Consumer Rights in Pakistan',
        url: 'https://checkgasbills.pk/complaints',
        isPartOf: { '@id': 'https://checkgasbills.pk/#website' },
        publisher: { '@id': 'https://checkgasbills.pk/#organization' },
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Complaints</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            📋 Consumer Rights &amp; Complaints Authority
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            Gas Complaints &amp; Consumer Rights in Pakistan
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
            Where to actually take a gas complaint, in what order, and what the official process requires at
            each step — for SNGPL, SSGC, OGRA, and the Federal Ombudsman.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="warning-box mb-8">
          <p className="mb-0 text-sm">
            <strong>Independence notice:</strong> SNGPL Bill Check Hub is an independent informational resource.
            We are <strong>not affiliated with SNGPL, SSGC, OGRA, or the Federal Ombudsman</strong>, and we
            cannot lodge, track, or resolve a complaint on your behalf. Every channel and timeline below links
            to the official source — see <a href="#sources" className="text-blue-700 underline">Sources Used</a>.
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

          <h2 id="overview">How Complaints Actually Work</h2>
          <p>
            The complaint process is not a single step, and it is not the same body throughout. It moves
            through distinct stages, each with its own rules:
          </p>
          <div className="not-prose bg-white border border-gray-200 rounded-2xl p-5 my-4">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium justify-center">
              {['Consumer', 'SNGPL / SSGC complaint channel', 'Utility resolution attempt', 'Escalation (if unresolved)', 'OGRA complaint mechanism', 'Regulatory decision / appeal'].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="badge bg-blue-100 text-blue-700">{step}</span>
                  {i < arr.length - 1 && <span className="text-gray-400">→</span>}
                </span>
              ))}
            </div>
          </div>
          <p>
            The critical rule most consumers miss: <strong>OGRA is not a first-contact complaint line.</strong>{' '}
            Under OGRA&apos;s own Complaint Resolution Procedure Regulations, 2003 (CRPR 2003), OGRA will not
            accept a complaint unless the consumer has already sought redress from SNGPL or SSGC directly and
            failed to obtain it. For OGRA&apos;s broader regulatory mandate, see our{' '}
            <Link href="/ogra">OGRA authority page</Link>.
          </p>

          <h2 id="categories">Complaint Categories</h2>
          <p>Gas complaints generally fall into five practical categories. Each routes through the same
          utility-then-OGRA structure above, but the specific channel and urgency differ:</p>
          <ul>
            <li><strong>Billing</strong> — incorrect or unexpectedly high bills, disputed consumption, meter-reading disputes, arrears disputes, duplicate billing records, fixed-charge or tax-line questions. Start with your utility&apos;s billing complaint channel; see also <Link href="/sngpl-taxes-explained">Gas Bill Taxes Explained</Link> to first confirm whether a charge is actually correct.</li>
            <li><strong>Meter</strong> — suspected faulty meter, meter testing/replacement requests, disputed readings, tampering allegations, or access problems for a meter reader.</li>
            <li><strong>Supply</strong> — no gas supply, low pressure, unplanned interruptions, and seasonal/winter supply shortfalls. These are not the same thing: a <em>planned</em> shutdown (for maintenance) is typically announced in advance by the utility, while <em>low pressure</em> and <em>unplanned interruption</em> are fault- or demand-driven and are handled as active complaints — SSGC, for example, explicitly separates &quot;area low pressure&quot; from a meter/regulator-specific low-pressure complaint (see the timeline table below).</li>
            <li><strong>Connection</strong> — new connection delays, ownership/name transfer issues, disconnection, reconnection, load extension/reduction, and application or document problems. We cover the new-connection process itself on our <Link href="/companies/sngpl#new-connection">SNGPL profile</Link>.</li>
            <li><strong>Safety</strong> — gas leaks, emergencies, unsafe installations, and suspected gas theft. These require an immediate call to your utility&apos;s emergency line, not a standard complaint filing — see <a href="#safety" className="text-blue-600 hover:underline">Gas Leak &amp; Emergency</a> below.</li>
          </ul>

          <h2 id="workflow">Escalation Workflow</h2>
          <div className="not-prose bg-white border border-gray-200 rounded-2xl p-5 my-4 space-y-3">
            {[
              { n: 1, t: 'Identify your utility and the problem type', d: 'Confirm whether you are an SNGPL or SSGC consumer, and which category (billing, meter, supply, connection, safety) your issue falls under.' },
              { n: 2, t: "Contact the utility's official complaint channel", d: 'Use the channels listed below for SNGPL or SSGC — not a third-party site or unofficial number.' },
              { n: 3, t: 'Retain your complaint / reference number', d: 'This is required if you later need to show OGRA that you sought redress from the licensee.' },
              { n: 4, t: 'Wait only for an officially documented timeframe', d: "Where the utility publishes an estimated resolution timeline (SSGC does — see below), that is your reference point. We do not invent a timeframe where none is published." },
              { n: 5, t: 'Escalate to OGRA if unresolved', d: 'File within 90 days of failing to get redress from the licensee, verified by affidavit — see the OGRA process below.' },
              { n: 6, t: 'Appeal or escalate further if needed', d: "Appeal OGRA's decision within 30 days, or raise a maladministration complaint with the Federal Ombudsman as a separate channel." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">{s.n}</div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{s.t}</div>
                  <div className="text-sm text-gray-600">{s.d}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="sngpl-channels">SNGPL Complaint Channels</h2>
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            <a href="https://www.sngpl.com.pk/complaints.jsp?mdids=89" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">Lodge a Complaint ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/complaints.jsp</div>
            </a>
            <a href="https://www.sngpl.com.pk/complaintshistory.jsp?mdids=90" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">Track Your Complaint ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/complaintshistory.jsp</div>
            </a>
            <a href="https://www.sngpl.com.pk/page.jsp?pgids=4265" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">Guidelines for Feedback/Complaints ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk (published as an image; see note below)</div>
            </a>
            <a href="https://www.sngpl.com.pk/domrecon.jsp?mdids=286" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">Reconnection of Domestic Consumer ↗</div>
              <div className="text-xs text-gray-500">sngpl.com.pk/domrecon.jsp</div>
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Helpline: <strong>1199</strong>. Email: <strong>customerservices@sngpl.com.pk</strong>. Full contact
            detail and company facts are on our <Link href="/companies/sngpl">SNGPL profile</Link>.
          </p>
          <div className="warning-box mt-3">
            <p className="mb-0 text-sm">
              <strong>Note on SNGPL timelines:</strong> SNGPL&apos;s &quot;Guidelines for Submission of
              Feedback/Complaints&quot; page exists and is real, but its content is published as an image
              rather than text we could extract or verify programmatically. Unlike SSGC (below), we have not
              found a published SNGPL table of estimated resolution timelines by complaint type — so we are not
              stating one. If you have a copy of SNGPL&apos;s guidelines image, its content could be transcribed
              in a future update.
            </p>
          </div>

          <h2 id="ssgc-channels">SSGC Complaint Channels</h2>
          <p>
            SSGC serves Sindh and Balochistan and is a distinct company from SNGPL, regulated by the same body
            (OGRA) but operating its own systems. For a full, independently verified SSGC entity profile —
            service area, OGRA licence, customer channels, and billing — see our{' '}
            <Link href="/companies/ssgc">SSGC company profile</Link>.
          </p>
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            <a href="https://www.ssgc.com.pk/web/?page_id=132" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">Complaints / Feedback Form ↗</div>
              <div className="text-xs text-gray-500">ssgc.com.pk — Customer Type, Customer/Meter Number, Address required</div>
            </a>
            <a href="https://www.ssgc.com.pk/web/?page_id=5058" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">How Customers Can Complain ↗</div>
              <div className="text-xs text-gray-500">ssgc.com.pk</div>
            </a>
            <a href="https://www.ssgc.com.pk/web/?page_id=5472" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">Public Complaints Resolution Mechanism ↗</div>
              <div className="text-xs text-gray-500">ssgc.com.pk</div>
            </a>
            <a href="https://www.ssgc.com.pk/web/?page_id=128" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">Customer Facilitation Centers ↗</div>
              <div className="text-xs text-gray-500">ssgc.com.pk</div>
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Helpline: <strong>1199</strong> / <strong>99021000</strong>. Email: <strong>info@ssgc.com.pk</strong>.
            Head office: ST-4/B, Block 14, Sir Shah Suleman Road, Gulshan-e-Iqbal, Karachi.
          </p>

          <h2 id="ssgc-timelines">SSGC Complaint Timelines (Verified)</h2>
          <p>
            SSGC publishes its own estimated resolution timelines by complaint type, explicitly referenced to
            the Petroleum Division&apos;s &quot;Ease of Doing Business&quot; initiative. This is real,
            SSGC-published data — not our own estimate — reproduced here in a clearer table format and grouped
            by department.
          </p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-blue-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Department</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Complaint type</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Estimated timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ssgcTimelines.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 text-xs font-semibold text-blue-700 whitespace-nowrap">{r.dept}</td>
                    <td className="p-3">{r.type}</td>
                    <td className="p-3 text-gray-600">{r.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Source: SSGC, &quot;Complaint Types and Estimated Resolution Timelines,&quot; referenced by SSGC to
            the Petroleum Division&apos;s Ease of Doing Business initiative — see{' '}
            <a href="https://www.ssgc.com.pk/web/?page_id=111676" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">the original page</a>{' '}
            for the complete list, including industrial-specific categories not reproduced here.
          </p>

          <h2 id="ogra-process">OGRA&apos;s Formal Complaint Process</h2>
          <p>
            OGRA&apos;s complaint mechanism is not informal — it runs under a specific regulation, the{' '}
            <strong>Complaint Resolution Procedure Regulations, 2003</strong> (CRPR 2003), issued under Section
            42 of the OGRA Ordinance, 2002. In our own words, based on that regulation:
          </p>
          <ol>
            <li>You must have already tried to get redress from your utility (SNGPL or SSGC) and failed — OGRA will reject a complaint that skips this step.</li>
            <li>You file with OGRA&apos;s Registrar Office within 90 days of that failed redress (or a longer period the Registrar specifically approves), using a complaint verified by affidavit, in English or Urdu.</li>
            <li>The Registrar completes an initial screening within 10 days, and can reject complaints outside OGRA&apos;s jurisdiction or that don&apos;t merit further action.</li>
            <li>An accepted complaint is forwarded to a Designated Officer, who sends it to the licensee for a response — normally within 15 days.</li>
            <li>The Designated Officer reviews the response, may inspect sites or request more information, and must conclude and notify a decision within 90 days (with recorded reasons for any delay).</li>
            <li>Either side can appeal the decision to OGRA within 30 days, with a prescribed fee.</li>
          </ol>
          <p>
            OGRA accepts complaints about billing/overcharging, connection and disconnection, metering, undue
            delay in service, safety practices, and the quantity or quality of gas supplied. OGRA has designated
            officers at regional offices in Karachi, Lahore, Quetta, and Peshawar.
          </p>
          <div className="not-prose grid sm:grid-cols-2 gap-3 my-4">
            <a href="https://complaint.ogra.org.pk/complaint" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">OGRA Online Complaint Form ↗</div>
              <div className="text-xs text-gray-500">complaint.ogra.org.pk/complaint</div>
            </a>
            <a href="https://ogra.org.pk/lodge-complaints" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="font-semibold text-blue-700 text-sm mb-1">OGRA Complaint &amp; Tracking Portal ↗</div>
              <div className="text-xs text-gray-500">ogra.org.pk/lodge-complaints</div>
            </a>
          </div>
          <p className="text-sm text-gray-600">
            For OGRA&apos;s wider regulatory role beyond complaints, see our <Link href="/ogra">OGRA authority
            page</Link>.
          </p>

          <h2 id="ombudsman">Federal Ombudsman (Wafaqi Mohtasib)</h2>
          <p>
            Separate from OGRA, the Wafaqi Mohtasib (Federal Ombudsman) investigates maladministration by
            federal government agencies and state-owned enterprises — which includes SNGPL and SSGC as
            state-owned utilities. This is a genuinely distinct channel: OGRA handles technical, billing, and
            regulatory disputes under CRPR 2003; the Ombudsman handles complaints about how an agency has
            treated you administratively. SSGC itself lists Federal Ombudsman contact details on its own site.
          </p>
          <div className="highlight-box">
            <p className="mb-0 text-sm">
              <strong>Helpline: 1055</strong> (general complaints), <strong>1056</strong> (children&apos;s
              complaints), 9:00 AM–10:00 PM. Complaints can be filed free of cost online at{' '}
              <a href="https://www.mohtasib.gov.pk" target="_blank" rel="noopener noreferrer" className="underline">mohtasib.gov.pk</a>.
              Regional offices exist in multiple cities including Karachi, Lahore, Peshawar, and Quetta.
            </p>
          </div>

          <h2 id="rights">Consumer Rights Reference</h2>
          <p>
            Every entry below is tied to a specific official basis — where we could not establish one, we left
            the claim out rather than guess.
          </p>
          <div className="not-prose space-y-3 my-4">
            {rights.map((r) => (
              <div key={r.topic} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="font-semibold text-gray-900 text-sm mb-2">{r.topic}</div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-medium text-gray-800">Applies to:</span> {r.appliesTo}</div>
                  <div><span className="font-medium text-gray-800">Responsible body:</span> {r.org}</div>
                  <div className="sm:col-span-2"><span className="font-medium text-gray-800">Official basis:</span> {r.basis}</div>
                  <div className="sm:col-span-2"><span className="font-medium text-gray-800">What you can do:</span> {r.action}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">Verification date for this reference: 28 August 2026.</p>

          <h2 id="checklist">Document Checklist</h2>
          <p>Before escalating a complaint — to your utility or to OGRA — it helps to have on hand:</p>
          <ul>
            <li>Your consumer number (see our <Link href="/consumer-number">Consumer Number guide</Link>)</li>
            <li>A copy of the relevant gas bill</li>
            <li>Your complaint/reference number from the utility, once issued</li>
            <li>The dates of the issue and of your complaint to the utility (needed to calculate OGRA&apos;s 90-day window)</li>
            <li>Meter number and, where relevant, a photo of the meter reading</li>
            <li>For an OGRA complaint specifically: a valid CNIC copy and an affidavit verifying the complaint, per CRPR 2003</li>
          </ul>
          <p className="text-sm text-gray-600">
            We only list items with a clear basis above — we are not stating that every item is legally
            mandatory for every complaint type; confirm exact requirements with the specific channel you use.
          </p>

          <h2 id="safety">Gas Leak &amp; Emergency</h2>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>This is not a place for step-by-step emergency instructions.</strong> If you smell gas or
              suspect a leak: move away from the area, avoid creating any spark or flame, and call your
              utility&apos;s emergency line immediately — <strong>SNGPL and SSGC both list 1199</strong>. Do not
              attempt to investigate, repair, or test a suspected leak yourself. This is distinct from an
              ordinary billing or service complaint and should never be filed through a standard complaint form
              — call immediately instead.
            </p>
          </div>
          <p>
            For suspected gas theft or unsafe/unauthorized installations, both utilities treat this as a
            distinct enforcement matter rather than a standard service complaint — SSGC, for example, publicly
            reports disconnecting illegal connections as part of active enforcement. Report suspected theft or
            unsafe installations through your utility&apos;s official complaint channel above rather than
            attempting to address it directly.
          </p>
          <p>
            For the full emergency-vs-complaint distinction, OGRA&apos;s published response-time standards,
            appliance and meter safety, and a Pakistan-specific carbon-monoxide note, see our{' '}
            <Link href="/safety">Gas Safety &amp; Emergency Guide</Link>.
          </p>

          <h2 id="tracker">Complaint Resolution Tracker</h2>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>Planned, not yet populated.</strong> We intend to eventually track publicly available,
              verified complaint-resolution statistics (from OGRA annual reports or utility disclosures) here.
              We have not identified a verified public dataset of actual complaint outcomes or resolution times
              this session, and we are not publishing estimated or invented statistics in the meantime. The
              SSGC timeline table above reflects the utility&apos;s own <em>target</em> timelines, not measured
              actual performance — that distinction matters, and we are not blurring it.
            </p>
          </div>

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
            <li>OGRA Complaint Resolution Procedure Regulations, 2003 — summarized via a legal-professional secondary source, <a href="https://joshandmakinternational.com/ogra-complaint-resolution-procedure-regulations-2003" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Josh and Mak International</a>, cross-checked against search-indexed OGRA process descriptions</li>
            <li>OGRA complaint portal — <a href="https://ogra.org.pk/lodge-complaints" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ogra.org.pk/lodge-complaints</a> and <a href="https://complaint.ogra.org.pk/complaint" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">complaint.ogra.org.pk</a></li>
            <li>SNGPL official website — <a href="https://www.sngpl.com.pk/complaints.jsp?mdids=89" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">complaint lodging</a> and <a href="https://www.sngpl.com.pk/page.jsp?pgids=4265" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">complaint guidelines</a> pages</li>
            <li>SSGC official website — <a href="https://www.ssgc.com.pk/web/?page_id=111676" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Complaint Types and Estimated Resolution Timelines</a>, <a href="https://www.ssgc.com.pk/web/?page_id=132" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Complaints/Feedback form</a>, and <a href="https://www.ssgc.com.pk/web/?page_id=5058" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">How Customers Can Complain</a></li>
            <li>Wafaqi Mohtasib (Federal Ombudsman) official website — <a href="https://www.mohtasib.gov.pk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mohtasib.gov.pk</a> (helpline numbers confirmed directly on the homepage)</li>
            <li>Our own <Link href="/ogra">OGRA page</Link> and <Link href="/companies/sngpl">SNGPL profile</Link></li>
          </ul>

          <div className="highlight-box mt-6">
            <p className="mb-0 text-sm">
              <strong>Last reviewed:</strong> 28 August 2026, by the SNGPL Bill Check Hub editorial process
              described in our <Link href="/editorial-policy">Editorial Policy</Link>. Author: Usama, single
              operator of this site — see our <Link href="/about">About</Link> page, our{' '}
              <Link href="/research-methodology">Research Methodology</Link>, and our{' '}
              <Link href="/corrections-policy">Corrections Policy</Link> if anything here needs a fix. This page
              will be revised as new official information is verified — see our{' '}
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
              <div className="text-xs text-gray-500">The regulator behind the complaint process</div>
            </Link>
            <Link href="/companies/sngpl" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">SNGPL Profile</div>
              <div className="text-xs text-gray-500">Company facts, billing, connections</div>
            </Link>
            <Link href="/tariffs" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">Gas Tariffs Hub</div>
              <div className="text-xs text-gray-500">Confirm a charge before disputing it</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
