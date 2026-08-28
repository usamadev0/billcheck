import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gas Safety & Emergency Guide | SNGPL Bill Check Hub',
  description: 'How to recognise and respond to a gas leak or emergency in Pakistan, official SNGPL and SSGC emergency channels, and OGRA\'s published safety and response-time standards — verified against primary sources.',
  alternates: { canonical: 'https://www.checkgasbills.pk/safety' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Gas Safety & Emergency Guide | SNGPL Bill Check Hub',
    description: 'Recognising a gas emergency, official SNGPL/SSGC emergency channels, and OGRA\'s published safety standards — sourced and verified before publishing.',
    url: 'https://www.checkgasbills.pk/safety',
    siteName: 'SNGPL Bill Check Hub',
    type: 'website',
  },
};

type ResponseStandard = {
  issue: string;
  standard: string;
  source: string;
  sourceUrl: string;
  context: string;
};

const ograStandards: ResponseStandard[] = [
  {
    issue: 'Gas escapes, fires or other hazardous situations',
    standard: 'Attend as quickly as possible — within 1 hour for uncontrolled escapes, within 2 hours for controlled escapes.',
    source: 'OGRA Performance Standard',
    sourceUrl: 'https://www.ogra.org.pk/download/3575',
    context: 'Regulatory performance target for licensed gas utilities (100% compliance target).',
  },
  {
    issue: 'Telephone calls to complaint centres',
    standard: 'Answered within 60 seconds.',
    source: 'OGRA Performance Standard',
    sourceUrl: 'https://www.ogra.org.pk/download/3575',
    context: '100% compliance target.',
  },
  {
    issue: 'Complaints about gas smell, asphyxiation, fire, pipe breakage, explosion or building collapse',
    standard: 'Dealt with under the same 1-hour / 2-hour emergency standard above — not treated as a routine complaint.',
    source: 'OGRA Performance Standard',
    sourceUrl: 'https://www.ogra.org.pk/download/3575',
    context: 'Explicitly distinguished from lower-risk complaints in the same document.',
  },
  {
    issue: 'Other complaints not involving risk to life or property (e.g. low pressure)',
    standard: 'Responded to within 24 hours.',
    source: 'OGRA Performance Standard',
    sourceUrl: 'https://www.ogra.org.pk/download/3575',
    context: '90–100% compliance target.',
  },
  {
    issue: 'Investigation of pressure complaints',
    standard: 'Visit within 36 hours.',
    source: 'OGRA Performance Standard',
    sourceUrl: 'https://www.ogra.org.pk/download/3575',
    context: '90–100% compliance target.',
  },
];

type SafetyRefRow = {
  topic: string;
  guidance: string;
  authority: string;
  source: string;
  sourceUrl: string;
  verified: string;
};

