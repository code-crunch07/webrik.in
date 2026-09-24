'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Compass, Code, TestTube, Rocket, Sparkles, CheckCircle2, Clock } from 'lucide-react'

export const ProcessBlock: React.FC<{ block: any }> = ({ block }) => {
  const steps = [
    {
      num: '01',
      title: 'Architectural Discovery',
      duration: 'Week 1',
      desc: 'Deep-dive analysis of your technical bottlenecks, audience personas, database architecture, and ROI goals.',
      deliverable: 'Technical Specification RFC',
      icon: Search,
    },
    {
      num: '02',
      title: 'UI/UX & Design Tokens',
      duration: 'Week 1-2',
      desc: 'High-fidelity Figma wireframes, interactive component prototypes, and design tokens for engineering handoff.',
      deliverable: 'Clickable Figma Prototype',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Agile Engineering Sprints',
      duration: 'Week 2-4',
      desc: 'Rapid two-week sprints with Next.js 16, Payload CMS 3, PostgreSQL clustering, and automated GitHub CI/CD.',
      deliverable: 'Live Staging Deployments',
      icon: Code,
    },
    {
      num: '04',
      title: 'QA & Security Audits',
      duration: 'Week 4',
      desc: 'Penetration testing, cross-browser compatibility verification, Core Web Vitals profiling, and load testing.',
      deliverable: '100/100 Lighthouse Audit',
      icon: TestTube,
    },
    {
      num: '05',
      title: 'Global Launch & Scale',
      duration: 'Ongoing',
      desc: 'Zero-downtime production deployment, server-side tracking, and multi-channel performance marketing funnels.',
      deliverable: 'Production Handover & SLA',
      icon: Rocket,
    },
  ]

  return (
    <section className="py-28 bg-white relative border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>THE 5-STAGE AGENCY OPERATING SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Predictable Velocity. Zero Surprises.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Our battle-tested sprint methodology ensures transparency, rigorous quality gates, and rapid time-to-market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#FAFAFD] rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 text-indigo-600 shadow-2xs group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-[11px] font-mono font-bold text-indigo-700">
                  <Clock className="w-3 h-3" />
                  <span>{step.duration}</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-200/60">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Deliverable:
                </span>
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50/80 px-2 py-1 rounded-md border border-indigo-100 block truncate">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
