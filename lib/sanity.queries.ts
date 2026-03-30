import { defineQuery } from 'next-sanity'

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]
`)

export const homepageQuery = defineQuery(`
  *[_type == "homepage"][0]
`)

export const explorePageQuery = defineQuery(`
  *[_type == "explorePage"][0]
`)

export const gettingHerePageQuery = defineQuery(`
  *[_type == "gettingHerePage"][0]
`)

export const bungalowsPageQuery = defineQuery(`
  *[_type == "bungalowsPage"][0]
`)

export const bungalowsQuery = defineQuery(`
  *[_type == "bungalow"] | order(name asc)
`)

export const activitiesQuery = defineQuery(`
  *[_type == "activity"] | order(price asc)
`)

export const yogaRetreatQuery = defineQuery(`
  *[_type == "yogaRetreat"][0] {
    ...,
    "images": images[].asset->url
  }
`)

export const aboutPageQuery = defineQuery(`
  *[_type == "aboutPage"][0] {
    ...,
    "foundersPhoto": foundersPhoto.asset->url
  }
`)
