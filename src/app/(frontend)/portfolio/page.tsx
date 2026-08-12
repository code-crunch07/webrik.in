import React from 'react'
import type { Metadata } from 'next'
import { getProjects } from '@/lib/payload'
import { PortfolioGridBlock } from '@/components/blocks/PortfolioGridBlock'
import { CTABlock } from '@/components/blocks/CTABlock'

export const metadata: Metadata = {
  title: 'Portfolio & Client Work | Webrik Agency',
  description: 'Explore Webrik portfolio: Custom Web Applications, Mobile Apps, SaaS Platforms, E-commerce, and Digital Growth campaigns.',
}

export default async function PortfolioPage() {
  const projects = await getProjects()

  return (
    <div className="pt-32 pb-16 bg-navy-950">
      <PortfolioGridBlock block={{}} projects={projects} />
      <CTABlock block={{}} />
    </div>
  )
}
