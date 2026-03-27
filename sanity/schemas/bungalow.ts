import { defineType, defineField } from 'sanity'

export const bungalowType = defineType({
  name: 'bungalow',
  title: 'Bungalows',
  type: 'document',
  groups: [
    { name: 'content', title: '📝 Content & Description' },
    { name: 'pricing', title: '💰 Pricing' },
    { name: 'media', title: '🖼️ Gallery' },
    { name: 'booking', title: '📋 Booking & Capacity' },
  ],
  fields: [
    // ── Content ───────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Bungalow Name',
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
      name: 'description',
      title: 'Description (English)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'description_id',
      title: 'Description (Indonesian)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'features',
      title: 'Features List (English)',
      description: 'Short feature bullet points shown on the bungalow card.',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),
    defineField({
      name: 'features_id',
      title: 'Features List (Indonesian)',
      description: 'Fitur singkat dalam bahasa Indonesia.',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
    }),

    // ── Pricing ───────────────────────────────────────
    defineField({
      name: 'priceIDR',
      title: 'Price per night (IDR)',
      type: 'number',
      group: 'pricing',
    }),
    defineField({
      name: 'priceGBP',
      title: 'Price per night (GBP)',
      type: 'number',
      group: 'pricing',
    }),
    defineField({
      name: 'priceEUR',
      title: 'Price per night (EUR)',
      type: 'number',
      group: 'pricing',
    }),

    // ── Gallery ───────────────────────────────────────
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      description: 'Photos shown in the bungalow slideshow.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'media',
    }),

    // ── Booking & Capacity ────────────────────────────
    defineField({
      name: 'maxGuests',
      title: 'Maximum Guests Allowed',
      type: 'number',
      group: 'booking',
    }),
    defineField({
      name: 'triplaUrl',
      title: 'Tripla Booking URL',
      type: 'url',
      description: 'Used for predefined room checkout flow.',
      group: 'booking',
    }),
  ],
})
