import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SNGPL Bill Check Hub',
  description: 'Privacy Policy for SNGPL Bill Check Hub. Learn how we handle your data, what information we collect, and your rights as a user.',
  alternates: { canonical: 'https://checkgasbills.pk/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: May 25, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Who We Are</h2>
          <p>
            SNGPL Bill Check Hub (<strong>checkgasbills.pk</strong>) is an independent informational website that
            helps Pakistani gas consumers find their SNGPL gas bill, locate their consumer number, download
            duplicate bills, and understand their gas charges. We are not affiliated with or endorsed by Sui
            Northern Gas Pipelines Limited (SNGPL).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
          <h3 className="text-base font-semibold text-gray-700 mb-2">Information You Provide</h3>
          <p>
            When you use the Bill Checker tool on our site, you enter your SNGPL consumer number. <strong>We do
            not store, log, or transmit your consumer number to any server.</strong> The number is processed
            entirely in your browser and is only used to redirect you to the official SNGPL portal.
          </p>
          <h3 className="text-base font-semibold text-gray-700 mb-2 mt-4">Automatically Collected Data</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring URL</li>
            <li>IP address (anonymised)</li>
          </ul>
          <p className="mt-2">This data is collected via standard web analytics tools to improve the site.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To display relevant gas bill guides and city-specific information</li>
            <li>To understand which content is most helpful to visitors</li>
            <li>To improve website performance and usability</li>
            <li>To display contextual advertising (Google AdSense)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Cookies</h2>
          <p>
            Our website uses cookies to store your recent consumer number searches locally in your browser
            (localStorage). This data never leaves your device. We also use standard analytics and advertising
            cookies from third-party providers such as Google Analytics and Google AdSense.
          </p>
          <p className="mt-2">
            You can disable cookies in your browser settings at any time. Disabling cookies will not affect
            your ability to use the bill checker.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Third-Party Links</h2>
          <p>
            Our site contains links to external websites, including the official SNGPL portal
            (sngpl.com.pk). We are not responsible for the privacy practices or content of those websites.
            We recommend you review the privacy policy of any site you visit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Data Security</h2>
          <p>
            We do not collect or store sensitive personal data such as consumer numbers, CNIC numbers, or
            billing information on our servers. Our website is served over HTTPS to ensure all data
            transmitted between your browser and our server is encrypted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to children under 13. We do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Request access to any personal data we hold about you</li>
            <li>Request deletion of your data</li>
            <li>Opt out of analytics tracking by using browser privacy settings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be posted on this page with an
            updated &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">10. Contact</h2>
          <p>
            If you have questions about this privacy policy, please visit our{' '}
            <a href="/contact" className="text-marine-600 hover:underline">Contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
