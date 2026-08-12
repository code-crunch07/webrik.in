import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: '⚙️ Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'Webrik',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Software Development & Digital Marketing Agency',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Frontend Website Logo',
      admin: {
        description: 'Uploaded image will dynamically update the website header and footer logo.',
      },
    },
    {
      name: 'adminLogo',
      type: 'upload',
      relationTo: 'media',
      label: 'Admin Panel & Login Page Logo',
      admin: {
        description: 'Uploaded image will display on the Payload CMS Admin Login screen and top navigation sidebar.',
      },
    },
    {
      name: 'contactPhone',
      type: 'text',
      defaultValue: '+91 98765 43210',
    },
    {
      name: 'contactEmail',
      type: 'text',
      defaultValue: 'hello@webrik.in',
    },
    {
      name: 'address',
      type: 'textarea',
      defaultValue: 'Powai, Mumbai, Maharashtra, India',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'linkedIn', type: 'text' },
        { name: 'twitter', type: 'text' },
        { name: 'instagram', type: 'text' },
        { name: 'github', type: 'text' },
      ],
    },
  ],
}
