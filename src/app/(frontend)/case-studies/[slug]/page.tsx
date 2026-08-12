import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getCaseStudyBySlug } from '@/lib/payload'
import { ArrowRight, Award } from 'lucide-react'
import { CTABlock } from '@/components/blocks/CTABlock'

interface CaseStudyDetailProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CaseStudyDetailProps): Promise<Metadata> {
  const { slug } = await params
  const cs: any = await getCaseStudyBySlug(slug)
  return {
    title: cs ? `${cs.title} | Webrik Case Study` : 'Case Study | Webrik',
  }
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailProps) {
  const { slug } = await params
  const cs: any = await getCaseStudyBySlug(slug)

  const title = cs?.title || 'Scaling Digital Growth & Technology Performance'
  const client = cs?.client || 'Enterprise Brand'
  const challenge = cs?.challenge || 'Legacy system bottlenecks and high customer acquisition costs.'
  const solution = cs?.solution || 'Custom Next.js 16 app router frontend connected to Payload CMS with targeted performance ad campaigns.'

  return (
    <div className="pt-32 pb-24 bg-navy-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-violet uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Client: {client}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-surface-border">
            {(cs?.metrics || [
              { label: 'Organic Traffic', value: '+180%' },
              { label: 'Leads Generated', value: '+75%' },
              { label: 'Conversion Rate', value: '+42%' },
              { label: 'Cost Per Lead', value: '-30%' },
            ]).map((m: any, idx: number) => (
              <div key={idx} className="text-center p-4 rounded-xl bg-navy-900 border border-surface-border">
                <div className="text-3xl font-black text-emerald-400">{m.value}</div>
                <div className="text-xs font-semibold text-slate-300 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed pt-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">The Challenge</h3>
              <p>{challenge}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">The Webrik Strategy & Solution</h3>
              <p>{solution}</p>
            </div>
          </div>
        </div>
      </div>

      <CTABlock block={{ heading: 'Achieve Verified ROI For Your Business' }} />
    </div>
  )
}
