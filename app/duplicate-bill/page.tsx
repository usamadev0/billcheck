import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from '../components/BillChecker';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Duplicate Bill Download — Portal, App, WhatsApp & SMS Guide',
  description: 'Download SNGPL duplicate gas bill instantly via official portal, mobile app, WhatsApp or SMS. Step-by-step guide for all methods. Free — no registration.',
  alternates: { canonical: 'https://sngplbillcheck.pk/duplicate-bill' },
  openGraph: {
    title: 'SNGPL Duplicate Bill Download — All Methods Guide',
    description: 'Get your SNGPL duplicate bill in minutes. Portal PDF download, mobile app, WhatsApp service, and office methods all explained step by step.',
    url: 'https://sngplbillcheck.pk/duplicate-bill',
  },
};

const methods = [
  {
    icon: '🌐', title: 'Official Portal (Fastest)', steps: [
      'Open billchecker.sngpl.com.pk in any browser',
      'Enter your 10–13 digit consumer number',
      'Click "Get Bill" to view your current bill',
      'Click "Download PDF" or "Print Bill" button',
      'Save or print the official duplicate PDF',
    ],
  },
  {
    icon: '📱', title: 'SNGPL Mobile App', steps: [
      'Download "SNGPL Consumer" from Play Store or App Store',
      'Register with consumer number + mobile OTP',
      'Tap "My Bills" or "Bill History"',
      'Select the billing month you need',
      'Tap "Download" to save PDF to your phone',
    ],
  },
  {
    icon: '💬', title: 'WhatsApp Service', steps: [
      'Find official SNGPL WhatsApp number on sngpl.com.pk',
      'Save the number to your phone contacts',
      'Send your consumer number as a WhatsApp message',
      'Receive bill summary and download link instantly',
      'Download PDF from the link provided',
    ],
  },
  {
    icon: '📨', title: 'SMS Service', steps: [
      'Find SNGPL\'s SMS short code on sngpl.com.pk',
      'Send your consumer number via SMS to that code',
      'Receive text with bill amount, period, and due date',
      'Note: SMS provides summary only — no PDF download',
      'Use portal or app for full PDF duplicate',
    ],
  },
];

const faqs = [
  { q: 'Is a duplicate SNGPL bill valid for bank payment?', a: 'Yes. A duplicate SNGPL bill downloaded from the official portal, mobile app, or printed at the SNGPL office is equally valid for payment at any bank branch, ATM, Easypaisa, JazzCash, or SNGPL franchise. The barcode and payment reference number are the same as the original.' },
  { q: 'Is there a fee for downloading a duplicate SNGPL bill online?', a: 'No. Downloading your duplicate SNGPL bill from billchecker.sngpl.com.pk or the SNGPL mobile app is completely free. The SNGPL office may charge a nominal fee for physically printed and stamped copies.' },
  { q: 'How do I get a duplicate bill for previous months?', a: 'The SNGPL Consumer mobile app stores up to 12 months of billing history — tap "My Bills" and select any previous month. The official portal (billchecker.sngpl.com.pk) typically shows the most recent bill only. For older bills, visit your SNGPL Service Delivery Center with your CNIC.' },
  { q: 'What does "duplicate" mean on an SNGPL bill?', a: '"Duplicate" simply means it is a reprint or digital copy of the original. It contains identical information and is legally and practically equivalent to the original bill for all purposes.' },
  { q: 'My bill is overdue and I lost the original. What should I do?', a: 'Download a duplicate immediately from billchecker.sngpl.com.pk and pay as soon as possible. A 10% late surcharge will be on your next bill for the overdue period, but paying now stops further accumulation. Call SNGPL helpline 1199 if you need a payment extension.' },
  { q: 'Can I use a duplicate bill as address proof?', a: 'Yes. An SNGPL gas bill (original or official duplicate) is widely accepted as address verification by banks, educational institutions, and government offices. For legal proceedings or visa applications, a physically stamped duplicate from the SNGPL office is recommended.' },
];

