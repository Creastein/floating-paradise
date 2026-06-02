import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-03-25', // Use current date for latest API version
  // Fetch fresh published data during builds and webhook revalidation.
  // Vercel/Next.js still caches rendered pages, so this does not make every visitor hit Sanity.
  useCdn: false,
  perspective: 'published',
  stega: {
    enabled: false, 
    studioUrl: '/studio', 
  },
})
