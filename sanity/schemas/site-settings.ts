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
      title: 'WhatsApp Contact Number',
      description: 'Format with country code: +62 8xx xxxx xxxx. Used for direct message links.',
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
  ],
})
