import { MetadataRoute } from 'next';
import { CATEGORIES, CITIES } from '../lib/seo-data';

// Honest lastmod dates — only update when content genuinely changes.
// Using "today" for every page on every deploy trains Google to ignore lastmod.
const LAUNCH       = new Date('2025-01-01');
const LAST_UPDATED = new Date('2026-05-25'); // update when site content changes

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.checkgasbills.pk';

  const corePages: MetadataRoute.Sitemap = [
    { url: base,                             lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/bill-check`,             lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/consumer-number`,        lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/duplicate-bill`,         lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/payment-guide`,          lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/calculator`,             lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides`,                 lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/sngpl/cities`,           lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${base}/hhm-explained`,          lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/sngpl-taxes-explained`,  lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map(cat => ({
    url: `${base}/sngpl/${cat}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const cityHubPages: MetadataRoute.Sitemap = CITIES.map(city => ({
    url: `${base}/sngpl/cities/${city.slug}`,
    lastModified: LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...corePages, ...categoryPages, ...cityHubPages];
}
