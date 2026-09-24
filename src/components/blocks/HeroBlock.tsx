'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Code2,
  TrendingUp,
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Layers,
  Flame,
} from 'lucide-react'

export const HeroBlock: React.FC<{ block: any }> = ({ block }) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'web' | 'mobile' | 'growth'>('web')

  const eyebrow = block?.eyebrow || '✦ INDEPENDENT SOFTWARE LAB & GROWTH STUDIO'
  const heading = block?.heading || 'We Build Software. We Scale Brands. We Deliver Measurable ROI.'
  const description =
    block?.description ||
    'Webrik is an engineering & digital growth agency. We architect mission-critical Next.js web applications, native mobile apps, and multi-channel acquisition funnels for high-velocity brands.'
  const primaryLabel = block?.primaryCTA?.label || 'Book Technical Consultation'
  const primaryUrl = block?.primaryCTA?.url || '/contact'
  const secondaryLabel = block?.secondaryCTA?.label || 'Explore Portfolio & Results'
  const secondaryUrl = block?.secondaryCTA?.url || '/portfolio'

  const visualPreviews = {
    web: {
      image: '/illustrations/webdev-nextjs.jpg',
      badge: '⚡ Next.js 16 + React 19 App Router',
      caption: 'Lighthouse 100/100 • Sub-second TTFB • Zero Downtime CI/CD',
      statLabel: 'Server Latency',
      statValue: '21ms Global Edge',
    },
    mobile: {
      image: '/illustrations/mobile-app.jpg',
      badge: '📱 Native iOS & Android Framework',
      caption: 'Fluid Gesture Animations • Biometric Security • Offline Sync',
      statLabel: 'App Store Rating',
      statValue: '4.9 ★ (12k+ Reviews)',
    },
    growth: {
      image: '/illustrations/growth-marketing.jpg',
      badge: '📈 Meta & Google Ads Attribution Engine',
      caption: 'Full-Funnel CRO • Technical SEO Authority • Verified ROAS',
      statLabel: 'Client ROAS Average',
      statValue: '+320% Return on Ad Spend',
    },
  }

  const currentVisual = visualPreviews[activeVisualTab]

  return (
    <section className="relative min-h-[96vh] flex items-center pt-36 pb-20 overflow-hidden bg-[#FAFAFD]">
      {/* Background Soft Mesh Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-indigo-100/70 via-purple-100/50 to-blue-100/70 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Editorial Copy & Actions */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Live Availability & Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white border border-indigo-200/90 text-indigo-700 text-xs sm:text-sm font-bold tracking-wide shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{eyebrow}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]"
            >
              We Build Software.{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                We Scale Brands.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed font-normal"
            >
              {description}
            </motion.p>

            {/* Key Value Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2-4 Week Rapid Sprints</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% IP & Code Ownership</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Outsourcing Guarantee</span>
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href={primaryUrl}
                className="px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/25 hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={secondaryUrl}
                className="px-8 py-4 rounded-xl text-base font-bold text-slate-800 bg-white border border-slate-200/90 hover:border-indigo-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xs"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </motion.div>

            {/* Quick Metrics Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">$50M+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Client Revenue</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">250+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Products Shipped</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-indigo-600">99.2%</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Retention Rate</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Studio Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              {/* Interactive Showcase Frame */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 relative z-10 shadow-2xl border border-slate-200/90 shadow-indigo-950/10">
                {/* Visual Tab Switcher Buttons */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex space-x-1.5 p-1 bg-slate-100 rounded-xl">
                    <button
                      onClick={() => setActiveVisualTab('web')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        activeVisualTab === 'web'
                          ? 'bg-white text-indigo-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Web & Architecture
                    </button>
                    <button
                      onClick={() => setActiveVisualTab('mobile')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        activeVisualTab === 'mobile'
                          ? 'bg-white text-indigo-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Mobile Apps
                    </button>
                    <button
                      onClick={() => setActiveVisualTab('growth')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        activeVisualTab === 'growth'
                          ? 'bg-white text-indigo-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Attribution & Ads
                    </button>
                  </div>

                  <div className="hidden sm:flex items-center space-x-1.5 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Showcase</span>
                  </div>
                </div>

                {/* Animated Image Preview Container */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeVisualTab}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-72 sm:h-80 w-full overflow-hidden"
                    >
                      <img
                        src={currentVisual.image}
                        alt={currentVisual.badge}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/95 text-slate-900 shadow-sm border border-slate-200 backdrop-blur-md">
                          {currentVisual.badge}
                        </span>
                      </div>

                      {/* Bottom Info Bar */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white px-3.5 py-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20">
                        <span className="truncate pr-2">{currentVisual.caption}</span>
                        <div className="text-right shrink-0">
                          <span className="text-emerald-400 font-bold font-mono text-xs">{currentVisual.statValue}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Quick Feature Pillars */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Framework</div>
                    <div className="text-xs font-extrabold text-slate-900 mt-0.5">Next.js 16</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Database</div>
                    <div className="text-xs font-extrabold text-slate-900 mt-0.5">PostgreSQL</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">CMS Engine</div>
                    <div className="text-xs font-extrabold text-slate-900 mt-0.5">Payload 3.0</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
