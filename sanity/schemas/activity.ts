import { defineType, defineField } from 'sanity'

export const activityType = defineType({
  name: 'activity',
  title: 'Activities / Extras',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Activity Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'description',
      title: 'Activity Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'price',
      title: 'Starting Price (IDR)',
      type: 'number',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (e.g "Half Day", "2 hours")',
      type: 'string',
    }),
    defineField({
      name: 'triplaExtrasLink',
      title: 'Tripla Add-ons Booking Link',
      type: 'url',
    })
  ]
})
