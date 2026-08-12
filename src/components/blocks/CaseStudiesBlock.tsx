'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight, Award, CheckCircle } from 'lucide-react'

export const CaseStudiesBlock: React.FC<{ block: any; caseStudies?: any[] }> = ({ block, caseStudies }) => {
  const defaultCaseStudies = [
    {
      title: 'Scaling E-Commerce Revenue by 3.2x in 6 Months',
      slug: 'scaling-ecommerce-revenue',
      client: 'RRENA Luxury Jewels',
      metrics: [
        { label: 'Organic Traffic', value: '+180%' },
        { label: 'Qualified Leads', value: '+75%' },
        { label: 'Conversion Rate', value: '+42%' },
        { label: 'Cost Per Lead', value: '-30%' },
      ],
      challenge: 'High customer acquisition costs and slow legacy Shopify speed throttling mobile conversion.',
      solution: 'Architected Next.js headless frontend connected to Payload CMS with targeted Meta & Google Ads funnels.',
    },
    {
      title: 'Pan-India Real Estate Lead Generation Engine',
      slug: 'real-estate-lead-engine',
      client: 'PowaiFlats Group',
      metrics: [
        { label: 'Monthly Inquiries', value: '4,500+' },
        { label: 'Site Speed Index', value: '99/100' },
        { label: 'Lead Velocity', value: '+210%' },
        { label: 'Ad ROAS', value: '4.8x' },
      ],
      challenge: 'Unqualified lead spam and fragmented property listing management across multi-city branches.',
      solution: 'Deployed unified real estate web application with automated phone verification & CRM routing.',
    },
  ]

  const displayCaseStudies = caseStudies && caseStudies.length > 0 ? caseStudies : defaultCaseStudies

  return (
    <section className="py-24 bg-navy-950 relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'CASE STUDIES'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {block?.heading || 'Proven Success Stories & Verified Metrics'}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            See how our integrated technology and growth marketing produce measurable ROI.
          </p>
        </div>

        <div className="space-y-10">
          {displayCaseStudies.map((cs, idx) => (
            <motion.div
              key={cs.slug || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 lg:p-10 border border-surface-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Title & Story */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-violet uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Client: {cs.client}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {cs.title}
                </h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <p><strong className="text-white">Challenge:</strong> {cs.challenge}</p>
                  <p><strong className="text-white">Solution:</strong> {cs.solution}</p>
                </div>
                <div className="pt-2">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-primary/20 text-brand-violet font-bold text-sm hover:bg-brand-primary hover:text-white transition-all group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Metric Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {(cs.metrics || []).map((m: any, midx: number) => (
                  <div
                    key={midx}
                    className="p-4 rounded-2xl bg-navy-900/90 border border-surface-border text-center"
                  >
                    <div className="text-3xl font-black text-emerald-400 mb-1">{m.value}</div>
                    <div className="text-xs font-semibold text-slate-300">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
