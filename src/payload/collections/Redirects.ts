import type { CollectionConfig } from 'payload'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'from',
    group: '⚙️ Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'from',
      type: 'text',
      required: true,
      label: 'From URL Path (e.g. /old-services)',
    },
    {
      name: 'to',
      type: 'text',
      required: true,
      label: 'To URL Path (e.g. /services)',
    },
    {
      name: 'statusCode',
      type: 'select',
      defaultValue: '301',
      options: [
        { label: '301 Permanent Redirect', value: '301' },
        { label: '302 Temporary Redirect', value: '302' },
      ],
    },
  ],
}