export default function DuplicateBillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Download SNGPL Duplicate Bill',
        description: 'Step-by-step guide to download a duplicate SNGPL gas bill online via portal, mobile app, WhatsApp, or SMS.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Open Official Portal', text: 'Go to billchecker.sngpl.com.pk in any browser.' },
          { '@type': 'HowToStep', position: 2, name: 'Enter Consumer Number', text: 'Type your 10–13 digit consumer number and click Get Bill.' },
          { '@type': 'HowToStep', position: 3, name: 'Download PDF', text: 'Click the Download PDF or Print Bill button to save your duplicate.' },
        ],
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white font-medium">Duplicate Bill</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Duplicate Bill Download</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Lost your gas bill? Get an official duplicate in under a minute — via portal, app, WhatsApp, or SMS. No need to visit the office.</p>
        </div>
      </section>

      {/* Quick checker */}
      <section className="bg-blue-50 border-b border-blue-100 py-7 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-blue-700 font-semibold mb-3">Check & download your bill instantly:</p>
          <BillChecker compact />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 prose-content">

        <h2>What is an SNGPL Duplicate Bill?</h2>
        <p>A duplicate SNGPL bill is an official reprint of your gas billing statement. It contains identical information to your original printed bill: consumer number, account details, meter readings (previous and current), HHM units consumed, slab-wise charge calculation, GIDC, GST, total amount due, and the payment due date with the payment slip barcode.</p>
        <p>A duplicate bill is equally valid for all purposes — bank payment, franchise payment, ATM payment, Easypaisa/JazzCash payment, and address verification. There is no legal or practical difference between an original and a duplicate SNGPL bill.</p>

        <h2>Why You Might Need a Duplicate Bill</h2>
        <ul>
          <li>Physical bill was lost, damaged, or not delivered by post</li>
          <li>You need a utility bill as address proof for bank, institution, or government office</li>
          <li>You want to pay at a bank branch but don&apos;t have the printed bill</li>
          <li>You need records for accounting, tax filing, or audit purposes</li>
          <li>You want to verify the bill amount before paying</li>
          <li>You are disputing a billing amount and need the official document</li>
        </ul>

        <h2>All Methods to Get SNGPL Duplicate Bill</h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid sm:grid-cols-2 gap-6">
          {methods.map((m, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{m.icon}</span>
                <h3 className="font-bold text-gray-900">{m.title}</h3>
              </div>
              <ol className="space-y-2">
                {m.steps.map((step, si) => (
                  <li key={si} className="flex gap-2.5 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">{si + 1}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <AdUnit slot="3344556677" className="max-w-4xl mx-auto px-4" />

      <div className="max-w-4xl mx-auto px-4 prose-content pb-6">

        <h2>Understanding Your Duplicate Bill — What Each Section Means</h2>
        <p>When you download or print your SNGPL duplicate bill, here is what each section contains:</p>

        <h3>Bill Header</h3>
        <p>Shows the SNGPL logo, billing date, billing period (from/to dates), and a &quot;Duplicate&quot; watermark indicating it is a reprint rather than the original postal copy.</p>

        <h3>Consumer Information Block</h3>
        <p>Lists your consumer number, account owner name, connection address, meter number, connection type (domestic/commercial), and distribution circle code. Verify this information is correct — discrepancies should be reported to SNGPL helpline 1199.</p>

        <h3>Meter Readings and Consumption</h3>
        <p>Shows previous month reading, current month reading, reading date, and HHM (Hundred Heat Meters) consumed — the difference between the two readings. If the reading shows &quot;E&quot;, it was estimated rather than actual; this can be disputed by calling 1199.</p>

        <h3>Charge Breakdown</h3>
        <p>Lists: fixed meter charge, slab-wise variable gas charges, GIDC (10%), and GST (17%) — each as separate line items. This breakdown allows you to verify the bill calculation using our <Link href="/calculator">SNGPL gas bill calculator</Link>.</p>

        <h3>Payment Slip</h3>
        <p>The lower portion contains the payment slip with a barcode and 17-digit payment reference. This is used by bank tellers and ATMs to process your payment. Make sure the barcode is clearly printed or the digits are legible if paying at a bank branch.</p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 mt-4">
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

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-3 gap-4 text-center border border-gray-200">
          {[
            { href: '/',                label: '🔍 Check Bill Now',     desc: 'Official portal redirect' },
            { href: '/consumer-number', label: '🔢 Consumer Number',    desc: 'Find your account number' },
            { href: '/payment-guide',   label: '💳 Payment Guide',      desc: 'All payment methods' },
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
