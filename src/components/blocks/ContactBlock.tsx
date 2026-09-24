'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react'

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
    <section className="py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {block?.heading || "Let's Build Something Great Together"}
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                {block?.subheading ||
                  'Whether you need a custom SaaS product, mobile app, or high-converting growth marketing, our senior team is ready.'}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Email Us</h4>
                  <p className="text-xs text-slate-600 mt-0.5">hello@webrik.in</p>
                  <p className="text-[11px] text-indigo-600 font-semibold mt-1">Guaranteed 24-hour response time</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Call / WhatsApp</h4>
                  <p className="text-xs text-slate-600 mt-0.5">+91 98765 43210</p>
                  <p className="text-[11px] text-slate-500 mt-1">Mon–Fri: 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Headquarters</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Powai, Mumbai, Maharashtra 400076, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-indigo-950/5 relative">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Inquiry Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Webrik. One of our technical leads will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-sm font-bold hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="SaaS Platform Engineering">SaaS Platform Engineering</option>
                        <option value="E-commerce Solutions">E-commerce Solutions</option>
                        <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                        <option value="SEO & Organic Growth">SEO & Organic Growth</option>
                        <option value="Google Ads & PPC">Google Ads & PPC</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project goals, timeline, and current bottlenecks..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md shadow-indigo-500/20 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Proposal Request</span>
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
