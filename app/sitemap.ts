import type { MetadataRoute } from 'next';

const BASE_URL = 'https://needhomespdc.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/',                                     priority: 1.0,  changeFrequency: 'weekly' as const },
    { url: '/about',                                priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/leadership',                           priority: 0.6,  changeFrequency: 'monthly' as const },
    { url: '/careers',                              priority: 0.7,  changeFrequency: 'weekly' as const },
    { url: '/partner-with-us',                      priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/contact',                              priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/blog',                                 priority: 0.8,  changeFrequency: 'daily' as const },
    { url: '/faq',                                  priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/how-it-works',                         priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/marketplace',                          priority: 0.9,  changeFrequency: 'daily' as const },
    { url: '/investment/fractional-ownership',      priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/investment/co-development',            priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/investment/land-banking',              priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/investment/outright-purchase',         priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/investment/save-to-own',               priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/privacy-policy',                       priority: 0.3,  changeFrequency: 'yearly' as const },
    { url: '/terms',                                priority: 0.3,  changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
