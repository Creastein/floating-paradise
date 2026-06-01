import { defineType, defineField } from 'sanity'

export const yogaRetreatType = defineType({
  name: 'yogaRetreat',
  title: 'Yoga Retreat',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Yoga Retreat',
        subtitle: 'Schedule, facilitator, and policies',
      }
    },
  },
  groups: [
    { name: 'hero', title: '🧘 Hero & Overview' },
    { name: 'gallery', title: '🖼️ Gallery' },
    { name: 'facilitator', title: '👩 Facilitator' },
    { name: 'pricing', title: '💰 Packages & Pricing' },
    { name: 'policy', title: '📋 Policies' },
  ],
  fieldsets: [
    { name: 'hero_en', title: '🇬🇧 Hero & Overview (English)', options: { collapsible: true, collapsed: false } },
    { name: 'hero_id', title: '🇮🇩 Hero & Overview (Indonesian)', options: { collapsible: true, collapsed: true } },
    
    { name: 'facilitator_en', title: '🇬🇧 Facilitator (English)', options: { collapsible: true, collapsed: false } },
    { name: 'facilitator_id', title: '🇮🇩 Facilitator (Indonesian)', options: { collapsible: true, collapsed: true } },
    
    { name: 'policy_en', title: '🇬🇧 Policies (English)', options: { collapsible: true, collapsed: false } },
    { name: 'policy_id', title: '🇮🇩 Policies (Indonesian)', options: { collapsible: true, collapsed: true } },
    
    { name: 'sunrise', title: '🌅 Sunrise Bungalow Rates', description: 'Type the price with currency symbols, using a middle dot (·) as a separator. Example: Rp 23,000,000 · £1,012 · €1,150', options: { collapsible: true, collapsed: false } },
    { name: 'sunset', title: '🌇 Sunset Bungalow Rates', description: 'Type the price with currency symbols, using a middle dot (·) as a separator.', options: { collapsible: true, collapsed: false } },
    { name: 'bayside', title: '🌊 Bayside Bungalow Rates', description: 'Type the price with currency symbols, using a middle dot (·) as a separator.', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    // ── 1. Hero & Overview ──────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      description: 'The large background image at the very top of the Yoga Retreat page (high-quality landscape recommended).',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'retreatDate',
      title: 'Retreat Date & Location (English)',
      description: 'e.g. "8–14 June 2026 · Karimunjawa"',
      type: 'string',
      group: 'hero',
      fieldset: 'hero_en',
    }),
    defineField({
      name: 'retreatDate_id',
      title: 'Retreat Date & Location (Indonesian)',
      description: 'e.g. "8–14 Juni 2026 · Karimunjawa"',
      type: 'string',
      group: 'hero',
      fieldset: 'hero_id',
    }),
    defineField({
      name: 'overview',
      title: 'Retreat Overview Text (English)',
      description: 'Introductory paragraphs describing the retreat experience.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
      fieldset: 'hero_en',
    }),
    defineField({
      name: 'overview_id',
      title: 'Retreat Overview Text (Indonesian)',
      description: 'Introductory paragraphs describing the retreat experience (Indonesian version).',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'hero',
      fieldset: 'hero_id',
    }),

    // ── 2. Gallery ──────────────────────────────────
    defineField({
      name: 'images',
      title: 'Retreat Gallery (Slideshow)',
      description: 'These images appear in the auto-slideshow. Recommended amount is 4 to 8 images (Minimum 3, Maximum 10).',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'gallery',
      validation: (Rule) => Rule.min(3).max(10).error('Please upload between 3 and 10 images for the slideshow.'),
    }),

    // ── 3. Facilitator ──────────────────────────────
    defineField({
      name: 'astridBio',
      title: 'Instructor Bio (English)',
      description: 'Biography text for the facilitator.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'facilitator',
      fieldset: 'facilitator_en',
    }),
    defineField({
      name: 'astridBio_id',
      title: 'Instructor Bio (Indonesian)',
      description: 'Biography text for the facilitator (Indonesian version).',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'facilitator',
      fieldset: 'facilitator_id',
    }),

    // ── 5. Pricing & Packages ───────────────────────
    defineField({
      name: 'priceSunrisePrivate',
      title: 'Private Rate',
      description: 'Price for 1 person (Private).',
      type: 'string',
      group: 'pricing',
      fieldset: 'sunrise',
    }),
    defineField({
      name: 'priceSunriseShared',
      title: 'Shared Double Rate',
      description: 'Price per person for shared bed (Shared). Add "pp" at the end.',
      type: 'string',
      group: 'pricing',
      fieldset: 'sunrise',
    }),
    defineField({
      name: 'priceSunriseCouple',
      title: 'Couples Rate',
      description: 'Price per person for couples (Couple). Add "pp" at the end.',
      type: 'string',
      group: 'pricing',
      fieldset: 'sunrise',
    }),

    defineField({
      name: 'priceSunsetPrivate',
      title: 'Private Rate',
      description: 'Price for 1 person (Private).',
      type: 'string',
      group: 'pricing',
      fieldset: 'sunset',
    }),
    defineField({
      name: 'priceSunsetShared',
      title: 'Shared Double Rate',
      description: 'Price per person for shared bed (Shared). Add "pp" at the end.',
      type: 'string',
      group: 'pricing',
      fieldset: 'sunset',
    }),
    defineField({
      name: 'priceSunsetCouple',
      title: 'Couples Rate',
      description: 'Price per person for couples (Couple). Add "pp" at the end.',
      type: 'string',
      group: 'pricing',
      fieldset: 'sunset',
    }),

    defineField({
      name: 'priceBaysideSharedSeparate',
      title: 'Shared Separate Beds Rate',
      description: 'Price per person for separate beds (Shared). Add "pp" at the end.',
      type: 'string',
      group: 'pricing',
      fieldset: 'bayside',
    }),
    defineField({
      name: 'priceBaysideSharedDouble',
      title: 'Shared Double Bed Rate',
      description: 'Price per person for shared bed (Shared). Add "pp" at the end.',
      type: 'string',
      group: 'pricing',
      fieldset: 'bayside',
    }),

    // ── 6. Policy ───────────────────────────────────
    defineField({
      name: 'cancellationPolicy',
      title: 'Cancellation Policy (English)',
      description: 'Rules and terms regarding cancellations.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'policy',
      fieldset: 'policy_en',
    }),
    defineField({
      name: 'cancellationPolicy_id',
      title: 'Cancellation Policy (Indonesian)',
      description: 'Cancellation rules and terms (Indonesian version).',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'policy',
      fieldset: 'policy_id',
    }),
  ],
})
