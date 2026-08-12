'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export const FAQBlock: React.FC<{ block: any; faqs?: any[] }> = ({ block, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const defaultFaqs = [
    {
      question: 'What services does Webrik specialize in?',
      answer: 'Webrik provides end-to-end software development (Web Apps, Next.js, Mobile Apps, SaaS platforms, Custom APIs) and full-funnel digital marketing (SEO, Google Ads, Meta Ads, Performance Growth, Lead Generation).',
    },
    {
      question: 'How long does a custom web or mobile project take?',
      answer: 'Typical website development timelines range from 3 to 6 weeks. Complex enterprise SaaS platforms or custom mobile applications generally take 8 to 12 weeks depending on technical specifications.',
    },
    {
      question: 'Can non-technical team members update content via Payload CMS?',
      answer: 'Yes! Payload CMS provides a simple, secure admin panel where your marketing team can easily update page layouts, text, media, blog posts, services, case studies, and SEO metadata without editing code.',
    },
    {
      question: 'How do you approach performance marketing and ad spend ROI?',
      answer: 'We focus on bottom-line business metrics: Cost Per Lead (CPL), Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Lifetime Value (LTV). We build conversion-optimized landing pages paired with targeted ad funnels.',
    },
    {
      question: 'What is your technology stack for custom software?',
      answer: 'We build on Next.js 16, React 19, TypeScript, Tailwind CSS, Payload CMS 3, PostgreSQL, AWS cloud infrastructure, and Docker containerization.',
    },
  ]

  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs

  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'GOT QUESTIONS?'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {block?.heading || 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-surface-border transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-lg font-bold text-white flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-brand-violet shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-violet' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-surface-border/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
