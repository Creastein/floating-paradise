import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-03-25', // Use current date for latest API version
  useCdn: true, // `false` if you want to ensure fresh data. 
  perspective: 'published',
  stega: {
    enabled: false, 
    studioUrl: '/studio', 
  },
})
