import { MetadataRoute } from 'next'
import { getServices, getProjects, getCaseStudies, getBlogPosts, getIndustries } from '@/lib/payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3022'

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/portfolio',
    '/case-studies',
    '/blog',
    '/contact',
    '/careers',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const services = await getServices()
  const serviceRoutes = services.map((s: any) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const industries = await getIndustries()
  const industryRoutes = industries.map((ind: any) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPosts = await getBlogPosts()
  const blogRoutes = blogPosts.map((p: any) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes]
}
