'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, Stethoscope, ShoppingBag, Gem, GraduationCap, Landmark, Hotel, Cpu, ArrowRight } from 'lucide-react'

const industryIcons: Record<string, any> = {
  'real-estate': Building2,
  healthcare: Stethoscope,
  'e-commerce': ShoppingBag,
  jewellery: Gem,
  education: GraduationCap,
  finance: Landmark,
  hospitality: Hotel,
  saas: Cpu,
}

export const IndustriesGridBlock: React.FC<{ block: any; industries?: any[] }> = ({ block, industries }) => {
  const defaultIndustries = [
    { name: 'Real Estate', slug: 'real-estate', description: 'Virtual tours, lead CRM integration, and high-converting portals for luxury developers.' },
    { name: 'Healthcare & MedTech', slug: 'healthcare', description: 'HIPAA-compliant patient portals, appointment scheduling, and healthcare SEO.' },
    { name: 'E-commerce & Retail', slug: 'e-commerce', description: 'Headless Next.js storefronts, payment gateways, and performance marketing.' },
    { name: 'Jewellery & Luxury', slug: 'jewellery', description: '3D product configurators, high-resolution luxury showcases, and VIP retention.' },
    { name: 'Education & EdTech', slug: 'education', description: 'LMS platforms, student enrollment funnels, and automated course dashboards.' },
    { name: 'Finance & Fintech', slug: 'finance', description: 'Secure payment gateways, wealth management apps, and compliant growth campaigns.' },
  ]

  const displayIndustries = industries && industries.length > 0 ? industries : defaultIndustries

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>Specialized Domain Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored Digital Solutions for High-Growth Verticals
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We bring deep domain expertise, custom frameworks, and targeted performance marketing to every industry sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayIndustries.map((ind, idx) => {
            const IconComponent = industryIcons[ind.slug] || Cpu
            return (
              <motion.div
                key={ind.slug || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="block h-full bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Explore Industry Solutions</span>
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
