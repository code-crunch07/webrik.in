'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
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
  Cpu,
  Lock,
  Terminal,
  Activity,
  Server,
  Globe,
  Radio,
} from 'lucide-react'
import { ProjectCalculator } from '@/components/interactive/ProjectCalculator'

interface CyberAgencyHomepageProps {
  dynamicData?: any
}

export const CyberAgencyHomepage: React.FC<CyberAgencyHomepageProps> = ({ dynamicData }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'saas' | 'marketing'>('web')
  const [activeWorkFilter, setActiveWorkFilter] = useState('All')

  // Hero flagship showcase tabs
  const heroTabs = {
    web: {
      title: 'Full-Stack Next.js 16 Web Applications',
      tag: 'ARCHITECTURE // SUB-20MS EDGE TTFB',
      description:
        'Next-gen web applications engineered with Next.js 16 App Router, React 19 Server Components, and Payload CMS 3. Zero runtime client bloat, 100/100 Core Web Vitals, and instant edge streaming.',
      image: '/illustrations/webdev-nextjs.jpg',
      metrics: [
        { label: 'Lighthouse Score', value: '100 / 100' },
        { label: 'Global Edge TTFB', value: '< 20ms' },
        { label: 'Sprint Velocity', value: '2–4 Weeks' },
      ],
      link: '/services/web-development',
    },
    mobile: {
      title: 'Native iOS & Android Mobile Ecosystems',
      tag: 'MOBILE // 60FPS FLUID PERFORMANCE',
      description:
        'Crafted mobile applications compiled to native Swift and Kotlin bytecode with React Native. Biometric FaceID/TouchID security, offline SQLite syncing, and guaranteed App Store approval.',
      image: '/illustrations/mobile-app.jpg',
      metrics: [
        { label: 'App Store Rating', value: '4.9 ★' },
        { label: 'Frame Rate', value: '60 FPS Native' },
        { label: 'Store Approval', value: '100% Guaranteed' },
      ],
      link: '/services/mobile-app-development',
    },
    saas: {
      title: 'Multi-Tenant Cloud SaaS & Microservices',
      tag: 'CLOUD // 99.99% UPTIME SLA',
      description:
        'Scalable cloud SaaS products engineered with multi-tenant PostgreSQL clustering, row-level data partitioning, automated Stripe metered billing, and sub-25ms microservice APIs.',
      image: '/illustrations/saas-platform.jpg',
      metrics: [
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'API Response', value: '24.3ms' },
        { label: 'Security Level', value: 'SOC-2 Ready' },
      ],
      link: '/services/saas-development',
    },
    marketing: {
      title: 'Attribution & Performance Growth Engines',
      tag: 'GROWTH // 3.4X AVERAGE ROAS',
      description:
        'Full-funnel digital acquisition combining high-intent Google Search PPC, visual Meta Ads, direct server-to-server Meta CAPI event routing, and technical SEO market dominance.',
      image: '/illustrations/growth-marketing.jpg',
      metrics: [
        { label: 'Average ROAS', value: '3.4x' },
        { label: 'Attribution Accuracy', value: '100% Verified' },
        { label: 'Monthly Bookings', value: '12k+' },
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
      features: ['Streaming Server Components', 'Headless Payload CMS 3', 'PostgreSQL DB Clustering'],
    },
    {
      title: 'Native Mobile Applications',
      badge: 'IOS & ANDROID NATIVE',
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
    <div className="w-full bg-[#050711] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans relative overflow-hidden">
      {/* Cyber Ambient Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-[1800px] left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] pointer-events-none" />

      {/* =========================================================================
          SECTION 1: HERO SECTION — HIGH-TECH CYBER POSITIONING & TELEMETRY
          ========================================================================= */}
      <section className="relative pt-36 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Glowing Cyber Pill Beacon */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-400 shadow-[0_0_20px_-3px_rgba(6,182,212,0.3)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>WEBRIK CYBER ARCHITECTURE // 2026</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">EDGE CLUSTERS ONLINE</span>
            </div>

            {/* Massive Commanding Cyber Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.04]">
              Engineering{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                Mission-Critical
              </span>{' '}
              Web &amp; Cloud Platforms.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              We architect high-concurrency web applications, native mobile ecosystems, and multi-channel acquisition funnels with sub-20ms edge latency and zero technical debt.
            </p>

            {/* Glowing Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_-3px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Initialize Technical Discovery</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-xl text-base font-bold text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-white hover:bg-slate-800/90 backdrop-blur-md transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore Production Systems</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </div>

          {/* Right Hero: Live Cyber Telemetry Command Terminal */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-[#080D20]/90 backdrop-blur-xl border border-cyan-500/30 p-6 shadow-[0_0_50px_-15px_rgba(6,182,212,0.25)] space-y-5 font-mono text-xs">
              {/* Terminal Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center space-x-1.5 text-cyan-400 font-bold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>webrik-edge // node-01</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="space-y-2.5 text-slate-300">
                <div className="text-slate-400 flex items-center space-x-2">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span className="text-white font-semibold">next build --target=edge-clusters</span>
                </div>
                <div className="text-emerald-400 text-[11px]">
                  ✓ Compiled 28 Server Components in 38ms
                </div>
                <div className="text-cyan-300 text-[11px]">
                  ✓ Global Edge Latency: 14.8ms • Sub-Second FCP
                </div>
                <div className="text-slate-400 text-[11px]">
                  ✓ PostgreSQL Connection Pool: 48 Active / 0 Idle
                </div>
                <div className="text-slate-400 text-[11px]">
                  ✓ Security: AES-256-GCM • SOC-2 Hardened RBAC
                </div>
              </div>

              {/* Telemetry Status Footer */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>99.99% UPTIME SLA</span>
                </span>
                <span className="text-cyan-400 font-mono">100/100 LIGHTHOUSE</span>
              </div>
            </div>

            {/* Floating Cyber HUD Card */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-between shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Zero Technical Debt Guarantee</div>
                  <div className="text-[11px] text-slate-400">Strict TypeScript &amp; 100% IP Handover</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">VERIFIED</span>
            </div>
          </div>
        </div>

        {/* 3-Node Cyber Architecture Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 mt-12 border-t border-slate-800/80">
          <div className="p-6 rounded-2xl bg-[#090E24]/60 border border-slate-800/90 hover:border-cyan-500/30 transition-colors space-y-2">
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold">
              <Zap className="w-4 h-4" />
              <span>SUB-20MS EDGE STREAMING</span>
            </div>
            <h3 className="text-base font-bold text-white">Next.js 16 App Router</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Zero client hydration waterfalls. Server Components stream HTML instantaneously to users and search crawlers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090E24]/60 border border-slate-800/90 hover:border-cyan-500/30 transition-colors space-y-2">
            <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-bold">
              <Database className="w-4 h-4" />
              <span>HEADLESS PAYLOAD CMS 3</span>
            </div>
            <h3 className="text-base font-bold text-white">TypeScript-Native Admin</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Decoupled content operations querying local PostgreSQL instances. Marketing teams deploy landing pages with zero dev tickets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#090E24]/60 border border-slate-800/90 hover:border-cyan-500/30 transition-colors space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% INTELLECTUAL PROPERTY</span>
            </div>
            <h3 className="text-base font-bold text-white">Full Source Handover</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Zero vendor lock-in. Complete Git trees, automated CI/CD keys, database migrations, and production environments belong to you.
            </p>
          </div>
        </div>

        {/* Client Trust Strip */}
        <div className="pt-16 pb-8 border-b border-slate-800/80 mt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
            <span>TRUSTED BY FAST-GROWING ENTERPRISES &amp; VENTURE-BACKED STARTUPS</span>
            <div className="flex flex-wrap items-center gap-8 font-black text-slate-400 text-sm tracking-tight opacity-70 hover:opacity-100 transition-opacity">
              <span className="hover:text-cyan-400 transition-colors">GOOGLE CLOUD</span>
              <span className="hover:text-cyan-400 transition-colors">POWAIFLATS</span>
              <span className="hover:text-cyan-400 transition-colors">RRENA JEWELS</span>
              <span className="hover:text-cyan-400 transition-colors">LENSZA</span>
              <span className="hover:text-cyan-400 transition-colors">NVIZION</span>
              <span className="hover:text-cyan-400 transition-colors">HABIBS</span>
            </div>
          </div>
        </div>

        {/* Interactive Flagship Platform Showcase */}
        <div className="pt-16">
          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-fit mb-8 backdrop-blur-md">
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
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Card */}
          <div className="rounded-3xl bg-[#080E24]/80 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                  {currentTab.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {currentTab.title}
                </h2>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
                  {currentTab.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-800">
                  {currentTab.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-2xl font-black text-white font-mono">{m.value}</div>
                      <div className="text-xs font-medium text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href={currentTab.link}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 group"
                  >
                    <span>Explore Full Architecture &amp; Deliverables</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Media Preview */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 bg-slate-900 group relative">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={currentTab.image}
                      alt={currentTab.title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 opacity-90 hover:opacity-100"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-white flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-200">{currentTab.title}</span>
                    <span className="text-cyan-400 font-bold">100% Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: AGENCY CAPABILITIES INDEX (6 Cyber Cards)
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block">
              PRACTICE AREAS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Complete Digital Product Engineering.
            </h2>
            <p className="text-slate-400 text-lg">
              Every discipline is led by senior practitioners dedicated to architectural performance and business outcomes.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 group shrink-0"
          >
            <span>View All 6 Core Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#090E24]/60 border border-slate-800 p-8 shadow-sm hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)] transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-6">
                {/* Top Image Preview */}
                <div className="h-48 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-cyan-400 border border-cyan-500/30 font-mono">
                    {cap.badge}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-cyan-400">{cap.stat}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-2 pt-2 border-t border-slate-800 text-xs font-semibold text-slate-300">
                  {cap.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href={`/services/${cap.slug}`}
                  className="inline-flex items-center space-x-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
                >
                  <span>Review Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SELECTED WORK & VERIFIED CASE STUDIES
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block">
              PRODUCTION RECORD
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Selected Client Case Studies.
            </h2>
            <p className="text-slate-400 text-lg">
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
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
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
              className="rounded-3xl bg-[#090E24]/60 border border-slate-800 overflow-hidden shadow-xs hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Media Image */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-400 border border-cyan-500/30">
                    {study.category}
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="space-y-1">
                    <div className="text-sm font-black text-cyan-400 font-mono">{study.metric}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{study.metricLabel}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {study.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800 text-[11px] font-mono"
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
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
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
          SECTION 4: THE 4-STAGE CYBER SPRINT OPERATING SYSTEM
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block">
            SPRINT METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            A Transparent 4-Stage Operating System.
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
              className="p-8 rounded-3xl bg-[#090E24]/60 border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-cyan-400 font-mono">{phase.step}</span>
                <span className="font-mono text-xs font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                  {phase.timeline}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{phase.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-normal">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INTERACTIVE PROJECT CALCULATOR
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/80">
        <ProjectCalculator />
      </section>

      {/* =========================================================================
          SECTION 6: EXECUTIVE TESTIMONIALS
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block">
            CLIENT TESTIMONY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Endorsed by Engineering &amp; Growth Leaders.
          </h2>
          <p className="text-slate-400 text-lg">
            Real partnerships. Measurable business outcomes. Zero vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#090E24]/60 border border-slate-800 shadow-xs space-y-6 flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-md">
                    {t.metric}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-700"
                />
                <div>
                  <div className="font-bold text-white text-sm">{t.author}</div>
                  <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: STRATEGIC CALL TO ACTION
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#080E24] via-slate-900 to-[#0A122E] border border-cyan-500/30 relative overflow-hidden shadow-[0_0_60px_-15px_rgba(6,182,212,0.25)]">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <span>PROJECT COMMISSIONS OPEN</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Architect Your Next Digital Platform?
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Schedule a 30-minute technical discovery call directly with our principal software architects. We will review your requirements, analyze architectural constraints, and prepare a sprint roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-9 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Book Technical Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-xl text-base font-bold text-slate-300 bg-slate-900/80 border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
