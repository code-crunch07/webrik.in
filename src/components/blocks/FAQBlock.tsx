'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export const FAQBlock: React.FC<{ block: any; faqs?: any[] }> = ({ block, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const defaultFAQs = [
    {
      question: 'What is Webrik’s core expertise?',
      answer: 'We specialize in full-stack software development (React, Next.js, Node.js, Payload CMS, Native iOS/Android) and result-driven digital marketing (SEO, Google Ads PPC, Meta Pixel conversion funnels).',
    },
    {
      question: 'How long does a typical software project take?',
      answer: 'A standard custom web application or mobile app takes 4 to 8 weeks from initial discovery sprint to production launch. We work in agile 2-week sprint cycles with transparent code releases.',
    },
    {
      question: 'Do we get full ownership of the source code?',
      answer: 'Yes, 100%. Upon completion, all IP rights, GitHub repositories, database credentials, and cloud deployment pipelines are fully transferred to your company.',
    },
    {
      question: 'How does Payload CMS integration help our marketing team?',
      answer: 'Payload CMS gives your non-technical marketing team an easy, intuitive admin panel to publish blogs, update landing pages, and manage services without relying on developers or writing code.',
    },
  ]

  const displayFAQs = faqs && faqs.length > 0 ? faqs : defaultFAQs

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {displayFAQs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-indigo-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4"
                    >
                      {faq.answer}
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
