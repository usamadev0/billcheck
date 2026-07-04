import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers — allow full site
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/404'],
      },
      // AI crawlers — explicitly allowed for GEO/AEO
      { userAgent: 'GPTBot',         allow: '/' },
      { userAgent: 'ChatGPT-User',   allow: '/' },
      { userAgent: 'anthropic-ai',   allow: '/' },
      { userAgent: 'ClaudeBot',      allow: '/' },
      { userAgent: 'PerplexityBot',  allow: '/' },
      { userAgent: 'GoogleOther',    allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Gemini',         allow: '/' },
      { userAgent: 'Applebot',       allow: '/' },
      { userAgent: 'Bingbot',        allow: '/' },
      { userAgent: 'DuckDuckBot',    allow: '/' },
      { userAgent: 'Slurp',          allow: '/' },
      { userAgent: 'Baiduspider',    allow: '/' },
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'Twitterbot',     allow: '/' },
      { userAgent: 'LinkedInBot',    allow: '/' },
      { userAgent: 'WhatsApp',       allow: '/' },
      // Rate-limit aggressive SEO bots to protect crawl budget
      { userAgent: 'AhrefsBot',      crawlDelay: 10 },
      { userAgent: 'SemrushBot',     crawlDelay: 10 },
      { userAgent: 'MJ12bot',        crawlDelay: 10 },
      { userAgent: 'DotBot',         crawlDelay: 10 },
    ],
    sitemap: 'https://www.checkgasbills.pk/sitemap-index',
    host: 'https://www.checkgasbills.pk',
  };
}
