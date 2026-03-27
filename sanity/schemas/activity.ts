import { defineType, defineField } from 'sanity'

export const activityType = defineType({
  name: 'activity',
  title: 'Activities / Extras',
  type: 'document',
  groups: [
    { name: 'content', title: '📝 Content' },
    { name: 'pricing', title: '💰 Pricing & Booking' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Activity Name (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Activity Description (English)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'description_id',
      title: 'Activity Description (Indonesian)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'duration',
      title: 'Duration — English (e.g. "Half Day", "2 hours")',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'duration_id',
      title: 'Duration — Indonesian (misal "Setengah Hari", "2 jam")',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'price',
      title: 'Starting Price (IDR)',
      type: 'number',
      group: 'pricing',
    }),
    defineField({
      name: 'triplaExtrasLink',
      title: 'Tripla Add-ons Booking Link',
      type: 'url',
      group: 'pricing',
    }),
  ],
})
