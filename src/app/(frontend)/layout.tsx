import React from 'react'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import '../globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getHeaderGlobal, getFooterGlobal, getSiteSettings, getAnalyticsSettings } from '@/lib/payload'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Webrik | Software Development & Digital Marketing Agency',
  description:
    'Webrik is a software development and digital marketing agency that helps brands build powerful digital experiences, scalable Next.js platforms, mobile apps, and execute result-driven growth marketing.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const headerData = await getHeaderGlobal()
  const footerData = await getFooterGlobal()
  const siteSettings = await getSiteSettings()
  const analyticsSettings = await getAnalyticsSettings()

  return (
    <html lang="en" className={`${dmSans.variable} dark`}>
      <head>
        {analyticsSettings?.googleAnalyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticsSettings.googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${analyticsSettings.googleAnalyticsId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-navy-950 text-slate-100 antialiased selection:bg-brand-violet selection:text-white">
        <Header headerData={headerData} siteSettings={siteSettings} />
        <main className="min-h-screen">{children}</main>
        <Footer footerData={footerData} siteSettings={siteSettings} />
      </body>
    </html>
  )
}
