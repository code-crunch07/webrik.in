'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin, Clock } from 'lucide-react'

export const ContactBlock: React.FC<{ block: any }> = ({ block }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Website Development',
    budget: '₹5–10 Lakh',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Website Development',
          budget: '₹5–10 Lakh',
          message: '',
        })
      } else {
        const errorData = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMessage(errorData.message || 'Something went wrong while sending your inquiry. Please try again.')
      }
    } catch (err: any) {
      setStatus('error')
      setErrorMessage('Network error. Please verify connection and try again.')
    }
  }

  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {block?.heading || "Let's Talk About Your Project"}
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                {block?.subheading ||
                  'Whether you need a custom SaaS platform, high-converting mobile app, or ROI-driven digital marketing, our team is ready.'}
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-surface-dark border border-surface-border">
                <div className="p-3 rounded-xl bg-brand-primary/20 text-brand-violet shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Email Us</h4>
                  <p className="text-xs text-slate-400 mt-0.5">hello@webrik.in</p>
                  <p className="text-[11px] text-brand-violet font-semibold mt-1">24-hour response guarantee</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-surface-dark border border-surface-border">
                <div className="p-3 rounded-xl bg-brand-violet/20 text-brand-violet shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Call / WhatsApp</h4>
                  <p className="text-xs text-slate-400 mt-0.5">+91 98765 43210</p>
                  <p className="text-[11px] text-slate-400 mt-1">Mon–Fri: 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-surface-dark border border-surface-border">
                <div className="p-3 rounded-xl bg-brand-cyan/20 text-brand-cyan shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Headquarters</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Powai, Mumbai, Maharashtra 400076, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-surface-border shadow-2xl relative">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Webrik. One of our technical leads will review your inquiry and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-surface-dark border border-surface-border text-sm font-bold text-white hover:bg-white/5 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-violet transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-violet transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-violet transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-violet transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Primary Requirement *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-violet transition-colors"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="SaaS Platform Development">SaaS Platform Development</option>
                        <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                        <option value="SEO Services">SEO Services</option>
                        <option value="Google Ads / PPC">Google Ads / PPC</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Project Budget *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-violet transition-colors"
                      >
                        <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                        <option value="₹1–5 Lakh">₹1–5 Lakh</option>
                        <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                        <option value="₹10–25 Lakh">₹10–25 Lakh</option>
                        <option value="₹25 Lakh+">₹25 Lakh+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements, timelines, and business goals..."
                      className="w-full px-4 py-3 rounded-xl bg-navy-950/80 border border-surface-border text-white text-sm focus:outline-none focus:border-brand-violet transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-primary via-brand-violet to-brand-purple hover:opacity-95 shadow-glow-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Proposal Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
