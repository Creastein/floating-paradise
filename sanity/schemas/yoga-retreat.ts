import { defineType, defineField } from 'sanity'

export const yogaRetreatType = defineType({
  name: 'yogaRetreat',
  title: 'Yoga Retreat',
  type: 'document',
  groups: [
    { name: 'hero', title: '🧘 Overview' },
    { name: 'schedule', title: '📅 Schedule & Themes' },
    { name: 'facilitator', title: '👩 Facilitator (Astrid)' },
    { name: 'policy', title: '📋 Policy' },
    { name: 'gallery', title: '🖼️ Gallery' },
  ],
  fields: [
    // ── Overview ────────────────────────────────────

    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      description:
        'The large background image at the very top of the Yoga Retreat page (high-quality landscape recommended). If removed, the website will use the default image.',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),

    defineField({
      name: 'overview',
      title: 'Retreat Overview Text (English)',
      description: 'Introductory paragraphs describing the retreat experience.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    }),
    defineField({
      name: 'overview_id',
      title: 'Retreat Overview Text (Indonesian)',
      description: 'Paragraf pengantar yang menjelaskan pengalaman retreat.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
    }),

    // ── Schedule & Themes ───────────────────────────
    defineField({
      name: 'dailySchedule',
      title: 'Daily Schedule',
      description: 'List of daily activities with time slots and descriptions in both languages.',
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
      name: 'astridBio',
      title: 'Instructor Bio — English (Astrid)',
      description: 'Biography text for Astrid.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'facilitator',
    }),
    defineField({
      name: 'astridBio_id',
      title: 'Instructor Bio — Indonesian (Astrid)',
      description: 'Teks biografi untuk Astrid dalam bahasa Indonesia.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'facilitator',
    }),

    // ── Policy ───────────────────────────────────────
    defineField({
      name: 'cancellationPolicy',
      title: 'Cancellation Policy (English)',
      description: 'Rules and terms regarding cancellations.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'policy',
    }),
    defineField({
      name: 'cancellationPolicy_id',
      title: 'Cancellation Policy (Indonesian)',
      description: 'Kebijakan pembatalan dalam bahasa Indonesia.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'policy',
    }),

    // ── Gallery ─────────────────────────────────────
    defineField({
      name: 'images',
      title: 'Retreat Gallery (Slideshow)',
      description: 'These images appear in the auto-slideshow at the bottom of the page. If removed, the website will use the default gallery images.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'gallery',
    }),
  ],
})
