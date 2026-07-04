import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | SNGPL Bill Check Hub',
  description: 'Terms of Use for SNGPL Bill Check Hub. Read our terms before using the gas bill check, calculator, and guide services.',
  alternates: { canonical: 'https://www.checkgasbills.pk/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: May 25, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using SNGPL Bill Check Hub (<strong>checkgasbills.pk</strong>), you accept and
            agree to be bound by these Terms of Use. If you do not agree, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Nature of Service</h2>
          <p>
            SNGPL Bill Check Hub is an <strong>independent, informational website</strong>. We are not
            affiliated with, endorsed by, or officially connected to Sui Northern Gas Pipelines Limited
            (SNGPL) or any Pakistani government agency.
          </p>
          <p className="mt-2">
            Our service provides guides, calculators, and a redirect tool that directs users to the
            <strong> official SNGPL portal</strong> at sngpl.com.pk. We do not process bill payments,
            store consumer data, or represent SNGPL in any capacity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Accuracy of Information</h2>
          <p>
            We make every effort to ensure the information on this site is accurate and up to date. However,
            SNGPL tariff rates, slab structures, taxes, and portal URLs are subject to change by SNGPL and
            regulatory authorities. Always verify your bill details directly on the official SNGPL portal.
          </p>
          <p className="mt-2">
            The Gas Bill Calculator on this site provides <strong>estimates only</strong>. Actual bills may
            differ based on current tariffs, applicable surcharges, and individual account details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Permitted Use</h2>
          <p>You may use this website for personal, non-commercial purposes. You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scrape, copy, or reproduce our content without permission</li>
            <li>Use automated tools to crawl or access the site in a way that burdens our infrastructure</li>
            <li>Attempt to reverse-engineer or tamper with the website</li>
            <li>Use the site for any unlawful purpose</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Intellectual Property</h2>
          <p>
            All content on this website, including text, guides, and tool interfaces, is owned by SNGPL
            Bill Check Hub unless otherwise noted. You may not reproduce or republish any content without
            prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Limitation of Liability</h2>
          <p>
            SNGPL Bill Check Hub is provided &ldquo;as is&rdquo; without warranties of any kind. We are not
            liable for any losses, damages, or inaccuracies arising from your use of this site, including
            reliance on calculator estimates or guide content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">7. External Links</h2>
          <p>
            This site contains links to external sites including the official SNGPL portal. We are not
            responsible for the content, availability, or policies of those external websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Continued use of the site after changes
            constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Governing Law</h2>
          <p>
            These terms are governed by the laws of Pakistan. Any disputes shall be subject to the
            jurisdiction of Pakistani courts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact</h2>
          <p>
            Questions about these terms? Visit our{' '}
            <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
