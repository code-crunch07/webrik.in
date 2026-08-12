import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getServiceBySlug } from '@/lib/payload'
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Zap,
  Clock,
  Layers,
  Cpu,
  TrendingUp,
  Target,
  BarChart3,
  Check,
} from 'lucide-react'
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
    title: service ? `${service.title} Services | Webrik` : `${slug.replace(/-/g, ' ').toUpperCase()} | Webrik`,
    description: service?.shortDescription || 'Webrik Enterprise Software Development & Digital Marketing Agency',
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params
  const service: any = await getServiceBySlug(slug)

  // Default content maps if dynamic fields are empty
  const formattedTitle = service?.title || slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const isSoftware = service?.category === 'software' || slug.includes('dev') || slug.includes('app') || slug.includes('saas') || slug.includes('web')

  const defaultDeliverables = service?.deliverables?.length > 0 ? service.deliverables : [
    { item: 'Architecture & Technical Requirement Specification' },
    { item: 'Custom Production-Ready Codebase' },
    { item: '100% Mobile & Desktop Responsive Design' },
    { item: 'Automated CI/CD Pipeline & Hosting Setup' },
    { item: 'Core Web Vitals & SEO Speed Optimization' },
    { item: 'Comprehensive QA Testing & Security Audit' },
  ]

  const defaultFeatures = service?.features?.length > 0 ? service.features : [
    {
      title: 'Scalable Architecture',
      description: 'Engineered from the ground up for sub-second load times, high concurrency, and seamless enterprise expansion.',
    },
    {
      title: 'Custom User Experience',
      description: 'Tailored interface designs created specifically for your target audience to maximize engagement and conversion rates.',
    },
    {
      title: 'Security & Compliance',
      description: 'Strict security practices including SSL/TLS encryption, CORS protection, role-based access control, and sanitization.',
    },
    {
      title: 'Real-Time Analytics & Monitoring',
      description: 'Integrated telemetry and reporting so you track performance, visitor retention, and revenue metrics in real time.',
    },
  ]

  const defaultProcessSteps = service?.processSteps?.length > 0 ? service.processSteps : [
    {
      step: '01',
      title: 'Discovery & Product Architecture',
      description: 'We analyze your business objectives, technical constraints, and competitive landscape to architect a clear product blueprint.',
    },
    {
      step: '02',
      title: 'Agile Iterative Sprint Execution',
      description: 'Our engineering and design teams execute two-week sprints with transparent progress updates, code reviews, and live demos.',
    },
    {
      step: '03',
      title: 'Automated Testing & Security QA',
      description: 'Rigorous end-to-end testing, cross-browser compatibility verification, and security vulnerability audits before launch.',
    },
    {
      step: '04',
      title: 'Deployment & Continuous Growth',
      description: 'Zero-downtime deployment on cloud infrastructure followed by ongoing monitoring, optimization, and scaling support.',
    },
  ]

  return (
    <div className="pt-32 pb-24 bg-navy-950 text-slate-100 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-violet" />
              <span>{isSoftware ? 'SOFTWARE ENGINEERING' : 'DIGITAL MARKETING & GROWTH'}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              {formattedTitle}
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-3xl">
              {service?.shortDescription ||
                `Accelerate your business with Webrik's enterprise-grade ${formattedTitle.toLowerCase()} services. We combine modern engineering, dynamic design, and data-backed strategy.`}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-primary to-brand-violet shadow-glow-md hover:shadow-glow-lg transition-all flex items-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="px-7 py-4 rounded-xl text-base font-bold text-slate-200 glass-card border border-surface-border hover:border-brand-violet/50 transition-all flex items-center space-x-2"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>

          {/* Quick Stats Highlight Card */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl glass-card border border-surface-border space-y-6 shadow-glow-sm">
              <div className="flex items-center space-x-3 text-brand-violet">
                <ShieldCheck className="w-8 h-8" />
                <h3 className="text-lg font-bold text-white">Webrik Service Standards</h3>
              </div>
              <div className="space-y-4 divide-y divide-surface-border/50 text-sm">
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-400">Delivery Velocity</span>
                  <span className="text-emerald-400 font-bold">2-4 Weeks Sprints</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Code & Quality Guarantee</span>
                  <span className="text-white font-bold">100% Clean Architecture</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Dedicated Support</span>
                  <span className="text-white font-bold">24/7 Monitoring</span>
                </div>
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-slate-400">Security SLA</span>
                  <span className="text-brand-violet font-bold">Enterprise Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features & Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-violet">CAPABILITIES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Key Features & Technical Capabilities
          </h2>
          <p className="text-slate-400 text-base">
            Every solution we build is customized to deliver long-term business performance and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {defaultFeatures.map((feat: any, idx: number) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-card border border-surface-border hover:border-brand-violet/40 transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 border border-brand-violet/30 text-brand-violet flex items-center justify-center group-hover:scale-110 transition-transform">
                {idx % 4 === 0 && <Cpu className="w-6 h-6" />}
                {idx % 4 === 1 && <Layers className="w-6 h-6" />}
                {idx % 4 === 2 && <Zap className="w-6 h-6" />}
                {idx % 4 === 3 && <BarChart3 className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold text-white">{feat.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Checklist Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-surface-border">
          <div className="max-w-2xl mb-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">WHAT WE DELIVER</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Included in {formattedTitle}</h3>
            <p className="text-slate-400 text-sm">
              Tangible, high-value assets and artifacts delivered upon project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {defaultDeliverables.map((deliv: any, idx: number) => {
              const text = typeof deliv === 'object' ? deliv.item : deliv
              return (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-2xl bg-navy-900/60 border border-surface-border/60">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-200 text-sm font-semibold leading-snug">{text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Workflow Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-violet">HOW WE WORK</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our 4-Step Project Delivery Process
          </h2>
          <p className="text-slate-400 text-base">
            From initial strategy to production rollout, we follow a transparent, battle-tested execution framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultProcessSteps.map((proc: any, idx: number) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-card border border-surface-border relative space-y-4 hover:border-brand-violet/40 transition-all"
            >
              <div className="text-3xl font-black gradient-text">
                {proc.step || `0${idx + 1}`}
              </div>
              <h4 className="text-lg font-bold text-white">{proc.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{proc.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Webrik */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-primary/20 via-navy-900 to-navy-950 border border-brand-violet/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Why Partner with Webrik for {formattedTitle}?
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                We combine deep technical mastery in Next.js, Payload CMS, and Node.js with performance marketing expertise to turn software investments into long-term revenue drivers.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-primary to-brand-violet shadow-glow-md hover:shadow-glow-lg transition-all inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTABlock block={{ heading: `Ready to Build Your ${formattedTitle} Solution?` }} />
    </div>
  )
}

