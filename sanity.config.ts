import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemas'

export default defineConfig({
  name: 'floating-paradise',
  title: 'Floating Paradise CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('About Page')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
              .title('Yoga Retreat')
              .child(S.document().schemaType('yogaRetreat').documentId('yogaRetreat')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['siteSettings', 'homepage', 'aboutPage', 'yogaRetreat'].includes(listItem.getId()!)
            )
          ])
    }),
    visionTool()
  ],

  schema,
})
