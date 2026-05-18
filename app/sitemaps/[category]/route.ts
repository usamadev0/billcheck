// Dynamic sitemap per category — /sitemaps/[category]
// Priority-weighted: top cities at 0.8, mid at 0.7, rest at 0.6

import { NextRequest, NextResponse } from 'next/server';
import {
  CATEGORIES,
  CITIES,
  getAllSlugsForCategory,
  type Category,
} from '../../../lib/seo-data';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 h

// Build a rank map: city slug → priority tier
const TOP5_SLUGS  = new Set(CITIES.slice(0,  5).map(c => c.slug));
const TOP15_SLUGS = new Set(CITIES.slice(0, 15).map(c => c.slug));

function slugPriority(slug: string): string {
  const city = slug.split('-')[0];
  if (TOP5_SLUGS.has(city))  return '0.80';
  if (TOP15_SLUGS.has(city)) return '0.70';
  return '0.60';
}

function slugChangefreq(slug: string): string {
  const city = slug.split('-')[0];
  if (TOP5_SLUGS.has(city)) return 'weekly';
  return 'monthly';
}

function escapeXml(s: string) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Static lastmod anchored to site launch + minor monthly bump
// Avoids "always today" which Google ignores
const SITE_DATE = '2025-01-01';
function lastmod(slug: string): string {
  // Top-city pages signal monthly freshness; others less frequent
  const city = slug.split('-')[0];
  if (TOP5_SLUGS.has(city)) return new Date().toISOString().split('T')[0];
  return SITE_DATE;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const slugs = getAllSlugsForCategory(category as Category);
  const base  = 'https://sngplbillcheck.pk';

  const urls = slugs.map(slug =>
    `  <url>
    <loc>${escapeXml(`${base}/sngpl/${category}/${slug}`)}</loc>
    <lastmod>${lastmod(slug)}</lastmod>
    <changefreq>${slugChangefreq(slug)}</changefreq>
    <priority>${slugPriority(slug)}</priority>
  </url>`
  );

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
