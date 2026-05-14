import type { MetadataRoute } from 'next';
import { CLIENT_DATA } from '@/lib/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/policy', '/offer', '/privacy'],
    },
    sitemap: `${CLIENT_DATA.DOMAIN}/sitemap.xml`,
  };
}