'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react'

export const PortfolioGridBlock: React.FC<{ block: any; projects?: any[] }> = ({ block, projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'SaaS', 'Digital Marketing']

  const defaultProjects = [
    {
      title: 'PowaiFlats Portal',
      slug: 'powaiflats-portal',
      clientName: 'PowaiFlats Real Estate',
      category: 'Web Development',
      shortDescription: 'High-speed real estate portal with virtual 360 degree tours and lead automation CRM.',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'Google Maps API'],
    },
    {
      title: 'RRENA Jewels E-Store',
      slug: 'rrena-jewels-estore',
      clientName: 'RRENA Luxury Jewels',
      category: 'E-commerce',
      shortDescription: 'Bespoke luxury e-commerce experience featuring 3D jewelry customization & VIP checkout.',
      tech: ['React', 'Payload CMS', 'Shopify Plus', 'Three.js'],
    },
    {
      title: 'Lensza Eyewear App',
      slug: 'lensza-eyewear-app',
      clientName: 'Lensza Technologies',
      category: 'Mobile App',
      shortDescription: 'AR-enabled eyewear virtual try-on iOS and Android mobile application.',
      tech: ['React Native', 'ARKit', 'Node.js', 'AWS'],
    },
    {
      title: 'Nvizion Analytics SaaS',
      slug: 'nvizion-analytics-saas',
      clientName: 'Nvizion Solutions',
      category: 'SaaS',
      shortDescription: 'B2B enterprise marketing intelligence SaaS with real-time attribution dashboards.',
      tech: ['Next.js 16', 'PostgreSQL', 'Tailwind', 'Chart.js'],
    },
    {
      title: 'Habibs Brand Growth',
      slug: 'habibs-brand-growth',
      clientName: 'Habibs Hair & Beauty',
      category: 'Digital Marketing',
      shortDescription: 'Pan-India omni-channel performance marketing campaign generating 12,000+ monthly bookings.',
      tech: ['Google Ads', 'Meta Pixel', 'SEO', 'Conversion Funnels'],
    },
    {
      title: 'GreyOrange Cloud Dashboard',
      slug: 'greyorange-cloud-dashboard',
      clientName: 'GreyOrange Robotics',
      category: 'Web Development',
      shortDescription: 'Mission-critical warehouse automation dashboard with sub-second WebSocket telemetry.',
      tech: ['TypeScript', 'GraphQL', 'Tailwind', 'Docker'],
    },
  ]

  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects

  const filteredProjects = displayProjects.filter((p) => {
    if (selectedCategory === 'All') return true
    return p.category === selectedCategory
  })

  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'FEATURED WORK'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {block?.heading || 'Crafted for Performance & Growth'}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Explore how we build mission-critical web applications and scale brands across industries.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-brand-primary to-brand-violet text-white shadow-glow-sm'
                    : 'bg-surface-dark border border-surface-border text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Mock Card Preview Image Header */}
                <div className="w-full h-48 rounded-xl bg-gradient-to-tr from-navy-950 via-navy-800 to-brand-primary/20 border border-surface-border p-4 flex flex-col justify-between mb-5 relative overflow-hidden group-hover:border-brand-violet/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-navy-950/80 border border-white/10 text-[11px] font-bold text-brand-violet">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.clientName}</span>
                  </div>
                  <div className="text-xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {project.title}
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {(project.tech || ['Next.js', 'Tailwind', 'PostgreSQL']).map((t: string, tidx: number) => (
                    <span
                      key={tidx}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-surface-border text-[11px] font-medium text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-flex items-center space-x-2 text-sm font-bold text-brand-violet hover:text-white transition-colors group/link"
              >
                <span>View Full Case & Tech Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
