import { defineType, defineField } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: '🏠 Hero Section' },
    { name: 'welcome', title: '👋 Welcome Section' },
    { name: 'builtByHand', title: '🔨 Built by Hand Section' },
  ],
  fields: [
    // ── Hero Section ──────────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'hero',
    }),

    // ── Welcome Section ───────────────────────────────
    defineField({
      name: 'welcomeTitle',
      title: 'Welcome Section Title',
      type: 'string',
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeText',
      title: 'Welcome Section Text',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeImage1',
      title: 'Welcome Image 1 (Large Left)',
      description: 'The big image on the left side of the gallery wall',
      type: 'image',
      options: { hotspot: true },
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeImage2',
      title: 'Welcome Image 2 (Top Right)',
      description: 'The smaller image on the top-right of the gallery wall',
      type: 'image',
      options: { hotspot: true },
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeImage3',
      title: 'Welcome Image 3 (Bottom Right)',
      description: 'The smaller image on the bottom-right of the gallery wall',
      type: 'image',
      options: { hotspot: true },
      group: 'welcome',
    }),

    // ── Built by Hand Section ─────────────────────────
    defineField({
      name: 'builtByHandTitle',
      title: 'Built by Hand Section Title',
      type: 'string',
      group: 'builtByHand',
    }),
    defineField({
      name: 'builtByHandText',
      title: 'Built by Hand Section Text',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'builtByHand',
    }),
  ]
})

