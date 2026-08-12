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
    <div className="pt-32 pb-16 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Our Services & Capabilities
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Software Development + Digital Marketing engineered for enterprise scale and measurable business growth.
          </p>
        </div>
      </div>

      <ServicesGridBlock block={{}} services={services} />
      <CTABlock block={{}} />
    </div>
  )
}
