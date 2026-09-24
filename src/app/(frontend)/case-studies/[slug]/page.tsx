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
    <div className="pt-36 pb-24 bg-[#FAFAFD] text-slate-900 min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-bold text-indigo-700 uppercase tracking-wider">
            <Award className="w-4 h-4 text-indigo-600" />
            <span>Client: {client}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-slate-200/80">
            {(cs?.metrics || [
              { label: 'Organic Traffic', value: '+180%' },
              { label: 'Leads Generated', value: '+75%' },
              { label: 'Conversion Rate', value: '+42%' },
              { label: 'Cost Per Lead', value: '-30%' },
            ]).map((m: any, idx: number) => (
              <div key={idx} className="text-center p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="text-3xl font-black text-indigo-600">{m.value}</div>
                <div className="text-xs font-bold text-slate-700 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8 text-slate-600 text-lg leading-relaxed pt-4">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
              <p>{challenge}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">The Webrik Strategy & Solution</h3>
              <p>{solution}</p>
            </div>
          </div>
        </div>
      </div>

      <CTABlock block={{ heading: 'Achieve Verified ROI For Your Business' }} />
    </div>
  )
}
