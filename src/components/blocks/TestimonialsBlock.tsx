'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export const TestimonialsBlock: React.FC<{ block: any; testimonials?: any[] }> = ({ block, testimonials }) => {
  const defaultTestimonials = [
    {
      clientName: 'Vikram Sharma',
      designation: 'Managing Director',
      company: 'PowaiFlats Group',
      rating: 5,
      testimonial:
        'Webrik transformed our digital presence completely. Their Next.js real estate portal loaded 3x faster than our previous platform, and our leads doubled within 45 days.',
    },
    {
      clientName: 'Anita Roy',
      designation: 'Head of Growth',
      company: 'RRENA Jewels',
      rating: 5,
      testimonial:
        'The combination of high-end UI design and targeted performance marketing was flawless. Webrik delivered a 3.2x ROAS on our Meta ad spend.',
    },
    {
      clientName: 'Rajesh Kulkarni',
      designation: 'VP Engineering',
      company: 'Nvizion Solutions',
      rating: 5,
      testimonial:
        'Webrik engineered our B2B SaaS platform with clean Next.js architecture and Payload CMS. Non-technical marketers update content in seconds.',
    },
  ]

  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section className="py-24 bg-navy-950 relative border-t border-surface-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'CLIENT FEEDBACK'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {block?.heading || 'Trusted by Founders & Executives'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-brand-violet/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.testimonial}"
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-primary to-brand-violet flex items-center justify-center font-bold text-white text-sm">
                  {item.clientName.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{item.clientName}</div>
                  <div className="text-xs text-slate-400">{item.designation}, {item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
