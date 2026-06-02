import { defineType, defineField } from 'sanity'

const galleryLimitNotes =
  'Leave empty to use the default website gallery. Maximum images: Private Eco Boat Tour 8, Open Air Sunset Yoga 8, Kayak, Lunch & Chill 6, Trekking Nyamplungan 5, Tastes of Paradise 5, Turtle Sanctuary 4, Floating Merchandise 1.'

const getDocumentSlug = (document: Record<string, unknown> | undefined) => {
  const slugField = document?.slug

  return slugField && typeof slugField === 'object' && 'current' in slugField
    ? String((slugField as { current?: unknown }).current ?? '').toLowerCase()
    : ''
}

const getDocumentName = (document: Record<string, unknown> | undefined) =>
  typeof document?.name === 'string' ? document.name.toLowerCase().trim() : ''

const getGalleryImageLimit = (document: Record<string, unknown> | undefined) => {
  const slug = getDocumentSlug(document)
  const name = getDocumentName(document)

  if (slug === 'merchandise' || slug === 'floating-merchandise' || name.includes('merchandise')) return 1
  if (slug === 'turtles' || slug === 'turtle-sanctuary' || name.includes('turtle')) return 4
  if (slug === 'trekking' || slug === 'trekking-nyamplungan' || name.includes('trek')) return 5
  if (slug === 'cuisine' || slug === 'tastes-of-paradise' || name.includes('taste')) return 5
  if (slug === 'kayaking' || slug === 'kayak-lunch-and-chill' || name.includes('kayak')) return 6
  if (slug === 'boat-tour' || slug === 'private-eco-boat-tour' || name.includes('boat')) return 8
  if (slug === 'sunset-yoga' || name.includes('yoga') || name.includes('sunset')) return 8

  return 8
}

const isFloatingMerchandise = (document: Record<string, unknown> | undefined) => {
  const slug = getDocumentSlug(document)
  const name = getDocumentName(document)
  const id = typeof document?._id === 'string' ? document._id.replace(/^drafts\./, '').toLowerCase() : ''

  return (
    slug === 'merchandise' ||
    slug === 'floating-merchandise' ||
    id === 'merchandise' ||
    id === 'floating-merchandise' ||
    name.includes('merchandise')
  )
}

const isBookableExploreItem = (document: Record<string, unknown> | undefined) => {
  const slug = getDocumentSlug(document)
  const name = getDocumentName(document)

  return (
    slug === 'boat-tour' ||
    slug === 'private-eco-boat-tour' ||
    slug === 'kayaking' ||
    slug === 'kayak-lunch-and-chill' ||
    slug === 'trekking' ||
    slug === 'trekking-nyamplungan' ||
    name.includes('boat') ||
    name.includes('kayak') ||
    name.includes('trek')
  )
}

export const activityType = defineType({
  name: 'activity',
  title: 'Explore',
  type: 'document',
  fieldsets: [
    { name: 'content_en', title: '🇬🇧 English Content', options: { collapsible: true, collapsed: false } },
    { name: 'content_id', title: '🇮🇩 Indonesian Content', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Explore Item Name (English)',
      description: 'Used to identify this Explore item in the CMS. Website content still falls back to the hardcoded default when description and images are empty.',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'URL identifier. Match standard keys: boat-tour, sunset-yoga, kayaking, trekking, cuisine, turtles, merchandise.',
      type: 'slug',
      options: { source: 'name' },
      readOnly: ({ document }) => {
        const slugField = document?.slug
        return Boolean(
          slugField &&
            typeof slugField === 'object' &&
            'current' in slugField &&
            slugField.current
        )
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      description: 'Optional main image. Leave empty to use the default website image.',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Explore Item Description (English)',
      description: 'Optional. Leave empty to use the hardcoded default English text.',
      type: 'array',
      of: [{ type: 'block' }],
      fieldset: 'content_en',
    }),
    defineField({
      name: 'description_id',
      title: 'Explore Item Description (Indonesian)',
      description: 'Opsional. Kosongkan untuk memakai teks default Bahasa Indonesia dari website.',
      type: 'array',
      of: [{ type: 'block' }],
      fieldset: 'content_id',
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      description: galleryLimitNotes,
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) =>
        Rule.custom((gallery, context) => {
          const maxImages = getGalleryImageLimit(context.document as Record<string, unknown> | undefined)

          if (!Array.isArray(gallery) || gallery.length <= maxImages) return true

          return `Maximum ${maxImages} images for this activity. Leave the gallery empty to use the default website images.`
        }),
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Booking Number',
      description:
        'Optional. Used for this Explore item booking button. Format: 6281326008111. If empty, the website uses the default activity number.',
      type: 'string',
      hidden: ({ document }) => !isBookableExploreItem(document),
    }),
    defineField({
      name: 'whatsappCtaText',
      title: 'WhatsApp Button Text (English)',
      description: 'Optional. Leave empty to use "Book via WhatsApp".',
      type: 'string',
      hidden: ({ document }) => !isBookableExploreItem(document),
    }),
    defineField({
      name: 'whatsappCtaText_id',
      title: 'WhatsApp Button Text (Indonesian)',
      description: 'Opsional. Kosongkan untuk memakai "Pesan via WhatsApp".',
      type: 'string',
      hidden: ({ document }) => !isBookableExploreItem(document),
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'WhatsApp Message (English)',
      description: 'Optional pre-filled message sent when visitors click the booking button.',
      type: 'text',
      rows: 3,
      hidden: ({ document }) => !isBookableExploreItem(document),
    }),
    defineField({
      name: 'whatsappMessage_id',
      title: 'WhatsApp Message (Indonesian)',
      description: 'Opsional. Pesan otomatis saat pengunjung menekan tombol booking.',
      type: 'text',
      rows: 3,
      hidden: ({ document }) => !isBookableExploreItem(document),
    }),
    defineField({
      name: 'priceDetail',
      title: 'Starting Price Detail (English)',
      description: 'Optional. Price details displayed under description (e.g. "Rp 180,000 · Sizes S–XXL" or "Rp 350,000 per person · Pre-booking required").',
      type: 'string',
      fieldset: 'content_en',
      hidden: ({ document }) => !isFloatingMerchandise(document),
    }),
    defineField({
      name: 'priceDetail_id',
      title: 'Starting Price Detail (Indonesian)',
      description: 'Opsional. Detail harga dalam Bahasa Indonesia (contoh: "Rp 180.000 · Ukuran S–XXL").',
      type: 'string',
      fieldset: 'content_id',
      hidden: ({ document }) => !isFloatingMerchandise(document),
    }),
  ],
})
