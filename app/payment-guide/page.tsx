import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from '../components/BillChecker';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Bill Payment Guide — Easypaisa, JazzCash, HBL, ATM | 2025',
  description: 'Pay your SNGPL gas bill online via Easypaisa, JazzCash, HBL internet banking, ATM, or bank branch. Step-by-step guide for every payment method. Free.',
  alternates: { canonical: 'https://sngplbillcheck.pk/payment-guide' },
  openGraph: {
    title: 'SNGPL Gas Bill Payment Guide — All Methods 2025',
    description: 'Complete guide to paying your SNGPL bill: Easypaisa, JazzCash, HBL, UBL, MCB internet banking, ATM, bank branch. Avoid disconnection with timely payment.',
    url: 'https://sngplbillcheck.pk/payment-guide',
  },
};

const paymentMethods = [
  {
    icon: '📱', name: 'Easypaisa', badge: 'Most Popular', badgeColor: 'bg-green-100 text-green-700',
    steps: [
      'Open Easypaisa app and log in',
      'Tap "Bill Payments" → "Utilities" → "Gas" → "SNGPL"',
      'Enter your 10–13 digit consumer number',
      'Easypaisa fetches your bill amount automatically',
      'Verify amount, tap "Pay," enter PIN to confirm',
      'Save the SMS/receipt confirmation',
    ],
    note: 'Works on Telenor number. Small transaction fee may apply (Rs. 10–25).',
  },
  {
    icon: '💚', name: 'JazzCash', badge: 'Works Without Internet',  badgeColor: 'bg-emerald-100 text-emerald-700',
    steps: [
      'Open JazzCash app (or dial *786# on any Jazz/Warid number)',
      'Tap "Pay Bills" → "Gas Bills" → "SNGPL"',
      'Enter your consumer number',
      'Review the fetched bill amount',
      'Enter MPIN and tap "Pay" to confirm',
      'Keep the transaction confirmation SMS',
    ],
    note: 'USSD *786# works on basic feature phones without internet.',
  },
  {
    icon: '🏦', name: 'HBL / UBL / MCB Internet Banking', badge: 'Bank Transfer', badgeColor: 'bg-blue-100 text-blue-700',
    steps: [
      'Log in to your bank\'s mobile app or website',
      'Navigate to "Pay Bills" → "Utility Bills" → "Gas" → "SNGPL"',
      'Enter your SNGPL consumer number',
      'Review the bill amount fetched from SNGPL',
      'Confirm payment with your PIN or biometric',
      'Download or screenshot the payment receipt',
    ],
    note: 'Available on HBL Mobile, UBL Digital, MCB Mobile, Meezan, Allied Bank, Bank Alfalah, and most others.',
  },
  {
    icon: '🏧', name: 'ATM Payment', badge: 'Cash Option',  badgeColor: 'bg-purple-100 text-purple-700',
    steps: [
      'Insert debit card at any major bank ATM and enter PIN',
      'Select "Other Services" → "Bill Payment" → "Utility Bills"',
      'Choose "Gas" → "SNGPL"',
      'Enter your consumer number using the ATM keypad',
      'Confirm the bill amount displayed',
      'Complete the transaction and collect the printed receipt',
    ],
    note: 'Keep the printed ATM receipt until payment reflects on SNGPL portal (24–72 hours).',
  },
  {
    icon: '🏪', name: 'Bank Branch / Counter', badge: 'Walk-In',  badgeColor: 'bg-orange-100 text-orange-700',
    steps: [
      'Visit any branch of HBL, UBL, MCB, or other banks',
      'Bring your SNGPL bill (original or downloaded duplicate)',
      'Approach the bill payment or utility counter',
      'Present the bill — teller scans barcode or enters consumer number',
      'Pay the bill amount in cash or via cheque',
      'Receive a stamped payment receipt',
    ],
    note: 'Some banks charge a small service fee for over-the-counter utility payments.',
  },
  {
    icon: '🏬', name: 'SNGPL Franchise Centers', badge: 'Cash Payment', badgeColor: 'bg-yellow-100 text-yellow-700',
    steps: [
      'Visit an authorized SNGPL franchise or collection center in your city',
      'Provide your consumer number or physical bill',
      'Pay the displayed amount in cash',
      'Receive an official franchise payment receipt',
      'Payment reflects on SNGPL system within 24–48 hours',
    ],
    note: 'Franchise locations are listed on sngpl.com.pk. Check operating hours before visiting.',
  },
];

