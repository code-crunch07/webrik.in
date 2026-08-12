import type { GlobalConfig } from 'payload'

export const SEOSettings: GlobalConfig = {
  slug: 'seo-settings',
  admin: {
    group: '⚙️ Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titleTemplate',
      type: 'text',
      defaultValue: '%s | Webrik — Software Development & Digital Marketing',
    },
    {
      name: 'defaultMetaDescription',
      type: 'textarea',
      defaultValue: 'Webrik is a software development and digital marketing agency specializing in web development, mobile apps, SaaS, SEO, Google Ads, and performance growth.',
    },
    {
      name: 'defaultOgImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'twitterHandle',
      type: 'text',
      defaultValue: '@webrikhq',
    },
  ],
}
