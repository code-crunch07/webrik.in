'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, TrendingUp, Smartphone, ShieldCheck, Zap } from 'lucide-react'

export const HeroBlock: React.FC<{ block: any }> = ({ block }) => {
  const eyebrow = block?.eyebrow || '🚀 Technology + Design + Marketing'
  const heading = block?.heading || 'We Build. We Market. We Grow Your Business.'
  const description =
    block?.description ||
    'Webrik is a software development and digital marketing agency that helps brands build powerful digital experiences and scale with result-driven marketing.'
  const primaryLabel = block?.primaryCTA?.label || 'Explore Services'
  const primaryUrl = block?.primaryCTA?.url || '/services'
  const secondaryLabel = block?.secondaryCTA?.label || 'View Our Work'
  const secondaryUrl = block?.secondaryCTA?.url || '/portfolio'

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-hero-gradient">
      {/* Dynamic ambient lighting circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-violet/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs sm:text-sm font-semibold shadow-glow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-violet animate-pulse" />
              <span>{eyebrow}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              We Build. We Market.{' '}
              <span className="gradient-text">We Grow Your Business.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed font-normal"
            >
              {description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href={primaryUrl}
                className="px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-primary via-brand-violet to-brand-purple hover:opacity-95 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={secondaryUrl}
                className="px-7 py-4 rounded-xl text-base font-bold text-slate-200 bg-surface-dark border border-surface-border hover:border-brand-violet hover:bg-white/5 transition-all duration-300 flex items-center space-x-2"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </motion.div>

            {/* Key Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-surface-border/60"
            >
              <div>
                <div className="text-2xl font-black text-white">250+</div>
                <div className="text-xs text-slate-400 font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">120+</div>
                <div className="text-xs text-slate-400 font-medium">Global Clients</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">98%</div>
                <div className="text-xs text-slate-400 font-medium">Client Retention</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Technology Composition Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Composited Card */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Outer Card Frame */}
              <div className="glass-card rounded-3xl p-6 relative z-10 overflow-hidden shadow-2xl border border-white/10">
                {/* Mock Application Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 px-3 py-1 rounded-md bg-navy-950/60 border border-surface-border">
                    webrik.app/dashboard
                  </div>
                </div>

                {/* Dashboard & Marketing Content Composition */}
                <div className="space-y-4">
                  {/* Revenue Growth Graph Mockup */}
                  <div className="p-4 rounded-2xl bg-navy-900/80 border border-surface-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-300">Quarterly ROI Growth</span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>+184%</span>
                      </span>
                    </div>
                    <div className="h-20 flex items-end justify-between gap-2 pt-4">
                      {[40, 55, 45, 70, 65, 90, 110].map((h, i) => (
                        <div key={i} className="w-full bg-surface-dark rounded-t-sm relative group overflow-hidden">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                            className="w-full bg-gradient-to-t from-brand-primary to-brand-violet rounded-t-sm"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Multi-Service Chips Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-navy-900/60 border border-surface-border flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-brand-primary/20 text-brand-violet">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Software & SaaS</div>
                        <div className="text-[10px] text-slate-400">Next.js & Cloud API</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-900/60 border border-surface-border flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-brand-cyan/20 text-brand-cyan">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Mobile Apps</div>
                        <div className="text-[10px] text-slate-400">iOS & Android</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Widget 1: Live Lead Conversion Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 z-20 p-3.5 rounded-2xl glass-panel shadow-2xl border border-brand-violet/40 flex items-center space-x-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-glow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">Lead Conversion</div>
                  <div className="text-[10px] font-semibold text-emerald-400">+75% Qualified Leads</div>
                </div>
              </motion.div>

              {/* Floating Widget 2: Security & Scale Badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 z-20 p-3.5 rounded-2xl glass-panel shadow-2xl border border-brand-primary/40 flex items-center space-x-3"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-primary/20 text-brand-violet flex items-center justify-center border border-brand-violet/40">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">Enterprise Ready</div>
                  <div className="text-[10px] text-slate-400">SOC-2 & AWS Scalability</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
