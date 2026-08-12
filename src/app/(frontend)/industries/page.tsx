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
    <div className="pt-32 pb-16 bg-navy-950">
      <IndustriesGridBlock block={{}} industries={industries} />
      <CTABlock block={{}} />
    </div>
  )
}
