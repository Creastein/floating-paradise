import { defineType, defineField } from 'sanity'

/**
 * Reusable FAQ item object — used in every category array.
 * Each item has bilingual question + answer fields.
 */
const faqItemFields = [
  defineField({
    name: 'question',
    title: 'Question (English)',
    type: 'string',
    validation: (Rule) => Rule.required().error('English question is required.'),
  }),
  defineField({
    name: 'question_id',
    title: 'Question (Indonesian)',
    description: 'Pertanyaan dalam bahasa Indonesia.',
    type: 'string',
  }),
  defineField({
    name: 'answer',
    title: 'Answer (English)',
    type: 'text',
    rows: 3,
    validation: (Rule) => Rule.required().error('English answer is required.'),
  }),
  defineField({
    name: 'answer_id',
    title: 'Answer (Indonesian)',
    description: 'Jawaban dalam bahasa Indonesia.',
    type: 'text',
    rows: 3,
  }),
]

/** Helper to create a FAQ array field for a specific category */
function faqCategoryField(name: string, title: string, group: string) {
  return defineField({
    name,
    title,
    type: 'array',
    group,
    of: [
      {
        type: 'object',
        fields: faqItemFields,
        preview: {
          select: { title: 'question', subtitle: 'answer' },
          prepare({ title, subtitle }) {
            return {
              title: title || 'Untitled Question',
              subtitle: subtitle
                ? subtitle.length > 80
                  ? subtitle.slice(0, 80) + '…'
                  : subtitle
                : '',
            }
          },
        },
      },
    ],
  })
}

export const faqPageType = defineType({
  name: 'faqPage',
  title: 'FAQ',
  type: 'document',
  icon: () => '❓',
  groups: [
    { name: 'accommodation', title: '🏠 Accommodation & Facilities' },
    { name: 'food', title: '🍽️ Food & Dining' },
    { name: 'booking', title: '💳 Booking & Payment' },
    { name: 'gettingHere', title: '🚗 Getting Here & Around' },
    { name: 'activities', title: '🏄 Activities & Experiences' },
  ],
  preview: {
    select: {
      accommodation: 'accommodationFaqs',
      food: 'foodFaqs',
      booking: 'bookingFaqs',
      gettingHere: 'gettingHereFaqs',
      activities: 'activitiesFaqs',
    },
    prepare({ accommodation, food, booking, gettingHere, activities }) {
      const total =
        (accommodation?.length || 0) +
        (food?.length || 0) +
        (booking?.length || 0) +
        (gettingHere?.length || 0) +
        (activities?.length || 0)
      return {
        title: 'Frequently Asked Questions',
        subtitle: `${total} questions across 5 categories`,
      }
    },
  },
  fields: [
    faqCategoryField('accommodationFaqs', 'Accommodation & Facilities', 'accommodation'),
    faqCategoryField('foodFaqs', 'Food & Dining', 'food'),
    faqCategoryField('bookingFaqs', 'Booking & Payment', 'booking'),
    faqCategoryField('gettingHereFaqs', 'Getting Here & Around', 'gettingHere'),
    faqCategoryField('activitiesFaqs', 'Activities & Experiences', 'activities'),
  ],
})
