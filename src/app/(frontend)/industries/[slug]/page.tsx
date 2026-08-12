import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getIndustryBySlug } from '@/lib/payload'
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react'
import { CTABlock } from '@/components/blocks/CTABlock'

interface IndustryDetailProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: IndustryDetailProps): Promise<Metadata> {
  const { slug } = await params
  const ind: any = await getIndustryBySlug(slug)
  return {
    title: ind ? `${ind.name} Software & Growth Solutions | Webrik` : 'Industry Solutions | Webrik',
  }
}

export default async function IndustryDetailPage({ params }: IndustryDetailProps) {
  const { slug } = await params
  const ind: any = await getIndustryBySlug(slug)

  const name = ind?.name || slug.replace(/-/g, ' ').toUpperCase()
  const description = ind?.shortDescription || `Webrik builds specialized software platforms and growth marketing engines tailored for the ${name} sector.`

  return (
    <div className="pt-32 pb-24 bg-navy-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider">
            INDUSTRY VERTICAL
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {name} Digital Solutions
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed">
            {description}
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-primary to-brand-violet shadow-glow-md inline-flex items-center space-x-2"
            >
              <span>Discuss {name} Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <CTABlock block={{ heading: `Transform Your ${name} Operations with Webrik` }} />
    </div>
  )
}
