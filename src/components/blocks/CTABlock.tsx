'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export const CTABlock: React.FC<{ block: any }> = ({ block }) => {
  const heading = block?.heading || 'Ready to Scale Your Digital Product & Revenue?'
  const description =
    block?.description ||
    'Schedule a 30-minute technical strategy call with our senior architects and growth team.'
  const primaryLabel = block?.primaryCTA?.label || 'Get a Free Proposal'
  const primaryUrl = block?.primaryCTA?.url || '/contact'

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>LET’S PARTNER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="text-indigo-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryUrl}
                className="px-8 py-4 rounded-2xl bg-white text-indigo-700 font-extrabold text-base shadow-lg hover:bg-slate-50 transition-all flex items-center space-x-2 group"
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