const safetyReference: SafetyRefRow[] = [
  {
    topic: 'Emergency response time — uncontrolled vs. controlled gas escape',
    guidance: '1 hour for uncontrolled escapes; 2 hours for controlled escapes (regulatory target).',
    authority: 'OGRA',
    source: 'OGRA Performance Standard',
    sourceUrl: 'https://www.ogra.org.pk/download/3575',
    verified: '28 Aug 2026',
  },
  {
    topic: 'SSGC\'s own published complaint-timeline for the same categories',
    guidance: '1 hour for controlled escape; 2 hours for uncontrolled escape — the reverse ordering. See discrepancy note below.',
    authority: 'SSGC',
    source: 'Complaint Types & Estimated Resolution Timelines',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=111676',
    verified: '28 Aug 2026',
  },
  {
    topic: 'Emergency / complaint contact — SSGC',
    guidance: '1199, described by SSGC as available round the clock, 365 days, for emergencies and complaints.',
    authority: 'SSGC',
    source: 'SSGC FAQs',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=111824',
    verified: '28 Aug 2026',
  },
  {
    topic: 'Emergency / complaint contact — SNGPL',
    guidance: '1199, published site-wide as SNGPL\'s complaint and emergency contact number; complaint categories explicitly include gas leakage, meter/regulator leakage, fire and blast.',
    authority: 'SNGPL',
    source: 'sngpl.com.pk (site-wide contact; complaints.jsp)',
    sourceUrl: 'https://www.sngpl.com.pk/complaints.jsp',
    verified: '28 Aug 2026',
  },
  {
    topic: 'Responsibility for internal piping / houseline (after the meter)',
    guidance: 'The customer is solely responsible for repair and maintenance of internal piping and gas installations after the meter.',
    authority: 'SSGC',
    source: 'SSGC FAQs (Q15)',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=111824',
    verified: '28 Aug 2026',
  },
  {
    topic: 'Authorized domestic gas usage per connection',
    guidance: 'One meter is authorized for one kitchen and one geyser, for purely domestic purposes.',
    authority: 'SSGC',
    source: 'SSGC FAQs (Q18, Gas Sale Agreement)',
    sourceUrl: 'https://www.ssgc.com.pk/web/?page_id=111824',
    verified: '28 Aug 2026',
  },
  {
    topic: 'Carbon monoxide risk from gas geysers/generators used without ventilation',
    guidance: 'A real, documented risk in Pakistan — e.g. 23 deaths (Murree, 2022) and a 7-member family (Hyderabad) linked to CO exposure from geysers/generators in enclosed spaces.',
    authority: 'Pakistan Journal of Public Health (Health Services Academy, Govt. of Pakistan)',
    source: '"From Tragedy to Prevention: Addressing Carbon Monoxide Poisoning Across Pakistan" (2025)',
    sourceUrl: 'https://pjph.org/pjph/article/view/2007',
    verified: '28 Aug 2026',
  },
];

