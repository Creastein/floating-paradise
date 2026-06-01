import { defineType, defineField } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'About Us',
        subtitle: 'Founders story, mission, and values',
      }
    },
  },
  groups: [
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'founders', title: '👫 Founders Story' },
    { name: 'mission', title: '🎯 Mission Statement' },
  ],
  fieldsets: [
    { name: 'founders_en', title: '🇬🇧 English Content', options: { collapsible: true, collapsed: false } },
    { name: 'founders_id', title: '🇮🇩 Indonesian Content', options: { collapsible: true, collapsed: true } },
    { name: 'mission_en', title: '🇬🇧 English Content', options: { collapsible: true, collapsed: false } },
    { name: 'mission_id', title: '🇮🇩 Indonesian Content', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // ── Hero Section ─────────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      description:
        'The large background image at the very top of the About Us page (high-quality landscape recommended). If removed, the website will use the default image.',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),

    // ── Founders Story ──────────────────────────────
    defineField({
      name: 'storyContent',
      title: 'Story Content (English)',
      description: 'The Astrid & Tono founder story paragraphs.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'founders',
      fieldset: 'founders_en',
    }),
    defineField({
      name: 'storyContent_id',
      title: 'Story Content (Indonesian)',
      description: 'Kisah pendiri Astrid & Tono dalam bahasa Indonesia.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'founders',
      fieldset: 'founders_id',
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
      fieldset: 'mission_en',
    }),
    defineField({
      name: 'missionStatement_id',
      title: 'Mission Statement (Indonesian)',
      description: 'Kutipan misi dalam bahasa Indonesia (ditampilkan besar/miring).',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'mission',
      fieldset: 'mission_id',
    }),

  ],
})
