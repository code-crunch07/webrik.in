import React from 'react'
import type { Metadata } from 'next'
import { getIndustries } from '@/lib/payload'
import { IndustriesGridBlock } from '@/components/blocks/IndustriesGridBlock'
import { CTABlock } from '@/components/blocks/CTABlock'

export const metadata: Metadata = {
  title: 'Industries We Serve | Webrik Agency',
  description: 'Custom software & digital marketing solutions for Real Estate, Healthcare, E-commerce, Jewellery, Education, Finance, and SaaS.',
}

export default async function IndustriesPage() {
  const industries = await getIndustries()

  return (
    <div className="pt-36 pb-16 bg-[#FAFAFD]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Sector Expertise
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4">
            Verticals & Industries We Transform
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Tailored software architecture, HIPAA/finance compliance, and high-converting marketing funnels for specialized markets.
          </p>
        </div>
      </div>

      <IndustriesGridBlock block={{}} industries={industries} />
      <CTABlock block={{}} />
    </div>
  )
}