const faqs = [
  { q: 'What is the last date to pay SNGPL bill?', a: 'The due date is printed on your bill — typically 15–20 days after the bill generation date. After the due date, a 10% late payment surcharge is added to your next bill. Check your latest bill on billchecker.sngpl.com.pk for your exact due date.' },
  { q: 'How long does SNGPL payment take to reflect online?', a: 'Easypaisa, JazzCash, and internet banking payments typically reflect within 24–48 hours. ATM and bank branch payments may take 48–72 hours. If not reflected after 72 hours, call your payment channel with the transaction ID, then call SNGPL helpline 1199.' },
  { q: 'What happens if I pay the wrong amount?', a: 'If you overpay, the excess becomes an advance credit on your next bill. If you underpay, the remaining balance becomes an arrear with a 10% late surcharge if the due date has passed. Contact SNGPL helpline 1199 for significant overpayment refunds.' },
  { q: 'Can I pay multiple months at once?', a: 'Yes. Your current bill shows all outstanding arrears from previous months in the total amount due. Paying this total clears all dues. You can also make advance payments for future bills.' },
  { q: 'My payment is not reflecting on SNGPL portal. What do I do?', a: 'Wait 48 hours. Then: (1) Check your payment app transaction history to confirm it shows "Successful." (2) Call your bank/Easypaisa/JazzCash with the transaction reference number. (3) Call SNGPL helpline 1199 with your consumer number and transaction details for manual update.' },
  { q: 'Can I pay SNGPL bill via JazzCash without internet?', a: 'Yes. Dial *786# on any Jazz or Warid mobile number, select "Pay Bills" → "Gas Bills" → enter SNGPL consumer number → follow prompts → confirm with MPIN. This USSD service works on basic feature phones without internet.' },
  { q: 'Is there a fee for paying SNGPL bill via Easypaisa?', a: 'Easypaisa and JazzCash may charge a small transaction fee (typically Rs. 10–25) for utility bill payments. Internet banking payments are often free. The fee is shown before you confirm the payment — check before proceeding.' },
];

export default function PaymentGuidePage() {
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
            <span className="text-white font-medium">Payment Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Gas Bill Payment Guide</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Pay via Easypaisa, JazzCash, internet banking, ATM, or bank branch. Complete step-by-step guide for every payment method.</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {['Easypaisa', 'JazzCash', 'HBL', 'UBL', 'MCB', 'ATM', 'Bank Branch'].map(m => (
              <span key={m} className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Check bill first */}
      <section className="bg-blue-50 border-b border-blue-100 py-7 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-blue-700 font-semibold mb-1">Step 1: Check your bill amount before paying</p>
          <p className="text-xs text-blue-500 mb-3">Enter consumer number to see the exact amount due:</p>
          <BillChecker compact />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 prose-content">
        <h2>Before You Pay — Check Your Bill First</h2>
        <p>Always verify your current bill amount on <strong>billchecker.sngpl.com.pk</strong> before making a payment. This ensures you pay the correct amount and confirms the payment due date. Your bill shows: total amount due (including any arrears), due date, and the consumer number to use for the payment channel.</p>

        <h2>Important Payment Tips</h2>
        <ul>
          <li>Pay <strong>before the due date</strong> to avoid a 10% late surcharge on your next bill</li>
          <li>Always <strong>save your payment receipt</strong> (screenshot, SMS, or printed) until payment reflects on SNGPL portal</li>
          <li>Payments typically take <strong>24–72 hours</strong> to appear on SNGPL&apos;s system</li>
          <li>Use your <strong>consumer number</strong> (not meter number) for all payment channels</li>
          <li>If you have multiple connections, pay each one separately with its own consumer number</li>
        </ul>
      </div>

      {/* Payment Method Cards */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 px-0">All SNGPL Payment Methods — Step by Step</h2>
        <div className="space-y-5">
          {paymentMethods.map((m, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{m.icon}</span>
                  <h3 className="font-bold text-gray-900 text-lg">{m.name}</h3>
                </div>
                <span className={`badge ${m.badgeColor} text-xs`}>{m.badge}</span>
              </div>
              <ol className="space-y-2 mb-4">
                {m.steps.map((step, si) => (
                  <li key={si} className="flex gap-2.5 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">{si + 1}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5 text-xs text-amber-800">
                💡 {m.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdUnit slot="4455667788" className="max-w-4xl mx-auto px-4" />

      <div className="max-w-4xl mx-auto px-4 prose-content pb-6">

        <h2>What Happens If You Don&apos;t Pay Your SNGPL Bill on Time?</h2>
        <p>Missing your SNGPL payment due date has escalating consequences:</p>

        <h3>After Due Date — Late Surcharge</h3>
        <p>A <strong>10% late payment surcharge</strong> on the gas consumption amount is automatically added to your next bill. This is non-negotiable and applies to all SNGPL consumers.</p>

        <h3>30+ Days Overdue — Demand Notice</h3>
        <p>SNGPL issues a formal demand notice to your connection address requesting immediate payment. This is the final warning before disconnection action is initiated.</p>

        <h3>Continued Non-Payment — Gas Disconnection</h3>
        <p>SNGPL engineers visit your premises and physically disconnect the gas supply. You must then pay all outstanding dues, late surcharges, and a reconnection fee before service is restored. Reconnection typically takes 1–3 working days after payment confirmation.</p>

        <h3>How to Avoid Disconnection</h3>
        <p>Set a monthly mobile reminder 5 days before your bill due date. Enable auto-payment in Easypaisa or JazzCash where available. If you are facing financial difficulty, call SNGPL helpline 1199 to inquire about payment plans or due date extensions before disconnection occurs.</p>

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
            { href: '/',                label: '🔍 Check Bill Amount',  desc: 'View your current bill first' },
            { href: '/duplicate-bill',  label: '📄 Duplicate Bill',     desc: 'Download bill PDF' },
            { href: '/consumer-number', label: '🔢 Consumer Number',    desc: 'Find your account number' },
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
