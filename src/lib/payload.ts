import { getPayload as getPayloadCMS } from 'payload'
import configPromise from '@payload-config'

export const getPayload = async () => {
  return await getPayloadCMS({
    config: configPromise,
  })
}

/**
 * Helper to fetch a Page by slug using Payload Local API
 */
export async function getPageBySlug(slug: string) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`[Payload] Error fetching page "${slug}":`, error)
    return null
  }
}

/**
 * Helper to fetch Services
 */
export async function getServices(category?: 'software' | 'marketing') {
  try {
    const payload = await getPayload()
    const where: any = {}
    if (category) {
      where.category = { equals: category }
    }
    const result = await payload.find({
      collection: 'services',
      where,
      limit: 100,
    })
    return result.docs
  } catch (error) {
    console.error('[Payload] Error fetching services:', error)
    return []
  }
}

/**
 * Helper to fetch Service by slug
 */
export async function getServiceBySlug(slug: string) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'services',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`[Payload] Error fetching service "${slug}":`, error)
    return null
  }
}

/**
 * Helper to fetch Industries
 */
export async function getIndustries() {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'industries',
      limit: 100,
    })
    return result.docs
  } catch (error) {
    console.error('[Payload] Error fetching industries:', error)
    return []
  }
}

/**
 * Helper to fetch Industry by slug
 */
export async function getIndustryBySlug(slug: string) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'industries',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`[Payload] Error fetching industry "${slug}":`, error)
    return null
  }
}

/**
 * Helper to fetch Projects / Portfolio
 */
export async function getProjects(limit = 100, category?: string) {
  try {
    const payload = await getPayload()
    const where: any = {}
    if (category && category !== 'All') {
      where.category = { equals: category }
    }
    const result = await payload.find({
      collection: 'projects',
      where,
      limit,
      sort: 'sortOrder',
    })
    return result.docs
  } catch (error) {
    console.error('[Payload] Error fetching projects:', error)
    return []
  }
}

/**
 * Helper to fetch Project by slug
 */
export async function getProjectBySlug(slug: string) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`[Payload] Error fetching project "${slug}":`, error)
    return null
  }
}

/**
 * Helper to fetch Case Studies
 */
export async function getCaseStudies(limit = 100) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'case-studies',
      limit,
    })
    return result.docs
  } catch (error) {
    console.error('[Payload] Error fetching case studies:', error)
    return []
  }
}

/**
 * Helper to fetch Case Study by slug
 */
export async function getCaseStudyBySlug(slug: string) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`[Payload] Error fetching case study "${slug}":`, error)
    return null
  }
}

/**
 * Helper to fetch Blog Posts
 */
export async function getBlogPosts(limit = 100, categorySlug?: string) {
  try {
    const payload = await getPayload()
    const where: any = { status: { equals: 'published' } }
    if (categorySlug) {
      where['category.slug'] = { equals: categorySlug }
    }
    const result = await payload.find({
      collection: 'blog-posts',
      where,
      limit,
      sort: '-publishedDate',
    })
    return result.docs
  } catch (error) {
    console.error('[Payload] Error fetching blog posts:', error)
    return []
  }
}

/**
 * Helper to fetch Blog Post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'blog-posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error(`[Payload] Error fetching blog post "${slug}":`, error)
    return null
  }
}

/**
 * Helper to fetch Clients, Testimonials, Team, FAQs, Globals
 */
export async function getClients() {
  try {
    const payload = await getPayload()
    const result = await payload.find({ collection: 'clients', limit: 100, sort: 'sortOrder' })
    return result.docs
  } catch {
    return []
  }
}

export async function getTestimonials() {
  try {
    const payload = await getPayload()
    const result = await payload.find({ collection: 'testimonials', limit: 100 })
    return result.docs
  } catch {
    return []
  }
}

export async function getTeamMembers() {
  try {
    const payload = await getPayload()
    const result = await payload.find({ collection: 'team-members', limit: 100, sort: 'sortOrder' })
    return result.docs
  } catch {
    return []
  }
}

export async function getFAQs() {
  try {
    const payload = await getPayload()
    const result = await payload.find({ collection: 'faqs', limit: 100 })
    return result.docs
  } catch {
    return []
  }
}

export async function getJobs() {
  try {
    const payload = await getPayload()
    const result = await payload.find({ collection: 'jobs', where: { active: { equals: true } }, limit: 100 })
    return result.docs
  } catch {
    return []
  }
}

export async function getSiteSettings() {
  try {
    const payload = await getPayload()
    return await payload.findGlobal({ slug: 'site-settings' })
  } catch {
    return null
  }
}

export async function getHeaderGlobal() {
  try {
    const payload = await getPayload()
    return await payload.findGlobal({ slug: 'header' })
  } catch {
    return null
  }
}

export async function getFooterGlobal() {
  try {
    const payload = await getPayload()
    return await payload.findGlobal({ slug: 'footer' })
  } catch {
    return null
  }
}

export async function getAnalyticsSettings() {
  try {
    const payload = await getPayload()
    return await payload.findGlobal({ slug: 'analytics-settings' })
  } catch {
    return null
  }
}
