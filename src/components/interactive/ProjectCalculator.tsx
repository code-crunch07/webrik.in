'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2, Calculator, Clock, Layers, Zap } from 'lucide-react'
import Link from 'next/link'

export const ProjectCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'software' | 'mobile' | 'marketing' | 'enterprise'>('software')
  const [timeline, setTimeline] = useState<'mvp' | 'standard' | 'enterprise'>('mvp')
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['cms', 'seo'])

  const projectTypes = [
    { id: 'software', label: 'Web & SaaS Platform', baseDays: 14, basePrice: 1999 },
    { id: 'mobile', label: 'iOS & Android App', baseDays: 21, basePrice: 2499 },
    { id: 'marketing', label: 'Growth Marketing & SEO', baseDays: 7, basePrice: 999 },
    { id: 'enterprise', label: 'Full Digital Transformation', baseDays: 30, basePrice: 3999 },
  ]

  const addons = [
    { id: 'cms', label: 'Payload CMS Admin Portal', days: 3, price: 499 },
    { id: 'seo', label: 'Technical SEO & Speed Boost', days: 2, price: 299 },
    { id: 'auth', label: 'Authentication & Role Security', days: 3, price: 399 },
    { id: 'payments', label: 'Stripe / Razorpay Payments', days: 2, price: 349 },
    { id: 'ai', label: 'AI & Chatbot Integration', days: 4, price: 599 },
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
    <div className="w-full my-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-brand-violet/30 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 shadow-2xl relative overflow-hidden">
          {/* Ambient Lighting Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>INTERACTIVE PROJECT ESTIMATOR</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Estimate Your Scope & Timeline in Seconds
                </h2>
                <p className="text-slate-300 text-base">
                  Select your requirements below to instantly calculate execution timeline and budget estimate.
                </p>
              </div>

              {/* 1. Select Service Category */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">1. Project Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.id}
                      onClick={() => setProjectType(pt.id as any)}
                      className={`p-4 rounded-2xl text-left border text-sm font-semibold transition-all ${
                        projectType === pt.id
                          ? 'bg-brand-primary/20 border-brand-violet text-white shadow-glow-sm'
                          : 'bg-navy-900/60 border-surface-border text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-bold">{pt.label}</div>
                      <div className="text-xs text-slate-400 mt-1">Est. ~{pt.baseDays} Days</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Select Features & Add-ons */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">2. Include Key Capabilities</label>
                <div className="flex flex-wrap gap-2.5">
                  {addons.map((ad) => {
                    const isSelected = selectedAddons.includes(ad.id)
                    return (
                      <button
                        key={ad.id}
                        onClick={() => toggleAddon(ad.id)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center space-x-2 ${
                          isSelected
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                            : 'bg-navy-900/40 border-surface-border text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-slate-600'}`} />
                        <span>{ad.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-navy-950/80 border border-surface-border space-y-6 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                  <span className="text-sm font-bold text-white uppercase tracking-wider">Estimated Blueprint</span>
                  <Sparkles className="w-5 h-5 text-brand-violet animate-pulse" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 flex items-center space-x-2">
                      <Layers className="w-4 h-4 text-brand-violet" />
                      <span>Primary Scope</span>
                    </span>
                    <span className="text-white font-bold">{selectedTypeObj.label}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>Estimated Sprint Velocity</span>
                    </span>
                    <span className="text-emerald-400 font-bold">{totalDays} Business Days</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>Budget Estimate</span>
                    </span>
                    <span className="text-xl font-extrabold text-white">${totalPrice.toLocaleString()} USD</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border space-y-3">
                  <Link
                    href={`/contact?type=${projectType}&price=${totalPrice}`}
                    className="w-full py-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-brand-primary via-brand-violet to-brand-purple hover:opacity-95 shadow-glow-md flex items-center justify-center space-x-2"
                  >
                    <span>Request Proposal for This Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-[11px] text-center text-slate-400">
                    ⚡ Guaranteed response within 4 hours. No obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
