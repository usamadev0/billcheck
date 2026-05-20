// Sitemap Index — /sitemap-index
// Lists all sitemaps for Google/Bing discovery

import { NextResponse } from 'next/server';
import { CATEGORIES } from '../../lib/seo-data';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  const base  = 'https://www.checkgasbills.pk';
  const today = new Date().toISOString().split('T')[0];

  const sitemapUrls = [
    `${base}/sitemap.xml`,           // core + city hub pages
    `${base}/sitemaps/priority`,     // top 5 cities × all types (priority crawl)
    ...CATEGORIES.map(cat => `${base}/sitemaps/${cat}`), // all category slugs
  ];

  const entries = sitemapUrls
    .map(loc => `  <sitemap>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
