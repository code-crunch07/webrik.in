import type { GlobalConfig } from 'payload'

export const AnalyticsSettings: GlobalConfig = {
  slug: 'analytics-settings',
  admin: {
    group: '⚙️ Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'googleAnalyticsId',
      type: 'text',
      label: 'Google Analytics 4 Measurement ID (G-XXXXXXX)',
    },
    {
      name: 'googleTagManagerId',
      type: 'text',
      label: 'Google Tag Manager Container ID (GTM-XXXXXXX)',
    },
    {
      name: 'metaPixelId',
      type: 'text',
      label: 'Meta Pixel ID',
    },
    {
      name: 'customHeadScripts',
      type: 'textarea',
      label: 'Custom <head> Scripts',
    },
    {
      name: 'customBodyScripts',
      type: 'textarea',
      label: 'Custom <body> Scripts',
    },
  ],
}
