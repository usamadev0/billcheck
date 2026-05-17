import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from '../components/BillChecker';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Consumer Number — Find, Recover & Understand | Complete Guide',
  description: 'Find your SNGPL consumer number on your gas bill, meter card, or via helpline 1199. Format explained, recovery steps, and all usage methods. Free guide.',
  alternates: { canonical: 'https://sngplbillcheck.pk/consumer-number' },
  openGraph: {
    title: 'SNGPL Consumer Number Guide — Find, Recover & Understand',
    description: 'Everything about your SNGPL consumer number: where to find it, format, recovery options and usage for bill check, payment, and complaints.',
    url: 'https://sngplbillcheck.pk/consumer-number',
  },
};

const faqs = [
  { q: 'What is an SNGPL consumer number?', a: 'An SNGPL consumer number is a unique 10–13 digit identifier assigned to each gas connection. It links your account to SNGPL\'s billing system and is required for checking bills online, making digital payments, and registering complaints.' },
  { q: 'Where is the consumer number on my SNGPL bill?', a: 'Your consumer number is printed at the top section of your gas bill in a box labeled "Consumer No." or "Cust. No." It appears before your name and address and is typically 10 to 13 digits long.' },
  { q: 'How do I recover a lost SNGPL consumer number?', a: 'Call SNGPL helpline 1199 with your CNIC and connection address. The representative verifies your identity and provides your consumer number. Alternatively, visit your nearest SNGPL SDC with original CNIC, or check old Easypaisa/JazzCash payment receipts.' },
  { q: 'Is the consumer number the same as the meter number?', a: 'No. The consumer number identifies your billing account (stays constant). The meter number identifies the physical meter device (changes if the meter is replaced). Always use the consumer number for bill checking and payments.' },
  { q: 'How many digits is an SNGPL consumer number?', a: 'SNGPL consumer numbers are 10 to 13 digits long. Most connections have 10 or 11 digits. Enter the number exactly as printed on your bill — no spaces, hyphens, or leading zeros added or removed.' },
  { q: 'Can I use someone else\'s consumer number to check their bill?', a: 'Yes. The SNGPL portal only requires the consumer number — no password needed. This lets family members, tenants, and agents check or pay bills. However, account changes require the registered owner\'s presence and CNIC.' },
  { q: 'What if my consumer number shows "not found" on the portal?', a: 'Verify you entered all digits correctly. If the error persists, your account may be updating after a new connection or transfer. Call SNGPL helpline 1199 or visit your nearest SNGPL office.' },
  { q: 'Does my consumer number change when I move house?', a: 'Yes. Consumer numbers are tied to the connection address, not the person. When you move, you use the new property\'s existing consumer number. For a new connection at a new address, SNGPL assigns a new consumer number.' },
];

