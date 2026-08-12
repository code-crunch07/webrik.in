import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  admin: {
    group: '⚙️ Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Webrik is a software development and digital marketing agency helping brands build, grow, and scale.',
    },
    {
      name: 'serviceLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'companyLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'legalLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: '© 2026 Webrik Technologies. All Rights Reserved.',
    },
  ],
}
