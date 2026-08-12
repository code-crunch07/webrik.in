'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Code, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'

interface HeaderProps {
  headerData?: any
  siteSettings?: any
}

export const Header: React.FC<HeaderProps> = ({ headerData, siteSettings }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const servicesMegaMenu = [
    {
      category: 'Software Development',
      icon: Code,
      items: [
        { name: 'Web Development', href: '/services/web-development', desc: 'Custom React & Next.js applications' },
        { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'iOS & Android native performance' },
        { name: 'SaaS Development', href: '/services/saas-development', desc: 'Scalable multi-tenant cloud platforms' },
        { name: 'Custom Software', href: '/services/custom-software-development', desc: 'Enterprise architecture & backend APIs' },
        { name: 'E-commerce Development', href: '/services/e-commerce-development', desc: 'High-converting online stores' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design', desc: 'Modern user-centric digital interfaces' },
      ],
    },
    {
      category: 'Digital Marketing',
      icon: Sparkles,
      items: [
        { name: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Full-funnel growth campaigns' },
        { name: 'SEO Services', href: '/services/seo-services', desc: 'Rank #1 on Google with technical SEO' },
        { name: 'Google Ads / PPC', href: '/services/google-ads-ppc', desc: 'High-ROI search & display marketing' },
        { name: 'Social Media Marketing', href: '/services/social-media-marketing', desc: 'Brand engagement across platforms' },
        { name: 'Performance Marketing', href: '/services/performance-marketing', desc: 'Conversion-driven ad spend strategy' },
        { name: 'Branding & Lead Gen', href: '/services/branding', desc: 'Positioning & qualified lead engines' },
      ],
    },
  ]

  const industriesMegaMenu = [
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'E-commerce', href: '/industries/e-commerce' },
    { name: 'Jewellery', href: '/industries/jewellery' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Finance & Fintech', href: '/industries/finance' },
    { name: 'Hospitality', href: '/industries/hospitality' },
    { name: 'SaaS & Tech', href: '/industries/saas' },
  ]

  const frontendLogoUrl =
    typeof siteSettings?.logo === 'object' && siteSettings?.logo?.url
      ? siteSettings.logo.url
      : '/webrik-logo.png'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/90 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-navy-950/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <div className="bg-white/95 px-3 py-1.5 rounded-xl border border-white/20 shadow-glow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img src={frontendLogoUrl} alt="Webrik — Innovating Ideas" className="h-8 sm:h-9 object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-brand-violet bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith('/services') ? 'text-brand-violet bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-brand-violet' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] p-6 glass-panel rounded-2xl shadow-2xl border border-surface-border shadow-purple-900/20 grid grid-cols-2 gap-6 z-50"
                  >
                    {servicesMegaMenu.map((sec, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-center space-x-2 pb-2 border-b border-surface-border">
                          <sec.icon className="w-5 h-5 text-brand-violet" />
                          <h4 className="text-sm font-bold text-white uppercase tracking-wider">{sec.category}</h4>
                        </div>
                        <div className="space-y-1">
                          {sec.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="block p-2 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-slate-200 group-hover:text-brand-violet transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-slate-400 line-clamp-1">{item.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith('/industries') ? 'text-brand-violet bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-brand-violet' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 p-4 glass-panel rounded-2xl shadow-2xl border border-surface-border grid grid-cols-1 gap-1 z-50"
                  >
                    {industriesMegaMenu.map((ind, idx) => (
                      <Link
                        key={idx}
                        href={ind.href}
                        className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/portfolio"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith('/portfolio') ? 'text-brand-violet bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/case-studies"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith('/case-studies') ? 'text-brand-violet bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith('/blog') ? 'text-brand-violet bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/about' ? 'text-brand-violet bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/contact' ? 'text-brand-violet bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-brand-primary to-brand-violet hover:from-brand-primaryHover hover:to-brand-purple shadow-glow-sm hover:shadow-glow-md transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-surface-border text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-b border-surface-border px-4 pt-4 pb-6 space-y-3"
          >
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-white/5"
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-white/5"
            >
              Industries
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-white/5"
            >
              Portfolio
            </Link>
            <Link
              href="/case-studies"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-white/5"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-white/5"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-white/5"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-200 hover:bg-white/5"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-bold text-white rounded-xl bg-gradient-to-r from-brand-primary to-brand-violet text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
