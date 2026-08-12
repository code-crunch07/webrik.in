'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

export const TeamBlock: React.FC<{ block: any; teamMembers?: any[] }> = ({ block, teamMembers }) => {
  const defaultTeam = [
    {
      name: 'Rahul Shah',
      designation: 'Founder & Chief Technology Officer',
      bio: 'Ex-Google engineer specializing in Next.js cloud architecture, high-frequency backend APIs, and enterprise digital strategy.',
      skills: ['Architecture', 'Next.js', 'PostgreSQL', 'Cloud'],
    },
    {
      name: 'Priya Mehta',
      designation: 'VP of Digital Marketing',
      bio: 'Growth strategist who managed ₹10Cr+ in performance marketing ad spend with focus on ROAS & CAC optimization.',
      skills: ['Performance Marketing', 'SEO', 'Google Ads'],
    },
    {
      name: 'Amitabh Desai',
      designation: 'Head of UI/UX Design',
      bio: 'Design strategist crafting modern SaaS interfaces and high-converting agency design systems.',
      skills: ['Design Systems', 'Figma', 'User Research'],
    },
    {
      name: 'Siddharth Rao',
      designation: 'Lead Mobile & SaaS Architect',
      bio: 'Specialist in React Native, iOS, Android, and multi-tenant SaaS backend engineering.',
      skills: ['React Native', 'Node.js', 'Docker'],
    },
  ]

  const displayTeam = teamMembers && teamMembers.length > 0 ? teamMembers : defaultTeam

  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-violet/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <span>{block?.eyebrow || 'LEADERSHIP & ENGINEERING'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {block?.heading || 'The Minds Behind Webrik'}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Experienced engineers, digital strategists, and product designers dedicated to your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTeam.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-primary via-brand-violet to-brand-cyan flex items-center justify-center text-white font-extrabold text-2xl shadow-glow-sm mb-4">
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-brand-violet mb-3">{member.designation}</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{member.bio}</p>
              </div>

              <div className="pt-3 border-t border-surface-border flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {(member.skills || []).slice(0, 2).map((s: string, sidx: number) => (
                    <span key={sidx} className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
