'use client'

import React from 'react'

export const LogoCloudBlock: React.FC<{ block: any; clients?: any[] }> = ({ block, clients }) => {
  const heading = block?.heading || 'Trusted by Industry Leaders'

  const defaultClients = [
    { name: 'JW Marriott', category: 'Hospitality' },
    { name: 'GreyOrange', category: 'Robotics & SaaS' },
    { name: 'RRENA Jewels', category: 'Luxury E-commerce' },
    { name: 'Nvizion Solutions', category: 'Enterprise Tech' },
    { name: 'Habibs', category: 'Retail & Wellness' },
    { name: 'PowaiFlats', category: 'Real Estate' },
    { name: 'Lensza', category: 'E-commerce' },
  ]

  const displayClients = clients && clients.length > 0 ? clients : defaultClients

  return (
    <section className="py-14 border-y border-surface-border bg-navy-950/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          {heading}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {displayClients.map((client, idx) => (
            <div
              key={idx}
              className="px-4 py-3 rounded-xl bg-surface-dark/50 border border-surface-border/50 hover:border-brand-violet/40 hover:bg-white/5 transition-all duration-300 w-full flex items-center justify-center group"
            >
              <span className="font-extrabold text-base tracking-tight text-slate-300 group-hover:text-white transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
