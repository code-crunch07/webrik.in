'use client'

import React from 'react'

export const LogoCloudBlock: React.FC<{ block: any; clients?: any[] }> = ({ block, clients }) => {
  const heading = block?.heading || 'TRUSTED BY 120+ HIGH-GROWTH ENTERPRISES & BRANDS'

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
    <section className="py-14 border-y border-slate-200/80 bg-white relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
          {heading}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
          {displayClients.map((client, idx) => {
            const logoUrl = typeof client?.logo === 'object' && client?.logo?.url ? client.logo.url : null
            return (
              <div
                key={idx}
                className="px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-indigo-300 hover:bg-indigo-50/40 hover:shadow-md transition-all duration-300 w-full min-h-[60px] flex items-center justify-center group"
              >
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt={client.name || 'Client Logo'}
                    className="max-h-8 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="font-extrabold text-sm tracking-tight text-slate-700 group-hover:text-indigo-600 transition-colors">
                    {client.name}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
