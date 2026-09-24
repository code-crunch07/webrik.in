import React from 'react'
import type { Metadata } from 'next'
import { getServices } from '@/lib/payload'
import { ServicesGridBlock } from '@/components/blocks/ServicesGridBlock'
import { CTABlock } from '@/components/blocks/CTABlock'

export const metadata: Metadata = {
  title: 'Software Development & Digital Marketing Services | Webrik',
  description: 'Explore Webrik services: Web Development, Mobile Apps, SaaS Platforms, E-commerce, SEO, Google Ads, and Performance Growth.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="pt-36 pb-16 bg-[#FAFAFD]">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Full-Stack Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-4">
            Our Services & Engineering Capabilities
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Software Development + Digital Marketing engineered for enterprise scale and measurable business growth.
          </p>
        </div>
      </div>

      <ServicesGridBlock block={{}} services={services} />
      <CTABlock block={{}} />
    </div>
  )
}
