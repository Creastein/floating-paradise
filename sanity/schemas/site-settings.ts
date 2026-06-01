import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  preview: {
    select: { email: 'email' },
    prepare({ email }) {
      return {
        title: 'Site Settings',
        subtitle: email || 'Branding, contact, and social links',
      }
    },
  },
  groups: [
    { name: 'branding', title: '🎨 Branding & Logo' },
    { name: 'contact', title: '📞 Contact Info' },
    { name: 'social', title: '🔗 Social Media' },
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
      description: 'Add your social media profiles here. They will appear in the Footer and Contact page.',
      type: 'array',
      group: 'social',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TripAdvisor', value: 'tripadvisor' },
                ],
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            },
            { 
              name: 'username', 
              type: 'string', 
              title: 'Username / Display Text',
              description: 'e.g. @paradisefloating or Floating Paradise',
              validation: (Rule) => Rule.required(),
            },
            { 
              name: 'url', 
              type: 'url', 
              title: 'Profile URL',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'username',
            },
            prepare({ title, subtitle }) {
              return {
                title: title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Social Link',
                subtitle: subtitle,
              }
            }
          }
        },
      ],
    }),

  ],
})
