'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Code,
  Smartphone,
  Layout,
  Search,
  Megaphone,
  TrendingUp,
  ShoppingBag,
  Palette,
  Cloud,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Layout,
  Search,
  Megaphone,
  TrendingUp,
  ShoppingBag,
  Palette,
  Cloud,
}

export const ServicesGridBlock: React.FC<{ block: any; services?: any[] }> = ({ block, services }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'marketing'>('all')

  const defaultServices = [
    {
      title: 'Website Development',
      slug: 'web-development',
      category: 'software',
      icon: 'Code',
      shortDescription: 'High-performance React & Next.js web applications engineered for speed, SEO, and enterprise security.',
    },
    {
      title: 'Mobile App Development',
      slug: 'mobile-app-development',
      category: 'software',
      icon: 'Smartphone',
      shortDescription: 'Native & cross-platform iOS and Android mobile apps crafted with fluid UI animations and offline syncing.',
    },
    {
      title: 'SaaS Platform Engineering',
      slug: 'saas-development',
      category: 'software',
      icon: 'Cloud',
      shortDescription: 'Multi-tenant cloud SaaS products built with scalable PostgreSQL, API architecture, and payment gateways.',
    },
    {
      title: 'E-commerce Solutions',
      slug: 'e-commerce-development',
      category: 'software',
      icon: 'ShoppingBag',
      shortDescription: 'Custom online stores optimized for lightning-fast checkout speeds and maximum cart value conversion.',
    },
    {
      title: 'Digital Marketing & Growth',
      slug: 'digital-marketing',
      category: 'marketing',
      icon: 'Megaphone',
      shortDescription: 'Full-funnel digital marketing strategies combining targeted ads, lead funnels, and data analytics.',
    },
    {
      title: 'SEO & Organic Growth',
      slug: 'seo-services',
      category: 'marketing',
      icon: 'Search',
      shortDescription: 'Technical SEO audits, keyword strategy, and backlink authority building to rank #1 on Google.',
    },
    {
      title: 'Google Ads & PPC',
      slug: 'google-ads-ppc',
      category: 'marketing',
      icon: 'TrendingUp',
      shortDescription: 'High-intent paid search and display campaigns designed to maximize ROAS and lower customer acquisition costs.',
    },
    {
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      category: 'software',
      icon: 'Palette',
      shortDescription: 'User-centric interface design, wireframing, and interactive prototypes built to convert visitors into buyers.',
    },
  ]

  const displayServices = services && services.length > 0 ? services : defaultServices

  const filteredServices = displayServices.filter((s) => {
    if (activeTab === 'all') return true
    return s.category === activeTab
  })

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'OUR EXPERTISE'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {block?.heading || 'Software Development + Digital Marketing'}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {block?.description || 'We combine engineering precision with result-driven growth marketing to help scale modern enterprises.'}
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-surface-dark border border-surface-border">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-brand-primary to-brand-violet text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'software'
                  ? 'bg-gradient-to-r from-brand-primary to-brand-violet text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Software Development
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'marketing'
                  ? 'bg-gradient-to-r from-brand-primary to-brand-violet text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Digital Marketing
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => {
            const IconComp = iconMap[service.icon] || Code
            return (
              <motion.div
                key={service.slug || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-violet/30 flex items-center justify-center text-brand-violet mb-5 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-glow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-violet transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-brand-violet hover:text-white transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
