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
      title: 'Hero Title (English)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitle_id',
      title: 'Hero Title (Indonesian)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle (English)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle_id',
      title: 'Hero Subtitle (Indonesian)',
      type: 'string',
      group: 'hero',
    }),

    // ── Welcome Section ───────────────────────────────
    defineField({
      name: 'welcomeTitle',
      title: 'Welcome Section Title (English)',
      type: 'string',
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeTitle_id',
      title: 'Welcome Section Title (Indonesian)',
      type: 'string',
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeText',
      title: 'Welcome Section Text (English)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'welcome',
    }),
    defineField({
      name: 'welcomeText_id',
      title: 'Welcome Section Text (Indonesian)',
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
      title: 'Built by Hand Section Title (English)',
      type: 'string',
      group: 'builtByHand',
    }),
    defineField({
      name: 'builtByHandTitle_id',
      title: 'Built by Hand Section Title (Indonesian)',
      type: 'string',
      group: 'builtByHand',
    }),
    defineField({
      name: 'builtByHandText',
      title: 'Built by Hand Section Text (English)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'builtByHand',
    }),
    defineField({
      name: 'builtByHandText_id',
      title: 'Built by Hand Section Text (Indonesian)',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'builtByHand',
    }),
  ],
})