export default function ConsumerNumberPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white font-medium">Consumer Number</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Consumer Number — Complete Guide</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Find your consumer number, understand its format, recover if lost, and use it across all SNGPL digital services.</p>
        </div>
      </section>

      {/* Quick bill check */}
      <section className="bg-blue-50 border-b border-blue-100 py-7 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-blue-700 font-semibold mb-3">Have your consumer number? Check your bill instantly:</p>
          <BillChecker compact />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 prose-content">

        <h2>What is an SNGPL Consumer Number?</h2>
        <p>Your SNGPL consumer number (also called account number, customer number, or Cust. No.) is a unique numeric identifier permanently linked to your gas connection address. SNGPL assigns this number when a new gas connection is installed. It encodes information about your service region, distribution circle, and unique account within that circle.</p>
        <p>Without your consumer number, you cannot access any of SNGPL&apos;s digital services: bill portal, mobile app, Easypaisa payment, JazzCash payment, internet banking utility payments, or online complaint registration. It is the single most important piece of information for every SNGPL consumer.</p>

        <h2>Where to Find Your SNGPL Consumer Number</h2>

        <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
          {[
            { icon: '📄', title: 'On Your Gas Bill', desc: 'Printed at the top of every monthly bill under "Consumer No." or "Cust. No." — the most reliable source.' },
            { icon: '📋', title: 'On Your Meter Card', desc: 'A small card affixed near your gas meter at installation shows the consumer number and meter details.' },
            { icon: '📱', title: 'SNGPL Mobile App', desc: 'After registration, your consumer number appears under "My Connections" or "Account" in the SNGPL Consumer app.' },
            { icon: '📞', title: 'Via Helpline 1199', desc: 'Call 1199 with your CNIC and address — the representative looks up and provides your consumer number after verification.' },
          ].map(m => (
            <div key={m.title} className="flex gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <span className="text-2xl flex-shrink-0">{m.icon}</span>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">{m.title}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2>Understanding the Consumer Number Format</h2>
        <p>SNGPL consumer numbers are 10 to 13 digits long. The number is structured as follows:</p>
        <ul>
          <li><strong>First 2–3 digits:</strong> Region/zone identifier (e.g., Lahore zone, Rawalpindi zone, Peshawar zone)</li>
          <li><strong>Next 2–3 digits:</strong> Distribution circle code within that region</li>
          <li><strong>Remaining digits:</strong> Sequential account number within the distribution circle</li>
        </ul>
        <p>The consumer number is different from your meter number. The meter number (printed separately on the bill) identifies the physical gas meter device. If SNGPL replaces your meter, the meter number changes but your consumer number stays the same.</p>

        <h2>How to Recover a Lost SNGPL Consumer Number</h2>
        <p>If you have lost your consumer number and do not have any old bills, use one of these recovery methods:</p>

        <h3>Method 1: Call SNGPL Helpline 1199</h3>
        <p>This is the fastest method. Call 1199 (24/7) and have ready: your full name as registered on the SNGPL account, your complete gas connection address including house number, street, and city, and your CNIC number. After identity verification, the representative will provide your consumer number verbally.</p>

        <h3>Method 2: Visit SNGPL Service Delivery Center</h3>
        <p>Visit your nearest SNGPL SDC during working hours (Monday–Friday, 9 AM–5 PM) with your original CNIC. If you are a tenant, bring your tenancy agreement or a recent utility bill with the same address. SNGPL staff can retrieve and print your consumer number from their records.</p>

        <h3>Method 3: Check Old Payment History</h3>
        <p>Your consumer number appears in: previous Easypaisa payment receipts (check Easypaisa app transaction history), JazzCash bill payment history, bank internet banking payment history, old SMS receipts from SNGPL, and saved screenshots of the SNGPL bill portal.</p>

        <h3>Method 4: SNGPL Self-Service Portal</h3>
        <p>Visit selfservice.sngpl.com.pk and use the consumer number lookup feature if you have previously registered an account, or submit an inquiry through the contact form with your address and CNIC details.</p>

        <AdUnit slot="2233445566" className="my-8" />

        <h2>Using Your Consumer Number for SNGPL Services</h2>

        <div className="not-prose grid sm:grid-cols-2 gap-3 my-6">
          {[
            { service: 'Bill Check Online', url: 'billchecker.sngpl.com.pk', action: 'Enter consumer number in search field' },
            { service: 'Easypaisa Payment', url: 'Easypaisa App', action: 'Bill Payments → Gas → SNGPL → consumer number' },
            { service: 'JazzCash Payment', url: 'JazzCash App / *786#', action: 'Pay Bills → Gas → SNGPL → consumer number' },
            { service: 'Internet Banking', url: 'HBL / UBL / MCB App', action: 'Utility Payments → Gas → SNGPL → consumer number' },
            { service: 'Complaint Registration', url: 'selfservice.sngpl.com.pk', action: 'Register with consumer number + mobile OTP' },
            { service: 'SNGPL Mobile App', url: 'Play Store / App Store', action: 'Register with consumer number + mobile OTP' },
          ].map(s => (
            <div key={s.service} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="font-bold text-blue-700 text-sm mb-0.5">{s.service}</div>
              <div className="text-xs text-gray-500 mb-1">{s.url}</div>
              <div className="text-xs text-gray-700">{s.action}</div>
            </div>
          ))}
        </div>

        <h2>Consumer Number Security Tips</h2>
        <p>Your SNGPL consumer number is printed on your bills and is semi-public — it is required for accessing your bill information but not for making changes to your account. However, exercise caution:</p>
        <ul>
          <li>Do not share your consumer number publicly on social media</li>
          <li>Verify that any website asking for your consumer number is the official SNGPL portal (billchecker.sngpl.com.pk) or a trusted utility guide site</li>
          <li>SNGPL will never ask for your consumer number via unsolicited calls or SMS for &quot;verification&quot;</li>
          <li>For account changes (name, address, connection transfer), you must be present in person with CNIC</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 mt-6">
          {faqs.map((f, i) => (
            <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-white hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm pr-4">{f.q}</span>
                <span className="flex-shrink-0 text-blue-500 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="p-4 pt-0 bg-white border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-3 gap-4 text-center border border-gray-200">
          {[
            { href: '/',               label: '🔍 Check Bill Now',    desc: 'Official portal redirect' },
            { href: '/duplicate-bill', label: '📄 Duplicate Bill',    desc: 'Download your bill PDF' },
            { href: '/payment-guide',  label: '💳 Payment Guide',     desc: 'Easypaisa, JazzCash & more' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all no-underline group">
              <div className="font-bold text-blue-700 group-hover:text-blue-800">{l.label}</div>
              <div className="text-xs text-gray-500 mt-1">{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
