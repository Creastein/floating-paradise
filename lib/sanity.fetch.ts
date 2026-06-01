import { client } from './sanity.client'
import {
  siteSettingsQuery,
  homepageQuery,

  bungalowsQuery,
  activitiesQuery,
  yogaRetreatQuery,
  gettingHerePageQuery,
  aboutPageQuery,
  faqPageQuery,
} from './sanity.queries'

// Types for better inference handling
type FetchResult<T> = { source: 'cms' | 'local', data: T | null }

// Global fetch options: Instant refresh in development, ISR in production
const fetchOptions = process.env.NODE_ENV === 'development' 
  ? { cache: 'no-store' as RequestCache } 
  : { next: { revalidate: 3600 } } // Revalidate every 1 hour

export async function getSiteSettings(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(siteSettingsQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (Site Settings):", error)
  }
  return { source: 'local', data: null }
}

export async function getHomepage(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(homepageQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (Homepage):", error)
  }
  return { source: 'local', data: null }
}


export async function getBungalows(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(bungalowsQuery, {}, fetchOptions)
    if (data?.length) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (Bungalows):", error)
  }
  return { source: 'local', data: null }
}

export async function getActivities(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(activitiesQuery, {}, fetchOptions)
    if (data?.length) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (Activities):", error)
  }
  return { source: 'local', data: null }
}

export async function getYogaRetreat(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(yogaRetreatQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (Yoga Retreat):", error)
  }
  return { source: 'local', data: null }
}

export async function getGettingHerePage(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(gettingHerePageQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (Getting Here Page):", error)
  }
  return { source: 'local', data: null }
}

export async function getAboutPage(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(aboutPageQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (About Page):", error)
  }
  return { source: 'local', data: null }
}

export async function getFaqPage(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(faqPageQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (FAQ Page):", error)
  }
  return { source: 'local', data: null }
}
