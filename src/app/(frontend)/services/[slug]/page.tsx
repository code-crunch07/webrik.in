import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getServiceBySlug } from '@/lib/payload'
import {
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Check,
  Lock,
  Code2,
  Smartphone,
  Cloud,
  Database,
  Search,
  Server,
  Palette,
  Award,
  TrendingUp,
  Terminal,
  Cpu,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { CTABlock } from '@/components/blocks/CTABlock'

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service: any = await getServiceBySlug(slug)
  const fallbackTitle = slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return {
    title: service?.title ? `${service.title} | Webrik Software Agency` : `${fallbackTitle} | Webrik Software Agency`,
    description: service?.shortDescription || 'Enterprise Software Engineering & Digital Growth Agency',
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params
  const serviceDoc: any = await getServiceBySlug(slug)

  // Service configuration dictionary with realistic stock photography & concise briefs
  const serviceCatalog: Record<string, any> = {
    'web-development': {
      title: 'Web & Next.js Development',
      badge: '⚡ FULL-STACK NEXT.JS 16 & REACT 19 ARCHITECTURE',
      tagline: 'High-Performance Web Platforms Engineered for Enterprise Scale.',
      summary:
        'We architect mission-critical web applications with Next.js 16, Payload CMS 3, and PostgreSQL. Engineered for sub-20ms edge response times, strict TypeScript type safety, and 100% intellectual property ownership.',
      image: '/images/services/web-dev.jpg',
      terminalSnippet: {
        command: 'next build && next start --port 3000',
        route: 'GET /api/v1/telemetry 200 OK (18ms)',
        stats: '14 Server Components • 0ms Client Bloat • 100/100 Core Web Vitals',
        status: 'PRODUCTION DEPLOYMENT ACTIVE',
      },
      metrics: [
        { label: 'Sprint Velocity', value: '2–4 Weeks' },
        { label: 'Lighthouse Score', value: '100 / 100' },
        { label: 'Global Edge TTFB', value: '< 20ms' },
        { label: 'Code Ownership', value: '100% Client' },
      ],
      architectureLayers: [
        {
          layer: '01 / FRONTEND ARCHITECTURE',
          tech: 'Next.js 16, React 19, TypeScript, TailwindCSS',
          desc: 'Server Components with streaming SSR, zero runtime client bloat, and sub-second first contentful paint.',
        },
        {
          layer: '02 / BACKEND & DATABASE',
          tech: 'PostgreSQL, Payload CMS 3, Node.js, Redis',
          desc: 'ACID relational database clustering, connection pooling, and in-memory Redis session caching.',
        },
        {
          layer: '03 / CLOUD INFRASTRUCTURE',
          tech: 'Vercel Edge, AWS S3, Cloudflare, Docker',
          desc: 'Global multi-region edge distribution with automated failover and containerized local environments.',
        },
        {
          layer: '04 / CI/CD & SECURITY',
          tech: 'GitHub Actions, Dependabot, Sentry, SSL/TLS',
          desc: 'Automated unit/integration testing pipelines with zero-downtime blue/green deployments.',
        },
      ],
      capabilities: [
        {
          title: 'Next.js 16 Streaming SSR',
          desc: 'Direct server-side data fetching eliminates client hydration waterfalls and renders instant content for users and search crawlers.',
          icon: Code2,
          metric: 'Zero Waterfall Latency',
        },
        {
          title: 'Decoupled Headless CMS',
          desc: 'Payload CMS 3 integrated natively via local API, enabling marketing teams to construct pages without developer intervention.',
          icon: Layers,
          metric: 'Instant Revalidation',
        },
        {
          title: 'Enterprise Security Hardening',
          desc: 'Strict TypeScript static typing, automated input sanitization, CSRF mitigation, and SOC-2 ready access controls.',
          icon: Lock,
          metric: 'SOC-2 Ready Architecture',
        },
        {
          title: 'Automated CI/CD Delivery',
          desc: 'GitHub Actions pipelines running automated linting, type-checks, and end-to-end tests before pushing to production edge clusters.',
          icon: Zap,
          metric: 'Zero-Downtime Rollouts',
        },
      ],
      deliverables: [
        'Complete Next.js 16 source code repository with full Git commit history',
        'Headless Payload CMS 3 administrative portal with custom modular blocks',
        'PostgreSQL schema migrations, connection pooling, and automated backup scripts',
        'GitHub Actions automated CI/CD pipelines with staging and production workflows',
        '100/100 Core Web Vitals audit and structured JSON-LD schema markup',
        'Technical architectural RFC documentation and developer handover walkthrough',
      ],
    },
    'mobile-app-development': {
      title: 'Native Mobile Applications',
      badge: '📱 NATIVE IOS & ANDROID CROSS-PLATFORM ENGINEERING',
      tagline: 'High-Performance Mobile Apps Crafted for Fluid 60fps Experiences.',
      summary:
        'We build high-converting mobile applications with React Native, native Swift/Kotlin modules, biometric security, and offline synchronization. Backed by a 100% App Store approval guarantee.',
      image: '/images/services/mobile-app.jpg',
      terminalSnippet: {
        command: 'fastlane ios release && fastlane android release',
        route: 'APNs Push Notification Engine • Active (12ms)',
        stats: '60 FPS Native UI • Offline SQLite Sync • Biometric Keychain',
        status: 'APP STORE & PLAY STORE READY',
      },
      metrics: [
        { label: 'Sprint Velocity', value: '3–5 Weeks' },
        { label: 'Target OS', value: 'iOS & Android' },
        { label: 'Frame Rate', value: '60 FPS Native' },
        { label: 'Store Approval', value: '100% Guaranteed' },
      ],
      architectureLayers: [
        {
          layer: '01 / MOBILE CORE',
          tech: 'React Native, Expo, Swift, Kotlin',
          desc: 'Unified codebase compiled to native bytecode with custom Objective-C/Swift bridge modules.',
        },
        {
          layer: '02 / PERSISTENCE & SYNC',
          tech: 'SQLite, WatermelonDB, PostgreSQL',
          desc: 'Offline-first relational database with background synchronization and conflict resolution.',
        },
        {
          layer: '03 / NOTIFICATIONS & CLOUD',
          tech: 'Firebase Cloud Messaging, Apple APNs, S3',
          desc: 'High-throughput segmented push notifications and encrypted user media storage.',
        },
        {
          layer: '04 / DEPLOYMENT & METRICS',
          tech: 'Fastlane, TestFlight, PostHog Mobile',
          desc: 'Automated beta build distribution and real-time crash reporting telemetry.',
        },
      ],
      capabilities: [
        {
          title: 'Native Performance & 60fps Gestures',
          desc: 'Hardware-accelerated gesture transitions and fluid animations without frame drops.',
          icon: Smartphone,
          metric: '60 FPS Native',
        },
        {
          title: 'Offline-First Synchronization',
          desc: 'Local SQLite data persistence allows uninterrupted usage offline, auto-syncing upon reconnection.',
          icon: Database,
          metric: 'Zero-Lag Offline',
        },
        {
          title: 'Biometric FaceID & TouchID',
          desc: 'Hardware-encrypted biometric authentication integrated with iOS Keychain and Android KeyStore.',
          icon: Lock,
          metric: 'Hardware Security',
        },
        {
          title: 'Automated Store Publishing',
          desc: 'End-to-end management of Apple App Store and Google Play reviews, guidelines, and releases.',
          icon: Zap,
          metric: '100% Store Pass',
        },
      ],
      deliverables: [
        'React Native source repository with iOS Xcode and Android Studio projects',
        'App Store and Google Play publishing management and approval guarantee',
        'Push notification server setup with Firebase Cloud Messaging',
        'Secure mobile REST and GraphQL API microservice endpoints',
        'Complete Figma mobile design system with light and dark mode tokens',
        '100% intellectual property ownership with zero recurring licensing fees',
      ],
    },
    'saas-development': {
      title: 'Cloud SaaS & API Engineering',
      badge: '☁️ MULTI-TENANT CLOUD PLATFORM ARCHITECTURE',
      tagline: 'Enterprise Multi-Tenant SaaS Built for Concurrency and Reliability.',
      summary:
        'Scalable cloud SaaS products engineered with multi-tenant PostgreSQL clustering, automated Stripe metered billing, granular RBAC access control, and sub-25ms microservice APIs.',
      image: '/images/services/saas.jpg',
      terminalSnippet: {
        command: 'docker compose -f docker-compose.prod.yml up -d',
        route: 'POST /api/v1/tenants/provision 201 Created (24ms)',
        stats: 'Row-Level Security Active • Redis Cache Hit: 99.4% • 99.99% SLA',
        status: 'MULTI-TENANT CLOUD CLUSTER ONLINE',
      },
      metrics: [
        { label: 'Sprint Velocity', value: '4–6 Weeks' },
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Tenancy Model', value: 'Multi-Tenant' },
        { label: 'Billing Engine', value: 'Stripe Metered' },
      ],
      architectureLayers: [
        {
          layer: '01 / APPLICATION LAYER',
          tech: 'Next.js 16, TypeScript, React 19',
          desc: 'Multi-tenant client dashboard, customer portals, and real-time administrative interfaces.',
        },
        {
          layer: '02 / DATABASE PARTITIONING',
          tech: 'PostgreSQL, Prisma, PgBouncer',
          desc: 'Row-level security (RLS) tenant isolation with high-throughput connection pooling.',
        },
        {
          layer: '03 / BILLING & MONETIZATION',
          tech: 'Stripe Billing API, Webhooks, Invoicing',
          desc: 'Automated usage meters, recurring subscription tiers, tax compliance, and dunning workflows.',
        },
        {
          layer: '04 / CLOUD ORCHESTRATION',
          tech: 'AWS ECS, Docker, Redis, Upstash',
          desc: 'Horizontal auto-scaling microservices with distributed in-memory caching.',
        },
      ],
      capabilities: [
        {
          title: 'Strict Tenant Cryptographic Isolation',
          desc: 'PostgreSQL row-level security policies guarantee that tenant data is strictly partitioned and isolated.',
          icon: Database,
          metric: 'Strict Isolation',
        },
        {
          title: 'Automated Stripe Metered Billing',
          desc: 'Usage-based metering, seat-based subscriptions, tier upgrades, and automated invoice delivery.',
          icon: TrendingUp,
          metric: 'Zero-Leak Revenue',
        },
        {
          title: 'Enterprise Role-Based Access Control',
          desc: 'Owner, Admin, and Member permissions with audit logging, session timeouts, and SAML SSO readiness.',
          icon: Lock,
          metric: 'SOC-2 Ready RBAC',
        },
        {
          title: 'Redis Caching & Distributed Queues',
          desc: 'Background worker queues for async workloads, PDF generation, and sub-25ms cached responses.',
          icon: Cloud,
          metric: '25ms API Speed',
        },
      ],
      deliverables: [
        'Multi-tenant cloud SaaS platform codebase ready for production deployment',
        'Stripe billing integration with tier limits, trial periods, and webhook handlers',
        'Granular role-based authentication and organization invitation workflows',
        'OpenAPI / Swagger documentation contracts for your public developer API',
        'Docker container compose files and cloud deployment infrastructure manifests',
        '100% intellectual property ownership with complete source handover',
      ],
    },
    'e-commerce-development': {
      title: 'Headless E-Commerce Solutions',
      badge: '🛍️ ULTRA-FAST HEADLESS COMMERCE & CHECKOUT',
      tagline: 'Custom Digital Storefronts Built for Sub-Second Speed and Conversions.',
      summary:
        'Custom headless digital storefronts engineered for instant catalog search, 1-click accelerated checkout, high average order values, and multi-currency global reach.',
      image: '/images/services/ecommerce.jpg',
      terminalSnippet: {
        command: 'pnpm run build && pnpm run deploy:edge',
        route: 'POST /api/checkout/apple-pay 200 OK (21ms)',
        stats: 'Instant Algolia Indexing • sub-200ms Catalog • +42% AOV Lift',
        status: 'HEADLESS COMMERCE ENGINE ACTIVE',
      },
      metrics: [
        { label: 'Sprint Velocity', value: '3–4 Weeks' },
        { label: 'Catalog Speed', value: 'sub-200ms' },
        { label: 'Conversion Lift', value: '+42% Average' },
        { label: 'Checkout Flow', value: '1-Click Apple Pay' },
      ],
      architectureLayers: [
        {
          layer: '01 / STOREFRONT LAYER',
          tech: 'Next.js 16, React 19, TailwindCSS',
          desc: 'Decoupled headless storefront with sub-second page transitions and zero reload lag.',
        },
        {
          layer: '02 / COMMERCE BACKEND',
          tech: 'Shopify Plus API, Payload CMS 3',
          desc: 'Enterprise inventory catalog management and rich editorial landing page drops.',
        },
        {
          layer: '03 / SEARCH & DISCOVERY',
          tech: 'Algolia, Meilisearch, Redis',
          desc: 'Instant typeahead product search and faceted filtering with zero latency.',
        },
        {
          layer: '04 / CONVERSION & PAYMENTS',
          tech: 'Stripe, Apple Pay, Klaviyo, Meta CAPI',
          desc: '1-click checkout, automated cart recovery SMS/email, and server-side tracking.',
        },
      ],
      capabilities: [
        {
          title: 'Sub-Second Headless Catalog',
          desc: 'Faceted product search and category filters rendering instantly without full page refreshes.',
          icon: Search,
          metric: 'Instant Filtering',
        },
        {
          title: '1-Click Accelerated Checkout',
          desc: 'Frictionless purchasing with Apple Pay, Google Pay, and Stripe Elements integration.',
          icon: Zap,
          metric: 'Frictionless Flow',
        },
        {
          title: 'Dynamic AOV & Bundle Upsells',
          desc: 'In-cart smart bundle recommendations, free shipping progress bars, and post-purchase upsells.',
          icon: TrendingUp,
          metric: '+28% Basket Size',
        },
        {
          title: 'Automated Omni-Channel Sync',
          desc: 'Real-time automated inventory reconciliation between Shopify, ERPs, and physical POS.',
          icon: Layers,
          metric: 'Real-Time Sync',
        },
      ],
      deliverables: [
        'Headless Next.js e-commerce storefront with high-converting PDPs and cart',
        'One-click accelerated checkout configuration with global multi-currency',
        'Payload CMS custom landing page builder for campaign drops and lookbooks',
        'Klaviyo email and SMS abandoned cart recovery marketing automation setup',
        'Server-side Meta Conversions API and GA4 enhanced e-commerce tracking',
        '100% full intellectual property transfer and source code repository',
      ],
    },
    'digital-marketing': {
      title: 'Performance Marketing & SEO',
      badge: '📈 ATTRIBUTION ENGINES & HIGH-INTENT ACQUISITION',
      tagline: 'Data-Driven Acquisition Funnels Engineered for High ROAS.',
      summary:
        'Full-funnel digital marketing campaigns combining high-intent Google Search PPC, visual Meta Ads, server-side attribution tracking, and technical SEO market dominance.',
      image: '/images/services/marketing.jpg',
      terminalSnippet: {
        command: 'node scripts/sync-capi-events.js --live',
        route: 'EVENT /purchase -> Meta CAPI + GA4 200 OK (8ms)',
        stats: 'Server-Side Attribution 100% • ROAS 3.4x • Page 1 Rankings Active',
        status: 'MULTI-CHANNEL GROWTH ENGINE RUNNING',
      },
      metrics: [
        { label: 'Campaign Launch', value: '7 Business Days' },
        { label: 'Average ROAS', value: '3.2x – 4.5x' },
        { label: 'Tracking Setup', value: 'Server-Side CAPI' },
        { label: 'Reporting Portal', value: 'Live 24/7 Dash' },
      ],
      architectureLayers: [
        {
          layer: '01 / PAID SEARCH & INTENT',
          tech: 'Google Ads PPC, Performance Max, YouTube',
          desc: 'Targeting commercial buyer intent with high Quality Score copy and negative keyword pruning.',
        },
        {
          layer: '02 / PAID SOCIAL FUNNELS',
          tech: 'Meta Ads Manager, Instagram, TikTok',
          desc: 'Multi-stage creative funnels converting cold prospects into qualified high-ticket customers.',
        },
        {
          layer: '03 / SERVER-SIDE TRACKING',
          tech: 'Google Tag Manager, Meta CAPI, GA4',
          desc: 'Direct server-to-server event dispatching bypassing browser ad blockers and iOS restrictions.',
        },
        {
          layer: '04 / TECHNICAL SEO DOMINANCE',
          tech: 'Ahrefs, Semrush, Search Console',
          desc: 'Semantic JSON-LD schema, Core Web Vitals optimization, and high-authority link outreach.',
        },
      ],
      capabilities: [
        {
          title: 'Google Ads Commercial Intent',
          desc: 'Capture high-intent searches with precision keyword match types and continuous bid optimization.',
          icon: Search,
          metric: 'High Intent Clicks',
        },
        {
          title: 'Meta Ads Retargeting Funnels',
          desc: 'Dynamic product ads and multi-angle video creatives designed to maximize conversion rates.',
          icon: TrendingUp,
          metric: '3.2x ROAS Target',
        },
        {
          title: 'Server-Side Conversion Tracking',
          desc: '100% data integrity with first-party cookie infrastructure and direct server-to-server CAPI.',
          icon: Server,
          metric: '100% Data Accuracy',
        },
        {
          title: 'Technical SEO & Authority',
          desc: 'On-page architectural schema, Core Web Vitals speed tuning, and backlink authority building.',
          icon: Award,
          metric: 'Page 1 Rankings',
        },
      ],
      deliverables: [
        'Full-funnel Google Ads and Meta Ads campaign structure and copy architecture',
        'Server-side Meta CAPI and GA4 conversion tracking implementation',
        'High-converting landing page copywriting and conversion rate optimization audits',
        'Technical SEO keyword roadmap, canonical setup, and schema markup',
        'Live Looker Studio executive dashboard updated in real-time with verified ROAS',
      ],
    },
    'ui-ux-design': {
      title: 'UI/UX Design Systems',
      badge: '🎨 BESPOKE INTERFACE DESIGN & FIGMA TOKENS',
      tagline: 'Digital Product Design Engineered for Code Parity and Conversion.',
      summary:
        'User-centric interface design, comprehensive Figma atomic component libraries, clickable interactive prototypes, and design tokens built for seamless developer handoff.',
      image: '/images/services/uiux.jpg',
      terminalSnippet: {
        command: 'figma-tokens sync --target=tailwind.config.js',
        route: 'TOKENS /colors /typography /spacing -> Synced (100% Code Parity)',
        stats: 'Atomic Design System • Clickable Mobile/Desktop Prototypes • WCAG AAA',
        status: 'FIGMA TOKENS SYSTEM DEPLOYED',
      },
      metrics: [
        { label: 'Sprint Velocity', value: '2–3 Weeks' },
        { label: 'Deliverable', value: 'Figma Library' },
        { label: 'Prototypes', value: '100% Clickable' },
        { label: 'Code Parity', value: 'Tailwind Tokens' },
      ],
      architectureLayers: [
        {
          layer: '01 / DESIGN TOKENS',
          tech: 'Figma Variables, Tailwind Config, JSON Tokens',
          desc: 'Atomic design tokens mapped 1:1 with frontend styling and dark/light mode themes.',
        },
        {
          layer: '02 / INFORMATION ARCHITECTURE',
          tech: 'FigJam, User Flows, Wireframing',
          desc: 'Frictionless user journeys mapping key conversion triggers and checkout flows.',
        },
        {
          layer: '03 / INTERACTIVE PROTOTYPING',
          tech: 'Framer, Figma Interactive Components',
          desc: 'Clickable desktop and mobile prototypes with realistic micro-interactions and animations.',
        },
        {
          layer: '04 / DEVELOPER HANDOFF',
          tech: 'Figma Dev Mode, SVG Assets, Lottie',
          desc: 'Pixel-perfect CSS inspection, auto-layouts, and production-ready vector assets.',
        },
      ],
      capabilities: [
        {
          title: 'Figma Design Tokens & Variants',
          desc: 'Standardized typography, color palettes, and spacing variables mapped directly to frontend code.',
          icon: Palette,
          metric: 'Atomic Design',
        },
        {
          title: 'User Journey Optimization',
          desc: 'Frictionless flows optimized for maximum conversion, task completion, and intuitive navigation.',
          icon: Layers,
          metric: 'Frictionless Flows',
        },
        {
          title: 'Clickable Interactive Prototypes',
          desc: 'Interactive desktop and mobile prototypes for immediate stakeholder testing and validation.',
          icon: Sparkles,
          metric: 'Hi-Fi Prototyping',
        },
        {
          title: 'Developer Handoff Specification',
          desc: 'Pixel-perfect CSS inspection and SVG asset exports ensuring 1:1 parity between design and production.',
          icon: Code2,
          metric: '100% Code Parity',
        },
      ],
      deliverables: [
        'Complete Figma design file with full component variant library and states',
        'Interactive clickable prototype for mobile and desktop viewports',
        'TailwindCSS theme configuration file matching design tokens',
        'Optimized SVG icons, custom illustrations, and asset packages',
        'Developer handoff inspection documentation ensuring 100% code parity',
      ],
    },
  }

  // Alias common slugs
  const resolvedSlug =
    slug === 'seo-services' || slug === 'google-ads-ppc' ? 'digital-marketing' : slug

  const current = serviceCatalog[resolvedSlug] || serviceCatalog['web-development']

  const displayTitle = serviceDoc?.title || current.title
  const displaySummary = serviceDoc?.shortDescription || current.summary

  return (
    <div className="pt-28 bg-[#FAFAFD] text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* =========================================================================
          HERO SECTION: PREMIUM SOFTWARE AGENCY HERO (Clean, High-Tech, Crisp)
          ========================================================================= */}
      <section className="w-full bg-[#FAFAFD] pt-8 pb-20 border-b border-slate-200/80">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-indigo-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{displayTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Headline & Concise Brief */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{current.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.06]">
                {displayTitle}
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
                {displaySummary}
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-slate-200/80">
                {current.metrics.map((m: any, idx: number) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-2xl sm:text-3xl font-black text-slate-900">{m.value}</div>
                    <div className="text-xs font-semibold text-slate-500">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/20 hover:shadow-2xl transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Start Technical Discovery</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-xl text-base font-bold text-slate-800 bg-white border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2 shadow-xs"
                >
                  <span>Review Production Systems</span>
                </Link>
              </div>
            </div>

            {/* Right: Premium Software Terminal & Photographic Card */}
            <div className="lg:col-span-5 space-y-4">
              {/* Terminal Snippet Box */}
              <div className="rounded-3xl bg-slate-950 p-6 text-slate-200 shadow-2xl border border-slate-800 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span>webrik-cluster // production</span>
                </div>

                <div className="space-y-2">
                  <div className="text-slate-400 flex items-center space-x-2">
                    <span className="text-emerald-400">$</span>
                    <span className="text-slate-100 font-semibold">{current.terminalSnippet.command}</span>
                  </div>
                  <div className="text-emerald-400">
                    ✓ {current.terminalSnippet.route}
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    {current.terminalSnippet.stats}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-bold">
                  <span className="flex items-center space-x-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{current.terminalSnippet.status}</span>
                  </span>
                  <span>ZERO-DOWNTIME SLA</span>
                </div>
              </div>

              {/* High-Resolution Stock Image Frame */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-white group">
                <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                  <img
                    src={current.image}
                    alt={displayTitle}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white px-3.5 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md flex items-center justify-between">
                    <span>{displayTitle} Engineering Studio</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Active Staging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: FULL-STACK ARCHITECTURE MATRIX (Clean, Professional, bg-white)
          ========================================================================= */}
      <section className="w-full bg-white py-24 border-b border-slate-200/80">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">ARCHITECTURE BLUEPRINT</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Full-Stack Engineering Matrix
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Every system we deploy is structured across 4 resilient architectural layers to eliminate technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {current.architectureLayers.map((layer: any, idx: number) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all space-y-3"
              >
                <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider">
                  {layer.layer}
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  {layer.tech}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CORE TECHNICAL CAPABILITIES (bg-[#F8FAFC])
          ========================================================================= */}
      <section className="w-full bg-[#F8FAFC] py-24 border-b border-slate-200/80">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">TECHNICAL ADVANTAGE</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Engineered for Speed, Reliability & Growth
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Benchmarked for sub-second execution, zero client bloat, and enterprise security compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {current.capabilities.map((cap: any, idx: number) => {
              const IconComp = cap.icon || Check
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                      {cap.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {cap.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRODUCTION DELIVERABLES & CODE OWNERSHIP (Executive Slate: bg-slate-900)
          ========================================================================= */}
      <section className="w-full bg-slate-900 text-white py-24">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% CODE & IP HANDOVER GUARANTEE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Tangible Production Artifacts
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Upon sprint completion, all intellectual property, source repositories, database migrations, and CI/CD keys are transferred 100% to your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.deliverables.map((item: string, idx: number) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700/80 space-y-3"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-white font-bold text-base leading-snug">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: 4-PHASE AGILE ENGINEERING SPRINT MODEL (bg-white)
          ========================================================================= */}
      <section className="w-full bg-white py-24 border-b border-slate-200/80">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16 space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">SPRINT METHODOLOGY</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              4-Phase Delivery Framework
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Bi-weekly live staging demos, weekly progress reviews, and direct Slack access with principal software architects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: '01', title: 'Architectural RFC', duration: 'Week 1', desc: 'Requirements audit, database architecture, and technical RFC specification.' },
              { phase: '02', title: 'Figma UI/UX Tokens', duration: 'Week 1–2', desc: 'Clickable prototypes and atomic design token handoff for engineering sign-off.' },
              { phase: '03', title: 'Agile 2-Week Sprints', duration: 'Week 2–4', desc: 'Rapid development cycles with bi-weekly live staging demos and PR reviews.' },
              { phase: '04', title: 'Hardened QA & Launch', duration: 'Week 4', desc: 'Security penetration testing, 100/100 Core Web Vitals audit, and zero-downtime rollout.' },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 space-y-4 hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-indigo-600">
                    {step.phase}
                  </span>
                  <span className="text-xs font-bold font-mono text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: STRATEGIC CALL TO ACTION
          ========================================================================= */}
      <CTABlock block={{ heading: `Ready to Architect Your ${displayTitle} System?` }} />
    </div>
  )
}
