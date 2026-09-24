'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Layers, Cpu, ArrowRight, CheckCircle2, XCircle, Sparkles } from 'lucide-react'

export const AboutBlock: React.FC<{ block: any }> = ({ block }) => {
  const comparisonItems = [
    {
      feature: 'Team Composition',
      traditional: 'Junior devs & outsourced offshore contractors',
      webrik: 'Dedicated Principal Architects & Senior Engineers',
    },
    {
      feature: 'Technology Stack',
      traditional: 'Legacy WordPress / Drupal / bloated templates',
      webrik: 'Next.js 16, React 19, Payload CMS & PostgreSQL',
    },
    {
      feature: 'Sprint Velocity',
      traditional: '4-6 months with endless milestone delays',
      webrik: 'Production MVP in 2-4 weeks with bi-weekly demos',
    },
    {
      feature: 'Growth Integration',
      traditional: 'Tech team and marketing team never talk',
      webrik: 'Engineered for conversion with server-side tracking',
    },
    {
      feature: 'IP & Code Ownership',
      traditional: 'Vendor lock-in and proprietary CMS traps',
      webrik: '100% full intellectual property & codebase handover',
    },
  ]

  return (
    <section className="py-28 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Column: Manifesto & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>{block?.eyebrow || 'THE WEBRIK STANDARD'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Why Visionary Brands Partner With Webrik.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Most digital agencies treat software and marketing as separate silos. We merge them into one unified growth engine. Every line of code is written to convert, and every marketing campaign is powered by server-side analytics.
            </p>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">Agency Manifesto</div>
              <p className="text-sm font-semibold text-slate-800 italic leading-relaxed">
                &ldquo;We do not build software to collect dust. We architect high-performance digital platforms that generate revenue, attract tier-one talent, and scale effortlessly.&rdquo;
              </p>
              <div className="text-xs font-bold text-slate-500">— Webrik Engineering Leadership</div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-7 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/20 hover:shadow-2xl transition-all group"
              >
                <span>Read Full Studio Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Impact Comparison Matrix */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAFD] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-indigo-950/5 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900">How We Compare</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Direct comparison against traditional IT agencies</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                  The Webrik Advantage
                </span>
              </div>

              <div className="space-y-4">
                {comparisonItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5"
                  >
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {item.feature}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {/* Traditional */}
                      <div className="flex items-start space-x-2 p-2.5 rounded-xl bg-red-50/60 border border-red-100 text-slate-600">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-red-900 block text-[11px]">Traditional Agency</span>
                          <span>{item.traditional}</span>
                        </div>
                      </div>

                      {/* Webrik */}
                      <div className="flex items-start space-x-2 p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-indigo-900 block text-[11px]">Webrik Studio</span>
                          <span className="font-semibold text-slate-900">{item.webrik}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
