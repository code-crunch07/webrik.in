import { getPayload } from 'payload'
import configPromise from '../payload.config'

export async function seedDatabase() {
  console.log('🌱 Starting Webrik Payload CMS Database Seeding...')
  const payload = await getPayload({ config: configPromise })

  try {
    if (payload.db.push) {
      console.log('🔄 Ensuring Database Schema Tables Exist...')
      await payload.db.push()
    }

    // 1. Create Super Admin User if not exists
    const users = await payload.find({ collection: 'users', limit: 1 })
    if (users.docs.length === 0) {
      console.log('👤 Creating Super Admin User (admin@webrik.in / password123)...')
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@webrik.in',
          password: 'password123',
          name: 'Webrik Admin',
          roles: ['admin'],
        },
      })
    }

    // 2. Create Clients
    console.log('🏢 Seeding Client Logos...')
    const clientsData = [
      { name: 'JW Marriott', industry: 'Hospitality', featured: true, sortOrder: 1 },
      { name: 'GreyOrange', industry: 'Robotics & SaaS', featured: true, sortOrder: 2 },
      { name: 'RRENA Jewels', industry: 'Luxury E-commerce', featured: true, sortOrder: 3 },
      { name: 'Nvizion Solutions', industry: 'Enterprise Tech', featured: true, sortOrder: 4 },
      { name: 'Habibs', industry: 'Retail & Beauty', featured: true, sortOrder: 5 },
      { name: 'PowaiFlats', industry: 'Real Estate', featured: true, sortOrder: 6 },
      { name: 'Lensza Eyewear', industry: 'E-commerce', featured: true, sortOrder: 7 },
    ]

    for (const client of clientsData) {
      const existing = await payload.find({
        collection: 'clients',
        where: { name: { equals: client.name } },
      })
      if (existing.docs.length === 0) {
        await payload.create({ collection: 'clients', data: client })
      }
    }

    // 3. Create Services
    console.log('💻 Seeding Services...')
    const servicesData = [
      {
        title: 'Website Development',
        slug: 'web-development',
        category: 'software',
        icon: 'Code',
        shortDescription: 'High-performance React & Next.js web applications engineered for speed, SEO, and enterprise security.',
        deliverables: [
          { item: 'Next.js 16 App Router Architecture' },
          { item: 'Payload CMS Integration' },
          { item: '99/100 Core Web Vitals SEO' },
          { item: 'Tailwind CSS Custom Design System' },
        ],
      },
      {
        title: 'Mobile App Development',
        slug: 'mobile-app-development',
        category: 'software',
        icon: 'Smartphone',
        shortDescription: 'Native & cross-platform iOS and Android mobile apps crafted with fluid UI animations and offline syncing.',
        deliverables: [
          { item: 'React Native & iOS Native' },
          { item: 'App Store & Play Store Publishing' },
          { item: 'Push Notification Gateway' },
          { item: 'Biometric Auth Integration' },
        ],
      },
      {
        title: 'SaaS Platform Engineering',
        slug: 'saas-development',
        category: 'software',
        icon: 'Cloud',
        shortDescription: 'Multi-tenant cloud SaaS products built with scalable PostgreSQL, API architecture, and payment gateways.',
        deliverables: [
          { item: 'Multi-Tenant Architecture' },
          { item: 'Stripe & Razorpay Billing' },
          { item: 'Role-Based Access Control' },
          { item: 'Automated AWS Deployment' },
        ],
      },
      {
        title: 'Digital Marketing & Growth',
        slug: 'digital-marketing',
        category: 'marketing',
        icon: 'Megaphone',
        shortDescription: 'Full-funnel digital marketing strategies combining targeted ads, lead funnels, and data analytics.',
        deliverables: [
          { item: 'Funnel Architecture & CRO' },
          { item: 'Meta & Google Ads Campaign Management' },
          { item: 'Marketing Automation CRM' },
          { item: 'Weekly ROI & CAC Reports' },
        ],
      },
      {
        title: 'SEO & Organic Growth',
        slug: 'seo-services',
        category: 'marketing',
        icon: 'Search',
        shortDescription: 'Technical SEO audits, keyword strategy, and backlink authority building to rank #1 on Google.',
        deliverables: [
          { item: 'Technical SEO Audits & Fixes' },
          { item: 'JSON-LD Schema Implementation' },
          { item: 'Content Strategy & Link Building' },
          { item: 'Google Search Console Growth' },
        ],
      },
    ]

    for (const service of servicesData) {
      const existing = await payload.find({
        collection: 'services',
        where: { slug: { equals: service.slug } },
      })
      if (existing.docs.length === 0) {
        await payload.create({ collection: 'services', data: service as any })
      }
    }

    // 4. Create Home Page in Pages collection
    console.log('📄 Seeding Home Page with Page Builder Blocks...')
    const homeDoc = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
    })

    if (homeDoc.docs.length === 0) {
      await payload.create({
        collection: 'pages',
        data: {
          title: 'Home',
          slug: 'home',
          layout: [
            {
              blockType: 'heroBlock',
              eyebrow: '🚀 Technology + Design + Marketing',
              heading: 'We Build. We Market. We Grow Your Business.',
              description: 'Webrik is a software development and digital marketing agency that helps brands build powerful digital experiences and scale with result-driven marketing.',
              primaryCTA: { label: 'Explore Services', url: '/services', variant: 'primary' },
              secondaryCTA: { label: 'View Our Work', url: '/portfolio', variant: 'secondary' },
            },
            {
              blockType: 'logoCloudBlock',
              heading: 'Trusted by Industry Leaders',
            },
            {
              blockType: 'servicesGridBlock',
              eyebrow: 'OUR EXPERTISE',
              heading: 'End-to-End Digital Solutions',
              description: 'We combine engineering precision with result-driven growth marketing to help scale modern enterprises.',
            },
            {
              blockType: 'statsBlock',
              heading: 'Driven by Measurable Impact',
            },
            {
              blockType: 'aboutBlock',
              eyebrow: 'WHO WE ARE',
              heading: 'Your Engineering & Growth Partner',
            },
            {
              blockType: 'industriesGridBlock',
              eyebrow: 'INDUSTRIES WE SERVE',
              heading: 'Tailored Solutions for High-Growth Verticals',
            },
            {
              blockType: 'portfolioGridBlock',
              eyebrow: 'FEATURED WORK',
              heading: 'Crafted for Scalability & Speed',
            },
            {
              blockType: 'caseStudiesBlock',
              eyebrow: 'SUCCESS STORIES',
              heading: 'Proven Success Stories & Verified Metrics',
            },
            {
              blockType: 'processBlock',
              eyebrow: 'HOW WE WORK',
              heading: 'A Battle-Tested Framework for Digital Success',
            },
            {
              blockType: 'testimonialsBlock',
              eyebrow: 'CLIENT FEEDBACK',
              heading: 'Trusted by Founders & Executives',
            },
            {
              blockType: 'teamBlock',
              eyebrow: 'LEADERSHIP',
              heading: 'The Minds Behind Webrik',
            },
            {
              blockType: 'blogGridBlock',
              eyebrow: 'INSIGHTS & ARTICLES',
              heading: 'Latest Thinking on Tech & Growth',
            },
            {
              blockType: 'faqBlock',
              eyebrow: 'GOT QUESTIONS?',
              heading: 'Frequently Asked Questions',
            },
            {
              blockType: 'ctaBlock',
              heading: 'Ready to Build Something Extraordinary?',
            },
          ],
          seo: {
            metaTitle: 'Webrik | Software Development & Digital Marketing Agency',
            metaDescription: 'Webrik is a software development and digital marketing agency specializing in Next.js web apps, mobile apps, SaaS, SEO, and performance growth.',
          },
        },
      })
    }

    console.log('✅ Webrik Payload Database Seeding Completed Successfully!')
  } catch (error) {
    console.error('❌ Seeding Error:', error)
  }
}

// Auto-run if executed directly
if (process.argv[1]?.includes('seed.ts')) {
  seedDatabase().then(() => process.exit(0))
}
