import type { GlobalConfig } from 'payload'
import { ctaFieldFactory } from '../fields/cta'

export const Header: GlobalConfig = {
  slug: 'header',
  admin: {
    group: '⚙️ Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'announcementText',
      type: 'text',
      label: 'Top Announcement Banner Text (Optional)',
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Main Navigation Menu',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        { name: 'hasMegaMenu', type: 'checkbox', defaultValue: false },
        {
          name: 'megaMenuType',
          type: 'select',
          options: [
            { label: 'Services Mega Menu', value: 'services' },
            { label: 'Industries Mega Menu', value: 'industries' },
          ],
        },
      ],
    },
    ctaFieldFactory('cta', 'Header CTA Button'),
  ],
}
