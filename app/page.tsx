import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BillChecker from './components/BillChecker';
import AdUnit from './components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Bill Check Online | Pakistan Gas Bill Hub — Free Tool',
  description: 'Check SNGPL gas bill online instantly. Enter consumer number for official portal redirect. Duplicate bill, payment guide & calculator. Free — no login.',
  alternates: { canonical: 'https://sngplbillcheck.pk' },
  openGraph: {
    title: 'SNGPL Bill Check Online | Pakistan Gas Bill Hub',
    description: 'Check SNGPL gas bill online instantly. Consumer number guide, duplicate bill, payment methods & calculator. 100% free Pakistan gas utility resource.',
    url: 'https://sngplbillcheck.pk',
    siteName: 'SNGPL Bill Check Hub',
    locale: 'en_PK',
    type: 'website',
  },
};

const quickCards = [
  { href: '/bill-check',      icon: '🔍', title: 'Bill Check Guide',      desc: 'Step-by-step guide to check your SNGPL gas bill online using consumer number',    badge: 'Popular',   badgeColor: 'bg-blue-100 text-blue-700' },
  { href: '/consumer-number', icon: '🔢', title: 'Consumer Number Help',   desc: 'Find, recover, and understand your SNGPL consumer number format and usage',        badge: 'Essential', badgeColor: 'bg-green-100 text-green-700' },
  { href: '/duplicate-bill',  icon: '📄', title: 'Duplicate Bill',         desc: 'Download a duplicate SNGPL gas bill via portal, app, WhatsApp, or SMS instantly', badge: 'Guide',     badgeColor: 'bg-purple-100 text-purple-700' },
  { href: '/payment-guide',   icon: '💳', title: 'Payment Guide',          desc: 'Pay SNGPL bill via Easypaisa, JazzCash, HBL, ATM, or bank branch — full guide',   badge: 'How-To',    badgeColor: 'bg-orange-100 text-orange-700' },
  { href: '/calculator',      icon: '🧮', title: 'Gas Bill Calculator',    desc: 'Estimate your SNGPL bill using HHM units and current OGRA slab rates instantly',   badge: 'Tool',      badgeColor: 'bg-yellow-100 text-yellow-700' },
  { href: '/guides',          icon: '📚', title: 'All Guides',             desc: 'Complete library of SNGPL consumer guides, troubleshooting, and bill explanations', badge: 'Resource',  badgeColor: 'bg-red-100 text-red-700' },
];

const steps = [
  { n: '01', title: 'Find Consumer Number', desc: 'Locate your 10–13 digit SNGPL consumer number on the top of your printed gas bill or on your meter card.' },
  { n: '02', title: 'Enter the Number',     desc: 'Type your consumer number in the checker above — no login, no registration, nothing else required.' },
  { n: '03', title: 'Click Check Bill',     desc: 'Press the button and get instantly redirected to the official SNGPL bill portal with your number pre-filled.' },
];

const paymentMethods = [
  { icon: '📱', name: 'Easypaisa',     desc: 'Bill Payments → Gas → SNGPL' },
  { icon: '💚', name: 'JazzCash',      desc: 'Pay Bills → Gas Bills → SNGPL' },
  { icon: '🏦', name: 'HBL / UBL',    desc: 'Internet Banking → Utility Bills' },
  { icon: '🏧', name: 'ATM',          desc: 'Other Services → Bill Payment → Gas' },
  { icon: '🏪', name: 'Bank Branch',  desc: 'Over-counter with bill or consumer no.' },
  { icon: '💬', name: 'JazzCash USSD',desc: 'Dial *786# → Pay Bills → Gas' },
];

