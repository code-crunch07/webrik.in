'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export const CTABlock: React.FC<{ block: any }> = ({ block }) => {
  const heading = block?.heading || 'Ready to Scale Your Technology & Growth?'
  const subheading =
    block?.subheading ||
    'Partner with Webrik to build high-performance software applications and execute high-converting growth marketing campaigns.'
  const primaryLabel = block?.primaryCTA?.label || 'Get a Free Quote'
  const primaryUrl = block?.primaryCTA?.url || '/contact'

  return (
    <section className="py-20 relative overflow-hidden bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-10 lg:p-16 border border-brand-violet/40 bg-gradient-to-r from-navy-900 via-navy-850 to-brand-primary/20 relative overflow-hidden shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-violet/40 text-brand-violet text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-violet" />
              <span>LET'S BUILD TOGETHER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {subheading}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href={primaryUrl}
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-primary via-brand-violet to-brand-purple hover:opacity-95 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
