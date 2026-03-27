import { defineType, defineField } from 'sanity'

export const yogaRetreatType = defineType({
  name: 'yogaRetreat',
  title: 'Yoga Retreat',
  type: 'document',
  groups: [
    { name: 'hero', title: '🧘 Hero & Overview' },
    { name: 'schedule', title: '📅 Schedule & Themes' },
    { name: 'facilitator', title: '👩 Facilitator (Astrid)' },
    { name: 'pricing', title: '💰 Pricing & Policy' },
    { name: 'gallery', title: '🖼️ Gallery' },
  ],
  fields: [
    // ── Hero & Overview ─────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'dates',
      title: 'Retreat Dates',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'start', type: 'date', title: 'Start Date' },
        { name: 'end', type: 'date', title: 'End Date' },
      ],
    }),
    defineField({
      name: 'overview',
      title: 'Retreat Overview Text (English)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    }),
    defineField({
      name: 'overview_id',
      title: 'Retreat Overview Text (Indonesian)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    }),

    // ── Schedule & Themes ───────────────────────────
    defineField({
      name: 'dailySchedule',
      title: 'Daily Schedule',
      description: 'Each item has a time slot and activity description in both languages.',
      type: 'array',
      group: 'schedule',
      of: [
        {
          type: 'object',
          title: 'Schedule Item',
          preview: {
            select: {
              title: 'time',
              subtitle: 'activity',
            },
          },
          fields: [
            {
              name: 'time',
              type: 'string',
              title: 'Time Slot (English) — e.g. "Dawn", "Morning"',
            },
            {
              name: 'activity',
              type: 'string',
              title: 'Activity Description (English)',
            },
            {
              name: 'activity_id',
              type: 'string',
              title: 'Activity Description (Indonesian)',
              description: 'Versi bahasa Indonesia dari deskripsi aktivitas ini.',
            },
          ],
        },
      ],
    }),

    // ── Facilitator ─────────────────────────────────
    defineField({
      name: 'facilitatorPhoto',
      title: 'Facilitator Photo (Astrid)',
      description: 'The circular portrait photo of Astrid',
      type: 'image',
      options: { hotspot: true },
      group: 'facilitator',
    }),
    defineField({
      name: 'astridBio',
      title: 'Instructor Bio — English (Astrid)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'facilitator',
    }),
    defineField({
      name: 'astridBio_id',
      title: 'Instructor Bio — Indonesian (Astrid)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'facilitator',
    }),

    // ── Pricing & Policy ────────────────────────────
    defineField({
      name: 'pricing',
      title: 'Pricing Packages',
      type: 'array',
      group: 'pricing',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'packageName', type: 'string', title: 'Package Name' },
            { name: 'price', type: 'number', title: 'Price (IDR)' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'cancellationPolicy',
      title: 'Cancellation Policy (English)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'pricing',
    }),
    defineField({
      name: 'cancellationPolicy_id',
      title: 'Cancellation Policy (Indonesian)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'pricing',
    }),

    // ── Gallery ─────────────────────────────────────
    defineField({
      name: 'images',
      title: 'Retreat Gallery (Slideshow)',
      description: 'These images appear in the auto-slideshow in the Nature & Contribution section.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'gallery',
    }),
  ],
})
