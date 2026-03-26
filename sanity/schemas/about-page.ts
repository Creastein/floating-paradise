import { defineType, defineField } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    { name: 'founders', title: '👫 Founders Story' },
    { name: 'mission', title: '🎯 Mission Statement' },
    { name: 'gallery', title: '🖼️ Gallery' },
  ],
  fields: [
    // ── Founders Story ──────────────────────────────
    defineField({
      name: 'storyTitle',
      title: 'Story Title',
      type: 'string',
      group: 'founders',
    }),
    defineField({
      name: 'storyContent',
      title: 'Story Content',
      description: 'The Astrid & Tono founder story paragraphs',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'founders',
    }),
    defineField({
      name: 'foundersPhoto',
      title: 'Founders Photo (Astrid & Tono)',
      description: 'The photo shown next to the founder story',
      type: 'image',
      options: { hotspot: true },
      group: 'founders',
    }),

    // ── Mission Statement ───────────────────────────
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      description: 'The italic quote displayed in the mission section',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'mission',
    }),

    // ── Gallery ─────────────────────────────────────
    defineField({
      name: 'images',
      title: 'Gallery / Past Build Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'gallery',
    })
  ]
})

