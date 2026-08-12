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
    <div className="pt-32 pb-24 bg-navy-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="flex items-center space-x-3">
            <span className="px-3.5 py-1 rounded-md bg-brand-primary/20 text-brand-violet font-bold text-xs">
              {category}
            </span>
            <span className="text-sm font-mono text-slate-400">Client: {clientName}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {title}
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      <CTABlock block={{ heading: 'Want a Similar Solution Built for Your Brand?' }} />
    </div>
  )
}