export default function SafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.checkgasbills.pk' },
          { '@type': 'ListItem', position: 2, name: 'Gas Safety & Emergency Guide', item: 'https://www.checkgasbills.pk/safety' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Gas Safety & Emergency Guide',
        url: 'https://www.checkgasbills.pk/safety',
        isPartOf: { '@id': 'https://www.checkgasbills.pk/#website' },
        publisher: { '@id': 'https://www.checkgasbills.pk/#organization' },
        about: { '@id': 'https://www.checkgasbills.pk/#organization' },
      }) }} />

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Gas Safety &amp; Emergency Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            🚨 Safety &amp; Emergency Authority
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Gas Safety &amp; Emergency Guide</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
            What actually counts as a gas emergency, how to respond, and who to contact — SNGPL and SSGC&apos;s own
            published emergency channels, and OGRA&apos;s published safety and response-time standards, each
            verified against a primary source before publishing.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="highlight-box mb-8">
          <p className="mb-0 text-sm">
            <strong>We are not an emergency service.</strong> If you smell gas, suspect a leak, or see fire or
            explosion risk, contact your utility&apos;s emergency line immediately — see{' '}
            <a href="#emergency-channels" className="toc-link">Official Emergency Channels</a> below. This page
            explains what OGRA, SNGPL and SSGC themselves publish about gas safety; it does not replace their
            instructions.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-10">
          <div className="font-bold text-blue-900 mb-3 text-sm">On this page</div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <a href="#overview" className="toc-link">1. Overview &amp; source priority</a>
            <a href="#emergency-vs-complaint" className="toc-link">2. Emergency vs. ordinary complaint</a>
            <a href="#gas-leak" className="toc-link">3. Gas leak &amp; gas smell</a>
            <a href="#emergency-channels" className="toc-link">4. Official emergency channels</a>
            <a href="#ogra-standards" className="toc-link">5. OGRA&apos;s safety &amp; response standards</a>
            <a href="#appliance-safety" className="toc-link">6. Gas appliance safety</a>
            <a href="#meter-safety" className="toc-link">7. Gas meter safety</a>
            <a href="#piping-safety" className="toc-link">8. Internal gas piping</a>
            <a href="#carbon-monoxide" className="toc-link">9. Carbon monoxide risk</a>
            <a href="#winter-safety" className="toc-link">10. Winter gas safety</a>
            <a href="#theft-tampering" className="toc-link">11. Gas theft &amp; tampering</a>
            <a href="#safety-reference" className="toc-link">12. Pakistan Gas Safety Reference</a>
            <a href="#disclaimer" className="toc-link">13. Safety disclaimer</a>
            <a href="#sources" className="toc-link">14. Sources used</a>
          </div>
        </div>

        <article className="prose-content">
          <h2 id="overview">Overview &amp; Source Priority</h2>
          <p>
            Gas safety in Pakistan sits inside the same regulated system as billing and tariffs: OGRA sets safety
            and performance standards for licensed gas utilities, and SNGPL and SSGC operate emergency-response
            and complaint channels within that framework. Neither this site nor any third party has the authority
            to define an emergency number, a response time, or a safety procedure — we only report what OGRA,
            SNGPL and SSGC themselves publish. Where a claim could not be verified against one of these sources,
            we have left it out rather than filled the gap with general internet advice.
          </p>
          <p>
            Source priority for everything on this page: <strong>OGRA → SNGPL / SSGC (as applicable) → Government
            of Pakistan regulatory material → other verifiable official or academic sources</strong> — never
            another gas-bill website.
          </p>

          <h2 id="emergency-vs-complaint">Emergency vs. Ordinary Complaint</h2>
          <p>
            The single most important distinction on this page: a genuine gas emergency and an ordinary service
            complaint require completely different responses, and mixing them up wastes time in a genuine
            emergency. Use this to decide which path applies to you.
          </p>

          <div className="not-prose bg-white border border-gray-200 rounded-2xl p-5 my-6">
            <div className="font-bold text-gray-900 mb-4 text-sm">Emergency Decision Tree</div>
            <div className="space-y-3 text-sm">
              <div className="border border-red-200 bg-red-50 rounded-xl p-4">
                <div className="font-semibold text-red-800 mb-1">Do you smell gas, hear hissing, or see an uncontrolled escape?</div>
                <div className="text-gray-700">→ <strong>Emergency.</strong> Move away, ventilate if it is safe to do so, do not use switches or flames, and contact your utility&apos;s emergency line (1199) from a safe distance.</div>
              </div>
              <div className="border border-red-200 bg-red-50 rounded-xl p-4">
                <div className="font-semibold text-red-800 mb-1">Is there fire, explosion risk, or building damage?</div>
                <div className="text-gray-700">→ <strong>Emergency.</strong> Evacuate the area and contact both emergency services and your utility&apos;s emergency line.</div>
              </div>
              <div className="border border-blue-200 bg-blue-50 rounded-xl p-4">
                <div className="font-semibold text-blue-800 mb-1">Is it low pressure, a billing issue, a meter reading, or a connection request?</div>
                <div className="text-gray-700">→ <strong>Not an emergency.</strong> Use the normal complaint channel — see our <Link href="/complaints">Complaints &amp; Consumer Rights hub</Link>.</div>
              </div>
            </div>
          </div>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Situation</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Classification</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Where to go</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gas smell / suspected leak', 'Emergency', 'Utility emergency line (1199)'],
                  ['Fire, explosion risk or building collapse', 'Emergency', 'Utility emergency line (1199) + emergency services'],
                  ['Low gas pressure', 'Service issue', 'Utility complaint channel → /complaints'],
                  ['Incorrect or disputed bill', 'Billing issue', '/complaints'],
                  ['Meter concern (inaccurate reading, visible damage)', 'Service / safety issue', 'Utility complaint channel'],
                  ['Suspected gas theft or tampering', 'Safety / regulatory issue', 'Official utility reporting channel'],
                ].map(row => (
                  <tr key={row[0]} className="border-t border-gray-100">
                    <td className="p-3 text-gray-800">{row[0]}</td>
                    <td className="p-3 text-gray-600">{row[1]}</td>
                    <td className="p-3 text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 -mt-2">
            This classification follows OGRA&apos;s own Performance Standard, which explicitly separates
            gas-smell/fire/explosion/building-collapse complaints (treated as emergencies) from other, lower-risk
            complaints such as pressure or meter issues. See <a href="#ogra-standards" className="toc-link">OGRA&apos;s safety standards</a> below.
          </p>

          <h2 id="gas-leak">Gas Leak &amp; Gas Smell</h2>
          <p>
            Natural gas is naturally colourless and odourless; SNGPL&apos;s own published safety material confirms
            that a foul-smelling agent is deliberately added to the gas supply specifically so that a leak can be
            detected by smell. A strong gas odour, a hissing sound near a pipe, meter or regulator, or visible
            damage to a gas line are all signs of a possible leak.
          </p>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              <strong>We do not provide DIY repair instructions.</strong> Do not attempt to repair, adjust or
              operate a gas valve, meter, regulator or appliance yourself. SNGPL&apos;s own published guidance is
              to have leaks downstream of the metering point &quot;rectified by skilled/authorised personnel&quot;
              — not by the consumer.
            </p>
          </div>
          <p>Based on the general safety principles SNGPL itself documents (drawn from its published CNG-station safety guidelines, which set out gas-handling principles more broadly), if you suspect a leak:</p>
          <ul>
            <li>Do not operate electrical switches, lighters, matches or any naked flame in the area — a spark can ignite an explosive gas-air mixture.</li>
            <li>Ventilate the area if it is safe to do so (open doors and windows).</li>
            <li>Move away from the source; if the smell is strong, the escape is uncontrolled, or there is any fire risk, leave the premises.</li>
            <li>Once at a safe distance, call your utility&apos;s emergency line — 1199 — and report the location and nature of the issue.</li>
            <li>If anyone has been exposed to gas, move them to fresh air and seek medical attention if they show symptoms.</li>
            <li>Do not attempt to locate a leak using a flame.</li>
          </ul>
          <p className="text-xs text-gray-500">
            Source: SNGPL, &quot;Safety Guidelines for CNG Stations&quot; (the most detailed general gas-handling
            safety guidance SNGPL publishes that we could verify this session) —{' '}
            <a href={'https://www.sngpl.com.pk/page.jsp?pgids=309&pgname=PAGES_NAME_a&secs=ss7xa852op845&cats=ct456712337&artcl=artuyh709123465'} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sngpl.com.pk ↗</a>.
            We have not found a separate, general residential gas-leak safety page published by SNGPL; the
            principles above are the utility&apos;s own documented gas-safety practices, generalised carefully
            rather than presented as a residential-specific SNGPL publication.
          </p>

          <h2 id="emergency-channels">Official Emergency Channels</h2>
          <p>SNGPL and SSGC are separate companies with separate complaint systems. Do not assume their procedures are identical.</p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="font-bold text-gray-900 mb-2">SNGPL</div>
              <p className="text-sm text-gray-600 mb-2">Published emergency &amp; complaint number: <strong>1199</strong></p>
              <p className="text-sm text-gray-600 mb-3">Complaint categories explicitly include gas leakage, leakage at the meter, leakage at the regulator, fire case, and blast.</p>
              <a href="https://www.sngpl.com.pk/complaints.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-medium hover:underline">Lodge a complaint with SNGPL ↗</a>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="font-bold text-gray-900 mb-2">SSGC</div>
              <p className="text-sm text-gray-600 mb-2">Published emergency &amp; complaint number: <strong>1199</strong></p>
              <p className="text-sm text-gray-600 mb-3">SSGC&apos;s own FAQ states: &quot;For emergencies and complaints, please contact SSGC call center 1199 available round the clock for 365 days.&quot;</p>
              <a href="https://www.ssgc.com.pk/web/?page_id=111824" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-medium hover:underline">SSGC FAQs (source) ↗</a>
              <div className="mt-2">
                <Link href="/companies/ssgc" className="text-blue-700 text-sm font-medium hover:underline">Full SSGC company profile →</Link>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            SSGC also states, on the same page, that internal house-line leaks should be reported &quot;immediately
            at company hotline 1199, as it is also a safety hazard,&quot; and that the customer is solely
            responsible for repair and maintenance of internal piping after the meter — see{' '}
            <a href="#piping-safety" className="toc-link">Internal Gas Piping</a> below.
          </p>

          <h2 id="ogra-standards">OGRA&apos;s Safety &amp; Response Standards</h2>
          <p>
            OGRA — covered in full on our <Link href="/ogra">OGRA authority page</Link> — publishes a
            &quot;Performance Standard&quot; document setting response-time and service targets for licensed gas
            utilities. It is a regulatory target for the licensee, not a service that CheckGasBills.pk itself
            provides. The table below quotes it directly.
          </p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Issue</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Required performance</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Context</th>
                </tr>
              </thead>
              <tbody>
                {ograStandards.map(s => (
                  <tr key={s.issue} className="border-t border-gray-100 align-top">
                    <td className="p-3 text-gray-800 font-medium">{s.issue}</td>
                    <td className="p-3 text-gray-600">{s.standard}</td>
                    <td className="p-3 text-gray-500 text-xs">{s.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2">
              Source: OGRA Performance Standard —{' '}
              <a href="https://www.ogra.org.pk/download/3575" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ogra.org.pk/download/3575 ↗</a>,
              listed at <a href="https://www.ogra.org.pk/standards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ogra.org.pk/standards ↗</a>. Verified 28 Aug 2026.
            </p>
          </div>

          <div className="warning-box">
            <p className="mb-2 text-sm">
              <strong>A genuine discrepancy, disclosed rather than resolved for you.</strong> OGRA&apos;s
              Performance Standard states <strong>1 hour for uncontrolled escapes and 2 hours for controlled
              escapes</strong>. SSGC&apos;s own &quot;Complaint Types and Estimated Resolution Timelines&quot; page
              (see our <Link href="/complaints#ssgc-timelines">Complaints hub</Link>) states the reverse for the
              same categories — <strong>1 hour for controlled escape, 2 hours for uncontrolled escape</strong>.
            </p>
            <p className="mb-0 text-sm">
              We are reporting both as published rather than picking one, because we could not find a document
              that reconciles them. If you are reporting an active emergency, the ordering does not matter — call
              1199 immediately either way; a genuine uncontrolled escape, fire or explosion risk should be treated
              as the most urgent category regardless of which document&apos;s label is used.
            </p>
          </div>

          <p>
            OGRA&apos;s Performance Standard also documents a consumer-education obligation — &quot;Energy and
            safety advice will be given to consumers visited with problems,&quot; provided both in person and by
            post — and requires that all complaints be recorded regardless of how they are received (phone,
            letter, electronic, or in person). We have not found explicit OGRA document language requiring
            round-the-clock staffing beyond the response-time targets above, so we have not asserted a specific
            &quot;24-hour&quot; requirement beyond what the document itself states.
          </p>

          <h2 id="appliance-safety">Gas Appliance Safety</h2>
          <p>
            Neither OGRA, SNGPL nor SSGC publishes a detailed consumer appliance-safety manual that we could
            verify this session, so this section is deliberately limited to what is documented.
          </p>
          <ul>
            <li>SSGC&apos;s own Gas Sale Agreement authorizes gas usage per domestic meter for <strong>one kitchen and one geyser</strong> for purely domestic purposes — using a connection for additional appliances outside this scope is outside the authorized agreement.</li>
            <li>SNGPL&apos;s published safety principles call for well-ventilated areas wherever gas is used or handled, and for maintenance/servicing to be carried out by authorized or skilled personnel rather than the consumer.</li>
          </ul>
          <p>For appliance installation, connection processes, and house-line testing requirements, see our <Link href="/companies/sngpl#new-connection">SNGPL company profile</Link>.</p>

          <h2 id="meter-safety">Gas Meter Safety</h2>
          <p>
            The gas meter is company property, not the consumer&apos;s, and both SNGPL and SSGC treat tampering
            with it as a serious safety and billing issue (see &quot;Gas Theft &amp; Tampering&quot; below). If you
            notice visible damage, corrosion, or an unusual smell near your meter, do not attempt to inspect or
            adjust it yourself — report it through your utility&apos;s normal complaint channel.
          </p>
          <p>
            Note that OGRA&apos;s own Performance Standard explicitly classifies &quot;meter inaccurate&quot; as an
            <strong> ordinary</strong> service issue, not an emergency — do not assume a suspected faulty meter is
            a safety emergency without an actual leak, smell, or damage present. A detailed meter guide is planned
            as a future addition to this hub.
          </p>

          <h2 id="piping-safety">Internal Gas Piping</h2>
          <p>
            Per SSGC&apos;s own published FAQ: <strong>&quot;The customer is solely responsible for the repair and
            maintenance of the internal piping/houseline and gas installations after the meter.&quot;</strong> All
            internal leakage is billed to the customer and is also treated as a safety hazard requiring an
            immediate report to the utility hotline. SNGPL&apos;s new-connection process similarly requires a
            house-line installation test certificate, consistent with the same before/after-the-meter division of
            responsibility.
          </p>
          <p>
            We do not provide DIY internal-piping repair instructions. If you suspect a leak in your internal
            piping, treat it as a possible emergency (see &quot;Gas Leak &amp; Gas Smell&quot; above) and use
            authorized personnel for any repair.
          </p>

          <h2 id="carbon-monoxide">Carbon Monoxide Risk</h2>
          <p>
            Neither OGRA, SNGPL nor SSGC publishes carbon monoxide (CO) safety material that we could verify this
            session, so we are not attributing this section to any of them. It is included because a genuinely
            Pakistan-relevant, citable source exists: a December 2025 article in the <em>Pakistan Journal of
            Public Health</em> (published by the Health Services Academy, Government of Pakistan) documents real,
            recent CO poisoning deaths in Pakistan linked to gas geysers and generators used in enclosed or
            poorly-ventilated spaces — including 23 deaths among stranded tourists in Murree (2022) and a
            7-member family in Hyderabad.
          </p>
          <p>
            Carbon monoxide is colourless and odourless — unlike a natural gas leak, it cannot be detected by
            smell. The documented risk factor in both Pakistani cases above was running a gas appliance or
            generator in an enclosed space with inadequate ventilation. General prevention consistent with this
            source and with SNGPL&apos;s own ventilation principles (see &quot;Gas Leak &amp; Gas Smell&quot;
            above): ensure gas geysers and generators are used only in well-ventilated areas, and never run a
            generator in an enclosed room, garage, or vehicle.
          </p>
          <p className="text-xs text-gray-500">
            Source: Mushtaq SE, &quot;From Tragedy to Prevention: Addressing Carbon Monoxide Poisoning Across
            Pakistan,&quot; Pakistan Journal of Public Health, Vol. 15 No. 4 (2025) —{' '}
            <a href="https://pjph.org/pjph/article/view/2007" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">pjph.org ↗</a>.
          </p>

          <h2 id="winter-safety">Winter Gas Safety</h2>
          <p>
            SNGPL publishes seasonal &quot;Low Pressure Notice&quot; and &quot;Shut Down Notice&quot; pages,
            reflecting that reduced winter gas pressure is a known, recurring, seasonal supply-management issue —
            driven by winter demand across the network — rather than a fault at any individual property. This is
            distinct from an emergency: a pressure drop across your area in winter is a service issue (see the
            Emergency vs. Complaint table above), not a leak. It should be reported through the normal complaint
            channel — see our <Link href="/complaints">Complaints &amp; Consumer Rights hub</Link> — unless it is
            accompanied by an actual gas smell, hissing, or visible damage, in which case treat it as a possible
            leak instead.
          </p>
          <p>
            Do not assume every winter supply interruption is an emergency, and do not assume every low-pressure
            complaint will be resolved on the same timeline as a genuine leak — OGRA&apos;s own standard (see
            above) treats these as different categories with different response targets.
          </p>

          <h2 id="theft-tampering">Gas Theft &amp; Tampering</h2>
          <p>
            Tampering with a gas meter or line to bypass billing creates a genuine safety hazard — an
            improperly-modified connection can leak or fail unpredictably — in addition to being a billing and
            regulatory violation. Both SNGPL and SSGC periodically report enforcement action; SSGC, for example,
            has publicly reported gas-theft arrests and mass disconnections of illegal connections through its own
            newsroom.
          </p>
          <p>
            We do not describe how gas connections are tampered with or bypassed. If you suspect gas theft or
            tampering — at your own connection or a neighbouring one — report it through your utility&apos;s
            official complaint channel rather than investigating or intervening yourself.
          </p>

          <h2 id="safety-reference">Pakistan Gas Safety Reference</h2>
          <p>
            A growing, source-attributed reference table. Every row links to the primary source it was verified
            against; nothing here is generic safety advice without an attributed source.
          </p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Topic</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Guidance</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Authority</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Last verified</th>
                </tr>
              </thead>
              <tbody>
                {safetyReference.map(r => (
                  <tr key={r.topic} className="border-t border-gray-100 align-top">
                    <td className="p-3 text-gray-800 font-medium">{r.topic}</td>
                    <td className="p-3 text-gray-600">{r.guidance}</td>
                    <td className="p-3 text-gray-600">
                      {r.authority}
                      <div>
                        <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline">{r.source} ↗</a>
                      </div>
                    </td>
                    <td className="p-3 text-gray-500 text-xs whitespace-nowrap">{r.verified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="disclaimer">Safety Disclaimer</h2>
          <div className="warning-box">
            <p className="mb-0 text-sm">
              CheckGasBills.pk is an independent, single-operator informational resource. We are <strong>not</strong> SNGPL,
              SSGC, OGRA, an emergency response provider, a gas technician, or a government agency. Nothing on this
              page is a substitute for contacting the appropriate official channel in an emergency. If you smell
              gas, suspect a leak, or believe there is a fire or explosion risk, contact SNGPL or SSGC&apos;s
              emergency line (1199) and, where appropriate, emergency services, immediately.
            </p>
          </div>

          <h2 id="sources">Sources Used</h2>
          <ul className="text-sm">
            <li>OGRA Performance Standard (primary regulatory source for response-time standards) — <a href="https://www.ogra.org.pk/download/3575" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ogra.org.pk/download/3575</a></li>
            <li>SSGC Frequently Asked Questions (emergency contact, houseline responsibility, authorized usage) — <a href="https://www.ssgc.com.pk/web/?page_id=111824" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ssgc.com.pk</a></li>
            <li>SSGC Complaint Types &amp; Estimated Resolution Timelines — <a href="https://www.ssgc.com.pk/web/?page_id=111676" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ssgc.com.pk</a></li>
            <li>SNGPL Safety Guidelines for CNG Stations (general gas-handling safety principles) — <a href={'https://www.sngpl.com.pk/page.jsp?pgids=309&pgname=PAGES_NAME_a&secs=ss7xa852op845&cats=ct456712337&artcl=artuyh709123465'} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sngpl.com.pk</a></li>
            <li>SNGPL site-wide contact (1199) and complaint system — <a href="https://www.sngpl.com.pk/complaints.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sngpl.com.pk</a></li>
            <li>Mushtaq SE, &quot;From Tragedy to Prevention: Addressing Carbon Monoxide Poisoning Across Pakistan,&quot; Pakistan Journal of Public Health (2025), published by the Health Services Academy, Government of Pakistan — <a href="https://pjph.org/pjph/article/view/2007" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">pjph.org</a></li>
            <li>OGRA — for the regulator&apos;s full mandate and role, see our <Link href="/ogra">OGRA authority page</Link></li>
          </ul>

          <div className="highlight-box mt-8">
            <p className="mb-0 text-sm">
              <strong>Last reviewed:</strong> 28 August 2026, by the SNGPL Bill Check Hub editorial process. Every
              factual claim above was checked directly against the primary source linked next to it. Author: Usama,
              single operator of this site. See our <Link href="/research-methodology">Research Methodology</Link>,{' '}
              <Link href="/editorial-policy">Editorial Policy</Link>, and <Link href="/corrections-policy">Corrections Policy</Link>.
            </p>
          </div>
        </article>

        <section className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-4">Related Pages</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/ogra" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">OGRA Authority Page</div>
              <div className="text-xs text-gray-500">The regulator behind these standards</div>
            </Link>
            <Link href="/complaints" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">Complaints &amp; Consumer Rights</div>
              <div className="text-xs text-gray-500">For non-emergency service issues</div>
            </Link>
            <Link href="/companies/sngpl" className="block p-4 bg-white rounded-xl border border-blue-100 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-blue-700 text-sm mb-1">SNGPL Company Profile</div>
              <div className="text-xs text-gray-500">Full SNGPL entity profile</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
