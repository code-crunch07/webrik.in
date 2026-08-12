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
    <div className="pt-32 pb-16 bg-navy-950">
      <CaseStudiesBlock block={{}} caseStudies={caseStudies} />
      <CTABlock block={{}} />
    </div>
  )
}
