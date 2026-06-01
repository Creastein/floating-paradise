import { defineType, defineField } from 'sanity'

export const bungalowType = defineType({
  name: 'bungalow',
  title: 'Bungalows',
  type: 'document',
  groups: [
    { name: 'content', title: '📝 Content & Description' },
    { name: 'media', title: '🖼️ Gallery' },
    { name: 'booking', title: '📋 Booking & Capacity' },
  ],
  fieldsets: [
    { name: 'content_en', title: '🇬🇧 English Content', options: { collapsible: true, collapsed: false } },
    { name: 'content_id', title: '🇮🇩 Indonesian Content', options: { collapsible: true, collapsed: true } },
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
      fieldset: 'content_en',
    }),
    defineField({
      name: 'description_id',
      title: 'Description (Indonesian)',
      description: 'Deskripsi utama dalam bahasa Indonesia.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
      fieldset: 'content_id',
    }),
    defineField({
      name: 'features',
      title: 'Features List (English)',
      description: 'Short feature bullet points shown on the bungalow card.',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      fieldset: 'content_en',
    }),
    defineField({
      name: 'features_id',
      title: 'Features List (Indonesian)',
      description: 'Fitur singkat dalam bahasa Indonesia.',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      fieldset: 'content_id',
    }),


    // ── Gallery ───────────────────────────────────────
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      description: 'High quality photos shown in the bungalow slideshow (landscape format recommended). Maximum 12 photos. If removed, the website will use the default images.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'media',
      validation: (Rule) => Rule.max(12).warning('Recommended maximum is 12 photos per bungalow.'),
    }),

    // ── Booking & Capacity ────────────────────────────
    defineField({
      name: 'maxGuests',
      title: 'Maximum Guests Allowed',
      description: 'Used for occupancy clarity on the website.',
      type: 'number',
      group: 'booking',
    }),
  ],
})
