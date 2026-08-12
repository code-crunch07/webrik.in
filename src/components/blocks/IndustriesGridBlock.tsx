'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Building2,
  Stethoscope,
  ShoppingBag,
  Gem,
  GraduationCap,
  Landmark,
  Hotel,
  Cloud,
  Factory,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

const iconMap: Record<string, any> = {
  'real-estate': Building2,
  healthcare: Stethoscope,
  'e-commerce': ShoppingBag,
  jewellery: Gem,
  education: GraduationCap,
  finance: Landmark,
  hospitality: Hotel,
  saas: Cloud,
  manufacturing: Factory,
  services: Briefcase,
}

export const IndustriesGridBlock: React.FC<{ block: any; industries?: any[] }> = ({ block, industries }) => {
  const defaultIndustries = [
    { name: 'Real Estate', slug: 'real-estate', icon: 'real-estate', shortDescription: 'Virtual tour platforms, lead CRM automation, and high-converting landing pages for luxury developers.' },
    { name: 'Healthcare & MedTech', slug: 'healthcare', icon: 'healthcare', shortDescription: 'HIPAA-compliant patient portals, appointment scheduling, and local SEO for medical clinics.' },
    { name: 'E-commerce & Retail', slug: 'e-commerce', icon: 'e-commerce', shortDescription: 'Headless storefronts, Shopify integrations, and performance marketing to boost ROAS.' },
    { name: 'Jewellery & Luxury', slug: 'jewellery', icon: 'jewellery', shortDescription: '3D product configurators, high-resolution catalog showcases, and VIP customer retention.' },
    { name: 'Education & EdTech', slug: 'education', icon: 'education', shortDescription: 'LMS platforms, student enrollment funnels, and automated performance tracking.' },
    { name: 'Finance & Fintech', slug: 'finance', icon: 'finance', shortDescription: 'Secure payment gateways, wealth management web apps, and compliant marketing campaigns.' },
  ]

  const displayIndustries = industries && industries.length > 0 ? industries : defaultIndustries

  return (
    <section className="py-24 bg-navy-950 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'INDUSTRIES WE SERVE'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {block?.heading || 'Tailored Solutions for High-Growth Verticals'}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            We bring deep domain expertise and specialized software frameworks to every sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayIndustries.map((ind, idx) => {
            const IconComp = iconMap[ind.slug] || Building2
            return (
              <motion.div
                key={ind.slug || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center text-brand-violet mb-4 group-hover:scale-110 group-hover:bg-brand-violet group-hover:text-white transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-violet transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {ind.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-slate-300 hover:text-brand-violet transition-colors"
                >
                  <span>Explore Sector Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
