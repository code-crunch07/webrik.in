'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react'

export const PortfolioGridBlock: React.FC<{ block: any; projects?: any[] }> = ({ block, projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'SaaS', 'Digital Marketing']

  const defaultProjects = [
    {
      title: 'PowaiFlats Portal',
      slug: 'powaiflats-portal',
      clientName: 'PowaiFlats Real Estate',
      category: 'Web Development',
      shortDescription: 'High-speed luxury real estate portal with virtual 360 degree tours and automated lead CRM.',
      image: '/illustrations/webdev-nextjs.jpg',
      metric: '+180% Organic Leads',
      tech: ['Next.js 16', 'PostgreSQL', 'Tailwind CSS', 'Google Maps'],
    },
    {
      title: 'RRENA Jewels E-Store',
      slug: 'rrena-jewels-estore',
      clientName: 'RRENA Luxury Jewels',
      category: 'E-commerce',
      shortDescription: 'Bespoke luxury e-commerce experience featuring 3D jewelry customization & VIP checkout.',
      image: '/illustrations/ecommerce-service.jpg',
      metric: '4.2x Cart Conversion',
      tech: ['React 19', 'Payload CMS 3', 'Shopify Plus', 'Stripe'],
    },
    {
      title: 'Lensza Eyewear App',
      slug: 'lensza-eyewear-app',
      clientName: 'Lensza Technologies',
      category: 'Mobile App',
      shortDescription: 'AR-enabled eyewear virtual try-on iOS and Android mobile application with face-mesh tracking.',
      image: '/illustrations/mobile-app.jpg',
      metric: '4.9 ★ (12k Reviews)',
      tech: ['React Native', 'ARKit', 'Node.js', 'AWS'],
    },
    {
      title: 'Nvizion Analytics SaaS',
      slug: 'nvizion-analytics-saas',
      clientName: 'Nvizion Solutions',
      category: 'SaaS',
      shortDescription: 'B2B enterprise marketing intelligence SaaS with real-time multi-touch attribution dashboards.',
      image: '/illustrations/saas-platform.jpg',
      metric: '99.99% Uptime SLA',
      tech: ['Next.js 16', 'PostgreSQL', 'Redis', 'Docker'],
    },
    {
      title: 'Habibs Brand Growth',
      slug: 'habibs-brand-growth',
      clientName: 'Habibs Hair & Beauty',
      category: 'Digital Marketing',
      shortDescription: 'Pan-India omni-channel performance marketing campaign generating 12,000+ monthly bookings.',
      image: '/illustrations/growth-marketing.jpg',
      metric: '+320% ROAS',
      tech: ['Google Ads', 'Meta Pixel', 'SEO', 'CRO Funnels'],
    },
    {
      title: 'GreyOrange Robotics UI',
      slug: 'greyorange-cloud-dashboard',
      clientName: 'GreyOrange Robotics',
      category: 'Web Development',
      shortDescription: 'Mission-critical warehouse automation UI system with sub-second WebSocket telemetry.',
      image: '/illustrations/uiux-design-service.jpg',
      metric: '21ms Latency',
      tech: ['TypeScript', 'Design Systems', 'Tailwind', 'WebSockets'],
    },
  ]

  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects

  const filteredProjects = displayProjects.filter((p) => {
    if (selectedCategory === 'All') return true
    return p.category === selectedCategory
  })

  return (
    <section className="py-28 bg-[#FAFAFD] relative overflow-hidden border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>SELECTED CLIENT WORKS & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Proven Engineering & Growth Results
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore how we build mission-critical web applications and scale brands across industries.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const projectImg =
              project.image ||
              (project.category === 'Mobile App'
                ? '/illustrations/mobile-app.jpg'
                : project.category === 'E-commerce'
                ? '/illustrations/ecommerce-service.jpg'
                : project.category === 'Digital Marketing'
                ? '/illustrations/growth-marketing.jpg'
                : '/illustrations/saas-platform.jpg')

            return (
              <motion.div
                key={project.slug || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group"
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="block h-full bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Visual Card Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 h-52 w-full">
                      <img
                        src={projectImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border border-slate-200 shadow-xs backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      {project.metric && (
                        <div className="absolute bottom-3 right-3">
                          <span className="text-xs font-bold text-emerald-400 px-3 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-white/20">
                            {project.metric}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="text-xs text-slate-500 font-semibold">{project.clientName}</div>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech?.map((t: string, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>View Architecture & Deliverables</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
