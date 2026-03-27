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
      description: 'The display name of the bungalow.',
      type: 'string',
      validation: (Rule) => Rule.required().error('Bungalow name is required.'),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'URL identifier. Locked to prevent breaking website navigation.',
      type: 'slug',
      options: { source: 'name' },
      readOnly: true,
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description (English)',
      description: 'Main promotional text for this bungalow.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'description_id',
      title: 'Description (Indonesian)',
      description: 'Deskripsi utama dalam bahasa Indonesia.',
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
      description: 'Example: 650000 (do not include commas or dots).',
      type: 'number',
      group: 'pricing',
    }),


    // ── Gallery ───────────────────────────────────────
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      description: 'High quality photos shown in the bungalow slideshow (landscape format recommended). If removed, the website will use the default images.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'media',
    }),

    // ── Booking & Capacity ────────────────────────────
    defineField({
      name: 'maxGuests',
      title: 'Maximum Guests Allowed',
      description: 'Used for occupancy clarity on the website.',
      type: 'number',
      group: 'booking',
    }),
    defineField({
      name: 'triplaUrl',
      title: 'Tripla Booking URL',
      type: 'url',
      description: 'Direct link to book this specific room on the Tripla platform.',
      group: 'booking',
    }),
  ],
})
