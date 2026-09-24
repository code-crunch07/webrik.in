import React from 'react'
import type { Metadata } from 'next'
import { getCaseStudies } from '@/lib/payload'
import { CaseStudiesBlock } from '@/components/blocks/CaseStudiesBlock'
import { CTABlock } from '@/components/blocks/CTABlock'

export const metadata: Metadata = {
  title: 'Client Case Studies & Verified Results | Webrik',
  description: 'Deep dive into Webrik client case studies: +180% Organic Traffic, +75% Leads, +42% Conversion Rate, and 3.2x ROAS.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="pt-36 pb-16 bg-[#FAFAFD]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Verified Outcomes
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4">
            Proven Success Stories & Client ROI
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Detailed breakdowns of how our engineering and growth marketing deliver measurable enterprise revenue.
          </p>
        </div>
      </div>

      <CaseStudiesBlock block={{}} caseStudies={caseStudies} />
      <CTABlock block={{}} />
    </div>
  )
}
