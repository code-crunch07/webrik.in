'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2, Calculator, Clock, Layers, Zap } from 'lucide-react'
import Link from 'next/link'

export const ProjectCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'software' | 'mobile' | 'marketing' | 'enterprise'>('software')
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['cms', 'seo'])

  const projectTypes = [
    { id: 'software', label: 'Web & SaaS Platform', baseDays: 14, basePrice: 2499 },
    { id: 'mobile', label: 'iOS & Android App', baseDays: 21, basePrice: 3499 },
    { id: 'marketing', label: 'Growth Marketing & SEO', baseDays: 7, basePrice: 1499 },
    { id: 'enterprise', label: 'Full Digital Ecosystem', baseDays: 30, basePrice: 4999 },
  ]

  const addons = [
    { id: 'cms', label: 'Payload CMS Admin Portal', days: 3, price: 499 },
    { id: 'seo', label: 'Technical SEO & Speed Boost', days: 2, price: 349 },
    { id: 'auth', label: 'Enterprise Auth & RBAC', days: 3, price: 449 },
    { id: 'payments', label: 'Payment Gateway Integration', days: 2, price: 399 },
    { id: 'ai', label: 'AI Workflow & LLM Automations', days: 4, price: 699 },
  ]

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id))
    } else {
      setSelectedAddons([...selectedAddons, id])
    }
  }

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0]
  const addonDays = selectedAddons.reduce((acc, curr) => {
    const item = addons.find((a) => a.id === curr)
    return acc + (item ? item.days : 0)
  }, 0)
  const addonPrice = selectedAddons.reduce((acc, curr) => {
    const item = addons.find((a) => a.id === curr)
    return acc + (item ? item.price : 0)
  }, 0)

  const totalDays = selectedTypeObj.baseDays + addonDays
  const totalPrice = selectedTypeObj.basePrice + addonPrice

  return (
    <section className="w-full py-20">
      <div className="w-full max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0B0D18]/90 border border-white/10 shadow-2xl shadow-indigo-950/30 relative overflow-hidden backdrop-blur-xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                  <span>INTERACTIVE SCOPE &amp; VELOCITY ESTIMATOR</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Transparent Timelines. No Hidden Costs.
                </h2>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                  Customize your technical specifications below to calculate execution roadmap and estimated investment.
                </p>
              </div>

              {/* 1. Select Service Category */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  1. Select Core Deliverable
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.id}
                      onClick={() => setProjectType(pt.id as any)}
                      className={`p-4 rounded-2xl text-left border text-sm font-semibold transition-all duration-200 ${
                        projectType === pt.id
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-indigo-400/50 text-white shadow-lg shadow-indigo-600/25'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="font-bold">{pt.label}</div>
                      <div className={`text-xs mt-1 font-mono ${projectType === pt.id ? 'text-indigo-100' : 'text-slate-400'}`}>
                        Est. ~{pt.baseDays} Business Days
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Select Features & Add-ons */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  2. Include Architectural Modules
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {addons.map((ad) => {
                    const isSelected = selectedAddons.includes(ad.id)
                    return (
                      <button
                        key={ad.id}
                        onClick={() => toggleAddon(ad.id)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center space-x-2 ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-400/50 text-cyan-300 shadow-sm'
                            : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                        <span>{ad.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl backdrop-blur-xl space-y-6 relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Architecture Blueprint
                  </span>
                  <div className="flex items-center space-x-1 text-cyan-400 font-bold text-xs bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full font-mono">
                    <Sparkles className="w-3 h-3" />
                    <span>Live Estimate</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 flex items-center space-x-2">
                      <Layers className="w-4 h-4 text-indigo-400" />
                      <span>Primary Scope</span>
                    </span>
                    <span className="text-white font-bold">{selectedTypeObj.label}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>Sprint Velocity</span>
                    </span>
                    <span className="text-emerald-400 font-mono font-bold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-md">
                      {totalDays} Business Days
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm pt-2">
                    <span className="text-slate-400 flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>Target Budget Tier</span>
                    </span>
                    <span className="text-3xl font-black text-white font-mono tracking-tight">
                      ${totalPrice.toLocaleString()} <span className="text-xs text-slate-400 font-normal">USD</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    href={`/contact?type=${projectType}&price=${totalPrice}`}
                    className="w-full py-4 rounded-full text-center font-bold text-slate-950 bg-white hover:bg-slate-200 shadow-xl transition-all flex items-center justify-center space-x-2 group"
                  >
                    <span>Request Proposal for These Specs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    ⚡ Guaranteed direct architect response within 24 hours. Full IP ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
