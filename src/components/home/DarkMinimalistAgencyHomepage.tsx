'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
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
  Activity,
  Server,
  Globe,
  Lock,
  Terminal,
  Cpu,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Clock,
  Gauge,
  GitBranch,
  ExternalLink,
  MessageSquare,
  Plus,
  Minus,
  CheckCircle,
} from 'lucide-react'
import { ProjectCalculator } from '@/components/interactive/ProjectCalculator'

interface DarkMinimalistAgencyHomepageProps {
  dynamicData?: any
}

export const DarkMinimalistAgencyHomepage: React.FC<DarkMinimalistAgencyHomepageProps> = ({ dynamicData }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'web' | 'mobile' | 'saas' | 'growth'>('web')
  const [activeWorkFilter, setActiveWorkFilter] = useState('All')
  const [activeSprintStep, setActiveSprintStep] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Hero flagship showcase tabs with authentic technical specifications
  const heroTabs = {
    web: {
      title: 'Full-Stack Next.js 16 Web Applications',
      tag: 'ARCHITECTURE // SUB-20MS EDGE STREAMING',
      description:
        'Custom web applications engineered with Next.js 16 App Router, React 19 Server Components, and Payload CMS 3. Zero hydration waterfalls, 100/100 Core Web Vitals, and sub-second global edge delivery.',
      image: '/images/services/web-dev.jpg',
      metrics: [
        { label: 'Core Web Vitals', value: '100 / 100' },
        { label: 'Global Edge TTFB', value: '< 20ms' },
        { label: 'Sprint Cadence', value: '2–4 Weeks' },
      ],
      features: ['React 19 Server Components', 'Headless Payload CMS 3', 'PostgreSQL Row Partitioning'],
      link: '/services/web-development',
      codeSnippet: `// Next.js 16 App Router Edge Streaming
export default async function Page() {
  const data = await getEdgeData({ cache: 'force-cache' })
  return <Suspense fallback={<Skeleton />}><View data={data} /></Suspense>
}`,
    },
    mobile: {
      title: 'Native iOS & Android Mobile Ecosystems',
      tag: 'MOBILE // 60FPS FLUID PERFORMANCE',
      description:
        'Crafted mobile applications compiled to native Swift and Kotlin with React Native. Biometric FaceID security, offline SQLite caching, and guaranteed App Store approval.',
      image: '/images/services/mobile-app.jpg',
      metrics: [
        { label: 'App Store Rating', value: '4.9 ★' },
        { label: 'Frame Rate', value: '60 FPS Native' },
        { label: 'Store Approval', value: '100% Guaranteed' },
      ],
      features: ['Single Unified Codebase', 'Biometric Keychain Security', 'Offline SQLite Database'],
      link: '/services/mobile-app-development',
      codeSnippet: `// Native Biometric Security Layer
const auth = await LocalAuthentication.authenticateAsync({
  promptMessage: 'Unlock Webrik Secure Vault',
  fallbackLabel: 'Use Device Passcode',
})`,
    },
    saas: {
      title: 'Multi-Tenant Cloud SaaS & Microservices',
      tag: 'CLOUD // 99.99% UPTIME SLA',
      description:
        'Multi-tenant cloud platforms powered by PostgreSQL row-level partitioning, automated Stripe metered billing, granular RBAC access controls, and sub-25ms microservice APIs.',
      image: '/images/services/saas.jpg',
      metrics: [
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'API Response', value: '24.3ms' },
        { label: 'Security Standard', value: 'SOC-2 Ready' },
      ],
      features: ['Tenant Cryptographic Isolation', 'Stripe Metered Billing', 'Sub-25ms Microservices'],
      link: '/services/saas-development',
      codeSnippet: `// PostgreSQL Row-Level Multi-Tenancy
CREATE POLICY tenant_isolation_policy ON organizations
FOR ALL USING (tenant_id = current_setting('app.current_tenant_id'));`,
    },
    growth: {
      title: 'Attribution & Performance Growth Engines',
      tag: 'GROWTH // 3.4X AVERAGE ROAS',
      description:
        'Full-funnel digital acquisition combining high-intent Google Search PPC, visual Meta Ads, direct server-to-server Meta CAPI event routing, and technical SEO dominance.',
      image: '/images/services/marketing.jpg',
      metrics: [
        { label: 'Average ROAS', value: '3.4x' },
        { label: 'Attribution Accuracy', value: '100% Verified' },
        { label: 'Monthly Bookings', value: '12k+' },
      ],
      features: ['Server-Side CAPI Tracking', 'Commercial Search PPC', 'Conversion Funnel CRO'],
      link: '/services/digital-marketing',
      codeSnippet: `// Server-to-Server Meta CAPI Event Dispatch
await metaCapiClient.sendEvent({
  eventName: 'Purchase',
  eventTime: Math.floor(Date.now() / 1000),
  userData: { em: hashSha256(user.email) }
})`,
    },
  }

  const currentHero = heroTabs[activeHeroTab]

  // Flagship Agency Capabilities Matrix
  const capabilities = [
    {
      title: 'Full-Stack Web Platforms & Edge Architecture',
      badge: 'NEXT.JS 16 & REACT 19',
      desc: 'High-velocity web applications engineered with Next.js 16 App Router, React 19 Server Components, and decoupled Payload CMS 3. Sub-20ms edge latency, zero client waterfalls, and 100/100 Core Web Vitals.',
      slug: 'web-development',
      image: '/images/services/web-dev.jpg',
      stat: '< 20ms Edge TTFB',
      features: ['Streaming Server Components', 'Headless Payload CMS 3', 'PostgreSQL DB Clustering', '100/100 Core Web Vitals'],
      isLarge: true,
    },
    {
      title: 'Native Mobile Applications (iOS & Android)',
      badge: 'REACT NATIVE & FLUTTER',
      desc: 'Fluid native mobile experiences engineered with 60fps animations, biometric FaceID security, offline SQLite caching, and guaranteed App Store approval.',
      slug: 'mobile-app-development',
      image: '/images/services/mobile-app.jpg',
      stat: '60 FPS Native UI',
      features: ['Single Unified Codebase', 'Biometric Keychain Security', 'Offline SQLite Sync'],
      isLarge: false,
    },
    {
      title: 'Multi-Tenant Cloud SaaS Engineering',
      badge: 'MICROSERVICES & POSTGRESQL',
      desc: 'Scalable cloud SaaS products engineered with PostgreSQL row-level security, automated Stripe metered billing, granular RBAC, and sub-25ms microservice APIs.',
      slug: 'saas-development',
      image: '/images/services/saas.jpg',
      stat: '99.99% Uptime SLA',
      features: ['Tenant Cryptographic Isolation', 'Stripe Metered Billing', 'SOC-2 Compliance Ready'],
      isLarge: false,
    },
    {
      title: 'Headless E-Commerce Solutions',
      badge: 'SUB-SECOND CATALOG SEARCH',
      desc: 'Custom online stores built for lightning-fast catalog search, 1-click accelerated checkout, multi-currency global reach, and maximum cart conversion.',
      slug: 'e-commerce-development',
      image: '/images/services/ecommerce.jpg',
      stat: '+42% Cart Conversion',
      features: ['Instant Algolia Search', '1-Click Apple Pay Checkout', 'Automated Inventory Sync'],
      isLarge: false,
    },
    {
      title: 'Performance Marketing & Server Attribution (CAPI)',
      badge: 'HIGH-INTENT ACQUISITION',
      desc: 'Full-funnel digital marketing campaigns combining Google Search PPC, high-converting Meta Ads, server-side CAPI tracking, and technical SEO dominance.',
      slug: 'digital-marketing',
      image: '/images/services/marketing.jpg',
      stat: '3.4x Average ROAS',
      features: ['Server-Side CAPI Tracking', 'Commercial Search PPC', 'Technical SEO Audits', 'Full-Funnel CRO'],
      isLarge: true,
    },
    {
      title: 'UI/UX Design Systems & Micro-Interactions',
      badge: 'FIGMA TOKENS & 1:1 CODE PARITY',
      desc: 'Atomic component libraries, clickable interactive prototypes, and design tokens mapped directly to TailwindCSS for zero-debt developer handoff.',
      slug: 'ui-ux-design',
      image: '/images/services/uiux.jpg',
      stat: '100% Code Parity',
      features: ['Figma Auto-Layout Variants', 'Interactive Clickable Prototypes', 'Tailwind Design Tokens'],
      isLarge: false,
    },
  ]

  // Featured Case Studies with Authentic Photography
  const caseStudies = [
    {
      title: 'PowaiFlats Luxury Real Estate Portal',
      client: 'PowaiFlats Developer Network',
      category: 'Web App',
      metric: '+180% Organic Leads',
      metricLabel: 'within 60 days of production launch',
      image: '/images/services/web-dev.jpg',
      slug: 'powaiflats-portal',
      tags: ['Next.js 16', 'PostgreSQL', 'TailwindCSS', 'Google Maps API'],
      summary:
        'Engineered a high-speed luxury real estate portal featuring 360-degree interactive tours, phone-verified lead funnels, and CRM automation with sub-300ms page loads.',
    },
    {
      title: 'RRENA Luxury Jewellery E-Store',
      client: 'RRENA Luxury Global',
      category: 'E-Commerce',
      metric: '4.2x Cart Conversion',
      metricLabel: 'compared to legacy Shopify store',
      image: '/images/services/ecommerce.jpg',
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
      image: '/images/services/mobile-app.jpg',
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
      image: '/images/services/saas.jpg',
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
      image: '/images/services/marketing.jpg',
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
      image: '/images/services/uiux.jpg',
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

  // 4-Stage Operating System Data
  const sprintStages = [
    {
      step: '01',
      phase: 'Sprint 01',
      title: 'Technical Discovery & RFC Architecture',
      timeline: 'Week 1',
      deliverables: [
        'Architecture RFC (Request for Comments) Document',
        'Database Schema (ERD) & Entity Relationships',
        'API Contract Specifications & Edge Latency Budget',
        'Tech Stack & Cloud Infrastructure Selection',
      ],
      outcome: 'A concrete engineering roadmap with zero guesswork or ambiguity.',
    },
    {
      step: '02',
      phase: 'Sprint 02',
      title: 'Atomic Design Tokens & Interactive Prototypes',
      timeline: 'Week 1–2',
      deliverables: [
        'Atomic Design System in Figma (Auto-Layout)',
        'Design Tokens mapped 1:1 to Tailwind CSS classes',
        'Clickable High-Fidelity User Flows for Desktop & Mobile',
        'Design Review & User Journey Sign-Off',
      ],
      outcome: 'Zero design-to-code drift and seamless engineering handoff.',
    },
    {
      step: '03',
      phase: 'Sprint 03',
      title: 'Agile 2-Week Sprints & Staging Demos',
      timeline: 'Weeks 2–4',
      deliverables: [
        'Automated CI/CD with Vercel / AWS Edge deployments',
        'Weekly live staging environments for hands-on review',
        'Direct Slack/Discord channel with senior architects',
        'Unit & integration test coverage across all critical paths',
      ],
      outcome: 'Continuous production progress with zero agency black-box secrecy.',
    },
    {
      step: '04',
      phase: 'Sprint 04',
      title: 'Hardened QA, Core Web Vitals & IP Handover',
      timeline: 'Week 4',
      deliverables: [
        '100/100 Core Web Vitals audit & edge cache verification',
        'Penetration testing & OWASP Top 10 security review',
        'Server-to-server CAPI & Analytics event validation',
        '100% Full Source Code, Git Repository & Cloud Handover',
      ],
      outcome: 'A production platform ready for scale with complete intellectual property ownership.',
    },
  ]

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

  // Technical FAQs
  const faqs = [
    {
      q: 'Do we retain 100% intellectual property and source code ownership?',
      a: 'Yes, unconditionally. From Day 1, all repository commits, database schemas, Figma files, and cloud infrastructure keys belong entirely to your company. Webrik never locks code behind proprietary platforms or licenses.',
    },
    {
      q: 'How does Webrik consistently achieve sub-20ms edge latency and 100/100 Core Web Vitals?',
      a: 'We architect natively on Next.js 16 with React 19 Server Components, deploying to global edge networks. We stream HTML instantaneously without client hydration waterfalls, optimize WebP/AVIF media with responsive srcsets, and compile CSS with Tailwind utility pruning.',
    },
    {
      q: 'Can you migrate our legacy WordPress or PHP site to Next.js without losing SEO rankings?',
      a: 'Absolutely. We perform a complete URL inventory audit, implement 1:1 301 redirects, preserve canonical tags, and inject verified JSON-LD schema markup. Most migrations see an immediate 20–40% boost in organic rankings due to radical speed improvements.',
    },
    {
      q: 'How does your sprint cadence and client communication work?',
      a: 'We operate in dedicated 2-week agile sprints. You receive a private shared Slack or Discord channel directly with our principal architects (no non-technical middlemen). You receive weekly recorded Loom demos and live staging URLs on every pull request.',
    },
    {
      q: 'What post-launch SLA and maintenance support do you offer?',
      a: 'Every production deployment includes a 30-day post-launch warranty with priority hotfix support. We also provide ongoing monthly maintenance retainers covering security patches, dependency upgrades, 24/7 uptime monitoring, and feature iteration.',
    },
  ]

  return (
    <div className="w-full bg-[#050711] text-slate-100 selection:bg-cyan-400 selection:text-black font-sans relative overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[650px] bg-gradient-to-b from-indigo-600/15 via-blue-600/8 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[600px] h-[600px] bg-cyan-600/8 blur-[180px] pointer-events-none" />
      <div className="absolute top-[2800px] left-0 w-[600px] h-[600px] bg-purple-600/8 blur-[180px] pointer-events-none" />

      {/* =========================================================================
          SECTION 1: HERO SECTION — 1460PX EXPANSIVE CINEMATIC EDITORIAL
          ========================================================================= */}
      <section className="relative pt-36 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1460px] mx-auto z-10">
        <div className="space-y-8">
          {/* Status Capsule */}
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-medium text-slate-300 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-bold tracking-wider">WEBRIK SOFTWARE &amp; GROWTH STUDIO</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">ACCEPTING Q3/Q4 PARTNERSHIPS</span>
          </div>

          {/* Expansive Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-black text-white tracking-[-0.04em] leading-[0.96] max-w-6xl">
            We Architect{' '}
            <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-400 bg-clip-text text-transparent">
              High-Velocity Software
            </span>{' '}
            &amp; Growth Engines That Scale.
          </h1>

          {/* Strategic Two-Column Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-slate-400 text-xl sm:text-2xl leading-relaxed font-normal max-w-3xl">
                Webrik partners with ambitious founders and enterprise leaders to deploy sub-20ms Next.js web applications, native mobile ecosystems, and high-converting acquisition funnels.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-9 py-4 rounded-full text-base font-bold text-slate-950 bg-white hover:bg-slate-200 shadow-2xl shadow-white/10 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Schedule Architectural Discovery Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-full text-base font-bold text-slate-300 bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Production Case Studies</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0B0D18]/90 border border-white/10 backdrop-blur-md space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/10 pb-3">
                <span className="flex items-center space-x-2">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LIVE PRODUCTION TELEMETRY</span>
                </span>
                <span className="text-emerald-400 font-bold">100% OPERATIONAL</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-black text-white font-mono">$42M+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Client Revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-cyan-400 font-mono">&lt; 20ms</div>
                  <div className="text-xs text-slate-400 mt-0.5">Global Edge TTFB</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-indigo-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">IP Code Handover</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-emerald-400 font-mono">2–4 Wks</div>
                  <div className="text-xs text-slate-400 mt-0.5">Sprint Velocity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            HERO FLAGSHIP COCKPIT — INTERACTIVE LIVE ARCHITECTURE CONSOLE
            ===================================================================== */}
        <div className="mt-14 rounded-3xl bg-[#090C16] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Mode Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/[0.04] border border-white/10 rounded-2xl">
              {[
                { id: 'web', label: '01 / Next.js 16 Edge Platform', icon: Globe },
                { id: 'mobile', label: '02 / Native Mobile Physics', icon: Smartphone },
                { id: 'saas', label: '03 / Multi-Tenant Cloud SaaS', icon: Cloud },
                { id: 'growth', label: '04 / Performance Marketing & CAPI', icon: TrendingUp },
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveHeroTab(tab.id as any)}
                    className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      activeHeroTab === tab.id
                        ? 'bg-white text-slate-950 shadow-lg'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${activeHeroTab === tab.id ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="hidden lg:flex items-center space-x-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE DEMO SPECIFICATION</span>
            </div>
          </div>

          {/* Active Mode Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{currentHero.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {currentHero.title}
              </h2>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                {currentHero.description}
              </p>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
                {currentHero.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-black text-white font-mono">{m.value}</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Feature Checklist */}
              <div className="flex flex-wrap gap-3">
                {currentHero.features.map((feat, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={currentHero.link}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-cyan-400 group transition-colors"
                >
                  <span>Review Architecture Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Preview & Code Box */}
            <div className="lg:col-span-6 space-y-4">
              {/* Authentic Photo Preview Frame */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl relative group">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={currentHero.image}
                    alt={currentHero.title}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-200">{currentHero.title}</span>
                  <span className="text-emerald-400 font-bold flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified Production</span>
                  </span>
                </div>
              </div>

              {/* Mini Terminal Code Card */}
              <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-slate-500">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-slate-400 ml-2">architecture.spec.ts</span>
                  </div>
                  <span className="text-[10px] text-cyan-400">TypeScript 5.x</span>
                </div>
                <pre className="text-slate-300 overflow-x-auto leading-relaxed text-[11px]">
                  <code>{currentHero.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Client & Tech Stack Partner Marquee */}
        <div className="pt-16 pb-8 border-b border-white/10 mt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
            <span>ENGINEERED WITH MODERN INDUSTRY STANDARDS</span>
            <div className="flex flex-wrap items-center gap-8 font-black text-slate-400 text-sm tracking-tight opacity-75 hover:opacity-100 transition-opacity">
              <span>NEXT.JS 16</span>
              <span>REACT 19</span>
              <span>PAYLOAD CMS 3</span>
              <span>POSTGRESQL</span>
              <span>TAILWIND CSS</span>
              <span>DOCKER</span>
              <span>VERCEL EDGE</span>
              <span>STRIPE API</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: AGENCY CAPABILITIES MATRIX — 1460PX ASYMMETRIC BENTO GRID
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-[1460px] mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">
              <span>CORE PRACTICE AREAS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Complete Digital Product Engineering.
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl">
              Every discipline is spearheaded by senior architects committed to verifiable speed, pristine code, and maximum conversion.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-cyan-400 group shrink-0"
          >
            <span>Explore All 6 Practice Areas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`rounded-3xl bg-[#090C16] border border-white/10 p-8 sm:p-10 shadow-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between group space-y-6 relative overflow-hidden ${
                cap.isLarge ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div className="space-y-6">
                {/* Media Frame */}
                <div
                  className={`rounded-2xl overflow-hidden bg-slate-900 border border-white/10 relative ${
                    cap.isLarge ? 'h-64 sm:h-72' : 'h-52'
                  }`}
                >
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-white border border-white/10">
                    {cap.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-emerald-400 border border-emerald-500/30">
                    {cap.stat}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>

                {/* Feature Checklist */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10 text-xs sm:text-sm font-semibold text-slate-300">
                  {cap.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/services/${cap.slug}`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                >
                  <span>Architecture &amp; Deliverables</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-mono text-slate-500">2–4 Wk Sprints</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SELECTED PRODUCTION CASE STUDIES — 1460PX EDITORIAL
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-[1460px] mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">
              <span>VERIFIED PRODUCTION RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Selected Client Case Studies.
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl">
              Measurable business outcomes backed by verifiable performance metrics and hardened architectures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#090C16] border border-white/10 rounded-2xl">
            {['All', 'Web App', 'Mobile App', 'Cloud SaaS', 'E-Commerce'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveWorkFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeWorkFilter === filter
                    ? 'bg-white text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map((study, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#090C16] border border-white/10 overflow-hidden shadow-xl hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Media Image */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono font-bold text-white border border-white/10">
                    {study.category}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-emerald-400 border border-emerald-500/30">
                    {study.metric}
                  </div>
                </div>

                <div className="p-8 pt-0 space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">{study.client}</div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed font-normal">
                    {study.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/10 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-mono text-emerald-400 font-bold">{study.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE 4-STAGE SPRINT METHODOLOGY (Interactive Operating System)
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-[1460px] mx-auto border-t border-white/10">
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>AGILE PRODUCTION CADENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            A Transparent 4-Stage Operating System.
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl">
            Zero black boxes. We ship in continuous 2-week agile sprints with bi-weekly live staging demos and direct Slack access to lead software architects.
          </p>
        </div>

        {/* Interactive Sprint Stepper Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {sprintStages.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSprintStep(idx)}
              className={`p-6 rounded-2xl text-left border transition-all ${
                activeSprintStep === idx
                  ? 'bg-gradient-to-b from-blue-600/20 to-indigo-600/10 border-indigo-400/50 shadow-xl'
                  : 'bg-[#090C16] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-2xl font-black font-mono ${activeSprintStep === idx ? 'text-cyan-400' : 'text-slate-400'}`}>
                  {phase.step}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/10">
                  {phase.timeline}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">{phase.title}</h4>
              <div className="text-xs font-mono text-slate-400">{phase.phase}</div>
            </button>
          ))}
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090C16] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <span>STAGE {sprintStages[activeSprintStep].step} SPECIFICATION</span>
                <span>•</span>
                <span>{sprintStages[activeSprintStep].timeline}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white">
                {sprintStages[activeSprintStep].title}
              </h3>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Target Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sprintStages[activeSprintStep].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center space-x-3">
                <span className="text-xs font-mono font-bold text-slate-400">Guaranteed Stage Outcome:</span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-300">
                  {sprintStages[activeSprintStep].outcome}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-bold">
                <span className="flex items-center space-x-2">
                  <GitBranch className="w-4 h-4 text-indigo-400" />
                  <span>SPRINT REPOSITORY CADENCE</span>
                </span>
                <span className="text-emerald-400">Active</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Daily automated CI/CD builds</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Staging preview links per feature PR</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>100% intellectual property commits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Weekly live sprint review &amp; demo</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-xl bg-white text-slate-950 font-bold text-center block hover:bg-slate-200 transition-colors"
                >
                  Reserve Your Sprint Window
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE AGENCY ADVANTAGE: TRADITIONAL IT VS WEBRIK STUDIO
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-[1460px] mx-auto border-t border-white/10">
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>THE ARCHITECTURAL DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Traditional IT Agencies vs. Webrik Studio.
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl">
            Why high-growth venture founders and enterprise technology leaders switch to our dedicated sprint model.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-[#090C16]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Traditional Agency */}
            <div className="p-8 sm:p-14 bg-white/[0.01] space-y-8">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  THE STATUS QUO OUTSOURCING
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-300">Traditional IT Agencies</h3>
              </div>
              <ul className="space-y-5 text-sm sm:text-base text-slate-400">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold shrink-0 text-base">✕</span>
                  <span>Junior developers assigned immediately after the senior sales pitch</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold shrink-0 text-base">✕</span>
                  <span>Bloated WordPress plugins or legacy PHP frameworks creating technical debt</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold shrink-0 text-base">✕</span>
                  <span>Layers of non-technical account managers relaying messages with delay</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold shrink-0 text-base">✕</span>
                  <span>Vendor lock-in: proprietary codebases and withheld hosting access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 font-bold shrink-0 text-base">✕</span>
                  <span>Unpredictable hourly billing, endless scope creep, and missed deadlines</span>
                </li>
              </ul>
            </div>

            {/* Webrik Studio */}
            <div className="p-8 sm:p-14 bg-white/[0.03] space-y-8 relative">
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                RECOMMENDED
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  THE WEBRIK STANDARD
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Webrik Software Studio</h3>
              </div>
              <ul className="space-y-5 text-sm sm:text-base text-slate-200 font-medium">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dedicated principal software architects &amp; senior engineers directly on your project</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Modern full-stack: Next.js 16, React 19, TypeScript, PostgreSQL, and Payload CMS 3</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct Slack/Discord access to the engineering team shipping your code</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>100% intellectual property &amp; source code handover with zero vendor lock-in</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Fixed-sprint pricing, guaranteed delivery velocity, and verified SLAs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INTERACTIVE PROJECT CALCULATOR — LUXURY DARK GLASS 1460PX
          ========================================================================= */}
      <ProjectCalculator />

      {/* =========================================================================
          SECTION 7: EXECUTIVE ENDORSEMENTS & CLIENT PROOF — 1460PX
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-[1460px] mx-auto border-t border-white/10">
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>CLIENT TESTIMONY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Endorsed by Engineering &amp; Growth Leaders.
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl">
            Real partnerships. Measurable business outcomes. Zero vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#090C16] border border-white/10 shadow-xl space-y-6 flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-md">
                    {t.metric}
                  </span>
                </div>

                <p className="text-slate-300 text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover shrink-0 border border-white/10"
                />
                <div>
                  <div className="font-bold text-white text-base">{t.author}</div>
                  <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TECHNICAL ARCHITECTURE FAQ ACCORDION — 1460PX
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-[1460px] mx-auto border-t border-white/10">
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Engineering &amp; Partnership Standards.
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl">
            Everything you need to know about our code ownership, performance SLAs, and sprint workflows.
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#090C16] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between space-x-4 text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="p-2 rounded-lg bg-white/[0.05] shrink-0 text-slate-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: STRATEGIC CALL TO ACTION — 1460PX EXPANSIVE BANNER
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-[1460px] mx-auto border-t border-white/10">
        <div className="p-12 sm:p-20 rounded-3xl bg-gradient-to-br from-[#0c0f20] to-[#070914] border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>STUDIO COMMISSIONS OPEN — 24H RESPONSE GUARANTEE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Ready to Architect Your Next Production Platform?
            </h2>

            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-3xl">
              Schedule a 30-minute technical discovery call directly with our principal software architects. We will analyze your requirements, review technical constraints, and deliver a concrete sprint roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-10 py-5 rounded-full text-base font-bold text-slate-950 bg-white hover:bg-slate-200 shadow-2xl transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Book Technical Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-9 py-5 rounded-full text-base font-bold text-slate-300 bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center space-x-2"
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
