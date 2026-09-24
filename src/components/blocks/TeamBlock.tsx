'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'

export const TeamBlock: React.FC<{ block: any; team?: any[] }> = ({ block, team }) => {
  const defaultTeam = [
    { name: 'Rahul Shah', role: 'Founder & Managing Director', bio: 'Full-stack software architect with 8+ years leading enterprise engineering & growth campaigns.' },
    { name: 'Priya Mehta', role: 'Head of Growth & Performance Marketing', bio: 'Specialist in Meta Ads, Google Ads PPC, and high-converting marketing funnels.' },
    { name: 'Amit Verma', role: 'Lead Full-Stack Developer', bio: 'Expert in Next.js, React Native, Payload CMS, and PostgreSQL cloud architecture.' },
    { name: 'Sneha Patel', role: 'Senior UI/UX Designer', bio: 'Crafting ultra-sleek, user-centric interfaces and interactive product design systems.' },
  ]

  const displayTeam = team && team.length > 0 ? team : defaultTeam

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>OUR LEADERSHIP & ENGINEERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Minds Behind Webrik
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Senior engineers, growth strategists, and UI/UX designers dedicated to your success.
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
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-600 flex items-center justify-center text-white text-xl font-extrabold shadow-md shadow-indigo-500/20">
                  {member.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">{member.name}</h3>
                  <div className="text-xs font-semibold text-indigo-600 mt-0.5">{member.role}</div>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-3">
                <a href="#" className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
