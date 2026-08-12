'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Zap, Layers, Cpu, ArrowRight } from 'lucide-react'

export const AboutBlock: React.FC<{ block: any }> = ({ block }) => {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider">
              <span>{block?.eyebrow || 'ABOUT WEBRIK'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {block?.heading || 'Bridging High-Performance Code & Market Dominance'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {block?.content ||
                'Webrik was founded on a simple principle: technology without growth marketing is incomplete, and marketing without robust engineering fails to scale. We deliver end-to-end digital mastery.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-dark border border-surface-border flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-brand-violet shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Enterprise Standards</h4>
                  <p className="text-xs text-slate-400 mt-1">Clean architecture, automated CI/CD, and SOC-2 data compliance.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-dark border border-surface-border flex items-start space-x-3">
                <Zap className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">ROI-Driven Marketing</h4>
                  <p className="text-xs text-slate-400 mt-1">Performance marketing funnels designed around CAC & LTV optimization.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-violet text-white font-bold text-sm shadow-glow-sm hover:shadow-glow-md transition-all group"
              >
                <span>{block?.cta?.label || "Let's Build Something Great"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column Interactive Visual */}
          <div className="lg:col-span-6 relative">
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between border-b border-surface-border pb-4">
                <span className="text-sm font-bold text-white uppercase tracking-wider">Webrik Core Stack</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-violet/20 text-brand-violet">Full-Stack Capability</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-navy-950/80 border border-surface-border flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Frontend & Cloud</div>
                      <div className="text-xs text-slate-400">Next.js 16, React 19, AWS, Vercel</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">Production Ready</span>
                </div>

                <div className="p-4 rounded-xl bg-navy-950/80 border border-surface-border flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Headless CMS & API</div>
                      <div className="text-xs text-slate-400">Payload CMS 3, PostgreSQL, GraphQL</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">Decoupled Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
