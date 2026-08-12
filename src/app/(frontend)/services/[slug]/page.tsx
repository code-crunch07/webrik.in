import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getServiceBySlug, getServices } from '@/lib/payload'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { CTABlock } from '@/components/blocks/CTABlock'

interface ServiceDetailProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const { slug } = await params
  const service: any = await getServiceBySlug(slug)
  return {
    title: service ? `${service.title} Services | Webrik` : 'Service Detail | Webrik',
    description: service?.shortDescription || 'Webrik Software & Growth Marketing Services',
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params
  const service: any = await getServiceBySlug(slug)

  if (!service) {
    // Render fallback service detail view for demonstration
    return (
      <div className="pt-32 pb-24 bg-navy-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="px-3 py-1 rounded-full bg-brand-primary/20 text-brand-violet text-xs font-bold uppercase tracking-wider">
              WEBRIK SERVICE
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white capitalize">
              {slug.replace(/-/g, ' ')}
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl">
              Webrik delivers enterprise-grade software development and digital marketing solutions designed for rapid scale.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-violet text-white font-bold text-sm inline-flex items-center space-x-2"
              >
                <span>Request Proposal for {slug.replace(/-/g, ' ')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider">
              {service.category === 'software' ? 'SOFTWARE DEVELOPMENT' : 'DIGITAL MARKETING'}
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-primary to-brand-violet shadow-glow-md flex items-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Deliverables Grid */}
        {service.deliverables && service.deliverables.length > 0 && (
          <div className="my-16 p-8 rounded-3xl glass-card border border-surface-border">
            <h3 className="text-2xl font-bold text-white mb-6">What We Deliver</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.deliverables.map((item: any, idx: number) => (
                <div key={idx} className="flex items-center space-x-3 text-slate-200 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{typeof item === 'object' ? item.item : item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTABlock block={{ heading: `Ready to Launch Your ${service.title} Project?` }} />
    </div>
  )
}
