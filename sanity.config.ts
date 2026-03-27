import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemas'
import { welcomeDashboardPlugin } from './sanity/plugins/welcome-dashboard'

export default defineConfig({
  name: 'floating-paradise',
  title: 'Floating Paradise CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: '/studio',

  plugins: [
    // 1. Welcome Dashboard (added as a tool, usually appears at the top)
    welcomeDashboardPlugin(),
    
    // 2. Main Content Editor
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            S.listItem()
              .title('⚙️  Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

            S.divider(),

            // --- PAGES ---
            S.listItem()
              .title('🏠 Homepage')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),

            S.listItem()
              .title('📖 About Us')
              .id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

            S.listItem()
              .title('🧘 Yoga Retreat')
              .id('yogaRetreat')
              .child(S.document().schemaType('yogaRetreat').documentId('yogaRetreat')),

            S.divider(),

            // --- COLLECTIONS ---
            S.listItem()
              .title('🌿 Rooms & Bungalows')
              .id('bungalowList')
              .child(
                S.documentTypeList('bungalow')
                  .title('Rooms & Bungalows')
              ),

            S.listItem()
              .title('🛶 Activities & Extras')
              .id('activityList')
              .child(
                S.documentTypeList('activity')
                  .title('Activities & Extras')
              ),
          ]),
    }),
  ],

  schema,
})
