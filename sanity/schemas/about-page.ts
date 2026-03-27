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
      title: 'Story Title (English)',
      type: 'string',
      group: 'founders',
    }),
    defineField({
      name: 'storyTitle_id',
      title: 'Story Title (Indonesian)',
      type: 'string',
      group: 'founders',
    }),
    defineField({
      name: 'storyContent',
      title: 'Story Content (English)',
      description: 'The Astrid & Tono founder story paragraphs',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'founders',
    }),
    defineField({
      name: 'storyContent_id',
      title: 'Story Content (Indonesian)',
      description: 'Kisah pendiri Astrid & Tono dalam bahasa Indonesia',
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
      title: 'Mission Statement (English)',
      description: 'The italic quote displayed in the mission section',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'mission',
    }),
    defineField({
      name: 'missionStatement_id',
      title: 'Mission Statement (Indonesian)',
      description: 'Kutipan misi dalam bahasa Indonesia',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'mission',
    }),

    // ── Gallery ─────────────────────────────────────
    defineField({
      name: 'images',
      title: 'Gallery / Past Build Photos',
      description: 'Photos shown in the About page gallery section.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'gallery',
    }),
  ],
})
