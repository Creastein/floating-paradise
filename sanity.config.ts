import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemas'
import { welcomeDashboardPlugin } from './sanity/plugins/welcome-dashboard'

export default defineConfig({
  name: 'floating-paradise',
  title: 'Floating Paradise CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'aves0i7c',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

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

            // --- PAGES & COLLECTIONS (Ordered by website navigation) ---
            S.listItem()
              .title('🏠 Homepage')
              .id('homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),

            S.listItem()
              .title('🌿 Rooms & Bungalows')
              .id('roomsBungalows')
              .child(
                S.list()
                  .title('Rooms & Bungalows')
                  .items([
                    S.listItem()
                      .title('Page Settings')
                      .id('bungalowsPage')
                      .child(S.document().schemaType('bungalowsPage').documentId('bungalowsPage')),

                    S.divider(),

                    S.documentTypeListItem('bungalow')
                      .title('Bungalow Rooms'),
                  ])
              ),

            S.documentTypeListItem('activity')
              .title('🛶 Explore'),

            S.listItem()
              .title('🧘 Yoga Retreat')
              .id('yogaRetreat')
              .child(S.document().schemaType('yogaRetreat').documentId('yogaRetreat')),

            S.listItem()
              .title('Getting Here')
              .id('gettingHerePage')
              .child(S.document().schemaType('gettingHerePage').documentId('gettingHerePage')),

            S.listItem()
              .title('📖 About Us')
              .id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

            S.listItem()
              .title('❓ FAQ')
              .id('faqPage')
              .child(S.document().schemaType('faqPage').documentId('faqPage')),
          ]),
    }),
  ],

  schema,
})
