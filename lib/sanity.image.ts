import createImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
})

export const urlFor = (source: any) => {
  return builder.image(source)
}
