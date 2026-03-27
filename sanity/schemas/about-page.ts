import { defineType, defineField } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    { name: 'founders', title: '👫 Founders Story' },
    { name: 'mission', title: '🎯 Mission Statement' },
  ],
  fields: [
    // ── Founders Story ──────────────────────────────
    defineField({
      name: 'storyContent',
      title: 'Story Content (English)',
      description: 'The Astrid & Tono founder story paragraphs.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'founders',
    }),
    defineField({
      name: 'storyContent_id',
      title: 'Story Content (Indonesian)',
      description: 'Kisah pendiri Astrid & Tono dalam bahasa Indonesia.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'founders',
    }),
    defineField({
      name: 'foundersPhoto',
      title: 'Founders Photo (Astrid & Tono)',
      description: 'The photo shown next to the founder story. If removed, the website will use the default photo.',
      type: 'image',
      options: { hotspot: true },
      group: 'founders',
    }),

    // ── Mission Statement ───────────────────────────
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement (English)',
      description: 'The italic quote displayed large in the mission section.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'mission',
    }),
    defineField({
      name: 'missionStatement_id',
      title: 'Mission Statement (Indonesian)',
      description: 'Kutipan misi dalam bahasa Indonesia (ditampilkan besar/miring).',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'mission',
    }),

  ],
})
