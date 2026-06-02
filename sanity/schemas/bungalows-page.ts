import { defineType, defineField } from 'sanity'

export const bungalowsPageType = defineType({
  name: 'bungalowsPage',
  title: 'Bungalows Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Bungalows Page',
        subtitle: 'Hero image for the Rooms & Bungalows page',
      }
    },
  },
  groups: [{ name: 'hero', title: 'Hero Section' }],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      description:
        'The large background image at the top of the Rooms & Bungalows page. If removed, the website will use the default image.',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
  ],
})
