import { MetadataRoute } from 'next';
import { CATEGORIES, CITIES } from '../lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.checkgasbills.pk';
  const now  = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: base,                        lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/bill-check`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/consumer-number`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/duplicate-bill`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/payment-guide`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/calculator`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guides`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/sngpl/cities`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${base}/hhm-explained`,          lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${base}/sngpl-taxes-explained`,   lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map(cat => ({
    url: `${base}/sngpl/${cat}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const cityHubPages: MetadataRoute.Sitemap = CITIES.map(city => ({
    url: `${base}/sngpl/cities/${city.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  return [...corePages, ...categoryPages, ...cityHubPages];
}
