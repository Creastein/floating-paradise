import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'branding', title: '🎨 Branding & Logo' },
    { name: 'contact', title: '📞 Contact Info' },
    { name: 'social', title: '🔗 Social Media' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    // ── Branding ──────────────────────────────────────
    defineField({
      name: 'logo',
      title: 'Site Logo',
      description: 'The logo shown in the top navigation bar and footer (clear background PNG recommended). If removed, the website will use the default logo.',
      type: 'image',
      options: { hotspot: true },
      group: 'branding',
    }),

    // ── Contact ───────────────────────────────────────
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Contact Number (Main)',
      description: 'Main business WhatsApp number used for all general inquiries, bookings, and activities. Format: 6282226945510 (country code + number, no spaces or symbols).',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'yogaRetreatWhatsapp',
      title: 'WhatsApp for Yoga Retreat',
      description: 'Separate WhatsApp number for yoga retreat inquiries (e.g. Astrid\'s personal number). If empty, falls back to the main number above. Format: 6282226945510.',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      description: 'Displayed in footer and contact sections.',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      description: 'The location of Floating Paradise. Displayed in footer and contact sections.',
      type: 'text',
      rows: 3,
      group: 'contact',
    }),

    // ── Social Media ──────────────────────────────────
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      description: 'Links to your social media profiles (e.g. Instagram URL).',
      type: 'array',
      group: 'social',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform Name (e.g. Instagram)' },
            { name: 'url', type: 'url', title: 'Profile URL' },
          ],
        },
      ],
    }),

    // ── SEO ───────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Default SEO Title (English)',
      description: 'The title that appears in Google search results and browser tabs.',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoTitle_id',
      title: 'Default SEO Title (Indonesian)',
      description: 'Judul SEO dalam bahasa Indonesia.',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default SEO Description (English)',
      description: 'Short summary of the site for search engines.',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription_id',
      title: 'Default SEO Description (Indonesian)',
      description: 'Deskripsi singkat website dalam bahasa Indonesia.',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'Default SEO Sharing Image',
      description: 'The image preview shown when sharing your website on WhatsApp, Facebook, etc. If removed, the website will use the default sharing image.',
      type: 'image',
      group: 'seo',
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      description: 'Price range for the business (e.g. "$$").',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'latitude',
      title: 'Latitude',
      description: 'Property latitude coordinate (e.g. -5.8024).',
      type: 'number',
      group: 'seo',
    }),
    defineField({
      name: 'longitude',
      title: 'Longitude',
      description: 'Property longitude coordinate (e.g. 110.4473).',
      type: 'number',
      group: 'seo',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities (English)',
      description: 'List of property amenities in English for AI search and lodging schema.',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'seo',
    }),
    defineField({
      name: 'amenities_id',
      title: 'Amenities (Indonesian)',
      description: 'Daftar fasilitas properti dalam bahasa Indonesia.',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'seo',
    }),
  ],
})
