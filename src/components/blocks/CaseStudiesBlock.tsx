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
    <section className="py-24 bg-white relative border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>{block?.eyebrow || 'VERIFIED IMPACT & METRICS'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {block?.heading || 'Proven Success Stories & Client ROI'}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            See how our integrated software architecture and performance marketing produce measurable revenue.
          </p>
        </div>

        <div className="space-y-10">
          {displayCaseStudies.map((cs, idx) => (
            <motion.div
              key={cs.slug || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200">
                  {cs.client}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {cs.title}
                </h3>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">The Challenge</div>
                  <p className="text-slate-600 text-sm">{cs.challenge}</p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">The Webrik Solution</div>
                  <p className="text-slate-600 text-sm">{cs.solution}</p>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {cs.metrics?.map((m: any, mIdx: number) => (
                  <div
                    key={mIdx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center space-y-1"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-indigo-600">
                      {m.value}
                    </div>
                    <div className="text-xs font-bold text-slate-700">{m.label}</div>
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
