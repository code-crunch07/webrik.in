import type { Field } from 'payload'

export const blockVisibilityField: Field = {
  name: 'blockVisibility',
  type: 'group',
  label: 'Block Display Options',
  fields: [
    {
      name: 'hidden',
      type: 'checkbox',
      label: 'Hide block on frontend',
      defaultValue: false,
    },
    {
      name: 'anchorId',
      type: 'text',
      label: 'HTML Anchor ID (for direct scrolling)',
    },
    {
      name: 'customClassName',
      type: 'text',
      label: 'Custom CSS Class Name',
    },
  ],
}
