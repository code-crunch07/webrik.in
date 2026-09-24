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
    <div className="pt-36 pb-24 bg-[#FAFAFD] text-slate-900 min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-6 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            INDUSTRY VERTICAL
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            {name} Digital Solutions
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed">
            {description}
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20 hover:shadow-xl transition-all inline-flex items-center space-x-2"
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
