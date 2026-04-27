import { MetadataRoute } from 'next'

// Static export için gerekli
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://devmert.com/sitemap.xml', // TODO: Domain aldıktan sonra değiştir
  }
}
