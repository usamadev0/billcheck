import type { Metadata } from 'next';
import Link from 'next/link';
import { CITIES } from '../../../lib/seo-data';

export const metadata: Metadata = {
  title: 'SNGPL City Guides — All 44 Cities in Punjab, KPK & Islamabad 2025',
  description: 'Complete SNGPL consumer guides for all 44 cities. Bill check, consumer number, payment, duplicate bill and troubleshooting guides for every SNGPL city in Pakistan.',
  alternates: { canonical: 'https://sngplbillcheck.pk/sngpl/cities' },
};

const byProvince: Record<string, typeof CITIES> = {};
for (const city of CITIES) {
  const prov = city.province === 'ICT' ? 'Federal (ICT)' : city.province;
  if (!byProvince[prov]) byProvince[prov] = [];
  byProvince[prov].push(city);
}

export default function CitiesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'All City Guides', item: 'https://sngplbillcheck.pk/sngpl/cities' },
        ],
      }) }} />

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">City Guides</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL City Guides — All 44 Cities</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Complete SNGPL consumer resource hub for every city in Punjab, Khyber Pakhtunkhwa, and Islamabad Capital Territory.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['44 Cities', 'Punjab', 'KPK', 'ICT', '10,000+ Guides'].map(t => (
              <span key={t} className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {Object.entries(byProvince).map(([province, cities]) => (
          <section key={province} className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full block" />
              {province}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {cities.map(city => (
                <Link
                  key={city.slug}
                  href={`/sngpl/cities/${city.slug}`}
                  className="block p-4 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-xl transition-all no-underline group"
                >
                  <div className="font-bold text-gray-900 text-sm group-hover:text-blue-700 transition-colors mb-1">{city.name}</div>
                  <div className="text-xs text-gray-400 mb-2">{city.division}</div>
                  <div className="text-xs font-semibold text-blue-600">{city.consumers}</div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Check Your SNGPL Bill</h2>
          <p className="text-blue-700 text-sm mb-4">Enter consumer number for an instant redirect to the official SNGPL portal.</p>
          <Link href="/" className="btn-primary inline-flex">Check Bill Now →</Link>
        </div>
      </div>
    </>
  );
}
