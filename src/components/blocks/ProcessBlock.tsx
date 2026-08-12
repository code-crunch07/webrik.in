'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, Compass, Palette, Code, Rocket } from 'lucide-react'

export const ProcessBlock: React.FC<{ block: any }> = ({ block }) => {
  const steps = block?.steps && block.steps.length > 0
    ? block.steps
    : [
        { stepNumber: '01', title: 'Discover', description: 'Deep audit of business objectives, market benchmarks, target audience profiles, and tech requirements.', icon: Search },
        { stepNumber: '02', title: 'Plan', description: 'Architecting system data flows, technical stack selection, sprint roadmap, and growth marketing milestones.', icon: Compass },
        { stepNumber: '03', title: 'Design', description: 'Designing intuitive, accessible, and conversion-optimized UI/UX design systems in Figma.', icon: Palette },
        { stepNumber: '04', title: 'Develop', description: 'Writing clean TypeScript, modular Next.js components, Payload CMS collections, and automated test pipelines.', icon: Code },
        { stepNumber: '05', title: 'Launch & Grow', description: 'Deploying to high-availability cloud infrastructure and executing performance ad campaigns for customer acquisition.', icon: Rocket },
      ]

  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'HOW WE WORK'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {block?.heading || 'A Battle-Tested Framework for Digital Success'}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            From initial audit to long-term scale, our 5-step methodology guarantees speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step: any, idx: number) => {
            const IconComp = step.icon || Code
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between group hover:border-brand-violet/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-brand-violet/40 font-mono group-hover:text-brand-violet transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-dark border border-surface-border flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-brand-primary transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
