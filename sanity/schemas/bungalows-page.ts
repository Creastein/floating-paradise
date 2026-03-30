import { defineType, defineField } from 'sanity'

export const bungalowsPageType = defineType({
  name: 'bungalowsPage',
  title: 'Bungalows Page',
  type: 'document',
  groups: [{ name: 'hero', title: '🛖 Hero Section' }],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      description:
        'The large background image at the very top of the Bungalows page (high-quality landscape recommended). If removed, the website will use the default image.',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
  ],
})

