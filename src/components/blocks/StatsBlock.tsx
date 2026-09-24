'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const StatsBlock: React.FC<{ block: any }> = ({ block }) => {
  const items = block?.stats || [
    { number: '$50M+', label: 'Client Revenue Generated' },
    { number: '250+', label: 'Products & Platforms Shipped' },
    { number: '99.2%', label: 'On-Time Delivery Success' },
    { number: '15+', label: 'Global Industry Verticals' },
  ]

  return (
    <section className="py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map((stat: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-slate-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
