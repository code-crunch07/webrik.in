import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getProjectBySlug } from '@/lib/payload'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { CTABlock } from '@/components/blocks/CTABlock'

interface ProjectDetailProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params
  const project: any = await getProjectBySlug(slug)
  return {
    title: project ? `${project.title} | Webrik Portfolio` : 'Portfolio Item | Webrik',
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params
  const project: any = await getProjectBySlug(slug)

  const title = project?.title || slug.replace(/-/g, ' ').toUpperCase()
  const clientName = project?.clientName || 'Enterprise Partner'
  const category = project?.category || 'Software Engineering'
  const desc = project?.shortDescription || 'High-performance web architecture and digital strategy engineered by Webrik.'

  return (
    <div className="pt-36 pb-24 bg-[#FAFAFD] text-slate-900 min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="flex items-center space-x-3">
            <span className="px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 font-bold text-xs uppercase tracking-wider">
              {category}
            </span>
            <span className="text-sm font-semibold text-slate-500">Client: {clientName}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>
          <p className="text-slate-600 text-xl leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      <CTABlock block={{ heading: 'Want a Similar Solution Built for Your Brand?' }} />
    </div>
  )
}
