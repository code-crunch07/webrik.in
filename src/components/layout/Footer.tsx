import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react'

interface FooterProps {
  footerData?: any
  siteSettings?: any
}

export const Footer: React.FC<FooterProps> = ({ footerData, siteSettings }) => {
  const footerLogoUrl =
    typeof siteSettings?.logo === 'object' && siteSettings?.logo?.url
      ? siteSettings.logo.url
      : '/webrik-logo.png'

  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden pt-16 pb-12 text-slate-300">
      {/* Background ambient blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="w-full max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-white/95 px-3 py-1.5 rounded-xl border border-white/20">
                <img src={footerLogoUrl} alt="Webrik — Building Digital Solutions" className="h-9 sm:h-10 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Webrik is an engineering & performance marketing agency. We partner with ambitious brands to build scalable web products, mobile applications, and high-converting growth engines.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>hello@webrik.in</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Powai, Mumbai, MH, India</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-4">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services/web-development" className="text-slate-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-slate-400 hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="/services/saas-development" className="text-slate-400 hover:text-white transition-colors">SaaS Platforms</Link></li>
              <li><Link href="/services/e-commerce-development" className="text-slate-400 hover:text-white transition-colors">E-commerce Solutions</Link></li>
              <li><Link href="/services/digital-marketing" className="text-slate-400 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/seo-services" className="text-slate-400 hover:text-white transition-colors">SEO Services</Link></li>
              <li><Link href="/services/google-ads-ppc" className="text-slate-400 hover:text-white transition-colors">Google Ads & PPC</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog & Insights</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5"><span>Careers</span> <span className="px-1.5 py-0.5 text-[10px] bg-indigo-500/20 text-indigo-300 rounded font-bold">HIRING</span></Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/industries/real-estate" className="text-slate-400 hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="/industries/healthcare" className="text-slate-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/e-commerce" className="text-slate-400 hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link href="/industries/jewellery" className="text-slate-400 hover:text-white transition-colors">Jewellery & Luxury</Link></li>
              <li><Link href="/industries/education" className="text-slate-400 hover:text-white transition-colors">Education & EdTech</Link></li>
              <li><Link href="/industries/finance" className="text-slate-400 hover:text-white transition-colors">Finance & SaaS</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Webrik Technologies. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
