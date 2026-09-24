'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Play,
  Check,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
  Star,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Database,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from 'lucide-react'

interface AventrHomepageProps {
  dynamicData?: any
}

export const AventrHomepage: React.FC<AventrHomepageProps> = ({ dynamicData }) => {
  const [activeTab, setActiveTab] = useState('All')

  // Portfolio items matching reference design 3x2 grid with 3D illustrations
  const portfolioProjects = [
    {
      title: 'Cloud SaaS Telemetry Platform',
      category: 'Cloud SaaS',
      image: '/illustrations/saas-platform.jpg',
      slug: 'saas-development',
      stats: 'sub-25ms latency',
    },
    {
      title: 'Next.js 16 Enterprise Web Platform',
      category: 'Web App',
      image: '/illustrations/webdev-nextjs.jpg',
      slug: 'web-development',
      stats: '100/100 Lighthouse',
    },
    {
      title: 'Fintech Banking Mobile Application',
      category: 'Mobile App',
      image: '/illustrations/mobile-app.jpg',
      slug: 'mobile-app-development',
      stats: '60 FPS Native',
    },
    {
      title: 'Luxury Headless Digital Storefront',
      category: 'E-Commerce',
      image: '/illustrations/ecommerce-service.jpg',
      slug: 'e-commerce-development',
      stats: '+42% Conversion',
    },
    {
      title: 'Multi-Channel Growth & Attribution',
      category: 'Cloud SaaS',
      image: '/illustrations/growth-marketing.jpg',
      slug: 'digital-marketing',
      stats: '3.4x ROAS',
    },
    {
      title: 'Figma Atomic Design System Tokens',
      category: 'Web App',
      image: '/illustrations/uiux-design-service.jpg',
      slug: 'ui-ux-design',
      stats: '100% Code Parity',
    },
  ]

  const filteredProjects =
    activeTab === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeTab)

  // 8 Client Testimonials (4x2 grid)
  const testimonials = [
    {
      quote:
        'Webrik rebuilt our entire Next.js web application from scratch. Our page speeds dropped to sub-second and conversions skyrocketed by 48%.',
      author: 'Rajesh Mehta',
      role: 'CTO, FinEdge Global',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'The mobile app they delivered for iOS and Android has a flawless 60fps feel. Their engineering team communicated daily on Slack.',
      author: 'Ananya Sharma',
      role: 'Founder, RetailWave',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Their cloud SaaS architecture easily handled our 10x traffic spike during Black Friday with zero downtime. Pure engineering excellence.',
      author: 'Vikram Singhania',
      role: 'VP Engineering, CloudScale',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'They integrated Payload CMS seamlessly into our platform. Our marketing team now launches landing pages without writing code.',
      author: 'Sarah Jenkins',
      role: 'Head of Growth, Nexus Health',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'The Figma design tokens and component library they handed off mapped 1:1 with our Tailwind code. Saved us months of development.',
      author: 'Amit Patel',
      role: 'Product Lead, EduSphere',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Google Ads & Meta Ads funnels set up by Webrik delivered a consistent 3.8x ROAS within the first 30 days of launch.',
      author: 'David Chen',
      role: 'Founder, OmniChannel Pro',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        '100% intellectual property ownership, spotless clean code, and zero vendor lock-in. Exactly what we wanted from an agency partner.',
      author: 'Priya Nair',
      role: 'Co-Founder, BharatSaaS',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Transparent milestones, realistic timelines, and high-velocity sprint execution. Webrik is now our permanent technical partner.',
      author: 'Marcus Vance',
      role: 'CEO, Stride Digital',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    },
  ]

  return (
    <main className="w-full bg-[#FAFAFD] text-slate-900 overflow-hidden font-sans">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          Matches Reference: Pill tag, bold title with inline emojis, 3D isometric chip,
          and 3 feature cards below.
          ========================================================================= */}
      <section className="relative pt-36 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>NEXT-GEN SOFTWARE SOLUTIONS</span>
            </div>

            {/* Headline with Inline Emojis */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              Next-Gen Software For Modern <span className="inline-block text-3xl sm:text-5xl align-middle">🌐</span> Work &amp; Smart <span className="inline-block text-3xl sm:text-5xl align-middle">🚀</span> Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              We engineer high-performance web applications, native mobile apps, and scalable cloud SaaS platforms that accelerate business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-4 rounded-full text-base font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-all flex items-center space-x-2 shadow-xs"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </Link>
            </div>
          </div>

          {/* Right: 3D Isometric Motherboard Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
              <img
                src="/illustrations/hero-3d-chip.jpg"
                alt="Next-Gen 3D Software Architecture"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-blue-600 shadow-sm flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>NEURAL CORE 3.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Highlight Feature Cards (Directly below Hero) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Cloud Solutions</h3>
              <p className="text-slate-500 text-xs mt-0.5">Scalable &amp; Secure Cloud Architecture</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Fast Performance</h3>
              <p className="text-slate-500 text-xs mt-0.5">Sub-second execution &amp; ultra-low latency</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Dedicated Support</h3>
              <p className="text-slate-500 text-xs mt-0.5">24/7 Monitoring &amp; Guaranteed DevOps SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT / AGENCY SPLIT SECTION
          "The Future Of Software Starts With Innovation"
          ========================================================================= */}
      <section className="w-full bg-white py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Real Team Photo with Blue Border Accent */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-blue-600/10">
                <img
                  src="/illustrations/team-collaboration-about.jpg"
                  alt="Webrik Software Development Team"
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-blue-600 text-white p-5 rounded-2xl shadow-xl flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-black text-xl">
                  10+
                </div>
                <div>
                  <div className="font-extrabold text-sm">Years Experience</div>
                  <div className="text-blue-100 text-xs">99.8% Project Success</div>
                </div>
              </div>
            </div>

            {/* Right: About Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <span>✦ ABOUT OUR COMPANY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                The Future Of Software Starts With Innovation
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Webrik is an engineering and performance marketing agency. We collaborate with ambitious startups and enterprises to develop resilient, modern digital solutions that eliminate technical debt and scale seamlessly.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  'Custom Software Development & Next.js Architecture',
                  'High-Speed Cloud & API Microservice Integrations',
                  'Dedicated Agile Engineering Teams with 2-Week Sprints',
                  '100% Source Code & IP Handover with Zero Vendor Lock-in',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="pt-4">
                <Link
                  href="/about"
                  className="px-8 py-4 rounded-full text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all inline-flex items-center space-x-2 group"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ANGLED INFINITE MARQUEE RIBBON
          ========================================================================= */}
      <section className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-4 overflow-hidden shadow-lg transform -rotate-1 scale-105 my-8">
        <div className="flex whitespace-nowrap space-x-8 text-sm font-extrabold uppercase tracking-widest animate-marquee">
          <span>★ SOFTWARE DEVELOPMENT</span>
          <span>★ NEXT.JS &amp; REACT</span>
          <span>★ CLOUD ARCHITECTURE</span>
          <span>★ UI/UX DESIGN TOKENS</span>
          <span>★ NATIVE MOBILE APPS</span>
          <span>★ PERFORMANCE MARKETING</span>
          <span>★ HEADLESS COMMERCE</span>
          <span>★ FULL IP OWNERSHIP</span>
          <span>★ SOFTWARE DEVELOPMENT</span>
          <span>★ NEXT.JS &amp; REACT</span>
          <span>★ CLOUD ARCHITECTURE</span>
          <span>★ UI/UX DESIGN TOKENS</span>
          <span>★ NATIVE MOBILE APPS</span>
          <span>★ PERFORMANCE MARKETING</span>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE SERVICES GRID
          "Modern Software Services For A Smarter Future"
          3 clean white cards with 3D colorful illustrations
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <span>✦ OUR CORE SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Modern Software Services For A Smarter Future
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            End-to-end software development and digital growth capabilities engineered for enterprise velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Web Development */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all space-y-6 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="h-44 rounded-2xl overflow-hidden bg-slate-50 relative">
                <img
                  src="/illustrations/webdev-nextjs.jpg"
                  alt="Web Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Web Development</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Full-stack Next.js and React web applications engineered for sub-20ms edge latency, automated CI/CD, and 100/100 Core Web Vitals.
              </p>
            </div>
            <Link
              href="/services/web-development"
              className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1.5 text-sm pt-2 group-hover:translate-x-1 transition-transform"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: App Development */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all space-y-6 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="h-44 rounded-2xl overflow-hidden bg-slate-50 relative">
                <img
                  src="/illustrations/mobile-app.jpg"
                  alt="App Development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-black text-slate-900">App Development</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Crafted native iOS and Android mobile applications built with React Native, 60fps animations, biometric security, and offline data sync.
              </p>
            </div>
            <Link
              href="/services/mobile-app-development"
              className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1.5 text-sm pt-2 group-hover:translate-x-1 transition-transform"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3: Cloud & SaaS Solutions */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all space-y-6 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="h-44 rounded-2xl overflow-hidden bg-slate-50 relative">
                <img
                  src="/illustrations/saas-platform.jpg"
                  alt="Cloud & SaaS Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Cloud &amp; SaaS Solutions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Scalable cloud SaaS products engineered with multi-tenant PostgreSQL clustering, metered Stripe billing, and resilient API microservices.
              </p>
            </div>
            <Link
              href="/services/saas-development"
              className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1.5 text-sm pt-2 group-hover:translate-x-1 transition-transform"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Carousel Pagination Indicator */}
        <div className="flex items-center justify-center space-x-2 pt-10">
          <span className="w-8 h-2.5 rounded-full bg-blue-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: STATS & EXPERIENCE SHOWCASE
          "We Create Scalable Software Solutions That Drive Real Business Growth"
          ========================================================================= */}
      <section className="w-full bg-white py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Stats Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  We Create Scalable Software Solutions That Drive Real Business Growth
                </h2>
                <p className="text-slate-600 text-base sm:text-lg">
                  Over a decade of enterprise software engineering, empowering businesses from initial MVP to global scale.
                </p>
              </div>

              {/* Two Prominent Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Gradient Stat Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white shadow-lg space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    COMPLETED PROJECTS
                  </div>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight">
                    346+
                  </div>
                  <p className="text-blue-100 text-xs leading-relaxed">
                    Production systems deployed worldwide with 99.8% client retention.
                  </p>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-3.5 py-1.5 rounded-full transition-colors"
                  >
                    <span>Explore Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* On-Time Delivery Card */}
                <div className="p-6 rounded-3xl bg-[#FAFAFD] border border-slate-200/80 shadow-xs space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    ON-TIME DELIVERY
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                        <span>Sprint Execution</span>
                        <span>99.4%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full w-[99.4%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                        <span>Client Satisfaction</span>
                        <span>98.7%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[98.7%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Logos Strip */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  TRUSTED BY INDUSTRY INNOVATORS
                </div>
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all text-sm font-black text-slate-700">
                  <span>GOOGLE</span>
                  <span>SLACK</span>
                  <span>STRIPE</span>
                  <span>AMAZON</span>
                  <span>SPOTIFY</span>
                </div>
              </div>
            </div>

            {/* Right: 3D Character Illustration Scene */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-50">
                <img
                  src="/illustrations/team-3d-figures.jpg"
                  alt="3D Creative Team Collaboration"
                  className="w-full h-[460px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: DARK NEON PROCESS SECTION
          "A Smarter Way To Build Software"
          ========================================================================= */}
      <section className="w-full bg-[#050816] text-white py-24 relative overflow-hidden">
        {/* Neon vertical fiber glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <span>✦ OUR PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              A Smarter Way To Build Software
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              High efficiency, automated deployment &amp; bulletproof security across every sprint.
            </p>
          </div>

          {/* 4 Process Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { num: '01', title: 'Concept & Plan', desc: 'Requirements analysis, architectural RFC, and technical scope.' },
              { num: '02', title: 'Design & Prototype', desc: 'Atomic Figma UI/UX tokens and clickable interactive prototypes.' },
              { num: '03', title: 'Agile Sprints', desc: '2-week development sprints with bi-weekly live staging demos.' },
              { num: '04', title: 'Production Launch', desc: 'QA security audit, 100/100 Core Web Vitals, and cloud deployment.' },
            ].map((step, idx) => (
              <div key={idx} className="text-center space-y-4 relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-black text-xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 border-2 border-white/20">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PORTFOLIO GRID
          "Showcasing Our Recent Software Solutions"
          3x2 grid with filter tabs and 3D covers
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <span>✦ OUR PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Showcasing Our Recent Software Solutions
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Web App', 'Mobile App', 'Cloud SaaS', 'E-Commerce'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-52 overflow-hidden bg-slate-100 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs">
                    {proj.category}
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-1">
                  <div className="text-xs font-bold text-blue-600">{proj.stats}</div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/services/${proj.slug}`}
                  className="font-bold text-slate-700 group-hover:text-blue-600 inline-flex items-center space-x-1 text-xs transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: GIANT TYPOGRAPHY MARQUEE
          ========================================================================= */}
      <section className="w-full bg-white py-12 border-y border-slate-200 overflow-hidden">
        <div className="whitespace-nowrap flex items-center space-x-12 text-6xl sm:text-8xl font-black tracking-tighter text-slate-900 uppercase opacity-90 select-none animate-marquee">
          <span>SOFTWARE</span>
          <span className="text-blue-600">✦</span>
          <span className="text-blue-600">SAAS</span>
          <span className="text-blue-600">✦</span>
          <span>DIGITAL</span>
          <span className="text-blue-600">✦</span>
          <span className="text-blue-600">INNOVATION</span>
          <span className="text-blue-600">✦</span>
          <span>WEBRIK</span>
          <span className="text-blue-600">✦</span>
          <span className="text-blue-600">MOBILE</span>
          <span className="text-blue-600">✦</span>
          <span>SOFTWARE</span>
          <span className="text-blue-600">✦</span>
          <span className="text-blue-600">SAAS</span>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: TRANSPARENT PRICING TIERS
          3 Cards: Starter, Business Pro (Highlight), Enterprise
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <span>✦ TRANSPARENT INVESTMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Flexible Pricing Designed For Scalability
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose the development tier that matches your roadmap with transparent scope and full IP ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Starter Plan */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-xl">Starter Plan</h3>
                <p className="text-slate-500 text-xs">Essential web development for growing businesses.</p>
              </div>
              <div className="text-4xl font-black text-slate-900">
                $18.99 <span className="text-sm font-semibold text-slate-400">/ sprint</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Responsive Next.js Single Page</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Mobile &amp; Tablet Optimization</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Basic SEO &amp; Google Analytics</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Standard Email Support</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?plan=starter"
              className="w-full py-3.5 rounded-full text-center font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors text-sm"
            >
              Choose Starter
            </Link>
          </div>

          {/* Business Pro Plan (Popular Highlight) */}
          <div className="p-8 rounded-3xl bg-white border-2 border-blue-600 shadow-xl shadow-blue-600/10 space-y-6 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
              MOST POPULAR
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-xl">Business Pro</h3>
                <p className="text-slate-500 text-xs">Complete digital software platform for scaling brands.</p>
              </div>
              <div className="text-4xl font-black text-blue-600">
                $45.99 <span className="text-sm font-semibold text-slate-400">/ sprint</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center space-x-2.5 font-semibold">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full-Stack Next.js 16 Web Platform</span>
                </li>
                <li className="flex items-center space-x-2.5 font-semibold">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Payload CMS 3 Headless Admin</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>PostgreSQL Relational DB &amp; Redis</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Stripe Billing &amp; Payment Gateway</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Priority 24/7 Dedicated Slack Channel</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?plan=business"
              className="w-full py-3.5 rounded-full text-center font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all text-sm"
            >
              Choose Business Pro
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-xl">Enterprise</h3>
                <p className="text-slate-500 text-xs">Custom cloud SaaS &amp; mobile engineering.</p>
              </div>
              <div className="text-4xl font-black text-slate-900">
                $77.99 <span className="text-sm font-semibold text-slate-400">/ sprint</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Custom Multi-Tenant Cloud SaaS</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>iOS &amp; Android Native Mobile App</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Dedicated DevOps &amp; 99.99% SLA</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>SOC-2 Ready Audit Trails &amp; RBAC</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Dedicated Senior Principal Architect</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?plan=enterprise"
              className="w-full py-3.5 rounded-full text-center font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
            >
              Choose Enterprise
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: REVIEWS FROM OUR CLIENTS
          "Reviews From 🌟 Our Clients" (4x2 Grid)
          ========================================================================= */}
      <section className="w-full bg-white py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Reviews From <span className="inline-block text-3xl sm:text-5xl align-middle">🌟</span> Our Clients
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Verified endorsements from founders, CTOs, and product leaders who build with Webrik.
            </p>
          </div>

          {/* 4x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFAFD] border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 space-x-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-2 border-t border-slate-200/60">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-xs">{t.author}</div>
                    <div className="text-slate-400 text-[10px]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: BLOG & INSIGHTS
          "Discover Insights From The World Of Technology"
          ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <span>✦ LATEST ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Discover Insights From The World Of Technology
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineering breakdowns, architectural best practices, and performance marketing playbooks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Why Next.js 16 App Router Outperforms Traditional SPAs',
              desc: 'How streaming server-side rendering and zero client-side hydration bloat deliver sub-second response times.',
              image: '/illustrations/webdev-nextjs.jpg',
              date: 'Sep 02, 2026',
              category: 'ENGINEERING',
            },
            {
              title: 'Building Multi-Tenant SaaS with PostgreSQL Row-Level Security',
              desc: 'Architecting cryptographic data partitioning, connection pooling with PgBouncer, and Stripe metered billing.',
              image: '/illustrations/saas-platform.jpg',
              date: 'Aug 28, 2026',
              category: 'CLOUD SAAS',
            },
            {
              title: 'Bypassing Ad Blockers with Server-Side Meta CAPI & GA4',
              desc: 'Restoring 100% conversion attribution and lowering customer acquisition costs via direct server-to-server events.',
              image: '/illustrations/growth-marketing.jpg',
              date: 'Aug 22, 2026',
              category: 'GROWTH',
            },
          ].map((blog, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 shadow-xs">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-400">{blog.date}</div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {blog.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/blog"
                  className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1.5 text-xs group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* End of Aventr Homepage Sections */}
    </main>
  )
}
