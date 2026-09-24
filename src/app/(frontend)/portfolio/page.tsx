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
    <div className="pt-36 pb-16 bg-[#FAFAFD]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Verified Case Studies
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4">
            Curated Client Work & Platforms
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Discover how we build scalable digital products, high-converting mobile applications, and multi-channel acquisition funnels.
          </p>
        </div>
      </div>

      <PortfolioGridBlock block={{}} projects={projects} />
      <CTABlock block={{}} />
    </div>
  )
}
