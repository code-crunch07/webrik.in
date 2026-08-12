import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-navy-950 px-4">
      <div className="text-center max-w-lg space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-brand-primary/20 border border-brand-violet/40 text-brand-violet flex items-center justify-center mx-auto shadow-glow-md">
          <Compass className="w-10 h-10 animate-spin" />
        </div>

        <div className="text-6xl font-black gradient-text">404</div>

        <h1 className="text-3xl font-extrabold text-white">Page Not Found</h1>

        <p className="text-slate-400 text-sm leading-relaxed">
          The route or content block you are looking for has been moved, renamed, or does not exist in Payload CMS.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-violet text-white font-bold text-sm shadow-glow-sm hover:shadow-glow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Webrik Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
