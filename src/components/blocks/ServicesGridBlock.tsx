'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Smartphone,
  Cloud,
  ShoppingBag,
  TrendingUp,
  Palette,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

export const ServicesGridBlock: React.FC<{ block: any; services?: any[] }> = ({ block, services }) => {
  const [filter, setFilter] = useState<'all' | 'software' | 'growth' | 'design'>('all')

  const capabilities = [
    {
      id: 'web-development',
      index: '01',
      category: 'software',
      title: 'Full-Stack Web & Next.js Platforms',
      description:
        'High-performance React 19 & Next.js 16 web applications engineered for sub-second TTFB, enterprise security, and 100/100 Core Web Vitals.',
      image: '/illustrations/webdev-nextjs.jpg',
      badge: 'Lighthouse 100/100',
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      tags: ['Next.js 16', 'TypeScript', 'TailwindCSS', 'Vercel / AWS'],
      url: '/services/web-development',
    },
    {
      id: 'mobile-apps',
      index: '02',
      category: 'software',
      title: 'Native & Cross-Platform Mobile Apps',
      description:
        'Crafted iOS and Android experiences with 60fps animations, biometric authentication, offline synchronization, and instant push notifications.',
      image: '/illustrations/mobile-app.jpg',
      badge: '4.9 ★ App Rating',
      tagColor: 'text-purple-700 bg-purple-50 border-purple-200',
      tags: ['React Native', 'Swift', 'Kotlin', 'Offline Sync'],
      url: '/services/mobile-app-development',
    },
    {
      id: 'saas-platforms',
      index: '03',
      category: 'software',
      title: 'Cloud SaaS & API Architecture',
      description:
        'Multi-tenant cloud platforms powered by PostgreSQL clustering, headless Payload CMS, Stripe subscriptions, and secure RBAC access controls.',
      image: '/illustrations/saas-platform.jpg',
      badge: '99.99% Uptime SLA',
      tagColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      tags: ['PostgreSQL', 'Payload CMS', 'Docker', 'Redis Caching'],
      url: '/services/saas-development',
    },
    {
      id: 'ecommerce',
      index: '04',
      category: 'growth',
      title: 'Headless E-Commerce & Checkout Optimization',
      description:
        'Custom online stores built for lightning-fast catalog navigation, localized payment gateways, and maximum checkout conversion rates.',
      image: '/illustrations/ecommerce-service.jpg',
      badge: '+42% Conversion Rate',
      tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
      tags: ['Shopify Headless', 'Stripe', 'Razorpay', 'Algolia Search'],
      url: '/services/e-commerce-development',
    },
    {
      id: 'marketing',
      index: '05',
      category: 'growth',
      title: 'Performance Marketing & SEO Attribution',
      description:
        'Data-driven full-funnel acquisition campaigns combining Google Search PPC, Meta ad creatives, server-side tracking, and technical SEO dominance.',
      image: '/illustrations/growth-marketing.jpg',
      badge: '+320% Average ROAS',
      tagColor: 'text-rose-700 bg-rose-50 border-rose-200',
      tags: ['Google Ads', 'Meta Pixel', 'Technical SEO', 'CRO Funnels'],
      url: '/services/digital-marketing',
    },
    {
      id: 'uiux',
      index: '06',
      category: 'design',
      title: 'UI/UX Design Systems & Micro-Interactions',
      description:
        'World-class visual interface design, Figma component libraries, clickable prototypes, and design tokens built for seamless engineering handoff.',
      image: '/illustrations/uiux-design-service.jpg',
      badge: 'Figma Design System',
      tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
      tags: ['Figma Tokens', 'Wireframing', 'User Journeys', 'Prototyping'],
      url: '/services/ui-ux-design',
    },
  ]

  const filtered = capabilities.filter((c) => {
    if (filter === 'all') return true
    return c.category === filter
  })

  return (
    <section className="py-28 bg-[#FAFAFD] relative border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>CREATIVE CAPABILITIES & SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Crafted With Engineering Rigor.{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Designed to Captivate.
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Every digital capability we offer is accompanied by dedicated senior engineers, bespoke design systems, and transparent milestones.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100/80 border border-slate-200 rounded-2xl shrink-0 self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Capabilities (6)
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'software'
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Software & Cloud
            </button>
            <button
              onClick={() => setFilter('growth')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'growth'
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Growth & E-Commerce
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'design'
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              UI/UX Systems
            </button>
          </div>
        </div>

        {/* 6 Rich Visual Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 transition-all duration-400 flex flex-col justify-between overflow-hidden">
                <div className="space-y-5">
                  {/* High-Resolution Visual Image Container */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 h-56 sm:h-60 w-full group-hover:shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                    {/* Top Index & Performance Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
                        {item.index}
                      </span>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-xs backdrop-blur-md ${item.tagColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom Tech Pills Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/90 text-slate-800 backdrop-blur-md shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.url}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 group/link"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-semibold text-slate-400">
                    2-4 Wk Delivery
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Studio Delivery Assurance Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-100/90 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-800">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-600 flex items-center justify-center shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Modern Architecture</div>
              <div className="text-xs text-slate-500">Next.js 16 & TypeScript</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200/80 text-purple-600 flex items-center justify-center shrink-0">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Human-Crafted UX</div>
              <div className="text-xs text-slate-500">Bespoke Design Systems</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Attribution ROAS</div>
              <div className="text-xs text-slate-500">Targeted Ad Funnels</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Guaranteed Timelines</div>
              <div className="text-xs text-slate-500">Transparent Agile Sprints</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
