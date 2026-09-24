'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Monitor,
  Smartphone,
  MessageSquare,
  Watch,
  Camera,
  Briefcase,
  Mountain,
  Lock,
  Search,
  User,
  Award,
  Hourglass,
  ShoppingCart,
  Diamond,
} from 'lucide-react'

interface HeaderProps {
  headerData?: any
  siteSettings?: any
}

export const Header: React.FC<HeaderProps> = ({ headerData, siteSettings }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
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

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }

  const servicesMegaMenu = [
    {
      category: 'Digital services',
      items: [
        {
          name: 'UI/UX Design',
          href: '/services/ui-ux-design',
          isHighlighted: true,
          iconType: 'badge' as const,
        },
        {
          name: 'Web Development',
          href: '/services/web-development',
          icon: Monitor,
        },
        {
          name: 'Mobile Development',
          href: '/services/mobile-app-development',
          icon: Smartphone,
        },
        {
          name: 'SEO & SMM',
          href: '/services/seo-services',
          icon: MessageSquare,
        },
        {
          name: 'Product Design',
          href: '/services/custom-software-development',
          icon: Watch,
        },
      ],
    },
    {
      category: 'What we offer',
      items: [
        {
          name: 'Branding',
          href: '/services/branding',
          icon: Camera,
        },
        {
          name: 'Digital Marketing',
          href: '/services/digital-marketing',
          icon: Briefcase,
        },
        {
          name: 'Analysis & Strategy',
          href: '/services/performance-marketing',
          icon: Mountain,
        },
        {
          name: 'Cyber Security',
          href: '/services/saas-development',
          icon: Lock,
        },
        {
          name: 'Research the Market',
          href: '/services/google-ads-ppc',
          icon: Search,
        },
      ],
    },
    {
      category: 'Company benefits',
      items: [
        {
          name: 'Focus on People',
          href: '/about',
          icon: User,
        },
        {
          name: 'High Standards',
          href: '/about',
          icon: Award,
        },
        {
          name: 'Different Thinking',
          href: '/about',
          icon: Hourglass,
        },
        {
          name: 'Custom Solutions',
          href: '/services',
          icon: ShoppingCart,
        },
        {
          name: 'Innovations',
          href: '/portfolio',
          icon: Diamond,
        },
      ],
    },
  ]

  const industriesMegaMenu = [
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Healthcare & MedTech', href: '/industries/healthcare' },
    { name: 'E-commerce & Retail', href: '/industries/e-commerce' },
    { name: 'Jewellery & Luxury', href: '/industries/jewellery' },
    { name: 'Education & EdTech', href: '/industries/education' },
    { name: 'Finance & Fintech', href: '/industries/finance' },
    { name: 'Hospitality & Travel', href: '/industries/hospitality' },
    { name: 'SaaS & Enterprise', href: '/industries/saas' },
  ]

  const frontendLogoUrl =
    typeof siteSettings?.logo === 'object' && siteSettings?.logo?.url
      ? siteSettings.logo.url
      : '/webrik-logo.png'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090E]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src={frontendLogoUrl} alt="Webrik — Building Digital Solutions" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                pathname === '/'
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
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
                className={`flex items-center space-x-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  pathname.startsWith('/services')
                    ? 'text-white bg-white/[0.08] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/3 mt-3 w-[880px] max-w-[95vw] p-8 sm:p-10 bg-black/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800/90 shadow-black/95 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 z-50 text-left"
                  >
                    {servicesMegaMenu.map((col, idx) => (
                      <div key={idx} className="space-y-5">
                        <h3 className="font-mono text-base font-bold text-white tracking-normal pb-3 border-b border-zinc-800/80">
                          {col.category}
                        </h3>
                        <div className="space-y-2">
                          {col.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="flex items-center space-x-3.5 py-1.5 px-2 -mx-2 rounded-lg hover:bg-white/[0.06] transition-all group"
                            >
                              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                {item.iconType === 'badge' ? (
                                  <div className="w-5 h-5 rounded-[5px] border border-[#DFFF00] flex items-center justify-center text-[10px] font-mono font-bold text-[#DFFF00] leading-none tracking-tighter">
                                    ui
                                  </div>
                                ) : (
                                  <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors stroke-[1.75]" />
                                )}
                              </div>
                              <span
                                className={`font-mono text-sm tracking-tight transition-colors ${
                                  item.isHighlighted
                                    ? 'text-white group-hover:text-[#DFFF00] font-semibold'
                                    : 'text-zinc-300 group-hover:text-white font-medium'
                                }`}
                              >
                                {item.name}
                              </span>
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
                className={`flex items-center space-x-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  pathname.startsWith('/industries')
                    ? 'text-white bg-white/[0.08] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 p-3 bg-[#0c0e17]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/[0.08] grid grid-cols-1 gap-1 z-50"
                  >
                    {industriesMegaMenu.map((ind, idx) => (
                      <Link
                        key={idx}
                        href={ind.href}
                        className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/[0.05] transition-colors"
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
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                pathname.startsWith('/portfolio')
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/case-studies"
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                pathname.startsWith('/case-studies')
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                pathname.startsWith('/blog')
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                pathname === '/about'
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                pathname === '/contact'
                  ? 'text-white bg-white/[0.08] font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-slate-950 rounded-full bg-white hover:bg-slate-200 shadow-md shadow-white/10 transition-all duration-300 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:outline-none"
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
            className="lg:hidden bg-[#0c0e17]/98 backdrop-blur-xl border-b border-white/[0.08] px-4 pt-4 pb-6 space-y-2 shadow-2xl"
          >
            <Link
              href="/"
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-200 hover:bg-white/[0.05]"
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-base font-semibold text-slate-200 hover:bg-white/[0.05]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'mobile-services' ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>
              {activeDropdown === 'mobile-services' && (
                <div className="pl-3 pr-2 py-3 space-y-4 bg-black/70 rounded-xl mt-1 border border-zinc-800/80">
                  {servicesMegaMenu.map((col, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider pb-1 border-b border-zinc-800">
                        {col.category}
                      </div>
                      <div className="space-y-1">
                        {col.items.map((item, iIdx) => (
                          <Link
                            key={iIdx}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center space-x-2.5 py-1.5 px-2 rounded-lg text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                          >
                            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                              {item.iconType === 'badge' ? (
                                <span className="w-4 h-4 rounded border border-[#DFFF00] text-[9px] text-[#DFFF00] flex items-center justify-center font-bold">
                                  ui
                                </span>
                              ) : (
                                <item.icon className="w-3.5 h-3.5 text-zinc-400" />
                              )}
                            </div>
                            <span className={item.isHighlighted ? 'text-white' : ''}>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-200 hover:bg-white/[0.05]"
            >
              Portfolio
            </Link>
            <Link
              href="/case-studies"
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-200 hover:bg-white/[0.05]"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-200 hover:bg-white/[0.05]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-200 hover:bg-white/[0.05]"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
