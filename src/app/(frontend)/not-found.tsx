import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-36 pb-20 flex items-center justify-center bg-[#FAFAFD] px-4">
      <div className="text-center max-w-lg space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-indigo-50 border border-indigo-200/80 text-indigo-600 flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-10 h-10 animate-spin" />
        </div>

        <div className="text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">404</div>

        <h1 className="text-3xl font-extrabold text-slate-900">Page Not Found</h1>

        <p className="text-slate-600 text-sm leading-relaxed">
          The route or content block you are looking for has been moved, renamed, or does not exist in Payload CMS.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm shadow-md shadow-indigo-500/20 hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Webrik Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
