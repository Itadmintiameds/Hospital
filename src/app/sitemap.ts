import type { MetadataRoute } from 'next';
import { hospitals } from './data/Hospital';
import { SITE_URL } from './data/site';

// Removed hospitals are intentionally absent: only pages that exist in the hospital data are listed (old URLs redirect via next.config.ts).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/hospitals', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/super-hub', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/team', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/cure-arogya', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return [
    ...pages.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...hospitals.map((h) => ({
      url: `${SITE_URL}${h.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
