// Priority sitemap — /sitemaps/priority
// Lists ~1000 highest-value pages for preferential Googlebot crawl.
// Top 5 cities × all types × 5 categories = ~1150 URLs at priority 0.85

import { NextResponse } from 'next/server';
import { CATEGORIES, CITIES, SLUG_TYPES } from '../../../lib/seo-data';

export const dynamic = 'force-static';
export const revalidate = 86400;

function escapeXml(s: string) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

export async function GET() {
  const base    = 'https://www.checkgasbills.pk';
  const today   = new Date().toISOString().split('T')[0];
  const topCities = CITIES.slice(0, 5);

  const urls: string[] = [];

  for (const cat of CATEGORIES) {
    for (const city of topCities) {
      for (const type of SLUG_TYPES[cat] ?? []) {
        const slug = `${city.slug}-${type}`;
        urls.push(`  <url>
    <loc>${escapeXml(`${base}/sngpl/${cat}/${slug}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`);
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