const faqItems = [
  { q: 'How do I check my SNGPL gas bill online?', a: 'Visit billchecker.sngpl.com.pk, enter your 10–13 digit consumer number (printed on your bill under "Consumer No."), and click "Get Bill." Your current bill with amount due, meter readings, and due date will appear. You can also use the SNGPL Consumer mobile app (Android/iOS) or send your consumer number via WhatsApp to SNGPL\'s official number.' },
  { q: 'What is an SNGPL consumer number?', a: 'Your SNGPL consumer number is a unique 10–13 digit account identifier assigned to your gas connection. It is printed on every gas bill in the top section labeled "Consumer No." or "Cust. No." This number is required for checking bills online, making payments via Easypaisa/JazzCash, and registering complaints.' },
  { q: 'What is the SNGPL helpline number?', a: 'The SNGPL helpline number is 1199, available 24 hours a day, 7 days a week. You can call for billing inquiries, complaint registration, gas emergency reports, and consumer number recovery. SNGPL\'s online self-service portal is at selfservice.sngpl.com.pk.' },
  { q: 'How do I pay my SNGPL bill online?', a: 'Pay via Easypaisa (Bill Payments → Gas → SNGPL), JazzCash (Pay Bills → Gas), HBL/UBL/MCB internet banking (Utility Payments → SNGPL), or any ATM (Bill Payment → Gas → SNGPL). Enter your consumer number to fetch your bill amount and confirm payment. JazzCash USSD *786# works on basic phones without internet.' },
  { q: 'How do I download a duplicate SNGPL bill?', a: 'Visit billchecker.sngpl.com.pk, enter your consumer number, and click "Download PDF" on the results page. Alternatively, use the SNGPL Consumer mobile app (stores 12 months of bills) or contact SNGPL helpline 1199. A duplicate bill is equally valid for bank payments and address verification.' },
  { q: 'What is HHM in SNGPL gas bill?', a: 'HHM stands for Hundred Heat Meter — the unit SNGPL uses to measure natural gas consumption. One HHM equals 100 cubic feet of gas. Your meter display shows cumulative HHM readings. The difference between current and previous month readings gives your HHM consumed, which is then applied to SNGPL\'s slab tariff to calculate your bill.' },
  { q: 'What is GIDC on my gas bill?', a: 'GIDC is the Gas Infrastructure Development Cess — a government levy charged at 10% of your base gas consumption amount. It funds gas infrastructure development projects across Pakistan. GIDC appears as a separate line item on your SNGPL bill and is applied before the 17% GST calculation.' },
  { q: 'What happens if I miss the SNGPL payment due date?', a: 'A 10% late payment surcharge is added to your next bill for overdue payment. If the bill remains unpaid for multiple months, SNGPL may issue a disconnection notice and eventually disconnect your gas supply. After disconnection, a reconnection fee applies. Always pay by the due date printed on your bill.' },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SNGPL Bill Check Hub',
        url: 'https://sngplbillcheck.pk',
        description: 'Pakistan SNGPL gas bill checker, guides, calculator and consumer help.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://sngplbillcheck.pk/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }) }} />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white/5 rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-blue-400/10 rounded-full animate-pulse-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Free · Official Redirects · No Data Stored
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5">
                Check Your SNGPL Gas Bill{' '}
                <span className="text-yellow-300">Online Instantly</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Consumer Number Guide, Duplicate Bill Help &amp; Payment Instructions — Pakistan&apos;s most complete Sui Northern Gas resource.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <Link href="#checker" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-base shadow-lg">
                  Check Bill Now ↓
                </Link>
                <Link href="/guides" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-base">
                  📚 View Guides
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-blue-100">
                {['Official Portal Redirect', 'No Registration', 'Completely Free'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div id="checker">
              <BillChecker />
            </div>
          </div>
        </div>
      </section>

      <AdUnit slot="1234567890" />

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-blue-100 text-blue-700 mb-3">Simple Process</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How to Check SNGPL Bill Online</h2>
            <p className="text-gray-500 mt-2">3 steps — takes less than 30 seconds</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative card text-center group hover:scale-105 transition-transform">
                {i < 2 && <div className="hidden sm:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-100 -translate-x-4 z-0" />}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-lg font-black shadow-lg">
                  {s.n}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ QUICK ACCESS CARDS ══════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-purple-100 text-purple-700 mb-3">Guides &amp; Tools</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Complete SNGPL Resource Hub</h2>
            <p className="text-gray-500 mt-2">Everything you need to manage your SNGPL gas account</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickCards.map(l => (
              <Link key={l.href} href={l.href}
                className="card group hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 no-underline">
                <span className="text-3xl mb-3 block">{l.icon}</span>
                <span className={`badge ${l.badgeColor} mb-2`}>{l.badge}</span>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{l.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{l.desc}</p>
                <span className="flex items-center gap-1 text-blue-600 text-xs font-semibold">
                  Read Guide <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdUnit slot="0987654321" />

      {/* ══════════════════════ ABOUT SNGPL — SEO CONTENT ══════════════════════ */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-4 prose-content">

          <div className="text-center mb-10">
            <span className="badge bg-blue-100 text-blue-700 mb-3">About SNGPL</span>
            <h2>What is SNGPL? Sui Northern Gas Pipelines Limited Explained</h2>
          </div>

          <p>Sui Northern Gas Pipelines Limited (SNGPL) is Pakistan&apos;s largest natural gas utility company, responsible for gas transmission and distribution across Punjab, Khyber Pakhtunkhwa (KPK), and Azad Kashmir. Established in 1963 and headquartered in Lahore, SNGPL operates the most extensive gas distribution network in the country, serving over 7 million consumers ranging from domestic households and commercial establishments to industrial facilities and CNG stations.</p>

          <p>As a regulated utility under the Oil and Gas Regulatory Authority (OGRA), SNGPL is required to maintain service quality, bill accuracy, and transparent consumer communication. Every SNGPL gas consumer receives a monthly bill detailing their gas consumption (measured in HHM — Hundred Heat Meters), applicable tariff slab rates, government taxes (GIDC and GST), and the total amount due. Understanding this bill and knowing how to access it quickly is essential for every Pakistani gas consumer.</p>

          <h2>How to Check Your SNGPL Gas Bill Online — Complete Guide</h2>

          <p>The SNGPL bill checking process has become significantly easier since the launch of the official digital portal. Today, consumers in Lahore, Rawalpindi, Islamabad, Faisalabad, Peshawar, and all other SNGPL service cities can check their gas bill in under a minute without visiting an office or waiting for the physical bill to arrive by post.</p>

          <h3>Method 1: Official SNGPL Bill Portal (Recommended)</h3>
          <p>The fastest and most reliable method is using the official SNGPL bill checking portal at <strong>billchecker.sngpl.com.pk</strong>. The process is straightforward:</p>
          <ol>
            <li>Open any web browser on your phone or computer</li>
            <li>Navigate to billchecker.sngpl.com.pk</li>
            <li>Enter your 10–13 digit SNGPL consumer number in the search field</li>
            <li>Click &quot;Get Bill&quot; or the search button</li>
            <li>View your current bill with all charge details, or download as PDF</li>
          </ol>

          <h3>Method 2: SNGPL Consumer Mobile App</h3>
          <p>The SNGPL Consumer App is available on both Google Play Store (Android) and Apple App Store (iOS). After registering with your consumer number and mobile OTP, you can view current bills, access 12 months of billing history, track payment status, and raise complaints — all from your smartphone. The app sends push notifications when new bills are generated, so you never miss a due date.</p>

          <h3>Method 3: WhatsApp Bill Service</h3>
          <p>SNGPL provides a WhatsApp-based bill inquiry service. Save the official SNGPL WhatsApp number (listed on sngpl.com.pk) and send your consumer number as a message. The automated system responds with your bill amount, billing period, and due date within seconds. This is ideal for quick balance checks without opening a browser.</p>

          <h3>Method 4: SMS Service</h3>
          <p>Send your consumer number via SMS to SNGPL&apos;s designated short code. You receive a text summary with your bill amount and due date. This method works without internet and is useful for consumers in areas with limited connectivity.</p>

          <h2>Understanding Your SNGPL Gas Bill Components</h2>

          <p>Your SNGPL monthly gas bill is a detailed statement. Understanding each line item helps you verify accuracy and plan your budget:</p>

          <h3>Consumer Information Section</h3>
          <p>The top section of your bill shows your consumer number, account name, connection address, meter number, reading dates, and connection type (domestic, commercial, or industrial). Always verify this information is correct — any discrepancy should be reported to SNGPL helpline 1199 immediately.</p>

          <h3>Meter Readings and HHM Consumed</h3>
          <p>Your bill shows the previous month&apos;s meter reading and the current month&apos;s reading. The difference between these two readings gives the HHM (Hundred Heat Meters) consumed. One HHM equals 100 cubic feet of natural gas. This consumption figure is then applied to SNGPL&apos;s approved tariff slabs to calculate your base gas charge.</p>

          <h3>SNGPL Gas Tariff Slabs (OGRA Approved)</h3>
          <p>SNGPL uses a progressive slab system approved by OGRA for domestic consumers. Low-usage consumers pay less per unit, while higher consumers pay progressively more. The current domestic slab structure is:</p>
          <ul>
            <li><strong>0–100 HHM:</strong> Flat charge of Rs. 200 per month</li>
            <li><strong>101–300 HHM:</strong> Rs. 130 per HHM (above 100)</li>
            <li><strong>301–500 HHM:</strong> Rs. 150 per HHM (above 300)</li>
            <li><strong>501–800 HHM:</strong> Rs. 170 per HHM (above 500)</li>
            <li><strong>801–1,200 HHM:</strong> Rs. 200 per HHM (above 800)</li>
            <li><strong>Above 1,200 HHM:</strong> Rs. 250 per HHM (above 1,200)</li>
          </ul>

          <h3>GIDC — Gas Infrastructure Development Cess</h3>
          <p>GIDC is a government levy charged at 10% of your base gas consumption amount. The revenue goes towards funding gas infrastructure development and pipeline expansion projects across Pakistan. It is a non-negotiable statutory charge that appears on every SNGPL bill as a separate line item.</p>

          <h3>GST — General Sales Tax</h3>
          <p>A 17% General Sales Tax is applied to the combined total of your base gas charges and GIDC. This is a federal tax collected by SNGPL on behalf of the Federal Board of Revenue (FBR). The GST rate is consistent across all SNGPL service areas.</p>

          <h3>Fixed Charges and Meter Rent</h3>
          <p>In addition to consumption-based charges, every SNGPL bill includes a small fixed monthly charge covering meter maintenance and infrastructure costs. This is charged regardless of how much gas you consume and is separate from the slab-based variable charges.</p>

          <h2>SNGPL Consumer Number — Everything You Need to Know</h2>

          <p>Your SNGPL consumer number is the most important identifier for your gas account. Without it, you cannot check your bill online, make digital payments, or register complaints through official channels. Here is everything you need to know:</p>

          <h3>What Does It Look Like?</h3>
          <p>SNGPL consumer numbers are 10 to 13 digits long and contain only numbers — no letters, spaces, or special characters. They appear on every printed gas bill in the top section under &quot;Consumer No.&quot; or &quot;Cust. No.&quot; The first digits encode your region (SNGPL zone), the middle digits identify your distribution circle, and the final digits are your unique sequential account identifier.</p>

          <h3>Where to Find Your Consumer Number</h3>
          <p>Your consumer number appears on: (1) the top of every gas bill, (2) your meter card affixed near the gas meter, (3) the SNGPL Consumer mobile app after registration, and (4) the SNGPL self-service portal. If you cannot find it anywhere, call SNGPL helpline 1199 with your CNIC and connection address for immediate assistance.</p>

          <h3>How to Recover a Lost Consumer Number</h3>
          <p>Call SNGPL helpline 1199 with your CNIC number and complete gas connection address. After identity verification, the representative provides your consumer number verbally. Alternatively, visit your nearest SNGPL Service Delivery Center in person with original CNIC. Previous Easypaisa or JazzCash bill payment receipts also contain the consumer number used.</p>

          <h2>How to Pay Your SNGPL Gas Bill — All Methods</h2>

          <p>SNGPL accepts bill payment through multiple convenient channels. You never need to visit a bank branch unless you prefer it. Here is a complete overview:</p>
        </div>

        {/* Payment Methods Grid */}
        <div className="max-w-4xl mx-auto px-4 mt-8 mb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentMethods.map(m => (
              <div key={m.name} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-2xl flex-shrink-0">{m.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{m.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/payment-guide" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
              View Complete Payment Guide →
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 prose-content">
          <h2>How to Download SNGPL Duplicate Bill</h2>

          <p>A duplicate SNGPL bill is an official reprint of your original gas billing statement. It is equally valid for payment at any bank, ATM, Easypaisa, or JazzCash. You may need a duplicate when your physical bill is lost, damaged, or never arrived by post — or when you need a utility bill as address proof.</p>

          <p>The quickest method is via the official portal: visit billchecker.sngpl.com.pk, enter your consumer number, and click &quot;Download PDF.&quot; The downloaded PDF is an official duplicate bill you can print or share digitally. The SNGPL Consumer mobile app provides access to 12 months of previous bills for download. For a physically stamped copy, visit your nearest SNGPL Service Delivery Center with your CNIC.</p>

          <Link href="/duplicate-bill" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800">Complete Duplicate Bill Guide →</Link>

          <h2>SNGPL Service Area — Cities and Regions Covered</h2>

          <p>SNGPL serves consumers across two major provinces and one federal territory of Pakistan. In <strong>Punjab</strong>, the service area includes major cities such as Lahore, Faisalabad, Rawalpindi, Gujranwala, Sialkot, Multan, Bahawalpur, Sargodha, Sahiwal, and dozens of smaller cities and towns. In <strong>Khyber Pakhtunkhwa (KPK)</strong>, SNGPL serves Peshawar, Abbottabad, Mardan, Swabi, Mansehra, Nowshera, and other cities. <strong>Islamabad</strong> (federal capital) is fully served by SNGPL with dedicated service delivery centers in sectors F, G, I, and H zones.</p>

          <p>SNGPL also serves <strong>Azad Kashmir</strong> in select areas. The total network spans hundreds of thousands of kilometres of transmission and distribution pipelines, making it the largest gas utility infrastructure in Pakistan.</p>

          <p>Each city has a dedicated SNGPL Service Delivery Center (SDC) where consumers can apply for new connections, resolve billing disputes, register complaints, request meter inspections, and handle connection transfers. The SNGPL helpline 1199 is available 24/7 for all service areas.</p>

          <h2>SNGPL Troubleshooting — Common Problems and Solutions</h2>

          <h3>Wrong Bill Amount</h3>
          <p>If your bill amount seems incorrect — significantly higher than usual or based on an estimated rather than actual reading — first compare your meter&apos;s current display reading with what is shown on the bill. If there is a discrepancy, call SNGPL helpline 1199 to request a meter inspection. SNGPL will send a technician to verify and adjust the bill if the reading was wrong. In the meantime, consider paying the undisputed portion &quot;under protest&quot; to avoid disconnection.</p>

          <h3>Payment Not Reflecting Online</h3>
          <p>Digital payments (Easypaisa, JazzCash, internet banking) typically reflect on SNGPL&apos;s system within 24–48 hours. If after 48 hours your payment still shows as unpaid, contact your payment channel (bank/wallet) with the transaction reference number to confirm it was forwarded to SNGPL. Then call SNGPL helpline 1199 with both your consumer number and transaction details for manual verification.</p>

          <h3>Gas Disconnection</h3>
          <p>If your gas has been disconnected for non-payment, pay all outstanding dues immediately through any payment channel. Call SNGPL helpline 1199 with your payment transaction ID — SNGPL will initiate reconnection within 1–3 working days after payment confirmation. A reconnection fee applies. Do not attempt to reconnect the gas supply yourself, as this is unsafe and illegal.</p>

          <h3>Gas Leakage Emergency</h3>
          <p>If you smell gas in your home or premises, immediately evacuate everyone without operating any electrical switches. Call SNGPL emergency helpline 1199 from outside the building. SNGPL emergency teams respond to gas leakages 24 hours a day. Do not re-enter until SNGPL confirms the premises are safe.</p>
        </div>
      </section>

      <AdUnit slot="1122334455" />

      {/* ══════════════════════ IMAGE BANNER ══════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="relative w-full h-56 md:h-72 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80"
            alt="Natural gas pipeline infrastructure in Pakistan — SNGPL distribution network"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center px-8 md:px-12">
            <div className="text-white max-w-lg">
              <h2 className="text-2xl md:text-3xl font-black mb-2">SNGPL — Serving 7+ Million Consumers</h2>
              <p className="text-blue-100 text-sm md:text-base mb-4">Sui Northern Gas Pipelines Limited covers Punjab, KPK, and Azad Kashmir — the largest gas distribution network in Pakistan.</p>
              <Link href="/guides" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                View All Guides →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FAQ ══════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge bg-green-100 text-green-700 mb-3">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2">Quick answers to the most common SNGPL consumer questions</p>
          </div>
          <div className="space-y-3">
            {faqItems.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{f.q}</span>
                  <span className="flex-shrink-0 w-5 h-5 text-blue-500 group-open:rotate-180 transition-transform duration-200 font-bold text-lg leading-none">▾</span>
                </summary>
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ STATS ══════════════════════ */}
      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { v: '7M+',    l: 'SNGPL Consumers' },
              { v: '10K+',   l: 'SEO Guide Pages' },
              { v: '100%',   l: 'Safe Redirects' },
              { v: '24/7',   l: 'Always Available' },
            ].map(s => (
              <div key={s.l} className="text-center p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-2xl font-black text-blue-700">{s.v}</div>
                <div className="text-xs text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Ready to Check Your SNGPL Bill?</h2>
            <p className="text-blue-100 mb-6 text-base max-w-lg mx-auto">Enter your consumer number above or go directly to the official SNGPL portal — free, instant, and 100% safe.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="#checker" className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
                Check Bill Now
              </Link>
              <a href="https://billchecker.sngpl.com.pk/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all">
                Official SNGPL Portal ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROGRAMMATIC PAGES GRID ══════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge bg-blue-100 text-blue-700 mb-3">City Guides</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">SNGPL Guides by City</h2>
            <p className="text-gray-500 mt-2">Specific guides for every city in SNGPL&apos;s service area</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/sngpl/bill-check',      label: '🔍 Bill Check Guides',      desc: 'City-specific online bill check' },
              { href: '/sngpl/consumer-number', label: '🔢 Consumer Number Guides',  desc: 'Find your account number by city' },
              { href: '/sngpl/duplicate-bill',  label: '📄 Duplicate Bill Guides',   desc: 'Download duplicate by city' },
              { href: '/sngpl/payment',         label: '💳 Payment Guides',          desc: 'Payment methods by city' },
              { href: '/sngpl/troubleshooting', label: '⚠️ Troubleshooting Guides', desc: 'Fix billing issues by city' },
              { href: '/sngpl/bill-check/lahore-check-online',      label: '📋 Lahore Bill Check',     desc: 'SNGPL Lahore online guide' },
              { href: '/sngpl/bill-check/islamabad-check-online',   label: '📋 Islamabad Bill Check',  desc: 'SNGPL Islamabad online guide' },
              { href: '/sngpl/bill-check/rawalpindi-check-online',  label: '📋 Rawalpindi Bill Check', desc: 'SNGPL Rawalpindi online guide' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="card hover:border-blue-200 hover:shadow-md transition-all no-underline">
                <div className="font-bold text-blue-700 text-sm mb-1">{l.label}</div>
                <div className="text-xs text-gray-500">{l.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
