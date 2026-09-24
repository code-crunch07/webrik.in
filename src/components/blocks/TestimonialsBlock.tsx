'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2, Sparkles, Building2 } from 'lucide-react'

export const TestimonialsBlock: React.FC<{ block: any; testimonials?: any[] }> = ({ block, testimonials }) => {
  const defaultTestimonials = [
    {
      clientName: 'Vikram Sharma',
      designation: 'Managing Director',
      company: 'PowaiFlats Group',
      rating: 5,
      metricBadge: '+180% Qualified Inquiries',
      initials: 'VS',
      testimonial:
        'Webrik transformed our digital presence completely. Their Next.js real estate portal loaded 3x faster than our previous platform, and our qualified leads doubled within 45 days.',
    },
    {
      clientName: 'Anita Roy',
      designation: 'Head of Growth',
      company: 'RRENA Jewels',
      rating: 5,
      metricBadge: '3.2x Verified ROAS',
      initials: 'AR',
      testimonial:
        'The combination of high-end UI design and targeted performance marketing was flawless. Webrik delivered a 3.2x ROAS on our Meta ad spend and cut our CAC by 28%.',
    },
    {
      clientName: 'Rajesh Kulkarni',
      designation: 'VP Engineering',
      company: 'Nvizion Solutions',
      rating: 5,
      metricBadge: '21ms Edge Latency',
      initials: 'RK',
      testimonial:
        'Webrik engineered our B2B SaaS platform with clean Next.js architecture and Payload CMS. Our marketing team updates product release pages in seconds with zero dev tickets.',
    },
  ]

  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section className="py-28 bg-[#FAFAFD] relative border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>EXECUTIVE ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {block?.heading || 'Endorsed by Visionary Founders & CTOs'}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Real partnerships. Measurable business outcomes. Zero vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-12 h-12 text-indigo-100 absolute top-6 right-6 pointer-events-none group-hover:text-indigo-200 transition-colors" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {item.metricBadge && (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
                      {item.metricBadge}
                    </span>
                  )}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.testimonial}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-3.5 relative z-10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold text-sm flex items-center justify-center shadow-sm shrink-0">
                  {item.initials || item.clientName.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center space-x-1.5">
                    <span>{item.clientName}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {item.designation}, <span className="text-indigo-600 font-bold">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
