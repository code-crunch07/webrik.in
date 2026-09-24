import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  getPageBySlug,
  getServices,
  getIndustries,
  getProjects,
  getCaseStudies,
  getBlogPosts,
  getClients,
  getTestimonials,
  getTeamMembers,
  getFAQs,
} from '@/lib/payload'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import { DarkMinimalistAgencyHomepage } from '@/components/home/DarkMinimalistAgencyHomepage'

interface PageProps {
  params: Promise<{
    slug?: string[]
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = resolvedParams.slug ? resolvedParams.slug.join('/') : 'home'
  const pageDoc: any = await getPageBySlug(slug)

  if (pageDoc?.seo?.metaTitle) {
    return {
      title: `${pageDoc.seo.metaTitle} | Webrik`,
      description: pageDoc.seo.metaDescription || 'Webrik Software Development & Digital Marketing Agency',
    }
  }

  return {
    title: slug === 'home' ? 'Webrik | Software Development & Digital Marketing Agency' : `${slug.toUpperCase()} | Webrik`,
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug ? resolvedParams.slug.join('/') : 'home'

  // Fetch Payload Page Document
  const pageDoc: any = await getPageBySlug(slug)

  // Fetch all CMS dynamic collections for BlockRenderer
  const [services, industries, projects, caseStudies, posts, clients, testimonials, teamMembers, faqs] =
    await Promise.all([
      getServices(),
      getIndustries(),
      getProjects(6),
      getCaseStudies(3),
      getBlogPosts(3),
      getClients(),
      getTestimonials(),
      getTeamMembers(),
      getFAQs(),
    ])

  const dynamicData = {
    services,
    industries,
    projects,
    caseStudies,
    posts,
    clients,
    testimonials,
    teamMembers,
    faqs,
  }

  // Render dedicated Dark Minimalist Agency layout for homepage
  if (slug === 'home') {
    return <DarkMinimalistAgencyHomepage dynamicData={dynamicData} />
  }

  // If Page Document exists in Payload CMS and has layout blocks
  if (pageDoc && pageDoc.layout && pageDoc.layout.length > 0) {
    let layoutBlocks = [...pageDoc.layout]
    return <BlockRenderer blocks={layoutBlocks} dynamicData={dynamicData} />
  }

  // Default Fallback Layout for initial run before database seed or if page blocks are empty
  const defaultHomepageBlocks = [
    { blockType: 'heroBlock', heading: 'We Build. We Market. We Grow Your Business.' },
    { blockType: 'logoCloudBlock', heading: 'Trusted by Industry Leaders' },
    { blockType: 'servicesGridBlock', eyebrow: 'OUR EXPERTISE', heading: 'End-to-End Digital Solutions' },
    { blockType: 'statsBlock', heading: 'Driven by Measurable Impact' },
    { blockType: 'aboutBlock', eyebrow: 'WHO WE ARE', heading: 'Your Engineering & Growth Partner' },
    { blockType: 'industriesGridBlock', eyebrow: 'INDUSTRIES WE SERVE', heading: 'Tailored Solutions for Every Domain' },
    { blockType: 'portfolioGridBlock', eyebrow: 'FEATURED WORK', heading: 'Crafted for Scalability & Speed' },
    { blockType: 'caseStudiesBlock', eyebrow: 'SUCCESS STORIES', heading: 'Real Results for Visionary Brands' },
    { blockType: 'processBlock', eyebrow: 'HOW WE WORK', heading: 'A Proven Framework for Scale' },
    { blockType: 'testimonialsBlock', eyebrow: 'CLIENT FEEDBACK', heading: 'What Founders & Executives Say' },
    { blockType: 'teamBlock', eyebrow: 'OUR LEADERSHIP', heading: 'The Minds Behind Webrik' },
    { blockType: 'blogGridBlock', eyebrow: 'INSIGHTS & ARTICLES', heading: 'Latest from Engineering & Growth' },
    { blockType: 'faqBlock', eyebrow: 'GOT QUESTIONS?', heading: 'Frequently Asked Questions' },
    { blockType: 'projectCalculatorBlock' },
    { blockType: 'ctaBlock', heading: 'Ready to Build Something Extraordinary?' },
  ]

  if (slug === 'home') {
    return <BlockRenderer blocks={defaultHomepageBlocks} dynamicData={dynamicData} />
  }

  if (slug === 'about') {
    return (
      <div className="pt-32">
        <BlockRenderer
          blocks={[
            { blockType: 'aboutBlock', eyebrow: 'ABOUT WEBRIK', heading: 'We Are Webrik: Tech + Growth Agency' },
            { blockType: 'statsBlock', heading: 'Webrik By The Numbers' },
            { blockType: 'teamBlock', eyebrow: 'LEADERSHIP', heading: 'Meet Our Engineering & Growth Leaders' },
            { blockType: 'ctaBlock' },
          ]}
          dynamicData={dynamicData}
        />
      </div>
    )
  }

  if (slug === 'contact') {
    return (
      <div className="pt-32">
        <BlockRenderer blocks={[{ blockType: 'contactBlock' }, { blockType: 'faqBlock' }]} dynamicData={dynamicData} />
      </div>
    )
  }

  if (slug === 'careers') {
    return (
      <div className="pt-36 pb-24 bg-[#FAFAFD] text-slate-900">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Careers at Webrik
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mt-4">Join Our Team</h1>
            <p className="mt-4 text-slate-600 text-lg">
              We are hiring world-class engineers, product designers, and performance growth marketers.
            </p>
          </div>
          <BlockRenderer blocks={[{ blockType: 'ctaBlock', heading: 'Explore Open Engineering & Growth Roles at Webrik' }]} dynamicData={dynamicData} />
        </div>
      </div>
    )
  }

  return notFound()
}
