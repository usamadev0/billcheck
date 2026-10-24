import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | SNGPL Bill Check Hub',
  description: 'Contact SNGPL Bill Check Hub. For SNGPL billing queries, contact SNGPL directly at 1199. For website feedback, use the details on this page.',
  alternates: { canonical: 'https://checkgasbills.pk/contact' },
  robots: { index: true, follow: true },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact SNGPL Bill Check Hub',
  url: 'https://checkgasbills.pk/contact',
  isPartOf: { '@id': 'https://checkgasbills.pk/#website' },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      <div className="bg-gradient-to-br from-marine-600 to-marine-500 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
          <p className="text-marine-100 text-lg">Questions, feedback, or SNGPL help</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

        {/* SNGPL Official Contact — most important */}
        <section className="bg-marine-100 border border-marine-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-marine-900 mb-3">SNGPL Official Contact</h2>
          <p className="text-marine-800 mb-4 text-sm">
            For billing disputes, meter issues, new connections, or official SNGPL queries — contact SNGPL
            directly. We cannot assist with official billing matters.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-xl p-4 border border-marine-100">
              <div className="font-semibold text-gray-700 mb-1">📞 SNGPL Helpline</div>
              <a href="tel:1199" className="text-marine-600 font-bold text-xl hover:underline">1199</a>
              <div className="text-gray-400 text-xs mt-1">24/7 customer service</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-marine-100">
              <div className="font-semibold text-gray-700 mb-1">🌐 Official Website</div>
              <a href="https://www.sngpl.com.pk" target="_blank" rel="noopener noreferrer"
                className="text-marine-600 hover:underline break-all">sngpl.com.pk</a>
              <div className="text-gray-400 text-xs mt-1">Bill portal &amp; self-service</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-marine-100">
              <div className="font-semibold text-gray-700 mb-1">💬 WhatsApp</div>
              <span className="text-gray-700">Available on 1199</span>
              <div className="text-gray-400 text-xs mt-1">Check SNGPL website for updates</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-marine-100">
              <div className="font-semibold text-gray-700 mb-1">🏢 Self-Service Portal</div>
              <a href="https://selfservice.sngpl.com.pk" target="_blank" rel="noopener noreferrer"
                className="text-marine-600 hover:underline break-all">selfservice.sngpl.com.pk</a>
              <div className="text-gray-400 text-xs mt-1">Online account management</div>
            </div>
          </div>
        </section>

        {/* About this website */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">About This Website</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            SNGPL Bill Check Hub is an <strong>independent informational website</strong>. We are not
            affiliated with SNGPL. We cannot access your account, process bill payments, or resolve
            billing disputes. For all official matters, please contact SNGPL at <strong>1199</strong>.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            For website feedback — broken links, incorrect information, or suggestions — you can reach us
            by email. We aim to respond within 2–3 business days.
          </p>
        </section>

        {/* Quick links */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: 'How do I check my SNGPL bill online?', href: '/bill-check' },
              { q: 'Where is my SNGPL consumer number?', href: '/consumer-number' },
              { q: 'How do I download a duplicate SNGPL bill?', href: '/duplicate-bill' },
              { q: 'How is my gas bill calculated?', href: '/calculator' },
              { q: 'What are GIDC and other taxes on my gas bill?', href: '/sngpl-taxes-explained' },
            ].map(item => (
              <a key={item.href} href={item.href}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-marine-300 hover:bg-marine-100 transition-colors group">
                <span className="text-gray-700 text-sm group-hover:text-marine-700">{item.q}</span>
                <span className="text-marine-500 text-xs shrink-0 ml-2">Read guide →</span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
