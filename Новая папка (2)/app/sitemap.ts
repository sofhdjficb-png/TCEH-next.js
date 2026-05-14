import type { MetadataRoute } from 'next';
import { CLIENT_DATA } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CLIENT_DATA.DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      // Noindex by bots, but technically in sitemap for completeness
      url: `${CLIENT_DATA.DOMAIN}/policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${CLIENT_DATA.DOMAIN}/offer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
  ];
}