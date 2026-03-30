import { client } from './sanity.client'
import {
  siteSettingsQuery,
  homepageQuery,
  explorePageQuery,
  gettingHerePageQuery,
  bungalowsPageQuery,
  bungalowsQuery,
  activitiesQuery,
  yogaRetreatQuery,
  aboutPageQuery
} from './sanity.queries'

// Types for better inference handling
type FetchResult<T> = { source: 'cms' | 'local', data: T | null }

// Global fetch options: Instant refresh in development, ISR in production
const fetchOptions = process.env.NODE_ENV === 'development' 
  ? { cache: 'no-store' as RequestCache } 
  : { next: { revalidate: 60 } }

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

export async function getExplorePage(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(explorePageQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (Explore Page):", error)
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

export async function getBungalowsPage(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(bungalowsPageQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (Bungalows Page):", error)
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

export async function getAboutPage(): Promise<FetchResult<any>> {
  try {
    const data = await client.fetch(aboutPageQuery, {}, fetchOptions)
    if (data) return { source: 'cms', data }
  } catch (error) {
    console.error("Sanity fetch error (About Page):", error)
  }
  return { source: 'local', data: null }
}
