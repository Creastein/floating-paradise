import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the token is provided
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error("\n❌ Error: Please set SANITY_API_WRITE_TOKEN environment variable.");
  console.error("Run it like this:");
  console.error("  $env:SANITY_API_WRITE_TOKEN=\"your-write-token-here\"; node scripts/migrate-faq.mjs");
  process.exit(1);
}

const client = createClient({
  projectId: "aves0i7c",
  dataset: "production",
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
});

const enPath = path.join(__dirname, '../lib/i18n/translations/en.json');
const idPath = path.join(__dirname, '../lib/i18n/translations/id.json');

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8')).faq.categories;
const idData = JSON.parse(fs.readFileSync(idPath, 'utf8')).faq.categories;

function mapCategory(key) {
  const enItems = enData[key].items;
  const idItems = idData[key].items;
  
  return enItems.map((enItem, i) => {
    const idItem = idItems[i];
    return {
      _key: Math.random().toString(36).substring(2, 9),
      question: enItem.q,
      question_id: idItem ? idItem.q : '',
      answer: enItem.a,
      answer_id: idItem ? idItem.a : ''
    };
  });
}

const doc = {
  _type: 'faqPage',
  _id: 'faqPage', // Standard ID for singleton usually
  accommodationFaqs: mapCategory('accommodation'),
  foodFaqs: mapCategory('food'),
  bookingFaqs: mapCategory('booking'),
  gettingHereFaqs: mapCategory('gettingHere'),
  activitiesFaqs: mapCategory('activities'),
};

async function migrate() {
  try {
    console.log("Starting FAQ migration to Sanity...");
    const result = await client.createOrReplace(doc);
    console.log("✅ Migration successful! Document ID:", result._id);
    console.log("You can now view it in Sanity Studio.");
  } catch (err) {
    console.error("❌ Migration failed:", err.message || err);
  }
}

migrate();
