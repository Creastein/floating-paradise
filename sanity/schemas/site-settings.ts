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
      type: 'image',
      options: { hotspot: true },
      group: 'branding',
    }),

    // ── Contact ───────────────────────────────────────
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Contact Number',
      type: 'string',
      description: 'Format with country code: +62 8xx xxxx xxxx',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      rows: 3,
      group: 'contact',
    }),

    // ── Social Media ──────────────────────────────────
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'social',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform (e.g. Instagram)' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    }),

    // ── SEO ───────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Default SEO Title (English)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoTitle_id',
      title: 'Default SEO Title (Indonesian)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default SEO Description (English)',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription_id',
      title: 'Default SEO Description (Indonesian)',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'Default SEO Sharing Image',
      type: 'image',
      group: 'seo',
    }),
  ],
})
