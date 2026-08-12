import type { GroupField } from 'payload'

export const ctaFieldFactory = (name = 'cta', label = 'Call To Action'): GroupField => ({
  name,
  type: 'group',
  label,
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Button Label',
      defaultValue: 'Get Started',
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL / Route Link',
      defaultValue: '/contact',
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Button Style',
      defaultValue: 'primary',
      options: [
        { label: 'Primary (Purple Glow)', value: 'primary' },
        { label: 'Secondary (Navy/Glass)', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
        { label: 'Text Link', value: 'link' },
      ],
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      label: 'Open in new tab',
      defaultValue: false,
    },
  ],
})
