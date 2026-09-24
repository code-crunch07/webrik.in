'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
  Code2,
  Smartphone,
  Cloud,
  Database,
  Search,
  TrendingUp,
  ShieldCheck,
  Star,
  Award,
  Clock,
  Cpu,
  Lock,
  ChevronRight,
  Sliders,
  DollarSign,
  Terminal,
  ExternalLink,
} from 'lucide-react'
import { ProjectCalculator } from '@/components/interactive/ProjectCalculator'

interface PremiumAgencyHomepageProps {
  dynamicData?: any
}

export const PremiumAgencyHomepage: React.FC<PremiumAgencyHomepageProps> = ({ dynamicData }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'saas' | 'marketing'>('web')
  const [activeWorkFilter, setActiveWorkFilter] = useState('All')

  // Hero flagship showcase tabs
  const heroTabs = {
    web: {
      title: 'Full-Stack Next.js 16 Web Applications',
      tag: 'ARCHITECTURE // SUB-20MS TTFB',
      description:
        'Custom web applications engineered with Next.js 16, Payload CMS 3, and PostgreSQL. 100/100 Core Web Vitals, zero runtime hydration bloat, and sub-second page loads.',
      image: '/illustrations/webdev-nextjs.jpg',
      metrics: [
        { label: 'Lighthouse Score', value: '100 / 100' },
        { label: 'Edge Latency', value: '< 20ms' },
        { label: 'Delivery Velocity', value: '2–4 Weeks' },
      ],
      link: '/services/web-development',
    },
    mobile: {
      title: 'Native iOS & Android Mobile Ecosystems',
      tag: 'MOBILE // 60FPS FLUID NATIVE',
      description:
        'Crafted mobile applications built with React Native and native performance modules. Biometric security, offline SQLite caching, and guaranteed App Store approval.',
      image: '/illustrations/mobile-app.jpg',
      metrics: [
        { label: 'App Store Rating', value: '4.9 ★' },
        { label: 'Frame Rate', value: '60 FPS' },
        { label: 'Approval Rate', value: '100%' },
      ],
      link: '/services/mobile-app-development',
    },
    saas: {
      title: 'Multi-Tenant Cloud SaaS & Microservices',
      tag: 'CLOUD // 99.99% UPTIME SLA',
      description:
        'Multi-tenant cloud platforms powered by PostgreSQL row-level partitioning, automated Stripe metered billing, granular RBAC access controls, and sub-25ms APIs.',
      image: '/illustrations/saas-platform.jpg',
      metrics: [
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'API Response', value: '24.3ms' },
        { label: 'Security Standard', value: 'SOC-2 Ready' },
      ],
      link: '/services/saas-development',
    },
    marketing: {
      title: 'Attribution & Performance Growth Engines',
      tag: 'GROWTH // 3.4X AVERAGE ROAS',
      description:
        'Data-driven full-funnel acquisition combining Google Search PPC, visual Meta Ads, server-side Meta CAPI tracking, and technical SEO market dominance.',
      image: '/illustrations/growth-marketing.jpg',
      metrics: [
        { label: 'Average ROAS', value: '3.4x' },
        { label: 'Attribution Accuracy', value: '100%' },
        { label: 'Monthly Leads', value: '12k+' },
      ],
      link: '/services/digital-marketing',
    },
  }

  const currentTab = heroTabs[activeTab]

  // Flagship Agency Capabilities
  const capabilities = [
    {
      title: 'Full-Stack Web Development',
      badge: 'NEXT.JS 16 & REACT 19',
      desc: 'High-performance web applications engineered for sub-second server response times, headless CMS flexibility, and 100/100 Core Web Vitals.',
      slug: 'web-development',
      image: '/illustrations/webdev-nextjs.jpg',
      stat: '< 20ms Edge TTFB',
      features: ['Streaming Server Components', 'Headless Payload CMS', 'PostgreSQL DB Clustering'],
    },
    {
      title: 'Native Mobile Applications',
      badge: 'IOS & ANDROID',
      desc: 'Fluid native experiences engineered with React Native, 60fps animations, biometric FaceID security, and offline SQLite synchronization.',
      slug: 'mobile-app-development',
      image: '/illustrations/mobile-app.jpg',
      stat: '60 FPS Native UI',
      features: ['Single Unified Codebase', 'Biometric Keychain Security', 'Instant App Store Approval'],
    },
    {
      title: 'Cloud SaaS Platform Engineering',
      badge: 'MULTI-TENANT ARCHITECTURE',
      desc: 'Scalable cloud SaaS products engineered with PostgreSQL row-level security, automated Stripe metered billing, and microservice APIs.',
      slug: 'saas-development',
      image: '/illustrations/saas-platform.jpg',
      stat: '99.99% Uptime SLA',
      features: ['Tenant Cryptographic Isolation', 'Stripe Metered Billing', 'Sub-25ms Microservices'],
    },
    {
      title: 'Headless E-Commerce Solutions',
      badge: 'SUB-SECOND CATALOG',
      desc: 'Custom online stores built for lightning-fast search, 1-click accelerated checkout, multi-currency global reach, and maximum cart conversion.',
      slug: 'e-commerce-development',
      image: '/illustrations/ecommerce-service.jpg',
      stat: '+42% Cart Conversion',
      features: ['Instant Algolia Search', '1-Click Apple Pay Checkout', 'Automated Inventory Sync'],
    },
    {
      title: 'Performance Marketing & SEO',
      badge: 'HIGH-INTENT ACQUISITION',
      desc: 'Full-funnel digital marketing campaigns combining Google Search PPC, high-converting Meta Ads, server-side CAPI tracking, and SEO dominance.',
      slug: 'digital-marketing',
      image: '/illustrations/growth-marketing.jpg',
      stat: '3.4x Average ROAS',
      features: ['Server-Side CAPI Tracking', 'Commercial Search PPC', 'Technical SEO Audits'],
    },
    {
      title: 'UI/UX Design Systems',
      badge: 'FIGMA TOKENS & CODE PARITY',
      desc: 'Atomic component libraries, clickable interactive prototypes, and design tokens mapped directly to TailwindCSS for zero-debt developer handoff.',
      slug: 'ui-ux-design',
      image: '/illustrations/uiux-design-service.jpg',
      stat: '100% Code Parity',
      features: ['Figma Auto-Layout Variants', 'Interactive Clickable Prototypes', 'Tailwind Design Tokens'],
    },
  ]

  // Featured Case Studies
  const caseStudies = [
    {
      title: 'PowaiFlats Luxury Real Estate Portal',
      client: 'PowaiFlats Developer Network',
      category: 'Web App',
      metric: '+180% Organic Leads',
      metricLabel: 'within 60 days of launch',
      image: '/illustrations/webdev-nextjs.jpg',
      slug: 'powaiflats-portal',
      tags: ['Next.js 16', 'PostgreSQL', 'TailwindCSS', 'Google Maps'],
      summary:
        'Engineered a high-speed luxury real estate portal featuring 360-degree interactive tours, phone-verified lead funnels, and CRM automation.',
    },
    {
      title: 'RRENA Luxury Jewellery E-Store',
      client: 'RRENA Luxury Global',
      category: 'E-Commerce',
      metric: '4.2x Cart Conversion',
      metricLabel: 'compared to legacy Shopify store',
      image: '/illustrations/ecommerce-service.jpg',
      slug: 'rrena-jewels-estore',
      tags: ['React 19', 'Payload CMS 3', 'Shopify Plus', 'Stripe'],
      summary:
        'Headless e-commerce storefront with 3D product configurators, localized multi-currency checkout, and server-side conversion tracking.',
    },
    {
      title: 'Lensza Eyewear AR Mobile App',
      client: 'Lensza Technologies',
      category: 'Mobile App',
      metric: '4.9 ★ (12k Reviews)',
      metricLabel: 'on iOS App Store & Google Play',
      image: '/illustrations/mobile-app.jpg',
      slug: 'lensza-eyewear-app',
      tags: ['React Native', 'ARKit', 'Node.js', 'Firebase'],
      summary:
        'AR-enabled virtual try-on mobile application with face-mesh tracking, offline SQLite caching, and one-tap checkout.',
    },
    {
      title: 'Nvizion Marketing Intelligence SaaS',
      client: 'Nvizion Analytics',
      category: 'Cloud SaaS',
      metric: '99.99% Uptime SLA',
      metricLabel: 'across 450k daily active sessions',
      image: '/illustrations/saas-platform.jpg',
      slug: 'nvizion-analytics-saas',
      tags: ['Next.js 16', 'PostgreSQL', 'Redis', 'Docker'],
      summary:
        'Enterprise multi-tenant marketing intelligence platform featuring real-time multi-touch attribution dashboards and Stripe billing.',
    },
    {
      title: 'Habibs Pan-India Brand Growth Engine',
      client: 'Habibs Hair & Beauty',
      category: 'Growth',
      metric: '+320% ROAS',
      metricLabel: 'scaling to 12,000+ monthly bookings',
      image: '/illustrations/growth-marketing.jpg',
      slug: 'habibs-brand-growth',
      tags: ['Google Ads PPC', 'Meta Pixel', 'Server CAPI', 'CRO Funnels'],
      summary:
        'Omni-channel performance marketing campaign combining high-intent Google Search, visual Meta funnels, and server-side CAPI tracking.',
    },
    {
      title: 'GreyOrange Warehouse Automation UI',
      client: 'GreyOrange Robotics',
      category: 'Web App',
      metric: '21ms WebSocket Latency',
      metricLabel: 'live hardware telemetry feed',
      image: '/illustrations/uiux-design-service.jpg',
      slug: 'greyorange-cloud-dashboard',
      tags: ['TypeScript', 'Design Systems', 'WebSockets', 'Tailwind'],
      summary:
        'Mission-critical warehouse automation dashboard rendering real-time IoT robot status with zero frame drops.',
    },
  ]

  const filteredWork =
    activeWorkFilter === 'All'
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeWorkFilter)

  // Executive Testimonials
  const testimonials = [
    {
      quote:
        'Webrik rebuilt our real estate portal with Next.js 16 and PostgreSQL. Our page load speeds dropped below 300ms, and our qualified organic lead volume doubled within 45 days.',
      author: 'Rajesh Mehta',
      role: 'Chief Technology Officer',
      company: 'FinEdge Global',
      metric: '+180% Leads',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'The mobile app Webrik engineered has a fluid 60fps feel that rivals Silicon Valley native apps. Their senior architects communicated daily on Slack with zero agency bureaucracy.',
      author: 'Ananya Sharma',
      role: 'Founder & CEO',
      company: 'RetailWave',
      metric: '4.9 ★ Rating',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Their cloud SaaS architecture handled our 10x traffic spike during holiday sales without breaking a sweat. Sub-25ms response times across the globe. Pure engineering excellence.',
      author: 'Vikram Singhania',
      role: 'VP of Engineering',
      company: 'CloudScale',
      metric: '99.99% SLA',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
  ]

  return (
    <div className="w-full bg-[#FAFAFD] text-slate-900 selection:bg-indigo-600 selection:text-white font-sans">
      {/* =========================================================================
          SECTION 1: HERO SECTION — HIGH-IMPACT STUDIO POSITIONING
          ========================================================================= */}
      <section className="relative pt-36 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="space-y-8 max-w-4xl">
          {/* Studio Status Beacon */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-mono font-bold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-indigo-600 uppercase tracking-wider">WEBRIK STUDIO</span>
            <span className="text-slate-300">•</span>
            <span>ACCEPTING Q3/Q4 PARTNERSHIPS</span>
          </div>

          {/* Commanding Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-950 tracking-tight leading-[1.02]">
            We Engineer High-Impact Software &amp; Digital Growth.
          </h1>

          {/* Strategic Value Proposition */}
          <p className="text-slate-600 text-xl sm:text-2xl leading-relaxed max-w-3xl font-normal">
            Webrik is an engineering &amp; performance marketing agency. We build resilient Next.js web applications, native mobile apps, and multi-channel acquisition engines for high-velocity brands.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-9 py-4 rounded-xl text-base font-bold text-white bg-slate-950 hover:bg-indigo-600 shadow-xl shadow-slate-950/10 hover:shadow-2xl transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl text-base font-bold text-slate-800 bg-white border border-slate-200/90 hover:border-indigo-300 hover:bg-slate-50 transition-all flex items-center justify-center space-x-2 shadow-xs"
            >
              <span>Explore Production Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Live Client Trust Bar */}
        <div className="pt-16 pb-8 border-b border-slate-200/80 mt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
            <span>TRUSTED BY FAST-GROWING ENTERPRISES &amp; VENTURE-BACKED STARTUPS</span>
            <div className="flex flex-wrap items-center gap-8 font-black text-slate-700 text-sm tracking-tight opacity-70 grayscale hover:grayscale-0 transition-all">
              <span>GOOGLE CLOUD</span>
              <span>POWAIFLATS</span>
              <span>RRENA JEWELS</span>
              <span>LENSZA</span>
              <span>NVIZION</span>
              <span>HABIBS</span>
            </div>
          </div>
        </div>

        {/* Interactive Flagship Capability Previewer */}
        <div className="pt-12">
          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl max-w-fit mb-8 shadow-inner">
            {[
              { id: 'web', label: 'Web Applications' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'saas', label: 'Cloud SaaS' },
              { id: 'marketing', label: 'Growth Marketing' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-950 shadow-md shadow-slate-900/5'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
                  {currentTab.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  {currentTab.title}
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {currentTab.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100">
                  {currentTab.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-2xl font-black text-slate-900">{m.value}</div>
                      <div className="text-xs font-medium text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href={currentTab.link}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 group"
                  >
                    <span>Explore Full Architecture &amp; Deliverables</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Media Preview */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-slate-100 group relative">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={currentTab.image}
                      alt={currentTab.title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-white flex items-center justify-between text-xs font-mono">
                    <span className="font-bold">{currentTab.title}</span>
                    <span className="text-emerald-400 font-bold">100% Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: AGENCY CAPABILITIES INDEX (Clean 6-Card Grid)
          ========================================================================= */}
      <section className="w-full bg-white py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
                PRACTICE AREAS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Complete Digital Product Engineering.
              </h2>
              <p className="text-slate-600 text-lg">
                Every discipline is led by senior practitioners dedicated to architectural performance and business outcomes.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-indigo-600 group shrink-0"
            >
              <span>View All 6 Core Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#FAFAFD] border border-slate-200/80 p-8 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-6">
                  {/* Top Image Preview */}
                  <div className="h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 relative">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-indigo-700 shadow-2xs font-mono">
                      {cap.badge}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-emerald-600">{cap.stat}</div>
                    <h3 className="text-2xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
                    {cap.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/services/${cap.slug}`}
                    className="inline-flex items-center space-x-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Review Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SELECTED WORK & VERIFIED CASE STUDIES
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
              PRODUCTION RECORD
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Selected Client Case Studies.
            </h2>
            <p className="text-slate-600 text-lg">
              Measurable commercial outcomes backed by verified metrics and production architectures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Web App', 'Mobile App', 'Cloud SaaS', 'E-Commerce'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveWorkFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeWorkFilter === filter
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map((study, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Media Image */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-slate-800 shadow-2xs">
                    {study.category}
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="space-y-1">
                    <div className="text-sm font-black text-indigo-600">{study.metric}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{study.metricLabel}</div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {study.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE WEBRIK SPRINT METHODOLOGY (Operating System)
          ========================================================================= */}
      <section className="w-full bg-[#090D1A] text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-widest block">
              SPRINT FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              A Transparent, 4-Stage Operating System.
            </h2>
            <p className="text-slate-400 text-lg">
              No black-box handoffs. We operate in continuous 2-week agile sprints with bi-weekly live staging demos and direct Slack access with principal software architects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & RFC',
                timeline: 'Week 1',
                desc: 'Technical constraints audit, database schema architecture, user story mapping, and engineering RFC sign-off.',
              },
              {
                step: '02',
                title: 'Figma UI/UX Tokens',
                timeline: 'Week 1–2',
                desc: 'Atomic design system tokens, clickable interactive prototypes, and 1:1 code parity preparation.',
              },
              {
                step: '03',
                title: 'Agile 2-Week Sprints',
                timeline: 'Week 2–4',
                desc: 'Continuous code reviews, unit testing gates, and bi-weekly live staging demos deployed to Vercel/AWS edges.',
              },
              {
                step: '04',
                title: 'Hardened QA & Launch',
                timeline: 'Week 4',
                desc: 'Penetration testing, 100/100 Core Web Vitals audit, server-side CAPI tracking, and zero-downtime deployment.',
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 hover:border-indigo-500 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-indigo-400">{phase.step}</span>
                  <span className="font-mono text-xs font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                    {phase.timeline}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: AGENCY COMPARISON MATRIX (Why Industry Leaders Choose Us)
          ========================================================================= */}
      <section className="w-full bg-white py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
              THE AGENCY ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Traditional IT Agencies vs. Webrik Studio.
            </h2>
            <p className="text-slate-600 text-lg">
              Why fast-moving venture founders and enterprise leaders switch to our dedicated sprint model.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg shadow-slate-900/5">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {/* Traditional Agency */}
              <div className="p-8 sm:p-12 bg-slate-50 space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    THE STATUS QUO
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700">Traditional IT Agencies</h3>
                </div>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Junior developers assigned after the sales pitch</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Bloated WordPress or legacy PHP tech stack traps</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Layers of non-technical account managers relaying messages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Vendor lock-in with proprietary licenses and trapped code</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span>Surprise invoices, Scope creep, and delayed launch dates</span>
                  </li>
                </ul>
              </div>

              {/* Webrik Studio */}
              <div className="p-8 sm:p-12 bg-white space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                    THE WEBRIK STANDARD
                  </div>
                  <h3 className="text-2xl font-black text-slate-950">Webrik Software Studio</h3>
                </div>
                <ul className="space-y-4 text-sm text-slate-800 font-medium">
                  <li className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Dedicated principal architects and senior engineers directly on your project</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Modern full-stack: Next.js 16, React 19, TypeScript, PostgreSQL, and Payload CMS 3</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Direct engineering communication via private shared Slack/Discord channels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>100% full intellectual property &amp; source code handover (zero vendor lock-in)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Transparent fixed-sprint pricing, guaranteed milestones, and verified velocity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INTERACTIVE PROJECT SCOPE & BUDGET CALCULATOR
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <ProjectCalculator />
      </section>

      {/* =========================================================================
          SECTION 7: EXECUTIVE ENDORSEMENTS & TESTIMONIALS
          ========================================================================= */}
      <section className="w-full bg-white py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
              CLIENT TESTIMONY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Endorsed by Engineering &amp; Growth Leaders.
            </h2>
            <p className="text-slate-600 text-lg">
              Real partnerships. Measurable business outcomes. Zero vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 shadow-xs space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/60">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="font-bold text-slate-950 text-sm">{t.author}</div>
                    <div className="text-slate-500 text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TECHNICAL INSIGHTS & ENGINEERING RFCS
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-widest block">
              THOUGHT LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Engineering Briefs &amp; Architecture Guides.
            </h2>
            <p className="text-slate-600 text-lg">
              In-depth articles covering Next.js 16 internals, PostgreSQL scaling, and performance marketing playbooks.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-sm font-bold text-slate-900 hover:text-indigo-600 group shrink-0"
          >
            <span>View All Engineering Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Why Next.js 16 + Payload CMS 3 is the Ultimate Enterprise Stack',
              desc: 'How decoupling frontend presentation with local API querying delivers 100/100 Lighthouse performance and zero maintenance overhead.',
              image: '/illustrations/webdev-nextjs.jpg',
              slug: 'why-nextjs-16-payload-cms-agency-stack',
              tag: 'ARCHITECTURE',
              readTime: '6 min read',
            },
            {
              title: 'Scaling Multi-Tenant SaaS with PostgreSQL Row-Level Security',
              desc: 'Architecting tenant cryptographic data partitioning, PgBouncer pooling, and Stripe metered usage billing.',
              image: '/illustrations/saas-platform.jpg',
              slug: 'building-multi-tenant-saas',
              tag: 'DATABASE',
              readTime: '8 min read',
            },
            {
              title: 'Bypassing Ad Blockers with Server-Side Meta CAPI & GA4',
              desc: 'Restoring 100% conversion attribution and lowering customer acquisition costs via direct server-to-server event routing.',
              image: '/illustrations/growth-marketing.jpg',
              slug: 'bypassing-ad-blockers-capi',
              tag: 'GROWTH',
              readTime: '5 min read',
            },
          ].map((post, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-indigo-700 shadow-2xs">
                    {post.tag}
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 font-semibold">{post.readTime}</div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {post.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: STRATEGIC CALL TO ACTION (Colophon)
          ========================================================================= */}
      <section className="w-full bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
              <span>PROJECT COMMISSIONS OPEN</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Ready to Architect Your Next Digital Platform?
            </h2>

            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed">
              Schedule a 30-minute technical discovery call directly with our principal software architects. We will review your requirements, analyze architectural constraints, and prepare a sprint roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-9 py-4 rounded-xl text-base font-bold text-slate-950 bg-white hover:bg-indigo-50 shadow-xl transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Book Technical Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-indigo-600" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
