'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const StatsBlock: React.FC<{ block: any }> = ({ block }) => {
  const heading = block?.heading || 'Driven by Measurable Impact'
  const statsList = block?.stats && block.stats.length > 0
    ? block.stats
    : [
        { value: '120+', label: 'Happy Clients', sublabel: 'Worldwide' },
        { value: '250+', label: 'Projects Completed', sublabel: 'Software & Growth' },
        { value: '8+', label: 'Years Experience', sublabel: 'Enterprise Excellence' },
        { value: '98%', label: 'Client Retention', sublabel: 'Long-term Partners' },
        { value: '15+', label: 'Countries Served', sublabel: 'Global Impact' },
      ]

  return (
    <section className="py-20 bg-navy-950 border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {statsList.map((stat: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-surface-dark border border-surface-border text-center hover:border-brand-violet/40 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              {stat.sublabel && (
                <div className="text-xs text-slate-400">{stat.sublabel}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
