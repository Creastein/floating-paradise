import { defineType, defineField } from 'sanity'

export const bungalowType = defineType({
  name: 'bungalow',
  title: 'Bungalows',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Bungalow Name',
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'priceIDR',
      title: 'Price per night (IDR)',
      type: 'number',
    }),
    defineField({
      name: 'priceGBP',
      title: 'Price per night (GBP)',
      type: 'number',
    }),
    defineField({
      name: 'priceEUR',
      title: 'Price per night (EUR)',
      type: 'number',
    }),
    defineField({
      name: 'triplaUrl',
      title: 'Tripla Booking URL',
      type: 'url',
      description: 'Used for predefined room checkout flow'
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'maxGuests',
      title: 'Maximum Guests Allowed',
      type: 'number',
    })
  ]
})
