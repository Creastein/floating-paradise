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
        { name: 'end', type: 'date', title: 'End Date' }
      ]
    }),
    defineField({
      name: 'overview',
      title: 'Retreat Overview Text',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    }),

    // ── Schedule & Themes ───────────────────────────
    defineField({
      name: 'dailySchedule',
      title: 'Daily Schedule',
      type: 'array',
      group: 'schedule',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'time', type: 'string', title: 'Time (e.g. Dawn, Morning)' },
            { name: 'activity', type: 'string', title: 'Activity Description' }
          ]
        }
      ]
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
      title: 'Instructor Bio (Astrid)',
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
            { name: 'description', type: 'text', title: 'Description' }
          ]
        }
      ]
    }),
    defineField({
      name: 'cancellationPolicy',
      title: 'Cancellation Policy',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'pricing',
    }),

    // ── Gallery ─────────────────────────────────────
    defineField({
      name: 'images',
      title: 'Retreat Gallery (Slideshow)',
      description: 'These images appear in the auto-slideshow in the Nature & Contribution section',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'gallery',
    })
  ]
})

